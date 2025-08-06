---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Sys
target: Unity
permalink: api-docs/unity/Sys/
---

# Sys

<div class="type-hierarchy"><strong>Sys</strong> (Class)</div>

This class provides access to various base functions of system platforms.
Look in the `sys` package for more system APIs.

## Static Members

<div class="signature field-method has-description" id="println"><code><span class="field-name">println</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#println"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints any value to the standard output, followed by a newline.
On Windows, this function outputs a CRLF newline.
LF newlines are printed on all other platforms.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="args"><code><span class="field-name">args</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#args"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns all the arguments that were passed in the command line.
This does not include the interpreter or the name of the program file.

(java)(eval) On Windows, non-ASCII Unicode arguments will not work correctly.

(cs) Non-ASCII Unicode arguments will not work correctly.
| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEnv"><code><span class="field-name">getEnv</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getEnv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the value of the given environment variable, or `null` if it
doesn't exist.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sleep"><code><span class="field-name">sleep</span><span class="parenthesis">(</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sleep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Suspends execution for the given length of time (in seconds).

| Name | Type |
|------|------|
| `seconds` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCwd"><code><span class="field-name">getCwd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getCwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current working directory (usually the one in which the program was started).
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCwd"><code><span class="field-name">setCwd</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Changes the current working directory.

(java) This functionality is not available on Java; calling this function will throw.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="systemName"><code><span class="field-name">systemName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#systemName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the type of the current system. Possible values are:
- `"Windows"`
- `"Linux"`
- `"BSD"`
- `"Mac"`
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exit"><code><span class="field-name">exit</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exits the current process with the given exit code.

(macro)(eval) Being invoked in a macro or eval context (e.g. with `-x` or `--run`) immediately terminates
the compilation process, which also prevents the execution of any `--next` sections of compilation arguments.

| Name | Type |
|------|------|
| `code` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="time"><code><span class="field-name">time</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives the most precise timestamp value available (in seconds).
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cpuTime"><code><span class="field-name">cpuTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#cpuTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gives the most precise timestamp value available (in seconds),
but only accounts for the actual time spent running on the CPU for the current thread/process.
| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

## Private Members

<div class="signature field-var no-description" id="epochTicks"><code><span class="field-name">epochTicks</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#epochTicks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

