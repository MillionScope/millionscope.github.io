import React from 'react'
import { cn } from '@/lib/utils'

/**
 * Standard icon wrapper component for consistent styling and behavior
 */
export function IconWrapper({ 
  children, 
  size = 'default', 
  className, 
  viewBox = "0 0 24 24",
  ...props 
}) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    default: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  }

  return (
    <svg
      viewBox={viewBox}
      className={cn(
        'inline-block flex-shrink-0',
        sizeClasses[size],
        className
      )}
      fill="currentColor"
      {...props}
    >
      {children}
    </svg>
  )
}

/**
 * Common icon props for consistency
 */
export const iconProps = {
  'aria-hidden': true,
  focusable: false,
  role: 'img'
}

/**
 * Icon variants for different use cases
 */
export const iconVariants = {
  default: '',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600',
  info: 'text-blue-600'
}