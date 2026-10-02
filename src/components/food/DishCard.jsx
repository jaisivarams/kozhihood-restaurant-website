import React from 'react';
import { getImage } from '../../data/imageRegistry.js';

/**
 * Reusable DishCard for Crave-Worthy signature dishes.
 * Keeps all cards at a consistent height while preserving
 * the existing visual design and interactions.
 */
export default function DishCard({ dish, onOrder }) {
  const {
    name,
    tag,
    tagClass,
    spiceCount = 0,
    spiceTitle = '',
    spiceColor = 'text-primary-container',
    imageKey,
    description,
  } = dish;

  const image = getImage(imageKey);

  return (
    <div className="group flex flex-col h-full bg-surface-container-low rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative w-full h-64 shrink-0 overflow-hidden bg-surface-container">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={image.url}
          alt={image.alt || name}
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent pointer-events-none"></div>

        {tag && (
          <span
            className={`absolute top-4 left-4 px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wide font-bold ${tagClass}`}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Content Details */}
      <div className="p-space-lg flex flex-col flex-1 min-h-[190px]">
        <div>
          <div className="flex items-center justify-between mb-space-xs gap-2">
            <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
              {name}
            </h3>

            {spiceCount > 0 && (
              <span
                className={`inline-flex items-center gap-1 shrink-0 ${spiceColor}`}
                title={spiceTitle}
              >
                {Array.from({ length: spiceCount }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[16px]"
                  >
                    local_fire_department
                  </span>
                ))}
              </span>
            )}
          </div>

          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-lg line-clamp-2">
            {description}
          </p>
        </div>

        {/* Action Button */}
        <button
          className="w-full mt-auto py-space-sm rounded-full bg-surface-container-high hover:bg-primary-container hover:text-on-primary-container text-on-surface font-label-md text-label-md uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2"
          onClick={() => onOrder && onOrder(name)}
          type="button"
        >
          <span>ORDER NOW</span>
          <span className="material-symbols-outlined text-[18px]">
            shopping_bag
          </span>
        </button>
      </div>
    </div>
  );
}