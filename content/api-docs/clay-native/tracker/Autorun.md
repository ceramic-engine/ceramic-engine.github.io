---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: Autorun
target: Clay (Native)
permalink: api-docs/clay-native/tracker/Autorun/
---

# Autorun

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/Autorun.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <strong>tracker.Autorun</strong> (Class)</div>

## Static Members

<div class="signature field-var no-description" id="current"><code><span class="field-name">current</span><span class="operator">:</span> <a href="#" class="type-link">Autorun</a></code><a class="header-anchor" href="#current"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="unobserve"><code><span class="field-name">unobserve</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unobserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures current `autorun` won't be affected by the code after this call.
`reobserve()` should be called to restore previous state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="reobserve"><code><span class="field-name">reobserve</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reobserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resume observing values and resume affecting current `autorun` scope.
This should be called after an `unobserve()` call.

<hr class="field-separator" />

<div class="signature field-method has-description" id="cease"><code><span class="field-name">cease</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cease"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unbinds and destroys current `autorun`. The name `cease()` has been chosed there
so that it is unlikely to collide with other more common names suchs as `stop`, `unbind` etc...
and should make it more recognizable, along with `observe()` and `unobserve()`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="unobserved"><code><span class="field-name">unobserved</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unobserved"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes the given function synchronously and ensures the
current `autorun` scope won't be affected

| Name | Type |
|------|------|
| `func` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateAutorunArray"><code><span class="field-name">invalidateAutorunArray</span><span class="parenthesis">(</span><span class="arg-name">autorunArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateAutorunArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `autorunArray` | [Array](/api-docs/clay-native/Array/)<[Autorun](/api-docs/clay-native/tracker/Autorun/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getAutorunArray"><code><span class="field-name">getAutorunArray</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAutorunArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Autorun](/api-docs/clay-native/tracker/Autorun/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="recycleAutorunArray"><code><span class="field-name">recycleAutorunArray</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycleAutorunArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-native/Array/)<[Autorun](/api-docs/clay-native/tracker/Autorun/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getArrayOfAutorunArrays"><code><span class="field-name">getArrayOfAutorunArrays</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getArrayOfAutorunArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[Array](/api-docs/clay-native/Array/)<[Autorun](/api-docs/clay-native/tracker/Autorun/)>> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="recycleArrayOfAutorunArrays"><code><span class="field-name">recycleArrayOfAutorunArrays</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycleArrayOfAutorunArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [Array](/api-docs/clay-native/Array/)<[Array](/api-docs/clay-native/Array/)<[Autorun](/api-docs/clay-native/tracker/Autorun/)>> |

## Instance Members

<div class="signature field-var no-description" id="invalidated"><code><span class="field-name">invalidated</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#invalidated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidate"><code><span class="field-name">invalidate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindToAutorunArray"><code><span class="field-name">bindToAutorunArray</span><span class="parenthesis">(</span><span class="arg-name">autorunArray</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindToAutorunArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `autorunArray` | [Array](/api-docs/clay-native/Array/)<[Autorun](/api-docs/clay-native/tracker/Autorun/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unbindFromAllAutorunArrays"><code><span class="field-name">unbindFromAllAutorunArrays</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindFromAllAutorunArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">onRun</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">afterRun</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize a new autorun.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `onRun` | Function | | The callback that will be executed and used to compute implicit bindings  |
| `afterRun` | Function | *(optional)* | * (optional) A callback run right after `onRun`, not affecting implicit bindings. Useful when generating side effects without messing up binding dependencies. |

## Private Members

<div class="signature field-var no-description" id="prevCurrent"><code><span class="field-name">prevCurrent</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#prevCurrent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="boundAutorunArrays"><code><span class="field-name">boundAutorunArrays</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Autorun</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#boundAutorunArrays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReset"><code><span class="field-name">emitReset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

reset event

<hr class="field-separator" />

<div class="signature field-method no-description" id="willEmitReset"><code><span class="field-name">willEmitReset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

