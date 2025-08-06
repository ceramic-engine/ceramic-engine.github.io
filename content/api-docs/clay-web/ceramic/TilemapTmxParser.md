---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapTmxParser
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TilemapTmxParser/
---

# TilemapTmxParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapTmxParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapTmxParser</strong> (Class)</div>

Internal parser for TMX (Tiled Map Editor) format files.

This class handles the low-level parsing of TMX XML data using the format.tmx library,
including support for external TSX tileset files. It implements caching for TSX files
to improve performance when multiple maps reference the same tilesets.

## Features

- **TMX Parsing**: Converts TMX XML to structured data
- **TSX Support**: Resolves and caches external tileset files
- **Error Handling**: Catches and logs parsing errors
- **Caching**: Maintains cache of parsed TSX files by path

## Internal Usage

This class is used internally by TilemapParser and should not be instantiated directly.
Use TilemapParser.parseTmx() instead.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/TilemapParser/">TilemapParser</a>, <a href="/api-docs/clay-web/format/tmx/Reader/">format.tmx.Reader</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="parseTmx"><div class="plugin-name">tilemap</div><code><span class="field-name">parseTmx</span><span class="parenthesis">(</span><span class="arg-name">rawTmxData</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">cwd</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">resolveTsxRawData</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a></code><a class="header-anchor" href="#parseTmx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses raw TMX XML data into a structured TmxMap object.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `rawTmxData` | [String](/api-docs/clay-web/String/) | | The TMX file content as an XML string  |
| `cwd` | [String](/api-docs/clay-web/String/) | | Current working directory for resolving relative TSX paths  |
| `resolveTsxRawData` | Function | *(optional)* | Optional callback to load external TSX files. If not provided, external tilesets will not be resolved  |

| Returns | Description |
|---------|-------------|
| [format.tmx.TmxMap](/api-docs/clay-web/format/tmx/TmxMap/) | Parsed TmxMap object, or null if parsing fails  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new TMX parser instance.

## Private Members

<div class="signature field-var has-description has-plugin" id="tsxCache"><div class="plugin-name">tilemap</div><code><span class="field-name">tsxCache</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#tsxCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache for parsed TSX tileset files, keyed by "cwd:filename".
Prevents re-parsing the same tileset multiple times.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="r"><div class="plugin-name">tilemap</div><code><span class="field-name">r</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/_Reader/TmxReader/" class="type-link">format.tmx._Reader.TmxReader</a></code><a class="header-anchor" href="#r"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

TMX reader instance from the format.tmx library.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cwd"><div class="plugin-name">tilemap</div><code><span class="field-name">cwd</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#cwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current working directory for resolving relative TSX paths.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resolveTsxRawData"><div class="plugin-name">tilemap</div><code><span class="field-name">resolveTsxRawData</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">cwd</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#resolveTsxRawData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback function to resolve external TSX file data.
Provided by the caller to load TSX files from disk or assets.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `cwd` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clearCache"><div class="plugin-name">tilemap</div><code><span class="field-name">clearCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clears the TSX cache, forcing re-parsing of tileset files.
Only accessible by TilemapParser.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getTsx"><div class="plugin-name">tilemap</div><code><span class="field-name">getTsx</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/format/tmx/TmxTileset/" class="type-link">format.tmx.TmxTileset</a></code><a class="header-anchor" href="#getTsx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves and returns a TSX tileset, using cache when available.
Called by the TMX reader when it encounters an external tileset reference.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The TSX filename referenced in the TMX  |

| Returns | Description |
|---------|-------------|
| [format.tmx.TmxTileset](/api-docs/clay-web/format/tmx/TmxTileset/) | The parsed TmxTileset object |

