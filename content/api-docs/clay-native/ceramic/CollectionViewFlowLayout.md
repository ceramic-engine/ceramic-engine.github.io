---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: CollectionViewFlowLayout
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/CollectionViewFlowLayout/
---

# CollectionViewFlowLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/CollectionViewFlowLayout.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionViewFlowLayout</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/CollectionViewLayout/">CollectionViewLayout</a></div>

A flow-based layout for CollectionView that arranges items in rows or columns.

Items flow from left to right (vertical scrolling) or top to bottom (horizontal scrolling),
wrapping to the next row/column when they exceed the container bounds.

Features:
- Automatic row/column wrapping
- Configurable item spacing
- Start/end insets for padding
- Item sizing constraints
- Efficient visibility culling

```haxe
var layout = new CollectionViewFlowLayout();
layout.itemSpacingX = 10;
layout.itemSpacingY = 10;
layout.insetStart = 20;
layout.insetEnd = 20;

// Make items take 50% of container width
layout.itemSizing = 0.5;

collectionView.collectionViewLayout = layout;
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/CollectionView/">CollectionView</a>, <a href="/api-docs/clay-native/ceramic/CollectionViewLayout/">CollectionViewLayout</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="itemSizing"><div class="plugin-name">ui</div><code><span class="field-name">itemSizing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#itemSizing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls item sizing relative to container dimensions.
- For vertical scrolling: Controls item width (0.0-1.0 = percentage of container width)
- For horizontal scrolling: Controls item height (0.0-1.0 = percentage of container height)
- Values <= 0: No sizing constraint applied
Default is -1.0 (no constraint).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="insetStart"><div class="plugin-name">ui</div><code><span class="field-name">insetStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#insetStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Padding at the start of the scrollable content.
- For vertical scrolling: Top padding
- For horizontal scrolling: Left padding
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="insetEnd"><div class="plugin-name">ui</div><code><span class="field-name">insetEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#insetEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Padding at the end of the scrollable content.
- For vertical scrolling: Bottom padding
- For horizontal scrolling: Right padding
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemSpacingX"><div class="plugin-name">ui</div><code><span class="field-name">itemSpacingX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#itemSpacingX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal spacing between items in pixels.
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemSpacingY"><div class="plugin-name">ui</div><code><span class="field-name">itemSpacingY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#itemSpacingY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical spacing between items in pixels.
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visibleOutset"><div class="plugin-name">ui</div><code><span class="field-name">visibleOutset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#visibleOutset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra margin beyond the visible area for pre-rendering items.
Items within this margin will be considered visible to reduce pop-in.
Larger values improve smoothness but use more memory.
Default is 0.0.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allItemsVisible"><div class="plugin-name">ui</div><code><span class="field-name">allItemsVisible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allItemsVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, all items are considered visible regardless of scroll position.
Useful for small collections where culling overhead exceeds rendering cost.
Default is false.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="collectionViewLayout"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewLayout</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">frames</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/CollectionViewItemFrame/" class="type-link">CollectionViewItemFrame</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collectionViewLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs the layout calculation for all items.
Arranges items in a flow pattern, wrapping to new rows/columns as needed.
Also calculates the total content size for scrolling.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | The collection view being laid out  |
| `frames` | [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/)<[CollectionViewItemFrame](/api-docs/clay-native/ceramic/CollectionViewItemFrame/)> | Array of item frames to position (x, y will be set) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isFrameVisible"><div class="plugin-name">ui</div><code><span class="field-name">isFrameVisible</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/CollectionViewItemFrame/" class="type-link">CollectionViewItemFrame</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFrameVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if an item frame is within the visible area.
Takes into account the visibleOutset for pre-rendering nearby items.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | The collection view to test against  |
| `frame` | [CollectionViewItemFrame](/api-docs/clay-native/ceramic/CollectionViewItemFrame/) | The item frame to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | true if the frame is visible or within the outset margin |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new flow layout with default settings.

