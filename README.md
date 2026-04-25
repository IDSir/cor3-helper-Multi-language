# COR3 Helper
COR3 助手

A Chrome extension that enhances the [cor3.gg](https://cor3.gg) experience by monitoring markets, expeditions, daily ops, and providing timer alerts — all from a compact popup UI.
一款 Chrome 扩展，通过监控市场、远征、日常行动并提供计时器提醒来增强 cor3.gg 的体验——所有这些功能都集成在一个简洁的弹出式用户界面中。

## Features
功能特性

*   **Theme Support** — Multiple color themes to match your preference
    主题支持 — 提供多种配色主题以适应您的偏好
*   **Pop-up Window / Panel Support** — Exports the UI to pop-up window or side panel depending on your preference
    弹窗/侧边栏支持 — 根据您的偏好，将界面导出为弹窗或侧边栏
*   **Refresh System** — Either by using "refresh all" button or by clicking "refresh" for each section, it refreshes related data available on the UI
    刷新系统 — 可通过点击"全部刷新"按钮或为每个板块单独点击"刷新"按钮，刷新界面上显示的相关数据
*   **Pinned Timers** — Every timer except "RESTING" timer for mercenaries can be pinned to top of the UI for tracking.
    固定计时器 — 除佣兵"休息"计时器外，所有计时器均可固定在界面顶部以便追踪
*   **Auto Job Refresh** — If the "auto-refresh" checkbox next to pinned job timer is enabled, jobs get automatically refreshed when they reach zero. This gives users more jobs per day by triggering them earlier and giving enough time to finish
    自动刷新任务 — 若已固定任务计时器旁的"自动刷新"复选框被启用，任务归零时将自动刷新。这能让用户通过提前触发任务并留出充足完成时间，每日获得更多任务
*   **Auto Decrypt Hacking** — Automatically solves decryption hacks when enabled. Just toggle it on and the extension handles the rest
    自动解密黑客——启用后自动解决解密黑客问题。只需开启开关，扩展程序便会处理其余事务
*   **Auto Daily Hacking** — Automatically solves log integration hack and gives results of signal hack when enabled. Check information below it for signal hack results.
    自动日常破解 — 启用后自动完成日志整合破解，并显示信号破解结果。查看下方信息获取信号破解详情。
*   **Daily Ops** — Countdown to your next daily ops task with streak bonus, difficulty, and claim status
    日常行动 — 显示下一次日常行动任务的倒计时，包含连续奖励、难度及领取状态
*   **Market Monitoring** — View Market-1 (HOME) and Market-2 (D4RK) stats, job reset timers, items list, and jobs list (with Category/Server/Reward columns)
    市场监控 — 查看市场 1（HOME）和市场 2（D4RK）的统计数据、任务重置计时器、物品列表及任务列表（含分类/服务器/奖励列）
*   **Active Expedition Tracking** — See active expeditions with remaining timer, cost, risk, insurance, and mercenary info
    活跃远征追踪 — 查看进行中的远征任务，包含剩余时间、成本、风险、保险及雇佣兵信息
*   **Expedition Decisions** — View and respond to pending decisions by clicking them with score calculation
    远征决策 — 点击待处理决策查看并响应，附带分数计算
*   **Auto Choose Decision** — Auto choose decisions 1-min before deadline according to their scoring. Configure loot/risk modifiers to change how scoring works.
    自动选择决策 — 在截止时间前 1 分钟根据评分自动选择决策。配置战利品/风险修正值可调整评分机制。
*   **Inventory Viewer** — Browse your stash sorted by rarity (rarest first) then price, with item/storage details, total value, and last-updated timestamps
    物品查看器 — 按稀有度（最稀有优先）及价格排序浏览仓库，显示物品/存储详情、总价值及最后更新时间戳
*   **Mercenaries** — View mercenary callsign, rank, status, specialization, traits, mission count, cost, rest timers, risk, failed-survive chance, and death chance.
    雇佣兵 — 查看雇佣兵代号、军衔、状态、专精、特质、任务次数、费用、休息计时器、风险、失败存活率及阵亡概率。
*   **Auto Send Mercenary** — Enable "auto send" toggle and select a mercenary to send just after current expedition is done. It auto-claims previous reward container.
    自动派遣佣兵 — 开启"自动派遣"开关并选择一名佣兵，即可在当前探险结束后立即派遣。系统会自动领取之前的奖励容器。
*   **Auto Choose Mercenary** — Enable "auto choose" toggle for extension to do best mercenary selection according to their cost and risk values.
    自动选择佣兵 — 开启"自动选择"开关，扩展程序将根据佣兵的成本和风险值进行最优选择。
*   **Archived Expeditions** — View past expeditions with outcome, cost, risk, location, loot container details and item images. Auto-loaded on startup
    历史探险记录 — 查看过往探险的成果、成本、风险、地点、战利品容器详情及物品图片。启动时自动加载。
*   **Multi-Alarm System** — Create multiple configurable alarms for any timer (daily ops, market job resets, expeditions). Each alarm has its own threshold, volume, continuous mode, and on/off toggle
    多重闹钟系统 — 为任意计时器（每日任务、市场工作重置、探险）创建多个可配置闹钟。每个闹钟可独立设置阈值、音量、持续模式及开关状态。
*   **Version Tracking** — Displays extension, web, and system versions
    版本追踪 — 显示扩展、网页及系统版本
*   **Check for Updates** — Compare your installed extension, web, and system versions against the latest on GitHub. It lets user know if an update is required for extension or if web/system versions are different from what's stored.
    检查更新 — 将已安装的扩展、网页及系统版本与 GitHub 上的最新版本进行对比。当扩展需要更新，或网页/系统版本与存储版本不一致时，会提示用户。
*   **Cache-First Design** — Data loads instantly from cache on popup open. Use the "Refresh All" button or per-section refresh buttons to fetch fresh data
    缓存优先设计 — 弹出窗口打开时，数据会从缓存中即时加载。使用"全部刷新"按钮或各板块的刷新按钮可获取最新数据
*   **Real-Time Updates** — WebSocket listeners auto-update daily ops, markets, expeditions, decisions, inventory, mercenaries, and archived expeditions when data arrives
    实时更新 — WebSocket 监听器会在数据到达时自动更新每日任务、市场、远征、决策、库存、雇佣兵及已归档远征
*   **Lightweight** — Only intercepts existing WebSocket traffic and re-triggers some API calls that the game already sends
    轻量级 — 仅拦截现有的 WebSocket 流量，并重新触发游戏已发送的部分 API 调用

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

*   **On page load**, the extension automatically fetches daily ops, market data, expedition data, and mercenary data to populate the cache.
    页面加载时，扩展程序会自动获取每日任务、市场数据、远征数据和佣兵数据以填充缓存。
*   **Open the popup** to see cached data instantly with "last updated" timestamps.
    打开弹窗即可立即查看缓存数据，并附带“最后更新”时间戳。
*   **Refresh All** button sequentially refreshes daily ops → markets → expeditions -> mercenary.
    "全部刷新"按钮会按顺序依次刷新：每日任务 → 市场 → 远征 → 佣兵。
*   **Per-section refresh** buttons let you refresh individual data types.
    按部分刷新的按钮允许您刷新单个数据类型。
*   **Pin timers** to keep them visible at the top of the popup.
    固定计时器以使其在弹出窗口顶部保持可见。
*   **Auto job refresh** feature can be used to automatically refresh jobs when needed after pinning timers and clicking the "Auto" checkbox next to it.
    自动任务刷新功能可在固定计时器并点击旁边的"自动"复选框后，在需要时自动刷新任务。
*   **Auto Decrypt Hacking** — Toggle the switch to enable. It automatically solves decryption hacks whenever one appears.
    自动解密黑客攻击 — 切换开关以启用。每当出现解密黑客攻击时，它会自动解决。
*   **Auto Daily Hacking** — Toggle the switch to enable. It automatically solves log integration hacks whenever one appears. It also solves signal hacks and shows results on UI for user to put in.
    自动日常破解 — 开启开关即可启用。当出现日志整合破解时，它会自动解决。同时也能解决信号破解，并在界面上显示结果供用户输入。
*   **Set decision scores** by clicking edit button. After the change click save button to keep the changes. This way you can change default scoring that extension shows next to each decision.
    通过点击编辑按钮设置决策分数。更改后点击保存按钮以保留修改。这样您就可以更改扩展程序在每个决策旁显示的默认评分。
*   **Enable auto choose decision** for extension to automatically choose best decision according to scoring which is calculated by default/modified loot/risk modifiers.
    启用自动选择决策，让扩展程序根据默认/修改后的战利品/风险修正值计算出的评分，自动选择最佳决策。
*   **Enable auto send mercenary** for extension to send selected mercenary by itself after the current expedition ends.
    启用自动派遣雇佣兵，让扩展程序在当前远征结束后自动派遣已选定的雇佣兵。
*   **Enable auto choose mercenary** for extension to choose which mercenary to send for next expedition according to their cost and risk values. It only works if "auto-send" feature is turned on.
    启用自动选择佣兵功能，扩展程序会根据佣兵的成本和风险值自动选择下一次远征派遣的佣兵。此功能仅在开启"自动派遣"时生效。
*   **Alarms** — Click ➕ in the Alarms section to create a new alarm. Choose a timer source, set a threshold, and configure volume/continuous beeping. Toggle alarms on/off or edit/delete them anytime.
    警报 — 在警报部分点击 ➕ 以创建新警报。选择计时器来源，设置阈值，并配置音量/持续蜂鸣。随时可以开启/关闭警报或编辑/删除它们。
*   **Check for Updates** — Click the button at the bottom of the popup to see if a new version of extension is available on GitHub. It also shows if web/system versions are changed recently.
    检查更新 — 点击弹出窗口底部的按钮，查看 GitHub 上是否有扩展程序的新版本。同时也会显示网页/系统版本近期是否有变更。

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
| daily-hack-solver.js | Auto-solver for log integration hack and singal hack minigames (only log integration hack is injected into page when enabled)日志整合破解与信号破解小游戏的自动求解器（启用时仅将日志整合破解注入页面） |
| versions.json | Version tracking file for update checks (extension, web, system)用于更新检查的版本跟踪文件（扩展、网页、系统） |

## Requirements
要求

*   Google Chrome (or Chromium-based browser)
    谷歌浏览器（或基于 Chromium 的浏览器）
*   An active [cor3.gg](https://cor3.gg) account
    有效的 cor3.gg 账户

## License
许可证

MIT