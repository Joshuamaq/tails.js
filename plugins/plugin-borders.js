export default () => ({
    // === BORDER VARIABLES ===
    // Border colors
    "$border-color-default": "\-color-default",
    "$border-color-gray-200": "\-color-default",
    "$border-color-gray-300": "#d1d5db",
    "$border-color-gray-400": "#9ca3af",
    
    // Border radius values
    "$border-radius": "0.25rem",
    "$border-radius-sm": "0.125rem",
    "$border-radius-md": "0.375rem", 
    "$border-radius-lg": "0.5rem",
    "$border-radius-xl": "0.75rem",
    "$border-radius-2xl": "1rem",
    "$border-radius-3xl": "1.5rem",
    "$border-radius-full": "9999px",
    
    // Border width values
    "$border-width-0": "0px",
    "$border-width-1": "1px",
    "$border-width-2": "2px",
    "$border-width-4": "4px",
    "$border-width-8": "8px",

    // === Ring variables ===
    "$twRingInset": "inset",
    "$twRingOffsetWidth": "0px",
    "$twRingOffsetColor": "transparent",
    "$twRingColor": "#3b82f6",
    "$twRingOffsetShadow": "$twRingInset 0 0 0 $twRingOffsetWidth $twRingOffsetColor",
    "$twRingShadow": "$twRingInset 0 0 0 calc(1px + $twRingOffsetWidth) $twRingColor",
    "$twShadow": "0 0 #0000",  

    // === BORDER UTILITIES ===
      // Border width utilities
    ".border-0": { borderWidth: "$border-width-0" },
    ".border": { 
        borderWidth: "$border-width-1", 
        borderStyle: "solid", 
        borderColor: "$border-color-default" 
    },
    ".border-2": { 
        borderWidth: "$border-width-2", 
        borderStyle: "solid", 
        borderColor: "$border-color-default" 
    },
    ".border-4": { 
        borderWidth: "$border-width-4", 
        borderStyle: "solid", 
        borderColor: "$border-color-default" 
    },
    ".border-8": { 
        borderWidth: "$border-width-8", 
        borderStyle: "solid", 
        borderColor: "$border-color-default" 
    },
      // Border width - individual sides
    ".border-t-0": { borderTopWidth: "$border-width-0" },
    ".border-r-0": { borderRightWidth: "$border-width-0" },
    ".border-b-0": { borderBottomWidth: "$border-width-0" },
    ".border-l-0": { borderLeftWidth: "$border-width-0" },
    ".border-x-0": { 
        borderLeftWidth: "$border-width-0", 
        borderRightWidth: "$border-width-0" 
    },
    ".border-y-0": { 
        borderTopWidth: "$border-width-0", 
        borderBottomWidth: "$border-width-0" 
    },
    
    ".border-t": { 
        borderTopWidth: "$border-width-1", 
        borderTopStyle: "solid", 
        borderTopColor: "$border-color-default" 
    },
    ".border-r": { 
        borderRightWidth: "$border-width-1", 
        borderRightStyle: "solid", 
        borderRightColor: "$border-color-default" 
    },
    ".border-b": { 
        borderBottomWidth: "$border-width-1", 
        borderBottomStyle: "solid", 
        borderBottomColor: "$border-color-default" 
    },
    ".border-l": { 
        borderLeftWidth: "$border-width-1", 
        borderLeftStyle: "solid", 
        borderLeftColor: "$border-color-default" 
    },    ".border-x": { 
        borderLeftWidth: "$border-width-1", 
        borderRightWidth: "$border-width-1",
        borderLeftStyle: "solid", 
        borderRightStyle: "solid",
        borderLeftColor: "$border-color-default", 
        borderRightColor: "$border-color-default" 
    },
    ".border-y": { 
        borderTopWidth: "$border-width-1", 
        borderBottomWidth: "$border-width-1",
        borderTopStyle: "solid", 
        borderBottomStyle: "solid",
        borderTopColor: "$border-color-default", 
        borderBottomColor: "$border-color-default" 
    },
      ".border-t-2": { 
        borderTopWidth: "$border-width-2", 
        borderTopStyle: "solid", 
        borderTopColor: "$border-color-default" 
    },
    ".border-r-2": { 
        borderRightWidth: "$border-width-2", 
        borderRightStyle: "solid", 
        borderRightColor: "$border-color-default" 
    },
    ".border-b-2": { 
        borderBottomWidth: "$border-width-2", 
        borderBottomStyle: "solid", 
        borderBottomColor: "$border-color-default" 
    },
    ".border-l-2": { 
        borderLeftWidth: "$border-width-2", 
        borderLeftStyle: "solid", 
        borderLeftColor: "$border-color-default" 
    },    ".border-x-2": { 
        borderLeftWidth: "$border-width-2", 
        borderRightWidth: "$border-width-2",
        borderLeftStyle: "solid", 
        borderRightStyle: "solid",
        borderLeftColor: "$border-color-default", 
        borderRightColor: "$border-color-default" 
    },
    ".border-y-2": { 
        borderTopWidth: "$border-width-2", 
        borderBottomWidth: "$border-width-2",
        borderTopStyle: "solid", 
        borderBottomStyle: "solid",
        borderTopColor: "$border-color-default", 
        borderBottomColor: "$border-color-default" 
    },
    
    ".border-t-4": { 
        borderTopWidth: "4px", 
        borderTopStyle: "solid",        borderTopColor: "$border-color-default" 
    },
    ".border-r-4": { 
        borderRightWidth: "$border-width-4", 
        borderRightStyle: "solid", 
        borderRightColor: "$border-color-default" 
    },
    ".border-b-4": { 
        borderBottomWidth: "$border-width-4", 
        borderBottomStyle: "solid", 
        borderBottomColor: "$border-color-default" 
    },
    ".border-l-4": { 
        borderLeftWidth: "$border-width-4", 
        borderLeftStyle: "solid", 
        borderLeftColor: "$border-color-default" 
    },
    ".border-x-4": { 
        borderLeftWidth: "$border-width-4", 
        borderRightWidth: "$border-width-4",
        borderLeftStyle: "solid", 
        borderRightStyle: "solid",
        borderLeftColor: "$border-color-default", 
        borderRightColor: "$border-color-default" 
    },
    ".border-y-4": { 
        borderTopWidth: "$border-width-4", 
        borderBottomWidth: "$border-width-4",
        borderTopStyle: "solid", 
        borderBottomStyle: "solid",
        borderTopColor: "$border-color-default", 
        borderBottomColor: "$border-color-default" 
    },
    
    ".border-t-8": { 
        borderTopWidth: "8px", 
        borderTopStyle: "solid", 
        borderTopColor: "\-color-default" 
    },
    ".border-r-8": { 
        borderRightWidth: "8px", 
        borderRightStyle: "solid", 
        borderRightColor: "\-color-default" 
    },
    ".border-b-8": { 
        borderBottomWidth: "8px", 
        borderBottomStyle: "solid", 
        borderBottomColor: "\-color-default" 
    },
    ".border-l-8": { 
        borderLeftWidth: "8px", 
        borderLeftStyle: "solid", 
        borderLeftColor: "\-color-default" 
    },
    ".border-x-8": { 
        borderLeftWidth: "8px", 
        borderRightWidth: "8px",
        borderLeftStyle: "solid", 
        borderRightStyle: "solid",
        borderLeftColor: "\-color-default", 
        borderRightColor: "\-color-default" 
    },
    ".border-y-8": { 
        borderTopWidth: "8px", 
        borderBottomWidth: "8px",
        borderTopStyle: "solid", 
        borderBottomStyle: "solid",
        borderTopColor: "\-color-default", 
        borderBottomColor: "\-color-default" 
    },
    
    // Border styles
    ".border-solid": { borderStyle: "solid" },
    ".border-dashed": { borderStyle: "dashed" },
    ".border-dotted": { borderStyle: "dotted" },
    ".border-double": { borderStyle: "double" },
    ".border-hidden": { borderStyle: "hidden" },
    ".border-none": { borderStyle: "none" },
    
    // Border colors - individual sides    ".border-t-transparent": { borderTopColor: "$colorTransparent" },
    ".border-r-transparent": { borderRightColor: "$colorTransparent" },
    ".border-b-transparent": { borderBottomColor: "$colorTransparent" },
    ".border-l-transparent": { borderLeftColor: "$colorTransparent" },
    ".border-x-transparent": { 
        borderLeftColor: "$colorTransparent", 
        borderRightColor: "$colorTransparent" 
    },
    ".border-y-transparent": { 
        borderTopColor: "$colorTransparent", 
        borderBottomColor: "$colorTransparent" 
    },
      ".border-t-black": { borderTopColor: "$colorBlack" },
    ".border-r-black": { borderRightColor: "$colorBlack" },
    ".border-b-black": { borderBottomColor: "$colorBlack" },
    ".border-l-black": { borderLeftColor: "$colorBlack" },
    ".border-x-black": { 
        borderLeftColor: "$colorBlack", 
        borderRightColor: "$colorBlack" 
    },
    ".border-y-black": { 
        borderTopColor: "$colorBlack", 
        borderBottomColor: "$colorBlack" 
    },
      ".border-t-white": { borderTopColor: "$colorWhite" },
    ".border-r-white": { borderRightColor: "$colorWhite" },
    ".border-b-white": { borderBottomColor: "$colorWhite" },
    ".border-l-white": { borderLeftColor: "$colorWhite" },
    ".border-x-white": { 
        borderLeftColor: "$colorWhite", 
        borderRightColor: "$colorWhite" 
    },
    ".border-y-white": { 
        borderTopColor: "$colorWhite", 
        borderBottomColor: "$colorWhite" 
    },
    
    // Border radius    
    ".rounded": { borderRadius: "$borderRadius" },
    ".rounded-sm": { borderRadius: "$borderRadiusSm" },
    ".rounded-md": { borderRadius: "$borderRadiusMd" },
    ".rounded-lg": { borderRadius: "$borderRadiusLg" },
    ".rounded-xl": { borderRadius: "$borderRadiusXl" },
    ".rounded-2xl": { borderRadius: "1rem" },
    ".rounded-3xl": { borderRadius: "1.5rem" },    ".rounded-full": { borderRadius: "$borderRadiusFull" },
    
    // Border radius - individual corners
    ".rounded-t": {
        borderTopLeftRadius: "$borderRadius", 
        borderTopRightRadius: "$borderRadius" 
    },
    ".rounded-r": { 
        borderTopRightRadius: "$borderRadius", 
        borderBottomRightRadius: "$borderRadius" 
    },
    ".rounded-b": { 
        borderBottomRightRadius: "$borderRadius", 
        borderBottomLeftRadius: "$borderRadius" 
    },
    ".rounded-l": { 
        borderTopLeftRadius: "$borderRadius", 
        borderBottomLeftRadius: "$borderRadius" 
    },
    ".rounded-tl": { borderTopLeftRadius: "$borderRadius" },
    ".rounded-tr": { borderTopRightRadius: "$borderRadius" },
    ".rounded-br": { borderBottomRightRadius: "$borderRadius" },
    ".rounded-bl": { borderBottomLeftRadius: "$borderRadius" },
      ".rounded-t-sm": { 
        borderTopLeftRadius: "$borderRadiusSm", 
        borderTopRightRadius: "$borderRadiusSm" 
    },    ".rounded-r-sm": { 
        borderTopRightRadius: "$borderRadiusSm", 
        borderBottomRightRadius: "$borderRadiusSm" 
    },
    ".rounded-b-sm": { 
        borderBottomRightRadius: "$borderRadiusSm", 
        borderBottomLeftRadius: "$borderRadiusSm" 
    },
    ".rounded-l-sm": { 
        borderTopLeftRadius: "$borderRadiusSm", 
        borderBottomLeftRadius: "$borderRadiusSm" 
    },
    ".rounded-tl-sm": { borderTopLeftRadius: "$borderRadiusSm" },
    ".rounded-tr-sm": { borderTopRightRadius: "$borderRadiusSm" },
    ".rounded-br-sm": { borderBottomRightRadius: "$borderRadiusSm" },
    ".rounded-bl-sm": { borderBottomLeftRadius: "$borderRadiusSm" },
      ".rounded-t-md": { 
        borderTopLeftRadius: "$borderRadiusMd", 
        borderTopRightRadius: "$borderRadiusMd" 
    },
    ".rounded-r-md": { 
        borderTopRightRadius: "$borderRadiusMd", 
        borderBottomRightRadius: "$borderRadiusMd" 
    },
    ".rounded-b-md": { 
        borderBottomRightRadius: "$borderRadiusMd", 
        borderBottomLeftRadius: "$borderRadiusMd" 
    },
    ".rounded-l-md": { 
        borderTopLeftRadius: "$borderRadiusMd", 
        borderBottomLeftRadius: "$borderRadiusMd" 
    },
    ".rounded-tl-md": { borderTopLeftRadius: "$borderRadiusMd" },
    ".rounded-tr-md": { borderTopRightRadius: "$borderRadiusMd" },
    ".rounded-br-md": { borderBottomRightRadius: "$borderRadiusMd" },
    ".rounded-bl-md": { borderBottomLeftRadius: "$borderRadiusMd" },
      ".rounded-t-lg": { 
        borderTopLeftRadius: "$borderRadiusLg", 
        borderTopRightRadius: "$borderRadiusLg" 
    },
    ".rounded-r-lg": { 
        borderTopRightRadius: "$borderRadiusLg", 
        borderBottomRightRadius: "$borderRadiusLg" 
    },
    ".rounded-b-lg": { 
        borderBottomRightRadius: "$borderRadiusLg", 
        borderBottomLeftRadius: "$borderRadiusLg" 
    },
    ".rounded-l-lg": { 
        borderTopLeftRadius: "$borderRadiusLg", 
        borderBottomLeftRadius: "$borderRadiusLg" 
    },
    ".rounded-tl-lg": { borderTopLeftRadius: "$borderRadiusLg" },
    ".rounded-tr-lg": { borderTopRightRadius: "$borderRadiusLg" },
    ".rounded-br-lg": { borderBottomRightRadius: "$borderRadiusLg" },
    ".rounded-bl-lg": { borderBottomLeftRadius: "$borderRadiusLg" },
      ".rounded-t-xl": { 
        borderTopLeftRadius: "$borderRadiusXl", 
        borderTopRightRadius: "$borderRadiusXl" 
    },
    ".rounded-r-xl": { 
        borderTopRightRadius: "$borderRadiusXl", 
        borderBottomRightRadius: "$borderRadiusXl" 
    },
    ".rounded-b-xl": { 
        borderBottomRightRadius: "$borderRadiusXl", 
        borderBottomLeftRadius: "$borderRadiusXl" 
    },
    ".rounded-l-xl": { 
        borderTopLeftRadius: "$borderRadiusXl", 
        borderBottomLeftRadius: "$borderRadiusXl" 
    },
    ".rounded-tl-xl": { borderTopLeftRadius: "$borderRadiusXl" },    ".rounded-tr-xl": { borderTopRightRadius: "$borderRadiusXl" },
    ".rounded-br-xl": { borderBottomRightRadius: "$borderRadiusXl" },
    ".rounded-bl-xl": { borderBottomLeftRadius: "$borderRadiusXl" },
    
    ".rounded-t-2xl": { 
        borderTopLeftRadius: "1rem", 
        borderTopRightRadius: "1rem" 
    },
    ".rounded-r-2xl": { 
        borderTopRightRadius: "1rem", 
        borderBottomRightRadius: "1rem" 
    },
    ".rounded-b-2xl": { 
        borderBottomRightRadius: "1rem", 
        borderBottomLeftRadius: "1rem" 
    },
    ".rounded-l-2xl": { 
        borderTopLeftRadius: "1rem", 
        borderBottomLeftRadius: "1rem" 
    },
    ".rounded-tl-2xl": { borderTopLeftRadius: "1rem" },
    ".rounded-tr-2xl": { borderTopRightRadius: "1rem" },
    ".rounded-br-2xl": { borderBottomRightRadius: "1rem" },
    ".rounded-bl-2xl": { borderBottomLeftRadius: "1rem" },
    
    ".rounded-t-3xl": { 
        borderTopLeftRadius: "1.5rem", 
        borderTopRightRadius: "1.5rem" 
    },
    ".rounded-r-3xl": { 
        borderTopRightRadius: "1.5rem", 
        borderBottomRightRadius: "1.5rem" 
    },
    ".rounded-b-3xl": { 
        borderBottomRightRadius: "1.5rem", 
        borderBottomLeftRadius: "1.5rem" 
    },
    ".rounded-l-3xl": { 
        borderTopLeftRadius: "1.5rem", 
        borderBottomLeftRadius: "1.5rem" 
    },
    ".rounded-tl-3xl": { borderTopLeftRadius: "1.5rem" },
    ".rounded-tr-3xl": { borderTopRightRadius: "1.5rem" },
    ".rounded-br-3xl": { borderBottomRightRadius: "1.5rem" },
    ".rounded-bl-3xl": { borderBottomLeftRadius: "1.5rem" },
      ".rounded-t-full": { 
        borderTopLeftRadius: "$borderRadiusFull", 
        borderTopRightRadius: "$borderRadiusFull" 
    },
    ".rounded-r-full": { 
        borderTopRightRadius: "$borderRadiusFull", 
        borderBottomRightRadius: "$borderRadiusFull" 
    },
    ".rounded-b-full": { 
        borderBottomRightRadius: "$borderRadiusFull", 
        borderBottomLeftRadius: "$borderRadiusFull" 
    },
    ".rounded-l-full": { 
        borderTopLeftRadius: "$borderRadiusFull", 
        borderBottomLeftRadius: "$borderRadiusFull" 
    },
    ".rounded-tl-full": { borderTopLeftRadius: "$borderRadiusFull" },
    ".rounded-tr-full": { borderTopRightRadius: "$borderRadiusFull" },
    ".rounded-br-full": { borderBottomRightRadius: "$borderRadiusFull" },
    ".rounded-bl-full": { borderBottomLeftRadius: "$borderRadiusFull" },
    
    // Outline utilities
    ".outline-none": { 
        outline: "2px solid transparent", 
        outlineOffset: "2px" 
    },
    ".outline": { 
        outline: "2px solid #3b82f6", 
        outlineOffset: "2px" 
    },
    ".outline-dashed": { 
        outline: "2px dashed #3b82f6", 
        outlineOffset: "2px" 
    },
    ".outline-dotted": { 
        outline: "2px dotted #3b82f6", 
        outlineOffset: "2px" 
    },
    ".outline-double": { 
        outline: "3px double #3b82f6", 
        outlineOffset: "2px" 
    },
    
    // Outline widths
    ".outline-0": { outlineWidth: "0px" },
    ".outline-1": { outlineWidth: "1px" },
    ".outline-2": { outlineWidth: "2px" },
    ".outline-4": { outlineWidth: "4px" },
    ".outline-8": { outlineWidth: "8px" },
    
    // Outline colors    ".outline-transparent": { outlineColor: "$colorTransparent" },
    ".outline-black": { outlineColor: "$colorBlack" },
    ".outline-white": { outlineColor: "$colorWhite" },
    
    // Outline offset
    ".outline-offset-0": { outlineOffset: "0px" },
    ".outline-offset-1": { outlineOffset: "1px" },
    ".outline-offset-2": { outlineOffset: "2px" },
    ".outline-offset-4": { outlineOffset: "4px" },
    ".outline-offset-8": { outlineOffset: "8px" },
    
    // Divide utilities (borders between elements)
    ".divide-x-0 > :not([hidden]) ~ :not([hidden])": { borderLeftWidth: "0px" },
    ".divide-y-0 > :not([hidden]) ~ :not([hidden])": { borderTopWidth: "0px" },
    
    ".divide-x > :not([hidden]) ~ :not([hidden])": { borderLeftWidth: "1px" },
    ".divide-y > :not([hidden]) ~ :not([hidden])": { borderTopWidth: "1px" },
    
    ".divide-x-2 > :not([hidden]) ~ :not([hidden])": { borderLeftWidth: "2px" },
    ".divide-y-2 > :not([hidden]) ~ :not([hidden])": { borderTopWidth: "2px" },
    
    ".divide-x-4 > :not([hidden]) ~ :not([hidden])": { borderLeftWidth: "4px" },
    ".divide-y-4 > :not([hidden]) ~ :not([hidden])": { borderTopWidth: "4px" },
    
    ".divide-x-8 > :not([hidden]) ~ :not([hidden])": { borderLeftWidth: "8px" },
    ".divide-y-8 > :not([hidden]) ~ :not([hidden])": { borderTopWidth: "8px" },
    
    // Divide styles
    ".divide-solid > :not([hidden]) ~ :not([hidden])": { borderStyle: "solid" },
    ".divide-dashed > :not([hidden]) ~ :not([hidden])": { borderStyle: "dashed" },
    ".divide-dotted > :not([hidden]) ~ :not([hidden])": { borderStyle: "dotted" },
    ".divide-double > :not([hidden]) ~ :not([hidden])": { borderStyle: "double" },
    ".divide-none > :not([hidden]) ~ :not([hidden])": { borderStyle: "none" },
    
    // Divide colors    ".divide-transparent > :not([hidden]) ~ :not([hidden])": { borderColor: "$colorTransparent" },
    ".divide-black > :not([hidden]) ~ :not([hidden])": { borderColor: "$colorBlack" },
    ".divide-white > :not([hidden]) ~ :not([hidden])": { borderColor: "$colorWhite" },
    
    // Focus ring utilities
    ".focus\\:outline-none:focus": { 
        outline: "2px solid transparent", 
        outlineOffset: "2px" 
    },
    ".focus\\:ring-1:focus": { 
        "--tw-ring-offset-shadow": "$twRingOffsetShadow",
        "--tw-ring-shadow": "$twRingShadow",
        boxShadow: "$twRingOffsetShadow,$twRingShadow,$twShadow" 
    },
    ".focus\\:ring-2:focus": { 
        // For ring-2, recalc ring shadow with 2px offset
        "--tw-ring-offset-shadow": "$twRingOffsetShadow",
        "--tw-ring-shadow": "$twRingInset 0 0 0 calc(2px + $twRingOffsetWidth) $twRingColor",
        boxShadow: "$twRingOffsetShadow,$twRingShadow,$twShadow" 
    },
    ".focus\\:ring-blue-500:focus": { "$twRingColor": "#3b82f6" }
});
