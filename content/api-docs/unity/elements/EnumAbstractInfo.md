---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: EnumAbstractInfo
target: Unity
permalink: api-docs/unity/elements/EnumAbstractInfo/
---

# EnumAbstractInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/EnumAbstractInfo.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.EnumAbstractInfo</strong> (Class)</div>

Runtime information container for enum abstract types.

This class provides runtime introspection capabilities for Haxe enum abstracts,
allowing dynamic access to enum field names and their corresponding values.
It's particularly useful in UI components that need to display or manipulate
enum values dynamically, such as dropdown selects or enum field editors.

The class maintains two parallel arrays:
- `enumFields`: Contains the string names of enum fields
- `enumValues`: Contains the actual values associated with each field

Example usage:
```haxe
// For an enum abstract like:
// enum abstract MyEnum(Int) {
//     var OPTION_A = 1;
//     var OPTION_B = 2;
// }

var info = new EnumAbstractInfo(
    ["OPTION_A", "OPTION_B"],
    [1, 2]
);

var fieldName = info.getEnumFieldFromValue(2); // Returns "OPTION_B"
var value = info.createEnumValue("OPTION_A"); // Returns 1
```

<div class="see"><strong>See:</strong> EnumValuePointer for usage in field binding</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="getEnumFields"><div class="plugin-name">elements</div><code><span class="field-name">getEnumFields</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getEnumFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all available enum field names.


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | Array of enum field names as strings |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEnumFieldFromValue"><div class="plugin-name">elements</div><code><span class="field-name">getEnumFieldFromValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getEnumFieldFromValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the enum field name corresponding to a given value.

This method performs a reverse lookup, finding the field name
that matches the provided value.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) | The enum value to look up  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The field name if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="createEnumValue"><div class="plugin-name">elements</div><code><span class="field-name">createEnumValue</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#createEnumValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an enum value from its field name.

This method looks up the value associated with the given field name.
It's useful for converting string representations back to enum values.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The enum field name to look up  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | The corresponding enum value if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">enumFields</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">enumValues</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new EnumAbstractInfo instance.



| Name | Type | Description |
|------|------|-------------|
| `enumFields` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | Array of enum field names (e.g., ["OPTION_A", "OPTION_B"])  |
| `enumValues` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> | Array of corresponding values (e.g., [1, 2]) |

## Private Members

<div class="signature field-var has-description has-plugin" id="enumFields"><div class="plugin-name">elements</div><code><span class="field-name">enumFields</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#enumFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of enum field names as strings.
The order corresponds to the order in enumValues.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="enumValues"><div class="plugin-name">elements</div><code><span class="field-name">enumValues</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#enumValues"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of enum values corresponding to each field.
The order corresponds to the order in enumFields.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

