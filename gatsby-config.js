module.exports = {
    siteMetadata: {
        title: 'Roy Martin',
    },
    plugins: ['gatsby-plugin-react-helmet', {
        resolve: 'gatsby-plugin-sass',
        options: {
            precision: 8,
        },
    }, {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: "UA-58200271-1",
            // Puts tracking script in the head instead of the body
            head: false,
            // Setting this parameter is optional
            anonymize: true,
            // Setting this parameter is also optional
            respectDNT: true,
            // Avoids sending pageview hits from custom paths
            exclude: [],
        },
    }, ],
}
