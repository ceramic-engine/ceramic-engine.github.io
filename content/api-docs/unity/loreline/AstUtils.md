---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: AstUtils
target: Unity
permalink: api-docs/unity/loreline/AstUtils/
---

# AstUtils

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/AstUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.AstUtils</strong> (Class)</div>

Static utility functions for programmatic AST formatting transformations.
Usable as static extensions on AstNode via `using loreline.AstUtils`.

## Static Members

<div class="signature field-method has-description" id="addQuotes"><code><span class="field-name">addQuotes</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addQuotes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add double quotes to all unquoted string literals in the AST.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeQuotes"><code><span class="field-name">removeQuotes</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeQuotes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove double quotes from string literals that don't strictly need them.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toBraceStyle"><code><span class="field-name">toBraceStyle</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toBraceStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert all blocks to brace style.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toPlainStyle"><code><span class="field-name">toPlainStyle</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#toPlainStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert all blocks to plain/indent style.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useWordOperators"><code><span class="field-name">useWordOperators</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useWordOperators"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert &&/|| operators to and/or word form.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useSymbolOperators"><code><span class="field-name">useSymbolOperators</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useSymbolOperators"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert and/or operators to &&/|| symbol form.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="useParenConditions"><code><span class="field-name">useParenConditions</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useParenConditions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert all if conditions to use parentheses.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="usePlainConditions"><code><span class="field-name">usePlainConditions</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#usePlainConditions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert all if conditions to plain style (no parentheses).

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reindentFunctions"><code><span class="field-name">reindentFunctions</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">oldIndent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">newIndent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reindentFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Re-indent function body raw code strings.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |
| `oldIndent` | [String](/api-docs/unity/String/) |
| `newIndent` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertLocalizationKeys"><code><span class="field-name">insertLocalizationKeys</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">includeImports</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reservedIds</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rng</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Random/" class="type-link">Random</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#insertLocalizationKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Insert localization key hash comments directly into source text.
Returns the modified source content. Does NOT use the Printer,
so all existing content (comments, formatting, test blocks) is preserved.

When `includeImports` is false and `node` is a `Script`, imported
scripts are skipped. Their byte offsets refer to other files'
contents and would land at wrong positions in `content`. Use this
for per-file rewrites that walk imports externally.

When `reservedIds` is provided, it's used (and mutated) as the
shared existing-IDs set across calls. Useful for project-wide
coordination: pass the same map to every per-file call so
file B's generation avoids every ID already in file A (both
pre-existing AND just-generated). Existing IDs found in this
file are added to the map; newly-generated IDs are added too.

| Name | Type | Default |
|------|------|---------|
| `content` | [String](/api-docs/unity/String/) | |
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) | |
| `includeImports` | [Bool](/api-docs/unity/Bool/) | `true` |
| `reservedIds` | [Map](/api-docs/unity/Map/) | *(optional)* |
| `rng` | [Random](/api-docs/unity/loreline/Random/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeLocalizationKeys"><code><span class="field-name">removeLocalizationKeys</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#removeLocalizationKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove all #hash localization keys from source content, using AST positions.

| Name | Type |
|------|------|
| `content` | [String](/api-docs/unity/String/) |
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extractTranslations"><code><span class="field-name">extractTranslations</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#extractTranslations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extract translations from a parsed translation file.
Returns a map of localization key -> NStringLiteral.
Looks for hash comments (#key) on text/dialogue nodes.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

| Returns |
|---------|
| [Map](/api-docs/unity/Map/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extractTranslatableEntries"><code><span class="field-name">extractTranslatableEntries</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#extractTranslatableEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collects all translatable entries with #id from a source script, in source order.
Returns pairs of {id, str} for NTextStatement, NDialogueStatement, and NChoiceOption.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<AnonStruct> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasUntaggedTranslatableStrings"><code><span class="field-name">hasUntaggedTranslatableStrings</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasUntaggedTranslatableStrings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true iff `node` contains at least one translatable string
(NTextStatement / NDialogueStatement / NChoiceOption text) that has
no `#id` hash comment. Used by tooling to gate "add tags?" prompts
without doing any AST or content mutation. Stops at the first
untagged occurrence.

| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="collectHashIds"><code><span class="field-name">collectHashIds</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#collectHashIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lex-only scan of `content` for every hash-comment identifier
(`#xxxx`). Cheap compared to a full parse. Runs the lexer, walks
tokens, pulls out every `CommentHash` payload. No AST is built, no
imports are resolved.

Use for project-wide reserved-IDs registries: scanning every
`.lor` file in a project to collect every hash ID currently in
use, so a subsequent `insertLocalizationKeys` call can be passed
the union as its `reservedIds` and avoid generating any of them.

Fills + returns `out`; allocates a fresh map when `out` is null.

| Name | Type | Default |
|------|------|---------|
| `content` | [String](/api-docs/unity/String/) | |
| `out` | [Map](/api-docs/unity/Map/) | *(optional)* |

| Returns |
|---------|
| [Map](/api-docs/unity/Map/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="generateTranslationFile"><code><span class="field-name">generateTranslationFile</span><span class="parenthesis">(</span><span class="arg-name">sourceScript</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">existingTranslations</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">printer</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Printer/" class="type-link">Printer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#generateTranslationFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a translation file from a source script.
Each entry has: #id // original-text-as-in-source (with quotes preserved),
followed by translated text or original as placeholder.

| Name | Type |
|------|------|
| `sourceScript` | [AstNode](/api-docs/unity/loreline/AstNode/) |
| `existingTranslations` | [Null](/api-docs/unity/Null/)<[Map](/api-docs/unity/Map/)> |
| `printer` | [Printer](/api-docs/unity/loreline/Printer/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findHashComment"><code><span class="field-name">findHashComment</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NStringLiteral/" class="type-link">NStringLiteral</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findHashComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper: find the first hash comment on a node and return its content (the localization key).
Returns null if no hash comment is found.

| Name | Type | Default |
|------|------|---------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) | |
| `str` | [NStringLiteral](/api-docs/unity/loreline/NStringLiteral/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> |

## Private Members

<div class="signature field-method has-description" id="lineHasHashComment"><code><span class="field-name">lineHasHashComment</span><span class="parenthesis">(</span><span class="arg-name">line</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lineHasHashComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if a source line contains a hash comment (# followed by word chars, not preceded by \).

| Name | Type |
|------|------|
| `line` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="unquotedRawToQuotedRaw"><code><span class="field-name">unquotedRawToQuotedRaw</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unquotedRawToQuotedRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a Raw text part from unquoted to quoted context.
- Remove unquoted-only escapes: \= -> =, \{ -> {, \X -> X (for X not in {n,t,r,\,<})
- Add quoted-only escapes: " -> \"
- Keep shared escapes: \n, \t, \r, \\, \<, $$

| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="quotedRawToUnquotedRaw"><code><span class="field-name">quotedRawToUnquotedRaw</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#quotedRawToUnquotedRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transform a Raw text part from quoted to unquoted context.
- Remove quoted-only escapes: \" -> "
- Keep shared escapes: \n, \t, \r, \\, \<, $$

| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="canSafelyRemoveQuotes"><code><span class="field-name">canSafelyRemoveQuotes</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canSafelyRemoveQuotes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if removing quotes from this text would be safe (re-parseable as unquoted).
Conservative: rejects if any condition makes the text ambiguous as unquoted.

| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isNumberLiteral"><code><span class="field-name">isNumberLiteral</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNumberLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reindentCode"><code><span class="field-name">reindentCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">oldIndent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">newIndent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#reindentCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Re-indent code by replacing leading old-indent units with new-indent units.

| Name | Type |
|------|------|
| `code` | [String](/api-docs/unity/String/) |
| `oldIndent` | [String](/api-docs/unity/String/) |
| `newIndent` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getStringEndLine"><code><span class="field-name">getStringEndLine</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NStringLiteral/" class="type-link">NStringLiteral</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getStringEndLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the last line (1-based) occupied by a string literal, accounting for multiline raw parts.

| Name | Type |
|------|------|
| `str` | [NStringLiteral](/api-docs/unity/loreline/NStringLiteral/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="randomId"><code><span class="field-name">randomId</span><span class="parenthesis">(</span><span class="arg-name">rng</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Random/" class="type-link">Random</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#randomId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a random base36 ID of the given length, guaranteed to not be a valid hex string.

| Name | Type |
|------|------|
| `rng` | [Random](/api-docs/unity/loreline/Random/) |
| `length` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

