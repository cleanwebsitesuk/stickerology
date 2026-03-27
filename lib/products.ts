import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

export type Product = {
  id: string;
  title: string;
  slug: string;
  price: number;
  category: string;
  quantity: number;
  image: string;
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function getImageFromTitle(title: string) {
  return `https://source.unsplash.com/600x600/?${encodeURIComponent(
    title + " sticker"
  )}`;
}

function isAllowedSticker(row: Record<string, string>) {
  const title = (row["Title"] || "").toLowerCase();
  const category = (row["eBay category 1 name"] || "").toLowerCase();

  const includeWords = [
    "car",
    "bmw",
    "ford",
    "vw",
    "audi",
    "motorbike",
    "motorcycle",
    "bike",
    "bicycle",
    "honda",
    "yamaha",
    "kawasaki",
    "suzuki",
    "aprilia",
    "ducati",
    "ktm",
  ];

  const excludeWords = [
    "safety",
    "danger",
    "warning",
    "caution",
    "hazard",
    "fire exit",
    "first aid",
    "mandatory",
    "prohibition",
    "sign",
    "placard",
  ];

  const included =
    includeWords.some((word) => title.includes(word)) ||
    category.includes("decal") ||
    category.includes("vinyl");

  const excluded =
    excludeWords.some((word) => title.includes(word) || category.includes(word));

  return included && !excluded;
}

export function getProducts(): Product[] {
  const filePath = path.join(process.cwd(), "data", "ebay.csv");
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const rows = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
  }) as Record<string, string>[];

  return rows
    .filter(isAllowedSticker)
    .map((row, index) => {
      const title = row["Title"] || "Untitled product";

      const price =
        Number(row["Start price"]) ||
        Number(row["Current price"]) ||
        Number(row["Auction Buy It Now price"]) ||
        0;

      return {
        id: row["Item number"] || String(index + 1),
        title,
        slug: slugify(title),
        price,
        category: row["eBay category 1 name"] || "Sticker",
        quantity: Number(row["Available quantity"] || 0),
        image: getImageFromTitle(title),
      };
    })
    .filter((product) => product.price > 0);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getProducts().find((product) => product.slug === slug);
}
