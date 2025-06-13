// API Response Types và Interfaces
// File: frontend/src/types/api.ts

export interface BaseApiResponse<T = any> {
    success: boolean;
    data: T;
    message?: string;
    totalDocs?: number;
    totalPages?: number;
    page?: number;
    hasNextPage?: boolean;
    hasPrevPage?: boolean;
}

export interface PaginationParams {
    page?: number;
    limit?: number;
    sort?: string;
    order?: 'asc' | 'desc';
}

export interface SearchParams extends PaginationParams {
    q?: string;
    category?: string;
    featured?: boolean;
    published?: boolean;
}

// Company Info Types
export interface ContactSection {
    address: string;
    phone: string;
    email: string;
    hotline?: string;
    workingHours?: string;
    fax?: string;
}

export interface SocialMedia {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    telegram?: string;
    zalo?: string;
}

export interface Maps {
    googleMapsEmbed?: string;
    latitude?: string;
    longitude?: string;
}

export interface Logo {
    url: string;
    alt: string;
    width?: number;
    height?: number;
}

export interface CompanyInfo {
    id: string;
    companyName: string;
    companyShortName?: string;
    companyDescription?: string;
    contactSection: ContactSection;
    socialMedia: SocialMedia;
    maps: Maps;
    logo?: Logo;
    updatedAt: string;
    createdAt: string;
}

// Media Types
export interface MediaItem {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width?: number;
    height?: number;
    alt?: string;
    url: string;
    thumbnailURL?: string;
    sizes?: {
        [key: string]: {
            url: string;
            width: number;
            height: number;
        };
    };
}

// Category Types
export interface Category {
    id: string;
    name: string;
    slug: string;
    description?: string;
    image?: MediaItem;
    parent?: Category;
    children?: Category[];
    updatedAt: string;
    createdAt: string;
}

// Product Types
export interface Product {
    id: string;
    title: string;
    slug: string;
    description?: string;
    content?: any; // Lexical content
    featuredImage?: MediaItem;
    gallery?: MediaItem[];
    price?: number;
    salePrice?: number;
    category?: Category;
    categories?: Category[];
    tags?: string[];
    specifications?: {
        [key: string]: string;
    };
    inStock: boolean;
    featured: boolean;
    published: boolean;
    seo?: SEOData;
    updatedAt: string;
    createdAt: string;
}

// Service Types
export interface Service {
    id: string;
    title: string;
    slug: string;
    description?: string;
    content?: any; // Lexical content
    featuredImage?: MediaItem;
    gallery?: MediaItem[];
    category?: Category;
    categories?: Category[];
    features?: string[];
    benefits?: string[];
    pricing?: {
        basic?: number;
        standard?: number;
        premium?: number;
    };
    featured: boolean;
    published: boolean;
    seo?: SEOData;
    updatedAt: string;
    createdAt: string;
}

// Project Types
export interface Project {
    id: string;
    title: string;
    slug: string;
    description?: string;
    content?: any; // Lexical content
    featuredImage?: MediaItem;
    gallery?: MediaItem[];
    category?: Category;
    categories?: Category[];
    client?: string;
    startDate?: string;
    endDate?: string;
    status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
    technologies?: Technology[];
    teamSize?: number;
    budget?: number;
    featured: boolean;
    published: boolean;
    seo?: SEOData;
    updatedAt: string;
    createdAt: string;
}

// Technology Types
export interface Technology {
    id: string;
    name: string;
    slug: string;
    description?: string;
    logo?: MediaItem;
    category?: string;
    website?: string;
    documentation?: string;
    featured: boolean;
    updatedAt: string;
    createdAt: string;
}

// Event Types
export interface Event {
    id: string;
    title: string;
    slug: string;
    description?: string;
    content?: any; // Lexical content
    featuredImage?: MediaItem;
    category?: Category;
    startDate: string;
    endDate?: string;
    location?: string;
    onlineUrl?: string;
    capacity?: number;
    registrationDeadline?: string;
    price?: number;
    featured: boolean;
    published: boolean;
    status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
    seo?: SEOData;
    updatedAt: string;
    createdAt: string;
}

export interface EventRegistration {
    id: string;
    event: Event;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    notes?: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    registeredAt: string;
}

// Post/News Types
export interface Post {
    id: string;
    title: string;
    slug: string;
    excerpt?: string;
    content?: any; // Lexical content
    featuredImage?: MediaItem;
    category?: Category;
    categories?: Category[];
    tags?: string[];
    author?: User;
    publishedAt?: string;
    featured: boolean;
    published: boolean;
    seo?: SEOData;
    updatedAt: string;
    createdAt: string;
}

// User Types
export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    avatar?: MediaItem;
    role: 'admin' | 'editor' | 'user';
    verified: boolean;
    lastLoginAt?: string;
    updatedAt: string;
    createdAt: string;
}

// Page Types
export interface Page {
    id: string;
    title: string;
    slug: string;
    content?: any; // Lexical content
    featuredImage?: MediaItem;
    parent?: Page;
    children?: Page[];
    template?: string;
    published: boolean;
    seo?: SEOData;
    updatedAt: string;
    createdAt: string;
}

// Navigation Types
export interface NavigationItem {
    id: string;
    label: string;
    url?: string;
    page?: Page;
    newTab: boolean;
    children?: NavigationItem[];
    order?: number;
}

export interface Navigation {
    id: string;
    name: string;
    items: NavigationItem[];
    updatedAt: string;
    createdAt: string;
}

// Banner Types
export interface Banner {
    id: string;
    title: string;
    subtitle?: string;
    content?: string;
    image?: MediaItem;
    mobileImage?: MediaItem;
    ctaText?: string;
    ctaUrl?: string;
    ctaNewTab: boolean;
    position: 'hero' | 'header' | 'footer' | 'sidebar';
    startDate?: string;
    endDate?: string;
    active: boolean;
    order?: number;
    updatedAt: string;
    createdAt: string;
}

// FAQ Types
export interface FAQ {
    id: string;
    question: string;
    answer: any; // Lexical content
    category?: Category;
    featured: boolean;
    published: boolean;
    order?: number;
    updatedAt: string;
    createdAt: string;
}

// Resource Types
export interface Resource {
    id: string;
    title: string;
    slug: string;
    description?: string;
    file?: MediaItem;
    thumbnail?: MediaItem;
    category?: Category;
    type: 'pdf' | 'doc' | 'image' | 'video' | 'audio' | 'other';
    downloadCount: number;
    featured: boolean;
    published: boolean;
    updatedAt: string;
    createdAt: string;
}

// Tool Types
export interface Tool {
    id: string;
    name: string;
    slug: string;
    description?: string;
    url?: string;
    image?: MediaItem;
    category?: Category;
    featured: boolean;
    published: boolean;
    updatedAt: string;
    createdAt: string;
}

// Contact Form Types
export interface ContactSubmission {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    subject?: string;
    message: string;
    source?: string;
    status: 'new' | 'read' | 'replied' | 'archived';
    submittedAt: string;
}

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    company?: string;
    subject?: string;
    message: string;
}

// SEO Types
export interface SEOData {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: MediaItem;
    noIndex?: boolean;
    noFollow?: boolean;
}

// Homepage Settings Types
export interface HomepageSettings {
    id: string;
    heroSection?: {
        title?: string;
        subtitle?: string;
        description?: string;
        backgroundImage?: MediaItem;
        ctaText?: string;
        ctaUrl?: string;
    };
    featuredProducts?: Product[];
    featuredServices?: Service[];
    featuredProjects?: Project[];
    testimonials?: {
        name: string;
        company?: string;
        content: string;
        avatar?: MediaItem;
    }[];
    stats?: {
        label: string;
        value: number;
        suffix?: string;
    }[];
    updatedAt: string;
    createdAt: string;
}

// Header Settings Types
export interface HeaderSettings {
    id: string;
    logo?: MediaItem;
    logoText?: string;
    navigation?: Navigation;
    ctaButton?: {
        text: string;
        url: string;
        newTab: boolean;
    };
    announcement?: {
        text: string;
        url?: string;
        active: boolean;
    };
    updatedAt: string;
    createdAt: string;
}

// Error Types
export interface ApiError {
    message: string;
    status?: number;
    statusText?: string;
    endpoint?: string;
    errors?: {
        [field: string]: string[];
    };
}

// Health Check Types
export interface HealthCheckResponse {
    status: 'ok' | 'error';
    timestamp: string;
    server: string;
    environment: string;
    apiVersion: string;
    database?: {
        status: 'connected' | 'disconnected';
        name?: string;
    };
}

// Search Result Types
export interface SearchResult {
    id: string;
    title: string;
    description?: string;
    url: string;
    type: 'product' | 'service' | 'project' | 'post' | 'page' | 'resource' | 'tool';
    image?: MediaItem;
    score: number;
}

export interface SearchResponse {
    results: SearchResult[];
    total: number;
    query: string;
    suggestions?: string[];
}

// Form Validation Types
export interface ValidationRule {
    required?: boolean;
    email?: boolean;
    phone?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    label?: string;
}

export interface ValidationErrors {
    [field: string]: string;
}

export interface FormState<T = any> {
    data: T;
    errors: ValidationErrors;
    isValid: boolean;
    isSubmitting: boolean;
    isSubmitted: boolean;
}
