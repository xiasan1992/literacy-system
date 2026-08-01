// 预设汉字集
const presets = {
    xiaoyang: "一 二 三 四 五 六 七 八 九 十 两 只 头 又 了 不 大 小 上 下 多 少 白 天 云 山 太 阳 月 亮 星 马 牛 羊 兔 虫 鸟 花 草 树 地 吃 看 走 笑 来 飞 爱 是 跑 跳 高 兴 快 乐 好 的 爸 妈 我",
    xiaoyang2: "人 儿 子 口 几 个 中 牙 门 手 心 什 么 开 可 回 出 去 里 床 车 家 爷 奶 你 水 饭 有 找 坐 听 玩 哭 起 喝 到 河 海 风 雨 雪 春 夏 秋 冬 鱼 狼 猫 狗 蝴 蝶 蜜 蜂 睡 红 蓝 绿 美 丽",
    xiaoyang3: "木 王 日 百 千 万 公 主 生 长 见 女 在 早 叶 森 林 书 画 学 习 对 没 老 师 他 们 前 后 哥 姐 弟 妹 国 衣 服 幼 园 校 爬 藏 说 觉 打 写 做 穿 要 想 黄 黑 很 再 把 和 得 着 方 直 竹",
    xiaoyang4: "土 火 光 力 气 午 发 电 宝 贝 自 己 身 今 年 岁 米 面 包 瓜 果 点 字 话 机 船 菜 孩 为 比 会 站 行 叫 过 关 喜 欢 怕 给 跟 进 干 杯 青 明 晚 真 饱 错 东 西 外 每 这 她 也 还 以 呢",
    xiaoyang5: "工 方 文 本 石 金 朋 友 叔 娃 婆 医 耳 眼 睛 蛙 鸡 鸭 苹 桃 球 笔 灯 语 课 歌 声 音 边 时 体 样 分 问 变 成 用 加 买 当 动 作 住 放 读 转 唱 停 游 数 像 反 正 同 空 新 片 半 朵 条 北 南 那 谁 才 更 都 从 向 就 辫 布 猜 层 低 第 掉 翻 环 救",
    xiaoyang6: "皮 毛 目 田 尺 业 句 台 众 江 伞 肉 第 名 色 足 肚 乌 鸦 蝌 蚪 尾 巴 芽 杏 柳 莲 步 诗 词 桥 洞 影 院 彩 旗 种 棋 桌 昨 夜 梦 候 班 路 物 雷 办 法 采 升 闪 挂 活 许 参 练 算 念 摇 摘 落 无 全 久 近 远 冷 热 暖 短 最 难 处 群 左 右 旁 它 呀",
    basic: "一 二 三 四 五 六 七 八 九 十",
    nature: "日 月 水 火 山 石 田 土 风 雨",
    body: "人 口 手 足 目 耳 头 发 心 牙",
    family: "爸 妈 爷 奶 哥 姐 弟 妹 叔 婶",
    animals: "猫 狗 鸡 鸭 鱼 牛 马 羊 虎 龙",
    colors: "红 黄 蓝 绿 白 黑 大 小 多 少"
};

// 数据状态
let charsData = JSON.parse(localStorage.getItem('charsData')) || {};
let currentQuizList = [];
let originalQuizList = []; // 保存最开始的乱序列表，便于再测一次
let currentIdx = 0;
let quizResult = { correct: 0, wrong: 0 };
let isReviewMode = false;
let quizStartTime = 0; // 新增：记录测试开始时间

// DOM元素缓存
const DOMElements = {
    pages: document.querySelectorAll('.page'),
    navBtns: document.querySelectorAll('.nav-btn'),
    
    // Home
    charInput: document.getElementById('char-input'),
    btnStartQuiz: document.getElementById('btn-start-quiz'),
    btnReviewSpecific: document.getElementById('btn-review-specific'),
    btnAutoRecommend: document.getElementById('btn-auto-recommend'), // 新增
    btnLoadPreset: document.getElementById('btn-load-preset'),
    presetPanel: document.getElementById('preset-panel'),
    presetBtns: document.querySelectorAll('.preset-btn'),
    
    // Quiz & Review
    quizProgress: document.getElementById('quiz-progress'),
    quizProgressText: document.getElementById('quiz-progress-text'),
    charDisplay: document.getElementById('char-display'),
    charDisplayArea: document.getElementById('char-display-area'),
    charCorrectCount: document.getElementById('char-correct-count'),
    charWrongCount: document.getElementById('char-wrong-count'),
    btnCorrect: document.getElementById('btn-correct'),
    btnWrong: document.getElementById('btn-wrong'),

    revProgress: document.getElementById('review-progress'),
    revProgressText: document.getElementById('review-progress-text'),
    revDisplay: document.getElementById('review-char-display'),
    revDisplayArea: document.getElementById('review-display-area'),
    revCorrectCount: document.getElementById('review-correct-count'),
    revWrongCount: document.getElementById('review-wrong-count'),
    btnRevCorrect: document.getElementById('btn-review-correct'),
    btnRevWrong: document.getElementById('btn-review-wrong'),
    noWrongChars: document.getElementById('no-wrong-chars'),
    reviewContent: document.getElementById('review-content'),
    
    // Stats
    totalLearned: document.getElementById('total-learned'),
    totalCorrectScore: document.getElementById('total-correct'),
    totalWrongScore: document.getElementById('total-wrong'),
    accuracyRate: document.getElementById('accuracy-rate'),
    statsGrid: document.getElementById('char-stats-grid'),
    statsEmpty: document.getElementById('stats-empty'),
    filterBtns: document.querySelectorAll('.filter-btn'),
    
    // Modals
    quizCompleteModal: document.getElementById('quiz-complete-modal'),
    modalCorrect: document.getElementById('modal-correct'),
    modalWrong: document.getElementById('modal-wrong'),
    modalAccuracy: document.getElementById('modal-accuracy'),
    modalTime: document.getElementById('modal-time'), // 新增
    btnModalReview: document.getElementById('btn-modal-review'),
    btnModalRetry: document.getElementById('btn-modal-retry'),
    btnModalHome: document.getElementById('btn-modal-home'),
    
    clearConfirmModal: document.getElementById('clear-confirm-modal'),
    btnCancelClear: document.getElementById('btn-cancel-clear'),
    btnConfirmClear: document.getElementById('btn-confirm-clear')
};

// 初始化
function init() {
    bindEvents();
    updateHomeStats();
    updatePresetUI();
    initParticleBackground();
}

// 绑定事件
function bindEvents() {
    // 导航
    DOMElements.navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchPage(btn.dataset.page));
    });

    // 预设面板切换
    DOMElements.btnLoadPreset.addEventListener('click', () => {
        DOMElements.presetPanel.classList.toggle('hidden');
    });

    // 选择预设
    DOMElements.presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetId = btn.dataset.preset;
            DOMElements.charInput.value = presets[presetId];
            DOMElements.presetPanel.classList.add('hidden');
        });
    });

    // 开始测试
    DOMElements.btnStartQuiz.addEventListener('click', startQuiz);
    DOMElements.btnReviewSpecific.addEventListener('click', startSpecificReview);

    // 新增：智能推荐历史错字
    DOMElements.btnAutoRecommend.addEventListener('click', () => {
        const unmastered = Object.keys(charsData).filter(char => 
            !isMastered(char) && charsData[char].wrong > 0
        );
        
        if (unmastered.length === 0) {
            alert("太棒了！当前没有任何历史错字需要复习。");
            return;
        }
        
        // 推荐算法：按错误次数从高到低排序
        unmastered.sort((a, b) => charsData[b].wrong - charsData[a].wrong);
        
        // 截取前 30 个最易错的字填入输入框
        const recommendList = unmastered.slice(0, 30);
        DOMElements.charInput.value = recommendList.join(' ');
        alert(`已为您自动填入 ${recommendList.length} 个历史高频错字，点击“开始测试”即可复习！`);
    });

    // 答题按钮
    DOMElements.btnCorrect.addEventListener('click', () => handleAnswer(true));
    DOMElements.btnWrong.addEventListener('click', () => handleAnswer(false));
    DOMElements.btnRevCorrect.addEventListener('click', () => handleAnswer(true));
    DOMElements.btnRevWrong.addEventListener('click', () => handleAnswer(false));

    // 模态框按钮
    DOMElements.btnModalHome.addEventListener('click', () => {
        hideModal(DOMElements.quizCompleteModal);
        switchPage('home');
    });
    DOMElements.btnModalRetry.addEventListener('click', () => {
        hideModal(DOMElements.quizCompleteModal);
        retryQuiz();
    });
    DOMElements.btnModalReview.addEventListener('click', () => {
        hideModal(DOMElements.quizCompleteModal);
        startReview();
    });

    // 统计和清除
    DOMElements.filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filter = e.target.dataset.filter;
            if (filter === 'clear') {
                showModal(DOMElements.clearConfirmModal);
            } else {
                DOMElements.filterBtns.forEach(b => {
                    if (b.dataset.filter !== 'clear') b.classList.remove('active');
                });
                e.target.classList.add('active');
                renderStatsGrid(filter);
            }
        });
    });

    DOMElements.btnCancelClear.addEventListener('click', () => hideModal(DOMElements.clearConfirmModal));
    DOMElements.btnConfirmClear.addEventListener('click', () => {
        charsData = {};
        saveData();
        hideModal(DOMElements.clearConfirmModal);
        updateHomeStats();
        renderStatsGrid('all');
    });
}

// 页面切换
function switchPage(pageId) {
    if (pageId === 'quiz') {
        if (currentQuizList.length === 0) {
            alert('请先在首页输入汉字并开始测试哦！');
            pageId = 'home';
        }
    } else if (pageId === 'review') {
        startReview();
    } else if (pageId === 'stats') {
        renderStatsGrid('all');
        DOMElements.filterBtns.forEach(b => {
            if (b.dataset.filter !== 'clear') {
                b.classList.toggle('active', b.dataset.filter === 'all');
            }
        });
    }

    DOMElements.pages.forEach(p => p.classList.remove('active'));
    DOMElements.navBtns.forEach(b => b.classList.remove('active'));

    document.getElementById(`page-${pageId}`).classList.add('active');
    document.getElementById(`nav-${pageId}`).classList.add('active');
}
window.switchPage = switchPage;

// ========== 核心逻辑 ==========

function parseChars(input) {
    const chars = input.replace(/[^\u4e00-\u9fa5]/g, '');
    const set = new Set(chars.split(''));
    return Array.from(set);
}

function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startQuiz() {
    const input = DOMElements.charInput.value;
    const chars = parseChars(input);
    if (chars.length === 0) {
        alert("请输入至少一个有效的汉字！");
        return;
    }

    chars.forEach(char => {
        if (!charsData[char]) {
            charsData[char] = { correct: 0, wrong: 0, streak: 0 };
        } else if (charsData[char].streak === undefined) {
            charsData[char].streak = 0;
        }
    });
    saveData();

    const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || 'random';
    originalQuizList = orderMode === 'random' ? shuffleArray(chars) : [...chars];
    currentQuizList = [...originalQuizList];
    currentIdx = 0;
    quizResult = { correct: 0, wrong: 0 };
    isReviewMode = false;

    quizStartTime = Date.now(); // 记录开始时间
    switchPage('quiz');
    showCurrentChar();
}

function retryQuiz() {
    if (originalQuizList.length === 0) return;
    const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || 'random';
    currentQuizList = orderMode === 'random' ? shuffleArray([...originalQuizList]) : [...originalQuizList];
    currentIdx = 0;
    quizResult = { correct: 0, wrong: 0 };
    isReviewMode = false;
    
    quizStartTime = Date.now(); // 记录开始时间
    switchPage('quiz');
    showCurrentChar();
}

function startSpecificReview() {
    const input = DOMElements.charInput.value;
    const chars = parseChars(input);
    if (chars.length === 0) {
        alert("请输入或者选择一组有效汉字后再复习错字！");
        return;
    }

    const reviewList = chars.filter(char => charsData[char] && !isMastered(char) && (charsData[char].correct + charsData[char].wrong > 0));
    
    if (reviewList.length === 0) {
        alert("太棒了！这组汉字中目前没有发现您答错过哦。");
        return;
    }

    const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || 'random';
    currentQuizList = orderMode === 'random' ? shuffleArray(reviewList) : [...reviewList];
    originalQuizList = []; 
    
    currentIdx = 0;
    quizResult = { correct: 0, wrong: 0 };
    isReviewMode = true;

    DOMElements.noWrongChars.classList.add('hidden');
    DOMElements.reviewContent.classList.remove('hidden');

    DOMElements.pages.forEach(p => p.classList.remove('active'));
    DOMElements.navBtns.forEach(b => b.classList.remove('active'));
    document.getElementById('page-review').classList.add('active');
    document.getElementById('nav-review').classList.add('active');

    quizStartTime = Date.now(); // 记录开始时间
    showCurrentChar();
}

function startReview() {
    const reviewList = Object.keys(charsData).filter(char => !isMastered(char) && (charsData[char].correct + charsData[char].wrong > 0));
    
    if (reviewList.length === 0) {
        DOMElements.noWrongChars.classList.remove('hidden');
        DOMElements.reviewContent.classList.add('hidden');
    } else {
        DOMElements.noWrongChars.classList.add('hidden');
        DOMElements.reviewContent.classList.remove('hidden');
        
        currentQuizList = shuffleArray(reviewList);
        if (currentQuizList.length > 20) currentQuizList = currentQuizList.slice(0, 20);
        originalQuizList = []; 
        
        currentIdx = 0;
        quizResult = { correct: 0, wrong: 0 };
        isReviewMode = true;
        
        quizStartTime = Date.now(); // 记录开始时间
        showCurrentChar();
    }
    
    DOMElements.pages.forEach(p => p.classList.remove('active'));
    DOMElements.navBtns.forEach(b => b.classList.remove('active'));
    document.getElementById('page-review').classList.add('active');
    document.getElementById('nav-review').classList.add('active');
}

function showCurrentChar() {
    if (currentIdx >= currentQuizList.length) {
        finishQuiz();
        return;
    }

    const char = currentQuizList[currentIdx];
    const data = charsData[char];
    
    const displayElement = isReviewMode ? DOMElements.revDisplay : DOMElements.charDisplay;
    const progressTextElement = isReviewMode ? DOMElements.revProgressText : DOMElements.quizProgressText;
    const progressBarElement = isReviewMode ? DOMElements.revProgress : DOMElements.quizProgress;
    const correctCountElement = isReviewMode ? DOMElements.revCorrectCount : DOMElements.charCorrectCount;
    const wrongCountElement = isReviewMode ? DOMElements.revWrongCount : DOMElements.charWrongCount;
    
    displayElement.classList.remove('char-enter');
    void displayElement.offsetWidth;
    displayElement.textContent = char;
    displayElement.classList.add('char-enter');
    
    progressTextElement.textContent = `${currentIdx + 1} / ${currentQuizList.length}`;
    progressBarElement.style.width = `${((currentIdx) / currentQuizList.length) * 100}%`;
    
    correctCountElement.textContent = `✔ ${data.correct}`;
    wrongCountElement.textContent = `✘ ${data.wrong}`;
}

function handleAnswer(isCorrect) {
    if (currentIdx >= currentQuizList.length) return;
    
    const char = currentQuizList[currentIdx];
    
    if (isCorrect) {
        charsData[char].correct++;
        charsData[char].streak = (charsData[char].streak || 0) + 1;
        quizResult.correct++;
        feedbackAnimation(true);
    } else {
        charsData[char].wrong++;
        charsData[char].streak = 0;
        quizResult.wrong++;
        feedbackAnimation(false);
    }
    
    saveData();
    currentIdx++;
    
    setTimeout(() => {
        showCurrentChar();
    }, 400);
}

function feedbackAnimation(isCorrect) {
    const area = isReviewMode ? DOMElements.revDisplayArea : DOMElements.charDisplayArea;
    
    area.style.transform = 'scale(1.05)';
    area.style.boxShadow = isCorrect ? '0 0 40px rgba(46, 204, 113, 0.4)' : '0 0 40px rgba(231, 76, 60, 0.4)';
    
    setTimeout(() => {
        area.style.transform = 'scale(1)';
        area.style.boxShadow = 'var(--shadow-lg)';
    }, 300);
}

function finishQuiz() {
    const bar = isReviewMode ? DOMElements.revProgress : DOMElements.quizProgress;
    bar.style.width = '100%';
    
    DOMElements.modalCorrect.textContent = quizResult.correct;
    DOMElements.modalWrong.textContent = quizResult.wrong;
    
    const total = quizResult.correct + quizResult.wrong;
    const acc = total > 0 ? Math.round((quizResult.correct / total) * 100) : 0;
    DOMElements.modalAccuracy.textContent = acc + '%';
    
    // 计算并展示用时
    const timeSec = Math.floor((Date.now() - quizStartTime) / 1000);
    const m = Math.floor(timeSec / 60);
    const s = timeSec % 60;
    DOMElements.modalTime.textContent = m > 0 ? `${m}分${s}秒` : `${s}秒`;
    
    const needsReviewList = Object.keys(charsData).filter(char => !isMastered(char) && (charsData[char].correct + charsData[char].wrong > 0));
    if (isReviewMode || needsReviewList.length === 0) {
        DOMElements.btnModalReview.style.display = 'none';
        DOMElements.btnModalRetry.style.display = isReviewMode ? 'none' : 'block';
    } else {
        DOMElements.btnModalReview.style.display = 'block';
        DOMElements.btnModalRetry.style.display = 'block';
    }
    
    updateHomeStats();
    updatePresetUI();
    showModal(DOMElements.quizCompleteModal);
}

function isMastered(char) {
    const d = charsData[char];
    if (!d) return false;
    if (d.wrong === 0 && d.correct > 0) return true;
    if (d.streak >= 3) return true;
    if (d.streak === undefined && (d.correct - d.wrong >= 3)) return true;
    return false;
}

function updatePresetUI() {
    DOMElements.presetBtns.forEach(btn => {
        const presetId = btn.dataset.preset;
        if (!presets[presetId]) return;
        const chars = parseChars(presets[presetId]);
        const total = chars.length;
        
        const unmastered = chars.filter(c => !isMastered(c));
        const masteredCount = total - unmastered.length;
        const accuracy = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
        
        let statsEl = btn.querySelector('.preset-stats');
        if (!statsEl) {
            statsEl = document.createElement('div');
            statsEl.className = 'preset-stats';
            btn.appendChild(statsEl);
        }
        
        statsEl.innerHTML = `
            <div class="preset-progress">掌握率: ${accuracy}% (${masteredCount}/${total})</div>
            ${unmastered.length > 0 ? 
                `<div class="preset-unmastered">未掌握(${unmastered.length}): <span>${unmastered.join(' ')}</span></div>` : 
                `<div class="preset-unmastered all-mastered">🎉 全部掌握！</div>`}
        `;
    });
}

// ========== 数据管理和统计UI ==========

function saveData() {
    localStorage.setItem('charsData', JSON.stringify(charsData));
}

function updateHomeStats() {
    let tChars = 0;
    let tCorrect = 0;
    let tWrong = 0;
    
    for (let char in charsData) {
        tChars++;
        tCorrect += charsData[char].correct;
        tWrong += charsData[char].wrong;
    }
    
    DOMElements.totalLearned.textContent = tChars;
    DOMElements.totalCorrectScore.textContent = tCorrect;
    DOMElements.totalWrongScore.textContent = tWrong;
    
    const totalAns = tCorrect + tWrong;
    DOMElements.accuracyRate.textContent = totalAns > 0 ? Math.round((tCorrect / totalAns) * 100) + '%' : '0%';
}

function renderStatsGrid(filter) {
    DOMElements.statsGrid.innerHTML = '';
    
    const chars = Object.keys(charsData);
    if (chars.length === 0) {
        DOMElements.statsEmpty.classList.remove('hidden');
        DOMElements.statsGrid.classList.add('hidden');
        return;
    } else {
        DOMElements.statsEmpty.classList.add('hidden');
        DOMElements.statsGrid.classList.remove('hidden');
    }
    
    let filteredChars = chars;
    
    if (filter === 'correct') {
        filteredChars = chars.filter(c => isMastered(c));
    } else if (filter === 'wrong') {
        filteredChars = chars.filter(c => !isMastered(c) && (charsData[c].correct + charsData[c].wrong > 0));
    }
    
    filteredChars.sort((a, b) => {
        if (filter === 'wrong') {
             return charsData[b].wrong - charsData[a].wrong;
        }
        const totalB = charsData[b].correct + charsData[b].wrong;
        const totalA = charsData[a].correct + charsData[a].wrong;
        return totalB - totalA;
    });
    
    filteredChars.forEach(char => {
        const d = charsData[char];
        const total = d.correct + d.wrong;
        let masteryClass = 'mastery-low';
        if (total > 0) {
            const acc = d.correct / total;
            if (acc >= 0.8) masteryClass = 'mastery-high';
            else if (acc >= 0.5) masteryClass = 'mastery-med';
        } else if (total === 0) {
            masteryClass = ''; 
        }
        
        const el = document.createElement('div');
        el.className = 'stat-item';
        el.innerHTML = `
            ${masteryClass ? `<div class="stat-mastery ${masteryClass}"></div>` : ''}
            <span class="stat-char">${char}</span>
            <div class="stat-details">
                <span class="stat-c" title="答对">✔ ${d.correct}</span>
                <span class="stat-w" title="答错">✘ ${d.wrong}</span>
            </div>
        `;
        DOMElements.statsGrid.appendChild(el);
    });
}

// ========== 辅助和动效 ==========

function showModal(modal) {
    modal.classList.remove('hidden');
}

function hideModal(modal) {
    modal.classList.add('hidden');
}

function initParticleBackground() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const particles = [];
    
    for(let i=0; i<30; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 4 + 1,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            color: Math.random() > 0.5 ? '#4A90E2' : '#F39C12'
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = 0.2;
            ctx.fill();
        });
        
        requestAnimationFrame(draw);
    }
    
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
    
    draw();
}

window.addEventListener('DOMContentLoaded', init);