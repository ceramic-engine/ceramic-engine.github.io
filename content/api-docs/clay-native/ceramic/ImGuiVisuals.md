---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiVisuals
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ImGuiVisuals/
---

# ImGuiVisuals

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiVisuals.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ImGuiVisuals</strong> (Class)</div>

Display ceramic visuals inside Dear ImGui layouts.

Call `ImGuiVisuals.visual(myVisual)` anywhere between ImGui widgets: the
visual is rendered offscreen (through a `Filter`) and displayed with
`ImGui.image()`. Immediate-mode friendly: call it every frame, entries are
created/reused/released automatically.

- The visual is REPARENTED into the filter content while displayed (same
semantics as elements' Im.visual()): it leaves its previous parent, and
is deactivated (never destroyed) when no longer displayed.
- Small/medium visuals share a single render texture atlas
(`TextureTilePacker`, pages chained automatically); visuals larger than
a page get their own render texture.
- Pointer events work: the filter is invisibly aligned with the ImGui
image rect, so `onPointerDown/Up/Over/...` on the content visuals behave
normally (gated by ImGui hover, so ImGui window occlusion is respected).
- Cross-target: pure ceramic + portable ImGui facade.

## Static Members

<div class="signature field-var has-description has-plugin" id="gracePeriodFrames"><div class="plugin-name">imgui</div><code><span class="field-name">gracePeriodFrames</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#gracePeriodFrames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Frames an entry is kept alive after its visual stops being displayed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="numEntries"><div class="plugin-name">imgui</div><code><span class="field-name">numEntries</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of active entries (displayed this frame or in grace period).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="numDedicated"><div class="plugin-name">imgui</div><code><span class="field-name">numDedicated</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#numDedicated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of entries currently using a dedicated render texture (not the shared atlas).

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visual"><div class="plugin-name">imgui</div><code><span class="field-name">visual</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">interactive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textureFilter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">nativeResolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display `visual` inside the current ImGui layout.
Without explicit size, uses the visual's own width/height. With a
size, the visual is scaled to fit (uniform) and centered.
With `interactive` (default), ceramic pointer events are redirected to
the content when the image is hovered.
`antialiasing` (MSAA samples) and `textureFilter` (LINEAR default,
NEAREST for pixel-art) select the offscreen texture settings: visuals
sharing the same settings share the same atlas.
With `nativeResolution`, the visual is rendered offscreen at its OWN
size and the image is scaled to the display size (use it with NEAREST
for pixel-art, or to display a game at its native resolution); by
default the visual is rendered directly at display resolution.

| Name | Type | Default |
|------|------|---------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | |
| `width` | [Float](/api-docs/clay-native/Float/) | `-1` |
| `height` | [Float](/api-docs/clay-native/Float/) | `-1` |
| `interactive` | [Bool](/api-docs/clay-native/Bool/) | `true` |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) | `0` |
| `textureFilter` | Anonymous | *(optional)* |
| `nativeResolution` | [Bool](/api-docs/clay-native/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visualButton"><div class="plugin-name">imgui</div><code><span class="field-name">visualButton</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">interactive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textureFilter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">nativeResolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#visualButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Like `visual()`, but displayed as an ImGui button. Returns true when clicked.

| Name | Type | Default |
|------|------|---------|
| `id` | [String](/api-docs/clay-native/String/) | |
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) | |
| `width` | [Float](/api-docs/clay-native/Float/) | `-1` |
| `height` | [Float](/api-docs/clay-native/Float/) | `-1` |
| `interactive` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) | `0` |
| `textureFilter` | Anonymous | *(optional)* |
| `nativeResolution` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="texture"><div class="plugin-name">imgui</div><code><span class="field-name">texture</span><span class="parenthesis">(</span><span class="arg-name">texture</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Texture/" class="type-link">Texture</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#texture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display any ceramic texture (thin wrapper over ImGui.image + textureRef).

| Name | Type | Default |
|------|------|---------|
| `texture` | [Texture](/api-docs/clay-native/ceramic/Texture/) | |
| `width` | [Float](/api-docs/clay-native/Float/) | `-1` |
| `height` | [Float](/api-docs/clay-native/Float/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tile"><div class="plugin-name">imgui</div><code><span class="field-name">tile</span><span class="parenthesis">(</span><span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureTile/" class="type-link">TextureTile</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Display a ceramic TextureTile (sub-region of a texture), UVs computed.

| Name | Type | Default |
|------|------|---------|
| `tile` | [TextureTile](/api-docs/clay-native/ceramic/TextureTile/) | |
| `width` | [Float](/api-docs/clay-native/Float/) | `-1` |
| `height` | [Float](/api-docs/clay-native/Float/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isWindowFocused"><div class="plugin-name">imgui</div><code><span class="field-name">isWindowFocused</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the ImGui window that displayed `visual` (last submit) is
focused (root or child windows). Useful to route keyboard input to a
game/scene displayed inside an ImGui window:
read `app.input` only when its window is focused.

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isHovered"><div class="plugin-name">imgui</div><code><span class="field-name">isHovered</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHovered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the displayed image of `visual` is currently hovered
(as reported by ImGui, so ImGui window occlusion is respected).

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="entries"><div class="plugin-name">imgui</div><code><span class="field-name">entries</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="currentFrame"><div class="plugin-name">imgui</div><code><span class="field-name">currentFrame</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#currentFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="sharedPackers"><div class="plugin-name">imgui</div><code><span class="field-name">sharedPackers</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#sharedPackers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="PAD_WIDTH"><div class="plugin-name">imgui</div><code><span class="field-name">PAD_WIDTH</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PAD_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="PAD_HEIGHT"><div class="plugin-name">imgui</div><code><span class="field-name">PAD_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PAD_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="MARGIN"><div class="plugin-name">imgui</div><code><span class="field-name">MARGIN</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MARGIN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="touch"><div class="plugin-name">imgui</div><code><span class="field-name">touch</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">textureFilter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">nativeResolution</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/_ImGuiVisuals/ImGuiVisualEntry/" class="type-link">ceramic._ImGuiVisuals.ImGuiVisualEntry</a></code><a class="header-anchor" href="#touch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get or create the entry for `visual`, mark it used this frame, sync sizes/settings.

| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/clay-native/ceramic/Visual/) |
| `width` | [Float](/api-docs/clay-native/Float/) |
| `height` | [Float](/api-docs/clay-native/Float/) |
| `antialiasing` | [Int](/api-docs/clay-native/Int/) |
| `textureFilter` | Anonymous |
| `nativeResolution` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [ceramic._ImGuiVisuals.ImGuiVisualEntry](/api-docs/clay-native/ceramic/_ImGuiVisuals/ImGuiVisualEntry/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="submitImage"><div class="plugin-name">imgui</div><code><span class="field-name">submitImage</span><span class="parenthesis">(</span><span class="arg-name">entry</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/_ImGuiVisuals/ImGuiVisualEntry/" class="type-link">ceramic._ImGuiVisuals.ImGuiVisualEntry</a><span class="operator">,</span> <span class="arg-name">interactive</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">buttonId</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#submitImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Submit the ImGui image (or image button) + align the filter for hits.

| Name | Type |
|------|------|
| `entry` | [ceramic._ImGuiVisuals.ImGuiVisualEntry](/api-docs/clay-native/ceramic/_ImGuiVisuals/ImGuiVisualEntry/) |
| `interactive` | [Bool](/api-docs/clay-native/Bool/) |
| `buttonId` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="packer"><div class="plugin-name">imgui</div><code><span class="field-name">packer</span><span class="parenthesis">(</span><span class="arg-name">antialiasing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">nearest</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TextureTilePacker/" class="type-link">TextureTilePacker</a></code><a class="header-anchor" href="#packer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared atlas packer for the given settings (lazy, one per combination).

| Name | Type |
|------|------|
| `antialiasing` | [Int](/api-docs/clay-native/Int/) |
| `nearest` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [TextureTilePacker](/api-docs/clay-native/ceramic/TextureTilePacker/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="maxTileSize"><div class="plugin-name">imgui</div><code><span class="field-name">maxTileSize</span><span class="parenthesis">(</span><span class="arg-name">isWidth</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTileSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Max tile size a shared packer page can hold (same math as allocTile).

| Name | Type |
|------|------|
| `isWidth` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="endFrame"><div class="plugin-name">imgui</div><code><span class="field-name">endFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by ImGuiSystem after ImGui.render(): sweep unused entries.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="markDedicated"><div class="plugin-name">imgui</div><code><span class="field-name">markDedicated</span><span class="parenthesis">(</span><span class="arg-name">add</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#markDedicated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `add` | [Bool](/api-docs/clay-native/Bool/) |

