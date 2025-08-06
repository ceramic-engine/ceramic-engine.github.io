---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Backend
target: Headless
permalink: api-docs/headless/backend/Backend/
---

# Backend

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/backend/Backend.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Backend</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spec/Backend/">spec.Backend</a>, <a href="/api-docs/headless/tracker/Events/">tracker.Events</a></div>

## Instance Members

<div class="signature field-var no-description has-plugin" id="io"><div class="plugin-name">headless</div><code><span class="field-name">io</span><span class="operator">:</span> <a href="/api-docs/headless/backend/IO/" class="type-link">IO</a></code><a class="header-anchor" href="#io"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="info"><div class="plugin-name">headless</div><code><span class="field-name">info</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Info/" class="type-link">Info</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="audio"><div class="plugin-name">headless</div><code><span class="field-name">audio</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Audio/" class="type-link">Audio</a></code><a class="header-anchor" href="#audio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="draw"><div class="plugin-name">headless</div><code><span class="field-name">draw</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Draw/" class="type-link">Draw</a></code><a class="header-anchor" href="#draw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="texts"><div class="plugin-name">headless</div><code><span class="field-name">texts</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Texts/" class="type-link">Texts</a></code><a class="header-anchor" href="#texts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="binaries"><div class="plugin-name">headless</div><code><span class="field-name">binaries</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Binaries/" class="type-link">Binaries</a></code><a class="header-anchor" href="#binaries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textures"><div class="plugin-name">headless</div><code><span class="field-name">textures</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Textures/" class="type-link">Textures</a></code><a class="header-anchor" href="#textures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="shaders"><div class="plugin-name">headless</div><code><span class="field-name">shaders</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Shaders/" class="type-link">Shaders</a></code><a class="header-anchor" href="#shaders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="screen"><div class="plugin-name">headless</div><code><span class="field-name">screen</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Screen/" class="type-link">Screen</a></code><a class="header-anchor" href="#screen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="input"><div class="plugin-name">headless</div><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Input/" class="type-link">Input</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textInput"><div class="plugin-name">headless</div><code><span class="field-name">textInput</span><span class="operator">:</span> <a href="/api-docs/headless/backend/TextInput/" class="type-link">TextInput</a></code><a class="header-anchor" href="#textInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clipboard"><div class="plugin-name">headless</div><code><span class="field-name">clipboard</span><span class="operator">:</span> <a href="/api-docs/headless/backend/Clipboard/" class="type-link">Clipboard</a></code><a class="header-anchor" href="#clipboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="init"><div class="plugin-name">headless</div><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/App/" class="type-link">ceramic.App</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [ceramic.App](/api-docs/headless/ceramic/App/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setTargetFps"><div class="plugin-name">headless</div><code><span class="field-name">setTargetFps</span><span class="parenthesis">(</span><span class="arg-name">fps</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTargetFps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fps` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="unbindEvents"><div class="plugin-name">headless</div><code><span class="field-name">unbindEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unbindEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">headless</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="emitReady"><div class="plugin-name">headless</div><code><span class="field-name">emitReady</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReady"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ready event

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitUpdate"><div class="plugin-name">headless</div><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

update event

| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitRender"><div class="plugin-name">headless</div><code><span class="field-name">emitRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

render event

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="willEmitUpdate"><div class="plugin-name">headless</div><code><span class="field-name">willEmitUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="didEmitUpdate"><div class="plugin-name">headless</div><code><span class="field-name">didEmitUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didEmitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/headless/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | Main |
| `:allow` | backend.Textures |

