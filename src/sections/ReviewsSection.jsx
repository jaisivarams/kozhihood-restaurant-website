import React, { useState, useEffect } from 'react';
import Reveal from '../components/common/Reveal.jsx';
import ReviewModal from '../components/common/ReviewModal.jsx';
import { restaurantInfo } from '../data/restaurantInfo.js';
import { reviews as fallbackReviews } from '../data/reviews.js';
import { reviewsApi } from '../services/api.js';

/**
 * Reviews Section displaying the Google Rating badge, external review actions,
 * interactive Review submission modal, and diner testimonial cards with subtle stagger reveal.
 * Fetches approved reviews from the backend database with fallback to curated initial testimonials.
 */
export default function ReviewsSection({ onNavigate }) {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [dbReviews, setDbReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(false);

  // Fetch approved reviews from backend API
  const fetchApprovedReviews = async () => {
    try {
      setIsLoadingReviews(true);
      const data = await reviewsApi.getApprovedReviews();
      if (data && Array.isArray(data.reviews) && data.reviews.length > 0) {
        setDbReviews(data.reviews);
      }
    } catch (err) {
      // Graceful fallback to static reviews if backend/db is not active yet
      console.warn('Backend reviews unavailable, displaying curated reviews:', err.message);
    } finally {
      setIsLoadingReviews(false);
    }
  };

  useEffect(() => {
    fetchApprovedReviews();
  }, []);

  // Display database approved reviews first, merged with curated fallback reviews up to at least 3
  const displayedReviews = dbReviews.length > 0
    ? dbReviews.map((r, i) => ({
      id: r._id,
      author: r.userName,
      badge: 'Verified Kozhihood Diner',
      avatar: r.userName ? r.userName[0].toUpperCase() : 'D',
      avatarBg: i % 2 === 0 ? 'bg-primary text-on-primary' : 'bg-secondary-container text-on-secondary-container',
      rating: r.rating,
      quote: `“${r.reviewText}”`
    }))
    : fallbackReviews;

  return (
    <section className="w-full py-20 lg:py-28 bg-surface" id="reviews">
      <div className="max-w-7xl mx-auto px-gutter">
        {/* Header with Customer Experience Badge and CTAs */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high mb-space-sm shadow-sm">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
              >
                rate_review
              </span>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                Customer Experiences • Erode
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">
              Customer Experiences
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mt-space-xs">
              Read genuine customer reviews and experiences from Kozhihood on Park Road, Erode.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-space-sm">
            <a
              className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-surface-container-high hover:bg-surface-bright text-on-surface font-label-md text-label-md uppercase tracking-wider transition-colors shadow-sm font-bold"
              href="/reviews"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('/reviews');
              }}
            >
              <span className="material-symbols-outlined text-secondary text-[18px]">
                reviews
              </span>
              <span>VIEW OUR REVIEWS</span>
            </a>
            <button
              className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider hover:brightness-110 transition-all shadow-sm cursor-pointer font-bold"
              onClick={() => setIsReviewModalOpen(true)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">edit</span>
              <span>WRITE A REVIEW</span>
            </button>
          </div>
        </Reveal>

        {/* Reviews Cards Grid with Subtle Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {displayedReviews.slice(0, 6).map((r, index) => (
            <Reveal
              key={r.id || index}
              delay={index * 120}
              className="bg-surface-container-low p-space-xl rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-secondary mb-space-md">
                  {Array.from({ length: r.rating || 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface mb-space-lg leading-relaxed">
                  {r.quote}
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-sm">
                <div
                  className={`w-10 h-10 rounded-full ${r.avatarBg || 'bg-primary text-on-primary'} flex items-center justify-center font-bold`}
                >
                  {r.avatar}
                </div>
                <div>
                  <h5 className="font-label-md text-label-md font-bold text-on-surface">
                    {r.author}
                  </h5>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {r.badge}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Review Submission Modal */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onNavigate={onNavigate}
        onReviewSubmitted={fetchApprovedReviews}
      />
    </section>
  );
}
