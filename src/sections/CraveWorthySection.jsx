import React from 'react';
import DishCard from '../components/food/DishCard.jsx';
import Reveal from '../components/common/Reveal.jsx';
import { craveDishes } from '../data/craveDishes.js';

/**
 * Crave-Worthy Dishes Section.
 * Main visual food showcase featuring 6 signature cards followed by
 * the prominent VIEW FULL MENU button navigating to the separate /menu page.
 * Uses subtle scroll reveal animations with staggered card entries.
 */
export default function CraveWorthySection({ onOpenOrder, onNavigate }) {
  return (
    <section className="w-full py-20 lg:py-28 bg-surface" id="crave-worthy">
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary mb-space-xs block">
              CHEF'S SIGNATURES
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              Crave-Worthy Dishes
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Your favourites, made to satisfy every craving with wood-fire intensity, wok-tossed
            perfection, and Kongu culinary pride.
          </p>
        </Reveal>

        {/* 6 Dish Cards Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {craveDishes.map((dish, index) => (
            <Reveal key={dish.id} delay={(index % 3) * 100}>
              <DishCard dish={dish} onOrder={onOpenOrder} />
            </Reveal>
          ))}
        </div>

        {/* Prominent VIEW FULL MENU CTA */}
        <Reveal delay={150} className="mt-space-xl flex justify-center">
          <a
            href="/menu"
            className="inline-flex items-center gap-space-xs px-space-xl py-space-md rounded-full bg-primary-container text-on-primary-container font-label-lg text-label-lg uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:scale-[1.02] hover:brightness-110 transition-all duration-200 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('/menu');
            }}
          >
            <span>VIEW FULL MENU</span>
            <span className="material-symbols-outlined text-[20px]">restaurant_menu</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
