/**
 * Prépare les portraits de l'équipe : recadrage carré intelligent + WebP.
 *
 *   node scripts/prepare-photos.mjs
 *
 * Source : captures-ecrans/ (photos récupérées du site legacy, en JPG/PNG lourds)
 * Sortie : public/equipe/<slug>.webp, 264 × 264 (3× pour un affichage à 88 px)
 *
 * `sharp.strategy.attention` recadre sur la zone saillante plutôt qu'au centre
 * géométrique : sur des portraits en pied, un crop centré couperait la tête.
 *
 * Les fichiers sources portent le nom de la personne (quelques coquilles dans les
 * noms d'origine : « majorie », « ptarick » — conservées telles quelles).
 */

import { existsSync, mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC_DIR = path.join(ROOT, "captures-ecrans");
const OUT_DIR = path.join(ROOT, "public", "equipe");

const TAILLE = 264;

const PHOTOS = [
  { src: "majorie-anglade.jpg", slug: "marjorie-anglade", nom: "Marjorie Anglade" },
  { src: "Muriel Saffroy.jpg", slug: "muriel-saffroy", nom: "Muriel Saffroy" },
  { src: "olivia artur.jpg", slug: "olivia-artur", nom: "Olivia Artur" },
  { src: "Nicolas-Vimini.png", slug: "nicolas-vimini", nom: "Nicolas Vimini" },
  { src: "yohan-castelar.jpg", slug: "yohan-castelar", nom: "Yohan Castelar" },
  { src: "ptarick-calvet.png", slug: "patrick-calvet", nom: "Patrick Calvet" },
];

mkdirSync(OUT_DIR, { recursive: true });

let echecs = 0;

for (const photo of PHOTOS) {
  const src = path.join(SRC_DIR, photo.src);
  const out = path.join(OUT_DIR, `${photo.slug}.webp`);

  process.stdout.write(`  ${photo.nom.padEnd(18)} `);

  if (!existsSync(src)) {
    console.log(`ABSENT — ${photo.src}`);
    echecs++;
    continue;
  }

  try {
    await sharp(src)
      .resize(TAILLE, TAILLE, { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 88 })
      .toFile(out);

    const ko = Math.round(statSync(out).size / 1024);
    console.log(`ok (${ko} Ko)`);
  } catch (error) {
    console.log(`ÉCHEC — ${error.message}`);
    echecs++;
  }
}

console.log(`\nSortie : ${OUT_DIR}`);

process.exit(echecs ? 1 : 0);
