import React, { useEffect } from 'react';
import { restaurantInfo } from '../../data/restaurantInfo.js';

/**
 * Reusable Order Modal component.
 * Prompts user to select their delivery or takeaway channel (Zomato, Swiggy, Direct Phone).
 * Preserves exact styling, icons, and platform branding.
 */
export default function OrderModal({ isOpen, onClose, dishName }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-gutter bg-surface-container-lowest/80 backdrop-blur-md transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-title"
    >
      <div className="relative w-full max-w-md bg-surface-container-low p-space-xl rounded-lg shadow-2xl text-on-surface animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-space-xs rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          onClick={onClose}
          type="button"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-space-lg">
          <div className="w-12 h-12 mx-auto rounded-full bg-primary-container/20 flex items-center justify-center mb-space-sm">
            <span className="material-symbols-outlined text-primary-container text-[28px]">
              moped
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider block">
            Kozhihood Delivery &amp; Takeaway
          </span>
          <h3
            className="font-headline-sm text-headline-sm text-on-surface uppercase mt-1"
            id="modal-dish-title"
          >
            {dishName ? `Order: ${dishName}` : 'Select Delivery Platform'}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            Order your hot, authentic meal directly on your preferred service.
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-space-md">
          {/* Zomato Option */}
          <a
            className="flex items-center justify-between p-space-md rounded-DEFAULT bg-surface-container hover:bg-surface-container-high transition-colors shadow-sm group"
            href={restaurantInfo.links.zomato}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-error-container text-on-error-container flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">restaurant</span>
              </div>
              <div className="text-left">
                <h5 className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">
                  Order on Zomato
                </h5>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Live tracking • Erode Branch
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </a>

          {/* Swiggy Option */}
          <a
            className="flex items-center justify-between p-space-md rounded-DEFAULT bg-surface-container hover:bg-surface-container-high transition-colors shadow-sm group"
            href={restaurantInfo.links.swiggy}
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">sports_motorsports</span>
              </div>
              <div className="text-left">
                <h5 className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">
                  Order on Swiggy
                </h5>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Superfast doorstep delivery
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              arrow_forward
            </span>
          </a>

          {/* Direct Phone Desk */}
          <a
            className="flex items-center justify-between p-space-md rounded-DEFAULT bg-surface-container hover:bg-surface-container-high transition-colors shadow-sm group"
            href={restaurantInfo.contact.phoneTel}
          >
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </div>
              <div className="text-left">
                <h5 className="font-label-md text-label-md font-bold text-on-surface group-hover:text-primary transition-colors">
                  Call Restaurant Direct
                </h5>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Takeaway • {restaurantInfo.contact.phoneDisplay}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              phone_in_talk
            </span>
          </a>
        </div>

        {/* Footer Dismiss */}
        <div className="mt-space-lg text-center">
          <button
            className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface underline"
            onClick={onClose}
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
