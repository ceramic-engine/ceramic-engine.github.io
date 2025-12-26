---
layout: api-docs
category: api-docs
subCategory: doc
menu: Akifox-asynchttp
title: URL
target: Clay (Native)
permalink: api-docs/clay-native/com/akifox/asynchttp/URL/
---

# URL

<div class="view-source"><a href="https://github.com/ceramic-engine/akifox-asynchttp/blob/master/com/akifox/asynchttp/URL.hx">View source</a></div>

<div class="type-hierarchy"><strong>com.akifox.asynchttp.URL</strong> (Class)</div>

##URL

This class represents an URL and it is used by the library to handle URLs

@repo [akifox-asynchttp repository](https://github.com/yupswing/akifox-asynchttp)

@author Simone Cingano (yupswing) [Akifox Studio](http://akifox.com)

@licence MIT Licence

## Instance Members

<div class="signature field-var has-description" id="isSsl"><code><span class="field-name">isSsl</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSsl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the URL use an SSL protocol

<hr class="field-separator" />

<div class="signature field-var has-description" id="isHttp"><code><span class="field-name">isHttp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHttp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the URL use an HTTP(S) protocol

<hr class="field-separator" />

<div class="signature field-var has-description" id="isRelative"><code><span class="field-name">isRelative</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRelative"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the URL is relative
(Only absolute URLs are complete. Any relative one needs to be merged with a complete to make it point to a resource)

<hr class="field-separator" />

<div class="signature field-var has-description" id="protocol"><code><span class="field-name">protocol</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#protocol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The protocol (ie:"http://")

<hr class="field-separator" />

<div class="signature field-var has-description" id="port"><code><span class="field-name">port</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#port"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The port (ie:80)

<hr class="field-separator" />

<div class="signature field-var has-description" id="host"><code><span class="field-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#host"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The host (ie:google.com)

<hr class="field-separator" />

<div class="signature field-var has-description" id="resource"><code><span class="field-name">resource</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#resource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The resource (ie:/search/index.html)

<hr class="field-separator" />

<div class="signature field-var has-description" id="querystring"><code><span class="field-name">querystring</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#querystring"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The querystring (ie:?q=test&s=1)

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clone"><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">URL</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deep copy of the URL


| Returns |
|---------|
| [URL](/api-docs/clay-native/com/akifox/asynchttp/URL/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="merge"><code><span class="field-name">merge</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="#" class="type-link">URL</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">URL</a></code><a class="header-anchor" href="#merge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Merge this URL with another one.
If this URL is relative it will copy the missing parts from the given one,
otherwise nothing will change.
(this method is needed to make a relative URL complete)



| Name | Type |
|------|------|
| `url` | [URL](/api-docs/clay-native/com/akifox/asynchttp/URL/) |

| Returns |
|---------|
| [URL](/api-docs/clay-native/com/akifox/asynchttp/URL/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">urlString</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Class instance



| Name | Type | Description |
|------|------|-------------|
| `urlString` | [String](/api-docs/clay-native/String/) | An URL string in standard format "protocol://host:port/resource?querystring" |

## Private Members

<div class="signature field-var no-description" id="regexURL"><code><span class="field-name">regexURL</span><span class="operator">:</span> <a href="/api-docs/clay-native/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#regexURL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="mergeResources"><code><span class="field-name">mergeResources</span><span class="parenthesis">(</span><span class="arg-name">resNew</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">resOriginal</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#mergeResources"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `resNew` | [String](/api-docs/clay-native/String/) | |
| `resOriginal` | [String](/api-docs/clay-native/String/) | `""` |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

