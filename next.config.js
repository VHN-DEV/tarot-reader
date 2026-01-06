/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // BẮT BUỘC để tạo thư mục /out cho GitHub Pages
  images: {
    unoptimized: true,
  },
  // Nếu repo của bạn có tên (ví dụ: /tarot-reader), hãy thêm dòng dưới:
  // basePath: '/tarot-reader', 
}

module.exports = nextConfig