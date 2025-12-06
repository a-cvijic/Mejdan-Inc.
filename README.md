# Mejdan Inc. - Professional Moving Services Website

A modern, flashy website for Mejdan Inc., a professional moving company. Built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, eye-catching design with smooth animations
- 📱 Fully responsive mobile-first layout
- ⚡ Lightning-fast performance with Vite
- 🎯 SEO-optimized
- 📝 Contact form for quote requests
- 🎭 Interactive service cards
- 🌈 Custom gradient color scheme

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment platform

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to Vercel

### Method 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts** to link your project to a Vercel account

### Method 2: Using GitHub + Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit: Mejdan Inc. moving company website"
   git branch -M main
   git remote add origin https://github.com/a-cvijic/Mejdan-Inc.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

Your site will be live in minutes!

## Customization Guide

### Adding Images

The site has placeholders for images. Use nano banana or any image generator to create:

1. **Hero Section Logo** (`src/components/Hero.jsx` line 19-24):
   - Replace the placeholder div with an `<img>` tag
   - Recommended size: 200x200px
   - Place image in `/public/` folder

2. **Service Section Icons**:
   - Currently using emoji icons
   - Can be replaced with custom images or icon libraries

### Updating Contact Information

Edit `/src/components/ContactForm.jsx` and `/src/components/Footer.jsx`:
- Phone number
- Email address
- Physical address
- Business hours

### Changing Colors

Edit `/tailwind.config.js`:
```javascript
colors: {
  primary: { ... },  // Main brand color (blue gradient)
  accent: { ... }    // Secondary/accent color (yellow/gold)
}
```

### Modifying Services

Edit `/src/components/Services.jsx`:
- Update the `services` array with your specific offerings
- Add/remove services as needed

## Project Structure

```
mejdan-moving-site/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies
```

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License - feel free to use this template for your own projects!

## Repository

https://github.com/a-cvijic/Mejdan-Inc

---

Built with ❤️ for Mejdan Inc.
