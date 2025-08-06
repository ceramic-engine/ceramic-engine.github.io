---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Symbol
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/Symbol/
---

# Symbol

<div class="type-hierarchy"><strong>js.lib.Symbol</strong> (extern class)</div>

## Static Members

<div class="signature field-var has-description" id="iterator"><code><span class="field-name">iterator</span><span class="operator">:</span> <a href="#" class="type-link">Symbol</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A method returning the default iterator for an object.

<hr class="field-separator" />

<div class="signature field-var has-description" id="asyncIterator"><code><span class="field-name">asyncIterator</span><span class="operator">:</span> <a href="#" class="type-link">Symbol</a></code><a class="header-anchor" href="#asyncIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A method that returns the default AsyncIterator for an object.

<hr class="field-separator" />

<div class="signature field-method has-description" id="for_"><code><span class="field-name">for_</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Symbol</a></code><a class="header-anchor" href="#for_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Searches for existing symbols with the given key and returns it if found.
Otherwise a new symbol gets created in the global symbol registry with this key.

| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Symbol](/api-docs/clay-web/js/lib/Symbol/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keyFor"><code><span class="field-name">keyFor</span><span class="parenthesis">(</span><span class="arg-name">sym</span><span class="operator">:</span> <a href="#" class="type-link">Symbol</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#keyFor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a shared symbol key from the global symbol registry for the given symbol.

| Name | Type |
|------|------|
| `sym` | [Symbol](/api-docs/clay-web/js/lib/Symbol/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[String](/api-docs/clay-web/String/)> |

## Instance Members

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string containing the description of the Symbol.
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ofObject"><code><span class="field-name">ofObject</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">ofObject.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#ofObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieve symbol from a given `object`.

NOTE: This is a Haxe-specific method that generates an `object[symbol]` expression.

| Name | Type |
|------|------|
| `object` | AnonStruct |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<ofObject.T> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">description</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

To create a new primitive symbol, use `new Symbol()` with an optional string as its `description`.

NOTE: Unlike in plain JavaScript, `new Symbol()` syntax is used in Haxe. This generates a `Symbol(...)`
expression as required by the JavaScript specification.

| Name | Type | Default |
|------|------|---------|
| `description` | [String](/api-docs/clay-web/String/) | *(optional)* |

