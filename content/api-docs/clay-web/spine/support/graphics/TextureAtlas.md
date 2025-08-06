---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: TextureAtlas
target: Clay (Web)
permalink: api-docs/clay-web/spine/support/graphics/TextureAtlas/
---

# TextureAtlas

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/support/graphics/TextureAtlas.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.support.graphics.TextureAtlas</strong> (Class)</div>

Spine Runtimes Software License
Version 2.3

Copyright (c) 2013-2015, Esoteric Software
All rights reserved.

You are granted a perpetual, non-exclusive, non-sublicensable and
non-transferable license to use, install, execute and perform the Spine
Runtimes Software (the "Software") and derivative works solely for personal
or internal use. Without the written permission of Esoteric Software (see
Section 2 of the Spine Software License Agreement), you may not (a) modify,
translate, adapt or otherwise create derivative works, improvements of the
Software or develop new applications using the Software or (b) remove,
delete, alter or obscure any trademarks or any copyright, trademark, patent
or other intellectual property or proprietary rights notices on or in the
Software, including any copy thereof. Redistributions in binary or source
form must include this license and terms.

THIS SOFTWARE IS PROVIDED BY ESOTERIC SOFTWARE "AS IS" AND ANY EXPRESS OR
IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
EVENT SHALL ESOTERIC SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

## Instance Members

<div class="signature field-method has-description has-plugin" id="findRegion"><div class="plugin-name">spine</div><code><span class="field-name">findRegion</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/AtlasRegion/" class="type-link">AtlasRegion</a></code><a class="header-anchor" href="#findRegion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first region found with the specified name. This method uses string comparison to find the region, so the result
should be cached rather than calling this method multiple times.


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |

| Returns | Description |
|---------|-------------|
| [AtlasRegion](/api-docs/clay-web/spine/support/graphics/AtlasRegion/) | The region, or null. |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="dispose"><div class="plugin-name">spine</div><code><span class="field-name">dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">textureLoader</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/TextureLoader/" class="type-link">TextureLoader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `object` | [String](/api-docs/clay-web/String/) | A String. |
| `textureLoader` | [TextureLoader](/api-docs/clay-web/spine/support/graphics/TextureLoader/) |  |

## Private Members

<div class="signature field-var no-description has-plugin" id="pages"><div class="plugin-name">spine</div><code><span class="field-name">pages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/support/graphics/AtlasPage/" class="type-link">AtlasPage</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="regions"><div class="plugin-name">spine</div><code><span class="field-name">regions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/spine/support/graphics/AtlasRegion/" class="type-link">AtlasRegion</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#regions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="textureLoader"><div class="plugin-name">spine</div><code><span class="field-name">textureLoader</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/TextureLoader/" class="type-link">TextureLoader</a></code><a class="header-anchor" href="#textureLoader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="load"><div class="plugin-name">spine</div><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">atlasText</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">textureLoader</span><span class="operator">:</span> <a href="/api-docs/clay-web/spine/support/graphics/TextureLoader/" class="type-link">TextureLoader</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `atlasText` | [String](/api-docs/clay-web/String/) |
| `textureLoader` | [TextureLoader](/api-docs/clay-web/spine/support/graphics/TextureLoader/) |

