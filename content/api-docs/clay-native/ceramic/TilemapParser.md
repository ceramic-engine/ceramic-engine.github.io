---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tilemap
title: TilemapParser
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/TilemapParser/
---

# TilemapParser

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/tilemap/runtime/src/ceramic/TilemapParser.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TilemapParser</strong> (Class)</div>

Universal tilemap parser supporting multiple tilemap formats.

TilemapParser provides a unified interface for parsing different tilemap file formats
and converting them to Ceramic's TilemapData structure. Currently supports TMX (Tiled Map Editor)
format, with optional LDtk support when the ldtk plugin is enabled.

## Features

- **TMX Support**: Full parsing of Tiled Map Editor (.tmx) files
- **TSX Support**: External tileset (.tsx) file loading
- **LDtk Support**: Level Designer Toolkit parsing (requires ldtk plugin)
- **Tileset Caching**: Automatically caches parsed tilesets for performance
- **Texture Loading**: Supports custom texture loading callbacks

## Usage Example

```haxe
var parser = new TilemapParser();

// Parse TMX file
var tmxMap = parser.parseTmx(tmxContent);

// Convert to TilemapData with texture loading
var tilemapData = parser.tmxMapToTilemapData(tmxMap,
    (source, configureAsset, done) -> {
        // Load texture from source path
        var texture = assets.texture(source);
        done(texture);
    }
);

// Apply to tilemap
var tilemap = new Tilemap();
tilemap.tilemapData = tilemapData;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/TilemapData/">TilemapData</a>, <a href="/api-docs/clay-native/ceramic/TilemapTmxParser/">TilemapTmxParser</a>, <a href="/api-docs/clay-native/ceramic/TilemapLdtkParser/">TilemapLdtkParser</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="parseLdtk"><div class="plugin-name">ldtk</div><code><span class="field-name">parseLdtk</span><span class="parenthesis">(</span><span class="arg-name">rawLdtkData</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">loadExternalLdtkLevelData</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a></code><a class="header-anchor" href="#parseLdtk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse LDtk file


| Name | Type | Description |
|------|------|-------------|
| `rawLdtkData` | [String](/api-docs/clay-native/String/) | Raw LDtk data as string  |
| `loadExternalLdtkLevelData` | Function |  |

| Returns | Description |
|---------|-------------|
| [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) | The LDtk parsed data |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="loadLdtkTilemaps"><div class="plugin-name">ldtk</div><code><span class="field-name">loadLdtkTilemaps</span><span class="parenthesis">(</span><span class="arg-name">ldtkData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/LdtkData/" class="type-link">LdtkData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loadTexture</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">skip</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadLdtkTilemaps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ldtkData` | [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) | |
| `loadTexture` | Function | *(optional)* |
| `skip` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clearCache"><div class="plugin-name">tilemap</div><code><span class="field-name">clearCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear cached data (if any).
Only tileset data is cached because it can be shared between maps.
Normally not needed to clear manually unless working with a lot of different tilesets.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseTmx"><div class="plugin-name">tilemap</div><code><span class="field-name">parseTmx</span><span class="parenthesis">(</span><span class="arg-name">rawTmxData</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cwd</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">resolveTsxRawData</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a></code><a class="header-anchor" href="#parseTmx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse TMX Tilemap (Tiled Map Editor format)


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `rawTmxData` | [String](/api-docs/clay-native/String/) | | Raw TMX data as string  |
| `cwd` | [String](/api-docs/clay-native/String/) | *(optional)* | Current working directory. Needed to identify cached tileset relative to their tilemap  |
| `resolveTsxRawData` | Function | *(optional)* | A method to resolve TSX Tileset data that are not embedded in TMX data (optional)  |

| Returns | Description |
|---------|-------------|
| [format.tmx.TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) | The TMX map data |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="parseExternalTilesetNames"><div class="plugin-name">tilemap</div><code><span class="field-name">parseExternalTilesetNames</span><span class="parenthesis">(</span><span class="arg-name">rawTmxData</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parseExternalTilesetNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the names of all external tileset files referenced in a TMX file.
This is useful for pre-loading TSX files before parsing the main TMX.


| Name | Type | Description |
|------|------|-------------|
| `rawTmxData` | [String](/api-docs/clay-native/String/) | The raw TMX XML data as a string  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | Array of external tileset filenames (relative paths as specified in TMX) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tmxMapToTilemapData"><div class="plugin-name">tilemap</div><code><span class="field-name">tmxMapToTilemapData</span><span class="parenthesis">(</span><span class="arg-name">tmxMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">format.tmx.TmxMap</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">loadTexture</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapData/" class="type-link">TilemapData</a></code><a class="header-anchor" href="#tmxMapToTilemapData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a parsed TMX map to Ceramic's TilemapData format.
This method handles the conversion of all map properties, tilesets, and layers.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `tmxMap` | [format.tmx.TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) | | The parsed TMX map data  |
| `loadTexture` | Function | *(optional)* | Optional callback for loading tileset textures. If provided, will be called for each tileset image with (source, configureAsset, done) parameters  |

| Returns | Description |
|---------|-------------|
| [TilemapData](/api-docs/clay-native/ceramic/TilemapData/) | A new TilemapData instance ready to be used with a Tilemap visual |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">tilemap</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new tilemap parser instance.

## Private Members

<div class="signature field-var has-description has-plugin" id="tmxParser"><div class="plugin-name">tilemap</div><code><span class="field-name">tmxParser</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapTmxParser/" class="type-link">TilemapTmxParser</a></code><a class="header-anchor" href="#tmxParser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal TMX parser instance, created lazily when needed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ldtkParser"><div class="plugin-name">tilemap</div><code><span class="field-name">ldtkParser</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TilemapLdtkParser/" class="type-link">TilemapLdtkParser</a></code><a class="header-anchor" href="#ldtkParser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal LDtk parser instance, created lazily when needed.

