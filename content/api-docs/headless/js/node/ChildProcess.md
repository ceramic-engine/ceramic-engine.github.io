---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: ChildProcess
target: Headless
permalink: api-docs/headless/js/node/ChildProcess/
---

# ChildProcess

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/ChildProcess.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.ChildProcess</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="spawn"><code><span class="field-name">spawn</span><span class="parenthesis">(</span><span class="arg-name">command</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/" class="type-link">js.node.child_process._ChildProcess.ChildProcessObject</a></code><a class="header-anchor" href="#spawn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Launches a new process with the given `command`, with command line arguments in `args`.
If omitted, `args` defaults to an empty `Array`.

The third argument is used to specify additional options, which defaults to:
{ cwd: null,
env: process.env
}

Note that if spawn receives an empty options object, it will result in spawning the process with an empty
environment rather than using `process.env`. This due to backwards compatibility issues with a deprecated API.

| Name | Type | Default |
|------|------|---------|
| `command` | [String](/api-docs/headless/String/) | |
| `args` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | *(optional)* |

| Returns |
|---------|
| [js.node.child_process._ChildProcess.ChildProcessObject](/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exec"><code><span class="field-name">exec</span><span class="parenthesis">(</span><span class="arg-name">command</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/ChildProcessExecCallback/" class="type-link">ChildProcessExecCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/" class="type-link">js.node.child_process._ChildProcess.ChildProcessObject</a></code><a class="header-anchor" href="#exec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Runs a command in a shell and buffers the output.

`command` is the command to run, with space-separated arguments.

The default `options` are:
{ encoding: 'utf8',
timeout: 0,
maxBuffer: 200*1024,
killSignal: 'SIGTERM',
cwd: null,
env: null }

| Name | Type |
|------|------|
| `command` | [String](/api-docs/headless/String/) |
| `callback` | [ChildProcessExecCallback](/api-docs/headless/js/node/ChildProcessExecCallback/) |

| Returns |
|---------|
| [js.node.child_process._ChildProcess.ChildProcessObject](/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="execFile"><code><span class="field-name">execFile</span><span class="parenthesis">(</span><span class="arg-name">file</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ChildProcessExecCallback/" class="type-link">ChildProcessExecCallback</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/" class="type-link">js.node.child_process._ChildProcess.ChildProcessObject</a></code><a class="header-anchor" href="#execFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is similar to `exec` except it does not execute a subshell but rather the specified file directly.
This makes it slightly leaner than `exec`

| Name | Type | Default |
|------|------|---------|
| `file` | [String](/api-docs/headless/String/) | |
| `callback` | [Null](/api-docs/headless/Null/)<[ChildProcessExecCallback](/api-docs/headless/js/node/ChildProcessExecCallback/)> | *(optional)* |

| Returns |
|---------|
| [js.node.child_process._ChildProcess.ChildProcessObject](/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fork"><code><span class="field-name">fork</span><span class="parenthesis">(</span><span class="arg-name">modulePath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/" class="type-link">js.node.child_process._ChildProcess.ChildProcessObject</a></code><a class="header-anchor" href="#fork"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is a special case of the `spawn` functionality for spawning Node processes.
In addition to having all the methods in a normal `ChildProcess` instance,
the returned object has a communication channel built-in.
See `send` for details.

| Name | Type | Default |
|------|------|---------|
| `modulePath` | [String](/api-docs/headless/String/) | |
| `args` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | *(optional)* |

| Returns |
|---------|
| [js.node.child_process._ChildProcess.ChildProcessObject](/api-docs/headless/js/node/child_process/_ChildProcess/ChildProcessObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="spawnSync"><code><span class="field-name">spawnSync</span><span class="parenthesis">(</span><span class="arg-name">command</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ChildProcessSpawnSyncOptions/" class="type-link">ChildProcessSpawnSyncOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/ChildProcessSpawnSyncResult/" class="type-link">ChildProcessSpawnSyncResult</a></code><a class="header-anchor" href="#spawnSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `spawn`.

`spawnSync` will not return until the child process has fully closed.
When a timeout has been encountered and `killSignal` is sent, the method won't return until the process
has completely exited. That is to say, if the process handles the SIGTERM signal and doesn't exit,
your process will wait until the child process has exited.

| Name | Type | Default |
|------|------|---------|
| `command` | [String](/api-docs/headless/String/) | |
| `options` | [Null](/api-docs/headless/Null/)<[ChildProcessSpawnSyncOptions](/api-docs/headless/js/node/ChildProcessSpawnSyncOptions/)> | *(optional)* |

| Returns |
|---------|
| [ChildProcessSpawnSyncResult](/api-docs/headless/js/node/ChildProcessSpawnSyncResult/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="execFileSync"><code><span class="field-name">execFileSync</span><span class="parenthesis">(</span><span class="arg-name">command</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#execFileSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `execFile`.

`execFileSync` will not return until the child process has fully closed.
When a timeout has been encountered and `killSignal` is sent, the method won't return until the process
has completely exited. That is to say, if the process handles the SIGTERM signal and doesn't exit,
your process will wait until the child process has exited.

If the process times out, or has a non-zero exit code, this method will throw.
The Error object will contain the entire result from `spawnSync`

| Name | Type | Default |
|------|------|---------|
| `command` | [String](/api-docs/headless/String/) | |
| `args` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | *(optional)* |

| Returns |
|---------|
| [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="execSync"><code><span class="field-name">execSync</span><span class="parenthesis">(</span><span class="arg-name">command</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/ChildProcessSpawnSyncOptions/" class="type-link">ChildProcessSpawnSyncOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/js/node/Buffer/" class="type-link">Buffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#execSync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronous version of `exec`.

`execSync` will not return until the child process has fully closed.
When a timeout has been encountered and `killSignal` is sent, the method won't return until the process
has completely exited. That is to say, if the process handles the SIGTERM signal and doesn't exit,
your process will wait until the child process has exited.

If the process times out, or has a non-zero exit code, this method will throw.
The Error object will contain the entire result from `spawnSync`

| Name | Type | Default |
|------|------|---------|
| `command` | [String](/api-docs/headless/String/) | |
| `options` | [Null](/api-docs/headless/Null/)<[ChildProcessSpawnSyncOptions](/api-docs/headless/js/node/ChildProcessSpawnSyncOptions/)> | *(optional)* |

| Returns |
|---------|
| [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Buffer](/api-docs/headless/js/node/Buffer/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "child_process" |

