import React from 'react';

export default function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'Support & FAQ', href: '#support' },
      { label: 'Blog', href: '#blog' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Whitepaper', href: '#whitepaper' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: '#',
    },
    {
      name: 'X',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      href: '#',
    },
  ];

  return (
    <footer className="relative border-t border-border-subtle bg-bg-secondary/30 backdrop-blur-xl flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24">

        {/* Main Footer Content - Luxury grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16">

          {/* Brand Column - Luxury emphasis */}
          <div className="md:col-span-5">
            <div className="mb-8">
              <h3 className="font-display font-black text-4xl md:text-5xl mb-6">
                <span className="text-gradient-primary">ZENLIT</span>
              </h3>
              <p className="text-text-secondary font-body text-lg leading-relaxed max-w-sm">
                Transforming safe driving into tangible rewards. Join the future of driver incentives.
              </p>
            </div>

            {/* Social Links - Refined luxury */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="
                    w-12
                    h-12
                    rounded-full
                    glass-luxury
                    border
                    border-border-medium
                    flex
                    items-center
                    justify-center
                    text-text-secondary
                    hover:text-white
                    hover:border-primary
                    hover:bg-primary/10
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                    hover:shadow-primary/20
                    group
                  "
                  aria-label={social.name}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - Luxury spacing */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-12">

              {/* Company Links */}
              <div>
                <h4 className="font-display font-bold text-lg mb-6 text-white tracking-wide">
                  Company
                </h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="
                          text-text-secondary
                          hover:text-primary
                          font-body
                          transition-all
                          duration-200
                          inline-flex
                          items-center
                          gap-2
                          group
                        "
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.label}
                        </span>
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="font-display font-bold text-lg mb-6 text-white tracking-wide">
                  Legal
                </h4>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="
                          text-text-secondary
                          hover:text-primary
                          font-body
                          transition-all
                          duration-200
                          inline-flex
                          items-center
                          gap-2
                          group
                        "
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                          {link.label}
                        </span>
                        <svg
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Luxury refinement */}
        <div className="pt-12 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Disclaimer */}
            <p className="text-text-muted font-body text-sm leading-relaxed max-w-2xl text-center md:text-left order-2 md:order-1">
              Rewards are not insurance discounts. Terms apply.
            </p>

            {/* Decorative accent */}
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-2 text-text-dim text-xs">
                <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                <span className="font-medium tracking-wider uppercase">Zenlit 2024</span>
                <div className="w-2 h-2 rounded-full bg-accent-gold/30"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
