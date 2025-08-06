---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TabFocus
target: Headless
permalink: api-docs/headless/elements/TabFocus/
---

# TabFocus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TabFocus.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <strong>elements.TabFocus</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/Component/">ceramic.Component</a></div>

Component for managing keyboard-based focus navigation using Tab key.

TabFocus provides automatic Tab/Shift+Tab navigation between TabFocusable elements
within a visual hierarchy. It handles focus traversal in both forward and backward
directions, and supports Escape key handling for focus escape behavior.

The component automatically finds focusable elements and manages focus transitions
based on their position in the visual hierarchy. It respects the focusRoot boundary
when specified, limiting focus navigation to a specific visual subtree.

Key features:
- Tab key navigation (forward focus)
- Shift+Tab navigation (backward focus)
- Escape key handling for focus escape
- Configurable focus root for bounded navigation
- Automatic detection of TabFocusable elements
- Circular navigation (wraps to beginning/end)

Usage example:
```haxe
var tabFocus = new TabFocus();
tabFocus.focusRoot = myFormContainer; // Optional: limit to this subtree
myWindow.component('tabFocus', tabFocus);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="entity"><div class="plugin-name">elements</div><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual entity this component is attached to

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focusRoot"><div class="plugin-name">elements</div><code><span class="field-name">focusRoot</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#focusRoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional root visual that limits the scope of focus navigation.

When set, tab navigation will only consider TabFocusable elements within
this visual's hierarchy. If null, the entire entity hierarchy is considered.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">elements</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="leftShiftPressed"><div class="plugin-name">elements</div><code><span class="field-name">leftShiftPressed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#leftShiftPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the left Shift key is currently pressed

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rightShiftPressed"><div class="plugin-name">elements</div><code><span class="field-name">rightShiftPressed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rightShiftPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the right Shift key is currently pressed

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="findingWithFocused"><div class="plugin-name">elements</div><code><span class="field-name">findingWithFocused</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#findingWithFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the currently focused visual during navigation search.

Used internally to track position in the hierarchy when finding the next/previous
focusable element.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">elements</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the component is bound to its entity.

Sets up keyboard event listeners for Tab navigation and Escape handling.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleKeyDown"><div class="plugin-name">elements</div><code><span class="field-name">handleKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles key down events for focus navigation.

Processes Tab (forward), Shift+Tab (backward), and Escape key events
when the current focus is within the managed visual hierarchy.



| Name | Type | Description |
|------|------|-------------|
| `key` | [ceramic.Key](/api-docs/headless/ceramic/Key/) | The key event information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleKeyUp"><div class="plugin-name">elements</div><code><span class="field-name">handleKeyUp</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Key/" class="type-link">ceramic.Key</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles key up events to track Shift key state.

Updates the shift key pressed state which determines navigation direction.



| Name | Type | Description |
|------|------|-------------|
| `key` | [ceramic.Key](/api-docs/headless/ceramic/Key/) | The key event information |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focusNextField"><div class="plugin-name">elements</div><code><span class="field-name">focusNextField</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focusNextField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves focus to the next focusable element in the hierarchy.

Searches forward from the currently focused element. If no focusable element
is found after the current one, wraps around to search from the beginning.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focusPrevField"><div class="plugin-name">elements</div><code><span class="field-name">focusPrevField</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focusPrevField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Moves focus to the previous focusable element in the hierarchy.

Searches backward from the currently focused element. If no focusable element
is found before the current one, wraps around to search from the end.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findNextFocusable"><div class="plugin-name">elements</div><code><span class="field-name">findNextFocusable</span><span class="parenthesis">(</span><span class="arg-name">walkVisual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/TabFocusable/" class="type-link">TabFocusable</a></code><a class="header-anchor" href="#findNextFocusable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively searches for the next TabFocusable element in the visual hierarchy.

Performs a depth-first search starting from the given visual. When findingWithFocused
is set, skips elements until that visual is found, then returns the next focusable element.



| Name | Type | Description |
|------|------|-------------|
| `walkVisual` | [ceramic.Visual](/api-docs/headless/ceramic/Visual/) | The visual to start searching from  |

| Returns | Description |
|---------|-------------|
| [TabFocusable](/api-docs/headless/elements/TabFocusable/) | The next TabFocusable element, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findPrevFocusable"><div class="plugin-name">elements</div><code><span class="field-name">findPrevFocusable</span><span class="parenthesis">(</span><span class="arg-name">walkVisual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/TabFocusable/" class="type-link">TabFocusable</a></code><a class="header-anchor" href="#findPrevFocusable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively searches for the previous TabFocusable element in the visual hierarchy.

Performs a reverse depth-first search starting from the given visual. When findingWithFocused
is set, skips elements until that visual is found, then returns the previous focusable element.



| Name | Type | Description |
|------|------|-------------|
| `walkVisual` | [ceramic.Visual](/api-docs/headless/ceramic/Visual/) | The visual to start searching from  |

| Returns | Description |
|---------|-------------|
| [TabFocusable](/api-docs/headless/elements/TabFocusable/) | The previous TabFocusable element, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="findCurrentFocusable"><div class="plugin-name">elements</div><code><span class="field-name">findCurrentFocusable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/TabFocusable/" class="type-link">TabFocusable</a></code><a class="header-anchor" href="#findCurrentFocusable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the currently focused TabFocusable element.

Checks if the currently focused visual implements TabFocusable, or searches
up the parent hierarchy to find a TabFocusable ancestor.


| Returns | Description |
|---------|-------------|
| [TabFocusable](/api-docs/headless/elements/TabFocusable/) | The currently focused TabFocusable element, or null if none |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">elements</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [ceramic.Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">elements</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">ceramic.Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ceramic.Entity](/api-docs/headless/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

