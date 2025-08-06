---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: DateTime
target: Unity
permalink: api-docs/unity/cs/system/DateTime/
---

# DateTime

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/ValueType/">ValueType</a> → <strong>cs.system.DateTime</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IComparable_1/">IComparable_1</a>, <a href="/api-docs/unity/cs/system/IEquatable_1/">IEquatable_1</a>, <a href="/api-docs/unity/cs/system/IComparable/">IComparable</a>, <a href="/api-docs/unity/cs/system/IConvertible/">IConvertible</a>, <a href="/api-docs/unity/cs/system/IFormattable/">IFormattable</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Static Members

<div class="signature field-var no-description" id="UtcNow"><code><span class="field-name">UtcNow</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#UtcNow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Today"><code><span class="field-name">Today</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#Today"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Now"><code><span class="field-name">Now</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#Now"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MinValue"><code><span class="field-name">MinValue</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#MinValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MaxValue"><code><span class="field-name">MaxValue</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#MaxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Compare"><code><span class="field-name">Compare</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `t2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromBinary"><code><span class="field-name">FromBinary</span><span class="parenthesis">(</span><span class="arg-name">dateData</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#FromBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dateData` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SpecifyKind"><code><span class="field-name">SpecifyKind</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">kind</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#SpecifyKind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `kind` | Anonymous |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DaysInMonth"><code><span class="field-name">DaysInMonth</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DaysInMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |
| `month` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromFileTime"><code><span class="field-name">FromFileTime</span><span class="parenthesis">(</span><span class="arg-name">fileTime</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#FromFileTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fileTime` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromFileTimeUtc"><code><span class="field-name">FromFileTimeUtc</span><span class="parenthesis">(</span><span class="arg-name">fileTime</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#FromFileTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fileTime` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromOADate"><code><span class="field-name">FromOADate</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#FromOADate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsLeapYear"><code><span class="field-name">IsLeapYear</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsLeapYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Parse"><code><span class="field-name">Parse</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#Parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ParseExact"><code><span class="field-name">ParseExact</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">provider</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IFormatProvider/" class="type-link">IFormatProvider</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#ParseExact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `format` | [String](/api-docs/unity/String/) |
| `provider` | [IFormatProvider](/api-docs/unity/cs/system/IFormatProvider/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

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

<div class="signature field-method no-description" id="TryParseExact"><code><span class="field-name">TryParseExact</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">provider</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IFormatProvider/" class="type-link">IFormatProvider</a><span class="operator">,</span> <span class="arg-name">style</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#TryParseExact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `format` | [String](/api-docs/unity/String/) |
| `provider` | [IFormatProvider](/api-docs/unity/cs/system/IFormatProvider/) |
| `style` | Anonymous |
| `result` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Addition"><code><span class="field-name">op_Addition</span><span class="parenthesis">(</span><span class="arg-name">d</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#op_Addition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `t` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `d2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_GreaterThan"><code><span class="field-name">op_GreaterThan</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_GreaterThan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `t2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_GreaterThanOrEqual"><code><span class="field-name">op_GreaterThanOrEqual</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_GreaterThanOrEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `t2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `d2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_LessThan"><code><span class="field-name">op_LessThan</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_LessThan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `t2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_LessThanOrEqual"><code><span class="field-name">op_LessThanOrEqual</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_LessThanOrEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `t2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Subtraction"><code><span class="field-name">op_Subtraction</span><span class="parenthesis">(</span><span class="arg-name">d1</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">d2</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#op_Subtraction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `d1` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `d2` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

## Instance Members

<div class="signature field-var no-description" id="Kind"><code><span class="field-name">Kind</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Kind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Year"><code><span class="field-name">Year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Year"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Ticks"><code><span class="field-name">Ticks</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#Ticks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Millisecond"><code><span class="field-name">Millisecond</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Millisecond"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Second"><code><span class="field-name">Second</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Second"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Minute"><code><span class="field-name">Minute</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Minute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Hour"><code><span class="field-name">Hour</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Hour"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TimeOfDay"><code><span class="field-name">TimeOfDay</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#TimeOfDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DayOfYear"><code><span class="field-name">DayOfYear</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DayOfYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DayOfWeek"><code><span class="field-name">DayOfWeek</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#DayOfWeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Day"><code><span class="field-name">Day</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Day"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Month"><code><span class="field-name">Month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Month"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Date"><code><span class="field-name">Date</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#Date"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Add"><code><span class="field-name">Add</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#Add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddDays"><code><span class="field-name">AddDays</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddDays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddTicks"><code><span class="field-name">AddTicks</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddTicks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddHours"><code><span class="field-name">AddHours</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddMilliseconds"><code><span class="field-name">AddMilliseconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddMinutes"><code><span class="field-name">AddMinutes</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddMonths"><code><span class="field-name">AddMonths</span><span class="parenthesis">(</span><span class="arg-name">months</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddMonths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `months` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddSeconds"><code><span class="field-name">AddSeconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddYears"><code><span class="field-name">AddYears</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#AddYears"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CompareTo"><code><span class="field-name">CompareTo</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CompareTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDaylightSavingTime"><code><span class="field-name">IsDaylightSavingTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDaylightSavingTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToBinary"><code><span class="field-name">ToBinary</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#ToBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDateTimeFormats"><code><span class="field-name">GetDateTimeFormats</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetDateTimeFormats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetTypeCode"><code><span class="field-name">GetTypeCode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetTypeCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Subtract"><code><span class="field-name">Subtract</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Subtract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToFileTime"><code><span class="field-name">ToFileTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#ToFileTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToFileTimeUtc"><code><span class="field-name">ToFileTimeUtc</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#ToFileTimeUtc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [haxe.Int64](/api-docs/unity/haxe/Int64/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToLongDateString"><code><span class="field-name">ToLongDateString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToLongDateString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToLongTimeString"><code><span class="field-name">ToLongTimeString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToLongTimeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToOADate"><code><span class="field-name">ToOADate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#ToOADate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToShortDateString"><code><span class="field-name">ToShortDateString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToShortDateString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToShortTimeString"><code><span class="field-name">ToShortTimeString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToShortTimeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToLocalTime"><code><span class="field-name">ToLocalTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#ToLocalTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToUniversalTime"><code><span class="field-name">ToUniversalTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTime</a></code><a class="header-anchor" href="#ToUniversalTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">ticks</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ticks` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:struct` | - |
| `:libType` | - |
| `:csNative` | - |

