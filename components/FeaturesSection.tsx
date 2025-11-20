import React from 'react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Daily Earnings',
      description: 'ZNLT based on safe miles. The better you drive, the more you earn—every single trip.',
      number: '01',
    },
    {
      title: 'Clarity & Control',
      description: 'Transparent score, instant earnings, no hardware. Track your progress and redeem whenever you want.',
      number: '02',
    },
    {
      title: 'Future Benefits',
      description: 'Better quotes and discounts with strong ZenScore. Your safe driving pays off today and tomorrow.',
      number: '03',
    },
  ];

  return (
    <section id="features" className="section-luxury relative flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header - Editorial style */}
        <div className="mb-12 md:mb-16">
          <div className="max-w-3xl">
            <div className="mb-4 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
              <span className="text-sm uppercase tracking-[0.2em] text-text-dim font-medium">
                Features
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 opacity-0 animate-[fade-in-up_1s_ease-out_0.2s_forwards]">
              Why Zenlit?
            </h2>
            <div className="divider-luxury opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]"></div>
          </div>
        </div>

        {/* Features - Asymmetric Luxury Layout */}
        <div className="space-y-16 md:space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center opacity-0 ${
                index % 2 === 0 ? 'animate-[slide-in-left_1s_ease-out_forwards]' : 'animate-[slide-in-right_1s_ease-out_forwards]'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number - Large decorative element (hidden on mobile) - NO BUBBLE */}
              <div className={`hidden lg:block lg:col-span-3 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  <div className="text-[120px] md:text-[140px] font-display font-bold leading-none text-gradient-primary opacity-10">
                    {feature.number}
                  </div>
                </div>
              </div>

              {/* Content - Refined typography */}
              <div className={`lg:col-span-9 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="glass-premium rounded-2xl p-6 md:p-8 lg:p-10 hover-lift group">

                  {/* Accent decoration */}
                  <div className="mb-5">
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent-gold rounded-full"></div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-4 group-hover:text-gradient-primary transition-all duration-500">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary font-body text-base md:text-lg leading-relaxed max-w-2xl">
                    {feature.description}
                  </p>

                  {/* Decorative element */}
                  <div className="mt-5 flex items-center gap-3 text-text-dim">
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-all duration-500"
                          style={{ transitionDelay: `${i * 50}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
          <div className="divider-luxury"></div>
        </div>
      </div>
    </section>
  );
}
