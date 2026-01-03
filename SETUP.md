# Professional Portfolio Website - Setup Instructions

## Prerequisites

- Node.js 18+ and npm 9+
- Angular CLI 18+

## Initial Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm start
   ```

   Navigate to `http://localhost:4200/`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Customization Guide

### 1. Update Personal Information

Edit files to replace placeholder content:

- `src/app/pages/home/home.component.ts` - Hero section and metrics
- `src/app/pages/about/about.component.ts` - Your story and expertise
- Contact information in footer and contact page

### 2. Add Your Case Studies

Edit `src/app/pages/portfolio/portfolio.component.ts`:

```typescript
caseStudies = [
  {
    title: "Your Project Title",
    company: "Client Company",
    icon: "🎯",
    challenge: "What was the challenge?",
    solution: "How did you solve it?",
    results: [
      { metric: "100%", description: "Result metric" },
      // ... more results
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
  },
  // ... more projects
];
```

### 3. Update Services

Edit `src/app/pages/services/services.component.ts`:

```typescript
services = [
  {
    title: "Your Service",
    fullDescription: "Detailed description...",
    features: ["Feature 1", "Feature 2"],
    benefits: [{ icon: "🎯", text: "Benefit text" }],
  },
];
```

### 4. Add Blog Posts

Edit `src/app/pages/blog/blog.component.ts`:

```typescript
blogPosts = [
  {
    title: "Article Title",
    excerpt: "Brief excerpt...",
    date: "Jan 2024",
    category: "Category",
    readTime: 8,
  },
];
```

### 5. Update Colors & Branding

Edit `src/styles.scss`:

- Primary color: Search for `#14b8a6` and replace with your brand color
- Secondary color: Search for `#06b6d4` and replace
- Adjust component-level colors in their `.scss` files

### 6. Update Social Links

Edit `src/app/components/header/header.component.ts` and `footer/footer.component.ts`:

- Update LinkedIn, GitHub, Twitter URLs
- Add any other social profiles

### 7. Setup Analytics

Create `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  googleAnalyticsId: "UA-XXXXXXXXX-X",
  calendlyUrl: "https://calendly.com/your-url",
};
```

Edit `src/index.html` to include Google Analytics script.

### 8. Add Images

Create directories:

- `src/assets/images/projects/` - Case study images
- `src/assets/images/social/` - Social profile images
- `src/assets/icons/` - Custom icons

Update component templates to reference images.

## Performance Optimization

1. **Image Optimization**

   - Use WebP format with PNG fallbacks
   - Lazy load images with `loading="lazy"`
   - Optimize sizes: `width` and `height` attributes

2. **Code Splitting**
   Already handled by Angular routes

3. **Compression**
   - Enable gzip on your hosting platform
   - Minify CSS/JS (done automatically in production)

## SEO Optimization

1. **Update Meta Tags**
   Edit `src/index.html`:

   ```html
   <meta name="description" content="Your description" />
   <meta property="og:image" content="your-image-url" />
   ```

2. **Update Structured Data**
   Edit JSON-LD schema in `src/index.html`

3. **Create Sitemap**
   Generate at: `src/assets/sitemap.xml`

4. **robots.txt**
   Create at: `src/robots.txt`

## Deployment

### Vercel (Recommended for SSR)

```bash
npm install -g vercel
npm run build:ssr
vercel --prod
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build:ssr
EXPOSE 4000
CMD ["npm", "run", "serve:ssr"]
```

## Environment Variables

Create `.env` file:

```
GOOGLE_ANALYTICS_ID=your-id
CALENDLY_URL=your-calendly-url
CONTACT_EMAIL=your-email@domain.com
```

## Maintenance

- Update Angular and dependencies: `ng update @angular/core`
- Check security: `npm audit`
- Monitor Lighthouse scores regularly
- Update blog posts and case studies as needed

## Troubleshooting

**Port 4200 already in use:**

```bash
ng serve --port 4201
```

**Build errors:**

```bash
rm -rf node_modules package-lock.json
npm install
ng build
```

**SCSS compilation errors:**
Ensure `sass` is installed: `npm install sass`

## Support Resources

- [Angular Documentation](https://angular.io/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

---

**Remember to:**

1. Replace all placeholder text with your actual information
2. Add your professional images
3. Update all social links
4. Test on mobile devices
5. Check Lighthouse scores
6. Setup analytics and tracking

Your portfolio is now ready to impress potential clients! 🚀
