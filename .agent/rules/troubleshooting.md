---
trigger: model_decision
description: Use this whenever I am asking you to fix a problem.
---

# Troubleshooting & Resources

## Common Issues

**Translations not loading**
- Check that JSON files are valid
- Verify language codes match in `i18n.ts` and translation files
- Clear browser cache and restart dev server

**Tailwind styles not applying**
- Ensure `@tailwind` directives are in `src/index.css`
- Check that `content` paths in `tailwind.config.ts` include your files
- Run `npm run build` to regenerate Tailwind cache (v4)

**Vike page not found**
- Verify `+Page.tsx` exists in the route directory
- Check file name is exactly `+Page.tsx` (case-sensitive)
- Restart dev server after adding new pages

**TypeScript errors**
- Ensure `tsconfig.json` path aliases are correct
- Run `npm install` to ensure all @types packages are installed
- Restart TypeScript server in your IDE

## Resources

- [Vike Documentation](https://vike.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [i18next Documentation](https://www.i18next.com/)
- [Shadcn/ui Documentation](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
