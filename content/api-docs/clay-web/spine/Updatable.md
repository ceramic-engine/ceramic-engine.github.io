---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Updatable
target: Clay (Web)
permalink: api-docs/clay-web/spine/Updatable/
---

# Updatable

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/Updatable.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.Updatable</strong> (Interface) → <a href="/api-docs/clay-web/spine/Bone/">Bone</a>, <a href="/api-docs/clay-web/spine/IkConstraint/">IkConstraint</a>, <a href="/api-docs/clay-web/spine/PathConstraint/">PathConstraint</a>, <a href="/api-docs/clay-web/spine/TransformConstraint/">TransformConstraint</a></div>

The interface for items updated by {@link Skeleton#updateWorldTransform()}.

## Instance Members

<div class="signature field-method no-description has-plugin" id="update"><div class="plugin-name">spine</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isActive"><div class="plugin-name">spine</div><code><span class="field-name">isActive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns false when this item has not been updated because a skin is required and the {@link Skeleton#getSkin() active skin}
does not contain this item.

<div class="see"><strong>See:</strong> Skin#getBones(), Skin#getConstraints()</div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

