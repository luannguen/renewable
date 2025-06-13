// Products Hook cho RenewWeb Frontend
// File: frontend/src/hooks/useProducts.js

import apiClient from '@/lib/api';
import { handleApiError } from '@/lib/error-handler';
import { useEffect, useState } from 'react';

export const useProducts = (initialParams = {}) => {
    const [products, setProducts] = useState([]);
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

    const fetchProducts = async (searchParams = params) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await apiClient.getProducts(searchParams);

            if (response.success && response.data) {
                setProducts(response.data);
                setTotalDocs(response.totalDocs || 0);
                setTotalPages(response.totalPages || 1);
                setCurrentPage(response.page || 1);
                setHasNextPage(response.hasNextPage || false);
                setHasPrevPage(response.hasPrevPage || false);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            const handledError = handleApiError(err, '/api/products');
            setError(handledError.message);
            console.error('Failed to fetch products:', handledError);

            // Set empty state on error
            setProducts([]);
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
        fetchProducts();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Refetch when params change
    useEffect(() => {
        if (params !== initialParams) {
            fetchProducts(params);
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

    const searchProducts = (query) => {
        updateParams({ q: query });
    };

    const sortProducts = (sortField, sortOrder = 'desc') => {
        updateParams({ sort: sortField, order: sortOrder });
    };

    const toggleFeatured = () => {
        updateParams({ featured: !params.featured });
    };

    return {
        // Data
        products,
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
        refetch: () => fetchProducts(params),
        updateParams,
        goToPage,
        nextPage,
        prevPage,
        filterByCategory,
        searchProducts,
        sortProducts,
        toggleFeatured
    };
};

// Hook for single product
export const useProduct = (productId) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!productId) {
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                setError(null);

                const response = await apiClient.getProductById(productId);

                if (response.success && response.data) {
                    setProduct(response.data);
                } else {
                    throw new Error('Product not found');
                }
            } catch (err) {
                const handledError = handleApiError(err, `/api/products/${productId}`);
                setError(handledError.message);
                console.error('Failed to fetch product:', handledError);
                setProduct(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    return {
        product,
        isLoading,
        error,
        refetch: () => fetchProduct()
    };
};

// Hook for featured products (for homepage)
export const useFeaturedProducts = (limit = 6) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await apiClient.getProducts({
                    featured: true,
                    published: true,
                    limit,
                    sort: 'createdAt',
                    order: 'desc'
                });

                if (response.success && response.data) {
                    setFeaturedProducts(response.data);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err) {
                const handledError = handleApiError(err, '/api/products?featured=true');
                setError(handledError.message);
                console.error('Failed to fetch featured products:', handledError);
                setFeaturedProducts([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, [limit]);

    return {
        featuredProducts,
        isLoading,
        error,
        refetch: () => fetchFeaturedProducts()
    };
};
