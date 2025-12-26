---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Http
target: Clay (Native)
permalink: api-docs/clay-native/sys/Http/
---

# Http

<div class="type-hierarchy"><a href="/api-docs/clay-native/haxe/http/HttpBase/">haxe.http.HttpBase</a> → <strong>sys.Http</strong> (Class)</div>

## Static Members

## Instance Members

<div class="signature field-var no-description" id="noShutdown"><code><span class="field-name">noShutdown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noShutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cnxTimeout"><code><span class="field-name">cnxTimeout</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cnxTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="responseHeaders"><code><span class="field-name">responseHeaders</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#responseHeaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="customRequest"><code><span class="field-name">customRequest</span><span class="parenthesis">(</span><span class="arg-name">post</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">api</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sock</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/net/Socket/" class="type-link">sys.net.Socket</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#customRequest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `post` | [Bool](/api-docs/clay-native/Bool/) | |
| `api` | [haxe.io.Output](/api-docs/clay-native/haxe/io/Output/) | |
| `sock` | [sys.net.Socket](/api-docs/clay-native/sys/net/Socket/) | *(optional)* |
| `method` | [String](/api-docs/clay-native/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-var no-description" id="responseHeadersSameKey"><code><span class="field-name">responseHeadersSameKey</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#responseHeadersSameKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="chunk_size"><code><span class="field-name">chunk_size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#chunk_size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="chunk_buf"><code><span class="field-name">chunk_buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#chunk_buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="writeBody"><code><span class="field-name">writeBody</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/io/BytesOutput/" class="type-link">haxe.io.BytesOutput</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fileInput</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/io/Input/" class="type-link">haxe.io.Input</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">fileSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">boundary</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">sock</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/net/Socket/" class="type-link">sys.net.Socket</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `body` | [Null](/api-docs/clay-native/Null/)<[haxe.io.BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/)> |
| `fileInput` | [Null](/api-docs/clay-native/Null/)<[haxe.io.Input](/api-docs/clay-native/haxe/io/Input/)> |
| `fileSize` | [Int](/api-docs/clay-native/Int/) |
| `boundary` | [Null](/api-docs/clay-native/Null/)<[String](/api-docs/clay-native/String/)> |
| `sock` | [sys.net.Socket](/api-docs/clay-native/sys/net/Socket/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readHttpResponse"><code><span class="field-name">readHttpResponse</span><span class="parenthesis">(</span><span class="arg-name">api</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="operator">,</span> <span class="arg-name">sock</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/net/Socket/" class="type-link">sys.net.Socket</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#readHttpResponse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `api` | [haxe.io.Output](/api-docs/clay-native/haxe/io/Output/) |
| `sock` | [sys.net.Socket](/api-docs/clay-native/sys/net/Socket/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readChunk"><code><span class="field-name">readChunk</span><span class="parenthesis">(</span><span class="arg-name">chunk_re</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a><span class="operator">,</span> <span class="arg-name">api</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readChunk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `chunk_re` | [EReg](/api-docs/clay-native/EReg/) |
| `api` | [haxe.io.Output](/api-docs/clay-native/haxe/io/Output/) |
| `buf` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

