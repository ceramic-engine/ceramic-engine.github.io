---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpNative
target: Clay (Native)
permalink: api-docs/clay-native/backend/http/HttpNative/
---

# HttpNative

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/backend/http/HttpNative.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.http.HttpNative</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="download"><div class="plugin-name">http</div><code><span class="field-name">download</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#download"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [String](/api-docs/clay-native/String/) |
| `targetPath` | [String](/api-docs/clay-native/String/) |
| `done` | Function |

## Private Members

<div class="signature field-method no-description has-plugin" id="downloadToFile"><div class="plugin-name">http</div><code><span class="field-name">downloadToFile</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">localPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">followingLocation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#downloadToFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `url` | [String](/api-docs/clay-native/String/) | |
| `localPath` | [String](/api-docs/clay-native/String/) | |
| `followingLocation` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="finishDownload"><div class="plugin-name">http</div><code><span class="field-name">finishDownload</span><span class="parenthesis">(</span><span class="arg-name">tmpTargetPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finishDownload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tmpTargetPath` | [String](/api-docs/clay-native/String/) |
| `targetPath` | [String](/api-docs/clay-native/String/) |
| `url` | [String](/api-docs/clay-native/String/) |
| `done` | Function |

