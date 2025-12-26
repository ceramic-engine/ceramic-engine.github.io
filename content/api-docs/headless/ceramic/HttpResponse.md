---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpResponse
target: Headless
permalink: api-docs/headless/ceramic/HttpResponse/
---

# HttpResponse

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/ceramic/HttpResponse.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.HttpResponse</strong> (Class)</div>

HTTP response data structure containing the complete response from an HTTP request.

This class encapsulates all data returned from an HTTP request including status codes,
response content (both text and binary), headers, and error information. The response
automatically handles content type detection and provides the appropriate content format.

Content handling:
- Text responses (based on MIME type) are available via the `content` property
- Binary responses are available via the `binaryContent` property
- Only one of `content` or `binaryContent` will be non-null based on the response type

Example usage:
```haxe
Http.request(options, function(response:HttpResponse) {
    if (response.status >= 200 && response.status < 300) {
        if (response.content != null) {
            trace("Text response: " + response.content);
        } else if (response.binaryContent != null) {
            trace("Binary response: " + response.binaryContent.length + " bytes");
        }
    } else {
        trace("Error: " + response.status + " - " + response.error);
    }
});
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="status"><div class="plugin-name">http</div><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HTTP status code returned by the server.
Common values: 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="content"><div class="plugin-name">http</div><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content as a string for text-based responses.
This is null for binary responses or when an error occurred.
The content is automatically decoded based on the response's Content-Type header.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="binaryContent"><div class="plugin-name">http</div><code><span class="field-name">binaryContent</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#binaryContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content as raw bytes for binary responses.
This is null for text-based responses or when an error occurred.
Use this for images, files, or other non-text data.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="error"><div class="plugin-name">http</div><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Error message if the request failed.
This is null for successful requests.
Contains details about network errors, timeouts, or other failure reasons.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="headers"><div class="plugin-name">http</div><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of HTTP response headers with properly formatted keys.
Header names are normalized to proper case (e.g., "Content-Type").
Common headers include Content-Type, Content-Length, Set-Cookie, etc.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">http</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">binaryContent</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">headers</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `status` | [Int](/api-docs/headless/Int/) | | * HTTP status code returned by the server. Common values: 200 (OK), 404 (Not Found), 500 (Internal Server Error), etc. |
| `content` | [String](/api-docs/headless/String/) | | * Response content as a string for text-based responses. This is null for binary responses or when an error occurred. The content is automatically decoded based on the response's Content-Type header. |
| `binaryContent` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | | * Response content as raw bytes for binary responses. This is null for text-based responses or when an error occurred. Use this for images, files, or other non-text data. |
| `error` | [Null](/api-docs/headless/Null/)<[String](/api-docs/headless/String/)> | *(optional)* | * Error message if the request failed. This is null for successful requests. Contains details about network errors, timeouts, or other failure reasons. |
| `headers` | [Map](/api-docs/headless/Map/) | | * Map of HTTP response headers with properly formatted keys. Header names are normalized to proper case (e.g., "Content-Type"). Common headers include Content-Type, Content-Length, Set-Cookie, etc. |

## Private Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">http</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this HTTP response for debugging purposes.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | A formatted string showing the response status, content info, headers, and error |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

