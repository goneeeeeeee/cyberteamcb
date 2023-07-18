/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",
  images: {
    domains: ["localhost", "http://localhost:1337"],
  },
  async redirects() {
    return [
      {
        source: "/contacts/discrod",
        destination: "https://discord.gg/",
        permanent: true,
      },
      {
        source: "/contacts/vk",
        destination: "https://vk.com/cyberlab_sstu",
        permanent: true,
      },
      {
        source: "/contacts/twitch",
        destination: "https://www.twitch.tv/hardecki",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
