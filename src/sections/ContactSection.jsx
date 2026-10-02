import React from 'react';
import Reveal from '../components/common/Reveal.jsx';
import { getImage } from '../data/imageRegistry.js';
import { restaurantInfo } from '../data/restaurantInfo.js';

/**
 * Contact & Location Section featuring restaurant address, phone desk,
 * opening hours, action buttons (Call, Directions, Instagram), and the map mockup card.
 * Smoothly reveals upon scrolling.
 */
export default function ContactSection({ onOpenOrder }) {
  const mapImage = getImage('mapPreview');

  return (
    <section className="w-full py-20 lg:py-28 bg-surface-container-lowest" id="contact">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Contact Info Card */}
          <Reveal className="lg:col-span-6 bg-surface-container-low p-space-xl rounded-lg shadow-2xl">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold mb-space-xs block">
              COME VISIT US
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-space-md leading-tight">
              Find Kozhihood
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
              Kozhihood is a restaurant in Erode serving biryani, fried rice, noodles, chicken and vegetarian starters. Visit us on Park Road or order online.
            </p>

            <div className="space-y-space-md mb-space-xl">
              {/* Restaurant Info */}
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary-container text-[20px]">
                    store
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Restaurant
                  </span>
                  <p className="font-headline-sm text-headline-sm text-on-surface">
                    {restaurantInfo.name.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[20px]">
                    location_on
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Address
                  </span>
                  <div className="font-body-md text-body-md text-on-surface leading-snug">
                    <p className="font-bold">Divya Complex, Main Branch</p>
                    <p>14, Park Rd</p>
                    <p>near IOB Bank</p>
                    <p>opposite Ellai Mariyamman Kovil</p>
                    <p>Erode, Tamil Nadu 638003</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Phone Desk
                  </span>
                  <p className="font-headline-sm text-headline-sm text-primary">
                    <a className="hover:underline" href={restaurantInfo.contact.phoneTel}>
                      {restaurantInfo.contact.phoneDisplay}
                    </a>
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">
                    schedule
                  </span>
                </div>
                <div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Service Timings
                  </span>
                  <p className="font-body-md text-body-md text-on-surface font-semibold">
                    {restaurantInfo.timings.display}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons Group: GET DIRECTIONS | CALL NOW | ORDER ONLINE */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs mb-space-lg">
              <a
                className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm font-bold"
                href={restaurantInfo.links.googleMaps}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-secondary text-[18px]">
                  directions
                </span>
                <span>GET DIRECTIONS</span>
              </a>

              <a
                className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm font-bold"
                href={restaurantInfo.contact.phoneTel}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>CALL NOW</span>
              </a>

              <button
                type="button"
                className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider font-bold shadow-md hover:brightness-110 transition-all cursor-pointer"
                onClick={() => onOpenOrder && onOpenOrder('')}
              >
                <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                <span>ORDER ONLINE</span>
              </button>
            </div>

            {/* Direct Platform Links */}
            <div className="pt-space-md border-t border-surface-container-high/60 flex flex-wrap items-center gap-space-sm text-xs font-label-sm text-on-surface-variant">
              <span>Order via:</span>
              <a
                href={restaurantInfo.links.zomato}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-surface-container hover:text-primary transition-colors font-semibold"
              >
                Zomato
              </a>
              <a
                href={restaurantInfo.links.swiggy}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-surface-container hover:text-primary transition-colors font-semibold"
              >
                Swiggy
              </a>
              <a
                href={restaurantInfo.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full bg-surface-container hover:text-primary transition-colors font-semibold ml-auto"
              >
                Instagram
              </a>
            </div>
          </Reveal>

          {/* Right Interactive Map Mockup Card */}
          <Reveal delay={150} className="lg:col-span-6 relative">
            <div className="bg-surface-container-low p-space-md rounded-lg shadow-2xl relative overflow-hidden">
              <div
                className="w-full h-96 rounded-DEFAULT bg-surface-container bg-cover bg-center relative"
                style={{ backgroundImage: `url('${mapImage.url}')` }}
              >
                {/* Dark Map Scrim */}
                <div className="absolute inset-0 bg-surface/40 backdrop-blur-[1px] rounded-DEFAULT"></div>

                {/* Floating Location Marker Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="bg-surface-container-high/95 backdrop-blur-md p-space-lg rounded-lg shadow-2xl max-w-sm text-center flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center mb-space-xs shadow-lg animate-bounce">
                      <span className="material-symbols-outlined text-[24px]">location_on</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase">
                      Kozhihood Erode
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 mb-space-md">
                      {restaurantInfo.location.landmark}
                    </p>
                    <a
                      className="w-full py-space-xs rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider font-bold shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                      href={restaurantInfo.links.googleMaps}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[16px]">navigation</span>
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
