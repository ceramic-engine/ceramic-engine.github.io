---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: LevelJson
target: Clay (Web)
permalink: api-docs/clay-web/ldtk/LevelJson/
---

# LevelJson

<div class="type-hierarchy"><strong>ldtk.LevelJson</strong> (Typedef)</div>

This section contains all the level data. It can be found in 2 distinct forms, depending on Project current settings:

- If "*Separate level files*" is **disabled** (default): full level data is *embedded* inside the main Project JSON file,
- If "*Separate level files*" is **enabled**: level data is stored in *separate* standalone `.ldtkl` files (one per level). In this case, the main Project JSON file will still contain most level data, except heavy sections, like the `layerInstances` array (which will be null). The `externalRelPath` string points to the `ldtkl` file.

A `ldtkl` file is just a JSON file containing exactly what is described below.

## Metadata

| Name | Parameters |
|------|------------|
| `section` | "2" |
| `display` | "Level" |

