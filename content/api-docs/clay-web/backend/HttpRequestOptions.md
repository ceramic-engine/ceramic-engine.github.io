---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpRequestOptions
target: Clay (Web)
permalink: api-docs/clay-web/backend/HttpRequestOptions/
---

# HttpRequestOptions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/backend/HttpRequestOptions.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.HttpRequestOptions</strong> (Typedef)</div>

Low-level HTTP request options used by the backend HTTP implementation.

This typedef defines the core parameters required for making HTTP requests
at the backend level. It provides the minimal set of options needed across
all platform implementations without any high-level conveniences.

These options are used directly by the platform-specific HTTP implementations
and are extended by the higher-level ceramic.HttpRequestOptions for additional
functionality like automatic parameter encoding.

All properties except `url` are optional and have sensible defaults:
- method defaults to GET
- headers defaults to empty map
- content defaults to null (no body)
- timeout defaults to platform-specific default

Example usage:
```haxe
var options:HttpRequestOptions = {
    url: "https://api.example.com/data",
    method: POST,
    headers: ["Content-Type" => "application/json"],
    content: '{"key": "value"}',
    timeout: 30
};
```

