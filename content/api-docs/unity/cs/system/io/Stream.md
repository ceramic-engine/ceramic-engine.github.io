---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Stream
target: Unity
permalink: api-docs/unity/cs/system/io/Stream/
---

# Stream

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <strong>cs.system.io.Stream</strong> (extern class) → <a href="/api-docs/unity/cs/system/io/FileStream/">FileStream</a>, <a href="/api-docs/unity/cs/system/io/MemoryStream/">MemoryStream</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IDisposable/">cs.system.IDisposable</a></div>

## Static Members

<div class="signature field-var no-description" id="Null"><code><span class="field-name">Null</span><span class="operator">:</span> <a href="#" class="type-link">Stream</a></code><a class="header-anchor" href="#Null"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Synchronized"><code><span class="field-name">Synchronized</span><span class="parenthesis">(</span><span class="arg-name">stream</span><span class="operator">:</span> <a href="#" class="type-link">Stream</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Stream</a></code><a class="header-anchor" href="#Synchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stream` | [Stream](/api-docs/unity/cs/system/io/Stream/) |

| Returns |
|---------|
| [Stream](/api-docs/unity/cs/system/io/Stream/) |

## Instance Members

<div class="signature field-var no-description" id="WriteTimeout"><code><span class="field-name">WriteTimeout</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#WriteTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ReadTimeout"><code><span class="field-name">ReadTimeout</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ReadTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Position"><code><span class="field-name">Position</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#Position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Length"><code><span class="field-name">Length</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#Length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanTimeout"><code><span class="field-name">CanTimeout</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanTimeout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanWrite"><code><span class="field-name">CanWrite</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanSeek"><code><span class="field-name">CanSeek</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanSeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanRead"><code><span class="field-name">CanRead</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Dispose"><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateWaitHandle"><code><span class="field-name">CreateWaitHandle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/WaitHandle/" class="type-link">cs.system.threading.WaitHandle</a></code><a class="header-anchor" href="#CreateWaitHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.threading.WaitHandle](/api-docs/unity/cs/system/threading/WaitHandle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Flush"><code><span class="field-name">Flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Read"><code><span class="field-name">Read</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `offset` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadByte"><code><span class="field-name">ReadByte</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ReadByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Seek"><code><span class="field-name">Seek</span><span class="parenthesis">(</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="operator">,</span> <span class="arg-name">origin</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#Seek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `offset` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |
| `origin` | Anonymous |

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetLength"><code><span class="field-name">SetLength</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Write"><code><span class="field-name">Write</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `offset` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteByte"><code><span class="field-name">WriteByte</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteByte"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginRead"><code><span class="field-name">BeginRead</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AsyncCallback/" class="type-link">cs.system.AsyncCallback</a><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a></code><a class="header-anchor" href="#BeginRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `offset` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |
| `callback` | [cs.system.AsyncCallback](/api-docs/unity/cs/system/AsyncCallback/) |
| `state` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginWrite"><code><span class="field-name">BeginWrite</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AsyncCallback/" class="type-link">cs.system.AsyncCallback</a><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a></code><a class="header-anchor" href="#BeginWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `offset` | [Int](/api-docs/unity/Int/) |
| `count` | [Int](/api-docs/unity/Int/) |
| `callback` | [cs.system.AsyncCallback](/api-docs/unity/cs/system/AsyncCallback/) |
| `state` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndRead"><code><span class="field-name">EndRead</span><span class="parenthesis">(</span><span class="arg-name">asyncResult</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EndRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `asyncResult` | [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndWrite"><code><span class="field-name">EndWrite</span><span class="parenthesis">(</span><span class="arg-name">asyncResult</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EndWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `asyncResult` | [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

