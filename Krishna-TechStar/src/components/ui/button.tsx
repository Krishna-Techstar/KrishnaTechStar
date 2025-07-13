import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  size = 'default',
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'ghost':
        return {
          background: 'transparent',
          color: 'var(--text-secondary)',
          border: 'none',
          padding: size === 'icon' ? '0.5rem' : '0.5rem 1rem',
        };
      case 'outline':
        return {
          background: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          padding: '0.75rem 1.5rem',
        };
      default:
        return {
          background: 'var(--accent-color, #00d4ff)',
          color: 'var(--text-primary, #ffffff)',
          border: 'none',
          padding: '0.75rem 1.5rem',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return { padding: '0.5rem 1rem', fontSize: '0.75rem' };
      case 'lg':
        return { padding: '1rem 2rem', fontSize: '1rem' };
      case 'icon':
        return { padding: '0.5rem', width: '2.5rem', height: '2.5rem' };
      default:
        return { padding: '0.75rem 1.5rem', fontSize: '0.875rem' };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <button
      className={`hero-cta ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        borderRadius: '0.5rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        lineHeight: '1.25rem',
        ...variantStyles,
        ...sizeStyles,
      }}
      {...props}
    >
      {children}
    </button>
  );
}; 