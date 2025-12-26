---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpHeaders
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/HttpHeaders/
---

# HttpHeaders

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/ceramic/HttpHeaders.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.HttpHeaders</strong> (Abstract)</div>

A collection of HTTP headers that supports multiple values for the same header key.

Unlike Map<String, String>, this type allows adding the same header multiple times,
which is necessary for headers like Set-Cookie that can appear multiple times in
HTTP responses.

The underlying storage is a flat array of strings in the format:
[key1, value1, key2, value2, ...]

Example usage:
```haxe
var headers = new HttpHeaders();
headers.add("Content-Type", "application/json");
headers.add("Set-Cookie", "session=abc123");
headers.add("Set-Cookie", "user=john");  // Same header, different value

for (header in headers) {
    trace(header.key + ": " + header.value);
}
```

