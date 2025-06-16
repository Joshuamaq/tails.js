# 🎨 Tails.js

## **One line. Zero config. Utility-first CSS that just works.**

**Drop in a single script tag and instantly get utility-first CSS classes. No build tools, no configuration files, no hassle.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/Size-~15kb-brightgreen.svg)](https://github.com/yourusername/tails.js)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-blue.svg)](https://github.com/yourusername/tails.js)

```html
<!-- Literally just add this line and start using utility classes -->
<script type="module" src="https://cdn.jsdelivr.net/npm/tails.js@latest/tails.js"></script>

<div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  <h1 class="text-2xl font-bold">You're already using Tails.js!</h1>
</div>
```

## ✨ What You Get Instantly

- 🎯 **Core Utility Classes** - Spacing, colors, typography, layout, flexbox, and grid
- 🎨 **Color System** - 11 base colors with 10 shades each (110 color variables)
- 📱 **Responsive Design** - Built-in breakpoints (sm, md, lg, xl)
- 🌗 **Theme Support** - CSS custom properties for consistent theming
- 🔌 **Plugin System** - Extend with custom utilities, variables, and components
- ⚡ **Dynamic Generation** - CSS is generated only for classes you use
- 🎪 **State Variants** - Hover, focus, and other pseudo-class support

## 🎨 Color System

Built-in color palette with shades from 50-900:

```html
<!-- 11 base colors: gray, red, blue, green, yellow, purple, indigo, pink, orange, teal, cyan -->
<div class="bg-blue-500 text-white">Blue background</div>
<div class="bg-red-200 text-red-800">Light red background with dark red text</div>
<div class="border-2 border-green-400">Green border</div>
```

## 🌗 Theme System

Built-in CSS custom properties for consistent theming:

```html
<!-- Built-in theme variables -->
<div class="bg-theme-primary text-theme-bg-primary p-4">
  Primary themed content
</div>

<!-- Theme switching -->
<script>
  // Switch to dark theme
  document.documentElement.setAttribute('data-theme', 'dark');
</script>
```

## 📱 Responsive Design

Mobile-first responsive utilities:

```html
<div class="text-sm md:text-lg lg:text-xl">
  Responsive text sizing
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid layout
</div>
```

## 🎪 Interactive States

Hover, focus, and other pseudo-class variants:

```html
<button class="bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
  Interactive button
</button>

<input class="border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
```

## 🔌 Plugin System

Extend with simple JavaScript objects:

```javascript
// Add custom CSS variables
{
  variables: {
    'brand-primary': '#ff6b35',
    'custom-shadow': '0 4px 20px rgba(0,0,0,0.15)'
  }
}

// Add custom utility classes
{
  utilities: {
    '.text-shadow': 'text-shadow: 2px 2px 4px rgba(0,0,0,0.3)',
    '.backdrop-blur': 'backdrop-filter: blur(10px)'
  }
}

// Add reusable components
{
  components: {
    'card': 'bg-white rounded-lg shadow-md p-6',
    'btn': 'px-4 py-2 rounded font-medium cursor-pointer'
  }
}
```

## 📖 Core Utilities

### Spacing
- **Padding**: `p-4`, `px-6`, `py-3`, `pt-2`, `pr-8`, etc.
- **Margin**: `m-4`, `mx-auto`, `my-2`, `mt-8`, `mb-4`, etc.
- **Values**: 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96

### Typography
- **Size**: `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` through `text-6xl`
- **Weight**: `font-thin`, `font-light`, `font-normal`, `font-medium`, `font-semibold`, `font-bold`
- **Line Height**: `leading-none`, `leading-tight`, `leading-normal`, `leading-relaxed`, `leading-loose`

### Layout
- **Display**: `block`, `inline`, `inline-block`, `flex`, `grid`, `hidden`
- **Flexbox**: `flex-row`, `flex-col`, `items-center`, `justify-center`, `flex-wrap`
- **Grid**: `grid-cols-12`, `col-span-6`, `gap-4`
- **Position**: `relative`, `absolute`, `fixed`, `sticky`

### Sizing
- **Width/Height**: `w-full`, `h-64`, `w-1/2`, `h-screen`
- **Max Width**: `max-w-xs` through `max-w-7xl`, `max-w-prose`, `max-w-screen-lg`

### Borders & Effects
- **Borders**: `border`, `border-2`, `border-t`, `rounded`, `rounded-lg`, `rounded-full`
- **Shadows**: `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`
- **Opacity**: `opacity-0`, `opacity-25`, `opacity-50`, `opacity-75`, `opacity-100`

## 📊 Tails.js vs Tailwind CSS

| Feature | Tails.js | Tailwind CSS |
|---------|----------|--------------|
| **Setup** | ✅ One script tag | ❌ Build process required |
| **Bundle Size** | 🟢 ~15kb | 🟡 ~3MB dev / varies prod |
| **Learning Curve** | 🟢 Minimal | 🟡 Moderate |
| **Customization** | 🟡 Plugin-based | 🟢 Full config control |
| **Ecosystem** | 🟡 Growing | 🟢 Mature |
| **Performance** | 🟢 Runtime CSS generation | 🟢 Build-time optimization |

## 🎯 Perfect For

- 🚀 **Rapid Prototyping** - Get utility classes instantly
- 📄 **Static Sites** - No build tools needed
- 🔧 **Legacy Projects** - Drop into existing HTML
- 📚 **Learning** - Understand utility-first CSS
- 🎨 **Small to Medium Projects** - Full-featured without complexity

## 📝 Browser Support

Works in all modern browsers that support:
- ES6 modules
- CSS custom properties
- MutationObserver (for dynamic class generation)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📝 License

MIT License - see [LICENSE](LICENSE) for details.

---

<div align="center">

**Made with ❤️ for developers who want utility-first CSS without the complexity**

[⭐ Star this repo](https://github.com/yourusername/tails.js) • [🐛 Report Issues](https://github.com/yourusername/tails.js/issues) • [💡 Request Features](https://github.com/yourusername/tails.js/discussions)

</div>