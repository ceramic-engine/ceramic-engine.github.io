---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: DoubleClick
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/DoubleClick/
---

# DoubleClick

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/DoubleClick.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.DoubleClick</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/Component/">Component</a></div>

Component that detects double-click/double-tap events on visuals.

This component tracks consecutive clicks and emits a doubleClick event
when two clicks occur within the specified time and movement thresholds.

## Instance Members

<div class="signature field-var has-description" id="threshold"><code><span class="field-name">threshold</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#threshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum pointer movement allowed between clicks.
If the pointer moves more than this distance, the double-click is canceled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxDelay"><code><span class="field-name">maxDelay</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum time delay between clicks in seconds.
Clicks must occur within this time to count as a double-click.

<hr class="field-separator" />

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual entity this component is attached to.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="cancel"><code><span class="field-name">cancel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cancel the current double-click detection.
Resets the state and stops tracking clicks.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="pressed"><code><span class="field-name">pressed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="firstClickTime"><code><span class="field-name">firstClickTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#firstClickTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerStartX"><code><span class="field-name">pointerStartX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerStartY"><code><span class="field-name">pointerStartY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDoubleClick"><code><span class="field-name">emitDoubleClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDoubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the visual is double-clicked/double-tapped.

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerDown"><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerUp"><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerMove"><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleBlur"><code><span class="field-name">handleBlur</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleBlur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

