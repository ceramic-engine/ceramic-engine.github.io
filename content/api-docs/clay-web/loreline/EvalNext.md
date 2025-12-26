---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: EvalNext
target: Clay (Web)
permalink: api-docs/clay-web/loreline/EvalNext/
---

# EvalNext

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.EvalNext</strong> (Class)</div>

Helper class for managing the next evaluation step.
Used to control whether the next step should be executed synchronously or asynchronously.

## Instance Members

<div class="signature field-var has-description" id="sync"><code><span class="field-name">sync</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the next step should be executed synchronously.

<hr class="field-separator" />

<div class="signature field-method has-description" id="cb"><code><span class="field-name">cb</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cb"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback to execute for the next step.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new EvalNext instance.

