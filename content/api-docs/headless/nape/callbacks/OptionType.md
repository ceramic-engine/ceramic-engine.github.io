---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: OptionType
target: Headless
permalink: api-docs/headless/nape/callbacks/OptionType/
---

# OptionType

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/OptionType.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.OptionType</strong> (final class)</div>

OptionType representing matching behaviour for Listeners.
<br/><br/>
An object's set of CbType's 'matches' against an OptionType iff.
the OptionType's includes list intersects the object's set of CbTypes
and the OptionType's excludes list 'does not' intersect the object's set
of CbTypes.
<pre>
option = new OptionType([A, B], [C, D]);
obj.cbTypes = [] // => does not match option.
obj.cbTypes = [A] // => matches the option
obj.cbTypes = [A, C] // => does not match option.
</pre>
The optionType's includes and excludes list are managed to be always
disjoint: The action of including an already excluded type serves to
remove it from the excludes list, equalliy excluding an already included
type serves to remove it from the includes list.
<pre>
var option = new OptionType();
option.including(A); // option = {[A]:[]}
option.excluding(A); // option = {[]:[]}
option.excluding(A); // option = {[]:[A]}
option.including(A); // option = {[A]:[]}
</pre>

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/callbacks/ZPP_OptionType/" class="type-link">zpp_nape.callbacks.ZPP_OptionType</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="includes"><div class="plugin-name">nape</div><code><span class="field-name">includes</span><span class="operator">:</span> <a href="/api-docs/headless/nape/callbacks/CbTypeList/" class="type-link">CbTypeList</a></code><a class="header-anchor" href="#includes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of included CbTypes.
<br/><br/>
This list is both readonly, and immutable. To remove an element
from this list you can use: <code>option.excluding(cbType)</code>

@default []

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="excludes"><div class="plugin-name">nape</div><code><span class="field-name">excludes</span><span class="operator">:</span> <a href="/api-docs/headless/nape/callbacks/CbTypeList/" class="type-link">CbTypeList</a></code><a class="header-anchor" href="#excludes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of excluded CbTypes.
<br/><br/>
This list is both readonly, and immutable. To remove an element
from this list you can use: <code>option.including(cbType)</code>

@default []

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="including"><div class="plugin-name">nape</div><code><span class="field-name">including</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">includes</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">OptionType</a></code><a class="header-anchor" href="#including"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Append set of types to includes list.
<br/><br/>
This method was originally named the more appropriate 'include'
but this conflicted with the AS3 keyword include and had to be
change.
<br/><br/>
The argument is typed Dynamic, and is permitted to be one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt; flash.Vector&lt;CbType&gt;</code>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `includes` | [Dynamic](/api-docs/headless/Dynamic/) | `null` | The set of CbTypes to be included. (default null)  |

| Returns | Description |
|---------|-------------|
| [OptionType](/api-docs/headless/nape/callbacks/OptionType/) | A reference to this OptionType.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="excluding"><div class="plugin-name">nape</div><code><span class="field-name">excluding</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">excludes</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">OptionType</a></code><a class="header-anchor" href="#excluding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Append set of types to excludes list.
<br/><br/>
This method was originally named the more appropriate 'exclude'
but to match the necessary change for the include function, this was
renamed as excluding.
<br/><br/>
The argument is typed Dynamic, and is permitted to be one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt; flash.Vector&lt;CbType&gt;</code>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `excludes` | [Dynamic](/api-docs/headless/Dynamic/) | `null` | The set of CbTypes to be excluded. (default null)  |

| Returns | Description |
|---------|-------------|
| [OptionType](/api-docs/headless/nape/callbacks/OptionType/) | A reference to this OptionType.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">includes</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">excludes</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new OptionType.
<br/><br/>
The type of the arguments is Dynamic, and is permitted to be one of:
<code>CbType, CbTypeList, Array&lt;CbType&gt; flash.Vector&lt;CbType&gt;</code>



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `includes` | [Dynamic](/api-docs/headless/Dynamic/) | `null` | The set of CbTypes to be included in the matching process. (default null)  |
| `excludes` | [Dynamic](/api-docs/headless/Dynamic/) | `null` | The set of CbTypes to be excluded in the matching process. (default null)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

