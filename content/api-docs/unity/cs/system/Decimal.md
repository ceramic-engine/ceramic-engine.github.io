---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Decimal
target: Unity
permalink: api-docs/unity/cs/system/Decimal/
---

# Decimal

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/ValueType/">ValueType</a> → <strong>cs.system.Decimal</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IComparable_1/">IComparable_1</a>, <a href="/api-docs/unity/cs/system/IEquatable_1/">IEquatable_1</a>, <a href="/api-docs/unity/cs/system/IComparable/">IComparable</a>, <a href="/api-docs/unity/cs/system/IConvertible/">IConvertible</a>, <a href="/api-docs/unity/cs/system/IFormattable/">IFormattable</a></div>

## Static Members

<div class="signature field-var no-description" id="Zero"><code><span class="field-name">Zero</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Zero"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="One"><code><span class="field-name">One</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#One"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MinusOne"><code><span class="field-name">MinusOne</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#MinusOne"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MaxValue"><code><span class="field-name">MaxValue</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#MaxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MinValue"><code><span class="field-name">MinValue</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#MinValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromOACurrency"><code><span class="field-name">FromOACurrency</span><span class="parenthesis">(</span><span class="arg-name">cy</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#FromOACurrency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cy` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetBits"><code><span class="field-name">GetBits</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetBits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Negate"><code><span class="field-name">Negate</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Negate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Add"><code><span class="field-name">Add</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Subtract"><code><span class="field-name">Subtract</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Subtract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Floor"><code><span class="field-name">Floor</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Floor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Truncate"><code><span class="field-name">Truncate</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Truncate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Round"><code><span class="field-name">Round</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">decimals</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Round"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `decimals` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Multiply"><code><span class="field-name">Multiply</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Multiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Divide"><code><span class="field-name">Divide</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Divide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Remainder"><code><span class="field-name">Remainder</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Remainder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Compare"><code><span class="field-name">Compare</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Ceiling"><code><span class="field-name">Ceiling</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Ceiling"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Parse"><code><span class="field-name">Parse</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#Parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="TryParse"><code><span class="field-name">TryParse</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#TryParse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `result` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToOACurrency"><code><span class="field-name">ToOACurrency</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#ToOACurrency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Addition"><code><span class="field-name">op_Addition</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Addition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Decrement"><code><span class="field-name">op_Decrement</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Decrement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Increment"><code><span class="field-name">op_Increment</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Increment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Subtraction"><code><span class="field-name">op_Subtraction</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Subtraction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_UnaryNegation"><code><span class="field-name">op_UnaryNegation</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_UnaryNegation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_UnaryPlus"><code><span class="field-name">op_UnaryPlus</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_UnaryPlus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Multiply"><code><span class="field-name">op_Multiply</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Multiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Division"><code><span class="field-name">op_Division</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Division"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Modulus"><code><span class="field-name">op_Modulus</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Modulus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Implicit"><code><span class="field-name">op_Implicit</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Implicit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Explicit"><code><span class="field-name">op_Explicit</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Single/" class="type-link">Single</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a></code><a class="header-anchor" href="#op_Explicit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Single](/api-docs/unity/Single/) |

| Returns |
|---------|
| [Decimal](/api-docs/unity/cs/system/Decimal/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_GreaterThan"><code><span class="field-name">op_GreaterThan</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_GreaterThan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_GreaterThanOrEqual"><code><span class="field-name">op_GreaterThanOrEqual</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_GreaterThanOrEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_LessThan"><code><span class="field-name">op_LessThan</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_LessThan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_LessThanOrEqual"><code><span class="field-name">op_LessThanOrEqual</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">Decimal</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_LessThanOrEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [Decimal](/api-docs/unity/cs/system/Decimal/) |
| `d2` | [Decimal](/api-docs/unity/cs/system/Decimal/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-method no-description" id="CompareTo"><code><span class="field-name">CompareTo</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CompareTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeCode"><code><span class="field-name">GetTypeCode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetTypeCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">provider</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IFormatProvider/" class="type-link">IFormatProvider</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `format` | [String](/api-docs/unity/String/) |
| `provider` | [IFormatProvider](/api-docs/unity/cs/system/IFormatProvider/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">lo</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">mid</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hi</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">isNegative</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `lo` | [Int](/api-docs/unity/Int/) |
| `mid` | [Int](/api-docs/unity/Int/) |
| `hi` | [Int](/api-docs/unity/Int/) |
| `isNegative` | [Bool](/api-docs/unity/Bool/) |
| `scale` | [cs.types.UInt8](/api-docs/unity/cs/types/UInt8/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:struct` | - |
| `:libType` | - |
| `:csNative` | - |

