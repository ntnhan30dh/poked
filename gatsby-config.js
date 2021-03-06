module.exports = {
  siteMetadata: {
      title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  'gatsby-plugin-postcss',
  {
    resolve: `gatsby-plugin-intl`,
    options: {
      // Directory with the strings JSON
      path: `${__dirname}/src/intl`,
      // Supported languages
      languages: [`es`, `en`],
      // Default site language
      defaultLanguage: `en`,
      // Redirects to `/pt` in the route `/`
      redirect: false,
    },
  },
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -120
    }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/icon.png`,
    },
  },
]
};