import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pour ignorer  les messages d'erreurs lors du build de l'application.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
