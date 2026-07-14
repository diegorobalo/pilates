export function Card({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-900
        rounded-xl border border-gray-200 dark:border-gray-800
        shadow-md hover:shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-1
        p-6
        ${hover ? 'hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 pb-4 border-b border-gray-200 dark:border-gray-800 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-gray-600 dark:text-gray-400 mt-1 ${className}`}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = '' }) {
  return <div className={className}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex gap-3 ${className}`}>
      {children}
    </div>
  )
}
