'use client';

// Services Grid với API Integration
// File: frontend/src/components/services/ServicesGridAPI.jsx

import { Button } from '@/components/ui/button';
import { useServices } from '@/hooks/useServices';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesGridAPI({
    initialParams = {},
    showPagination = true,
    showFilters = true,
    className = ''
}) {
    const {
        services,
        totalDocs,
        totalPages,
        currentPage,
        hasNextPage,
        hasPrevPage,
        isLoading,
        error,
        params,
        goToPage,
        nextPage,
        prevPage,
        searchServices,
        sortServices
    } = useServices(initialParams);

    // Loading skeleton
    const ServiceSkeleton = () => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
                <div className="h-6 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
            </div>
        </div>
    );

    // Service card
    const ServiceCard = ({ service }) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/services/${service.slug}`}>
                <div className="relative h-48 overflow-hidden">
                    {service.featuredImage?.url ? (
                        <Image
                            src={service.featuredImage.url}
                            alt={service.featuredImage.alt || service.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    )}

                    {service.featured && (
                        <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Nổi bật
                        </div>
                    )}
                </div>
            </Link>

            <div className="p-6">
                <Link href={`/services/${service.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
                        {service.title}
                    </h3>
                </Link>

                {service.description && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                        {service.description}
                    </p>
                )}

                {service.category && (
                    <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                            {service.category.name}
                        </span>
                    </div>
                )}

                <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                        <Link href={`/services/${service.slug}`}>
                            Tìm hiểu thêm
                        </Link>
                    </Button>

                    <Button size="sm" asChild>
                        <Link href={`/contact?service=${service.slug}`}>
                            Liên hệ
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );

    // Filters
    const ServiceFilters = () => (
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-wrap gap-4 items-center">
                <div className="flex-1 min-w-64">
                    <input
                        type="text"
                        placeholder="Tìm kiếm dịch vụ..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => {
                            const value = e.target.value;
                            setTimeout(() => searchServices(value), 300);
                        }}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Sắp xếp:</label>
                    <select
                        value={`${params.sort}-${params.order}`}
                        onChange={(e) => {
                            const [sort, order] = e.target.value.split('-');
                            sortServices(sort, order);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="createdAt-desc">Mới nhất</option>
                        <option value="createdAt-asc">Cũ nhất</option>
                        <option value="title-asc">Tên A-Z</option>
                        <option value="title-desc">Tên Z-A</option>
                    </select>
                </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
                Hiển thị {services.length} trong tổng số {totalDocs} dịch vụ
            </div>
        </div>
    );

    // Pagination
    const Pagination = () => {
        if (totalPages <= 1) return null;

        return (
            <div className="flex items-center justify-center space-x-2 mt-8">
                <Button variant="outline" onClick={prevPage} disabled={!hasPrevPage}>
                    Trước
                </Button>

                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                        pageNum = i + 1;
                    } else if (currentPage <= 3) {
                        pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                    } else {
                        pageNum = currentPage - 2 + i;
                    }

                    return (
                        <Button
                            key={pageNum}
                            variant={pageNum === currentPage ? 'default' : 'outline'}
                            onClick={() => goToPage(pageNum)}
                            className="w-10 h-10"
                        >
                            {pageNum}
                        </Button>
                    );
                })}

                <Button variant="outline" onClick={nextPage} disabled={!hasNextPage}>
                    Sau
                </Button>
            </div>
        );
    };

    return (
        <div className={className}>
            {showFilters && <ServiceFilters />}

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">Có lỗi xảy ra khi tải dịch vụ: {error}</p>
                </div>
            )}

            {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <ServiceSkeleton key={index} />
                    ))}
                </div>
            )}

            {!isLoading && (
                <>
                    {services.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service) => (
                                <ServiceCard key={service.id} service={service} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Không tìm thấy dịch vụ</h3>
                            <p className="mt-2 text-gray-500">Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.</p>
                        </div>
                    )}

                    {showPagination && <Pagination />}
                </>
            )}
        </div>
    );
}
