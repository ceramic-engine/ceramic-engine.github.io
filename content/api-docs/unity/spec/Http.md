---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Http
target: Unity
permalink: api-docs/unity/spec/Http/
---

# Http

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Http.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Http</strong> (Interface) → <a href="/api-docs/unity/backend/Http/">backend.Http</a></div>

Backend interface for HTTP networking operations.

This interface provides HTTP client functionality for making web requests.
It's available when the http plugin is enabled in ceramic.yml.

The implementation handles platform-specific networking APIs and provides
a unified interface for GET, POST, PUT, DELETE and other HTTP methods.

Used by the ceramic.Http class to provide high-level HTTP functionality.

## Instance Members

<div class="signature field-method has-description" id="request"><code><span class="field-name">request</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/backend/HttpRequestOptions/" class="type-link">backend.HttpRequestOptions</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#request"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs an HTTP request with the specified options.

This is a flexible method that supports all HTTP methods, custom headers,
request bodies, and various response types. The request is performed
asynchronously and the callback is invoked when complete.



| Name | Type | Description |
|------|------|-------------|
| `options` | [backend.HttpRequestOptions](/api-docs/unity/backend/HttpRequestOptions/) | The request configuration including URL, method, headers, body, etc.  |
| `done` | Function | Callback invoked with the response (or error response on failure) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

