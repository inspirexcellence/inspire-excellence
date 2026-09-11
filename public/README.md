# Inspire Excellence — Public Assets Directory

Place your static assets (images, logos, videos, documents, fonts) in this directory. Any file placed in `public` can be referenced directly from the root URL (e.g., `/images/hero/hero-staircase.jpg`).

---

## Directory Structure & Recommended Organization

```text
public/
├── favicon.ico                   # Browser favicon (16x16 / 32x32)
├── favicon.svg                   # Modern vector SVG favicon
├── apple-touch-icon.png          # iOS home screen icon (180x180)
├── og-image.jpg                  # Open Graph / Social share preview card (1200x630)
│
├── images/
│   ├── brand/                    # Brand assets, logos, wordmarks
│   │   ├── logo-light.svg
│   │   ├── logo-dark.svg
│   │   └── favicon.svg
│   │
│   ├── hero/                     # Hero section visuals
│   │   ├── staircase-cherry-blossom.jpg
│   │   └── hero-poster.jpg
│   │
│   ├── transformation/           # Transformation areas visuals (5 dimensions)
│   │   ├── leadership.jpg
│   │   ├── organisations.jpg
│   │   ├── people.jpg
│   │   ├── performance.jpg
│   │   └── relationships.jpg
│   │
│   ├── services/                 # Services imagery
│   │   ├── strategy-alignment.jpg
│   │   ├── culture-transformation.jpg
│   │   ├── process-operating-model.jpg
│   │   ├── leadership-development.jpg
│   │   └── change-implementation.jpg
│   │
│   ├── team/                     # Team & founder portraits
│   │   ├── prerona-roy.jpg
│   │   └── abhinandan-roy.jpg
│   │
│   ├── insights/                 # Blog & insight featured images
│   │   ├── leadership-mindset.jpg
│   │   ├── why-perspective-changes.jpg
│   │   └── sustainable-success.jpg
│   │
│   └── podcast/                  # Podcast episode covers & thumbnails
│       └── episode-covers/
│
├── documents/                    # Downloadable PDFs & worksheets
│   ├── leadership-compass-overview.pdf
│   └── transformation-flowchart.pdf
│
└── videos/                       # Video files / intro clips
    └── intro.mp4
```

---

## How to use images in components:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero/staircase-cherry-blossom.jpg"
  alt="Transformation that creates impact"
  width={800}
  height={1000}
  priority
/>
```
