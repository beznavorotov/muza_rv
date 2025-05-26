module.exports = {
  siteMetadata: {
    title: "Your Site Title",
    description: "Your site description for SEO.",
    author: "Your Name",
    siteUrl: "https://www.yoursite.com", // Replace with your site's URL
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/sitemap.xml",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.yoursite.com", // Replace with your site's URL
        sitemap: "https://www.yoursite.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    // ... other plugins
  ],
};
