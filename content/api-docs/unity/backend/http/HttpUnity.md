---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpUnity
target: Unity
permalink: api-docs/unity/backend/http/HttpUnity/
---

# HttpUnity

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/backend/http/HttpUnity.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.http.HttpUnity</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="request"><div class="plugin-name">http</div><code><span class="field-name">request</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/backend/HttpRequestOptions/" class="type-link">backend.HttpRequestOptions</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#request"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `options` | [backend.HttpRequestOptions](/api-docs/unity/backend/HttpRequestOptions/) |
| `done` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="download"><div class="plugin-name">http</div><code><span class="field-name">download</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#download"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [String](/api-docs/unity/String/) |
| `targetPath` | [String](/api-docs/unity/String/) |
| `done` | Function |

## Instance Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">http</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="nextRequestId"><div class="plugin-name">http</div><code><span class="field-name">nextRequestId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextRequestId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="requestCallbacks"><div class="plugin-name">http</div><code><span class="field-name">requestCallbacks</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#requestCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unityHandleWebRequestResponse"><div class="plugin-name">http</div><code><span class="field-name">unityHandleWebRequestResponse</span><span class="parenthesis">(</span><span class="arg-name">requestId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">downloadHandler</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/networking/DownloadHandler/" class="type-link">unityengine.networking.DownloadHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unityHandleWebRequestResponse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `requestId` | [Int](/api-docs/unity/Int/) |
| `downloadHandler` | [unityengine.networking.DownloadHandler](/api-docs/unity/unityengine/networking/DownloadHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="finishDownload"><div class="plugin-name">http</div><code><span class="field-name">finishDownload</span><span class="parenthesis">(</span><span class="arg-name">tmpTargetPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finishDownload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tmpTargetPath` | [String](/api-docs/unity/String/) |
| `targetPath` | [String](/api-docs/unity/String/) |
| `url` | [String](/api-docs/unity/String/) |
| `done` | Function |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:classCode` | "\npublic System.Collections.IEnumerator unityRunWebRequest(int id, UnityEngine.Networking.UnityWebRequest request) {\n    yield return request.SendWebRequest();\n    unityHandleWebRequestResponse(id, request.downloadHandler);\n}\n" |

