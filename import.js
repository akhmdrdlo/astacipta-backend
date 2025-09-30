// import.js
import fetch from "node-fetch";
import fs from "fs";

const raw = fs.readFileSync("programs.json", "utf-8");
const items = JSON.parse(raw);

const API_URL = "https://astacipta-backend.onrender.com/api/programs";
const API_TOKEN = "3ceafba72f5d09924de6c8a14cb357af5257b2f6c9be803235e4abb0dc953dd320676c43110a0d897327fc615b805fa96d84c602eedfef4ff06c882246258f30022defb45400b7635f497d25d4b61136abf64fc7ac7be012aae6f508a31a570bdda217d6bb3906a8db3e54234dfad4f733b3bd2df16e1d358d6e69e40848fcf8";

// field internal Strapi yang dibuang
const INTERNAL_FIELDS = [
  "id",
  "documentId",
  "createdAt",
  "updatedAt",
  "publishedAt",
  "locale",
  "localizations",
];

function sanitize(obj) {
  if (Array.isArray(obj)) {
    return obj.map(sanitize);
  } else if (obj && typeof obj === "object") {
    const clean = {};
    for (const key of Object.keys(obj)) {
      if (!INTERNAL_FIELDS.includes(key)) {
        // skip produk dulu biar nggak error relasi
        if (key === "produks") continue;
        clean[key] = sanitize(obj[key]);
      }
    }
    return clean;
  }
  return obj;
}

async function importData() {
  for (const item of items) {
    try {
      const cleanItem = sanitize(item);

      const payload = { data: cleanItem };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("📥 Imported:", data);
    } catch (err) {
      console.error("❌ Import failed:", err);
    }
  }
}

importData();
