module.exports = {
  siteMetadata: {
    title: `N DESIGN`,
    description: `Architecture and interior design Speialist.`,
    siteUrl: `https://ndesign.ma`, // Replace with your domain name
    author: `Anass Azzouz`, // Replace with your twitter handle
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `GA-TRACKING_ID`, // Replace with your Google Analytics tracking ID
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    // Use this plugin if you are deploying you site to Gatsby Cloud
    // To learn more, visit: https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/deploying-to-gatsby-cloud/
    // `gatsby-plugin-gatsby-cloud`,
  ],
};
