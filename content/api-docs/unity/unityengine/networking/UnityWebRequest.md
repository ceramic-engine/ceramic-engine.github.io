---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: UnityWebRequest
target: Unity
permalink: api-docs/unity/unityengine/networking/UnityWebRequest/
---

# UnityWebRequest

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/networking/UnityWebRequest.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.networking.UnityWebRequest</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="ClearCookieCache"><div class="plugin-name">unity</div><code><span class="field-name">ClearCookieCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ClearCookieCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Get"><div class="plugin-name">unity</div><code><span class="field-name">Get</span><span class="parenthesis">(</span><span class="arg-name">uri</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">UnityWebRequest</a></code><a class="header-anchor" href="#Get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uri` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [UnityWebRequest](/api-docs/unity/unityengine/networking/UnityWebRequest/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Post"><div class="plugin-name">unity</div><code><span class="field-name">Post</span><span class="parenthesis">(</span><span class="arg-name">uri</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">postData</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">UnityWebRequest</a></code><a class="header-anchor" href="#Post"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uri` | [String](/api-docs/unity/String/) |
| `postData` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [UnityWebRequest](/api-docs/unity/unityengine/networking/UnityWebRequest/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Put"><div class="plugin-name">unity</div><code><span class="field-name">Put</span><span class="parenthesis">(</span><span class="arg-name">uri</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bodyData</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">UnityWebRequest</a></code><a class="header-anchor" href="#Put"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uri` | [String](/api-docs/unity/String/) |
| `bodyData` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [UnityWebRequest](/api-docs/unity/unityengine/networking/UnityWebRequest/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Delete"><div class="plugin-name">unity</div><code><span class="field-name">Delete</span><span class="parenthesis">(</span><span class="arg-name">uri</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">UnityWebRequest</a></code><a class="header-anchor" href="#Delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uri` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [UnityWebRequest](/api-docs/unity/unityengine/networking/UnityWebRequest/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Head"><div class="plugin-name">unity</div><code><span class="field-name">Head</span><span class="parenthesis">(</span><span class="arg-name">uri</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">UnityWebRequest</a></code><a class="header-anchor" href="#Head"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uri` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [UnityWebRequest](/api-docs/unity/unityengine/networking/UnityWebRequest/) |

## Instance Members

<div class="signature field-var no-description has-plugin" id="isNetworkError"><div class="plugin-name">unity</div><code><span class="field-name">isNetworkError</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNetworkError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="isHttpError"><div class="plugin-name">unity</div><code><span class="field-name">isHttpError</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHttpError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="isDone"><div class="plugin-name">unity</div><code><span class="field-name">isDone</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="error"><div class="plugin-name">unity</div><code><span class="field-name">error</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="responseCode"><div class="plugin-name">unity</div><code><span class="field-name">responseCode</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#responseCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="url"><div class="plugin-name">unity</div><code><span class="field-name">url</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#url"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="method"><div class="plugin-name">unity</div><code><span class="field-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#method"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="timeout"><div class="plugin-name">unity</div><code><span class="field-name">timeout</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#timeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="downloadHandler"><div class="plugin-name">unity</div><code><span class="field-name">downloadHandler</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/networking/DownloadHandler/" class="type-link">DownloadHandler</a></code><a class="header-anchor" href="#downloadHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="uploadHandler"><div class="plugin-name">unity</div><code><span class="field-name">uploadHandler</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#uploadHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="disposeDownloadHandlerOnDispose"><div class="plugin-name">unity</div><code><span class="field-name">disposeDownloadHandlerOnDispose</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disposeDownloadHandlerOnDispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="disposeUploadHandlerOnDispose"><div class="plugin-name">unity</div><code><span class="field-name">disposeUploadHandlerOnDispose</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disposeUploadHandlerOnDispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Abort"><div class="plugin-name">unity</div><code><span class="field-name">Abort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Abort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="Dispose"><div class="plugin-name">unity</div><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="GetRequestHeader"><div class="plugin-name">unity</div><code><span class="field-name">GetRequestHeader</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetRequestHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="GetResponseHeaders"><div class="plugin-name">unity</div><code><span class="field-name">GetResponseHeaders</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#GetResponseHeaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Any](/api-docs/unity/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="SetRequestHeader"><div class="plugin-name">unity</div><code><span class="field-name">SetRequestHeader</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetRequestHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `value` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

