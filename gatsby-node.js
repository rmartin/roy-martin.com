/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === "build-html") {
      config.loader("null", {
        test: /typeit/,
        loader: "null-loader",
      });
    }
  };