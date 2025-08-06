---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MediaError
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MediaError/
---

# MediaError

<div class="type-hierarchy"><strong>js.html.MediaError</strong> (extern class)</div>

The `MediaError` interface represents an error which occurred while handling media in an HTML media element based on `HTMLMediaElement`, such as `audio` or `video`.

Documentation [MediaError](https://developer.mozilla.org/en-US/docs/Web/API/MediaError) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MediaError$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MediaError></div>


## Static Members

<div class="signature field-var no-description" id="MEDIA_ERR_ABORTED"><code><span class="field-name">MEDIA_ERR_ABORTED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MEDIA_ERR_ABORTED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MEDIA_ERR_NETWORK"><code><span class="field-name">MEDIA_ERR_NETWORK</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MEDIA_ERR_NETWORK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MEDIA_ERR_DECODE"><code><span class="field-name">MEDIA_ERR_DECODE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MEDIA_ERR_DECODE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MEDIA_ERR_SRC_NOT_SUPPORTED"><code><span class="field-name">MEDIA_ERR_SRC_NOT_SUPPORTED</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MEDIA_ERR_SRC_NOT_SUPPORTED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="code"><code><span class="field-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A number which represents the general type of error that occurred, as follows: `/en-US/docs/Web/API/MediaError/code`

<hr class="field-separator" />

<div class="signature field-var has-description" id="message"><code><span class="field-name">message</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#message"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `DOMString` object containing a human-readable string which provides specific diagnostic information to help the reader understand the error condition which occurred; specifically, it isn't simply a summary of what the error code means, but actual diagnostic information to help in understanding what exactly went wrong. This text and its format is not defined by the specification and will vary from one `user agent` to another. If no diagnostics are available, or no explanation can be provided, this value is an empty string (`""`).

