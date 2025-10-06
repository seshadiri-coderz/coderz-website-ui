/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // keep your static export

  turbopack: {
    // ✅ Forces Turbopack to use your current project as root
    root: __dirname,
  },

  webpack: (config) => {
    // ✅ Prevents OneDrive symlink errors (EINVAL: invalid argument)
    config.resolve.symlinks = false;
    return config;
  },
};

module.exports = nextConfig;
