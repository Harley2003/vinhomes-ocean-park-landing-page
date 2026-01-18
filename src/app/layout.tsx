import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Vinhomes Ocean Park – Thành phố biển hồ giữa lòng Hà Nội",
  description: "Đại đô thị Vinhomes Ocean Park với hệ sinh thái khép kín. Đăng ký nhận thông tin, mặt bằng và bảng giá mới nhất từ chủ đầu tư.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}