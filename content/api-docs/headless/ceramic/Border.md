---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Border
target: Headless
permalink: api-docs/headless/ceramic/Border/
---

# Border

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Border.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <a href="/api-docs/headless/ceramic/Visual/">Visual</a> → <a href="/api-docs/headless/ceramic/Mesh/">Mesh</a> → <strong>ceramic.Border</strong> (Class)</div>

A rectangle visual that display a border

## Instance Members

<div class="signature field-var has-description" id="borderPosition"><code><span class="field-name">borderPosition</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#borderPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the border relative to the rectangle bounds.
Can be INSIDE, OUTSIDE, or CENTERED.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderSize"><code><span class="field-name">borderSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default size of all borders in pixels.
Individual border sizes override this value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderTopSize"><code><span class="field-name">borderTopSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderTopSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the top border in pixels.
Set to -1 to use the default borderSize.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderBottomSize"><code><span class="field-name">borderBottomSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderBottomSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the bottom border in pixels.
Set to -1 to use the default borderSize.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderLeftSize"><code><span class="field-name">borderLeftSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderLeftSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the left border in pixels.
Set to -1 to use the default borderSize.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderRightSize"><code><span class="field-name">borderRightSize</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderRightSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of the right border in pixels.
Set to -1 to use the default borderSize.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderColor"><code><span class="field-name">borderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default color for all borders.
Individual border colors override this value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderTopColor"><code><span class="field-name">borderTopColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderTopColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color of the top border.
Set to Color.NONE to use the default borderColor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderBottomColor"><code><span class="field-name">borderBottomColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderBottomColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color of the bottom border.
Set to Color.NONE to use the default borderColor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderLeftColor"><code><span class="field-name">borderLeftColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderLeftColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color of the left border.
Set to Color.NONE to use the default borderColor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="borderRightColor"><code><span class="field-name">borderRightColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderRightColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color of the right border.
Set to Color.NONE to use the default borderColor.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new Border visual.

## Private Members

<div class="signature field-method has-description" id="computeColors"><code><span class="field-name">computeColors</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeColors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute and update the colors for each border segment.
Uses individual border colors if set, otherwise falls back to borderColor.

<hr class="field-separator" />

<div class="signature field-method has-description" id="computeVertices"><code><span class="field-name">computeVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute and update the vertices for the border mesh.
Takes into account border sizes and position (inside, outside, centered).

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

