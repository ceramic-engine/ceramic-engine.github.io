---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: NativeMac
target: Clay (Native)
permalink: api-docs/clay-native/backend/NativeMac/
---

# NativeMac

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/NativeMac.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.NativeMac</strong> (extern class)</div>

Native macOS-specific functionality for the Clay backend.

This extern class provides bindings to native macOS APIs through
C++ code (linc_NativeMac.h).

The class is marked with @:keep to ensure it's not removed by DCE
(Dead Code Elimination) since it's referenced from native code.

## Static Members

<div class="signature field-method has-description has-plugin" id="setAppleMomentumScrollSupported"><div class="plugin-name">clay</div><code><span class="field-name">setAppleMomentumScrollSupported</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAppleMomentumScrollSupported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enables or disables Apple's momentum scrolling behavior.

Momentum scrolling provides the characteristic "bounce" effect
when scrolling past content boundaries on macOS. This can be
disabled for applications that want more direct scroll control.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Bool](/api-docs/clay-native/Bool/) | true to enable momentum scrolling, false to disable |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_NativeMac.h" |
| `:build` | bindhx.Linc.touch() |
| `:build` | bindhx.Linc.xml("NativeMac", "./") |

