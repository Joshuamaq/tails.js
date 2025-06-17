import { addPlugin } from "../tails.js";

// Icons Plugin - Complete rewrite using new plugin syntax
addPlugin(() => ({
    // === VARIABLES ===
    $iconSizeXs: "0.75rem",
    $iconSizeSm: "1rem", 
    $iconSizeMd: "1.25rem",
    $iconSizeLg: "1.5rem",
    $iconSizeXl: "2rem",
    $iconSize2xl: "2.5rem",
    $iconSize3xl: "3rem",
    
    // === BASE UTILITIES ===
    ".icon": {
        display: "inline-block",
        lineHeight: "1",
        verticalAlign: "middle",
        fontStyle: "normal",
        userSelect: "none"
    },
    
    // === ICON SIZES ===
    ".icon-xs": {
        fontSize: "$iconSizeXs",
        width: "$iconSizeXs",
        height: "$iconSizeXs"
    },
    ".icon-sm": {
        fontSize: "$iconSizeSm",
        width: "$iconSizeSm",
        height: "$iconSizeSm"
    },
    ".icon-md": {
        fontSize: "$iconSizeMd",
        width: "$iconSizeMd",
        height: "$iconSizeMd"
    },
    ".icon-lg": {
        fontSize: "$iconSizeLg",
        width: "$iconSizeLg",
        height: "$iconSizeLg"
    },
    ".icon-xl": {
        fontSize: "$iconSizeXl",
        width: "$iconSizeXl",
        height: "$iconSizeXl"
    },
    ".icon-2xl": {
        fontSize: "$iconSize2xl",
        width: "$iconSize2xl",
        height: "$iconSize2xl"
    },
    ".icon-3xl": {
        fontSize: "$iconSize3xl",
        width: "$iconSize3xl",
        height: "$iconSize3xl"
    },
    
    // === NAVIGATION & UI ICONS ===
    ".icon-home": {
        "&::before": { content: "'🏠'" }
    },
    ".icon-menu": {
        "&::before": { content: "'☰'" }
    },
    ".icon-close": {
        "&::before": { content: "'✕'" }
    },
    ".icon-search": {
        "&::before": { content: "'🔍'" }
    },
    ".icon-filter": {
        "&::before": { content: "'🔽'" }
    },
    ".icon-settings": {
        "&::before": { content: "'⚙️'" }
    },
    ".icon-profile": {
        "&::before": { content: "'👤'" }
    },
    ".icon-logout": {
        "&::before": { content: "'↩️'" }
    },
    ".icon-login": {
        "&::before": { content: "'↪️'" }
    },
    ".icon-dashboard": {
        "&::before": { content: "'📊'" }
    },
    
    // === ARROWS & DIRECTIONS ===
    ".icon-arrow-up": {
        "&::before": { content: "'↑'" }
    },
    ".icon-arrow-down": {
        "&::before": { content: "'↓'" }
    },
    ".icon-arrow-left": {
        "&::before": { content: "'←'" }
    },
    ".icon-arrow-right": {
        "&::before": { content: "'→'" }
    },
    ".icon-chevron-up": {
        "&::before": { content: "'⌃'" }
    },
    ".icon-chevron-down": {
        "&::before": { content: "'⌄'" }
    },
    ".icon-chevron-left": {
        "&::before": { content: "'‹'" }
    },
    ".icon-chevron-right": {
        "&::before": { content: "'›'" }
    },
    ".icon-double-up": {
        "&::before": { content: "'⇈'" }
    },
    ".icon-double-down": {
        "&::before": { content: "'⇊'" }
    },
    
    // === ACTIONS & CONTROLS ===
    ".icon-play": {
        "&::before": { content: "'▶️'" }
    },
    ".icon-pause": {
        "&::before": { content: "'⏸️'" }
    },
    ".icon-stop": {
        "&::before": { content: "'⏹️'" }
    },
    ".icon-previous": {
        "&::before": { content: "'⏮️'" }
    },
    ".icon-next": {
        "&::before": { content: "'⏭️'" }
    },
    ".icon-rewind": {
        "&::before": { content: "'⏪'" }
    },
    ".icon-forward": {
        "&::before": { content: "'⏩'" }
    },
    ".icon-record": {
        "&::before": { content: "'⏺️'" }
    },
    ".icon-volume": {
        "&::before": { content: "'🔊'" }
    },
    ".icon-mute": {
        "&::before": { content: "'🔇'" }
    },
    
    // === FILES & DOCUMENTS ===
    ".icon-file": {
        "&::before": { content: "'📄'" }
    },
    ".icon-folder": {
        "&::before": { content: "'📁'" }
    },
    ".icon-folder-open": {
        "&::before": { content: "'📂'" }
    },
    ".icon-document": {
        "&::before": { content: "'📋'" }
    },
    ".icon-download": {
        "&::before": { content: "'⬇️'" }
    },
    ".icon-upload": {
        "&::before": { content: "'⬆️'" }
    },
    ".icon-attachment": {
        "&::before": { content: "'📎'" }
    },
    ".icon-image": {
        "&::before": { content: "'🖼️'" }
    },
    ".icon-pdf": {
        "&::before": { content: "'📕'" }
    },
    ".icon-archive": {
        "&::before": { content: "'🗃️'" }
    },
    
    // === COMMUNICATION & SOCIAL ===
    ".icon-email": {
        "&::before": { content: "'✉️'" }
    },
    ".icon-message": {
        "&::before": { content: "'💬'" }
    },
    ".icon-chat": {
        "&::before": { content: "'💭'" }
    },
    ".icon-phone": {
        "&::before": { content: "'📞'" }
    },
    ".icon-video": {
        "&::before": { content: "'📹'" }
    },
    ".icon-camera": {
        "&::before": { content: "'📷'" }
    },
    ".icon-share": {
        "&::before": { content: "'📤'" }
    },
    ".icon-link": {
        "&::before": { content: "'🔗'" }
    },
    ".icon-hashtag": {
        "&::before": { content: "'#️⃣'" }
    },
    ".icon-mention": {
        "&::before": { content: "'@'" }
    },
    
    // === STATUS & FEEDBACK ===
    ".icon-check": {
        "&::before": { content: "'✓'" }
    },
    ".icon-checkmark": {
        "&::before": { content: "'✅'" }
    },
    ".icon-cross": {
        "&::before": { content: "'❌'" }
    },
    ".icon-warning": {
        "&::before": { content: "'⚠️'" }
    },
    ".icon-error": {
        "&::before": { content: "'🚫'" }
    },
    ".icon-info": {
        "&::before": { content: "'ℹ️'" }
    },
    ".icon-question": {
        "&::before": { content: "'❓'" }
    },
    ".icon-exclamation": {
        "&::before": { content: "'❗'" }
    },
    ".icon-success": {
        "&::before": { content: "'🎉'" }
    },
    ".icon-loading": {
        "&::before": { content: "'⏳'" }
    },
    
    // === SHOPPING & COMMERCE ===
    ".icon-cart": {
        "&::before": { content: "'🛒'" }
    },
    ".icon-bag": {
        "&::before": { content: "'🛍️'" }
    },
    ".icon-credit-card": {
        "&::before": { content: "'💳'" }
    },
    ".icon-money": {
        "&::before": { content: "'💰'" }
    },
    ".icon-receipt": {
        "&::before": { content: "'🧾'" }
    },
    ".icon-tag": {
        "&::before": { content: "'🏷️'" }
    },
    ".icon-gift": {
        "&::before": { content: "'🎁'" }
    },
    ".icon-sale": {
        "&::before": { content: "'🏷️'" }
    },
    ".icon-discount": {
        "&::before": { content: "'💸'" }
    },
    ".icon-wallet": {
        "&::before": { content: "'👛'" }
    },
    
    // === TIME & CALENDAR ===
    ".icon-calendar": {
        "&::before": { content: "'📅'" }
    },
    ".icon-clock": {
        "&::before": { content: "'🕐'" }
    },
    ".icon-timer": {
        "&::before": { content: "'⏲️'" }
    },
    ".icon-alarm": {
        "&::before": { content: "'⏰'" }
    },
    ".icon-schedule": {
        "&::before": { content: "'📆'" }
    },
    ".icon-date": {
        "&::before": { content: "'📅'" }
    },
    ".icon-time": {
        "&::before": { content: "'🕰️'" }
    },
    ".icon-deadline": {
        "&::before": { content: "'⏰'" }
    },
    ".icon-reminder": {
        "&::before": { content: "'🔔'" }
    },
    ".icon-event": {
        "&::before": { content: "'🎯'" }
    },
    
    // === LOCATION & MAPS ===
    ".icon-location": {
        "&::before": { content: "'📍'" }
    },
    ".icon-map": {
        "&::before": { content: "'🗺️'" }
    },
    ".icon-navigate": {
        "&::before": { content: "'🧭'" }
    },
    ".icon-destination": {
        "&::before": { content: "'🎯'" }
    },
    ".icon-route": {
        "&::before": { content: "'🛣️'" }
    },
    ".icon-travel": {
        "&::before": { content: "'✈️'" }
    },
    ".icon-car": {
        "&::before": { content: "'🚗'" }
    },
    ".icon-bus": {
        "&::before": { content: "'🚌'" }
    },
    ".icon-train": {
        "&::before": { content: "'🚂'" }
    },
    ".icon-bike": {
        "&::before": { content: "'🚲'" }
    },
    
    // === TECHNOLOGY & TOOLS ===
    ".icon-computer": {
        "&::before": { content: "'💻'" }
    },
    ".icon-mobile": {
        "&::before": { content: "'📱'" }
    },
    ".icon-tablet": {
        "&::before": { content: "'📟'" }
    },
    ".icon-keyboard": {
        "&::before": { content: "'⌨️'" }
    },
    ".icon-mouse": {
        "&::before": { content: "'🖱️'" }
    },
    ".icon-printer": {
        "&::before": { content: "'🖨️'" }
    },
    ".icon-wifi": {
        "&::before": { content: "'📶'" }
    },
    ".icon-bluetooth": {
        "&::before": { content: "'📶'" }
    },
    ".icon-battery": {
        "&::before": { content: "'🔋'" }
    },
    ".icon-power": {
        "&::before": { content: "'⚡'" }
    },
    
    // === WEATHER & NATURE ===
    ".icon-sun": {
        "&::before": { content: "'☀️'" }
    },
    ".icon-moon": {
        "&::before": { content: "'🌙'" }
    },
    ".icon-star": {
        "&::before": { content: "'⭐'" }
    },
    ".icon-cloud": {
        "&::before": { content: "'☁️'" }
    },
    ".icon-rain": {
        "&::before": { content: "'🌧️'" }
    },
    ".icon-snow": {
        "&::before": { content: "'❄️'" }
    },
    ".icon-wind": {
        "&::before": { content: "'💨'" }
    },
    ".icon-storm": {
        "&::before": { content: "'⛈️'" }
    },
    ".icon-rainbow": {
        "&::before": { content: "'🌈'" }
    },
    ".icon-fire": {
        "&::before": { content: "'🔥'" }
    },
    
    // === FOOD & DINING ===
    ".icon-food": {
        "&::before": { content: "'🍽️'" }
    },
    ".icon-restaurant": {
        "&::before": { content: "'🍴'" }
    },
    ".icon-coffee": {
        "&::before": { content: "'☕'" }
    },
    ".icon-pizza": {
        "&::before": { content: "'🍕'" }
    },
    ".icon-burger": {
        "&::before": { content: "'🍔'" }
    },
    ".icon-cake": {
        "&::before": { content: "'🎂'" }
    },
    ".icon-drink": {
        "&::before": { content: "'🥤'" }
    },
    ".icon-wine": {
        "&::before": { content: "'🍷'" }
    },
    ".icon-beer": {
        "&::before": { content: "'🍺'" }
    },
    ".icon-kitchen": {
        "&::before": { content: "'👨‍🍳'" }
    },
    
    // === HEALTH & MEDICAL ===
    ".icon-health": {
        "&::before": { content: "'🏥'" }
    },
    ".icon-medical": {
        "&::before": { content: "'⚕️'" }
    },
    ".icon-pill": {
        "&::before": { content: "'💊'" }
    },
    ".icon-heart": {
        "&::before": { content: "'❤️'" }
    },
    ".icon-heartbeat": {
        "&::before": { content: "'💓'" }
    },
    ".icon-fitness": {
        "&::before": { content: "'💪'" }
    },
    ".icon-wellness": {
        "&::before": { content: "'🧘'" }
    },
    ".icon-doctor": {
        "&::before": { content: "'👩‍⚕️'" }
    },
    ".icon-ambulance": {
        "&::before": { content: "'🚑'" }
    },
    ".icon-bandage": {
        "&::before": { content: "'🩹'" }
    },
    
    // === SPORTS & ACTIVITIES ===
    ".icon-sports": {
        "&::before": { content: "'⚽'" }
    },
    ".icon-football": {
        "&::before": { content: "'🏈'" }
    },
    ".icon-basketball": {
        "&::before": { content: "'🏀'" }
    },
    ".icon-tennis": {
        "&::before": { content: "'🎾'" }
    },
    ".icon-golf": {
        "&::before": { content: "'⛳'" }
    },
    ".icon-swimming": {
        "&::before": { content: "'🏊'" }
    },
    ".icon-running": {
        "&::before": { content: "'🏃'" }
    },
    ".icon-cycling": {
        "&::before": { content: "'🚴'" }
    },
    ".icon-gym": {
        "&::before": { content: "'🏋️'" }
    },
    ".icon-trophy": {
        "&::before": { content: "'🏆'" }
    },
    
    // === SECURITY & PRIVACY ===
    ".icon-lock": {
        "&::before": { content: "'🔒'" }
    },
    ".icon-unlock": {
        "&::before": { content: "'🔓'" }
    },
    ".icon-key": {
        "&::before": { content: "'🔑'" }
    },
    ".icon-shield": {
        "&::before": { content: "'🛡️'" }
    },
    ".icon-security": {
        "&::before": { content: "'🔐'" }
    },
    ".icon-password": {
        "&::before": { content: "'🔒'" }
    },
    ".icon-fingerprint": {
        "&::before": { content: "'👆'" }
    },
    ".icon-eye": {
        "&::before": { content: "'👁️'" }
    },
    ".icon-eye-off": {
        "&::before": { content: "'🙈'" }
    },
    ".icon-private": {
        "&::before": { content: "'🔒'" }
    },
    
    // === EMOTIONS & REACTIONS ===
    ".icon-like": {
        "&::before": { content: "'👍'" }
    },
    ".icon-dislike": {
        "&::before": { content: "'👎'" }
    },
    ".icon-love": {
        "&::before": { content: "'💖'" }
    },
    ".icon-happy": {
        "&::before": { content: "'😊'" }
    },
    ".icon-sad": {
        "&::before": { content: "'😢'" }
    },
    ".icon-angry": {
        "&::before": { content: "'😠'" }
    },
    ".icon-surprised": {
        "&::before": { content: "'😲'" }
    },
    ".icon-laughing": {
        "&::before": { content: "'😂'" }
    },
    ".icon-thinking": {
        "&::before": { content: "'🤔'" }
    },
    ".icon-celebrate": {
        "&::before": { content: "'🎉'" }
    },
    
    // === UTILITY & MISCELLANEOUS ===
    ".icon-edit": {
        "&::before": { content: "'✏️'" }
    },
    ".icon-delete": {
        "&::before": { content: "'🗑️'" }
    },
    ".icon-copy": {
        "&::before": { content: "'📋'" }
    },
    ".icon-paste": {
        "&::before": { content: "'📄'" }
    },
    ".icon-cut": {
        "&::before": { content: "'✂️'" }
    },
    ".icon-save": {
        "&::before": { content: "'💾'" }
    },
    ".icon-refresh": {
        "&::before": { content: "'🔄'" }
    },
    ".icon-sync": {
        "&::before": { content: "'🔃'" }
    },
    ".icon-undo": {
        "&::before": { content: "'↶'" }
    },
    ".icon-redo": {
        "&::before": { content: "'↷'" }
    },
    ".icon-trash": {
        "&::before": { content: "'🗑️'" }
    },
    ".icon-restore": {
        "&::before": { content: "'♻️'" }
    },
    ".icon-backup": {
        "&::before": { content: "'💿'" }
    },
    ".icon-export": {
        "&::before": { content: "'📤'" }
    },
    ".icon-import": {
        "&::before": { content: "'📥'" }
    },
    ".icon-print": {
        "&::before": { content: "'🖨️'" }
    },
    ".icon-scan": {
        "&::before": { content: "'📷'" }
    },
    ".icon-zoom-in": {
        "&::before": { content: "'🔍'" }
    },
    ".icon-zoom-out": {
        "&::before": { content: "'🔍'" }
    },
    ".icon-fullscreen": {
        "&::before": { content: "'⛶'" }
    },
    ".icon-minimize": {
        "&::before": { content: "'🗕'" }
    },
    ".icon-maximize": {
        "&::before": { content: "'🗖'" }
    },
    ".icon-pin": {
        "&::before": { content: "'📌'" }
    },
    ".icon-unpin": {
        "&::before": { content: "'📌'" }
    },
    ".icon-bookmark": {
        "&::before": { content: "'🔖'" }
    },
    ".icon-flag": {
        "&::before": { content: "'🚩'" }
    },
    ".icon-star-filled": {
        "&::before": { content: "'⭐'" }
    },
    ".icon-star-empty": {
        "&::before": { content: "'☆'" }
    },
    ".icon-favorite": {
        "&::before": { content: "'♥'" }
    },
    ".icon-unfavorite": {
        "&::before": { content: "'♡'" }
    },
    
    // === EXTENDED NAVIGATION & UI ===
    ".icon-add": {
        "&::before": { content: "'➕'" }
    },
    ".icon-plus": {
        "&::before": { content: "'✚'" }
    },
    ".icon-minus": {
        "&::before": { content: "'➖'" }
    },
    ".icon-remove": {
        "&::before": { content: "'➖'" }
    },
    ".icon-more": {
        "&::before": { content: "'⋯'" }
    },
    ".icon-more-vertical": {
        "&::before": { content: "'⋮'" }
    },
    ".icon-more-horizontal": {
        "&::before": { content: "'⋯'" }
    },
    ".icon-expand": {
        "&::before": { content: "'⤢'" }
    },
    ".icon-collapse": {
        "&::before": { content: "'⤡'" }
    },
    ".icon-external": {
        "&::before": { content: "'↗️'" }
    },
    ".icon-new-window": {
        "&::before": { content: "'🗗'" }
    },
    ".icon-sidebar": {
        "&::before": { content: "'⚏'" }
    },
    ".icon-grid": {
        "&::before": { content: "'⚏'" }
    },
    ".icon-list": {
        "&::before": { content: "'☰'" }
    },
    ".icon-layout": {
        "&::before": { content: "'⊞'" }
    },
    ".icon-widget": {
        "&::before": { content: "'⊞'" }
    },
    ".icon-panel": {
        "&::before": { content: "'⊞'" }
    },
    ".icon-split": {
        "&::before": { content: "'⫿'" }
    },
    ".icon-merge": {
        "&::before": { content: "'⚏'" }
    },
    ".icon-duplicate": {
        "&::before": { content: "'⧉'" }
    }
}));
