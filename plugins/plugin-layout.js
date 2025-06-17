export default () => ({
    // === LAYOUT UTILITIES ===
    
    // Display utilities
    ".block": { display: "block" },
    ".inline": { display: "inline" },
    ".inline-block": { display: "inline-block" },
    ".flex": { display: "flex" },
    ".inline-flex": { display: "inline-flex" },
    ".grid": { display: "grid" },
    ".hidden": { display: "none" },
    
    // Visibility utilities
    ".visible": { visibility: "visible" },
    ".invisible": { visibility: "hidden" },
    
    // Screen reader only
    ".sr-only": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        whiteSpace: "nowrap",
        border: "0"
    },
    
    // Position utilities
    ".static": { position: "static" },
    ".relative": { position: "relative" },
    ".absolute": { position: "absolute" },
    ".fixed": { position: "fixed" },
    ".sticky": { position: "sticky" },
      // Positioning values - parametric utilities
    ".top-$spacing": spacing => ({ top: spacing }),
    ".right-$spacing": spacing => ({ right: spacing }),
    ".bottom-$spacing": spacing => ({ bottom: spacing }),
    ".left-$spacing": spacing => ({ left: spacing }),
    
    // Z-index utilities
    ".z-auto": { zIndex: "auto" },
    ".z-0": { zIndex: "0" },
    ".z-10": { zIndex: "10" },
    ".z-20": { zIndex: "20" },
    ".z-30": { zIndex: "30" },
    ".z-40": { zIndex: "40" },
    ".z-50": { zIndex: "50" },
    
    // Overflow utilities
    ".overflow-auto": { overflow: "auto" },
    ".overflow-hidden": { overflow: "hidden" },
    ".overflow-visible": { overflow: "visible" },
    ".overflow-scroll": { overflow: "scroll" },
    ".overflow-x-auto": { overflowX: "auto" },
    ".overflow-x-hidden": { overflowX: "hidden" },
    ".overflow-x-visible": { overflowX: "visible" },
    ".overflow-x-scroll": { overflowX: "scroll" },
    ".overflow-y-auto": { overflowY: "auto" },
    ".overflow-y-hidden": { overflowY: "hidden" },
    ".overflow-y-visible": { overflowY: "visible" },
    ".overflow-y-scroll": { overflowY: "scroll" },
    
    // Container
    ".container": {
        width: "100%",
        "@media (min-width: 640px)": { maxWidth: "640px" },
        "@media (min-width: 768px)": { maxWidth: "768px" },
        "@media (min-width: 1024px)": { maxWidth: "1024px" },
        "@media (min-width: 1280px)": { maxWidth: "1280px" }
    },
    
    // Cursor utilities
    ".cursor-auto": { cursor: "auto" },
    ".cursor-default": { cursor: "default" },
    ".cursor-pointer": { cursor: "pointer" },
    ".cursor-text": { cursor: "text" },
    ".cursor-not-allowed": { cursor: "not-allowed" },
    ".cursor-wait": { cursor: "wait" },
    ".cursor-move": { cursor: "move" },
    ".cursor-help": { cursor: "help" },
    
    // Responsive display utilities
    "@media (min-width: 640px)": {
        ".sm\\:block": { display: "block" },
        ".sm\\:inline": { display: "inline" },
        ".sm\\:inline-block": { display: "inline-block" },
        ".sm\\:flex": { display: "flex" },
        ".sm\\:inline-flex": { display: "inline-flex" },
        ".sm\\:grid": { display: "grid" },
        ".sm\\:hidden": { display: "none" }
    },
    
    "@media (min-width: 768px)": {
        ".md\\:block": { display: "block" },
        ".md\\:inline": { display: "inline" },
        ".md\\:inline-block": { display: "inline-block" },
        ".md\\:flex": { display: "flex" },
        ".md\\:inline-flex": { display: "inline-flex" },
        ".md\\:grid": { display: "grid" },
        ".md\\:hidden": { display: "none" }
    },
    
    "@media (min-width: 1024px)": {
        ".lg\\:block": { display: "block" },
        ".lg\\:inline": { display: "inline" },
        ".lg\\:inline-block": { display: "inline-block" },
        ".lg\\:flex": { display: "flex" },
        ".lg\\:inline-flex": { display: "inline-flex" },
        ".lg\\:grid": { display: "grid" },
        ".lg\\:hidden": { display: "none" }
    },
    
    "@media (min-width: 1280px)": {
        ".xl\\:block": { display: "block" },
        ".xl\\:inline": { display: "inline" },
        ".xl\\:inline-block": { display: "inline-block" },
        ".xl\\:flex": { display: "flex" },
        ".xl\\:inline-flex": { display: "inline-flex" },
        ".xl\\:grid": { display: "grid" },
        ".xl\\:hidden": { display: "none" }
    }
});
