---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: PreListener
target: Unity
permalink: api-docs/unity/nape/callbacks/PreListener/
---

# PreListener

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/PreListener.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/nape/callbacks/Listener/">Listener</a> → <strong>nape.callbacks.PreListener</strong> (final class)</div>

Event listener for Pre-Interaction type events.
<br/><br/>
Pre-Interaction type events can occur between any two Interactors (whether they
be Shapes, Bodys, Compounds or a mix thereof).

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_zn"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_zn</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/callbacks/ZPP_InteractionListener/" class="type-link">zpp_nape.callbacks.ZPP_InteractionListener</a></code><a class="header-anchor" href="#zpp_inner_zn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="options1"><div class="plugin-name">nape</div><code><span class="field-name">options1</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/OptionType/" class="type-link">OptionType</a></code><a class="header-anchor" href="#options1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The OptionType used to match against Interactors for the first object.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="options2"><div class="plugin-name">nape</div><code><span class="field-name">options2</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/OptionType/" class="type-link">OptionType</a></code><a class="header-anchor" href="#options2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The OptionType used to match against Interactors for the second object.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pure"><div class="plugin-name">nape</div><code><span class="field-name">pure</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pure"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mark this listener as having a pure callback handler.
<br/><br/>
A pure callback handler is one which under no circumstances will change its behaviour.
In such a (favourable) instance, marking the callback as pure will allow Nape to permit
objects in interaction to go to sleep even if the handler returns an IGNORE_ONCE/ACCEPT_ONCE
PreFlag.

@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="interactionType"><div class="plugin-name">nape</div><code><span class="field-name">interactionType</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/InteractionType/" class="type-link">InteractionType</a></code><a class="header-anchor" href="#interactionType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The specific type of interaction that is to be listened for.
<br/><br/>
If we specify that we only want to listen for a fluid type interaction, then
this listener will operate so that any other interactions for the same pair
of objects is ignored.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handler"><div class="plugin-name">nape</div><code><span class="field-name">handler</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/nape/callbacks/PreFlag/" class="type-link">PreFlag</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#handler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Callback handler for this listener.
<br/><br/>
This callback handler returns a possibly null PreFlag object.
<br/>
Passing null is equivalent to telling nape 'ignore me' so that whatever existing
decision has been made regarding the interaction is not modified.
Otherwise returning a non-null PreFlag will change the current decision about what
to do with the interaction.
<br/><br/>
Returning ACCEPT/IGNORE inform nape to take control over all subsequent interaction
between the two objects until they seperate. Returning these will mean that the pre
listener will not be invoked again until the objects seperate, and then begin to interact
afresh.
<br/><br/>
Returning #_ONCE, the objects will only be effected for a single step, and the following
step should they still be candidates for interaction, this handler will be invoked again.
<br/>
In the case of a #_ONCE, PreFlag; Nape will 'not' permit the two objects to go to sleep
as Nape cannot know if this callback handler will suddenly changes its mind.
<br/>
If this handler is a 'pure' function, then you may mark it as such and Nape will keep you
to your word and permit the objects to sleep.
| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[PreFlag](/api-docs/unity/nape/callbacks/PreFlag/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">interactionType</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/InteractionType/" class="type-link">InteractionType</a><span class="operator">,</span> <span class="arg-name">options1</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">options2</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precedence</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pure</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new PreListener.
<br/><br/>
The options arguments are typed Dynamic, and are permitted to be either an
<code>OptionType</code> or one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt;, flash.Vector&lt;CbType&gt;</code>
In which case the input CbType's will be used to construct an OptionType
whose included types will be the set of CbTypes supplied.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `interactionType` | [InteractionType](/api-docs/unity/nape/callbacks/InteractionType/) | | The interaction type to listen for.  |
| `options1` | [Null](/api-docs/unity/Null/)<[Dynamic](/api-docs/unity/Dynamic/)> | | The OptionType to match first Interactor against, passing null will equate to an empty OptionType.  |
| `options2` | [Null](/api-docs/unity/Null/)<[Dynamic](/api-docs/unity/Dynamic/)> | | The OptionType to match second Interactor against, passing null will equate to an empty OptionType.  |
| `handler` | Function | | The callback handler for this listener.  |
| `precedence` | [Int](/api-docs/unity/Int/) | `0` | The precedence of this listener used to sort the order of callbacks in the case of more than one suitable BodyListener existing for the same event on the same Body. (default 0)  |
| `pure` | [Bool](/api-docs/unity/Bool/) | `false` | If true, then the listener will be marked as having a pure handler. (default false)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |

