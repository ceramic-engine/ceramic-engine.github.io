---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: HttpNodejs
target: Headless
permalink: api-docs/headless/backend/http/HttpNodejs/
---

# HttpNodejs

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/backend/http/HttpNodejs.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.http.HttpNodejs</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="request"><div class="plugin-name">http</div><code><span class="field-name">request</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/backend/HttpRequestOptions/" class="type-link">backend.HttpRequestOptions</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">numRedirects</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#request"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `options` | [backend.HttpRequestOptions](/api-docs/headless/backend/HttpRequestOptions/) | |
| `done` | Function | |
| `numRedirects` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="download"><div class="plugin-name">http</div><code><span class="field-name">download</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#download"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [String](/api-docs/headless/String/) |
| `targetPath` | [String](/api-docs/headless/String/) |
| `done` | Function |

## Private Members

<div class="signature field-method no-description has-plugin" id="finishDownload"><div class="plugin-name">http</div><code><span class="field-name">finishDownload</span><span class="parenthesis">(</span><span class="arg-name">tmpTargetPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finishDownload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tmpTargetPath` | [String](/api-docs/headless/String/) |
| `targetPath` | [String](/api-docs/headless/String/) |
| `url` | [String](/api-docs/headless/String/) |
| `done` | Function |

