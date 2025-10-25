# IIT Gandhinagar PG Diploma Programs Website

[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF.svg)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)

A modern, responsive website for IIT Gandhinagar's Postgraduate Diploma Programs in Data Science, AI, and Software Development. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- 🧩 Reusable shadcn-style components
- 🛠 Built with TypeScript for type safety
- 📊 Interactive program cards and FAQ accordions
- 🔄 Smooth animations and transitions
- 🎯 SEO-friendly with meta tags

## 🚀 Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd iitgn-pgd-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to see the site.

## 🛠 Development

### Prerequisites

- Node.js 18+ and npm
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/    # Reusable UI components
├── pages/        # Page components for routing
├── hooks/        # Custom React hooks
├── lib/          # Utility functions and constants
└── App.tsx       # Root component

public/           # Static assets
└── logo.png      # Site logo & favicon
```

## 🎨 UI Components

The site uses a collection of custom components built with Tailwind CSS and shadcn/ui:

- Header with responsive navigation
- Interactive program cards
- FAQ accordion
- Contact forms
- Timeline components
- And more...

## 🔧 Configuration

Key configuration files:

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS theme
- `tsconfig.json` - TypeScript settings
- `components.json` - shadcn/ui settings

## 📦 Deployment

Build the project:

```bash
npm run build
```

The `dist/` folder will contain optimized production files ready for deployment to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.