import { build } from "tsup";

await build({
    entry: ["src/index.js"],
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
    outDir: "dist",
});
