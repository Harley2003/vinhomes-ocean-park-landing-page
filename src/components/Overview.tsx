import React from 'react';

const Overview = () => {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Placeholder */}
          <div className="md:w-1/2">
            <div className="w-full h-80 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('https://placehold.co/600x400/005A9E/FFFFFF?text=Phu+Hop+Gia+Dinh+Viet')" }}>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-vinhomes-navy mb-4">Tổng Quan Nhanh Về Thành Phố Biển Hồ</h2>
            <p className="text-gray-600 mb-6">
              Vinhomes Ocean Park không chỉ là một nơi để ở, mà là một thành phố của những giá trị sống lý tưởng, nơi mỗi gia đình Việt đều có thể tìm thấy hạnh phúc.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-vinhomes-yellow font-bold mr-3">✔</span>
                <p><strong className="text-vinhomes-navy">Quy mô:</strong> Hơn 420ha với mật độ xây dựng chỉ gần 19%.</p>
              </li>
              <li className="flex items-start">
                <span className="text-vinhomes-yellow font-bold mr-3">✔</span>
                <p><strong className="text-vinhomes-navy">Căn hộ đa dạng:</strong> Từ Studio, 1-3PN, đáp ứng mọi nhu cầu.</p>
              </li>
              <li className="flex items-start">
                <span className="text-vinhomes-yellow font-bold mr-3">✔</span>
                <p><strong className="text-vinhomes-navy">Môi trường sống:</strong> Xanh - Hiện đại với hệ sinh thái tiện ích đẳng cấp.</p>
              </li>
              <li className="flex items-start">
                <span className="text-vinhomes-yellow font-bold mr-3">✔</span>
                <p><strong className="text-vinhomes-navy">Lựa chọn hoàn hảo:</strong> Cho các gia đình trẻ và nhà đầu tư dài hạn.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
