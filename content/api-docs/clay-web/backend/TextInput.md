---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: TextInput
target: Clay (Web)
permalink: api-docs/clay-web/backend/TextInput/
---

# TextInput

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/TextInput.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.TextInput</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spec/TextInput/">spec.TextInput</a></div>

Clay backend implementation for system text input handling.

This class manages the platform-specific text input mechanisms,
including:
- IME (Input Method Editor) support for complex scripts
- Virtual keyboard positioning on mobile platforms
- Hardware keyboard input processing
- Modifier key state tracking (Shift, Ctrl, Meta)

The implementation uses SDL's text input API on native platforms,
which provides proper IME support and handles international text
input correctly.

<div class="see"><strong>See:</strong> spec.TextInput The interface this class implements, ceramic.TextInput For the high-level text input API</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="start"><div class="plugin-name">clay</div><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">initialText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts text input mode.

This activates the system's text input mechanisms including:
- Virtual keyboard on mobile devices
- IME composition window positioning
- Text input event processing

The rectangle parameters help position IME windows and virtual
keyboards near the text being edited.



| Name | Type | Description |
|------|------|-------------|
| `initialText` | [String](/api-docs/clay-web/String/) | Initial text content (currently unused)  |
| `x` | [Float](/api-docs/clay-web/Float/) | X position of the text input area  |
| `y` | [Float](/api-docs/clay-web/Float/) | Y position of the text input area  |
| `w` | [Float](/api-docs/clay-web/Float/) | Width of the text input area (minimum 1 pixel)  |
| `h` | [Float](/api-docs/clay-web/Float/) | Height of the text input area (minimum 1 pixel) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="stop"><div class="plugin-name">clay</div><code><span class="field-name">stop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops text input mode.

This deactivates text input, hiding virtual keyboards and
closing any IME composition windows. The input area is reset
to prevent any lingering visual artifacts.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description has-plugin" id="inputActive"><div class="plugin-name">clay</div><code><span class="field-name">inputActive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether text input mode is currently active

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputRectX"><div class="plugin-name">clay</div><code><span class="field-name">inputRectX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#inputRectX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X position of the text input area (for IME positioning)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputRectY"><div class="plugin-name">clay</div><code><span class="field-name">inputRectY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#inputRectY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y position of the text input area (for IME positioning)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputRectW"><div class="plugin-name">clay</div><code><span class="field-name">inputRectW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#inputRectW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the text input area

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="inputRectH"><div class="plugin-name">clay</div><code><span class="field-name">inputRectH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#inputRectH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the text input area

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleTextInput"><div class="plugin-name">clay</div><code><span class="field-name">handleTextInput</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles text input events from the system.

Processes Unicode text input, including composed characters
from IME systems. Filters out spaces (handled separately)
and forwards the text to the high-level text input system.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-web/String/) | The input text (may be multiple characters for IME) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleKeyDown"><div class="plugin-name">clay</div><code><span class="field-name">handleKeyDown</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles key press events for text editing.

Processes special keys like:
- Navigation (arrows, home, end)
- Editing (backspace, delete, enter)
- Modifiers (shift, ctrl, meta/cmd)

Regular character input is handled by handleTextInput instead.



| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [Int](/api-docs/clay-web/Int/) | Virtual key code  |
| `scanCode` | [Int](/api-docs/clay-web/Int/) | Physical key scan code |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handleKeyUp"><div class="plugin-name">clay</div><code><span class="field-name">handleKeyUp</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles key release events.

Only tracks modifier key releases (Shift, Ctrl, Meta) as these
affect text input behavior and selection. Regular keys are
processed on key down only.



| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [Int](/api-docs/clay-web/Int/) | Virtual key code  |
| `scanCode` | [Int](/api-docs/clay-web/Int/) | Physical key scan code |

