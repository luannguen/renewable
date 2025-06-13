# Kế hoạch Tích hợp API cho RenewWeb Frontend

## Tổng quan dự án

### Backend (Payload CMS + Next.js)

- **Port**: 3000 (mặc định)
- **Framework**: Next.js 15 + Payload CMS 3.39.1
- **Database**: MongoDB
- **Collections chính**:
  - Pages, Posts, Media, Categories
  - Products, Projects, Services
  - Events, EventRegistrations
  - Users, ContactSubmissions
  - Navigation, Banners, FAQs
  - Technologies, Tools, Resources

### Frontend (Next.js)

- **Port**: 5173 (dev mode)
- **Framework**: Next.js 15 + React 19
- **UI**: Tailwind CSS + Radix UI
- **State Management**: React Hook Form + Zod validation
- **HTTP Client**: Axios

## Phase 1: Thiết lập Infrastructure (Ưu tiên cao)

### Task 1.1: Cấu hình Environment Variables

**Thời gian**: 30 phút
**Mô tả**: Thiết lập biến môi trường cho việc kết nối API

**Frontend (.env.local)**:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_FRONTEND_URL=http://localhost:5173
```

**Backend (.env)**:

```env
FRONTEND_URL=http://localhost:5173
CORS_ORIGINS=http://localhost:5173,http://localhost:3000
```

### Task 1.2: Tạo API Client Service

**Thời gian**: 45 phút
**Mô tả**: Tạo service để quản lý tất cả API calls
**File**: `frontend/src/lib/api.js`

### Task 1.3: Thiết lập Error Handling

**Thời gian**: 30 phút
**Mô tả**: Tạo error boundary và error handling utilities
**File**: `frontend/src/lib/error-handler.js`

### Task 1.4: Tạo Response Interfaces/Types

**Thời gian**: 45 phút
**Mô tả**: Định nghĩa TypeScript interfaces cho API responses
**File**: `frontend/src/types/api.ts`

## Phase 2: Core Content API Integration (Ưu tiên cao)

### Task 2.1: Homepage Data API

**Thời gian**: 2 giờ
**Mô tả**: Tích hợp API cho trang chủ

**Backend APIs cần sử dụng**:

- `/api/homepage-settings` - Cài đặt homepage
- `/api/public/banners` - Banner hiển thị
- `/api/health` - Health check

**Frontend files cần update**:

- `src/app/HomeClient.jsx`
- `src/components/sections/HeroSection.jsx`
- `src/components/sections/ProductGrid.jsx`

### Task 2.2: Company Information API

**Thời gian**: 1.5 giờ
**Mô tả**: Tích hợp thông tin công ty và header

**Backend APIs**:

- `/api/company-info` (từ CompanyInfo global)
- `/api/header-info` (từ Header global)

**Frontend files**:

- `src/hooks/useCompanyInfo.js`
- `src/components/common/Header.jsx`
- `src/components/common/Footer.jsx`

### Task 2.3: Navigation API

**Thời gian**: 1 giờ
**Mô tả**: Dynamic navigation menu

**Backend APIs**:

- Payload CMS Navigation collection API

**Frontend files**:

- `src/hooks/useNavigation.js`
- `src/components/common/Navigation.jsx`

### Task 2.4: About Page API

**Thời gian**: 1.5 giờ
**Mô tả**: Trang giới thiệu với nội dung dynamic

**Backend APIs**:

- `/api/about-page` - About page settings
- `/api/pages` - Pages collection

**Frontend files**:

- `src/app/about-us/AboutUsClient.js`
- `src/components/about/AboutContent.jsx`

## Phase 3: Products & Services API (Ưu tiên trung bình)

### Task 3.1: Products Listing API

**Thời gian**: 2.5 giờ
**Mô tả**: Danh sách sản phẩm với pagination và filtering

**Backend APIs**:

- `/api/products` - Products collection
- `/api/products-categories` - Product categories
- `/api/products/[id]` - Single product detail

**Frontend files**:

- `src/hooks/useProducts.js`
- `src/app/products/page.jsx`
- `src/app/products/[slug]/page.jsx`
- `src/components/products/ProductGrid.jsx`
- `src/components/products/ProductCard.jsx`
- `src/components/products/ProductFilter.jsx`

### Task 3.2: Services API Integration

**Thời gian**: 2 giờ
**Mô tả**: Danh sách dịch vụ

**Backend APIs**:

- `/api/services` - Services collection
- `/api/service-categories` - Service categories

**Frontend files**:

- `src/hooks/useServices.js`
- `src/app/services/page.jsx`
- `src/app/services/[slug]/page.jsx`
- `src/components/services/ServicesGrid.jsx`

### Task 3.3: Projects Portfolio API

**Thời gian**: 2 giờ
**Mô tả**: Portfolio dự án

**Backend APIs**:

- `/api/projects` - Projects collection
- `/api/project-categories` - Project categories

**Frontend files**:

- `src/hooks/useProjects.js`
- `src/app/projects/page.jsx`
- `src/app/projects/[slug]/page.jsx`
- `src/components/projects/ProjectGrid.jsx`

## Phase 4: Dynamic Content API (Ưu tiên trung bình)

### Task 4.1: News/Blog API Integration

**Thời gian**: 2.5 giờ
**Mô tả**: Hệ thống tin tức/blog

**Backend APIs**:

- `/api/posts` - Posts collection
- `/api/categories` - Post categories

**Frontend files**:

- `src/hooks/usePosts.js`
- `src/app/news/page.jsx`
- `src/app/news/[slug]/page.jsx`
- `src/components/news/NewsList.jsx`
- `src/components/news/NewsCard.jsx`

### Task 4.2: Events System API

**Thời gian**: 3 giờ
**Mô tả**: Hệ thống sự kiện và đăng ký

**Backend APIs**:

- `/api/events` - Events collection
- `/api/events/filtered` - Filtered events
- `/api/events/count-by-category` - Event statistics
- `/api/event-registrations` - Registration system

**Frontend files**:

- `src/hooks/useEvents.js`
- `src/app/events/page.jsx`
- `src/app/events/[slug]/page.jsx`
- `src/components/events/EventsList.jsx`
- `src/components/events/EventRegistration.jsx`

### Task 4.3: Technologies & Tools API

**Thời gian**: 1.5 giờ
**Mô tả**: Showcase công nghệ và công cụ

**Backend APIs**:

- `/api/technologies` - Technologies collection
- `/api/tools` - Tools collection
- `/api/resources` - Resources collection

**Frontend files**:

- `src/hooks/useTechnologies.js`
- `src/components/tech/TechStack.jsx`
- `src/components/tools/ToolsGrid.jsx`

## Phase 5: Interactive Features API (Ưu tiên thấp)

### Task 5.1: Contact Form API

**Thời gian**: 2 giờ
**Mô tả**: Form liên hệ với validation

**Backend APIs**:

- `/api/contact-form` - Submit contact form
- `/api/contact` - Contact submissions

**Frontend files**:

- `src/hooks/useContactForm.js`
- `src/components/forms/ContactForm.jsx`
- `src/app/contact/page.jsx`

### Task 5.2: Search Functionality

**Thời gian**: 2.5 giờ
**Mô tả**: Tìm kiếm toàn site

**Backend APIs**:

- `/api/search/tools-resources` - Search endpoint
- Payload CMS search plugin

**Frontend files**:

- `src/hooks/useSearch.js`
- `src/components/search/SearchBar.jsx`
- `src/components/search/SearchResults.jsx`

### Task 5.3: FAQ System API

**Thời gian**: 1.5 giờ
**Mô tả**: Hệ thống FAQ dynamic

**Backend APIs**:

- `/api/faqs` - FAQ collection
- Custom FAQ endpoints từ backend

**Frontend files**:

- `src/hooks/useFAQs.js`
- `src/components/faq/FAQList.jsx`
- `src/app/faq/page.jsx`

## Phase 6: Performance & Optimization (Ưu tiên thấp)

### Task 6.1: Caching Strategy

**Thời gian**: 2 giờ
**Mô tả**: Implement caching cho API calls

**Implementation**:

- React Query/SWR integration
- Local storage caching
- Cache invalidation strategy

### Task 6.2: Loading States & Skeletons

**Thời gian**: 1.5 giờ
**Mô tả**: UI loading states

**Frontend files**:

- `src/components/ui/LoadingSkeleton.jsx`
- `src/components/ui/Spinner.jsx`

### Task 6.3: Error Pages & Fallbacks

**Thời gian**: 1 giờ
**Mô tả**: Error handling UI

**Frontend files**:

- `src/app/error.jsx`
- `src/app/not-found.jsx`
- `src/components/errors/ErrorBoundary.jsx`

## Task Checklist Summary

### Immediate Priority (Phase 1-2): ~9.5 giờ

- [ ] Environment setup
- [ ] API client service
- [ ] Homepage integration
- [ ] Company info integration
- [ ] Navigation system
- [ ] About page

### Short-term Priority (Phase 3): ~6.5 giờ

- [ ] Products API
- [ ] Services API
- [ ] Projects API

### Medium-term Priority (Phase 4): ~7 giờ

- [ ] News/Blog system
- [ ] Events system
- [ ] Technologies showcase

### Long-term Priority (Phase 5-6): ~9 giờ

- [ ] Contact forms
- [ ] Search functionality
- [ ] FAQ system
- [ ] Performance optimization
- [ ] Error handling

## Tổng thời gian ước tính: ~32 giờ

## Dependencies cần cài đặt

### Frontend

```json
{
  "react-query": "^3.39.0",
  "swr": "^2.2.0",
  "date-fns": "^2.29.0",
  "react-intersection-observer": "^9.4.0"
}
```

## Testing Strategy

### API Testing

- Unit tests cho API service functions
- Integration tests cho critical user flows
- Mock data cho development

### Frontend Testing

- Component testing với React Testing Library
- E2E testing với Playwright/Cypress
- Visual regression testing

## Deployment Checklist

- [ ] Environment variables configured
- [ ] CORS settings verified
- [ ] API rate limiting implemented
- [ ] Error monitoring setup (Sentry)
- [ ] Performance monitoring
- [ ] SSL certificates
- [ ] CDN configuration for static assets

## Best Practices

1. **Error Handling**: Luôn có fallback UI cho API errors
2. **Loading States**: Implement skeleton loading cho UX tốt hơn
3. **Caching**: Cache static content, invalidate khi cần
4. **Security**: Validate inputs, sanitize outputs
5. **Performance**: Lazy load components, optimize images
6. **SEO**: Server-side rendering cho content pages
7. **Accessibility**: ARIA labels, keyboard navigation
8. **Mobile**: Responsive design, touch-friendly UI

## Monitoring & Analytics

- API response times
- Error rates
- User engagement metrics
- Core Web Vitals
- Conversion tracking

---

**Lưu ý**: Kế hoạch này có thể điều chỉnh dựa trên requirements cụ thể và priority của business. Nên bắt đầu với Phase 1-2 để có foundation vững chắc trước khi tiến tới các features phức tạp hơn.
