---
layout: api-docs
category: api-docs
subCategory: doc
menu: Arcade
title: QuadTree
target: Headless
permalink: api-docs/headless/arcade/QuadTree/
---

# QuadTree

<div class="view-source"><a href="https://github.com/jeremyfa/arcade/blob/master/arcade/QuadTree.hx">View source</a></div>

<div class="type-hierarchy"><strong>arcade.QuadTree</strong> (Class)</div>

A QuadTree implementation. The original code was a conversion of the Java code posted to GameDevTuts.
However I've tweaked it massively to add node indexing, removed lots of temp. var creation and significantly increased performance as a result.
Original version at https://github.com/timohausmann/quadtree-js/

## Instance Members

<div class="signature field-var has-description has-plugin" id="busy"><div class="plugin-name">arcade</div><code><span class="field-name">busy</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#busy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A flag used to know if this quad tree is currently
busy and should not be used by something else.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxObjects"><div class="plugin-name">arcade</div><code><span class="field-name">maxObjects</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxObjects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum number of objects per node.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxLevels"><div class="plugin-name">arcade</div><code><span class="field-name">maxLevels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxLevels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum number of levels to break down to.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="level"><div class="plugin-name">arcade</div><code><span class="field-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#level"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current level.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsX"><div class="plugin-name">arcade</div><code><span class="field-name">boundsX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The x position of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsY"><div class="plugin-name">arcade</div><code><span class="field-name">boundsY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The y position of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsWidth"><div class="plugin-name">arcade</div><code><span class="field-name">boundsWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsHeight"><div class="plugin-name">arcade</div><code><span class="field-name">boundsHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsSubWidth"><div class="plugin-name">arcade</div><code><span class="field-name">boundsSubWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsSubWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sub-width of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsSubHeight"><div class="plugin-name">arcade</div><code><span class="field-name">boundsSubHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsSubHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The sub-height of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsRight"><div class="plugin-name">arcade</div><code><span class="field-name">boundsRight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The right edge of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boundsBottom"><div class="plugin-name">arcade</div><code><span class="field-name">boundsBottom</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#boundsBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bottom edge of the quadtree bounds.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="objects"><div class="plugin-name">arcade</div><code><span class="field-name">objects</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#objects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of quadtree children.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="nodes"><div class="plugin-name">arcade</div><code><span class="field-name">nodes</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">QuadTree</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of associated child nodes.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="recycle"><div class="plugin-name">arcade</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reset"><div class="plugin-name">arcade</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxObjects</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxLevels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the QuadTree.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | | The top left coordinate of the quadtree.  |
| `y` | [Float](/api-docs/headless/Float/) | | The top left coordinate of the quadtree.  |
| `width` | [Float](/api-docs/headless/Float/) | | The width of the quadtree in pixels.  |
| `height` | [Float](/api-docs/headless/Float/) | | The height of the quadtree in pixels.  |
| `maxObjects` | [Int](/api-docs/headless/Int/) | `10` | The maximum number of objects per node.  |
| `maxLevels` | [Int](/api-docs/headless/Int/) | `4` | The maximum number of levels to iterate to.  |
| `level` | [Int](/api-docs/headless/Int/) | `0` | Which level is this? |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="populate"><div class="plugin-name">arcade</div><code><span class="field-name">populate</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="/api-docs/headless/arcade/Group/" class="type-link">Group</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#populate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Populates this quadtree with the children of the given Group. In order to be added the child must exist and have a body property.



| Name | Type | Description |
|------|------|-------------|
| `group` | [Group](/api-docs/headless/arcade/Group/) | The Group to add to the quadtree. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="split"><div class="plugin-name">arcade</div><code><span class="field-name">split</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#split"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Split the node into 4 subnodes

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="insert"><div class="plugin-name">arcade</div><code><span class="field-name">insert</span><span class="parenthesis">(</span><span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/arcade/Body/" class="type-link">Body</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Insert the object into the node. If the node exceeds the capacity, it will split and add all objects to their corresponding subnodes.



| Name | Type | Description |
|------|------|-------------|
| `body` | [Body](/api-docs/headless/arcade/Body/) | The Body object to insert into the quadtree. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getIndex"><div class="plugin-name">arcade</div><code><span class="field-name">getIndex</span><span class="parenthesis">(</span><span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">top</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bottom</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determine which node the object belongs to.



| Name | Type | Description |
|------|------|-------------|
| `left` | [Float](/api-docs/headless/Float/) | The left edge of the bounds to check.  |
| `top` | [Float](/api-docs/headless/Float/) | The top edge of the bounds to check.  |
| `right` | [Float](/api-docs/headless/Float/) | The right edge of the bounds to check.  |
| `bottom` | [Float](/api-docs/headless/Float/) | The bottom edge of the bounds to check.  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | Index of the subnode (0-3), or -1 if rect cannot completely fit within a subnode and is part of the parent node. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="retrieve"><div class="plugin-name">arcade</div><code><span class="field-name">retrieve</span><span class="parenthesis">(</span><span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">top</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">bottom</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/arcade/Body/" class="type-link">Body</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#retrieve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return all objects that could collide with the given bounds.



| Name | Type | Description |
|------|------|-------------|
| `left` | [Float](/api-docs/headless/Float/) | The left edge of the bounds to check.  |
| `top` | [Float](/api-docs/headless/Float/) | The top edge of the bounds to check.  |
| `right` | [Float](/api-docs/headless/Float/) | The right edge of the bounds to check.  |
| `bottom` | [Float](/api-docs/headless/Float/) | The bottom edge of the bounds to check.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[Body](/api-docs/headless/arcade/Body/)> | Array with all detected objects. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">arcade</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear the quadtree.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">arcade</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pool</span><span class="operator">:</span> <a href="/api-docs/headless/arcade/QuadTreePool/" class="type-link">QuadTreePool</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxObjects</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxLevels</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pool` | [QuadTreePool](/api-docs/headless/arcade/QuadTreePool/) | *(optional)* |
| `x` | [Float](/api-docs/headless/Float/) | |
| `y` | [Float](/api-docs/headless/Float/) | |
| `width` | [Float](/api-docs/headless/Float/) | |
| `height` | [Float](/api-docs/headless/Float/) | |
| `maxObjects` | [Int](/api-docs/headless/Int/) | `10` |
| `maxLevels` | [Int](/api-docs/headless/Int/) | `4` |
| `level` | [Int](/api-docs/headless/Int/) | `0` |

## Private Members

