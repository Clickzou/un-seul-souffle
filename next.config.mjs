/** @type {import('next').NextConfig} */
const nextConfig = {
  // Trailing slash obligatoire partout : liens internes, canonical, sitemap.
  // Réf. docs/seo/SEO_MASTER_UNSEULSOUFFLE.md § 2
  trailingSlash: true,

  images: {
    formats: ["image/webp"],
  },

  async headers() {
    return [
      {
        // Cache navigateur long sur les assets — absent du site legacy (3,3 Mo par page).
        source: "/:all*(webp|avif|png|jpg|jpeg|svg|woff2)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
