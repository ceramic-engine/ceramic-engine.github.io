---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiTextBuffer
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiTextBuffer/
---

# ImGuiTextBuffer

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiTextBuffer</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="begin"><code><span class="field-name">begin</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#begin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="end"><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Buf is zero-terminated, so end() will point on the zero-terminator

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="size"><code><span class="field-name">size</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="empty"><code><span class="field-name">empty</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#empty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resize"><code><span class="field-name">resize</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Similar to resize(0) on ImVector: empty string but don't free buffer.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `size` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="reserve"><code><span class="field-name">reserve</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">capacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `capacity` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="c_str"><code><span class="field-name">c_str</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#c_str"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="append"><code><span class="field-name">append</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">strEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `str` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `strEnd` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | `null` |

## Instance Members

<div class="signature field-var no-description" id="buf"><code><span class="field-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_char/" class="type-link">ImVector_char</a></code><a class="header-anchor" href="#buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

