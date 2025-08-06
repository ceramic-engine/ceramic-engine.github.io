---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TabFocusable
target: Headless
permalink: api-docs/headless/elements/TabFocusable/
---

# TabFocusable

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TabFocusable.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.TabFocusable</strong> (Interface) → <a href="/api-docs/headless/elements/Button/">Button</a>, <a href="/api-docs/headless/elements/FieldView/">FieldView</a></div>

Interface for elements that can participate in Tab key focus navigation.

TabFocusable defines the contract for visual elements that can receive focus
through Tab key navigation managed by the TabFocus component. Implementing
this interface allows elements to be included in the focus traversal order
and provides hooks for focus-related behavior.

Classes implementing this interface typically include form fields, buttons,
and other interactive UI elements that should be accessible via keyboard navigation.

Usage example:
```haxe
class MyCustomField extends View implements TabFocusable {
    public function allowsTabFocus():Bool {
        return enabled && visible; // Only focusable when enabled and visible
    }
    public function tabFocus():Void {
        // Set focus and visual feedback
        screen.focusedVisual = this;
        focused = true;
    }
    public function escapeTabFocus():Void {
        // Handle escape key - lose focus or close dropdown
        screen.focusedVisual = null;
    }
}
```

## Instance Members

<div class="signature field-method has-description has-plugin" id="allowsTabFocus"><div class="plugin-name">elements</div><code><span class="field-name">allowsTabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowsTabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether this element can currently receive Tab focus.

This method is called by TabFocus during navigation to determine if
the element should be included in the focus traversal. Elements can
return false when they are disabled, hidden, or otherwise not ready
to receive focus.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if the element can receive focus, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tabFocus"><div class="plugin-name">elements</div><code><span class="field-name">tabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this element receives focus through Tab navigation.

Implementations should set the appropriate focus state, update visual
appearance, and perform any other actions needed when the element
becomes focused. This typically includes setting screen.focusedVisual.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="escapeTabFocus"><div class="plugin-name">elements</div><code><span class="field-name">escapeTabFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#escapeTabFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the Escape key is pressed while this element has focus.

Implementations can use this to provide escape behavior such as
closing dropdowns, canceling edits, or removing focus. The behavior
is element-specific and should match user expectations for the
particular UI component.

