'use client';

import React from 'react';
import NeonButton from './NeonButton';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Sophisticated Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Video Background - Lowest layer (only loads if file exists) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E"
        >
          <source src="/Zenlit%20Output%20Vid%201080p.mov" type="video/quicktime" />
          <source src="/zenlit-video.mp4" type="video/mp4" />
        </video>

        {/* Animated gradient background as fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary animate-[gradient_8s_ease_infinite]"></div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary opacity-70"></div>

        {/* Atmospheric orbs */}
        <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] opacity-0 animate-[fade-in_2s_ease-out_0.5s_forwards]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-accent-gold/[0.06] rounded-full blur-[120px] opacity-0 animate-[fade-in_2s_ease-out_1s_forwards]"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 md:py-40">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main Headline - Luxury Editorial Style */}
          <div className="mb-12 opacity-0 animate-[fade-in-up_1.2s_ease-out_0.5s_forwards]">
            <h1 className="font-display font-bold leading-[1.2] tracking-tight" style={{ margin: 0 }}>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white" style={{ marginBottom: '2rem' }}>
                Every safe mile
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gradient-primary text-shadow-luxury">
                counts.
              </span>
            </h1>

            {/* Spacer for guaranteed vertical spacing - responsive sizing */}
            <div
              className="block w-full"
              style={{
                height: '64px',
                minHeight: '64px',
                marginTop: '0',
                marginBottom: '0'
              }}
              aria-hidden="true"
            >
              {/* Additional invisible content to force height */}
              <span
                className="block"
                style={{
                  height: 'clamp(64px, 8vw, 96px)'
                }}
              >
                &nbsp;
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium italic"
              style={{ marginTop: 0, marginBottom: 0, color: '#00ff41' }}
            >
              Keep stacking.
            </h2>
          </div>

          {/* Subtext - Refined spacing */}
          <div className="mb-16 opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
            <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-body font-light leading-relaxed max-w-3xl mx-auto">
              Drive safer. Earn <span className="text-gradient-gold font-medium">ZNLT</span> daily. Redeem when you want.
            </p>
          </div>

          {/* CTA Buttons - Premium spacing */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 opacity-0 animate-[scale-in_1s_ease-out_1s_forwards]">
            <NeonButton
              variant="primary"
              size="lg"
              href="https://apps.apple.com"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="font-medium text-lg">Download for iOS</span>
              </div>
            </NeonButton>

            <NeonButton
              variant="secondary"
              size="lg"
              href="https://play.google.com"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span className="font-medium text-lg">Download for Android</span>
              </div>
            </NeonButton>
          </div>

          {/* Trust indicators - Luxury refinement */}
          <div className="mt-20 pt-12 border-t border-border-subtle opacity-0 animate-[fade-in-up_1s_ease-out_1.2s_forwards]">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-x-14 gap-y-7 text-text-muted">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-accent-gold/30 border-2 border-bg-primary"
                    />
                  ))}
                </div>
                <span className="font-medium whitespace-nowrap text-base lg:text-lg">1000+ active drivers</span>
              </div>

              <div className="h-6 w-px bg-border-subtle hidden lg:block"></div>

              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-medium whitespace-nowrap text-base lg:text-lg">4.8 rating</span>
              </div>

              <div className="h-6 w-px bg-border-subtle hidden lg:block"></div>

              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium whitespace-nowrap text-base lg:text-lg">385,000+ safe miles tracked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
