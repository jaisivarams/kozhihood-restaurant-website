import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar.jsx';
import HeroSection from './sections/HeroSection.jsx';
import CraveWorthySection from './sections/CraveWorthySection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import GallerySection from './sections/GallerySection.jsx';
import ReviewsSection from './sections/ReviewsSection.jsx';
import ContactSection from './sections/ContactSection.jsx';
import Footer from './sections/Footer.jsx';
import OrderModal from './components/common/OrderModal.jsx';
import MenuPage from './pages/MenuPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ReviewsPage from './pages/ReviewsPage.jsx';
import AdminReviewsPage from './pages/AdminReviewsPage.jsx';
import { updateDocumentSEO } from './utils/seo.js';

/**
 * Main Application Component for Kozhihood Restaurant Website.
 * Routes:
 * - '/' : Homepage (Hero → Crave-Worthy Dishes → VIEW FULL MENU button → About → Why Kozhihood → Reviews → Contact → Footer)
 * - '/menu' : Dedicated full 24-item compact menu page
 * - '/reviews' : Dedicated customer reviews page
 * - '/login' : Frontend Sign In page
 * - '/admin/reviews' : Admin review moderation page
 */
export default function App() {
  const [currentPath, setCurrentPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState('');

  useEffect(() => {
    function handlePopState() {
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    updateDocumentSEO(currentPath);
  }, [currentPath]);

  function navigate(path) {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function handleOpenOrder(dishName = '') {
    setSelectedDish(dishName);
    setIsOrderModalOpen(true);
  }

  function handleCloseOrder() {
    setIsOrderModalOpen(false);
    setSelectedDish('');
  }

  const normalizedPath = currentPath.replace(/\/+$/, '') || '/';
  const isMenuPage = normalizedPath === '/menu';
  const isLoginPage = normalizedPath === '/login';
  const isReviewsPage = normalizedPath === '/reviews';
  const isAdminReviewsPage = normalizedPath === '/admin/reviews';

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* Fixed Sticky Header with Simplified Navbar */}
      <Navbar
        onOpenOrder={() => handleOpenOrder('')}
        currentPath={normalizedPath}
        onNavigate={navigate}
      />

      {/* Conditional Route Rendering */}
      {isLoginPage ? (
        <main className="w-full">
          <LoginPage onNavigate={navigate} />
        </main>
      ) : isMenuPage ? (
        <main className="w-full">
          <MenuPage onOpenOrder={handleOpenOrder} onNavigate={navigate} />
        </main>
      ) : isReviewsPage ? (
        <main className="w-full">
          <ReviewsPage onNavigate={navigate} />
        </main>
      ) : isAdminReviewsPage ? (
        <main className="w-full">
          <AdminReviewsPage onNavigate={navigate} />
        </main>
      ) : (
        <main className="w-full pt-20 bg-surface min-h-[calc(100vh-80px)]">
          <div className="flex flex-col w-full">
            {/* 1. Hero */}
            <HeroSection
              onNavigate={navigate}
              onOpenOrder={() => handleOpenOrder('')}
            />

            {/* 2. Crave-Worthy Dishes + 3. Prominent VIEW FULL MENU button */}
            <CraveWorthySection
              onOpenOrder={handleOpenOrder}
              onNavigate={navigate}
            />

            {/* 4. About */}
            <AboutSection />

            {/* 5. Why Kozhihood (Trust Section) */}
            <GallerySection />

            {/* 6. Reviews */}
            <ReviewsSection onNavigate={navigate} />

            {/* 7. Contact */}
            <ContactSection onOpenOrder={() => handleOpenOrder('')} />
          </div>
        </main>
      )}

      {/* Footer without delivery promotions */}
      <Footer />

      {/* Quick Action Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrder}
        dishName={selectedDish}
      />
    </div>
  );
}
