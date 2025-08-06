---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AppXUpdatesHandler
target: Unity
permalink: api-docs/unity/ceramic/AppXUpdatesHandler/
---

# AppXUpdatesHandler

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AppXUpdatesHandler.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AppXUpdatesHandler</strong> (Class)</div>

Internal handler for delayed update callbacks in the App class.

AppXUpdatesHandler is used by App.onceXUpdates() to schedule callbacks
that execute after a specific number of update frames. This class is
pooled for efficiency and managed internally by the App class.

<div class="see"><strong>See:</strong> App.onceXUpdates</div>


## Instance Members

<div class="signature field-var has-description" id="owner"><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The entity that owns this callback.
If the owner is destroyed, the callback won't execute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="numUpdates"><code><span class="field-name">numUpdates</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numUpdates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of update frames remaining before executing the callback.
Decremented each frame until it reaches 0.

<hr class="field-separator" />

<div class="signature field-method has-description" id="callback"><code><span class="field-name">callback</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#callback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The callback function to execute when numUpdates reaches 0.

## Private Members

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets this handler to its initial state for reuse.
Called when the handler is returned to the pool.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | ceramic.App |

