---
layout: api-docs
category: api-docs
subCategory: doc
menu: Akifox-asynchttp
title: HttpHeaders
target: Clay (Native)
permalink: api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/
---

# HttpHeaders

<div class="view-source"><a href="https://github.com/ceramic-engine/akifox-asynchttp/blob/master/com/akifox/asynchttp/HttpHeaders.hx">View source</a></div>

<div class="type-hierarchy"><strong>com.akifox.asynchttp.HttpHeaders</strong> (Class)</div>

##HttpHeaders

This class represents an Http header collection and it is used by the library to handle HTTP Headers

@repo [akifox-asynchttp repository](https://github.com/yupswing/akifox-asynchttp)

@author Simone Cingano (yupswing) [Akifox Studio](http://akifox.com)

@licence MIT Licence

## Static Members

## Instance Members

<div class="signature field-var has-description" id="finalised"><code><span class="field-name">finalised</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#finalised"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tell if the instance is immutable

**NOTE:** The only way to change an immutable instance is copying it (`instance.clone()`) and change the copy

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HttpHeaders</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deep copy of the HttpHeaders


| Returns |
|---------|
| [HttpHeaders](/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="finalise"><code><span class="field-name">finalise</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finalise"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Make this instance immutable

**NOTE:** This method is called automatically once the HttpRequest instance, which handle this HttpHeaders instance, is sent

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterator on headers

**Use example:** `for (key in instance.keys)`
| Returns |
|---------|
| [Iterator](/api-docs/clay-native/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if an header exists

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an header value from its key (or "" if no header)

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HttpHeaders</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add an header and its value to the instance

**NOTE:** If already present the header will be overwritten

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-native/String/) |
| `value` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [HttpHeaders](/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="remove"><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">HttpHeaders</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove an header and its value from the instance

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [HttpHeaders](/api-docs/clay-native/com/akifox/asynchttp/HttpHeaders/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">headers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Class instance



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `headers` | [Dynamic](/api-docs/clay-native/Dynamic/) | `null` | Accept an Anonymous Structure (ie:{'Pragma':'no-cache'}) or an HttpHeaders instance |

## Private Members

<div class="signature field-var no-description" id="FORBIDDEN_ON_REQUEST"><code><span class="field-name">FORBIDDEN_ON_REQUEST</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#FORBIDDEN_ON_REQUEST"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

