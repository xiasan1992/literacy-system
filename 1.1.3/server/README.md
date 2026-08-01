# 识字系统同步服务端 v1.1.2

## 启动方法

1. 安装依赖（首次）：
   ```
   cd server
   npm install
   ```

2. 启动服务：
   ```
   npm start
   ```
   服务运行在 http://localhost:3001

## API 接口

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/register | 注册 {username, password} |
| POST | /api/login | 登录 {username, password} |
| POST | /api/sync | 上传并合并数据（需Token）|
| GET  | /api/sync | 下载云端数据（需Token）|
| GET  | /api/health | 健康检查 |

## 数据存储

- 用户账号和同步数据存储在 database.json
- 密码使用 bcrypt 加密
- 登录返回 JWT Token（有效期 30 天）
