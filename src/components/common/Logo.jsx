import React from 'react';

/**
 * Kozhihood Brand Logo Component
 * Extracted directly from `kozhihood_brand_logo/code.html`.
 *
 * Supports two variants:
 * - 'emblem': The circular stylized rooster mascot emblem (matching the header/footer icon)
 * - 'full': The complete 420x100 emblem + typography lockup
 */
export default function Logo({
  variant = 'emblem',
  className = 'h-8 w-auto',
  title = 'Kozhihood Brand Logo',
  ...props
}) {
  if (variant === 'full') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 420 100"
        fill="none"
        className={className}
        role="img"
        aria-label={title}
        {...props}
      >
        <title>{title}</title>
        <defs>
          <linearGradient
            id="flame_grad_full"
            x1="0"
            y1="0"
            x2="84"
            y2="84"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF5722" />
            <stop offset="1" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* Mascot Emblem */}
        <g transform="translate(10, 8)">
          <circle cx="42" cy="42" r="40" fill="#1C1B1C" stroke="#FF5722" strokeWidth="2.5" />
          <circle cx="42" cy="42" r="35" fill="url(#flame_grad_full)" opacity="0.15" />
          {/* Comb */}
          <path d="M38 20 C36 14, 44 14, 46 18 C48 13, 56 15, 54 22 C56 21, 60 24, 57 28 Z" fill="#FF5722" />
          {/* Head & Beak */}
          <path d="M34 26 C34 22, 50 22, 52 30 C56 31, 62 33, 64 35 C58 37, 54 38, 52 40 C50 48, 42 54, 34 50 Z" fill="#F59E0B" />
          <path d="M54 33 L65 36 L54 39 Z" fill="#FFB300" />
          {/* Wattle */}
          <path d="M48 40 C50 46, 44 48, 43 42 Z" fill="#DC2626" />
          {/* Eye */}
          <circle cx="44" cy="31" r="3.5" fill="#131314" />
          <circle cx="45" cy="30" r="1.2" fill="#FFFFFF" />
          {/* Feathers */}
          <path d="M30 46 C34 46, 38 56, 46 56 C52 56, 56 50, 58 46 C56 58, 46 66, 34 66 C26 66, 22 56, 30 46 Z" fill="#FFFFFF" />
          {/* Flame wing */}
          <path d="M22 44 C26 38, 34 44, 32 54 C26 56, 18 52, 22 44 Z" fill="#FF5722" opacity="0.9" />
        </g>

        {/* Typography */}
        <text
          x="106"
          y="52"
          fontFamily="'Syne', 'Inter', sans-serif"
          fontWeight="900"
          fontSize="34"
          letterSpacing="1.5"
          fill="#FDFBF7"
        >
          KOZHI<tspan fill="#FF5722">HOOD</tspan>
        </text>
        <text
          x="108"
          y="72"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="600"
          fontSize="10.5"
          letterSpacing="4"
          fill="#F59E0B"
        >
          BOLD FLAVOURS · ERODE
        </text>
      </svg>
    );
  }

  // Default 'emblem' variant (circle only, viewBox 0 0 84 84)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 84"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      <defs>
        <linearGradient
          id="flame_grad_emblem"
          x1="0"
          y1="0"
          x2="84"
          y2="84"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF5722" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>

      <g>
        <circle cx="42" cy="42" r="40" fill="#1C1B1C" stroke="#FF5722" strokeWidth="2.5" />
        <circle cx="42" cy="42" r="35" fill="url(#flame_grad_emblem)" opacity="0.15" />
        {/* Comb */}
        <path d="M38 20 C36 14, 44 14, 46 18 C48 13, 56 15, 54 22 C56 21, 60 24, 57 28 Z" fill="#FF5722" />
        {/* Head & Beak */}
        <path d="M34 26 C34 22, 50 22, 52 30 C56 31, 62 33, 64 35 C58 37, 54 38, 52 40 C50 48, 42 54, 34 50 Z" fill="#F59E0B" />
        <path d="M54 33 L65 36 L54 39 Z" fill="#FFB300" />
        {/* Wattle */}
        <path d="M48 40 C50 46, 44 48, 43 42 Z" fill="#DC2626" />
        {/* Eye */}
        <circle cx="44" cy="31" r="3.5" fill="#131314" />
        <circle cx="45" cy="30" r="1.2" fill="#FFFFFF" />
        {/* Feathers */}
        <path d="M30 46 C34 46, 38 56, 46 56 C52 56, 56 50, 58 46 C56 58, 46 66, 34 66 C26 66, 22 56, 30 46 Z" fill="#FFFFFF" />
        {/* Flame wing */}
        <path d="M22 44 C26 38, 34 44, 32 54 C26 56, 18 52, 22 44 Z" fill="#FF5722" opacity="0.9" />
      </g>
    </svg>
  );
}
