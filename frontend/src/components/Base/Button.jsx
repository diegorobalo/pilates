import { forwardRef } from 'react'
import { Loader } from 'lucide-react'

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  ...props
}, ref) => {
  const baseStyles = `
    inline-flex items-center justify-center font-semibold
    rounded-lg transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:scale-105
    hover:scale-102 active:scale-98
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-700 hover:to-purple-700
      focus:ring-blue-500
      shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-gray-200 text-gray-900
      hover:bg-gray-300
      focus:ring-gray-500
      dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
    `,
    ghost: `
      text-gray-700 hover:bg-gray-100
      focus:ring-gray-500
      dark:text-gray-300 dark:hover:bg-gray-800
    `,
    danger: `
      bg-red-600 text-white
      hover:bg-red-700
      focus:ring-red-500
      shadow-md hover:shadow-lg
    `,
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-3',
  }

  return (
    <button
      ref={ref}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
