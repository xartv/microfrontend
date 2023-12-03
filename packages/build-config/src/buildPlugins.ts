import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/buildTypes";
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const { mode, paths, analyzer, platform } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, "favicon.ico"),
      publicPath: "/",
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  const devPlugins: Configuration["plugins"] = [
    // off if build slow
    new webpack.ProgressPlugin(),
    //new ForkTsCheckerWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
  ];

  const prodPlugins: Configuration["plugins"] = [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, "locales"),
          to: path.resolve(paths.output, "locales"),
        },
      ],
    }),
  ];

  if (analyzer === "on") {
    plugins.push(new BundleAnalyzerPlugin());
  }

  if (isDev) {
    plugins.push(...devPlugins);
  }

  if (isProd) {
    plugins.push(...prodPlugins);
  }

  return plugins;
}
