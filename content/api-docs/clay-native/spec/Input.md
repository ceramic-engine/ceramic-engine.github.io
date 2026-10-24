---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Input
target: Clay (Native)
permalink: api-docs/clay-native/spec/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Input.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Input</strong> (Interface) → <a href="/api-docs/clay-native/backend/Input/">backend.Input</a></div>

Backend interface for input handling.

This interface is currently empty as input events are handled through
the backend's event system and Screen interface. Input events (mouse,
touch, keyboard, gamepad) are dispatched directly to the App instance.

The interface exists for potential future extensions and to maintain
consistency with the backend architecture where each subsystem has
its own interface.

<div class="see"><strong>See:</strong> ceramic.Input for the main input handling system, spec.Screen for input event dispatching</div>


## Instance Members

<div class="signature field-method has-description" id="keyCodeForScanCode"><code><span class="field-name">keyCodeForScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ceramic.ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">ceramic.KeyCode</a></code><a class="header-anchor" href="#keyCodeForScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key code produced by the physical key `scanCode` with the current keyboard
layout (the letter printed on that key), or `KeyCode.UNKNOWN` when the
backend can't tell.

| Name | Type |
|------|------|
| `scanCode` | [ceramic.ScanCode](/api-docs/clay-native/ceramic/ScanCode/) |

| Returns |
|---------|
| [ceramic.KeyCode](/api-docs/clay-native/ceramic/KeyCode/) |

