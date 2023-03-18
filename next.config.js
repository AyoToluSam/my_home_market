/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    privateKey: "pk_test_64a90dc69ec7acaf8604ef64906b695ea742061d",
    secretKey: "sk_test_86b45b9499124dff2b0ed6419304e623b46fa797",
  },
}

module.exports = nextConfig
