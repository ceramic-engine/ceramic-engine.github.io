---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: WindowItem
target: Clay (Web)
permalink: api-docs/clay-web/elements/WindowItem/
---

# WindowItem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/WindowItem.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.WindowItem</strong> (Class)</div>

A versatile data container for window UI elements with efficient pooling and recycling.

This class serves as a universal data holder for all types of window items (buttons, text fields,
lists, etc.) to minimize memory allocations during UI updates. It uses an object pooling system
and stores data in generic fields that are interpreted differently based on the item kind.

## Features

- Object pooling for memory efficiency
- Generic data storage for all item types
- Automatic view creation and updates
- Item comparison for change detection
- Lifecycle management with recycling

## Data Storage

The class uses generic fields (int0-4, float0-4, bool0-4, string0-4, any0-5, arrays)
that are interpreted differently based on the WindowItemKind. This approach allows
a single class to handle all UI element types efficiently.

This class is used internally by `Im.*` methods and is typically not used by end user.

## Usage Examples

```haxe
// Get a window item from the pool
var item = WindowItem.get();
item.kind = BUTTON;
item.string0 = "Click Me"; // Button text
item.bool0 = true;         // Button enabled state

// Create a view from the item
var view = item.updateView(null);

// Recycle when done
item.recycle();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/WindowItemKind/">WindowItemKind</a>, <a href="/api-docs/clay-web/elements/WindowData/">WindowData</a>, Pool</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">elements</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">WindowItem</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a WindowItem from the object pool.

Gets a recycled item from the pool if available, otherwise creates a new one.
This is the preferred way to create WindowItem instances for memory efficiency.


| Returns | Description |
|---------|-------------|
| [WindowItem](/api-docs/clay-web/elements/WindowItem/) | A WindowItem instance ready for use * ## Examples ```haxe var item = WindowItem.get(); item.kind = TEXT; item.string0 = "Hello World"; ``` |

## Instance Members

<div class="signature field-var has-description has-plugin" id="kind"><div class="plugin-name">elements</div><code><span class="field-name">kind</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/WindowItemKind/" class="type-link">WindowItemKind</a></code><a class="header-anchor" href="#kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The type of window item, determining how data fields are interpreted.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/WindowItemKind/">WindowItemKind</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="previous"><div class="plugin-name">elements</div><code><span class="field-name">previous</span><span class="operator">:</span> <a href="#" class="type-link">WindowItem</a></code><a class="header-anchor" href="#previous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the previous version of this item for comparison.
Used to detect changes and optimize updates.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Theme to use for styling this item.
If null, the default theme is used.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int0"><div class="plugin-name">elements</div><code><span class="field-name">int0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#int0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic integer field #0.
Usage varies by item kind (e.g., selected index, numeric value, flags).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int1"><div class="plugin-name">elements</div><code><span class="field-name">int1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#int1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic integer field #1.
Usage varies by item kind (e.g., updated value, secondary index).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int2"><div class="plugin-name">elements</div><code><span class="field-name">int2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#int2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic integer field #2.
Usage varies by item kind (e.g., flags, text alignment, point size).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="int3"><div class="plugin-name">elements</div><code><span class="field-name">int3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#int3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic integer field #3.
Usage varies by item kind (e.g., preRenderedSize, additional flags).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="labelPosition"><div class="plugin-name">elements</div><code><span class="field-name">labelPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#labelPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Label position for labeled items (LEFT, RIGHT, etc.).
Used by LabeledView components to position labels relative to content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this item is disabled.
Disabled items typically appear grayed out and don't respond to interaction.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="flex"><div class="plugin-name">elements</div><code><span class="field-name">flex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flex value for layout purposes.
Controls how the item grows/shrinks in flexible layouts.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="float0"><div class="plugin-name">elements</div><code><span class="field-name">float0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#float0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic float field #0.
Usage varies by item kind (e.g., current value, height, minimum value).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="float1"><div class="plugin-name">elements</div><code><span class="field-name">float1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#float1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic float field #1.
Usage varies by item kind (e.g., updated value, width).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="labelWidth"><div class="plugin-name">elements</div><code><span class="field-name">labelWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#labelWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width allocated for labels in labeled items.
Used by LabeledView components to size the label area.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="float3"><div class="plugin-name">elements</div><code><span class="field-name">float3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#float3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic float field #3.
Usage varies by item kind (e.g., minimum value, range start).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="float4"><div class="plugin-name">elements</div><code><span class="field-name">float4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#float4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic float field #4.
Usage varies by item kind (e.g., maximum value, range end).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bool0"><div class="plugin-name">elements</div><code><span class="field-name">bool0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bool0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic boolean field #0.
Usage varies by item kind (e.g., multiline, enabled state, scale to fit).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bool1"><div class="plugin-name">elements</div><code><span class="field-name">bool1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bool1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic boolean field #1.
Usage varies by item kind (e.g., submit flag, apply filter).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bool2"><div class="plugin-name">elements</div><code><span class="field-name">bool2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bool2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic boolean field #2.
Usage varies by item kind (e.g., focus flag, auto-state).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bool3"><div class="plugin-name">elements</div><code><span class="field-name">bool3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bool3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic boolean field #3.
Usage varies by item kind (e.g., blur flag, additional state).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bool4"><div class="plugin-name">elements</div><code><span class="field-name">bool4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bool4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic boolean field #4.
Usage varies by item kind (e.g., autocomplete on focus).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="string0"><div class="plugin-name">elements</div><code><span class="field-name">string0</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string field #0.
Usage varies by item kind (e.g., current text value, button text, content).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="string1"><div class="plugin-name">elements</div><code><span class="field-name">string1</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string field #1.
Usage varies by item kind (e.g., updated value, null value text, selected tab).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="string2"><div class="plugin-name">elements</div><code><span class="field-name">string2</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string field #2.
Usage varies by item kind (e.g., label text, field name).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="string3"><div class="plugin-name">elements</div><code><span class="field-name">string3</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string field #3.
Usage varies by item kind (e.g., placeholder text, dialog title).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="string4"><div class="plugin-name">elements</div><code><span class="field-name">string4</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string field #4.
Usage varies by item kind (e.g., additional text, help text).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="any0"><div class="plugin-name">elements</div><code><span class="field-name">any0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#any0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type field #0.
Usage varies by item kind (e.g., data object, file filters, list items).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="any1"><div class="plugin-name">elements</div><code><span class="field-name">any1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#any1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type field #1.
Usage varies by item kind (e.g., updated data, moved items).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="any2"><div class="plugin-name">elements</div><code><span class="field-name">any2</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#any2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type field #2.
Usage varies by item kind (e.g., trashed items, additional data).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="any3"><div class="plugin-name">elements</div><code><span class="field-name">any3</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#any3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type field #3.
Usage varies by item kind (e.g., locked items, state data).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="any4"><div class="plugin-name">elements</div><code><span class="field-name">any4</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#any4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type field #4.
Usage varies by item kind (e.g., unlocked items, extra state).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="any5"><div class="plugin-name">elements</div><code><span class="field-name">any5</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#any5"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type field #5.
Usage varies by item kind (e.g., duplicated items, extended data).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visual"><div class="plugin-name">elements</div><code><span class="field-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Visual element associated with this item.
Used by VISUAL kind items to display custom visual content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="intArray0"><div class="plugin-name">elements</div><code><span class="field-name">intArray0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#intArray0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic integer array field #0.
Usage varies by item kind (e.g., tab states, indices, flags array).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="stringArray0"><div class="plugin-name">elements</div><code><span class="field-name">stringArray0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stringArray0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string array field #0.
Usage varies by item kind (e.g., options list, available tabs, file list).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="stringArray1"><div class="plugin-name">elements</div><code><span class="field-name">stringArray1</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stringArray1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic string array field #1.
Usage varies by item kind (e.g., tab labels, secondary options).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="anyArray0"><div class="plugin-name">elements</div><code><span class="field-name">anyArray0</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#anyArray0"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generic any-type array field #0.
Usage varies by item kind (e.g., data objects, theme list, items collection).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="row"><div class="plugin-name">elements</div><code><span class="field-name">row</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#row"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Row identifier for grid-based layouts or grouping.
Used to organize items into logical rows.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hasManagedVisual"><div class="plugin-name">elements</div><code><span class="field-name">hasManagedVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasManagedVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if this item has a managed visual that should be destroyed on cleanup.

Returns true if this is a VISUAL item with the managed flag set (int0 > 0)
and a visual is actually assigned.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if the visual should be automatically managed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isSameItem"><div class="plugin-name">elements</div><code><span class="field-name">isSameItem</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="#" class="type-link">WindowItem</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSameItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares this item with another to determine if they represent the same UI element.

This comparison is used to detect when items can be reused between frames
rather than recreated. The comparison logic varies by item kind, typically
checking the label similarity and other identifying characteristics.



| Name | Type | Description |
|------|------|-------------|
| `item` | [WindowItem](/api-docs/clay-web/elements/WindowItem/) | The other WindowItem to compare against  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if the items represent the same UI element * ## Comparison Logic by Kind - SELECT: Label + options array equality - Text/Edit fields: Label similarity - VISUAL: Label + visual reference equality - Static items (TEXT, BUTTON, etc.): Always true - Unknown: Always false |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateView"><div class="plugin-name">elements</div><code><span class="field-name">updateView</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#updateView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates or updates a View based on this item's data and kind.

This method is the main entry point for converting window item data
into actual UI views. It delegates to specific creation methods based
on the item kind and applies common properties like flex layout.



| Name | Type | Description |
|------|------|-------------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) | Existing view to update, or null to create a new one  |

| Returns | Description |
|---------|-------------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) | The created or updated view, or null for unknown kinds * ## View Creation Process 1. Determines the appropriate view type from the item kind 2. Creates a new view or updates the existing one 3. Applies item data to the view properties 4. Sets up event handlers and callbacks 5. Applies common layout properties (flex) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="recycle"><div class="plugin-name">elements</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets all fields to default values and returns the item to the object pool.

This method cleans up the item's state and makes it available for reuse.
It resets all data fields to their default values and handles visual
cleanup appropriately. After calling this method, the item should not
be used until retrieved again from the pool.

## Cleanup Process
1. Resets all data fields to default values
2. Handles visual deactivation if not parented
3. Returns the item to the object pool for reuse

<div class="see"><strong>See:</strong> get</div>


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new WindowItem instance.

Note: Use WindowItem.get() instead of direct construction
to benefit from object pooling.

<div class="see"><strong>See:</strong> get</div>


## Private Members

<div class="signature field-var has-description has-plugin" id="pool"><div class="plugin-name">elements</div><code><span class="field-name">pool</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Pool/" class="type-link">ceramic.Pool</a><span class="operator">&lt;</span><a href="#" class="type-link">WindowItem</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Object pool for efficient WindowItem reuse.
Minimizes garbage collection by recycling items instead of creating new ones.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isSimilarLabel"><div class="plugin-name">elements</div><code><span class="field-name">isSimilarLabel</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="#" class="type-link">WindowItem</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSimilarLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if another item has a similar label configuration.

Compares the label presence (string2 field) between items to determine
if they have compatible labeling. Both items should either have labels
or both should be unlabeled.

@private

| Name | Type | Description |
|------|------|-------------|
| `item` | [WindowItem](/api-docs/clay-web/elements/WindowItem/) | The other item to compare labels with  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if both items have similar label states  |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateSpace"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateSpace</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateSeparator"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateSeparator</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateSeparator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateVisualContainer"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateVisualContainer</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateVisualContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateSelectField"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateSelectField</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateSelectField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateBooleanField"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateBooleanField</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateBooleanField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateColorField"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateColorField</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateColorField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateEditTextField"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateEditTextField</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateEditTextField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateSliderField"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateSliderField</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateSliderField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateText"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateText</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateButton"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateButton</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateList"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateList</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createOrUpdateTabs"><div class="plugin-name">elements</div><code><span class="field-name">createOrUpdateTabs</span><span class="parenthesis">(</span><span class="arg-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#createOrUpdateTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `view` | [ceramic.View](/api-docs/clay-web/ceramic/View/) |

| Returns |
|---------|
| [ceramic.View](/api-docs/clay-web/ceramic/View/) |

