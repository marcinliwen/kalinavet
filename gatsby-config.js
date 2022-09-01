module.exports = {
  siteMetadata: {
    title: `Kalina-Vet`,
    description: `Kalina-Vet, Kleintierarztpraxis - Zasieki`,
    author: `liwen.marcin@gmail.com`,
    siteUrl: `https://kalinavet.com/`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, 
  "gatsby-plugin-react-helmet",
  {
    resolve: `gatsby-plugin-postcss`,
    options: {
      postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  {
    resolve: `gatsby-plugin-purgecss`,
    options: {
      printRejected: false,
      develop: false,
      tailwind: true,
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-9P7TKKCD89"
        //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
        //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
       // optimize_id: "OPT_CONTAINER_ID",
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
       //exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Defaults to https://www.googletagmanager.com
        //origin: "https://kalinavet.com",
      },
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};