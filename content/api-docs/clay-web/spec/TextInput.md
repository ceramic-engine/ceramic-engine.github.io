---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: TextInput
target: Clay (Web)
permalink: api-docs/clay-web/spec/TextInput/
---

# TextInput

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/TextInput.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.TextInput</strong> (Interface) → <a href="/api-docs/clay-web/backend/TextInput/">backend.TextInput</a></div>

Backend interface for system text input handling.

This interface manages platform-specific text input methods including
virtual keyboards on mobile devices and IME (Input Method Editor) support
for international text entry.

When text input is started, the backend should show the appropriate
input UI (virtual keyboard, IME window, etc.) and send text events
to the application. The position and size parameters help the platform
position the input UI appropriately.

Text input events are dispatched through the App's event system.

## Instance Members

<div class="signature field-method has-description" id="start"><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">initialText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts text input mode with the system input method.

This typically shows a virtual keyboard on mobile devices or
activates the IME on desktop platforms. The position parameters
help the system avoid covering the input field with the keyboard.



| Name | Type | Description |
|------|------|-------------|
| `initialText` | [String](/api-docs/clay-web/String/) | The initial text to display in the input field  |
| `x` | [Float](/api-docs/clay-web/Float/) | The X position of the input field in screen coordinates  |
| `y` | [Float](/api-docs/clay-web/Float/) | The Y position of the input field in screen coordinates  |
| `w` | [Float](/api-docs/clay-web/Float/) | The width of the input field  |
| `h` | [Float](/api-docs/clay-web/Float/) | The height of the input field |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stop"><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops text input mode and hides the system input method.

This hides the virtual keyboard or deactivates the IME.
Should be called when text input is no longer needed.

