# Visual Enhancement Reference Guide

## 🎨 Quick Reference for Developers

### Typography Responsive Pattern
```jsx
// Large headings (h1)
className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"

// Section headings (h2)
className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"

// Body text
className="text-base sm:text-lg lg:text-xl"
```

### Spacing Responsive Pattern
```jsx
// Section vertical padding
className="py-12 sm:py-16 lg:py-28"

// Grid gaps
className="gap-6 lg:gap-8"

// Card padding
className="p-6 sm:p-8 lg:p-10"

// Component spacing
className="space-y-3 xs:space-y-0 xs:space-x-3 sm:space-x-4"
```

### Mobile-First Button Pattern
```jsx
<Button
  asChild
  size="lg"
  className="w-full xs:w-auto"  // Full on mobile, auto on tablet+
>
  <Link to="/path">
    <span>Action</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
  </Link>
</Button>
```

### Responsive Grid Pattern
```jsx
// Stacks on mobile, multi-column on larger screens
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
  {/* Items auto-adjust */}
</div>
```

### Icon Scaling Pattern
```jsx
<Icon className="w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10" />
```

---

## 🎯 Common Component Styles

### Card Component
```jsx
<Card className="hover:shadow-large transition-all duration-300 border border-border/50 hover:border-primary/30 program-card">
  <CardContent className="p-8">
    {/* Content */}
  </CardContent>
</Card>
```

### Section Header
```jsx
<div className="text-center mb-10 sm:mb-14 lg:mb-16 animate-fade-in">
  <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-4">
    Title <span className="bg-gradient-primary bg-clip-text text-transparent">Accent</span>
  </h2>
  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">Subtitle</p>
</div>
```

### CTA Button
```jsx
<Button
  asChild
  size="lg"
  className="bg-gradient-primary hover:opacity-90 shadow-medium group"
>
  <Link to="/admissions" className="flex items-center space-x-2">
    <span>Call to Action</span>
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </Link>
</Button>
```

### Stat Card
```jsx
<div className="text-center p-6 sm:p-8 bg-card rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 border border-border/50 hover:border-primary/30">
  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-soft">
    <Icon className="text-primary-foreground" />
  </div>
  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1 sm:mb-2">Value</div>
  <div className="text-base sm:text-lg font-semibold text-primary mb-1 sm:mb-2">Label</div>
  <div className="text-xs sm:text-sm text-muted-foreground">Description</div>
</div>
```

---

## 🎭 Hover & Animation Effects

### Smooth Card Hover (Program Cards)
```css
.program-card {
  transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.35s ease-out;
}

.program-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px -10px rgba(237, 80, 150, 0.2);
}
```

### Smooth Icon Hover
```css
.icon-hover {
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.icon-hover:hover {
  transform: scale(1.15) rotate(-5deg);
}
```

### Arrow Animation
```jsx
className="group-hover:translate-x-1 transition-transform"
// Moves 0.25rem to the right on hover
```

---

## 📱 Mobile-Specific Utilities

### Touch-Friendly Sizing
```jsx
// Button minimum tap target: 44x44px
className="w-10 h-10"  // 40px base, padding adds buffer

// Link spacing for thumb accessibility
className="space-y-3"  // 12px gap between touch targets
```

### Full-Width Pattern
```jsx
// Stack vertically on mobile, horizontally on tablet+
className="flex flex-col xs:flex-row"
className="space-y-3 xs:space-y-0 xs:space-x-3"
```

### Container Padding
```jsx
// Standard container with responsive padding
className="px-4 lg:px-8"
// Mobile: 16px sides (32px total)
// Desktop: 32px sides (64px total)
```

---

## 🎪 Responsive Text Sizing

### Hero Title Pattern
```
3xl  (30px)  → Mobile phones
5xl  (48px)  → Tablets  
6xl  (60px)  → Desktops
8xl  (96px)  → Large screens
```

### Heading Pattern
```
2xl  (24px)  → Mobile
3xl  (30px)  → Tablets
4xl  (36px)  → Desktops
5xl  (48px)  → Large screens
```

### Body Text Pattern
```
text-base (16px) → Mobile
text-lg   (18px) → Tablets/Desktops
text-xl   (20px) → Large screens
```

---

## 🎯 Color & Shadow System

### Shadow Transitions
```jsx
className="shadow-soft hover:shadow-large transition-all duration-300"

// shadow-soft: Light shadows for resting state
// shadow-large: Deep shadows for hover state
// 0.35s easing: Smooth, professional feel
```

### Border System
```jsx
className="border border-border/50 hover:border-primary/30"

// Subtle borders in resting state
// Highlighted on hover with primary color
// Maintains theme consistency
```

### Gradient Accents
```jsx
className="bg-gradient-primary bg-clip-text text-transparent"

// Applied only to text for hierarchy
// Never to background (visual clutter)
// Creates professional emphasis
```

---

## 🔄 Responsive Component Examples

### Hero Section (Mobile-First)
```tsx
<section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
      Title with <span className="bg-gradient-primary bg-clip-text text-transparent">Gradient</span>
    </h1>
    <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mt-4 sm:mt-6">Description</p>
    <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 mt-6 sm:mt-10">
      <Button className="w-full xs:w-auto">Primary Action</Button>
      <Button variant="outline" className="w-full xs:w-auto">Secondary</Button>
    </div>
  </div>
</section>
```

### Stats Section (Responsive Grid)
```tsx
<section className="py-12 sm:py-16 lg:py-28">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
    {stats.map(stat => (
      <div key={stat.id} className="p-6 sm:p-8 bg-card rounded-2xl hover:shadow-large transition-all">
        <Icon className="w-6 sm:w-8" />
        <h3 className="text-2xl sm:text-3xl font-bold mt-4">{stat.value}</h3>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">{stat.label}</p>
      </div>
    ))}
  </div>
</section>
```

### Footer (Responsive Columns)
```tsx
<footer className="py-16 lg:py-20">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div>
      <h4 className="font-bold text-foreground mb-5 text-base">Section</h4>
      <ul className="space-y-3">
        {/* Links */}
      </ul>
    </div>
  </div>
</footer>
```

---

## 🚀 Implementation Tips

### Do's ✅
- ✅ Use responsive typography from smallest to largest
- ✅ Stack components vertically on mobile first
- ✅ Ensure buttons/links are 44x44px minimum
- ✅ Use consistent spacing scale (3, 4, 6, 8, 12 units)
- ✅ Apply transitions smoothly (0.35s cubic-bezier)
- ✅ Test on real mobile devices

### Don'ts ❌
- ❌ Don't use fixed widths for responsive components
- ❌ Don't apply gradients to background (visual clutter)
- ❌ Don't use hover-only information (mobile can't hover)
- ❌ Don't forget `group` classes for parent-child hover effects
- ❌ Don't apply multiple competing animations
- ❌ Don't ignore accessibility on responsive designs

---

## 📊 Responsive Breakpoint Usage

```jsx
// Common patterns in codebase
className="xs:w-auto"           // At tablet: auto width
className="sm:text-lg"          // At tablet: larger text
className="md:grid-cols-2"      // At medium: 2 columns
className="lg:px-8"             // At desktop: more padding
className="lg:gap-10"           // At desktop: larger gaps
className="xl:text-8xl"         // At large: extra large text
```

---

## 🎬 Animation Easing Reference

```css
/* Smooth bounce easing (used throughout) */
cubic-bezier(0.34, 1.56, 0.64, 1)

/* Standard ease-out (shadows) */
ease-out

/* Duration guidelines */
0.35s → Standard transitions (most effects)
0.6s  → Slower animations (image zoom)
0.3s  → Faster interactions (color change)
```

---

## 🔍 Testing Checklist for New Components

- ✅ Looks good on 375px (mobile)
- ✅ Looks good on 768px (tablet)
- ✅ Looks good on 1024px (desktop)
- ✅ Looks good on 1280px (large)
- ✅ Touch targets are 44x44px minimum
- ✅ Text is readable without zooming
- ✅ Buttons work on all devices
- ✅ No horizontal scrolling
- ✅ Hover effects smooth and visible
- ✅ Accessibility maintained

---

**Last Updated**: November 13, 2025
**Version**: 1.0
**Status**: Complete ✅
