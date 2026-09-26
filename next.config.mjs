/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs.html",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/:slug.html",
        destination: "/blogs/:slug",
        permanent: true,
      },
      {
        source: "/case-studies/:slug.html",
        destination: "/case-studies/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
