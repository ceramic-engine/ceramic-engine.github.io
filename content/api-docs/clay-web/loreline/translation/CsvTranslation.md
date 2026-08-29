---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: CsvTranslation
target: Clay (Web)
permalink: api-docs/clay-web/loreline/translation/CsvTranslation/
---

# CsvTranslation

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/translation/CsvTranslation.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.translation.CsvTranslation</strong> (Class)</div>

Converts CSV/TSV file content into a Loreline translation file body.

Requires a header row. Recognized columns (case-insensitive):
  - "key" (required, used as `#key` in the synthesized .lor)
  - "source" / "en" / "original" (optional, used as `// <source>` reference)
  - the column whose header equals `locale` = the translation,
so a single multi-locale CSV (`key, source, en, fr, es, de`) can serve
every locale.

Fallback: if no column header matches `locale`, the last column is used as
the translation (legacy 2-column shape `key, value`).

Quoting follows RFC 4180: values containing the separator, quotes, or newlines
must be wrapped in double-quotes; literal quotes are doubled (`""`).

**The locale-column value must be valid Loreline body content**. It is
written verbatim into the synthesised `.lor` and re-parsed by Loreline.
See the full rules in `loreline.translation.TranslationFormats`.

## Static Members

<div class="signature field-method no-description" id="toLoreline"><code><span class="field-name">toLoreline</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-web/String/) |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tsvToLoreline"><code><span class="field-name">tsvToLoreline</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#tsvToLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-web/String/) |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromScript"><code><span class="field-name">fromScript</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/AstNode/" class="type-link">loreline.AstNode</a><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fromScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a CSV file body for the given source `script` and `locale`.
The output has three columns: `key`, `source`, `<locale>`. If `existing`
is provided, entries already present there are preserved as the
translation value; otherwise the translation defaults to the source text.

| Name | Type |
|------|------|
| `script` | [loreline.AstNode](/api-docs/clay-web/loreline/AstNode/) |
| `existing` | [Null](/api-docs/clay-web/Null/)<[Map](/api-docs/clay-web/Map/)> |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tsvFromScript"><code><span class="field-name">tsvFromScript</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/AstNode/" class="type-link">loreline.AstNode</a><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#tsvFromScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `script` | [loreline.AstNode](/api-docs/clay-web/loreline/AstNode/) |
| `existing` | [Null](/api-docs/clay-web/Null/)<[Map](/api-docs/clay-web/Map/)> |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Private Members

<div class="signature field-method no-description" id="convert"><code><span class="field-name">convert</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#convert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-web/String/) |
| `sep` | [Int](/api-docs/clay-web/Int/) |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="generate"><code><span class="field-name">generate</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/AstNode/" class="type-link">loreline.AstNode</a><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#generate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `script` | [loreline.AstNode](/api-docs/clay-web/loreline/AstNode/) |
| `existing` | [Null](/api-docs/clay-web/Null/)<[Map](/api-docs/clay-web/Map/)> |
| `locale` | [String](/api-docs/clay-web/String/) |
| `sep` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="escapeForCsvField"><code><span class="field-name">escapeForCsvField</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeForCsvField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Escape a field for CSV/TSV output per RFC 4180. Wraps the value in
double-quotes if it contains the separator, a quote, or a newline; and
doubles any literal `"` to `""` inside the wrapped value.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |
| `sep` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findColumn"><code><span class="field-name">findColumn</span><span class="parenthesis">(</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">names</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `header` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |
| `names` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findLocaleColumn"><code><span class="field-name">findLocaleColumn</span><span class="parenthesis">(</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findLocaleColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `header` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primarySubtag"><code><span class="field-name">primarySubtag</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#primarySubtag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parseRows"><code><span class="field-name">parseRows</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseRows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-web/String/) |
| `sep` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="escapeLineForComment"><code><span class="field-name">escapeLineForComment</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeLineForComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

