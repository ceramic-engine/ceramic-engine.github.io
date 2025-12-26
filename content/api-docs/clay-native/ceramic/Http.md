---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: Http
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Http/
---

# Http

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/ceramic/Http.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Http</strong> (Class)</div>

A cross-platform and high level HTTP request utility that provides a unified interface
for making HTTP requests across all supported Ceramic platforms.

This class serves as the main entry point for HTTP networking in Ceramic applications,
providing automatic header formatting, parameter encoding, and response processing.

Features:
- Cross-platform HTTP requests (web, mobile, desktop, Unity)
- Automatic parameter encoding for GET and POST requests
- Header normalization and formatting
- Support for both text and binary responses
- Timeout handling
- Content-Length automatic calculation
- Support for multiple headers with the same key via HttpHeaders

Example usage:
```haxe
Http.request({
    url: "https://api.example.com/data",
    method: GET,
    params: ["key" => "value"],
    headers: ["Authorization" => "Bearer token"],
    timeout: 30
}, function(response) {
    if (response.status == 200) {
        trace("Success: " + response.content);
    } else {
        trace("Error: " + response.error);
    }
});
```

## Static Members

<div class="signature field-method has-description has-plugin" id="request"><div class="plugin-name">http</div><code><span class="field-name">request</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/HttpRequestOptions/" class="type-link">HttpRequestOptions</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#request"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs an HTTP request with the specified options.

This method handles the complete HTTP request lifecycle including:
- Header formatting and normalization
- Parameter encoding for GET/POST requests
- Content-Length calculation
- Response processing and cleanup



| Name | Type | Description |
|------|------|-------------|
| `options` | [HttpRequestOptions](/api-docs/clay-native/ceramic/HttpRequestOptions/) | The HTTP request configuration including URL, method, headers, parameters, and timeout  |
| `done` | Function | Callback function that receives the HTTP response when the request completes |

