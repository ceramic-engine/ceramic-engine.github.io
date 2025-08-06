---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Interactor
target: Headless
permalink: api-docs/headless/nape/phys/Interactor/
---

# Interactor

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/phys/Interactor.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.phys.Interactor</strong> (Class) → <a href="/api-docs/headless/nape/phys/Body/">Body</a>, <a href="/api-docs/headless/nape/phys/Compound/">Compound</a>, <a href="/api-docs/headless/nape/shape/Shape/">nape.shape.Shape</a></div>

## Static Members

<div class="signature field-var has-description has-plugin" id="zpp_internalAlloc"><div class="plugin-name">nape</div><code><span class="field-name">zpp_internalAlloc</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_internalAlloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner_i"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner_i</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/phys/ZPP_Interactor/" class="type-link">zpp_nape.phys.ZPP_Interactor</a></code><a class="header-anchor" href="#zpp_inner_i"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="id"><div class="plugin-name">nape</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique id of this Interactor.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="castShape"><div class="plugin-name">nape</div><code><span class="field-name">castShape</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/shape/Shape/" class="type-link">nape.shape.Shape</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#castShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>cast(interactor, Shape)</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="castBody"><div class="plugin-name">nape</div><code><span class="field-name">castBody</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/phys/Body/" class="type-link">Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#castBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>cast(interactor, Body)</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="castCompound"><div class="plugin-name">nape</div><code><span class="field-name">castCompound</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/phys/Compound/" class="type-link">Compound</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#castCompound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>cast(interactor, Compound)</code>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="group"><div class="plugin-name">nape</div><code><span class="field-name">group</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/nape/dynamics/InteractionGroup/" class="type-link">nape.dynamics.InteractionGroup</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

InteractionGroup assigned to this Interactor.

@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cbTypes"><div class="plugin-name">nape</div><code><span class="field-name">cbTypes</span><span class="operator">:</span> <a href="/api-docs/headless/nape/callbacks/CbTypeList/" class="type-link">nape.callbacks.CbTypeList</a></code><a class="header-anchor" href="#cbTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of CbType's assigned to this Interactor.

@default []

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isShape"><div class="plugin-name">nape</div><code><span class="field-name">isShape</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isShape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>Std.isOfType(interactor, Shape)</code>

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if this Interactor is a Shape. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isBody"><div class="plugin-name">nape</div><code><span class="field-name">isBody</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>Std.isOfType(interactor, Body)</code>

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if this Interactor is a Body. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isCompound"><div class="plugin-name">nape</div><code><span class="field-name">isCompound</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isCompound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fast equivalent to <code>Std.isOfType(interactor, Compound)</code>

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | true if this Interactor is a Compound. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

