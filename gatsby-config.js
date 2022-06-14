/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Anshuman Talukdar',
    description:
      'Anshuman Talukdar is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://brittanychiang.com', // No trailing slash allowed!
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@anshutalukdar',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`
  ],
}
