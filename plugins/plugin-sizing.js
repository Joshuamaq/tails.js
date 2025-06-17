export default () => ({
    // === SIZING UTILITIES ===
      // Width utilities - parametric
    ".w-$spacing": spacing => ({ width: spacing }),
    
    // Height utilities - parametric  
    ".h-$spacing": spacing => ({ height: spacing }),
    
    // Min height utilities - parametric
    ".min-h-$spacing": spacing => ({ minHeight: spacing }),
    
    // Max height utilities - parametric
    ".max-h-$spacing": spacing => ({ maxHeight: spacing }),
    
    // Fixed size utilities
    ".w-auto": { width: "auto" },
    ".w-full": { width: "100%" },
    ".w-screen": { width: "100vw" },
    ".h-auto": { height: "auto" },
    ".h-full": { height: "100%" },
    ".h-screen": { height: "100vh" },
    
    // Min width utilities  
    ".min-w-0": { minWidth: "0px" },
    ".min-w-full": { minWidth: "100%" },
    ".min-w-min": { minWidth: "min-content" },
    ".min-w-max": { minWidth: "max-content" },
    ".min-w-fit": { minWidth: "fit-content" },
    
    // Max width utilities
    ".max-w-0": { maxWidth: "0rem" },
    ".max-w-none": { maxWidth: "none" },
    ".max-w-full": { maxWidth: "100%" },
    ".max-w-min": { maxWidth: "min-content" },
    ".max-w-max": { maxWidth: "max-content" },
    ".max-w-fit": { maxWidth: "fit-content" },
    
    // Min height utilities
    ".min-h-0": { minHeight: "0px" },
    ".min-h-full": { minHeight: "100%" },
    ".min-h-screen": { minHeight: "100vh" },
    ".min-h-min": { minHeight: "min-content" },
    ".min-h-max": { minHeight: "max-content" },
    ".min-h-fit": { minHeight: "fit-content" },
    
    // Max height utilities
    ".max-h-0": { maxHeight: "0rem" },
    ".max-h-none": { maxHeight: "none" },
    ".max-h-full": { maxHeight: "100%" },
    ".max-h-screen": { maxHeight: "100vh" },
    ".max-h-min": { maxHeight: "min-content" },
    ".max-h-max": { maxHeight: "max-content" },
    ".max-h-fit": { maxHeight: "fit-content" },
    
    // Fractional widths & heights
    ".w-1\\/2": { width: "50%" },
    ".w-1\\/3": { width: "33.333333%" },
    ".w-2\\/3": { width: "66.666667%" },
    ".w-1\\/4": { width: "25%" },
    ".w-2\\/4": { width: "50%" },
    ".w-3\\/4": { width: "75%" },
    ".w-1\\/5": { width: "20%" },
    ".w-2\\/5": { width: "40%" },
    ".w-3\\/5": { width: "60%" },
    ".w-4\\/5": { width: "80%" },
    ".w-1\\/6": { width: "16.666667%" },
    ".w-2\\/6": { width: "33.333333%" },
    ".w-3\\/6": { width: "50%" },
    ".w-4\\/6": { width: "66.666667%" },
    ".w-5\\/6": { width: "83.333333%" },
    ".w-1\\/12": { width: "8.333333%" },
    ".w-2\\/12": { width: "16.666667%" },
    ".w-3\\/12": { width: "25%" },
    ".w-4\\/12": { width: "33.333333%" },
    ".w-5\\/12": { width: "41.666667%" },
    ".w-6\\/12": { width: "50%" },
    ".w-7\\/12": { width: "58.333333%" },
    ".w-8\\/12": { width: "66.666667%" },
    ".w-9\\/12": { width: "75%" },
    ".w-10\\/12": { width: "83.333333%" },
    ".w-11\\/12": { width: "91.666667%" },
    
    ".h-1\\/2": { height: "50%" },
    ".h-1\\/3": { height: "33.333333%" },
    ".h-2\\/3": { height: "66.666667%" },
    ".h-1\\/4": { height: "25%" },
    ".h-2\\/4": { height: "50%" },
    ".h-3\\/4": { height: "75%" },
    ".h-1\\/5": { height: "20%" },
    ".h-2\\/5": { height: "40%" },
    ".h-3\\/5": { height: "60%" },
    ".h-4\\/5": { height: "80%" },
    ".h-1\\/6": { height: "16.666667%" },
    ".h-2\\/6": { height: "33.333333%" },
    ".h-3\\/6": { height: "50%" },
    ".h-4\\/6": { height: "66.666667%" },
    ".h-5\\/6": { height: "83.333333%" },
    
    // Max width sizes 
    ".max-w-xs": { maxWidth: "20rem" },
    ".max-w-sm": { maxWidth: "24rem" },
    ".max-w-md": { maxWidth: "28rem" },
    ".max-w-lg": { maxWidth: "32rem" },
    ".max-w-xl": { maxWidth: "36rem" },
    ".max-w-2xl": { maxWidth: "42rem" },
    ".max-w-3xl": { maxWidth: "48rem" },
    ".max-w-4xl": { maxWidth: "56rem" },
    ".max-w-5xl": { maxWidth: "64rem" },
    ".max-w-6xl": { maxWidth: "72rem" },
    ".max-w-7xl": { maxWidth: "80rem" },
    ".max-w-prose": { maxWidth: "65ch" },
    ".max-w-screen-sm": { maxWidth: "640px" },
    ".max-w-screen-md": { maxWidth: "768px" },
    ".max-w-screen-lg": { maxWidth: "1024px" },
    ".max-w-screen-xl": { maxWidth: "1280px" },
    ".max-w-screen-2xl": { maxWidth: "1536px" },
    
    // Min width sizes
    ".min-w-xs": { minWidth: "20rem" },
    ".min-w-sm": { minWidth: "24rem" },
    ".min-w-md": { minWidth: "28rem" },
    ".min-w-lg": { minWidth: "32rem" },
    ".min-w-xl": { minWidth: "36rem" },
    ".min-w-2xl": { minWidth: "42rem" },
    ".min-w-3xl": { minWidth: "48rem" },
    ".min-w-4xl": { minWidth: "56rem" },
    ".min-w-5xl": { minWidth: "64rem" },
    ".min-w-6xl": { minWidth: "72rem" },
    ".min-w-7xl": { minWidth: "80rem" },
    ".min-w-prose": { minWidth: "65ch" },
    
    // Responsive sizing utilities
    "@media (min-width: 640px)": {        
        ".sm\\:w-$spacing": spacing => ({ width: spacing }),
        ".sm\\:h-$spacing": spacing => ({ height: spacing }),
        ".sm\\:min-h-$spacing": spacing => ({ minHeight: spacing }),
        ".sm\\:max-h-$spacing": spacing => ({ maxHeight: spacing }),
        
        ".sm\\:w-auto": { width: "auto" },
        ".sm\\:w-full": { width: "100%" },
        ".sm\\:w-screen": { width: "100vw" },
        ".sm\\:h-auto": { height: "auto" },
        ".sm\\:h-full": { height: "100%" },
        ".sm\\:h-screen": { height: "100vh" },
        
        ".sm\\:min-w-0": { minWidth: "0px" },
        ".sm\\:min-w-full": { minWidth: "100%" },
        ".sm\\:max-w-none": { maxWidth: "none" },
        ".sm\\:max-w-full": { maxWidth: "100%" },
        ".sm\\:min-h-0": { minHeight: "0px" },
        ".sm\\:min-h-full": { minHeight: "100%" },
        ".sm\\:min-h-screen": { minHeight: "100vh" },
        ".sm\\:max-h-full": { maxHeight: "100%" },
        ".sm\\:max-h-screen": { maxHeight: "100vh" },
        
        // Responsive fractional widths
        ".sm\\:w-1\\/2": { width: "50%" },
        ".sm\\:w-1\\/3": { width: "33.333333%" },
        ".sm\\:w-2\\/3": { width: "66.666667%" },
        ".sm\\:w-1\\/4": { width: "25%" },
        ".sm\\:w-3\\/4": { width: "75%" },
        ".sm\\:h-1\\/2": { height: "50%" },
        ".sm\\:h-1\\/3": { height: "33.333333%" },
        ".sm\\:h-2\\/3": { height: "66.666667%" },
        ".sm\\:h-1\\/4": { height: "25%" },
        ".sm\\:h-3\\/4": { height: "75%" }
    },
    
    "@media (min-width: 768px)": {       
         ".md\\:w-$spacing": spacing => ({ width: spacing }),
        ".md\\:h-$spacing": spacing => ({ height: spacing }),
        ".md\\:min-h-$spacing": spacing => ({ minHeight: spacing }),
        ".md\\:max-h-$spacing": spacing => ({ maxHeight: spacing }),
        
        ".md\\:w-auto": { width: "auto" },
        ".md\\:w-full": { width: "100%" },
        ".md\\:w-screen": { width: "100vw" },
        ".md\\:h-auto": { height: "auto" },
        ".md\\:h-full": { height: "100%" },
        ".md\\:h-screen": { height: "100vh" },
        
        ".md\\:min-w-0": { minWidth: "0px" },
        ".md\\:min-w-full": { minWidth: "100%" },
        ".md\\:max-w-none": { maxWidth: "none" },
        ".md\\:max-w-full": { maxWidth: "100%" },
        ".md\\:min-h-0": { minHeight: "0px" },
        ".md\\:min-h-full": { minHeight: "100%" },
        ".md\\:min-h-screen": { minHeight: "100vh" },
        ".md\\:max-h-full": { maxHeight: "100%" },
        ".md\\:max-h-screen": { maxHeight: "100vh" },
        
        // Responsive fractional widths
        ".md\\:w-1\\/2": { width: "50%" },
        ".md\\:w-1\\/3": { width: "33.333333%" },
        ".md\\:w-2\\/3": { width: "66.666667%" },
        ".md\\:w-1\\/4": { width: "25%" },
        ".md\\:w-3\\/4": { width: "75%" },
        ".md\\:h-1\\/2": { height: "50%" },
        ".md\\:h-1\\/3": { height: "33.333333%" },
        ".md\\:h-2\\/3": { height: "66.666667%" },
        ".md\\:h-1\\/4": { height: "25%" },
        ".md\\:h-3\\/4": { height: "75%" }
    },
    
    "@media (min-width: 1024px)": {        ".lg\\:w-$spacing": spacing => ({ width: spacing }),
        ".lg\\:h-$spacing": spacing => ({ height: spacing }),
        ".lg\\:min-h-$spacing": spacing => ({ minHeight: spacing }),
        ".lg\\:max-h-$spacing": spacing => ({ maxHeight: spacing }),
        
        ".lg\\:w-auto": { width: "auto" },
        ".lg\\:w-full": { width: "100%" },
        ".lg\\:w-screen": { width: "100vw" },
        ".lg\\:h-auto": { height: "auto" },
        ".lg\\:h-full": { height: "100%" },
        ".lg\\:h-screen": { height: "100vh" },
        
        ".lg\\:min-w-0": { minWidth: "0px" },
        ".lg\\:min-w-full": { minWidth: "100%" },
        ".lg\\:max-w-none": { maxWidth: "none" },
        ".lg\\:max-w-full": { maxWidth: "100%" },
        ".lg\\:min-h-0": { minHeight: "0px" },
        ".lg\\:min-h-full": { minHeight: "100%" },
        ".lg\\:min-h-screen": { minHeight: "100vh" },
        ".lg\\:max-h-full": { maxHeight: "100%" },
        ".lg\\:max-h-screen": { maxHeight: "100vh" },
        
        // Responsive fractional widths
        ".lg\\:w-1\\/2": { width: "50%" },
        ".lg\\:w-1\\/3": { width: "33.333333%" },
        ".lg\\:w-2\\/3": { width: "66.666667%" },
        ".lg\\:w-1\\/4": { width: "25%" },
        ".lg\\:w-3\\/4": { width: "75%" },
        ".lg\\:h-1\\/2": { height: "50%" },
        ".lg\\:h-1\\/3": { height: "33.333333%" },
        ".lg\\:h-2\\/3": { height: "66.666667%" },
        ".lg\\:h-1\\/4": { height: "25%" },
        ".lg\\:h-3\\/4": { height: "75%" }
    },
    
    "@media (min-width: 1280px)": {        ".xl\\:w-$spacing": spacing => ({ width: spacing }),
        ".xl\\:h-$spacing": spacing => ({ height: spacing }),
        ".xl\\:min-h-$spacing": spacing => ({ minHeight: spacing }),
        ".xl\\:max-h-$spacing": spacing => ({ maxHeight: spacing }),
        
        ".xl\\:w-auto": { width: "auto" },
        ".xl\\:w-full": { width: "100%" },
        ".xl\\:w-screen": { width: "100vw" },
        ".xl\\:h-auto": { height: "auto" },
        ".xl\\:h-full": { height: "100%" },
        ".xl\\:h-screen": { height: "100vh" },
        
        ".xl\\:min-w-0": { minWidth: "0px" },
        ".xl\\:min-w-full": { minWidth: "100%" },
        ".xl\\:max-w-none": { maxWidth: "none" },
        ".xl\\:max-w-full": { maxWidth: "100%" },
        ".xl\\:min-h-0": { minHeight: "0px" },
        ".xl\\:min-h-full": { minHeight: "100%" },
        ".xl\\:min-h-screen": { minHeight: "100vh" },
        ".xl\\:max-h-full": { maxHeight: "100%" },
        ".xl\\:max-h-screen": { maxHeight: "100vh" },
        
        // Responsive fractional widths
        ".xl\\:w-1\\/2": { width: "50%" },
        ".xl\\:w-1\\/3": { width: "33.333333%" },
        ".xl\\:w-2\\/3": { width: "66.666667%" },
        ".xl\\:w-1\\/4": { width: "25%" },
        ".xl\\:w-3\\/4": { width: "75%" },
        ".xl\\:h-1\\/2": { height: "50%" },
        ".xl\\:h-1\\/3": { height: "33.333333%" },
        ".xl\\:h-2\\/3": { height: "66.666667%" },
        ".xl\\:h-1\\/4": { height: "25%" },
        ".xl\\:h-3\\/4": { height: "75%" }
    }
});
