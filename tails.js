// TailsJS - ES6 Module
const config = {
  spacing: [0,0.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96],
  colors: ['gray','red','blue','green','yellow','purple','indigo','pink','orange','teal','cyan'],
  shades: [50,100,200,300,400,500,600,700,800,900],
  breakpoints: ['sm','md','lg','xl'],
  fractions: {
    '1/2': '50%', '1/3': '33.333333%', '2/3': '66.666667%',
    '1/4': '25%', '3/4': '75%', '1/5': '20%', '2/5': '40%', '3/5': '60%', '4/5': '80%',
    '1/6': '16.666667%', '5/6': '83.333333%', 
    '1/12': '8.333333%', '2/12': '16.666667%', '3/12': '25%', '4/12': '33.333333%', 
    '5/12': '41.666667%', '6/12': '50%', '7/12': '58.333333%', '8/12': '66.666667%', 
    '9/12': '75%', '10/12': '83.333333%', '11/12': '91.666667%'
  },
  maxWidths: {
    'xs': '20rem', 'sm': '24rem', 'md': '28rem', 'lg': '32rem', 'xl': '36rem',
    '2xl': '42rem', '3xl': '48rem', '4xl': '56rem', '5xl': '64rem', '6xl': '72rem', '7xl': '80rem',
    'prose': '65ch', 'screen-sm': '640px', 'screen-md': '768px', 'screen-lg': '1024px', 'screen-xl': '1280px'
  }
};

// Generate CSS variables programmatically
const vars = {
  // Breakpoints
  '--breakpoint-sm': '640px', '--breakpoint-md': '768px', '--breakpoint-lg': '1024px', '--breakpoint-xl': '1280px',
  // Basic colors
  '--color-transparent': 'transparent', '--color-black': '#000000', '--color-white': '#ffffff',
  // Typography
  '--font-size-xs': '0.75rem', '--font-size-sm': '0.875rem', '--font-size-base': '1rem', '--font-size-lg': '1.125rem', '--font-size-xl': '1.25rem', '--font-size-2xl': '1.5rem', '--font-size-3xl': '1.875rem', '--font-size-4xl': '2.25rem', '--font-size-5xl': '3rem', '--font-size-6xl': '3.75rem',
  '--font-weight-thin': '100', '--font-weight-light': '300', '--font-weight-normal': '400', '--font-weight-medium': '500', '--font-weight-semibold': '600', '--font-weight-bold': '700',
  '--line-height-none': '1', '--line-height-tight': '1.25', '--line-height-normal': '1.5', '--line-height-relaxed': '1.625', '--line-height-loose': '2',
  // Borders & Effects
  '--border-radius': '0.25rem', '--border-radius-sm': '0.125rem', '--border-radius-md': '0.375rem', '--border-radius-lg': '0.5rem', '--border-radius-xl': '0.75rem', '--border-radius-2xl': '1rem', '--border-radius-3xl': '1.5rem', '--border-radius-full': '9999px',
  '--shadow': '0 1px 3px 0 rgb(0 0 0 / 0.1)', '--shadow-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)', '--shadow-md': '0 4px 6px -1px rgb(0 0 0 / 0.1)', '--shadow-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1)', '--shadow-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '--opacity-0': '0', '--opacity-25': '0.25', '--opacity-50': '0.5', '--opacity-75': '0.75', '--opacity-100': '1',
  '--transition': 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
  // Theme variables
  '--theme-primary': '#3b82f6', '--theme-secondary': '#64748b', '--theme-accent': '#f59e0b', '--theme-success': '#22c55e', '--theme-warning': '#f59e0b', '--theme-error': '#ef4444',
  '--theme-bg-primary': '#ffffff', '--theme-bg-secondary': '#f8fafc', '--theme-text-primary': '#0f172a', '--theme-text-secondary': '#475569'
};

// Add spacing variables programmatically
config.spacing.forEach(s => {
  const key = s.toString().replace('.', '\\.');
  const val = s === 0 ? '0px' : s < 1 ? `${s * 16}px` : `${s * 0.25}rem`;
  vars[`--spacing-${key}`] = val;
});

// Add color variables programmatically
const colorValues = {
  gray: ['#f9fafb','#f7fafc','#edf2f7','#e2e8f0','#cbd5e0','#a0aec0','#6b7280','#4b5563','#374151','#111827'],
  red: ['#fef2f2','#fee2e2','#fecaca','#fca5a5','#f87171','#ef4444','#dc2626','#b91c1c','#991b1b','#7f1d1d'],
  blue: ['#eff6ff','#dbeafe','#bfdbfe','#93c5fd','#60a5fa','#3b82f6','#2563eb','#1d4ed8','#1e40af','#1e3a8a'],
  green: ['#f0fdf4','#dcfce7','#bbf7d0','#86efac','#4ade80','#22c55e','#16a34a','#15803d','#166534','#14532d'],
  yellow: ['#fffbeb','#fef3c7','#fde68a','#fcd34d','#fbbf24','#f59e0b','#d97706','#b45309','#92400e','#78350f'],
  purple: ['#faf5ff','#f3e8ff','#e9d5ff','#d8b4fe','#c084fc','#a855f7','#9333ea','#7c3aed','#6d28d9','#581c87'],
  indigo: ['#eef2ff','#e0e7ff','#c7d2fe','#a5b4fc','#818cf8','#6366f1','#4f46e5','#4338ca','#3730a3','#312e81'],
  pink: ['#fdf2f8','#fce7f3','#fbcfe8','#f9a8d4','#f472b6','#ec4899','#db2777','#be185d','#9d174d','#831843'],
  orange: ['#fff7ed','#ffedd5','#fed7aa','#fdba74','#fb923c','#f97316','#ea580c','#c2410c','#9a3412','#7c2d12'],
  teal: ['#f0fdfa','#ccfbf1','#99f6e4','#5eead4','#2dd4bf','#14b8a6','#0d9488','#0f766e','#115e59','#134e4a'],
  cyan: ['#ecfeff','#cffafe','#a5f3fc','#67e8f9','#22d3ee','#06b6d4','#0891b2','#0e7490','#155e75','#164e63']
};

config.colors.forEach(color => {
  config.shades.forEach((shade, i) => {
    vars[`--color-${color}-${shade}`] = colorValues[color][i];
  });
});

// Utility functions
const v = name => `var(${name})`;
const plugins = [];

// Theme functions
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
}

function getTheme() {
  return document.documentElement.getAttribute('data-theme') || 'default';
}

function removeTheme() {
  document.documentElement.removeAttribute('data-theme');
}

function setCustomTheme(themeVars) {
  const root = document.documentElement;
  Object.entries(themeVars).forEach(([property, value]) => {
    const prop = property.startsWith('--') ? property : `--theme-${property}`;
    root.style.setProperty(prop, value);
  });
}

// Plugin system
function addPlugin(plugin) {
  if (!plugin || typeof plugin !== 'object') {
    console.warn('Plugin must be an object');
    return;
  }
  plugins.push(plugin);
  
  // Process plugin variables
  if (plugin.variables) {
    Object.entries(plugin.variables).forEach(([key, value]) => {
      vars[`--${key}`] = value;
    });
  }
  
  if (plugin.components) {
    window.pluginComponents = {
      ...window.pluginComponents,
      ...plugin.components
    };
  }
  
  if (document.querySelector('[data-mini-tailwind]')) {
    reinitialize();
  }
}

function generatePluginCSS() {
  let css = '';
  
  plugins.forEach(plugin => {
    // Handle keyframes
    if (plugin.keyframes) {
      Object.entries(plugin.keyframes).forEach(([name, keyframe]) => {
        css += `@keyframes ${name}{`;
        Object.entries(keyframe).forEach(([percent, styles]) => {
          css += `${percent}{`;
          if (typeof styles === 'string') {
            css += styles;
          } else if (typeof styles === 'object') {
            css += Object.entries(styles).map(([prop, val]) => `${prop}:${val}`).join(';');
          }
          css += '}';
        });
        css += '}';
      });
    }
    
    // Handle utilities
    if (plugin.utilities) {
      Object.entries(plugin.utilities).forEach(([className, styles]) => {
        css += `.${className}{`;
        if (typeof styles === 'string') {
          css += styles;
        } else if (typeof styles === 'object') {
          css += Object.entries(styles).map(([prop, val]) => `${prop}:${val}`).join(';');
        }
        css += '}';
      });
    }
      // Handle components (store for class processing, don't generate CSS here)
    if (plugin.components) {
      Object.entries(plugin.components).forEach(([className, utilityClasses]) => {
        if (typeof utilityClasses === 'string') {
          // Store component definitions for later processing
          if (!window.pluginComponents) window.pluginComponents = {};
          window.pluginComponents[className] = utilityClasses;
        }
      });
    }
    
    // Legacy support for simple class definitions
    Object.entries(plugin).forEach(([key, value]) => {
      if (!['variables', 'utilities', 'components', 'keyframes'].includes(key)) {
        if (typeof value === 'string') {
          css += `.${key}{${value}}`;
        } else if (typeof value === 'object') {
          const styleStr = Object.entries(value).map(([prop, val]) => `${prop}:${val}`).join(';');
          css += `.${key}{${styleStr}}`;
        }
      }
    });
  });
  
  return css;
}

// CSS Generation
function generateCSS() {
  let css = '';
  // Display & Visibility
  css += '.block{display:block}.inline{display:inline}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}';
  css += '.visible{visibility:visible}.invisible{visibility:hidden}';
  css += '.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}';
  
  // Spacing (simplified generation)
  css += genSpacing(config.spacing, 'm', 'margin');
  css += genSpacing(config.spacing, 'p', 'padding');
  
  // Pixel-based spacing
  css += '.m-px{margin:1px}.p-px{padding:1px}.-m-px{margin:-1px}';
  css += genDirectional(['x','y','t','r','b','l'], 'm', 'margin', '1px', '-px');
  css += genDirectional(['x','y','t','r','b','l'], 'p', 'padding', '1px', '-px');
  css += genDirectional(['x','y','t','r','b','l'], '-m', 'margin', '-1px', '-px');
  
  // Auto margins
  css += '.m-auto{margin:auto}';
  css += genDirectional(['x','y','t','r','b','l'], 'm', 'margin', 'auto', '-auto');
  
  // Space between utilities
  config.spacing.forEach(s => {
    const sKey = s.toString().replace('.', '\\.');
    const val = v(`--spacing-${sKey}`);
    css += `.space-x-${sKey} > :not([hidden]) ~ :not([hidden]){margin-left:${val}}`;
    css += `.space-y-${sKey} > :not([hidden]) ~ :not([hidden]){margin-top:${val}}`;
    if (s > 0) {
      css += `.-space-x-${sKey} > :not([hidden]) ~ :not([hidden]){margin-left:-${val}}`;
      css += `.-space-y-${sKey} > :not([hidden]) ~ :not([hidden]){margin-top:-${val}}`;
    }
  });
  css += '.space-x-px > :not([hidden]) ~ :not([hidden]){margin-left:1px}';
  css += '.space-y-px > :not([hidden]) ~ :not([hidden]){margin-top:1px}';
  css += '.-space-x-px > :not([hidden]) ~ :not([hidden]){margin-left:-1px}';
  css += '.-space-y-px > :not([hidden]) ~ :not([hidden]){margin-top:-1px}';
  css += '.space-y-reverse > :not([hidden]) ~ :not([hidden]){margin-top:0;margin-bottom:var(--tw-space-y-reverse)}';
  css += '.space-x-reverse > :not([hidden]) ~ :not([hidden]){margin-left:0;margin-right:var(--tw-space-x-reverse)}';
  
  // Container utilities
  css += '.container{width:100%}';
  css += '@media(min-width:640px){.container{max-width:640px}}';
  css += '@media(min-width:768px){.container{max-width:768px}}';
  css += '@media(min-width:1024px){.container{max-width:1024px}}';
  css += '@media(min-width:1280px){.container{max-width:1280px}}';
  css += '.mx-auto{margin-left:auto;margin-right:auto}';
  
  // Advanced spacing utilities
  css += '.space-x-0 > :not([hidden]) ~ :not([hidden]){margin-left:0px}';
  css += '.space-y-0 > :not([hidden]) ~ :not([hidden]){margin-top:0px}';
  css += '.-space-x-0 > :not([hidden]) ~ :not([hidden]){margin-left:0px}';
  css += '.-space-y-0 > :not([hidden]) ~ :not([hidden]){margin-top:0px}';
  

  // Width & Height
  config.spacing.forEach(s => {
    css += `.w-${s}{width:${v(`--spacing-${s}`)}}.h-${s}{height:${v(`--spacing-${s}`)}}`;
  });
  css += '.w-auto{width:auto}.w-full{width:100%}.w-screen{width:100vw}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}';
  
  // Fractional widths & heights
  Object.entries(config.fractions).forEach(([fraction, percentage]) => {
    css += `.w-${fraction.replace('/', '\\/')}{width:${percentage}}.h-${fraction.replace('/', '\\/')}{height:${percentage}}`;
  });
  
  // Min widths
  css += '.min-w-0{min-width:0px}.min-w-full{min-width:100%}.min-w-min{min-width:min-content}.min-w-max{min-width:max-content}.min-w-fit{min-width:fit-content}';
  Object.entries(config.maxWidths).forEach(([size, value]) => {
    css += `.min-w-${size}{min-width:${value}}`;
  });
  
  // Max widths
  css += '.max-w-0{max-width:0rem}.max-w-none{max-width:none}.max-w-full{max-width:100%}.max-w-min{max-width:min-content}.max-w-max{max-width:max-content}.max-w-fit{max-width:fit-content}';
  Object.entries(config.maxWidths).forEach(([size, value]) => {
    css += `.max-w-${size}{max-width:${value}}`;
  });
  
  // Min heights
  css += '.min-h-0{min-height:0px}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.min-h-min{min-height:min-content}.min-h-max{min-height:max-content}.min-h-fit{min-height:fit-content}';
  config.spacing.forEach(s => {
    css += `.min-h-${s}{min-height:${v(`--spacing-${s}`)}}`;
  });
  
  // Max heights
  css += '.max-h-0{max-height:0rem}.max-h-none{max-height:none}.max-h-full{max-height:100%}.max-h-screen{max-height:100vh}.max-h-min{max-height:min-content}.max-h-max{max-height:max-content}.max-h-fit{max-height:fit-content}';
  config.spacing.forEach(s => {
    css += `.max-h-${s}{max-height:${v(`--spacing-${s}`)}}`;
  });

  // Typography
  ['xs','sm','base','lg','xl','2xl','3xl','4xl','5xl','6xl'].forEach(size => {
    if (vars[`--font-size-${size}`]) css += `.text-${size}{font-size:${v(`--font-size-${size}`)}}`;
  });
  ['thin','light','normal','medium','semibold','bold'].forEach(weight => {
    css += `.font-${weight}{font-weight:${v(`--font-weight-${weight}`)}}`;
  });
  css += '.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}';
  css += '.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.capitalize{text-transform:capitalize}';
  ['none','tight','normal','relaxed','loose'].forEach(lh => {
    css += `.leading-${lh}{line-height:${v(`--line-height-${lh}`)}}`;
  });

  // Colors
  ['transparent','black','white'].forEach(name => {
    const color = v(`--color-${name}`);
    css += `.bg-${name}{background-color:${color}}.text-${name}{color:${color}}.border-${name}{border-color:${color}}`;
    css += `.hover\\:bg-${name}:hover{background-color:${color}}.hover\\:text-${name}:hover{color:${color}}`;
    css += `.focus\\:bg-${name}:focus{background-color:${color}}.focus\\:text-${name}:focus{color:${color}}.focus\\:border-${name}:focus{border-color:${color}}`;
  });
  
  config.colors.forEach(color => config.shades.forEach(shade => {
    const val = v(`--color-${color}-${shade}`);
    css += `.bg-${color}-${shade}{background-color:${val}}.text-${color}-${shade}{color:${val}}.border-${color}-${shade}{border-color:${val}}`;
    css += `.hover\\:bg-${color}-${shade}:hover{background-color:${val}}.hover\\:text-${color}-${shade}:hover{color:${val}}`;
    css += `.focus\\:bg-${color}-${shade}:focus{background-color:${val}}.focus\\:text-${color}-${shade}:focus{color:${val}}.focus\\:border-${color}-${shade}:focus{border-color:${val}}`;
  }));

  // Theme colors
  ['primary','secondary','accent','success','warning','error'].forEach(theme => {
    css += `.bg-theme-${theme}{background-color:${v(`--theme-${theme}`)}}`;
    css += `.text-theme-${theme}{color:${v(`--theme-${theme}`)}}`;
    css += `.hover\\:bg-theme-${theme}:hover{background-color:${v(`--theme-${theme}`)}}`;
    css += `.focus\\:bg-theme-${theme}:focus{background-color:${v(`--theme-${theme}`)}}`;
  });
  ['primary','secondary'].forEach(bg => {
    css += `.bg-theme-bg-${bg}{background-color:${v(`--theme-bg-${bg}`)}}`;
    css += `.text-theme-text-${bg}{color:${v(`--theme-text-${bg}`)}}`;    });    // Border Width (with default style and color)
  css += '.border-0{border-width:0px}.border{border-width:1px;border-style:solid;border-color:#e5e7eb}.border-2{border-width:2px;border-style:solid;border-color:#e5e7eb}.border-4{border-width:4px;border-style:solid;border-color:#e5e7eb}.border-8{border-width:8px;border-style:solid;border-color:#e5e7eb}';
  
  // Border Width - Individual Sides (with default style and color)
  [0,1,2,4,8].forEach(w => {
    if (w === 0) {
      css += `.border-t-0{border-top-width:0px}.border-r-0{border-right-width:0px}.border-b-0{border-bottom-width:0px}.border-l-0{border-left-width:0px}`;
      css += `.border-x-0{border-left-width:0px;border-right-width:0px}.border-y-0{border-top-width:0px;border-bottom-width:0px}`;
    } else {
      const width = w === 1 ? '1px' : `${w}px`;
      const suffix = w === 1 ? '' : `-${w}`;
      css += `.border-t${suffix}{border-top-width:${width};border-top-style:solid;border-top-color:#e5e7eb}.border-r${suffix}{border-right-width:${width};border-right-style:solid;border-right-color:#e5e7eb}.border-b${suffix}{border-bottom-width:${width};border-bottom-style:solid;border-bottom-color:#e5e7eb}.border-l${suffix}{border-left-width:${width};border-left-style:solid;border-left-color:#e5e7eb}`;
      css += `.border-x${suffix}{border-left-width:${width};border-right-width:${width};border-left-style:solid;border-right-style:solid;border-left-color:#e5e7eb;border-right-color:#e5e7eb}.border-y${suffix}{border-top-width:${width};border-bottom-width:${width};border-top-style:solid;border-bottom-style:solid;border-top-color:#e5e7eb;border-bottom-color:#e5e7eb}`;
    }
  });
  
  // Border Style
  css += '.border-solid{border-style:solid}.border-dashed{border-style:dashed}.border-dotted{border-style:dotted}.border-double{border-style:double}.border-hidden{border-style:hidden}.border-none{border-style:none}';
    // Colors (simplified generation)
  css += genColors([
    {prefix: 'bg', property: 'background-color'},
    {prefix: 'text', property: 'color'}, 
    {prefix: 'border', property: 'border-color'}
  ]);
  
  // Border Colors - Individual Sides
  ['transparent','black','white'].forEach(name => {
    const color = v(`--color-${name}`);
    css += `.border-t-${name}{border-top-color:${color}}.border-r-${name}{border-right-color:${color}}.border-b-${name}{border-bottom-color:${color}}.border-l-${name}{border-left-color:${color}}`;
    css += `.border-x-${name}{border-left-color:${color};border-right-color:${color}}.border-y-${name}{border-top-color:${color};border-bottom-color:${color}}`;
  });
  config.colors.forEach(color => config.shades.forEach(shade => {
    const val = v(`--color-${color}-${shade}`);
    css += `.border-t-${color}-${shade}{border-top-color:${val}}.border-r-${color}-${shade}{border-right-color:${val}}.border-b-${color}-${shade}{border-bottom-color:${val}}.border-l-${color}-${shade}{border-left-color:${val}}`;
    css += `.border-x-${color}-${shade}{border-left-color:${val};border-right-color:${val}}.border-y-${color}-${shade}{border-top-color:${val};border-bottom-color:${val}}`;
  }));

  // Border Radius
  ['','sm','md','lg','xl','2xl','3xl','full'].forEach(r => {
    const radius = r === '' ? v('--border-radius') : r === '2xl' ? '1rem' : r === '3xl' ? '1.5rem' : v(`--border-radius-${r}`);
    css += `.rounded${r === '' ? '' : `-${r}`}{border-radius:${radius}}`;
  });
  
  // Border Radius - Individual Corners
  ['','sm','md','lg','xl','2xl','3xl','full'].forEach(r => {
    const radius = r === '' ? v('--border-radius') : r === '2xl' ? '1rem' : r === '3xl' ? '1.5rem' : v(`--border-radius-${r}`);
    const suffix = r === '' ? '' : `-${r}`;
    css += `.rounded-t${suffix}{border-top-left-radius:${radius};border-top-right-radius:${radius}}`;
    css += `.rounded-r${suffix}{border-top-right-radius:${radius};border-bottom-right-radius:${radius}}`;
    css += `.rounded-b${suffix}{border-bottom-right-radius:${radius};border-bottom-left-radius:${radius}}`;
    css += `.rounded-l${suffix}{border-top-left-radius:${radius};border-bottom-left-radius:${radius}}`;
    css += `.rounded-tl${suffix}{border-top-left-radius:${radius}}`;
    css += `.rounded-tr${suffix}{border-top-right-radius:${radius}}`;
    css += `.rounded-br${suffix}{border-bottom-right-radius:${radius}}`;
    css += `.rounded-bl${suffix}{border-bottom-left-radius:${radius}}`;
  });
  
  // Outline utilities
  css += '.outline-none{outline:2px solid transparent;outline-offset:2px}';
  css += '.outline{outline:2px solid #3b82f6;outline-offset:2px}';
  css += '.outline-dashed{outline:2px dashed #3b82f6;outline-offset:2px}';
  css += '.outline-dotted{outline:2px dotted #3b82f6;outline-offset:2px}';
  css += '.outline-double{outline:3px double #3b82f6;outline-offset:2px}';
  [0,1,2,4,8].forEach(w => {
    css += `.outline-${w}{outline-width:${w}px}`;
  });
  ['transparent','black','white'].forEach(name => {
    const color = v(`--color-${name}`);
    css += `.outline-${name}{outline-color:${color}}`;
  });
  config.colors.forEach(color => config.shades.forEach(shade => {
    const val = v(`--color-${color}-${shade}`);
    css += `.outline-${color}-${shade}{outline-color:${val}}`;
  }));
  [0,1,2,4,8].forEach(offset => {
    css += `.outline-offset-${offset}{outline-offset:${offset}px}`;
  });
  
  // Divide utilities (borders between elements)
  [0,1,2,4,8].forEach(w => {
    const width = w === 1 ? '1px' : `${w}px`;
    css += `.divide-x-${w === 1 ? '' : w} > :not([hidden]) ~ :not([hidden]){border-left-width:${width}}`;
    css += `.divide-y-${w === 1 ? '' : w} > :not([hidden]) ~ :not([hidden]){border-top-width:${width}}`;
  });
  css += '.divide-solid > :not([hidden]) ~ :not([hidden]){border-style:solid}';
  css += '.divide-dashed > :not([hidden]) ~ :not([hidden]){border-style:dashed}';
  css += '.divide-dotted > :not([hidden]) ~ :not([hidden]){border-style:dotted}';
  css += '.divide-double > :not([hidden]) ~ :not([hidden]){border-style:double}';
  css += '.divide-none > :not([hidden]) ~ :not([hidden]){border-style:none}';
  
  // Divide colors
  ['transparent','black','white'].forEach(name => {
    const color = v(`--color-${name}`);
    css += `.divide-${name} > :not([hidden]) ~ :not([hidden]){border-color:${color}}`;
  });
  config.colors.forEach(color => config.shades.forEach(shade => {
    const val = v(`--color-${color}-${shade}`);
    css += `.divide-${color}-${shade} > :not([hidden]) ~ :not([hidden]){border-color:${val}}`;
  }));

  // Focus ring utilities
  css += '.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}';
  css += '.focus\\:ring-1:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}';
  css += '.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}';
  css += '.focus\\:ring-blue-500:focus{--tw-ring-color:#3b82f6}';

  // Transforms
  css += '.transform{transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}';
  
  // Scale
  [0,50,75,90,95,100,105,110,125,150].forEach(s => {
    const scale = s / 100;
    css += `.scale-${s}{--tw-scale-x:${scale};--tw-scale-y:${scale};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    css += `.scale-x-${s}{--tw-scale-x:${scale};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    css += `.scale-y-${s}{--tw-scale-y:${scale};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    if (s !== 100) {
      css += `.hover\\:scale-${s}:hover{--tw-scale-x:${scale};--tw-scale-y:${scale};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    }
  });
  
  // Rotate
  [0,1,2,3,6,12,45,90,180].forEach(r => {
    css += `.rotate-${r}{--tw-rotate:${r}deg;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    if (r > 0) {
      css += `.-rotate-${r}{--tw-rotate:-${r}deg;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
      css += `.hover\\:rotate-${r}:hover{--tw-rotate:${r}deg;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    }
  });
  
  // Translate
  config.spacing.forEach(s => {
    const val = v(`--spacing-${s}`);
    css += `.translate-x-${s}{--tw-translate-x:${val};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    css += `.translate-y-${s}{--tw-translate-y:${val};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    if (s > 0) {
      css += `.-translate-x-${s}{--tw-translate-x:-${val};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
      css += `.-translate-y-${s}{--tw-translate-y:-${val};transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}`;
    }
  });
  css += '.translate-x-1\\/2{--tw-translate-x:50%;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}';
  css += '.translate-y-1\\/2{--tw-translate-y:50%;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}';
  css += '.-translate-x-1\\/2{--tw-translate-x:-50%;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}';
  css += '.-translate-y-1\\/2{--tw-translate-y:-50%;transform:translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0)) rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))}';
  
  // Z-index
  [0,10,20,30,40,50].forEach(z => css += `.z-${z}{z-index:${z}}`);
  css += '.z-auto{z-index:auto}';

  // Letter spacing (tracking)
  css += '.tracking-tighter{letter-spacing:-0.05em}.tracking-tight{letter-spacing:-0.025em}.tracking-normal{letter-spacing:0em}.tracking-wide{letter-spacing:0.025em}.tracking-wider{letter-spacing:0.05em}.tracking-widest{letter-spacing:0.1em}';
  
  // Text decoration
  css += '.underline{text-decoration-line:underline}.overline{text-decoration-line:overline}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}';
  css += '.decoration-solid{text-decoration-style:solid}.decoration-double{text-decoration-style:double}.decoration-dotted{text-decoration-style:dotted}.decoration-dashed{text-decoration-style:dashed}.decoration-wavy{text-decoration-style:wavy}';
  css += '.decoration-auto{text-decoration-thickness:auto}.decoration-from-font{text-decoration-thickness:from-font}.decoration-0{text-decoration-thickness:0px}.decoration-1{text-decoration-thickness:1px}.decoration-2{text-decoration-thickness:2px}.decoration-4{text-decoration-thickness:4px}.decoration-8{text-decoration-thickness:8px}';
  css += '.underline-offset-auto{text-underline-offset:auto}.underline-offset-0{text-underline-offset:0px}.underline-offset-1{text-underline-offset:1px}.underline-offset-2{text-underline-offset:2px}.underline-offset-4{text-underline-offset:4px}.underline-offset-8{text-underline-offset:8px}';
    // Text decoration colors
  config.colors.forEach(color => config.shades.forEach(shade => {
    const val = v(`--color-${color}-${shade}`);
    css += `.decoration-${color}-${shade}{text-decoration-color:${val}}`;
  }));
  ['transparent','black','white'].forEach(name => {
    const color = v(`--color-${name}`);
    css += `.decoration-${name}{text-decoration-color:${color}}`;
  });

  // Shadows & Effects
  ['','sm','md','lg','xl'].forEach(size => {
    const shadow = size === '' ? v('--shadow') : v(`--shadow-${size}`);
    css += `.shadow${size === '' ? '' : `-${size}`}{box-shadow:${shadow}}`;
  });
  css += '.shadow-none{box-shadow:none}';
  
  [0,25,50,75,100].forEach(o => css += `.opacity-${o}{opacity:${v(`--opacity-${o}`)}}`);

  // Layout
  ['static','relative','absolute','fixed','sticky'].forEach(pos => css += `.${pos}{position:${pos}}`);
  config.spacing.forEach(s => {
    const val = v(`--spacing-${s}`);
    ['top','right','bottom','left'].forEach(dir => css += `.${dir}-${s}{${dir}:${val}}`);
  });

  // Flexbox
  ['row','row-reverse','col','col-reverse'].forEach(dir => css += `.flex-${dir}{flex-direction:${dir.replace('col','column')}}`);
  css += '.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}';
  
  // Flex grow, shrink, basis
  css += '.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-initial{flex:0 1 auto}.flex-none{flex:none}';
  css += '.grow{flex-grow:1}.grow-0{flex-grow:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}';
  css += '.basis-0{flex-basis:0px}.basis-1{flex-basis:0.25rem}.basis-2{flex-basis:0.5rem}.basis-3{flex-basis:0.75rem}.basis-4{flex-basis:1rem}.basis-5{flex-basis:1.25rem}.basis-6{flex-basis:1.5rem}.basis-8{flex-basis:2rem}.basis-10{flex-basis:2.5rem}.basis-11{flex-basis:2.75rem}.basis-12{flex-basis:3rem}.basis-14{flex-basis:3.5rem}.basis-16{flex-basis:4rem}.basis-20{flex-basis:5rem}.basis-24{flex-basis:6rem}.basis-28{flex-basis:7rem}.basis-32{flex-basis:8rem}.basis-36{flex-basis:9rem}.basis-40{flex-basis:10rem}.basis-44{flex-basis:11rem}.basis-48{flex-basis:12rem}.basis-52{flex-basis:13rem}.basis-56{flex-basis:14rem}.basis-60{flex-basis:15rem}.basis-64{flex-basis:16rem}.basis-72{flex-basis:18rem}.basis-80{flex-basis:20rem}.basis-96{flex-basis:24rem}';
  css += '.basis-auto{flex-basis:auto}.basis-px{flex-basis:1px}.basis-0\\.5{flex-basis:0.125rem}.basis-1\\.5{flex-basis:0.375rem}.basis-2\\.5{flex-basis:0.625rem}.basis-3\\.5{flex-basis:0.875rem}';
  css += '.basis-1\\/2{flex-basis:50%}.basis-1\\/3{flex-basis:33.333333%}.basis-2\\/3{flex-basis:66.666667%}.basis-1\\/4{flex-basis:25%}.basis-2\\/4{flex-basis:50%}.basis-3\\/4{flex-basis:75%}.basis-1\\/5{flex-basis:20%}.basis-2\\/5{flex-basis:40%}.basis-3\\/5{flex-basis:60%}.basis-4\\/5{flex-basis:80%}.basis-1\\/6{flex-basis:16.666667%}.basis-2\\/6{flex-basis:33.333333%}.basis-3\\/6{flex-basis:50%}.basis-4\\/6{flex-basis:66.666667%}.basis-5\\/6{flex-basis:83.333333%}.basis-1\\/12{flex-basis:8.333333%}.basis-2\\/12{flex-basis:16.666667%}.basis-3\\/12{flex-basis:25%}.basis-4\\/12{flex-basis:33.333333%}.basis-5\\/12{flex-basis:41.666667%}.basis-6\\/12{flex-basis:50%}.basis-7\\/12{flex-basis:58.333333%}.basis-8\\/12{flex-basis:66.666667%}.basis-9\\/12{flex-basis:75%}.basis-10\\/12{flex-basis:83.333333%}.basis-11\\/12{flex-basis:91.666667%}';
  css += '.basis-full{flex-basis:100%}';
  
  // Justify content
  ['start','center','end','between','around','evenly'].forEach(j => {
    const val = j === 'start' ? 'flex-start' : j === 'end' ? 'flex-end' : j === 'between' ? 'space-between' : j === 'around' ? 'space-around' : j === 'evenly' ? 'space-evenly' : j;
    css += `.justify-${j}{justify-content:${val}}`;
  });
  css += '.justify-normal{justify-content:normal}.justify-stretch{justify-content:stretch}';
  
  // Justify items
  css += '.justify-items-start{justify-items:start}.justify-items-end{justify-items:end}.justify-items-center{justify-items:center}.justify-items-stretch{justify-items:stretch}';
  
  // Justify self
  css += '.justify-self-auto{justify-self:auto}.justify-self-start{justify-self:start}.justify-self-end{justify-self:end}.justify-self-center{justify-self:center}.justify-self-stretch{justify-self:stretch}';
  
  // Align items
  ['start','center','end','baseline','stretch'].forEach(i => {
    const val = i === 'start' ? 'flex-start' : i === 'end' ? 'flex-end' : i;
    css += `.items-${i}{align-items:${val}}`;
  });
  
  // Align content
  css += '.content-normal{align-content:normal}.content-center{align-content:center}.content-start{align-content:flex-start}.content-end{align-content:flex-end}.content-between{align-content:space-between}.content-around{align-content:space-around}.content-evenly{align-content:space-evenly}.content-baseline{align-content:baseline}.content-stretch{align-content:stretch}';
  
  // Align self
  css += '.self-auto{align-self:auto}.self-start{align-self:flex-start}.self-end{align-self:flex-end}.self-center{align-self:center}.self-stretch{align-self:stretch}.self-baseline{align-self:baseline}';
  
  // Place items, content, self
  css += '.place-content-center{place-content:center}.place-content-start{place-content:start}.place-content-end{place-content:end}.place-content-between{place-content:space-between}.place-content-around{place-content:space-around}.place-content-evenly{place-content:space-evenly}.place-content-baseline{place-content:baseline}.place-content-stretch{place-content:stretch}';
  css += '.place-items-start{place-items:start}.place-items-end{place-items:end}.place-items-center{place-items:center}.place-items-baseline{place-items:baseline}.place-items-stretch{place-items:stretch}';
  css += '.place-self-auto{place-self:auto}.place-self-start{place-self:start}.place-self-end{place-self:end}.place-self-center{place-self:center}.place-self-stretch{place-self:stretch}';

  // Grid
  [1,2,3,4,5,6,7,8,9,10,11,12].forEach(n => css += `.grid-cols-${n}{grid-template-columns:repeat(${n},minmax(0,1fr))}`);
  css += '.grid-cols-none{grid-template-columns:none}.grid-cols-subgrid{grid-template-columns:subgrid}';
  
  // Grid rows
  [1,2,3,4,5,6].forEach(n => css += `.grid-rows-${n}{grid-template-rows:repeat(${n},minmax(0,1fr))}`);
  css += '.grid-rows-none{grid-template-rows:none}.grid-rows-subgrid{grid-template-rows:subgrid}';
  
  // Grid column span
  [1,2,3,4,5,6,7,8,9,10,11,12].forEach(n => css += `.col-span-${n}{grid-column:span ${n} / span ${n}}`);
  css += '.col-auto{grid-column:auto}.col-span-full{grid-column:1 / -1}';
  
  // Grid column start/end
  [1,2,3,4,5,6,7,8,9,10,11,12,13].forEach(n => css += `.col-start-${n}{grid-column-start:${n}}.col-end-${n}{grid-column-end:${n}}`);
  css += '.col-start-auto{grid-column-start:auto}.col-end-auto{grid-column-end:auto}';
  
  // Grid row span
  [1,2,3,4,5,6].forEach(n => css += `.row-span-${n}{grid-row:span ${n} / span ${n}}`);
  css += '.row-auto{grid-row:auto}.row-span-full{grid-row:1 / -1}';
  
  // Grid row start/end
  [1,2,3,4,5,6,7].forEach(n => css += `.row-start-${n}{grid-row-start:${n}}.row-end-${n}{grid-row-end:${n}}`);
  css += '.row-start-auto{grid-row-start:auto}.row-end-auto{grid-row-end:auto}';
  
  // Grid auto flow
  css += '.grid-flow-row{grid-auto-flow:row}.grid-flow-col{grid-auto-flow:column}.grid-flow-dense{grid-auto-flow:dense}.grid-flow-row-dense{grid-auto-flow:row dense}.grid-flow-col-dense{grid-auto-flow:column dense}';
  
  // Grid auto columns
  css += '.auto-cols-auto{grid-auto-columns:auto}.auto-cols-min{grid-auto-columns:min-content}.auto-cols-max{grid-auto-columns:max-content}.auto-cols-fr{grid-auto-columns:minmax(0,1fr)}';
  
  // Grid auto rows
  css += '.auto-rows-auto{grid-auto-rows:auto}.auto-rows-min{grid-auto-rows:min-content}.auto-rows-max{grid-auto-rows:max-content}.auto-rows-fr{grid-auto-rows:minmax(0,1fr)}';
  
  // Gap
  config.spacing.forEach(g => css += `.gap-${g}{gap:${v(`--spacing-${g}`)}}.gap-x-${g}{column-gap:${v(`--spacing-${g}`)}}.gap-y-${g}{row-gap:${v(`--spacing-${g}`)}}`);
  css += '.gap-px{gap:1px}.gap-x-px{column-gap:1px}.gap-y-px{row-gap:1px}';

  // Interactions
  ['auto','default','pointer','text','not-allowed'].forEach(c => css += `.cursor-${c}{cursor:${c}}`);
  ['auto','hidden','visible','scroll'].forEach(o => css += `.overflow-${o}{overflow:${o}}`);
  css += `.transition{transition:${v('--transition')}}`;

  // Responsive variants
  config.breakpoints.forEach(bp => {
    css += `@media(min-width:${v(`--breakpoint-${bp}`)}){`;
    ['block','flex','grid','hidden'].forEach(d => css += `.${bp}\\:${d}{display:${d === 'hidden' ? 'none' : d}}`);
    
    // Responsive grid
    [1,2,3,4,5,6,7,8,9,10,11,12].forEach(n => css += `.${bp}\\:grid-cols-${n}{grid-template-columns:repeat(${n},minmax(0,1fr))}`);
    [1,2,3,4,5,6].forEach(n => css += `.${bp}\\:grid-rows-${n}{grid-template-rows:repeat(${n},minmax(0,1fr))}`);
    [1,2,3,4,5,6,7,8,9,10,11,12].forEach(n => css += `.${bp}\\:col-span-${n}{grid-column:span ${n} / span ${n}}`);
    [1,2,3,4,5,6].forEach(n => css += `.${bp}\\:row-span-${n}{grid-row:span ${n} / span ${n}}`);
    css += `.${bp}\\:col-auto{grid-column:auto}.${bp}\\:row-auto{grid-row:auto}`;
    
    // Responsive flex
    ['row','row-reverse','col','col-reverse'].forEach(dir => css += `.${bp}\\:flex-${dir}{flex-direction:${dir.replace('col','column')}}`);
    css += `.${bp}\\:flex-wrap{flex-wrap:wrap}.${bp}\\:flex-nowrap{flex-wrap:nowrap}`;
    css += `.${bp}\\:flex-1{flex:1 1 0%}.${bp}\\:flex-auto{flex:1 1 auto}.${bp}\\:flex-initial{flex:0 1 auto}.${bp}\\:flex-none{flex:none}`;
    css += `.${bp}\\:grow{flex-grow:1}.${bp}\\:grow-0{flex-grow:0}.${bp}\\:shrink{flex-shrink:1}.${bp}\\:shrink-0{flex-shrink:0}`;
    
    // Responsive justify/align
    ['start','center','end','between','around','evenly'].forEach(j => {
      const val = j === 'start' ? 'flex-start' : j === 'end' ? 'flex-end' : j === 'between' ? 'space-between' : j === 'around' ? 'space-around' : j === 'evenly' ? 'space-evenly' : j;
      css += `.${bp}\\:justify-${j}{justify-content:${val}}`;
    });
    ['start','center','end','baseline','stretch'].forEach(i => {
      const val = i === 'start' ? 'flex-start' : i === 'end' ? 'flex-end' : i;
      css += `.${bp}\\:items-${i}{align-items:${val}}`;
    });
    css += `.${bp}\\:self-auto{align-self:auto}.${bp}\\:self-start{align-self:flex-start}.${bp}\\:self-end{align-self:flex-end}.${bp}\\:self-center{align-self:center}.${bp}\\:self-stretch{align-self:stretch}`;
    css += `.${bp}\\:justify-self-auto{justify-self:auto}.${bp}\\:justify-self-start{justify-self:start}.${bp}\\:justify-self-center{justify-self:center}`;
    css += `.${bp}\\:place-items-center{place-items:center}.${bp}\\:place-content-center{place-content:center}`;
      // Responsive spacing
    config.spacing.forEach(s => {
      const sKey = s.toString().replace('.', '\\.');
      const val = v(`--spacing-${sKey}`);
      css += `.${bp}\\:m-${sKey}{margin:${val}}.${bp}\\:p-${sKey}{padding:${val}}`;
      css += `.${bp}\\:w-${sKey}{width:${val}}.${bp}\\:h-${sKey}{height:${val}}`;
      css += `.${bp}\\:min-h-${sKey}{min-height:${val}}.${bp}\\:max-h-${sKey}{max-height:${val}}`;
      css += `.${bp}\\:gap-${sKey}{gap:${val}}.${bp}\\:gap-x-${sKey}{column-gap:${val}}.${bp}\\:gap-y-${sKey}{row-gap:${val}}`;
      if (s > 0) css += `.${bp}\\:-m-${sKey}{margin:-${val}}`;
      
      // Responsive directional spacing
      ['x','y','t','r','b','l'].forEach(dir => {
        const props = dir === 'x' ? ['left','right'] : dir === 'y' ? ['top','bottom'] : [dir === 't' ? 'top' : dir === 'r' ? 'right' : dir === 'b' ? 'bottom' : 'left'];
        css += `.${bp}\\:m${dir}-${sKey}{${props.map(p => `margin-${p}:${val}`).join(';')}}.${bp}\\:p${dir}-${sKey}{${props.map(p => `padding-${p}:${val}`).join(';')}}`;
        if (s > 0) css += `.${bp}\\:-m${dir}-${sKey}{${props.map(p => `margin-${p}:-${val}`).join(';')}}`;
      });
      
      // Responsive space between
      css += `.${bp}\\:space-x-${sKey} > :not([hidden]) ~ :not([hidden]){margin-left:${val}}`;
      css += `.${bp}\\:space-y-${sKey} > :not([hidden]) ~ :not([hidden]){margin-top:${val}}`;
      if (s > 0) {
        css += `.${bp}\\:-space-x-${sKey} > :not([hidden]) ~ :not([hidden]){margin-left:-${val}}`;
        css += `.${bp}\\:-space-y-${sKey} > :not([hidden]) ~ :not([hidden]){margin-top:-${val}}`;
      }
    });
    
    // Responsive auto margins and pixel values
    css += `.${bp}\\:m-auto{margin:auto}.${bp}\\:m-px{margin:1px}.${bp}\\:-m-px{margin:-1px}`;
    ['x','y','t','r','b','l'].forEach(dir => {
      const props = dir === 'x' ? ['left','right'] : dir === 'y' ? ['top','bottom'] : [dir === 't' ? 'top' : dir === 'r' ? 'right' : dir === 'b' ? 'bottom' : 'left'];
      css += `.${bp}\\:m${dir}-auto{${props.map(p => `margin-${p}:auto`).join(';')}}`;
      css += `.${bp}\\:m${dir}-px{${props.map(p => `margin-${p}:1px`).join(';')}}.${bp}\\:p${dir}-px{${props.map(p => `padding-${p}:1px`).join(';')}}`;
      css += `.${bp}\\:-m${dir}-px{${props.map(p => `margin-${p}:-1px`).join(';')}}`;
    });
    css += `.${bp}\\:w-auto{width:auto}.${bp}\\:w-full{width:100%}.${bp}\\:w-screen{width:100vw}`;
    css += `.${bp}\\:h-auto{height:auto}.${bp}\\:h-full{height:100%}.${bp}\\:h-screen{height:100vh}`;
    css += `.${bp}\\:min-w-0{min-width:0px}.${bp}\\:min-w-full{min-width:100%}.${bp}\\:max-w-none{max-width:none}.${bp}\\:max-w-full{max-width:100%}`;
    css += `.${bp}\\:min-h-0{min-height:0px}.${bp}\\:min-h-full{min-height:100%}.${bp}\\:min-h-screen{min-height:100vh}`;
    css += `.${bp}\\:max-h-full{max-height:100%}.${bp}\\:max-h-screen{max-height:100vh}`;
    
    // Responsive fractional widths
    Object.entries(config.fractions).forEach(([fraction, percentage]) => {
      css += `.${bp}\\:w-${fraction.replace('/', '\\/')}{width:${percentage}}.${bp}\\:h-${fraction.replace('/', '\\/')}{height:${percentage}}`;
    });
    
    // Responsive max widths
    Object.entries(config.maxWidths).forEach(([size, value]) => {
      css += `.${bp}\\:max-w-${size}{max-width:${value}}`;
    });
    
    ['xs','sm','base','lg','xl','2xl','3xl','4xl','5xl','6xl'].forEach(size => {
      if (vars[`--font-size-${size}`]) css += `.${bp}\\:text-${size}{font-size:${v(`--font-size-${size}`)}}`;
    });
    ['left','center','right'].forEach(align => css += `.${bp}\\:text-${align}{text-align:${align}}`);
    css += '}';
  });

  return css;
}

// Helper function for directional CSS generation
const genDirectional = (dirs, prefix, property, value, suffix = '') => {
  let css = '';
  dirs.forEach(dir => {
    const props = dir === 'x' ? ['left','right'] : dir === 'y' ? ['top','bottom'] : [dir === 't' ? 'top' : dir === 'r' ? 'right' : dir === 'b' ? 'bottom' : 'left'];
    css += `.${prefix}${dir}${suffix}{${props.map(p => `${property}-${p}:${value}`).join(';')}}`;
  });
  return css;
};

// Helper function for spacing utilities
const genSpacing = (spacings, prefix, property) => {
  let css = '';
  spacings.forEach(s => {
    const sKey = s.toString().replace('.', '\\.');
    const val = v(`--spacing-${sKey}`);
    css += `.${prefix}-${sKey}{${property}:${val}}`;
    if (s > 0 && prefix.startsWith('m')) css += `.-${prefix}-${sKey}{${property}:-${val}}`;
    
    // Directional
    css += genDirectional(['x','y','t','r','b','l'], prefix, property, val, `-${sKey}`);
    if (s > 0 && prefix.startsWith('m')) {
      css += genDirectional(['x','y','t','r','b','l'], `-${prefix}`, property, `-${val}`, `-${sKey}`);
    }
  });
  return css;
};

// Helper function for color utilities
const genColors = (prefixes) => {
  let css = '';
  prefixes.forEach(({prefix, property}) => {
    css += `.${prefix}-transparent{${property}:transparent}.${prefix}-black{${property}:#000000}.${prefix}-white{${property}:#ffffff}`;
    config.colors.forEach(color => {
      config.shades.forEach(shade => {
        css += `.${prefix}-${color}-${shade}{${property}:${v(`--color-${color}-${shade}`)}}`;
        css += `.focus\\:${prefix}-${color}-${shade}:focus{${property}:${v(`--color-${color}-${shade}`)}}`;
      });
    });
  });
  return css;
};

// Component expansion system
function expandComponentClasses() {
  if (!window.pluginComponents) return;
  
  // Find all elements with component classes
  document.querySelectorAll('*').forEach(element => {
    if (!element.className) return;
    
    const classes = element.className.split(' ');
    let hasComponents = false;
    let expandedClasses = [];
    
    classes.forEach(cls => {
      if (window.pluginComponents[cls]) {
        // Replace component class with its utility classes
        expandedClasses.push(...window.pluginComponents[cls].split(' '));
        hasComponents = true;
      } else {
        expandedClasses.push(cls);
      }
    });
    
    if (hasComponents) {
      element.className = expandedClasses.join(' ');
    }
  });
}

// Dynamic Variable System
function setupDynamicVariables() {
  if (typeof MutationObserver === 'undefined') return;
    const observer = new MutationObserver((mutations) => {
    let newClasses = [];
    let needsComponentExpansion = false;
    
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        newClasses.push(...getVariableClasses(mutation.target.className));
        
        // Check if element has component classes
        if (window.pluginComponents) {
          const classes = mutation.target.className.split(' ');
          if (classes.some(cls => window.pluginComponents[cls])) {
            needsComponentExpansion = true;
          }
        }
      }
      
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          [node, ...node.querySelectorAll('*')].forEach(el => {
            if (el.className) {
              newClasses.push(...getVariableClasses(el.className));
              
              // Check if element has component classes
              if (window.pluginComponents) {
                const classes = el.className.split(' ');
                if (classes.some(cls => window.pluginComponents[cls])) {
                  needsComponentExpansion = true;
                }
              }
            }
          });
        }
      });
    });
    
    if (needsComponentExpansion) {
      expandComponentClasses();
    }
    
    if (newClasses.length > 0) {
      injectVariableCSS([...new Set(newClasses)]);
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class']
  });
}

function getVariableClasses(className) {
  return className.split(' ').filter(cls => {
    return /^(bg|text|border)-[a-zA-Z][\w-]*$/.test(cls) && !isKnownClass(cls);
  });
}

function isKnownClass(className) {
  const knownPatterns = [
    /^(bg|text|border)-(gray|red|blue|green|yellow|purple|indigo|pink|orange|teal|cyan)(-\d+)?$/,
    /^(bg|text|border)-(white|black|transparent)$/,
    /^(bg|text)-theme-/
  ];
  return knownPatterns.some(pattern => pattern.test(className));
}

function injectVariableCSS(classNames) {
  let css = '';
  
  classNames.forEach(className => {
    const match = className.match(/^(bg|text|border)-(.+)$/);
    if (match) {
      const [, property, variableName] = match;
      const cssVar = `var(--${variableName})`;
      
      switch (property) {
        case 'bg':
          css += `.${className}{background-color:${cssVar}}.hover\\:${className}:hover{background-color:${cssVar}}`;
          break;
        case 'text':
          css += `.${className}{color:${cssVar}}.hover\\:${className}:hover{color:${cssVar}}`;
          break;
        case 'border':
          css += `.${className}{border-color:${cssVar}}`;
          break;
      }
    }
  });
  
  if (css) {
    const style = document.createElement('style');
    style.setAttribute('data-mini-tailwind-variables', '');
    style.textContent = css;
    document.head.appendChild(style);
  }
}

// Initialize
function init() {
  const root = document.documentElement;
  Object.entries(vars).forEach(([name, val]) => {
    if (!getComputedStyle(root).getPropertyValue(name)) {
      root.style.setProperty(name, val);
    }
  });
}

function inject(css) {
  const style = document.createElement('style');
  style.setAttribute('data-mini-tailwind', '');
  style.textContent = css;
  document.head.appendChild(style);
}
function reinitialize() {
  document.querySelectorAll('[data-mini-tailwind], [data-mini-tailwind-variables]').forEach(el => el.remove());
  expandComponentClasses();
  init();
  inject(generateCSS() + generatePluginCSS());
}
function initMiniTailwind() {
  init();
  inject(generateCSS() + generatePluginCSS());
  expandComponentClasses();
  setupDynamicVariables();
  
  return {
    setTheme,
    getTheme,
    removeTheme,
    setCustomTheme,
    addPlugin,
    reinit: reinitialize
  };
}

// Auto-initialize when loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMiniTailwind);
} else {
  initMiniTailwind();
}

// ES6 Exports
export { addPlugin, setTheme, getTheme, removeTheme, setCustomTheme, reinitialize as reinit };
