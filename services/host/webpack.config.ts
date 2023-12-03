import webpack from "webpack";
import {
  buildWebpack,
  BuildMode,
  BuildPaths,
  BuildPlatform,
  OnOff,
} from "@packages/build-config";
import path from "path";
import "dotenv/config";
import packageJson from "./package.json";

export default () => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    public: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };

  const BLOG_REMOTE_URL =
    process.env.BLOG_REMOTE_URL ?? "http://localhost:3001";
  const ADMIN_REMOTE_URL =
    process.env.ADMIN_REMOTE_URL ?? "http://localhost:3002";

  const config: webpack.Configuration = buildWebpack({
    port: Number(process.env.PORT) ?? 3000,
    mode: (process.env.MODE as BuildMode) ?? "development",
    paths,
    analyzer: (process.env.analyzer as OnOff) ?? "off",
    platform: (process.env.platform as BuildPlatform) ?? "desktop",
  });

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",

      remotes: {
        blog: `blog@${BLOG_REMOTE_URL}/remoteEntry.js`,
        admin: `admin@${ADMIN_REMOTE_URL}/remoteEntry.js`,
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          eager: true,
          // requiredVersion: packageJson.dependencies['react'],
        },
        "react-router-dom": {
          eager: true,
          // requiredVersion: packageJson.dependencies['react-router-dom'],
        },
        "react-dom": {
          eager: true,
          // requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    })
  );

  return config;
};
