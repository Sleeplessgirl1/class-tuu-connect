# SKILO - Installation Guide

## Prerequisites

Before installing SKILO, make sure you have the following installed on your system:

- **Node.js** (version 18.0.0 or higher)
- **npm** (version 8.0.0 or higher) or **yarn** (version 1.22.0 or higher)
- **Git** (for cloning the repository)

### Installing Node.js

If you don't have Node.js installed, we recommend using **nvm** (Node Version Manager):

```bash
# Install nvm (Linux/macOS)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install and use Node.js LTS
nvm install --lts
nvm use --lts
```

For Windows, download Node.js from [nodejs.org](https://nodejs.org/)

## Installation Steps

### 1. Clone the Repository

```bash
git clone <YOUR_GIT_URL>
cd skilo
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

### 3. Start Development Server

```bash
# Using npm
npm run dev

# Using yarn
yarn dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |

## Project Structure

```
skilo/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── robots.txt
├── src/                   # Source code
│   ├── assets/           # Images and static files
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components (shadcn-ui)
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Hero.tsx     # Hero section
│   │   └── ...
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── App.tsx          # Main application component
│   ├── index.css        # Global styles and design tokens
│   └── main.tsx         # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn-ui** - Component library
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow the existing component structure
- Use semantic tokens from the design system (index.css)
- Implement responsive design with Tailwind classes

### Component Guidelines
- Keep components small and focused
- Use the established design system colors
- Implement proper accessibility attributes
- Use existing UI components from `src/components/ui/`

## Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Change the port in vite.config.ts or kill the process using port 8080
lsof -ti:8080 | xargs kill -9
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Getting Help

1. Check the [Lovable Documentation](https://docs.lovable.dev/)
2. Review the project's GitHub issues
3. Join the [Lovable Discord community](https://discord.com/channels/1119885301872070706/1280461670979993613)

## Deployment

### Using Lovable (Recommended)
1. Open your project in [Lovable](https://lovable.dev)
2. Click the "Publish" button in the top-right corner
3. Your app will be deployed automatically

### Manual Deployment
```bash
# Build for production
npm run build

# The dist/ folder contains the production-ready files
# Upload the contents to your hosting provider
```

## Environment Setup

SKILO uses environment variables for configuration. Create a `.env.local` file in the root directory:

```env
# Add your environment variables here
# VITE_API_URL=https://your-api-url.com
```

## License

This project is proprietary software. All rights reserved.

## Support

For technical support or questions about SKILO, please contact the development team or refer to the project documentation.