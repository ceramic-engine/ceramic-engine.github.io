---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Regex
target: Unity
permalink: api-docs/unity/cs/system/text/regularexpressions/Regex/
---

# Regex

<div class="type-hierarchy"><strong>cs.system.text.regularexpressions.Regex</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/serialization/ISerializable/">cs.system.runtime.serialization.ISerializable</a></div>

## Static Members

<div class="signature field-var no-description" id="CacheSize"><code><span class="field-name">CacheSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CacheSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CompileToAssembly"><code><span class="field-name">CompileToAssembly</span><span class="parenthesis">(</span><span class="arg-name">regexes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/text/regularexpressions/RegexCompilationInfo/" class="type-link">RegexCompilationInfo</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">aname</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/AssemblyName/" class="type-link">cs.system.reflection.AssemblyName</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CompileToAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `regexes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[RegexCompilationInfo](/api-docs/unity/cs/system/text/regularexpressions/RegexCompilationInfo/)> |
| `aname` | [cs.system.reflection.AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Escape"><code><span class="field-name">Escape</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Escape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `str` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Unescape"><code><span class="field-name">Unescape</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Unescape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `str` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsMatch"><code><span class="field-name">IsMatch</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsMatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |
| `pattern` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Match"><code><span class="field-name">Match</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/Match/" class="type-link">Match</a></code><a class="header-anchor" href="#Match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |
| `pattern` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Match](/api-docs/unity/cs/system/text/regularexpressions/Match/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Matches"><code><span class="field-name">Matches</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchCollection/" class="type-link">MatchCollection</a></code><a class="header-anchor" href="#Matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |
| `pattern` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [MatchCollection](/api-docs/unity/cs/system/text/regularexpressions/MatchCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Replace"><code><span class="field-name">Replace</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">evaluator</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |
| `pattern` | [String](/api-docs/unity/String/) |
| `evaluator` | [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Split"><code><span class="field-name">Split</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#Split"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |
| `pattern` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

## Instance Members

<div class="signature field-var no-description" id="RightToLeft"><code><span class="field-name">RightToLeft</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#RightToLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Options"><code><span class="field-name">Options</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="capslist"><code><span class="field-name">capslist</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#capslist"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="capsize"><code><span class="field-name">capsize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#capsize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="factory"><code><span class="field-name">factory</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/RegexRunnerFactory/" class="type-link">RegexRunnerFactory</a></code><a class="header-anchor" href="#factory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="caps"><code><span class="field-name">caps</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/Hashtable/" class="type-link">cs.system.collections.Hashtable</a></code><a class="header-anchor" href="#caps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="capnames"><code><span class="field-name">capnames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/Hashtable/" class="type-link">cs.system.collections.Hashtable</a></code><a class="header-anchor" href="#capnames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="roptions"><code><span class="field-name">roptions</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#roptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pattern"><code><span class="field-name">pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#pattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetGroupNames"><code><span class="field-name">GetGroupNames</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetGroupNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetGroupNumbers"><code><span class="field-name">GetGroupNumbers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetGroupNumbers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GroupNameFromNumber"><code><span class="field-name">GroupNameFromNumber</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GroupNameFromNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GroupNumberFromName"><code><span class="field-name">GroupNumberFromName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GroupNumberFromName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsMatch"><code><span class="field-name">IsMatch</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsMatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Match"><code><span class="field-name">Match</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/Match/" class="type-link">Match</a></code><a class="header-anchor" href="#Match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Match](/api-docs/unity/cs/system/text/regularexpressions/Match/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Matches"><code><span class="field-name">Matches</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchCollection/" class="type-link">MatchCollection</a></code><a class="header-anchor" href="#Matches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [MatchCollection](/api-docs/unity/cs/system/text/regularexpressions/MatchCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Replace"><code><span class="field-name">Replace</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">evaluator</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |
| `evaluator` | [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Split"><code><span class="field-name">Split</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#Split"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="InitializeReferences"><code><span class="field-name">InitializeReferences</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#InitializeReferences"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="UseOptionC"><code><span class="field-name">UseOptionC</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#UseOptionC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="UseOptionR"><code><span class="field-name">UseOptionR</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#UseOptionR"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

