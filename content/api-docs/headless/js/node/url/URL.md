---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: URL
target: Headless
permalink: api-docs/headless/js/node/url/URL/
---

# URL

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/url/URL.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.url.URL</strong> (extern class)</div>

Browser-compatible URL class, implemented by following the WHATWG URL Standard.
[Examples of parsed URLs](https://url.spec.whatwg.org/#example-url-parsing) may be found in the Standard itself.

## Instance Members

<div class="signature field-var has-description" id="hash"><code><span class="field-name">hash</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#hash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the fragment portion of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="host"><code><span class="field-name">host</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#host"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the host portion of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hostname"><code><span class="field-name">hostname</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#hostname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the hostname portion of the URL
The key difference between `url.host` and `url.hostname` is that `url.hostname` does not include the port.

<hr class="field-separator" />

<div class="signature field-var has-description" id="href"><code><span class="field-name">href</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#href"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the serialized URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the read-only serialization of the URL's origin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="password"><code><span class="field-name">password</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#password"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the password portion of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pathname"><code><span class="field-name">pathname</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#pathname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the path portion of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="port"><code><span class="field-name">port</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#port"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the port portion of the URL.

The port value may be a number or a string containing a number in the range `0` to `65535` (inclusive).
Setting the value to the default port of the `URL` objects given `protocol` will result in the port value becoming the empty string (`''`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="protocol"><code><span class="field-name">protocol</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#protocol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the protocol portion of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="search"><code><span class="field-name">search</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#search"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the serialized query portion of the URL.

<hr class="field-separator" />

<div class="signature field-var has-description" id="searchParams"><code><span class="field-name">searchParams</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/url/URLSearchParams/" class="type-link">URLSearchParams</a></code><a class="header-anchor" href="#searchParams"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the `URLSearchParams` object representing the query parameters of the URL.
This property is read-only; to replace the entirety of query parameters of the URL, use the `url.search` setter.
See [URLSearchParams](https://nodejs.org/api/url.html#url_class_urlsearchparams) documentation for details.

<hr class="field-separator" />

<div class="signature field-var has-description" id="username"><code><span class="field-name">username</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#username"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the username portion of the URL.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `toString()` method on the `URL` object returns the serialized URL.
The value returned is equivalent to that of `url.href` and `url.toJSON()`.

Because of the need for standard compliance, this method does not allow users to customize the serialization process of the URL.
For more flexibility, `require('url').format()` method might be of interest.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `toJSON()` method on the `URL` object returns the serialized URL.
The value returned is equivalent to that of `url.href` and `url.toString()`.

This method is automatically called when an `URL` object is serialized with `JSON.stringify()`.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `URL` object by parsing the `input` relative to the `base`.
If `base` is passed as a string, it will be parsed equivalent to `new URL(base)`.

| Name | Type | Default |
|------|------|---------|
| `input` | [String](/api-docs/headless/String/) | |
| `base` | [String](/api-docs/headless/String/) | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "url", "URL" |

