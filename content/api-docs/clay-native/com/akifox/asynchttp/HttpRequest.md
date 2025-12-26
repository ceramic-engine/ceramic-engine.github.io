---
layout: api-docs
category: api-docs
subCategory: doc
menu: Akifox-asynchttp
title: HttpRequest
target: Clay (Native)
permalink: api-docs/clay-native/com/akifox/asynchttp/HttpRequest/
---

# HttpRequest

<div class="view-source"><a href="https://github.com/ceramic-engine/akifox-asynchttp/blob/master/com/akifox/asynchttp/HttpRequest.hx">View source</a></div>

<div class="type-hierarchy"><strong>com.akifox.asynchttp.HttpRequest</strong> (Class)</div>

##HttpRequest

This class represents an Http Request

@author Simone Cingano (yupswing) [Akifox Studio](http://akifox.com)

@repo [akifox-asynchttp repository](https://github.com/yupswing/akifox-asynchttp)

@licence MIT Licence

## Instance Members

<div class="signature field-var has-description" id="finalised"><code><span class="field-name">finalised</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#finalised"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tell if the instance is immutable

**NOTE:** The only way to change an immutable instance is copying it (`instance.clone()`) and change the copy

<hr class="field-separator" />

<div class="signature field-var has-description" id="fingerprint"><code><span class="field-name">fingerprint</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fingerprint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The fingerprint is a unique 8 char key which identify this request instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="headers"><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/" class="type-link">HttpHeaders</a></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The request headers

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeout"><code><span class="field-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#timeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The request timeout in seconds (default:10)

If the request receive no answer for more than the timeout it aborts

<hr class="field-separator" />

<div class="signature field-var has-description" id="async"><code><span class="field-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#async"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Asynchronous (default is `true`)

**NOTE:** When `async==true` the application execution will be hold until the request is completed

**NOTE:** Always true in FLASH due to platform limitations

<hr class="field-separator" />

<div class="signature field-var has-description" id="http11"><code><span class="field-name">http11</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#http11"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Http Protocol Version flag

Tells if enable HTTP/1.1 (true <default>) or HTTP/1.0 (false)

<hr class="field-separator" />

<div class="signature field-var has-description" id="url"><code><span class="field-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/URL/" class="type-link">URL</a></code><a class="header-anchor" href="#url"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The URL to be retrived

Accept a string (format:`protocol://host:port/resource?querystring`) or a URL instance

**NOTE:** It supports HTTP+HTTPS protocol (HTTPS on CPP+NEKO platform only with the HXSSL library)

**NOTE:** On FLASH and JAVASCRIPT relative URLs are allowed

<hr class="field-separator" />

<div class="signature field-var has-description" id="method"><code><span class="field-name">method</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#method"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The HTTP Method

Accepted values are HttpMethod.GET, .POST, .PUT, .DELETE

**NOTE:** On JAVASCRIPT only GET and POST are functional due to platform limitations

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The HTTP Content

**NOTE:** You could provide  a Bytes or a String according to the Content-type (Binary or Text)

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentType"><code><span class="field-name">contentType</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#contentType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The HTTP Content-Type (default:`application/x-www-form-urlencoded`)

Content-Type list:(http://www.iana.org/assignments/media-types/media-types.xhtml)

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentIsBinary"><code><span class="field-name">contentIsBinary</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contentIsBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Content binary flag (tells if the content binary or text)

**NOTE:** This is set automatically when a content-type is set

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HttpRequest</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deep copy of the HttpRequest

**NOTE:** The copy will be always mutable despite of the master status


| Returns |
|---------|
| [HttpRequest](/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="finalise"><code><span class="field-name">finalise</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finalise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Make this instance immutable

**NOTE:** This method is called automatically once this HttpRequest instance is sent

<hr class="field-separator" />

<div class="signature field-method has-description" id="send"><code><span class="field-name">send</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#send"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Send the request and call the callback when it is done

**NOTE:** When `async==true` the application execution will be hold until the request is completed

**NOTE:** When a HttpRequest is sent the instance is made immutable (you have to clone it to send again the same request)

<hr class="field-separator" />

<div class="signature field-method has-description" id="callback"><code><span class="field-name">callback</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback function to be called when the response returns

**NOTE:** This will be called always if no `callbackError` is set

Otherwise it will be called only if the response is valid

<hr class="field-separator" />

<div class="signature field-method has-description" id="callbackError"><code><span class="field-name">callbackError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callbackError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback error (**optional**) function to be called when the response returns an error

**NOTE:** This will be called only if set and in error case

<hr class="field-separator" />

<div class="signature field-method has-description" id="callbackProgress"><code><span class="field-name">callbackProgress</span><span class="parenthesis">(</span><span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name"></span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callbackProgress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callbackProgress (**optional**) function to be called when get any data on an HTTP Transfer
It gets called for sure at the beginning and end of any transfer
and (if the HTTP transfer mode supports it) also in between the transfer.

The function has to accept two parameters:

- loaded:Int  the received bytes

- total:Int   the total bytes (-1 if unknown)

| Name | Type |
|------|------|
| `` | [Int](/api-docs/clay-native/Int/) |
| `` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequestOptions/" class="type-link">HttpRequestOptions</a><span class="operator">&gt;</span> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Class instance



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `options` | [Null](/api-docs/clay-native/Null/)<[HttpRequestOptions](/api-docs/clay-native/com/akifox/asynchttp/HttpRequestOptions/)> | `null` | HttpRequestOptions object or null (**NOTE:** every parameter could be changed also after the class instance) |

## Private Members

<div class="signature field-var no-description" id="DEFAULT_CONTENT_TYPE"><code><span class="field-name">DEFAULT_CONTENT_TYPE</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#DEFAULT_CONTENT_TYPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

