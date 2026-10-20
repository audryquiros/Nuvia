import logo from '../assets/logo.png'

export default function BrandMark({
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
    xl: 'h-20 w-20',
  }

  return (
    <img
      src={logo}
      alt="Logo de Nuvia"
      className={`${
        sizes[size] || sizes.md
      } shrink-0 object-contain ${className}`}
    />
  )
}
