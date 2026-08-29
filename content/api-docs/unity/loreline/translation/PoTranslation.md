---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: PoTranslation
target: Unity
permalink: api-docs/unity/loreline/translation/PoTranslation/
---

# PoTranslation

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/translation/PoTranslation.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.translation.PoTranslation</strong> (Class)</div>

Converts GNU gettext PO file content into a Loreline translation file body.

Mapping:
msgctxt "<key>"        -> #<key> hash comment (preferred if present)
msgid   "<source>"     -> fallback for key if no msgctxt, else used as
`// <source>` reference comment
msgstr  "<translated>" -> the translation text line

Empty `msgstr` -> entry skipped.
Plural forms (`msgstr[N]`) -> take `msgstr[0]`.
Multi-line msgid/msgstr (`msgid ""\n"line1"\n"line2"`) -> concatenated.

PO files are mono-locale by design; the `locale` parameter is accepted for
API uniformity with the other format converters but unused here.

**msgstr must be valid Loreline body content**. Its value is written
verbatim into the synthesised `.lor` and re-parsed by Loreline. See the
full rules in `loreline.translation.TranslationFormats`.

## Static Members

<div class="signature field-method no-description" id="toLoreline"><code><span class="field-name">toLoreline</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/unity/String/) |
| `locale` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromScript"><code><span class="field-name">fromScript</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">loreline.AstNode</a><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#fromScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a PO file body for the given source `script`, suitable for the
given `locale`. If `existing` is provided, entries already present there
are preserved as the `msgstr` value; otherwise the `msgstr` defaults to
the source text (placeholder).

| Name | Type |
|------|------|
| `script` | [loreline.AstNode](/api-docs/unity/loreline/AstNode/) |
| `existing` | [Null](/api-docs/unity/Null/)<[Map](/api-docs/unity/Map/)> |
| `locale` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-method has-description" id="escapeForPoString"><code><span class="field-name">escapeForPoString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeForPoString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Escape a string for use inside a PO double-quoted string literal.
Escapes `\` -> `\\` and `"` -> `\"`. Other escapes (like `\n` from the
Loreline printer) round-trip correctly because they get re-applied by
the Loreline parser when the synthesized body is re-parsed.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/translation/_PoTranslation/PoEntry/" class="type-link">loreline.translation._PoTranslation.PoEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[loreline.translation._PoTranslation.PoEntry](/api-docs/unity/loreline/translation/_PoTranslation/PoEntry/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readKeyword"><code><span class="field-name">readKeyword</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#readKeyword"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `line` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readQuotedString"><code><span class="field-name">readQuotedString</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#readQuotedString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads `"..."` starting at character offset `from` in `line`. Skips leading
whitespace. Returns the unescaped content, or null if not a quoted string.

| Name | Type |
|------|------|
| `line` | [String](/api-docs/unity/String/) |
| `from` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="trimLeft"><code><span class="field-name">trimLeft</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#trimLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="escapeLineForComment"><code><span class="field-name">escapeLineForComment</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeLineForComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Escape a string for use as a Loreline `// ...` line comment.
Replaces newlines with spaces (line comments can't span lines).

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="escapeLineForBody"><code><span class="field-name">escapeLineForBody</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeLineForBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Escape a string for use as a Loreline text body line.
Real newlines stay (Loreline groups consecutive non-blank lines into a
single multi-line text block). The `$` character is doubled to avoid
triggering interpolation in the synthesized `.lor` content.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

