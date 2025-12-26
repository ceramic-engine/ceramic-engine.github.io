---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: FilePickerView
target: Unity
permalink: api-docs/unity/elements/FilePickerView/
---

# FilePickerView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/FilePickerView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <strong>elements.FilePickerView</strong> (Class)</div>

A file picker dialog component built entirely with Elements UI.

FilePickerView provides a native-like file selection interface with:
- File name text field for direct input
- Folder hierarchy navigation
- File list with selection
- Standard open/save/cancel actions

This is currently a draft implementation with the basic structure
in place for future development.

@todo Implement file system navigation
@todo Add file filtering and search
@todo Implement preview pane
@todo Add keyboard navigation support

## Instance Members

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new FilePickerView instance.

Initializes the file picker with default styling and layout.
The actual implementation is pending.

## Private Members

<div class="signature field-var has-description has-plugin" id="fileNameTextField"><div class="plugin-name">elements</div><code><span class="field-name">fileNameTextField</span><span class="operator">:</span> <a href="/api-docs/unity/elements/TextFieldView/" class="type-link">TextFieldView</a></code><a class="header-anchor" href="#fileNameTextField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text field for entering or displaying the selected file name.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="folderHierarchy"><div class="plugin-name">elements</div><code><span class="field-name">folderHierarchy</span><span class="operator">:</span> <a href="/api-docs/unity/elements/SelectListView/" class="type-link">SelectListView</a></code><a class="header-anchor" href="#folderHierarchy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List view showing the folder hierarchy for navigation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lays out the file picker components.

This method should arrange:
- Navigation controls at the top
- File list in the center
- File name field and action buttons at the bottom

@todo Implement the layout logic

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual styling based on the current theme.

Called automatically when theme settings change.

@todo Apply theme colors and fonts

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

