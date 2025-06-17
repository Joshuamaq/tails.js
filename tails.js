import pluginColors from "./plugins/plugin-colors.js";
import pluginLayout from "./plugins/plugin-layout.js";
import pluginSpacing from "./plugins/plugin-spacing.js";
import pluginSizing from "./plugins/plugin-sizing.js";
import pluginTypography from "./plugins/plugin-typography.js";
import pluginBorders from "./plugins/plugin-borders.js";
import pluginTransforms from "./plugins/plugin-transforms.js";
import pluginEffects from "./plugins/plugin-effects.js";
import pluginFlexbox from "./plugins/plugin-flexbox.js";
import pluginGrid from "./plugins/plugin-grid.js";

// URL Parameter Plugin Toggle System
function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    // Get enabled plugins (default: all enabled)
    plugins: params.get('plugins')?.split(',') || null,
    // Get disabled plugins 
    disable: params.get('disable')?.split(',') || [],
    // Debug mode
    debug: params.has('debug')
  };
}

function shouldLoadPlugin(pluginName, urlParams) {
  // If specific plugins are requested, only load those
  if (urlParams.plugins) {
    return urlParams.plugins.includes(pluginName);
  }
  // Otherwise load all except disabled ones
  return !urlParams.disable.includes(pluginName);
}

// Get URL configuration
const urlConfig = getURLParams();

// Conditional plugin loading based on URL parameters
const availablePlugins = {
  colors: pluginColors,
  layout: pluginLayout, 
  spacing: pluginSpacing,
  sizing: pluginSizing,
  typography: pluginTypography,
  borders: pluginBorders,
  transforms: pluginTransforms,
  effects: pluginEffects,
  flexbox: pluginFlexbox,
  grid: pluginGrid
};

// TailsJS - ES6 Module  
const plugins = [];

// Load plugins based on URL parameters
Object.entries(availablePlugins).forEach(([name, plugin]) => {
  if (shouldLoadPlugin(name, urlConfig)) {
    plugins.push(plugin);
    if (urlConfig.debug) {
    }
  } else if (urlConfig.debug) {
  }
});

if (urlConfig.debug) {
}

// Plugin system - Unified and consolidated
// Unified plugin registry
window.pluginRegistry = {
  variables: {},
  utilities: {},
  components: {},
  atRules: {},
  nestedRules: {},
  utilityTemplates: {},
  scopedVariables: {}
};

// CSS property name conversion utilities
function toCSSPropertyName(prop) {
  // Convert camelCase to kebab-case for CSS compatibility
  return prop.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
}

// Enhanced style normalization for maximum CSS compatibility
function normalizeStyles(styles) {
  if (typeof styles === 'string') return styles;
  if (Array.isArray(styles)) {
    // Support CSS fallback arrays: ['display', '-webkit-box', '-moz-box', 'flex']
    return styles.join(';');
  }
  if (typeof styles === 'object') {
    return Object.entries(styles)
      .map(([prop, val]) => {
        // Handle CSS property names (both camelCase and kebab-case)
        const cssProperty = prop.startsWith('--') ? prop : toCSSPropertyName(prop);
        
        // Handle CSS values
        if (Array.isArray(val)) {
          // CSS fallback values: { display: ['-webkit-box', '-moz-box', 'flex'] }
          return val.map(v => `${cssProperty}:${processStyleValue(v)}`).join(';');
        } else {
          return `${cssProperty}:${processStyleValue(val)}`;
        }
      })
      .join(';');
  }
  return '';
}

// Enhanced style value processing for CSS compatibility
function processStyleValue(value) {
  if (typeof value !== 'string') return value;
  
  // Replace $variableName with var(--variableName) - our sugar syntax
  return value.replace(/\$([a-zA-Z0-9-_]+)/g, (match, varName) => {
    // First try to find the variable as-is
    if (window.pluginRegistry.variables && window.pluginRegistry.variables[varName]) {
      return `var(--${varName})`;
    }
    
    // Try kebab-case conversion for camelCase variable names
    const kebabVarName = toCSSPropertyName(varName);
    if (window.pluginRegistry.variables && window.pluginRegistry.variables[kebabVarName]) {
      return `var(--${kebabVarName})`;
    }
    
    // If variable not found in registry, assume it's kebab-case and use it
    return `var(--${kebabVarName})`;
  });
}

// Enhanced CSS object processing with nested selector support
// Add debug logs to inspect complex selector processing
// Enhanced debug logs to include all selector types
function processStylesObject(styles) {
  const processed = {};

  Object.entries(styles).forEach(([property, value]) => {
    if (property.startsWith('&') || property.startsWith('@') || property.includes(' ') || property.startsWith('+') || property.startsWith('~') || property.startsWith('>') || property.includes(',')) {
      processed[property] = processNestedStyles(value);
    } else {
      if (typeof value === 'string' && value.includes('$')) {
        processed[property] = processStyleValue(value);
      } else {
        processed[property] = value;
      }
    }
  });

  return processed;
}

// Process nested styles (for selectors and at-rules)
function processNestedStyles(styles) {
  if (typeof styles === 'object') {
    return processStylesObject(styles);
  }
  return processStyleValue(styles);
}

function addPlugin(plugin) {
  // Handle function plugins that return objects
  if (typeof plugin === 'function') {
    plugin = plugin();
  }
    if (!plugin || typeof plugin !== 'object') {
    return;
  }
  
  try {
    plugins.push(plugin);
    
    // Process the new unified syntax
    Object.entries(plugin).forEach(([key, value]) => {      if (key.startsWith('$')) {
        // Variables: $variableName
        const rawVarName = key.slice(1); // Remove $
        const varName = toCSSPropertyName(rawVarName); // Convert camelCase to kebab-case
        if (!window.pluginRegistry.variables) window.pluginRegistry.variables = {};
        window.pluginRegistry.variables[varName] = value;
        
        // Inject variable immediately as CSS custom property
        const root = document.documentElement;
        const cssVar = `--${varName}`;
        if (!getComputedStyle(root).getPropertyValue(cssVar)) {
          root.style.setProperty(cssVar, value);
        }
        
        // Handle selector-scoped variables
        if (typeof value === 'object' && !Array.isArray(value)) {
          if (!window.pluginRegistry.scopedVariables) window.pluginRegistry.scopedVariables = {};
          window.pluginRegistry.scopedVariables[key] = value;
        }
      } else if (key.startsWith('.')) {
        // CSS Classes: .classname or .classname-$param
        processNewStyleDefinition(key, value);
      } else if (key.startsWith('@')) {        // At-rules: @media, @keyframes, etc.
        processNewAtRule(key, value);
      } else if (key.startsWith('[')) {
        // Attribute selectors: [data-theme='dark']
        processNewScopedVariables(key, value);
      }    });
    
    // Re-initialize if framework is active
    if (document.querySelector('[data-mini-tailwind]')) {
      reinitialize();
    }
  } catch (error) {
    // Silent error handling
  }
}

// New processing functions for unified syntax
// Enhanced plugin processing for maximum CSS compatibility
function processNewStyleDefinition(selector, definition) {
  const className = selector.slice(1); // Remove leading dot

  if (Array.isArray(definition)) {
    // Array syntax for utility class combinations
    const combinedClasses = definition.join(' ');    window.pluginRegistry.components[className] = combinedClasses;} else if (typeof definition === 'function') {
    // Parametric utility/component: .btn-$variant
    if (!window.pluginRegistry.utilityTemplates) window.pluginRegistry.utilityTemplates = {};
    window.pluginRegistry.utilityTemplates[selector] = {
      template: className,
      styles: definition,
    };
  } else if (typeof definition === 'object' && definition !== null) {
    // CSS object definition - full CSS compatibility
    const processedStyles = processStylesObject(definition);
    
    // Separate main styles from nested selectors
    const mainStyles = {};
    const nestedRules = {};
    
    Object.entries(processedStyles).forEach(([prop, val]) => {
      if (prop.startsWith('&') || prop.startsWith('@') || 
          prop.includes(' ') || prop.startsWith('+') || 
          prop.startsWith('~') || prop.startsWith('>') || 
          prop.includes(',')) {
        // This is a nested selector or at-rule
        nestedRules[prop] = val;
      } else {
        // Regular CSS property
        mainStyles[prop] = val;
      }
    });
    
    // Store main styles as utility
    if (Object.keys(mainStyles).length > 0) {
      window.pluginRegistry.utilities[className] = normalizeStyles(mainStyles);
    }
    
    // Store nested rules for CSS generation
    if (Object.keys(nestedRules).length > 0) {
      if (!window.pluginRegistry.nestedRules) window.pluginRegistry.nestedRules = {};
      window.pluginRegistry.nestedRules[className] = nestedRules;
    }
  } else {    // String-based component definition
    const processedClasses = processStyleValue(definition);
    window.pluginRegistry.components[className] = processedClasses;
  }
}

function processNewAtRule(atRule, content) {
  if (!window.pluginRegistry.atRules) window.pluginRegistry.atRules = {};
  
  if (typeof content === 'function') {
    // Parametric at-rule: @keyframes slideIn-$direction
    if (!window.pluginRegistry.atRuleTemplates) window.pluginRegistry.atRuleTemplates = {};
    window.pluginRegistry.atRuleTemplates[atRule] = content;
  } else if (typeof content === 'object') {
    // Process nested styles in at-rules
    const processedContent = {};
    Object.entries(content).forEach(([key, value]) => {
      if (key.startsWith('.')) {
        // Nested class definition
        const className = key.slice(1);
        if (typeof value === 'function') {
          // Parametric nested class
          processedContent[key] = value;
        } else {
          const processedStyles = processStylesObject(value);
          processedContent[className] = normalizeStyles(processedStyles);
        }
      } else {
        processedContent[key] = value;
      }
    });
    window.pluginRegistry.atRules[atRule] = processedContent;
  } else {
    window.pluginRegistry.atRules[atRule] = content;
  }
}

function processNewScopedVariables(selector, variables) {
  if (!window.pluginRegistry.scopedVariables) window.pluginRegistry.scopedVariables = {};
  window.pluginRegistry.scopedVariables[selector] = variables;
  
  // Also register each nested variable for resolution
  if (typeof variables === 'object') {
    Object.entries(variables).forEach(([varName, varValue]) => {
      if (!window.pluginRegistry.scopedVariableMap) window.pluginRegistry.scopedVariableMap = {};
      window.pluginRegistry.scopedVariableMap[varName] = {
        selector: selector,
        value: varValue
      };
    });
  }
}

// CSS Generation
// Component expansion system
function expandComponentClasses() {
  // Find all elements with component classes
  document.querySelectorAll('*').forEach(element => {
    if (!element.className) return;
    
    const classes = element.className.split(' ');
    let hasComponents = false;
    let expandedClasses = [];
    
    classes.forEach(cls => {
      if (window.pluginRegistry.components && window.pluginRegistry.components[cls]) {
        // Replace component class with its utility classes
        expandedClasses.push(...window.pluginRegistry.components[cls].split(' '));
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
  if (typeof MutationObserver === 'undefined') return;  const observer = new MutationObserver((mutations) => {
    let newClasses = [];
    let newParametricClasses = [];
    let newParametricComponents = [];
    let needsComponentExpansion = false;    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        newClasses.push(...getVariableClasses(mutation.target.className));
        newParametricClasses.push(...getParametricClasses(mutation.target.className));
        newParametricComponents.push(...getParametricComponents(mutation.target.className));
          // Check if element has component classes
        if (window.pluginRegistry.components) {
          const classes = mutation.target.className.split(' ');
          if (classes.some(cls => window.pluginRegistry.components[cls])) {
            needsComponentExpansion = true;
          }
        }
      }
      
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          [node, ...node.querySelectorAll('*')].forEach(el => {
            if (el.className) {
              newClasses.push(...getVariableClasses(el.className));
              newParametricClasses.push(...getParametricClasses(el.className));
              newParametricComponents.push(...getParametricComponents(el.className));
                // Check if element has component classes
              if (window.pluginRegistry.components) {
                const classes = el.className.split(' ');
                if (classes.some(cls => window.pluginRegistry.components[cls])) {
                  needsComponentExpansion = true;
                }
              }
            }
          });
        }
      });
    });
    
    // Generate parametric components first, as they may add new component classes
    if (newParametricComponents.length > 0) {
      const uniqueComponents = [...new Set(newParametricComponents)];
      uniqueComponents.forEach(componentName => {
        if (generateParametricComponent(componentName)) {
          needsComponentExpansion = true;
        }
      });
    }
    
    if (needsComponentExpansion) {
      expandComponentClasses();
    }
    
    if (newClasses.length > 0) {
      injectVariableCSS([...new Set(newClasses)]);
    }
    
    if (newParametricClasses.length > 0) {
      injectParametricCSS([...new Set(newParametricClasses)]);
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

function injectParametricCSS(classNames) {
  let css = '';
  
  classNames.forEach(className => {
    css += generateParametricCSS(className);
  });
  
  if (css) {
    const style = document.createElement('style');
    style.setAttribute('data-mini-tailwind-parametric', '');
    style.textContent = css;
    document.head.appendChild(style);
  }
}

// Initialize
function init() {
  // Inject plugin variables as CSS custom properties
  const root = document.documentElement;
  if (window.pluginRegistry.variables) {
    Object.entries(window.pluginRegistry.variables).forEach(([name, val]) => {
      const cssVar = `--${name}`;
      if (!getComputedStyle(root).getPropertyValue(cssVar)) {
        root.style.setProperty(cssVar, val);
      }
    });
  }
}

function inject(css) {
  const style = document.createElement('style');
  style.setAttribute('data-mini-tailwind', '');
  style.textContent = css;
  document.head.appendChild(style);
}
function reinitialize() {  document.querySelectorAll('[data-mini-tailwind], [data-mini-tailwind-variables], [data-mini-tailwind-parametric]').forEach(el => el.remove());
  expandComponentClasses();
  init();
  inject(generatePluginCSS());
}
function initMiniTailwind() {
  init();
  inject(generatePluginCSS());
  expandComponentClasses();
  setupDynamicVariables();
    return {
    addPlugin,
    reinit: reinitialize,
    scanExistingClasses: scanExistingParametricClasses
  };
}

// Separate function to scan existing classes after plugins are loaded
function scanExistingParametricClasses() {
  const allElements = document.querySelectorAll('*[class]');
  let foundParametricClasses = [];
  
  allElements.forEach(el => {
    if (el.className) {
      const parametricClasses = getParametricClasses(el.className);
      if (parametricClasses.length > 0) {
        foundParametricClasses.push(...parametricClasses);
      }
    }
  });
  
  // Generate CSS for any found parametric classes
  if (foundParametricClasses.length > 0) {
    const uniqueClasses = [...new Set(foundParametricClasses)];
    injectParametricCSS(uniqueClasses);
  }
}

// Auto-initialize when loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMiniTailwind);
} else {  initMiniTailwind();
}

// Parametric utilities - detection and generation
function getParametricClasses(className) {
  if (!window.pluginRegistry.utilityTemplates) {
    return [];
  }
  
  return className.split(' ').filter(cls => {
    // Check if this class matches any parametric utility template
    const matches = Object.keys(window.pluginRegistry.utilityTemplates).some(templateKey => {
      // Handle both $local- and $parameter patterns
      // Use a more permissive regex that captures everything after the prefix
      const pattern = templateKey.replace(/\$[^-\s]+/g, '(.+)');
      const regex = new RegExp(`^${pattern.slice(1)}$`); // Remove leading dot
      const isMatch = regex.test(cls);
      
      return isMatch;
    });
    return matches;
  });
}

function generateParametricCSS(className) {
  if (!window.pluginRegistry.utilityTemplates) return '';
  
  let css = '';    // Check function-based templates
  Object.entries(window.pluginRegistry.utilityTemplates).forEach(([templateKey, template]) => {
    const generatorFunction = template.generator || template.styles; // Support both old and new syntax
    
    if (generatorFunction && typeof generatorFunction === 'function') {
      // Handle syntax like: .bg-$color
      // Use a more permissive regex that captures everything after the prefix
      const pattern = templateKey.replace(/\$[^-\s]+/g, '(.+)');
      const regex = new RegExp(`^${pattern.slice(1)}$`); // Remove leading dot
      const match = className.match(regex);
      
      if (match) {
        // Extract parameter values
        const params = match.slice(1);
          // Resolve parameters to actual values (check if they're variables)
        const resolvedParams = params.map(param => {
          
          // First, check if parameter matches a plugin variable directly
          if (window.pluginRegistry.variables && window.pluginRegistry.variables[param]) {
            return window.pluginRegistry.variables[param];
          }
          
          // Try kebab-case conversion for camelCase parameter names
          const kebabParam = toCSSPropertyName(param);
          if (window.pluginRegistry.variables && window.pluginRegistry.variables[kebabParam]) {
            return `var(--${kebabParam})`;
          }
          
          // Check for color variables with color- prefix (e.g., red-500 -> color-red-500)
          if (window.pluginRegistry.variables && window.pluginRegistry.variables[`color-${param}`]) {
            return `var(--color-${param})`;
          }
          
          // Check for theme variables (e.g., primary -> theme-primary)
          if (['primary', 'secondary', 'accent', 'success', 'warning', 'error'].includes(param)) {
            return `var(--theme-${param})`;
          }
          
          // Check scoped variables
          if (window.pluginRegistry.scopedVariableMap && window.pluginRegistry.scopedVariableMap[param]) {
            return `var(--${param})`;
          }
          
          // Check for any variable that ends with the parameter (for color lookups)
          if (window.pluginRegistry.variables) {
            const matchingVar = Object.keys(window.pluginRegistry.variables).find(varName => 
              varName.endsWith(`-${param}`) || varName === param
            );
            if (matchingVar) {
              return `var(--${matchingVar})`;
            }
          }
          
          // Return literal value
          return param;
        });
        
        try {
          // Call the generator function with resolved parameters
          const result = resolvedParams.length === 1 
            ? generatorFunction(resolvedParams[0])
            : generatorFunction(...resolvedParams);            if (Array.isArray(result)) {
              // Handle hybrid syntax: [utilityClasses, customStyles]
              const [utilities, customStyles] = result;
              let combinedStyles = '';
              
              // Process custom styles
              if (typeof customStyles === 'object') {
                const processedStyles = processStylesObject(customStyles);
                combinedStyles = normalizeStyles(processedStyles);
              }
              
              css += `.${className}{${combinedStyles}}`;
            } else if (typeof result === 'object') {
            // Regular object styles
            const processedStyles = processStylesObject(result);
            const normalizedStyles = normalizeStyles(processedStyles);
            css += `.${className}{${normalizedStyles}}`;
          }        } catch (error) {
          // Silent error handling
        }
      }
    }else {
      // Legacy syntax handling
      const pattern = templateKey.replace(/\$local-[^-\s]+/g, '([^-\\s]+)');
      const regex = new RegExp(`^${pattern}$`);
      const match = className.match(regex);
      
      if (match) {
        // Legacy parametric handling (existing code)
        const localValue = match[1];
        
        let resolvedValue = localValue;
        if (window.pluginRegistry.scopedVariableMap && window.pluginRegistry.scopedVariableMap[localValue]) {
          resolvedValue = `var(--${localValue})`;
        } else if (window.pluginRegistry.variables && window.pluginRegistry.variables[localValue]) {
          resolvedValue = `var(--${localValue})`;
        }
        
        let processedStyles;
        if (typeof template.styles === 'object') {
          processedStyles = {};
          Object.entries(template.styles).forEach(([prop, val]) => {
            if (typeof val === 'string') {
              const processedVal = val.replace(/\$local-[^-\s]+/g, resolvedValue);
              processedStyles[prop] = processStyleValue(processedVal);
            } else {
              processedStyles[prop] = val;
            }
          });
        } else {
          const processedVal = template.styles.replace(/\$local-[^-\s]+/g, resolvedValue);
          processedStyles = processStyleValue(processedVal);
        }
        
        const normalizedStyles = normalizeStyles(processedStyles);
        css += `.${className}{${normalizedStyles}}`;
      }
    }
  });
  
  return css;
}

function getParametricComponents(className) {
  // Legacy function - components are now handled differently
  return [];
}

function generateParametricComponent(className) {
  // Legacy function - components are now handled through utilityTemplates
  return false;
}

// Generate CSS variables for selector-scoped variables
function generateScopedVariables() {
  if (!window.pluginRegistry.scopedVariables) return '';
  
  return Object.entries(window.pluginRegistry.scopedVariables)
    .map(([selector, variables]) => {
      if (typeof variables === 'object') {
        const variableDeclarations = Object.entries(variables)
          .map(([varName, varValue]) => `--${varName}:${varValue}`)
          .join(';');
        return `${selector}{${variableDeclarations}}`;
      }
      return '';
    })
    .filter(Boolean)
    .join('');
}

// Enhanced CSS generation with full CSS compatibility
function generatePluginCSS() {
  return [
    generateScopedVariables(),
    generateUtilities(),
    generateNestedRules(),
    generateComponents(),
    generateAtRules()
  ].filter(Boolean).join('');
}

function generateUtilities() {
  if (!window.pluginRegistry.utilities) return '';  
  return Object.entries(window.pluginRegistry.utilities)
    .map(([className, styles]) => `.${className}{${styles}}`)
    .join('');
}

// Generate nested selector rules (CSS-compatible)
function generateNestedRules() {
  if (!window.pluginRegistry.nestedRules) return '';
  
  return Object.entries(window.pluginRegistry.nestedRules)
    .map(([baseClassName, nestedRules]) => {
      return Object.entries(nestedRules)
        .map(([selector, styles]) => {
          const normalizedStyles = normalizeStyles(styles);
          
          if (selector.startsWith('&')) {
            // Handle pseudo-classes, pseudo-elements, etc.
            const nestedSelector = selector.replace('&', `.${baseClassName}`);
            return `${nestedSelector}{${normalizedStyles}}`;
          } else if (selector.startsWith('@')) {
            // Handle nested at-rules
            const nestedCSS = `.${baseClassName}{${normalizedStyles}}`;
            return `${selector}{${nestedCSS}}`;
          } else if (selector.includes('&')) {
            // Handle complex selectors with &
            const nestedSelector = selector.replace(/&/g, `.${baseClassName}`);
            return `${nestedSelector}{${normalizedStyles}}`;
          } else {
            // Handle descendant/sibling selectors
            const nestedSelector = `.${baseClassName}${selector}`;
            return `${nestedSelector}{${normalizedStyles}}`;
          }
        })
        .join('');
    })
    .join('');
}

function generateComponents() {
  if (!window.pluginRegistry.components) return '';
  
  let css = '';
  Object.entries(window.pluginRegistry.components).forEach(([className, definition]) => {
    if (Array.isArray(definition)) {
      // Array-based component - expand utility classes
      // For now, just add a comment - full implementation would resolve utilities
      css += `.${className}{/* Component: ${definition.join(' ')} */}`;
    }
  });
  return css;
}

// Enhanced at-rules generation with CSS compatibility
function generateAtRules() {
  if (!window.pluginRegistry.atRules) return '';
  
  return Object.entries(window.pluginRegistry.atRules)
    .map(([atRule, content]) => {
      if (typeof content === 'object') {
        if (atRule.startsWith('@keyframes')) {
          // Handle keyframes specially
          const keyframeCSS = Object.entries(content)
            .map(([keyframe, styles]) => {
              if (typeof styles === 'object') {
                const processedStyles = processStylesObject(styles);
                const normalizedStyles = normalizeStyles(processedStyles);
                return `${keyframe}{${normalizedStyles}}`;
              }
              return '';
            })
            .filter(Boolean)
            .join('');
          return keyframeCSS ? `${atRule}{${keyframeCSS}}` : '';
        } else if (atRule.startsWith('@font-face') || atRule.startsWith('@page')) {
          // Handle @font-face, @page, etc. - simple object to CSS
          const processedStyles = processStylesObject(content);
          const normalizedStyles = normalizeStyles(processedStyles);
          return `${atRule}{${normalizedStyles}}`;
        } else {
          // Handle other at-rules (like @media, @supports, @container)
          const nestedCSS = Object.entries(content)
            .map(([key, value]) => {
              if (key.startsWith('.')) {
                const className = key.slice(1);
                if (typeof value === 'function') {
                  // Parametric nested class - will be generated dynamically
                  return '';
                } else if (typeof value === 'object') {
                  const processedStyles = processStylesObject(value);
                  const normalizedStyles = normalizeStyles(processedStyles);
                  return `.${className}{${normalizedStyles}}`;
                }
              } else if (key.startsWith('#') || key.includes(' ') || key.includes(':')) {
                // Support any CSS selector
                if (typeof value === 'object') {
                  const processedStyles = processStylesObject(value);
                  const normalizedStyles = normalizeStyles(processedStyles);
                  return `${key}{${normalizedStyles}}`;
                }
              }
              return '';
            })
            .filter(Boolean)
            .join('');
          return nestedCSS ? `${atRule}{${nestedCSS}}` : '';
        }
      } else if (typeof content === 'string') {
        return `${atRule}{${content}}`;
      }
      return '';
    })
    .filter(Boolean)
    .join('');
}

// Load plugins based on URL parameters
Object.entries(availablePlugins).forEach(([name, plugin]) => {
  if (shouldLoadPlugin(name, urlConfig)) {
    addPlugin(plugin);
    if (urlConfig.debug) {
    }
  } else if (urlConfig.debug) {
  }
});

if (urlConfig.debug) {
}

// Scan for existing parametric classes after plugins are loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    scanExistingParametricClasses();
  });
} else {
  scanExistingParametricClasses();
}

// Export functions for module use
export { 
  addPlugin,
  initMiniTailwind,
  reinitialize as reinit
};
