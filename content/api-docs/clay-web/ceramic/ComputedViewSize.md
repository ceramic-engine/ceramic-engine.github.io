---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: ComputedViewSize
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ComputedViewSize/
---

# ComputedViewSize

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/ComputedViewSize.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ComputedViewSize</strong> (Class)</div>

Represents computed size information for a View during the layout process.

This class is used internally by the View system to pass sizing constraints
and computed dimensions between parent and child views during layout calculations.
It supports object pooling for performance optimization.

The NO_SIZE constant indicates that a dimension has not been computed or constrained.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/View/">View</a>, <a href="/api-docs/clay-web/ceramic/ViewLayoutMask/">ViewLayoutMask</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="NO_SIZE"><div class="plugin-name">ui</div><code><span class="field-name">NO_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#NO_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sentinel value indicating that a size dimension has not been set or computed.
This special value is used to distinguish unset dimensions from zero dimensions.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">ui</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ComputedViewSize</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a ComputedViewSize instance from the object pool.
The instance is reset to default values before being returned.


| Returns | Description |
|---------|-------------|
| [ComputedViewSize](/api-docs/clay-web/ceramic/ComputedViewSize/) | A reset ComputedViewSize instance ready for use |

## Instance Members

<div class="signature field-var has-description has-plugin" id="parentLayoutMask"><div class="plugin-name">ui</div><code><span class="field-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a></code><a class="header-anchor" href="#parentLayoutMask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The layout mask from the parent view, indicating sizing constraints.
Determines how the child view should calculate its dimensions.
Default is FLEXIBLE.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentWidth"><div class="plugin-name">ui</div><code><span class="field-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parentWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The width constraint from the parent view.
May be NO_SIZE if no width constraint is imposed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentHeight"><div class="plugin-name">ui</div><code><span class="field-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parentHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The height constraint from the parent view.
May be NO_SIZE if no height constraint is imposed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedWidth"><div class="plugin-name">ui</div><code><span class="field-name">computedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The computed width for the view after layout calculation.
Set by the view during its computeSize phase.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedHeight"><div class="plugin-name">ui</div><code><span class="field-name">computedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The computed height for the view after layout calculation.
Set by the view during its computeSize phase.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedFitWidth"><div class="plugin-name">ui</div><code><span class="field-name">computedFitWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computedFitWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Special computed width for content fitting scenarios.
Used by views like TextView that need to calculate their ideal width
based on content before applying constraints.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="recycle"><div class="plugin-name">ui</div><code><span class="field-name">recycle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#recycle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns this instance to the object pool for reuse.
Should be called when the instance is no longer needed.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">computedWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">computedHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">computedFitWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `parentLayoutMask` | [Null](/api-docs/clay-web/Null/)<[ViewLayoutMask](/api-docs/clay-web/ceramic/ViewLayoutMask/)> | *(optional)* | * The layout mask from the parent view, indicating sizing constraints. Determines how the child view should calculate its dimensions. Default is FLEXIBLE. |
| `parentWidth` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * The width constraint from the parent view. May be NO_SIZE if no width constraint is imposed. |
| `parentHeight` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * The height constraint from the parent view. May be NO_SIZE if no height constraint is imposed. |
| `computedWidth` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * The computed width for the view after layout calculation. Set by the view during its computeSize phase. |
| `computedHeight` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * The computed height for the view after layout calculation. Set by the view during its computeSize phase. |
| `computedFitWidth` | [Null](/api-docs/clay-web/Null/)<[Float](/api-docs/clay-web/Float/)> | *(optional)* | * Special computed width for content fitting scenarios. Used by views like TextView that need to calculate their ideal width based on content before applying constraints. |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

