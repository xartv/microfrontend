export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";
export type OnOff = "on" | "off";

export interface BuildPaths {
  entry: string;
  html: string;
  public: string;
  output: string;
  src: string;
}

export interface BuildOptions {
  port?: number;
  paths?: BuildPaths;
  mode?: BuildMode;
  analyzer?: OnOff;
  platform?: BuildPlatform;
}
