---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: WindowData
target: Clay (Web)
permalink: api-docs/clay-web/elements/WindowData/
---

# WindowData

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/WindowData.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/clay-web/tracker/Model/">tracker.Model</a> → <strong>elements.WindowData</strong> (Class)</div>

Persistent data model for window state and configuration.

This class manages the persistent state of a window including its position, size,
visibility settings, and contained items. It handles the lifecycle of window items
and provides frame-based management for efficient UI updates.

## Features

- Position and size persistence
- Expandable/collapsible state management
- Scrollbar configuration
- Window item lifecycle management
- Frame-based usage tracking
- Overlay and dialog support

## Frame Management

The window data uses a frame-based system where:
1. `beginFrame()` marks the start of a new frame and resets usage tracking
2. Items are added/accessed during the frame
3. `endFrame()` cleans up unused items and updates persistent data

## Usage Examples

```haxe
// Create window data
var windowData = new WindowData();
windowData.x = 100;
windowData.y = 50;
windowData.width = 300;
windowData.height = 400;

// Frame lifecycle
windowData.beginFrame();
// ... add items during frame
windowData.addItem(someWindowItem);
windowData.endFrame();
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/WindowItem/">WindowItem</a>, <a href="/api-docs/clay-web/elements/Window/">Window</a>, <a href="/api-docs/clay-web/elements/ScrollbarVisibility/">ScrollbarVisibility</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="DEFAULT_WIDTH"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_WIDTH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DEFAULT_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default width for new windows when no specific width is set.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DEFAULT_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DEFAULT_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default height for new windows, using ViewSize.auto() for automatic sizing.
The negative value represents ViewSize.auto() which allows the window
to size itself based on its content.

## Instance Members

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">elements</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The X position of the window on screen.
This value is automatically updated when the window is moved.

@default 50

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">elements</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Y position of the window on screen.
This value is automatically updated when the window is moved.

@default 50

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="width"><div class="plugin-name">elements</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the window.
This value is automatically updated when the window is resized.

@default 50

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="height"><div class="plugin-name">elements</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the window.
This value is automatically updated when the window is resized.

@default 50

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="expanded"><div class="plugin-name">elements</div><code><span class="field-name">expanded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#expanded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window is currently expanded (visible) or collapsed.
When false, the window content is hidden but the title bar may remain visible.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="header"><div class="plugin-name">elements</div><code><span class="field-name">header</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#header"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window should display a header/title bar.
When false, the window appears without a title bar.

@default true

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scrollbar"><div class="plugin-name">elements</div><code><span class="field-name">scrollbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/ScrollbarVisibility/" class="type-link">ScrollbarVisibility</a></code><a class="header-anchor" href="#scrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scrollbar visibility mode for the window content.
Controls when and how scrollbars are displayed.

@default AUTO_ADD

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/ScrollbarVisibility/">ScrollbarVisibility</a></div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedContentHeight"><div class="plugin-name">elements</div><code><span class="field-name">computedContentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedContentHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The computed height of the window content area.
This is calculated based on the contained items and layout.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="items"><div class="plugin-name">elements</div><code><span class="field-name">items</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/elements/WindowItem/" class="type-link">WindowItem</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#items"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of window items contained in this window.
Items are managed through the frame lifecycle system.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/WindowItem/">WindowItem</a>, addItem</div>


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="numItems"><div class="plugin-name">elements</div><code><span class="field-name">numItems</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of items currently in the window.
This reflects the number of items added during the current frame.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The theme used for styling this window.
If null, a default theme will be used.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="form"><div class="plugin-name">elements</div><code><span class="field-name">form</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/FormLayout/" class="type-link">FormLayout</a></code><a class="header-anchor" href="#form"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The form layout used to organize window items.
This handles the vertical arrangement of items within the window.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="filler"><div class="plugin-name">elements</div><code><span class="field-name">filler</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#filler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A filler view used for spacing or layout purposes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scrollable"><div class="plugin-name">elements</div><code><span class="field-name">scrollable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scrollable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window content is scrollable.
When true, the window can display scrollbars if needed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="didScrollWithHeight"><div class="plugin-name">elements</div><code><span class="field-name">didScrollWithHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#didScrollWithHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height value when scrolling was last detected.
Used for scroll state management.
@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="used"><div class="plugin-name">elements</div><code><span class="field-name">used</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#used"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this window data is currently being used.
Windows marked as unused are cleaned up during endFrame().

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="justClosed"><div class="plugin-name">elements</div><code><span class="field-name">justClosed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#justClosed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this window was just closed.
Used for tracking recent closure events.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="closable"><div class="plugin-name">elements</div><code><span class="field-name">closable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#closable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window can be closed by the user.
When true, a close button is typically displayed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="movable"><div class="plugin-name">elements</div><code><span class="field-name">movable</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window can be moved by dragging.
When true, the user can drag the window around the screen.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collapsible"><div class="plugin-name">elements</div><code><span class="field-name">collapsible</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collapsible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window can be collapsed/expanded.
When true, the user can toggle the window's expanded state.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlay"><div class="plugin-name">elements</div><code><span class="field-name">overlay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this window is displayed as an overlay.
Overlay windows typically appear above other content with special styling.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlayTheme"><div class="plugin-name">elements</div><code><span class="field-name">overlayTheme</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#overlayTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Special theme used when the window is in overlay mode.
If null, the regular theme is used even for overlays.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlayClicked"><div class="plugin-name">elements</div><code><span class="field-name">overlayClicked</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlayClicked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the overlay background was clicked.
Used for handling overlay dismissal interactions.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="titleAlign"><div class="plugin-name">elements</div><code><span class="field-name">titleAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#titleAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text alignment for the window title.
Controls how the title text is aligned in the title bar.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="targetX"><div class="plugin-name">elements</div><code><span class="field-name">targetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#targetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target X position for window positioning.
Used for animated positioning or special placement logic.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="targetY"><div class="plugin-name">elements</div><code><span class="field-name">targetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#targetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target Y position for window positioning.
Used for animated positioning or special placement logic.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="targetAnchorX"><div class="plugin-name">elements</div><code><span class="field-name">targetAnchorX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#targetAnchorX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target anchor X value for window positioning.
Used for special alignment and positioning calculations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="targetAnchorY"><div class="plugin-name">elements</div><code><span class="field-name">targetAnchorY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#targetAnchorY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Target anchor Y value for window positioning.
Used for special alignment and positioning calculations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="window"><div class="plugin-name">elements</div><code><span class="field-name">window</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#window"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the actual Window visual that displays this data.
This links the data model to its visual representation.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateX"><div class="plugin-name">elements</div><code><span class="field-name">invalidateX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateY"><div class="plugin-name">elements</div><code><span class="field-name">invalidateY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWidth"><div class="plugin-name">elements</div><code><span class="field-name">invalidateWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHeight"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateExpanded"><div class="plugin-name">elements</div><code><span class="field-name">invalidateExpanded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateExpanded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHeader"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateScrollbar"><div class="plugin-name">elements</div><code><span class="field-name">invalidateScrollbar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateScrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginFrame"><div class="plugin-name">elements</div><code><span class="field-name">beginFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a new frame for window processing.

Marks the window as unused and resets the item index for the new frame.
This should be called at the start of each frame before adding items.
Windows that remain unused after endFrame() will be cleaned up.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="endFrame"><div class="plugin-name">elements</div><code><span class="field-name">endFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends the current frame and performs cleanup.

If the window was not used during this frame, it will be destroyed.
Otherwise, the current position is saved to persist window location.
Any unused items beyond the current itemIndex are recycled.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addItem"><div class="plugin-name">elements</div><code><span class="field-name">addItem</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/WindowItem/" class="type-link">WindowItem</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an item to the window at the current item index.

The item is placed at the current itemIndex position, and any existing
item at that position has its previous item recycled. The itemIndex is
then incremented for the next item.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/elements/WindowItem/">WindowItem</a></div>


| Name | Type | Description |
|------|------|-------------|
| `item` | [WindowItem](/api-docs/clay-web/elements/WindowItem/) | The WindowItem to add to the window * |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new WindowData instance with default values.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedX"><div class="plugin-name">elements</div><code><span class="field-name">unobservedX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedY"><div class="plugin-name">elements</div><code><span class="field-name">unobservedY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedWidth"><div class="plugin-name">elements</div><code><span class="field-name">unobservedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHeight"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedExpanded"><div class="plugin-name">elements</div><code><span class="field-name">unobservedExpanded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedExpanded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHeader"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHeader</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedScrollbar"><div class="plugin-name">elements</div><code><span class="field-name">unobservedScrollbar</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/ScrollbarVisibility/" class="type-link">ScrollbarVisibility</a></code><a class="header-anchor" href="#unobservedScrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="itemIndex"><div class="plugin-name">elements</div><code><span class="field-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#itemIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current index for item management during frame processing.
@private

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitXChange"><div class="plugin-name">elements</div><code><span class="field-name">emitXChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitXChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when x field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitYChange"><div class="plugin-name">elements</div><code><span class="field-name">emitYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when y field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWidthChange"><div class="plugin-name">elements</div><code><span class="field-name">emitWidthChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWidthChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when width field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHeightChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHeightChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeightChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when height field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-web/Float/) |
| `previous` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitExpandedChange"><div class="plugin-name">elements</div><code><span class="field-name">emitExpandedChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitExpandedChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when expanded field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHeaderChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHeaderChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeaderChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when header field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-web/Bool/) |
| `previous` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitScrollbarChange"><div class="plugin-name">elements</div><code><span class="field-name">emitScrollbarChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/ScrollbarVisibility/" class="type-link">ScrollbarVisibility</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/elements/ScrollbarVisibility/" class="type-link">ScrollbarVisibility</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScrollbarChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when scrollbar field changes.

| Name | Type |
|------|------|
| `current` | [ScrollbarVisibility](/api-docs/clay-web/elements/ScrollbarVisibility/) |
| `previous` | [ScrollbarVisibility](/api-docs/clay-web/elements/ScrollbarVisibility/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |

