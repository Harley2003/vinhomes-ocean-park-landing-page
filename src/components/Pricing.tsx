import React from 'react';
import SectionTitle from './SectionTitle';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-vinhomes-light-gray">
      <div className="container mx-auto px-4">
        <SectionTitle
            title="Giá Bán & Chính Sách Ưu Đãi"
            subtitle="Sở hữu ngay căn hộ trong mơ tại Vinhomes Ocean Park với mức giá hấp dẫn và chính sách thanh toán linh hoạt được thiết kế riêng cho bạn."
        />
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center p-4">
                <p className="text-xl font-semibold text-vinhomes-navy">Giá Tham Khảo Chỉ Từ</p>
                <p className="text-5xl font-bold text-vinhomes-blue my-2">1.2 Tỷ</p>
                <p className="text-base text-gray-500">(Áp dụng cho căn Studio)</p>
              </div>
              <div className="flex flex-col items-center p-4 border-t-2 md:border-t-0 md:border-x-2 border-gray-200">
                <p className="text-xl font-semibold text-vinhomes-navy mb-2">Tiến Độ Thanh Toán</p>
                <p className="text-2xl font-bold text-gray-700">Linh Hoạt</p>
                <p className="text-base text-gray-500 mt-1">Chia nhỏ nhiều đợt</p>
              </div>
              <div className="flex flex-col items-center p-4 border-t-2 md:border-t-0 border-gray-200">
                <p className="text-xl font-semibold text-vinhomes-navy mb-2">Hỗ Trợ Ngân Hàng</p>
                <p className="text-2xl font-bold text-gray-700">Lên đến 70%</p>
                <p className="text-base text-gray-500 mt-1">Lãi suất ưu đãi</p>
              </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <a href="#contact" className="bg-vinhomes-yellow hover:bg-opacity-90 text-vinhomes-navy font-bold py-4 px-10 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg">
              Nhận Bảng Giá Chi Tiết
            </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
