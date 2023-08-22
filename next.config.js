/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/newProject",
  distDir: "newBuild",
  env: {
    NEXTAUTH_URL: "key@123",
  },
}

module.exports = nextConfig
