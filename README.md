# KodNest Premium Build System Design System

## Philosophy
**Calm • Intentional • Coherent • Confident**

A professional design system for serious B2C SaaS products. No flashy effects, no playful elements—just purposeful design that commands respect through restraint.

## Color System
- **Background**: `#F7F6F3` (off-white)
- **Primary Text**: `#111111` (deep black)
- **Accent**: `#8B0000` (deep red)
- **Success**: `#2E5B2E` (muted green)
- **Warning**: `#8B5A2B` (muted amber)

*Maximum 4 colors across entire system*

## Typography
- **Headings**: Playfair Display (serif) - Confident, generous spacing
- **Body**: Inter (sans-serif) - 16–18px, line-height 1.6–1.8
- **Max text width**: 720px for readability
- **No decorative fonts or random sizes**

## Spacing System
Consistent 8px scale: `8px, 16px, 24px, 40px, 64px`
Never use arbitrary spacing values.

## Layout Structure
Every page follows: `[Top Bar] → [Context Header] → [Primary Workspace + Secondary Panel] → [Proof Footer]`

### Top Bar
- Left: Project name
- Center: Progress indicator (Step X / Y)
- Right: Status badge (Not Started / In Progress / Shipped)

### Context Header
- Large serif headline
- One-line subtext
- Clear purpose, no marketing language

### Primary Workspace (70%)
- Main product interaction area
- Clean cards, predictable components
- No visual crowding

### Secondary Panel (30%)
- Step explanation
- Copyable prompt box
- Action buttons: Copy, Build in Lovable, It Worked, Error, Add Screenshot

### Proof Footer
Persistent checklist requiring user proof:
- □ UI Built (commit hash)
- □ Logic Working (test results)
- □ Test Passed (coverage %)
- □ Deployed (environment)

## Component Guidelines

### Buttons
- **Primary**: Solid deep red
- **Secondary**: Outlined
- **Consistent**: Same hover effects and border radius everywhere

### Form Elements
- Clean borders
- No heavy shadows
- Clear focus states

### Cards
- Subtle border
- No drop shadows
- Balanced padding

## Interaction Rules
- Transitions: 150–200ms ease-in-out
- No bounce effects
- No parallax animations
- No decorative motion

## Error & Empty States
- **Errors**: Explain what went wrong + how to fix (never blame user)
- **Empty States**: Provide clear next action (never feel dead)

## Files Included
- `design-system.css` - Complete CSS implementation
- `index.html` - Live demonstration
- `README.md` - This documentation

This design system ensures visual consistency across all KodNest products while maintaining the premium, professional aesthetic expected from enterprise software.