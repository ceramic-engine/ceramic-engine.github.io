---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: XMLHttpRequest
target: Clay (Web)
permalink: api-docs/clay-web/js/html/XMLHttpRequest/
---

# XMLHttpRequest

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/XMLHttpRequestEventTarget/">XMLHttpRequestEventTarget</a> → <strong>js.html.XMLHttpRequest</strong> (extern class)</div>

Use `XMLHttpRequest` (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

Documentation [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest></div>


## Static Members

<div class="signature field-var no-description" id="UNSENT"><code><span class="field-name">UNSENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#UNSENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="OPENED"><code><span class="field-name">OPENED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#OPENED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HEADERS_RECEIVED"><code><span class="field-name">HEADERS_RECEIVED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HEADERS_RECEIVED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LOADING"><code><span class="field-name">LOADING</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LOADING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DONE"><code><span class="field-name">DONE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="onreadystatechange"><code><span class="field-name">onreadystatechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onreadystatechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An `EventHandler` that is called whenever the `readyState` attribute changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="readyState"><code><span class="field-name">readyState</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readyState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `unsigned short`, the state of the request.

<hr class="field-separator" />

<div class="signature field-var has-description" id="timeout"><code><span class="field-name">timeout</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#timeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `unsigned long` representing the number of milliseconds a request can take before automatically being terminated.

<hr class="field-separator" />

<div class="signature field-var has-description" id="withCredentials"><code><span class="field-name">withCredentials</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#withCredentials"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` that indicates whether or not cross-site `Access-Control` requests should be made using credentials such as cookies or authorization headers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="upload"><code><span class="field-name">upload</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/XMLHttpRequestUpload/" class="type-link">XMLHttpRequestUpload</a></code><a class="header-anchor" href="#upload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an `XMLHttpRequestUpload`, representing the upload process.

<hr class="field-separator" />

<div class="signature field-var has-description" id="responseURL"><code><span class="field-name">responseURL</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#responseURL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the serialized URL of the response or the empty string if the URL is null.

<hr class="field-separator" />

<div class="signature field-var has-description" id="status"><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `unsigned short` with the status of the response of the request.

<hr class="field-separator" />

<div class="signature field-var has-description" id="statusText"><code><span class="field-name">statusText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#statusText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` containing the response string returned by the HTTP server. Unlike `XMLHTTPRequest.status`, this includes the entire text of the response message ("`200 OK`", for example).

<hr class="field-separator" />

<div class="signature field-var has-description" id="responseType"><code><span class="field-name">responseType</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/XMLHttpRequestResponseType/" class="type-link">XMLHttpRequestResponseType</a></code><a class="header-anchor" href="#responseType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is an enumerated value that defines the response type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="response"><code><span class="field-name">response</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#response"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `ArrayBuffer`, `Blob`, `Document`, JavaScript object, or a `DOMString`, depending on the value of `XMLHttpRequest.responseType`. that contains the response entity body.

<hr class="field-separator" />

<div class="signature field-var has-description" id="responseText"><code><span class="field-name">responseText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#responseText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `DOMString` that contains the response to the request as text, or `null` if the request was unsuccessful or has not yet been sent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="responseXML"><code><span class="field-name">responseXML</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a></code><a class="header-anchor" href="#responseXML"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Document` containing the response to the request, or `null` if the request was unsuccessful, has not yet been sent, or cannot be parsed as XML or HTML.

<hr class="field-separator" />

<div class="signature field-method has-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">async</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">user</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">password</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use `openRequest()` instead.

| Name | Type | Default |
|------|------|---------|
| `method` | [String](/api-docs/clay-web/String/) | |
| `url` | [String](/api-docs/clay-web/String/) | |
| `async` | [Bool](/api-docs/clay-web/Bool/) | |
| `user` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `password` | [String](/api-docs/clay-web/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setRequestHeader"><code><span class="field-name">setRequestHeader</span><span class="parenthesis">(</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRequestHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the value of an HTTP request header. You must call `setRequestHeader()`after `open()`, but before `send()`.

| Name | Type |
|------|------|
| `header` | [String](/api-docs/clay-web/String/) |
| `value` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="send"><code><span class="field-name">send</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLDocument/" class="type-link">HTMLDocument</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#send"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.

| Name | Type | Default |
|------|------|---------|
| `body` | [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="abort"><code><span class="field-name">abort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#abort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Aborts the request if it has already been sent.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getResponseHeader"><code><span class="field-name">getResponseHeader</span><span class="parenthesis">(</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getResponseHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the string containing the text of the specified header, or `null` if either the response has not yet been received or the header doesn't exist in the response.

| Name | Type |
|------|------|
| `header` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAllResponseHeaders"><code><span class="field-name">getAllResponseHeaders</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAllResponseHeaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all the response headers, separated by CRLF, as a string, or `null` if no response has been received.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="overrideMimeType"><code><span class="field-name">overrideMimeType</span><span class="parenthesis">(</span><span class="arg-name">mime</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#overrideMimeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Overrides the MIME type returned by the server.

| Name | Type |
|------|------|
| `mime` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">ignored</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ignored` | [String](/api-docs/clay-web/String/) |

