---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Int32Array
target: Clay (Web)
permalink: api-docs/clay-web/js/lib/Int32Array/
---

# Int32Array

<div class="type-hierarchy"><strong>js.lib.Int32Array</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/js/lib/ArrayBufferView/">ArrayBufferView</a></div>

The `Int32Array` typed array represents an array of twos-complement 32-bit signed integers in
the platform byte order. If control over byte order is needed, use `DataView` instead. The
contents are initialized to `0`. Once established, you can reference elements in the array using
the object's methods, or using standard array index syntax (that is, using bracket notation).

Documentation [Int32Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int32Array$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Static Members

<div class="signature field-var has-description" id="BYTES_PER_ELEMENT"><code><span class="field-name">BYTES_PER_ELEMENT</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BYTES_PER_ELEMENT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a number value of the element size. 4 in the case of an `Int32Array`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="of"><code><span class="field-name">of</span><span class="parenthesis">(</span><span class="arg-name">elements</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#of"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `Int32Array` with a variable number of arguments. See also [Array.of()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of).

| Name | Type |
|------|------|
| `elements` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

## Instance Members

<div class="signature field-var has-description" id="BYTES_PER_ELEMENT_"><code><span class="field-name">BYTES_PER_ELEMENT_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BYTES_PER_ELEMENT_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a number value of the element size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buffer"><code><span class="field-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">ArrayBuffer</a></code><a class="header-anchor" href="#buffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the `ArrayBuffer` referenced by the `Int32Array` Fixed at construction time and thus read only.

<hr class="field-separator" />

<div class="signature field-var has-description" id="byteLength"><code><span class="field-name">byteLength</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the length (in bytes) of the `Int32Array` from the start of its `ArrayBuffer`. Fixed at construction time and thus read only.

<hr class="field-separator" />

<div class="signature field-var has-description" id="byteOffset"><code><span class="field-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#byteOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the offset (in bytes) of the `Int32Array` from the start of its `ArrayBuffer`. Fixed at construction time and thus read only.

<hr class="field-separator" />

<div class="signature field-var has-description" id="length"><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of elements hold in the `Int32Array`. Fixed at construction time and thus read only.

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyWithin"><code><span class="field-name">copyWithin</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#copyWithin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies a sequence of array elements within the array.
See also [Array.prototype.copyWithin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin).

| Name | Type | Default |
|------|------|---------|
| `target` | [Int](/api-docs/clay-web/Int/) | |
| `start` | [Int](/api-docs/clay-web/Int/) | |
| `end` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
See also [Array.prototype.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries).
| Returns |
|---------|
| [Iterator](/api-docs/clay-web/js/lib/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="every"><code><span class="field-name">every</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#every"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tests whether all elements in the array pass the test provided by a function.
See also [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fill"><code><span class="field-name">fill</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#fill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fills all the elements of an array from a start index to an end index with a static value.
See also [Array.prototype.fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).

| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/clay-web/Int/) | |
| `start` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `end` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="filter"><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new array with all of the elements of this array for which the provided filtering function returns true.
See also [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="find"><code><span class="field-name">find</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#find"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
See also [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Int](/api-docs/clay-web/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findIndex"><code><span class="field-name">findIndex</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#findIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
See also [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calls a function for each element in the array.
See also [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="includes"><code><span class="field-name">includes</span><span class="parenthesis">(</span><span class="arg-name">searchElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#includes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether a typed array includes a certain element, returning true or false as appropriate.
See also [Array.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes).

| Name | Type | Default |
|------|------|---------|
| `searchElement` | [Int](/api-docs/clay-web/Int/) | |
| `fromIndex` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="indexOf"><code><span class="field-name">indexOf</span><span class="parenthesis">(</span><span class="arg-name">searchElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
See also [Array.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).

| Name | Type | Default |
|------|------|---------|
| `searchElement` | [Int](/api-docs/clay-web/Int/) | |
| `fromIndex` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="join"><code><span class="field-name">join</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">separator</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Joins all elements of an array into a string.
See also [Array.prototype.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join).

| Name | Type | Default |
|------|------|---------|
| `separator` | [String](/api-docs/clay-web/String/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new Array Iterator that contains the keys for each index in the array.
See also [Array.prototype.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys).
| Returns |
|---------|
| [Iterator](/api-docs/clay-web/js/lib/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lastIndexOf"><code><span class="field-name">lastIndexOf</span><span class="parenthesis">(</span><span class="arg-name">searchElement</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">fromIndex</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#lastIndexOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
See also [Array.prototype.lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf).

| Name | Type | Default |
|------|------|---------|
| `searchElement` | [Int](/api-docs/clay-web/Int/) | |
| `fromIndex` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map"><code><span class="field-name">map</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new array with the results of calling a provided function on every element in this array.
See also [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reduce"><code><span class="field-name">reduce</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">initialValue</span><span class="operator">:</span> <span class="type-name">reduce.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">reduce.T</span></code><a class="header-anchor" href="#reduce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
See also [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

| Name | Type |
|------|------|
| `callback` | Function |
| `initialValue` | reduce.T |

| Returns |
|---------|
| reduce.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reduceRight"><code><span class="field-name">reduceRight</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">initialValue</span><span class="operator">:</span> <span class="type-name">reduceRight.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">reduceRight.T</span></code><a class="header-anchor" href="#reduceRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
See also [Array.prototype.reduceRight()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight).

| Name | Type |
|------|------|
| `callback` | Function |
| `initialValue` | reduceRight.T |

| Returns |
|---------|
| reduceRight.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reverse"><code><span class="field-name">reverse</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first.
See also [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).
| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores multiple values in the typed array, reading input values from a specified array.

| Name | Type | Default |
|------|------|---------|
| `array` | [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> | |
| `offset` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="slice"><code><span class="field-name">slice</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#slice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts a section of an array and returns a new array.
See also [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).

| Name | Type | Default |
|------|------|---------|
| `start` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `end` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="some"><code><span class="field-name">some</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#some"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if at least one element in this array satisfies the provided testing function.
See also [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).

| Name | Type | Default |
|------|------|---------|
| `callback` | Function | |
| `thisArg` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sort"><code><span class="field-name">sort</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">compareFn</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts the elements of an array in place and returns the array.
See also [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).

| Name | Type | Default |
|------|------|---------|
| `compareFn` | Function | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="subarray"><code><span class="field-name">subarray</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">begin</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">end</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Int32Array</a></code><a class="header-anchor" href="#subarray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new TypedArray from the given start and end element index.

| Name | Type | Default |
|------|------|---------|
| `begin` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `end` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

| Returns |
|---------|
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new Array Iterator object that contains the values for each index in the array.
See also [Array.prototype.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values).
| Returns |
|---------|
| [Iterator](/api-docs/clay-web/js/lib/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toLocaleString"><code><span class="field-name">toLocaleString</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">locales</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/lib/intl/NumberFormatOptions/" class="type-link">js.lib.intl.NumberFormatOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLocaleString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representing the array and its elements.
See also [Array.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString).

| Name | Type | Default |
|------|------|---------|
| `locales` | [String](/api-docs/clay-web/String/) | *(optional)* |
| `options` | [Null](/api-docs/clay-web/Null/)<[js.lib.intl.NumberFormatOptions](/api-docs/clay-web/js/lib/intl/NumberFormatOptions/)> | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representing the array and its elements.
See also [Array.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString).
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/ArrayBuffer/" class="type-link">ArrayBuffer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">byteOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `buffer` | [ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/) | |
| `byteOffset` | [Int](/api-docs/clay-web/Int/) | *(optional)* |
| `length` | [Int](/api-docs/clay-web/Int/) | *(optional)* |

