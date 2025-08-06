---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: TimeSpan
target: Unity
permalink: api-docs/unity/cs/system/TimeSpan/
---

# TimeSpan

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/ValueType/">ValueType</a> → <strong>cs.system.TimeSpan</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IComparable/">IComparable</a>, <a href="/api-docs/unity/cs/system/IComparable_1/">IComparable_1</a>, <a href="/api-docs/unity/cs/system/IEquatable_1/">IEquatable_1</a></div>

## Static Members

<div class="signature field-var no-description" id="Zero"><code><span class="field-name">Zero</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Zero"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MinValue"><code><span class="field-name">MinValue</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#MinValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MaxValue"><code><span class="field-name">MaxValue</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#MaxValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TicksPerSecond"><code><span class="field-name">TicksPerSecond</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#TicksPerSecond"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TicksPerMinute"><code><span class="field-name">TicksPerMinute</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#TicksPerMinute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TicksPerMillisecond"><code><span class="field-name">TicksPerMillisecond</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#TicksPerMillisecond"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TicksPerHour"><code><span class="field-name">TicksPerHour</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#TicksPerHour"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TicksPerDay"><code><span class="field-name">TicksPerDay</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#TicksPerDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Compare"><code><span class="field-name">Compare</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Compare"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromDays"><code><span class="field-name">FromDays</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#FromDays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromHours"><code><span class="field-name">FromHours</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#FromHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromMinutes"><code><span class="field-name">FromMinutes</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#FromMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromSeconds"><code><span class="field-name">FromSeconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#FromSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromMilliseconds"><code><span class="field-name">FromMilliseconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#FromMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromTicks"><code><span class="field-name">FromTicks</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#FromTicks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [haxe.Int64](/api-docs/unity/haxe/Int64/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Parse"><code><span class="field-name">Parse</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

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

<div class="signature field-method no-description" id="op_Addition"><code><span class="field-name">op_Addition</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#op_Addition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Equality"><code><span class="field-name">op_Equality</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Equality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_GreaterThan"><code><span class="field-name">op_GreaterThan</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_GreaterThan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_GreaterThanOrEqual"><code><span class="field-name">op_GreaterThanOrEqual</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_GreaterThanOrEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Inequality"><code><span class="field-name">op_Inequality</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_Inequality"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_LessThan"><code><span class="field-name">op_LessThan</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_LessThan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_LessThanOrEqual"><code><span class="field-name">op_LessThanOrEqual</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#op_LessThanOrEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Subtraction"><code><span class="field-name">op_Subtraction</span><span class="parenthesis">(</span><span class="arg-name">t1</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="operator">,</span> <span class="arg-name">t2</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#op_Subtraction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t1` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |
| `t2` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_UnaryNegation"><code><span class="field-name">op_UnaryNegation</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#op_UnaryNegation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_UnaryPlus"><code><span class="field-name">op_UnaryPlus</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#op_UnaryPlus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `t` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

## Instance Members

<div class="signature field-var no-description" id="TotalSeconds"><code><span class="field-name">TotalSeconds</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#TotalSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TotalMinutes"><code><span class="field-name">TotalMinutes</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#TotalMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TotalMilliseconds"><code><span class="field-name">TotalMilliseconds</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#TotalMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TotalHours"><code><span class="field-name">TotalHours</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#TotalHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TotalDays"><code><span class="field-name">TotalDays</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#TotalDays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Ticks"><code><span class="field-name">Ticks</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#Ticks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Seconds"><code><span class="field-name">Seconds</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Seconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Minutes"><code><span class="field-name">Minutes</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Minutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Milliseconds"><code><span class="field-name">Milliseconds</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Milliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Hours"><code><span class="field-name">Hours</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Hours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Days"><code><span class="field-name">Days</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Days"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Add"><code><span class="field-name">Add</span><span class="parenthesis">(</span><span class="arg-name">ts</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ts` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CompareTo"><code><span class="field-name">CompareTo</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CompareTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Duration"><code><span class="field-name">Duration</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Duration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Negate"><code><span class="field-name">Negate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Negate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Subtract"><code><span class="field-name">Subtract</span><span class="parenthesis">(</span><span class="arg-name">ts</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#Subtract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ts` | [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

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

