---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MimeType
target: Clay (Web)
permalink: api-docs/clay-web/js/html/MimeType/
---

# MimeType

<div class="type-hierarchy"><strong>js.html.MimeType</strong> (extern class)</div>

The `MimeType` interface provides contains information about a MIME type associated with a particular plugin. `NavigatorPlugins.mimeTypes` returns an array of this object.

Documentation [MimeType](https://developer.mozilla.org/en-US/docs/Web/API/MimeType) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MimeType$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MimeType></div>


## Instance Members

<div class="signature field-var has-description" id="description"><code><span class="field-name">description</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#description"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a description of the associated plugin or an empty string if there is none.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enabledPlugin"><code><span class="field-name">enabledPlugin</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Plugin/" class="type-link">Plugin</a></code><a class="header-anchor" href="#enabledPlugin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an instance of `Plugin` containing information about the plugin itself.

<hr class="field-separator" />

<div class="signature field-var has-description" id="suffixes"><code><span class="field-name">suffixes</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#suffixes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A string containing valid file extensions for the data displayed by the plugin, or an empty string if an extension is not valid for the particular module. For example, a browser's content decryption module may appear in the plugin list, but support more file extenions than can be anticipated. It might therefore return an empty string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="type"><code><span class="field-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the MIME type of the associated plugin.

