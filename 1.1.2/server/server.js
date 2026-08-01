// ========== 识字系统同步服务端 v1.1.2 ==========
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'hanzi-sync-secret-key-v1.1.2';
const DB_FILE = path.join(__dirname, 'database.json');
const VERSION_FILE = path.join(__dirname, '..', 'version.json');

// 读取前端版本号（version.json 为唯一来源）
function getAppVersion() {
    try {
        const v = JSON.parse(fs.readFileSync(VERSION_FILE, 'utf8'));
        return v.version || '0.0.0';
    } catch {
        return '0.0.0';
    }
}

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// ========== JSON 文件数据库 ==========
function loadDB() {
    try { return JSON.parse(fs.readFileSync(DB_FILE, 'utf8')); }
    catch { return { users: {}, syncData: {} }; }
}
function saveDB(db) {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2), 'utf8');
}

// ========== JWT 认证中间件 ==========
function authMiddleware(req, res, next) {
    const token = req.headers.authorization && req.headers.authorization.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: '未登录' });
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.username = decoded.username;
        next();
    } catch {
        res.status(401).json({ error: '登录已过期，请重新登录' });
    }
}

// ========== 注册 ==========
app.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
    if (username.length < 2 || username.length > 20) return res.status(400).json({ error: '用户名长度需 2-20 字符' });
    if (password.length < 6) return res.status(400).json({ error: '密码至少 6 位' });
    const db = loadDB();
    if (db.users[username]) return res.status(409).json({ error: '该用户名已被注册' });
    const hashed = bcrypt.hashSync(password, 10);
    db.users[username] = { password: hashed, createdAt: Date.now() };
    db.syncData[username] = { charsData: {}, quizHistory: [], customGroups: {}, syncedAt: 0 };
    saveDB(db);
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, username, message: '注册成功' });
});

// ========== 登录 ==========
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: '用户名和密码不能为空' });
    const db = loadDB();
    const user = db.users[username];
    if (!user) return res.status(404).json({ error: '用户不存在' });
    if (!bcrypt.compareSync(password, user.password)) return res.status(401).json({ error: '密码错误' });
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, username, message: '登录成功' });
});

// ========== 数据合并核心逻辑 ==========
function mergeCharsData(local, remote) {
    const merged = {};
    const all = new Set([].concat(Object.keys(local || {}), Object.keys(remote || {})));
    all.forEach(c => {
        const l = local[c] || { correct: 0, wrong: 0, streak: 0, lastTested: 0 };
        const r = remote[c] || { correct: 0, wrong: 0, streak: 0, lastTested: 0 };
        merged[c] = {
            correct: Math.max(l.correct || 0, r.correct || 0),
            wrong: Math.max(l.wrong || 0, r.wrong || 0),
            streak: Math.max(l.streak || 0, r.streak || 0),
            lastTested: Math.max(l.lastTested || 0, r.lastTested || 0)
        };
    });
    return merged;
}
function mergeQuizHistory(local, remote) {
    const map = new Map();
    [].concat(local || [], remote || []).forEach(r => {
        if (r && r.id) map.set(r.id, r);
    });
    return Array.from(map.values()).sort((a, b) => (a.startTime || 0) - (b.startTime || 0));
}
function mergeCustomGroups(local, remote) {
    const merged = {};
    const all = new Set([].concat(Object.keys(local || {}), Object.keys(remote || {})));
    all.forEach(id => {
        const l = local[id], r = remote[id];
        if (l && r) {
            const lT = Math.max(l.updatedAt || 0, l.createdAt || 0);
            const rT = Math.max(r.updatedAt || 0, r.createdAt || 0);
            merged[id] = lT >= rT ? l : r;
        } else { merged[id] = l || r; }
    });
    return merged;
}

// ========== 上传同步（服务端合并）==========
app.post('/api/sync', authMiddleware, (req, res) => {
    const { charsData, quizHistory, customGroups } = req.body;
    const db = loadDB();
    const remote = db.syncData[req.username] || { charsData: {}, quizHistory: [], customGroups: {}, syncedAt: 0 };
    const merged = {
        charsData: mergeCharsData(charsData, remote.charsData),
        quizHistory: mergeQuizHistory(quizHistory, remote.quizHistory),
        customGroups: mergeCustomGroups(customGroups, remote.customGroups),
        syncedAt: Date.now()
    };
    db.syncData[req.username] = merged;
    saveDB(db);
    res.json({ ok: true, syncedAt: merged.syncedAt, data: merged });
});

// ========== 下载同步数据 ==========
app.get('/api/sync', authMiddleware, (req, res) => {
    const db = loadDB();
    const data = db.syncData[req.username];
    if (!data) return res.json({ charsData: {}, quizHistory: [], customGroups: {}, syncedAt: 0 });
    res.json(data);
});

// ========== 托管前端静态文件 ==========
// 服务器同时提供前端页面，手机浏览器访问 http://电脑IP:3001 即可打开应用
const FRONTEND_DIR = path.join(__dirname, '..');
// no-cache = 允许缓存但每次使用前必须向服务器校验（配合 ETag）
// 未改动返回 304（极快），改动返回 200（新内容），保证页面内更新能拉到最新文件
app.use(express.static(FRONTEND_DIR, {
    etag: true,
    lastModified: true,
    setHeaders: function(res, filepath) {
        res.setHeader('Cache-Control', 'no-cache');
    }
}));
// 根路径返回首页
app.get('/', (req, res) => {
    res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

// ========== 版本检查（前端据此发现新版本）==========
app.get('/api/version', (req, res) => {
    let updatedAt = 0;
    try { updatedAt = fs.statSync(VERSION_FILE).mtimeMs; } catch {}
    res.json({ version: getAppVersion(), updatedAt: updatedAt });
});

// ========== 健康检查 ==========
app.get('/api/health', (req, res) => res.json({ ok: true, version: getAppVersion() }));

app.listen(PORT, () => {
    console.log('识字系统同步服务已启动: http://localhost:' + PORT);
    console.log('API: register / login / sync(POST) / sync(GET) / health');
});