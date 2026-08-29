---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImDrawList
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImDrawList/
---

# ImDrawList

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImDrawList</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="pushClipRect"><code><span class="field-name">pushClipRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">clipRectMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">clipRectMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">intersectWithCurrentClipRect</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushClipRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Render-level scissoring. This is passed down to your render function but not used for CPU-side coarse clipping. Prefer using higher-level ImGui::PushClipRect() to affect logic (hit-testing and widget culling)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `clipRectMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `clipRectMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `intersectWithCurrentClipRect` | [Bool](/api-docs/clay-native/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushClipRectFullScreen"><code><span class="field-name">pushClipRectFullScreen</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushClipRectFullScreen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popClipRect"><code><span class="field-name">popClipRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popClipRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushTexture"><code><span class="field-name">pushTexture</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `texRef` | [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popTexture"><code><span class="field-name">popTexture</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getClipRectMin"><code><span class="field-name">getClipRectMin</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getClipRectMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getClipRectMax"><code><span class="field-name">getClipRectMax</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getClipRectMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addLineEx"><code><span class="field-name">addLineEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLineEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addLine"><code><span class="field-name">addLine</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addLineHEx"><code><span class="field-name">addLineHEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">minX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">maxX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLineHEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `minX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `maxX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `y` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addLineH"><code><span class="field-name">addLineH</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">minX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">maxX</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLineH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `minX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `maxX` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `y` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addLineVEx"><code><span class="field-name">addLineVEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">minY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">maxY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLineVEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `x` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `minY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `maxY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addLineV"><code><span class="field-name">addLineV</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">minY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">maxY</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addLineV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `x` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `minY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `maxY` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRectEx"><code><span class="field-name">addRectEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRectEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

a: upper-left, b: lower-right (== upper-left + size)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `rounding` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |
| `flags` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRect"><code><span class="field-name">addRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied rounding = 0.0f, thickness = 1.0f, flags = 0

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRectFilledEx"><code><span class="field-name">addRectFilledEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRectFilledEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

a: upper-left, b: lower-right (== upper-left + size)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `rounding` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `flags` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addRectFilled"><code><span class="field-name">addRectFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRectFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied rounding = 0.0f, flags = 0

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addRectFilledMultiColor"><code><span class="field-name">addRectFilledMultiColor</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">colUprLeft</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">colUprRight</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">colBotRight</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">colBotLeft</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRectFilledMultiColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `colUprLeft` | [UInt](/api-docs/clay-native/UInt/) |
| `colUprRight` | [UInt](/api-docs/clay-native/UInt/) |
| `colBotRight` | [UInt](/api-docs/clay-native/UInt/) |
| `colBotLeft` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addQuadEx"><code><span class="field-name">addQuadEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addQuadEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addQuad"><code><span class="field-name">addQuad</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addQuadFilled"><code><span class="field-name">addQuadFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addQuadFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addTriangleEx"><code><span class="field-name">addTriangleEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTriangleEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addTriangle"><code><span class="field-name">addTriangle</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTriangle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addTriangleFilled"><code><span class="field-name">addTriangleFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTriangleFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addCircleEx"><code><span class="field-name">addCircleEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCircleEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addCircle"><code><span class="field-name">addCircle</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCircle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied num_segments = 0, thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addCircleFilled"><code><span class="field-name">addCircleFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCircleFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addNgonEx"><code><span class="field-name">addNgonEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addNgonEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addNgon"><code><span class="field-name">addNgon</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addNgon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |
| `numSegments` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addNgonFilled"><code><span class="field-name">addNgonFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addNgonFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |
| `numSegments` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addEllipseEx"><code><span class="field-name">addEllipseEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEllipseEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `rot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addEllipse"><code><span class="field-name">addEllipse</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEllipse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied rot = 0.0f, num_segments = 0, thickness = 1.0f

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addEllipseFilledEx"><code><span class="field-name">addEllipseFilledEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEllipseFilledEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `rot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addEllipseFilled"><code><span class="field-name">addEllipseFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEllipseFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied rot = 0.0f, num_segments = 0

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addTextEx"><code><span class="field-name">addTextEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">textBegin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTextEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `textBegin` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `textEnd` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | `null` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addText"><code><span class="field-name">addText</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">textBegin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied text_end = NULL

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |
| `textBegin` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addTextImFontPtrEx"><code><span class="field-name">addTextImFontPtrEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">fontSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">textBegin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wrapWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cpuFineClipRect</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTextImFontPtrEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `font` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `fontSize` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `textBegin` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `textEnd` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | `null` |
| `wrapWidth` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `cpuFineClipRect` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | `null` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addTextImFontPtr"><code><span class="field-name">addTextImFontPtr</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">fontSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">textBegin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addTextImFontPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied text_end = NULL, wrap_width = 0.0f, cpu_fine_clip_rect = NULL

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `font` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `fontSize` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |
| `textBegin` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addBezierCubic"><code><span class="field-name">addBezierCubic</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBezierCubic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cubic Bezier (4 control points)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addBezierQuadratic"><code><span class="field-name">addBezierQuadratic</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addBezierQuadratic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Quadratic Bezier (3 control points)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addPolyline"><code><span class="field-name">addPolyline</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">numPoints</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addPolyline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `points` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `numPoints` | [Int](/api-docs/clay-native/Int/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `flags` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addConvexPolyFilled"><code><span class="field-name">addConvexPolyFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">numPoints</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addConvexPolyFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `points` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `numPoints` | [Int](/api-docs/clay-native/Int/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addConcavePolyFilled"><code><span class="field-name">addConcavePolyFilled</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">points</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">numPoints</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addConcavePolyFilled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `points` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `numPoints` | [Int](/api-docs/clay-native/Int/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addImageEx"><code><span class="field-name">addImageEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addImageEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `texRef` | [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addImage"><code><span class="field-name">addImage</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied uv_min = ImVec2(0, 0), uv_max = ImVec2(1, 1), col = IM_COL32_WHITE

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `texRef` | [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addImageQuadEx"><code><span class="field-name">addImageQuadEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addImageQuadEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `texRef` | [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uv1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uv2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uv3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uv4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addImageQuad"><code><span class="field-name">addImageQuad</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">p1</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addImageQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied uv1 = ImVec2(0, 0), uv2 = ImVec2(1, 0), uv3 = ImVec2(1, 1), uv4 = ImVec2(0, 1), col = IM_COL32_WHITE

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `texRef` | [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |
| `p1` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addImageRounded"><code><span class="field-name">addImageRounded</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">rounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addImageRounded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `texRef` | [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) | |
| `pMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `pMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `uvMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `uvMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `rounding` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `flags` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathClear"><code><span class="field-name">pathClear</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathClear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathLineTo"><code><span class="field-name">pathLineTo</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathLineTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathLineToMergeDuplicate"><code><span class="field-name">pathLineToMergeDuplicate</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathLineToMergeDuplicate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathFillConvex"><code><span class="field-name">pathFillConvex</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathFillConvex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathFillConcave"><code><span class="field-name">pathFillConcave</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathFillConcave"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathStroke"><code><span class="field-name">pathStroke</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thickness</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathStroke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `col` | [UInt](/api-docs/clay-native/UInt/) | |
| `thickness` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `1.0` |
| `flags` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathArcTo"><code><span class="field-name">pathArcTo</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathArcTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aMin` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aMax` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathArcToFast"><code><span class="field-name">pathArcToFast</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMinOf12</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">aMaxOf12</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathArcToFast"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Use precomputed angles for a 12 steps circle

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aMinOf12` | [Int](/api-docs/clay-native/Int/) |
| `aMaxOf12` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathEllipticalArcToEx"><code><span class="field-name">pathEllipticalArcToEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">rot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathEllipticalArcToEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ellipse

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `radius` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `rot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aMin` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `aMax` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathEllipticalArcTo"><code><span class="field-name">pathEllipticalArcTo</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">center</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">radius</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">rot</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">,</span> <span class="arg-name">aMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathEllipticalArcTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied num_segments = 0

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `center` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `radius` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `rot` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aMin` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |
| `aMax` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathBezierCubicCurveTo"><code><span class="field-name">pathBezierCubicCurveTo</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p4</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathBezierCubicCurveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cubic Bezier (4 control points)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p4` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pathBezierQuadraticCurveTo"><code><span class="field-name">pathBezierQuadraticCurveTo</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">p2</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">p3</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numSegments</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathBezierQuadraticCurveTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Quadratic Bezier (3 control points)

| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `p2` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `p3` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `numSegments` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pathRect"><code><span class="field-name">pathRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">rectMin</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">rectMax</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pathRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `rectMin` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `rectMax` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) | |
| `rounding` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) | `0.0` |
| `flags` | [Int](/api-docs/clay-native/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addCallbackEx"><code><span class="field-name">addCallbackEx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userdata</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userdataSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/SizeT/" class="type-link">cpp.SizeT</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCallbackEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `callback` | [ImGuiOpaqueCallback](/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/) | |
| `userdata` | [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Void](/api-docs/clay-native/cpp/Void/)> | `null` |
| `userdataSize` | [cpp.SizeT](/api-docs/clay-native/cpp/SizeT/) | `0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addCallback"><code><span class="field-name">addCallback</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/" class="type-link">ImGuiOpaqueCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Implied userdata = NULL, userdata_size = 0

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `callback` | [ImGuiOpaqueCallback](/api-docs/clay-native/imguicpp/ImGuiOpaqueCallback/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addDrawCmd"><code><span class="field-name">addDrawCmd</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addDrawCmd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is useful if you need to forcefully create a new draw call (to allow for dependent rendering / blending). Otherwise primitives are merged into the same draw-call as much as possible

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cloneOutput"><code><span class="field-name">cloneOutput</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#cloneOutput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a clone of the CmdBuffer/IdxBuffer/VtxBuffer. For multi-threaded rendering, consider using `imgui_threaded_rendering` from https://github.com/ocornut/imgui_club instead.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="channelsSplit"><code><span class="field-name">channelsSplit</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#channelsSplit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `count` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="channelsMerge"><code><span class="field-name">channelsMerge</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#channelsMerge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="channelsSetCurrent"><code><span class="field-name">channelsSetCurrent</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#channelsSetCurrent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `n` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primReserve"><code><span class="field-name">primReserve</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">idxCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vtxCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primReserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `idxCount` | [Int](/api-docs/clay-native/Int/) |
| `vtxCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primUnreserve"><code><span class="field-name">primUnreserve</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">idxCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vtxCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primUnreserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `idxCount` | [Int](/api-docs/clay-native/Int/) |
| `vtxCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="primRect"><code><span class="field-name">primRect</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Axis aligned rectangle (composed of two triangles)

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `a` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `b` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primRectUV"><code><span class="field-name">primRectUV</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvA</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvB</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primRectUV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `a` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `b` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvA` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvB` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primQuadUV"><code><span class="field-name">primQuadUV</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvA</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvB</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvC</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uvD</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primQuadUV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `a` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `b` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `c` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `d` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvA` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvB` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvC` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uvD` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primWriteVtx"><code><span class="field-name">primWriteVtx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primWriteVtx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uv` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primWriteIdx"><code><span class="field-name">primWriteIdx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primWriteIdx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `idx` | [cpp.UInt16](/api-docs/clay-native/cpp/UInt16/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="primVtx"><code><span class="field-name">primVtx</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#primVtx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write vertex with unique index

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pos` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `uv` | [ImVec2](/api-docs/clay-native/imguicpp/ImVec2/) |
| `col` | [UInt](/api-docs/clay-native/UInt/) |

## Instance Members

<div class="signature field-var has-description" id="cmdBuffer"><code><span class="field-name">cmdBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImDrawCmd/" class="type-link">ImVector_ImDrawCmd</a></code><a class="header-anchor" href="#cmdBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Draw commands. Typically 1 command = 1 GPU draw call, unless the command is a callback.

<hr class="field-separator" />

<div class="signature field-var has-description" id="idxBuffer"><code><span class="field-name">idxBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImDrawIdx/" class="type-link">ImVector_ImDrawIdx</a></code><a class="header-anchor" href="#idxBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index buffer. Each command consume ImDrawCmd::ElemCount of those

<hr class="field-separator" />

<div class="signature field-var has-description" id="vtxBuffer"><code><span class="field-name">vtxBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImDrawVert/" class="type-link">ImVector_ImDrawVert</a></code><a class="header-anchor" href="#vtxBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertex buffer.

<hr class="field-separator" />

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flags, you may poke into these to adjust anti-aliasing settings per-primitive.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

