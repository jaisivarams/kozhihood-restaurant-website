import React from 'react';
import Logo from '../components/Logo.jsx';
import { restaurantInfo } from '../data/restaurantInfo.js';

/**
 * Clean Footer Section.
 * Contains only actual restaurant contact information, social links,
 * address, operating info, and standard copyright links.
 * All Zomato/Swiggy ordering/delivery promotions have been removed.
 */
export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest text-on-surface pt-space-xl pb-space-lg">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl mb-space-xl">
          {/* Brand Bio */}
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <span className="font-headline-sm text-headline-sm uppercase tracking-wide text-on-surface">
                {restaurantInfo.name}
              </span>
            </div>
            <p className="font-headline-md text-headline-sm text-primary mb-space-sm">
              {restaurantInfo.tagline}
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              An intense wood-fire nocturnal dining ritual crafted with slow-dum precision in Erode.
            </p>
          </div>

          {/* Visit & Contact */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">
              Visit &amp; Contact
            </h4>
            <div className="font-body-md text-body-md text-on-surface mb-space-sm leading-snug">
              <p>Divya Complex, Main Branch</p>
              <p>14, Park Rd, near IOB Bank</p>
              <p>opposite Ellai Mariyamman Kovil</p>
              <p>Erode, Tamil Nadu 638003</p>
            </div>
            <p className="font-body-md text-body-md text-secondary font-semibold mb-space-xs">
              <a href={restaurantInfo.contact.phoneTel} className="hover:underline">
                {restaurantInfo.contact.phoneDisplay}
              </a>
            </p>
            <div className="mt-space-sm">
              <a
                href={restaurantInfo.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-label-sm uppercase tracking-wider text-primary hover:underline font-bold"
              >
                <span className="material-symbols-outlined text-[16px]">directions</span>
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Connect & Socials */}
          <div>
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-md">Connect</h4>
            <div className="flex flex-wrap gap-space-sm mb-space-lg">
              <a
                className="p-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                href={restaurantInfo.links.googleMaps}
                rel="noopener noreferrer"
                target="_blank"
                title="Google Maps"
              >
                <span className="material-symbols-outlined text-[20px]">map</span>
              </a>
              <a
                className="p-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                href={restaurantInfo.links.googleMaps}
                rel="noopener noreferrer"
                target="_blank"
                title="Reviews"
              >
                <span className="material-symbols-outlined text-[20px]">star</span>
              </a>
              <a
                className="p-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                href={restaurantInfo.links.instagram}
                rel="noopener noreferrer"
                target="_blank"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.7 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
              <a
                className="p-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
                href={restaurantInfo.contact.phoneTel}
                title="Phone"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Tag your experiences with {restaurantInfo.socialHashtag}
            </p>
          </div>
        </div>

        {/* Bottom Legal & Rights */}
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-surface-container-high/40">
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            {restaurantInfo.copyright}
          </p>
          <div className="flex gap-space-md">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" href="#home">
              Terms &amp; Conditions
            </a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface" href="#home">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
