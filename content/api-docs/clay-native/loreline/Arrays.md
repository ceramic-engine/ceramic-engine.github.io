---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Arrays
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Arrays/
---

# Arrays

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Arrays.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Arrays</strong> (Class)</div>

Array access helpers working on `Any`-held values.

The fallback views are typed `Array<Dynamic>` on purpose: on Haxe's C#
target without erase-generics, `Array<Dynamic>` compiles to the raw
`Array` interface (identity cast), while `Array<Any>` compiles to the
concrete `Array<object>` and converts (copies) arrays whose element type
is a value type, e.g. `Array<Int>`.

## Static Members

<div class="signature field-method no-description" id="isArray"><code><span class="field-name">isArray</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayLength"><code><span class="field-name">arrayLength</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#arrayLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayGet"><code><span class="field-name">arrayGet</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#arrayGet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `index` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arraySet"><code><span class="field-name">arraySet</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arraySet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `index` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="createArray"><code><span class="field-name">createArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#createArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayPush"><code><span class="field-name">arrayPush</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arrayPush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `value` | [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayPop"><code><span class="field-name">arrayPop</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#arrayPop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayShift"><code><span class="field-name">arrayShift</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#arrayShift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayInsert"><code><span class="field-name">arrayInsert</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arrayInsert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `index` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayRemoveAt"><code><span class="field-name">arrayRemoveAt</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arrayRemoveAt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `index` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIterator"><code><span class="field-name">getIterator</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#getIterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Iterator](/api-docs/clay-native/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayCopy"><code><span class="field-name">arrayCopy</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#arrayCopy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

| Returns |
|---------|
| [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arraySort"><code><span class="field-name">arraySort</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">cmp</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arraySort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `cmp` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayReverse"><code><span class="field-name">arrayReverse</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#arrayReverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayJoin"><code><span class="field-name">arrayJoin</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#arrayJoin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-native/Any/) |
| `sep` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

