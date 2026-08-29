---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Directory
target: Headless
permalink: api-docs/headless/js/html/Directory/
---

# Directory

<div class="type-hierarchy"><strong>js.html.Directory</strong> (extern class)</div>

## Instance Members

<div class="signature field-var no-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="path"><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFilesAndDirectories"><code><span class="field-name">getFilesAndDirectories</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/File/" class="type-link">File</a><span class="operator">,</span> <a href="#" class="type-link">Directory</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFilesAndDirectories"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[Array](/api-docs/headless/Array/)<[haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[File](/api-docs/headless/js/html/File/), [Directory](/api-docs/headless/js/html/Directory/)>>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFiles"><code><span class="field-name">getFiles</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">recursiveFlag</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/File/" class="type-link">File</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFiles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `recursiveFlag` | [Bool](/api-docs/headless/Bool/) | `false` |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/headless/js/lib/Promise/)<[Array](/api-docs/headless/Array/)<[File](/api-docs/headless/js/html/File/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

