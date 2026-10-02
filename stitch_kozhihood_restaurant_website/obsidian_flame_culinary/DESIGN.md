---
name: Obsidian & Flame Culinary
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#e4beb4'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#ab8980'
  outline-variant: '#5b4039'
  surface-tint: '#ffb5a0'
  primary: '#ffb5a0'
  on-primary: '#5f1500'
  primary-container: '#ff5722'
  on-primary-container: '#541200'
  inverse-primary: '#b02f00'
  secondary: '#ffb95f'
  on-secondary: '#472a00'
  secondary-container: '#ee9800'
  on-secondary-container: '#5b3800'
  tertiary: '#86cfff'
  on-tertiary: '#00344c'
  tertiary-container: '#019ad8'
  on-tertiary-container: '#002d43'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbd1'
  primary-fixed-dim: '#ffb5a0'
  on-primary-fixed: '#3b0900'
  on-primary-fixed-variant: '#862200'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#c8e6ff'
  tertiary-fixed-dim: '#86cfff'
  on-tertiary-fixed: '#001e2e'
  on-tertiary-fixed-variant: '#004c6d'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-xl:
    fontFamily: Syne
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
  display-xl-mobile:
    fontFamily: Syne
    fontSize: 38px
    fontWeight: '800'
    lineHeight: 44px
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Syne
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-sm:
    fontFamily: Syne
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style
The design system embodies a high-end, immersive nocturnal culinary experience tailored for a modern South Indian gastronomic destination. Balancing the intense heat of traditional slow-dum wood-fire cauldrons with ultra-refined contemporary editorial restraint, the tone is confident, sensory, and unapologetically bold. 

Visually, the style pairs **editorial minimalism** with **tactile atmospheric glassmorphism**. The canvas is anchored in deep, smoked obsidian and charcoal tones, punctuated by searing embers of fiery orange and saffron gold. The interface does not merely display food—it stages it like an haute cuisine exhibit. High-contrast negative space frames vibrant food photography, treating steam, rich spice coats, and glistening textures as the primary visual hero, while typography cuts cleanly across the darkness.

## Colors
The color palette reflects charcoal hearths and crackling flames:
- **Base Surfaces & Backgrounds:** The foundation uses layered deep charcoals: Ground zero (`#0D0D0E`), elevated card surfaces (`#141416`), and interactive element layers (`#1A1A1E`).
- **Primary Fire (`#FF5722`):** A high-heat, blazing ember tone reserved for focal CTAs, live kitchen/order status indicators, active tab markers, and high-impact badges.
- **Secondary Saffron (`#F59E0B`):** A warm golden-spice accent used for star ratings, signature chef picks, preparation highlights, and luminous hover transitions.
- **Typography & Neutrals:**
  - Display & Headings: `#FDFBF7` (warm bone porcelain, eliminating harsh pure-white glare).
  - Secondary / Body text: `#9CA3AF` (stone smoke).
  - Subdued / Borders: `#6B7280` (muted ash) and translucent glass borders (`rgba(255, 255, 255, 0.08)`).

## Typography
Typography is split purposefully between avant-garde editorial drama and ergonomic utility:
- **Headlines (`Syne`):** Boasts wide, structural curves and expressive character forms. Used strictly for hero messaging, category section titles, and signature menu names. It invokes editorial culinary journals.
- **Body & Functional UI (`Plus Jakarta Sans`):** Clean, open letter geometry ensures readability in low-light environments. Used for dish descriptions, pricing, ingredient rosters, cart breakdowns, and operational messaging.
- For high-impact labels and price indicators, use `label-lg` with uppercase tracking (`letter-spacing: 0.08em`) to balance the expressive nature of `Syne`.

## Layout & Spacing
The layout relies on a 12-column fluid grid system on desktop (max width `1440px`), shifting to a 6-column grid on tablet, and a 4-column single/dual flow on mobile. 

Generous spacing prevents visual crowding around rich food imagery. Section breaks must breathe with large negative vertical spaces (`space-xl` or dynamic multipliers up to `5rem`), maintaining the feel of a curated culinary portfolio. Grid gutters tighten from `1.5rem` on desktop down to `1rem` on mobile devices to preserve touch real estate for menu horizontal carousels.

## Elevation & Depth
Depth is built through atmospheric light and luminous glass stratification rather than generic drop shadows:
- **Level 0 (Base Floor):** Pure `#0D0D0E`, serving as the infinite canvas.
- **Level 1 (Card & Content Blocks):** Semi-transparent `#141416` backed by a 1px perimeter border rendered in `rgba(255, 255, 255, 0.08)`.
- **Level 2 (Modals, Flyouts & Floating Nav):** Translucent `#1A1A1E` with backdrop blur (`backdrop-filter: blur(16px)`), a soft ambient outer glow tinted by the primary color (`box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.7), 0 0 24px -4px rgba(255, 87, 34, 0.12)`), and razor-thin highlight borders (`rgba(255, 255, 255, 0.12)`).

## Shapes
The design embraces a fluid pill-shaped geometry (`roundedness: 3`) for all primary interaction cues (buttons, filter chips, floating badges, and status counters), offset against structured, softly rounded frames (`1.5rem` / `24px`) for food showcases and content cards. This contrast softens the raw charcoal background and makes actions invite physical touch.

## Components

### Buttons
- **Primary Call to Action:** Full pill radius (`rounded-full`), background colored in `#FF5722` with `#FDFBF7` typography. Subtle upward elevation on hover accompanied by an inner radial bloom (`box-shadow: 0 8px 24px -4px rgba(255, 87, 34, 0.4)`).
- **Secondary / Ghost:** Full pill outline with 1px border (`rgba(255, 255, 255, 0.16)`), transparent background, and `#FDFBF7` text. On hover, background transitions to `rgba(255, 255, 255, 0.06)` with the border warming to `#F59E0B`.

### Menu & Food Display Cards
- Deep charcoal base (`#141416`) with `1.5rem` outer radius and a hairline border of `rgba(255, 255, 255, 0.08)`.
- Image areas feature a subtle dark vignette gradient running from bottom to top (`rgba(20, 20, 22, 0.9)` to `transparent`) allowing bone-white dish names and saffron price tags to sit cleanly atop the imagery.

### Filter & Cuisine Chips
- Horizontal scrolling pill tags. Idle state: `#1A1A1E` with `rgba(255, 255, 255, 0.08)` borders and `#9CA3AF` text.
- Active state: `#FF5722` solid background, text in `#FDFBF7`, glowing slightly with `rgba(255, 87, 34, 0.3)`.

### Form Fields & Inputs
- Enclosed in rounded pills or `12px` rounded rectangles with a deep recessed surface (`#0D0D0E`), bordered by `rgba(255, 255, 255, 0.12)`.
- Focus state brings a sharp 1px border ring in `#FF5722` with a subtle orange haze (`box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.15)`).

### Spice Level Indicators & Dietary Badges
- Dum Biryani and Starter spice meters rendered as fiery micro-dots utilizing `#FF5722` for high heat, `#F59E0B` for medium heat.
- Non-Veg indicators styled with a deep ruby ring and dot, encased in high-gloss dark charcoal frames.