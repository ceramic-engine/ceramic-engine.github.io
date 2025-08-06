---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Fragments
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Fragments/
---

# Fragments

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Fragments.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Fragments</strong> (Class)</div>

A compile-time generated class containing constants for all fragment assets.

The AssetsMacro build macro scans the project's fragments directory
and generates static string constants for each fragment file found.
This provides type-safe, autocomplete-friendly access to fragment names.

Example usage:
```haxe
// Instead of using string literals:
assets.fragment("myFragment");

// Use generated constants:
assets.fragment(Fragments.MY_FRAGMENT);
```

The generated constants follow UPPER_SNAKE_CASE naming convention,
derived from the fragment file names.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Assets/">Assets</a>, FragmentAsset, <a href="/api-docs/clay-web/ceramic/Fragment/">Fragment</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.AssetsMacro.buildNames("fragments") |

