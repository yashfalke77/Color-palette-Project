const withPlugins = require("next-compose-plugins");

const nextconfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};

module.exports = withPlugins([], nextconfig);
