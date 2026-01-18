import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-vinhomes-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dự án Vinhomes Ocean Park</h3>
            <p className="text-gray-300">Thành phố biển hồ giữa lòng Hà Nội</p>
            <p className="text-gray-400 mt-2 text-sm">Chủ đầu tư: Vinhomes - A member of Vingroup</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Thông Tin Liên Hệ</h3>
            <ul className="space-y-2 text-gray-300">
              <li><span className="font-semibold">Hotline:</span> 1900 2323 89</li>
              <li><span className="font-semibold">Zalo:</span> 0912 345 678</li>
              <li><span className="font-semibold">Email:</span> info@vinhomes.vn</li>
            </ul>
          </div>

          {/* Disclaimer & Policy */}
          <div>
            <h3 className="text-xl font-bold mb-4">Lưu Ý</h3>
            <p className="text-gray-400 text-sm">
              Mọi thông tin, hình ảnh, mặt bằng trong trang này chỉ mang tính chất tham khảo.
              Thông tin chính thức sẽ có trong hợp đồng mua bán.
            </p>
            <div className="mt-4">
              <a href="#" className="text-vinhomes-yellow hover:underline">Chính sách bảo mật</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Vinhomes. All rights reserved.</p>
          <p className="mt-1">Website được thiết kế cho mục đích quảng cáo và thu thập thông tin.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
