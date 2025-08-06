---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ScrollView
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ScrollView/
---

# ScrollView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ScrollView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">View</a> → <strong>ceramic.ScrollView</strong> (Class) → <a href="/api-docs/clay-web/ceramic/CollectionView/">CollectionView</a>, <a href="/api-docs/clay-web/elements/ScrollingLayout/">elements.ScrollingLayout</a></div>

A view that provides scrolling functionality for content that exceeds its bounds.

ScrollView wraps a Scroller component and manages a content view that can be
larger than the scroll view itself. It supports both horizontal and vertical
scrolling, with optional paging behavior.

Key features:
- Horizontal or vertical scrolling
- Optional paging with configurable page size and spacing
- Momentum-based scrolling with customizable thresholds
- Automatic content size management

```haxe
var scrollView = new ScrollView();
scrollView.viewSize(300, 400);
scrollView.contentSize = 800; // Content is taller than view
scrollView.direction = VERTICAL;

// Add content to the contentView
var content = new View();
content.viewSize(300, 800);
content.size(300, 800);
scrollView.contentView.add(content);
```

<div class="see"><strong>See:</strong> Scroller The underlying scrolling component, PagerView For page-based scrolling with view recycling</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="scroller"><div class="plugin-name">ui</div><code><span class="field-name">scroller</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Scroller/" class="type-link">Scroller</a></code><a class="header-anchor" href="#scroller"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The underlying Scroller component that handles touch interaction
and scroll physics. This is automatically created and managed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="contentView"><div class="plugin-name">ui</div><code><span class="field-name">contentView</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">View</a></code><a class="header-anchor" href="#contentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The view that contains the scrollable content.
All scrollable items should be added as children to this view.
The content view is automatically sized based on contentSize and direction.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="contentSize"><div class="plugin-name">ui</div><code><span class="field-name">contentSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#contentSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size of the scrollable content in the scroll direction.
- For VERTICAL scrolling: sets the height of contentView
- For HORIZONTAL scrolling: sets the width of contentView
Values less than 0 are clamped to 0.
Default: -1 (uses view size)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="direction"><div class="plugin-name">ui</div><code><span class="field-name">direction</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#direction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scroll direction (HORIZONTAL or VERTICAL).
This determines which axis is scrollable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pagingEnabled"><div class="plugin-name">ui</div><code><span class="field-name">pagingEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pagingEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable paging of the scroller so that
everytime we stop dragging, it snaps to the closest page.
When enabled, the scroll view will snap to page boundaries
defined by pageSize.
Default: false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pageSize"><div class="plugin-name">ui</div><code><span class="field-name">pageSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `pagingEnabled` is `true`, this is the size of a page.
If kept to `-1` (default), it will use the scroller size.
- For VERTICAL: page height
- For HORIZONTAL: page width
Default: -1 (uses view dimensions)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pageSpacing"><div class="plugin-name">ui</div><code><span class="field-name">pageSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `pagingEnabled` is `true`, this is the spacing
between each page. This adds extra space between pages
that is not part of the page content.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pageMomentumThreshold"><div class="plugin-name">ui</div><code><span class="field-name">pageMomentumThreshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pageMomentumThreshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `pagingEnabled` is `true`, this threshold value
will be used to move to a sibling page if the momentum
is equal or above it. Lower values make it easier to
flip between pages with small gestures.
If kept to `-1` (default), it will use the page size.
Default: -1

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new ScrollView.
Automatically initializes the content view and scroller components.

## Private Members

<div class="signature field-method has-description has-plugin" id="initContentView"><div class="plugin-name">ui</div><code><span class="field-name">initContentView</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initContentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize the content view that will hold scrollable content.
Sets up the parent-child relationship for proper event handling.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initScroller"><div class="plugin-name">ui</div><code><span class="field-name">initScroller</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initScroller"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize the scroller component with the content view.
The scroller handles all touch interaction and scrolling physics.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Layout the scroll view components.
- Positions the scroller to fill the entire view
- Sizes the content view based on direction and contentSize
- Ensures content is at least as large as the view itself

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

