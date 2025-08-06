---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextureAtlasReader
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/_TextureAtlasParser/TextureAtlasReader/
---

# TextureAtlasReader

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextureAtlasParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._TextureAtlasParser.TextureAtlasReader</strong> (private class)</div>

Internal line-based reader for parsing LibGDX format atlas files.

Provides utilities for reading key-value pairs and comma-separated
tuples from the text-based atlas format. Handles cross-platform
line endings and whitespace trimming.

## Instance Members

<div class="signature field-method has-description" id="trim"><code><span class="field-name">trim</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#trim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Trims whitespace from a string.



| Name | Type | Description |
|------|------|-------------|
| `value` | [String](/api-docs/clay-native/String/) | String to trim  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Trimmed string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readLine"><code><span class="field-name">readLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#readLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads the next line from the atlas.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | Next line or null if end of file |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextLineKey"><code><span class="field-name">nextLineKey</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#nextLineKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Peeks at the key of the next line without consuming it.

Used to determine what type of data follows in the atlas format.
Keys are the part before the colon in "key: value" lines.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The key string or null if no key found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readValue"><code><span class="field-name">readValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#readValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads a key-value line and returns the value part.

Expects format "key: value" and returns trimmed value.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The value after the colon  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readTuple"><code><span class="field-name">readTuple</span><span class="parenthesis">(</span><span class="arg-name">tuple</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readTuple"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads comma-separated values into a tuple array.

Parses lines like "key: v1, v2, v3, v4" into the provided array.
Handles 1, 2, or 4 value tuples as used in atlas format.



| Name | Type | Description |
|------|------|-------------|
| `tuple` | [Array](/api-docs/clay-native/Array/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | Array to fill with parsed values  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | Number of values read (1, 2, or 4)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a reader for the given atlas text.

Normalizes line endings and splits into array for processing.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-native/String/) | The raw atlas file content |

## Private Members

<div class="signature field-var has-description" id="lines"><code><span class="field-name">lines</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All lines from the atlas file, normalized.

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current line index for sequential reading.

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.TextureAtlasParser |

