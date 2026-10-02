import React from 'react';
import { getImage } from '../data/imageRegistry.js';
import { restaurantInfo } from '../data/restaurantInfo.js';

/**
 * Hero Section featuring brand label, monumental headline hierarchy,
 * ambient glows, single Explore Menu navigation CTA, and circular biryani centerpiece.
 * Duplicate homepage ordering buttons and third-party delivery strips have been removed.
 */
export default function HeroSection({ onNavigate, onOpenOrder }) {
  const heroImage = getImage('heroBiryani');

  return (
    <section
      className="relative w-full overflow-hidden bg-surface-container-lowest pt-10 pb-20 lg:pt-16 lg:pb-32"
      id="home"
    >
      {/* Atmospheric Ambient Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary-container/15 blur-[140px] rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[450px] h-[450px] bg-secondary-container/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Location & Brand Pill */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high/80 backdrop-blur-md mb-space-md shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
                Restaurant in Erode, Tamil Nadu
              </span>
            </div>

            {/* Main Monumental Headline Hierarchy */}
            <h1 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tight mb-space-xs leading-[1.05]">
              KOZHIHOOD
            </h1>

            {/* Cuisines Headline */}
            <p className="font-headline-md text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed via-primary-container to-secondary mb-space-md">
              Biryani • Fried Rice • Noodles • Starters
            </p>

            {/* Supporting Local SEO Natural Copy */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-xl leading-relaxed">
              {restaurantInfo.heroDescription}
            </p>

            {/* Action Buttons: VIEW MENU + ORDER ONLINE + GET DIRECTIONS */}
            <div className="flex flex-wrap items-center gap-space-sm sm:gap-space-md mb-space-xs">
              {/* Primary 1: VIEW MENU */}
              <a
                className="inline-flex items-center gap-space-xs px-space-xl py-space-md rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:scale-[1.02] hover:brightness-110 transition-all duration-200 cursor-pointer font-bold"
                href="/menu"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('/menu');
                }}
              >
                <span>VIEW MENU</span>
                <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
              </a>

              {/* Primary 2: ORDER ONLINE */}
              <button
                type="button"
                className="inline-flex items-center gap-space-xs px-space-xl py-space-md rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-lg text-label-lg uppercase tracking-wider border border-surface-container-highest shadow-sm hover:scale-[1.02] transition-all duration-200 cursor-pointer font-bold"
                onClick={() => onOpenOrder && onOpenOrder('')}
              >
                <span>ORDER ONLINE</span>
                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
              </button>

              {/* Secondary Location Action: GET DIRECTIONS */}
              <a
                className="inline-flex items-center gap-space-xs px-space-lg py-space-md rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all duration-200 cursor-pointer"
                href={restaurantInfo.links.googleMaps}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-secondary text-[20px]">directions</span>
                <span>GET DIRECTIONS</span>
              </a>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[460px] aspect-square rounded-full bg-surface-container-low/60 p-4 shadow-2xl flex items-center justify-center">
              {/* Inner Glowing Circle Backdrop */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-primary-container/20 to-secondary-container/10 blur-xl"></div>

              {/* Hero Image */}
              <img
                className="w-full h-full object-cover rounded-full shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                src={heroImage.url}
                alt={heroImage.alt}
              />

              {/* Floating Badge 1 */}
              <div className="absolute -top-3 -left-2 z-20 flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-high/90 backdrop-blur-md shadow-xl">
                <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  100% Fresh Daily
                </span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 right-2 z-20 flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-container-high/90 backdrop-blur-md shadow-xl">
                <span className="material-symbols-outlined text-primary-container text-[18px]">
                  local_fire_department
                </span>
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  Signature Spices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
