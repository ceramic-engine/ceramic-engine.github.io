---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AssetId
target: Headless
permalink: api-docs/headless/ceramic/AssetId/
---

# AssetId

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AssetId.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AssetId</strong> (Abstract)</div>

Type-safe wrapper for asset identifiers.

AssetId provides compile-time type safety for asset references,
helping prevent runtime errors from incorrect asset types.

The generic type parameter T typically represents the return type
of the asset (e.g., Texture, Sound, String).

```haxe
// Define typed asset IDs
var heroTexture:AssetId<Texture> = 'image:hero';
var bgMusic:AssetId<Sound> = 'sound:background';

// Use with Assets instance
assets.add(heroTexture);
assets.add(bgMusic);

// Type-safe retrieval
var texture = assets.texture(heroTexture);
var sound = assets.sound(bgMusic);
```


## Type Conversions

**From:**
- `ceramic.AssetId.T`

**To:**
- `ceramic.AssetId.T`

## Metadata

| Name | Parameters |
|------|------------|
| `:forward` | - |

