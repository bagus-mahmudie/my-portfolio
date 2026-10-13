// Regenerate the sharing image without changing any on-page visuals.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createElement as h } from 'react';
import { ImageResponse } from 'next/og.js';

const root = new URL('../', import.meta.url);
const [headingFont, bodyFont, portrait] = await Promise.all([
  readFile(new URL('public/fonts/baloo-paaji.ttf', root)),
  readFile(new URL('public/fonts/open-sans.ttf', root)),
  readFile(new URL('public/images/bagus.png', root)),
]);
const image = new ImageResponse(
  h('div', { style: { width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '64px 70px', background: '#15141c', color: '#f9f7ff', fontFamily: 'Open Sans', borderBottom: '12px solid #a996e1' } },
    h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 } },
      h('div', { style: { display: 'flex', flexDirection: 'column', width: 710 } },
        h('div', { style: { fontSize: 20, letterSpacing: 5, color: '#b5a4ed', marginBottom: 22 } }, 'PORTFOLIO'),
        h('div', { style: { display: 'flex', flexDirection: 'column', fontFamily: 'Baloo Paaji', fontSize: 78, lineHeight: 1.1 } },
          h('span', null, 'Bagus Mahmudie')),
        h('div', { style: { fontSize: 30, marginTop: 22 } }, 'Full-Stack Web Developer'),
        h('div', { style: { fontSize: 21, marginTop: 14, color: '#b7b4c4' } }, 'Jakarta, Indonesia'),
      ),
      h('img', { src: `data:image/png;base64,${portrait.toString('base64')}`, width: 240, height: 240, style: { borderRadius: 120, objectFit: 'cover', border: '5px solid #695aa6' } }),
    ),
    h('div', { style: { display: 'flex', borderTop: '1px solid #393442', paddingTop: 26, fontSize: 22, color: '#b5a4ed' } }, 'Laravel · Vue · PHP · React · Next.js'),
  ),
  { width: 1200, height: 630, fonts: [
    { name: 'Baloo Paaji', data: headingFont, weight: 400, style: 'normal' },
    { name: 'Open Sans', data: bodyFont, weight: 400, style: 'normal' },
  ] },
);
const output = new URL('public/social-preview.png', root);
await writeFile(output, Buffer.from(await image.arrayBuffer()));
console.log(`Created ${fileURLToPath(output)}`);
