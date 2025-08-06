---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: BodyType
target: Clay (Native)
permalink: api-docs/clay-native/nape/phys/BodyType/
---

# BodyType

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/phys/BodyType.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.phys.BodyType</strong> (final class)</div>

Enumeration of rigid body types.

## Static Members

<div class="signature field-var has-description has-plugin" id="STATIC"><div class="plugin-name">nape</div><code><span class="field-name">STATIC</span><span class="operator">:</span> <a href="#" class="type-link">BodyType</a></code><a class="header-anchor" href="#STATIC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Static objects are not permitted to move, and due to this several
optimisations can be made for them.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DYNAMIC"><div class="plugin-name">nape</div><code><span class="field-name">DYNAMIC</span><span class="operator">:</span> <a href="#" class="type-link">BodyType</a></code><a class="header-anchor" href="#DYNAMIC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Standard dynamic object, this object will be effected by the physics
as usual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="KINEMATIC"><div class="plugin-name">nape</div><code><span class="field-name">KINEMATIC</span><span class="operator">:</span> <a href="#" class="type-link">BodyType</a></code><a class="header-anchor" href="#KINEMATIC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Kinematic objects are static objects which 'are' permitted to move,
you have complete control over their velocity to make them move how
you wish and are not effected by any physics.

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

