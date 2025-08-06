---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Object
target: Headless
permalink: api-docs/headless/js/lib/Object/
---

# Object

<div class="type-hierarchy"><strong>js.lib.Object</strong> (extern class)</div>

The `js.lib.Object` constructor creates an object wrapper.

Documentation [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

## Static Members

<div class="signature field-var has-description" id="prototype"><code><span class="field-name">prototype</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/ObjectPrototype/" class="type-link">ObjectPrototype</a></code><a class="header-anchor" href="#prototype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows the addition of properties to all objects of type Object.

<hr class="field-separator" />

<div class="signature field-method has-description" id="assign"><code><span class="field-name">assign</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <span class="type-name">assign.T</span><span class="operator">,</span> <span class="arg-name">sources</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">assign.T</span></code><a class="header-anchor" href="#assign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the values of all enumerable own properties from one or more
source objects to a target object.

| Name | Type |
|------|------|
| `target` | assign.T |
| `sources` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| assign.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="arg-name">proto</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">propertiesObject</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/ObjectPropertyDescriptor/" class="type-link">ObjectPropertyDescriptor</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">create.T</span></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new object with the specified prototype object and properties.

| Name | Type | Default |
|------|------|---------|
| `proto` | AnonStruct | |
| `propertiesObject` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[ObjectPropertyDescriptor](/api-docs/headless/js/lib/ObjectPropertyDescriptor/)> | *(optional)* |

| Returns |
|---------|
| create.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="defineProperties"><code><span class="field-name">defineProperties</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">defineProperties.T</span><span class="operator">,</span> <span class="arg-name">props</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/ObjectPropertyDescriptor/" class="type-link">ObjectPropertyDescriptor</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">defineProperties.T</span></code><a class="header-anchor" href="#defineProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the named properties described by the given descriptors to an object.

| Name | Type |
|------|------|
| `obj` | defineProperties.T |
| `props` | [haxe.DynamicAccess](/api-docs/headless/haxe/DynamicAccess/)<[ObjectPropertyDescriptor](/api-docs/headless/js/lib/ObjectPropertyDescriptor/)> |

| Returns |
|---------|
| defineProperties.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="defineProperty"><code><span class="field-name">defineProperty</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">defineProperty.T</span><span class="operator">,</span> <span class="arg-name">prop</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">descriptor</span><span class="operator">:</span> <a href="/api-docs/headless/js/lib/ObjectPropertyDescriptor/" class="type-link">ObjectPropertyDescriptor</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">defineProperty.T</span></code><a class="header-anchor" href="#defineProperty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds the named property described by a given descriptor to an object.

| Name | Type |
|------|------|
| `obj` | defineProperty.T |
| `prop` | [String](/api-docs/headless/String/) |
| `descriptor` | [ObjectPropertyDescriptor](/api-docs/headless/js/lib/ObjectPropertyDescriptor/) |

| Returns |
|---------|
| defineProperty.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/ObjectEntry/" class="type-link">ObjectEntry</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing all of the [key, value] pairs of a given
object's own enumerable string properties.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[ObjectEntry](/api-docs/headless/js/lib/ObjectEntry/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="freeze"><code><span class="field-name">freeze</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">freeze.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">freeze.T</span></code><a class="header-anchor" href="#freeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Freezes an object: other code can't delete or change any properties.

| Name | Type |
|------|------|
| `obj` | freeze.T |

| Returns |
|---------|
| freeze.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromEntries"><code><span class="field-name">fromEntries</span><span class="parenthesis">(</span><span class="arg-name">iterable</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">fromEntries.T</span></code><a class="header-anchor" href="#fromEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a new object from an iterable of key-value pairs
(reverses Object.entries).

| Name | Type |
|------|------|
| `iterable` | [Any](/api-docs/headless/Any/) |

| Returns |
|---------|
| fromEntries.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getOwnPropertyDescriptor"><code><span class="field-name">getOwnPropertyDescriptor</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="arg-name">prop</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/ObjectPropertyDescriptor/" class="type-link">ObjectPropertyDescriptor</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getOwnPropertyDescriptor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a property descriptor for a named property on an object.

| Name | Type |
|------|------|
| `obj` | AnonStruct |
| `prop` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[ObjectPropertyDescriptor](/api-docs/headless/js/lib/ObjectPropertyDescriptor/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getOwnPropertyNames"><code><span class="field-name">getOwnPropertyNames</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getOwnPropertyNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing the names of all of the given object's own
enumerable and non-enumerable properties.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getOwnPropertySymbols"><code><span class="field-name">getOwnPropertySymbols</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/lib/Symbol/" class="type-link">Symbol</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getOwnPropertySymbols"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of all symbol properties found directly upon a given object.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[Symbol](/api-docs/headless/js/lib/Symbol/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getPrototypeOf"><code><span class="field-name">getPrototypeOf</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/getPrototypeOf/TProto/" class="type-link">getPrototypeOf.TProto</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getPrototypeOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the prototype of the specified object.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[getPrototypeOf.TProto](/api-docs/headless/getPrototypeOf/TProto/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="is"><code><span class="field-name">is</span><span class="parenthesis">(</span><span class="arg-name">value1</span><span class="operator">:</span> <span class="type-name">is.T</span><span class="operator">,</span> <span class="arg-name">value2</span><span class="operator">:</span> <span class="type-name">is.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#is"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares if two values are the same value. Equates all NaN values
(which differs from both Abstract Equality Comparison and
Strict Equality Comparison).

| Name | Type |
|------|------|
| `value1` | is.T |
| `value2` | is.T |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isExtensible"><code><span class="field-name">isExtensible</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isExtensible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if extending of an object is allowed.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFrozen"><code><span class="field-name">isFrozen</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFrozen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if an object was frozen.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isSealed"><code><span class="field-name">isSealed</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSealed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if an object is sealed.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing the names of all of the given object's own
enumerable string properties.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="preventExtensions"><code><span class="field-name">preventExtensions</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">preventExtensions.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">preventExtensions.T</span></code><a class="header-anchor" href="#preventExtensions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prevents any extensions of an object.

| Name | Type |
|------|------|
| `obj` | preventExtensions.T |

| Returns |
|---------|
| preventExtensions.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="seal"><code><span class="field-name">seal</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">seal.T</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">seal.T</span></code><a class="header-anchor" href="#seal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prevents other code from deleting properties of an object.

| Name | Type |
|------|------|
| `obj` | seal.T |

| Returns |
|---------|
| seal.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setPrototypeOf"><code><span class="field-name">setPrototypeOf</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">setPrototypeOf.T</span><span class="operator">,</span> <span class="arg-name">prototype</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">setPrototypeOf.T</span></code><a class="header-anchor" href="#setPrototypeOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the prototype (i.e., the internal Prototype property).

| Name | Type |
|------|------|
| `obj` | setPrototypeOf.T |
| `prototype` | [Null](/api-docs/headless/Null/)<AnonStruct> |

| Returns |
|---------|
| setPrototypeOf.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing the values that correspond to all of
a given object's own enumerable string properties.

| Name | Type |
|------|------|
| `obj` | AnonStruct |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[Any](/api-docs/headless/Any/)> |

## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Object constructor creates an object wrapper.

| Name | Type | Default |
|------|------|---------|
| `value` | [Any](/api-docs/headless/Any/) | *(optional)* |

