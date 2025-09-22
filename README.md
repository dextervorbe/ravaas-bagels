# 🐕 Ravaa's Bagels Website 🥯

A cozy and unique website for Ravaa's Bagels, inspired by our beloved dog Ravaa! Built with React and Tailwind CSS.

## 🌟 About

This website was created with love and a little dog hair! Ravaa's Bagels is a family-owned bagel shop in Wading River, NY, where every bagel tells a story and every story starts with our beloved Ravaa.

**Tagline:** "Barking up the right tree since 2024!"

## 🚀 Features

- **Responsive Design** - Looks great on desktop, tablet, and mobile
- **Interactive Menu** - Filterable menu with categories (Breakfast, Lunch, Drinks)
- **Popular Items Carousel** - Rotating showcase of Ravaa's favorite items
- **Customer Reviews** - Rotating carousel of 5-star customer reviews
- **Smooth Animations** - Delightful interactions powered by Framer Motion
- **Custom Branding** - Colors and design inspired by Ravaa's personality
- **DoorDash Integration** - Direct ordering links
- **Social Media** - Instagram integration
- **Auto-Scroll to Top** - Seamless navigation experience
- **Shared Image Mapping** - Centralized image management system

## 🎨 Design

### Color Palette
- **Primary Orange:** `#FF8C00` - Warm and inviting
- **Sky Blue:** `#87CEEB` - Cheerful and bright
- **Bright Red:** `#DC143C` - Bold and energetic
- **Cream:** `#FFF8DC` - Soft and cozy
- **Golden Brown:** `#D2691E` - Like fresh bagels
- **Dark Brown:** `#8B4513` - Rich and earthy

### Typography
- **Headings:** Poppins (friendly, rounded)
- **Body Text:** Inter (clean, readable)

## 📁 Project Structure

```
ravaas-bagels/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation and logo
│   │   ├── Hero.jsx            # Hero section with tagline
│   │   ├── PopularItems.jsx    # Rotating carousel
│   │   ├── Reviews.jsx         # Customer reviews carousel
│   │   ├── ScrollToTop.jsx     # Auto-scroll navigation
│   │   ├── About.jsx           # About Ravaa story
│   │   ├── LocationHours.jsx   # Address and hours
│   │   ├── SocialMedia.jsx     # Instagram integration
│   │   ├── MenuFilter.jsx      # Category filtering
│   │   ├── MenuItem.jsx        # Individual menu items
│   │   └── Footer.jsx          # Footer with links
│   ├── pages/
│   │   ├── Home.jsx            # Homepage
│   │   └── Menu.jsx            # Menu page
│   ├── data/
│   │   ├── breakfast.json      # Breakfast menu items
│   │   ├── lunch.json          # Lunch menu items
│   │   └── drinks.json         # Drinks menu items
│   ├── utils/
│   │   └── imageMapping.js     # Shared image mapping utility
│   ├── styles/
│   │   └── globals.css         # Tailwind CSS and custom styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # React entry point
├── images/                     # All menu and logo images
├── public/                     # Static assets
└── package.json               # Dependencies
```

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router DOM
- **Icons:** Emoji (🐕🥯☕🥓)

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ravaas-bagels
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Pages

### Homepage (`/`)
- Hero section with Ravaa's tagline
- Popular items carousel
- About Ravaa story
- Location and hours
- Social media links

### Menu Page (`/menu`)
- Filterable menu by category
- All menu items with images and descriptions
- Popular item badges
- Customer reviews carousel
- Order now call-to-action

## 🍽️ Menu Categories

### Breakfast
- Fresh bagels with various toppings
- Egg combinations
- Pancakes and French toast
- Signature items like "Hungry Man Hero"

### Lunch
- Sandwiches and wraps
- Salads
- Hot items
- Sides like home fries

### Drinks
- Coffee and tea
- Cold beverages
- Energy drinks
- Juices

## 🎯 Popular Items

The website features a rotating carousel of popular items:
- 2 Eggs Bacon and Cheese
- 2 Eggs and Cheese
- 2 Eggs and Bacon
- 2 Eggs, Sausage & Cheese
- 2 Eggs & Sausage
- 2 Eggs Sandwich
- Cream Cheese Bagel
- Hungry Man Hero

## ⭐ Customer Reviews

The menu page includes a rotating carousel of 5-star customer reviews from DoorDash, featuring:
- Real customer testimonials
- Star ratings display
- Customer avatars with generated colors
- Auto-rotating every 5 seconds

## 📍 Location & Hours

**Address:** 6278 Route 25a, Wading River, NY 11792-2009
**Hours:** 5:30 AM - 2:30 PM (Daily)

## 🔗 External Links

- **Order Online:** [DoorDash](https://www.doordash.com/store/2536346?utm_source=mx_share)
- **Instagram:** [@ravaasbagels](https://www.instagram.com/ravaasbagels?igsh=MTRjOXN5OWttdXcydw==)

## 🔄 Recent Improvements

### Latest Updates
- **Customer Reviews Section** - Added rotating carousel of 5-star reviews on menu page
- **Auto-Scroll Navigation** - Users automatically scroll to top when navigating between pages
- **Shared Image Mapping** - Centralized image management system for better maintainability
- **Price Formatting** - Consistent 2-decimal place pricing display across all components
- **DoorDash Integration** - Updated all ordering links to use DoorDash instead of UberEats
- **Dynamic Popular Items** - Popular items carousel now dynamically filters from all menu categories
- **Code Refactoring** - Eliminated duplicate code by creating shared utilities

### Technical Improvements
- Created `src/utils/imageMapping.js` for centralized image path management
- Added `ScrollToTop` component for seamless navigation experience
- Implemented `Reviews` component with auto-rotating customer testimonials
- Updated all components to use shared image mapping utility
- Fixed JSON syntax issues and improved data consistency

## 🎨 Customization

### Adding New Menu Items
1. Edit the appropriate JSON file in `src/data/`
2. Add the image to the `images/` folder
3. Update the image mapping in `src/utils/imageMapping.js`

### Changing Colors
1. Edit `tailwind.config.js` to modify the color palette
2. Update `src/styles/globals.css` for custom component styles

### Adding New Pages
1. Create a new component in `src/components/`
2. Add a new page in `src/pages/`
3. Update the routing in `src/App.jsx`

## 🐕 About Ravaa

This whole bagel shop started with two things: a love of chewy, golden bagels and the boundless energy of our dog, Ravaa. She's the kind of pup who believes every bagel crumb is a personal gift from the universe — and honestly, who are we to argue?

We wanted a space that feels like Ravaa on her best day: playful, welcoming, and a little mischievous. So we kept things simple — hand-rolled dough, kettle-boiled, baked golden. No shortcuts, no fluff (well, except Ravaa).

## 📄 License

This project is created for Ravaa's Bagels. All rights reserved.

## 🤝 Contributing

This is a personal project for Ravaa's Bagels. If you have suggestions or find issues, please feel free to reach out!

---

**Made with ❤️ and a little dog hair by the Ravaa's Bagels team**

*"So if you're here for good food, good vibes, and maybe a tail wag or two, welcome home. Ravaa already considers you family."*

