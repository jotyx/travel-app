module.exports = {
    siteMetadata: {
        title: `Travel App`,
        description: `Travel App`,
        author: `@jotyx`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-plugin-module-resolver',
            options: {
                root: './src', // <- will be used as a root dir
                aliases: {
                    components: './components', // <- will become ./src/components
                    "core/util": "./core/util",
                },
            },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
};
