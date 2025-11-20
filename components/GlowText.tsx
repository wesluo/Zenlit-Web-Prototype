import React from 'react';

interface GlowTextProps {
  children: React.ReactNode;
  variant?: 'lime' | 'cyan' | 'orange' | 'purple';
  intensity?: 'low' | 'medium' | 'high';
  pulse?: boolean;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

export default function GlowText({
  children,
  variant = 'lime',
  intensity = 'medium',
  pulse = false,
  className = '',
  as: Component = 'span',
}: GlowTextProps) {
  const glowStyles = {
    lime: {
      low: 'text-neon-lime',
      medium: 'text-neon-lime text-glow-lime',
      high: 'text-neon-lime shadow-[0_0_20px_var(--glow-lime),0_0_40px_var(--glow-lime),0_0_60px_var(--glow-lime)]',
    },
    cyan: {
      low: 'text-neon-cyan',
      medium: 'text-neon-cyan text-glow-cyan',
      high: 'text-neon-cyan shadow-[0_0_20px_var(--glow-cyan),0_0_40px_var(--glow-cyan),0_0_60px_var(--glow-cyan)]',
    },
    orange: {
      low: 'text-neon-orange',
      medium: 'text-neon-orange text-glow-orange',
      high: 'text-neon-orange shadow-[0_0_20px_var(--glow-orange),0_0_40px_var(--glow-orange),0_0_60px_var(--glow-orange)]',
    },
    purple: {
      low: 'text-neon-purple',
      medium: 'text-neon-purple shadow-[0_0_10px_var(--glow-purple),0_0_20px_var(--glow-purple)]',
      high: 'text-neon-purple shadow-[0_0_20px_var(--glow-purple),0_0_40px_var(--glow-purple),0_0_60px_var(--glow-purple)]',
    },
  };

  const pulseAnimation = pulse ? 'animate-[pulse-glow_2s_ease-in-out_infinite]' : '';

  return (
    <Component className={`${glowStyles[variant][intensity]} ${pulseAnimation} ${className}`}>
      {children}
    </Component>
  );
}
