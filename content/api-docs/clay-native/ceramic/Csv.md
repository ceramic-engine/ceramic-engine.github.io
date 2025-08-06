---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Csv
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Csv/
---

# Csv

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Csv.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Csv</strong> (Class)</div>

CSV parsing and generation utilities with proper escaping and quote handling.

This class provides robust CSV parsing that handles:
- Automatic delimiter detection (comma or semicolon)
- Quoted values with embedded delimiters
- Escaped quotes within quoted values
- Multi-line values within quotes
- Dynamic field discovery from data

## Features

- **Auto-detection**: Automatically detects comma or semicolon delimiters
- **Proper Escaping**: Handles quoted values and escaped quotes correctly
- **Type-safe**: Returns typed DynamicAccess objects for easy field access
- **Flexible Output**: Can generate CSV with specific or auto-discovered fields

## Usage Examples

```haxe
// Parse CSV string
var csv = 'name,age,city\n"John",30,"New York"\n"Jane",25,"San Francisco"';
var data = Csv.parse(csv);
trace(data[0].name); // "John"

// Generate CSV from objects
var items = [
    {name: "Alice", score: 95},
    {name: "Bob", score: 87}
];
var csvString = Csv.stringify(items);
```

<div class="see"><strong>See:</strong> ceramic.DatabaseAsset For loading CSV files as assets</div>


## Static Members

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">csv</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a CSV string into an array of objects.

Each row (except the header) becomes an object where field names
are taken from the first row. The parser automatically detects
whether commas or semicolons are used as delimiters.

## CSV Format Rules

- First row must contain field names
- Values containing delimiters or newlines must be quoted
- Quotes within quoted values must be escaped as ""
- Trailing/leading whitespace is preserved
- Empty values are returned as empty strings



| Name | Type | Description |
|------|------|-------------|
| `csv` | [String](/api-docs/clay-native/String/) | The CSV string to parse  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[haxe.DynamicAccess](/api-docs/clay-native/haxe/DynamicAccess/)<[String](/api-docs/clay-native/String/)>> | Array of objects with fields as defined in the header row * ```haxe var csv = 'id,name,description\n' + '1,"Smith, John","Says ""Hello"""\n' + '2,Jane Doe,Regular description'; * var data = Csv.parse(csv); trace(data[0].name); // "Smith, John" trace(data[0].description); // "Says "Hello"" ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stringify"><code><span class="field-name">stringify</span><span class="parenthesis">(</span><span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#stringify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts an array of objects to CSV format.

Automatically handles escaping of special characters:
- Values containing commas, quotes, or newlines are wrapped in quotes
- Quotes within values are escaped as double quotes ("")
- Field order is determined by the fields parameter or auto-discovered



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `items` | [Array](/api-docs/clay-native/Array/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | | Array of objects to convert to CSV  |
| `fields` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | *(optional)* | Optional array of field names to include in specific order. If not provided, fields are auto-discovered from all objects.  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | CSV string with header row and data rows * ```haxe var data = [ {id: 1, name: "John", note: "Says "Hi""}, {id: 2, name: "Jane, MD", note: "Multi\nline"} ]; * // Auto-discover fields var csv1 = Csv.stringify(data); * // Specific fields only var csv2 = Csv.stringify(data, ["id", "name"]); ``` |

## Private Members

<div class="signature field-method has-description" id="warning"><code><span class="field-name">warning</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#warning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal warning function that adapts to the current platform.
Uses ceramic logging when available, otherwise falls back to
platform-specific console output.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |

