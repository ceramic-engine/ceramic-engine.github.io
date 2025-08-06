---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Tooltip
target: Unity
permalink: api-docs/unity/elements/Tooltip/
---

# Tooltip

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Tooltip.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <strong>elements.Tooltip</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a>, <a href="/api-docs/unity/ceramic/Component/">ceramic.Component</a></div>

A tooltip component that displays informational text when hovering over visual elements.

This class provides a tooltip implementation that can be attached to any visual element
as a component. The tooltip displays text content in a styled bubble with a pointer
triangle, appearing on hover and disappearing when the pointer leaves the element.

## Features

- Automatic positioning relative to the target element
- Theme-based styling with customizable appearance
- Speech bubble design with pointer triangle
- Hover-based show/hide behavior
- Component-based attachment system

## Usage Examples

```haxe
// Add a tooltip to any visual element
var button = new Button();
Tooltip.tooltip(button, "Click me to save your work");

// Update tooltip content
Tooltip.tooltip(button, "Updated tooltip text");

// Remove tooltip
Tooltip.tooltip(button, null);

// Create tooltip manually
var myTooltip = new Tooltip("Custom tooltip content");
someVisual.component('tooltip', myTooltip);
```

<div class="see"><strong>See:</strong> Component, <a href="/api-docs/unity/elements/Theme/">Theme</a>, Visual</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="tooltip"><div class="plugin-name">elements</div><code><span class="field-name">tooltip</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds, updates, or removes a tooltip from a visual element.

This static method provides a convenient way to manage tooltips on visual elements.
It automatically creates, updates, or removes tooltip components as needed.



| Name | Type | Description |
|------|------|-------------|
| `visual` | [ceramic.Visual](/api-docs/unity/ceramic/Visual/) | The visual element to attach the tooltip to  |
| `content` | [String](/api-docs/unity/String/) | The tooltip text to display, or null to remove the tooltip * ## Examples ```haxe // Add a tooltip Tooltip.tooltip(myButton, "Click to save"); * // Update tooltip content Tooltip.tooltip(myButton, "Click to save (Ctrl+S)"); * // Remove tooltip Tooltip.tooltip(myButton, null); ``` |

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The theme used for styling this tooltip.
If null, the context's default theme will be used.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="content"><div class="plugin-name">elements</div><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text content displayed in the tooltip.
This is the main message shown to the user.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="entity"><div class="plugin-name">elements</div><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual element this tooltip is attached to.
@private

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">elements</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateContent"><div class="plugin-name">elements</div><code><span class="field-name">invalidateContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new tooltip with the specified content.

The tooltip is automatically added to the context view with high depth
to ensure it appears above other UI elements. The visual structure includes
a background bubble, pointer triangle, and text content.



| Name | Type | Description |
|------|------|-------------|
| `content` | [String](/api-docs/unity/String/) | The text content to display in the tooltip |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedContent"><div class="plugin-name">elements</div><code><span class="field-name">unobservedContent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="text"><div class="plugin-name">elements</div><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Text/" class="type-link">ceramic.Text</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text visual that displays the tooltip content.
@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bubble"><div class="plugin-name">elements</div><code><span class="field-name">bubble</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#bubble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The background bubble quad for the tooltip.
@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bubbleTriangle"><div class="plugin-name">elements</div><code><span class="field-name">bubbleTriangle</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Triangle/" class="type-link">ceramic.Triangle</a></code><a class="header-anchor" href="#bubbleTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The triangle pointer that points to the target element.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Tooltip</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Tooltip](/api-docs/unity/elements/Tooltip/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/unity/elements/Theme/) |
| `previous` | [Theme](/api-docs/unity/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitContentChange"><div class="plugin-name">elements</div><code><span class="field-name">emitContentChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitContentChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when content field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">elements</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Binds this tooltip as a component to its entity.

Sets up the hover behavior for showing and hiding the tooltip.
The tooltip appears when the pointer enters the entity and disappears when it leaves.
Positioning is automatically calculated relative to the entity's center.

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateTextContent"><div class="plugin-name">elements</div><code><span class="field-name">updateTextContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTextContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the layout and positioning based on the current text content.

Recalculates the size and positions of all visual elements (text, bubble, triangle)
to accommodate the current content. The tooltip is automatically sized to fit
the text with appropriate padding.

@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual styling of the tooltip based on the current theme.

Applies theme colors and fonts to all visual elements. If no custom theme
is set, uses the context's default theme. The bubble and triangle use
overlay colors with appropriate alpha values.

@private

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">elements</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [ceramic.Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">elements</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">ceramic.Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ceramic.Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

