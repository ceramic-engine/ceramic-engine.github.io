---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NativeProcess
target: Clay (Native)
permalink: api-docs/clay-native/cpp/NativeProcess/
---

# NativeProcess

<div class="type-hierarchy"><strong>cpp.NativeProcess</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="process_run"><code><span class="field-name">process_run</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vargs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#process_run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cmd` | [String](/api-docs/clay-native/String/) |
| `vargs` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_run_with_show"><code><span class="field-name">process_run_with_show</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vargs</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">inShow</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#process_run_with_show"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cmd` | [String](/api-docs/clay-native/String/) |
| `vargs` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `inShow` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_stdout_read"><code><span class="field-name">process_stdout_read</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#process_stdout_read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |
| `buf` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_stderr_read"><code><span class="field-name">process_stderr_read</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#process_stderr_read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |
| `buf` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_stdin_write"><code><span class="field-name">process_stdin_write</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#process_stdin_write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |
| `buf` | [haxe.io.BytesData](/api-docs/clay-native/haxe/io/BytesData/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `len` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_stdin_close"><code><span class="field-name">process_stdin_close</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process_stdin_close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_exit"><code><span class="field-name">process_exit</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">block</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#process_exit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |
| `block` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_pid"><code><span class="field-name">process_pid</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#process_pid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_kill"><code><span class="field-name">process_kill</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process_kill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="process_close"><code><span class="field-name">process_close</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#process_close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [Dynamic](/api-docs/clay-native/Dynamic/) |

