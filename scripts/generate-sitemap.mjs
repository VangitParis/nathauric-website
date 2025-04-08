import { writeFileSync } from 'fs';

const baseUrl = 'https://www.nathauric.com';
const pages = ['']; // tu peux en ajouter d'autres si tu as plusieurs pages

const urls = pages.map(
  (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
`
).join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls}
</urlset>
`;

writeFileSync('public/sitemap.xml', sitemap.trim());

console.log('✅ sitemap.xml généré avec succès');
