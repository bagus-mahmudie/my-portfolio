# Design and asset sources

This portfolio adapts the visual structure and interactions of Meyawo by DevCRUD:
https://preview.themewagon.com/meyawo/

Meyawo reference notice:
Copyright: 2019 DevCRUD (https://devcrud.com)
Licensed: https://devcrud.com/licenses
Coded by www.devcrud.com
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The hero background is from Meyawo (assets/imgs/header.jpg).
The React components and scoped styling adapt its purple palette, typography,
full-height hero, fixed navbar, service hover transitions, and expanding portfolio overlays.
No Bootstrap or jQuery runtime is included.

Baloo Paaji and Open Sans fonts are served locally from public/fonts.
Sources: Google Fonts / fonts.gstatic.com.
Baloo Paaji: https://github.com/EkType/Baloo (license: public/fonts/Baloo-Paaji-OFL.txt)
Open Sans: https://github.com/googlefonts/opensans

Profile photo and project artwork:
https://github.com/bagus-mahmudie
https://github.com/bagus-mahmudie/bagus-mahmudie/tree/main/assets/projects/originals

Public portfolio content was verified against this GitHub profile on 2026-10-13.
Pricing, hire-me banner, testimonials, and blog are intentionally omitted.
Contact form opens Gmail compose populated from the form; the visitor sends it in Gmail. The site does not submit or store messages.


## Project logo audit (2026-10-13)

All 19 project entries were reviewed against their public repository assets.
No AI redraw, sharpening, or raster upscaling was used. Larger dimensions alone
were not treated as proof of better image quality.

Replaced from original assets:
- Uwais Pictures: 141x66 PNG -> original 256x256 PNG frame extracted losslessly
  from uwais-pictures/main/src/assets/img/favicon.ico. The original frame includes
  transparent padding; its wordmark remains a bitmap.
- Mitra Elang Bersatu: 192x192 -> 512x512, from
  mitra-elang-bersatu/main/src/assets/img/logo-mitra-elang-bersatu-512.png.
- Drubbix: 249x249 icon -> 716x256 official white wordmark, from
  drubbix/main/assets/img/logo-footer.png.
- Dishub Uji Berkala: 100x100 -> 930x1080, from
  dishub-uji-berkala/main/Logo_Kementerian_Perhubungan_Indonesia_(Kemenhub).png.

Official contrast variants (not resolution upgrades):
- 888Living: 202x51 white wordmark from 888living/main/assets/img/logo-living-footer.png.
- Nymgo: 161x44 white wordmark from nymgo/main/assets/img/logo-footer.png.
  Nymgo uses its color variant in light mode and white variant in dark mode.

Retained suitable existing source assets:
- Grand Ontama, Grand Ontama Dashboard, Grand Ontama V1: shared 862x862 logo.
- Catkuji: 571x454.
- Project Management: existing 628x657 artwork. Its repository contains no
  dedicated project logo; do not represent this artwork as a newly verified logo.
- PT Sentral Layanan Prima: 144x144 original SLP mark. A larger generic house icon
  was rejected because it was not the same logo.
- Refactory Redesign: existing 180x180 project icon.
- SIKD UNS: 500x499.
- SPK Asrama Kalteng: 305x305.

Original master/vector assets still required for a true sharpness upgrade:
- Egginestudio: 120x36; the repository's logo.svg is actually raster PNG data.
- Auto Trust: 39x39; the alternate footer asset is also 39x39.
- Lova Dating Site: 43x40; the alternate wordmark says "Logo" and was rejected.
- Megah Abadi: 60x60; the larger ICO frame is visibly soft and was rejected.

Cards use a consistent 120x72 contain area, a 3px background blur, and a dark
radial backdrop localized behind the logo instead of white glow or a solid box.

## Targeted logo correction

- Lova uses a locally redrawn SVG approximation, not an official vector master.
  Auto Trust was subsequently reverted to its original 39x39 PNG at the user's request.
  The unused Auto Trust SVG and Lova PNG were removed during the file audit.
- Uwais: dark-only narrow white edge highlight; original raster source retained.
- Grand Ontama, Dashboard, V1: brighter dark-mode lettering
  using the existing 862x862 source. This is a contrast/layout correction, not new
  source resolution. Display size was subsequently matched between themes.
- Nymgo: dark-only wider wordmark display using the existing official white asset.
- Other project logos and light-mode styling are unchanged.

These entries record earlier logo work. The October 14 file/SEO audit does not redraw,
resize or recolor active logos. See AUDIT.md for removed duplicates and corrected extensions.

## Icons

Technology marks are local SVGs from the existing Devicon/Simple Icons based collection.
Brand marks belong to their respective owners. GitHub is rendered by GitHubLogo.tsx;
LinkedIn and WhatsApp use local SVGs. Interface icons use lucide-react.
Technology carousel reference: https://preview.themewagon.com/dark-minimal/

## Floating controls

Theme control reference: https://ktanpatel.vercel.app/
Adapted its fixed top-right 48px translucent circular lamp button, hanging cord,
cap, and light/dark bulb treatment. Back-to-top uses the same visual treatment
at the bottom right, appears after 400px scroll, and respects reduced motion.
Bulb icon geometry follows the reference's Remix Icon lightbulb-flash design.
