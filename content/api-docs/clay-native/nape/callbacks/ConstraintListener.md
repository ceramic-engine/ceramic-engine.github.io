---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ConstraintListener
target: Clay (Native)
permalink: api-docs/clay-native/nape/callbacks/ConstraintListener/
---

# ConstraintListener

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/ConstraintListener.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/nape/callbacks/Listener/">Listener</a> → <strong>nape.callbacks.ConstraintListener</strong> (final class)</div>

Event listener for Constraint type events.
<br/><br/>
The events that can be caught are WAKE, SLEEP and BREAK type events.
Theses listeners will only operate on Constraints.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/clay-native/zpp_nape/callbacks/ZPP_ConstraintListener/" class="type-link">zpp_nape.callbacks.ZPP_ConstraintListener</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="options"><div class="plugin-name">nape</div><code><span class="field-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/OptionType/" class="type-link">OptionType</a></code><a class="header-anchor" href="#options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The OptionType used to match against Constraints.
<br/><br/>
When added to the same Space, any Constraint who's CbType list matches
against this OptionType will be issued a callback when the relevant
event occurs.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handler"><div class="plugin-name">nape</div><code><span class="field-name">handler</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback handler for this event.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-native/nape/callbacks/CbEvent/" class="type-link">CbEvent</a><span class="operator">,</span> <span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precedence</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new ConstraintListener.
<br/><br/>
The possible event types are WAKE, SLEEP and BREAK.
<br/><br/>
The options argument is typed Dynamic, and is permitted to be either an
<code>OptionType</code> or one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt;, flash.Vector&lt;CbType&gt;</code>
In which case the input CbType's will be used to construct an OptionType
whose included types will be the set of CbTypes supplied.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `event` | [CbEvent](/api-docs/clay-native/nape/callbacks/CbEvent/) | | The event type to listen for.  |
| `options` | [Null](/api-docs/clay-native/Null/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | | The OptionType to match Constraints against, passing null will equate to an empty OptionType.  |
| `handler` | Function | | The callback handler for this listener.  |
| `precedence` | [Int](/api-docs/clay-native/Int/) | `0` | The precedence of this listener used to sort the order of callbacks in the case of more than one suitable ConstraintListener existing for the same event on the same Constraint. (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

