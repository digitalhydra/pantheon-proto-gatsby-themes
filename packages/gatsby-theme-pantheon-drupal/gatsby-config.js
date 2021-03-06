module.exports = ({ themePath = `${__dirname}/theme` }) => {
  
  return {
  siteMetadata: {
    title: `Gatsby site with Drupal`,
    description: `Gatsby site with Drupal`,
    author: `@octahedroid`,
    github: `https://github.com/octahedroid`,
    blog: `/#`,
    product: `/#`,
    docs: `/#`,
    siteUrl: 'http://example.com'
  },
  plugins: [
    {
      resolve: `gatsby-theme-pantheon-core`,
      options: {
        root: __dirname,
        themePath: themePath
      }
    }
  ]
};
}
