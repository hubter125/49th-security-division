import type { NextConfig } from "next";

/**
 * Static-export configuration for GitHub Pages.
 *
 * BASE_PATH controls the subpath the site is served from:
 *   - Project site  https://<org>.github.io/<repo>/  ->  BASE_PATH=/<repo>
 *   - User/org site https://<org>.github.io/          ->  BASE_PATH unset (or "")
 *   - Custom domain                                   ->  BASE_PATH unset (or "")
 *
 * The deploy workflow fills this in automatically from actions/configure-pages,
 * so you normally never have to set it by hand. For a local subpath preview:
 *   BASE_PATH=/my-repo npm run build
 */
const rawBasePath = process.env.BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";
// Normalise: "" | "/repo"  (leading slash, no trailing slash)
const basePath = rawBasePath && rawBasePath !== "/" ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : "";

const nextConfig: NextConfig = {
  // Emit a fully static site to ./out — no Node.js server, middleware, or SSR at runtime.
  output: "export",

  // Serve every route and asset from the repository subpath.
  basePath,
  assetPrefix: basePath || undefined,

  // GitHub Pages serves /tracks/ -> /tracks/index.html; trailing slashes avoid 404s on refresh.
  trailingSlash: true,

  // The Image Optimization API needs a server; static export requires unoptimized images.
  images: { unoptimized: true },

  // Expose the resolved base path to client code (e.g. for plain <img>/<a> to files in /public).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },

  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
