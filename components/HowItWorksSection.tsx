import React from 'react';
import Image from 'next/image';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Download & drive',
      description: 'Two minutes to your first trip. Auto-trip detection means zero hassle.',
      image: '/images/step-01-download.svg',
    },
    {
      number: '02',
      title: 'Stack safe miles',
      description: 'Every safe mile earns ZNLT. Refer your friends for bonus rewards and unlock hidden perks.',
      image: '/images/step-02-miles.svg',
    },
    {
      number: '03',
      title: 'Redeem or hold',
      description: 'Cash out for gift cards now, or hold for bigger rewards. Your choice, your timeline.',
      image: '/images/step-03-rewards.svg',
    },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden flex items-center justify-center py-16 md:py-20 min-h-screen">
      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-accent-gold/[0.04] rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Section Header - Centered editorial */}
        <div className="mb-12 md:mb-16 text-center max-w-4xl mx-auto">
          <div className="mb-6 opacity-0 animate-[fade-in_1s_ease-out_forwards]">
            <span className="text-sm uppercase tracking-[0.2em] text-text-dim font-medium">
              How It Works
            </span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 opacity-0 animate-[fade-in-up_1s_ease-out_0.2s_forwards]" style={{ lineHeight: '1.2' }}>
            Your skills finally
            <br />
            <span className="text-gradient-gold italic inline-block" style={{ paddingRight: '0.2em', minWidth: 'max-content' }}>pay off</span>
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-2xl mx-auto opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            Three simple steps to start earning rewards for driving safely
          </p>
        </div>

        {/* Steps - Luxurious vertical timeline */}
        <div className="max-w-5xl mx-auto space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative opacity-0 animate-[fade-in-up_1s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-[2.75rem] top-24 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent hidden md:block"></div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                {/* Number Badge - Luxury circle */}
                <div className="md:col-span-2 flex md:block justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full glass-premium flex items-center justify-center border-2 border-primary/30 hover:border-primary transition-all duration-500 group">
                      <span className="font-display font-bold text-3xl text-gradient-primary group-hover:scale-110 transition-transform duration-500">
                        {step.number}
                      </span>
                    </div>
                    {/* Subtle glow */}
                    <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10"></div>
                  </div>
                </div>

                {/* Content Card - Editorial style */}
                <div className="md:col-span-10">
                  <div className="glass-luxury rounded-2xl p-8 md:p-10 lg:p-12 hover-lift border border-border-medium hover:border-primary/40 transition-all duration-500 group">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                      {/* Image */}
                      <div className="lg:col-span-1 flex justify-center">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="lg:col-span-2">
                        {/* Title */}
                        <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 group-hover:text-gradient-primary transition-all duration-500">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-text-secondary font-body text-lg md:text-xl leading-relaxed mb-8">
                          {step.description}
                        </p>

                        {/* Decorative accent line */}
                        <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent-gold to-transparent rounded-full opacity-50 group-hover:opacity-100 group-hover:w-32 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <div className="mt-32 text-center opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-text-muted font-body text-lg">
              Ready to start earning?
            </p>
            <div className="w-px h-16 bg-gradient-to-b from-border-medium to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
