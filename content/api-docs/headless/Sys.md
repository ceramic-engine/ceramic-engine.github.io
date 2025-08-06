---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Sys
target: Headless
permalink: api-docs/headless/Sys/
---

# Sys

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/Sys.hx">View source</a></div>

<div class="type-hierarchy"><strong>Sys</strong> (Class)</div>

This class provides access to various base functions of system platforms.
Look in the `sys` package for more system APIs.

## Static Members

<div class="signature field-method has-description" id="args"><code><span class="field-name">args</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#args"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all the arguments that were passed in the command line.
This does not include the interpreter or the name of the program file.

(java)(eval) On Windows, non-ASCII Unicode arguments will not work correctly.

(cs) Non-ASCII Unicode arguments will not work correctly.
| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCwd"><code><span class="field-name">getCwd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getCwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current working directory (usually the one in which the program was started).
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCwd"><code><span class="field-name">setCwd</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Changes the current working directory.

(java) This functionality is not available on Java; calling this function will throw.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="systemName"><code><span class="field-name">systemName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#systemName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the type of the current system. Possible values are:
- `"Windows"`
- `"Linux"`
- `"BSD"`
- `"Mac"`
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exit"><code><span class="field-name">exit</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exits the current process with the given exit code.

(macro)(eval) Being invoked in a macro or eval context (e.g. with `-x` or `--run`) immediately terminates
the compilation process, which also prevents the execution of any `--next` sections of compilation arguments.

| Name | Type |
|------|------|
| `code` | [Int](/api-docs/headless/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:dce` | - |

