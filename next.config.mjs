/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Solución para problemas de rutas en Windows con espacios
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;

