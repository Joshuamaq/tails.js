// Effects Plugin - Shadows, Opacity, and other visual effects
export default () => ({
  // === SHADOWS ===
  ".shadow-sm": { "box-shadow": "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  ".shadow": { "box-shadow": "0 1px 3px 0 rgb(0 0 0 / 0.1)" },
  ".shadow-md": { "box-shadow": "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
  ".shadow-lg": { "box-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1)" },
  ".shadow-xl": { "box-shadow": "0 20px 25px -5px rgb(0 0 0 / 0.1)" },
  ".shadow-none": { "box-shadow": "none" },
  
  // === OPACITY ===
  ".opacity-0": { opacity: "0" },
  ".opacity-25": { opacity: "0.25" },
  ".opacity-50": { opacity: "0.5" },
  ".opacity-75": { opacity: "0.75" },
  ".opacity-100": { opacity: "1" },
  
  // === DROP SHADOW ===
  ".drop-shadow-sm": { filter: "drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))" },
  ".drop-shadow": { filter: "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))" },
  ".drop-shadow-md": { filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" },
  ".drop-shadow-lg": { filter: "drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))" },
  ".drop-shadow-xl": { filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))" },
  ".drop-shadow-2xl": { filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))" },
  ".drop-shadow-none": { filter: "drop-shadow(0 0 #0000)" },
  
  // === BLUR ===
  ".blur-none": { filter: "blur(0)" },
  ".blur-sm": { filter: "blur(4px)" },
  ".blur": { filter: "blur(8px)" },
  ".blur-md": { filter: "blur(12px)" },
  ".blur-lg": { filter: "blur(16px)" },
  ".blur-xl": { filter: "blur(24px)" },
  ".blur-2xl": { filter: "blur(40px)" },
  ".blur-3xl": { filter: "blur(64px)" },
  
  // === BRIGHTNESS ===
  ".brightness-0": { filter: "brightness(0)" },
  ".brightness-50": { filter: "brightness(0.5)" },
  ".brightness-75": { filter: "brightness(0.75)" },
  ".brightness-90": { filter: "brightness(0.9)" },
  ".brightness-95": { filter: "brightness(0.95)" },
  ".brightness-100": { filter: "brightness(1)" },
  ".brightness-105": { filter: "brightness(1.05)" },
  ".brightness-110": { filter: "brightness(1.1)" },
  ".brightness-125": { filter: "brightness(1.25)" },
  ".brightness-150": { filter: "brightness(1.5)" },
  ".brightness-200": { filter: "brightness(2)" },
  
  // === CONTRAST ===
  ".contrast-0": { filter: "contrast(0)" },
  ".contrast-50": { filter: "contrast(0.5)" },
  ".contrast-75": { filter: "contrast(0.75)" },
  ".contrast-100": { filter: "contrast(1)" },
  ".contrast-125": { filter: "contrast(1.25)" },
  ".contrast-150": { filter: "contrast(1.5)" },
  ".contrast-200": { filter: "contrast(2)" },
  
  // === GRAYSCALE ===
  ".grayscale-0": { filter: "grayscale(0)" },
  ".grayscale": { filter: "grayscale(1)" },
  
  // === SEPIA ===
  ".sepia-0": { filter: "sepia(0)" },
  ".sepia": { filter: "sepia(1)" },
  
  // === INVERT ===
  ".invert-0": { filter: "invert(0)" },
  ".invert": { filter: "invert(1)" },
  
  // === SATURATE ===
  ".saturate-0": { filter: "saturate(0)" },
  ".saturate-50": { filter: "saturate(0.5)" },
  ".saturate-100": { filter: "saturate(1)" },
  ".saturate-150": { filter: "saturate(1.5)" },
  ".saturate-200": { filter: "saturate(2)" },
  
  // === HUE ROTATE ===
  ".hue-rotate-0": { filter: "hue-rotate(0deg)" },
  ".hue-rotate-15": { filter: "hue-rotate(15deg)" },
  ".hue-rotate-30": { filter: "hue-rotate(30deg)" },
  ".hue-rotate-60": { filter: "hue-rotate(60deg)" },
  ".hue-rotate-90": { filter: "hue-rotate(90deg)" },
  ".hue-rotate-180": { filter: "hue-rotate(180deg)" },
  
  // === BACKDROP BLUR ===
  ".backdrop-blur-none": { "backdrop-filter": "blur(0)" },
  ".backdrop-blur-sm": { "backdrop-filter": "blur(4px)" },
  ".backdrop-blur": { "backdrop-filter": "blur(8px)" },
  ".backdrop-blur-md": { "backdrop-filter": "blur(12px)" },
  ".backdrop-blur-lg": { "backdrop-filter": "blur(16px)" },
  ".backdrop-blur-xl": { "backdrop-filter": "blur(24px)" },
  ".backdrop-blur-2xl": { "backdrop-filter": "blur(40px)" },
  ".backdrop-blur-3xl": { "backdrop-filter": "blur(64px)" },
  
  // === BACKDROP BRIGHTNESS ===
  ".backdrop-brightness-50": { "backdrop-filter": "brightness(0.5)" },
  ".backdrop-brightness-75": { "backdrop-filter": "brightness(0.75)" },
  ".backdrop-brightness-90": { "backdrop-filter": "brightness(0.9)" },
  ".backdrop-brightness-95": { "backdrop-filter": "brightness(0.95)" },
  ".backdrop-brightness-100": { "backdrop-filter": "brightness(1)" },
  ".backdrop-brightness-105": { "backdrop-filter": "brightness(1.05)" },
  ".backdrop-brightness-110": { "backdrop-filter": "brightness(1.1)" },
  ".backdrop-brightness-125": { "backdrop-filter": "brightness(1.25)" },
  ".backdrop-brightness-150": { "backdrop-filter": "brightness(1.5)" },
  ".backdrop-brightness-200": { "backdrop-filter": "brightness(2)" },
  
  // === BACKDROP CONTRAST ===
  ".backdrop-contrast-0": { "backdrop-filter": "contrast(0)" },
  ".backdrop-contrast-50": { "backdrop-filter": "contrast(0.5)" },
  ".backdrop-contrast-75": { "backdrop-filter": "contrast(0.75)" },
  ".backdrop-contrast-100": { "backdrop-filter": "contrast(1)" },
  ".backdrop-contrast-125": { "backdrop-filter": "contrast(1.25)" },
  ".backdrop-contrast-150": { "backdrop-filter": "contrast(1.5)" },
  ".backdrop-contrast-200": { "backdrop-filter": "contrast(2)" },
  
  // === BACKDROP GRAYSCALE ===
  ".backdrop-grayscale-0": { "backdrop-filter": "grayscale(0)" },
  ".backdrop-grayscale": { "backdrop-filter": "grayscale(1)" },
  
  // === BACKDROP SEPIA ===
  ".backdrop-sepia-0": { "backdrop-filter": "sepia(0)" },
  ".backdrop-sepia": { "backdrop-filter": "sepia(1)" },
  
  // === BACKDROP INVERT ===
  ".backdrop-invert-0": { "backdrop-filter": "invert(0)" },
  ".backdrop-invert": { "backdrop-filter": "invert(1)" },
  
  // === BACKDROP SATURATE ===
  ".backdrop-saturate-0": { "backdrop-filter": "saturate(0)" },
  ".backdrop-saturate-50": { "backdrop-filter": "saturate(0.5)" },
  ".backdrop-saturate-100": { "backdrop-filter": "saturate(1)" },
  ".backdrop-saturate-150": { "backdrop-filter": "saturate(1.5)" },
  ".backdrop-saturate-200": { "backdrop-filter": "saturate(2)" },
  
  // === BACKDROP HUE ROTATE ===
  ".backdrop-hue-rotate-0": { "backdrop-filter": "hue-rotate(0deg)" },
  ".backdrop-hue-rotate-15": { "backdrop-filter": "hue-rotate(15deg)" },
  ".backdrop-hue-rotate-30": { "backdrop-filter": "hue-rotate(30deg)" },
  ".backdrop-hue-rotate-60": { "backdrop-filter": "hue-rotate(60deg)" },
  ".backdrop-hue-rotate-90": { "backdrop-filter": "hue-rotate(90deg)" },
  ".backdrop-hue-rotate-180": { "backdrop-filter": "hue-rotate(180deg)" },
  
  // === TRANSITIONS ===
  ".transition": { transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)" },
  ".transition-none": { transition: "none" },
  ".transition-all": { transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)" },
  ".transition-colors": { transition: "color, background-color, border-color, text-decoration-color, fill, stroke 150ms cubic-bezier(0.4, 0, 0.2, 1)" },
  ".transition-opacity": { transition: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)" },
  ".transition-shadow": { transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)" },
  ".transition-transform": { transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)" },
  
  // === DURATION ===
  ".duration-75": { "transition-duration": "75ms" },
  ".duration-100": { "transition-duration": "100ms" },
  ".duration-150": { "transition-duration": "150ms" },
  ".duration-200": { "transition-duration": "200ms" },
  ".duration-300": { "transition-duration": "300ms" },
  ".duration-500": { "transition-duration": "500ms" },
  ".duration-700": { "transition-duration": "700ms" },
  ".duration-1000": { "transition-duration": "1000ms" },
  
  // === DELAY ===
  ".delay-75": { "transition-delay": "75ms" },
  ".delay-100": { "transition-delay": "100ms" },
  ".delay-150": { "transition-delay": "150ms" },
  ".delay-200": { "transition-delay": "200ms" },
  ".delay-300": { "transition-delay": "300ms" },
  ".delay-500": { "transition-delay": "500ms" },
  ".delay-700": { "transition-delay": "700ms" },
  ".delay-1000": { "transition-delay": "1000ms" },
  
  // === EASE ===
  ".ease-linear": { "transition-timing-function": "linear" },
  ".ease-in": { "transition-timing-function": "cubic-bezier(0.4, 0, 1, 1)" },
  ".ease-out": { "transition-timing-function": "cubic-bezier(0, 0, 0.2, 1)" },
  ".ease-in-out": { "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)" }
});
