import React, { useState } from 'react';
import Logo from '../components/Logo.jsx';
import { useAuth } from '../context/AuthContext.jsx';

/**
 * Simplified Navbar Header containing ONLY:
 * Home | About | Contact | Sign In | Order Now
 *
 * Menu is accessed exclusively via the VIEW FULL MENU button on the homepage.
 */
export default function Navbar({ onOpenOrder, currentPath = '/', onNavigate }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL?.trim().toLowerCase();

  const isAdmin =
    isAuthenticated &&
    user?.email?.trim().toLowerCase() === adminEmail;

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  function handleSectionClick(e, href) {
    e.preventDefault();
    setMobileDrawerOpen(false);

    if (currentPath !== '/') {
      if (onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          const elem = document.querySelector(href);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      const elem = document.querySelector(href);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleLogoClick(e) {
    e.preventDefault();
    setMobileDrawerOpen(false);
    if (currentPath !== '/') {
      if (onNavigate) onNavigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleSignInClick(e) {
    e.preventDefault();
    setMobileDrawerOpen(false);
    if (onNavigate) onNavigate('/login');
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 w-full max-w-7xl mx-auto px-gutter flex items-center justify-between gap-space-md">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-md">
          <a
            className="flex items-center gap-2"
            href="/"
            onClick={handleLogoClick}
          >
            <img
              src="/kozhihood-logo.png"
              alt="Kozhihood Logo"
              className="h-8 w-auto object-contain"
            />

            <span className="font-headline-sm uppercase tracking-wider text-on-surface">
              KOZHIHOOD
            </span>
          </a>
        </div>

        {/* Desktop Navigation Links: Home | About | Contact */}
        <nav
          className="hidden md:flex items-center gap-space-xs p-space-xs rounded-full bg-surface-container-lowest/60 backdrop-blur-md"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Sign In / User Profile | Order Now */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          {isAuthenticated ? (
            <div className="flex items-center gap-space-sm">
              {isAdmin && (
                <button
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    if (onNavigate) onNavigate('/admin/reviews');
                  }}
                  className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:brightness-110 hover:shadow-[0_12px_28px_-4px_rgba(255,87,34,0.6)] transition-all"
                  type="button"
                >
                  Admin Reviews
                </button>
              )}
              <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                <span className="material-symbols-outlined text-primary text-[18px]">account_circle</span>
                <span className="max-w-[120px] truncate">{user?.name}</span>
              </span>
              <button
                className="px-space-xs py-space-xs font-label-sm text-xs text-on-surface-variant hover:text-error transition-colors uppercase tracking-wider font-semibold"
                onClick={logout}
                type="button"
                title="Sign Out"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              className="px-space-md py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-semibold"
              onClick={handleSignInClick}
              type="button"
            >
              Sign In
            </button>
          )}

          {/* Order Now CTA Action Button */}
          <button
            className="inline-flex items-center justify-center px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:brightness-110 hover:shadow-[0_12px_28px_-4px_rgba(255,87,34,0.6)] transition-all"
            onClick={() => onOpenOrder && onOpenOrder()}
            type="button"
          >
            Order Now
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden p-space-xs rounded-full text-on-surface hover:bg-surface-container-high transition-colors ml-1"
            onClick={() => setMobileDrawerOpen((prev) => !prev)}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileDrawerOpen}
          >
            <span className="material-symbols-outlined">
              {mobileDrawerOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Home | About | Contact | Sign In / User | Order Now) */}
      {mobileDrawerOpen && (
        <div
          className="md:hidden bg-surface-container-low px-gutter py-space-lg shadow-2xl animate-in slide-in-from-top-2 duration-200"
          id="mobile-drawer"
        >
          <nav className="flex flex-col gap-space-sm" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="px-space-md py-space-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface"
              >
                {link.label}
              </a>
            ))}
            {isAdmin && (
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  if (onNavigate) onNavigate('/admin/reviews');
                }}
                className="px-space-md py-space-xs rounded-full bg-primary-container text-on-primary-container font-label-sm uppercase tracking-wider font-semibold hover:brightness-110 transition-all"
                type="button"
              >
                Admin Reviews
              </button>
            )}
            {isAuthenticated ? (
              <div className="px-space-md py-space-sm flex items-center justify-between border-t border-surface-container-high/40 mt-1 pt-3">
                <span className="font-label-md text-label-md text-on-surface flex items-center gap-1.5 font-semibold">
                  <span className="material-symbols-outlined text-primary text-[18px]">account_circle</span>
                  <span>{user?.name}</span>
                </span>
                <button
                  onClick={() => {
                    logout();
                    setMobileDrawerOpen(false);
                  }}
                  className="font-label-sm text-xs text-error font-semibold uppercase tracking-wider"
                  type="button"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={handleSignInClick}
                className="text-left px-space-md py-space-sm font-label-md text-label-md text-primary font-semibold"
                type="button"
              >
                Sign In
              </button>
            )}
          </nav>

          <div className="mt-space-md pt-space-md border-t border-surface-container-high/40 flex flex-col gap-space-sm">
            <button
              className="w-full text-center py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider"
              onClick={() => {
                setMobileDrawerOpen(false);
                if (onOpenOrder) onOpenOrder();
              }}
              type="button"
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
