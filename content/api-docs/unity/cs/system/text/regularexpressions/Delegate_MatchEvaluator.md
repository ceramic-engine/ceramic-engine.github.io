---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Delegate_MatchEvaluator
target: Unity
permalink: api-docs/unity/cs/system/text/regularexpressions/Delegate_MatchEvaluator/
---

# Delegate_MatchEvaluator

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/Delegate/">cs.system.Delegate</a> → <a href="/api-docs/unity/cs/system/MulticastDelegate/">cs.system.MulticastDelegate</a> → <strong>cs.system.text.regularexpressions.Delegate_MatchEvaluator</strong> (extern final class)</div>

## Static Members

<div class="signature field-method no-description" id="op_Addition"><code><span class="field-name">op_Addition</span><span class="parenthesis">(</span><span class="arg-name">arg1</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a><span class="operator">,</span> <span class="arg-name">arg2</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a></code><a class="header-anchor" href="#op_Addition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arg1` | [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |
| `arg2` | [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |

| Returns |
|---------|
| [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="op_Subtraction"><code><span class="field-name">op_Subtraction</span><span class="parenthesis">(</span><span class="arg-name">arg1</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a><span class="operator">,</span> <span class="arg-name">arg2</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/" class="type-link">MatchEvaluator</a></code><a class="header-anchor" href="#op_Subtraction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arg1` | [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |
| `arg2` | [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |

| Returns |
|---------|
| [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) |

## Instance Members

<div class="signature field-method no-description" id="Invoke"><code><span class="field-name">Invoke</span><span class="parenthesis">(</span><span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/Match/" class="type-link">Match</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Invoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `match` | [Match](/api-docs/unity/cs/system/text/regularexpressions/Match/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginInvoke"><code><span class="field-name">BeginInvoke</span><span class="parenthesis">(</span><span class="arg-name">match</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/Match/" class="type-link">Match</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AsyncCallback/" class="type-link">cs.system.AsyncCallback</a><span class="operator">,</span> <span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a></code><a class="header-anchor" href="#BeginInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `match` | [Match](/api-docs/unity/cs/system/text/regularexpressions/Match/) |
| `callback` | [cs.system.AsyncCallback](/api-docs/unity/cs/system/AsyncCallback/) |
| `object` | [Dynamic](/api-docs/unity/Dynamic/) |

| Returns |
|---------|
| [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndInvoke"><code><span class="field-name">EndInvoke</span><span class="parenthesis">(</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IAsyncResult/" class="type-link">cs.system.IAsyncResult</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#EndInvoke"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `result` | [cs.system.IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/unity/Dynamic/) |
| `method` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

