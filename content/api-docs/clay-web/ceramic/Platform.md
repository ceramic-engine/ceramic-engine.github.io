---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Platform
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Platform/
---

# Platform

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Platform.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Platform</strong> (Class)</div>

A class that encapsulate platform-specific code.
We usually want platform-specific code to be located in a backend,
but it may happen that sometimes creating a backend interface is overkill.
That's where this comes handy.

Platform provides utilities for:
- Reading assets synchronously from disk
- Getting platform-specific paths and environment variables
- Running external commands (including the Ceramic CLI)
- Electron-specific functionality on web builds
- Platform detection (e.g., isWindows())
- Application lifecycle (quit)
- RTTI access utilities

Most platform-specific code should be in backends, but this class
is useful for simple platform-specific operations that don't warrant
a full backend interface.

<div class="see"><strong>See:</strong> Backend</div>


## Static Members

<div class="signature field-method no-description" id="postAppInit"><code><span class="field-name">postAppInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#postAppInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="readStringFromAsset"><code><span class="field-name">readStringFromAsset</span><span class="parenthesis">(</span><span class="arg-name">assetPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#readStringFromAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read a string from an asset file, synchronously.
Warning: not available on every targets


| Name | Type |
|------|------|
| `assetPath` | [String](/api-docs/clay-web/String/) |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readBytesFromAsset"><code><span class="field-name">readBytesFromAsset</span><span class="parenthesis">(</span><span class="arg-name">assetPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#readBytesFromAsset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read bytes from an asset file, synchronously.
Warning: not available on every targets


| Name | Type |
|------|------|
| `assetPath` | [String](/api-docs/clay-web/String/) |

| Returns | Description |
|---------|-------------|
| [haxe.io.Bytes](/api-docs/clay-web/haxe/io/Bytes/) | String |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAssetsPath"><code><span class="field-name">getAssetsPath</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getAssetsPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns assets paths on disk (if any)
Warning: not available on every targets

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | String |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getRtti"><code><span class="field-name">getRtti</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getRtti.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/rtti/Classdef/" class="type-link">haxe.rtti.Classdef</a></code><a class="header-anchor" href="#getRtti"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [Class](/api-docs/clay-web/Class/)<getRtti.T> |

| Returns |
|---------|
| [haxe.rtti.Classdef](/api-docs/clay-web/haxe/rtti/Classdef/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveElectron"><code><span class="field-name">resolveElectron</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveElectron"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="nodeRequire"><code><span class="field-name">nodeRequire</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nodeRequire"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `module` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="electronRemote"><code><span class="field-name">electronRemote</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#electronRemote"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quit"><code><span class="field-name">quit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#quit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="runCeramic"><code><span class="field-name">runCeramic</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runCeramic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes the given Ceramic command asynchronously.
This will work only on desktop platforms that have a valid Ceramic installation available.
When the app has been launched by Ceramic itself, the same CLI tool will be used.
Otherwise, it will look for a `ceramic` command available in `PATH`


| Name | Type | Description |
|------|------|-------------|
| `args` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | (optional) The command arguments, which will be automatically escaped  |
| `callback` | Function | The callback, called when the command has finished (or failed) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEnv"><code><span class="field-name">getEnv</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getEnv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindows"><code><span class="field-name">isWindows</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exec"><code><span class="field-name">exec</span><span class="parenthesis">(</span><span class="arg-name">cmd</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exec"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes the given command asynchronously


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `cmd` | [String](/api-docs/clay-web/String/) | | The command to run  |
| `args` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | *(optional)* | (optional) The command arguments, which will be automatically escaped  |
| `callback` | Function | | The callback, called when the command has finished |

## Private Members

<div class="signature field-var no-description" id="testedElectronAvailability"><code><span class="field-name">testedElectronAvailability</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#testedElectronAvailability"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="testedElectronRemoteAvailability"><code><span class="field-name">testedElectronRemoteAvailability</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#testedElectronRemoteAvailability"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

