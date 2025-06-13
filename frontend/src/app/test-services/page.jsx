'use client';

// Test Services Page
// File: frontend/src/app/test-services/page.jsx

import ServicesGridAPI from '@/components/services/ServicesGridAPI';
import { useFeaturedServices } from '@/hooks/useServices';
import Link from 'next/link';

function FeaturedServicesTest() {
    const { featuredServices, isLoading, error } = useFeaturedServices(4);

    if (isLoading) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Featured Services (Loading...)</h3>
                <div className="animate-pulse">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="h-32 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">
                Featured Services ({featuredServices.length} found)
            </h3>

            {error && (
                <p className="text-red-600 mb-4">Error: {error}</p>
            )}

            {featuredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featuredServices.map((service) => (
                        <div key={service.id} className="border rounded-lg p-3">
                            <h4 className="font-medium text-sm mb-1">{service.title}</h4>
                            <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                {service.description || 'No description'}
                            </p>
                            {service.category && (
                                <p className="text-xs text-blue-600 mb-2">
                                    {service.category.name}
                                </p>
                            )}
                            <Link
                                href={`/services/${service.slug}`}
                                className="text-xs text-blue-600 hover:underline"
                            >
                                View Details →
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No featured services found</p>
            )}
        </div>
    );
}

export default function TestServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Test Services API Integration
                </h1>

                <div className="mb-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* API Status */}
                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">API Endpoints</h3>
                        <ul className="text-blue-800 space-y-1 text-sm">
                            <li>• GET /api/services - All services</li>
                            <li>• GET /api/services/:slug - Single service</li>
                            <li>• Pagination, filtering, search</li>
                            <li>• Featured services endpoint</li>
                        </ul>
                    </div>

                    {/* Test Features */}
                    <div className="bg-green-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Test Features</h3>
                        <ul className="text-green-800 space-y-1 text-sm">
                            <li>• Services grid with API data</li>
                            <li>• Search and filtering</li>
                            <li>• Pagination controls</li>
                            <li>• Loading states</li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-purple-900 mb-2">Quick Links</h3>
                        <div className="space-y-2">
                            <Link
                                href="/services"
                                className="block text-purple-800 hover:underline text-sm"
                            >
                                → Full Services Page
                            </Link>
                            <Link
                                href="/test-products"
                                className="block text-purple-800 hover:underline text-sm"
                            >
                                → Test Products
                            </Link>
                            <Link
                                href="/api-test"
                                className="block text-purple-800 hover:underline text-sm"
                            >
                                → API Connection Test
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Featured Services Test */}
                <div className="mb-8">
                    <FeaturedServicesTest />
                </div>

                {/* Full Services Grid */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-6">Full Services Grid</h2>
                    <ServicesGridAPI
                        initialParams={{ limit: 6 }}
                        showFilters={true}
                        showPagination={true}
                    />
                </div>

                {/* Debug Info */}
                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Debug Information</h3>
                    <div className="text-sm text-gray-600 space-y-2">
                        <p><strong>Backend URL:</strong> {process.env.NEXT_PUBLIC_API_URL || 'Not configured'}</p>
                        <p><strong>Current Time:</strong> {new Date().toLocaleString('vi-VN')}</p>
                        <p><strong>Test Status:</strong> Services API integration test page loaded successfully</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
