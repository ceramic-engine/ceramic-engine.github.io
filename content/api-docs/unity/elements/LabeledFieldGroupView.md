---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: LabeledFieldGroupView
target: Unity
permalink: api-docs/unity/elements/LabeledFieldGroupView/
---

# LabeledFieldGroupView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/LabeledFieldGroupView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <a href="/api-docs/unity/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <strong>elements.LabeledFieldGroupView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

A container that groups multiple labeled field views in a horizontal layout.

This view is designed to organize related fields together, managing their
layout and providing consistent label widths across the group. It's particularly
useful for creating forms with multiple related inputs on the same line.

## Type Parameters

- `T`: The type of labeled field views (must extend LabeledFieldView)
- `U`: The underlying field view type

## Features

- Automatic layout management for grouped fields
- Consistent label width distribution
- Disabled state synchronization
- Responsive width allocation

## Usage Example

```haxe
// Create a group of coordinate fields
var xField = new LabeledFieldView(new TextFieldView(), "X:");
var yField = new LabeledFieldView(new TextFieldView(), "Y:");
var zField = new LabeledFieldView(new TextFieldView(), "Z:");

var coordGroup = new LabeledFieldGroupView([xField, yField, zField]);
coordGroup.label = "Position";
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/elements/LabeledFieldView/">LabeledFieldView</a>, <a href="/api-docs/unity/elements/FieldView/">FieldView</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="label"><div class="plugin-name">elements</div><code><span class="field-name">label</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#label"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The label text for the entire field group.
Can be used to describe the purpose of the grouped fields.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether all fields in the group are disabled.
Automatically computed based on individual field states.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fields"><div class="plugin-name">elements</div><code><span class="field-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">elements.LabeledFieldGroupView.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#fields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The array of labeled field views in this group.
Setting this property triggers layout recalculation.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLabel"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLabel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">elements.LabeledFieldGroupView.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new labeled field group view.


| Name | Type | Description |
|------|------|-------------|
| `fields` | [Array](/api-docs/unity/Array/)<elements.LabeledFieldGroupView.T> | Array of labeled field views to group together |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedLabel"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLabel</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">LabeledFieldGroupView</a><span class="operator">&lt;</span><span class="type-name">elements.LabeledFieldGroupView.T</span><span class="operator">,</span> <span class="type-name">elements.LabeledFieldGroupView.U</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [LabeledFieldGroupView](/api-docs/unity/elements/LabeledFieldGroupView/)<elements.LabeledFieldGroupView.T, elements.LabeledFieldGroupView.U> |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLabelChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLabelChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLabelChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when label field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/unity/String/) |
| `previous` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs custom layout to ensure consistent label widths across fields.
The first field gets a different label width than subsequent fields
to maintain visual alignment.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">updateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the disabled state by checking all child fields.
The group is considered disabled only if all fields are disabled.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of the group.
Currently commented out but can be used to apply themed styling.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

