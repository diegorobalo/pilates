import { forwardRef } from 'react'

const Input = forwardRef(({
  label,
  error,
  helperText,
  className = '',
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-4 py-2.5
          bg-white dark:bg-gray-900
          border border-gray-300 dark:border-gray-700
          rounded-lg
          text-gray-900 dark:text-white
          placeholder-gray-500 dark:placeholder-gray-400
          transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500
          focus:border-transparent focus:scale-[1.02]
          hover:border-gray-400 dark:hover:border-gray-600
          disabled:bg-gray-100 dark:disabled:bg-gray-800
          disabled:text-gray-500 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
export default Input
