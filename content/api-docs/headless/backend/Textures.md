---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Textures
target: Headless
permalink: api-docs/headless/backend/Textures/
---

# Textures

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/backend/Textures.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Textures</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spec/Textures/">spec.Textures</a></div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">headless</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/backend/LoadTextureOptions/" class="type-link">LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/headless/String/) | |
| `options` | [Null](/api-docs/headless/Null/)<[LoadTextureOptions](/api-docs/headless/backend/LoadTextureOptions/)> | *(optional)* |
| `_done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="loadFromBytes"><div class="plugin-name">headless</div><code><span class="field-name">loadFromBytes</span><span class="parenthesis">(</span><span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ImageType/" class="type-link">ceramic.ImageType</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/backend/LoadTextureOptions/" class="type-link">LoadTextureOptions</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">_done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadFromBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | |
| `type` | [ceramic.ImageType](/api-docs/headless/ceramic/ImageType/) | |
| `options` | [Null](/api-docs/headless/Null/)<[LoadTextureOptions](/api-docs/headless/backend/LoadTextureOptions/)> | *(optional)* |
| `_done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="supportsHotReloadPath"><div class="plugin-name">headless</div><code><span class="field-name">supportsHotReloadPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#supportsHotReloadPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createTexture"><div class="plugin-name">headless</div><code><span class="field-name">createTexture</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#createTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `pixels` | [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) |

| Returns |
|---------|
| [Texture](/api-docs/headless/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroyTexture"><div class="plugin-name">headless</div><code><span class="field-name">destroyTexture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="createRenderTarget"><div class="plugin-name">headless</div><code><span class="field-name">createRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a></code><a class="header-anchor" href="#createRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `depth` | [Bool](/api-docs/headless/Bool/) |
| `stencil` | [Bool](/api-docs/headless/Bool/) |
| `antialiasing` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Texture](/api-docs/headless/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">headless</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureId"><div class="plugin-name">headless</div><code><span class="field-name">getTextureId</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/backend/TextureId/" class="type-link">TextureId</a></code><a class="header-anchor" href="#getTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

| Returns |
|---------|
| [TextureId](/api-docs/headless/backend/TextureId/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureWidth"><div class="plugin-name">headless</div><code><span class="field-name">getTextureWidth</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureHeight"><div class="plugin-name">headless</div><code><span class="field-name">getTextureHeight</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureWidthActual"><div class="plugin-name">headless</div><code><span class="field-name">getTextureWidthActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureHeightActual"><div class="plugin-name">headless</div><code><span class="field-name">getTextureHeightActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="fetchTexturePixels"><div class="plugin-name">headless</div><code><span class="field-name">fetchTexturePixels</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a></code><a class="header-anchor" href="#fetchTexturePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) | |
| `result` | [Null](/api-docs/headless/Null/)<[ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/)> | *(optional)* |

| Returns |
|---------|
| [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="submitTexturePixels"><div class="plugin-name">headless</div><code><span class="field-name">submitTexturePixels</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#submitTexturePixels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |
| `pixels` | [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTextureFilter"><div class="plugin-name">headless</div><code><span class="field-name">setTextureFilter</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">filter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |
| `filter` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTextureWrapS"><div class="plugin-name">headless</div><code><span class="field-name">setTextureWrapS</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextureWrap/" class="type-link">ceramic.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureWrapS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |
| `wrap` | [ceramic.TextureWrap](/api-docs/headless/ceramic/TextureWrap/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTextureWrapT"><div class="plugin-name">headless</div><code><span class="field-name">setTextureWrapT</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">wrap</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextureWrap/" class="type-link">ceramic.TextureWrap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTextureWrapT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |
| `wrap` | [ceramic.TextureWrap](/api-docs/headless/ceramic/TextureWrap/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="maxTexturesByBatch"><div class="plugin-name">headless</div><code><span class="field-name">maxTexturesByBatch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTexturesByBatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureIndex"><div class="plugin-name">headless</div><code><span class="field-name">getTextureIndex</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="textureToPng"><div class="plugin-name">headless</div><code><span class="field-name">textureToPng</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reversePremultiplyAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textureToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `texture` | [Texture](/api-docs/headless/backend/Texture/) | |
| `reversePremultiplyAlpha` | [Bool](/api-docs/headless/Bool/) | `true` |
| `path` | [String](/api-docs/headless/String/) | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="pixelsToPng"><div class="plugin-name">headless</div><code><span class="field-name">pixelsToPng</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/UInt8Array/" class="type-link">ceramic.UInt8Array</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pixelsToPng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `width` | [Int](/api-docs/headless/Int/) | |
| `height` | [Int](/api-docs/headless/Int/) | |
| `pixels` | [ceramic.UInt8Array](/api-docs/headless/ceramic/UInt8Array/) | |
| `path` | [String](/api-docs/headless/String/) | *(optional)* |
| `done` | Function | |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">headless</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

