---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: DefinitionsJson
target: Clay (Native)
permalink: api-docs/clay-native/ldtk/DefinitionsJson/
---

# DefinitionsJson

<div class="type-hierarchy"><strong>ldtk.DefinitionsJson</strong> (Typedef)</div>

If you're writing your own LDtk importer, you should probably just ignore *most* stuff in the `defs` section, as it contains data that are mostly important to the editor. To keep you away from the `defs` section and avoid some unnecessary JSON parsing, important data from definitions is often duplicated in fields prefixed with a double underscore (eg. `__identifier` or `__type`).

The 2 only definition types you might need here are **Tilesets** and **Enums**.

## Metadata

| Name | Parameters |
|------|------------|
| `section` | "3" |
| `display` | "Definitions" |

