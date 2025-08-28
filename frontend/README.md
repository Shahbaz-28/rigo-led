# RIGO Lighting - Product Catalog

A modern, responsive product catalog website for RIGO Lighting, showcasing premium lighting solutions with an immersive user experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly across all devices
- **Product Catalog**: Complete product showcase with detailed information
- **Interactive Parallax**: Engaging card parallax section for product exploration
- **Search & Filter**: Advanced product search and category filtering
- **WhatsApp Integration**: Direct inquiry system via WhatsApp
- **Modern UI**: Clean, professional design with smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/          # Products listing page
│   └── product/[id]/      # Individual product pages
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, forms, etc.)
│   ├── navbar.tsx        # Navigation component
│   ├── hero-section.tsx  # Hero section
│   ├── trending-section.tsx # Product showcase
│   ├── card-parallax-section.tsx # Interactive parallax
│   └── why-choose-us.tsx # Company features
├── data/                 # Data files
│   ├── products.json     # Product catalog data
│   └── projects.ts       # Parallax section data
├── public/               # Static assets
│   └── images/           # Product images
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with company introduction
- Trending products showcase
- Interactive card parallax section
- Promotional content
- Why choose us section

### Products Page (`/products`)
- Complete product catalog
- Search functionality
- Category filtering
- Rating-based sorting
- Responsive grid layout

### Product Details (`/product/[id]`)
- Detailed product information
- Product gallery
- Specifications and features
- WhatsApp inquiry integration
- Related product suggestions

## 🎨 Customization

### Adding New Products
1. Add product images to `public/images/`
2. Update `data/products.json` with product details
3. Products will automatically appear in the catalog

### Styling
- Modify Tailwind classes in components
- Update color scheme in `tailwind.config.js`
- Custom animations in Framer Motion components

### WhatsApp Integration
Update the WhatsApp number in:
- `components/navbar.tsx`
- `app/product/[id]/page.tsx`
- `components/why-choose-us.tsx`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment variables:
```env
NEXT_PUBLIC_SITE_URL=your-site-url
NEXT_PUBLIC_WHATSAPP_NUMBER=your-whatsapp-number
```

### Tailwind Configuration
Customize colors, fonts, and other design tokens in `tailwind.config.js`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and inquiries:
- WhatsApp: [Your WhatsApp Number]
- Email: [Your Email]
- Website: [Your Website]

---

Built with ❤️ by [Your Name/Company]
