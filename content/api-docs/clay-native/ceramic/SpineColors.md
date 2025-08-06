---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineColors
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/SpineColors/
---

# SpineColors

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineColors.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineColors</strong> (Class)</div>

Utility class for extracting color information from Spine animation slots.

Spine animations can have color tinting applied to individual slots (the containers
that hold attachments like images). This class provides methods to efficiently
extract these color values from multiple slots at once, which is useful for
analyzing or replicating the visual state of a Spine animation.

The extraction process uses Spine's slot update callback system to capture
color data during a forced render pass, ensuring accurate color values.

## Static Members

<div class="signature field-method has-description has-plugin" id="extractColors"><div class="plugin-name">spine</div><code><span class="field-name">extractColors</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="arg-name">slots</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#extractColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the current color values from specified slots in a Spine animation.

This method retrieves the primary color tint applied to each slot. The colors
are extracted by temporarily attaching update listeners to the slots, forcing
a render update, and then cleaning up the listeners.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `spine` | [Spine](/api-docs/clay-native/ceramic/Spine/) | | The Spine instance to extract colors from  |
| `slots` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | | Array of slot names to extract colors from  |
| `result` | [Array](/api-docs/clay-native/Array/)<[Color](/api-docs/clay-native/ceramic/Color/)> | *(optional)* | Optional array to store results in. If provided, it will be reused; otherwise a new array is created  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[Color](/api-docs/clay-native/ceramic/Color/)> | Array of Color values corresponding to each slot. Slots that don't exist or have no color will have Color.NONE * ```haxe var spine = new Spine(); spine.load(spineData); * // Extract colors from specific slots var slotNames = ["head", "body", "weapon"]; var colors = SpineColors.extractColors(spine, slotNames); * for (i in 0...slotNames.length) { trace('${slotNames[i]} color: ${colors[i].toHex()}'); } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="extractDarkColors"><div class="plugin-name">spine</div><code><span class="field-name">extractDarkColors</span><span class="parenthesis">(</span><span class="arg-name">spine</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Spine/" class="type-link">Spine</a><span class="operator">,</span> <span class="arg-name">slots</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Color/" class="type-link">Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#extractDarkColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the dark color values from specified slots in a Spine animation.

Dark colors in Spine are used for two-color tinting, which allows for more
complex shading effects. This is particularly useful for creating rim lighting,
shadowing, or other advanced visual effects. Not all Spine animations use
dark colors - they must be specifically enabled in the Spine editor.

Like extractColors, this method uses temporary slot listeners and a forced
render pass to capture accurate color data.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `spine` | [Spine](/api-docs/clay-native/ceramic/Spine/) | | The Spine instance to extract dark colors from  |
| `slots` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | | Array of slot names to extract dark colors from  |
| `result` | [Array](/api-docs/clay-native/Array/)<[Color](/api-docs/clay-native/ceramic/Color/)> | *(optional)* | Optional array to store results in. If provided, it will be reused; otherwise a new array is created  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[Color](/api-docs/clay-native/ceramic/Color/)> | Array of Color values corresponding to each slot's dark color. Slots without dark colors will have Color.NONE * ```haxe var spine = new Spine(); spine.load(spineData); * // Extract both regular and dark colors for advanced rendering var slotNames = ["head", "body", "weapon"]; var colors = SpineColors.extractColors(spine, slotNames); var darkColors = SpineColors.extractDarkColors(spine, slotNames); * for (i in 0...slotNames.length) { trace('${slotNames[i]} - Color: ${colors[i].toHex()}, Dark: ${darkColors[i].toHex()}'); } ``` |

