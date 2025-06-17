import { addPlugin } from "../tails.js";

// Animation Plugin - Updated to new plugin syntax
addPlugin(() => ({
    // === VARIABLES ===
    $animDurationFast: "150ms",
    $animDurationNormal: "300ms",
    $animDurationSlow: "500ms",
    $animDurationSlower: "750ms",
    $animEaseLinear: "linear",
    $animEaseIn: "cubic-bezier(0.4, 0, 1, 1)",
    $animEaseOut: "cubic-bezier(0, 0, 0.2, 1)",
    $animEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    $animEaseBounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    $animEaseElastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    $transformOriginCenter: "center",
    $transformOriginTop: "top",
    $transformOriginBottom: "bottom",
    $transformOriginLeft: "left",
    $transformOriginRight: "right",    // === KEYFRAMES ===
    "@keyframes fadeIn": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" }
    },
    "@keyframes fadeOut": {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" }
    },
    "@keyframes fadeInUp": {
        "0%": { opacity: "0", transform: "translateY(30px)" },
        "100%": { opacity: "1", transform: "translateY(0)" }
    },
    "@keyframes fadeInDown": {
        "0%": { opacity: "0", transform: "translateY(-30px)" },
        "100%": { opacity: "1", transform: "translateY(0)" }
    },
    "@keyframes fadeInLeft": {
        "0%": { opacity: "0", transform: "translateX(-30px)" },
        "100%": { opacity: "1", transform: "translateX(0)" }
    },
    "@keyframes fadeInRight": {
        "0%": { opacity: "0", transform: "translateX(30px)" },
        "100%": { opacity: "1", transform: "translateX(0)" }
    },
    "@keyframes slideInUp": {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" }
    },
    "@keyframes slideInDown": {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(0)" }
    },
    "@keyframes slideInLeft": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(0)" }
    },
    "@keyframes slideInRight": {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(0)" }
    },
    "@keyframes zoomIn": {
        "0%": { opacity: "0", transform: "scale(0.3)" },
        "50%": { opacity: "1" },
        "100%": { transform: "scale(1)" }
    },
    "@keyframes zoomOut": {
        "0%": { transform: "scale(1)" },
        "50%": { opacity: "1" },
        "100%": { opacity: "0", transform: "scale(0.3)" }
    },
    "@keyframes scaleUp": {
        "0%": { transform: "scale(0.8)" },
        "100%": { transform: "scale(1)" }
    },
    "@keyframes scaleDown": {
        "0%": { transform: "scale(1)" },
        "100%": { transform: "scale(0.8)" }
    },
    "@keyframes bounceIn": {
        "0%": { opacity: "0", transform: "scale(0.3)" },
        "50%": { opacity: "1", transform: "scale(1.05)" },
        "70%": { transform: "scale(0.9)" },
        "100%": { opacity: "1", transform: "scale(1)" }
    },
    "@keyframes bounce": {
        "0%, 20%, 53%, 80%, 100%": { transform: "translateY(0)" },
        "40%, 43%": { transform: "translateY(-30px)" },
        "70%": { transform: "translateY(-15px)" },
        "90%": { transform: "translateY(-4px)" }
    },
    "@keyframes pulse": {
        "0%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.05)" },
        "100%": { transform: "scale(1)" }
    },
    "@keyframes heartbeat": {
        "0%": { transform: "scale(1)" },
        "14%": { transform: "scale(1.3)" },
        "28%": { transform: "scale(1)" },
        "42%": { transform: "scale(1.3)" },
        "70%": { transform: "scale(1)" }
    },
    "@keyframes shake": {
        "0%, 100%": { transform: "translateX(0)" },
        "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
        "20%, 40%, 60%, 80%": { transform: "translateX(10px)" }
    },
    "@keyframes wobble": {
        "0%": { transform: "translateX(0%)" },
        "15%": { transform: "translateX(-25%) rotate(-5deg)" },
        "30%": { transform: "translateX(20%) rotate(3deg)" },
        "45%": { transform: "translateX(-15%) rotate(-3deg)" },
        "60%": { transform: "translateX(10%) rotate(2deg)" },
        "75%": { transform: "translateX(-5%) rotate(-1deg)" },
        "100%": { transform: "translateX(0%)" }
    },
    "@keyframes rotateIn": {
        "0%": { opacity: "0", transform: "rotate(-200deg)" },
        "100%": { opacity: "1", transform: "rotate(0)" }
    },
    "@keyframes rotateOut": {
        "0%": { opacity: "1", transform: "rotate(0)" },
        "100%": { opacity: "0", transform: "rotate(200deg)" }
    },
    "@keyframes flipInX": {
        "0%": { transform: "perspective(400px) rotateX(90deg)", opacity: "0" },
        "40%": { transform: "perspective(400px) rotateX(-20deg)" },
        "60%": { transform: "perspective(400px) rotateX(10deg)", opacity: "1" },
        "80%": { transform: "perspective(400px) rotateX(-5deg)" },
        "100%": { transform: "perspective(400px) rotateX(0deg)", opacity: "1" }
    },
    "@keyframes flipInY": {
        "0%": { transform: "perspective(400px) rotateY(90deg)", opacity: "0" },
        "40%": { transform: "perspective(400px) rotateY(-20deg)" },
        "60%": { transform: "perspective(400px) rotateY(10deg)", opacity: "1" },
        "80%": { transform: "perspective(400px) rotateY(-5deg)" },
        "100%": { transform: "perspective(400px) rotateY(0deg)", opacity: "1" }
    },
    "@keyframes spin": {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" }
    },
    "@keyframes ping": {
        "75%, 100%": { transform: "scale(2)", opacity: "0" }
    },

    // === UTILITIES ===
    ".animate-none": { animation: "none" },
    ".animate-paused": { "animation-play-state": "paused" },
    ".animate-running": { "animation-play-state": "running" },
    ".duration-75": { "animation-duration": "75ms" },
    ".duration-100": { "animation-duration": "100ms" },
    ".duration-150": { "animation-duration": "150ms" },
    ".duration-200": { "animation-duration": "200ms" },
    ".duration-300": { "animation-duration": "300ms" },
    ".duration-500": { "animation-duration": "500ms" },
    ".duration-700": { "animation-duration": "700ms" },
    ".duration-1000": { "animation-duration": "1000ms" },
    ".delay-75": { "animation-delay": "75ms" },
    ".delay-100": { "animation-delay": "100ms" },
    ".delay-150": { "animation-delay": "150ms" },
    ".delay-200": { "animation-delay": "200ms" },
    ".delay-300": { "animation-delay": "300ms" },
    ".delay-500": { "animation-delay": "500ms" },
    ".delay-700": { "animation-delay": "700ms" },
    ".delay-1000": { "animation-delay": "1000ms" },
    ".fill-none": { "animation-fill-mode": "none" },
    ".fill-forwards": { "animation-fill-mode": "forwards" },
    ".fill-backwards": { "animation-fill-mode": "backwards" },
    ".fill-both": { "animation-fill-mode": "both" },
    ".repeat-1": { "animation-iteration-count": "1" },
    ".repeat-2": { "animation-iteration-count": "2" },
    ".repeat-3": { "animation-iteration-count": "3" },
    ".repeat-infinite": { "animation-iteration-count": "infinite" },
    ".animate-fade-in": { 
        animation: "fadeIn $animDurationNormal $animEaseOut forwards"
    },
    ".animate-fade-out": { 
        animation: "fadeOut $animDurationNormal $animEaseIn forwards"
    },
    ".animate-fade-in-up": { 
        animation: "fadeInUp $animDurationNormal $animEaseOut forwards"
    },
    ".animate-fade-in-down": { 
        animation: "fadeInDown $animDurationNormal $animEaseOut forwards"
    },
    ".animate-fade-in-left": { 
        animation: "fadeInLeft $animDurationNormal $animEaseOut forwards"
    },
    ".animate-fade-in-right": { 
        animation: "fadeInRight $animDurationNormal $animEaseOut forwards"
    },
    ".animate-slide-in-up": { 
        animation: "slideInUp $animDurationNormal $animEaseOut forwards"
    },
    ".animate-slide-in-down": { 
        animation: "slideInDown $animDurationNormal $animEaseOut forwards"
    },
    ".animate-slide-in-left": { 
        animation: "slideInLeft $animDurationNormal $animEaseOut forwards"
    },
    ".animate-slide-in-right": { 
        animation: "slideInRight $animDurationNormal $animEaseOut forwards"
    },
    ".animate-zoom-in": { 
        animation: "zoomIn $animDurationNormal $animEaseOut forwards"
    },
    ".animate-zoom-out": { 
        animation: "zoomOut $animDurationNormal $animEaseIn forwards"
    },
    ".animate-scale-up": { 
        animation: "scaleUp $animDurationNormal $animEaseOut forwards"
    },
    ".animate-scale-down": { 
        animation: "scaleDown $animDurationNormal $animEaseIn forwards"
    },
    ".animate-bounce-in": { 
        animation: "bounceIn $animDurationSlow $animEaseBounce forwards"
    },
    ".animate-bounce": { 
        animation: "bounce 1s $animEaseBounce infinite"
    },
    ".animate-pulse": { 
        animation: "pulse 2s $animEaseInOut infinite"
    },
    ".animate-heartbeat": { 
        animation: "heartbeat 1.5s $animEaseInOut infinite"
    },
    ".animate-shake": { 
        animation: "shake 0.5s $animEaseInOut"
    },
    ".animate-wobble": { 
        animation: "wobble 1s $animEaseInOut"
    },
    ".animate-rotate-in": { 
        animation: "rotateIn $animDurationNormal $animEaseOut forwards"
    },
    ".animate-rotate-out": { 
        animation: "rotateOut $animDurationNormal $animEaseIn forwards"
    },
    ".animate-flip-in-x": { 
        animation: "flipInX 0.6s $animEaseOut forwards"
    },
    ".animate-flip-in-y": { 
        animation: "flipInY 0.6s $animEaseOut forwards"
    },
    ".animate-spin": { 
        animation: "spin 1s linear infinite"
    },
    ".animate-ping": { 
        animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
    },
    ".hover-lift": { 
        transition: "transform $animDurationFast $animEaseOut"
    },
    ".hover-grow": { 
        transition: "transform $animDurationFast $animEaseOut"
    },
    ".hover-shrink": { 
        transition: "transform $animDurationFast $animEaseOut"
    }
}));