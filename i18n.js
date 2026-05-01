// COR3 Helper popup localization. UI text only; extension logic stays in popup.js.
(function () {
    'use strict';

    const STORAGE_KEY = 'cor3HelperLanguage';
    const SUPPORTED = ['fr', 'en', 'ru', 'de', 'zh-CN', 'zh-TW', 'ja', 'pl', 'uk', 'tr'];

    const LANG_NAMES = {
        fr: 'Français',
        en: 'English',
        ru: 'Русский',
        de: 'Deutsch',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        ja: '日本語',
        pl: 'Polski',
        uk: 'Українська',
        tr: 'Türkçe'
    };

    const WORDS = {
        en: {
            status: 'Status', ready: 'Ready', active: 'Active', off: 'Off', yes: 'Yes', no: 'No',
            updatedJustNow: 'Updated just now', updatedM: n => `Updated ${n}m ago`, updatedHM: (h, m) => `Updated ${h}h ${m}m ago`,
            pendingCount: n => `(${n} pending)`, deadlineRemain: (h, m) => `Deadline: ${h}h ${m}m remaining`,
            itemsCount: n => `Items List (${n})`, jobsCount: x => `Jobs List (${x})`, lootItems: n => `Loot (${n} items)`,
            nextTask: v => `Next Task: ${v}`, jobsReset: v => `Jobs Reset: ${v}`, jobs: v => `Jobs: ${v}`,
            score: v => `Score: ${v}`, risk: v => `Risk: ${v}`, loot: v => `Loot: ${v}`, credits: v => `Credits: ${v}`,
            reputationLevel: v => `Reputation — Level ${v}`, progress: (a, b, c) => `Progress: ${a} · Level Locked: ${b} · Max Level: ${c}`,
            extension: v => `Extension: ${v}`, web: v => `Web: ${v}`, system: v => `System: ${v}`,
            upToDate: v => `You're up to date! (${v})`, jobsResetLabel: name => `${name} Jobs Reset`
        },
        fr: {
            status: 'Statut', ready: 'Prêt', active: 'Actif', off: 'Désactivé', yes: 'Oui', no: 'Non',
            updatedJustNow: 'Mis à jour à l’instant', updatedM: n => `Mis à jour il y a ${n} min`, updatedHM: (h, m) => `Mis à jour il y a ${h} h ${m} min`,
            pendingCount: n => `(${n} en attente)`, deadlineRemain: (h, m) => `Échéance : ${h} h ${m} min restantes`,
            itemsCount: n => `Liste des objets (${n})`, jobsCount: x => `Liste des jobs (${x})`, lootItems: n => `Butin (${n} objets)`,
            nextTask: v => `Prochaine tâche : ${v}`, jobsReset: v => `Réinitialisation des jobs : ${v}`, jobs: v => `Jobs : ${v}`,
            score: v => `Score : ${v}`, risk: v => `Risque : ${v}`, loot: v => `Butin : ${v}`, credits: v => `Crédits : ${v}`,
            reputationLevel: v => `Réputation — niveau ${v}`, progress: (a, b, c) => `Progression : ${a} · Niveau verrouillé : ${b} · Niveau max : ${c}`,
            extension: v => `Extension : ${v}`, web: v => `Web : ${v}`, system: v => `Système : ${v}`,
            upToDate: v => `Vous êtes à jour ! (${v})`, jobsResetLabel: name => `Réinitialisation des jobs de ${name}`
        },
        ru: {
            status: 'Статус', ready: 'Готово', active: 'Активно', off: 'Выкл.', yes: 'Да', no: 'Нет',
            updatedJustNow: 'Обновлено только что', updatedM: n => `Обновлено ${n} мин назад`, updatedHM: (h, m) => `Обновлено ${h} ч ${m} мин назад`,
            pendingCount: n => `(${n} в ожидании)`, deadlineRemain: (h, m) => `Дедлайн: осталось ${h} ч ${m} мин`,
            itemsCount: n => `Список предметов (${n})`, jobsCount: x => `Список заданий (${x})`, lootItems: n => `Добыча (${n} предметов)`,
            nextTask: v => `Следующая задача: ${v}`, jobsReset: v => `Сброс заданий: ${v}`, jobs: v => `Задания: ${v}`,
            score: v => `Счет: ${v}`, risk: v => `Риск: ${v}`, loot: v => `Добыча: ${v}`, credits: v => `Кредиты: ${v}`,
            reputationLevel: v => `Репутация — уровень ${v}`, progress: (a, b, c) => `Прогресс: ${a} · Уровень заблокирован: ${b} · Макс. уровень: ${c}`,
            extension: v => `Расширение: ${v}`, web: v => `Веб: ${v}`, system: v => `Система: ${v}`,
            upToDate: v => `У вас актуальная версия! (${v})`, jobsResetLabel: name => `Сброс заданий ${name}`
        },
        de: {
            status: 'Status', ready: 'Bereit', active: 'Aktiv', off: 'Aus', yes: 'Ja', no: 'Nein',
            updatedJustNow: 'Gerade aktualisiert', updatedM: n => `Vor ${n} Min. aktualisiert`, updatedHM: (h, m) => `Vor ${h} Std. ${m} Min. aktualisiert`,
            pendingCount: n => `(${n} ausstehend)`, deadlineRemain: (h, m) => `Frist: noch ${h} Std. ${m} Min.`,
            itemsCount: n => `Objektliste (${n})`, jobsCount: x => `Jobliste (${x})`, lootItems: n => `Beute (${n} Objekte)`,
            nextTask: v => `Nächste Aufgabe: ${v}`, jobsReset: v => `Job-Reset: ${v}`, jobs: v => `Jobs: ${v}`,
            score: v => `Punkte: ${v}`, risk: v => `Risiko: ${v}`, loot: v => `Beute: ${v}`, credits: v => `Credits: ${v}`,
            reputationLevel: v => `Ruf — Stufe ${v}`, progress: (a, b, c) => `Fortschritt: ${a} · Stufe gesperrt: ${b} · Max. Stufe: ${c}`,
            extension: v => `Erweiterung: ${v}`, web: v => `Web: ${v}`, system: v => `System: ${v}`,
            upToDate: v => `Du bist auf dem neuesten Stand! (${v})`, jobsResetLabel: name => `${name} Job-Reset`
        },
        'zh-CN': {
            status: '状态', ready: '就绪', active: '已启用', off: '关闭', yes: '是', no: '否',
            updatedJustNow: '刚刚更新', updatedM: n => `${n} 分钟前更新`, updatedHM: (h, m) => `${h} 小时 ${m} 分钟前更新`,
            pendingCount: n => `(${n} 个待处理)`, deadlineRemain: (h, m) => `截止：剩余 ${h} 小时 ${m} 分钟`,
            itemsCount: n => `物品列表 (${n})`, jobsCount: x => `任务列表 (${x})`, lootItems: n => `战利品 (${n} 件)`,
            nextTask: v => `下个任务：${v}`, jobsReset: v => `任务重置：${v}`, jobs: v => `任务：${v}`,
            score: v => `分数：${v}`, risk: v => `风险：${v}`, loot: v => `战利品：${v}`, credits: v => `信用点：${v}`,
            reputationLevel: v => `声望 — 等级 ${v}`, progress: (a, b, c) => `进度：${a} · 等级锁定：${b} · 最高等级：${c}`,
            extension: v => `扩展：${v}`, web: v => `网页：${v}`, system: v => `系统：${v}`,
            upToDate: v => `已是最新！(${v})`, jobsResetLabel: name => `${name} 任务重置`
        },
        'zh-TW': {
            status: '狀態', ready: '就緒', active: '已啟用', off: '關閉', yes: '是', no: '否',
            updatedJustNow: '剛剛更新', updatedM: n => `${n} 分鐘前更新`, updatedHM: (h, m) => `${h} 小時 ${m} 分鐘前更新`,
            pendingCount: n => `(${n} 個待處理)`, deadlineRemain: (h, m) => `截止：剩餘 ${h} 小時 ${m} 分鐘`,
            itemsCount: n => `物品列表 (${n})`, jobsCount: x => `任務列表 (${x})`, lootItems: n => `戰利品 (${n} 件)`,
            nextTask: v => `下個任務：${v}`, jobsReset: v => `任務重置：${v}`, jobs: v => `任務：${v}`,
            score: v => `分數：${v}`, risk: v => `風險：${v}`, loot: v => `戰利品：${v}`, credits: v => `信用點：${v}`,
            reputationLevel: v => `聲望 — 等級 ${v}`, progress: (a, b, c) => `進度：${a} · 等級鎖定：${b} · 最高等級：${c}`,
            extension: v => `擴充功能：${v}`, web: v => `網頁：${v}`, system: v => `系統：${v}`,
            upToDate: v => `已是最新！(${v})`, jobsResetLabel: name => `${name} 任務重置`
        },
        ja: {
            status: '状態', ready: '準備完了', active: '有効', off: 'オフ', yes: 'はい', no: 'いいえ',
            updatedJustNow: 'たった今更新', updatedM: n => `${n}分前に更新`, updatedHM: (h, m) => `${h}時間${m}分前に更新`,
            pendingCount: n => `(${n}件保留)`, deadlineRemain: (h, m) => `期限: 残り${h}時間${m}分`,
            itemsCount: n => `アイテム一覧 (${n})`, jobsCount: x => `ジョブ一覧 (${x})`, lootItems: n => `戦利品 (${n}個)`,
            nextTask: v => `次のタスク: ${v}`, jobsReset: v => `ジョブリセット: ${v}`, jobs: v => `ジョブ: ${v}`,
            score: v => `スコア: ${v}`, risk: v => `リスク: ${v}`, loot: v => `戦利品: ${v}`, credits: v => `クレジット: ${v}`,
            reputationLevel: v => `評判 — レベル ${v}`, progress: (a, b, c) => `進捗: ${a} · レベルロック: ${b} · 最大レベル: ${c}`,
            extension: v => `拡張機能: ${v}`, web: v => `Web: ${v}`, system: v => `システム: ${v}`,
            upToDate: v => `最新です！(${v})`, jobsResetLabel: name => `${name} ジョブリセット`
        },
        pl: {
            status: 'Status', ready: 'Gotowe', active: 'Aktywne', off: 'Wył.', yes: 'Tak', no: 'Nie',
            updatedJustNow: 'Zaktualizowano przed chwilą', updatedM: n => `Zaktualizowano ${n} min temu`, updatedHM: (h, m) => `Zaktualizowano ${h} godz. ${m} min temu`,
            pendingCount: n => `(${n} oczek.)`, deadlineRemain: (h, m) => `Termin: pozostało ${h} godz. ${m} min`,
            itemsCount: n => `Lista przedmiotów (${n})`, jobsCount: x => `Lista zadań (${x})`, lootItems: n => `Łup (${n} przedm.)`,
            nextTask: v => `Następne zadanie: ${v}`, jobsReset: v => `Reset zadań: ${v}`, jobs: v => `Zadania: ${v}`,
            score: v => `Wynik: ${v}`, risk: v => `Ryzyko: ${v}`, loot: v => `Łup: ${v}`, credits: v => `Kredyty: ${v}`,
            reputationLevel: v => `Reputacja — poziom ${v}`, progress: (a, b, c) => `Postęp: ${a} · Poziom zablokowany: ${b} · Maks. poziom: ${c}`,
            extension: v => `Rozszerzenie: ${v}`, web: v => `Web: ${v}`, system: v => `System: ${v}`,
            upToDate: v => `Masz aktualną wersję! (${v})`, jobsResetLabel: name => `Reset zadań ${name}`
        },
        uk: {
            status: 'Статус', ready: 'Готово', active: 'Активно', off: 'Вимк.', yes: 'Так', no: 'Ні',
            updatedJustNow: 'Оновлено щойно', updatedM: n => `Оновлено ${n} хв тому`, updatedHM: (h, m) => `Оновлено ${h} год ${m} хв тому`,
            pendingCount: n => `(${n} очікує)`, deadlineRemain: (h, m) => `Дедлайн: лишилось ${h} год ${m} хв`,
            itemsCount: n => `Список предметів (${n})`, jobsCount: x => `Список завдань (${x})`, lootItems: n => `Здобич (${n} предметів)`,
            nextTask: v => `Наступне завдання: ${v}`, jobsReset: v => `Скидання завдань: ${v}`, jobs: v => `Завдання: ${v}`,
            score: v => `Рахунок: ${v}`, risk: v => `Ризик: ${v}`, loot: v => `Здобич: ${v}`, credits: v => `Кредити: ${v}`,
            reputationLevel: v => `Репутація — рівень ${v}`, progress: (a, b, c) => `Прогрес: ${a} · Рівень заблоковано: ${b} · Макс. рівень: ${c}`,
            extension: v => `Розширення: ${v}`, web: v => `Веб: ${v}`, system: v => `Система: ${v}`,
            upToDate: v => `У вас актуальна версія! (${v})`, jobsResetLabel: name => `Скидання завдань ${name}`
        },
        tr: {
            status: 'Durum', ready: 'Hazır', active: 'Aktif', off: 'Kapalı', yes: 'Evet', no: 'Hayır',
            updatedJustNow: 'Az önce güncellendi', updatedM: n => `${n} dk önce güncellendi`, updatedHM: (h, m) => `${h} sa ${m} dk önce güncellendi`,
            pendingCount: n => `(${n} bekliyor)`, deadlineRemain: (h, m) => `Son süre: ${h} sa ${m} dk kaldı`,
            itemsCount: n => `Eşya Listesi (${n})`, jobsCount: x => `İş Listesi (${x})`, lootItems: n => `Ganimet (${n} eşya)`,
            nextTask: v => `Sonraki görev: ${v}`, jobsReset: v => `İş sıfırlama: ${v}`, jobs: v => `İşler: ${v}`,
            score: v => `Puan: ${v}`, risk: v => `Risk: ${v}`, loot: v => `Ganimet: ${v}`, credits: v => `Kredi: ${v}`,
            reputationLevel: v => `İtibar — seviye ${v}`, progress: (a, b, c) => `İlerleme: ${a} · Seviye kilitli: ${b} · Maks. seviye: ${c}`,
            extension: v => `Eklenti: ${v}`, web: v => `Web: ${v}`, system: v => `Sistem: ${v}`,
            upToDate: v => `Güncelsiniz! (${v})`, jobsResetLabel: name => `${name} iş sıfırlama`
        }
    };

    const STATUS_TEXT = {
        fr: { 'Status': 'Statut', 'AVAILABLE': 'DISPONIBLE', 'IN PROGRESS': 'EN COURS', 'FAILED': 'ÉCHEC', 'COMPLETED': 'TERMINÉ', 'EXPIRED': 'EXPIRÉ' },
        ru: { 'Status': 'Статус', 'AVAILABLE': 'ДОСТУПНО', 'IN PROGRESS': 'В ПРОЦЕССЕ', 'FAILED': 'ПРОВАЛЕНО', 'COMPLETED': 'ЗАВЕРШЕНО', 'EXPIRED': 'ИСТЕКЛО' },
        de: { 'Status': 'Status', 'AVAILABLE': 'VERFÜGBAR', 'IN PROGRESS': 'LÄUFT', 'FAILED': 'FEHLGESCHLAGEN', 'COMPLETED': 'ABGESCHLOSSEN', 'EXPIRED': 'ABGELAUFEN' },
        'zh-CN': { 'Status': '状态', 'AVAILABLE': '未接取', 'IN PROGRESS': '进行中', 'FAILED': '失败', 'COMPLETED': '完成', 'EXPIRED': '已过期' },
        'zh-TW': { 'Status': '狀態', 'AVAILABLE': '未接取', 'IN PROGRESS': '進行中', 'FAILED': '失敗', 'COMPLETED': '完成', 'EXPIRED': '已過期' },
        ja: { 'Status': '状態', 'AVAILABLE': '未受注', 'IN PROGRESS': '進行中', 'FAILED': '失敗', 'COMPLETED': '完了', 'EXPIRED': '期限切れ' },
        pl: { 'Status': 'Status', 'AVAILABLE': 'DOSTĘPNE', 'IN PROGRESS': 'W TOKU', 'FAILED': 'NIEPOWODZENIE', 'COMPLETED': 'UKOŃCZONE', 'EXPIRED': 'WYGASŁE' },
        uk: { 'Status': 'Статус', 'AVAILABLE': 'ДОСТУПНО', 'IN PROGRESS': 'ТРИВАЄ', 'FAILED': 'НЕВДАЛО', 'COMPLETED': 'ЗАВЕРШЕНО', 'EXPIRED': 'МИНУЛО' },
        tr: { 'Status': 'Durum', 'AVAILABLE': 'UYGUN', 'IN PROGRESS': 'SÜRÜYOR', 'FAILED': 'BAŞARISIZ', 'COMPLETED': 'TAMAMLANDI', 'EXPIRED': 'SÜRESİ DOLDU' }
    };

    const EXTRA_TEXT = {
        fr: {
            'Automation/QoL Toggles': 'Automatisation / options QoL',
            'Disable System Message': 'Désactiver les messages système',
            'Disable Desktop Glitch/Wave': 'Désactiver Glitch/Wave du bureau',
            'Disable Network Fog': 'Désactiver le brouillard réseau',
            'You are lagging behind in progress!': 'Vous êtes en retard dans la progression !',
            'System messages re-enabled. Page restart may be required.': 'Messages système réactivés. Un redémarrage de la page peut être requis.',
            'System messages re-enabled. Page restart required to apply changes.': 'Messages système réactivés. Redémarrage de la page requis pour appliquer les changements.',
            "You're up to date!": 'Vous êtes à jour !'
        },
        ru: {
            'Automation/QoL Toggles': 'Автоматизация / QoL-переключатели',
            'Disable System Message': 'Отключить системные сообщения',
            'Disable Desktop Glitch/Wave': 'Отключить десктопный Glitch/Wave',
            'Disable Network Fog': 'Отключить сетевой туман',
            'You are lagging behind in progress!': 'Вы отстаете в прогрессе!',
            'System messages re-enabled. Page restart may be required.': 'Системные сообщения снова включены. Может потребоваться перезапуск страницы.',
            'System messages re-enabled. Page restart required to apply changes.': 'Системные сообщения снова включены. Для применения изменений нужен перезапуск страницы.',
            "You're up to date!": 'У вас актуальная версия!'
        },
        de: {
            'Automation/QoL Toggles': 'Automatisierung / QoL-Schalter',
            'Disable System Message': 'Systemnachrichten deaktivieren',
            'Disable Desktop Glitch/Wave': 'Desktop-Glitch/Wave deaktivieren',
            'Disable Network Fog': 'Netznebel deaktivieren',
            'You are lagging behind in progress!': 'Du liegst beim Fortschritt zurück!',
            'System messages re-enabled. Page restart may be required.': 'Systemnachrichten wieder aktiviert. Ein Seitenneustart könnte nötig sein.',
            'System messages re-enabled. Page restart required to apply changes.': 'Systemnachrichten wieder aktiviert. Seitenneustart zum Anwenden erforderlich.',
            "You're up to date!": 'Du bist auf dem neuesten Stand!'
        },
        'zh-CN': {
            'Automation/QoL Toggles': '自动化 / 体验开关',
            'Disable System Message': '屏蔽系统消息',
            'Disable Desktop Glitch/Wave': '禁用桌面故障波纹',
            'Disable Network Fog': '禁用网络迷雾',
            'You are lagging behind in progress!': '你的进度已落后！',
            'System messages re-enabled. Page restart may be required.': '系统消息已重新启用，可能需要重启页面。',
            'System messages re-enabled. Page restart required to apply changes.': '系统消息已重新启用，需要重启页面才能生效。',
            "You're up to date!": '已是最新！'
        },
        'zh-TW': {
            'Automation/QoL Toggles': '自動化 / 體驗開關',
            'Disable System Message': '停用系統訊息',
            'Disable Desktop Glitch/Wave': '停用桌面 Glitch/Wave',
            'Disable Network Fog': '停用網路迷霧',
            'You are lagging behind in progress!': '你的進度已落後！',
            'System messages re-enabled. Page restart may be required.': '系統訊息已重新啟用，可能需要重新啟動頁面。',
            'System messages re-enabled. Page restart required to apply changes.': '系統訊息已重新啟用，需要重新啟動頁面才能套用變更。',
            "You're up to date!": '已是最新！'
        },
        ja: {
            'Automation/QoL Toggles': '自動化 / QoL トグル',
            'Disable System Message': 'システムメッセージを無効化',
            'Disable Desktop Glitch/Wave': 'デスクトップのグリッチ/ウェーブを無効化',
            'Disable Network Fog': 'ネットワークフォグを無効化',
            'You are lagging behind in progress!': '進行状況が遅れています！',
            'System messages re-enabled. Page restart may be required.': 'システムメッセージを再有効化しました。ページ再起動が必要な場合があります。',
            'System messages re-enabled. Page restart required to apply changes.': 'システムメッセージを再有効化しました。適用にはページ再起動が必要です。',
            "You're up to date!": '最新です！'
        },
        pl: {
            'Automation/QoL Toggles': 'Automatyzacja / przełączniki QoL',
            'Disable System Message': 'Wyłącz wiadomości systemowe',
            'Disable Desktop Glitch/Wave': 'Wyłącz desktopowy Glitch/Wave',
            'Disable Network Fog': 'Wyłącz mgłę sieciową',
            'You are lagging behind in progress!': 'Masz opóźnienie w postępie!',
            'System messages re-enabled. Page restart may be required.': 'Wiadomości systemowe ponownie włączone. Może być wymagany restart strony.',
            'System messages re-enabled. Page restart required to apply changes.': 'Wiadomości systemowe ponownie włączone. Aby zastosować zmiany, wymagany jest restart strony.',
            "You're up to date!": 'Masz aktualną wersję!'
        },
        uk: {
            'Automation/QoL Toggles': 'Автоматизація / QoL-перемикачі',
            'Disable System Message': 'Вимкнути системні повідомлення',
            'Disable Desktop Glitch/Wave': 'Вимкнути desktop Glitch/Wave',
            'Disable Network Fog': 'Вимкнути мережевий туман',
            'You are lagging behind in progress!': 'Ви відстаєте у прогресі!',
            'System messages re-enabled. Page restart may be required.': 'Системні повідомлення знову увімкнено. Може знадобитися перезапуск сторінки.',
            'System messages re-enabled. Page restart required to apply changes.': 'Системні повідомлення знову увімкнено. Для застосування змін потрібен перезапуск сторінки.',
            "You're up to date!": 'У вас актуальна версія!'
        },
        tr: {
            'Automation/QoL Toggles': 'Otomasyon / QoL anahtarları',
            'Disable System Message': 'Sistem mesajlarını kapat',
            'Disable Desktop Glitch/Wave': 'Masaüstü Glitch/Wave efektini kapat',
            'Disable Network Fog': 'Ağ sisini kapat',
            'You are lagging behind in progress!': 'İlerlemede geride kaldın!',
            'System messages re-enabled. Page restart may be required.': 'Sistem mesajları yeniden etkinleştirildi. Sayfanın yeniden başlatılması gerekebilir.',
            'System messages re-enabled. Page restart required to apply changes.': 'Sistem mesajları yeniden etkinleştirildi. Değişiklikleri uygulamak için sayfayı yeniden başlatmak gerekir.',
            "You're up to date!": 'Güncelsiniz!'
        }
    };

    const OLD_VERSION_PREFIX = {
        fr: 'Ancienne version -> ',
        ru: 'Старая версия -> ',
        de: 'Alte Version -> ',
        'zh-CN': '旧版本 -> ',
        'zh-TW': '舊版本 -> ',
        ja: '旧バージョン -> ',
        pl: 'Stara wersja -> ',
        uk: 'Стара версія -> ',
        tr: 'Eski sürüm -> '
    };

    const AIM_FOR_PREFIX = {
        fr: 'Visez la version système ',
        ru: 'Ориентируйтесь на системную версию ',
        de: 'Ziele auf Systemversion ',
        'zh-CN': '目标系统版本 ',
        'zh-TW': '目標系統版本 ',
        ja: '目標システムバージョン ',
        pl: 'Celuj w wersję systemu ',
        uk: 'Орієнтуйтеся на системну версію ',
        tr: 'Hedef sistem sürümü '
    };

    const AIM_FOR_SUFFIX = {
        fr: ' !',
        ru: '!',
        de: '!',
        'zh-CN': '！',
        'zh-TW': '！',
        ja: '！',
        pl: '!',
        uk: '!',
        tr: '!'
    };

    const TEXT = {
        fr: {
            'Default': 'Par défaut', 'Pinned Timers': 'Minuteurs épinglés', 'Auto Decrypt Hacking': 'Décryptage auto', 'Auto Daily Hacking': 'Hack quotidien auto',
            'Daily Ops': 'Opérations quotidiennes', 'Markets': 'Marchés', 'Market-1': 'Marché-1', 'Market-2': 'Marché-2', 'Market-2 (cached)': 'Marché-2 (cache)',
            'Expeditions': 'Expéditions', 'Active Expedition': 'Expédition active', 'Decisions': 'Décisions', 'Inventory': 'Inventaire', 'Mercenaries': 'Mercenaires',
            'Archived Expeditions': 'Expéditions archivées', 'Alarms': 'Alarmes', 'Language': 'Langue', 'Watch:': 'Surveiller :', 'Alert when remaining:': 'Alerter quand il reste :',
            'Continuous (beep every 2s)': 'Continu (bip toutes les 2 s)', 'Volume:': 'Volume :', 'On': 'Activé', 'New Alarm': 'Nouvelle alarme', 'Edit Alarm': 'Modifier l’alarme',
            'Save': 'Enregistrer', 'Cancel': 'Annuler', 'Test': 'Tester', 'Check for Updates': 'Vérifier les mises à jour',
            'Open in separate window': 'Ouvrir dans une fenêtre séparée', 'Open as side panel': 'Ouvrir en panneau latéral', 'Refresh all data': 'Actualiser toutes les données',
            'Change theme': 'Changer le thème', 'Pin Daily Ops': 'Épingler les opérations quotidiennes', 'Refresh Daily Ops': 'Actualiser les opérations quotidiennes',
            'Pin Market Timer': 'Épingler le minuteur du marché', 'Refresh Market': 'Actualiser le marché', 'Refresh Expeditions': 'Actualiser les expéditions',
            'Pin Expedition Timer': 'Épingler le minuteur d’expédition', 'Edit modifiers': 'Modifier les multiplicateurs', 'Refresh Inventory': 'Actualiser l’inventaire',
            'Refresh Mercenaries': 'Actualiser les mercenaires', 'Refresh Archived': 'Actualiser les archives', 'Stop all sounding alarms': 'Arrêter toutes les alarmes actives',
            'Add new alarm': 'Ajouter une alarme', 'No market data cached yet.': 'Aucune donnée de marché en cache.', 'No expedition data yet.': 'Aucune donnée d’expédition.',
            'Loading inventory...': 'Chargement de l’inventaire...', 'Loading mercenaries...': 'Chargement des mercenaires...', 'Loading archived expeditions...': 'Chargement des expéditions archivées...',
            'No alarms configured. Click ➕ to add one.': 'Aucune alarme configurée. Cliquez sur ➕ pour en ajouter une.', 'No cor3.gg tab found.': 'Aucun onglet cor3.gg trouvé.',
            'Side panel not supported in this browser.': 'Le panneau latéral n’est pas pris en charge par ce navigateur.', 'Alarm sounding...': 'Alarme en cours...',
            'No active expeditions.': 'Aucune expédition active.', 'No pending decisions found.': 'Aucune décision en attente.', 'Loading expedition data...': 'Chargement des données d’expédition...',
            'Requesting inventory from server...': 'Demande de l’inventaire au serveur...', 'No items found.': 'Aucun objet trouvé.', 'Make sure you have the cor3.gg tab open.': 'Assurez-vous que l’onglet cor3.gg est ouvert.',
            'Access token expired. Page refresh required.': 'Jeton d’accès expiré. Actualisez la page.', 'Expired': 'Expiré', 'Deadline: Expired': 'Échéance : expirée',
            'Requesting market data...': 'Demande des données de marché...', 'Refreshing market data...': 'Actualisation des données de marché...', 'No market data available.': 'Aucune donnée de marché disponible.',
            'No cached market data available.': 'Aucune donnée de marché en cache disponible.', 'No market data cached. Click 🔄 to refresh.': 'Aucune donnée de marché en cache. Cliquez sur 🔄 pour actualiser.',
            'No items in market.': 'Aucun objet sur le marché.', 'No jobs available.': 'Aucun job disponible.', 'Items List': 'Liste des objets', 'Jobs List': 'Liste des jobs', 'Details': 'Détails',
            'Manufacturer:': 'Fabricant :', 'Tier:': 'Rang :', 'Vulnerability:': 'Vulnérabilité :', 'Base Price:': 'Prix de base :', 'Price Modifier:': 'Modificateur de prix :',
            'Access Level:': 'Niveau d’accès :', 'Type:': 'Type :', 'Power:': 'Puissance :', 'File Types:': 'Types de fichiers :', 'Server Types:': 'Types de serveurs :', 'Remote:': 'À distance :',
            'Job': 'Job', 'Server': 'Serveur', 'Reward': 'Récompense', 'D4RK market server is currently unreachable (no-path-to-server).': 'Le serveur du marché D4RK est actuellement inaccessible (no-path-to-server).',
            'Apply modifiers to scores': 'Appliquer les multiplicateurs aux scores', 'Auto-choose highest score before deadline': 'Choisir automatiquement le meilleur score avant l’échéance',
            'Auto-send selected mercenary after expedition ends': 'Envoyer automatiquement le mercenaire sélectionné après l’expédition', 'Auto-choose cheapest available mercenary': 'Choisir automatiquement le mercenaire disponible le moins cher',
            'Selected:': 'Sélectionné :', 'None': 'Aucun', '(defaults)': '(par défaut)', 'Claimed:': 'Réclamé :', 'Streak:': 'Série :', 'Difficulty:': 'Difficulté :', 'Bonus:': 'Bonus :',
            'Mercenary:': 'Mercenaire :', 'Total Cost:': 'Coût total :', 'Insurance:': 'Assurance :', 'Risk Score:': 'Score de risque :', 'AUTO-RESOLVED': 'RÉSOLU AUTO', 'RESOLVED': 'RÉSOLU', 'PENDING': 'EN ATTENTE',
            'Score:': 'Score :', 'Risk:': 'Risque :', 'Loot:': 'Butin :', 'AVAILABLE': 'DISPONIBLE', 'RESTING': 'EN REPOS', 'CONTRACTED': 'SOUS CONTRAT', 'UNKNOWN': 'INCONNU', 'RUNNING': 'EN COURS',
            'Unknown': 'Inconnu', 'Rank:': 'Rang :', 'Missions:': 'Missions :', 'Spec:': 'Spéc. :', 'Trait:': 'Trait :', 'Rep Required:': 'Réputation requise :', 'Cost:': 'Coût :',
            'Failed-Survive:': 'Échec-survie :', 'Death:': 'Mort :', 'Ready!': 'Prêt !', 'No archived expeditions found.': 'Aucune expédition archivée trouvée.', 'No mercenaries found.': 'Aucun mercenaire trouvé.',
            'Collected': 'Collecté', 'Deleted': 'Supprimé', 'Checking...': 'Vérification...', 'Website is recently updated': 'Le site vient d’être mis à jour', 'Updates detected:': 'Mises à jour détectées :',
            'Download from GitHub': 'Télécharger depuis GitHub', 'Download ZIP, extract, and reload on chrome://extensions': 'Téléchargez le ZIP, extrayez-le, puis rechargez sur chrome://extensions',
            'Could not check for updates. Check your connection.': 'Impossible de vérifier les mises à jour. Vérifiez votre connexion.', 'BOUGHT': 'ACHETÉ', 'CRAFT': 'FABRIQUER', 'USE': 'UTILISER'
        },
        ru: {
            'Default': 'По умолчанию', 'Pinned Timers': 'Закрепленные таймеры', 'Auto Decrypt Hacking': 'Авторасшифровка', 'Auto Daily Hacking': 'Автоежедневный взлом',
            'Daily Ops': 'Ежедневные операции', 'Markets': 'Рынки', 'Market-1': 'Рынок-1', 'Market-2': 'Рынок-2', 'Market-2 (cached)': 'Рынок-2 (кэш)',
            'Expeditions': 'Экспедиции', 'Active Expedition': 'Активная экспедиция', 'Decisions': 'Решения', 'Inventory': 'Инвентарь', 'Mercenaries': 'Наемники',
            'Archived Expeditions': 'Архив экспедиций', 'Alarms': 'Будильники', 'Language': 'Язык', 'Watch:': 'Следить за:', 'Alert when remaining:': 'Оповестить, когда осталось:',
            'Continuous (beep every 2s)': 'Непрерывно (сигнал каждые 2 с)', 'Volume:': 'Громкость:', 'On': 'Вкл.', 'New Alarm': 'Новый будильник', 'Edit Alarm': 'Изменить будильник',
            'Save': 'Сохранить', 'Cancel': 'Отмена', 'Test': 'Тест', 'Check for Updates': 'Проверить обновления',
            'Open in separate window': 'Открыть в отдельном окне', 'Open as side panel': 'Открыть как боковую панель', 'Refresh all data': 'Обновить все данные',
            'Change theme': 'Сменить тему', 'Pin Daily Ops': 'Закрепить ежедневные операции', 'Refresh Daily Ops': 'Обновить ежедневные операции',
            'Pin Market Timer': 'Закрепить таймер рынка', 'Refresh Market': 'Обновить рынок', 'Refresh Expeditions': 'Обновить экспедиции',
            'Pin Expedition Timer': 'Закрепить таймер экспедиции', 'Edit modifiers': 'Изменить модификаторы', 'Refresh Inventory': 'Обновить инвентарь',
            'Refresh Mercenaries': 'Обновить наемников', 'Refresh Archived': 'Обновить архив', 'Stop all sounding alarms': 'Остановить все звучащие будильники',
            'Add new alarm': 'Добавить будильник', 'No market data cached yet.': 'Данных рынка в кэше пока нет.', 'No expedition data yet.': 'Данных экспедиции пока нет.',
            'Loading inventory...': 'Загрузка инвентаря...', 'Loading mercenaries...': 'Загрузка наемников...', 'Loading archived expeditions...': 'Загрузка архива экспедиций...',
            'No alarms configured. Click ➕ to add one.': 'Будильники не настроены. Нажмите ➕, чтобы добавить.', 'No cor3.gg tab found.': 'Вкладка cor3.gg не найдена.',
            'Side panel not supported in this browser.': 'Боковая панель не поддерживается этим браузером.', 'Alarm sounding...': 'Будильник звучит...',
            'No active expeditions.': 'Нет активных экспедиций.', 'No pending decisions found.': 'Ожидающих решений нет.', 'Loading expedition data...': 'Загрузка данных экспедиции...',
            'Requesting inventory from server...': 'Запрос инвентаря с сервера...', 'No items found.': 'Предметы не найдены.', 'Make sure you have the cor3.gg tab open.': 'Убедитесь, что вкладка cor3.gg открыта.',
            'Access token expired. Page refresh required.': 'Срок действия токена истек. Обновите страницу.', 'Expired': 'Истекло', 'Deadline: Expired': 'Дедлайн: истек',
            'Requesting market data...': 'Запрос данных рынка...', 'Refreshing market data...': 'Обновление данных рынка...', 'No market data available.': 'Данные рынка недоступны.',
            'No cached market data available.': 'Кэшированных данных рынка нет.', 'No market data cached. Click 🔄 to refresh.': 'Нет кэшированных данных рынка. Нажмите 🔄 для обновления.',
            'No items in market.': 'На рынке нет предметов.', 'No jobs available.': 'Доступных заданий нет.', 'Items List': 'Список предметов', 'Jobs List': 'Список заданий', 'Details': 'Подробности',
            'Manufacturer:': 'Производитель:', 'Tier:': 'Уровень:', 'Vulnerability:': 'Уязвимость:', 'Base Price:': 'Базовая цена:', 'Price Modifier:': 'Модификатор цены:',
            'Access Level:': 'Уровень доступа:', 'Type:': 'Тип:', 'Power:': 'Мощность:', 'File Types:': 'Типы файлов:', 'Server Types:': 'Типы серверов:', 'Remote:': 'Удаленно:',
            'Job': 'Задание', 'Server': 'Сервер', 'Reward': 'Награда', 'D4RK market server is currently unreachable (no-path-to-server).': 'Сервер рынка D4RK сейчас недоступен (no-path-to-server).',
            'Apply modifiers to scores': 'Применять модификаторы к счету', 'Auto-choose highest score before deadline': 'Автоматически выбирать лучший счет до дедлайна',
            'Auto-send selected mercenary after expedition ends': 'Автоотправка выбранного наемника после экспедиции', 'Auto-choose cheapest available mercenary': 'Автовыбор самого дешевого доступного наемника',
            'Selected:': 'Выбрано:', 'None': 'Нет', '(defaults)': '(по умолчанию)', 'Claimed:': 'Получено:', 'Streak:': 'Серия:', 'Difficulty:': 'Сложность:', 'Bonus:': 'Бонус:',
            'Mercenary:': 'Наемник:', 'Total Cost:': 'Общая стоимость:', 'Insurance:': 'Страховка:', 'Risk Score:': 'Счет риска:', 'AUTO-RESOLVED': 'АВТОРЕШЕНО', 'RESOLVED': 'РЕШЕНО', 'PENDING': 'ОЖИДАЕТ',
            'Score:': 'Счет:', 'Risk:': 'Риск:', 'Loot:': 'Добыча:', 'AVAILABLE': 'ДОСТУПЕН', 'RESTING': 'ОТДЫХАЕТ', 'CONTRACTED': 'ПО КОНТРАКТУ', 'UNKNOWN': 'НЕИЗВЕСТНО', 'RUNNING': 'ВЫПОЛНЯЕТСЯ',
            'Unknown': 'Неизвестно', 'Rank:': 'Ранг:', 'Missions:': 'Миссии:', 'Spec:': 'Спец.:', 'Trait:': 'Черта:', 'Rep Required:': 'Треб. репутация:', 'Cost:': 'Стоимость:',
            'Failed-Survive:': 'Провал-выживание:', 'Death:': 'Смерть:', 'Ready!': 'Готово!', 'No archived expeditions found.': 'Архивные экспедиции не найдены.', 'No mercenaries found.': 'Наемники не найдены.',
            'Collected': 'Собрано', 'Deleted': 'Удалено', 'Checking...': 'Проверка...', 'Website is recently updated': 'Сайт недавно обновлен', 'Updates detected:': 'Обнаружены обновления:',
            'Download from GitHub': 'Скачать с GitHub', 'Download ZIP, extract, and reload on chrome://extensions': 'Скачайте ZIP, распакуйте и перезагрузите на chrome://extensions',
            'Could not check for updates. Check your connection.': 'Не удалось проверить обновления. Проверьте подключение.', 'BOUGHT': 'КУПЛЕНО', 'CRAFT': 'СОЗДАТЬ', 'USE': 'ИСПОЛЬЗ.'
        },
        de: {
            'Default': 'Standard', 'Pinned Timers': 'Angeheftete Timer', 'Auto Decrypt Hacking': 'Automatisches Entschlüsseln', 'Auto Daily Hacking': 'Automatischer Daily-Hack',
            'Daily Ops': 'Tägliche Ops', 'Markets': 'Märkte', 'Market-1': 'Markt-1', 'Market-2': 'Markt-2', 'Market-2 (cached)': 'Markt-2 (Cache)',
            'Expeditions': 'Expeditionen', 'Active Expedition': 'Aktive Expedition', 'Decisions': 'Entscheidungen', 'Inventory': 'Inventar', 'Mercenaries': 'Söldner',
            'Archived Expeditions': 'Archivierte Expeditionen', 'Alarms': 'Alarme', 'Language': 'Sprache', 'Watch:': 'Beobachten:', 'Alert when remaining:': 'Warnen bei Restzeit:',
            'Continuous (beep every 2s)': 'Fortlaufend (Piepton alle 2 s)', 'Volume:': 'Lautstärke:', 'On': 'Ein', 'New Alarm': 'Neuer Alarm', 'Edit Alarm': 'Alarm bearbeiten',
            'Save': 'Speichern', 'Cancel': 'Abbrechen', 'Test': 'Test', 'Check for Updates': 'Nach Updates suchen',
            'Open in separate window': 'In separatem Fenster öffnen', 'Open as side panel': 'Als Seitenleiste öffnen', 'Refresh all data': 'Alle Daten aktualisieren',
            'Change theme': 'Theme ändern', 'Pin Daily Ops': 'Tägliche Ops anheften', 'Refresh Daily Ops': 'Tägliche Ops aktualisieren',
            'Pin Market Timer': 'Markt-Timer anheften', 'Refresh Market': 'Markt aktualisieren', 'Refresh Expeditions': 'Expeditionen aktualisieren',
            'Pin Expedition Timer': 'Expeditions-Timer anheften', 'Edit modifiers': 'Modifikatoren bearbeiten', 'Refresh Inventory': 'Inventar aktualisieren',
            'Refresh Mercenaries': 'Söldner aktualisieren', 'Refresh Archived': 'Archiv aktualisieren', 'Stop all sounding alarms': 'Alle aktiven Alarme stoppen',
            'Add new alarm': 'Neuen Alarm hinzufügen', 'No market data cached yet.': 'Noch keine Marktdaten im Cache.', 'No expedition data yet.': 'Noch keine Expeditionsdaten.',
            'Loading inventory...': 'Inventar wird geladen...', 'Loading mercenaries...': 'Söldner werden geladen...', 'Loading archived expeditions...': 'Archivierte Expeditionen werden geladen...',
            'No alarms configured. Click ➕ to add one.': 'Keine Alarme eingerichtet. Klicke ➕ zum Hinzufügen.', 'No cor3.gg tab found.': 'Kein cor3.gg-Tab gefunden.',
            'Side panel not supported in this browser.': 'Seitenleiste wird von diesem Browser nicht unterstützt.', 'Alarm sounding...': 'Alarm läuft...',
            'No active expeditions.': 'Keine aktiven Expeditionen.', 'No pending decisions found.': 'Keine ausstehenden Entscheidungen.', 'Loading expedition data...': 'Expeditionsdaten werden geladen...',
            'Requesting inventory from server...': 'Inventar wird vom Server angefordert...', 'No items found.': 'Keine Objekte gefunden.', 'Make sure you have the cor3.gg tab open.': 'Stelle sicher, dass der cor3.gg-Tab geöffnet ist.',
            'Access token expired. Page refresh required.': 'Access-Token abgelaufen. Seite neu laden.', 'Expired': 'Abgelaufen', 'Deadline: Expired': 'Frist: abgelaufen',
            'Requesting market data...': 'Marktdaten werden angefordert...', 'Refreshing market data...': 'Marktdaten werden aktualisiert...', 'No market data available.': 'Keine Marktdaten verfügbar.',
            'No cached market data available.': 'Keine zwischengespeicherten Marktdaten verfügbar.', 'No market data cached. Click 🔄 to refresh.': 'Keine Marktdaten im Cache. Klicke 🔄 zum Aktualisieren.',
            'No items in market.': 'Keine Objekte im Markt.', 'No jobs available.': 'Keine Jobs verfügbar.', 'Items List': 'Objektliste', 'Jobs List': 'Jobliste', 'Details': 'Details',
            'Manufacturer:': 'Hersteller:', 'Tier:': 'Rang:', 'Vulnerability:': 'Verwundbarkeit:', 'Base Price:': 'Basispreis:', 'Price Modifier:': 'Preismodifikator:',
            'Access Level:': 'Zugriffsstufe:', 'Type:': 'Typ:', 'Power:': 'Leistung:', 'File Types:': 'Dateitypen:', 'Server Types:': 'Servertypen:', 'Remote:': 'Remote:',
            'Job': 'Job', 'Server': 'Server', 'Reward': 'Belohnung', 'D4RK market server is currently unreachable (no-path-to-server).': 'Der D4RK-Marktserver ist derzeit nicht erreichbar (no-path-to-server).',
            'Apply modifiers to scores': 'Modifikatoren auf Punkte anwenden', 'Auto-choose highest score before deadline': 'Vor Frist automatisch höchsten Score wählen',
            'Auto-send selected mercenary after expedition ends': 'Ausgewählten Söldner nach Expeditionsende automatisch senden', 'Auto-choose cheapest available mercenary': 'Günstigsten verfügbaren Söldner automatisch wählen',
            'Selected:': 'Ausgewählt:', 'None': 'Keine', '(defaults)': '(Standard)', 'Claimed:': 'Abgeholt:', 'Streak:': 'Serie:', 'Difficulty:': 'Schwierigkeit:', 'Bonus:': 'Bonus:',
            'Mercenary:': 'Söldner:', 'Total Cost:': 'Gesamtkosten:', 'Insurance:': 'Versicherung:', 'Risk Score:': 'Risikowert:', 'AUTO-RESOLVED': 'AUTO-GELÖST', 'RESOLVED': 'GELÖST', 'PENDING': 'AUSSTEHEND',
            'Score:': 'Punkte:', 'Risk:': 'Risiko:', 'Loot:': 'Beute:', 'AVAILABLE': 'VERFÜGBAR', 'RESTING': 'RUHT', 'CONTRACTED': 'UNTER VERTRAG', 'UNKNOWN': 'UNBEKANNT', 'RUNNING': 'LÄUFT',
            'Unknown': 'Unbekannt', 'Rank:': 'Rang:', 'Missions:': 'Missionen:', 'Spec:': 'Spez.:', 'Trait:': 'Eigenschaft:', 'Rep Required:': 'Ruf benötigt:', 'Cost:': 'Kosten:',
            'Failed-Survive:': 'Fehlschlag-Überleben:', 'Death:': 'Tod:', 'Ready!': 'Bereit!', 'No archived expeditions found.': 'Keine archivierten Expeditionen gefunden.', 'No mercenaries found.': 'Keine Söldner gefunden.',
            'Collected': 'Gesammelt', 'Deleted': 'Gelöscht', 'Checking...': 'Prüfung...', 'Website is recently updated': 'Website wurde kürzlich aktualisiert', 'Updates detected:': 'Updates erkannt:',
            'Download from GitHub': 'Von GitHub herunterladen', 'Download ZIP, extract, and reload on chrome://extensions': 'ZIP herunterladen, entpacken und unter chrome://extensions neu laden',
            'Could not check for updates. Check your connection.': 'Updates konnten nicht geprüft werden. Verbindung prüfen.', 'BOUGHT': 'GEKAUFT', 'CRAFT': 'HERSTELLEN', 'USE': 'NUTZEN'
        },
        'zh-CN': {
            'Default': '默认', 'Pinned Timers': '置顶计时器', 'Auto Decrypt Hacking': '自动解密破解', 'Auto Daily Hacking': '自动每日破解',
            'Daily Ops': '每日任务', 'Markets': '市场', 'Market-1': '市场-1', 'Market-2': '市场-2', 'Market-2 (cached)': '市场-2（缓存）',
            'Expeditions': '远征', 'Active Expedition': '进行中的远征', 'Decisions': '决策', 'Inventory': '库存', 'Mercenaries': '雇佣兵',
            'Archived Expeditions': '历史远征', 'Alarms': '提醒', 'Language': '语言', 'Watch:': '监控：', 'Alert when remaining:': '剩余时间提醒：',
            'Continuous (beep every 2s)': '持续提醒（每 2 秒响一次）', 'Volume:': '音量：', 'On': '开启', 'New Alarm': '新建提醒', 'Edit Alarm': '编辑提醒',
            'Save': '保存', 'Cancel': '取消', 'Test': '测试', 'Check for Updates': '检查更新',
            'Open in separate window': '在单独窗口打开', 'Open as side panel': '作为侧边栏打开', 'Refresh all data': '刷新全部数据',
            'Change theme': '切换主题', 'Pin Daily Ops': '置顶每日任务', 'Refresh Daily Ops': '刷新每日任务',
            'Pin Market Timer': '置顶市场计时器', 'Refresh Market': '刷新市场', 'Refresh Expeditions': '刷新远征',
            'Pin Expedition Timer': '置顶远征计时器', 'Edit modifiers': '编辑倍率', 'Refresh Inventory': '刷新库存',
            'Refresh Mercenaries': '刷新雇佣兵', 'Refresh Archived': '刷新历史记录', 'Stop all sounding alarms': '停止所有响铃提醒',
            'Add new alarm': '添加新提醒', 'No market data cached yet.': '还没有缓存的市场数据。', 'No expedition data yet.': '还没有远征数据。',
            'Loading inventory...': '正在加载库存...', 'Loading mercenaries...': '正在加载雇佣兵...', 'Loading archived expeditions...': '正在加载历史远征...',
            'No alarms configured. Click ➕ to add one.': '还没有配置提醒。点击 ➕ 添加。', 'No cor3.gg tab found.': '未找到 cor3.gg 标签页。',
            'Side panel not supported in this browser.': '此浏览器不支持侧边栏。', 'Alarm sounding...': '提醒响铃中...',
            'No active expeditions.': '没有进行中的远征。', 'No pending decisions found.': '没有待处理决策。', 'Loading expedition data...': '正在加载远征数据...',
            'Requesting inventory from server...': '正在向服务器请求库存...', 'No items found.': '未找到物品。', 'Make sure you have the cor3.gg tab open.': '请确认已打开 cor3.gg 标签页。',
            'Access token expired. Page refresh required.': '访问令牌已过期，需要刷新页面。', 'Expired': '已过期', 'Deadline: Expired': '截止：已过期',
            'Requesting market data...': '正在请求市场数据...', 'Refreshing market data...': '正在刷新市场数据...', 'No market data available.': '没有可用的市场数据。',
            'No cached market data available.': '没有可用的缓存市场数据。', 'No market data cached. Click 🔄 to refresh.': '没有缓存市场数据。点击 🔄 刷新。',
            'No items in market.': '市场中没有物品。', 'No jobs available.': '没有可用任务。', 'Items List': '物品列表', 'Jobs List': '任务列表', 'Details': '详情',
            'Manufacturer:': '制造商：', 'Tier:': '品质：', 'Vulnerability:': '脆弱度：', 'Base Price:': '基础价格：', 'Price Modifier:': '价格修正：',
            'Access Level:': '访问等级：', 'Type:': '类型：', 'Power:': '强度：', 'File Types:': '文件类型：', 'Server Types:': '服务器类型：', 'Remote:': '远程：',
            'Job': '任务', 'Server': '服务器', 'Reward': '奖励', 'D4RK market server is currently unreachable (no-path-to-server).': 'D4RK 市场服务器当前不可达（no-path-to-server）。',
            'Apply modifiers to scores': '将倍率应用到分数', 'Auto-choose highest score before deadline': '截止前自动选择最高分',
            'Auto-send selected mercenary after expedition ends': '远征结束后自动派出选中雇佣兵', 'Auto-choose cheapest available mercenary': '自动选择最便宜的可用雇佣兵',
            'Selected:': '已选择：', 'None': '无', '(defaults)': '（默认）', 'Claimed:': '已领取：', 'Streak:': '连续：', 'Difficulty:': '难度：', 'Bonus:': '奖励：',
            'Mercenary:': '雇佣兵：', 'Total Cost:': '总成本：', 'Insurance:': '保险：', 'Risk Score:': '风险分：', 'AUTO-RESOLVED': '自动解决', 'RESOLVED': '已解决', 'PENDING': '待处理',
            'Score:': '分数：', 'Risk:': '风险：', 'Loot:': '战利品：', 'AVAILABLE': '可用', 'RESTING': '休息中', 'CONTRACTED': '已签约', 'UNKNOWN': '未知', 'RUNNING': '进行中',
            'Unknown': '未知', 'Rank:': '等级：', 'Missions:': '任务数：', 'Spec:': '专长：', 'Trait:': '特质：', 'Rep Required:': '所需声望：', 'Cost:': '成本：',
            'Failed-Survive:': '失败存活：', 'Death:': '死亡：', 'Ready!': '就绪！', 'No archived expeditions found.': '未找到历史远征。', 'No mercenaries found.': '未找到雇佣兵。',
            'Collected': '已收集', 'Deleted': '已删除', 'Checking...': '正在检查...', 'Website is recently updated': '网站最近已更新', 'Updates detected:': '检测到更新：',
            'Download from GitHub': '从 GitHub 下载', 'Download ZIP, extract, and reload on chrome://extensions': '下载 ZIP、解压，然后在 chrome://extensions 重新加载',
            'Could not check for updates. Check your connection.': '无法检查更新，请检查网络连接。', 'BOUGHT': '已购买', 'CRAFT': '制作', 'USE': '使用'
        },
        'zh-TW': {
            'Default': '預設', 'Pinned Timers': '置頂計時器', 'Auto Decrypt Hacking': '自動解密破解', 'Auto Daily Hacking': '自動每日破解',
            'Daily Ops': '每日任務', 'Markets': '市場', 'Market-1': '市場-1', 'Market-2': '市場-2', 'Market-2 (cached)': '市場-2（快取）',
            'Expeditions': '遠征', 'Active Expedition': '進行中的遠征', 'Decisions': '決策', 'Inventory': '庫存', 'Mercenaries': '傭兵',
            'Archived Expeditions': '歷史遠征', 'Alarms': '提醒', 'Language': '語言', 'Watch:': '監控：', 'Alert when remaining:': '剩餘時間提醒：',
            'Continuous (beep every 2s)': '持續提醒（每 2 秒響一次）', 'Volume:': '音量：', 'On': '開啟', 'New Alarm': '新增提醒', 'Edit Alarm': '編輯提醒',
            'Save': '儲存', 'Cancel': '取消', 'Test': '測試', 'Check for Updates': '檢查更新',
            'Open in separate window': '在獨立視窗開啟', 'Open as side panel': '作為側邊欄開啟', 'Refresh all data': '重新整理全部資料',
            'Change theme': '切換主題', 'Pin Daily Ops': '置頂每日任務', 'Refresh Daily Ops': '重新整理每日任務',
            'Pin Market Timer': '置頂市場計時器', 'Refresh Market': '重新整理市場', 'Refresh Expeditions': '重新整理遠征',
            'Pin Expedition Timer': '置頂遠征計時器', 'Edit modifiers': '編輯倍率', 'Refresh Inventory': '重新整理庫存',
            'Refresh Mercenaries': '重新整理傭兵', 'Refresh Archived': '重新整理歷史記錄', 'Stop all sounding alarms': '停止所有響鈴提醒',
            'Add new alarm': '新增提醒', 'No market data cached yet.': '尚無快取市場資料。', 'No expedition data yet.': '尚無遠征資料。',
            'Loading inventory...': '正在載入庫存...', 'Loading mercenaries...': '正在載入傭兵...', 'Loading archived expeditions...': '正在載入歷史遠征...',
            'No alarms configured. Click ➕ to add one.': '尚未設定提醒。點擊 ➕ 新增。', 'No cor3.gg tab found.': '找不到 cor3.gg 分頁。',
            'Side panel not supported in this browser.': '此瀏覽器不支援側邊欄。', 'Alarm sounding...': '提醒響鈴中...',
            'No active expeditions.': '沒有進行中的遠征。', 'No pending decisions found.': '沒有待處理決策。', 'Loading expedition data...': '正在載入遠征資料...',
            'Requesting inventory from server...': '正在向伺服器請求庫存...', 'No items found.': '找不到物品。', 'Make sure you have the cor3.gg tab open.': '請確認已開啟 cor3.gg 分頁。',
            'Access token expired. Page refresh required.': '存取權杖已過期，需要重新整理頁面。', 'Expired': '已過期', 'Deadline: Expired': '截止：已過期',
            'Requesting market data...': '正在請求市場資料...', 'Refreshing market data...': '正在重新整理市場資料...', 'No market data available.': '沒有可用的市場資料。',
            'No cached market data available.': '沒有可用的快取市場資料。', 'No market data cached. Click 🔄 to refresh.': '沒有快取市場資料。點擊 🔄 重新整理。',
            'No items in market.': '市場中沒有物品。', 'No jobs available.': '沒有可用任務。', 'Items List': '物品列表', 'Jobs List': '任務列表', 'Details': '詳情',
            'Manufacturer:': '製造商：', 'Tier:': '品質：', 'Vulnerability:': '脆弱度：', 'Base Price:': '基礎價格：', 'Price Modifier:': '價格修正：',
            'Access Level:': '存取等級：', 'Type:': '類型：', 'Power:': '強度：', 'File Types:': '檔案類型：', 'Server Types:': '伺服器類型：', 'Remote:': '遠端：',
            'Job': '任務', 'Server': '伺服器', 'Reward': '獎勵', 'D4RK market server is currently unreachable (no-path-to-server).': 'D4RK 市場伺服器目前無法連線（no-path-to-server）。',
            'Apply modifiers to scores': '將倍率套用到分數', 'Auto-choose highest score before deadline': '截止前自動選擇最高分',
            'Auto-send selected mercenary after expedition ends': '遠征結束後自動派出選中傭兵', 'Auto-choose cheapest available mercenary': '自動選擇最便宜的可用傭兵',
            'Selected:': '已選擇：', 'None': '無', '(defaults)': '（預設）', 'Claimed:': '已領取：', 'Streak:': '連續：', 'Difficulty:': '難度：', 'Bonus:': '獎勵：',
            'Mercenary:': '傭兵：', 'Total Cost:': '總成本：', 'Insurance:': '保險：', 'Risk Score:': '風險分：', 'AUTO-RESOLVED': '自動解決', 'RESOLVED': '已解決', 'PENDING': '待處理',
            'Score:': '分數：', 'Risk:': '風險：', 'Loot:': '戰利品：', 'AVAILABLE': '可用', 'RESTING': '休息中', 'CONTRACTED': '已簽約', 'UNKNOWN': '未知', 'RUNNING': '進行中',
            'Unknown': '未知', 'Rank:': '等級：', 'Missions:': '任務數：', 'Spec:': '專長：', 'Trait:': '特質：', 'Rep Required:': '所需聲望：', 'Cost:': '成本：',
            'Failed-Survive:': '失敗存活：', 'Death:': '死亡：', 'Ready!': '就緒！', 'No archived expeditions found.': '找不到歷史遠征。', 'No mercenaries found.': '找不到傭兵。',
            'Collected': '已收集', 'Deleted': '已刪除', 'Checking...': '正在檢查...', 'Website is recently updated': '網站最近已更新', 'Updates detected:': '偵測到更新：',
            'Download from GitHub': '從 GitHub 下載', 'Download ZIP, extract, and reload on chrome://extensions': '下載 ZIP、解壓縮，然後在 chrome://extensions 重新載入',
            'Could not check for updates. Check your connection.': '無法檢查更新，請檢查網路連線。', 'BOUGHT': '已購買', 'CRAFT': '製作', 'USE': '使用'
        },
        ja: {
            'Default': '既定', 'Pinned Timers': '固定タイマー', 'Auto Decrypt Hacking': '自動復号ハック', 'Auto Daily Hacking': '自動デイリーハック',
            'Daily Ops': 'デイリー任務', 'Markets': 'マーケット', 'Market-1': 'マーケット-1', 'Market-2': 'マーケット-2', 'Market-2 (cached)': 'マーケット-2（キャッシュ）',
            'Expeditions': '遠征', 'Active Expedition': '進行中の遠征', 'Decisions': '判断', 'Inventory': 'インベントリ', 'Mercenaries': '傭兵',
            'Archived Expeditions': '過去の遠征', 'Alarms': 'アラーム', 'Language': '言語', 'Watch:': '監視:', 'Alert when remaining:': '残り時間で通知:',
            'Continuous (beep every 2s)': '連続（2秒ごとにビープ）', 'Volume:': '音量:', 'On': 'オン', 'New Alarm': '新しいアラーム', 'Edit Alarm': 'アラーム編集',
            'Save': '保存', 'Cancel': 'キャンセル', 'Test': 'テスト', 'Check for Updates': '更新を確認',
            'Open in separate window': '別ウィンドウで開く', 'Open as side panel': 'サイドパネルで開く', 'Refresh all data': '全データを更新',
            'Change theme': 'テーマを変更', 'Pin Daily Ops': 'デイリー任務を固定', 'Refresh Daily Ops': 'デイリー任務を更新',
            'Pin Market Timer': 'マーケットタイマーを固定', 'Refresh Market': 'マーケットを更新', 'Refresh Expeditions': '遠征を更新',
            'Pin Expedition Timer': '遠征タイマーを固定', 'Edit modifiers': '倍率を編集', 'Refresh Inventory': 'インベントリを更新',
            'Refresh Mercenaries': '傭兵を更新', 'Refresh Archived': '履歴を更新', 'Stop all sounding alarms': '鳴っているアラームをすべて停止',
            'Add new alarm': 'アラームを追加', 'No market data cached yet.': 'キャッシュされたマーケットデータはまだありません。', 'No expedition data yet.': '遠征データはまだありません。',
            'Loading inventory...': 'インベントリを読み込み中...', 'Loading mercenaries...': '傭兵を読み込み中...', 'Loading archived expeditions...': '過去の遠征を読み込み中...',
            'No alarms configured. Click ➕ to add one.': 'アラームは未設定です。➕で追加してください。', 'No cor3.gg tab found.': 'cor3.gg タブが見つかりません。',
            'Side panel not supported in this browser.': 'このブラウザはサイドパネルに対応していません。', 'Alarm sounding...': 'アラーム鳴動中...',
            'No active expeditions.': '進行中の遠征はありません。', 'No pending decisions found.': '保留中の判断はありません。', 'Loading expedition data...': '遠征データを読み込み中...',
            'Requesting inventory from server...': 'サーバーからインベントリを取得中...', 'No items found.': 'アイテムが見つかりません。', 'Make sure you have the cor3.gg tab open.': 'cor3.gg タブが開いていることを確認してください。',
            'Access token expired. Page refresh required.': 'アクセストークンの期限が切れました。ページを更新してください。', 'Expired': '期限切れ', 'Deadline: Expired': '期限: 切れ',
            'Requesting market data...': 'マーケットデータを取得中...', 'Refreshing market data...': 'マーケットデータを更新中...', 'No market data available.': '利用可能なマーケットデータはありません。',
            'No cached market data available.': '利用可能なキャッシュデータはありません。', 'No market data cached. Click 🔄 to refresh.': 'キャッシュデータがありません。🔄で更新してください。',
            'No items in market.': 'マーケットにアイテムはありません。', 'No jobs available.': '利用可能なジョブはありません。', 'Items List': 'アイテム一覧', 'Jobs List': 'ジョブ一覧', 'Details': '詳細',
            'Manufacturer:': 'メーカー:', 'Tier:': 'ティア:', 'Vulnerability:': '脆弱性:', 'Base Price:': '基本価格:', 'Price Modifier:': '価格補正:',
            'Access Level:': 'アクセスレベル:', 'Type:': 'タイプ:', 'Power:': 'パワー:', 'File Types:': 'ファイル種別:', 'Server Types:': 'サーバー種別:', 'Remote:': 'リモート:',
            'Job': 'ジョブ', 'Server': 'サーバー', 'Reward': '報酬', 'D4RK market server is currently unreachable (no-path-to-server).': 'D4RK マーケットサーバーは現在到達不能です（no-path-to-server）。',
            'Apply modifiers to scores': '倍率をスコアに適用', 'Auto-choose highest score before deadline': '期限前に最高スコアを自動選択',
            'Auto-send selected mercenary after expedition ends': '遠征終了後に選択した傭兵を自動送信', 'Auto-choose cheapest available mercenary': '最安の利用可能な傭兵を自動選択',
            'Selected:': '選択中:', 'None': 'なし', '(defaults)': '（既定）', 'Claimed:': '受取済み:', 'Streak:': '連続:', 'Difficulty:': '難易度:', 'Bonus:': 'ボーナス:',
            'Mercenary:': '傭兵:', 'Total Cost:': '総コスト:', 'Insurance:': '保険:', 'Risk Score:': 'リスクスコア:', 'AUTO-RESOLVED': '自動解決', 'RESOLVED': '解決済み', 'PENDING': '保留中',
            'Score:': 'スコア:', 'Risk:': 'リスク:', 'Loot:': '戦利品:', 'AVAILABLE': '利用可能', 'RESTING': '休息中', 'CONTRACTED': '契約中', 'UNKNOWN': '不明', 'RUNNING': '実行中',
            'Unknown': '不明', 'Rank:': 'ランク:', 'Missions:': 'ミッション:', 'Spec:': '専門:', 'Trait:': '特性:', 'Rep Required:': '必要評判:', 'Cost:': 'コスト:',
            'Failed-Survive:': '失敗-生存:', 'Death:': '死亡:', 'Ready!': '準備完了！', 'No archived expeditions found.': '過去の遠征は見つかりません。', 'No mercenaries found.': '傭兵が見つかりません。',
            'Collected': '回収済み', 'Deleted': '削除済み', 'Checking...': '確認中...', 'Website is recently updated': 'ウェブサイトが最近更新されました', 'Updates detected:': '更新が見つかりました:',
            'Download from GitHub': 'GitHub からダウンロード', 'Download ZIP, extract, and reload on chrome://extensions': 'ZIP をダウンロードして展開し、chrome://extensions で再読み込みしてください',
            'Could not check for updates. Check your connection.': '更新を確認できませんでした。接続を確認してください。', 'BOUGHT': '購入済み', 'CRAFT': '作成', 'USE': '使用'
        },
        pl: {
            'Default': 'Domyślny', 'Pinned Timers': 'Przypięte liczniki', 'Auto Decrypt Hacking': 'Automatyczne odszyfrowywanie', 'Auto Daily Hacking': 'Automatyczny daily hack',
            'Daily Ops': 'Dzienne operacje', 'Markets': 'Rynki', 'Market-1': 'Rynek-1', 'Market-2': 'Rynek-2', 'Market-2 (cached)': 'Rynek-2 (cache)',
            'Expeditions': 'Ekspedycje', 'Active Expedition': 'Aktywna ekspedycja', 'Decisions': 'Decyzje', 'Inventory': 'Ekwipunek', 'Mercenaries': 'Najemnicy',
            'Archived Expeditions': 'Archiwalne ekspedycje', 'Alarms': 'Alarmy', 'Language': 'Język', 'Watch:': 'Obserwuj:', 'Alert when remaining:': 'Powiadom, gdy zostało:',
            'Continuous (beep every 2s)': 'Ciągły (sygnał co 2 s)', 'Volume:': 'Głośność:', 'On': 'Wł.', 'New Alarm': 'Nowy alarm', 'Edit Alarm': 'Edytuj alarm',
            'Save': 'Zapisz', 'Cancel': 'Anuluj', 'Test': 'Test', 'Check for Updates': 'Sprawdź aktualizacje',
            'Open in separate window': 'Otwórz w osobnym oknie', 'Open as side panel': 'Otwórz jako panel boczny', 'Refresh all data': 'Odśwież wszystkie dane',
            'Change theme': 'Zmień motyw', 'Pin Daily Ops': 'Przypnij dzienne operacje', 'Refresh Daily Ops': 'Odśwież dzienne operacje',
            'Pin Market Timer': 'Przypnij licznik rynku', 'Refresh Market': 'Odśwież rynek', 'Refresh Expeditions': 'Odśwież ekspedycje',
            'Pin Expedition Timer': 'Przypnij licznik ekspedycji', 'Edit modifiers': 'Edytuj modyfikatory', 'Refresh Inventory': 'Odśwież ekwipunek',
            'Refresh Mercenaries': 'Odśwież najemników', 'Refresh Archived': 'Odśwież archiwum', 'Stop all sounding alarms': 'Zatrzymaj wszystkie alarmy',
            'Add new alarm': 'Dodaj alarm', 'No market data cached yet.': 'Brak danych rynku w cache.', 'No expedition data yet.': 'Brak danych ekspedycji.',
            'Loading inventory...': 'Ładowanie ekwipunku...', 'Loading mercenaries...': 'Ładowanie najemników...', 'Loading archived expeditions...': 'Ładowanie archiwalnych ekspedycji...',
            'No alarms configured. Click ➕ to add one.': 'Brak alarmów. Kliknij ➕, aby dodać.', 'No cor3.gg tab found.': 'Nie znaleziono karty cor3.gg.',
            'Side panel not supported in this browser.': 'Panel boczny nie jest obsługiwany w tej przeglądarce.', 'Alarm sounding...': 'Alarm dzwoni...',
            'No active expeditions.': 'Brak aktywnych ekspedycji.', 'No pending decisions found.': 'Brak oczekujących decyzji.', 'Loading expedition data...': 'Ładowanie danych ekspedycji...',
            'Requesting inventory from server...': 'Pobieranie ekwipunku z serwera...', 'No items found.': 'Nie znaleziono przedmiotów.', 'Make sure you have the cor3.gg tab open.': 'Upewnij się, że karta cor3.gg jest otwarta.',
            'Access token expired. Page refresh required.': 'Token dostępu wygasł. Odśwież stronę.', 'Expired': 'Wygasło', 'Deadline: Expired': 'Termin: wygasł',
            'Requesting market data...': 'Pobieranie danych rynku...', 'Refreshing market data...': 'Odświeżanie danych rynku...', 'No market data available.': 'Brak dostępnych danych rynku.',
            'No cached market data available.': 'Brak danych rynku w cache.', 'No market data cached. Click 🔄 to refresh.': 'Brak danych rynku w cache. Kliknij 🔄, aby odświeżyć.',
            'No items in market.': 'Brak przedmiotów na rynku.', 'No jobs available.': 'Brak dostępnych zadań.', 'Items List': 'Lista przedmiotów', 'Jobs List': 'Lista zadań', 'Details': 'Szczegóły',
            'Manufacturer:': 'Producent:', 'Tier:': 'Poziom:', 'Vulnerability:': 'Podatność:', 'Base Price:': 'Cena bazowa:', 'Price Modifier:': 'Modyfikator ceny:',
            'Access Level:': 'Poziom dostępu:', 'Type:': 'Typ:', 'Power:': 'Moc:', 'File Types:': 'Typy plików:', 'Server Types:': 'Typy serwerów:', 'Remote:': 'Zdalnie:',
            'Job': 'Zadanie', 'Server': 'Serwer', 'Reward': 'Nagroda', 'D4RK market server is currently unreachable (no-path-to-server).': 'Serwer rynku D4RK jest obecnie nieosiągalny (no-path-to-server).',
            'Apply modifiers to scores': 'Stosuj modyfikatory do wyników', 'Auto-choose highest score before deadline': 'Automatycznie wybierz najwyższy wynik przed terminem',
            'Auto-send selected mercenary after expedition ends': 'Automatycznie wyślij wybranego najemnika po ekspedycji', 'Auto-choose cheapest available mercenary': 'Automatycznie wybierz najtańszego dostępnego najemnika',
            'Selected:': 'Wybrano:', 'None': 'Brak', '(defaults)': '(domyślne)', 'Claimed:': 'Odebrane:', 'Streak:': 'Seria:', 'Difficulty:': 'Trudność:', 'Bonus:': 'Bonus:',
            'Mercenary:': 'Najemnik:', 'Total Cost:': 'Całkowity koszt:', 'Insurance:': 'Ubezpieczenie:', 'Risk Score:': 'Wynik ryzyka:', 'AUTO-RESOLVED': 'AUTO-ROZWIĄZANE', 'RESOLVED': 'ROZWIĄZANE', 'PENDING': 'OCZEKUJE',
            'Score:': 'Wynik:', 'Risk:': 'Ryzyko:', 'Loot:': 'Łup:', 'AVAILABLE': 'DOSTĘPNY', 'RESTING': 'ODPOCZYWA', 'CONTRACTED': 'KONTRAKT', 'UNKNOWN': 'NIEZNANE', 'RUNNING': 'W TOKU',
            'Unknown': 'Nieznane', 'Rank:': 'Ranga:', 'Missions:': 'Misje:', 'Spec:': 'Spec.:', 'Trait:': 'Cecha:', 'Rep Required:': 'Wym. reputacja:', 'Cost:': 'Koszt:',
            'Failed-Survive:': 'Porażka-przetrwanie:', 'Death:': 'Śmierć:', 'Ready!': 'Gotowe!', 'No archived expeditions found.': 'Nie znaleziono archiwalnych ekspedycji.', 'No mercenaries found.': 'Nie znaleziono najemników.',
            'Collected': 'Zebrano', 'Deleted': 'Usunięto', 'Checking...': 'Sprawdzanie...', 'Website is recently updated': 'Strona została niedawno zaktualizowana', 'Updates detected:': 'Wykryto aktualizacje:',
            'Download from GitHub': 'Pobierz z GitHub', 'Download ZIP, extract, and reload on chrome://extensions': 'Pobierz ZIP, rozpakuj i przeładuj w chrome://extensions',
            'Could not check for updates. Check your connection.': 'Nie można sprawdzić aktualizacji. Sprawdź połączenie.', 'BOUGHT': 'KUPIONE', 'CRAFT': 'WYTWÓRZ', 'USE': 'UŻYJ'
        },
        uk: {
            'Default': 'Типова', 'Pinned Timers': 'Закріплені таймери', 'Auto Decrypt Hacking': 'Автоматичне дешифрування', 'Auto Daily Hacking': 'Автоматичний щоденний злам',
            'Daily Ops': 'Щоденні операції', 'Markets': 'Ринки', 'Market-1': 'Ринок-1', 'Market-2': 'Ринок-2', 'Market-2 (cached)': 'Ринок-2 (кеш)',
            'Expeditions': 'Експедиції', 'Active Expedition': 'Активна експедиція', 'Decisions': 'Рішення', 'Inventory': 'Інвентар', 'Mercenaries': 'Найманці',
            'Archived Expeditions': 'Архівні експедиції', 'Alarms': 'Будильники', 'Language': 'Мова', 'Watch:': 'Стежити за:', 'Alert when remaining:': 'Сповістити, коли лишилось:',
            'Continuous (beep every 2s)': 'Безперервно (сигнал кожні 2 с)', 'Volume:': 'Гучність:', 'On': 'Увімк.', 'New Alarm': 'Новий будильник', 'Edit Alarm': 'Редагувати будильник',
            'Save': 'Зберегти', 'Cancel': 'Скасувати', 'Test': 'Тест', 'Check for Updates': 'Перевірити оновлення',
            'Open in separate window': 'Відкрити в окремому вікні', 'Open as side panel': 'Відкрити як бічну панель', 'Refresh all data': 'Оновити всі дані',
            'Change theme': 'Змінити тему', 'Pin Daily Ops': 'Закріпити щоденні операції', 'Refresh Daily Ops': 'Оновити щоденні операції',
            'Pin Market Timer': 'Закріпити таймер ринку', 'Refresh Market': 'Оновити ринок', 'Refresh Expeditions': 'Оновити експедиції',
            'Pin Expedition Timer': 'Закріпити таймер експедиції', 'Edit modifiers': 'Редагувати модифікатори', 'Refresh Inventory': 'Оновити інвентар',
            'Refresh Mercenaries': 'Оновити найманців', 'Refresh Archived': 'Оновити архів', 'Stop all sounding alarms': 'Зупинити всі активні будильники',
            'Add new alarm': 'Додати будильник', 'No market data cached yet.': 'Дані ринку ще не кешовано.', 'No expedition data yet.': 'Даних експедиції ще немає.',
            'Loading inventory...': 'Завантаження інвентарю...', 'Loading mercenaries...': 'Завантаження найманців...', 'Loading archived expeditions...': 'Завантаження архівних експедицій...',
            'No alarms configured. Click ➕ to add one.': 'Будильники не налаштовано. Натисніть ➕, щоб додати.', 'No cor3.gg tab found.': 'Вкладку cor3.gg не знайдено.',
            'Side panel not supported in this browser.': 'Бічна панель не підтримується цим браузером.', 'Alarm sounding...': 'Будильник лунає...',
            'No active expeditions.': 'Немає активних експедицій.', 'No pending decisions found.': 'Немає рішень в очікуванні.', 'Loading expedition data...': 'Завантаження даних експедиції...',
            'Requesting inventory from server...': 'Запит інвентарю із сервера...', 'No items found.': 'Предмети не знайдено.', 'Make sure you have the cor3.gg tab open.': 'Переконайтеся, що вкладку cor3.gg відкрито.',
            'Access token expired. Page refresh required.': 'Термін дії токена минув. Оновіть сторінку.', 'Expired': 'Минуло', 'Deadline: Expired': 'Дедлайн: минув',
            'Requesting market data...': 'Запит даних ринку...', 'Refreshing market data...': 'Оновлення даних ринку...', 'No market data available.': 'Дані ринку недоступні.',
            'No cached market data available.': 'Немає кешованих даних ринку.', 'No market data cached. Click 🔄 to refresh.': 'Дані ринку не кешовано. Натисніть 🔄 для оновлення.',
            'No items in market.': 'На ринку немає предметів.', 'No jobs available.': 'Немає доступних завдань.', 'Items List': 'Список предметів', 'Jobs List': 'Список завдань', 'Details': 'Деталі',
            'Manufacturer:': 'Виробник:', 'Tier:': 'Рівень:', 'Vulnerability:': 'Вразливість:', 'Base Price:': 'Базова ціна:', 'Price Modifier:': 'Модифікатор ціни:',
            'Access Level:': 'Рівень доступу:', 'Type:': 'Тип:', 'Power:': 'Потужність:', 'File Types:': 'Типи файлів:', 'Server Types:': 'Типи серверів:', 'Remote:': 'Віддалено:',
            'Job': 'Завдання', 'Server': 'Сервер', 'Reward': 'Нагорода', 'D4RK market server is currently unreachable (no-path-to-server).': 'Сервер ринку D4RK наразі недоступний (no-path-to-server).',
            'Apply modifiers to scores': 'Застосовувати модифікатори до рахунку', 'Auto-choose highest score before deadline': 'Автоматично вибирати найвищий рахунок до дедлайну',
            'Auto-send selected mercenary after expedition ends': 'Автоматично відправляти вибраного найманця після експедиції', 'Auto-choose cheapest available mercenary': 'Автоматично вибирати найдешевшого доступного найманця',
            'Selected:': 'Вибрано:', 'None': 'Немає', '(defaults)': '(типові)', 'Claimed:': 'Отримано:', 'Streak:': 'Серія:', 'Difficulty:': 'Складність:', 'Bonus:': 'Бонус:',
            'Mercenary:': 'Найманець:', 'Total Cost:': 'Загальна вартість:', 'Insurance:': 'Страхування:', 'Risk Score:': 'Рахунок ризику:', 'AUTO-RESOLVED': 'АВТОВИРІШЕНО', 'RESOLVED': 'ВИРІШЕНО', 'PENDING': 'ОЧІКУЄ',
            'Score:': 'Рахунок:', 'Risk:': 'Ризик:', 'Loot:': 'Здобич:', 'AVAILABLE': 'ДОСТУПНИЙ', 'RESTING': 'ВІДПОЧИВАЄ', 'CONTRACTED': 'ЗА КОНТРАКТОМ', 'UNKNOWN': 'НЕВІДОМО', 'RUNNING': 'ТРИВАЄ',
            'Unknown': 'Невідомо', 'Rank:': 'Ранг:', 'Missions:': 'Місії:', 'Spec:': 'Спец.:', 'Trait:': 'Риса:', 'Rep Required:': 'Потрібна репутація:', 'Cost:': 'Вартість:',
            'Failed-Survive:': 'Провал-виживання:', 'Death:': 'Смерть:', 'Ready!': 'Готово!', 'No archived expeditions found.': 'Архівні експедиції не знайдено.', 'No mercenaries found.': 'Найманців не знайдено.',
            'Collected': 'Зібрано', 'Deleted': 'Видалено', 'Checking...': 'Перевірка...', 'Website is recently updated': 'Сайт нещодавно оновлено', 'Updates detected:': 'Виявлено оновлення:',
            'Download from GitHub': 'Завантажити з GitHub', 'Download ZIP, extract, and reload on chrome://extensions': 'Завантажте ZIP, розпакуйте та перезавантажте на chrome://extensions',
            'Could not check for updates. Check your connection.': 'Не вдалося перевірити оновлення. Перевірте з’єднання.', 'BOUGHT': 'КУПЛЕНО', 'CRAFT': 'СТВОРИТИ', 'USE': 'ВИКОР.'
        },
        tr: {
            'Default': 'Varsayılan', 'Pinned Timers': 'Sabitlenen zamanlayıcılar', 'Auto Decrypt Hacking': 'Otomatik şifre çözme', 'Auto Daily Hacking': 'Otomatik günlük hack',
            'Daily Ops': 'Günlük operasyonlar', 'Markets': 'Pazarlar', 'Market-1': 'Pazar-1', 'Market-2': 'Pazar-2', 'Market-2 (cached)': 'Pazar-2 (önbellek)',
            'Expeditions': 'Seferler', 'Active Expedition': 'Aktif sefer', 'Decisions': 'Kararlar', 'Inventory': 'Envanter', 'Mercenaries': 'Paralı askerler',
            'Archived Expeditions': 'Arşiv seferleri', 'Alarms': 'Alarmlar', 'Language': 'Dil', 'Watch:': 'İzle:', 'Alert when remaining:': 'Kalan süre uyarısı:',
            'Continuous (beep every 2s)': 'Sürekli (2 sn’de bir bip)', 'Volume:': 'Ses:', 'On': 'Açık', 'New Alarm': 'Yeni alarm', 'Edit Alarm': 'Alarmı düzenle',
            'Save': 'Kaydet', 'Cancel': 'İptal', 'Test': 'Test', 'Check for Updates': 'Güncellemeleri denetle',
            'Open in separate window': 'Ayrı pencerede aç', 'Open as side panel': 'Yan panel olarak aç', 'Refresh all data': 'Tüm verileri yenile',
            'Change theme': 'Temayı değiştir', 'Pin Daily Ops': 'Günlük operasyonları sabitle', 'Refresh Daily Ops': 'Günlük operasyonları yenile',
            'Pin Market Timer': 'Pazar zamanlayıcısını sabitle', 'Refresh Market': 'Pazarı yenile', 'Refresh Expeditions': 'Seferleri yenile',
            'Pin Expedition Timer': 'Sefer zamanlayıcısını sabitle', 'Edit modifiers': 'Çarpanları düzenle', 'Refresh Inventory': 'Envanteri yenile',
            'Refresh Mercenaries': 'Paralı askerleri yenile', 'Refresh Archived': 'Arşivi yenile', 'Stop all sounding alarms': 'Çalan tüm alarmları durdur',
            'Add new alarm': 'Yeni alarm ekle', 'No market data cached yet.': 'Henüz önbelleğe alınmış pazar verisi yok.', 'No expedition data yet.': 'Henüz sefer verisi yok.',
            'Loading inventory...': 'Envanter yükleniyor...', 'Loading mercenaries...': 'Paralı askerler yükleniyor...', 'Loading archived expeditions...': 'Arşiv seferleri yükleniyor...',
            'No alarms configured. Click ➕ to add one.': 'Alarm yapılandırılmadı. Eklemek için ➕ tıklayın.', 'No cor3.gg tab found.': 'cor3.gg sekmesi bulunamadı.',
            'Side panel not supported in this browser.': 'Bu tarayıcı yan paneli desteklemiyor.', 'Alarm sounding...': 'Alarm çalıyor...',
            'No active expeditions.': 'Aktif sefer yok.', 'No pending decisions found.': 'Bekleyen karar yok.', 'Loading expedition data...': 'Sefer verileri yükleniyor...',
            'Requesting inventory from server...': 'Sunucudan envanter isteniyor...', 'No items found.': 'Eşya bulunamadı.', 'Make sure you have the cor3.gg tab open.': 'cor3.gg sekmesinin açık olduğundan emin olun.',
            'Access token expired. Page refresh required.': 'Erişim belirteci süresi doldu. Sayfayı yenileyin.', 'Expired': 'Süresi doldu', 'Deadline: Expired': 'Son süre: doldu',
            'Requesting market data...': 'Pazar verileri isteniyor...', 'Refreshing market data...': 'Pazar verileri yenileniyor...', 'No market data available.': 'Pazar verisi yok.',
            'No cached market data available.': 'Önbellekte pazar verisi yok.', 'No market data cached. Click 🔄 to refresh.': 'Önbellekte pazar verisi yok. Yenilemek için 🔄 tıklayın.',
            'No items in market.': 'Pazarda eşya yok.', 'No jobs available.': 'Uygun iş yok.', 'Items List': 'Eşya listesi', 'Jobs List': 'İş listesi', 'Details': 'Ayrıntılar',
            'Manufacturer:': 'Üretici:', 'Tier:': 'Kademe:', 'Vulnerability:': 'Açıklık:', 'Base Price:': 'Taban fiyat:', 'Price Modifier:': 'Fiyat değiştirici:',
            'Access Level:': 'Erişim seviyesi:', 'Type:': 'Tür:', 'Power:': 'Güç:', 'File Types:': 'Dosya türleri:', 'Server Types:': 'Sunucu türleri:', 'Remote:': 'Uzak:',
            'Job': 'İş', 'Server': 'Sunucu', 'Reward': 'Ödül', 'D4RK market server is currently unreachable (no-path-to-server).': 'D4RK pazar sunucusuna şu anda ulaşılamıyor (no-path-to-server).',
            'Apply modifiers to scores': 'Çarpanları puanlara uygula', 'Auto-choose highest score before deadline': 'Son süreden önce en yüksek puanı otomatik seç',
            'Auto-send selected mercenary after expedition ends': 'Sefer bitince seçili paralı askeri otomatik gönder', 'Auto-choose cheapest available mercenary': 'En ucuz uygun paralı askeri otomatik seç',
            'Selected:': 'Seçili:', 'None': 'Yok', '(defaults)': '(varsayılan)', 'Claimed:': 'Alındı:', 'Streak:': 'Seri:', 'Difficulty:': 'Zorluk:', 'Bonus:': 'Bonus:',
            'Mercenary:': 'Paralı asker:', 'Total Cost:': 'Toplam maliyet:', 'Insurance:': 'Sigorta:', 'Risk Score:': 'Risk puanı:', 'AUTO-RESOLVED': 'OTOMATİK ÇÖZÜLDÜ', 'RESOLVED': 'ÇÖZÜLDÜ', 'PENDING': 'BEKLİYOR',
            'Score:': 'Puan:', 'Risk:': 'Risk:', 'Loot:': 'Ganimet:', 'AVAILABLE': 'UYGUN', 'RESTING': 'DİNLENİYOR', 'CONTRACTED': 'SÖZLEŞMELİ', 'UNKNOWN': 'BİLİNMİYOR', 'RUNNING': 'SÜRÜYOR',
            'Unknown': 'Bilinmiyor', 'Rank:': 'Rütbe:', 'Missions:': 'Görevler:', 'Spec:': 'Uzmanlık:', 'Trait:': 'Özellik:', 'Rep Required:': 'Gerekli itibar:', 'Cost:': 'Maliyet:',
            'Failed-Survive:': 'Başarısız-sağ kalma:', 'Death:': 'Ölüm:', 'Ready!': 'Hazır!', 'No archived expeditions found.': 'Arşiv seferi bulunamadı.', 'No mercenaries found.': 'Paralı asker bulunamadı.',
            'Collected': 'Toplandı', 'Deleted': 'Silindi', 'Checking...': 'Denetleniyor...', 'Website is recently updated': 'Web sitesi yakın zamanda güncellendi', 'Updates detected:': 'Güncellemeler bulundu:',
            'Download from GitHub': 'GitHub’dan indir', 'Download ZIP, extract, and reload on chrome://extensions': 'ZIP’i indirip çıkarın, sonra chrome://extensions üzerinde yeniden yükleyin',
            'Could not check for updates. Check your connection.': 'Güncellemeler denetlenemedi. Bağlantınızı kontrol edin.', 'BOUGHT': 'ALINDI', 'CRAFT': 'ÜRET', 'USE': 'KULLAN'
        }
    };

    TEXT.en = {};

    function cloneLanguage(source, target) {
        TEXT[target] = Object.assign({}, TEXT[source], TEXT[target] || {});
    }

    cloneLanguage('zh-CN', 'zh-TW');

    const textSources = new WeakMap();
    let currentLanguage = 'en';
    let observer = null;
    let applying = false;
    const observerOptions = {
        childList: true,
        characterData: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['title', 'placeholder', 'aria-label', 'label']
    };

    function normalizeLanguage(language) {
        const lang = String(language || '').replace('_', '-');
        if (SUPPORTED.includes(lang)) return lang;
        const lower = lang.toLowerCase();
        if (lower === 'zh-tw' || lower === 'zh-hk' || lower === 'zh-mo' || lower === 'zh-hant') return 'zh-TW';
        if (lower === 'zh' || lower === 'zh-cn' || lower === 'zh-sg' || lower === 'zh-hans') return 'zh-CN';
        const short = lower.split('-')[0];
        return SUPPORTED.includes(short) ? short : 'en';
    }

    function browserLanguage() {
        const chromeLang = window.chrome && chrome.i18n && chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() : '';
        return normalizeLanguage(chromeLang || navigator.language || 'en');
    }

    function trExact(text, lang) {
        if (lang === 'en') return text;
        if (STATUS_TEXT[lang] && STATUS_TEXT[lang][text]) return STATUS_TEXT[lang][text];
        if (EXTRA_TEXT[lang] && EXTRA_TEXT[lang][text]) return EXTRA_TEXT[lang][text];
        return (TEXT[lang] && TEXT[lang][text]) || text;
    }

    function w(lang, key) {
        return (WORDS[lang] || WORDS.en)[key] || WORDS.en[key];
    }

    function translatePattern(text, lang) {
        let m;
        if (text === 'Updated just now') return w(lang, 'updatedJustNow');
        if ((m = text.match(/^Updated (\d+)m ago$/))) return w(lang, 'updatedM')(m[1]);
        if ((m = text.match(/^Updated (\d+)h (\d+)m ago$/))) return w(lang, 'updatedHM')(m[1], m[2]);
        if ((m = text.match(/^Status: (.+)$/))) return `${w(lang, 'status')}: ${translateValue(m[1], lang)}`;
        if ((m = text.match(/^\((\d+) pending\)$/))) return w(lang, 'pendingCount')(m[1]);
        if ((m = text.match(/^Deadline: (\d+)h (\d+)m remaining$/))) return w(lang, 'deadlineRemain')(m[1], m[2]);
        if ((m = text.match(/^Items List \((.+)\)$/))) return w(lang, 'itemsCount')(m[1]);
        if ((m = text.match(/^Jobs List \((.+)\)$/))) return w(lang, 'jobsCount')(m[1]);
        if ((m = text.match(/^Loot \((\d+) items\)$/))) return w(lang, 'lootItems')(m[1]);
        if ((m = text.match(/^Next Task: (.+)$/))) return w(lang, 'nextTask')(m[1]);
        if ((m = text.match(/^Jobs Reset: (.+)$/))) return w(lang, 'jobsReset')(m[1]);
        if ((m = text.match(/^Jobs: (.+)$/))) return w(lang, 'jobs')(m[1]);
        if ((m = text.match(/^(.+) Jobs Reset$/))) return w(lang, 'jobsResetLabel')(m[1]);
        if ((m = text.match(/^Score: (.+)$/))) return w(lang, 'score')(m[1]);
        if ((m = text.match(/^Risk: (.+)$/))) return w(lang, 'risk')(m[1]);
        if ((m = text.match(/^Loot: (.+)$/))) return w(lang, 'loot')(m[1]);
        if ((m = text.match(/^Credits: (.+)$/))) return w(lang, 'credits')(m[1]);
        if ((m = text.match(/^Reputation — Level (.+)$/))) return w(lang, 'reputationLevel')(m[1]);
        if ((m = text.match(/^Progress: (.+) · Level Locked: (Yes|No) · Max Level: (Yes|No)$/))) {
            return w(lang, 'progress')(m[1], translateValue(m[2], lang), translateValue(m[3], lang));
        }
        if ((m = text.match(/^Extension: (.+)$/))) return w(lang, 'extension')(m[1]);
        if ((m = text.match(/^Web: (.+)$/))) return w(lang, 'web')(m[1]);
        if ((m = text.match(/^System: (.+)$/))) return w(lang, 'system')(m[1]);
        if ((m = text.match(/^You're up to date! \((.+)\)$/))) return w(lang, 'upToDate')(m[1]);
        if ((m = text.match(/^Old version -> (.+)$/))) return (OLD_VERSION_PREFIX[lang] || 'Old version -> ') + m[1];
        if ((m = text.match(/^Aim for (.+) system version!$/))) return (AIM_FOR_PREFIX[lang] || 'Aim for ') + m[1] + (AIM_FOR_SUFFIX[lang] || ' system version!');
        return null;
    }

    function translateCore(core, lang) {
        const exact = trExact(core, lang);
        if (exact !== core) return exact;

        const patterned = translatePattern(core, lang);
        if (patterned) return patterned;

        const decorated = core.match(/^([^\p{L}\p{N}]*)([\s\S]+)$/u);
        if (decorated && decorated[1]) {
            const [, prefix, body] = decorated;
            const bodyExact = trExact(body, lang);
            if (bodyExact !== body) return prefix + bodyExact;
            const bodyPatterned = translatePattern(body, lang);
            if (bodyPatterned) return prefix + bodyPatterned;
        }
        return core;
    }

    function translateValue(value, lang = currentLanguage) {
        if (!value || lang === 'en') return value || '';
        const match = String(value).match(/^(\s*)([\s\S]*?)(\s*)$/);
        const leading = match ? match[1] : '';
        const core = match ? match[2] : String(value);
        const trailing = match ? match[3] : '';
        if (!core.trim()) return value;
        return leading + translateCore(core, lang) + trailing;
    }

    function shouldSkipNode(node) {
        const parent = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
        return !parent || parent.closest('script, style, [data-i18n-ignore]');
    }

    function translateTextNode(node) {
        if (shouldSkipNode(node)) return;
        if (!textSources.has(node)) textSources.set(node, node.nodeValue);
        const source = textSources.get(node);
        const translated = translateValue(source);
        if (node.nodeValue !== translated) node.nodeValue = translated;
    }

    function translateAttributes(element) {
        if (shouldSkipNode(element)) return;
        ['title', 'placeholder', 'aria-label'].forEach(attr => {
            if (!element.hasAttribute(attr)) return;
            const sourceAttr = `data-i18n-source-${attr}`;
            if (!element.hasAttribute(sourceAttr)) element.setAttribute(sourceAttr, element.getAttribute(attr));
            const source = element.getAttribute(sourceAttr);
            const translated = translateValue(source);
            if (element.getAttribute(attr) !== translated) element.setAttribute(attr, translated);
        });
        if (element.tagName === 'OPTGROUP' && element.hasAttribute('label')) {
            const sourceAttr = 'data-i18n-source-label';
            if (!element.hasAttribute(sourceAttr)) element.setAttribute(sourceAttr, element.getAttribute('label'));
            const source = element.getAttribute(sourceAttr);
            const translated = translateValue(source);
            if (element.getAttribute('label') !== translated) element.setAttribute('label', translated);
        }
    }

    function pauseObserver() {
        if (!observer) return false;
        observer.disconnect();
        observer.takeRecords();
        return true;
    }

    function resumeObserver(wasPaused) {
        if (!wasPaused || !observer || !document.body) return;
        observer.takeRecords();
        observer.observe(document.body, observerOptions);
    }

    function translateTree(root = document.body) {
        if (!root) return;
        const wasPaused = pauseObserver();
        const wasApplying = applying;
        applying = true;
        try {
            if (root.nodeType === Node.TEXT_NODE) {
                translateTextNode(root);
                return;
            }
            const elementRoot = root.nodeType === Node.ELEMENT_NODE ? root : root.parentElement;
            if (elementRoot) {
                translateAttributes(elementRoot);
                elementRoot.querySelectorAll('*').forEach(translateAttributes);
            }
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
                acceptNode(node) {
                    return shouldSkipNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
                }
            });
            const nodes = [];
            while (walker.nextNode()) nodes.push(walker.currentNode);
            nodes.forEach(translateTextNode);
        } finally {
            applying = wasApplying;
            resumeObserver(wasPaused);
        }
    }

    function populateLanguageSelect() {
        const select = document.getElementById('languageSelect');
        if (!select) return;
        select.innerHTML = SUPPORTED.map(code => `<option value="${code}">${LANG_NAMES[code]}</option>`).join('');
        select.value = currentLanguage;
        select.addEventListener('change', () => {
            setLanguage(select.value, true);
        });
    }

    function setLanguage(language, persist) {
        currentLanguage = normalizeLanguage(language);
        const select = document.getElementById('languageSelect');
        if (select && select.value !== currentLanguage) select.value = currentLanguage;
        if (persist && window.chrome && chrome.storage && chrome.storage.sync) {
            chrome.storage.sync.set({ [STORAGE_KEY]: currentLanguage });
        }
        translateTree();
    }

    function startObserver() {
        if (observer || !document.body) return;
        observer = new MutationObserver(mutations => {
            if (applying) return;
            const wasPaused = pauseObserver();
            applying = true;
            try {
                mutations.forEach(mutation => {
                    if (mutation.type === 'characterData') {
                        textSources.delete(mutation.target);
                        translateTextNode(mutation.target);
                    } else if (mutation.type === 'attributes') {
                        const sourceAttr = `data-i18n-source-${mutation.attributeName}`;
                        mutation.target.removeAttribute(sourceAttr);
                        translateAttributes(mutation.target);
                    } else {
                        mutation.addedNodes.forEach(node => translateTree(node));
                    }
                });
            } finally {
                applying = false;
                resumeObserver(wasPaused);
            }
        });
        observer.observe(document.body, observerOptions);
    }

    function init() {
        const detected = browserLanguage();
        const apply = saved => {
            currentLanguage = normalizeLanguage(saved || detected);
            populateLanguageSelect();
            translateTree();
            startObserver();
        };

        if (window.chrome && chrome.storage && chrome.storage.sync) {
            chrome.storage.sync.get(STORAGE_KEY, data => apply(data && data[STORAGE_KEY]));
        } else {
            apply(null);
        }
    }

    window.COR3I18N = {
        languages: LANG_NAMES,
        getLanguage: () => currentLanguage,
        setLanguage,
        t: translateValue,
        apply: () => translateTree()
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
