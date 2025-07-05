# Arc-Tech - AI-Powered Digital Agents Store

A futuristic e-commerce platform for AI-powered digital agents, built with Next.js 14, React Three Fiber, and modern web technologies.

## 🚀 Features

- **3D Product Visualization**: Interactive 3D models for each AI agent using React Three Fiber
- **Modern UI/UX**: Dark theme with glassmorphism effects and smooth animations
- **Shopping Cart**: Persistent cart state management with Zustand
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Performance Optimized**: Lazy loading, code splitting, and optimized 3D rendering
- **SEO Ready**: Proper metadata, structured data, and social sharing

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **3D Graphics**: React Three Fiber + Drei + Three.js
- **State Management**: Zustand with persistence
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/arc-tech-store.git
cd arc-tech-store
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
arc-tech-store/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Products page
│   ├── cart/              # Cart page
│   ├── about/             # About page
│   └── api/               # API routes
├── components/            # React components
│   ├── 3d/               # 3D model components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── lib/                  # Utilities and data
│   ├── store.ts          # Zustand store
│   ├── types.ts          # TypeScript types
│   └── data.ts           # Mock data
├── public/               # Static assets
│   └── models/           # 3D model files (.glb)
└── ...                   # Config files
\`\`\`

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3B82F6 to #8B5CF6)
- **Secondary**: Purple gradient (#7C3AED to #06B6D4)
- **Accent**: Cyan (#06B6D4)
- **Background**: Dark gradients with glassmorphism

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold with gradient text effects
- **Body**: Regular weight with proper contrast

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Glow Effects**: CSS box-shadow animations
- **Floating Elements**: CSS keyframe animations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Build
\`\`\`bash
npm run build
npm start
\`\`\`

## 🔧 Configuration

### Environment Variables
Create a \`.env.local\` file for environment-specific settings:

\`\`\`env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
\`\`\`

### 3D Models
- Place \`.glb\` files in \`public/models/\`
- Update model paths in \`lib/data.ts\`
- Optimize models for web (< 5MB recommended)

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: \`git checkout -b feature/amazing-feature\`
3. Commit your changes: \`git commit -m 'Add amazing feature'\`
4. Push to the branch: \`git push origin feature/amazing-feature\`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hamza Alnasir**
- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- GitHub: [@hamza-alnasir](https://github.com/hamza-alnasir)
- LinkedIn: [Hamza Alnasir](https://linkedin.com/in/hamza-alnasir)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D capabilities
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Framer Motion](https://www.framer.com/motion/) for animations

---

Built with ❤️ by Hamza Alnasir
\`\`\`
