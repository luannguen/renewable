// Homepage Data Hook cho RenewWeb Frontend
// File: frontend/src/hooks/useHomepageData.js

import apiClient from '@/lib/api';
import { handleApiError } from '@/lib/error-handler';
import { useEffect, useState } from 'react';

export const useHomepageData = () => {
    const [homepageData, setHomepageData] = useState(null);
    const [banners, setBanners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHomepageData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                // Fetch homepage settings và banners parallel
                const [settingsResponse, bannersResponse] = await Promise.all([
                    apiClient.getHomepageSettings(),
                    apiClient.getPublicBanners()
                ]);

                if (settingsResponse.success) {
                    setHomepageData(settingsResponse.data);
                }

                if (bannersResponse.success) {
                    setBanners(bannersResponse.data || []);
                }

            } catch (err) {
                const handledError = handleApiError(err, 'homepage data');
                setError(handledError.message);
                console.error('Failed to fetch homepage data:', handledError);
            } finally {
                setIsLoading(false);
            }
        };

        fetchHomepageData();
    }, []);

    return {
        homepageData,
        banners,
        isLoading,
        error,
        refetch: () => fetchHomepageData()
    };
};
