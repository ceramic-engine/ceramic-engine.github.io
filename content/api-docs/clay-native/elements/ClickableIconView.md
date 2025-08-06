---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ClickableIconView
target: Clay (Native)
permalink: api-docs/clay-native/elements/ClickableIconView/
---

# ClickableIconView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ClickableIconView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-native/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-native/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-native/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-native/ceramic/TextView/">ceramic.TextView</a> → <a href="/api-docs/clay-native/elements/EntypoIconView/">EntypoIconView</a> → <strong>elements.ClickableIconView</strong> (Class)</div>

An interactive icon button that responds to clicks and hover states.

Extends EntypoIconView to add interactive behavior:
- Click detection with visual feedback
- Long press support
- Hover state with color changes
- Disabled state support
- Theme-aware styling
- Subtle press animation (1px downward shift)

Commonly used for toolbar buttons, action icons, and interactive UI elements.

Example usage:
```haxe
var deleteButton = new ClickableIconView();
deleteButton.icon = TRASH;
deleteButton.onClick(() -> deleteItem());
deleteButton.onLongPress(() -> showDeleteOptions());
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/EntypoIconView/">EntypoIconView</a>, Click, LongPress</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The theme to use for styling. If null, uses the global context theme.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the icon button is disabled.
Disabled buttons don't respond to clicks and appear dimmed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hoverStyle"><div class="plugin-name">elements</div><code><span class="field-name">hoverStyle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hoverStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to apply hover styling (color change on hover).
Set to false for icons that should maintain constant appearance.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHover"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHover</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabled"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHoverStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHoverStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHoverStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new ClickableIconView.

Sets up:
- Click and long press detection
- Hover state tracking
- Press animation (1px downward shift)
- Theme-based styling updates

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hover"><div class="plugin-name">elements</div><code><span class="field-name">hover</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal hover state tracking.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHover"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHover</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabled"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHoverStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHoverStyle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHoverStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHoverChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHoverChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHoverChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hover field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabled field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHoverStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHoverStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHoverStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hoverStyle field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitClick"><div class="plugin-name">elements</div><code><span class="field-name">emitClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the icon is clicked.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLongPress"><div class="plugin-name">elements</div><code><span class="field-name">emitLongPress</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLongPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event emitted when the icon is long-pressed.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the icon color based on current state and theme.

Color logic:
- Normal: Slightly dimmed icon color (70% blend with background)
- Hover: Full icon color
- Disabled: 50% blend with dark background
- No hover style: Always full icon color

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

