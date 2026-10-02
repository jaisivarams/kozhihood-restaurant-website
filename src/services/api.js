/**
 * Kozhihood API Service Client
 * Handles communication with the Node.js Express backend.
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const getStoredToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('kozhihood_token');
};

export const setStoredToken = (token) => {
  if (typeof window !== 'undefined') {
    if (token) {
      localStorage.setItem('kozhihood_token', token);
    } else {
      localStorage.removeItem('kozhihood_token');
    }
  }
};

export const removeStoredToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('kozhihood_token');
  }
};

async function apiRequest(endpoint, { method = 'GET', body, requiresAuth = false } = {}) {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (requiresAuth) {
    const token = getStoredToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'API request failed');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export const authApi = {
  login: async (email, password) => {
    return apiRequest('/api/auth/login', {
      method: 'POST',
      body: { email, password }
    });
  },

  register: async (name, email, password) => {
    return apiRequest('/api/auth/register', {
      method: 'POST',
      body: { name, email, password }
    });
  },

  getMe: async () => {
    return apiRequest('/api/auth/me', {
      method: 'GET',
      requiresAuth: true
    });
  }
};

export const reviewsApi = {
  getApprovedReviews: async () => {
    return apiRequest('/api/reviews', {
      method: 'GET'
    });
  },

  submitReview: async (rating, reviewText) => {
    return apiRequest('/api/reviews', {
      method: 'POST',
      body: { rating, reviewText },
      requiresAuth: true
    });
  },

  getAdminReviews: async () => {
    return apiRequest('/api/reviews/admin', {
      method: 'GET',
      requiresAuth: true
    });
  },

  approveReview: async (reviewId) => {
    return apiRequest(`/api/reviews/admin/${reviewId}/approve`, {
      method: 'PATCH',
      requiresAuth: true
    });
  },

  rejectReview: async (reviewId) => {
    return apiRequest(`/api/reviews/admin/${reviewId}/reject`, {
      method: 'PATCH',
      requiresAuth: true
    });
  }
};