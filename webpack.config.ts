import webpack from "webpack";
import path from "path";

import { BuildPaths, BuildMode } from "./config/build/types/types";
import { buildWebpack } from "./config/build/buildWebpack";

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
}

export default (env: EnvVariables): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "app", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
    eslint: path.resolve(__dirname, ".eslintrc.json"),
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
    analyzer: env.analyzer,
  });

  return config;
};
