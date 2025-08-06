---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: InteractionListener
target: Unity
permalink: api-docs/unity/nape/callbacks/InteractionListener/
---

# InteractionListener

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/InteractionListener.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/nape/callbacks/Listener/">Listener</a> → <strong>nape.callbacks.InteractionListener</strong> (final class)</div>

Event listener for Interaction type events.
<br/><br/>
Interaction type events can occur between any two Interactors (whether they
be Shapes, Bodys, Compounds or a mix thereof).
<br/><br/>
The events that can be caught are BEGIN, ONGOING, and END type events.
Theses listeners will operate between pairs of Interactors.
<pre>
_Space
/      \
Cmp1        Cmp3
/    \         |
Body1  Cmp2     Body3
|      |        |
Shp1   Body2    Shp3
|
Shp2
</pre>
The possible interactor pairs for callbacks are formed by finding the most
recent common ancestor in the world for the given pair of shapes and taking all
possible pairings. In the above situation we have:
<pre>
MRCA(Shp1, Shp2) = Cmp1  --> Possible pairings = [Shp1, Body1] x [Shp2, Body2, Cmp2]
MRCA(Shp1, Shp3) = Space --> Possible pairings = [Shp1, Body1, Cmp1] x [Shp3, Body3, Cmp3]
MRCA(Shp2, Shp3) = Space --> Possible pairings = [Shp2, Body2, Cmp2, Cmp1] x [Shp3, Body3, Cmp3]
</pre>
Of course, not all of these pairings will generate callbacks, only those for which
a valid listener exists for the event type, and for the cbtypes of each interactor.
<br/><br/>
Furthermore, the listener specifies an interaction type which works even in mixed
cases where many types of interaction between two objects is happening at once.

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

<div class="signature field-var has-description has-plugin" id="interactionType"><div class="plugin-name">nape</div><code><span class="field-name">interactionType</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/InteractionType/" class="type-link">InteractionType</a></code><a class="header-anchor" href="#interactionType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The specific type of interaction that is to be listened for.
<br/><br/>
If we specify that we only want to listen for a fluid type interaction, then
this listener will operate so that any other interactions for the same pair
of objects is ignored.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="allowSleepingCallbacks"><div class="plugin-name">nape</div><code><span class="field-name">allowSleepingCallbacks</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowSleepingCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For ONGOING listeners only, permit ONGOING callbacks whilst sleeping.
<br/><br/>
This property determines whether we will still receive
ONGOING callbacks between two sleeping Interactors. The default action is to
inhibit callbacks between sleeping objects for performance. Setting this field to true
will permit Nape to always generate callbacks.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handler"><div class="plugin-name">nape</div><code><span class="field-name">handler</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback handler for this listener.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/CbEvent/" class="type-link">CbEvent</a><span class="operator">,</span> <span class="arg-name">interactionType</span><span class="operator">:</span> <a href="/api-docs/unity/nape/callbacks/InteractionType/" class="type-link">InteractionType</a><span class="operator">,</span> <span class="arg-name">options1</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">options2</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">precedence</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new InteractionListener.
<br/><br/>
The possible event types are BEGIN, ONGOING and END.
<br/><br/>
The options arguments are typed Dynamic, and are permitted to be either an
<code>OptionType</code> or one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt;, flash.Vector&lt;CbType&gt;</code>
In which case the input CbType's will be used to construct an OptionType
whose included types will be the set of CbTypes supplied.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `event` | [CbEvent](/api-docs/unity/nape/callbacks/CbEvent/) | | The event type to listen for.  |
| `interactionType` | [InteractionType](/api-docs/unity/nape/callbacks/InteractionType/) | | The interaction type to listen for.  |
| `options1` | [Null](/api-docs/unity/Null/)<[Dynamic](/api-docs/unity/Dynamic/)> | | The OptionType to match first Interactor against, passing null will equate to an empty OptionType.  |
| `options2` | [Null](/api-docs/unity/Null/)<[Dynamic](/api-docs/unity/Dynamic/)> | | The OptionType to match second Interactor against, passing null will equate to an empty OptionType.  |
| `handler` | Function | | The callback handler for this listener.  |
| `precedence` | [Int](/api-docs/unity/Int/) | `0` | The precedence of this listener used to sort the order of callbacks in the case of more than one suitable BodyListener existing for the same event on the same Body. (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |

