---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: InputMapBase
target: Headless
permalink: api-docs/headless/ceramic/InputMapBase/
---

# InputMapBase

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/InputMapBase.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">Entity</a> → <strong>ceramic.InputMapBase</strong> (Class) → <a href="/api-docs/headless/ceramic/InputMapImpl/">InputMapImpl</a></div>

Base class for the InputMap system.

This class provides the foundation for input mapping functionality,
extending Entity to integrate with Ceramic's entity system and event handling.

The actual implementation is provided by InputMapImpl, which is used by
the generic InputMap class.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/InputMap/">InputMap</a>, <a href="/api-docs/headless/ceramic/InputMapImpl/">InputMapImpl</a></div>


## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new InputMapBase instance.
Should not be instantiated directly - use InputMap<T> instead.

## Private Members

<div class="signature field-var has-description" id="NO_KEY"><code><span class="field-name">NO_KEY</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#NO_KEY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A placeholder value used to represent "no key" in generic input map implementations.
This allows the system to handle null values in a type-safe way across different
generic type parameters.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

