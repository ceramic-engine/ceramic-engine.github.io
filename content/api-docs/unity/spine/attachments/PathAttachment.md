---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: PathAttachment
target: Unity
permalink: api-docs/unity/spine/attachments/PathAttachment/
---

# PathAttachment

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/attachments/PathAttachment.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/spine/attachments/Attachment/">Attachment</a> → <a href="/api-docs/unity/spine/attachments/VertexAttachment/">VertexAttachment</a> → <strong>spine.attachments.PathAttachment</strong> (Class)</div>

An attachment whose vertices make up a composite Bezier curve.
<p>
See {@link PathConstraint} and <a href="http://esotericsoftware.com/spine-paths">Paths</a> in the Spine User Guide.

## Instance Members

<div class="signature field-var no-description has-plugin" id="lengths"><div class="plugin-name">spine</div><code><span class="field-name">lengths</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#lengths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="closed"><div class="plugin-name">spine</div><code><span class="field-name">closed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#closed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="constantSpeed"><div class="plugin-name">spine</div><code><span class="field-name">constantSpeed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#constantSpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="color"><div class="plugin-name">spine</div><code><span class="field-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getClosed"><div class="plugin-name">spine</div><code><span class="field-name">getClosed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getClosed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, the start and end knots are connected.
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setClosed"><div class="plugin-name">spine</div><code><span class="field-name">setClosed</span><span class="parenthesis">(</span><span class="arg-name">closed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setClosed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `closed` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getConstantSpeed"><div class="plugin-name">spine</div><code><span class="field-name">getConstantSpeed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#getConstantSpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, additional calculations are performed to make computing positions along the path more accurate and movement along
the path have a constant speed.
| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setConstantSpeed"><div class="plugin-name">spine</div><code><span class="field-name">setConstantSpeed</span><span class="parenthesis">(</span><span class="arg-name">constantSpeed</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setConstantSpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `constantSpeed` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getLengths"><div class="plugin-name">spine</div><code><span class="field-name">getLengths</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a></code><a class="header-anchor" href="#getLengths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The lengths along the path in the setup pose from the start of the path to the end of each Bezier curve.
| Returns |
|---------|
| [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setLengths"><div class="plugin-name">spine</div><code><span class="field-name">setLengths</span><span class="parenthesis">(</span><span class="arg-name">lengths</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/utils/FloatArray/" class="type-link">spine.support.utils.FloatArray</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setLengths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `lengths` | [spine.support.utils.FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getColor"><div class="plugin-name">spine</div><code><span class="field-name">getColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/support/graphics/Color/" class="type-link">spine.support.graphics.Color</a></code><a class="header-anchor" href="#getColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the path as it was in Spine, or a default color if nonessential data was not exported. Paths are not usually
rendered at runtime.
| Returns |
|---------|
| [spine.support.graphics.Color](/api-docs/unity/spine/support/graphics/Color/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="copy"><div class="plugin-name">spine</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/spine/attachments/Attachment/" class="type-link">Attachment</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Attachment](/api-docs/unity/spine/attachments/Attachment/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

