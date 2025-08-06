---
layout: api-docs
category: api-docs
subCategory: doc
menu: Sprite
title: ConvertSpriteSheet
target: Headless
permalink: api-docs/headless/ceramic/ConvertSpriteSheet/
---

# ConvertSpriteSheet

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/ConvertSpriteSheet.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ConvertSpriteSheet</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/ConvertField/">ConvertField</a></div>

Field converter for SpriteSheet instances.
Handles conversion between asset names (strings) and loaded SpriteSheet objects.
This enables automatic sprite sheet loading when deserializing entities.

Used by the entity serialization system to convert sprite sheet references
in saved data into actual SpriteSheet instances.

## Instance Members

<div class="signature field-method has-description has-plugin" id="basicToField"><div class="plugin-name">sprite</div><code><span class="field-name">basicToField</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">Assets</a><span class="operator">,</span> <span class="arg-name">basic</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#basicToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a sprite sheet asset name to a loaded SpriteSheet instance.


| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/headless/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/headless/String/) | The name of the field being converted  |
| `assets` | [Assets](/api-docs/headless/ceramic/Assets/) | The assets instance to load from  |
| `basic` | [String](/api-docs/headless/String/) | The sprite sheet asset name  |
| `done` | Function | Callback with the loaded SpriteSheet (or null if loading fails) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fieldToBasic"><div class="plugin-name">sprite</div><code><span class="field-name">fieldToBasic</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpriteSheet/" class="type-link">SpriteSheet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#fieldToBasic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert a SpriteSheet instance back to its asset name for serialization.


| Name | Type | Description |
|------|------|-------------|
| `instance` | [Entity](/api-docs/headless/ceramic/Entity/) | The entity that owns this field  |
| `field` | [String](/api-docs/headless/String/) | The name of the field being converted  |
| `value` | [SpriteSheet](/api-docs/headless/ceramic/SpriteSheet/) | The SpriteSheet instance  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The asset name, or null if the sheet has no associated asset |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">sprite</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

