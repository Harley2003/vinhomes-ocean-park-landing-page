import React from 'react';
import SectionTitle from './SectionTitle';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Vị Trí Vàng & Kết Nối Hoàn Hảo"
          subtitle="Nằm tại cửa ngõ phía Đông năng động của Thủ đô, Vinhomes Ocean Park sở hữu vị trí chiến lược cùng mạng lưới giao thông liên kết vùng toàn diện."
        />
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Map Placeholder */}
          <div className="md:w-1/2">
            <div className="w-full h-96 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center text-gray-500 border-4 border-white">
                <p className="font-semibold">Bản đồ khu vực Gia Lâm</p>
            </div>
          </div>
          {/* Content */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-vinhomes-navy mb-4">Tâm Điểm Giao Thông Mới</h3>
            <p className="text-gray-600 mb-6">
              Với các cây cầu và các tuyến đường vành đai, cao tốc trọng điểm, việc di chuyển vào trung tâm thành phố hay các tỉnh lân cận trở nên dễ dàng hơn bao giờ hết.
            </p>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <svg className="w-7 h-7 text-vinhomes-yellow mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <p><strong className="text-vinhomes-navy">Kết nối trung tâm:</strong> Chỉ 20 phút di chuyển tới Hồ Hoàn Kiếm và khu phố cổ.</p>
              </li>
              <li className="flex items-start">
                <svg className="w-7 h-7 text-vinhomes-yellow mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <p><strong className="text-vinhomes-navy">Tiềm năng tăng giá:</strong> Đón đầu làn sóng phát triển hạ tầng của khu vực phía Đông Hà Nội.</p>
              </li>
              <li className="flex items-start">
                <svg className="w-7 h-7 text-vinhomes-yellow mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                <p><strong className="text-vinhomes-navy">Hạ tầng đồng bộ:</strong> Gần các tuyến huyết mạch QL5A, 5B, cao tốc Hà Nội - Hải Phòng.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
