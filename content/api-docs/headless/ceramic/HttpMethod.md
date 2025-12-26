---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpMethod
target: Headless
permalink: api-docs/headless/ceramic/HttpMethod/
---

# HttpMethod

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/ceramic/HttpMethod.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.HttpMethod</strong> (Abstract)</div>

HTTP request method enumeration supporting the most common HTTP verbs.

This enum abstract provides type-safe HTTP method constants that can be used
with the Ceramic HTTP plugin. All methods are backed by their standard
string representations and can be converted to/from strings automatically.

Supported methods:
- GET: Retrieve data from a server
- POST: Send data to create or modify resources
- PUT: Update or replace resources
- DELETE: Remove resources

Example usage:
```haxe
var method:HttpMethod = GET;
var methodString:String = method; // Implicit conversion to "GET"
var fromString:HttpMethod = "POST"; // Implicit conversion from string
```

## Type Conversions

**From:**
- `[String](/api-docs/headless/String/)`

**To:**
- `[String](/api-docs/headless/String/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |

