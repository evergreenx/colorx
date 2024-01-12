/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat : 'esm',
  serverDependenciesToBundle: [
    /^@uppy.*/, // 👈🏼 notice the way its written
    /^usehooks-ts.*/,
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
