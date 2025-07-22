# Arc-Tech E-commerce Website

A premium AI agent marketplace built with Next.js 15, featuring advanced 3D models, payment integration, and modern UI/UX.

## Features

- 🤖 **AI Agent Showcase** - Interactive 3D models with detailed specifications
- 🛒 **E-commerce Functionality** - Shopping cart, checkout, and payment processing
- 💳 **Payment Integration** - Razorpay integration for secure payments
- 📧 **Email Notifications** - Automated email confirmations and admin notifications
- 🎨 **Modern UI/UX** - Glass morphism design with smooth animations
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Performance Optimized** - Built with Next.js 15 and modern best practices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Payment**: Razorpay
- **Email**: Nodemailer
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Razorpay account (for payments)

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/arc-tech-store.git
cd arc-tech-store
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Fill in your environment variables:
- `RAZORPAY_KEY_ID` - Your Razorpay key ID
- `RAZORPAY_KEY_SECRET` - Your Razorpay key secret
- `RAZORPAY_WEBHOOK_SECRET` - Your webhook secret
- `NEXT_PUBLIC_APP_URL` - Your app URL
- `ADMIN_EMAIL` - Admin email for notifications

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
arc-tech-store/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── (pages)/           # Page components
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── 3d/               # 3D model components
│   ├── ui/               # UI components
│   └── ...               # Feature components
├── lib/                  # Utilities and configurations
│   ├── store.ts          # Zustand store
│   ├── types.ts          # TypeScript types
│   └── utils.ts          # Utility functions
└── public/               # Static assets
\`\`\`

## Key Components

### AI Agent Showcase
- Interactive 3D models for each AI agent
- Rotating showcase with auto-play functionality
- Detailed specifications and pricing
- Smooth transitions and animations

### E-commerce Features
- Shopping cart with persistent state
- Checkout process with payment integration
- Order management and tracking
- Email confirmations

### 3D Models
- Custom 3D models for each AI agent type
- Realistic materials and lighting
- Interactive controls and animations
- Optimized for performance

## Payment Integration

The application uses Razorpay for payment processing:

1. **Subscription Flow**: Users can subscribe to AI agents
2. **Payment Processing**: Secure payment handling via Razorpay
3. **Webhooks**: Automated order confirmation and email notifications
4. **Admin Notifications**: Real-time notifications for new orders

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the application:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## Environment Variables

Required environment variables:

\`\`\`env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_APP_URL=https://your-domain.com
ADMIN_EMAIL=admin@your-domain.com
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@arctech.com or create an issue on GitHub.
