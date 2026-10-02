import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

/**
 * Frontend Login & Registration Page matching the Kozhihood dark & flame aesthetic.
 * Connected directly to the Node.js Express + MongoDB authentication backend.
 */
export default function LoginPage({ onNavigate }) {
  const { login, register } = useAuth();

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetFormState = () => {
    setErrorMessage('');
    setSuccessMessage('');
  };

  const handleToggleMode = (e) => {
    e.preventDefault();
    setIsSignUp((prev) => !prev);
    resetFormState();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    resetFormState();

    if (isSignUp && !name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!email.trim() || !password) {
      setErrorMessage('Please provide both email and password.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    setIsSubmitting(true);

    try {
      if (isSignUp) {
        await register(name.trim(), email.trim(), password);
        setSuccessMessage('Account created successfully! Welcome to Kozhihood.');
      } else {
        const loginData = await login(email.trim(), password);
        console.log('LOGIN RESPONSE:', loginData);
        console.log('ADMIN EMAIL:', import.meta.env.VITE_ADMIN_EMAIL);
        console.log('LOGGED IN EMAIL:', loginData?.user?.email);
        setSuccessMessage('Login successful! Redirecting...');

        const loggedInEmail = loginData?.user?.email || email.trim();
        const adminEmail = import.meta.env.VITE_ADMIN_EMAIL?.trim();

        setTimeout(() => {
          if (!onNavigate) return;

          if (
            adminEmail &&
            loggedInEmail.toLowerCase() === adminEmail.toLowerCase()
          ) {
            onNavigate('/admin/reviews');
          } else {
            onNavigate('/');
          }
        }, 700);

        return;
      }

      // New account registration always goes to homepage
      setTimeout(() => {
        if (onNavigate) {
          onNavigate('/');
        }
      }, 700);
    } catch (err) {
      const msg = err.data?.message || err.message || 'Authentication failed. Please check your credentials.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-[calc(100vh-80px)] pt-28 pb-20 flex flex-col items-center justify-center px-gutter bg-surface overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-primary-container/10 blur-[130px] rounded-full"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Back to Home Link */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-on-surface-variant hover:text-primary transition-colors font-label-md text-sm mb-space-md"
          type="button"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Back to Home</span>
        </button>

        {/* Login / Sign Up Card */}
        <div className="bg-surface-container-low border border-surface-container-high/60 rounded-lg p-space-xl shadow-2xl">
          {/* Logo & Header */}
          <div className="flex flex-col items-center text-center mb-space-lg">
            <div className="h-12 w-12 rounded-full border-2 border-primary flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[30px]">
                person
              </span>
            </div>
            <h1 className="font-headline-md text-2xl font-bold uppercase text-on-surface">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h1>
            <p className="font-body-sm text-sm text-on-surface-variant mt-1">
              {isSignUp
                ? 'Join Kozhihood to rate and review authentic Kongu dishes.'
                : 'Enter your credentials to access your Kozhihood account.'}
            </p>
          </div>

          {/* Feedback Messages */}
          {errorMessage && (
            <div className="mb-space-md p-3 rounded-lg bg-error-container/20 border border-error-container text-error text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-space-md p-3 rounded-lg bg-primary-container/20 border border-primary-container text-primary text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-base">check_circle</span>
              <span>{successMessage}</span>
            </div>
          )}

          {/* Form Interface */}
          <form onSubmit={handleSubmit} className="space-y-space-md">
            {isSignUp && (
              <div>
                <label
                  htmlFor="register-name"
                  className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="register-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Kumar"
                  required
                  disabled={isSubmitting}
                  className="w-full px-space-md py-space-sm rounded-full bg-surface-container border border-surface-container-high text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-sm disabled:opacity-60"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="auth-email"
                className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1.5"
              >
                Email Address
              </label>
              <input
                id="auth-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                required
                disabled={isSubmitting}
                className="w-full px-space-md py-space-sm rounded-full bg-surface-container border border-surface-container-high text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-sm disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="block font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-1.5"
              >
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isSubmitting}
                className="w-full px-space-md py-space-sm rounded-full bg-surface-container border border-surface-container-high text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all text-sm disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-space-sm rounded-full bg-primary-container text-on-primary-container font-label-lg text-sm uppercase tracking-wider font-bold shadow-[0_8px_24px_-4px_rgba(255,87,34,0.4)] hover:brightness-110 hover:shadow-[0_12px_28px_-4px_rgba(255,87,34,0.6)] transition-all mt-space-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting && (
                <span className="material-symbols-outlined animate-spin text-[18px]">
                  progress_activity
                </span>
              )}
              <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
            </button>
          </form>

          {/* Sign In / Sign Up toggle */}
          <div className="mt-space-lg pt-space-md border-t border-surface-container-high/40 text-center">
            <p className="font-body-sm text-sm text-on-surface-variant">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={handleToggleMode}
                className="text-primary hover:underline font-semibold ml-1 bg-transparent border-0 cursor-pointer"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
