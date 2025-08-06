---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ase
title: AsepriteFrame
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/AsepriteFrame/
---

# AsepriteFrame

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ase/runtime/src/ceramic/AsepriteFrame.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AsepriteFrame</strong> (Class)</div>

Represents a single frame from an Aseprite animation.

Each frame contains the composited image data from all visible layers,
timing information, and metadata about which animation tags include this frame.
Frames may be deduplicated if they have identical pixel data to save memory.

The frame's pixel data is stored as RGBA bytes and can be packed into a
texture atlas for efficient rendering.

<div class="see"><strong>See:</strong> AsepriteData for the parent data structure, AsepriteTag for animation tag information</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="aseFrame"><div class="plugin-name">ase</div><code><span class="field-name">aseFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Frame/" class="type-link">ase.Frame</a></code><a class="header-anchor" href="#aseFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The underlying frame data from the ase library.
Contains raw frame information from the file format.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="index"><div class="plugin-name">ase</div><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The frame index (0-based) in the animation sequence.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duration"><div class="plugin-name">ase</div><code><span class="field-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Duration of this frame in seconds.
Determines how long this frame is displayed during animation playback.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tags"><div class="plugin-name">ase</div><code><span class="field-name">tags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Names of animation tags that include this frame.
A frame can belong to multiple overlapping tags.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pixels"><div class="plugin-name">ase</div><code><span class="field-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a></code><a class="header-anchor" href="#pixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The pixel data for this frame in RGBA format.
Each pixel uses 4 bytes (R, G, B, A) with values 0-255.
May be null if this frame is a duplicate of another frame.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hash"><div class="plugin-name">ase</div><code><span class="field-name">hash</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hash of the pixel data used for duplicate detection.
Frames with identical hashes can share the same texture region.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="hashIndex"><div class="plugin-name">ase</div><code><span class="field-name">hashIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hashIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Index used for grouping frames with identical hashes.
Frames with the same hashIndex have identical pixel data.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duplicateOfIndex"><div class="plugin-name">ase</div><code><span class="field-name">duplicateOfIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#duplicateOfIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this frame is a duplicate, the index of the original frame.
-1 if this frame is not a duplicate.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="duplicateSameOffset"><div class="plugin-name">ase</div><code><span class="field-name">duplicateSameOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#duplicateSameOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this duplicate frame has the same offset as the original.
If true, the frames can share the exact same texture region.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetX"><div class="plugin-name">ase</div><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset for trimmed frames.
When frames are trimmed of transparent pixels, this indicates
where to position the trimmed image relative to the canvas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetY"><div class="plugin-name">ase</div><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset for trimmed frames.
When frames are trimmed of transparent pixels, this indicates
where to position the trimmed image relative to the canvas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="packedWidth"><div class="plugin-name">ase</div><code><span class="field-name">packedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the frame after trimming transparent pixels.
This is the actual width stored in the texture atlas.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="packedHeight"><div class="plugin-name">ase</div><code><span class="field-name">packedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#packedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height of the frame after trimming transparent pixels.
This is the actual height stored in the texture atlas.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ase</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">aseFrame</span><span class="operator">:</span> <a href="/api-docs/clay-web/ase/Frame/" class="type-link">ase.Frame</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">duration</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">tags</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/UInt8Array/" class="type-link">UInt8Array</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hash</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hashIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duplicateOfIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duplicateSameOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">packedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">packedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `aseFrame` | [ase.Frame](/api-docs/clay-web/ase/Frame/) | | * The underlying frame data from the ase library. Contains raw frame information from the file format. |
| `index` | [Int](/api-docs/clay-web/Int/) | | * The frame index (0-based) in the animation sequence. |
| `duration` | [Float](/api-docs/clay-web/Float/) | | * Duration of this frame in seconds. Determines how long this frame is displayed during animation playback. |
| `tags` | [Null](/api-docs/clay-web/Null/)<[Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)>> | *(optional)* | * Names of animation tags that include this frame. A frame can belong to multiple overlapping tags. |
| `pixels` | [Null](/api-docs/clay-web/Null/)<[UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/)> | *(optional)* | * The pixel data for this frame in RGBA format. Each pixel uses 4 bytes (R, G, B, A) with values 0-255. May be null if this frame is a duplicate of another frame. |
| `hash` | [Null](/api-docs/clay-web/Null/)<[haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/)> | *(optional)* | * Hash of the pixel data used for duplicate detection. Frames with identical hashes can share the same texture region. |
| `hashIndex` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * Index used for grouping frames with identical hashes. Frames with the same hashIndex have identical pixel data. |
| `duplicateOfIndex` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * If this frame is a duplicate, the index of the original frame. -1 if this frame is not a duplicate. |
| `duplicateSameOffset` | [Null](/api-docs/clay-web/Null/)<[Bool](/api-docs/clay-web/Bool/)> | *(optional)* | * Whether this duplicate frame has the same offset as the original. If true, the frames can share the exact same texture region. |
| `offsetX` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * Horizontal offset for trimmed frames. When frames are trimmed of transparent pixels, this indicates where to position the trimmed image relative to the canvas. |
| `offsetY` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * Vertical offset for trimmed frames. When frames are trimmed of transparent pixels, this indicates where to position the trimmed image relative to the canvas. |
| `packedWidth` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * Width of the frame after trimming transparent pixels. This is the actual width stored in the texture atlas. |
| `packedHeight` | [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> | *(optional)* | * Height of the frame after trimming transparent pixels. This is the actual height stored in the texture atlas. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

