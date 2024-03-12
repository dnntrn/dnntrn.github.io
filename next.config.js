// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: (process.env.NODE_ENV === "production") ? "/dnntrn.github.io" : "",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}
 
module.exports = nextConfig