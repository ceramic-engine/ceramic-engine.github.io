---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Nullable
target: Unity
permalink: api-docs/unity/cs/internal/_Null/Nullable/
---

# Nullable

<div class="type-hierarchy"><strong>cs.internal._Null.Nullable</strong> (private class)</div>

## Static Members

<div class="signature field-method no-description" id="ofDynamic"><code><span class="field-name">ofDynamic</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Nullable</a><span class="operator">&lt;</span><span class="type-name">ofDynamic.D</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#ofDynamic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `obj` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Nullable](/api-docs/unity/cs/internal/_Null/Nullable/)<ofDynamic.D> |

## Instance Members

<div class="signature field-var no-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <span class="type-name">cs.internal._Null.Nullable.T</span></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hasValue"><code><span class="field-name">hasValue</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="toDynamic"><code><span class="field-name">toDynamic</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toDynamic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <span class="type-name">cs.internal._Null.Nullable.T</span><span class="operator">,</span> <span class="arg-name">hasValue</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `v` | cs.internal._Null.Nullable.T |
| `hasValue` | [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:classCode` | "//This function is here to be used with Reflection, when the haxe.lang.Null type is known\n\t\tpublic static haxe.lang.Null<T> _ofDynamic(object obj) {\n\t\t\tif (obj == null) {\n\t\t\t\treturn new haxe.lang.Null<T>(default(T), false);\n\t\t\t} else if (typeof(T).Equals(typeof(double))) {\n\t\t\t\treturn new haxe.lang.Null<T>((T) (object) haxe.lang.Runtime.toDouble(obj), true);\n\t\t\t} else if (typeof(T).Equals(typeof(int))) {\n\t\t\t\treturn new haxe.lang.Null<T>((T) (object) haxe.lang.Runtime.toInt(obj), true);\n\t\t\t} else {\n\t\t\t\treturn new haxe.lang.Null<T>((T) obj, true);\n\t\t\t}\n\t\t}\n\n\t\tpublic static implicit operator haxe.lang.Null<T>(T val) {\n\t\t\treturn new haxe.lang.Null<T>(val, true);\n\t\t}\n\n\t\tpublic static implicit operator Null<T>(__NoValue__ noValue) {\n\t\t\treturn new haxe.lang.Null<T>(default(T), false);\n\t\t}\n\n\t\tpublic sealed class __NoValue__ {\n\t\t\tprivate __NoValue__() {}\n\t\t}\n\n\t\toverride public string ToString() {\n\t\t\tif (!hasValue) return \"null\";\n\t\t\telse return value.ToString();\n\t\t}\n" |
| `:struct` | - |
| `:nativeGen` | - |

