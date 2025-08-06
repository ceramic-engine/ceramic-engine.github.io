---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: CollectionViewItemFrame
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/CollectionViewItemFrame/
---

# CollectionViewItemFrame

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/CollectionViewItemFrame.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionViewItemFrame</strong> (Class)</div>

Represents the position and dimensions of an item in a CollectionView.

Each item in the collection has a corresponding frame that defines where
it should be positioned and how large it should be. The CollectionView
uses this information to:
- Determine which items are visible
- Position item views correctly
- Calculate content size for scrolling

Frames are managed internally by CollectionView and its layout.
The data source provides width/height, while the layout sets x/y positions.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/CollectionView/">CollectionView</a>, <a href="/api-docs/clay-native/ceramic/CollectionViewLayout/">CollectionViewLayout</a>, <a href="/api-docs/clay-native/ceramic/CollectionViewDataSource/">CollectionViewDataSource</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">ui</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X coordinate of the item's position within the content area.
Set by the layout during positioning.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">ui</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y coordinate of the item's position within the content area.
Set by the layout during positioning.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">ui</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the item in pixels.
Should be set by the data source in collectionViewItemFrameAtIndex().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">ui</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the item in pixels.
Should be set by the data source in collectionViewItemFrameAtIndex().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visible"><div class="plugin-name">ui</div><code><span class="field-name">visible</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this item is currently visible in the viewport.
Managed internally by CollectionView based on scroll position.
When false, the associated view may be recycled.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="view"><div class="plugin-name">ui</div><code><span class="field-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">View</a></code><a class="header-anchor" href="#view"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The view currently displaying this item, if any.
Will be null for items that are not visible or when using lazy loading.
Managed internally by CollectionView's view recycling system.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new item frame with the specified dimensions.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/clay-native/Float/) | Initial X position  |
| `y` | [Float](/api-docs/clay-native/Float/) | Initial Y position  |
| `width` | [Float](/api-docs/clay-native/Float/) | Item width  |
| `height` | [Float](/api-docs/clay-native/Float/) | Item height |

## Private Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">ui</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this frame for debugging.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | String in format "Frame(x=X y=Y w=WIDTH h=HEIGHT)" |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | ceramic.CollectionView |

