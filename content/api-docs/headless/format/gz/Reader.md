---
layout: api-docs
category: api-docs
subCategory: doc
menu: Format
title: Reader
target: Headless
permalink: api-docs/headless/format/gz/Reader/
---

# Reader

<div class="view-source"><a href="https://github.com/ceramic-engine/format/blob/master/format/gz/Reader.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.gz.Reader</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readHeader"><code><span class="field-name">readHeader</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/format/gz/Header/" class="type-link">Header</a></code><a class="header-anchor" href="#readHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Header](/api-docs/headless/format/gz/Header/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readData"><code><span class="field-name">readData</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bufsize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `o` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) | |
| `bufsize` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Input/" class="type-link">haxe.io.Input</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [haxe.io.Input](/api-docs/headless/haxe/io/Input/) |

## Private Members

<div class="signature field-var no-description" id="i"><code><span class="field-name">i</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Input/" class="type-link">haxe.io.Input</a></code><a class="header-anchor" href="#i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="refill"><code><span class="field-name">refill</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#refill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buf` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |
| `pos` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) |

