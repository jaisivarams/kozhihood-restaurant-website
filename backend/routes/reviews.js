const express = require('express');
const Review = require('../models/Review');
const authenticateUser = require('../middleware/auth');

const router = express.Router();

/**
 * Admin middleware
 * Only the email configured in ADMIN_EMAIL can manage reviews.
 */
const requireAdmin = (req, res, next) => {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    return res.status(500).json({
      success: false,
      message: 'Admin access is not configured on the server.'
    });
  }

  if (!req.user || req.user.email !== adminEmail) {
    return res.status(403).json({
      success: false,
      message: 'Admin access required.'
    });
  }

  next();
};

/**
 * GET /api/reviews
 * Returns only approved reviews, sorted newest first.
 * Public endpoint for visitors to read verified diner reviews.
 */
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find({ status: 'approved' })
      .sort({ createdAt: -1 })
      .select('userName rating reviewText createdAt');

    return res.status(200).json({
      success: true,
      count: reviews.length,
      reviews
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve reviews. Please try again later.'
    });
  }
});

/**
 * POST /api/reviews
 * Submits a new review.
 * Protected route - requires valid JWT authentication.
 * New reviews are automatically saved with status: "pending".
 */
router.post('/', authenticateUser, async (req, res) => {
  try {
    const { rating, reviewText } = req.body;

    if (
      !reviewText ||
      typeof reviewText !== 'string' ||
      reviewText.trim().length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: 'Review text cannot be empty.'
      });
    }

    if (reviewText.trim().length > 1000) {
      return res.status(400).json({
        success: false,
        message: 'Review text must be under 1000 characters.'
      });
    }

    const parsedRating = Number(rating);

    if (
      !Number.isInteger(parsedRating) ||
      parsedRating < 1 ||
      parsedRating > 5
    ) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be an integer between 1 and 5.'
      });
    }

    const newReview = await Review.create({
      userId: req.user._id,
      userName: req.user.name,
      rating: parsedRating,
      reviewText: reviewText.trim(),
      status: 'pending'
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your review has been submitted for moderation.',
      review: {
        id: newReview._id,
        userName: newReview.userName,
        rating: newReview.rating,
        reviewText: newReview.reviewText,
        status: newReview.status,
        createdAt: newReview.createdAt
      }
    });
  } catch (error) {
    console.error('Error creating review:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to submit review. Please try again later.'
    });
  }
});

/**
 * GET /api/reviews/admin
 * Returns all reviews for the admin dashboard.
 */
router.get('/admin', authenticateUser, requireAdmin, async (req, res) => {
  try {
    const reviews = await Review.find()
      .sort({ createdAt: -1 })
      .select('userName rating reviewText status createdAt');

    return res.status(200).json({
      success: true,
      count: reviews.length,
      reviews
    });
  } catch (error) {
    console.error('Error fetching admin reviews:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve reviews.'
    });
  }
});

/**
 * PATCH /api/reviews/admin/:id/approve
 * Approves a pending review.
 */
router.patch(
  '/admin/:id/approve',
  authenticateUser,
  requireAdmin,
  async (req, res) => {
    try {
      const review = await Review.findByIdAndUpdate(
        req.params.id,
        { status: 'approved' },
        { new: true }
      ).select('userName rating reviewText status createdAt');

      if (!review) {
        return res.status(404).json({
          success: false,
          message: 'Review not found.'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Review approved successfully.',
        review
      });
    } catch (error) {
      console.error('Error approving review:', error);

      return res.status(500).json({
        success: false,
        message: 'Failed to approve review.'
      });
    }
  }
);

/**
 * PATCH /api/reviews/admin/:id/reject
 * Rejects a pending review.
 */
router.patch(
  '/admin/:id/reject',
  authenticateUser,
  requireAdmin,
  async (req, res) => {
    try {
      const review = await Review.findByIdAndUpdate(
        req.params.id,
        { status: 'rejected' },
        { new: true }
      ).select('userName rating reviewText status createdAt');

      if (!review) {
        return res.status(404).json({
          success: false,
          message: 'Review not found.'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Review rejected successfully.',
        review
      });
    } catch (error) {
      console.error('Error rejecting review:', error);

      return res.status(500).json({
        success: false,
        message: 'Failed to reject review.'
      });
    }
  }
);

module.exports = router;