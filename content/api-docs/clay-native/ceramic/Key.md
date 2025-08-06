---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Key
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Key/
---

# Key

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Key.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Key</strong> (Class)</div>

Represents a keyboard key press event with both key code and scan code information.

Key provides two ways to identify a keyboard key:
- KeyCode: Layout-dependent (changes with QWERTY, AZERTY, etc.)
- ScanCode: Layout-independent (physical key position)

This dual representation allows games to support both:
- Localized controls (using key codes that match printed key labels)
- Position-based controls (using scan codes for consistent physical positions)

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Input/">Input</a>, <a href="/api-docs/clay-native/ceramic/KeyCode/">KeyCode</a>, <a href="/api-docs/clay-native/ceramic/ScanCode/">ScanCode</a></div>


## Instance Members

<div class="signature field-var has-description" id="keyCode"><code><span class="field-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a></code><a class="header-anchor" href="#keyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key code (localized key) depends on keyboard mapping (QWERTY, AZERTY, ...)

<hr class="field-separator" />

<div class="signature field-var has-description" id="keyCodeName"><code><span class="field-name">keyCodeName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#keyCodeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Name associated to the key code (localized key)

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanCode"><code><span class="field-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a></code><a class="header-anchor" href="#scanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scan code (US international key) doesn't depend on keyboard mapping (QWERTY, AZERTY, ...)

<hr class="field-separator" />

<div class="signature field-var has-description" id="scanCodeName"><code><span class="field-name">scanCodeName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#scanCodeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Name associated to the scan code (US international key)

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/KeyCode/" class="type-link">KeyCode</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ScanCode/" class="type-link">ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Key instance with the specified key code and scan code.


| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | The layout-dependent key code  |
| `scanCode` | [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | The layout-independent scan code |

## Private Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this key.
Format: "Key(keyCode keyCodeName / scanCode scanCodeName)"

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | String representation of the key |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

