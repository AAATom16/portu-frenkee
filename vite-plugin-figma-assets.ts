import type { Connect } from "vite";
import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

const PREFIX = "figma:asset/";
const VIRTUAL = "\0figma-asset:";

/** Avoid partial-content (206) responses; some HTTP/2 proxies (e.g. Railway) error on range requests for static PNGs. */
function stripRangeForFigmaAssets(): Connect.NextHandleFunction {
  return (req, _res, next) => {
    const url = req.url?.split("?")[0] ?? "";
    if (url.startsWith("/figma-assets/")) {
      delete req.headers.range;
    }
    next();
  };
}

/**
 * Must use Vite's config.root — not import.meta.url in this file, because
 * Vite bundles vite.config.ts and __dirname would point at the bundle cache,
 * so existsSync(public/figma-assets) would fail and every image becomes the placeholder.
 */
export function figmaAssetsPlugin(): Plugin {
  let root = process.cwd();
  let base = "/";

  return {
    name: "figma-assets",
    enforce: "pre",
    configureServer(server) {
      server.middlewares.use(stripRangeForFigmaAssets());
    },
    configurePreviewServer(server) {
      server.middlewares.use(stripRangeForFigmaAssets());
    },
    configResolved(config) {
      root = config.root;
      base = config.base;
    },
    resolveId(id) {
      if (id.startsWith(PREFIX)) {
        return VIRTUAL + id.slice(PREFIX.length);
      }
    },
    load(id) {
      if (!id.startsWith(VIRTUAL)) return;
      const file = id.slice(VIRTUAL.length);
      const hashFile = path.join(root, "public", "figma-assets", file);
      if (fs.existsSync(hashFile)) {
        const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
        const url = `${prefix === "" ? "" : prefix}/figma-assets/${file}`;
        return `export default ${JSON.stringify(url)}`;
      }
      const phPrefix = base.endsWith("/") ? base.slice(0, -1) : base;
      const placeholder = `${phPrefix === "" ? "" : phPrefix}/figma-placeholder.png`;
      return `export default ${JSON.stringify(placeholder)}`;
    },
  };
}
