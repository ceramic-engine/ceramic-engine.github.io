---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: File
target: Headless
permalink: api-docs/headless/sys/io/File/
---

# File

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/sys/io/File.hx">View source</a></div>

<div class="type-hierarchy"><strong>sys.io.File</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="getContent"><code><span class="field-name">getContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="saveContent"><code><span class="field-name">saveContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |
| `content` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBytes"><code><span class="field-name">getBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#getBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="saveBytes"><code><span class="field-name">saveBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="copy"><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="arg-name">srcPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dstPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcPath` | [String](/api-docs/headless/String/) |
| `dstPath` | [String](/api-docs/headless/String/) |

## Private Members

<div class="signature field-var no-description" id="copyBuf"><code><span class="field-name">copyBuf</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/buffer/Buffer/" class="type-link">js.node.buffer.Buffer</a></code><a class="header-anchor" href="#copyBuf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:dce` | - |

