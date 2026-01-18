import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-vinhomes-navy via-vinhomes-blue/50 to-transparent"></div>
      
      <div className="relative z-10 text-center px-4 animate-fadeInUp">
        <h1 className="text-4xl md:text-7xl font-serif font-bold mb-4 leading-tight text-shadow-md">
          Vinhomes Ocean Park
          <br />
          <span className="text-vinhomes-yellow">Thành phố biển hồ giữa lòng Hà Nội</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow">
          Đại đô thị Vinhomes với hệ sinh thái khép kín, mang đến cuộc sống tiện nghi, đẳng cấp và trọn vẹn.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="bg-vinhomes-orange hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Đăng ký nhận thông tin
          </a>
          <a 
            href="#apartments" 
            className="bg-transparent border-2 border-vinhomes-yellow hover:bg-vinhomes-yellow hover:text-vinhomes-navy text-vinhomes-yellow font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            Xem mặt bằng
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
