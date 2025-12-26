---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeInsertion
target: Clay (Web)
permalink: api-docs/clay-web/loreline/RuntimeInsertion/
---

# RuntimeInsertion

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.RuntimeInsertion</strong> (Class)</div>

Fata that needs to be hold with a scope when
a beat is being inserted within a choice

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The insertion id, a unique integer value among all insertions.

<hr class="field-separator" />

<div class="signature field-var has-description" id="origin"><code><span class="field-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NInsertion/" class="type-link">NInsertion</a></code><a class="header-anchor" href="#origin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The original node causing that insertion

<hr class="field-separator" />

<div class="signature field-var has-description" id="options"><code><span class="field-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/ChoiceOption/" class="type-link">ChoiceOption</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#options"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The inserted choice options, or `null` if nothing is inserted yet

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The call stack of this insertion, which is used to resume
the execution at the correct location when a choice of it has been selected

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">origin</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NInsertion/" class="type-link">NInsertion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [Int](/api-docs/clay-web/Int/) |
| `origin` | [NInsertion](/api-docs/clay-web/loreline/NInsertion/) |

