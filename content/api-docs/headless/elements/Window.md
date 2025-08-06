---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Window
target: Headless
permalink: api-docs/headless/elements/Window/
---

# Window

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Window.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/headless/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/headless/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/headless/ceramic/View/">ceramic.View</a> → <a href="/api-docs/headless/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/headless/ceramic/ColumnLayout/">ceramic.ColumnLayout</a> → <strong>elements.Window</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/tracker/Observable/">tracker.Observable</a></div>

A draggable window container for UI elements.

Provides a standard window interface with:
- Draggable header bar
- Optional title text
- Expand/collapse functionality
- Close button support
- Automatic state persistence (position, size, collapsed state)
- Theme customization
- Content scrolling support

Windows automatically save their state to the Context's user data
and restore it when recreated with the same ID.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/Context/">Context</a>, <a href="/api-docs/headless/elements/WindowData/">WindowData</a>, ColumnLayout</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="HEADER_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">HEADER_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HEADER_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the window header bar in pixels

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this window

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="contentView"><div class="plugin-name">elements</div><code><span class="field-name">contentView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#contentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The main content view displayed in the window body

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="title"><div class="plugin-name">elements</div><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Title text displayed in the window header

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="closable"><div class="plugin-name">elements</div><code><span class="field-name">closable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#closable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window shows a close button

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="collapsible"><div class="plugin-name">elements</div><code><span class="field-name">collapsible</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collapsible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window can be collapsed/expanded

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="header"><div class="plugin-name">elements</div><code><span class="field-name">header</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#header"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to show the window header bar

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="titleAlign"><div class="plugin-name">elements</div><code><span class="field-name">titleAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#titleAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alignment of the title text in the header

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="scrolls"><div class="plugin-name">elements</div><code><span class="field-name">scrolls</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#scrolls"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computed property that returns true if the content view is scrollable.


<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="movable"><div class="plugin-name">elements</div><code><span class="field-name">movable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#movable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the window can be dragged by its header

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="overlay"><div class="plugin-name">elements</div><code><span class="field-name">overlay</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#overlay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional overlay quad for modal behavior

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateContentView"><div class="plugin-name">elements</div><code><span class="field-name">invalidateContentView</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateContentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTitle"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTitle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateClosable"><div class="plugin-name">elements</div><code><span class="field-name">invalidateClosable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateClosable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateCollapsible"><div class="plugin-name">elements</div><code><span class="field-name">invalidateCollapsible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateCollapsible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHeader"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTitleAlign"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTitleAlign</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTitleAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateScrolls"><div class="plugin-name">elements</div><code><span class="field-name">invalidateScrolls</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateScrolls"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">elements</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Window with default styling and behavior.
Sets up the header, body, and interaction handlers.

## Private Members

<div class="signature field-var has-description has-plugin" id="FONT_PRE_RENDERED_SIZE"><div class="plugin-name">elements</div><code><span class="field-name">FONT_PRE_RENDERED_SIZE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#FONT_PRE_RENDERED_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pre-rendered font size for title text

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="TITLE_TEXT_SIZE"><div class="plugin-name">elements</div><code><span class="field-name">TITLE_TEXT_SIZE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TITLE_TEXT_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display size for title text

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DEFAULT_X"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_X</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEFAULT_X"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default X position for new windows

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DEFAULT_Y"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_Y</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DEFAULT_Y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default Y position for new windows

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DRAG_THRESHOLD"><div class="plugin-name">elements</div><code><span class="field-name">DRAG_THRESHOLD</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DRAG_THRESHOLD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum drag distance to start window movement

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedContentView"><div class="plugin-name">elements</div><code><span class="field-name">unobservedContentView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#unobservedContentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTitle"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTitle</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#unobservedTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedClosable"><div class="plugin-name">elements</div><code><span class="field-name">unobservedClosable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedClosable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedCollapsible"><div class="plugin-name">elements</div><code><span class="field-name">unobservedCollapsible</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedCollapsible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHeader"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHeader</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTitleAlign"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTitleAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#unobservedTitleAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedScrolls"><div class="plugin-name">elements</div><code><span class="field-name">unobservedScrolls</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedScrolls"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="headerView"><div class="plugin-name">elements</div><code><span class="field-name">headerView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/RowLayout/" class="type-link">ceramic.RowLayout</a></code><a class="header-anchor" href="#headerView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="expandCollapseClick"><div class="plugin-name">elements</div><code><span class="field-name">expandCollapseClick</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Click/" class="type-link">ceramic.Click</a></code><a class="header-anchor" href="#expandCollapseClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="headerViewDoubleClick"><div class="plugin-name">elements</div><code><span class="field-name">headerViewDoubleClick</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/DoubleClick/" class="type-link">ceramic.DoubleClick</a></code><a class="header-anchor" href="#headerViewDoubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="closeClick"><div class="plugin-name">elements</div><code><span class="field-name">closeClick</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Click/" class="type-link">ceramic.Click</a></code><a class="header-anchor" href="#closeClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="bodyView"><div class="plugin-name">elements</div><code><span class="field-name">bodyView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ColumnLayout/" class="type-link">ceramic.ColumnLayout</a></code><a class="header-anchor" href="#bodyView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="titleView"><div class="plugin-name">elements</div><code><span class="field-name">titleView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextView/" class="type-link">ceramic.TextView</a></code><a class="header-anchor" href="#titleView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="expandView"><div class="plugin-name">elements</div><code><span class="field-name">expandView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#expandView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="expandTriangle"><div class="plugin-name">elements</div><code><span class="field-name">expandTriangle</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/AntialiasedTriangle/" class="type-link">ceramic.AntialiasedTriangle</a></code><a class="header-anchor" href="#expandTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="closeView"><div class="plugin-name">elements</div><code><span class="field-name">closeView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#closeView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="closeCross"><div class="plugin-name">elements</div><code><span class="field-name">closeCross</span><span class="operator">:</span> <a href="/api-docs/headless/elements/CrossX/" class="type-link">CrossX</a></code><a class="header-anchor" href="#closeCross"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="windowPosStartX"><div class="plugin-name">elements</div><code><span class="field-name">windowPosStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowPosStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="windowPosStartY"><div class="plugin-name">elements</div><code><span class="field-name">windowPosStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowPosStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragPointerStartX"><div class="plugin-name">elements</div><code><span class="field-name">dragPointerStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragPointerStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragPointerStartY"><div class="plugin-name">elements</div><code><span class="field-name">dragPointerStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragPointerStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="dragging"><div class="plugin-name">elements</div><code><span class="field-name">dragging</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Window</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Window](/api-docs/headless/elements/Window/) |
| `fromSerializedField` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/headless/elements/Theme/) |
| `previous` | [Theme](/api-docs/headless/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitContentViewChange"><div class="plugin-name">elements</div><code><span class="field-name">emitContentViewChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitContentViewChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when contentView field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.View](/api-docs/headless/ceramic/View/) |
| `previous` | [ceramic.View](/api-docs/headless/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTitleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTitleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTitleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when title field changes.

| Name | Type |
|------|------|
| `current` | [String](/api-docs/headless/String/) |
| `previous` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitClosableChange"><div class="plugin-name">elements</div><code><span class="field-name">emitClosableChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClosableChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when closable field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitCollapsibleChange"><div class="plugin-name">elements</div><code><span class="field-name">emitCollapsibleChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCollapsibleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when collapsible field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHeaderChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHeaderChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeaderChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when header field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTitleAlignChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTitleAlignChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTitleAlignChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when titleAlign field changes.

| Name | Type |
|------|------|
| `current` | Anonymous |
| `previous` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitScrollsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitScrollsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitScrollsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when scrolls field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitExpandCollapseClick"><div class="plugin-name">elements</div><code><span class="field-name">emitExpandCollapseClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitExpandCollapseClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the expand/collapse button is clicked

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHeaderDoubleClick"><div class="plugin-name">elements</div><code><span class="field-name">emitHeaderDoubleClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHeaderDoubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the header is double-clicked

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitClose"><div class="plugin-name">elements</div><code><span class="field-name">emitClose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitClose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the close button is clicked

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="headerDown"><div class="plugin-name">elements</div><code><span class="field-name">headerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#headerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/headless/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="headerMove"><div class="plugin-name">elements</div><code><span class="field-name">headerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#headerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/headless/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="headerUp"><div class="plugin-name">elements</div><code><span class="field-name">headerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#headerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/headless/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="contentViewChange"><div class="plugin-name">elements</div><code><span class="field-name">contentViewChange</span><span class="parenthesis">(</span><span class="arg-name">contentView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a><span class="operator">,</span> <span class="arg-name">prevContentView</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/View/" class="type-link">ceramic.View</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#contentViewChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `contentView` | [ceramic.View](/api-docs/headless/ceramic/View/) |
| `prevContentView` | [ceramic.View](/api-docs/headless/ceramic/View/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="titleChange"><div class="plugin-name">elements</div><code><span class="field-name">titleChange</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">prevTitle</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#titleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `title` | [String](/api-docs/headless/String/) |
| `prevTitle` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="titleAlignChange"><div class="plugin-name">elements</div><code><span class="field-name">titleAlignChange</span><span class="parenthesis">(</span><span class="arg-name">titleAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">prevTitleAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#titleAlignChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `titleAlign` | Anonymous |
| `prevTitleAlign` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="closableChange"><div class="plugin-name">elements</div><code><span class="field-name">closableChange</span><span class="parenthesis">(</span><span class="arg-name">closable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">prevClosable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closableChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `closable` | [Bool](/api-docs/headless/Bool/) |
| `prevClosable` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="collapsibleChange"><div class="plugin-name">elements</div><code><span class="field-name">collapsibleChange</span><span class="parenthesis">(</span><span class="arg-name">collapsible</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">prevCollapsible</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#collapsibleChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `collapsible` | [Bool](/api-docs/headless/Bool/) |
| `prevCollapsible` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="headerChange"><div class="plugin-name">elements</div><code><span class="field-name">headerChange</span><span class="parenthesis">(</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">prevHeader</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#headerChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `header` | [Bool](/api-docs/headless/Bool/) |
| `prevHeader` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

