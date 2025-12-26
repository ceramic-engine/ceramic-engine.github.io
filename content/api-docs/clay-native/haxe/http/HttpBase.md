---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HttpBase
target: Clay (Native)
permalink: api-docs/clay-native/haxe/http/HttpBase/
---

# HttpBase

<div class="type-hierarchy"><strong>haxe.http.HttpBase</strong> (Class) → <a href="/api-docs/clay-native/sys/Http/">sys.Http</a></div>

This class can be used to handle Http requests consistently across
platforms. There are two intended usages:

- call `haxe.Http.requestUrl(url)` and receive the result as a `String`
(only available on `sys` targets)
- create a `new haxe.Http(url)`, register your callbacks for `onData`,
`onError` and `onStatus`, then call `request()`.

## Instance Members

<div class="signature field-var has-description" id="url"><code><span class="field-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#url"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The url of `this` request. It is used only by the `request()` method and
can be changed in order to send the same request to different target
Urls.

<hr class="field-separator" />

<div class="signature field-var no-description" id="responseBytes"><code><span class="field-name">responseBytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#responseBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="onData"><code><span class="field-name">onData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method is called upon a successful request, with `data` containing
the result String.

The intended usage is to bind it to a custom function:
`httpInstance.onData = function(data) { // handle result }`

| Name | Type |
|------|------|
| `data` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="onError"><code><span class="field-name">onError</span><span class="parenthesis">(</span><span class="arg-name">msg</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method is called upon a request error, with `msg` containing the
error description.

The intended usage is to bind it to a custom function:
`httpInstance.onError = function(msg) { // handle error }`

| Name | Type |
|------|------|
| `msg` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="onStatus"><code><span class="field-name">onStatus</span><span class="parenthesis">(</span><span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#onStatus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method is called upon a Http status change, with `status` being the
new status.

The intended usage is to bind it to a custom function:
`httpInstance.onStatus = function(status) { // handle status }`

| Name | Type |
|------|------|
| `status` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Http instance with `url` as parameter.

This does not do a request until `request()` is called.

If `url` is null, the field url must be set to a value before making the
call to `request()`, or the result is unspecified.

(Php) Https (SSL) connections are allowed only if the OpenSSL extension
is enabled.

| Name | Type |
|------|------|
| `url` | [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-var no-description" id="responseAsString"><code><span class="field-name">responseAsString</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#responseAsString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="postData"><code><span class="field-name">postData</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#postData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="postBytes"><code><span class="field-name">postBytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#postBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="headers"><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/http/_HttpBase/StringKeyValue/" class="type-link">haxe.http._HttpBase.StringKeyValue</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="params"><code><span class="field-name">params</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/http/_HttpBase/StringKeyValue/" class="type-link">haxe.http._HttpBase.StringKeyValue</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#params"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="emptyOnData"><code><span class="field-name">emptyOnData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emptyOnData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

