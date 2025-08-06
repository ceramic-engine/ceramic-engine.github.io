---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: FieldInfo
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/FieldInfo/
---

# FieldInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FieldInfo.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.FieldInfo</strong> (Class)</div>

Runtime reflection utility for extracting field type information from classes.

This class provides a way to retrieve type information about fields at runtime,
which is normally lost due to Haxe's type erasure. It works with Entity subclasses
marked with `@fieldInfo` or `@autoFieldInfo` metadata, or any class processed by
the FieldInfoMacro build macro.

The field information is extracted from a special `_fieldInfo` static field that
is generated at compile time by the FieldInfoMacro. This allows for runtime
introspection of field types, which is useful for serialization, binding systems,
and dynamic property manipulation.

<div class="see"><strong>See:</strong> ceramic.macros.FieldInfoMacro, <a href="/api-docs/clay-web/ceramic/Entity/">Entity</a></div>


## Static Members

<div class="signature field-method has-description" id="types"><code><span class="field-name">types</span><span class="parenthesis">(</span><span class="arg-name">targetClass</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#types"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a map of field names to their type information for a given class.

This method extracts field type information that was generated at compile time
by the FieldInfoMacro. The information is cached after the first retrieval for
performance.

Example:
```haxe
var types = FieldInfo.types("myapp.Player");
trace(types.get("health")); // "Float"
trace(types.get("name")); // "String"
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `targetClass` | [String](/api-docs/clay-web/String/) | | The fully qualified class name to extract field info from  |
| `recursive` | [Bool](/api-docs/clay-web/Bool/) | `true` | Whether to include fields from parent classes (default: true)  |

| Returns | Description |
|---------|-------------|
| [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [String](/api-docs/clay-web/String/)> | A read-only map of field names to their type strings  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="typeOf"><code><span class="field-name">typeOf</span><span class="parenthesis">(</span><span class="arg-name">targetClass</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">field</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#typeOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the type information for a specific field of a class.

This is a convenience method that retrieves the type of a single field
without having to access the full types map.

Example:
```haxe
var healthType = FieldInfo.typeOf("myapp.Player", "health");
trace(healthType); // "Float"
```



| Name | Type | Description |
|------|------|-------------|
| `targetClass` | [String](/api-docs/clay-web/String/) | The fully qualified class name containing the field  |
| `field` | [String](/api-docs/clay-web/String/) | The name of the field to get type information for  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The type string for the field, or null if the field doesn't exist |

## Private Members

<div class="signature field-var has-description" id="fieldInfoMap"><code><span class="field-name">fieldInfoMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#fieldInfoMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache of field type information for each class.
Key: class name, Value: map of field names to type strings

