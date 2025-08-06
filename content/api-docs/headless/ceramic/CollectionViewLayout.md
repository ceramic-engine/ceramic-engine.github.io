---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: CollectionViewLayout
target: Headless
permalink: api-docs/headless/ceramic/CollectionViewLayout/
---

# CollectionViewLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/CollectionViewLayout.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.CollectionViewLayout</strong> (Interface) → <a href="/api-docs/headless/ceramic/CollectionViewFlowLayout/">CollectionViewFlowLayout</a></div>

Interface for custom CollectionView layout implementations.

A layout is responsible for:
- Positioning items within the collection view
- Calculating content size for scrolling
- Determining item visibility for efficient rendering

The built-in CollectionViewFlowLayout provides a standard grid/flow layout,
but custom layouts can be created for specialized arrangements like:
- Circular/radial layouts
- Masonry/Pinterest-style layouts
- Custom stacking or cascading effects

```haxe
class CustomLayout implements CollectionViewLayout {
    public function new() {}
    public function collectionViewLayout(view:CollectionView, frames:ReadOnlyArray<CollectionViewItemFrame>):Void {
        // Position each frame
        var y = 0.0;
        for (frame in frames) {
            frame.x = 0;
            frame.y = y;
            y += frame.height + 10; // 10px spacing
        }
        // Set content size
        view.contentSize = y;
    }
    public function isFrameVisible(view:CollectionView, frame:CollectionViewItemFrame):Bool {
        // Check if frame intersects viewport
        var scrollY = view.scroller.scrollY;
        return frame.y < scrollY + view.height && frame.y + frame.height > scrollY;
    }
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/CollectionView/">CollectionView</a>, <a href="/api-docs/headless/ceramic/CollectionViewFlowLayout/">CollectionViewFlowLayout</a>, <a href="/api-docs/headless/ceramic/CollectionViewItemFrame/">CollectionViewItemFrame</a></div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="collectionViewLayout"><div class="plugin-name">ui</div><code><span class="field-name">collectionViewLayout</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">frames</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/CollectionViewItemFrame/" class="type-link">CollectionViewItemFrame</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collectionViewLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs layout calculation for all item frames.

This method should:
- Set the x and y position for each frame based on its width/height
- Calculate and set the total content size on the collection view
- Not modify frame width/height (those come from the data source)

The layout runs whenever the collection view size changes or data is reloaded.



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/headless/ceramic/CollectionView/) | The collection view being laid out  |
| `frames` | [ReadOnlyArray](/api-docs/headless/ceramic/ReadOnlyArray/)<[CollectionViewItemFrame](/api-docs/headless/ceramic/CollectionViewItemFrame/)> | Array of frames to position (modify x and y properties) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isFrameVisible"><div class="plugin-name">ui</div><code><span class="field-name">isFrameVisible</span><span class="parenthesis">(</span><span class="arg-name">collectionView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionView/" class="type-link">CollectionView</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/CollectionViewItemFrame/" class="type-link">CollectionViewItemFrame</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFrameVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether a frame is visible within the current viewport.

This method is called frequently during scrolling to determine which
items need to be rendered. Efficient implementation is important.

Should account for:
- Current scroll position
- Collection view bounds
- Any pre-render margins (visibleOutset)



| Name | Type | Description |
|------|------|-------------|
| `collectionView` | [CollectionView](/api-docs/headless/ceramic/CollectionView/) | The collection view to test against  |
| `frame` | [CollectionViewItemFrame](/api-docs/headless/ceramic/CollectionViewItemFrame/) | The frame to check for visibility  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if the frame intersects the visible area |

