/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "assets.vercel.com",
      "supabase.com",
      "storage.googleapis.com",
      "tailwindcss.com",
      "d1.awsstatic.com",
    ],
  },
};

export default nextConfig;
