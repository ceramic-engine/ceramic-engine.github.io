---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpRequestOptions
target: Unity
permalink: api-docs/unity/ceramic/HttpRequestOptions/
---

# HttpRequestOptions

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/ceramic/HttpRequestOptions.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.HttpRequestOptions</strong> (Typedef)</div>

High-level HTTP request options for making HTTP requests.

This typedef provides a convenient interface for common HTTP request patterns
with support for automatic parameter encoding and flexible header types.

Features:
- url: The target URL for the HTTP request
- method: The HTTP method to use (GET, POST, PUT, DELETE)
- headers: HTTP headers as Map<String,String> or HttpHeaders (for multiple values per key)
- content: Raw string content to send in the request body
- timeout: Request timeout in seconds
- params: Key-value parameters that are automatically encoded based on the HTTP method

Parameter encoding behavior:
- For GET requests: Parameters are appended to the URL as query string
- For POST requests: Parameters are form-encoded and sent in the request body
- For other methods: Parameters are ignored (with a warning)

Example usage:
```haxe
var options:HttpRequestOptions = {
    url: "https://api.example.com/search",
    method: GET,
    params: ["q" => "search term", "limit" => "10"],
    headers: ["User-Agent" => "MyApp/1.0"],
    timeout: 30
};

// Or with HttpHeaders for multiple values:
var headers = new HttpHeaders();
headers.add("Accept", "application/json");
headers.add("Set-Cookie", "a=1");
headers.add("Set-Cookie", "b=2");
var options:HttpRequestOptions = {
    url: "https://api.example.com/data",
    headers: headers
};
```

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

