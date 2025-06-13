'use client';

// Product Grid Component với API Integration  
// File: frontend/src/components/products/ProductGrid.jsx

import { Button } from '@/components/ui/button';
import { useProducts } from '@/hooks/useProducts';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductGrid({
    initialParams = {},
    showPagination = true,
    showFilters = true,
    className = ''
}) {
    const {
        products,
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
        searchProducts,
        sortProducts,
        filterByCategory
    } = useProducts(initialParams);

    // Loading skeleton component
    const ProductSkeleton = () => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
    );

    // Product card component
    const ProductCard = ({ product }) => (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={`/products/${product.slug}`}>
                <div className="relative h-48 overflow-hidden">
                    {product.featuredImage?.url ? (
                        <Image
                            src={product.featuredImage.url}
                            alt={product.featuredImage.alt || product.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    )}

                    {product.featured && (
                        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Featured
                        </div>
                    )}

                    {product.salePrice && product.price && product.salePrice < product.price && (
                        <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                            Sale
                        </div>
                    )}
                </div>
            </Link>

            <div className="p-4">
                <Link href={`/products/${product.slug}`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                        {product.title}
                    </h3>
                </Link>

                {product.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {product.description}
                    </p>
                )}

                {product.category && (
                    <div className="mb-3">
                        <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {product.category.name}
                        </span>
                    </div>
                )}

                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        {product.price && (
                            <div className="flex items-center space-x-2">
                                {product.salePrice && product.salePrice < product.price ? (
                                    <>
                                        <span className="text-lg font-bold text-red-600">
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(product.salePrice)}
                                        </span>
                                        <span className="text-sm text-gray-500 line-through">
                                            {new Intl.NumberFormat('vi-VN', {
                                                style: 'currency',
                                                currency: 'VND'
                                            }).format(product.price)}
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-lg font-bold text-gray-900">
                                        {new Intl.NumberFormat('vi-VN', {
                                            style: 'currency',
                                            currency: 'VND'
                                        }).format(product.price)}
                                    </span>
                                )}
                            </div>
                        )}
                    </div>

                    <Button
                        size="sm"
                        asChild
                    >
                        <Link href={`/products/${product.slug}`}>
                            Xem chi tiết
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );

    // Search and filters component
    const ProductFilters = () => (
        <div className="mb-6 bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-wrap gap-4 items-center">
                {/* Search */}
                <div className="flex-1 min-w-64">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        onChange={(e) => {
                            const value = e.target.value;
                            setTimeout(() => searchProducts(value), 300); // Debounce
                        }}
                    />
                </div>

                {/* Sort */}
                <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Sắp xếp:</label>
                    <select
                        value={`${params.sort}-${params.order}`}
                        onChange={(e) => {
                            const [sort, order] = e.target.value.split('-');
                            sortProducts(sort, order);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="createdAt-desc">Mới nhất</option>
                        <option value="createdAt-asc">Cũ nhất</option>
                        <option value="title-asc">Tên A-Z</option>
                        <option value="title-desc">Tên Z-A</option>
                        <option value="price-asc">Giá thấp đến cao</option>
                        <option value="price-desc">Giá cao đến thấp</option>
                    </select>
                </div>

                {/* Show featured toggle */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="featured"
                        checked={params.featured || false}
                        onChange={(e) => {
                            if (e.target.checked) {
                                filterByCategory(undefined);
                                setTimeout(() => {
                                    setParams(prev => ({ ...prev, featured: true }));
                                }, 100);
                            } else {
                                setParams(prev => ({ ...prev, featured: undefined }));
                            }
                        }}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                        Chỉ sản phẩm nổi bật
                    </label>
                </div>
            </div>

            {/* Results summary */}
            <div className="mt-4 text-sm text-gray-600">
                Hiển thị {products.length} trong tổng số {totalDocs} sản phẩm
            </div>
        </div>
    );

    // Pagination component
    const Pagination = () => {
        if (totalPages <= 1) return null;

        return (
            <div className="flex items-center justify-center space-x-2 mt-8">
                <Button
                    variant="outline"
                    onClick={prevPage}
                    disabled={!hasPrevPage}
                >
                    Trước
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                    <Button
                        key={pageNum}
                        variant={pageNum === currentPage ? 'default' : 'outline'}
                        onClick={() => goToPage(pageNum)}
                        className="w-10 h-10"
                    >
                        {pageNum}
                    </Button>
                ))}

                <Button
                    variant="outline"
                    onClick={nextPage}
                    disabled={!hasNextPage}
                >
                    Sau
                </Button>
            </div>
        );
    };

    return (
        <div className={className}>
            {/* Filters */}
            {showFilters && <ProductFilters />}

            {/* Error state */}
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-red-800">
                        Có lỗi xảy ra khi tải sản phẩm: {error}
                    </p>
                </div>
            )}

            {/* Loading state */}
            {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>
            )}

            {/* Products grid */}
            {!isLoading && (
                <>
                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m14 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m14 0H6m14 0l-7-7-7 7" />
                            </svg>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Không tìm thấy sản phẩm</h3>
                            <p className="mt-2 text-gray-500">Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {showPagination && <Pagination />}
                </>
            )}
        </div>
    );
}
