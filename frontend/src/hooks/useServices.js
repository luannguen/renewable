// Services Hook cho RenewWeb Frontend
// File: frontend/src/hooks/useServices.js

import apiClient from '@/lib/api';
import { handleApiError } from '@/lib/error-handler';
import { useEffect, useState } from 'react';

export const useServices = (initialParams = {}) => {
    const [services, setServices] = useState([]);
    const [totalDocs, setTotalDocs] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);
    const [hasPrevPage, setHasPrevPage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [params, setParams] = useState({
        page: 1,
        limit: 12,
        sort: 'createdAt',
        order: 'desc',
        published: true,
        ...initialParams
    });

    const fetchServices = async (searchParams = params) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await apiClient.getServices(searchParams);

            if (response.success && response.data) {
                setServices(response.data);
                setTotalDocs(response.totalDocs || 0);
                setTotalPages(response.totalPages || 1);
                setCurrentPage(response.page || 1);
                setHasNextPage(response.hasNextPage || false);
                setHasPrevPage(response.hasPrevPage || false);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            const handledError = handleApiError(err, '/api/services');
            setError(handledError.message);
            console.error('Failed to fetch services:', handledError);

            // Set empty state on error
            setServices([]);
            setTotalDocs(0);
            setTotalPages(0);
            setCurrentPage(1);
            setHasNextPage(false);
            setHasPrevPage(false);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial fetch
    useEffect(() => {
        fetchServices();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Refetch when params change
    useEffect(() => {
        if (params !== initialParams) {
            fetchServices(params);
        }
    }, [params]); // eslint-disable-line react-hooks/exhaustive-deps

    const updateParams = (newParams) => {
        setParams(prev => ({
            ...prev,
            ...newParams,
            page: 1 // Reset to first page when filters change
        }));
    };

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setParams(prev => ({
                ...prev,
                page: pageNumber
            }));
        }
    };

    const nextPage = () => {
        if (hasNextPage) {
            goToPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (hasPrevPage) {
            goToPage(currentPage - 1);
        }
    };

    const filterByCategory = (categorySlug) => {
        updateParams({ category: categorySlug });
    };

    const searchServices = (query) => {
        updateParams({ q: query });
    };

    const sortServices = (sortField, sortOrder = 'desc') => {
        updateParams({ sort: sortField, order: sortOrder });
    };

    const toggleFeatured = () => {
        updateParams({ featured: !params.featured });
    };

    return {
        // Data
        services,
        totalDocs,
        totalPages,
        currentPage,
        hasNextPage,
        hasPrevPage,

        // State
        isLoading,
        error,
        params,

        // Actions
        refetch: () => fetchServices(params),
        updateParams,
        goToPage,
        nextPage,
        prevPage,
        filterByCategory,
        searchServices,
        sortServices,
        toggleFeatured
    };
};

// Hook for single service
export const useService = (serviceId) => {
    const [service, setService] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            if (!serviceId) {
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const response = await apiClient.getServices({ slug: serviceId });

                if (response.success && response.data && response.data.length > 0) {
                    setService(response.data[0]); // Get first matching service
                } else {
                    throw new Error('Service not found');
                }
            } catch (err) {
                const handledError = handleApiError(err, `/api/services/${serviceId}`);
                setError(handledError.message);
                console.error('Failed to fetch service:', handledError);
                setService(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchService();
    }, [serviceId]);

    return {
        service,
        isLoading,
        error,
        refetch: () => fetchService()
    };
};

// Hook for featured services (for homepage)
export const useFeaturedServices = (limit = 6) => {
    const [featuredServices, setFeaturedServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedServices = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await apiClient.getServices({
                    featured: true,
                    published: true,
                    limit,
                    sort: 'createdAt',
                    order: 'desc'
                });

                if (response.success && response.data) {
                    setFeaturedServices(response.data);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err) {
                const handledError = handleApiError(err, '/api/services?featured=true');
                setError(handledError.message);
                console.error('Failed to fetch featured services:', handledError);
                setFeaturedServices([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeaturedServices();
    }, [limit]);

    return {
        featuredServices,
        isLoading,
        error,
        refetch: () => fetchFeaturedServices()
    };
};
