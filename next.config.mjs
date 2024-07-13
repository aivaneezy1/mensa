/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['mir-s3-cdn-cf.behance.net', 'fontawesome.com', "avatars.githubusercontent.com"]
  }
  
};

export default nextConfig;