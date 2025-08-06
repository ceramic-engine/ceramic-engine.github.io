---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TextFieldKind
target: Unity
permalink: api-docs/unity/elements/TextFieldKind/
---

# TextFieldKind

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TextFieldView.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.TextFieldKind</strong> (Enum)</div>

Defines the different types of text field inputs available.

Each kind determines the behavior and user interface of the text field:
- TEXT: Standard text input
- NUMERIC: Numeric input with validation
- DIR: Directory selection dialog (requires plugin_dialogs)
- FILE: File selection dialog (requires plugin_dialogs)

## Constructors

### TEXT

```haxe
TEXT
```

Standard text input field.
Allows any text input without special validation.

### NUMERIC

```haxe
NUMERIC
```

Numeric input field.
Validates input to ensure only numeric values are accepted.

### DIR

```haxe
DIR(?title: String)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `?title` | [String](/api-docs/unity/String/) | Optional title for the directory selection dialog |

Directory picker field.
When clicked, opens a directory selection dialog.


### FILE

```haxe
FILE(?title: String, ?filters: Array<ceramic.DialogsFileFilter>)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `?title` | [String](/api-docs/unity/String/) | Optional title for the file selection dialog  |
| `?filters` | [Array](/api-docs/unity/Array/)<[ceramic.DialogsFileFilter](/api-docs/unity/ceramic/DialogsFileFilter/)> | Optional array of file filters to restrict selectable file types |

File picker field.
When clicked, opens a file selection dialog.


## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

