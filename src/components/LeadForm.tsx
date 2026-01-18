'use client'; 

import React, { useState } from 'react';
import SectionTitle from './SectionTitle';

const LeadForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log({ name, phone, email });

    setTimeout(() => {
        setIsLoading(false);
        alert('Cảm ơn bạn đã quan tâm! Chúng tôi sẽ liên hệ lại với bạn sớm nhất.');
        setName('');
        setPhone('');
        setEmail('');
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/002D5B/FFFFFF?text=View+Dep+Nhat')" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-xl shadow-2xl">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-vinhomes-navy">Đăng Ký Nhận Tư Vấn</h2>
                    <p className="text-gray-600 mt-3">Chuyên viên của chúng tôi sẽ liên hệ và gửi thông tin mới nhất qua Zalo hoặc Email cho Quý khách.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                    <div className="relative">
                        <label htmlFor="name" className="block text-lg font-medium text-vinhomes-navy mb-2">Họ và tên</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-10">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                        </div>
                        <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinhomes-yellow focus:border-transparent transition"
                        placeholder="Ví dụ: Nguyễn Văn An"
                        required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="phone" className="block text-lg font-medium text-vinhomes-navy mb-2">Số điện thoại</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-10">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                        </div>
                        <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinhomes-yellow focus:border-transparent transition"
                        placeholder="Số điện thoại để nhận tư vấn"
                        required
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="email" className="block text-lg font-medium text-vinhomes-navy mb-2">Email</label>
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none top-10">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                        </div>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vinhomes-yellow focus:border-transparent transition"
                        placeholder="Nhận bảng giá & chính sách (không bắt buộc)"
                        />
                    </div>
                    </div>
                    <div className="mt-8">
                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-vinhomes-blue hover:bg-vinhomes-navy text-white font-bold py-4 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:scale-100"
                    >
                        {isLoading ? 'Đang gửi...' : 'Gửi Thông Tin Ngay'}
                    </button>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-4">
                    Chúng tôi cam kết bảo mật tuyệt đối thông tin của Quý khách.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
