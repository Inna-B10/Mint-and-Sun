# Mint & Sun – Blog on Next.js + Sanity

### Goal: a small project for exploring Sanity CMS.

## 🚀 Features

Simple design with minimal SEO optimization.

### 🖥️ Frontend (Next.js 15)

- Load all posts with pagination (Load More button)
- Render a single post via GROQ query using slug
- Free-text search
- Filter posts by category
- Integrated Sanity Studio

### ⚙️ Backend (Sanity Studio)

📌 Posts

- View: all / published / drafts
- Create and edit posts
- When selecting a category, the icon and its alt (tags) are set automatically

📂 Categories

- Create and edit categories
- View all posts within a category
- Alt text of the icon is used as keyword tags
- Supports inline images (position options: left / right)

### [design sketch](https://excalidraw.com/#json=RSmZXVfYtyhUMBPwriHsZ,AFBSdJr8jcngmlqm3sOzSg)

#### used in addition:

```
clsx
date-fns
framer-motion
sanity-plugin-documents-pane
sass
```

#### [TODO]

- [ ] responsive design (design is optimized for large screens, 1024px and above)
- [ ] full-featured search using Algolia or Typesense
- [ ] studio preview
- [ ] studio auth (middleware?)
