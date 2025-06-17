export default () => ({
    // === SPACING UTILITIES ===
    // Basic margin utilities - parametric
    ".m-$spacing": spacing => ({ margin: spacing }),
    ".mx-$spacing": spacing => ({ 
        marginLeft: spacing,
        marginRight: spacing
    }),
    ".my-$spacing": spacing => ({ 
        marginTop: spacing,
        marginBottom: spacing
    }),
    ".mt-$spacing": spacing => ({ marginTop: spacing }),
    ".mr-$spacing": spacing => ({ marginRight: spacing }),
    ".mb-$spacing": spacing => ({ marginBottom: spacing }),
    ".ml-$spacing": spacing => ({ marginLeft: spacing }),
    
    // Negative margin utilities - parametric
    ".-m-$spacing": spacing => ({ margin: `-${spacing}` }),
    ".-mx-$spacing": spacing => ({ 
        marginLeft: `-${spacing}`,
        marginRight: `-${spacing}`
    }),
    ".-my-$spacing": spacing => ({ 
        marginTop: `-${spacing}`,
        marginBottom: `-${spacing}`
    }),
    ".-mt-$spacing": spacing => ({ marginTop: `-${spacing}` }),
    ".-mr-$spacing": spacing => ({ marginRight: `-${spacing}` }),
    ".-mb-$spacing": spacing => ({ marginBottom: `-${spacing}` }),
    ".-ml-$spacing": spacing => ({ marginLeft: `-${spacing}` }),
    
    // Basic padding utilities - parametric
    ".p-$spacing": spacing => ({ padding: spacing }),
    ".px-$spacing": spacing => ({ 
        paddingLeft: spacing,
        paddingRight: spacing
    }),
    ".py-$spacing": spacing => ({ 
        paddingTop: spacing,
        paddingBottom: spacing
    }),
    ".pt-$spacing": spacing => ({ paddingTop: spacing }),
    ".pr-$spacing": spacing => ({ paddingRight: spacing }),
    ".pb-$spacing": spacing => ({ paddingBottom: spacing }),
    ".pl-$spacing": spacing => ({ paddingLeft: spacing }),
    
    // Space between utilities - simplified
    ".space-x-$spacing > * ~ *": spacing => ({ 
        marginLeft: spacing
    }),
    ".space-y-$spacing > * ~ *": spacing => ({ 
        marginTop: spacing
    }),

    // Gap utilities - parametric
    ".gap-$spacing": spacing => ({ gap: spacing }),
    ".gap-x-$spacing": spacing => ({ columnGap: spacing }),
    ".gap-y-$spacing": spacing => ({ rowGap: spacing }),

    // Responsive spacing utilities
    "@media (min-width: 640px)": {
        ".sm\\:m-$spacing": spacing => ({ margin: spacing }),
        ".sm\\:mx-$spacing": spacing => ({ 
            marginLeft: spacing,
            marginRight: spacing
        }),
        ".sm\\:my-$spacing": spacing => ({ 
            marginTop: spacing,
            marginBottom: spacing
        }),
        ".sm\\:mt-$spacing": spacing => ({ marginTop: spacing }),
        ".sm\\:mr-$spacing": spacing => ({ marginRight: spacing }),
        ".sm\\:mb-$spacing": spacing => ({ marginBottom: spacing }),
        ".sm\\:ml-$spacing": spacing => ({ marginLeft: spacing }),
        
        ".sm\\:p-$spacing": spacing => ({ padding: spacing }),
        ".sm\\:px-$spacing": spacing => ({ 
            paddingLeft: spacing,
            paddingRight: spacing
        }),
        ".sm\\:py-$spacing": spacing => ({ 
            paddingTop: spacing,
            paddingBottom: spacing
        }),
        ".sm\\:pt-$spacing": spacing => ({ paddingTop: spacing }),
        ".sm\\:pr-$spacing": spacing => ({ paddingRight: spacing }),
        ".sm\\:pb-$spacing": spacing => ({ paddingBottom: spacing }),
        ".sm\\:pl-$spacing": spacing => ({ paddingLeft: spacing }),
        
        ".sm\\:gap-$spacing": spacing => ({ gap: spacing }),
        ".sm\\:gap-x-$spacing": spacing => ({ columnGap: spacing }),
        ".sm\\:gap-y-$spacing": spacing => ({ rowGap: spacing }),
        
        ".sm\\:space-x-$spacing > * ~ *": spacing => ({ 
            marginLeft: spacing
        }),
        ".sm\\:space-y-$spacing > * ~ *": spacing => ({ 
            marginTop: spacing
        })
    },
    
    "@media (min-width: 768px)": {
        ".md\\:m-$spacing": spacing => ({ margin: spacing }),
        ".md\\:mx-$spacing": spacing => ({ 
            marginLeft: spacing,
            marginRight: spacing
        }),
        ".md\\:my-$spacing": spacing => ({ 
            marginTop: spacing,
            marginBottom: spacing
        }),
        ".md\\:mt-$spacing": spacing => ({ marginTop: spacing }),
        ".md\\:mr-$spacing": spacing => ({ marginRight: spacing }),
        ".md\\:mb-$spacing": spacing => ({ marginBottom: spacing }),
        ".md\\:ml-$spacing": spacing => ({ marginLeft: spacing }),
        
        ".md\\:p-$spacing": spacing => ({ padding: spacing }),
        ".md\\:px-$spacing": spacing => ({ 
            paddingLeft: spacing,
            paddingRight: spacing
        }),
        ".md\\:py-$spacing": spacing => ({ 
            paddingTop: spacing,
            paddingBottom: spacing
        }),
        ".md\\:pt-$spacing": spacing => ({ paddingTop: spacing }),
        ".md\\:pr-$spacing": spacing => ({ paddingRight: spacing }),
        ".md\\:pb-$spacing": spacing => ({ paddingBottom: spacing }),
        ".md\\:pl-$spacing": spacing => ({ paddingLeft: spacing }),
        
        ".md\\:gap-$spacing": spacing => ({ gap: spacing }),
        ".md\\:gap-x-$spacing": spacing => ({ columnGap: spacing }),
        ".md\\:gap-y-$spacing": spacing => ({ rowGap: spacing }),
        
        ".md\\:space-x-$spacing > * ~ *": spacing => ({ 
            marginLeft: spacing
        }),
        ".md\\:space-y-$spacing > * ~ *": spacing => ({ 
            marginTop: spacing
        })
    },
    
    "@media (min-width: 1024px)": {
        ".lg\\:m-$spacing": spacing => ({ margin: spacing }),
        ".lg\\:mx-$spacing": spacing => ({ 
            marginLeft: spacing,
            marginRight: spacing
        }),
        ".lg\\:my-$spacing": spacing => ({ 
            marginTop: spacing,
            marginBottom: spacing
        }),
        ".lg\\:mt-$spacing": spacing => ({ marginTop: spacing }),
        ".lg\\:mr-$spacing": spacing => ({ marginRight: spacing }),
        ".lg\\:mb-$spacing": spacing => ({ marginBottom: spacing }),
        ".lg\\:ml-$spacing": spacing => ({ marginLeft: spacing }),
        
        ".lg\\:p-$spacing": spacing => ({ padding: spacing }),
        ".lg\\:px-$spacing": spacing => ({ 
            paddingLeft: spacing,
            paddingRight: spacing
        }),
        ".lg\\:py-$spacing": spacing => ({ 
            paddingTop: spacing,
            paddingBottom: spacing
        }),
        ".lg\\:pt-$spacing": spacing => ({ paddingTop: spacing }),
        ".lg\\:pr-$spacing": spacing => ({ paddingRight: spacing }),
        ".lg\\:pb-$spacing": spacing => ({ paddingBottom: spacing }),
        ".lg\\:pl-$spacing": spacing => ({ paddingLeft: spacing }),
        
        ".lg\\:gap-$spacing": spacing => ({ gap: spacing }),
        ".lg\\:gap-x-$spacing": spacing => ({ columnGap: spacing }),
        ".lg\\:gap-y-$spacing": spacing => ({ rowGap: spacing }),
        
        ".lg\\:space-x-$spacing > * ~ *": spacing => ({ 
            marginLeft: spacing
        }),
        ".lg\\:space-y-$spacing > * ~ *": spacing => ({ 
            marginTop: spacing
        })
    },
    
    "@media (min-width: 1280px)": {
        ".xl\\:m-$spacing": spacing => ({ margin: spacing }),
        ".xl\\:mx-$spacing": spacing => ({ 
            marginLeft: spacing,
            marginRight: spacing
        }),
        ".xl\\:my-$spacing": spacing => ({ 
            marginTop: spacing,
            marginBottom: spacing
        }),
        ".xl\\:mt-$spacing": spacing => ({ marginTop: spacing }),
        ".xl\\:mr-$spacing": spacing => ({ marginRight: spacing }),
        ".xl\\:mb-$spacing": spacing => ({ marginBottom: spacing }),
        ".xl\\:ml-$spacing": spacing => ({ marginLeft: spacing }),
        
        ".xl\\:p-$spacing": spacing => ({ padding: spacing }),
        ".xl\\:px-$spacing": spacing => ({ 
            paddingLeft: spacing,
            paddingRight: spacing
        }),
        ".xl\\:py-$spacing": spacing => ({ 
            paddingTop: spacing,
            paddingBottom: spacing
        }),
        ".xl\\:pt-$spacing": spacing => ({ paddingTop: spacing }),
        ".xl\\:pr-$spacing": spacing => ({ paddingRight: spacing }),
        ".xl\\:pb-$spacing": spacing => ({ paddingBottom: spacing }),
        ".xl\\:pl-$spacing": spacing => ({ paddingLeft: spacing }),
        
        ".xl\\:gap-$spacing": spacing => ({ gap: spacing }),
        ".xl\\:gap-x-$spacing": spacing => ({ columnGap: spacing }),
        ".xl\\:gap-y-$spacing": spacing => ({ rowGap: spacing }),
        
        ".xl\\:space-x-$spacing > * ~ *": spacing => ({ 
            marginLeft: spacing
        }),
        ".xl\\:space-y-$spacing > * ~ *": spacing => ({ 
            marginTop: spacing
        })
    }
});
