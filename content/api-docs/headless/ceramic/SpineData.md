---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineData
target: Headless
permalink: api-docs/headless/ceramic/SpineData/
---

# SpineData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.SpineData</strong> (Class)</div>

Container for loaded Spine animation data, including skeleton structure and texture atlas.

SpineData represents the shared, immutable data loaded from Spine export files (.json/.skel)
and their associated texture atlases. Multiple Spine instances can share the same SpineData,
making it efficient to have many instances of the same animation.

This class manages the lifecycle of Spine skeleton data and ensures proper cleanup of
resources when no longer needed. It's typically created automatically when loading
Spine assets through the asset system.

```haxe
// SpineData is usually created internally when loading assets
assets.add(Spines.HERO);
assets.load(function(success) {
    if (success) {
        var spineData = assets.spine(Spines.HERO);
        // Create multiple Spine instances from the same data
        var hero1 = new Spine();
        hero1.spineData = spineData;
        var hero2 = new Spine();
        hero2.spineData = spineData;
    }
});
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="skeletonData"><div class="plugin-name">spine</div><code><span class="field-name">skeletonData</span><span class="operator">:</span> <a href="/api-docs/headless/spine/SkeletonData/" class="type-link">spine.SkeletonData</a></code><a class="header-anchor" href="#skeletonData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Spine skeleton data containing bone hierarchy, slots, animations, and skins.
This is the core data structure that defines the animation's structure and behavior.
It's shared between all Spine instances using this SpineData.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="atlas"><div class="plugin-name">spine</div><code><span class="field-name">atlas</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/TextureAtlas/" class="type-link">spine.support.graphics.TextureAtlas</a></code><a class="header-anchor" href="#atlas"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The texture atlas containing all images used by this Spine animation.
The atlas maps region names to texture coordinates, allowing the animation
to reference specific parts of texture pages.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="asset"><div class="plugin-name">spine</div><code><span class="field-name">asset</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineAsset/" class="type-link">SpineAsset</a></code><a class="header-anchor" href="#asset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional reference to the SpineAsset that created this data.
When set, the asset will be destroyed along with this SpineData,
ensuring proper cleanup of all related resources.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findSlotIndex"><div class="plugin-name">spine</div><code><span class="field-name">findSlotIndex</span><span class="parenthesis">(</span><span class="arg-name">slotName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findSlotIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the index of a slot by its name.

Slots are the containers in Spine that hold attachments (images, meshes, etc.).
Each slot has a unique name and index within the skeleton. This method provides
a way to look up a slot's index, which can be more efficient for repeated operations
than using the name directly.



| Name | Type | Description |
|------|------|-------------|
| `slotName` | [String](/api-docs/headless/String/) | The name of the slot to find  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The index of the slot if found, or -1 if the slot doesn't exist or if slotName is null * ```haxe var spineData = assets.spine(Spines.HERO); var weaponSlotIndex = spineData.findSlotIndex("weapon"); * if (weaponSlotIndex != -1) { // Use the index for efficient slot operations trace("Weapon slot found at index: " + weaponSlotIndex); } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">spine</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Destroys this SpineData instance and releases all associated resources.

This method ensures proper cleanup by:
- Destroying the associated SpineAsset if one exists
- Disposing of the texture atlas to free GPU memory
- Clearing all references to allow garbage collection

After calling destroy(), this SpineData instance should not be used anymore.
Any Spine instances still using this data may exhibit undefined behavior.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">atlas</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/graphics/TextureAtlas/" class="type-link">spine.support.graphics.TextureAtlas</a><span class="operator">,</span> <span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/spine/support/utils/JsonValue/" class="type-link">spine.support.utils.JsonValue</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SpineData instance from a texture atlas and JSON data.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `atlas` | [spine.support.graphics.TextureAtlas](/api-docs/headless/spine/support/graphics/TextureAtlas/) | | The texture atlas containing all images for the animation  |
| `json` | [spine.support.utils.JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) | | The parsed JSON data exported from Spine  |
| `scale` | [Float](/api-docs/headless/Float/) | `1.0` | Optional scale factor to apply to the skeleton data (default: 1.0). This affects the size of the animation when rendered. |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

