// API Connection Test Script
// File: frontend/src/lib/test-api.js

import apiClient from './api.js';

export const testApiConnections = async () => {
    console.log('🚀 Starting API Connection Tests...\n');

    const tests = [
        {
            name: 'Health Check',
            test: () => apiClient.healthCheck(),
            endpoint: '/api/health'
        },
        {
            name: 'Company Info',
            test: () => apiClient.getCompanyInfo(),
            endpoint: '/api/company-info'
        },
        {
            name: 'Homepage Settings',
            test: () => apiClient.getHomepageSettings(),
            endpoint: '/api/homepage-settings'
        },
        {
            name: 'Public Banners',
            test: () => apiClient.getPublicBanners(),
            endpoint: '/api/public/banners'
        },
        {
            name: 'Header Info',
            test: () => apiClient.getHeaderInfo(),
            endpoint: '/api/header-info'
        }
    ];

    const results = [];

    for (const testCase of tests) {
        try {
            console.log(`Testing ${testCase.name} (${testCase.endpoint})...`);
            const startTime = Date.now();

            const response = await testCase.test();
            const responseTime = Date.now() - startTime;

            console.log(`✅ ${testCase.name}: SUCCESS (${responseTime}ms)`);
            console.log(`   Response:`, response);
            console.log('');

            results.push({
                name: testCase.name,
                endpoint: testCase.endpoint,
                success: true,
                responseTime,
                data: response
            });

        } catch (error) {
            console.error(`❌ ${testCase.name}: FAILED`);
            console.error(`   Error:`, error.message);
            console.error(`   Status:`, error.status || 'N/A');
            console.log('');

            results.push({
                name: testCase.name,
                endpoint: testCase.endpoint,
                success: false,
                error: error.message,
                status: error.status
            });
        }
    }

    // Summary
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    console.log('📊 Test Summary:');
    console.log(`✅ Successful: ${successful}/${tests.length}`);
    console.log(`❌ Failed: ${failed}/${tests.length}`);

    if (failed > 0) {
        console.log('\n🔧 Failed Tests:');
        results.filter(r => !r.success).forEach(result => {
            console.log(`- ${result.name} (${result.endpoint}): ${result.error}`);
        });
    }

    return results;
};

// Function to test specific endpoint
export const testSingleEndpoint = async (endpointName) => {
    const endpoints = {
        health: () => apiClient.healthCheck(),
        company: () => apiClient.getCompanyInfo(),
        homepage: () => apiClient.getHomepageSettings(),
        banners: () => apiClient.getPublicBanners(),
        header: () => apiClient.getHeaderInfo()
    };

    if (!endpoints[endpointName]) {
        console.error(`❌ Unknown endpoint: ${endpointName}`);
        console.log('Available endpoints:', Object.keys(endpoints).join(', '));
        return;
    }

    try {
        console.log(`🔍 Testing ${endpointName}...`);
        const response = await endpoints[endpointName]();
        console.log('✅ Success!', response);
        return response;
    } catch (error) {
        console.error('❌ Failed:', error);
        throw error;
    }
};
