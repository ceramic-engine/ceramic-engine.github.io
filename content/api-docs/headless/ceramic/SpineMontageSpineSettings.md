---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineMontageSpineSettings
target: Headless
permalink: api-docs/headless/ceramic/SpineMontageSpineSettings/
---

# SpineMontageSpineSettings

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineMontageSpineSettings.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineMontageSpineSettings</strong> (Class)</div>

Configuration for the Spine instance used by a SpineMontage.

This class allows you to either provide an existing Spine instance or
create a new one with specific settings. It also controls the lifecycle
relationship between the montage and its Spine instance, as well as
visual properties like scale and rendering depth.

The configuration follows a priority system: if an instance is provided,
it will be used and the data field will be ignored. Otherwise, a new
Spine instance will be created using the provided SpineData.

Using an existing Spine instance
```haxe
var existingSpine = new Spine();
existingSpine.spineData = heroData;

var settings:SpineMontageSpineSettings = {
    instance: existingSpine,
    bound: false,  // Don't destroy spine when montage is destroyed
    scale: 0.5,
    depth: 10
};
```

Creating a new Spine instance
```haxe
var settings:SpineMontageSpineSettings = {
    data: heroSpineData,
    bound: true,   // Destroy spine when montage is destroyed
    scale: 0.75,
    depth: 5,
    depthRange: 2
};
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="instance"><div class="plugin-name">spine</div><code><span class="field-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An existing Spine instance to use with this montage.

When provided, this instance will be used directly and the `data`
field will be ignored. This is useful when you want to:
- Share a Spine instance between multiple montages
- Use a pre-configured Spine instance with specific settings
- Maintain direct control over the Spine instance lifecycle

The instance will still have its scale, depth, and depthRange
properties set according to this configuration.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="data"><div class="plugin-name">spine</div><code><span class="field-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/SpineData/" class="type-link">SpineData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#data"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

SpineData used to create a new Spine instance.

This field is only used when `instance` is null. A new Spine
instance will be created with this data and configured according
to the other settings in this configuration.

The created instance will be inactive by default until an
animation is played through the montage.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bound"><div class="plugin-name">spine</div><code><span class="field-name">bound</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls the lifecycle binding between the montage and Spine instance.

When true (default):
- Destroying the montage will also destroy the Spine instance
- Destroying the Spine instance will also destroy the montage
- Creates a strong ownership relationship

When false:
- The montage and Spine instance have independent lifecycles
- You must manually manage the Spine instance destruction
- Useful when sharing a Spine instance between multiple systems

This applies whether using an existing instance or creating a new one.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scale"><div class="plugin-name">spine</div><code><span class="field-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#scale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scale factor applied to the Spine skeleton.

This sets the `skeletonScale` property of the Spine instance, which
uniformly scales all bone positions and renders. Useful for:
- Adjusting character sizes without re-exporting from Spine
- Creating different sized variants of the same character
- Matching your game's coordinate system

Default: 1.0 (original size)

scale: 0.5  // Half size
scale: 2.0  // Double size

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="depth"><div class="plugin-name">spine</div><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The rendering depth (z-order) of the Spine instance.

Higher values render on top of lower values. This determines
the base rendering order of the entire Spine skeleton relative
to other visuals in your scene.

Default: 0.0

<div class="see"><strong>See:</strong> depthRange for controlling depth of individual Spine parts</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="depthRange"><div class="plugin-name">spine</div><code><span class="field-name">depthRange</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#depthRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The depth range available for Spine attachment rendering.

Spine uses this range to distribute the depth of individual
attachments (slots) within the skeleton. This allows proper
layering of body parts while keeping them as a cohesive unit.

The actual depth of attachments will be:
- Minimum: depth
- Maximum: depth + depthRange

Default: 1.0

depth: 10, depthRange: 5
// Attachments will render between depths 10 and 15

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/Spine/" class="type-link">Spine</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/SpineData/" class="type-link">SpineData</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bound</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">depthRange</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> depthRange for controlling depth of individual Spine parts</div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `instance` | [Null](/api-docs/headless/Null/)<[Null](/api-docs/headless/Null/)<[Spine](/api-docs/headless/ceramic/Spine/)>> | *(optional)* | * An existing Spine instance to use with this montage. * When provided, this instance will be used directly and the `data` field will be ignored. This is useful when you want to: - Share a Spine instance between multiple montages - Use a pre-configured Spine instance with specific settings - Maintain direct control over the Spine instance lifecycle * The instance will still have its scale, depth, and depthRange properties set according to this configuration. |
| `data` | [Null](/api-docs/headless/Null/)<[Null](/api-docs/headless/Null/)<[SpineData](/api-docs/headless/ceramic/SpineData/)>> | *(optional)* | * SpineData used to create a new Spine instance. * This field is only used when `instance` is null. A new Spine instance will be created with this data and configured according to the other settings in this configuration. * The created instance will be inactive by default until an animation is played through the montage. |
| `bound` | [Null](/api-docs/headless/Null/)<[Bool](/api-docs/headless/Bool/)> | *(optional)* | * Controls the lifecycle binding between the montage and Spine instance. * When true (default): - Destroying the montage will also destroy the Spine instance - Destroying the Spine instance will also destroy the montage - Creates a strong ownership relationship * When false: - The montage and Spine instance have independent lifecycles - You must manually manage the Spine instance destruction - Useful when sharing a Spine instance between multiple systems * This applies whether using an existing instance or creating a new one. |
| `scale` | [Null](/api-docs/headless/Null/)<[Float](/api-docs/headless/Float/)> | *(optional)* | * The scale factor applied to the Spine skeleton. * This sets the `skeletonScale` property of the Spine instance, which uniformly scales all bone positions and renders. Useful for: - Adjusting character sizes without re-exporting from Spine - Creating different sized variants of the same character - Matching your game's coordinate system * Default: 1.0 (original size) * scale: 0.5 // Half size scale: 2.0 // Double size |
| `depth` | [Null](/api-docs/headless/Null/)<[Float](/api-docs/headless/Float/)> | *(optional)* | * The rendering depth (z-order) of the Spine instance. * Higher values render on top of lower values. This determines the base rendering order of the entire Spine skeleton relative to other visuals in your scene. * Default: 0.0 * |
| `depthRange` | [Null](/api-docs/headless/Null/)<[Float](/api-docs/headless/Float/)> | *(optional)* | * The depth range available for Spine attachment rendering. * Spine uses this range to distribute the depth of individual attachments (slots) within the skeleton. This allows proper layering of body parts while keeping them as a cohesive unit. * The actual depth of attachments will be: - Minimum: depth - Maximum: depth + depthRange * Default: 1.0 * depth: 10, depthRange: 5 // Attachments will render between depths 10 and 15 |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

