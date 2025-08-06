---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Process
target: Unity
permalink: api-docs/unity/sys/io/Process/
---

# Process

<div class="type-hierarchy"><strong>sys.io.Process</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="stdout"><code><span class="field-name">stdout</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Input/" class="type-link">haxe.io.Input</a></code><a class="header-anchor" href="#stdout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard output. The output stream where a process writes its output data.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stderr"><code><span class="field-name">stderr</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Input/" class="type-link">haxe.io.Input</a></code><a class="header-anchor" href="#stderr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard error. The output stream to output error messages or diagnostics.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stdin"><code><span class="field-name">stdin</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/io/Output/" class="type-link">haxe.io.Output</a></code><a class="header-anchor" href="#stdin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard input. The stream data going into a process.

<hr class="field-separator" />

<div class="signature field-method has-description" id="exitCode"><code><span class="field-name">exitCode</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">block</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exitCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Query the exit code of the process.
If `block` is true or not specified, it will block until the process terminates.
If `block` is false, it will return either the process exit code if it's already terminated or null if it's still running.
If the process has already exited, return the exit code immediately.

| Name | Type | Default |
|------|------|---------|
| `block` | [Bool](/api-docs/unity/Bool/) | `true` |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the process handle and release the associated resources.
All `Process` fields should not be used after `close()` is called.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">detached</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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
| `cmd` | [String](/api-docs/unity/String/) | |
| `args` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | *(optional)* |
| `detached` | [Bool](/api-docs/unity/Bool/) | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="native"><code><span class="field-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/_Process/NativeProcess/" class="type-link">cs.system.diagnostics._Process.NativeProcess</a></code><a class="header-anchor" href="#native"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="createNativeProcess"><code><span class="field-name">createNativeProcess</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/_Process/NativeProcess/" class="type-link">cs.system.diagnostics._Process.NativeProcess</a></code><a class="header-anchor" href="#createNativeProcess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `cmd` | [String](/api-docs/unity/String/) | |
| `args` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | *(optional)* |

| Returns |
|---------|
| [cs.system.diagnostics._Process.NativeProcess](/api-docs/unity/cs/system/diagnostics/_Process/NativeProcess/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildArgumentsString"><code><span class="field-name">buildArgumentsString</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#buildArgumentsString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `args` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

