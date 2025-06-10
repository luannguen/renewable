# Hướng dẫn chuyển đổi từ HTML/CSS sang Next.js + Tailwind CSS

## 1. Bảng chuyển đổi Bootstrap/CSS cũ sang Tailwind CSS

### Layout và Grid System
| Class CSS cũ | Tailwind CSS equivalent | Mô tả |
|-------------|------------------------|-------|
| `.container` | `container mx-auto px-4` | Container responsive với padding |
| `.row` | `flex flex-wrap -mx-4` hoặc `grid` | Hàng với flexbox hoặc grid |
| `.col-12` | `w-full` | Chiều rộng 100% |
| `.col-md-6` | `md:w-1/2` | 50% width trên màn hình medium+ |
| `.col-md-4` | `md:w-1/3` | 33.33% width trên màn hình medium+ |
| `.col-md-3` | `md:w-1/4` | 25% width trên màn hình medium+ |
| `.col-sm-6` | `sm:w-1/2` | 50% width trên màn hình small+ |
| `.d-none` | `hidden` | Ẩn element |
| `.d-md-block` | `hidden md:block` | Hiện trên màn hình medium+ |

### Spacing (Margin & Padding)
| Class CSS cũ | Tailwind CSS | Mô tả |
|-------------|--------------|-------|
| `.pb-5` | `pb-20` hoặc `pb-12` | Padding bottom (tùy thuộc kích thước) |
| `.pt-5` | `pt-20` hoặc `pt-12` | Padding top |
| `.mb-5` | `mb-20` hoặc `mb-12` | Margin bottom |
| `.mt-5` | `mt-20` hoặc `mt-12` | Margin top |
| `.pb-3` | `pb-8` | Padding bottom nhỏ hơn |
| `.pt-3` | `pt-8` | Padding top nhỏ hơn |

### Text Alignment & Typography
| Class CSS cũ | Tailwind CSS | Mô tả |
|-------------|--------------|-------|
| `.text-center` | `text-center` | Canh giữa text |
| `.text-right` | `text-right` | Canh phải text |
| `.text-left` | `text-left` | Canh trái text |
| `.justify-content-center` | `justify-center` | Canh giữa flex items |
| `.align-self-center` | `self-center` | Canh giữa theo trục cross |

### Buttons
| Class CSS cũ | Tailwind CSS equivalent | Mô tả |
|-------------|------------------------|-------|
| `.btn` | `px-4 py-2 rounded font-medium transition-colors` | Button cơ bản |
| `.btn-primary` | `bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors` | Button chính |
| `.btn-light` | `bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold transition-colors` | Button sáng |
| `.btn-info` | `bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded font-medium transition-colors` | Button thông tin |
| `.btn-success` | `bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium transition-colors` | Button thành công |
| `.btn-sm` | `px-3 py-1.5 text-sm rounded` | Button nhỏ |
| `.btn-block` | `w-full px-4 py-2 rounded font-medium` | Button full width |

### Images
| Class CSS cũ | Tailwind CSS | Mô tả |
|-------------|--------------|-------|
| `.img-fluid` | `w-full h-auto` | Responsive image |

### Theme Classes (Custom)
| Class CSS cũ | Tailwind CSS equivalent | Mô tả |
|-------------|------------------------|-------|
| `.theme-dark` | `bg-gray-900 text-white` | Theme tối |
| `.theme-mint` | `bg-emerald-50 text-gray-800` | Theme mint |
| `.theme-blue` | `bg-blue-600 text-white` | Theme xanh dương |
| `.theme-products` | `bg-gray-50` | Background sản phẩm |

### Form Classes
| Class CSS cũ | Tailwind CSS | Mô tả |
|-------------|--------------|-------|
| `.form-control` | `w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent` | Input field |
| `.form-group` | `mb-4` | Group form fields |

### List Classes
| Class CSS cũ | Tailwind CSS | Mô tả |
|-------------|--------------|-------|
| `.mint-list.arrow` | `space-y-2 [&_li]:flex [&_li]:items-center [&_li:before]:content-['→'] [&_li:before]:mr-2 [&_li:before]:text-emerald-500` | List với arrow |
| `.mint-list.tick` | `space-y-2 [&_li]:flex [&_li]:items-center [&_li:before]:content-['✓'] [&_li:before]:mr-2 [&_li:before]:text-green-500` | List với tick |

### Order Classes
| Class CSS cũ | Tailwind CSS | Mô tả |
|-------------|--------------|-------|
| `.order-0` | `order-first` | Thứ tự đầu tiên |
| `.order-md-0` | `md:order-first` | Thứ tự đầu tiên trên màn hình medium+ |

## 2. Chuyển đổi component cụ thể

### Header/Navigation Component
```jsx
// components/Header.jsx
export default function Header() {
  return (
    <header id="header">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between py-4">
            <li>
              <a className="flex items-center" href="/">
                <img 
                  src="/images/rhub-logo.svg" 
                  alt="Renewable Hub Logo" 
                  className="w-full h-auto max-w-48" 
                />
              </a>
            </li>
            <li className="hidden md:flex space-x-8">
              <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About us
              </a>
              {/* Dropdown menu */}
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Our Services
                </a>
                <div className="absolute top-full left-0 invisible group-hover:visible bg-white shadow-lg rounded-lg p-6 w-96 z-50">
                  {/* Dropdown content */}
                </div>
              </div>
            </li>
            <li className="flex items-center space-x-4">
              <a 
                href="tel:01905317005" 
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <i className="fas fa-phone text-xl mr-2"></i>
                <span className="hidden sm:inline">Call us > 01905 317 005</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
```

### Banner Component
```jsx
// components/Banner.jsx
export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 self-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Renewable Hub</h1>
            <h2 className="text-2xl md:text-3xl mb-6">Green Solutions for business</h2>
            <p className="text-lg mb-8 leading-relaxed">
              We are passionate about protecting and sustaining the environment through{' '}
              <strong>ethical business practice</strong> and will work with your business 
              to build an energy strategy that will not only help you to become 'Green', 
              but will also save your business money
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-bold transition-colors" 
                href="/about"
              >
                Ethics
              </a>
              <a 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors" 
                href="#what"
              >
                What we do
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4 text-center self-center">
            <div className="relative inline-block">
              <a 
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl animate-pulse transition-colors" 
                href="#contact"
              >
                ACT NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

### Product Grid Component
```jsx
// components/ProductGrid.jsx
export default function ProductGrid() {
  const products = [
    {
      icon: 'carbon',
      title: 'Carbon Offsetting',
      description: "Helps your company on it's journey to Net Zero - while not the answer, offsetting IS part of the solution",
      link: '/carbon-offsetting'
    },
    // ... more products
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className={`w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center`}>
                <i className={`fas fa-${product.icon} text-2xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              <a 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded font-medium transition-colors inline-block" 
                href={product.link}
              >
                view details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

### Contact Form Component
```jsx
// components/ContactForm.jsx
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full sm:w-1/3 md:w-1/3 px-4 text-center mb-8 sm:mb-0">
            <a 
              className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-xl animate-pulse transition-colors" 
              href="#contact"
            >
              ACT<br />NOW
            </a>
          </div>
          <div className="w-full sm:w-2/3 px-4">
            <h2 className="text-3xl font-bold mb-4">Get started today...</h2>
            <p className="text-lg mb-8">You are one step away from saving your business money and going green</p>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    placeholder="Your name (required)"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    placeholder="Email (required)"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Phone number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                    placeholder="Phone number (optional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">How can we help?</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 h-32"
                    placeholder="Your message (required)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 3. Các lưu ý quan trọng khi chuyển đổi

### 3.1. Responsive Design
- Bootstrap sử dụng `.col-md-*` → Tailwind sử dụng `md:w-*`
- Breakpoints: `sm:` (640px+), `md:` (768px+), `lg:` (1024px+), `xl:` (1280px+)

### 3.2. Spacing System
- Bootstrap: `pb-5` → Tailwind: `pb-12` hoặc `pb-20` (tùy thuộc kích thước mong muốn)
- Tailwind spacing: `1` = 0.25rem, `4` = 1rem, `8` = 2rem, `12` = 3rem, `16` = 4rem, `20` = 5rem

### 3.3. Color System
- Định nghĩa custom colors trong `tailwind.config.js` nếu cần:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'renewable-green': '#8ec760',
        'renewable-blue': '#1e40af',
      }
    }
  }
}
```

### 3.4. Custom CSS khi cần thiết
- Sử dụng `@apply` directive cho các class phức tạp:
```css
/* globals.css */
.btn-renewable {
  @apply px-6 py-3 rounded-lg font-bold transition-colors bg-green-500 hover:bg-green-600 text-white;
}
```

## 4. Cấu trúc thư mục đề xuất

```
src/
├── app/
│   ├── page.js                 // Trang chủ
│   ├── about/page.js          // Trang about
│   ├── services/page.js       // Trang services
│   ├── contact/page.js        // Trang contact
│   └── layout.js              // Layout chung
├── components/
│   ├── ui/                    // Components UI cơ bản
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Card.jsx
│   ├── layout/                // Layout components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   └── sections/              // Sections của trang
│       ├── Banner.jsx
│       ├── ProductGrid.jsx
│       ├── ContactForm.jsx
│       └── Testimonials.jsx
└── lib/
    └── utils.js               // Utility functions
```

## 5. Các bước thực hiện

1. **Cài đặt Tailwind CSS** (đã hoàn thành)
2. **Tạo components cơ bản** (Button, Input, Card)
3. **Chuyển đổi layout chính** (Header, Footer)
4. **Chuyển đổi từng section** theo thứ tự
5. **Tối ưu responsive design**
6. **Thêm animations và transitions**
7. **Testing và debug**

Hướng dẫn này sẽ giúp bạn chuyển đổi hiệu quả từ HTML/CSS truyền thống sang Next.js + Tailwind CSS.

## Cập nhật Style Tiêu đề Section (Hoàn thành)

### Phân tích CSS gốc
- Tìm thấy style `.content h2` trong file `local34d2.css` với:
  - font-weight: 300
  - font-size: 2em
  - color: #1b695e (xanh lá)
  - font-family: 'Varela Round'
  - margin-bottom: 5px

### Giải pháp đã triển khai
1. **Tạo CSS class custom trong `globals.css`:**
   - `.section-heading`: Màu xanh lá #1b695e (cho section chính)
   - `.section-heading-dark`: Màu xanh đậm #11403a (cho WhatWeDo section)  
   - `.section-heading-light`: Màu trắng #ffffff (cho ContactForm section có nền tối)

2. **Cập nhật các component Next.js:**
   - **Statistics.jsx**: `<h2>` tiêu đề "What we've achieved to date..." → `.section-heading`
   - **WhatWeDo.jsx**: 
     - `<h2>` tiêu đề "What We Do" → `.section-heading`  
     - `<h2>` tiêu đề "The Journey" → `.section-heading-dark`
     - `<h2>` tiêu đề "The Result" → `.section-heading-dark`
   - **ProductGrid.jsx**: `<h2>` tiêu đề "Some of our Green products..." → `.section-heading`
   - **ContactForm.jsx**: `<h2>` tiêu đề "Get started today..." → `.section-heading-light`

### Kết quả
- Tất cả tiêu đề h2 của các section giờ đã có style giống hoàn toàn với web gốc
- Font Varela Round, font-weight 300, kích thước 2em
- Màu sắc phù hợp với từng section (xanh lá, xanh đậm, trắng)
- Layout và spacing giống web gốc

### Kiểm tra thực tế
- ✅ Next.js dev server đã chạy tại http://localhost:3000
- ✅ So sánh trực tiếp với web gốc file:///D:/nextjs%20project/RenewWeb/renew/renewa/index.html
- ✅ Xác nhận giao diện giống nhau về font, màu, kích thước tiêu đề

## ✅ CONVERSION COMPLETED SUCCESSFULLY!

**Date:** June 9, 2025  
**Status:** COMPLETE ✅

### Final Result
The entire website has been successfully converted from static HTML/CSS/JS to a modern Next.js application using Tailwind CSS. The conversion maintains:
- ✅ Identical visual appearance and layout
- ✅ All original fonts (Muli, Varela Round)
- ✅ All color schemes and themes
- ✅ All animations and effects
- ✅ All images and assets
- ✅ Responsive design
- ✅ Interactive carousel/slider functionality
- ✅ Icon sprites for products
- ✅ Contact forms and functionality

### Technical Success Summary
1. **All Components Working:** Header, Footer, Banner, WhatWeDo, Statistics, ProductGrid, CompanyLogos, ContactForm
2. **No Runtime Errors:** The "Element type is invalid" error was resolved
3. **Complete Asset Migration:** All images, icons, logos successfully migrated
4. **Font Integration:** Google Fonts and FontAwesome properly integrated
5. **Custom CSS:** Successfully merged with Tailwind CSS
6. **Carousel Implementation:** Custom carousel built without external dependencies

### Live Comparison
- **Original:** `file:///d:/nextjs%20project/RenewWeb/renew/renewa/index.html`
- **Next.js:** `http://localhost:3000`

Both versions are now running and visually identical! ✨

---

## Slider/Carousel Implementation với Embla Carousel

### Vấn đề với slider web gốc
Web gốc sử dụng Slick Carousel để hiển thị các sản phẩm dưới dạng slider. Khi chuyển sang Next.js, việc sử dụng thư viện slider jQuery như Slick gặp vấn đề tương thích.

### Giải pháp: Embla Carousel
Đã cài đặt và sử dụng `embla-carousel-react` với `embla-carousel-autoplay` để thay thế:

#### 1. Cài đặt packages
```bash
npm install embla-carousel-react embla-carousel-autoplay
```

#### 2. Tạo ProductGridEmbla.jsx
Component mới sử dụng Embla Carousel với các tính năng:
- ✅ **Autoplay**: Tự động chuyển slide
- ✅ **Responsive**: Hiển thị 1 slide trên mobile, 2 slides trên tablet, 3 slides trên desktop
- ✅ **Navigation**: Nút Previous/Next
- ✅ **Dots Indicator**: Chấm chỉ báo slide hiện tại
- ✅ **Loop**: Lặp lại từ đầu khi đến slide cuối
- ✅ **Icon Sprite**: Giữ nguyên hệ thống icon sprite từ web gốc

#### 3. Cấu trúc code chính
```jsx
// components/sections/ProductGridEmbla.jsx
'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

export default function ProductGridEmbla() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 2 },
        '(min-width: 1024px)': { slidesToScroll: 3 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  // ... navigation và dots logic
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">
          Some of our Green products and services...
        </h2>
        
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {products.map((product, index) => (
              <div key={index} className="embla__slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                {/* Product card content */}
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        {/* Dots indicator */}
      </div>
    </section>
  );
}
```

#### 4. CSS cho Embla Carousel
Đã thêm vào `globals.css`:
```css
.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
}

.embla__slide {
  flex: 0 0 auto;
  min-width: 0;
}
```

#### 5. Thay thế trong page.js
```jsx
// Thay đổi từ:
import ProductGrid from '@/components/sections/ProductGrid';

// Sang:
import ProductGridEmbla from '@/components/sections/ProductGridEmbla';

// Và trong JSX:
<ProductGridEmbla />
```

### So sánh với web gốc
| Tính năng | Web gốc (Slick) | Next.js (Embla) | Status |
|-----------|-----------------|-----------------|---------|
| Autoplay | ✅ | ✅ | ✅ |
| Responsive slides | ✅ | ✅ | ✅ |
| Navigation buttons | ✅ | ✅ | ✅ |
| Dots indicator | ✅ | ✅ | ✅ |
| Icon sprites | ✅ | ✅ | ✅ |
| Smooth animation | ✅ | ✅ | ✅ |
| Touch/swipe support | ✅ | ✅ | ✅ |

### Ưu điểm của Embla Carousel
1. **Modern**: Được thiết kế cho React/Vue/vanilla JS hiện đại
2. **Lightweight**: Nhỏ gọn hơn Slick Carousel
3. **TypeScript**: Hỗ trợ TypeScript đầy đủ
4. **Mobile-first**: Tối ưu cho thiết bị di động
5. **Accessible**: Tuân thủ các tiêu chuẩn accessibility
6. **Customizable**: Dễ dàng tùy chỉnh style và behavior

### Kết quả cuối cùng
✅ **ProductGridEmbla** đã thay thế hoàn toàn **ProductGrid** cũ  
✅ **Giao diện giữ nguyên** như web gốc  
✅ **Hiệu suất tốt hơn** so với slider tự code  
✅ **Tương thích hoàn hảo** với Next.js 14
