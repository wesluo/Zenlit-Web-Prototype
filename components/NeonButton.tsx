'use client';

import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function NeonButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
}: NeonButtonProps) {
  const baseStyles = `
    relative
    inline-flex
    items-center
    justify-center
    font-bold
    font-body
    rounded-lg
    transition-all
    duration-300
  `;

  const sizeStyles = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-12 py-4 text-lg',
  };

  const variantStyles = {
    primary: `
      bg-primary
      text-white
      shadow-lg
      shadow-primary/20
      hover:shadow-xl
      hover:shadow-primary/30
      hover:scale-105
    `,
    secondary: `
      bg-transparent
      text-primary
      border-2
      border-primary/30
      hover:border-primary
      hover:bg-primary/10
      hover:scale-105
    `,
  };

  const styles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
