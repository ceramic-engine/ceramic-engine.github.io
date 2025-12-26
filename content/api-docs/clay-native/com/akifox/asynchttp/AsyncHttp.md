---
layout: api-docs
category: api-docs
subCategory: doc
menu: Akifox-asynchttp
title: AsyncHttp
target: Clay (Native)
permalink: api-docs/clay-native/com/akifox/asynchttp/AsyncHttp/
---

# AsyncHttp

<div class="view-source"><a href="https://github.com/ceramic-engine/akifox-asynchttp/blob/master/com/akifox/asynchttp/AsyncHttp.hx">View source</a></div>

<div class="type-hierarchy"><strong>com.akifox.asynchttp.AsyncHttp</strong> (Class)</div>

##AsyncHttp

This is the main class of the library

*NOTE:** It is used by most of the library to keep common functions and variables

@author Simone Cingano (yupswing) [Akifox Studio](http://akifox.com)

@repo [akifox-asynchttp repository](https://github.com/yupswing/akifox-asynchttp)

@licence MIT Licence

## Static Members

<div class="signature field-var has-description" id="logEnabled"><code><span class="field-name">logEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#logEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Force log to console

(default set to true on -debug)

<hr class="field-separator" />

<div class="signature field-var no-description" id="logErrorEnabled"><code><span class="field-name">logErrorEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#logErrorEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="errorSafe"><code><span class="field-name">errorSafe</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#errorSafe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deprecated and ignored (will be dropped in 0.5) #TODO

<hr class="field-separator" />

<div class="signature field-var has-description" id="userAgent"><code><span class="field-name">userAgent</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#userAgent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The HTTP User Agent string sent on request (default:'akifox-asynchttp')

**NOTE:** This is a global setting that will apply to every request

**WARNING:** This option is not used on Flash and JS (due to platforms limitations)

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxRedirections"><code><span class="field-name">maxRedirections</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxRedirections"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum number of redirection allowed per request

**NOTE:** This is a global setting that will apply to every request

**WARNING:** This option is not used on Flash and JS (due to platforms limitations)

## Instance Members

## Private Members

<div class="signature field-var no-description" id="CONTENT_KIND_MATCHES"><code><span class="field-name">CONTENT_KIND_MATCHES</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/com/akifox/asynchttp/_AsyncHttp/ContentKindMatch/" class="type-link">com.akifox.asynchttp._AsyncHttp.ContentKindMatch</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#CONTENT_KIND_MATCHES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UID_CHARS"><code><span class="field-name">UID_CHARS</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#UID_CHARS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="callback"><code><span class="field-name">callback</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/" class="type-link">HttpRequest</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/URL/" class="type-link">URL</a><span class="operator">,</span> <span class="arg-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/" class="type-link">HttpHeaders</a><span class="operator">,</span> <span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `request` | [HttpRequest](/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/) | |
| `time` | [Float](/api-docs/clay-native/Float/) | |
| `url` | [URL](/api-docs/clay-native/com/akifox/asynchttp/URL/) | |
| `headers` | [HttpHeaders](/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/) | |
| `status` | [Int](/api-docs/clay-native/Int/) | |
| `content` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) | |
| `error` | [String](/api-docs/clay-native/String/) | `""` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="callbackProgress"><code><span class="field-name">callbackProgress</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/" class="type-link">HttpRequest</a><span class="operator">,</span> <span class="arg-name">loaded</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">total</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callbackProgress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `request` | [HttpRequest](/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/) |
| `loaded` | [Int](/api-docs/clay-native/Int/) |
| `total` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="httpViaSocket_Threaded"><code><span class="field-name">httpViaSocket_Threaded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#httpViaSocket_Threaded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="httpViaSocketConnect"><code><span class="field-name">httpViaSocketConnect</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/URL/" class="type-link">URL</a><span class="operator">,</span> <span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/" class="type-link">HttpRequest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/_AsyncHttp/Requester/" class="type-link">com.akifox.asynchttp._AsyncHttp.Requester</a></code><a class="header-anchor" href="#httpViaSocketConnect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [URL](/api-docs/clay-native/com/akifox/asynchttp/URL/) |
| `request` | [HttpRequest](/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/) |

| Returns |
|---------|
| [com.akifox.asynchttp._AsyncHttp.Requester](/api-docs/clay-native/com/akifox/asynchttp/_AsyncHttp/Requester/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="httpViaSocket"><code><span class="field-name">httpViaSocket</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/" class="type-link">HttpRequest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#httpViaSocket"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `request` | [HttpRequest](/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="elapsedTime"><code><span class="field-name">elapsedTime</span><span class="parenthesis">(</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#elapsedTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `start` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

