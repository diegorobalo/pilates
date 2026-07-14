import { useState } from 'react'
import { Phone } from 'lucide-react'

export default function PhoneInput({ onPhoneChange, disabled = false, error = null }) {
  const [phone, setPhone] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '')

    // Limit to 20 digits
    const limited = cleaned.slice(0, 20)

    // Format based on length - simple formatting: +1 (XXX) XXX-XXXX
    if (limited.length === 0) return ''
    if (limited.length <= 3) return limited
    if (limited.length <= 6) return `${limited.slice(0, 3)} ${limited.slice(3)}`
    if (limited.length <= 10) return `${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6)}`
    return `${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(6, 10)} ${limited.slice(10)}`
  }

  const handleChange = (e) => {
    const value = e.target.value
    const formatted = formatPhoneNumber(value)
    setPhone(formatted)
  }

  const handleBlur = () => {
    setIsFocused(false)
    const cleaned = phone.replace(/\D/g, '')

    // Validate: at least 10 digits
    if (cleaned.length >= 10) {
      onPhoneChange(cleaned)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const isValid = phone.replace(/\D/g, '').length >= 10

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Número de Teléfono
      </label>
      <div className="relative">
        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
        <input
          type="tel"
          value={phone}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          disabled={disabled}
          placeholder="10+ digits"
          className={`w-full pl-10 pr-4 py-2.5 border-2 rounded-lg font-medium transition-all duration-200 focus:outline-none ${
            disabled
              ? 'bg-gray-100 text-gray-500 border-gray-200 cursor-not-allowed'
              : isFocused
                ? 'border-primary bg-white text-gray-900 shadow-md'
                : error
                  ? 'border-danger bg-red-50 text-gray-900'
                  : isValid
                    ? 'border-success bg-white text-gray-900'
                    : 'border-gray-300 bg-white text-gray-900'
          }`}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm font-medium text-danger">{error}</p>
      )}
      {!error && isValid && (
        <p className="mt-2 text-sm font-medium text-success">Número válido</p>
      )}
      {!error && !isValid && phone.length > 0 && (
        <p className="mt-2 text-sm text-gray-500">
          {phone.replace(/\D/g, '').length}/10+ dígitos
        </p>
      )}
    </div>
  )
}
