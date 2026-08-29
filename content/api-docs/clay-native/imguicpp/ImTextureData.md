---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImTextureData
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImTextureData/
---

# ImTextureData

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImTextureData</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureFormat/" class="type-link">ImTextureFormat</a><span class="operator">,</span> <span class="arg-name">w</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `format` | [ImTextureFormat](/api-docs/clay-native/imguicpp/ImTextureFormat/) |
| `w` | [Int](/api-docs/clay-native/Int/) |
| `h` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyPixels"><code><span class="field-name">destroyPixels</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPixels"><code><span class="field-name">getPixels</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPixelsAt"><code><span class="field-name">getPixelsAt</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPixelsAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [cpp.RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[cpp.Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getSizeInBytes"><code><span class="field-name">getSizeInBytes</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSizeInBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPitch"><code><span class="field-name">getPitch</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getPitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTexRef"><code><span class="field-name">getTexRef</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRef/" class="type-link">ImTextureRef</a></code><a class="header-anchor" href="#getTexRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [ImTextureRef](/api-docs/clay-native/imguicpp/ImTextureRef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTexID"><code><span class="field-name">getTexID</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a></code><a class="header-anchor" href="#getTexID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [cpp.UInt64](/api-docs/clay-native/cpp/UInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTexID"><code><span class="field-name">setTexID</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">texId</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTexID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `texId` | [cpp.UInt64](/api-docs/clay-native/cpp/UInt64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setStatus"><code><span class="field-name">setStatus</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureStatus/" class="type-link">ImTextureStatus</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `status` | [ImTextureStatus](/api-docs/clay-native/imguicpp/ImTextureStatus/) |

## Instance Members

<div class="signature field-var has-description" id="uniqueID"><code><span class="field-name">uniqueID</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#uniqueID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    -   // [DEBUG] Sequential index to facilitate identifying a texture when debugging/printing. Unique per atlas.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureStatus/" class="type-link">ImTextureStatus</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

rw   rw  // ImTextureStatus_OK/_WantCreate/_WantUpdates/_WantDestroy. Always use SetStatus() to modify!

<hr class="field-separator" />

<div class="signature field-var has-description" id="backendUserData"><code><span class="field-name">backendUserData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#backendUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

-    rw  // Convenience storage for backend. Some backends may have enough with TexID.

<hr class="field-separator" />

<div class="signature field-var has-description" id="texID"><code><span class="field-name">texID</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt64/" class="type-link">cpp.UInt64</a></code><a class="header-anchor" href="#texID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

r    w   // Backend-specific texture identifier. Always use SetTexID() to modify! The identifier will stored in ImDrawCmd::GetTexID() and passed to backend's RenderDrawData function.

<hr class="field-separator" />

<div class="signature field-var has-description" id="format"><code><span class="field-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureFormat/" class="type-link">ImTextureFormat</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // ImTextureFormat_RGBA32 (default) or ImTextureFormat_Alpha8

<hr class="field-separator" />

<div class="signature field-var has-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Texture width

<hr class="field-separator" />

<div class="signature field-var has-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Texture height

<hr class="field-separator" />

<div class="signature field-var has-description" id="bytesPerPixel"><code><span class="field-name">bytesPerPixel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bytesPerPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // 4 or 1

<hr class="field-separator" />

<div class="signature field-var has-description" id="pixels"><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Pointer to buffer holding 'Width*Height' pixels and 'Width*Height*BytesPerPixels' bytes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="usedRect"><code><span class="field-name">usedRect</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRect/" class="type-link">ImTextureRect</a></code><a class="header-anchor" href="#usedRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Bounding box encompassing all past and queued Updates[].

<hr class="field-separator" />

<div class="signature field-var has-description" id="updateRect"><code><span class="field-name">updateRect</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImTextureRect/" class="type-link">ImTextureRect</a></code><a class="header-anchor" href="#updateRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Bounding box encompassing all queued Updates[].

<hr class="field-separator" />

<div class="signature field-var has-description" id="updates"><code><span class="field-name">updates</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVector_ImTextureRect/" class="type-link">ImVector_ImTextureRect</a></code><a class="header-anchor" href="#updates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Array of individual updates.

<hr class="field-separator" />

<div class="signature field-var has-description" id="unusedFrames"><code><span class="field-name">unusedFrames</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unusedFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // In order to facilitate handling Status==WantDestroy in some backend: this is a count successive frames where the texture was not used. Always >0 when Status==WantDestroy.

<hr class="field-separator" />

<div class="signature field-var has-description" id="refCount"><code><span class="field-name">refCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a></code><a class="header-anchor" href="#refCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Number of contexts using this texture. Used during backend shutdown.

<hr class="field-separator" />

<div class="signature field-var has-description" id="useColors"><code><span class="field-name">useColors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#useColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

w    r   // Tell whether our texture data is known to use colors (rather than just white + alpha).

<hr class="field-separator" />

<div class="signature field-var has-description" id="wantDestroyNextFrame"><code><span class="field-name">wantDestroyNextFrame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#wantDestroyNextFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

rw   -   // [Internal] Queued to set ImTextureStatus_WantDestroy next frame. May still be used in the current frame.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

