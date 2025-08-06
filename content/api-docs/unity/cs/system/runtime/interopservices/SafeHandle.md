---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: SafeHandle
target: Unity
permalink: api-docs/unity/cs/system/runtime/interopservices/SafeHandle/
---

# SafeHandle

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/runtime/constrainedexecution/CriticalFinalizerObject/">cs.system.runtime.constrainedexecution.CriticalFinalizerObject</a> → <strong>cs.system.runtime.interopservices.SafeHandle</strong> (extern class) → <a href="/api-docs/unity/microsoft/win32/safehandles/SafeHandleZeroOrMinusOneIsInvalid/">microsoft.win32.safehandles.SafeHandleZeroOrMinusOneIsInvalid</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IDisposable/">cs.system.IDisposable</a></div>

## Instance Members

<div class="signature field-var no-description" id="IsInvalid"><code><span class="field-name">IsInvalid</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsInvalid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsClosed"><code><span class="field-name">IsClosed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsClosed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handle"><code><span class="field-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#handle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="DangerousAddRef"><code><span class="field-name">DangerousAddRef</span><span class="parenthesis">(</span><span class="arg-name">success</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DangerousAddRef"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `success` | [cs.Ref](/api-docs/unity/cs/Ref/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DangerousGetHandle"><code><span class="field-name">DangerousGetHandle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#DangerousGetHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DangerousRelease"><code><span class="field-name">DangerousRelease</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DangerousRelease"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Dispose"><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetHandleAsInvalid"><code><span class="field-name">SetHandleAsInvalid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetHandleAsInvalid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReleaseHandle"><code><span class="field-name">ReleaseHandle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ReleaseHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetHandle"><code><span class="field-name">SetHandle</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">invalidHandleValue</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">ownsHandle</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `invalidHandleValue` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `ownsHandle` | [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

