'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import GlowText from './GlowText';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#features', label: 'Features' },
    { href: '#mission', label: 'Our Mission' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        bg-bg-secondary/95
        backdrop-blur-md
        shadow-lg
        ${scrolled
          ? 'border-b border-primary/30'
          : 'border-b border-primary/10'
        }
      `}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 h-full py-1">
            <Image
              src="/Zenlit logo.png"
              alt="Zenlit Logo"
              width={144}
              height={144}
              className="h-full w-auto object-contain"
            />
            <h1 className="text-3xl md:text-4xl font-display font-black tracking-tight text-primary">
              ZENLIT
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  text-[var(--text-secondary)]
                  hover:text-primary
                  font-body
                  font-medium
                  transition-all
                  duration-300
                  relative
                  group
                  whitespace-nowrap
                `}
              >
                {link.label}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-primary
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon-lime hover:text-primary transition-colors duration-300 relative z-50"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden
          fixed
          top-16
          left-0
          right-0
          bg-bg-secondary/98
          backdrop-blur-lg
          border-b
          border-primary/30
          shadow-2xl
          transition-all
          duration-300
          ease-in-out
          overflow-hidden
          ${mobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
          }
        `}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavLinkClick}
              className={`
                block
                text-[var(--text-secondary)]
                hover:text-primary
                font-body
                font-medium
                text-lg
                py-3
                px-4
                rounded-lg
                transition-all
                duration-300
                hover:bg-primary/10
                hover:pl-6
                border-l-4
                border-transparent
                hover:border-primary
                ${mobileMenuOpen ? 'animate-slide-in' : ''}
              `}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 top-16"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
