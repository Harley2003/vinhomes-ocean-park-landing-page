import React from 'react';
import SectionTitle from './SectionTitle';

const HighlightItem = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="flex-shrink-0 mb-4 text-vinhomes-blue">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-vinhomes-navy mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Highlights = () => {
  const highlightsData = [
    {
      icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
      title: "Biển Hồ Nước Mặn",
      description: "Trải nghiệm biển xanh, cát trắng ngay tại thủ đô với biển hồ Lagoon 6,1ha."
    },
    {
      icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-4h1m-1 4h1m-1-4h1m-1-8h1m-6 8h1"></path></svg>,
      title: "Đại Đô Thị All-in-one",
      description: "Hệ sinh thái tiện ích toàn diện từ Vinschool, Vinmec đến Vincom."
    },
    {
      icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
      title: "Chủ Đầu Tư Uy Tín",
      description: "Phát triển bởi Vinhomes - thương hiệu bất động sản hàng đầu Việt Nam."
    },
    {
      icon: <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2V9a2 2 0 012-2h6zM6 9H4v11a2 2 0 002 2h11v-2H6V9z"></path></svg>,
      title: "Pháp Lý Rõ Ràng",
      description: "Minh bạch về pháp lý, cam kết sổ hồng lâu dài, mang lại sự an tâm tuyệt đối."
    },
  ];

  return (
    <section id="highlights" className="py-20 bg-vinhomes-light-gray">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Điểm Nổi Bật Của Dự Án"
          subtitle="Vinhomes Ocean Park kiến tạo một không gian sống đẳng cấp, tiện nghi và khác biệt."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightsData.map((item, index) => (
            <HighlightItem key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
