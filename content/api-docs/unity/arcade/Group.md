---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: Group
target: Unity
permalink: api-docs/unity/arcade/Group/
---

# Group

<div class="view-source"><a href="https://github.com/jeremyfa/arcade/blob/master/arcade/Group.hx">View source</a></div>

<div class="type-hierarchy"><strong>arcade.Group</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/arcade/Collidable/">Collidable</a></div>

A Group is a container for multiple physics bodies.
Groups can be used for efficient collision detection between sets of bodies.

## Instance Members

<div class="signature field-var has-description has-plugin" id="objects"><div class="plugin-name">arcade</div><code><span class="field-name">objects</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#objects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of Body objects contained in this group.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="sortDirection"><div class="plugin-name">arcade</div><code><span class="field-name">sortDirection</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/SortDirection/" class="type-link">SortDirection</a></code><a class="header-anchor" href="#sortDirection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sorting direction for bodies in this group.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="add"><div class="plugin-name">arcade</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a body to this group.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/unity/arcade/Body/) | The body to add to the group. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="remove"><div class="plugin-name">arcade</div><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/unity/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a body from this group.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/unity/arcade/Body/) | The body to remove from the group. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sortLeftRight"><div class="plugin-name">arcade</div><code><span class="field-name">sortLeftRight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortLeftRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts the bodies in this group from left to right based on their x position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sortRightLeft"><div class="plugin-name">arcade</div><code><span class="field-name">sortRightLeft</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortRightLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts the bodies in this group from right to left based on their x position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sortTopBottom"><div class="plugin-name">arcade</div><code><span class="field-name">sortTopBottom</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortTopBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts the bodies in this group from top to bottom based on their y position.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sortBottomTop"><div class="plugin-name">arcade</div><code><span class="field-name">sortBottomTop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortBottomTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts the bodies in this group from bottom to top based on their y position.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

