const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    author: config.author,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
    social: config.socialLinks,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: config.manifest,
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: 'Sam Huynh @ viet-aus-it',
            GitHub: 'viet-aus-it',
          },
        ],
        thanks: ['Gatsby', 'Node', 'React', 'GitHub Pages & Actions'],
        site: {
          'Last update': '2020/03/05',
          Standards: 'JavaScript, TypeScript, React, AirBnB',
          Components: 'humans-generator',
          Softwares: 'Visual Studio Code',
        },
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: config.contentfulConfig,
    },
    // Install and enable this for Google Analytics GTAG support
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     //trackingIds: [`ADD YOUR TRACKING ID HERE`],
    //   },
    //   gtagConfig: {
    //     anonymizeIp: true,
    //   }
    // },
  ],
};
