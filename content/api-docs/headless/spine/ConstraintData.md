---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: ConstraintData
target: Headless
permalink: api-docs/headless/spine/ConstraintData/
---

# ConstraintData

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/ConstraintData.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.ConstraintData</strong> (Class) → <a href="/api-docs/headless/spine/IkConstraintData/">IkConstraintData</a>, <a href="/api-docs/headless/spine/PathConstraintData/">PathConstraintData</a>, <a href="/api-docs/headless/spine/TransformConstraintData/">TransformConstraintData</a></div>

The base class for all constraint datas.

## Instance Members

<div class="signature field-var no-description has-plugin" id="name"><div class="plugin-name">spine</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="order"><div class="plugin-name">spine</div><code><span class="field-name">order</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#order"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="skinRequired"><div class="plugin-name">spine</div><code><span class="field-name">skinRequired</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#skinRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getName"><div class="plugin-name">spine</div><code><span class="field-name">getName</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The constraint's name, which is unique across all constraints in the skeleton of the same type.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getOrder"><div class="plugin-name">spine</div><code><span class="field-name">getOrder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The ordinal of this constraint for the order a skeleton's constraints will be applied by
{@link Skeleton#updateWorldTransform()}.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setOrder"><div class="plugin-name">spine</div><code><span class="field-name">setOrder</span><span class="parenthesis">(</span><span class="arg-name">order</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `order` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getSkinRequired"><div class="plugin-name">spine</div><code><span class="field-name">getSkinRequired</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getSkinRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When true, {@link Skeleton#updateWorldTransform()} only updates this constraint if the {@link Skeleton#getSkin()} contains
this constraint.
<p>
See {@link Skin#getConstraints()}.
| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setSkinRequired"><div class="plugin-name">spine</div><code><span class="field-name">setSkinRequired</span><span class="parenthesis">(</span><span class="arg-name">skinRequired</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSkinRequired"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `skinRequired` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="toString"><div class="plugin-name">spine</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

