export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
  eslint: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer?: boolean;
}
