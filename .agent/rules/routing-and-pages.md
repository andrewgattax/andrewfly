---
trigger: model_decision
description: Use this whenever i am asking you to create new pages or you have to search for a specific page.
---

# Routing & Pages

## Page Structure (Vike)
Vike uses file-based routing with special files:
- `+Page.tsx` - The main page component (required)
- `+config.ts` - Page-specific configuration (optional)
- `+data.ts` - Data fetching for the page (optional)
- `+Head.tsx` - Page-specific meta tags (optional)
- `+Layout.tsx` - Layout wrapper (optional)

## Routing & Pages

### Creating a New Page

1. Create a new directory under `pages/`:
   ```
   pages/
   └── about/
       └── +Page.tsx
   ```

2. The file `pages/about/+Page.tsx` will automatically be served at `/about`

3. Add page-specific configuration in `pages/about/+config.ts`:
   ```tsx
   export default {
     title: 'About - My App',
     description: 'Learn more about us'
   };
   ```

### Dynamic Routes

Use the `@id` pattern for dynamic routes:
```
pages/
└── blog/
    └── @id/
        └── +Page.tsx  // Matches /blog/:id
```

Access route parameters via `pageContext.routeParams`:
```tsx
// +Page.tsx
export { Page };

function Page(pageContext: PageContext) {
  const { id } = pageContext.routeParams;
  return <div>Post: {id}</div>;
}
```

### Data Fetching

Use `+data.ts` for server-side data fetching:
```tsx
// +data.ts
export async function data(pageContext: PageContext) {
  const data = await fetchData();
  return {
    data: {
      items: data
    }
  };
}
```

Access in your page component:
```tsx
// +Page.tsx
export { Page };

function Page(pageContext: PageContext) {
  const { items } = pageContext.data;
  return <div>{/* render items */}</div>;
}
```
