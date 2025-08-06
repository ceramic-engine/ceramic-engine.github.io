---
layout: api-docs
category: api-docs
subCategory: doc
menu: Script
title: ScriptUtils
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ScriptUtils/
---

# ScriptUtils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/script/runtime/src/ceramic/ScriptUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ScriptUtils</strong> (Class)</div>

Utilities for converting JavaScript/TypeScript syntax to HScript.

Provides transpilation of common JS/TS idioms to make scripts more
familiar to web developers while maintaining HScript compatibility.

Supported conversions:
- Arrow functions: `() => expr` → `function() expr`
- Arrow functions: `=> ` → `-> `
- For-of loops: `for (x of array)` → `for (x in array)`
- Const declarations: `const` → `var`
- Template literals: `` `text` `` → `"text"`
- Infinite loop protection in while loops

## Static Members

<div class="signature field-method has-description has-plugin" id="toHscript"><div class="plugin-name">script</div><code><span class="field-name">toHscript</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toHscript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts JavaScript/TypeScript-like code to HScript.

Performs multiple transformation passes:
1. Clean code (arrow functions, comments, template literals)
2. Convert for-of loops to for-in
3. Replace const with var
4. Add infinite loop protection to while loops



| Name | Type | Description |
|------|------|-------------|
| `code` | [String](/api-docs/clay-native/String/) | Source code with JS/TS syntax  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Equivalent HScript code |

## Private Members

<div class="signature field-var has-description has-plugin" id="RE_WORD"><div class="plugin-name">script</div><code><span class="field-name">RE_WORD</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_WORD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches word characters at start of string

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_SEP_WORD"><div class="plugin-name">script</div><code><span class="field-name">RE_SEP_WORD</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_SEP_WORD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches word after non-word character

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_STRING"><div class="plugin-name">script</div><code><span class="field-name">RE_STRING</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_STRING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches string literals (single, double, or template)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_FOR_OF"><div class="plugin-name">script</div><code><span class="field-name">RE_FOR_OF</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_FOR_OF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches for-of/for-in loop declarations

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_WHILE_START"><div class="plugin-name">script</div><code><span class="field-name">RE_WHILE_START</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_WHILE_START"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches while loop start

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_ARROW_FUNC_NO_ARG"><div class="plugin-name">script</div><code><span class="field-name">RE_ARROW_FUNC_NO_ARG</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_ARROW_FUNC_NO_ARG"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches no-argument arrow function

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cleanCode"><div class="plugin-name">script</div><code><span class="field-name">cleanCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#cleanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

First pass: Cleans and converts basic JS/TS syntax.

Handles:
- Arrow function conversion
- Comment preservation
- Template literal conversion
- Regex literal handling



| Name | Type | Description |
|------|------|-------------|
| `code` | [String](/api-docs/clay-native/String/) | Raw JS/TS code  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Cleaned code with basic conversions |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fail"><div class="plugin-name">script</div><code><span class="field-name">fail</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fail"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Throws a parsing error.



| Name | Type | Description |
|------|------|-------------|
| `error` | [Dynamic](/api-docs/clay-native/Dynamic/) | Error message  |
| `i` | [Int](/api-docs/clay-native/Int/) | Character position where error occurred  |
| `code` | [String](/api-docs/clay-native/String/) | Full source code |

