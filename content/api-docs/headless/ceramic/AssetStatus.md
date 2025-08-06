---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AssetStatus
target: Headless
permalink: api-docs/headless/ceramic/AssetStatus/
---

# AssetStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AssetStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AssetStatus</strong> (Enum)</div>

Represents the current loading state of an asset.

Assets transition through these states during their lifecycle:
NONE -> LOADING -> READY (success) or BROKEN (failure)

The status is observable, allowing systems to react to asset state changes.

<div class="see"><strong>See:</strong> Asset.status</div>


## Constructors

### NONE

```haxe
NONE
```

Asset has not been loaded yet.
This is the initial state for newly created assets.

### LOADING

```haxe
LOADING
```

Asset is currently being loaded.
Set when load() is called and loading is in progress.

### READY

```haxe
READY
```

Asset has been successfully loaded and is ready for use.
The asset's data (texture, sound, etc.) is available.

### BROKEN

```haxe
BROKEN
```

Asset loading failed or the asset is corrupted.
Check logs for specific error details.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

