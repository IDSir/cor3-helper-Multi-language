# COR3 Helper
COR3 助手

A Chrome extension that enhances the [cor3.gg](https://cor3.gg) experience by monitoring markets, expeditions, daily ops, and providing timer alerts — all from a compact popup UI.
一款 Chrome 扩展，通过监控市场、远征、日常行动并提供计时器提醒来增强 cor3.gg 的体验——所有这些功能都集成在一个简洁的弹出式用户界面中。

## Features
功能特性

*   **Market Monitoring** — View Market-1 (HOME) and Market-2 (D4RK) options, prices, jobs, and reset timers
    市场监控——查看市场一（HOME）和市场二（D4RK）的选项、价格、任务和重置计时器
*   **Expedition Tracking** — See active expeditions with various information
    远征追踪 — 查看包含各类信息的活跃远征
*   **Daily Ops Timer** — Countdown to your next daily ops task with extra information
    日常行动计时器 — 为下一次日常行动任务提供倒计时及额外信息
*   **Multi-Alarm System** — Create multiple configurable alarms for any timer (daily ops, market job resets). Each alarm has its own threshold, volume, continuous mode, and on/off toggle
    多闹钟系统 — 为任意计时器（日常行动、市场任务重置）创建多个可配置闹钟。每个闹钟均设有独立阈值、音量、持续模式及开关切换功能
*   **Pinned Timers** — Pin important timers to the top of the popup for quick access
    置顶计时器 — 将重要计时器固定在弹窗顶部以便快速访问
*   **Auto Decrypt Hacking** — Automatically solves decryption hacks when enabled. Just toggle it on and the extension handles the rest
    自动解密黑客——启用后自动解决解密黑客问题。只需开启开关，扩展程序便会处理其余事务
*   **Auto-Job-Refresh** — Market job timers automatically refresh when they reach zero, so jobs get refreshed even with the popup closed. This gives users more jobs per day by triggering them earlier and giving enough time to finish
    自动任务刷新——市场任务计时器归零时自动刷新，即使弹窗关闭也能刷新任务。通过提前触发任务并给予足够完成时间，让用户每天获得更多任务
*   **Inventory Viewer** — Browse your stash with item details and total value
    库存查看器——浏览您的仓库，查看物品详情和总价值
*   **Expedition Decisions** — View details related to pending expedition decisions directly from the popup
    远征决策——直接从弹窗中查看与待处理远征决策相关的详细信息
*   **Cache-First Design** — Data loads instantly from cache on popup open. Use the 🔄 Refresh All button or per-section refresh buttons to fetch fresh data
    缓存优先设计 — 弹出窗口打开时立即从缓存加载数据。使用🔄全部刷新按钮或各分区刷新按钮获取最新数据
*   **Theme Support** — Multiple color themes to match your preference
    主题支持 — 提供多种配色主题以适应您的偏好
*   **Check for Updates** — Compare your installed version against the latest on GitHub with one click
    检查更新 — 一键对比已安装版本与 GitHub 上的最新版本
*   **Lightweight** — Intercepts existing WebSocket traffic; no extra API calls beyond what the game already sends
    轻量级 — 仅拦截现有 WebSocket 流量；除游戏本身发送的数据外不产生额外 API 调用

## Installation
安装

1.  **Download** — Clone or download this repository:
    下载 — 克隆或下载此仓库：
    
    ```
    git clone https://github.com/Femtoce11/cor3-helper.git
    ```
    
    Or click **Code → Download ZIP** and extract it somewhere on your computer.
    或点击代码 → 下载 ZIP，并在计算机上解压。
    
2.  **Open Chrome Extensions** — Navigate to `chrome://extensions/` in your browser.
    打开 Chrome 扩展程序 — 在浏览器中导航至 `chrome://extensions/` 。
    
3.  **Enable Developer Mode** — Toggle the **Developer mode** switch in the top-right corner.
    启用开发者模式 — 在右上角切换开发者模式开关。
    
4.  **Load the Extension** — Click **Load unpacked** and select the folder containing the extension files (the folder with `manifest.json`).
    加载扩展程序 — 点击"加载已解压的扩展程序"，选择包含扩展文件的文件夹（带有 `manifest.json` 的文件夹）。
    
5.  **Navigate to cor3.gg** — Open [https://cor3.gg](https://cor3.gg) and log in. The extension will automatically start intercepting game data.
    访问 cor3.gg — 打开 https://cor3.gg 并登录。扩展程序将自动开始拦截游戏数据。
    
6.  **Open the Popup** — Click the COR3 Helper icon in your browser toolbar to view your dashboard.
    打开弹出窗口 — 点击浏览器工具栏中的 COR3 Helper 图标以查看您的仪表板。
    

## Usage
使用方法

*   **On page load**, the extension automatically fetches market data, expedition data, and daily ops to populate the cache.
    页面加载时，扩展程序会自动获取市场数据、远征数据和每日行动数据，以填充缓存。
*   **Open the popup** to see cached data instantly with "last updated" timestamps.
    打开弹窗即可立即查看缓存数据，并附带“最后更新”时间戳。
*   **Refresh All** (🔄 button in header) sequentially refreshes daily ops → markets → expeditions.
    刷新全部（标题栏中的🔄按钮）会按顺序刷新每日行动 → 市场 → 远征数据。
*   **Per-section refresh** buttons let you refresh individual data types.
    按部分刷新的按钮允许您刷新单个数据类型。
*   **Alarms** — Click ➕ in the Alarms section to create a new alarm. Choose a timer source, set a threshold, and configure volume/continuous beeping. Toggle alarms on/off or edit/delete them anytime.
    警报 — 在警报部分点击 ➕ 以创建新警报。选择计时器来源，设置阈值，并配置音量/持续蜂鸣。随时可以开启/关闭警报或编辑/删除它们。
*   **Pin timers** to keep them visible at the top of the popup.
    固定计时器以使其在弹出窗口顶部保持可见。
*   **Auto job refresh** feature can be used after pinning timers and clicking the "Auto" checkbox next to it.
    自动任务刷新功能可在固定计时器并点击旁边的“自动”复选框后使用。
*   **Auto Decrypt Hacking** — Toggle the switch to enable. It automatically solves decryption hacks whenever one appears.
    自动解密黑客攻击 — 切换开关以启用。每当出现解密黑客攻击时，它会自动解决。
*   **Check for Updates** — Click the button at the bottom of the popup to see if a new version is available on GitHub.
    检查更新 — 点击弹窗底部的按钮，查看 GitHub 上是否有新版本可用。

## Files
文件

| File文件 | Description描述 |
| --- | --- |
| manifest.json | Extension manifest (Manifest V3)扩展清单（Manifest V3） |
| popup.html | Popup UI (HTML + CSS)弹出界面（HTML + CSS） |
| popup.js | Popup logic, rendering, alarm management弹出逻辑、渲染、闹钟管理 |
| content-early.js | Injected at document\_start — intercepts WebSocket messages, sends market/expedition requests注入于 document\_start — 拦截 WebSocket 消息，发送市场/远征请求 |
| content.js | Injected at document\_idle — relays data to storage, handles alarm checking, auto-refresh注入于 document\_idle 位置——将数据中继至存储，处理警报检查，自动刷新 |
| background.js | Service worker for extension lifecycle扩展生命周期的服务工作者 |
| ws-interceptor.js | WebSocket interceptor helperWebSocket 拦截器辅助工具 |
| decrypt-solver.js | Auto-solver for decryption hacking minigame (injected into page when enabled)解密黑客小游戏的自动求解器（启用时注入页面） |

## Requirements
要求

*   Google Chrome (or Chromium-based browser)
    谷歌浏览器（或基于 Chromium 的浏览器）
*   An active [cor3.gg](https://cor3.gg) account
    有效的 cor3.gg 账户

## License
许可证

MIT