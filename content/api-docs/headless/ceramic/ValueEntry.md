---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ValueEntry
target: Headless
permalink: api-docs/headless/ceramic/ValueEntry/
---

# ValueEntry

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ValueEntry.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/CollectionEntry/">CollectionEntry</a> → <strong>ceramic.ValueEntry</strong> (Class)</div>

A collection entry that can hold any value.

This class extends CollectionEntry to provide a generic container that can be
stored in a Collection. It combines the ID/name functionality of CollectionEntry
with the ability to store any typed value.

ValueEntry is useful when you need to store heterogeneous data in collections
while maintaining type safety for individual entries.

Example usage:
```haxe
// Create a collection of settings
var settings = new Collection<ValueEntry<Dynamic>>();

// Add different types of values
settings.add(new ValueEntry<Bool>(true, "enableSound", "Enable Sound"));
settings.add(new ValueEntry<Float>(0.8, "volume", "Volume Level"));
settings.add(new ValueEntry<String>("high", "quality", "Graphics Quality"));

// Retrieve values by ID
var soundEnabled = settings.get("enableSound").value; // true
var volume = settings.get("volume").value; // 0.8
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/CollectionEntry/">CollectionEntry</a>, <a href="/api-docs/headless/ceramic/Collection/">Collection</a></div>


## Instance Members

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.ValueEntry.T</span></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The stored value of type T.
Can be read and written directly.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <span class="type-name">ceramic.ValueEntry.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new ValueEntry.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | ceramic.ValueEntry.T | | The value to store in this entry  |
| `id` | [String](/api-docs/headless/String/) | *(optional)* | Optional unique identifier for this entry in a collection  |
| `name` | [String](/api-docs/headless/String/) | *(optional)* | Optional human-readable name for this entry |

