import React from 'react';

/**
 * Compact MenuItemCard for the full menu.
 * Displays food image, dish name, price, description,
 * category tag, and order button.
 */
export default function MenuItemCard({ item, onOrder }) {
  const { name, tag, description, image } = item;

  return (
    <div className="bg-surface-container-low/90 border border-surface-container-high/60 p-space-md rounded-DEFAULT shadow-sm hover:bg-surface-container hover:border-outline-variant/40 transition-all duration-200">
      <div className="flex gap-space-md">
        {/* Food Image */}
        <div className="w-24 h-24 shrink-0 overflow-hidden rounded-lg bg-surface-container-high">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Food Details */}
        <div className="min-w-0 flex-1 flex flex-col">
          {/* Name + Price */}
          {/* Dish Name */}
          <div>
            <h4 className="font-label-lg text-base font-bold text-on-surface leading-snug">
              {name}
            </h4>
          </div>

          {/* Description */}
          {description && (
            <p className="font-body-sm text-[13px] text-on-surface-variant line-clamp-2 leading-relaxed mt-1">
              {description}
            </p>
          )}

          {/* Tag + Order */}
          <div className="flex items-center justify-between pt-space-xs mt-auto">
            <span className="font-label-sm text-[11px] uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-semibold">
              {tag}
            </span>

            <button
              className="px-3 py-1 rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface text-[12px] font-label-sm font-bold uppercase tracking-wider transition-colors"
              onClick={() => onOrder && onOrder(name)}
              type="button"
              aria-label={`Order ${name}`}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}