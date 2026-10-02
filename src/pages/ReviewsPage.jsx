import React, { useEffect, useState } from 'react';
import Reveal from '../components/common/Reveal.jsx';
import ReviewModal from '../components/common/ReviewModal.jsx';
import { restaurantInfo } from '../data/restaurantInfo.js';
import { reviews as fallbackReviews } from '../data/reviews.js';
import { reviewsApi } from '../services/api.js';

export default function ReviewsPage({ onNavigate }) {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchReviews = async () => {
        try {
            setIsLoading(true);

            const data = await reviewsApi.getApprovedReviews();

            if (data && Array.isArray(data.reviews)) {
                setReviews(data.reviews);
            } else {
                setReviews([]);
            }
        } catch (error) {
            console.warn('Unable to load reviews:', error.message);
            setReviews([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const displayedReviews =
        reviews.length > 0
            ? reviews.map((review, index) => ({
                id: review._id,
                author: review.userName,
                rating: review.rating,
                quote: review.reviewText,
                avatar: review.userName
                    ? review.userName.charAt(0).toUpperCase()
                    : 'D',
                avatarBg:
                    index % 2 === 0
                        ? 'bg-primary text-on-primary'
                        : 'bg-secondary-container text-on-secondary-container',
            }))
            : fallbackReviews;

    return (
        <main className="min-h-screen bg-surface text-on-surface">

            {/* Page Header */}
            <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
                <div className="max-w-7xl mx-auto px-gutter">

                    <Reveal className="max-w-3xl">
                        <button
                            type="button"
                            onClick={() => {
                                if (onNavigate) {
                                    onNavigate('/');
                                } else {
                                    window.location.href = '/';
                                }
                            }}
                            className="inline-flex items-center gap-2 mb-space-lg font-label-sm text-label-sm uppercase tracking-widest text-primary hover:brightness-125 transition-all"
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                arrow_back
                            </span>
                            Back to Home
                        </button>

                        <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary mb-space-xs block">
                            Customer Reviews
                        </span>

                        <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-tight">
                            Customer Experiences
                        </h1>

                        <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mt-space-sm max-w-2xl">
                            Read genuine customer reviews and experiences from Kozhihood in Erode.
                        </p>
                    </Reveal>

                    {/* Discovery + Write Review */}
                    <Reveal
                        delay={120}
                        className="mt-space-xl flex flex-col sm:flex-row sm:items-center justify-between gap-space-md"
                    >
                        <div className="flex flex-wrap items-center gap-space-sm">
                            <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high w-fit">
                                <span className="material-symbols-outlined text-primary text-[20px]">
                                    verified
                                </span>
                                <span className="font-label-md text-label-md font-bold text-on-surface">
                                    Verified Diner Feedback
                                </span>
                            </div>

                            <a
                                href={restaurantInfo.links.googleMaps}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface text-xs font-label-sm uppercase tracking-wider transition-colors"
                            >
                                <span className="material-symbols-outlined text-secondary text-[16px]">
                                    map
                                </span>
                                <span>Find Us on Google Maps</span>
                            </a>
                        </div>

                        <button
                            type="button"
                            onClick={() => setIsReviewModalOpen(true)}
                            className="inline-flex items-center justify-center gap-2 px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider hover:brightness-110 transition-all shadow-sm font-bold"
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                edit
                            </span>
                            Write a Review
                        </button>
                    </Reveal>
                </div>
            </section>

            {/* Reviews */}
            <section className="pb-20 lg:pb-32">
                <div className="max-w-7xl mx-auto px-gutter">

                    {isLoading ? (
                        <div className="py-20 text-center">
                            <span className="font-body-md text-body-md text-on-surface-variant">
                                Loading reviews...
                            </span>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                            {displayedReviews.map((review, index) => (
                                <Reveal
                                    key={review.id || index}
                                    delay={index * 80}
                                    className="bg-surface-container-low p-space-xl rounded-lg shadow-lg flex flex-col justify-between min-h-[260px]"
                                >
                                    <div>
                                        <div className="flex items-center gap-1 text-secondary mb-space-md">
                                            {Array.from({
                                                length: review.rating || 5,
                                            }).map((_, starIndex) => (
                                                <span
                                                    key={starIndex}
                                                    className="material-symbols-outlined text-[20px]"
                                                    style={{
                                                        fontVariationSettings: "'FILL' 1",
                                                    }}
                                                >
                                                    star
                                                </span>
                                            ))}
                                        </div>

                                        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                                            “{review.quote}”
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-space-sm mt-space-lg">
                                        <div
                                            className={`w-10 h-10 rounded-full ${review.avatarBg ||
                                                'bg-primary text-on-primary'
                                                } flex items-center justify-center font-bold`}
                                        >
                                            {review.avatar}
                                        </div>

                                        <div>
                                            <h5 className="font-label-md text-label-md font-bold text-on-surface">
                                                {review.author}
                                            </h5>

                                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                                                Verified Kozhihood Diner
                                            </span>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    )}

                </div>
            </section>

            {/* Review Modal */}
            <ReviewModal
                isOpen={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                onNavigate={onNavigate}
                onReviewSubmitted={fetchReviews}
            />
        </main>
    );
}