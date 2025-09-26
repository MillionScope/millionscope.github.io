/**
 * Layout utility components and constants for consistent spacing and structure
 */

import { cn } from '@/lib/utils'

export const LAYOUT_CONSTANTS = {
  navbarHeight: 'var(--nextra-navbar-height)',
  menuHeight: 'var(--nextra-menu-height)',
  bannerHeight: 'var(--nextra-banner-height)',
  maxWidth: {
    container: 'max-w-[90rem]',
    content: 'max-w-4xl',
    reading: 'max-w-2xl'
  },
  spacing: {
    section: 'py-12 sm:py-16 lg:py-20',
    container: 'px-[max(env(safe-area-inset-left),1.5rem)] pr-[max(env(safe-area-inset-right),1.5rem)]'
  }
}

/**
 * Container component with consistent padding and max-width
 */
export function Container({ 
  children, 
  size = 'container',
  className,
  ...props 
}) {
  return (
    <div 
      className={cn(
        'mx-auto',
        LAYOUT_CONSTANTS.maxWidth[size],
        LAYOUT_CONSTANTS.spacing.container,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Section component with consistent vertical spacing
 */
export function Section({ 
  children, 
  className,
  spacing = true,
  ...props 
}) {
  return (
    <section 
      className={cn(
        spacing && LAYOUT_CONSTANTS.spacing.section,
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

/**
 * Grid layout utilities
 */
export const GridLayouts = {
  // 12-column responsive grid
  responsive: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
  
  // Two column layout
  twoColumn: 'grid grid-cols-1 lg:grid-cols-2 gap-8',
  
  // Three column layout
  threeColumn: 'grid grid-cols-1 md:grid-cols-3 gap-6',
  
  // Sidebar layout
  sidebar: 'grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8',
  
  // Auto-fit grid
  autoFit: 'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6'
}

/**
 * Flex layout utilities
 */
export const FlexLayouts = {
  // Centered content
  center: 'flex items-center justify-center',
  
  // Space between items
  spaceBetween: 'flex items-center justify-between',
  
  // Vertical stack
  stack: 'flex flex-col space-y-4',
  
  // Horizontal flow
  flow: 'flex items-center space-x-4',
  
  // Responsive stack to row
  responsiveStack: 'flex flex-col md:flex-row md:items-center md:space-x-4 md:space-y-0 space-y-4'
}

/**
 * Common layout patterns as components
 */
export function CenteredLayout({ children, className, ...props }) {
  return (
    <div className={cn(FlexLayouts.center, 'min-h-screen', className)} {...props}>
      {children}
    </div>
  )
}

export function SidebarLayout({ 
  sidebar, 
  children, 
  className,
  sidebarClassName,
  contentClassName,
  ...props 
}) {
  return (
    <div className={cn(GridLayouts.sidebar, className)} {...props}>
      <aside className={cn('lg:sticky lg:top-20 lg:self-start', sidebarClassName)}>
        {sidebar}
      </aside>
      <main className={cn(contentClassName)}>
        {children}
      </main>
    </div>
  )
}

export function HeroLayout({ 
  title, 
  description, 
  actions, 
  children, 
  className,
  ...props 
}) {
  return (
    <Section className={cn('text-center', className)} {...props}>
      <Container size="content">
        <div className={FlexLayouts.stack}>
          {title && (
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          )}
          {actions && (
            <div className="flex flex-wrap items-center justify-center gap-4">
              {actions}
            </div>
          )}
          {children}
        </div>
      </Container>
    </Section>
  )
}