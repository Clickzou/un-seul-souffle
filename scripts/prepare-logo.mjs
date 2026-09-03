/**
 * Prépare les déclinaisons du logo à partir du fichier source fourni par le client.
 *
 *   node scripts/prepare-logo.mjs
 *
 * Source : captures-ecrans/un-seul-souflle-logo.png (500 × 500, fond blanc opaque,
 *          symbole en haut, nom + baseline en bas)
 *
 * Sorties, toutes en WebP à fond transparent :
 *   public/logo/symbole.webp   le seul signe — pour le header sur photo sombre
 *   public/logo/complet.webp   symbole + nom + baseline — pour le footer, fond clair
 *   public/icon.png            favicon 512 px (Next sert automatiquement app/icon)
 *
 * Deux traitements, dans cet ordre :
 *
 * 1. DÉTOURAGE. Le fond blanc devient transparent. Le seuil porte sur la luminosité
 *    ET sur la saturation : un pixel très clair mais saturé (le jaune du symbole)
 *    est conservé, seuls les gris quasi blancs disparaissent. Une bande de
 *    transition rend l'alpha progressif pour ne pas créer d'escalier sur les bords.
 *
 * 2. DÉCOUPE. La ligne de séparation entre le symbole et le texte est trouvée en
 *    cherchant la plus large bande de lignes entièrement transparentes — plutôt
 *    qu'un pourcentage codé en dur, qui casserait si le logo était redessiné.
 */

import { existsSync, mkdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "captures-ecrans", "un-seul-souflle-logo.png");
const OUT_DIR = path.join(ROOT, "public", "logo");

/** Au-dessus : blanc franc, transparent. En dessous de OPAQUE : conservé. */
const BLANC = 246;
const OPAQUE = 232;
/** Écart max entre canaux pour considérer un pixel comme neutre (donc du fond). */
const NEUTRE = 14;

if (!existsSync(SRC)) {
  console.error(`Source introuvable : ${SRC}`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });

/* ── 1. détourage ── */

const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Un pixel coloré est du logo, quelle que soit sa clarté.
  if (max - min > NEUTRE) continue;

  if (min >= BLANC) {
    data[i + 3] = 0;
  } else if (min > OPAQUE) {
    // Transition douce sur la frange anti-aliasée.
    const part = (min - OPAQUE) / (BLANC - OPAQUE);
    data[i + 3] = Math.round(data[i + 3] * (1 - part));
  }
}

const detoure = sharp(data, { raw: { width, height, channels } });

/* ── 2. découpe symbole / texte ── */

/** Bandes de lignes consécutives entièrement transparentes : [début, fin]. */
const bandes = [];
let debut = null;

for (let y = 0; y < height; y++) {
  let vide = true;
  for (let x = 0; x < width; x++) {
    if (data[(y * width + x) * channels + 3] > 8) {
      vide = false;
      break;
    }
  }
  if (vide) {
    if (debut === null) debut = y;
  } else if (debut !== null) {
    bandes.push([debut, y - 1]);
    debut = null;
  }
}
if (debut !== null) bandes.push([debut, height - 1]);

// La plus large bande INTERNE sépare le symbole du nom ; les marges haute et
// basse sont écartées.
let coupe = null;
let meilleure = 0;
for (const [haut, bas] of bandes) {
  if (haut <= 0 || bas >= height - 1) continue;
  const hauteur = bas - haut;
  if (hauteur > meilleure) {
    meilleure = hauteur;
    coupe = Math.round((haut + bas) / 2);
  }
}

if (!coupe) {
  console.error("Bande de séparation introuvable — le logo a-t-il changé de structure ?");
  process.exit(1);
}

/* ── 3. écriture ── */

const ecrire = async (image, fichier, libelle) => {
  await image.toFile(fichier);
  console.log(`  ${libelle.padEnd(26)} ${Math.round(statSync(fichier).size / 1024)} Ko`);
};

const brut = () => sharp(data, { raw: { width, height, channels } });

// sharp refuse `extract().trim()` enchaînés sur une entrée raw ("bad extract area").
// On repasse donc par un PNG intermédiaire entre les deux opérations.
const symboleBrut = await brut()
  .extract({ left: 0, top: 0, width, height: coupe })
  .png()
  .toBuffer();

// trim() supprime les marges transparentes : le logo occupe alors tout son cadre,
// et sa taille à l'écran ne dépend plus du blanc qui l'entourait.
await ecrire(
  sharp(symboleBrut).trim().webp({ quality: 92 }),
  path.join(OUT_DIR, "symbole.webp"),
  "symbole.webp",
);

await ecrire(
  detoure.clone().trim().webp({ quality: 92 }),
  path.join(OUT_DIR, "complet.webp"),
  "complet.webp",
);

await ecrire(
  sharp(symboleBrut)
    .trim()
    .resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png(),
  path.join(ROOT, "src", "app", "icon.png"),
  "src/app/icon.png (favicon)",
);

console.log(`\nSéparation symbole / texte détectée à y = ${coupe} px sur ${height}.`);
console.log(`Sortie : ${OUT_DIR}`);
