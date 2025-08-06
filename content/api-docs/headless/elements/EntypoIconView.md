---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: EntypoIconView
target: Headless
permalink: api-docs/headless/elements/EntypoIconView/
---

# EntypoIconView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/EntypoIconView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/headless/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/headless/ceramic/View/">ceramic.View</a> → <a href="/api-docs/headless/ceramic/TextView/">ceramic.TextView</a> → <strong>elements.EntypoIconView</strong> (Class) → <a href="/api-docs/headless/elements/ClickableIconView/">ClickableIconView</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/tracker/Observable/">tracker.Observable</a></div>

A view component for displaying Entypo font icons.

EntypoIconView is a specialized TextView that renders icons from the Entypo icon font.
It provides a simple way to display any of the 411 premium pictograms available in the
Entypo font collection.

The view automatically loads the Entypo font, centers the icon both horizontally and
vertically, and updates its content when the icon property changes.

Example usage:
```haxe
var iconView = new EntypoIconView();
iconView.icon = Entypo.HEART;
iconView.color = Color.RED;
iconView.pointSize = 24;
```

<div class="see"><strong>See:</strong> Entypo for available icon constants</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="icon"><div class="plugin-name">elements</div><code><span class="field-name">icon</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Entypo/" class="type-link">Entypo</a></code><a class="header-anchor" href="#icon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Entypo icon to display.

Changing this property will automatically update the displayed icon.
The icon is rendered as a Unicode character from the Entypo font.

@default NOTE_BEAMED

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateIcon"><div class="plugin-name">elements</div><code><span class="field-name">invalidateIcon</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateIcon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new EntypoIconView instance.

The constructor initializes the view with default settings:
- Centers the icon both horizontally and vertically
- Sets the default point size to 16
- Loads the Entypo font asynchronously
- Sets up automatic content updates when the icon property changes

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedIcon"><div class="plugin-name">elements</div><code><span class="field-name">unobservedIcon</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Entypo/" class="type-link">Entypo</a></code><a class="header-anchor" href="#unobservedIcon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">EntypoIconView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [EntypoIconView](/api-docs/headless/elements/EntypoIconView/) |
| `fromSerializedField` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitIconChange"><div class="plugin-name">elements</div><code><span class="field-name">emitIconChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Entypo/" class="type-link">Entypo</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Entypo/" class="type-link">Entypo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitIconChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when icon field changes.

| Name | Type |
|------|------|
| `current` | [Entypo](/api-docs/headless/elements/Entypo/) |
| `previous` | [Entypo](/api-docs/headless/elements/Entypo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateContent"><div class="plugin-name">elements</div><code><span class="field-name">updateContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the displayed content based on the current icon value.

This method is automatically called whenever the icon property changes,
converting the icon's numeric code point to the corresponding Unicode character.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

