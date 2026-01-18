import React from 'react';
import SectionTitle from './SectionTitle';

const ApartmentCard = ({ type, area, description, imageUrl }: { type: string, area: string, description: string, imageUrl: string }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200">
      <div className="relative h-48">
           <img src={imageUrl} alt={`Mặt bằng ${type}`} className="w-full h-full object-cover"/>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-vinhomes-navy mb-2">{type}</h3>
        <p className="text-vinhomes-gray mb-2"><strong className="font-semibold">Diện tích:</strong> {area}</p>
        <p className="text-vinhomes-gray h-24">{description}</p>
      </div>
      <div className="px-6 pb-6">
          <a href="#contact" className="text-vinhomes-orange font-semibold hover:underline">Tìm hiểu thêm →</a>
      </div>
    </div>
  );

const ApartmentTypes = () => {
  const apartments = [
    { type: "Căn Hộ Studio", area: "28 - 36m²", description: "Thiết kế thông minh, tối ưu không gian cho người trẻ năng động và độc lập.", imageUrl: "https://images.unsplash.com/photo-1596203268153-05c3c6338d96?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { type: "Căn Hộ 1 Phòng Ngủ", area: "42 - 48m²", description: "Lựa chọn lý tưởng cho các cặp đôi mới cưới hoặc các chuyên gia nước ngoài.", imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { type: "Căn Hộ 2 Phòng Ngủ", area: "55 - 70m²", description: "Không gian ấm cúng với 2 phòng ngủ riêng biệt, phù hợp cho các gia đình có 1-2 con nhỏ.", imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { type: "Căn Hộ 3 Phòng Ngủ", area: "75 - 100m²", description: "Rộng rãi và thoải mái, lựa chọn hoàn hảo cho các gia đình đa thế hệ cùng chung sống.", imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <section id="apartments" className="py-20 bg-vinhomes-light-blue">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Loại Căn Hộ & Mặt Bằng"
          subtitle="Thiết kế thông thoáng, tối ưu công năng và đều có ban công rộng rãi để đón ánh sáng tự nhiên."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {apartments.map((apt, index) => (
            <ApartmentCard key={index} {...apt} />
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#contact" className="bg-vinhomes-orange hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg">
            Nhận Toàn Bộ Mặt Bằng
          </a>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;
