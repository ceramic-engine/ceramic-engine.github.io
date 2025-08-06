---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AssetPathInfo
target: Headless
permalink: api-docs/headless/ceramic/AssetPathInfo/
---

# AssetPathInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AssetPathInfo.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AssetPathInfo</strong> (Class)</div>

Information extracted from a raw asset path.

This class parses asset file paths to extract metadata including:
- Density information (e.g., @2x, @3x)
- File extension
- Normalized asset name
- Flags for conditional loading

Path parsing examples:
- `hero.png` -> name: "hero", extension: "png", density: 1.0
- `hero@2x.png` -> name: "hero", extension: "png", density: 2.0
- `hero@2x+retina.png` -> name: "hero", extension: "png", density: 2.0, flags: {retina: true}
- `ui/button+hover+pressed.png` -> name: "ui/button", flags: {hover: true, pressed: true}
- `icon+size=large.png` -> name: "icon", flags: {size: "large"}

<div class="see"><strong>See:</strong> Assets.decodePath</div>


## Instance Members

<div class="signature field-var has-description" id="density"><code><span class="field-name">density</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#density"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Density value resolved from file name.
Example: If file is named `someImage@2x.png`, density will be `2`.
Default density is `1`

<hr class="field-separator" />

<div class="signature field-var has-description" id="extension"><code><span class="field-name">extension</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#extension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

File extension (always converted to lowercase for convenience)

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normalized asset name (includes subdirectories relative to asset root).
Example: both `someImage.png` and `someImage@2x.png` will resolve to a same asset name `someImage`

<hr class="field-separator" />

<div class="signature field-var has-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Original path used to generated path info

<hr class="field-separator" />

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flags are extracted from file path.
Example: file `someFile+myTag.txt` will generate `myTag` flag.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse an asset path to extract metadata.


| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | The asset file path to parse |

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

String representation for debugging.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | Object-like string with all parsed properties |

