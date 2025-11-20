import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'default';
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  variant = 'default',
  className = '',
  hover = true,
}: GlassCardProps) {
  const baseStyles = `
    relative
    rounded-xl
    p-6
    md:p-8
    backdrop-filter
    backdrop-blur-md
    transition-all
    duration-300
    h-full
  `;

  const variantStyles = {
    default: `
      bg-bg-card
      border
      border-primary/30
      shadow-lg
      ${hover ? 'hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10' : ''}
    `,
    primary: `
      bg-primary/10
      border
      border-primary/50
      shadow-lg
      shadow-primary/20
      ${hover ? 'hover:border-primary hover:shadow-xl hover:shadow-primary/30' : ''}
    `,
  };

  const hoverEffect = hover ? 'hover:-translate-y-1' : '';

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverEffect} ${className}`}>
      {children}
    </div>
  );
}
