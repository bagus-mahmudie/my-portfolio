import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync('src/lib/seo.ts', 'utf8');
const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
function load(env) {
  const context = { exports: {}, process: { env }, URL };
  vm.runInNewContext(code, context);
  return context.exports;
}
const production = { NODE_ENV: 'production', VERCEL_ENV: 'production', VERCEL_PROJECT_PRODUCTION_URL: 'portfolio.example' };
const main = load(production);
assert.equal(main.site.url.href, 'https://portfolio.example/');
assert.equal(main.siteMetadata.alternates.canonical, main.site.url.href);
assert.equal(main.siteMetadata.robots.index, true);
assert.equal(main.structuredData['@graph'][2].mainEntity['@id'], 'https://portfolio.example/#person');
assert.equal(main.siteMetadata.openGraph.images[0].width, 1200);
for (const env of [ {}, { NODE_ENV: 'production' }, { ...production, VERCEL_ENV: 'preview' }, { ...production, NODE_ENV: 'development' }, { ...production, NEXT_PUBLIC_SITE_URL: 'http://localhost:3000' } ]) {
  assert.equal(load(env).site.indexable, false);
}
assert.equal(load({ ...production, NEXT_PUBLIC_SITE_URL: 'https://custom.example' }).site.url.origin, 'https://custom.example');
for (const value of ['not a URL', 'ftp://example.com', 'https://example.com/path', 'https://example.com?x=1', 'https://example.com/#about', 'https://user:password@example.com']) {
  assert.throws(() => load({ ...production, NEXT_PUBLIC_SITE_URL: value }));
}
for (const route of ['robots', 'sitemap']) {
  const routeCode = ts.transpileModule(readFileSync(`src/app/${route}.ts`, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  for (const env of [production, { ...production, VERCEL_ENV: 'preview' }]) {
    const seo = load(env);
    const context = { exports: {}, require: () => seo, URL };
    vm.runInNewContext(routeCode, context);
    const result = context.exports.default();
    if (route === 'robots') {
      assert.equal(seo.site.indexable ? result.rules.allow : result.rules.disallow, '/');
      assert.equal(Boolean(result.sitemap), seo.site.indexable);
    } else {
      assert.equal(result.length, seo.site.indexable ? 4 : 0);
      if (result.length) {
        assert.equal(result[0].url, seo.site.url.href);
        assert.equal(result[1].url, new URL("/projects/uwais-pictures", seo.site.url).href);
        assert.equal(result[2].url, new URL("/projects/grand-ontama", seo.site.url).href);
        assert.equal(result[3].url, new URL("/projects/eggine-studio", seo.site.url).href);
      }
    }
  }
}
console.log('SEO checks passed: canonical, structured data, production/preview/local indexing, URL validation, robots and sitemap.');
