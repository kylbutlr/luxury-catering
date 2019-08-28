module.exports = {
  siteMetadata: {
    title: `Luxury Catering`,
    siteUrl: `https://github.com/kylbutlr/luxury-catering#readme`,
    description: `Luxury Catering Website`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline',
  ],
};
