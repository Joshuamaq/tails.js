# 🎨 Tails.js

## **One line. Zero config. Utility-first CSS that just works.**

**Drop in a single script tag and instantly get utility-first CSS classes. No build tools, no configuration files, no hassle.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Size](https://img.shields.io/badge/Size-~15kb-brightgreen.svg)](https://github.com/foobar404/tails.js)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero-blue.svg)](https://github.com/foobar404/tails.js)

```html
<!-- Literally just add this line and start using utility classes -->
<script type="module" src="https://cdn.jsdelivr.net/gh/foobar404/tails.js@main/tails.js"></script>

<div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
  <h1 class="text-2xl font-bold">You're already using Tails.js!</h1>
</div>
```

## ✨ What You Get Instantly

- 🎯 **Core Utility Classes** - Spacing, colors, typography, layout, flexbox, grid, transforms, effects, and animations
- 🎨 **Color System** - 11 base colors with 10 shades each (110 color variables)
- 📱 **Responsive Design** - Built-in breakpoints (sm, md, lg, xl)
- 🌗 **Theme Support** - CSS custom properties for consistent theming
- 🔌 **Plugin System** - Extend with custom utilities, variables, components, and animations
- ⚡ **Dynamic Generation** - CSS is generated only for classes you use
- 🎪 **State Variants** - Hover, focus, and other pseudo-class support

## 🔌 Plugin System

Tails.js now supports a modular plugin system with the following built-in plugins:

- [**Colors**](#-colors): Comprehensive color utilities
- [**Layout**](#-layout): Flexbox, grid, and positioning utilities
- [**Spacing**](#-spacing): Margin, padding, and gap utilities
- [**Sizing**](#-sizing): Width, height, and min/max utilities
- [**Typography**](#-typography): Font size, weight, line height, and text alignment utilities
- [**Borders**](#-borders): Border width, radius, and color utilities
- [**Transforms**](#-transforms): Rotate, scale, and translate utilities
- [**Effects**](#-effects): Box shadow, opacity, and filter utilities
- [**Flexbox**](#-flexbox): Advanced flexbox utilities
- [**Grid**](#-grid): Grid layout utilities
- [**Animations**](#-animations): Keyframe-based animations

### Plugin Syntax Demo

```javascript
addPlugin(() => ({
    // Variables
    $animDurationFast: "150ms",
    $animEaseInOut: "cubic-bezier(0.4, 0, 0.2, 1)",

    // Keyframes
    "@keyframes fadeIn": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" }
    },
    "@keyframes slideInUp": {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" }
    },

    // Utilities
    ".fade-in": {
        animation: "$animDurationFast fadeIn $animEaseInOut"
    },
    ".slide-in-up": {
        animation: "$animDurationFast slideInUp $animEaseInOut"
    }
}));
```

### 🎨 Colors

Tails.js offers 11 base colors with 10 shades each—110 color variables, ready to use. Apply colors to backgrounds, text, borders, and states with simple classes like `bg-blue-500`, `text-primary`, or `hover:bg-success-700`.

**Usage:**
```html
<div class="bg-primary text-secondary p-4 rounded">
  <p class="hover:bg-primary focus:text-secondary">Color demo</p>
</div>
<button class="bg-success-600 text-white hover:bg-success-700 px-4 py-2 rounded">
  Success
</button>
```

**Utilities:**  
- `bg-{color}` – Background  
- `text-{color}` – Text  
- `border-{color}` – Border  
- `hover:bg-{color}` – Hover  
- `{color}-{shade}` – Specific shade (e.g., `bg-blue-700`)

**Custom Theme:**  
Override colors globally with CSS variables:
```css
:root {
  --color-primary: #7c3aed;
  --color-secondary: #f59e42;
}
```

## 📐 Layout

Tails.js provides a comprehensive set of layout utilities to help you quickly build responsive and flexible designs.

**Utilities:**
- `flex`, `inline-flex`, `flex-row`, `flex-col`, `flex-wrap`, `items-center`, `justify-between`, etc.
- `grid`, `grid-cols-{n}`, `gap-{n}`, `col-span-{n}`, `row-span-{n}`
- `block`, `inline-block`, `hidden`
- `container`, `mx-auto`, `w-full`, `h-screen`
- `p-{n}`, `m-{n}`, `space-x-{n}`, `space-y-{n}`

**Examples:**
```html
<div class="flex items-center justify-between p-4">
  <span>Left</span>
  <span>Right</span>
</div>

<div class="grid grid-cols-3 gap-4">
  <div class="bg-primary p-2">1</div>
  <div class="bg-secondary p-2">2</div>
  <div class="bg-success p-2">3</div>
</div>
```

**Responsive Layouts:**  
Use responsive prefixes like `sm:`, `md:`, `lg:`, and `xl:` to adjust layouts at different breakpoints.

```html
<div class="flex flex-col md:flex-row">
  <div class="w-full md:w-1/2">Column 1</div>
  <div class="w-full md:w-1/2">Column 2</div>
</div>
```

## 📏 Spacing

Tails.js includes a robust set of spacing utilities for margin, padding, and gap, making it easy to control the whitespace in your layouts.

**Utilities:**
- `m-{n}` – Margin (all sides)
- `mx-{n}` – Horizontal margin (`margin-left` & `margin-right`)
- `my-{n}` – Vertical margin (`margin-top` & `margin-bottom`)
- `mt-{n}`, `mr-{n}`, `mb-{n}`, `ml-{n}` – Margin (top, right, bottom, left)
- `p-{n}` – Padding (all sides)
- `px-{n}` – Horizontal padding
- `py-{n}` – Vertical padding
- `pt-{n}`, `pr-{n}`, `pb-{n}`, `pl-{n}` – Padding (top, right, bottom, left)
- `gap-{n}` – Gap between flex/grid items
- `space-x-{n}`, `space-y-{n}` – Horizontal/vertical spacing between children

**Examples:**
```html
<div class="p-6 m-4 bg-secondary rounded">
  <p class="mb-2">This box has padding and margin.</p>
  <button class="px-4 py-2 bg-primary text-white rounded">Button</button>
</div>

<div class="flex space-x-4">
  <span class="bg-success-200 p-2">A</span>
  <span class="bg-success-400 p-2">B</span>
  <span class="bg-success-600 p-2">C</span>
</div>
```

**Responsive Spacing:**  
Apply spacing responsively using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<div class="p-2 md:p-8">
  Responsive padding example
</div>
```

## 📏 Sizing

Tails.js provides a wide range of sizing utilities to control width, height, min/max values, and more, making it easy to build responsive and adaptive layouts.

**Utilities:**
- `w-{n}` – Set width (e.g., `w-4`, `w-1/2`, `w-full`)
- `h-{n}` – Set height (e.g., `h-8`, `h-screen`)
- `min-w-{n}`, `max-w-{n}` – Minimum/maximum width
- `min-h-{n}`, `max-h-{n}` – Minimum/maximum height

**Examples:**
```html
<div class="w-64 h-32 bg-primary text-white flex items-center justify-center">
  Fixed size box
</div>

<img class="w-24 h-24 rounded-full" src="avatar.png" alt="Avatar" />

<div class="min-w-48 max-w-lg bg-secondary p-4">
  Responsive width box
</div>
```

**Responsive Sizing:**  
Use responsive prefixes to adjust sizing at different breakpoints.

```html
<div class="w-full md:w-1/2 h-32">
  Responsive sizing example
</div>
```

## ✍️ Typography

Tails.js offers a comprehensive set of typography utilities to help you style text quickly and consistently.

**Utilities:**
- `text-{size}` – Font size (e.g., `text-xs`, `text-base`, `text-2xl`)
- `font-{weight}` – Font weight (e.g., `font-light`, `font-bold`)
- `leading-{n}` – Line height (e.g., `leading-tight`, `leading-loose`)
- `tracking-{n}` – Letter spacing (e.g., `tracking-wide`)
- `text-{color}` – Text color (e.g., `text-primary`, `text-gray-700`)
- `text-{align}` – Text alignment (`text-left`, `text-center`, `text-right`, `text-justify`)
- `italic`, `not-italic` – Italic style
- `underline`, `line-through`, `no-underline` – Text decoration
- `uppercase`, `lowercase`, `capitalize`, `normal-case` – Text transform
- `truncate`, `overflow-ellipsis`, `overflow-clip` – Text overflow

**Examples:**
```html
<h1 class="text-3xl font-bold text-primary mb-4">Heading Example</h1>
<p class="text-base leading-relaxed text-secondary">
  This is a paragraph with relaxed line height and secondary color.
</p>
<span class="text-sm font-light uppercase tracking-wide">Small uppercase label</span>
```

**Responsive Typography:**  
Adjust typography responsively using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<p class="text-base md:text-lg lg:text-xl">
  Responsive text size example
</p>
```

## 🟦 Borders

Tails.js includes a full suite of border utilities for quickly styling borders, radii, and border colors.

**Utilities:**
- `border` – Add a border (default 1px solid)
- `border-{side}` – Border on a specific side (`border-t`, `border-b`, `border-l`, `border-r`)
- `border-{n}` – Border width (e.g., `border-2`, `border-4`)
- `border-{color}` – Border color (e.g., `border-primary`, `border-gray-300`)
- `rounded` – Border radius (default)
- `rounded-{size}` – Specific radius (`rounded-sm`, `rounded-lg`, `rounded-full`)
- `rounded-{side}` – Radius on a specific corner (`rounded-t`, `rounded-b`, `rounded-l`, `rounded-r`)
- `divide-x-{n}`, `divide-y-{n}` – Add dividers between children

**Examples:**
```html
<div class="border border-primary rounded-lg p-4">
  Box with border and rounded corners
</div>

<button class="border-2 border-success rounded-full px-4 py-2">
  Rounded Button
</button>

<div class="flex divide-x-2 divide-secondary">
  <span class="px-4">Item 1</span>
  <span class="px-4">Item 2</span>
</div>
```

**Responsive Borders:**  
Apply border utilities responsively using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<div class="border md:border-4 lg:rounded-xl">
  Responsive border and radius
</div>
```

## 🔄 Transforms

Tails.js provides a rich set of transform utilities to help you rotate, scale, translate, and skew elements with ease.

**Utilities:**
- `transform` – Enable transforms
- `rotate-{deg}` – Rotate by degrees (e.g., `rotate-45`, `-rotate-90`)
- `scale-{n}` – Scale (e.g., `scale-50`, `scale-100`, `scale-150`)
- `scale-x-{n}`, `scale-y-{n}` – Scale on X or Y axis
- `translate-x-{n}`, `translate-y-{n}` – Translate on X or Y axis (e.g., `translate-x-4`)
- `skew-x-{deg}`, `skew-y-{deg}` – Skew on X or Y axis

**Examples:**
```html
<div class="transform rotate-12 bg-primary p-4">
  Rotated box
</div>

<img class="transform scale-110 hover:scale-125 transition" src="logo.png" alt="Logo" />

<div class="transform translate-x-4 translate-y-2 bg-secondary p-2">
  Moved box
</div>
```

**Responsive Transforms:**  
Apply transform utilities responsively using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<div class="transform md:rotate-6 lg:scale-125">
  Responsive transform example
</div>
```

## ✨ Effects

Tails.js includes a variety of effect utilities to help you add visual flair and interactivity to your UI with minimal effort.

**Utilities:**
- `shadow`, `shadow-{size}` – Box shadows (`shadow-sm`, `shadow-lg`, `shadow-xl`)
- `opacity-{n}` – Opacity levels (e.g., `opacity-50`, `opacity-100`)
- `filter`, `filter-{type}` – Enable and apply CSS filters (`blur`, `grayscale`, `brightness`, etc.)
- `backdrop-filter`, `backdrop-blur-{n}` – Backdrop filters for frosted glass effects
- `transition`, `transition-{property}` – Enable transitions and specify properties (`transition-colors`, `transition-all`)
- `duration-{n}` – Transition duration (e.g., `duration-150`, `duration-500`)
- `ease-{type}` – Transition timing function (`ease-in`, `ease-out`, `ease-in-out`)

**Examples:**
```html
<div class="shadow-lg p-6 bg-white rounded">
  Large shadow effect
</div>

<img class="opacity-75 hover:opacity-100 transition duration-300" src="image.jpg" alt="Fading image" />

<div class="filter blur-sm grayscale bg-primary p-4">
  Blurred and grayscale effect
</div>

<div class="backdrop-blur-md bg-white/30 p-4 rounded">
  Frosted glass effect
</div>
```

**Responsive Effects:**  
Apply effect utilities responsively using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<div class="shadow md:shadow-xl lg:opacity-100 opacity-60">
  Responsive shadow and opacity
</div>
```

## 🧩 Flexbox

Tails.js offers a complete set of flexbox utilities to help you build flexible, responsive layouts with ease.

**Utilities:**
- `flex`, `inline-flex` – Enable flexbox or inline flexbox
- `flex-row`, `flex-row-reverse`, `flex-col`, `flex-col-reverse` – Set flex direction
- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse` – Control wrapping
- `items-start`, `items-center`, `items-end`, `items-baseline`, `items-stretch` – Align items on the cross axis
- `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`, `justify-evenly` – Justify content on the main axis
- `gap-{n}` – Gap between flex items
- `flex-1`, `flex-auto`, `flex-initial`, `flex-none` – Flex grow/shrink
- `order-{n}` – Control item order
- `self-auto`, `self-start`, `self-center`, `self-end`, `self-stretch` – Align self

**Examples:**
```html
<div class="flex flex-row items-center justify-between gap-4 p-4 bg-secondary">
  <span>Left</span>
  <span>Center</span>
  <span>Right</span>
</div>

<div class="flex flex-col md:flex-row gap-2">
  <div class="flex-1 bg-primary p-2">Column 1</div>
  <div class="flex-1 bg-success p-2">Column 2</div>
</div>

<div class="flex items-end">
  <div class="bg-primary p-2">A</div>
  <div class="bg-secondary p-4 self-start">B</div>
  <div class="bg-success p-6 self-center">C</div>
</div>
```

**Responsive Flexbox:**  
Use responsive prefixes to change flex direction, alignment, or order at different breakpoints.

```html
<div class="flex flex-col md:flex-row">
  <div class="order-2 md:order-1">First on mobile, second on desktop</div>
  <div class="order-1 md:order-2">Second on mobile, first on desktop</div>
</div>
```

## 🟩 Grid

Tails.js provides a powerful set of grid utilities to help you create complex, responsive grid layouts with minimal effort.

**Utilities:**
- `grid` – Enable CSS Grid
- `grid-cols-{n}` – Set number of columns (e.g., `grid-cols-2`, `grid-cols-12`)
- `grid-rows-{n}` – Set number of rows
- `col-span-{n}` – Span columns (e.g., `col-span-2`)
- `row-span-{n}` – Span rows
- `gap-{n}` – Set gap between rows and columns
- `auto-cols-{type}` – Set auto column sizing (`auto`, `min`, `max`, `fr`)
- `auto-rows-{type}` – Set auto row sizing
- `justify-items-{align}` – Align items horizontally (`start`, `center`, `end`, `stretch`)
- `items-{align}` – Align items vertically
- `justify-content-{align}` – Align grid as a whole

**Examples:**
```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-primary p-2">1</div>
  <div class="bg-secondary p-2">2</div>
  <div class="bg-success p-2">3</div>
</div>

<div class="grid grid-cols-4 gap-2">
  <div class="col-span-2 bg-primary p-2">Span 2 columns</div>
  <div class="bg-secondary p-2">B</div>
  <div class="bg-success p-2">C</div>
</div>
```

**Responsive Grid:**  
Use responsive prefixes to change grid columns, gaps, or spans at different breakpoints.

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-primary p-2">A</div>
  <div class="bg-secondary p-2">B</div>
  <div class="bg-success p-2">C</div>
</div>
```

## 🎬 Animations

Tails.js includes a set of animation utilities and keyframes to help you add motion and interactivity to your UI with ease.

**Utilities:**
- `animate-{name}` – Apply a named animation (e.g., `animate-fade-in`, `animate-bounce`)
- `duration-{n}` – Animation duration (e.g., `duration-300`)
- `delay-{n}` – Animation delay (e.g., `delay-150`)
- `ease-{type}` – Animation timing function (`ease-in`, `ease-out`, `ease-in-out`)
- `infinite`, `repeat-{n}` – Animation iteration count

**Built-in Animations:**
- `fade-in`, `fade-out`
- `slide-in-up`, `slide-in-down`, `slide-in-left`, `slide-in-right`
- `bounce`, `pulse`, `spin`

**Examples:**
```html
<div class="animate-fade-in duration-500">
  Fades in on mount
</div>

<button class="animate-bounce infinite bg-primary text-white px-4 py-2 rounded">
  Bouncing Button
</button>

<div class="animate-slide-in-up delay-200 duration-700">
  Slides in from below
</div>
```

**Custom Animations:**  
You can define your own animations using the plugin system:

```javascript
addPlugin(() => ({
  "@keyframes wiggle": {
    "0%, 100%": { transform: "rotate(-3deg)" },
    "50%": { transform: "rotate(3deg)" }
  },
  ".animate-wiggle": {
    animation: "wiggle 1s ease-in-out infinite"
  }
}));
```

**Responsive Animations:**  
Apply animation utilities responsively using prefixes like `sm:`, `md:`, `lg:`, and `xl:`.

```html
<div class="animate-fade-in md:animate-slide-in-left">
  Responsive animation example
</div>
```

## 🚀 Contribute Your Own Plugins!

Tails.js thrives on community creativity. Have a utility, component, or animation idea? Want to extend the framework with your own plugin? Contributions are welcome!

- Fork the repo and add your plugin to the `plugins` directory.
- Submit a pull request with a description and usage examples.
- Share your plugin ideas and feedback in [GitHub Discussions](https://github.com/foobar404/tails.js/discussions).

**Help shape the future of Tails.js—contribute your own plugins today!**