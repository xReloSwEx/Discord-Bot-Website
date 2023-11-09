  const withPWA = require("next-pwa");

module.exports = withPWA({
    images: {
        domains: [ "media.discordapp.net" ]
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV == "development"
    }
});
