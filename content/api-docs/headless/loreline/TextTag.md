---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: TextTag
target: Headless
permalink: api-docs/headless/loreline/TextTag/
---

# TextTag

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.TextTag</strong> (Class)</div>

Represents a tag in text content, which can be used for styling or other purposes.

## Instance Members

<div class="signature field-var has-description" id="closing"><code><span class="field-name">closing</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#closing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this is a closing tag.

<hr class="field-separator" />

<div class="signature field-var has-description" id="value"><code><span class="field-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#value"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The value or name of the tag.

<hr class="field-separator" />

<div class="signature field-var has-description" id="offset"><code><span class="field-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The offset in the text where this tag appears.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">closing</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `closing` | [Bool](/api-docs/headless/Bool/) | * Whether this is a closing tag. |
| `value` | [String](/api-docs/headless/String/) | * The value or name of the tag. |
| `offset` | [Int](/api-docs/headless/Int/) | * The offset in the text where this tag appears. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

