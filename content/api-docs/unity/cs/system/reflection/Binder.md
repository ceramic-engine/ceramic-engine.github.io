---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Binder
target: Unity
permalink: api-docs/unity/cs/system/reflection/Binder/
---

# Binder

<div class="type-hierarchy"><strong>cs.system.reflection.Binder</strong> (extern class) → <a href="/api-docs/unity/cs/system/reflection/Binder_Default/">Binder_Default</a></div>

## Instance Members

<div class="signature field-method no-description" id="BindToField"><code><span class="field-name">BindToField</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">FieldInfo</a></code><a class="header-anchor" href="#BindToField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |
| `match` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/)> |
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `culture` | [cs.system.globalization.CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

| Returns |
|---------|
| [FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BindToMethod"><code><span class="field-name">BindToMethod</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MethodBase/" class="type-link">MethodBase</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">modifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterModifier/" class="type-link">ParameterModifier</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a><span class="operator">,</span> <span class="arg-name">names</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodBase/" class="type-link">MethodBase</a></code><a class="header-anchor" href="#BindToMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |
| `match` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/)> |
| `args` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `modifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ParameterModifier](/api-docs/unity/cs/system/reflection/ParameterModifier/)> |
| `culture` | [cs.system.globalization.CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |
| `names` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |
| `state` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ChangeType"><code><span class="field-name">ChangeType</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CultureInfo/" class="type-link">cs.system.globalization.CultureInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#ChangeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |
| `type` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `culture` | [cs.system.globalization.CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReorderArgumentArray"><code><span class="field-name">ReorderArgumentArray</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Ref/" class="type-link">cs.Ref</a><span class="operator">,</span> <span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ReorderArgumentArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `args` | [cs.Ref](/api-docs/unity/cs/Ref/) |
| `state` | [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SelectMethod"><code><span class="field-name">SelectMethod</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/MethodBase/" class="type-link">MethodBase</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">types</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">modifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterModifier/" class="type-link">ParameterModifier</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodBase/" class="type-link">MethodBase</a></code><a class="header-anchor" href="#SelectMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |
| `match` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/)> |
| `types` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |
| `modifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ParameterModifier](/api-docs/unity/cs/system/reflection/ParameterModifier/)> |

| Returns |
|---------|
| [MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SelectProperty"><code><span class="field-name">SelectProperty</span><span class="parenthesis">(</span><span class="arg-name">bindingAttr</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/PropertyInfo/" class="type-link">PropertyInfo</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">indexes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">modifiers</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/reflection/ParameterModifier/" class="type-link">ParameterModifier</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/PropertyInfo/" class="type-link">PropertyInfo</a></code><a class="header-anchor" href="#SelectProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `bindingAttr` | Anonymous |
| `match` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[PropertyInfo](/api-docs/unity/cs/system/reflection/PropertyInfo/)> |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `indexes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |
| `modifiers` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[ParameterModifier](/api-docs/unity/cs/system/reflection/ParameterModifier/)> |

| Returns |
|---------|
| [PropertyInfo](/api-docs/unity/cs/system/reflection/PropertyInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

