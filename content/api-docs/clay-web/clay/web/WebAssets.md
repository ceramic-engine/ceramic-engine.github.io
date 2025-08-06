---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: WebAssets
target: Clay (Web)
permalink: api-docs/clay-web/clay/web/WebAssets/
---

# WebAssets

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/web/WebAssets.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/clay/base/BaseAssets/">clay.base.BaseAssets</a> → <strong>clay.web.WebAssets</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="isSynchronous"><code><span class="field-name">isSynchronous</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSynchronous"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadImage"><code><span class="field-name">loadImage</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Image/" class="type-link">clay.Image</a></code><a class="header-anchor" href="#loadImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/clay-web/String/) | |
| `components` | [Int](/api-docs/clay-web/Int/) | `4` |
| `async` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.Image](/api-docs/clay-web/clay/Image/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="decodePngWithPngjs"><code><span class="field-name">decodePngWithPngjs</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Image/" class="type-link">clay.Image</a></code><a class="header-anchor" href="#decodePngWithPngjs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `bytes` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | |
| `pot` | [Bool](/api-docs/clay-web/Bool/) | `true` |

| Returns |
|---------|
| [clay.Image](/api-docs/clay-web/clay/Image/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decodeImageFromElement"><code><span class="field-name">decodeImageFromElement</span><span class="parenthesis">(</span><span class="arg-name">elem</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageElement/" class="type-link">js.html.ImageElement</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Image/" class="type-link">clay.Image</a></code><a class="header-anchor" href="#decodeImageFromElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create an image info (padded to POT) from a given Canvas or Image element.

| Name | Type | Default |
|------|------|---------|
| `elem` | [js.html.ImageElement](/api-docs/clay-web/js/html/ImageElement/) | |
| `pot` | [Bool](/api-docs/clay-web/Bool/) | `true` |

| Returns |
|---------|
| [clay.Image](/api-docs/clay-web/clay/Image/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageFromBytes"><code><span class="field-name">imageFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Image/" class="type-link">clay.Image</a></code><a class="header-anchor" href="#imageFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `bytes` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | |
| `ext` | [String](/api-docs/clay-web/String/) | |
| `components` | [Int](/api-docs/clay-web/Int/) | `4` |
| `pot` | [Bool](/api-docs/clay-web/Bool/) | `true` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.Image](/api-docs/clay-web/clay/Image/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageFromBytesUsingImageElement"><code><span class="field-name">imageFromBytesUsingImageElement</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="arg-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pot</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Image/" class="type-link">clay.Image</a></code><a class="header-anchor" href="#imageFromBytesUsingImageElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `bytes` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | |
| `ext` | [String](/api-docs/clay-web/String/) | |
| `components` | [Int](/api-docs/clay-web/Int/) | `4` |
| `pot` | [Bool](/api-docs/clay-web/Bool/) | `true` |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [clay.Image](/api-docs/clay-web/clay/Image/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pixelsToPngData"><code><span class="field-name">pixelsToPngData</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pixelsToPngData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return PNG data from the given pixels

| Name | Type | Default |
|------|------|---------|
| `width` | [Int](/api-docs/clay-web/Int/) | |
| `height` | [Int](/api-docs/clay-web/Int/) | |
| `pixels` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | |
| `callback` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="paddedBytesFromPixels"><code><span class="field-name">paddedBytesFromPixels</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">widthPadded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">heightPadded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a></code><a class="header-anchor" href="#paddedBytesFromPixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a padded array of bytes from raw image pixels

| Name | Type |
|------|------|
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |
| `widthPadded` | [Int](/api-docs/clay-web/Int/) |
| `heightPadded` | [Int](/api-docs/clay-web/Int/) |
| `source` | [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) |

| Returns |
|---------|
| [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="paddedBytesFromElement"><code><span class="field-name">paddedBytesFromElement</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">widthPadded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">heightPadded</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">source</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageElement/" class="type-link">js.html.ImageElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/buffers/Uint8Array/" class="type-link">clay.buffers.Uint8Array</a></code><a class="header-anchor" href="#paddedBytesFromElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a padded array of bytes from an image/canvas element.

| Name | Type |
|------|------|
| `width` | [Int](/api-docs/clay-web/Int/) |
| `height` | [Int](/api-docs/clay-web/Int/) |
| `widthPadded` | [Int](/api-docs/clay-web/Int/) |
| `heightPadded` | [Int](/api-docs/clay-web/Int/) |
| `source` | [js.html.ImageElement](/api-docs/clay-web/js/html/ImageElement/) |

| Returns |
|---------|
| [clay.buffers.Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/Clay/" class="type-link">clay.Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [clay.Clay](/api-docs/clay-web/clay/Clay/) |

## Private Members

<div class="signature field-var no-description" id="POT"><code><span class="field-name">POT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#POT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="testedElectronPngjsAvailability"><code><span class="field-name">testedElectronPngjsAvailability</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#testedElectronPngjsAvailability"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="electronRemote"><code><span class="field-name">electronRemote</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#electronRemote"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pngjs"><code><span class="field-name">pngjs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#pngjs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindElectronPngjs"><code><span class="field-name">bindElectronPngjs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindElectronPngjs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="nearestPowerOfTwo"><code><span class="field-name">nearestPowerOfTwo</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nearestPowerOfTwo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

