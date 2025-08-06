---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: MatMN
target: Unity
permalink: api-docs/unity/nape/geom/MatMN/
---

# MatMN

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/geom/MatMN.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.geom.MatMN</strong> (final class)</div>

A general MxN dimensional matrix.
<br/><br/>
This object is not often used in Nape :)

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/unity/zpp_nape/geom/ZPP_MatMN/" class="type-link">zpp_nape.geom.ZPP_MatMN</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="rows"><div class="plugin-name">nape</div><code><span class="field-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#rows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of rows in the matrix.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="cols"><div class="plugin-name">nape</div><code><span class="field-name">cols</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cols"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of columns in the matrix.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="x"><div class="plugin-name">nape</div><code><span class="field-name">x</span><span class="parenthesis">(</span><span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#x"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Access element at index.



| Name | Type | Description |
|------|------|-------------|
| `row` | [Int](/api-docs/unity/Int/) | The row of the matrix to access.  |
| `col` | [Int](/api-docs/unity/Int/) | the column of the matrix to access.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The element at given (row,col) index.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setx"><div class="plugin-name">nape</div><code><span class="field-name">setx</span><span class="parenthesis">(</span><span class="arg-name">row</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#setx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set element at index.



| Name | Type | Description |
|------|------|-------------|
| `row` | [Int](/api-docs/unity/Int/) | The row of the matrix to set.  |
| `col` | [Int](/api-docs/unity/Int/) | The column of the matrix to set.  |
| `x` | [Float](/api-docs/unity/Float/) | The value to set at given (row,col) index.  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | The value of matrix at given index after set. (Always equal to the x parameter)  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="transpose"><div class="plugin-name">nape</div><code><span class="field-name">transpose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MatMN</a></code><a class="header-anchor" href="#transpose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transpose matrix, returning a new Matrix.


| Returns | Description |
|---------|-------------|
| [MatMN](/api-docs/unity/nape/geom/MatMN/) | The transposed matrix. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="mul"><div class="plugin-name">nape</div><code><span class="field-name">mul</span><span class="parenthesis">(</span><span class="arg-name">matrix</span><span class="operator">:</span> <a href="#" class="type-link">MatMN</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">MatMN</a></code><a class="header-anchor" href="#mul"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiple this matrix with another.
<br/><br/>
This operation is only valid if the number of columns
in this matrix, is equal to the number of rows in the input
matrix.
<br/>
The result of the multiplication is returned as a new matrix.



| Name | Type | Description |
|------|------|-------------|
| `matrix` | [MatMN](/api-docs/unity/nape/geom/MatMN/) | The matrix to multiple with.  |

| Returns | Description |
|---------|-------------|
| [MatMN](/api-docs/unity/nape/geom/MatMN/) | The result of the multiplication  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">cols</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new Matrix.



| Name | Type | Description |
|------|------|-------------|
| `rows` | [Int](/api-docs/unity/Int/) | The number of rows in matrix.  |
| `cols` | [Int](/api-docs/unity/Int/) | The number of columns in matrix.  |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:final` | - |

