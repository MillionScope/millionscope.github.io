# ChatGPT CSS Migration Summary

This document outlines the migration from custom token variables to the official ChatGPT CSS variables and system.

## 🎯 Migration Overview

The project has been successfully migrated to use the official ChatGPT CSS system while maintaining backward compatibility with existing components.

## 🔄 Variable Mapping

### Color System Migration

| **Old Variable** | **New Variable** | **Description** |
|-----------------|------------------|-----------------|
| `--token-bg-primary` | `--main-surface-primary` | Primary background surface |
| `--token-bg-elevated-secondary` | `--main-surface-secondary` | Secondary elevated background |
| `--token-text-primary` | `--text-primary` | Primary text color |
| `--token-text-secondary` | `--text-secondary` | Secondary text color |
| `--token-text-tertiary` | `--text-tertiary` | Tertiary text color |
| `--token-text-quaternary` | `--text-quaternary` | Quaternary text color |
| `--token-surface-hover` | `--surface-hover` | Hover state background |
| `--token-border-default` | `--border-light` | Default border color |
| `--token-main-surface-primary` | `--main-surface-primary` | Main surface primary |
| `--token-main-surface-secondary` | `--main-surface-secondary` | Main surface secondary |
| `--token-main-surface-tertiary` | `--main-surface-tertiary` | Main surface tertiary |

## 🎨 New ChatGPT Color Palette

### Gray Scale
```css
--gray-50: #f9f9f9;
--gray-100: #ececec;
--gray-200: #e3e3e3;
--gray-300: #cdcdcd;
--gray-400: #b4b4b4;
--gray-500: #9b9b9b;
--gray-600: #676767;
--gray-700: #424242;
--gray-750: #2f2f2f;
--gray-800: #212121;
--gray-900: #171717;
--gray-950: #0d0d0d;
```

### Brand Colors
```css
--white: #fff;
--black: #000;
--red-500: #e02e2a;
--red-700: #911e1b;
--brand-purple: #ab68ff;
--yellow-900: #4d3b00;
```

## 🌙 Light/Dark Mode Colors

### Light Mode
- **Primary Text**: `--text-primary: var(--gray-950)`
- **Secondary Text**: `--text-secondary: #0009`
- **Tertiary Text**: `--text-tertiary: #0000004a`
- **Quaternary Text**: `--text-quaternary: #00000030`
- **Surface Hover**: `--surface-hover: #00000012`
- **Main Surface**: `--main-surface-primary: var(--white)`

### Dark Mode
- **Primary Text**: `--text-primary: var(--gray-100)`
- **Secondary Text**: `--text-secondary: #ffffffb3`
- **Tertiary Text**: `--text-tertiary: #ffffff94`
- **Quaternary Text**: `--text-quaternary: #ffffff69`
- **Surface Hover**: `--surface-hover: #ffffff26`
- **Main Surface**: `--main-surface-primary: var(--gray-800)`

## 🎭 Spring Animations

Added official ChatGPT spring animation easing functions:

- `--spring-fast` - Fast spring animation (0.667s)
- `--spring-common` - Standard spring animation (0.667s) 
- `--spring-slow-bounce` - Slow bounce animation (1.167s)
- `--spring-bounce` - Standard bounce animation (0.833s)

## 📏 Typography Scale

```css
--text-xs: 0.75rem;        /* 12px */
--text-sm: 0.875rem;       /* 14px */
--text-base: 1rem;         /* 16px */
--text-lg: 1.125rem;       /* 18px */
--text-xl: 1.25rem;        /* 20px */
--text-2xl: 1.5rem;        /* 24px */
--text-3xl: 1.875rem;      /* 30px */
--text-4xl: 2.25rem;       /* 36px */
--text-5xl: 3rem;          /* 48px */
--text-6xl: 3.75rem;       /* 60px */
--text-7xl: 4.5rem;        /* 72px */
--text-8xl: 6rem;          /* 96px */
--text-9xl: 8rem;          /* 128px */
```

## 📐 Spacing System

- **Base Unit**: `--spacing: 0.25rem` (4px)
- **Layout**: Uses `calc(var(--spacing) * N)` for consistent spacing
- **Sidebar Rail**: `calc(var(--spacing) * 13)` on mobile, `calc(var(--spacing) * 14)` on desktop
- **Header Height**: `calc(var(--spacing) * 13)` on mobile, `calc(var(--spacing) * 14)` on desktop

## 🎼 Composer Variables

```css
--composer-footer_height: var(--composer-bar_footer-current-height, 32px);
--composer-bar_height: var(--composer-bar_current-height, 52px);
--composer-bar_width: var(--composer-bar_current-width, 768px);
--composer-surface: var(--message-surface);
--composer-blue-bg: #daeeff;
--composer-blue-hover: #bddcf4;
```

## 🔧 Component Classes

### Menu Items
```css
.__menu-item {
  padding-block: calc(var(--spacing) * 1.5);
  padding-inline: calc(var(--spacing) * 2.5);
  border-radius: calc(var(--spacing) * 2);
}
```

### Message Content
```css
.message-content {
  color: var(--text-primary);
}

.message-content-secondary {
  color: var(--text-secondary);
}
```

### Composer Surface
```css
.composer-surface {
  background-color: var(--composer-surface);
  border-radius: calc(var(--spacing) * 6);
}
```

## ✅ Backward Compatibility

All existing `--token-*` variables are maintained as aliases to the new ChatGPT variables, ensuring no breaking changes for existing components.

## 🚀 Usage

You can now use either:
- **New ChatGPT variables**: `var(--text-primary)`, `var(--surface-hover)`, etc.
- **Legacy token variables**: `var(--token-text-primary)`, `var(--token-surface-hover)`, etc.
- **Tailwind utilities**: `bg-token-surface-hover`, `text-token-text-primary`, etc.

## 🎯 Benefits

1. **Official ChatGPT styling** - Matches the authentic ChatGPT appearance
2. **Better theming** - Proper light/dark mode support with official colors
3. **Animation system** - Professional spring animations
4. **Scalable spacing** - Consistent spacing system based on `--spacing` unit
5. **Typography scale** - Complete text sizing system
6. **Future-proof** - Based on official ChatGPT source code
7. **Backward compatible** - All existing components continue to work

## 📝 Next Steps

1. Consider updating components to use new variable names for better maintainability
2. Utilize the new spring animations for enhanced user experience
3. Leverage the typography scale for consistent text sizing
4. Use the spacing system for better layout consistency