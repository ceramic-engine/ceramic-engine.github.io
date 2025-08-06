---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AutoCollections
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/AutoCollections/
---

# AutoCollections

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AutoCollections.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AutoCollections</strong> (Interface)</div>

Interface that enables automatic collection generation for classes.

When a class implements AutoCollections, the CollectionsMacro will
automatically generate collection management code for arrays and maps
in the class. This includes:
- Automatic cleanup of collections on destroy
- Observable collection support
- Efficient memory management

The macro analyzes the class fields and generates appropriate
collection handling code at compile time.

Example usage:
```haxe
class MyClass extends Entity implements AutoCollections {
    var items:Array<Item> = [];
    var lookup:Map<String, Item> = new Map();
    // Collections will be automatically managed
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Collection/">Collection</a>, <a href="/api-docs/clay-native/ceramic/CollectionEntry/">CollectionEntry</a></div>


## Metadata

| Name | Parameters |
|------|------------|
| `:keepSub` | - |
| `:autoBuild` | ceramic.macros.CollectionsMacro.build() |

