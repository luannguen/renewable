// Services Page với API Integration
// File: frontend/src/app/services/page.jsx

import ServicesGridAPI from '@/components/services/ServicesGridAPI';

export const metadata = {
    title: 'Dịch vụ - RenewWeb | Giải pháp năng lượng tái tạo',
    description: 'Khám phá các dịch vụ năng lượng tái tạo chuyên nghiệp từ RenewWeb. Tư vấn, lắp đặt và bảo trì hệ thống năng lượng sạch.',
    keywords: 'dịch vụ năng lượng tái tạo, tư vấn solar, lắp đặt pin mặt trời, bảo trì renewable energy',
};

export default function ServicesPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Dịch vụ năng lượng tái tạo
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl">
                    Chúng tôi cung cấp các dịch vụ toàn diện từ tư vấn, thiết kế, lắp đặt đến bảo trì
                    hệ thống năng lượng tái tạo. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi
                    cam kết mang đến giải pháp tối ưu cho nhu cầu năng lượng của bạn.
                </p>
            </div>

            <ServicesGridAPI />
        </div>
    );
}
