// Company Info Hook cho RenewWeb Frontend  
// File: frontend/src/hooks/useCompanyInfo.js

'use client';

import apiClient from '@/lib/api';
import { handleApiError } from '@/lib/error-handler';
import { useEffect, useState } from 'react';

export const useCompanyInfo = () => {
    const [companyInfo, setCompanyInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); useEffect(() => {
        const fetchCompanyInfo = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await apiClient.getCompanyInfo();

                if (response.success && response.data) {
                    setCompanyInfo(response.data);
                } else {
                    throw new Error('Invalid response format');
                }
            } catch (err) {
                const handledError = handleApiError(err, '/api/company-info');
                setError(handledError.message);
                console.error('Failed to fetch company info:', handledError);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanyInfo();
    }, []);    // Define fetchCompanyInfo outside useEffect for refetch
    const fetchCompanyInfo = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await apiClient.getCompanyInfo();

            if (response.success && response.data) {
                setCompanyInfo(response.data);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (err) {
            const handledError = handleApiError(err, '/api/company-info');
            setError(handledError.message);
            console.error('Manual refetch failed:', handledError);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        companyInfo,
        isLoading,
        error,
        refetch: fetchCompanyInfo
    };
};
