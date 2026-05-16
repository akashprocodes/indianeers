/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@workspace/api-client-react", "lucide-react"],
  // Since we are migrating, let's make sure it handles generic paths if needed
}

export default nextConfig;
