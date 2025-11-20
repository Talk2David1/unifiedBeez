# Asset Directories

This folder contains static assets for the UnifiedBeez application.

## Structure

### `/images`
General images organized by type:
- `backgrounds/` - Background images
- `illustrations/` - Illustrative graphics
- `photos/` - Photographic content

### `/logos`
Brand logos in various formats:
- `primary/` - Main brand logos
- `secondary/` - Alternative brand marks
- `partners/` - Partner/third-party logos

### `/icons`
Icon assets organized by category:
- `ui/` - User interface icons
- `social/` - Social media icons
- `functional/` - Feature-specific icons

## Guidelines

1. **Format**: Prefer SVG for logos and icons, WebP/AVIF for images
2. **Naming**: Use kebab-case for file names (e.g., `user-avatar.svg`)
3. **Optimization**: Optimize all assets before committing
4. **Size**: Keep individual file sizes under 500KB when possible

## Usage

```tsx
import Image from 'next/image';

<Image
  src="/images/backgrounds/hero-bg.webp"
  alt="Hero background"
  width={1920}
  height={1080}
/>
```

---

**Note**: These directories are prepared for your assets. Add your images, logos, and icons as needed.
