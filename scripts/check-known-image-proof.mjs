// Prevent reintroducing the exact known fabricated/borrowed project-proof files.
// This is an exact-file/prefix check, not a detector for every generated image.
import { createHash } from "node:crypto"
import { readdir, readFile } from "node:fs/promises"
import { basename, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const fingerprints = JSON.parse(await readFile(new URL("./known-image-proof.json", import.meta.url), "utf8"))
const root = process.argv[2] ? resolve(process.argv[2]) : fileURLToPath(new URL("../public", import.meta.url))
const rejected = []
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await inspect(path)
    else if (entry.isFile()) {
      const hash = createHash("sha256").update(await readFile(path)).digest("hex")
      if (fingerprints[hash] || basename(path).startsWith("hf_")) rejected.push(path)
    }
  }
}
await inspect(root)
if (rejected.length) {
  console.error("Known false project-proof files must stay outside public:")
  rejected.forEach(path => console.error(path))
  process.exitCode = 1
} else console.log("Known image-proof check passed.")
