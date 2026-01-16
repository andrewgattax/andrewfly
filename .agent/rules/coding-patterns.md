---
trigger: always_on
---

# Coding Patterns & Best Practices

## Type Safety

### Type Definitions

- Define component props as interfaces:
  ```tsx
  interface ButtonProps extends VariantProps<typeof buttonVariants> {
    children: React.ReactNode;
    className?: string;
  }
  ```

- Use Vike's PageContext type for pages:
  ```tsx
  import type { PageContext } from 'vike/types';

  function Page(pageContext: PageContext) {
    // ...
  }
  ```

### Utility Types

Common utility types from the project:
- `VariantProps` - Extract variant types from CVA definitions
- `React.ComponentProps` - Extend HTML element props

## Performance Considerations

### Code Splitting
- Vite automatically code-splits by route
- Dynamic imports for heavy components:
  ```tsx
  const HeavyComponent = lazy(() => import('./HeavyComponent'));
  ```

### Image Optimization
- Place images in `public/` directory
- Use Vite's asset import for optimization:
  ```tsx
  import logo from '@/assets/logo.png';
  ```

### Bundle Size
- Tree-shaking is automatic with Vite
- Use ES modules for better tree-shaking
- Avoid large libraries when lightweight alternatives exist

## Common Patterns

### Error Handling

```tsx
try {
  await operation();
} catch (error) {
  console.error('Operation failed:', error);
  // Show user-friendly error message
}
```

### Loading States

```tsx
const [isLoading, setIsLoading] = useState(false);

async function handleSubmit() {
  setIsLoading(true);
  try {
    await submit();
  } finally {
    setIsLoading(false);
  }
}

return <Button disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</Button>;
```

### Environment Variables

- Create `.env` files at project root
- Access via `import.meta.env.VARIABLE_NAME`
- Prefix with `VITE_` for client-side variables
