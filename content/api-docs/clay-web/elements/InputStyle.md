---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: InputStyle
target: Clay (Web)
permalink: api-docs/clay-web/elements/InputStyle/
---

# InputStyle

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/InputStyle.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.InputStyle</strong> (Enum)</div>

Defines the visual style options for input fields in the Elements UI system.

This enum controls how text fields, select fields, and other input elements
are rendered, allowing different presentations for different contexts.

## Available Styles

- `DEFAULT`: Standard input style with full borders and background
- `OVERLAY`: Transparent/floating style for overlaying on backgrounds
- `MINIMAL`: Reduced visual elements for a cleaner look

## Usage Example

```haxe
var textField = new TextFieldView();
textField.inputStyle = InputStyle.MINIMAL;

var colorPicker = new ColorFieldView();
colorPicker.inputStyle = InputStyle.OVERLAY;
```

## Constructors

### DEFAULT

```haxe
DEFAULT
```

The default input style with standard borders, background, and padding.
This is the most common style for form inputs and provides clear visual
boundaries and interaction states.

### OVERLAY

```haxe
OVERLAY
```

An overlay-optimized style with transparent or semi-transparent backgrounds.
Useful when input fields need to float over content without obscuring it,
such as in floating panels or HUD interfaces.

### MINIMAL

```haxe
MINIMAL
```

A minimalistic style with reduced visual elements.
Removes most decorative elements, keeping only essential interaction
indicators. Good for dense interfaces or when the input context is clear.

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

