import fs from "fs/promises";

export async function readJson<T>(path: string): Promise<T> {
  const res = await fs.readFile(path, "utf-8");
  return JSON.parse(res);
}
