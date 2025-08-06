---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: SerializeModel
target: Clay (Native)
permalink: api-docs/clay-native/tracker/SerializeModel/
---

# SerializeModel

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/SerializeModel.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <strong>tracker.SerializeModel</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/Component/">ceramic.Component</a></div>

Utility to serialize a model object (and its children) continuously and efficiently

## Static Members

<div class="signature field-method no-description" id="loadFromData"><code><span class="field-name">loadFromData</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hotReload</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loadFromData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) | |
| `data` | [String](/api-docs/clay-native/String/) | |
| `hotReload` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="checkInterval"><code><span class="field-name">checkInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#checkInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="compactInterval"><code><span class="field-name">compactInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#compactInterval"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="destroyModelOnUntrack"><code><span class="field-name">destroyModelOnUntrack</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#destroyModelOnUntrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="serializedMap"><code><span class="field-name">serializedMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#serializedMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="model"><code><span class="field-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a></code><a class="header-anchor" href="#model"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="compact"><code><span class="field-name">compact</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recompute the whole object tree instead of appending. This will untrack every object not on the model anymore
and generate a new changeset with the whole serialized object tree.

| Name | Type | Default |
|------|------|---------|
| `done` | Function | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="synchronize"><code><span class="field-name">synchronize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#synchronize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Synchronize (expected to be called at regular intervals or when something important needs to be serialized)

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="trackedModels"><code><span class="field-name">trackedModels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#trackedModels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="willCleanDestroyedTrackedModels"><code><span class="field-name">willCleanDestroyedTrackedModels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willCleanDestroyedTrackedModels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dirtyModels"><code><span class="field-name">dirtyModels</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#dirtyModels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="canCompact"><code><span class="field-name">canCompact</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canCompact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dirty"><code><span class="field-name">dirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitChangeset"><code><span class="field-name">emitChangeset</span><span class="parenthesis">(</span><span class="arg-name">changeset</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/SerializeChangeset/" class="type-link">SerializeChangeset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitChangeset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Triggered when serialized data is updated.
If `append` is true, the given string should be appended to the existing one.

| Name | Type |
|------|------|
| `changeset` | [SerializeChangeset](/api-docs/clay-native/tracker/SerializeChangeset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="track"><code><span class="field-name">track</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#track"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="untrack"><code><span class="field-name">untrack</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#untrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="trackedModelDestroyed"><code><span class="field-name">trackedModelDestroyed</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#trackedModelDestroyed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [ceramic.Entity](/api-docs/clay-native/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="cleanTrackingFromPrevSerializedMap"><code><span class="field-name">cleanTrackingFromPrevSerializedMap</span><span class="parenthesis">(</span><span class="arg-name">prevSerializedMap</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cleanTrackingFromPrevSerializedMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `prevSerializedMap` | [Map](/api-docs/clay-native/Map/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="modelDirty"><code><span class="field-name">modelDirty</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#modelDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="explicitModelDirty"><code><span class="field-name">explicitModelDirty</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#explicitModelDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compactIfNeeded"><code><span class="field-name">compactIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compactIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeModel"><code><span class="field-name">serializeModel</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="operator">,</span> <span class="arg-name">toAppend</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#serializeModel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) |
| `toAppend` | [Array](/api-docs/clay-native/Array/)<AnonStruct> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [ceramic.Entity](/api-docs/clay-native/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ceramic.Entity](/api-docs/clay-native/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

