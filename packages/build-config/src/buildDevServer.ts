import type { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/buildTypes";

export function buildDevServer(options: BuildOptions): Configuration {
  const { port } = options;
  const isDev = options.mode === "development";

  return {
    port: port ?? 3001,
    open: isDev,
    // work only for devServer, if use nginx need to proxy requests to index.html
    historyApiFallback: true,
    hot: true,
  };
}
