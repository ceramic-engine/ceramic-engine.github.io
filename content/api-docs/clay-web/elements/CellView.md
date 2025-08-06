---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: CellView
target: Clay (Web)
permalink: api-docs/clay-web/elements/CellView/
---

# CellView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/CellView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">ceramic.View</a> → <a href="/api-docs/clay-web/ceramic/LayersLayout/">ceramic.LayersLayout</a> → <strong>elements.CellView</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/tracker/Observable/">tracker.Observable</a></div>

A themeable cell view for list or collection display with interactive features.

CellView provides a rich set of features for displaying items in collections:
- Title and subtitle text display with automatic truncation
- Selection state with visual feedback
- Optional icons for kind/type indication
- Action buttons for lock, duplicate, and delete operations
- Drag and drop support with visual feedback and auto-scrolling
- Hover states and smooth transitions
- Theme-aware styling with light/dark mode support
- Input style mode for form-like appearance

The view is commonly used within CellCollectionView for displaying
lists of items with consistent styling and behavior.

Example usage:
```haxe
var cell = new CellView();
cell.title = "Item Name";
cell.subTitle = "Description";
cell.kindIcon = Entypo.DOC_TEXT;
cell.handleTrash = () -> deleteItem();
cell.bindDragDrop(click, handleReorder);
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/CellCollectionView/">CellCollectionView</a>, <a href="/api-docs/clay-web/elements/DragDrop/">DragDrop</a>, <a href="/api-docs/clay-web/elements/Theme/">Theme</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The theme to use for styling. If null, uses the global context theme.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="selected"><div class="plugin-name">elements</div><code><span class="field-name">selected</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#selected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this cell is currently selected.
Selected cells display with accent colors and borders.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="title"><div class="plugin-name">elements</div><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The main title text to display in the cell.
Text is automatically truncated if it exceeds the available width.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="subTitle"><div class="plugin-name">elements</div><code><span class="field-name">subTitle</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#subTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The subtitle text displayed below the title.
Rendered in italic style with smaller font size.
Text is automatically truncated if it exceeds the available width.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemIndex"><div class="plugin-name">elements</div><code><span class="field-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#itemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The index of this cell within its parent collection.
Used for drag and drop reordering operations.
Setting a new index resets the hover state.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collectionView"><div class="plugin-name">elements</div><code><span class="field-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/CellCollectionView/" class="type-link">CellCollectionView</a></code><a class="header-anchor" href="#collectionView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the parent collection view containing this cell.
Used to check scrolling state for hover behavior.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputStyle"><div class="plugin-name">elements</div><code><span class="field-name">inputStyle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, applies input-style theming with lighter appearance.
Used for cells that represent form inputs or editable fields.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="displaysEmptyValue"><div class="plugin-name">elements</div><code><span class="field-name">displaysEmptyValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#displaysEmptyValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true in input style, displays the title with italic skew
to indicate an empty or placeholder value.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="locked"><div class="plugin-name">elements</div><code><span class="field-name">locked</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#locked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this cell represents a locked/protected item.
Locked cells display with a darker background and lock icon.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="kindIcon"><div class="plugin-name">elements</div><code><span class="field-name">kindIcon</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/elements/Entypo/" class="type-link">Entypo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#kindIcon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional icon to display on the left side indicating the item type.
Uses the Entypo icon set.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragging"><div class="plugin-name">elements</div><code><span class="field-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this cell is currently being dragged.
Read-only property updated during drag operations.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSelected"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSelected</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSelected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTitle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSubTitle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSubTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSubTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateItemIndex"><div class="plugin-name">elements</div><code><span class="field-name">invalidateItemIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateItemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateCollectionView"><div class="plugin-name">elements</div><code><span class="field-name">invalidateCollectionView</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateCollectionView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateInputStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisplaysEmptyValue"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisplaysEmptyValue</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisplaysEmptyValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLocked"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLocked</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateKindIcon"><div class="plugin-name">elements</div><code><span class="field-name">invalidateKindIcon</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateKindIcon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHandleTrash"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHandleTrash</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHandleTrash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleTrash"><div class="plugin-name">elements</div><code><span class="field-name">handleTrash</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTrash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback invoked when the trash/delete button is clicked.
If null, the trash button is not displayed.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHandleLock"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHandleLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHandleLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleLock"><div class="plugin-name">elements</div><code><span class="field-name">handleLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback invoked when the lock/unlock button is clicked.
If null, the lock button is not displayed.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHandleDuplicate"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHandleDuplicate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHandleDuplicate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleDuplicate"><div class="plugin-name">elements</div><code><span class="field-name">handleDuplicate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleDuplicate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback invoked when the duplicate button is clicked.
If null, the duplicate button is not displayed.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDragging"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDragging</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateClonedForDragging"><div class="plugin-name">elements</div><code><span class="field-name">invalidateClonedForDragging</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateClonedForDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHover"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHover</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateAppliedHoverItemIndex"><div class="plugin-name">elements</div><code><span class="field-name">invalidateAppliedHoverItemIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateAppliedHoverItemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindDragDrop"><div class="plugin-name">elements</div><code><span class="field-name">bindDragDrop</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">click</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Click/" class="type-link">ceramic.Click</a><span class="operator">,</span> <span class="arg-name">handleDrop</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindDragDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables drag and drop functionality for this cell.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `click` | [ceramic.Click](/api-docs/clay-web/ceramic/Click/) | *(optional)* | Optional click component to use for drag detection  |
| `handleDrop` | Function | | Callback invoked when the cell is dropped at a new position Receives the target itemIndex where the cell should be moved |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unbindDragDrop"><div class="plugin-name">elements</div><code><span class="field-name">unbindDragDrop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindDragDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disables drag and drop functionality for this cell.
Cleans up drag handlers and resets dragging state.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new CellView instance.

Initializes the cell with:
- Column layout for title and subtitle
- Text views with appropriate styling
- Border configuration
- Event handlers for hover states
- Auto-updating style based on theme and state

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSelected"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSelected</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedSelected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTitle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTitle</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSubTitle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSubTitle</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedSubTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedItemIndex"><div class="plugin-name">elements</div><code><span class="field-name">unobservedItemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedItemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedCollectionView"><div class="plugin-name">elements</div><code><span class="field-name">unobservedCollectionView</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/CellCollectionView/" class="type-link">CellCollectionView</a></code><a class="header-anchor" href="#unobservedCollectionView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedInputStyle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedInputStyle</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedInputStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisplaysEmptyValue"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisplaysEmptyValue</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDisplaysEmptyValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLocked"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLocked</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedLocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedKindIcon"><div class="plugin-name">elements</div><code><span class="field-name">unobservedKindIcon</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/elements/Entypo/" class="type-link">Entypo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedKindIcon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDragging"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="titleTextView"><div class="plugin-name">elements</div><code><span class="field-name">titleTextView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#titleTextView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="subTitleTextView"><div class="plugin-name">elements</div><code><span class="field-name">subTitleTextView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#subTitleTextView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="columnLayout"><div class="plugin-name">elements</div><code><span class="field-name">columnLayout</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ColumnLayout/" class="type-link">ceramic.ColumnLayout</a></code><a class="header-anchor" href="#columnLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="iconsView"><div class="plugin-name">elements</div><code><span class="field-name">iconsView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/RowLayout/" class="type-link">ceramic.RowLayout</a></code><a class="header-anchor" href="#iconsView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragTargetTy"><div class="plugin-name">elements</div><code><span class="field-name">dragTargetTy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragTargetTy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragDrop"><div class="plugin-name">elements</div><code><span class="field-name">dragDrop</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/DragDrop/" class="type-link">DragDrop</a></code><a class="header-anchor" href="#dragDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragAutoScroll"><div class="plugin-name">elements</div><code><span class="field-name">dragAutoScroll</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragAutoScroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragStartScrollY"><div class="plugin-name">elements</div><code><span class="field-name">dragStartScrollY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragStartScrollY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="draggingCellDragY"><div class="plugin-name">elements</div><code><span class="field-name">draggingCellDragY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#draggingCellDragY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="draggingCell"><div class="plugin-name">elements</div><code><span class="field-name">draggingCell</span><span class="operator">:</span> <a href="#" class="type-link">CellView</a></code><a class="header-anchor" href="#draggingCell"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragOnItemIndex"><div class="plugin-name">elements</div><code><span class="field-name">dragOnItemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dragOnItemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clonedForDragging"><div class="plugin-name">elements</div><code><span class="field-name">clonedForDragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clonedForDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedClonedForDragging"><div class="plugin-name">elements</div><code><span class="field-name">unobservedClonedForDragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedClonedForDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="hover"><div class="plugin-name">elements</div><code><span class="field-name">hover</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHover"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHover</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="appliedHoverItemIndex"><div class="plugin-name">elements</div><code><span class="field-name">appliedHoverItemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#appliedHoverItemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedAppliedHoverItemIndex"><div class="plugin-name">elements</div><code><span class="field-name">unobservedAppliedHoverItemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedAppliedHoverItemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">CellView</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [CellView](/api-docs/clay-web/elements/CellView/) |
| `fromSerializedField` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-web/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-web/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSelectedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSelectedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelectedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when selected field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTitleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTitleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTitleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when title field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSubTitleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSubTitleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSubTitleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when subTitle field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/clay-web/String/) |
| `previous` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitItemIndexChange"><div class="plugin-name">elements</div><code><span class="field-name">emitItemIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitItemIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when itemIndex field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-web/Int/) |
| `previous` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitCollectionViewChange"><div class="plugin-name">elements</div><code><span class="field-name">emitCollectionViewChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/CellCollectionView/" class="type-link">CellCollectionView</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/CellCollectionView/" class="type-link">CellCollectionView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCollectionViewChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when collectionView field changes.

| Name | Type |
|------|------|
| `current` | [CellCollectionView](/api-docs/clay-web/elements/CellCollectionView/) |
| `previous` | [CellCollectionView](/api-docs/clay-web/elements/CellCollectionView/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitInputStyleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitInputStyleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInputStyleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when inputStyle field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisplaysEmptyValueChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisplaysEmptyValueChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisplaysEmptyValueChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when displaysEmptyValue field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLockedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLockedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLockedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when locked field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitKindIconChange"><div class="plugin-name">elements</div><code><span class="field-name">emitKindIconChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/elements/Entypo/" class="type-link">Entypo</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/elements/Entypo/" class="type-link">Entypo</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKindIconChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when kindIcon field changes.

| Name | Type |
|------|------|
| `current` | [Null](/api-docs/clay-web/Null/)<[Entypo](/api-docs/clay-web/elements/Entypo/)> |
| `previous` | [Null](/api-docs/clay-web/Null/)<[Entypo](/api-docs/clay-web/elements/Entypo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unobservedHandleTrash"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHandleTrash</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unobservedHandleTrash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHandleTrashChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHandleTrashChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHandleTrashChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when handleTrash field changes.

| Name | Type |
|------|------|
| `current` | Function |
| `previous` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unobservedHandleLock"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHandleLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unobservedHandleLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHandleLockChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHandleLockChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHandleLockChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when handleLock field changes.

| Name | Type |
|------|------|
| `current` | Function |
| `previous` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unobservedHandleDuplicate"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHandleDuplicate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unobservedHandleDuplicate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHandleDuplicateChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHandleDuplicateChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHandleDuplicateChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when handleDuplicate field changes.

| Name | Type |
|------|------|
| `current` | Function |
| `previous` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDraggingChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDraggingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDraggingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when dragging field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearScrollDelay"><div class="plugin-name">elements</div><code><span class="field-name">clearScrollDelay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearScrollDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitClonedForDraggingChange"><div class="plugin-name">elements</div><code><span class="field-name">emitClonedForDraggingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClonedForDraggingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when clonedForDragging field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHoverChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHoverChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHoverChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hover field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitAppliedHoverItemIndexChange"><div class="plugin-name">elements</div><code><span class="field-name">emitAppliedHoverItemIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAppliedHoverItemIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when appliedHoverItemIndex field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/clay-web/Int/) |
| `previous` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateTitle"><div class="plugin-name">elements</div><code><span class="field-name">updateTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the title text view based on the current title property.
Hides the text view when title is null.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateSubTitle"><div class="plugin-name">elements</div><code><span class="field-name">updateSubTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSubTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the subtitle text view based on the current subTitle property.
Hides the text view when subTitle is null.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutTitle"><div class="plugin-name">elements</div><code><span class="field-name">layoutTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips the title text to fit within the available width.
Called during layout to prevent text overflow.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layoutSubTitle"><div class="plugin-name">elements</div><code><span class="field-name">layoutSubTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layoutSubTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clips the subtitle text to fit within the available width.
Called during layout to prevent text overflow.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateIcons"><div class="plugin-name">elements</div><code><span class="field-name">updateIcons</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateIcons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the icon layout based on current icon properties.
Creates icon buttons for trash, lock, duplicate, and kind icon as needed.
Adjusts text padding when a kind icon is present.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates all visual styling based on current state and theme.

Handles different visual states:
- Selected: Accent colors and borders
- Locked: Darker background with muted text
- Hover: Light background (when not scrolling)
- Input style: Different padding and border configuration
- Empty value: Italic skewed text

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="cloneForDragDrop"><div class="plugin-name">elements</div><code><span class="field-name">cloneForDragDrop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CellView</a></code><a class="header-anchor" href="#cloneForDragDrop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a visual clone of this cell for drag visualization.
The clone has all the same properties but is marked as a dragging clone.


| Returns | Description |
|---------|-------------|
| [CellView](/api-docs/clay-web/elements/CellView/) | A new CellView with identical appearance |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createDraggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">createDraggingVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#createDraggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="releaseDraggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">releaseDraggingVisual</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseDraggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [ceramic.Visual](/api-docs/clay-web/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="firstEnabledParentScroller"><div class="plugin-name">elements</div><code><span class="field-name">firstEnabledParentScroller</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Scroller/" class="type-link">ceramic.Scroller</a></code><a class="header-anchor" href="#firstEnabledParentScroller"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the first parent scroller that has scrolling enabled.
Used for auto-scrolling during drag operations.


| Returns | Description |
|---------|-------------|
| [ceramic.Scroller](/api-docs/clay-web/ceramic/Scroller/) | The nearest enabled parent Scroller, or null if none found |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="handleDragChange"><div class="plugin-name">elements</div><code><span class="field-name">handleDragChange</span><span class="parenthesis">(</span><span class="arg-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">wasDragging</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleDragChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dragging` | [Bool](/api-docs/clay-web/Bool/) |
| `wasDragging` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateFromDrag"><div class="plugin-name">elements</div><code><span class="field-name">updateFromDrag</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the drag visualization and other cells based on drag position.
Handles:
- Moving the dragged cell visual
- Calculating which cells should shift position
- Determining auto-scroll needs when near container edges

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateOtherCellsFromDrag"><div class="plugin-name">elements</div><code><span class="field-name">updateOtherCellsFromDrag</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateOtherCellsFromDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the positions of other cells in response to dragging.
Cells shift up or down with smooth transitions based on the
dragged cell's position relative to their centers.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scrollFromDragIfNeeded"><div class="plugin-name">elements</div><code><span class="field-name">scrollFromDragIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollFromDragIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs auto-scrolling when dragging near container edges.
Called every frame during drag operations.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

