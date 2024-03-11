// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/dnntrn.github.io",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}
 
module.exports = nextConfig