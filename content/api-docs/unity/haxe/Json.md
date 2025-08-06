---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Json
target: Unity
permalink: api-docs/unity/haxe/Json/
---

# Json

<div class="type-hierarchy"><strong>haxe.Json</strong> (Class)</div>

Cross-platform JSON API: it will automatically use the optimized native API if available.
Use `-D haxeJSON` to force usage of the Haxe implementation even if a native API is found:
This will provide extra encoding (but not decoding) features such as enums (replaced by their index) and StringMaps.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Json.html</div>


## Static Members

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses given JSON-encoded `text` and returns the resulting object.

JSON objects are parsed into anonymous structures and JSON arrays
are parsed into `Array<Dynamic>`.

If given `text` is not valid JSON, an exception will be thrown.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Json-parsing.html</div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stringify"><code><span class="field-name">stringify</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">replacer</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">space</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#stringify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes the given `value` and returns the resulting JSON string.

If `replacer` is given and is not null, it is used to retrieve the
actual object to be encoded. The `replacer` function takes two parameters,
the key and the value being encoded. Initial key value is an empty string.

If `space` is given and is not null, the result will be pretty-printed.
Successive levels will be indented by this string.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Json-encoding.html</div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) | |
| `replacer` | Function | *(optional)* |
| `space` | [String](/api-docs/unity/String/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

