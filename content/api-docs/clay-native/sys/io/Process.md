---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Process
target: Clay (Native)
permalink: api-docs/clay-native/sys/io/Process/
---

# Process

<div class="type-hierarchy"><strong>sys.io.Process</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="stdout"><code><span class="field-name">stdout</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Input/" class="type-link">haxe.io.Input</a></code><a class="header-anchor" href="#stdout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard output. The output stream where a process writes its output data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stderr"><code><span class="field-name">stderr</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Input/" class="type-link">haxe.io.Input</a></code><a class="header-anchor" href="#stderr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard error. The output stream to output error messages or diagnostics.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stdin"><code><span class="field-name">stdin</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Output/" class="type-link">haxe.io.Output</a></code><a class="header-anchor" href="#stdin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard input. The stream data going into a process.

<hr class="field-separator" />

<div class="signature field-method has-description" id="exitCode"><code><span class="field-name">exitCode</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">block</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exitCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Query the exit code of the process.
If `block` is true or not specified, it will block until the process terminates.
If `block` is false, it will return either the process exit code if it's already terminated or null if it's still running.
If the process has already exited, return the exit code immediately.

| Name | Type | Default |
|------|------|---------|
| `block` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the process handle and release the associated resources.
All `Process` fields should not be used after `close()` is called.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">detached</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a `Process` object, which run the given command immediately.

Command arguments can be passed in two ways: 1. using `args`, 2. appending to `cmd` and leaving `args` as `null`.

1. When using `args` to pass command arguments, each argument will be automatically quoted, and shell meta-characters will be escaped if needed.
`cmd` should be an executable name that can be located in the `PATH` environment variable, or a path to an executable.

2. When `args` is not given or is `null`, command arguments can be appended to `cmd`. No automatic quoting/escaping will be performed. `cmd` should be formatted exactly as it would be when typed at the command line.
It can run executables, as well as shell commands that are not executables (e.g. on Windows: `dir`, `cd`, `echo` etc).

`detached` allows the created process to be standalone. You cannot communicate with it but you can look at its exit code. Not supported on php.

`close()` should be called when the `Process` is no longer used.

| Name | Type | Default |
|------|------|---------|
| `cmd` | [String](/api-docs/clay-native/String/) | |
| `args` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> | *(optional)* |
| `detached` | [Bool](/api-docs/clay-native/Bool/) | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="p"><code><span class="field-name">p</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#p"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

