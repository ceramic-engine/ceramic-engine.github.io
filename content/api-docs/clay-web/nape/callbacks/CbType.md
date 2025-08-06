---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: CbType
target: Clay (Web)
permalink: api-docs/clay-web/nape/callbacks/CbType/
---

# CbType

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/CbType.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.CbType</strong> (final class)</div>

Callback Type applied to Interactors and Constraints.
<br/><br/>
Callback types are ranged over by listeners.

## Static Members

<div class="signature field-var has-description has-plugin" id="ANY_BODY"><div class="plugin-name">nape</div><code><span class="field-name">ANY_BODY</span><span class="operator">:</span> <a href="#" class="type-link">CbType</a></code><a class="header-anchor" href="#ANY_BODY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default CbType given to all Bodys

Due to the way the Callback system in Nape works, you can use this
CbType to match against 'all'
Bodys
In a Listener (Assuming you do not 'remove' this type from the object)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ANY_CONSTRAINT"><div class="plugin-name">nape</div><code><span class="field-name">ANY_CONSTRAINT</span><span class="operator">:</span> <a href="#" class="type-link">CbType</a></code><a class="header-anchor" href="#ANY_CONSTRAINT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default CbType given to all Constraints

Due to the way the Callback system in Nape works, you can use this
CbType to match against 'all'
Constraints
In a Listener (Assuming you do not 'remove' this type from the object)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ANY_SHAPE"><div class="plugin-name">nape</div><code><span class="field-name">ANY_SHAPE</span><span class="operator">:</span> <a href="#" class="type-link">CbType</a></code><a class="header-anchor" href="#ANY_SHAPE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default CbType given to all Shapes

Due to the way the Callback system in Nape works, you can use this
CbType to match against 'all'
Shapes
In a Listener (Assuming you do not 'remove' this type from the object)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ANY_COMPOUND"><div class="plugin-name">nape</div><code><span class="field-name">ANY_COMPOUND</span><span class="operator">:</span> <a href="#" class="type-link">CbType</a></code><a class="header-anchor" href="#ANY_COMPOUND"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default CbType given to all Compounds

Due to the way the Callback system in Nape works, you can use this
CbType to match against 'all'
Compounds
In a Listener (Assuming you do not 'remove' this type from the object)

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbType/" class="type-link">zpp_nape.callbacks.ZPP_CbType</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="id"><div class="plugin-name">nape</div><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Unique identifier for this CbType.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="userData"><div class="plugin-name">nape</div><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic object for user to store additional data.
<br/><br/>
This object cannot be set, only its dynamically created
properties may be set. In AS3 the type of this property is &#42
<br/><br/>
This object will be lazily constructed so that until accessed
for the first time, will be null internally.

@default {}

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="interactors"><div class="plugin-name">nape</div><code><span class="field-name">interactors</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/phys/InteractorList/" class="type-link">nape.phys.InteractorList</a></code><a class="header-anchor" href="#interactors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all Interactors using this CbType.
<br/><br/>
This list contains only those Interactors that are inside of a Space
<br/><br/>
This list is not only readonly, but also immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="constraints"><div class="plugin-name">nape</div><code><span class="field-name">constraints</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/constraint/ConstraintList/" class="type-link">nape.constraint.ConstraintList</a></code><a class="header-anchor" href="#constraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of all Constraints using this CbType.
<br/><br/>
This list contains only those Constraints that are inside of a Space
<br/><br/>
This list is not only readonly, but also immutable.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="including"><div class="plugin-name">nape</div><code><span class="field-name">including</span><span class="parenthesis">(</span><span class="arg-name">includes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/OptionType/" class="type-link">OptionType</a></code><a class="header-anchor" href="#including"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct OptionType with given extra includes.
<br/><br/>
Equivalent to <code>new OptionType(this).including(includes)</code>
<br/><br/>
The includes argument is typed Dynamic, and is permitted to be one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt;, flash.Vector&lt;CbType&gt;</code>



| Name | Type | Description |
|------|------|-------------|
| `includes` | [Dynamic](/api-docs/clay-web/Dynamic/) | The CbTypes to include.  |

| Returns | Description |
|---------|-------------|
| [OptionType](/api-docs/clay-web/nape/callbacks/OptionType/) | A new OptionType whose includes are equal to this CbType and all the CbTypes given as argument.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="excluding"><div class="plugin-name">nape</div><code><span class="field-name">excluding</span><span class="parenthesis">(</span><span class="arg-name">excludes</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/OptionType/" class="type-link">OptionType</a></code><a class="header-anchor" href="#excluding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct OptionType with given excludes.
<br/><br/>
Equivalent to <code>new OptionType(this).excluding(excludes)</code>
<br/><br/>
The excludes argument is typed Dynamic, and is permitted to be one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt;, flash.Vector&lt;CbType&gt;</code>



| Name | Type | Description |
|------|------|-------------|
| `excludes` | [Dynamic](/api-docs/clay-web/Dynamic/) | The CbTypes to exclude.  |

| Returns | Description |
|---------|-------------|
| [OptionType](/api-docs/clay-web/nape/callbacks/OptionType/) | A new OptionType whose included types are just 'this' and whose excluded types are those given as argument.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new CbType object.


## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

