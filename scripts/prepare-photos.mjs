/**
 * Prépare les portraits de l'équipe : recadrage carré intelligent + WebP.
 *
 *   node scripts/prepare-photos.mjs
 *
 * Source : captures-ecrans/ (photos récupérées du site legacy, en JPG/PNG lourds)
 * Sortie : public/equipe/<slug>.webp, 264 × 264 (3× pour un affichage à 88 px)
 *
 * Par défaut, `sharp.strategy.attention` recadre sur la zone la plus saillante.
 * Ce n'est pas fiable sur tous les portraits : sur une photo en pied avec une
 * chemise blanche en plein soleil, l'algorithme cadre le vêtement et coupe le
 * visage. Un `cadre` explicite reprend alors la main :
 *
 *   cadre: { x, y, zoom }
 *     x, y  position du visage, en fraction de la largeur / hauteur (0 à 1)
 *     zoom  côté du carré, en fraction de la plus petite dimension (défaut 1)
 *
 * Repérer les valeurs à l'œil sur la photo source, puis rejouer le script.
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

const TAILLE = 320;

const PHOTOS = [
  // Photo en pied, chemise blanche très lumineuse : `attention` cadrait le buste.
  { src: "majorie-anglade.jpg", slug: "marjorie-anglade", nom: "Marjorie Anglade",
    cadre: { x: 0.5, y: 0.29, zoom: 0.58 } },
  // Cadrage automatique correct mais front rogné.
  { src: "Muriel Saffroy.jpg", slug: "muriel-saffroy", nom: "Muriel Saffroy",
    cadre: { x: 0.46, y: 0.43, zoom: 0.62 } },
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
    let image = sharp(src);

    if (photo.cadre) {
      const { width, height } = await sharp(src).metadata();
      const { x, y, zoom = 1 } = photo.cadre;
      const cote = Math.round(Math.min(width, height) * zoom);
      // Le carré est centré sur le point visé, puis ramené dans les limites de
      // l'image : viser près d'un bord décale le cadre au lieu de faire échouer
      // l'extraction.
      const left = Math.max(0, Math.min(Math.round(width * x - cote / 2), width - cote));
      const top = Math.max(0, Math.min(Math.round(height * y - cote / 2), height - cote));
      image = image.extract({ left, top, width: cote, height: cote });
    }

    await image
      .resize(TAILLE, TAILLE, {
        fit: "cover",
        ...(photo.cadre ? {} : { position: sharp.strategy.attention }),
      })
      .webp({ quality: 88 })
      .toFile(out);

    const ko = Math.round(statSync(out).size / 1024);
    console.log(`ok (${ko} Ko)${photo.cadre ? "  cadrage manuel" : ""}`);
  } catch (error) {
    console.log(`ÉCHEC — ${error.message}`);
    echecs++;
  }
}

console.log(`\nSortie : ${OUT_DIR}`);

process.exit(echecs ? 1 : 0);
