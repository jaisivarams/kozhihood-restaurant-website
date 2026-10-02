import React from 'react';
import MenuSection from '../sections/MenuSection.jsx';

/**
 * Separate /menu page.
 * Displays all 20 Kozhihood dishes in the clean, compact card layout
 * with category filtering (All, Briyani's, Fried Rice & Noodles, Starters).
 */
export default function MenuPage({ onOpenOrder, onNavigate }) {
  return (
    <div className="pt-24 pb-20 bg-surface min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-gutter mb-space-md">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm mb-space-xs"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Home</span>
        </button>
      </div>

      {/* The 20-item Compact Menu Section */}
      <MenuSection onOpenOrder={onOpenOrder} />
    </div>
  );
}
