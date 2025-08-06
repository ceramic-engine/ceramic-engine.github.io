---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Vec3
target: Unity
permalink: api-docs/unity/nape/geom/Vec3/
---

# Vec3

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/Vec3.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.Vec3</strong> (final class)</div>

A 3 dimensional vector object.
<br/><br/>
In many instances a Vec3 will be accessible from Nape which is marked
as immutable, these cases will be documented and modifying such a Vec3
will result in an error.

## Static Members

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">nape</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec3</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allocate a Vec3 from the global object pool.
<br/><br/>
Use of this method should always be preferred to the constructor.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | `0` | The x component of Vec3. (default 0)  |
| `y` | [Float](/api-docs/unity/Float/) | `0` | The y component of Vec3. (default 0)  |
| `z` | [Float](/api-docs/unity/Float/) | `0` | The z component of Vec3. (default 0)  |

| Returns | Description |
|---------|-------------|
| [Vec3](/api-docs/unity/nape/geom/Vec3/) | A Vec3 allocated from global object pool with given components. |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_Vec3/" class="type-link">zpp_nape.geom.ZPP_Vec3</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_pool"><div class="plugin-name">nape</div><code><span class="field-name">zpp_pool</span><span class="operator">:</span> <a href="#" class="type-link">Vec3</a></code><a class="header-anchor" href="#zpp_pool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="zpp_disp"><div class="plugin-name">nape</div><code><span class="field-name">zpp_disp</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#zpp_disp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="x"><div class="plugin-name">nape</div><code><span class="field-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x component of Vec3.
@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="y"><div class="plugin-name">nape</div><code><span class="field-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#y"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y component of Vec3.
@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="z"><div class="plugin-name">nape</div><code><span class="field-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#z"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The z component of Vec3.
@default 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="length"><div class="plugin-name">nape</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Length of Vec3.
<br/><br/>
This value may also be set to any value including negatives, though
an error will be thrown if length of the Vec3 is already 0 as such
a scaling would be undefined. As well as if this Vec3 has been disposed
of, or is immutable.

@default 0

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="dispose"><div class="plugin-name">nape</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a copy of this Vec3.

public function copy():Vec3{
{
#if(!NAPE_RELEASE_BUILD)
if(this!=null&&this.zpp_disp)throw "Error: "+"Vec3"+" has been disposed and cannot be used!";
#end
};
return Vec3.get(x,y,z);
}
/**
Release Vec3 object to global object pool.


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="lsq"><div class="plugin-name">nape</div><code><span class="field-name">lsq</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lsq"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute squared length of Vec3.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The squared length of this Vec3.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="set"><div class="plugin-name">nape</div><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="#" class="type-link">Vec3</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec3</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set values of this Vec3 from another.



| Name | Type | Description |
|------|------|-------------|
| `vector` | [Vec3](/api-docs/unity/nape/geom/Vec3/) | The vector to set values from.  |

| Returns | Description |
|---------|-------------|
| [Vec3](/api-docs/unity/nape/geom/Vec3/) | A reference to this Vec3.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setxyz"><div class="plugin-name">nape</div><code><span class="field-name">setxyz</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Vec3</a></code><a class="header-anchor" href="#setxyz"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set values of this Vec3 from numbers.



| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | The new x component value for this vector.  |
| `y` | [Float](/api-docs/unity/Float/) | The new y component value for this vector.  |
| `z` | [Float](/api-docs/unity/Float/) | The new z component value for this vector.  |

| Returns | Description |
|---------|-------------|
| [Vec3](/api-docs/unity/nape/geom/Vec3/) | A reference to this Vec3.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="xy"><div class="plugin-name">nape</div><code><span class="field-name">xy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">weak</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/nape/geom/Vec2/" class="type-link">Vec2</a></code><a class="header-anchor" href="#xy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce copy of the xy components of Vec3.
<br/><br/>
This function will return a new Vec2 completely seperate
from this Vec3 with values equal to the xy components of
this Vec3.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `weak` | [Bool](/api-docs/unity/Bool/) | `false` | If true, then the allocated Vec2 will be weak so that when used as an argument to a Nape function it will be automatically released back to the global object pool. (default false)  |

| Returns | Description |
|---------|-------------|
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | An allocated Vec2 representing the xy components of this vector. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Vec3.
<br/><br/>
This method should not generally be used with preference for the
static get method which will make use of the global object pool.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | `0` | The x component of Vec3. (default 0)  |
| `y` | [Float](/api-docs/unity/Float/) | `0` | The y component of Vec3. (default 0)  |
| `z` | [Float](/api-docs/unity/Float/) | `0` | The z component of Vec3. (default 0)  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |

