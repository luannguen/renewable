// API Client Service cho RenewWeb Frontend
// File: frontend/src/lib/api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

class ApiClient {
    constructor() {
        this.baseURL = API_BASE_URL;
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        // Add API key to headers if available
        if (API_KEY) {
            this.defaultHeaders['x-api-key'] = API_KEY;
        }
    }    // Generic request method
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;

        const config = {
            headers: {
                ...this.defaultHeaders,
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`API Request failed for ${endpoint}:`, error);
            throw error;
        }
    }

    // GET request
    async get(endpoint, params = null) {
        let url = endpoint;
        if (params) {
            const searchParams = new URLSearchParams(params);
            url += `?${searchParams.toString()}`;
        }

        return this.request(url, {
            method: 'GET',
        });
    }

    // POST request
    async post(endpoint, data = null) {
        return this.request(endpoint, {
            method: 'POST',
            body: data ? JSON.stringify(data) : null,
        });
    }

    // PUT request
    async put(endpoint, data = null) {
        return this.request(endpoint, {
            method: 'PUT',
            body: data ? JSON.stringify(data) : null,
        });
    }

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, {
            method: 'DELETE',
        });
    }

    // Health check
    async healthCheck() {
        return this.get('/api/health');
    }

    // Company Information
    async getCompanyInfo() {
        return this.get('/api/company-info');
    }

    // Header Information
    async getHeaderInfo() {
        return this.get('/api/header-info');
    }

    // Homepage Settings
    async getHomepageSettings() {
        return this.get('/api/homepage-settings');
    }

    // Public Banners
    async getPublicBanners() {
        return this.get('/api/public/banners');
    }

    // About Page
    async getAboutPageSettings() {
        return this.get('/api/about-page');
    }

    // Products
    async getProducts(params = {}) {
        return this.get('/api/products', params);
    }

    async getProductById(id) {
        return this.get(`/api/products/${id}`);
    }

    // Services
    async getServices(params = {}) {
        return this.get('/api/services', params);
    }

    // Projects
    async getProjects(params = {}) {
        return this.get('/api/projects', params);
    }

    // Events
    async getEvents(params = {}) {
        return this.get('/api/events', params);
    }

    async getFilteredEvents(params = {}) {
        return this.get('/api/events/filtered', params);
    }

    async getEventCountByCategory() {
        return this.get('/api/events/count-by-category');
    }

    // Posts/News
    async getPosts(params = {}) {
        return this.get('/api/posts', params);
    }

    // Contact Form
    async submitContactForm(data) {
        return this.post('/api/contact-form', data);
    }

    // Search
    async searchToolsResources(query) {
        return this.get('/api/search/tools-resources', { q: query });
    }

    // FAQs
    async getFAQs(params = {}) {
        return this.get('/api/faqs', params);
    }

    // Resources
    async getResources(params = {}) {
        return this.get('/api/resources', params);
    }

    async downloadResource(slug) {
        return this.get(`/api/resources/${slug}/download`);
    }

    // Tools
    async getTools(params = {}) {
        return this.get('/api/tools', params);
    }

    // Technologies
    async getTechnologies(params = {}) {
        return this.get('/api/technologies', params);
    }
}

// Export singleton instance
const apiClient = new ApiClient();
export default apiClient;

// Export class for testing
export { ApiClient };

