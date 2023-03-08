import nextTranspileModules from "next-transpile-modules";

const withTM = nextTranspileModules(["@nex-fam/lib"]);

const config = withTM({
  images: {
    loader: "akamai",
    path: "/",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
      },
    });
    return config;
  },
});

export default config;
