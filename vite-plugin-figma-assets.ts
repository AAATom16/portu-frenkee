import type { Plugin } from "vite";
import fs from "fs";
import path from "path";

const PREFIX = "figma:asset/";
const VIRTUAL = "\0figma-asset:";

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
