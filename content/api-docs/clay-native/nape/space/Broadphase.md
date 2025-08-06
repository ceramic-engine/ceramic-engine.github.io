---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: Broadphase
target: Clay (Native)
permalink: api-docs/clay-native/nape/space/Broadphase/
---

# Broadphase

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/space/Broadphase.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.space.Broadphase</strong> (final class)</div>

Enumeration of available broadphase collision types that Spaces may use.

## Static Members

<div class="signature field-var has-description has-plugin" id="DYNAMIC_AABB_TREE"><div class="plugin-name">nape</div><code><span class="field-name">DYNAMIC_AABB_TREE</span><span class="operator">:</span> <a href="#" class="type-link">Broadphase</a></code><a class="header-anchor" href="#DYNAMIC_AABB_TREE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dynamic AABB Tree broadphase.
<br/><br/>
This broadphase uses a pair of binary trees with objects inserted based
on containment of their AABB.
<br/><br/>
This is a general purpose broadphase which does not suffer for objects
of varying sizes, or objects moving very quickly and is well set for such
acts as ray casting and spatial queries like objectsInAABB of the Space type.
<br/><br/>
This is the default broadphase nape will use.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="SWEEP_AND_PRUNE"><div class="plugin-name">nape</div><code><span class="field-name">SWEEP_AND_PRUNE</span><span class="operator">:</span> <a href="#" class="type-link">Broadphase</a></code><a class="header-anchor" href="#SWEEP_AND_PRUNE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sweep and prune broadphase.
<br/><br/>
This is a very simple broadphase using the x-axis to keep objects
sorted by their minimum x coordinate.
<br/><br/>
Performance of this broadphase is generally good and in some circumstances
superior to the DYNAMIC_AABB_TREE broadphase.
<br/><br/>
This broadphase will however be much slower for things such as ray casts and
spatial queries like objectsInAABB on the Space type.
Also in cases where lots of objects are moving very quickly or when there is a
large variety in the size of objects.
<br/><br/>
Due to the simplicity of this broadphase, it serves as a good test should you
ever feel there might be something going wrong with the DYNAMIC_AABB_TREE
broadphase type.

## Instance Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

