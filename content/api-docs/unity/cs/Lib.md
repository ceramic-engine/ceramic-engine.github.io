---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Lib
target: Unity
permalink: api-docs/unity/cs/Lib/
---

# Lib

<div class="type-hierarchy"><strong>cs.Lib</strong> (Class)</div>

Platform-specific C# Library. Provides some platform-specific functions for the C# target,
such as conversion from haxe types to native types and vice-versa.

## Static Members

<div class="signature field-method has-description" id="applyCultureChanges"><code><span class="field-name">applyCultureChanges</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyCultureChanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Changes the current culture settings to allow a consistent cross-target behavior.
Currently the only change made is in regard to the decimal separator, which is always set to "."

<hr class="field-separator" />

<div class="signature field-method has-description" id="nativeArray"><code><span class="field-name">nativeArray</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">nativeArray.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">equalLengthRequired</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">NativeArray</a><span class="operator">&lt;</span><span class="type-name">nativeArray.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#nativeArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a native array from the supplied Array. This native array is unsafe to be written on,
as it may or may not be linked to the actual Array implementation.

If equalLengthRequired is true, the result might be a copy of an array with the correct size.

| Name | Type |
|------|------|
| `arr` | [Array](/api-docs/unity/Array/)<nativeArray.T> |
| `equalLengthRequired` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [NativeArray](/api-docs/unity/cs/NativeArray/)<nativeArray.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="as"><code><span class="field-name">as</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">as.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">as.T</span></code><a class="header-anchor" href="#as"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides support for the "as" keyword in C#.
If the object is not of the supplied type "T", it will return null instead of rasing an exception.

This function will not work with Value Types (such as Int, Float, Bool...)

| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |
| `cl` | [Class](/api-docs/unity/Class/)<as.T> |

| Returns |
|---------|
| as.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromNativeType"><code><span class="field-name">fromNativeType</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromNativeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Class<> equivalent to the native System.Type type.

Currently Haxe's Class<> is equivalent to System.Type, but this is an implementation detail.
This may change in the future, so use this function whenever you need to perform such conversion.

| Name | Type |
|------|------|
| `t` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Class](/api-docs/unity/Class/)<[Dynamic](/api-docs/unity/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toNativeType"><code><span class="field-name">toNativeType</span><span class="parenthesis">(</span><span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#toNativeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a System.Type equivalent to the Haxe Class<> type.

Currently Haxe's Class<> is equivalent to System.Type, but this is an implementation detail.
This may change in the future, so use this function whenever you need to perform such conversion.

| Name | Type |
|------|------|
| `cl` | [Class](/api-docs/unity/Class/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNativeType"><code><span class="field-name">getNativeType</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#getNativeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the native System.Type from the supplied object. Will throw an exception in case of null being passed.

| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array"><code><span class="field-name">array</span><span class="parenthesis">(</span><span class="arg-name">native</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">NativeArray</a><span class="operator">&lt;</span><span class="type-name">array.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">array.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#array"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Haxe Array of a native Array.
Unless `erase_generics` is defined, it won't copy the contents of the native array,
so unless any operation triggers an array resize, all changes made to the Haxe array
will affect the native array argument.

| Name | Type |
|------|------|
| `native` | [NativeArray](/api-docs/unity/cs/NativeArray/)<array.T> |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<array.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rethrow"><code><span class="field-name">rethrow</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#rethrow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rethrow an exception. This is useful when manually filtering an exception in order
to keep the previous exception stack.

| Name | Type |
|------|------|
| `e` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="checked"><code><span class="field-name">checked</span><span class="parenthesis">(</span><span class="arg-name">block</span><span class="operator">:</span> <span class="type-name">checked.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#checked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a "checked" block, which throws exceptions for overflows.

Usage:
cs.Lib.checked({
var x = 1000;
while(true)
{
x *= x;
}
});
This method only exists at compile-time, so it can't be called via reflection.

| Name | Type |
|------|------|
| `block` | checked.V |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lock"><code><span class="field-name">lock</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">lock.O</span><span class="operator">,</span> <span class="arg-name">block</span><span class="operator">:</span> <span class="type-name">lock.V</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures that one thread does not enter a critical section of code while another thread
is in the critical section. If another thread attempts to enter a locked code, it
will wait, block, until the object is released.

This method only exists at compile-time, so it can't be called via reflection.

| Name | Type |
|------|------|
| `obj` | lock.O |
| `block` | lock.V |

## Private Members

<div class="signature field-var no-description" id="decimalSeparator"><code><span class="field-name">decimalSeparator</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#decimalSeparator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="p_nativeArray"><code><span class="field-name">p_nativeArray</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">p_nativeArray.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">ret</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#p_nativeArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arr` | [Array](/api-docs/unity/Array/)<p_nativeArray.T> |
| `ret` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

