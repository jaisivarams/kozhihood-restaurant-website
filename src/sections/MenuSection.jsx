import React, { useState } from 'react';
import MenuItemCard from '../components/food/MenuItemCard.jsx';
import { menuCategories, menuItems } from '../data/menuItems.js';

/**
 * Secondary Compact Menu Section.
 * Designed to cleanly display all 20 items with category filtering
 * without competing with the primary photographic Crave-Worthy Dishes showcase.
 */
export default function MenuSection({ onOpenOrder }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      className="w-full py-14 lg:py-20 bg-surface-container-lowest border-y border-surface-container-high/30"
      id="menu"
    >
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Section Header - Clean and Restrained */}
        <div className="flex flex-col items-center text-center mb-space-lg">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-space-xs">
            OUR KITCHEN CODEX
          </span>
          <h2 className="font-headline-md text-2xl lg:text-3xl text-on-surface uppercase mb-space-xs">
            Explore the Menu
          </h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg">
            Handcrafted daily with authentic ingredients. Order online via Zomato or Swiggy, or visit us in Erode.
          </p>

          {/* Compact Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-space-xs mt-space-md p-1 rounded-full bg-surface-container-low/90 border border-surface-container-high/60 backdrop-blur-md">
            {menuCategories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  className={`px-space-md py-1 rounded-full font-label-sm text-[12px] font-bold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container shadow-sm'
                      : 'hover:text-on-surface text-on-surface-variant'
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Compact 20-Item Menu Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-sm lg:gap-space-md"
          id="menu-items-grid"
        >
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-item-card h-full">
              <MenuItemCard item={item} onOrder={onOpenOrder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
