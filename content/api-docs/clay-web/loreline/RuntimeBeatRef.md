---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeBeatRef
target: Clay (Web)
permalink: api-docs/clay-web/loreline/RuntimeBeatRef/
---

# RuntimeBeatRef

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.RuntimeBeatRef</strong> (Class)</div>

A first-class beat reference: the beat plus the scope chain captured
where the reference was created (from root up to and including the
beat's declaring scope; empty for top-level beats). Produced whenever
an expression reads an identifier that resolves to a beat.

## Static Members

<div class="signature field-method has-description" id="beatOf"><code><span class="field-name">beatOf</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#beatOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the underlying beat if the given runtime value is a beat
declaration or a beat reference, null otherwise.

| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="beatNameOf"><code><span class="field-name">beatNameOf</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#beatNameOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of the beat if the given runtime value is a beat
declaration or a beat reference, null otherwise. Used by host
bindings, where beat values cross the boundary as their name.

| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[String](/api-docs/clay-web/String/)> |

## Instance Members

<div class="signature field-var has-description" id="beat"><code><span class="field-name">beat</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#beat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The referenced beat declaration.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The captured scope chain (closure). Empty for top-level beats.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `beat` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) |
| `stack` | [Array](/api-docs/clay-web/Array/)<[RuntimeScope](/api-docs/clay-web/loreline/RuntimeScope/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:expose` | - |

