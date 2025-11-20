import React from 'react';
import GlassCard from './GlassCard';
import AnimatedNumber from './AnimatedNumber';
import GlowText from './GlowText';

export default function StatsSection() {
  const stats = [
    {
      value: 40000,
      label: 'Safe Miles Driven',
      sublabel: 'among Zenlers',
      variant: 'lime' as const,
      icon: '🛣️',
    },
    {
      value: 6000,
      label: 'ZNLT Distributed',
      sublabel: 'to date',
      variant: 'cyan' as const,
      icon: '💎',
    },
    {
      value: 500,
      label: 'Active Drivers',
      sublabel: 'earning daily',
      variant: 'orange' as const,
      icon: '🔥',
    },
  ];

  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <GlowText
            as="h2"
            variant="lime"
            intensity="high"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black mb-4"
          >
            Community Impact
          </GlowText>
          <p className="text-xl text-[var(--text-secondary)] font-body">
            Real numbers. Real rewards. Real drivers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="opacity-0 animate-[slide-in-up_1s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <GlassCard variant={stat.variant} hover>
                <div className="text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-6 animate-[float_3s_ease-in-out_infinite]" style={{ animationDelay: `${index * 0.5}s` }}>
                    {stat.icon}
                  </div>

                  {/* Animated Number */}
                  <div className="mb-4">
                    <GlowText
                      variant={stat.variant}
                      intensity="high"
                      className="text-5xl md:text-6xl lg:text-7xl font-display font-black"
                    >
                      <AnimatedNumber
                        value={stat.value}
                        duration={2500}
                        separator
                      />
                    </GlowText>
                  </div>

                  {/* Label */}
                  <div>
                    <p className="text-xl md:text-2xl font-display font-bold text-neon-lime mb-2">
                      {stat.label}
                    </p>
                    <p className="text-base text-[var(--text-secondary)] font-body">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
