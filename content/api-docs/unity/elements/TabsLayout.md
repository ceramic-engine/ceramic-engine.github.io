---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TabsLayout
target: Unity
permalink: api-docs/unity/elements/TabsLayout/
---

# TabsLayout

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TabsLayout.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">ceramic.Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">ceramic.Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">ceramic.Layer</a> → <a href="/api-docs/unity/ceramic/View/">ceramic.View</a> → <a href="/api-docs/unity/ceramic/LinearLayout/">ceramic.LinearLayout</a> → <a href="/api-docs/unity/ceramic/RowLayout/">ceramic.RowLayout</a> → <strong>elements.TabsLayout</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a></div>

A horizontal tab layout component for organizing content into multiple pages.

TabsLayout provides a tab-based interface with clickable tab headers that can
switch between different content views. It supports visual feedback for hover
and selection states, individual tab themes, and disabled tabs. The layout
automatically manages tab positioning, borders, and background rendering.

Key features:
- Clickable tab headers with hover effects
- Individual tab theming and state management
- Disabled tab support
- Automatic border and background management
- Integration with window systems
- Configurable margins and spacing
- Depth-based tab ordering for visual layering

Usage example:
```haxe
var tabsLayout = new TabsLayout();
tabsLayout.tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
tabsLayout.selectedIndex = 0;
tabsLayout.marginX = 5;
tabsLayout.marginY = 2;

tabsLayout.onSelectedIndexChange(this, (index, prev) -> {
    trace('Selected tab: ' + index);
    // Switch content based on selected tab
});

add(tabsLayout);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom theme override for this tabs layout. If null, uses the global context theme

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="marginX"><div class="plugin-name">elements</div><code><span class="field-name">marginX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#marginX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal margin extending beyond the tabs layout bounds.

This margin affects border and background rendering, extending the visual
elements beyond the actual tab bounds for seamless integration with
surrounding content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="marginY"><div class="plugin-name">elements</div><code><span class="field-name">marginY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#marginY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical margin extending beyond the tabs layout bounds.

This margin affects border and background rendering, extending the visual
elements beyond the actual tab bounds for seamless integration with
surrounding content.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="windowItem"><div class="plugin-name">elements</div><code><span class="field-name">windowItem</span><span class="operator">:</span> <a href="/api-docs/unity/elements/WindowItem/" class="type-link">WindowItem</a></code><a class="header-anchor" href="#windowItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the WindowItem managing this tabs layout, if applicable.

When the tabs layout is managed by a WindowItem, this property provides
access to the window context for coordination and event handling.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="selectedIndex"><div class="plugin-name">elements</div><code><span class="field-name">selectedIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the currently selected tab. -1 means no tab is selected

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tabs"><div class="plugin-name">elements</div><code><span class="field-name">tabs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of tab labels to display in the tab headers

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tabStates"><div class="plugin-name">elements</div><code><span class="field-name">tabStates</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/TabState/" class="type-link">TabState</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tabStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of states for each tab (NORMAL, DISABLED, etc.)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tabThemes"><div class="plugin-name">elements</div><code><span class="field-name">tabThemes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tabThemes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of custom themes for individual tabs. Uses default theme if null for a tab

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSelectedIndex"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSelectedIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSelectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabs"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabStates"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabStates</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabThemes"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabThemes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabThemes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabViews"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabViews</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHoverIndex"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHoverIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHoverIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new TabsLayout.

Sets up the basic layout properties, creates border elements, and initializes
automatic updates for tab management and styling. Configures the layout for
overlapping tabs with custom depth management.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSelectedIndex"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSelectedIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedSelectedIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabs"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabStates"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabStates</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/TabState/" class="type-link">TabState</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTabStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabThemes"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabThemes</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTabThemes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tabViews"><div class="plugin-name">elements</div><code><span class="field-name">tabViews</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tabViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal array of TextView components representing the tab headers

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabViews"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabViews</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#unobservedTabViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hoverIndex"><div class="plugin-name">elements</div><code><span class="field-name">hoverIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hoverIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index of the tab currently being hovered by the mouse. -1 means no hover

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHoverIndex"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHoverIndex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedHoverIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="appliedTabs"><div class="plugin-name">elements</div><code><span class="field-name">appliedTabs</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#appliedTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cache of previously applied tab labels for change detection

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="beforeBorder"><div class="plugin-name">elements</div><code><span class="field-name">beforeBorder</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#beforeBorder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Border element rendered before the selected tab

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="afterBorder"><div class="plugin-name">elements</div><code><span class="field-name">afterBorder</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#afterBorder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Border element rendered after the selected tab

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="beforeSelectedBackground"><div class="plugin-name">elements</div><code><span class="field-name">beforeSelectedBackground</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#beforeSelectedBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background element rendered before the selected tab area

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="afterSelectedBackground"><div class="plugin-name">elements</div><code><span class="field-name">afterSelectedBackground</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#afterSelectedBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background element rendered after the selected tab area

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="topBackground"><div class="plugin-name">elements</div><code><span class="field-name">topBackground</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#topBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background element rendered above the tabs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bottomBackground"><div class="plugin-name">elements</div><code><span class="field-name">bottomBackground</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#bottomBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Background element rendered below the tabs

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">TabsLayout</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [TabsLayout](/api-docs/unity/elements/TabsLayout/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/unity/elements/Theme/) |
| `previous` | [Theme](/api-docs/unity/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSelectedIndexChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSelectedIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelectedIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when selectedIndex field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabs field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[String](/api-docs/unity/String/)> |
| `previous` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabStatesChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabStatesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/TabState/" class="type-link">TabState</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/TabState/" class="type-link">TabState</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabStatesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabStates field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[TabState](/api-docs/unity/elements/TabState/)> |
| `previous` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[TabState](/api-docs/unity/elements/TabState/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabThemesChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabThemesChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ceramic.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/elements/Theme/" class="type-link">Theme</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabThemesChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabThemes field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[Theme](/api-docs/unity/elements/Theme/)> |
| `previous` | [ceramic.ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/)<[Theme](/api-docs/unity/elements/Theme/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabViewsChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabViewsChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabViewsChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabViews field changes.

| Name | Type |
|------|------|
| `current` | [Array](/api-docs/unity/Array/)<[ceramic.TextView](/api-docs/unity/ceramic/TextView/)> |
| `previous` | [Array](/api-docs/unity/Array/)<[ceramic.TextView](/api-docs/unity/ceramic/TextView/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHoverIndexChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHoverIndexChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHoverIndexChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when hoverIndex field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateTabs"><div class="plugin-name">elements</div><code><span class="field-name">updateTabs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the tab views based on the current tabs array.

Creates new TextView components for new tabs, removes unused tab views,
and updates the visual hierarchy. This method is called automatically
when the tabs array changes.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="renderWindowBackground"><div class="plugin-name">elements</div><code><span class="field-name">renderWindowBackground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#renderWindowBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether this tabs layout should render window background.

This method is used by the window system to determine background rendering
behavior. Always returns true for tabs layouts.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | true to enable window background rendering |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initTabView"><div class="plugin-name">elements</div><code><span class="field-name">initTabView</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">tabView</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TextView/" class="type-link">ceramic.TextView</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initTabView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes event handlers and behavior for a tab view.

Sets up hover tracking, click/touch handling for tab selection,
and automatic touchable state management based on tab state.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | The index of this tab  |
| `tabView` | [ceramic.TextView](/api-docs/unity/ceramic/TextView/) | The TextView component for this tab |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">elements</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs layout of tab views and manages visual depth ordering.

Updates tab depth values to create proper visual layering with the selected
tab on top, positions border elements around the selected tab, and manages
background element positioning based on margins and selection state.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateStyle"><div class="plugin-name">elements</div><code><span class="field-name">updateStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the visual style of all tabs and background elements.

Applies theme-based styling to tab views based on their state (selected,
hovered, disabled, normal). Manages border colors, background colors,
text colors, and transparency. Also handles creation and destruction
of background elements based on theme settings.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

