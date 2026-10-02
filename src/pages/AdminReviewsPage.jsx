import React, { useEffect, useState } from 'react';
import Reveal from '../components/common/Reveal.jsx';
import { reviewsApi } from '../services/api.js';

export default function AdminReviewsPage({ onNavigate }) {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [actionId, setActionId] = useState(null);
    const [error, setError] = useState('');

    const fetchReviews = async () => {
        try {
            setIsLoading(true);
            setError('');

            const data = await reviewsApi.getAdminReviews();

            if (data && Array.isArray(data.reviews)) {
                setReviews(data.reviews);
            } else {
                setReviews([]);
            }
        } catch (err) {
            console.error('Failed to load admin reviews:', err);

            if (err.status === 401) {
                setError('Please sign in to access the admin review dashboard.');
            } else if (err.status === 403) {
                setError('You do not have admin access.');
            } else {
                setError(err.message || 'Failed to load reviews.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleApprove = async (reviewId) => {
        try {
            setActionId(reviewId);
            setError('');

            await reviewsApi.approveReview(reviewId);

            setReviews((currentReviews) =>
                currentReviews.map((review) =>
                    review._id === reviewId
                        ? { ...review, status: 'approved' }
                        : review
                )
            );
        } catch (err) {
            console.error('Failed to approve review:', err);
            setError(err.message || 'Failed to approve review.');
        } finally {
            setActionId(null);
        }
    };

    const handleReject = async (reviewId) => {
        try {
            setActionId(reviewId);
            setError('');

            await reviewsApi.rejectReview(reviewId);

            setReviews((currentReviews) =>
                currentReviews.map((review) =>
                    review._id === reviewId
                        ? { ...review, status: 'rejected' }
                        : review
                )
            );
        } catch (err) {
            console.error('Failed to reject review:', err);
            setError(err.message || 'Failed to reject review.');
        } finally {
            setActionId(null);
        }
    };

    const pendingReviews = reviews.filter(
        (review) => review.status === 'pending'
    );

    const approvedReviews = reviews.filter(
        (review) => review.status === 'approved'
    );

    const rejectedReviews = reviews.filter(
        (review) => review.status === 'rejected'
    );

    const renderStars = (rating) => {
        return (
            <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: rating || 0 }).map((_, index) => (
                    <span
                        key={index}
                        className="material-symbols-outlined text-[18px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                        star
                    </span>
                ))}
            </div>
        );
    };

    const renderReviewCard = (review) => (
        <Reveal
            key={review._id}
            className="bg-surface-container-low rounded-lg p-space-lg shadow-lg"
        >
            <div className="flex flex-col gap-space-md">

                {/* Customer */}
                <div className="flex items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                            {review.userName
                                ? review.userName.charAt(0).toUpperCase()
                                : 'D'}
                        </div>

                        <div>
                            <h3 className="font-label-md text-label-md font-bold text-on-surface">
                                {review.userName}
                            </h3>

                            <p className="font-label-sm text-label-sm text-on-surface-variant">
                                {new Date(review.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>

                    <span
                        className={`font-label-sm text-label-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full ${review.status === 'pending'
                                ? 'bg-secondary-container text-on-secondary-container'
                                : review.status === 'approved'
                                    ? 'bg-primary-container text-on-primary-container'
                                    : 'bg-surface-container-high text-on-surface-variant'
                            }`}
                    >
                        {review.status}
                    </span>
                </div>

                {/* Rating */}
                {renderStars(review.rating)}

                {/* Review text */}
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    “{review.reviewText}”
                </p>

                {/* Actions */}
                {review.status === 'pending' && (
                    <div className="flex flex-wrap gap-space-sm pt-space-sm">
                        <button
                            type="button"
                            disabled={actionId === review._id}
                            onClick={() => handleApprove(review._id)}
                            className="inline-flex items-center justify-center gap-2 px-space-lg py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md uppercase tracking-wider hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                check
                            </span>

                            {actionId === review._id ? 'Processing...' : 'Approve'}
                        </button>

                        <button
                            type="button"
                            disabled={actionId === review._id}
                            onClick={() => handleReject(review._id)}
                            className="inline-flex items-center justify-center gap-2 px-space-lg py-space-sm rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-bright transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                close
                            </span>

                            Reject
                        </button>
                    </div>
                )}
            </div>
        </Reveal>
    );

    return (
        <main className="min-h-screen bg-surface text-on-surface pt-28 pb-20 lg:pt-36 lg:pb-32">
            <div className="max-w-7xl mx-auto px-gutter">

                {/* Header */}
                <Reveal className="mb-space-xl">
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
                        Back to Website
                    </button>

                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary mb-space-xs block">
                        Admin Dashboard
                    </span>

                    <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase leading-tight">
                        Review Management
                    </h1>

                    <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed mt-space-sm max-w-2xl">
                        Review customer submissions for Kozhihood. Moderation ensures content authenticity, genuine diner experiences, and spam prevention.
                    </p>

                    {/* Moderation Policy Notice */}
                    <div className="mt-space-md p-space-md rounded-lg bg-surface-container-low border border-surface-container-high text-on-surface max-w-3xl">
                        <div className="flex items-start gap-space-sm">
                            <span className="material-symbols-outlined text-primary text-[22px] shrink-0 mt-0.5">
                                verified_user
                            </span>
                            <div className="space-y-1">
                                <h4 className="font-label-md text-sm font-bold uppercase tracking-wider text-primary">
                                    Moderation Policy (Authenticity & Trust)
                                </h4>
                                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                                    <strong className="text-on-surface">Allow genuine reviews of any rating:</strong> Do NOT reject a review simply because it is negative. Genuine 1-star, 2-star, or 3-star reviews must be approved and published.
                                </p>
                                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                                    <strong className="text-on-surface">Rejections are strictly reserved for:</strong> Spam, advertising, profanity/abuse, duplicate submissions, fraudulent/manipulative content, or clearly unrelated text.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Error */}
                {error && (
                    <div className="mb-space-lg rounded-lg bg-surface-container-high px-space-lg py-space-md text-on-surface">
                        <p className="font-body-md text-body-md">
                            {error}
                        </p>
                    </div>
                )}

                {/* Stats */}
                <Reveal
                    delay={80}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mb-space-xl"
                >
                    <div className="bg-surface-container-low rounded-lg p-space-lg">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                            Pending
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">
                            {pendingReviews.length}
                        </div>
                    </div>

                    <div className="bg-surface-container-low rounded-lg p-space-lg">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                            Approved
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">
                            {approvedReviews.length}
                        </div>
                    </div>

                    <div className="bg-surface-container-low rounded-lg p-space-lg">
                        <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                            Rejected
                        </span>
                        <div className="font-headline-sm text-headline-sm font-bold text-on-surface mt-2">
                            {rejectedReviews.length}
                        </div>
                    </div>
                </Reveal>

                {/* Loading */}
                {isLoading ? (
                    <div className="py-20 text-center">
                        <span className="font-body-md text-body-md text-on-surface-variant">
                            Loading reviews...
                        </span>
                    </div>
                ) : (
                    <>
                        {/* Pending */}
                        <section className="mb-space-xl">
                            <div className="flex items-end justify-between gap-space-md mb-space-lg">
                                <div>
                                    <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                                        Needs Attention
                                    </span>

                                    <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase mt-1">
                                        Pending Reviews
                                    </h2>
                                </div>
                            </div>

                            {pendingReviews.length === 0 ? (
                                <div className="bg-surface-container-low rounded-lg p-space-xl text-center">
                                    <span className="material-symbols-outlined text-[36px] text-primary">
                                        check_circle
                                    </span>

                                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                                        No pending reviews.
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                                    {pendingReviews.map(renderReviewCard)}
                                </div>
                            )}
                        </section>

                        {/* Approved */}
                        <section className="mb-space-xl">
                            <div className="mb-space-lg">
                                <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                                    Published
                                </span>

                                <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase mt-1">
                                    Approved Reviews
                                </h2>
                            </div>

                            {approvedReviews.length === 0 ? (
                                <div className="bg-surface-container-low rounded-lg p-space-xl text-center">
                                    <p className="font-body-md text-body-md text-on-surface-variant">
                                        No approved reviews yet.
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                                    {approvedReviews.map(renderReviewCard)}
                                </div>
                            )}
                        </section>

                        {/* Rejected */}
                        <section>
                            <div className="mb-space-lg">
                                <span className="font-label-sm text-label-sm font-bold uppercase tracking-widest text-primary">
                                    Not Published
                                </span>

                                <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface uppercase mt-1">
                                    Rejected Reviews
                                </h2>
                            </div>

                            {rejectedReviews.length === 0 ? (
                                <div className="bg-surface-container-low rounded-lg p-space-xl text-center">
                                    <p className="font-body-md text-body-md text-on-surface-variant">
                                        No rejected reviews.
                                    </p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                                    {rejectedReviews.map(renderReviewCard)}
                                </div>
                            )}
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}