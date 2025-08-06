---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SlugOptions
target: Unity
permalink: api-docs/unity/ceramic/SlugOptions/
---

# SlugOptions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Slug.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SlugOptions</strong> (Class)</div>

Configuration options for slug generation.

All fields are optional and have sensible defaults.
Use @:structInit syntax for easy initialization:
```haxe
var options:SlugOptions = {
    lower: false,
    replacement: "_"
};
```

## Instance Members

<div class="signature field-var has-description" id="lower"><code><span class="field-name">lower</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lower"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to convert the slug to lowercase.
Default: true

<hr class="field-separator" />

<div class="signature field-var has-description" id="remove"><code><span class="field-name">remove</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression pattern for characters to remove.
Default: Removes $ * + ~ . ( ) ' " ! \ : @ ? §

<hr class="field-separator" />

<div class="signature field-var has-description" id="replacement"><code><span class="field-name">replacement</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#replacement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

String to replace spaces with.
Default: "-" (hyphen)

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">lower</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">remove</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/EReg/" class="type-link">EReg</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">replacement</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@ ? §

| Name | Type | Description |
|------|------|-------------|
| `lower` | [Null](/api-docs/unity/Null/)<[Bool](/api-docs/unity/Bool/)> | * Whether to convert the slug to lowercase. Default: true |
| `remove` | [Null](/api-docs/unity/Null/)<[EReg](/api-docs/unity/EReg/)> | * Regular expression pattern for characters to remove. Default: Removes $ * + ~ . ( ) ' " ! \ : |
| `replacement` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | * String to replace spaces with. Default: "-" (hyphen) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

