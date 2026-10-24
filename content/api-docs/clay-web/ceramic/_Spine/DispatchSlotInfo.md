---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: DispatchSlotInfo
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/_Spine/DispatchSlotInfo/
---

# DispatchSlotInfo

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/Spine.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <strong>ceramic._Spine.DispatchSlotInfo</strong> (private class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Events

<div class="signature field-event no-description" id="event-dispatch"><code><span class="event-keyword">@event</span> <span class="field-name">dispatch</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SlotInfo/" class="type-link">ceramic.SlotInfo</a><span class="parenthesis">)</span></code><a class="header-anchor" href="#event-dispatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [ceramic.SlotInfo](/api-docs/clay-web/ceramic/SlotInfo/) |

<div class="event-methods"><code>onDispatch(owner, handler)</code> <code>onceDispatch(owner, handler)</code> <code>offDispatch(?handler)</code> <code>listensDispatch()</code></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="emitDispatch"><div class="plugin-name">spine</div><code><span class="field-name">emitDispatch</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SlotInfo/" class="type-link">ceramic.SlotInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDispatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

dispatch event

| Name | Type |
|------|------|
| `info` | [ceramic.SlotInfo](/api-docs/clay-web/ceramic/SlotInfo/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.Spine |

