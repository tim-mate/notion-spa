import webpack from "webpack";
import { BuildOptions } from "./types/types";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

export const buildWebpack = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    devtool: isDev && "eval",
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
  };
};
