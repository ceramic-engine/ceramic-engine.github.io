---
layout: api-docs
category: api-docs
subCategory: doc
menu: Akifox-asynchttp
title: HttpResponse
target: Clay (Native)
permalink: api-docs/clay-native/com/akifox/asynchttp/HttpResponse/
---

# HttpResponse

<div class="view-source"><a href="https://github.com/ceramic-engine/akifox-asynchttp/blob/master/com/akifox/asynchttp/HttpResponse.hx">View source</a></div>

<div class="type-hierarchy"><strong>com.akifox.asynchttp.HttpResponse</strong> (Class)</div>

##HttpRequest

This class represents an Http Request

*NOTE:** You don't need to use this class!
It is the HttpResponse object that will be passed to an HttpRequest callback

@author Simone Cingano (yupswing) [Akifox Studio](http://akifox.com)

@repo [akifox-asynchttp repository](https://github.com/yupswing/akifox-asynchttp)

@licence MIT Licence

## Instance Members

<div class="signature field-var has-description" id="isBinary"><code><span class="field-name">isBinary</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the content is Binary data (based on contentType)

<hr class="field-separator" />

<div class="signature field-var has-description" id="isText"><code><span class="field-name">isText</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the content is Text data (based on contentType)

<hr class="field-separator" />

<div class="signature field-var has-description" id="isXml"><code><span class="field-name">isXml</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the content is Xml data (based on contentType)

<hr class="field-separator" />

<div class="signature field-var has-description" id="isJson"><code><span class="field-name">isJson</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the content is Json data (based on contentType)

<hr class="field-separator" />

<div class="signature field-var has-description" id="isImage"><code><span class="field-name">isImage</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the content is Image data (based on contentType)

<hr class="field-separator" />

<div class="signature field-var has-description" id="request"><code><span class="field-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/" class="type-link">HttpRequest</a></code><a class="header-anchor" href="#request"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The request

**NOTE:** This gives access to the original request (immutable because already sent)

<hr class="field-separator" />

<div class="signature field-var has-description" id="fingerprint"><code><span class="field-name">fingerprint</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fingerprint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fingerprint

**NOTE:** Same as `instance.request.fingerprint`

<hr class="field-separator" />

<div class="signature field-var has-description" id="url"><code><span class="field-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/URL/" class="type-link">URL</a></code><a class="header-anchor" href="#url"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final URL retrived

<hr class="field-separator" />

<div class="signature field-var has-description" id="urlString"><code><span class="field-name">urlString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#urlString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Final URL retrived (string format)

**DEPRECATED**:This is deprecated, use `instance.url.toString()` instead

<hr class="field-separator" />

<div class="signature field-var has-description" id="headers"><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/" class="type-link">HttpHeaders</a></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response HTTP headers

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response HTTP status

**NOTE:** set to 0 if connection error occurs

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content (Bytes or String based on the mime-type)

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentRaw"><code><span class="field-name">contentRaw</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#contentRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content (Bytes)

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentType"><code><span class="field-name">contentType</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#contentType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content mime-type

**NOTE:** Always `application/octet-stream` in FLASH

**NOTE:** Always `text/plain` in JAVASCRIPT

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentIsBinary"><code><span class="field-name">contentIsBinary</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#contentIsBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content binary flag (based on the contentType)

<hr class="field-separator" />

<div class="signature field-var has-description" id="contentLength"><code><span class="field-name">contentLength</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#contentLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content length

<hr class="field-separator" />

<div class="signature field-var has-description" id="time"><code><span class="field-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Time elapsed from the request start to the end of the response (in seconds)

<hr class="field-separator" />

<div class="signature field-var has-description" id="filename"><code><span class="field-name">filename</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#filename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The resource filename (default:"unknown")

**NOTE:** This is a guessed resource filename based on the final retrived url

*Example*:

URL:`http://example.com/download/filename.zip?dl=1`

Filename:`filename.zip`

<hr class="field-separator" />

<div class="signature field-var has-description" id="isOK"><code><span class="field-name">isOK</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A good response

`true` if the status is >=200 and <400

<hr class="field-separator" />

<div class="signature field-var no-description" id="error"><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toXml"><code><span class="field-name">toXml</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a></code><a class="header-anchor" href="#toXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse the content as XML


| Returns |
|---------|
| [Xml](/api-docs/clay-native/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse the content as Json


| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toText"><code><span class="field-name">toText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives the content in String format


| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">request</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/" class="type-link">HttpRequest</a><span class="operator">,</span> <span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/URL/" class="type-link">URL</a><span class="operator">,</span> <span class="arg-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/" class="type-link">HttpHeaders</a><span class="operator">,</span> <span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Class instance

**NOTE:** YOU DON'T NEED TO MAKE AN INSTANCE OF THE RESPONSE, IT IS HANDLED INTERNALLY BY THE LIBRARY

The instance is anyway allowed for third party uses of the library



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `request` | [HttpRequest](/api-docs/clay-native/com/akifox/asynchttp/HttpRequest/) | | original request  |
| `time` | [Float](/api-docs/clay-native/Float/) | | the response time  |
| `url` | [URL](/api-docs/clay-native/com/akifox/asynchttp/URL/) | | the final url retrived (could be different from the requested URL because of redirects)  |
| `headers` | [HttpHeaders](/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/) | | the response headers  |
| `status` | [Int](/api-docs/clay-native/Int/) | | the response status (0 if error otherwise HTTP standard response code)  |
| `content` | [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) | | the response content  |
| `error` | [String](/api-docs/clay-native/String/) | *(optional)* | the internal error message (optional) |

## Private Members

