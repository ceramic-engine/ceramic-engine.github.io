---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Draw
target: Unity
permalink: api-docs/unity/backend/Draw/
---

# Draw

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Draw.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Draw</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description has-plugin" id="unityUrpAddRenderPasses"><div class="plugin-name">unity</div><code><span class="field-name">unityUrpAddRenderPasses</span><span class="parenthesis">(</span><span class="arg-name">renderer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/universal/ScriptableRenderer/" class="type-link">unityengine.rendering.universal.ScriptableRenderer</a><span class="operator">,</span> <span class="arg-name">renderingData</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/universal/RenderingData/" class="type-link">unityengine.rendering.universal.RenderingData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unityUrpAddRenderPasses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `renderer` | [unityengine.rendering.universal.ScriptableRenderer](/api-docs/unity/unityengine/rendering/universal/ScriptableRenderer/) |
| `renderingData` | [unityengine.rendering.universal.RenderingData](/api-docs/unity/unityengine/rendering/universal/RenderingData/) |

## Instance Members

<div class="signature field-method no-description has-plugin" id="getItem"><div class="plugin-name">unity</div><code><span class="field-name">getItem</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#getItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [ceramic.Visual](/api-docs/unity/ceramic/Visual/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="draw"><div class="plugin-name">unity</div><code><span class="field-name">draw</span><span class="parenthesis">(</span><span class="arg-name">visuals</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#draw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visuals` | [Array](/api-docs/unity/Array/)<[ceramic.Visual](/api-docs/unity/ceramic/Visual/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="swap"><div class="plugin-name">unity</div><code><span class="field-name">swap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#swap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getNumPos"><div class="plugin-name">unity</div><code><span class="field-name">getNumPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getNumPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putPos"><div class="plugin-name">unity</div><code><span class="field-name">putPos</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `z` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putPosAndTextureSlot"><div class="plugin-name">unity</div><code><span class="field-name">putPosAndTextureSlot</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">z</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">textureSlot</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putPosAndTextureSlot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `z` | [Float](/api-docs/unity/Float/) |
| `textureSlot` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putIndice"><div class="plugin-name">unity</div><code><span class="field-name">putIndice</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putIndice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putUVs"><div class="plugin-name">unity</div><code><span class="field-name">putUVs</span><span class="parenthesis">(</span><span class="arg-name">uvX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">uvY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putUVs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `uvX` | [Float](/api-docs/unity/Float/) |
| `uvY` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putColor"><div class="plugin-name">unity</div><code><span class="field-name">putColor</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `r` | [Float](/api-docs/unity/Float/) |
| `g` | [Float](/api-docs/unity/Float/) |
| `b` | [Float](/api-docs/unity/Float/) |
| `a` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginFloatAttributes"><div class="plugin-name">unity</div><code><span class="field-name">beginFloatAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginFloatAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="putFloatAttribute"><div class="plugin-name">unity</div><code><span class="field-name">putFloatAttribute</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#putFloatAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `index` | [Int](/api-docs/unity/Int/) |
| `value` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endFloatAttributes"><div class="plugin-name">unity</div><code><span class="field-name">endFloatAttributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFloatAttributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="initBuffers"><div class="plugin-name">unity</div><code><span class="field-name">initBuffers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginRender"><div class="plugin-name">unity</div><code><span class="field-name">beginRender</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRender"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearAndApplyBackground"><div class="plugin-name">unity</div><code><span class="field-name">clearAndApplyBackground</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearAndApplyBackground"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setRenderTarget"><div class="plugin-name">unity</div><code><span class="field-name">setRenderTarget</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/RenderTexture/" class="type-link">ceramic.RenderTexture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">force</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setRenderTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `renderTarget` | [ceramic.RenderTexture](/api-docs/unity/ceramic/RenderTexture/) | |
| `force` | [Bool](/api-docs/unity/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="useShader"><div class="plugin-name">unity</div><code><span class="field-name">useShader</span><span class="parenthesis">(</span><span class="arg-name">shader</span><span class="operator">:</span> <a href="/api-docs/unity/backend/ShaderImpl/" class="type-link">ShaderImpl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#useShader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `shader` | [ShaderImpl](/api-docs/unity/backend/ShaderImpl/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clear"><div class="plugin-name">unity</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="enableBlending"><div class="plugin-name">unity</div><code><span class="field-name">enableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="disableBlending"><div class="plugin-name">unity</div><code><span class="field-name">disableBlending</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableBlending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setBlendFuncSeparate"><div class="plugin-name">unity</div><code><span class="field-name">setBlendFuncSeparate</span><span class="parenthesis">(</span><span class="arg-name">srcRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstRgb</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">srcAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="operator">,</span> <span class="arg-name">dstAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/backend/BlendMode/" class="type-link">BlendMode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setBlendFuncSeparate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `srcRgb` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `dstRgb` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `srcAlpha` | [BlendMode](/api-docs/unity/backend/BlendMode/) |
| `dstAlpha` | [BlendMode](/api-docs/unity/backend/BlendMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getActiveTexture"><div class="plugin-name">unity</div><code><span class="field-name">getActiveTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setActiveTexture"><div class="plugin-name">unity</div><code><span class="field-name">setActiveTexture</span><span class="parenthesis">(</span><span class="arg-name">slot</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setActiveTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `slot` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="textureBackendItemMatchesId"><div class="plugin-name">unity</div><code><span class="field-name">textureBackendItemMatchesId</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="arg-name">textureId</span><span class="operator">:</span> <a href="/api-docs/unity/backend/TextureId/" class="type-link">TextureId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#textureBackendItemMatchesId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/unity/backend/Texture/) |
| `textureId` | [TextureId](/api-docs/unity/backend/TextureId/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureId"><div class="plugin-name">unity</div><code><span class="field-name">getTextureId</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/backend/TextureId/" class="type-link">TextureId</a></code><a class="header-anchor" href="#getTextureId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/unity/backend/Texture/) |

| Returns |
|---------|
| [TextureId](/api-docs/unity/backend/TextureId/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureWidth"><div class="plugin-name">unity</div><code><span class="field-name">getTextureWidth</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/unity/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureHeight"><div class="plugin-name">unity</div><code><span class="field-name">getTextureHeight</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/unity/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureWidthActual"><div class="plugin-name">unity</div><code><span class="field-name">getTextureWidthActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureWidthActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/unity/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getTextureHeightActual"><div class="plugin-name">unity</div><code><span class="field-name">getTextureHeightActual</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTextureHeightActual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texture` | [Texture](/api-docs/unity/backend/Texture/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bindTexture"><div class="plugin-name">unity</div><code><span class="field-name">bindTexture</span><span class="parenthesis">(</span><span class="arg-name">backendItem</span><span class="operator">:</span> <a href="/api-docs/unity/backend/Texture/" class="type-link">Texture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `backendItem` | [Texture](/api-docs/unity/backend/Texture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bindNoTexture"><div class="plugin-name">unity</div><code><span class="field-name">bindNoTexture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindNoTexture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setPrimitiveType"><div class="plugin-name">unity</div><code><span class="field-name">setPrimitiveType</span><span class="parenthesis">(</span><span class="arg-name">primitiveType</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/RenderPrimitiveType/" class="type-link">ceramic.RenderPrimitiveType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setPrimitiveType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `primitiveType` | [ceramic.RenderPrimitiveType](/api-docs/unity/ceramic/RenderPrimitiveType/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginDrawQuad"><div class="plugin-name">unity</div><code><span class="field-name">beginDrawQuad</span><span class="parenthesis">(</span><span class="arg-name">quad</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">ceramic.Quad</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDrawQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `quad` | [ceramic.Quad](/api-docs/unity/ceramic/Quad/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endDrawQuad"><div class="plugin-name">unity</div><code><span class="field-name">endDrawQuad</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDrawQuad"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginDrawMesh"><div class="plugin-name">unity</div><code><span class="field-name">beginDrawMesh</span><span class="parenthesis">(</span><span class="arg-name">mesh</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Mesh/" class="type-link">ceramic.Mesh</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDrawMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mesh` | [ceramic.Mesh](/api-docs/unity/ceramic/Mesh/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endDrawMesh"><div class="plugin-name">unity</div><code><span class="field-name">endDrawMesh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDrawMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="enableScissor"><div class="plugin-name">unity</div><code><span class="field-name">enableScissor</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enableScissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |
| `width` | [Float](/api-docs/unity/Float/) |
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="disableScissor"><div class="plugin-name">unity</div><code><span class="field-name">disableScissor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disableScissor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="beginDrawingInStencilBuffer"><div class="plugin-name">unity</div><code><span class="field-name">beginDrawingInStencilBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDrawingInStencilBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="endDrawingInStencilBuffer"><div class="plugin-name">unity</div><code><span class="field-name">endDrawingInStencilBuffer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDrawingInStencilBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="drawWithStencilTest"><div class="plugin-name">unity</div><code><span class="field-name">drawWithStencilTest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawWithStencilTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="drawWithoutStencilTest"><div class="plugin-name">unity</div><code><span class="field-name">drawWithoutStencilTest</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drawWithoutStencilTest"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shouldFlush"><div class="plugin-name">unity</div><code><span class="field-name">shouldFlush</span><span class="parenthesis">(</span><span class="arg-name">numVerticesAfter</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">numIndicesAfter</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">customFloatAttributesSize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `numVerticesAfter` | [Int](/api-docs/unity/Int/) |
| `numIndicesAfter` | [Int](/api-docs/unity/Int/) |
| `customFloatAttributesSize` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remainingVertices"><div class="plugin-name">unity</div><code><span class="field-name">remainingVertices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#remainingVertices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remainingIndices"><div class="plugin-name">unity</div><code><span class="field-name">remainingIndices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#remainingIndices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="hasAnythingToFlush"><div class="plugin-name">unity</div><code><span class="field-name">hasAnythingToFlush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasAnythingToFlush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="flush"><div class="plugin-name">unity</div><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">unity</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="MAX_VERTS_SIZE"><div class="plugin-name">unity</div><code><span class="field-name">MAX_VERTS_SIZE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_VERTS_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="MAX_INDICES"><div class="plugin-name">unity</div><code><span class="field-name">MAX_INDICES</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_INDICES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="urpRenderer"><div class="plugin-name">unity</div><code><span class="field-name">urpRenderer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/universal/ScriptableRenderer/" class="type-link">unityengine.rendering.universal.ScriptableRenderer</a></code><a class="header-anchor" href="#urpRenderer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="urpRenderingData"><div class="plugin-name">unity</div><code><span class="field-name">urpRenderingData</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/universal/RenderingData/" class="type-link">unityengine.rendering.universal.RenderingData</a></code><a class="header-anchor" href="#urpRenderingData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mainCameraRenderPasses"><div class="plugin-name">unity</div><code><span class="field-name">mainCameraRenderPasses</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/CeramicRenderPass/" class="type-link">CeramicRenderPass</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mainCameraRenderPasses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="customTargetRenderPasses"><div class="plugin-name">unity</div><code><span class="field-name">customTargetRenderPasses</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/CeramicRenderPass/" class="type-link">CeramicRenderPass</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customTargetRenderPasses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pendingCommandBuffers"><div class="plugin-name">unity</div><code><span class="field-name">pendingCommandBuffers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/backend/_CeramicCommandBuffer/CommandBuffer/" class="type-link">backend._CeramicCommandBuffer.CommandBuffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingCommandBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pendingRenderTargets"><div class="plugin-name">unity</div><code><span class="field-name">pendingRenderTargets</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/RenderTexture/" class="type-link">ceramic.RenderTexture</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#pendingRenderTargets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="widthOnDraw"><div class="plugin-name">unity</div><code><span class="field-name">widthOnDraw</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#widthOnDraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="heightOnDraw"><div class="plugin-name">unity</div><code><span class="field-name">heightOnDraw</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#heightOnDraw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="renderer"><div class="plugin-name">unity</div><code><span class="field-name">renderer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Renderer/" class="type-link">ceramic.Renderer</a></code><a class="header-anchor" href="#renderer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="commandBuffer"><div class="plugin-name">unity</div><code><span class="field-name">commandBuffer</span><span class="operator">:</span> <a href="/api-docs/unity/backend/_CeramicCommandBuffer/CommandBuffer/" class="type-link">backend._CeramicCommandBuffer.CommandBuffer</a></code><a class="header-anchor" href="#commandBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="prepareNextMesh"><div class="plugin-name">unity</div><code><span class="field-name">prepareNextMesh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prepareNextMesh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resetIndexes"><div class="plugin-name">unity</div><code><span class="field-name">resetIndexes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetIndexes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateProjectionMatrix"><div class="plugin-name">unity</div><code><span class="field-name">updateProjectionMatrix</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateProjectionMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Float](/api-docs/unity/Float/) |
| `height` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateViewMatrix"><div class="plugin-name">unity</div><code><span class="field-name">updateViewMatrix</span><span class="parenthesis">(</span><span class="arg-name">density</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flipX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flipY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateViewMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `density` | [Float](/api-docs/unity/Float/) | |
| `width` | [Float](/api-docs/unity/Float/) | |
| `height` | [Float](/api-docs/unity/Float/) | |
| `transform` | [ceramic.Transform](/api-docs/unity/ceramic/Transform/) | *(optional)* |
| `flipX` | [Float](/api-docs/unity/Float/) | `1` |
| `flipY` | [Float](/api-docs/unity/Float/) | `1` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateCurrentMatrix"><div class="plugin-name">unity</div><code><span class="field-name">updateCurrentMatrix</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateCurrentMatrix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="transformToMatrix4x4"><div class="plugin-name">unity</div><code><span class="field-name">transformToMatrix4x4</span><span class="parenthesis">(</span><span class="arg-name">transform</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Transform/" class="type-link">ceramic.Transform</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#transformToMatrix4x4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `transform` | [ceramic.Transform](/api-docs/unity/ceramic/Transform/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearPendingCommandBuffers"><div class="plugin-name">unity</div><code><span class="field-name">clearPendingCommandBuffers</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearPendingCommandBuffers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="configureNextCommandBuffer"><div class="plugin-name">unity</div><code><span class="field-name">configureNextCommandBuffer</span><span class="parenthesis">(</span><span class="arg-name">renderTarget</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/RenderTexture/" class="type-link">ceramic.RenderTexture</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureNextCommandBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `renderTarget` | [ceramic.RenderTexture](/api-docs/unity/ceramic/RenderTexture/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="addRenderPasses"><div class="plugin-name">unity</div><code><span class="field-name">addRenderPasses</span><span class="parenthesis">(</span><span class="arg-name">renderer</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/universal/ScriptableRenderer/" class="type-link">unityengine.rendering.universal.ScriptableRenderer</a><span class="operator">,</span> <span class="arg-name">renderingData</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/rendering/universal/RenderingData/" class="type-link">unityengine.rendering.universal.RenderingData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addRenderPasses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `renderer` | [unityengine.rendering.universal.ScriptableRenderer](/api-docs/unity/unityengine/rendering/universal/ScriptableRenderer/) |
| `renderingData` | [unityengine.rendering.universal.RenderingData](/api-docs/unity/unityengine/rendering/universal/RenderingData/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | backend.Backend |

