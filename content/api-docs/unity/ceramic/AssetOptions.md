---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AssetOptions
target: Unity
permalink: api-docs/unity/ceramic/AssetOptions/
---

# AssetOptions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AssetOptions.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AssetOptions</strong> (Typedef)</div>

Asset loading options.

A dynamic type that allows passing asset-specific configuration options.
The actual fields depend on the asset type and backend implementation.

Common options include:
- `premultiplyAlpha` (Bool) - For images, whether to premultiply alpha channel
- `streaming` (Bool) - For sounds, whether to stream from disk
- `density` (Float) - Override density detection
- Custom backend-specific options

```haxe
assets.addImage('hero', null, {
    premultiplyAlpha: true,
    generateMipmaps: false
});
```

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

