export default () => ({
  // === TYPOGRAPHY VARIABLES ===
  $fontSizeXs: "0.75rem",
  $fontSizeSm: "0.875rem",
  $fontSizeBase: "1rem",
  $fontSizelg: "1.125rem",
  $fontSizexl: "1.25rem",
  $fontSize2xl: "1.5rem",
  $fontSize3xl: "1.875rem",
  $fontSize4xl: "2.25rem",
  $fontSize5xl: "3rem",
  $fontSize6xl: "3.75rem",

  "$fontWeight-thin": "100",
  "$fontWeight-light": "300",
  "$fontWeight-normal": "400",
  "$fontWeight-medium": "500",
  "$fontWeight-semibold": "600",
  "$fontWeight-bold": "700",

  "$lineHeight-none": "1",
  "$lineHeight-tight": "1.25",
  "$lineHeight-normal": "1.5",
  "$lineHeight-relaxed": "1.625",
  "$lineHeight-loose": "2",

  // === TYPOGRAPHY UTILITIES ===
  // Font sizes - parametric
  ".text-xs": { fontSize: "$fontSize-xs" },
  ".text-sm": { fontSize: "$fontSize-sm" },
  ".text-base": { fontSize: "$fontSize-base" },
  ".text-lg": { fontSize: "$fontSize-lg" },
  ".text-xl": { fontSize: "$fontSize-xl" },
  ".text-2xl": { fontSize: "$fontSize-2xl" },
  ".text-3xl": { fontSize: "$fontSize-3xl" },
  ".text-4xl": { fontSize: "$fontSize-4xl" },
  ".text-5xl": { fontSize: "$fontSize-5xl" },
  ".text-6xl": { fontSize: "$fontSize-6xl" },
  // Font weights
  ".font-thin": { fontWeight: "$fontWeight-thin" },
  ".font-light": { fontWeight: "$fontWeight-light" },
  ".font-normal": { fontWeight: "$fontWeight-normal" },
  ".font-medium": { fontWeight: "$fontWeight-medium" },
  ".font-semibold": { fontWeight: "$fontWeight-semibold" },
  ".font-bold": { fontWeight: "$fontWeight-bold" },

  // Text alignment
  ".text-left": { textAlign: "left" },
  ".text-center": { textAlign: "center" },
  ".text-right": { textAlign: "right" },
  ".text-justify": { textAlign: "justify" },
  ".text-start": { textAlign: "start" },
  ".text-end": { textAlign: "end" },

  // Text transform
  ".uppercase": { textTransform: "uppercase" },
  ".lowercase": { textTransform: "lowercase" },
  ".capitalize": { textTransform: "capitalize" },
  ".normal-case": { textTransform: "none" },
  // Line height
  ".leading-none": { lineHeight: "$lineHeight-none" },
  ".leading-tight": { lineHeight: "$lineHeight-tight" },
  ".leading-normal": { lineHeight: "$lineHeight-normal" },
  ".leading-relaxed": { lineHeight: "$lineHeight-relaxed" },
  ".leading-loose": { lineHeight: "$lineHeight-loose" },

  // Letter spacing (tracking)
  ".tracking-tighter": { letterSpacing: "-0.05em" },
  ".tracking-tight": { letterSpacing: "-0.025em" },
  ".tracking-normal": { letterSpacing: "0em" },
  ".tracking-wide": { letterSpacing: "0.025em" },
  ".tracking-wider": { letterSpacing: "0.05em" },
  ".tracking-widest": { letterSpacing: "0.1em" },

  // Text decoration
  ".underline": { textDecorationLine: "underline" },
  ".overline": { textDecorationLine: "overline" },
  ".line-through": { textDecorationLine: "line-through" },
  ".no-underline": { textDecorationLine: "none" },

  // Text decoration style
  ".decoration-solid": { textDecorationStyle: "solid" },
  ".decoration-double": { textDecorationStyle: "double" },
  ".decoration-dotted": { textDecorationStyle: "dotted" },
  ".decoration-dashed": { textDecorationStyle: "dashed" },
  ".decoration-wavy": { textDecorationStyle: "wavy" },

  // Text decoration thickness
  ".decoration-auto": { textDecorationThickness: "auto" },
  ".decoration-from-font": { textDecorationThickness: "from-font" },
  ".decoration-0": { textDecorationThickness: "0px" },
  ".decoration-1": { textDecorationThickness: "1px" },
  ".decoration-2": { textDecorationThickness: "2px" },
  ".decoration-4": { textDecorationThickness: "4px" },
  ".decoration-8": { textDecorationThickness: "8px" },

  // Text underline offset
  ".underline-offset-auto": { textUnderlineOffset: "auto" },
  ".underline-offset-0": { textUnderlineOffset: "0px" },
  ".underline-offset-1": { textUnderlineOffset: "1px" },
  ".underline-offset-2": { textUnderlineOffset: "2px" },
  ".underline-offset-4": { textUnderlineOffset: "4px" },
  ".underline-offset-8": { textUnderlineOffset: "8px" },
  // Text decoration colors
  ".decoration-transparent": { textDecorationColor: "$color-transparent" },
  ".decoration-black": { textDecorationColor: "$color-black" },
  ".decoration-white": { textDecorationColor: "$color-white" },

  // Text colors
  ".text-transparent": { color: "$color-transparent" },
  ".text-black": { color: "$color-black" },
  ".text-white": { color: "$color-white" },

  // Theme text colors
  ".text-theme-primary": { color: "$color-theme-primary" },
  ".text-theme-secondary": { color: "$color-theme-secondary" },
  ".text-theme-accent": { color: "$color-theme-accent" },
  ".text-theme-success": { color: "$color-theme-success" },
  ".text-theme-warning": { color: "$color-theme-warning" },
  ".text-theme-error": { color: "$color-theme-error" },
  ".text-theme-text-primary": { color: "$color-theme-text-primary" },
  ".text-theme-text-secondary": { color: "$color-theme-text-secondary" },

  // Font family (basic)    ".font-sans": { fontFamily: "$fontFamily-sans" },
  ".font-serif": { fontFamily: "$fontFamily-serif" },
  ".font-mono": { fontFamily: "$fontFamily-mono" },

  // Text overflow
  ".truncate": {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  ".text-ellipsis": { textOverflow: "ellipsis" },
  ".text-clip": { textOverflow: "clip" },

  // White space
  ".whitespace-normal": { whiteSpace: "normal" },
  ".whitespace-nowrap": { whiteSpace: "nowrap" },
  ".whitespace-pre": { whiteSpace: "pre" },
  ".whitespace-pre-line": { whiteSpace: "pre-line" },
  ".whitespace-pre-wrap": { whiteSpace: "pre-wrap" },
  ".whitespace-break-spaces": { whiteSpace: "break-spaces" },

  // Word break
  ".break-normal": {
    overflowWrap: "normal",
    wordBreak: "normal"
  },
  ".break-words": { overflowWrap: "break-word" },
  ".break-all": { wordBreak: "break-all" },
  ".break-keep": { wordBreak: "keep-all" },

  // Text indent
  ".indent-0": { textIndent: "0px" },
  ".indent-px": { textIndent: "1px" },
  ".indent-0\\.5": { textIndent: "0.125rem" },
  ".indent-1": { textIndent: "0.25rem" },
  ".indent-1\\.5": { textIndent: "0.375rem" },
  ".indent-2": { textIndent: "0.5rem" },
  ".indent-2\\.5": { textIndent: "0.625rem" },
  ".indent-3": { textIndent: "0.75rem" },
  ".indent-3\\.5": { textIndent: "0.875rem" },
  ".indent-4": { textIndent: "1rem" },
  ".indent-5": { textIndent: "1.25rem" },
  ".indent-6": { textIndent: "1.5rem" },
  ".indent-7": { textIndent: "1.75rem" },
  ".indent-8": { textIndent: "2rem" },

  // Hover states for text colors        ".hover\\:text-transparent:hover": { color: "$color-transparent" },
  ".hover\\:text-black:hover": { color: "$color-black" },
  ".hover\\:text-white:hover": { color: "$color-white" },
  ".hover\\:text-theme-primary:hover": { color: "$color-theme-primary" },
  ".hover\\:text-theme-secondary:hover": { color: "$theme-secondary" },

  // Focus states for text colors
  ".focus\\:text-transparent:focus": { color: "$colorTransparent" },
  ".focus\\:text-black:focus": { color: "$colorBlack" },
  ".focus\\:text-white:focus": { color: "$colorWhite" },
  ".focus\\:text-theme-primary:focus": { color: "$themePrimary" },
  ".focus\\:text-theme-secondary:focus": { color: "$themeSecondary" },

  // Responsive typography utilities
  "@media (min-width: 640px)": {
    ".sm\\:text-xs": { fontSize: "$fontSizeXs" },
    ".sm\\:text-sm": { fontSize: "var(--font-size-sm)" },
    ".sm\\:text-base": { fontSize: "var(--font-size-base)" },
    ".sm\\:text-lg": { fontSize: "var(--font-size-lg)" },
    ".sm\\:text-xl": { fontSize: "var(--font-size-xl)" },
    ".sm\\:text-2xl": { fontSize: "var(--font-size-2xl)" },
    ".sm\\:text-3xl": { fontSize: "var(--font-size-3xl)" },
    ".sm\\:text-4xl": { fontSize: "var(--font-size-4xl)" },
    ".sm\\:text-5xl": { fontSize: "var(--font-size-5xl)" },
    ".sm\\:text-6xl": { fontSize: "var(--font-size-6xl)" },

    ".sm\\:text-left": { textAlign: "left" },
    ".sm\\:text-center": { textAlign: "center" },
    ".sm\\:text-right": { textAlign: "right" },

    ".sm\\:font-thin": { fontWeight: "var(--font-weight-thin)" },
    ".sm\\:font-light": { fontWeight: "var(--font-weight-light)" },
    ".sm\\:font-normal": { fontWeight: "var(--font-weight-normal)" },
    ".sm\\:font-medium": { fontWeight: "var(--font-weight-medium)" },
    ".sm\\:font-semibold": { fontWeight: "var(--font-weight-semibold)" },
    ".sm\\:font-bold": { fontWeight: "var(--font-weight-bold)" }
  },

  "@media (min-width: 768px)": {
    ".md\\:text-xs": { fontSize: "var(--font-size-xs)" },
    ".md\\:text-sm": { fontSize: "var(--font-size-sm)" },
    ".md\\:text-base": { fontSize: "var(--font-size-base)" },
    ".md\\:text-lg": { fontSize: "var(--font-size-lg)" },
    ".md\\:text-xl": { fontSize: "var(--font-size-xl)" },
    ".md\\:text-2xl": { fontSize: "var(--font-size-2xl)" },
    ".md\\:text-3xl": { fontSize: "var(--font-size-3xl)" },
    ".md\\:text-4xl": { fontSize: "var(--font-size-4xl)" },
    ".md\\:text-5xl": { fontSize: "var(--font-size-5xl)" },
    ".md\\:text-6xl": { fontSize: "var(--font-size-6xl)" },

    ".md\\:text-left": { textAlign: "left" },
    ".md\\:text-center": { textAlign: "center" },
    ".md\\:text-right": { textAlign: "right" },

    ".md\\:font-thin": { fontWeight: "var(--font-weight-thin)" },
    ".md\\:font-light": { fontWeight: "var(--font-weight-light)" },
    ".md\\:font-normal": { fontWeight: "var(--font-weight-normal)" },
    ".md\\:font-medium": { fontWeight: "var(--font-weight-medium)" },
    ".md\\:font-semibold": { fontWeight: "var(--font-weight-semibold)" },
    ".md\\:font-bold": { fontWeight: "var(--font-weight-bold)" }
  },

  "@media (min-width: 1024px)": {
    ".lg\\:text-xs": { fontSize: "var(--font-size-xs)" },
    ".lg\\:text-sm": { fontSize: "var(--font-size-sm)" },
    ".lg\\:text-base": { fontSize: "var(--font-size-base)" },
    ".lg\\:text-lg": { fontSize: "var(--font-size-lg)" },
    ".lg\\:text-xl": { fontSize: "var(--font-size-xl)" },
    ".lg\\:text-2xl": { fontSize: "var(--font-size-2xl)" },
    ".lg\\:text-3xl": { fontSize: "var(--font-size-3xl)" },
    ".lg\\:text-4xl": { fontSize: "var(--font-size-4xl)" },
    ".lg\\:text-5xl": { fontSize: "var(--font-size-5xl)" },
    ".lg\\:text-6xl": { fontSize: "var(--font-size-6xl)" },

    ".lg\\:text-left": { textAlign: "left" },
    ".lg\\:text-center": { textAlign: "center" },
    ".lg\\:text-right": { textAlign: "right" },

    ".lg\\:font-thin": { fontWeight: "var(--font-weight-thin)" },
    ".lg\\:font-light": { fontWeight: "var(--font-weight-light)" },
    ".lg\\:font-normal": { fontWeight: "var(--font-weight-normal)" },
    ".lg\\:font-medium": { fontWeight: "var(--font-weight-medium)" },
    ".lg\\:font-semibold": { fontWeight: "var(--font-weight-semibold)" },
    ".lg\\:font-bold": { fontWeight: "var(--font-weight-bold)" }
  },

  "@media (min-width: 1280px)": {
    ".xl\\:text-xs": { fontSize: "var(--font-size-xs)" },
    ".xl\\:text-sm": { fontSize: "var(--font-size-sm)" },
    ".xl\\:text-base": { fontSize: "var(--font-size-base)" },
    ".xl\\:text-lg": { fontSize: "var(--font-size-lg)" },
    ".xl\\:text-xl": { fontSize: "var(--font-size-xl)" },
    ".xl\\:text-2xl": { fontSize: "var(--font-size-2xl)" },
    ".xl\\:text-3xl": { fontSize: "var(--font-size-3xl)" },
    ".xl\\:text-4xl": { fontSize: "var(--font-size-4xl)" },
    ".xl\\:text-5xl": { fontSize: "var(--font-size-5xl)" },
    ".xl\\:text-6xl": { fontSize: "var(--font-size-6xl)" },

    ".xl\\:text-left": { textAlign: "left" },
    ".xl\\:text-center": { textAlign: "center" },
    ".xl\\:text-right": { textAlign: "right" },

    ".xl\\:font-thin": { fontWeight: "var(--font-weight-thin)" },
    ".xl\\:font-light": { fontWeight: "var(--font-weight-light)" },
    ".xl\\:font-normal": { fontWeight: "var(--font-weight-normal)" },
    ".xl\\:font-medium": { fontWeight: "var(--font-weight-medium)" },
    ".xl\\:font-semibold": { fontWeight: "var(--font-weight-semibold)" },
    ".xl\\:font-bold": { fontWeight: "var(--font-weight-bold)" }
  }
});
