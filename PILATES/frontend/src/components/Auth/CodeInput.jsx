import { useState, useRef, useEffect } from 'react'
import { Lock } from 'lucide-react'

export default function CodeInput({ onCodeChange, disabled = false, error = null }) {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])

  // Focus first input on mount
  useEffect(() => {
    if (!disabled && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [disabled])

  const handleChange = (index, value) => {
    // Only allow numeric input
    const numericValue = value.replace(/\D/g, '')

    if (numericValue.length <= 1) {
      const newCode = [...code]
      newCode[index] = numericValue

      setCode(newCode)

      // Auto-focus to next input when a digit is entered
      if (numericValue && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }

      // Call onChange with full code only when all 6 digits are filled
      const fullCode = newCode.join('')
      if (fullCode.length === 6) {
        onCodeChange(fullCode)
      }
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        // Move to previous input on backspace if current is empty
        inputRefs.current[index - 1]?.focus()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedText = e.clipboardData.getData('text')
    const digits = pastedText.replace(/\D/g, '').slice(0, 6)

    if (digits.length > 0) {
      const newCode = [
        digits[0] || '',
        digits[1] || '',
        digits[2] || '',
        digits[3] || '',
        digits[4] || '',
        digits[5] || '',
      ]
      setCode(newCode)

      if (digits.length === 6) {
        onCodeChange(digits)
        inputRefs.current[5]?.blur()
      } else {
        inputRefs.current[Math.min(digits.length, 5)]?.focus()
      }
    }
  }

  const isFull = code.every((digit) => digit !== '')

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
        <Lock className="w-4 h-4" />
        Código de Verificación
      </label>

      <div className="flex gap-3 justify-center mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            ref={(ref) => {
              inputRefs.current[index] = ref
            }}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            placeholder="-"
            className={`w-12 h-14 text-center text-2xl font-bold border-2 rounded-lg transition-all duration-200 focus:outline-none ${
              disabled
                ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed'
                : error
                  ? 'border-danger bg-red-50 text-danger'
                  : digit
                    ? 'border-primary bg-primary bg-opacity-10 text-gray-900'
                    : 'border-gray-300 bg-white text-gray-900'
            }`}
          />
        ))}
      </div>

      {error && (
        <p className="text-center text-sm font-medium text-danger">{error}</p>
      )}

      {!error && isFull && (
        <p className="text-center text-sm font-medium text-success">
          Código completo
        </p>
      )}

      {!error && !isFull && code.some((digit) => digit !== '') && (
        <p className="text-center text-sm text-gray-500">
          {code.filter((digit) => digit !== '').length}/6 dígitos
        </p>
      )}

      <p className="text-center text-xs text-gray-500 mt-3">
        O pega el código desde tu SMS
      </p>
    </div>
  )
}
