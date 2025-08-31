# 🍽️ JTEats - Authentic Home Food Delivery Website

A modern, responsive food delivery website that connects customers with authentic home-cooked meals across India. Built with pixel-perfect design using HTML5, CSS3, and vanilla JavaScript.

![JTEats Logo](images/logo.png)

## � Project Overview

JTEats is a comprehensive food delivery platform featuring:
- **Smooth Scrolling Navigation** with slide animations between sections
- **Interactive Carousels** for popular food items with touch support
- **Responsive Design** that works perfectly on all devices
- **Authentic Home Kitchen** showcasing real home-cooked meals
- **Video Content Section** with custom player controls
- **Contact Form** with delivery illustration
- **Modern UI/UX** with hover effects and micro-interactions

## 🛠️ Technologies Used

### **Frontend Stack**
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox, Grid, and Custom Properties
- **Vanilla JavaScript**: Pure ES6+ code with no external dependencies
- **SVG Icons**: Scalable vector graphics for crisp visuals
- **Web Fonts**: Inter font family for clean typography

### **Design Principles**
- **Mobile-First Approach**: Responsive design starting from mobile
- **Progressive Enhancement**: Works without JavaScript
- **Cross-Browser Compatibility**: Tested on all major browsers
- **Performance Optimized**: Fast loading and smooth interactions

## 📁 Project Structure

```
JTEats/
├── index.html                    # Main HTML file with all sections
├── css/
│   └── style.css                # Complete stylesheet (1000+ lines)
├── js/
│   └── script.js                # JavaScript functionality
├── images/                      # All image assets
│   ├── logo.png                 # JTEats brand logo
│   ├── hero-food.jpg            # Hero section main image
│   ├── food image1.JPG          # Chef cooking illustration
│   ├── pizza1.jpg               # Home made pizza
│   ├── pizza2.jpg               # Tandoori chicken
│   ├── pizza3.jpg               # Chilli chicken
│   ├── pizza4.jpg               # Grilled chicken
│   ├── popular-pizza.jpg        # Popular pizza item
│   ├── popular-tandoori.jpg     # Popular tandoori chicken
│   ├── popular-chilli.jpg       # Popular chilli chicken
│   ├── delivery.JPG             # Contact section delivery illustration
│   └── video image.jpg          # Video section poster
├── video/
│   └── video.mp4                # Promotional video content
└── README.md                    # This documentation
```

## 🎨 Design Features & Images

### **🏠 Home Section**
![Hero Section](images/hero-food.jpg)
- **Hero Banner**: Authentic home food tagline with search functionality
- **Chef Illustration**: ![Chef](images/food%20image1.JPG) - Cooking demonstration
- **Call-to-Action**: Search bar for finding favorite foods

### **🍕 Home Kitchen Section**
The kitchen showcases authentic home-cooked meals:

| Image | Dish | Rating | Price |
|-------|------|--------|-------|
| ![Pizza 1](images/pizza1.jpg) | Home made pizza | ⭐ 4.7 | ₹190 |
| ![Pizza 2](images/pizza2.jpg) | Tandoori Chicken | ⭐ 4.3 | ₹184 |
| ![Pizza 3](images/pizza3.jpg) | Chilli Chicken | ⭐ 4.1 | ₹116 |
| ![Pizza 4](images/pizza4.jpg) | Grilled Chicken | ⭐ 4.5 | ₹220 |

### **🔥 Popular Items Carousel**
Interactive slider featuring trending dishes:

| Image | Item | Rating | Time | Price |
|-------|------|--------|------|-------|
| ![Popular Pizza](images/popular-pizza.jpg) | Home made pizza | ⭐ 4.7 | 50-70 min | ₹190 |
| ![Popular Tandoori](images/popular-tandoori.jpg) | Tandoori Chicken | ⭐ 4.3 | 15-25 min | ₹184 |
| ![Popular Chilli](images/popular-chilli.jpg) | Chilli Chicken | ⭐ 4.1 | 30-40 min | ₹116 |

### **📺 Video Section**
![Video Poster](images/video%20image.jpg)
- **Custom Video Player**: Promotional content about home-cooked food delivery
- **Play Button Overlay**: Interactive controls with smooth animations
- **Responsive Design**: Adapts to all screen sizes

### **📞 Contact Section**
![Delivery Illustration](images/delivery.JPG)
- **Contact Form**: Name, email, and message fields
- **Delivery Graphics**: Custom illustration showing delivery service
- **Responsive Layout**: Form and illustration side-by-side on desktop

## 🎨 Design Specifications

### **Color Palette**
```css
:root {
    --primary-green: #1AC073;    /* Main brand color */
    --secondary-teal: #2EBF91;   /* Secondary accent */
    --light-green: #F0FAF7;      /* Background tint */
    --orange: #F3BA00;           /* Accent/highlights */
    --light-gray: #F2F2F2;       /* Neutral background */
    --dark-gray: #333333;        /* Primary text */
    --text-gray: #666666;        /* Secondary text */
    --white: #FFFFFF;            /* Pure white */
}
```

### **Typography System**
```css
:root {
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
}
```

### **Layout Specifications**
- **Max Width**: 1440px (desktop optimal)
- **Container Padding**: 80px horizontal, 80px vertical
- **Responsive Breakpoints**:
  - Desktop: 1200px+
  - Tablet: 768px-1199px
  - Mobile: <768px
- **Grid System**: CSS Grid and Flexbox hybrid approach

## ✨ Key Features Implemented

### **🧭 Navigation System**
- **Fixed Header**: Stays at top during scrolling with green background
- **Smooth Scrolling**: Seamless transitions between sections with slide animations
- **Active States**: Visual feedback showing current section
- **Mobile Menu**: Responsive hamburger navigation for mobile devices
- **Hash URLs**: Direct linking to sections (#home, #menu, #about, #blog, #contact)

### **🏠 Home Section**
- **Hero Banner**: "Authentic Home food in India" with search functionality
- **Search Bar**: Interactive input with search button
- **Chef Illustration**: Engaging visual showing home cooking
- **Responsive Layout**: Adapts perfectly to all screen sizes

### **🍽️ Home Kitchen Grid**
- **Food Cards**: Interactive cards with hover effects
- **Rating System**: Star ratings with numerical values
- **Delivery Times**: Estimated preparation and delivery times
- **Add to Cart**: Interactive "+" buttons with visual feedback
- **Discount Badges**: 30% off indicators on select items

### **🔥 Popular Items Carousel**
- **Smooth Sliding**: Touch-friendly horizontal scrolling
- **Navigation Arrows**: Left/right controls with hover states
- **Responsive Cards**: Adapts to different screen sizes
- **Interactive Elements**: Add buttons and rating displays
- **Auto-sizing**: Calculates visible cards based on screen width

### **📺 Video/Blog Section**
- **Custom Video Player**: HTML5 video with custom controls
- **Play Button Overlay**: Large, centered play button
- **Poster Image**: Attractive thumbnail before video plays
- **Responsive Container**: Maintains aspect ratio across devices

### **ℹ️ About Section**
- **Company Story**: Mission and values presentation
- **Feature List**: Checkmark-styled benefits list
- **Dual Layout**: Text content with supporting imagery
- **Responsive Design**: Stacks vertically on mobile

### **📞 Contact Section**
- **Interactive Form**: Name, email, and message fields
- **Form Validation**: Client-side validation with visual feedback
- **Delivery Illustration**: Custom graphics showing delivery service
- **Responsive Layout**: Side-by-side on desktop, stacked on mobile

### **🎨 Visual Enhancements**
- **Hover Effects**: Subtle animations on interactive elements
- **Loading States**: Visual feedback during interactions
- **Smooth Transitions**: CSS transitions for professional feel
- **Consistent Spacing**: Uniform padding and margins throughout

## 🚀 Getting Started

### **Prerequisites**
- Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- No build tools required - pure HTML/CSS/JavaScript
- Optional: Local web server for optimal performance

### **Quick Start**
```bash
# Clone the repository
git clone https://github.com/yourusername/jteats-website.git

# Navigate to project directory
cd jteats-website

# Open in browser (or use live server)
open index.html
```

### **No Installation Required!**
This is a pure frontend project with no dependencies:
1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. All images and assets are included
4. No compilation or build process needed

### **Image Assets Included**

All images are properly sized and optimized:

**🖼️ Current Image Assets:**
- `logo.png` - JTEats brand logo (scalable)
- `hero-food.jpg` - Hero section main image
- `food image1.JPG` - Chef cooking illustration
- `pizza1.jpg` - Home made pizza (300x200px)
- `pizza2.jpg` - Tandoori chicken (300x200px)
- `pizza3.jpg` - Chilli chicken (300x200px)
- `pizza4.jpg` - Grilled chicken (300x200px)
- `popular-pizza.jpg` - Popular pizza item
- `popular-tandoori.jpg` - Popular tandoori chicken
- `popular-chilli.jpg` - Popular chilli chicken
- `delivery.JPG` - Contact section illustration
- `video image.jpg` - Video poster/thumbnail

**📹 Video Content:**
- `video/video.mp4` - Promotional video (optimized for web)

## 🎯 Interactive Functionality

### **🎠 Carousel System**
```javascript
// Popular Items Carousel
- Smooth sliding animations
- Touch/swipe support for mobile
- Navigation arrows with hover states
- Responsive card calculation
- Auto-sizing based on screen width
```

### **🧭 Navigation Features**
```javascript
// Smooth Scroll Navigation
- Hash-based URL routing (#home, #menu, etc.)
- Active link highlighting based on scroll position
- Mobile menu toggle functionality
- Smooth scrolling with proper offset for fixed header
```

### **🎬 Video Integration**
```javascript
// Custom Video Player
- HTML5 video with custom controls
- Play button overlay with smooth animations
- Poster image before video loads
- Responsive video container
```

### **📝 Form Handling**
```javascript
// Contact Form
- Client-side form validation
- Visual feedback on form submission
- Responsive form layout
- Input field focus states
```

## 📱 Responsive Breakpoints

### **Desktop (1200px+)**
- Full layout with all elements visible
- Side-by-side content sections
- Large carousel with multiple visible cards
- Horizontal navigation menu

### **Tablet (768px-1199px)**
- Adapted layout with adjusted spacing
- Stacked content where appropriate
- Medium carousel with fewer visible cards
- Compressed navigation

### **Mobile (<768px)**
- Single-column layout
- Stacked sections and content
- Mobile-optimized carousel (single card)
- Hamburger menu navigation
- Touch-friendly button sizes

## 🌐 Browser Compatibility

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| **Chrome** | 90+ | ✅ Full Support | Optimal performance |
| **Firefox** | 88+ | ✅ Full Support | All features working |
| **Safari** | 14+ | ✅ Full Support | iOS/macOS compatible |
| **Edge** | 90+ | ✅ Full Support | Windows optimized |

## ⚡ Performance Features

### **Optimization Techniques**
- **Optimized Images**: Compressed JPG/PNG files for fast loading
- **Efficient CSS**: Minimal selectors and optimized animations
- **Vanilla JavaScript**: No framework overhead, pure performance
- **Smooth Animations**: 60fps transitions and hover effects
- **Responsive Images**: Proper sizing for different screen densities

### **Loading Performance**
- **Fast Initial Load**: Critical CSS inlined, minimal HTTP requests
- **Progressive Enhancement**: Works without JavaScript
- **Mobile Optimized**: Touch-friendly interactions and gestures
- **Cached Assets**: Browser caching for repeat visits

### **Code Quality**
- **Clean HTML**: Semantic markup with proper accessibility
- **Modular CSS**: Organized stylesheets with CSS custom properties
- **Modern JavaScript**: ES6+ features with backward compatibility
- **Cross-Platform**: Consistent experience across all devices

## 🎨 Customization Guide

### **Adding New Food Items**
```html
<!-- Add to Home Kitchen or Popular Items -->
<div class="kitchen-card">
    <img src="./images/new-dish.jpg" alt="New Dish" class="kitchen-image">
    <div class="kitchen-info">
        <h3 class="kitchen-item-name">New Dish Name</h3>
        <div class="kitchen-rating">
            <span class="stars">★</span>
            <span class="rating-value">4.8</span>
            <span class="delivery-time">20-30 min</span>
        </div>
        <div class="kitchen-price">₹250</div>
    </div>
    <button class="add-btn">+</button>
</div>
```

### **Modifying Colors**
```css
/* Update CSS custom properties */
:root {
    --primary-green: #1AC073;    /* Change main brand color */
    --secondary-teal: #2EBF91;   /* Change secondary color */
    --orange: #F3BA00;           /* Change accent color */
    /* Update other colors as needed */
}
```

### **Extending Functionality**
- **Shopping Cart**: Add cart state management and checkout flow
- **User Authentication**: Implement login/signup functionality
- **Backend Integration**: Connect to API for dynamic content
- **Payment Gateway**: Add payment processing capabilities
- **Order Tracking**: Implement real-time order status updates

## 🚀 Deployment

### **Production Checklist**
- ✅ All images optimized and compressed
- ✅ Video files optimized for web delivery
- ✅ CSS and JavaScript minified (optional)
- ✅ HTTPS enabled for secure delivery
- ✅ Cross-browser testing completed
- ✅ Mobile responsiveness verified
- ✅ Performance testing done
- ✅ SEO meta tags added

### **Hosting Options**
- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with form handling
- **Vercel**: Fast global CDN deployment
- **Traditional Web Hosting**: Any standard web server

## 🏆 Project Highlights

### **✅ Technical Excellence**
- **Pixel-Perfect Design**: Matches design specifications exactly
- **Semantic HTML5**: Proper markup with accessibility features
- **Modern CSS3**: Flexbox, Grid, Custom Properties, Animations
- **Vanilla JavaScript**: Pure ES6+ code with no dependencies
- **Responsive Design**: Works flawlessly on all devices
- **Cross-Browser Support**: Compatible with all major browsers

### **✅ User Experience**
- **Smooth Navigation**: Seamless scrolling between sections
- **Interactive Elements**: Engaging hover effects and animations
- **Mobile-First**: Optimized for mobile devices
- **Fast Loading**: Optimized assets and efficient code
- **Intuitive Interface**: Easy-to-use navigation and interactions

### **✅ Code Quality**
- **Clean Architecture**: Well-organized file structure
- **Maintainable Code**: Clear naming conventions and comments
- **Performance Optimized**: Fast loading and smooth animations
- **Scalable Design**: Easy to extend and customize
- **Best Practices**: Following web development standards

---

## 📞 Contact & Support

**JTEats Development Team**
- 🌐 **Website**: [JTEats.com](https://jteats.com)
- 📧 **Email**: contact@jteats.com
- 📱 **Phone**: +91 XXXXX XXXXX

**Made with ❤️ for authentic home food lovers across India**

---

*This project demonstrates modern web development practices with a focus on user experience, performance, and maintainability.*
#   F o o d - D e l i v e r y - J o s h - T e c h  
 