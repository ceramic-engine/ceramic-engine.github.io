---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Lib
target: Headless
permalink: api-docs/headless/js/Lib/
---

# Lib

<div class="type-hierarchy"><strong>js.Lib</strong> (Class)</div>

Platform-specific JavaScript Library. Provides some platform-specific functions
for the JavaScript target.

## Static Members

<div class="signature field-var has-description" id="undefined"><code><span class="field-name">undefined</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#undefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns JavaScript `undefined` value.

Note that this is only needed in very rare cases when working with external JavaScript code.

In Haxe, `null` is used to represent the absence of a value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nativeThis"><code><span class="field-name">nativeThis</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#nativeThis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`nativeThis` is the JavaScript `this`, which is semantically different
from the Haxe `this`. Use `nativeThis` only when working with external
JavaScript code.

In Haxe, `this` is always bound to a class instance.
In JavaScript, `this` in a function can be bound to an arbitrary
variable when the function is called using `func.call(thisObj, ...)` or
`func.apply(thisObj, [...])`.

Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

<hr class="field-separator" />

<div class="signature field-var has-description" id="global"><code><span class="field-name">global</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#global"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An alias of the JS "global" object.

Concretely, it is set as the first defined value in the list of
`window`, `global`, `self`, and `this` in the top-level of the compiled output.

<hr class="field-separator" />

<div class="signature field-method has-description" id="require"><code><span class="field-name">require</span><span class="parenthesis">(</span><span class="arg-name">module</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#require"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts a `require` expression that loads JavaScript object from
a module or file specified in the `module` argument.

This is only supported in environments where `require` function
is available, such as Node.js or RequireJS.

| Name | Type |
|------|------|
| `module` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parseInt"><code><span class="field-name">parseInt</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">radix</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parseInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Native JavaScript `parseInt` function.

Its specification is different from `Std.parseInt`, so one
might want to access the native one.

| Name | Type | Default |
|------|------|---------|
| `string` | [String](/api-docs/headless/String/) | |
| `radix` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="typeof"><code><span class="field-name">typeof</span><span class="parenthesis">(</span><span class="arg-name">o</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#typeof"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Call JavaScript `typeof` operator on the `o` value
and return a string representing the JavaScript type of a value.

Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

| Name | Type |
|------|------|
| `o` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

## Private Members

<div class="signature field-method has-description" id="getNextHaxeUID"><code><span class="field-name">getNextHaxeUID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNextHaxeUID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate next unique id
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

