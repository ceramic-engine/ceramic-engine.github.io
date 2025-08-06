---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Attribute
target: Unity
permalink: api-docs/unity/cs/system/Attribute/
---

# Attribute

<div class="type-hierarchy"><strong>cs.system.Attribute</strong> (extern class) → <a href="/api-docs/unity/cs/internal/GenericInterface/">cs.internal.GenericInterface</a>, <a href="/api-docs/unity/cs/system/runtime/interopservices/StructLayoutAttribute/">cs.system.runtime.interopservices.StructLayoutAttribute</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_Attribute/">cs.system.runtime.interopservices._Attribute</a></div>

## Static Members

<div class="signature field-method no-description" id="GetCustomAttribute"><code><span class="field-name">GetCustomAttribute</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/ParameterInfo/" class="type-link">cs.system.reflection.ParameterInfo</a><span class="operator">,</span> <span class="arg-name">attributeType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Attribute</a></code><a class="header-anchor" href="#GetCustomAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `element` | [cs.system.reflection.ParameterInfo](/api-docs/unity/cs/system/reflection/ParameterInfo/) |
| `attributeType` | [Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Attribute](/api-docs/unity/cs/system/Attribute/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCustomAttributes"><code><span class="field-name">GetCustomAttributes</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">cs.system.reflection.Assembly</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">Attribute</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCustomAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `element` | [cs.system.reflection.Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Attribute](/api-docs/unity/cs/system/Attribute/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDefined"><code><span class="field-name">IsDefined</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Module/" class="type-link">cs.system.reflection.Module</a><span class="operator">,</span> <span class="arg-name">attributeType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `element` | [cs.system.reflection.Module](/api-docs/unity/cs/system/reflection/Module/) |
| `attributeType` | [Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="TypeId"><code><span class="field-name">TypeId</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#TypeId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDefaultAttribute"><code><span class="field-name">IsDefaultAttribute</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDefaultAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Match"><code><span class="field-name">Match</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

