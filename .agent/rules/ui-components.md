---
trigger: always_on
---

# Frontend Development Guidelines

## Design Philosophy

Create a **simple, modern interface with a space aesthetic** that emphasizes clean lines, subtle gradients, background-blur. The design should feel futuristic yet accessible, with careful attention to spacing and typography.

### Styling
The index.css class to edit and reference when needed is located in ./src
The project uses tailwind to apply css and shadcn for retrieving components
If you need other shadcn components use npx shadcn@latest add <component>

### Tailwind Configuration
All palette colors must be added to Tailwind config to enable usage like `bg-background`, `text-primary`, etc.

**Required Tailwind setup:**
```javascript
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: '#4392F1',
        secondary: '#074F57',
        surface: '#FFFFFF',
        background: '#16161D',
      }
    }
  }
}
```

## Interactive Elements

### Glow Effects
- **Buttons**: Apply subtle glow on hover using the specific glow classes already defined in index.css
- **Cards**: Add gentle border glow on focus/hover states, using custom classes in index.css
- **Interactive elements**: Use `ring` utilities with primary color for focus states

### Animation Standards

Follow this animation guidelines **ONLY** when the user explicitly asks you to animate things

#### Component Loading
Apply entrance animations **only** to:
- Main content sections
- Hero components
- Feature highlights
- Primary CTAs

**Avoid animating:**
- Every small component
- Repetitive list items
- Navigation elements

#### Recommended Animation Types
- `fade-in`: For content reveals
- `slide-up`: For cards and sections
- `scale-in`: For interactive elements
- `glow-pulse`: For emphasis

```css
/* Preferred approach for custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

### Animation Guidelines
- Use `transform` and `opacity` for smooth animations
- Limit concurrent animations
- Provide `prefers-reduced-motion` alternatives
- Keep animation durations under 500ms for micro-interactions

## Component Architecture

### Componentization Rules
**Always create reusable components for:**
- UI patterns used often
- Interactive elements with custom styling
- Complex layouts with specific spacing
- Any element with custom animations

### Component Naming
- Create a component from scratch only when needed, if you have to make a special button just install the standard button.tsx from shadcn, rename it and edit the component itself
- Use PascalCase in the export function: `SpaceButton`, `GlowCard`
- write all lowcase for the file: 'spacebutton.tsx'
- Keep names descriptive and specific

## ShadcN Integration

### Base Framework
- Use shadcn/ui as the foundation for all components
- Customize existing components to match space theme
- Maintain shadcn's accessibility standards

### Components Info
You have to use the shadcn MCP server to get needed infos about shadcn and its available components

### Component Requests
When needing new shadcn components, request installation via:
```bash
npx shadcn@latest add [component-name]
```
This command should be ran in the apps/{app} directory

### Customization Approach
1. **Start with shadcn base component**
2. **Apply color palette variables**
3. **Add space-themed styling**
4. **Implement glow effects**
5. **Add appropriate animations**

**IMPORTANT** 
Keep in mind I want you to **edit the component.tsx file itself, dont apply inline customization in the page, so its reusable**


## Code Standards

### CSS Classes Priority
1. Use Tailwind utilities first
2. Use CSS variables for theme colors
3. Create custom classes only for complex animations/effects

### Animation Implementation


### Responsive Design
- Mobile-first approach
- Use Tailwind breakpoints consistently
- Ensure glow effects work across devices
- Test animations on mobile devices

## Space Theme Elements

### Visual Characteristics
- **Gradients**: Subtle cosmic gradients using primary colors
- **Shadows**: Deep, soft shadows suggesting depth
- **Borders**: Minimal borders with subtle glow effects
- **Typography**: Clean, futuristic fonts with good spacing
- **Icons**: Space-themed icons when appropriate

### Spacing Standards
- Use consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64px)
- Generous white space for modern feel
- Asymmetric layouts for dynamic appearance

## Performance Considerations



### Loading States
- Implement skeleton screens for main content
- Use subtle pulse animations for loading states
- Ensure loading states match the space theme

## Quality Checklist

Before submitting any frontend component:

- [ ] Colors use Tailwind variables (bg-primary, text-secondary, etc.)
- [ ] Interactive elements have appropriate glow effects
- [ ] Animations are subtle and purposeful
- [ ] Component is reusable and properly named
- [ ] Responsive design works across devices
- [ ] Accessibility standards are maintained
- [ ] Performance impact is minimal
- [ ] Space theme is consistently applied