---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: SDLIO
target: Clay (Native)
permalink: api-docs/clay-native/clay/sdl/SDLIO/
---

# SDLIO

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/sdl/SDLIO.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/clay/base/BaseIO/">clay.base.BaseIO</a> → <a href="/api-docs/clay-native/clay/native/NativeIO/">clay.native.NativeIO</a> → <strong>clay.sdl.SDLIO</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="isSynchronous"><code><span class="field-name">isSynchronous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSynchronous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="appPath"><code><span class="field-name">appPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#appPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="appPathPrefs"><code><span class="field-name">appPathPrefs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#appPathPrefs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadData"><code><span class="field-name">loadData</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">binary</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a></code><a class="header-anchor" href="#loadData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-native/String/) | |
| `binary` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `async` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.buffers.Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileHandle"><code><span class="field-name">fileHandle</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">mode</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"rb"</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a></code><a class="header-anchor" href="#fileHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-native/String/) | |
| `mode` | [String](/api-docs/clay-native/String/) | `"rb"` |

| Returns |
|---------|
| [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileHandleFromMem"><code><span class="field-name">fileHandleFromMem</span><span class="parenthesis">(</span><span class="arg-name">mem</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">clay.buffers.ArrayBufferView</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a></code><a class="header-anchor" href="#fileHandleFromMem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mem` | [clay.buffers.ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |
| `size` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileRead"><code><span class="field-name">fileRead</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a><span class="operator">,</span> <span class="arg-name">dest</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">clay.buffers.ArrayBufferView</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxnum</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fileRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `file` | [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |
| `dest` | [clay.buffers.ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |
| `size` | [Int](/api-docs/clay-native/Int/) |
| `maxnum` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileWrite"><code><span class="field-name">fileWrite</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/buffers/ArrayBufferView/" class="type-link">clay.buffers.ArrayBufferView</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">num</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fileWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `file` | [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |
| `src` | [clay.buffers.ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) |
| `size` | [Int](/api-docs/clay-native/Int/) |
| `num` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileSeek"><code><span class="field-name">fileSeek</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">whence</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fileSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `file` | [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |
| `offset` | [Int](/api-docs/clay-native/Int/) |
| `whence` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileTell"><code><span class="field-name">fileTell</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fileTell"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `file` | [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileClose"><code><span class="field-name">fileClose</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fileClose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `file` | [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="fileSize"><code><span class="field-name">fileSize</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/sdl/FileHandle/" class="type-link">FileHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#fileSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) |

| Returns |
|---------|
| [UInt](/api-docs/clay-native/UInt/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-native/clay/Clay/) |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:headerCode` | "#include <SDL3/SDL.h>" |

