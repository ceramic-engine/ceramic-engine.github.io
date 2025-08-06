---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Syntax
target: Clay (Web)
permalink: api-docs/clay-web/js/Syntax/
---

# Syntax

<div class="type-hierarchy"><strong>js.Syntax</strong> (extern class)</div>

Generate JavaScript syntax not directly supported by Haxe.
Use only at low-level when specific target-specific code-generation is required.

## Static Members

<div class="signature field-method has-description" id="code"><code><span class="field-name">code</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#code"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inject `code` directly into generated source.

`code` must be a string constant.

Additional `args` are supported to provide code interpolation, for example:
```haxe
Syntax.code("console.log({0}, {1})", "hi", 42);
```
will generate
```haxe
console.log("hi", 42);
```

Emits a compilation error if the count of `args` does not match the count of placeholders in `code`.

| Name | Type |
|------|------|
| `code` | [String](/api-docs/clay-web/String/) |
| `args` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="plainCode"><code><span class="field-name">plainCode</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#plainCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inject `code` directly into generated source.
The same as `js.Syntax.code` except this one does not provide code interpolation.

| Name | Type |
|------|------|
| `code` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="construct"><code><span class="field-name">construct</span><span class="parenthesis">(</span><span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">construct.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">construct.T</span></code><a class="header-anchor" href="#construct"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate `new cl(...args)` expression.

| Name | Type |
|------|------|
| `cl` | [Class](/api-docs/clay-web/Class/)<construct.T> |
| `args` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

| Returns |
|---------|
| construct.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="instanceof"><code><span class="field-name">instanceof</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">cl</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#instanceof"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate `v instanceof cl` expression.

| Name | Type |
|------|------|
| `v` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `cl` | [Class](/api-docs/clay-web/Class/)<[Dynamic](/api-docs/clay-web/Dynamic/)> |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="typeof"><code><span class="field-name">typeof</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#typeof"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate `typeof o` expression.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strictEq"><code><span class="field-name">strictEq</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strictEq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Genearte `a === b` expression.

| Name | Type |
|------|------|
| `a` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `b` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="strictNeq"><code><span class="field-name">strictNeq</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strictNeq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Genearte `a !== b` expression.

| Name | Type |
|------|------|
| `a` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `b` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="delete"><code><span class="field-name">delete</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#delete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate `delete o[f]` expression.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `f` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="field"><code><span class="field-name">field</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#field"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate `o.f` expression, if `f` is a constant string,
or `o[f]` if it's any other expression.

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `f` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:noClosure` | - |

