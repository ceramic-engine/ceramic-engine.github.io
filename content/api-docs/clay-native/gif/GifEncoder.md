---
layout: api-docs
category: api-docs
subCategory: doc
menu: Gif
title: GifEncoder
target: Clay (Native)
permalink: api-docs/clay-native/gif/GifEncoder/
---

# GifEncoder

<div class="view-source"><a href="https://github.com/ceramic-engine/gif/blob/master/gif/GifEncoder.hx">View source</a></div>

<div class="type-hierarchy"><strong>gif.GifEncoder</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description has-plugin" id="clamp"><div class="plugin-name">gif</div><code><span class="field-name">clamp</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clamp a value between a and b and return the clamped version

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/clay-native/Float/) |
| `a` | [Float](/api-docs/clay-native/Float/) |
| `b` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

## Instance Members

<div class="signature field-method has-description has-plugin" id="print"><div class="plugin-name">gif</div><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows a custom print handler for error messages.
Defaults to Sys.println on sys targets, and trace otherwise.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="start"><div class="plugin-name">gif</div><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="add"><div class="plugin-name">gif</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="operator">,</span> <span class="arg-name">frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/gif/GifFrame/" class="type-link">GifFrame</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |
| `frame` | [GifFrame](/api-docs/clay-native/gif/GifFrame/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="commit"><div class="plugin-name">gif</div><code><span class="field-name">commit</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#commit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">gif</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">_frame_width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">_frame_height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">_framerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">_repeat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">GifRepeat.Infinite</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">_quality</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a gif encoder with options:

frame width/height:
Default is 0, required

framerate:
This is used if an added frame has a delay that is negative.

repeat:
Default is 0 (no repeat); -1 means play indefinitely.
Use GifRepeat for clarity

quality:
Sets quality of color quantization (conversion of images to
the maximum 256 colors allowed by the GIF specification). Lower values (minimum = 1)
produce better colors, but slow processing significantly. Higher values will speed
up the quantization pass at the cost of lower image quality (maximum = 100).

| Name | Type | Default |
|------|------|---------|
| `_frame_width` | [Int](/api-docs/clay-native/Int/) | |
| `_frame_height` | [Int](/api-docs/clay-native/Int/) | |
| `_framerate` | [Float](/api-docs/clay-native/Float/) | |
| `_repeat` | [Int](/api-docs/clay-native/Int/) | `GifRepeat.Infinite` |
| `_quality` | [Int](/api-docs/clay-native/Int/) | `10` |

## Private Members

<div class="signature field-var no-description has-plugin" id="width"><div class="plugin-name">gif</div><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="height"><div class="plugin-name">gif</div><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="framerate"><div class="plugin-name">gif</div><code><span class="field-name">framerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#framerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="repeat"><div class="plugin-name">gif</div><code><span class="field-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#repeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="colorDepth"><div class="plugin-name">gif</div><code><span class="field-name">colorDepth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="paletteSize"><div class="plugin-name">gif</div><code><span class="field-name">paletteSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#paletteSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="sampleInterval"><div class="plugin-name">gif</div><code><span class="field-name">sampleInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sampleInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pixels"><div class="plugin-name">gif</div><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="indexedPixels"><div class="plugin-name">gif</div><code><span class="field-name">indexedPixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a></code><a class="header-anchor" href="#indexedPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="colorTab"><div class="plugin-name">gif</div><code><span class="field-name">colorTab</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a></code><a class="header-anchor" href="#colorTab"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="usedEntry"><div class="plugin-name">gif</div><code><span class="field-name">usedEntry</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usedEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="nq"><div class="plugin-name">gif</div><code><span class="field-name">nq</span><span class="operator">:</span> <a href="/api-docs/clay-native/gif/NeuQuant/" class="type-link">NeuQuant</a></code><a class="header-anchor" href="#nq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lzwEncoder"><div class="plugin-name">gif</div><code><span class="field-name">lzwEncoder</span><span class="operator">:</span> <a href="/api-docs/clay-native/gif/LzwEncoder/" class="type-link">LzwEncoder</a></code><a class="header-anchor" href="#lzwEncoder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="started"><div class="plugin-name">gif</div><code><span class="field-name">started</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#started"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="first_frame"><div class="plugin-name">gif</div><code><span class="field-name">first_frame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#first_frame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="analyze"><div class="plugin-name">gif</div><code><span class="field-name">analyze</span><span class="parenthesis">(</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#analyze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pixels` | [haxe.io.UInt8Array](/api-docs/clay-native/haxe/io/UInt8Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="write_LSD"><div class="plugin-name">gif</div><code><span class="field-name">write_LSD</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write_LSD"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes Logical Screen Descriptor.

| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="write_NetscapeExt"><div class="plugin-name">gif</div><code><span class="field-name">write_NetscapeExt</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write_NetscapeExt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes Netscape application extension to define repeat count.

| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="write_palette"><div class="plugin-name">gif</div><code><span class="field-name">write_palette</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write_palette"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Write color table.

| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="write_pixels"><div class="plugin-name">gif</div><code><span class="field-name">write_pixels</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write_pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes and writes pixel data.

| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="write_image_desc"><div class="plugin-name">gif</div><code><span class="field-name">write_image_desc</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="operator">,</span> <span class="arg-name">first</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write_image_desc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes Image Descriptor.

| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |
| `first` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="write_GraphicControlExt"><div class="plugin-name">gif</div><code><span class="field-name">write_GraphicControlExt</span><span class="parenthesis">(</span><span class="arg-name">output</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="operator">,</span> <span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write_GraphicControlExt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes Graphic Control Extension. Delay is in seconds, floored and converted to 1/100 of a second

| Name | Type |
|------|------|
| `output` | [haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) |
| `delay` | [Float](/api-docs/clay-native/Float/) |

