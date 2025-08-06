---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: DynamicEvents
target: Clay (Native)
permalink: api-docs/clay-native/tracker/DynamicEvents/
---

# DynamicEvents

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/DynamicEvents.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <strong>tracker.DynamicEvents</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/ceramic/Component/">ceramic.Component</a></div>

Fire and listen to dynamic events. Works similarly to static events, but dynamic.
If you can know the event names at compile time, using static events (`@event function myEvent();`) is preferred.

## Instance Members

<div class="signature field-var no-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="emit"><code><span class="field-name">emit</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `event` | tracker.DynamicEvents.T | |
| `args` | [Array](/api-docs/clay-native/Array/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="on"><code><span class="field-name">on</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="operator">,</span> <span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#on"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | tracker.DynamicEvents.T |
| `owner` | [Null](/api-docs/clay-native/Null/)<[ceramic.Entity](/api-docs/clay-native/ceramic/Entity/)> |
| `cb` | [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="once"><code><span class="field-name">once</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="operator">,</span> <span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#once"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | tracker.DynamicEvents.T |
| `owner` | [Null](/api-docs/clay-native/Null/)<[ceramic.Entity](/api-docs/clay-native/ceramic/Entity/)> |
| `cb` | [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="off"><code><span class="field-name">off</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cb</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#off"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `event` | tracker.DynamicEvents.T | |
| `cb` | [Dynamic](/api-docs/clay-native/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method no-description" id="listens"><code><span class="field-name">listens</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | tracker.DynamicEvents.T |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="dispatcher"><code><span class="field-name">dispatcher</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/EventDispatcher/" class="type-link">EventDispatcher</a></code><a class="header-anchor" href="#dispatcher"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mapping"><code><span class="field-name">mapping</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#mapping"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="nextIndex"><code><span class="field-name">nextIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="eventToString"><code><span class="field-name">eventToString</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#eventToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | tracker.DynamicEvents.T |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="indexForEvent"><code><span class="field-name">indexForEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <span class="type-name">tracker.DynamicEvents.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexForEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | tracker.DynamicEvents.T |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

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

