import React from 'react';
import Reveal from '../components/common/Reveal.jsx';
import { getImage } from '../data/imageRegistry.js';
import { restaurantInfo } from '../data/restaurantInfo.js';

/**
 * About Section ("Our Heritage") showcasing brand story, 3 hallmark feature cards,
 * and a 4-image staggered culinary visual collage.
 * Smoothly revealed as the user scrolls into view.
 */
export default function AboutSection() {
  const { about } = restaurantInfo;
  const wokToss = getImage('aboutWokToss');
  const wholeSpices = getImage('aboutWholeSpices');
  const dumPot = getImage('aboutDumPot');
  const friedChicken = getImage('aboutFriedChicken');

  return (
    <section className="w-full py-20 lg:py-32 bg-surface" id="about">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <Reveal>
              <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary mb-space-xs block">
                {about.sectionTag}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-space-lg leading-tight">
                {about.heading}
                <br />
                <span className="text-primary-container">{about.headingAccent}</span>
              </h2>

              <div className="space-y-space-md text-on-surface-variant font-body-md text-body-md leading-relaxed">
                {about.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
                <p className="font-headline-sm text-headline-sm text-secondary font-bold pt-space-xs">
                  {about.closingMotto}
                </p>
              </div>
            </Reveal>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-space-sm w-full mt-space-xl pt-space-md">
              {about.highlights.map((h, idx) => (
                <Reveal
                  key={idx}
                  delay={idx * 100}
                  className="bg-surface-container p-space-md rounded-DEFAULT text-center shadow-sm"
                >
                  <span
                    className={`material-symbols-outlined text-[28px] mb-1 ${h.colorClass}`}
                  >
                    {h.icon}
                  </span>
                  <h5 className="font-label-md text-label-md font-bold text-on-surface">
                    {h.title}
                  </h5>
                  <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                    {h.subtitle}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Side Visual Collage */}
          <Reveal delay={150} className="lg:col-span-6 grid grid-cols-2 gap-space-md relative">
            <div className="space-y-space-md">
              <div className="relative rounded-lg overflow-hidden h-64 bg-surface-container shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src={wokToss.url}
                  alt={wokToss.alt}
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-44 bg-surface-container shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src={wholeSpices.url}
                  alt={wholeSpices.alt}
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-space-md pt-8">
              <div className="relative rounded-lg overflow-hidden h-44 bg-surface-container shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src={dumPot.url}
                  alt={dumPot.alt}
                  loading="lazy"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden h-64 bg-surface-container shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src={friedChicken.url}
                  alt={friedChicken.alt}
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
