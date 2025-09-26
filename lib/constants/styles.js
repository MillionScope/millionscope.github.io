// Style constants to reduce duplication across components

export const THEME_VARIANTS = {
  light: 'light',
  dark: 'dark'
}

export const CODE_THEMES = {
  [THEME_VARIANTS.light]: 'github-light',
  [THEME_VARIANTS.dark]: 'github-dark'
}

export const SUPPORTED_LANGUAGES = [
  'javascript',
  'jsx',
  'typescript',
  'tsx',
  'python',
  'css',
  'html',
  'json',
  'bash',
  'yaml',
  'markdown',
  'text'
]

export const COMMON_STYLES = {
  // Common button styles
  button: {
    base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
    variants: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-primary'
    },
    sizes: {
      sm: 'h-9 px-3 rounded-md',
      default: 'h-10 py-2 px-4',
      lg: 'h-11 px-8 rounded-md'
    }
  },
  
  // Common code styles
  code: {
    inline: 'bg-primary-700/5 border-opacity-[0.04] bg-opacity-[0.03] break-words rounded-md border py-0.5 px-[.25em] text-[.9em] dark:border-white/10 dark:bg-white/10',
    block: 'whitespace-pre-wrap break-words bg-transparent'
  },
  
  // Layout styles
  layout: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-12 sm:py-16 lg:py-20'
  }
}

export const ANIMATION_DURATIONS = {
  fast: '150ms',
  default: '300ms',
  slow: '500ms'
}

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}