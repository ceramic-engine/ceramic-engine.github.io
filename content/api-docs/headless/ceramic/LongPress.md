---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: LongPress
target: Headless
permalink: api-docs/headless/ceramic/LongPress/
---

# LongPress

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/LongPress.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.LongPress</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/ceramic/Component/">Component</a></div>

Component that detects long press/hold gestures on visuals.

This component tracks when the user presses and holds on a visual
for a specified duration without moving beyond the threshold.

## Instance Members

<div class="signature field-var has-description" id="threshold"><code><span class="field-name">threshold</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#threshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum pointer movement allowed during the press.
If the pointer moves more than this distance, the long press is canceled.

<hr class="field-separator" />

<div class="signature field-var has-description" id="requiredDuration"><code><span class="field-name">requiredDuration</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#requiredDuration"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Required duration in seconds to trigger a long press.
The user must hold for at least this long.

<hr class="field-separator" />

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual entity this component is attached to.

<hr class="field-separator" />

<div class="signature field-var has-description" id="click"><code><span class="field-name">click</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Click/" class="type-link">Click</a></code><a class="header-anchor" href="#click"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional Click component to cancel when long press is detected.
This prevents both click and long press from firing.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">handleLongPress</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">click</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Click/" class="type-link">Click</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new LongPress component.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `handleLongPress` | Function | *(optional)* | Optional callback for long press events  |
| `click` | [Click](/api-docs/headless/ceramic/Click/) | *(optional)* | Optional Click component to coordinate with |

## Private Members

<div class="signature field-var no-description" id="pointerStartX"><code><span class="field-name">pointerStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pointerStartY"><code><span class="field-name">pointerStartY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didLongPress"><code><span class="field-name">didLongPress</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didLongPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitLongPress"><code><span class="field-name">emitLongPress</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLongPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when a long press is detected.



| Name | Type | Description |
|------|------|-------------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) | Touch information for the long press |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="cancelLongPress"><code><span class="field-name">cancelLongPress</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancelLongPress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindPointerEvents"><code><span class="field-name">bindPointerEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindPointerEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerDown"><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerMove"><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerUp"><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/headless/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/headless/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

