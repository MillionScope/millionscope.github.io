export { cn } from '@/lib/utils'

/**
 * Common class name generator for consistent styling
 */
export const createClassNames = {
  button: ({ variant = 'default', size = 'default', className = '' }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background'
    
    const variants = {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-primary'
    }
    
    const sizes = {
      sm: 'h-9 px-3 rounded-md',
      default: 'h-10 py-2 px-4',
      lg: 'h-11 px-8 rounded-md'
    }
    
    return cn(baseClasses, variants[variant], sizes[size], className)
  },
  
  input: ({ variant = 'default', className = '' }) => {
    const baseClasses = 'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
    
    return cn(baseClasses, className)
  },
  
  card: ({ className = '' }) => {
    const baseClasses = 'rounded-lg border bg-card text-card-foreground shadow-sm'
    return cn(baseClasses, className)
  }
}

/**
 * Responsive utilities
 */
export const responsive = {
  /**
   * Generate responsive classes
   * @param {Object} breakpoints - Object with breakpoint keys and values
   * @returns {string} Responsive classes
   */
  classes: (breakpoints) => {
    return Object.entries(breakpoints)
      .map(([breakpoint, value]) => {
        if (breakpoint === 'base') return value
        return `${breakpoint}:${value}`
      })
      .join(' ')
  }
}

/**
 * Animation utilities
 */
export const animations = {
  fadeIn: 'animate-in fade-in duration-200',
  fadeOut: 'animate-out fade-out duration-200',
  slideIn: 'animate-in slide-in-from-bottom-2 duration-300',
  slideOut: 'animate-out slide-out-to-bottom-2 duration-300',
}

/**
 * Focus and accessibility utilities
 */
export const a11y = {
  focusRing: 'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  srOnly: 'sr-only',
  skipLink: 'absolute -top-10 left-6 z-50 bg-background p-2 text-foreground transition-all focus:top-6',
}