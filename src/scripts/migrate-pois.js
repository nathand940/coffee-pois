import dotenv from "dotenv";
import mongoose from "mongoose";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { connectMongo } from "../models/db.js";
import { Poi } from "../models/poi.js";

dotenv.config();

await connectMongo();

try {
  const poisFile = fileURLToPath(new URL("../data/pois.json", import.meta.url));
  const legacyPois = JSON.parse(await readFile(poisFile, "utf8"));

  for (const { id, ...poi } of legacyPois) {
    if (id === undefined || id === null) {
      throw new Error("Every POI in pois.json must have an id.");
    }

    await Poi.updateOne(
      { legacyId: String(id) },
      { $setOnInsert: { ...poi, legacyId: String(id) } },
      { upsert: true },
    );
  }

  console.log(`Migrated ${legacyPois.length} POI(s) from JSON to MongoDB.`);
} finally {
  await mongoose.disconnect();
}
