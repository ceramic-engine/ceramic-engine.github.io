---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: SDLConfig
target: Clay (Native)
permalink: api-docs/clay-native/clay/sdl/SDLConfig/
---

# SDLConfig

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/sdl/SDLConfig.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.sdl.SDLConfig</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="autoSwap"><code><span class="field-name">autoSwap</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoSwap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Toggle auto window swap

<hr class="field-separator" />

<div class="signature field-method has-description" id="uncaughtErrorHandler"><code><span class="field-name">uncaughtErrorHandler</span><span class="parenthesis">(</span><span class="arg-name">error</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#uncaughtErrorHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom uncaught error handler

| Name | Type |
|------|------|
| `error` | [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">uncaughtErrorHandler</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">autoSwap</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `uncaughtErrorHandler` | [Null](/api-docs/clay-native/Null/)<Function> | *(optional)* | Custom uncaught error handler |
| `autoSwap` | [Null](/api-docs/clay-native/Null/)<[Bool](/api-docs/clay-native/Bool/)> | *(optional)* | * Toggle auto window swap |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:publicFields` | - |

