import { addPlugin } from "../tails.js";

// Animation Plugin - Common animations for modern web interfaces
addPlugin({
    variables: {
        // Animation durations
        "anim-duration-fast": "150ms",
        "anim-duration-normal": "300ms",
        "anim-duration-slow": "500ms",
        "anim-duration-slower": "750ms",
        
        // Animation easing functions
        "anim-ease-linear": "linear",
        "anim-ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "anim-ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "anim-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        "anim-ease-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "anim-ease-elastic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        
        // Transform origins
        "transform-origin-center": "center",
        "transform-origin-top": "top",
        "transform-origin-bottom": "bottom",
        "transform-origin-left": "left",
        "transform-origin-right": "right"
    },
    
    keyframes: {
        // Fade animations
        fadeIn: {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" }
        },
        fadeOut: {
            "0%": { opacity: "1" },
            "100%": { opacity: "0" }
        },
        fadeInUp: {
            "0%": { opacity: "0", transform: "translateY(30px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInDown: {
            "0%": { opacity: "0", transform: "translateY(-30px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeInLeft: {
            "0%": { opacity: "0", transform: "translateX(-30px)" },
            "100%": { opacity: "1", transform: "translateX(0)" }
        },
        fadeInRight: {
            "0%": { opacity: "0", transform: "translateX(30px)" },
            "100%": { opacity: "1", transform: "translateX(0)" }
        },
        
        // Slide animations
        slideInUp: {
            "0%": { transform: "translateY(100%)" },
            "100%": { transform: "translateY(0)" }
        },
        slideInDown: {
            "0%": { transform: "translateY(-100%)" },
            "100%": { transform: "translateY(0)" }
        },
        slideInLeft: {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0)" }
        },
        slideInRight: {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0)" }
        },
        
        // Scale animations
        zoomIn: {
            "0%": { opacity: "0", transform: "scale(0.3)" },
            "50%": { opacity: "1" },
            "100%": { transform: "scale(1)" }
        },
        zoomOut: {
            "0%": { transform: "scale(1)" },
            "50%": { opacity: "1" },
            "100%": { opacity: "0", transform: "scale(0.3)" }
        },
        scaleUp: {
            "0%": { transform: "scale(0.8)" },
            "100%": { transform: "scale(1)" }
        },
        scaleDown: {
            "0%": { transform: "scale(1)" },
            "100%": { transform: "scale(0.8)" }
        },
        
        // Bounce animations
        bounceIn: {
            "0%": { opacity: "0", transform: "scale(0.3)" },
            "50%": { opacity: "1", transform: "scale(1.05)" },
            "70%": { transform: "scale(0.9)" },
            "100%": { opacity: "1", transform: "scale(1)" }
        },
        bounce: {
            "0%, 20%, 53%, 80%, 100%": { transform: "translateY(0)" },
            "40%, 43%": { transform: "translateY(-30px)" },
            "70%": { transform: "translateY(-15px)" },
            "90%": { transform: "translateY(-4px)" }
        },
        
        // Attention seekers
        pulse: {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(1.05)" },
            "100%": { transform: "scale(1)" }
        },
        heartbeat: {
            "0%": { transform: "scale(1)" },
            "14%": { transform: "scale(1.3)" },
            "28%": { transform: "scale(1)" },
            "42%": { transform: "scale(1.3)" },
            "70%": { transform: "scale(1)" }
        },
        shake: {
            "0%, 100%": { transform: "translateX(0)" },
            "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
            "20%, 40%, 60%, 80%": { transform: "translateX(10px)" }
        },
        wobble: {
            "0%": { transform: "translateX(0%)" },
            "15%": { transform: "translateX(-25%) rotate(-5deg)" },
            "30%": { transform: "translateX(20%) rotate(3deg)" },
            "45%": { transform: "translateX(-15%) rotate(-3deg)" },
            "60%": { transform: "translateX(10%) rotate(2deg)" },
            "75%": { transform: "translateX(-5%) rotate(-1deg)" },
            "100%": { transform: "translateX(0%)" }
        },
        
        // Rotation animations
        rotateIn: {
            "0%": { opacity: "0", transform: "rotate(-200deg)" },
            "100%": { opacity: "1", transform: "rotate(0)" }
        },
        rotateOut: {
            "0%": { opacity: "1", transform: "rotate(0)" },
            "100%": { opacity: "0", transform: "rotate(200deg)" }
        },
        
        // Flip animations
        flipInX: {
            "0%": { transform: "perspective(400px) rotateX(90deg)", opacity: "0" },
            "40%": { transform: "perspective(400px) rotateX(-20deg)" },
            "60%": { transform: "perspective(400px) rotateX(10deg)", opacity: "1" },
            "80%": { transform: "perspective(400px) rotateX(-5deg)" },
            "100%": { transform: "perspective(400px) rotateX(0deg)", opacity: "1" }
        },
        flipInY: {
            "0%": { transform: "perspective(400px) rotateY(90deg)", opacity: "0" },
            "40%": { transform: "perspective(400px) rotateY(-20deg)" },
            "60%": { transform: "perspective(400px) rotateY(10deg)", opacity: "1" },
            "80%": { transform: "perspective(400px) rotateY(-5deg)" },
            "100%": { transform: "perspective(400px) rotateY(0deg)", opacity: "1" }
        },
        
        // Loading animations
        spin: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" }
        },
        ping: {
            "75%, 100%": { transform: "scale(2)", opacity: "0" }
        }
    },
    
    utilities: {
        // Animation controls
        "animate-none": { animation: "none" },
        "animate-paused": { "animation-play-state": "paused" },
        "animate-running": { "animation-play-state": "running" },
        
        // Duration utilities
        "duration-75": { "animation-duration": "75ms" },
        "duration-100": { "animation-duration": "100ms" },
        "duration-150": { "animation-duration": "150ms" },
        "duration-200": { "animation-duration": "200ms" },
        "duration-300": { "animation-duration": "300ms" },
        "duration-500": { "animation-duration": "500ms" },
        "duration-700": { "animation-duration": "700ms" },
        "duration-1000": { "animation-duration": "1000ms" },
        
        // Delay utilities
        "delay-75": { "animation-delay": "75ms" },
        "delay-100": { "animation-delay": "100ms" },
        "delay-150": { "animation-delay": "150ms" },
        "delay-200": { "animation-delay": "200ms" },
        "delay-300": { "animation-delay": "300ms" },
        "delay-500": { "animation-delay": "500ms" },
        "delay-700": { "animation-delay": "700ms" },
        "delay-1000": { "animation-delay": "1000ms" },
        
        // Animation fill modes
        "fill-none": { "animation-fill-mode": "none" },
        "fill-forwards": { "animation-fill-mode": "forwards" },
        "fill-backwards": { "animation-fill-mode": "backwards" },
        "fill-both": { "animation-fill-mode": "both" },
        
        // Animation iteration counts
        "repeat-1": { "animation-iteration-count": "1" },
        "repeat-2": { "animation-iteration-count": "2" },
        "repeat-3": { "animation-iteration-count": "3" },
        "repeat-infinite": { "animation-iteration-count": "infinite" },
        
        // Fade animations
        "animate-fade-in": { 
            animation: "fadeIn var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-fade-out": { 
            animation: "fadeOut var(--anim-duration-normal) var(--anim-ease-in) forwards"
        },
        "animate-fade-in-up": { 
            animation: "fadeInUp var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-fade-in-down": { 
            animation: "fadeInDown var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-fade-in-left": { 
            animation: "fadeInLeft var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-fade-in-right": { 
            animation: "fadeInRight var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        
        // Slide animations
        "animate-slide-in-up": { 
            animation: "slideInUp var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-slide-in-down": { 
            animation: "slideInDown var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-slide-in-left": { 
            animation: "slideInLeft var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-slide-in-right": { 
            animation: "slideInRight var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        
        // Scale animations
        "animate-zoom-in": { 
            animation: "zoomIn var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-zoom-out": { 
            animation: "zoomOut var(--anim-duration-normal) var(--anim-ease-in) forwards"
        },
        "animate-scale-up": { 
            animation: "scaleUp var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-scale-down": { 
            animation: "scaleDown var(--anim-duration-normal) var(--anim-ease-in) forwards"
        },
        
        // Bounce animations
        "animate-bounce-in": { 
            animation: "bounceIn var(--anim-duration-slow) var(--anim-ease-bounce) forwards"
        },
        "animate-bounce": { 
            animation: "bounce 1s var(--anim-ease-bounce) infinite"
        },
        
        // Attention seekers
        "animate-pulse": { 
            animation: "pulse 2s var(--anim-ease-in-out) infinite"
        },
        "animate-heartbeat": { 
            animation: "heartbeat 1.5s var(--anim-ease-in-out) infinite"
        },
        "animate-shake": { 
            animation: "shake 0.5s var(--anim-ease-in-out)"
        },
        "animate-wobble": { 
            animation: "wobble 1s var(--anim-ease-in-out)"
        },
        
        // Rotation animations
        "animate-rotate-in": { 
            animation: "rotateIn var(--anim-duration-normal) var(--anim-ease-out) forwards"
        },
        "animate-rotate-out": { 
            animation: "rotateOut var(--anim-duration-normal) var(--anim-ease-in) forwards"
        },
        
        // Flip animations
        "animate-flip-in-x": { 
            animation: "flipInX 0.6s var(--anim-ease-out) forwards"
        },
        "animate-flip-in-y": { 
            animation: "flipInY 0.6s var(--anim-ease-out) forwards"
        },
        
        // Loading animations
        "animate-spin": { 
            animation: "spin 1s linear infinite"
        },
        "animate-ping": { 
            animation: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite"
        },
        
        // Hover animations
        "hover-lift": { 
            transition: "transform var(--anim-duration-fast) var(--anim-ease-out)"
        },
        "hover-grow": { 
            transition: "transform var(--anim-duration-fast) var(--anim-ease-out)"
        },
        "hover-shrink": { 
            transition: "transform var(--anim-duration-fast) var(--anim-ease-out)"
        }
    }
});