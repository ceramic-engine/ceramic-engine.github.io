---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: KeyBinding
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/KeyBinding/
---

# KeyBinding

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/KeyBinding.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.KeyBinding</strong> (Class)</div>

Represents a keyboard shortcut binding that triggers when a specific key combination is pressed.

KeyBinding monitors keyboard input and triggers an event when its assigned
key combination is activated. It supports modifier keys (Shift, Cmd/Ctrl)
combined with regular keys, and handles platform-specific differences
(e.g., Cmd on macOS vs Ctrl on Windows/Linux).

Note: KeyBinding instances are typically created and managed by KeyBindings,
not instantiated directly.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/KeyBindings/">KeyBindings</a>, <a href="/api-docs/clay-native/ceramic/KeyAcceleratorItem/">KeyAcceleratorItem</a></div>


## Instance Members

<div class="signature field-var has-description" id="accelerator"><code><span class="field-name">accelerator</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#accelerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The key combination that triggers this binding.
Read-only array of KeyAcceleratorItem elements that must all be pressed together.

<hr class="field-separator" />

<div class="signature field-var has-description" id="bindings"><code><span class="field-name">bindings</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyBindings/" class="type-link">KeyBindings</a></code><a class="header-anchor" href="#bindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parent KeyBindings instance that manages this binding.
Null if this binding is not part of a KeyBindings collection.

## Private Members

<div class="signature field-var no-description" id="pressedItems"><code><span class="field-name">pressedItems</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pressedItems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="matches"><code><span class="field-name">matches</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="leftShiftPressed"><code><span class="field-name">leftShiftPressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#leftShiftPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rightShiftPressed"><code><span class="field-name">rightShiftPressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rightShiftPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="disableIfShiftPressed"><code><span class="field-name">disableIfShiftPressed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disableIfShiftPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitTrigger"><code><span class="field-name">emitTrigger</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTrigger"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when the key combination is pressed.
The event fires once when all keys in the combination are pressed together.
@event trigger

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindKeyboardEvents"><code><span class="field-name">bindKeyboardEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyboardEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindScanCode"><code><span class="field-name">bindScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindKeyCode"><code><span class="field-name">bindKeyCode</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="operator">,</span> <span class="arg-name">itemIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) |
| `itemIndex` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindShift"><code><span class="field-name">bindShift</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindShift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkStatus"><code><span class="field-name">checkStatus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checkStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">accelerator</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bindings</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyBindings/" class="type-link">KeyBindings</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `accelerator` | [Array](/api-docs/clay-native/Array/)<Anonymous> | |
| `bindings` | [KeyBindings](/api-docs/clay-native/ceramic/KeyBindings/) | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.KeyBindings |

