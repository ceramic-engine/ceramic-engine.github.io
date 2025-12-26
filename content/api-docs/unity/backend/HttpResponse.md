---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpResponse
target: Unity
permalink: api-docs/unity/backend/HttpResponse/
---

# HttpResponse

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/backend/HttpResponse.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.HttpResponse</strong> (Class)</div>

Low-level HTTP response data structure used by backend implementations.

This class represents the raw response data returned by platform-specific
HTTP implementations before any high-level processing. It contains the
essential response information that all platforms must provide.

The backend response is used internally by the HTTP plugin and is wrapped
by the higher-level ceramic.HttpResponse which provides additional
conveniences and processing.

Content handling at the backend level:
- Text content is provided via the `content` field
- Binary content is provided via the `binaryContent` field
- The decision of which field to populate is made by the platform implementation
based on the response's Content-Type header

This class is primarily used by platform-specific backend implementations
and should not be used directly by application code.

## Instance Members

<div class="signature field-var has-description has-plugin" id="status"><div class="plugin-name">http</div><code><span class="field-name">status</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#status"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HTTP status code returned by the server (e.g., 200, 404, 500)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="content"><div class="plugin-name">http</div><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content as a string for text responses.
This may contain trailing newlines that are cleaned up by higher-level processing.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="binaryContent"><div class="plugin-name">http</div><code><span class="field-name">binaryContent</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#binaryContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Response content as raw bytes for binary responses.
Defaults to null for text responses.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="error"><div class="plugin-name">http</div><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Error message for failed requests.
Defaults to null for successful requests.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="headers"><div class="plugin-name">http</div><code><span class="field-name">headers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#headers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

HTTP response headers as a flat array: [key1, value1, key2, value2, ...].
This format allows multiple headers with the same name.
Header names may not be normalized at this level.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">http</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">status</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">binaryContent</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">headers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `status` | [Int](/api-docs/unity/Int/) | HTTP status code returned by the server (e.g., 200, 404, 500) |
| `content` | [String](/api-docs/unity/String/) | * Response content as a string for text responses. This may contain trailing newlines that are cleaned up by higher-level processing. |
| `binaryContent` | [Null](/api-docs/unity/Null/)<[haxe.io.Bytes](/api-docs/unity/haxe/io/Bytes/)> | * Response content as raw bytes for binary responses. Defaults to null for text responses. |
| `error` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> | * Error message for failed requests. Defaults to null for successful requests. |
| `headers` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | * HTTP response headers as a flat array: [key1, value1, key2, value2, ...]. This format allows multiple headers with the same name. Header names may not be normalized at this level. |

## Private Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">http</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of this backend HTTP response for debugging.

Note: For binary content, only the byte length is shown to avoid large output.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A formatted string showing the response status, content info, headers, and error |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:structInit` | - |

