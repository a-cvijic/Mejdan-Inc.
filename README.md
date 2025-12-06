# Mejdan Inc. - Professional Moving Services

A modern, animated website for Mejdan Inc., NYC's trusted professional moving company.

**Live Site:** [https://mejdan-inc.vercel.app](https://mejdan-inc.vercel.app)

## Features

- Scroll-triggered animations with fade-in/slide-up effects
- Animated number counters for statistics
- Auto-rotating testimonials carousel with glassmorphism design
- Interactive FAQ accordion
- Floating CTA button that appears on scroll
- Responsive design optimized for all devices
- Contact form with Web3Forms integration
- Smooth parallax effects in hero section

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS v4** - Utility-first styling
- **Vercel** - Deployment platform

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Hero section with animated headline & stats
│   ├── Services.jsx      # Service cards with hover effects
│   ├── TeamSection.jsx   # About/Why Choose Us section
│   ├── Testimonials.jsx  # Customer reviews carousel
│   ├── FAQ.jsx           # Accordion FAQ section
│   ├── ContactForm.jsx   # Quote request form
│   ├── Footer.jsx        # Site footer
│   └── FloatingCTA.jsx   # Sticky call-to-action button
├── hooks/
│   └── useScrollAnimation.js  # Intersection Observer hooks
├── App.jsx
├── main.jsx
└── index.css             # Custom animations & utilities
```

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

The site auto-deploys to Vercel on push to main branch.

```bash
# Manual deploy
vercel --prod
```

## Customization

### Contact Form
Update the Web3Forms access key in `src/components/ContactForm.jsx`:
```javascript
const WEB3FORMS_ACCESS_KEY = 'your-access-key';
```

### Business Info
Edit phone, email, and address in:
- `src/components/Hero.jsx`
- `src/components/ContactForm.jsx`
- `src/components/Footer.jsx`

### Colors
Primary brand color is blue (`blue-600`). Modify in Tailwind classes throughout components.

## Repository

[https://github.com/a-cvijic/Mejdan-Inc](https://github.com/a-cvijic/Mejdan-Inc)

---

Built for Mejdan Inc.
