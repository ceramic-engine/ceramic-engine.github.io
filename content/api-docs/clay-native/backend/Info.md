---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Info
target: Clay (Native)
permalink: api-docs/clay-native/backend/Info/
---

# Info

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Info.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Info</strong> (Class)</div>

Clay backend implementation providing platform and asset information.

This class supplies information about:
- System capabilities and storage locations
- Supported asset file extensions
- Platform-specific audio format support

The audio format detection on web platforms dynamically tests browser
capabilities to determine which formats can be played, accounting for
different browser implementations and versions.

## Instance Members

<div class="signature field-method has-description has-plugin" id="storageDirectory"><div class="plugin-name">clay</div><code><span class="field-name">storageDirectory</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#storageDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the platform-specific directory for persistent storage.

On SDL platforms (desktop), returns the user preferences directory
where the application can store settings and save data.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The storage directory path, or null if not available |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="imageExtensions"><div class="plugin-name">clay</div><code><span class="field-name">imageExtensions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#imageExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the list of supported image file extensions.


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | Array of extensions: ['png', 'jpg', 'jpeg'] |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="textExtensions"><div class="plugin-name">clay</div><code><span class="field-name">textExtensions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#textExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the list of file extensions treated as text assets.

These files are loaded as text rather than binary data.


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | Array of extensions: ['txt', 'json', 'fnt', 'atlas'] |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="soundExtensions"><div class="plugin-name">clay</div><code><span class="field-name">soundExtensions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#soundExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the list of supported audio file extensions.

On web platforms, this dynamically detects browser audio capabilities
by testing audio format support. The detection code is ported from
howler.js and handles browser-specific quirks:
- Old Opera versions that don't support MP3
- Safari version compatibility
- Format support varies by browser

On native platforms, returns all common formats.


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | Array of supported extensions (e.g., ['ogg', 'mp3', 'wav']) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shaderExtensions"><div class="plugin-name">clay</div><code><span class="field-name">shaderExtensions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#shaderExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the list of shader file extensions.


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | Array of extensions: ['frag', 'vert'] for fragment and vertex shaders |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

