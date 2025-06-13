// Error Handler Utilities cho RenewWeb Frontend
// File: frontend/src/lib/error-handler.js

export class ApiError extends Error {
    constructor(message, status, statusText, endpoint) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.statusText = statusText;
        this.endpoint = endpoint;
    }
}

export class NetworkError extends Error {
    constructor(message, endpoint) {
        super(message);
        this.name = 'NetworkError';
        this.endpoint = endpoint;
    }
}

export class ValidationError extends Error {
    constructor(message, errors = {}) {
        super(message);
        this.name = 'ValidationError';
        this.errors = errors;
    }
}

// Error Handler Functions
export const handleApiError = (error, endpoint = 'Unknown') => {
    console.error(`API Error at ${endpoint}:`, error);

    if (error instanceof TypeError && error.message.includes('fetch')) {
        return new NetworkError(
            'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.',
            endpoint
        );
    }

    if (error.status) {
        switch (error.status) {
            case 400:
                return new ValidationError(
                    'Dữ liệu gửi lên không hợp lệ. Vui lòng kiểm tra lại.',
                    error.errors || {}
                );
            case 401:
                return new ApiError(
                    'Bạn không có quyền truy cập. Vui lòng đăng nhập lại.',
                    401,
                    'Unauthorized',
                    endpoint
                );
            case 403:
                return new ApiError(
                    'Bạn không có quyền thực hiện hành động này.',
                    403,
                    'Forbidden',
                    endpoint
                );
            case 404:
                return new ApiError(
                    'Không tìm thấy dữ liệu yêu cầu.',
                    404,
                    'Not Found',
                    endpoint
                );
            case 422:
                return new ValidationError(
                    'Dữ liệu validation không hợp lệ.',
                    error.errors || {}
                );
            case 429:
                return new ApiError(
                    'Quá nhiều yêu cầu. Vui lòng thử lại sau.',
                    429,
                    'Too Many Requests',
                    endpoint
                );
            case 500:
                return new ApiError(
                    'Lỗi server nội bộ. Vui lòng thử lại sau.',
                    500,
                    'Internal Server Error',
                    endpoint
                );
            case 502:
                return new ApiError(
                    'Server tạm thời không khả dụng. Vui lòng thử lại sau.',
                    502,
                    'Bad Gateway',
                    endpoint
                );
            case 503:
                return new ApiError(
                    'Dịch vụ tạm thời ngừng hoạt động. Vui lòng thử lại sau.',
                    503,
                    'Service Unavailable',
                    endpoint
                );
            default:
                return new ApiError(
                    `Lỗi không xác định: ${error.message}`,
                    error.status,
                    error.statusText,
                    endpoint
                );
        }
    }

    return new Error('Đã xảy ra lỗi không xác định. Vui lòng thử lại.');
};

// Retry mechanism
export const withRetry = async (fn, maxRetries = 3, delay = 1000) => {
    let lastError;

    for (let i = 0; i <= maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;

            // Don't retry on client errors (4xx)
            if (error.status >= 400 && error.status < 500) {
                throw error;
            }

            if (i < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, delay * (i + 1)));
            }
        }
    }

    throw lastError;
};

// Safe async wrapper for components
export const safeAsync = async (asyncFn, fallback = null) => {
    try {
        return await asyncFn();
    } catch (error) {
        console.error('Safe async error:', error);
        return fallback;
    }
};

// Error boundary helper
export const createErrorBoundaryHOC = (Component, fallbackComponent = null) => {
    return class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false, error: null };
        }

        static getDerivedStateFromError(error) {
            return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
            console.error('Error Boundary caught an error:', error, errorInfo);
        }

        render() {
            if (this.state.hasError) {
                if (fallbackComponent) {
                    return React.createElement(fallbackComponent, { error: this.state.error });
                }

                return React.createElement('div', {
                    className: 'error-boundary p-4 text-center'
                }, [
                    React.createElement('h2', { key: 'title' }, 'Đã xảy ra lỗi'),
                    React.createElement('p', { key: 'message' }, 'Vui lòng tải lại trang hoặc thử lại sau.'),
                    React.createElement('button', {
                        key: 'retry',
                        onClick: () => window.location.reload(),
                        className: 'mt-2 px-4 py-2 bg-primary text-white rounded'
                    }, 'Tải lại trang')
                ]);
            }

            return React.createElement(Component, this.props);
        }
    };
};

// Validation helpers
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    const phoneRegex = /^[0-9+\-\s()]+$/;
    return phoneRegex.test(phone) && phone.length >= 10;
};

export const validateRequired = (value) => {
    return value !== null && value !== undefined && value.toString().trim() !== '';
};

// Form validation helper
export const validateForm = (data, rules) => {
    const errors = {};

    for (const field in rules) {
        const value = data[field];
        const fieldRules = rules[field];

        if (fieldRules.required && !validateRequired(value)) {
            errors[field] = `${fieldRules.label || field} là bắt buộc`;
            continue;
        }

        if (value && fieldRules.email && !validateEmail(value)) {
            errors[field] = `${fieldRules.label || field} không đúng định dạng email`;
        }

        if (value && fieldRules.phone && !validatePhone(value)) {
            errors[field] = `${fieldRules.label || field} không đúng định dạng số điện thoại`;
        }

        if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
            errors[field] = `${fieldRules.label || field} phải có ít nhất ${fieldRules.minLength} ký tự`;
        }

        if (value && fieldRules.maxLength && value.length > fieldRules.maxLength) {
            errors[field] = `${fieldRules.label || field} không được vượt quá ${fieldRules.maxLength} ký tự`;
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};
