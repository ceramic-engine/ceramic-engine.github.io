---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: StreamReader
target: Unity
permalink: api-docs/unity/cs/system/io/StreamReader/
---

# StreamReader

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <a href="/api-docs/unity/cs/system/io/TextReader/">TextReader</a> → <strong>cs.system.io.StreamReader</strong> (extern class) → <a href="/api-docs/unity/cs/system/io/StreamReader_NullStreamReader/">StreamReader_NullStreamReader</a></div>

## Static Members

<div class="signature field-var no-description" id="Null"><code><span class="field-name">Null</span><span class="operator">:</span> <a href="#" class="type-link">StreamReader</a></code><a class="header-anchor" href="#Null"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="EndOfStream"><code><span class="field-name">EndOfStream</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#EndOfStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentEncoding"><code><span class="field-name">CurrentEncoding</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/Encoding/" class="type-link">cs.system.text.Encoding</a></code><a class="header-anchor" href="#CurrentEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BaseStream"><code><span class="field-name">BaseStream</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/Stream/" class="type-link">Stream</a></code><a class="header-anchor" href="#BaseStream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Dispose"><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="arg-name">disposing</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `disposing` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DiscardBufferedData"><code><span class="field-name">DiscardBufferedData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DiscardBufferedData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Peek"><code><span class="field-name">Peek</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Peek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Read"><code><span class="field-name">Read</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadLine"><code><span class="field-name">ReadLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ReadLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadToEnd"><code><span class="field-name">ReadToEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ReadToEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">stream</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/Stream/" class="type-link">Stream</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stream` | [Stream](/api-docs/unity/cs/system/io/Stream/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

