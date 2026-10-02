import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { reviewsApi } from '../../services/api.js';

/**
 * Review Submission Modal for Kozhihood.
 * Requires authenticated user.
 * Submits review to POST /api/reviews with status "pending".
 */
export default function ReviewModal({ isOpen, onClose, onNavigate, onReviewSubmitted }) {
  const { user, isAuthenticated } = useAuth();

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when opening/closing
  useEffect(() => {
    if (isOpen) {
      setRating(5);
      setHoverRating(0);
      setReviewText('');
      setErrorMessage('');
      setIsSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isAuthenticated) return;

    if (!reviewText.trim()) {
      setErrorMessage('Please share a few words about your dining experience.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await reviewsApi.submitReview(rating, reviewText.trim());
      setIsSuccess(true);
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err) {
      const msg = err.data?.message || err.message || 'Failed to submit review. Please try again.';
      setErrorMessage(msg);
      setIsSubmitting(false);
    }
  }

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
      aria-labelledby="modal-review-title"
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

        {!isAuthenticated ? (
          /* Unauthenticated State */
          <div className="text-center py-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary-container/20 flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-primary-container text-[32px]">
                lock
              </span>
            </div>
            <h3
              className="font-headline-sm text-xl uppercase font-bold text-on-surface"
              id="modal-review-title"
            >
              Sign In to Review
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant mt-2 mb-space-lg leading-relaxed">
              Only verified Kozhihood accounts can submit dining reviews. Please sign in or create an account to share your feedback.
            </p>
            <div className="flex flex-col gap-space-sm">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onNavigate) onNavigate('/login');
                }}
                className="w-full py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-lg text-sm uppercase tracking-wider font-bold shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:brightness-110 transition-all"
              >
                Sign In / Sign Up
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-space-sm rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-xs uppercase tracking-wider transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : isSuccess ? (
          /* Success State */
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-space-md">
              <span className="material-symbols-outlined text-primary text-[36px]">
                check_circle
              </span>
            </div>
            <h3 className="font-headline-sm text-xl uppercase font-bold text-on-surface mb-2">
              Review Submitted!
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
              Thank you, <strong>{user?.name}</strong>! Your review has been submitted for moderation (status: pending) and will appear once verified.
            </p>
          </div>
        ) : (
          /* Authenticated Submission Form */
          <div>
            <div className="text-center mb-space-md">
              <span className="font-label-sm text-xs text-primary font-bold uppercase tracking-wider block">
                Verified Diner Review
              </span>
              <h3
                className="font-headline-sm text-xl uppercase font-bold text-on-surface mt-1"
                id="modal-review-title"
              >
                Rate Your Experience
              </h3>
              <p className="font-body-sm text-xs text-on-surface-variant mt-1">
                Posting as <strong className="text-on-surface">{user?.name}</strong>
              </p>
            </div>

            {errorMessage && (
              <div className="mb-space-md p-2.5 rounded-lg bg-error-container/20 border border-error-container text-error text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-space-md">
              {/* Star Rating Selection */}
              <div>
                <label className="block text-center font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">
                  Select Rating
                </label>
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || rating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-secondary hover:scale-110 transition-transform focus:outline-none"
                        aria-label={`Rate ${star} out of 5 stars`}
                      >
                        <span
                          className="material-symbols-outlined text-[32px]"
                          style={{
                            fontVariationSettings: isFilled ? "'FILL' 1" : "'FILL' 0"
                          }}
                        >
                          star
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label
                  htmlFor="review-body"
                  className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1.5"
                >
                  Your Review
                </label>
                <textarea
                  id="review-body"
                  rows={4}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share details of your meal, favourite dish (like Dum Biryani or Iffa Chicken), flavour quality, and service..."
                  required
                  maxLength={1000}
                  disabled={isSubmitting}
                  className="w-full px-space-md py-space-sm rounded-lg bg-surface-container border border-surface-container-high text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-sm resize-none disabled:opacity-60"
                />
                <span className="block text-right text-[10px] text-on-surface-variant/60 mt-1">
                  {reviewText.length}/1000 characters
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-lg text-sm uppercase tracking-wider font-bold shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:brightness-110 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting && (
                  <span className="material-symbols-outlined animate-spin text-[18px]">
                    progress_activity
                  </span>
                )}
                <span>{isSubmitting ? 'Submitting...' : 'Submit Review'}</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
