// /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//     siteUrl: 'https://tenyain.com',
//     generateRobotsTxt: true, // (optional)
//     // ...other options
//   }

// const path = require('path');

// module.exports = {
//   siteUrl: 'https://tenyain.com',
//   generateRobotsTxt: true,
//   changefreq: 'daily',
//   priority: 0.7,
//   // Add other global configuration options as needed

//   // Specify additional configuration for each page
//   async generateSitemap({ paths }) {
//     const additionalPaths = [
//       '/about',
//       '/works',
//       '/writing',
//       '/services',
//       '/contact'
//       // Add more page paths here as needed
//     ];

//     const staticPaths = paths.concat(additionalPaths);

//     // Generate sitemaps for each page
//     const sitemaps = staticPaths.map((path) => ({
//       path: `/sitemap-${path}.xml`,
//       exclude: [],
//       // Add any specific configuration options for this page if needed
//     }));

//     // Generate the sitemap index file
//     const sitemapIndex = sitemaps.map((sitemap) => ({
//       path: sitemap.path,
//       lastmod: new Date().toISOString(),
//     }));

//     // Write the sitemap index file
//     const sitemapIndexPath = path.join(__dirname, 'public', 'sitemap.xml');
//     fs.writeFileSync(sitemapIndexPath, generateSitemapIndex(sitemapIndex));

//     // Write each sitemap file
//     sitemaps.forEach((sitemap) => {
//       const sitemapPath = path.join(__dirname, 'public', sitemap.path);
//       fs.writeFileSync(sitemapPath, generateSitemap(sitemap));
//     });
//   },
// };

const path = require("path");

module.exports = {
  siteUrl: "https://tenyain.com",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.7,
  // Add other global configuration options as needed

  // Specify additional configuration for each page
  async generateSitemap({ paths }) {
    const additionalPaths = [
      "/about",
      "/works",
      "/writing",
      "/services",
      "/contact",
      // Add more page paths here as needed
    ];

    // Generate sitemaps for each additional path
    const sitemaps = additionalPaths.map((path) => ({
      path: `/sitemap-${path}.xml`,
      exclude: [],
      // Add any specific configuration options for this page if needed
    }));

    // Generate the sitemap index file
    const sitemapIndex = sitemaps.map((sitemap) => ({
      path: sitemap.path,
      lastmod: new Date().toISOString(),
    }));

    // Write the sitemap index file
    const sitemapIndexPath = path.join(__dirname, "public", "sitemap.xml");
    fs.writeFileSync(sitemapIndexPath, generateSitemapIndex(sitemapIndex));

    // Write each sitemap file
    sitemaps.forEach((sitemap) => {
      const sitemapPath = path.join(__dirname, "public", sitemap.path);
      const urls = paths.filter((p) => p.startsWith(sitemap.path.slice(1, -4))); // Filter paths matching the current sitemap
      fs.writeFileSync(sitemapPath, generateSitemap({ paths: urls }));
    });
  },
};
