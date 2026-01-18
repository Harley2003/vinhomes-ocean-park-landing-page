import React from 'react';
import SectionTitle from './SectionTitle';

const AmenityItem = ({ title, imageUrl }: { title: string, imageUrl: string }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg group h-80">
    <div 
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="relative h-full flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white text-shadow">
            {title}
        </h3>
    </div>
  </div>
);

const Amenities = () => {
  const amenities = [
    { title: "Biển Hồ Nước Mặn 6,1ha", imageUrl: "https://placehold.co/600x400/005A9E/FFFFFF?text=Bien+Ho" },
    { title: "Công Viên BBQ & Đường Dạo Bộ", imageUrl: "https://placehold.co/600x400/34D399/FFFFFF?text=Cong+Vien" },
    { title: "TTTM Vincom Mega Mall", imageUrl: "https://placehold.co/600x400/FDB813/000000?text=Vincom" },
    { title: "Bệnh Viện Đa Khoa Vinmec", imageUrl: "https://placehold.co/600x400/EF4444/FFFFFF?text=Vinmec" },
    { title: "Hệ Thống Trường Học Vinschool", imageUrl: "https://placehold.co/600x400/0EA5E9/FFFFFF?text=Vinschool" },
    { title: "Hồ Bơi & Khu Thể Thao Ngoài Trời", imageUrl: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=The+Thao" },
  ];

  return (
    <section id="amenities" className="py-20 bg-vinhomes-light-gray">
      <div className="container mx-auto px-4">
        <SectionTitle 
            title="Tiện Ích Đẳng Cấp"
            subtitle="Tận hưởng cuộc sống tiện nghi và trọn vẹn với hệ sinh thái tiện ích 'tất cả trong một' của Vinhomes."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <AmenityItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
