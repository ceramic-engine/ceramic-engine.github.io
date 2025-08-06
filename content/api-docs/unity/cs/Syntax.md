---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Syntax
target: Unity
permalink: api-docs/unity/cs/Syntax/
---

# Syntax

<div class="type-hierarchy"><strong>cs.Syntax</strong> (extern class)</div>

Generate C# syntax not directly supported by Haxe.
Use only at low-level when specific target-specific code-generation is required.

## Static Members

<div class="signature field-method has-description" id="code"><code><span class="field-name">code</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Rest/" class="type-link">haxe.Rest</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inject `code` directly into generated source.

`code` must be a string constant.

Additional `args` are supported to provide code interpolation, for example:
```haxe
Syntax.code("System.Console.WriteLine({0} + {1})", "hi", 42);
```
will generate
```haxe
System.Console.WriteLine("hi" + 42);
```

Emits a compilation error if the count of `args` does not match the count of placeholders in `code`.

| Name | Type |
|------|------|
| `code` | [String](/api-docs/unity/String/) |
| `args` | [haxe.Rest](/api-docs/unity/haxe/Rest/)<[Dynamic](/api-docs/unity/Dynamic/)> |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="plainCode"><code><span class="field-name">plainCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#plainCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inject `code` directly into generated source.
The same as `cs.Syntax.code` except this one does not provide code interpolation.

| Name | Type |
|------|------|
| `code` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:noClosure` | - |

