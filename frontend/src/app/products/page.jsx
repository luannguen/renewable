// Products Page
// File: frontend/src/app/products/page.jsx

import ProductGrid from '@/components/products/ProductGrid';

export const metadata = {
    title: 'Sản phẩm - RenewWeb | Giải pháp năng lượng tái tạo',
    description: 'Khám phá các sản phẩm năng lượng tái tạo chất lượng cao từ RenewWeb. Pin mặt trời, turbine gió và các giải pháp xanh bền vững.',
    keywords: 'sản phẩm năng lượng tái tạo, pin mặt trời, turbine gió, solar panels, renewable energy products',
};

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Sản phẩm năng lượng tái tạo
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    Khám phá bộ sưu tập sản phẩm năng lượng tái tạo tiên tiến của chúng tôi.
                    Từ pin mặt trời hiệu suất cao đến turbine gió thông minh, tất cả được thiết kế
                    để mang lại giải pháp năng lượng sạch và bền vững cho tương lai.
                </p>
            </div>

            <ProductGrid />
        </div>
    );
}
