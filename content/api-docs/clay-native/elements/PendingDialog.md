---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: PendingDialog
target: Clay (Native)
permalink: api-docs/clay-native/elements/PendingDialog/
---

# PendingDialog

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/PendingDialog.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/tracker/Model/">tracker.Model</a> → <strong>elements.PendingDialog</strong> (Class)</div>

Model representing a pending dialog box with user interaction.

PendingDialog manages the state and configuration of modal dialogs,
including alert dialogs, confirmation dialogs, and prompt dialogs.
It tracks user interaction results and provides callback mechanisms
for handling user responses.

Features:
- Multiple choice support with custom button labels
- Optional text input with prompt functionality
- Cancelable dialogs with escape handling
- Configurable dimensions and styling
- Async operation support
- Callback-based result handling
- Unique key identification for dialog management

Example usage:
```haxe
var dialog = new PendingDialog(
    "confirm_delete",
    "Confirm Delete",
    "Are you sure you want to delete this item?",
    false, null, null,
    ["Cancel", "Delete"],
    true, -1, -1, true,
    (index, text) -> {
        if (index == 1) {
            // User clicked Delete
        }
    }
);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/StringPointer/">StringPointer</a>, <a href="/api-docs/clay-native/elements/Im/">Im</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="chosenIndex"><div class="plugin-name">elements</div><code><span class="field-name">chosenIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#chosenIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the chosen button (-1 if none chosen yet)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="canceled"><div class="plugin-name">elements</div><code><span class="field-name">canceled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canceled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the dialog was canceled (typically via Escape key)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="promptPointer"><div class="plugin-name">elements</div><code><span class="field-name">promptPointer</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/StringPointer/" class="type-link">StringPointer</a></code><a class="header-anchor" href="#promptPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pointer to the prompt text input value (for prompt dialogs)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="promptPlaceholder"><div class="plugin-name">elements</div><code><span class="field-name">promptPlaceholder</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#promptPlaceholder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Placeholder text for the prompt input field

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="key"><div class="plugin-name">elements</div><code><span class="field-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#key"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this dialog instance

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="title"><div class="plugin-name">elements</div><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Title text displayed in the dialog header

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="message"><div class="plugin-name">elements</div><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main message text displayed in the dialog body

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="choices"><div class="plugin-name">elements</div><code><span class="field-name">choices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#choices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of button labels for user choices

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cancelable"><div class="plugin-name">elements</div><code><span class="field-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#cancelable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the dialog can be canceled (e.g., with Escape key)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">elements</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fixed width of the dialog (-1 for auto-sizing)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">elements</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fixed height of the dialog (-1 for auto-sizing)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="async"><div class="plugin-name">elements</div><code><span class="field-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#async"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the dialog operates asynchronously

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="callback"><div class="plugin-name">elements</div><code><span class="field-name">callback</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback function called when user makes a choice

| Name | Type |
|------|------|
| `index` | [Int](/api-docs/clay-native/Int/) |
| `text` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="destroy"><div class="plugin-name">elements</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cleans up dialog resources when destroyed.

Clears references to strings, arrays, and callback functions
to prevent memory leaks and ensure proper garbage collection.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">prompt</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">promptPointer</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">promptPlaceholder</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">choices</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new PendingDialog instance.

Configures all dialog properties and sets up prompt functionality if needed.
If prompt is enabled but no promptPointer is provided, creates an internal
string pointer for managing the prompt value.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `key` | [String](/api-docs/clay-native/String/) | *(optional)* | Optional unique identifier for the dialog  |
| `title` | [String](/api-docs/clay-native/String/) | | Title text for the dialog header  |
| `message` | [String](/api-docs/clay-native/String/) | | Main message text for the dialog body  |
| `prompt` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether to include a text input prompt  |
| `promptPointer` | [StringPointer](/api-docs/clay-native/elements/StringPointer/) | *(optional)* | Optional string pointer for prompt value binding  |
| `promptPlaceholder` | [String](/api-docs/clay-native/String/) | *(optional)* | Placeholder text for the prompt input  |
| `choices` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | | Array of button labels for user choices  |
| `cancelable` | [Bool](/api-docs/clay-native/Bool/) | `false` | Whether the dialog can be canceled  |
| `width` | [Float](/api-docs/clay-native/Float/) | `-1` | Fixed width (-1 for auto-sizing)  |
| `height` | [Float](/api-docs/clay-native/Float/) | `-1` | Fixed height (-1 for auto-sizing)  |
| `async` | [Bool](/api-docs/clay-native/Bool/) | | Whether the dialog operates asynchronously  |
| `callback` | Function | | Function called when user makes a choice |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |

