export default () => ({
    // Plugin variables for transforms
    $translateX: 0,
    $translateY: 0,
    $rotate: 0,
    $skewX: 0,
    $skewY: 0,
    $scaleX: 1,
    $scaleY: 1,
    
    // === TRANSFORM UTILITIES ===
    
    // Transform base
    ".transform": { 
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)"
    },
    
    // Scale utilities
    ".scale-0": { 
        "$scaleX": "0",
        "$scaleY": "0",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-50": { 
        "$scaleX": "0.5",
        "$scaleY": "0.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-75": { 
        "$scaleX": "0.75",
        "$scaleY": "0.75",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-90": { 
        "$scaleX": "0.9",
        "$scaleY": "0.9",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-95": { 
        "$scaleX": "0.95",
        "$scaleY": "0.95",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-100": { 
        "$scaleX": "1",
        "$scaleY": "1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-105": { 
        "$scaleX": "1.05",
        "$scaleY": "1.05",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-110": { 
        "$scaleX": "1.1",
        "$scaleY": "1.1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-125": { 
        "$scaleX": "1.25",
        "$scaleY": "1.25",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-150": { 
        "$scaleX": "1.5",
        "$scaleY": "1.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Scale X utilities
    ".scale-x-0": { 
        "$scaleX": "0",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-50": { 
        "$scaleX": "0.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-75": { 
        "$scaleX": "0.75",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-90": { 
        "$scaleX": "0.9",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-95": { 
        "$scaleX": "0.95",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-100": { 
        "$scaleX": "1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-105": { 
        "$scaleX": "1.05",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-110": { 
        "$scaleX": "1.1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-125": { 
        "$scaleX": "1.25",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-x-150": { 
        "$scaleX": "1.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Scale Y utilities
    ".scale-y-0": { 
        "$scaleY": "0",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-50": { 
        "$scaleY": "0.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-75": { 
        "$scaleY": "0.75",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-90": { 
        "$scaleY": "0.9",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-95": { 
        "$scaleY": "0.95",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-100": { 
        "$scaleY": "1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-105": { 
        "$scaleY": "1.05",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-110": { 
        "$scaleY": "1.1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-125": { 
        "$scaleY": "1.25",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".scale-y-150": { 
        "$scaleY": "1.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Rotate utilities
    ".rotate-0": { 
        "$rotate": "0deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-1": { 
        "$rotate": "1deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-2": { 
        "$rotate": "2deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-3": { 
        "$rotate": "3deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-6": { 
        "$rotate": "6deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-12": { 
        "$rotate": "12deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-45": { 
        "$rotate": "45deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-90": { 
        "$rotate": "90deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".rotate-180": { 
        "$rotate": "180deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Negative rotate utilities
    ".-rotate-1": { 
        "$rotate": "-1deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-2": { 
        "$rotate": "-2deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-3": { 
        "$rotate": "-3deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-6": { 
        "$rotate": "-6deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-12": { 
        "$rotate": "-12deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-45": { 
        "$rotate": "-45deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-90": { 
        "$rotate": "-90deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-rotate-180": { 
        "$rotate": "-180deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Translate utilities - parametric for spacing values
    ".translate-x-$spacing": spacing => ({ 
        "--tw-translate-x": spacing,
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    }),
    ".translate-y-$spacing": spacing => ({ 
        "--tw-translate-y": spacing,
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    }),
    
    // Negative translate utilities - parametric for spacing values
    ".-translate-x-$spacing": spacing => ({ 
        "--tw-translate-x": `calc(-1 * ${spacing}`,
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    }),
    ".-translate-y-$spacing": spacing => ({ 
        "--tw-translate-y": `calc(-1 * ${spacing}`,
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    }),
    
    // Fractional translate utilities
    ".translate-x-1\\/2": { 
        "--tw-translate-x": "50%",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".translate-y-1\\/2": { 
        "--tw-translate-y": "50%",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-translate-x-1\\/2": { 
        "--tw-translate-x": "-50%",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".-translate-y-1\\/2": { 
        "--tw-translate-y": "-50%",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Hover scale utilities
    ".hover\\:scale-0:hover": { 
        "$scaleX": "0",
        "$scaleY": "0",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-50:hover": { 
        "$scaleX": "0.5",
        "$scaleY": "0.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-75:hover": { 
        "$scaleX": "0.75",
        "$scaleY": "0.75",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-90:hover": { 
        "$scaleX": "0.9",
        "$scaleY": "0.9",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-95:hover": { 
        "$scaleX": "0.95",
        "$scaleY": "0.95",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-105:hover": { 
        "$scaleX": "1.05",
        "$scaleY": "1.05",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-110:hover": { 
        "$scaleX": "1.1",
        "$scaleY": "1.1",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-125:hover": { 
        "$scaleX": "1.25",
        "$scaleY": "1.25",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:scale-150:hover": { 
        "$scaleX": "1.5",
        "$scaleY": "1.5",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    
    // Hover rotate utilities
    ".hover\\:rotate-1:hover": { 
        "$rotate": "1deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-2:hover": { 
        "$rotate": "2deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-3:hover": { 
        "$rotate": "3deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-6:hover": { 
        "$rotate": "6deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-12:hover": { 
        "$rotate": "12deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-45:hover": { 
        "$rotate": "45deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-90:hover": { 
        "$rotate": "90deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    },
    ".hover\\:rotate-180:hover": { 
        "$rotate": "180deg",
        transform: "translateX($translateX) translateY($translateY) rotate($rotate) skewX($skewX) skewY($skewY) scaleX($scaleX) scaleY($scaleY)" 
    }
});
