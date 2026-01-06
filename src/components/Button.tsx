import { Link } from '@tanstack/react-router'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  to?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
  className?: string
}

export default function Button({
  variant = 'outline',
  href,
  to,
  children,
  onClick,
  type = 'button',
  target,
  rel,
  className = '',
}: ButtonProps) {
  const classes = `btn ${variant} ${className}`.trim()

  // External link
  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  // Internal link (TanStack Router)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  // Button element
  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
