const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
    [
        [withBundleAnalyzer],

        // your other plugins here
    ],
    {
        webpack5: true,
        images: {
            imageSizes: [48, 256],
        },
        async redirects() {
            return [
                {
                    source: "/utils/matconv",
                    destination: "/mc",
                    permanent: true,
                },
            ];
        },
    }
);
