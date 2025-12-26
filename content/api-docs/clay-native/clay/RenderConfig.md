---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: RenderConfig
target: Clay (Native)
permalink: api-docs/clay-native/clay/RenderConfig/
---

# RenderConfig

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src-opengl/clay/Config.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.RenderConfig</strong> (Class)</div>

Config specific to the rendering context that would be used when creating windows

## Instance Members

<div class="signature field-var has-description" id="depth"><code><span class="field-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request the number of depth bits for the rendering context.
A value of 0 will not request a depth buffer. default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="stencil"><code><span class="field-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#stencil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request the number of stencil bits for the rendering context.
A value of 0 will not request a stencil buffer. default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="antialiasing"><code><span class="field-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#antialiasing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A value of `0`, `2`, `4`, `8` or other valid system value.
On WebGL contexts this value is true or false, bigger than 0 being true.
On native contexts this value sets the MSAA typically.
default webgl: 1 (enabled)
default: 0

<hr class="field-separator" />

<div class="signature field-var has-description" id="redBits"><code><span class="field-name">redBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#redBits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request a specific number of red bits for the rendering context.
Unless you need to change this, don't. default: 8

<hr class="field-separator" />

<div class="signature field-var has-description" id="greenBits"><code><span class="field-name">greenBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#greenBits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request a specific number of green bits for the rendering context.
Unless you need to change this, don't. default: 8

<hr class="field-separator" />

<div class="signature field-var has-description" id="blueBits"><code><span class="field-name">blueBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blueBits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request a specific number of blue bits for the rendering context.
Unless you need to change this, don't. default: 8

<hr class="field-separator" />

<div class="signature field-var has-description" id="alphaBits"><code><span class="field-name">alphaBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#alphaBits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request a specific number of alpha bits for the rendering context.
Unless you need to change this, don't. default: 8

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultClear"><code><span class="field-name">defaultClear</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/graphics/Color/" class="type-link">clay.graphics.Color</a></code><a class="header-anchor" href="#defaultClear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A color value that when creating the window, the window backbuffer will be cleared to.
A framework above clay can also use this for default clear color if desired.
The values are specified as 0..1. default: black, 0,0,0,1

<hr class="field-separator" />

<div class="signature field-var has-description" id="vsync"><code><span class="field-name">vsync</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vsync"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If applicable on the current platform, enables vsync

<hr class="field-separator" />

<div class="signature field-var has-description" id="opengl"><code><span class="field-name">opengl</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/RenderConfigOpenGL/" class="type-link">RenderConfigOpenGL</a></code><a class="header-anchor" href="#opengl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

OpenGL render context specific settings

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stencil</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">redBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">greenBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">blueBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alphaBits</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaultClear</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/graphics/Color/" class="type-link">clay.graphics.Color</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vsync</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">opengl</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/clay/RenderConfigOpenGL/" class="type-link">RenderConfigOpenGL</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `depth` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Request the number of depth bits for the rendering context. A value of 0 will not request a depth buffer. default: 0 |
| `stencil` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Request the number of stencil bits for the rendering context. A value of 0 will not request a stencil buffer. default: 0 |
| `antialiasing` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | A value of `0`, `2`, `4`, `8` or other valid system value. On WebGL contexts this value is true or false, bigger than 0 being true. On native contexts this value sets the MSAA typically. default webgl: 1 (enabled) default: 0 |
| `redBits` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Request a specific number of red bits for the rendering context. Unless you need to change this, don't. default: 8 |
| `greenBits` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Request a specific number of green bits for the rendering context. Unless you need to change this, don't. default: 8 |
| `blueBits` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Request a specific number of blue bits for the rendering context. Unless you need to change this, don't. default: 8 |
| `alphaBits` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | Request a specific number of alpha bits for the rendering context. Unless you need to change this, don't. default: 8 |
| `defaultClear` | [Null](/api-docs/clay-native/Null/)<[clay.graphics.Color](/api-docs/clay-native/clay/graphics/Color/)> | *(optional)* | A color value that when creating the window, the window backbuffer will be cleared to. A framework above clay can also use this for default clear color if desired. The values are specified as 0..1. default: black, 0,0,0,1 |
| `vsync` | [Null](/api-docs/clay-native/Null/)<[Bool](/api-docs/clay-native/Bool/)> | *(optional)* | If applicable on the current platform, enables vsync |
| `opengl` | [Null](/api-docs/clay-native/Null/)<[RenderConfigOpenGL](/api-docs/clay-native/clay/RenderConfigOpenGL/)> | *(optional)* | OpenGL render context specific settings |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |
| `:publicFields` | - |

