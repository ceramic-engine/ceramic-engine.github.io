---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: SignatureHelper
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/SignatureHelper/
---

# SignatureHelper

<div class="type-hierarchy"><strong>cs.system.reflection.emit.SignatureHelper</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_SignatureHelper/">cs.system.runtime.interopservices._SignatureHelper</a></div>

## Static Members

<div class="signature field-method no-description" id="GetFieldSigHelper"><code><span class="field-name">GetFieldSigHelper</span><span class="parenthesis">(</span><span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">cs.system.reflection.Module</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">SignatureHelper</a></code><a class="header-anchor" href="#GetFieldSigHelper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mod` | [cs.system.reflection.Module](/api-docs/unity/cs/system/reflection/Module/) |

| Returns |
|---------|
| [SignatureHelper](/api-docs/unity/cs/system/reflection/emit/SignatureHelper/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLocalVarSigHelper"><code><span class="field-name">GetLocalVarSigHelper</span><span class="parenthesis">(</span><span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">cs.system.reflection.Module</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">SignatureHelper</a></code><a class="header-anchor" href="#GetLocalVarSigHelper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mod` | [cs.system.reflection.Module](/api-docs/unity/cs/system/reflection/Module/) |

| Returns |
|---------|
| [SignatureHelper](/api-docs/unity/cs/system/reflection/emit/SignatureHelper/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMethodSigHelper"><code><span class="field-name">GetMethodSigHelper</span><span class="parenthesis">(</span><span class="arg-name">callingConvention</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">SignatureHelper</a></code><a class="header-anchor" href="#GetMethodSigHelper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `callingConvention` | Anonymous |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [SignatureHelper](/api-docs/unity/cs/system/reflection/emit/SignatureHelper/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetPropertySigHelper"><code><span class="field-name">GetPropertySigHelper</span><span class="parenthesis">(</span><span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">cs.system.reflection.Module</a><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">parameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">SignatureHelper</a></code><a class="header-anchor" href="#GetPropertySigHelper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mod` | [cs.system.reflection.Module](/api-docs/unity/cs/system/reflection/Module/) |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `parameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

| Returns |
|---------|
| [SignatureHelper](/api-docs/unity/cs/system/reflection/emit/SignatureHelper/) |

## Instance Members

<div class="signature field-method no-description" id="AddArguments"><code><span class="field-name">AddArguments</span><span class="parenthesis">(</span><span class="arg-name">arguments</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">requiredCustomModifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">optionalCustomModifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddArguments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arguments` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |
| `requiredCustomModifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)>> |
| `optionalCustomModifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddArgument"><code><span class="field-name">AddArgument</span><span class="parenthesis">(</span><span class="arg-name">argument</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">pinned</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddArgument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `argument` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `pinned` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddSentinel"><code><span class="field-name">AddSentinel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddSentinel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSignature"><code><span class="field-name">GetSignature</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetSignature"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

