---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Fields
target: Headless
permalink: api-docs/headless/loreline/Fields/
---

# Fields

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Fields.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Fields</strong> (Interface)</div>

Base interface to hold loreline values
This interface allows to map loreline object fields to game-specific objects.

## Instance Members

<div class="signature field-method has-description" id="lorelineCreate"><code><span class="field-name">lorelineCreate</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Interpreter/" class="type-link">Interpreter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lorelineCreate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the object has been created from an interpreter

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/headless/loreline/Interpreter/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lorelineGet"><code><span class="field-name">lorelineGet</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#lorelineGet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the value associated to the given field key

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/headless/loreline/Interpreter/) |
| `key` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Any](/api-docs/headless/Any/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lorelineSet"><code><span class="field-name">lorelineSet</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lorelineSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the value associated to the given field key

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/headless/loreline/Interpreter/) |
| `key` | [String](/api-docs/headless/String/) |
| `value` | [Any](/api-docs/headless/Any/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lorelineExists"><code><span class="field-name">lorelineExists</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lorelineExists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if a value exists for the given key

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/headless/loreline/Interpreter/) |
| `key` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lorelineFields"><code><span class="field-name">lorelineFields</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Interpreter/" class="type-link">Interpreter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lorelineFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get all the fields of this object

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/headless/loreline/Interpreter/) |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:expose` | - |

