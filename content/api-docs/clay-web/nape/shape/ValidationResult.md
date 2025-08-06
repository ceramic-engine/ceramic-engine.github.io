---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ValidationResult
target: Clay (Web)
permalink: api-docs/clay-web/nape/shape/ValidationResult/
---

# ValidationResult

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/shape/ValidationResult.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.shape.ValidationResult</strong> (final class)</div>

Enumeration of validation results for a Polygon.

## Static Members

<div class="signature field-var has-description has-plugin" id="VALID"><div class="plugin-name">nape</div><code><span class="field-name">VALID</span><span class="operator">:</span> <a href="#" class="type-link">ValidationResult</a></code><a class="header-anchor" href="#VALID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Denotes polygon is valid for simulation in Nape.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="DEGENERATE"><div class="plugin-name">nape</div><code><span class="field-name">DEGENERATE</span><span class="operator">:</span> <a href="#" class="type-link">ValidationResult</a></code><a class="header-anchor" href="#DEGENERATE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Denotes polygon is degenerate (has zero area).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="CONCAVE"><div class="plugin-name">nape</div><code><span class="field-name">CONCAVE</span><span class="operator">:</span> <a href="#" class="type-link">ValidationResult</a></code><a class="header-anchor" href="#CONCAVE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Denotes polygon is concave.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="SELF_INTERSECTING"><div class="plugin-name">nape</div><code><span class="field-name">SELF_INTERSECTING</span><span class="operator">:</span> <a href="#" class="type-link">ValidationResult</a></code><a class="header-anchor" href="#SELF_INTERSECTING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Denotes polygon is self-intersecting.

## Instance Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

