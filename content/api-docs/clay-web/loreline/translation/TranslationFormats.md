---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: TranslationFormats
target: Clay (Web)
permalink: api-docs/clay-web/loreline/translation/TranslationFormats/
---

# TranslationFormats

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/translation/TranslationFormats.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.translation.TranslationFormats</strong> (Class)</div>

Registry + wrapper for pluggable translation file formats.

Loreline natively loads translations from `.<locale>.lor` / `.<locale>.lor.txt`
files. This class extends `Loreline.loadLocale`'s file lookup so that, when
the `.lor` translation file doesn't exist, the runtime can also look for
sibling files in other common formats (PO, XLIFF, CSV/TSV) and convert
them on the fly to the Loreline translation format.

Each format must be **opted in** at runtime via `translationFormat(name, true)`.
By default, no alternate format is tried. The behaviour is identical to
the original `.lor`-only setup, so the file handler doesn't get spammed
with requests for formats the developer doesn't use.

Format families can also be removed entirely at compile time with
`-D loreline_no_po`, `-D loreline_no_xliff`, `-D loreline_no_csv`. The
corresponding converter classes are then eliminated by DCE.

## Translation strings must be valid Loreline body content

Every original / translation string in every supported format
(msgid/msgstr in PO, source/target in XLIFF, source/locale columns in
CSV/TSV) is written as-is into a synthesised `.lor` body that is then
re-parsed by the standard Loreline parser. The string therefore has to
be **valid Loreline body content**, following the same rules that apply
to text in a `.lor` source file:

 - `$var` and `${expr}` perform interpolation; use `$$` for a literal `$`.
 - `<tag>` / `</tag>` are tag markup; use `\<` for a literal `<`.
 - `\n`, `\t`, `\r`, `\\` are the usual escape sequences for newline,
tab, carriage return and backslash.
 - Bare `"` characters are allowed and pass through as literal quotes.

Translators who want to use these features just write the corresponding
Loreline syntax in their localised string and it round-trips intact.
Translators who want literal characters must apply the same escapes they
would in the original `.lor`.

## Static Members

<div class="signature field-method has-description" id="translationFormat"><code><span class="field-name">translationFormat</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#translationFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable runtime support for a translation format.

Known names: "po", "xliff", "csv". Unknown names are accepted silently
(forward-compat for new formats added later).

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `value` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="wrap"><code><span class="field-name">wrap</span><span class="parenthesis">(</span><span class="arg-name">underlying</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ImportsFileHandler/" class="type-link">loreline.ImportsFileHandler</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/translation/WrappedFileHandler/" class="type-link">WrappedFileHandler</a></code><a class="header-anchor" href="#wrap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Wraps a file handler so that, when asked for a `.lor`/`.lor.txt`
translation file that doesn't exist, the wrapper tries each enabled
alternate format (`.po`, `.xliff`/`.xlf`, `.csv`/`.tsv`) as a sibling,
converts the first match to a synthesized `.lor` translation file
content, and hands that back to the caller.

Two passes:
  1. With locale suffix: `<stem>.<locale><ext>`
  2. Without locale suffix: `<stem><ext>`. Only useful for formats
that self-identify their locale (XLIFF target-language, CSV
column header) or are mono-locale by convention (PO).

`underlying` is assumed non-null (loadLocale validates this before
calling wrap).

Returns both the wrapped handler and an accessor for the most recent
converter error captured during this wrap's lifetime. When a converter
throws on a malformed file, the wrapper records the error (with the
actual file path) and falls through to the next enabled format, so a
broken `.fr.po` doesn't block a valid `.fr.xliff`. The caller reads
`lastError()` after dispatch completes to surface the failure.

| Name | Type |
|------|------|
| `underlying` | [loreline.ImportsFileHandler](/api-docs/clay-web/loreline/ImportsFileHandler/) |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [WrappedFileHandler](/api-docs/clay-web/loreline/translation/WrappedFileHandler/) |

## Private Members

<div class="signature field-var has-description" id="formats"><code><span class="field-name">formats</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#formats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Registered formats. Order is the lookup priority.
Each entry: short name (used by `translationFormat`) and file extension.
The converter for each `ext` is dispatched explicitly in `convert()`.
See the comment there for why we don't store function refs here.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enabled"><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Per-format enabled state. Empty by default, so all formats are disabled.
The user opts in via `translationFormat(name, true)`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="convert"><code><span class="field-name">convert</span><span class="parenthesis">(</span><span class="arg-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#convert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatches a file's content to its format converter by extension.

Explicit `switch` rather than a function pointer stored in `formats`
so every converter has a direct call site visible to dead-code
elimination / AOT trim analysis. The reflective `Closure(typeof(X),
"toLoreline", ...)` Haxe would otherwise emit on C# is invisible to
.NET's `PublishAot` trimmer and silently drops the converter bodies.

| Name | Type |
|------|------|
| `ext` | [String](/api-docs/clay-web/String/) |
| `content` | [String](/api-docs/clay-web/String/) |
| `locale` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="anyEnabled"><code><span class="field-name">anyEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#anyEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if at least one format is currently enabled.
| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="endsWith"><code><span class="field-name">endsWith</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">suffix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endsWith"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

UTF-safe suffix check. Uses byte-level comparison via uSubstr which is
safe because the suffix is ASCII (`.<locale>` with locale being an
ASCII code like "fr", "en-US", etc.).

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-web/String/) |
| `suffix` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

