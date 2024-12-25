/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // تعطيل فحص ESLint أثناء النشر
  },
  images: {
    disableStaticImages: true, // تعطيل دعم الصور الثابتة (إذا كنت تستخدمها)
  },
};

export default nextConfig;
