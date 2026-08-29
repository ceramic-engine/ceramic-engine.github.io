---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGui
target: Headless
permalink: api-docs/headless/imguijs/ImGui/
---

# ImGui

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguijs/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguijs.ImGui</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="createContext"><code><span class="field-name">createContext</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">sharedFontAtlas</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImFontAtlas/" class="type-link">ImFontAtlas</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiContext/" class="type-link">ImGuiContext</a></code><a class="header-anchor" href="#createContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `sharedFontAtlas` | [ImFontAtlas](/api-docs/headless/imguijs/ImFontAtlas/) | `cast 0` |

| Returns |
|---------|
| [ImGuiContext](/api-docs/headless/imguijs/ImGuiContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyContext"><code><span class="field-name">destroyContext</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ctx</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiContext/" class="type-link">ImGuiContext</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ctx` | [ImGuiContext](/api-docs/headless/imguijs/ImGuiContext/) | `cast 0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCurrentContext"><code><span class="field-name">getCurrentContext</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiContext/" class="type-link">ImGuiContext</a></code><a class="header-anchor" href="#getCurrentContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiContext](/api-docs/headless/imguijs/ImGuiContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCurrentContext"><code><span class="field-name">setCurrentContext</span><span class="parenthesis">(</span><span class="arg-name">ctx</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiContext/" class="type-link">ImGuiContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCurrentContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ctx` | [ImGuiContext](/api-docs/headless/imguijs/ImGuiContext/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIO"><code><span class="field-name">getIO</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiIO/" class="type-link">ImGuiIO</a></code><a class="header-anchor" href="#getIO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiIO](/api-docs/headless/imguijs/ImGuiIO/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getPlatformIO"><code><span class="field-name">getPlatformIO</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiPlatformIO/" class="type-link">ImGuiPlatformIO</a></code><a class="header-anchor" href="#getPlatformIO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiPlatformIO](/api-docs/headless/imguijs/ImGuiPlatformIO/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getStyle"><code><span class="field-name">getStyle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStyle/" class="type-link">ImGuiStyle</a></code><a class="header-anchor" href="#getStyle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiStyle](/api-docs/headless/imguijs/ImGuiStyle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="newFrame"><code><span class="field-name">newFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#newFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="endFrame"><code><span class="field-name">endFrame</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="render"><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDrawData"><code><span class="field-name">getDrawData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawData/" class="type-link">ImDrawData</a></code><a class="header-anchor" href="#getDrawData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImDrawData](/api-docs/headless/imguijs/ImDrawData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showDemoWindow"><code><span class="field-name">showDemoWindow</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showDemoWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showMetricsWindow"><code><span class="field-name">showMetricsWindow</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showMetricsWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showDebugLogWindow"><code><span class="field-name">showDebugLogWindow</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showDebugLogWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showIDStackToolWindowEx"><code><span class="field-name">showIDStackToolWindowEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showIDStackToolWindowEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showIDStackToolWindow"><code><span class="field-name">showIDStackToolWindow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showIDStackToolWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="showAboutWindow"><code><span class="field-name">showAboutWindow</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showAboutWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showStyleEditor"><code><span class="field-name">showStyleEditor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ref</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStyle/" class="type-link">ImGuiStyle</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showStyleEditor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `ref` | [ImGuiStyle](/api-docs/headless/imguijs/ImGuiStyle/) | `cast 0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showStyleSelector"><code><span class="field-name">showStyleSelector</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#showStyleSelector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showFontSelector"><code><span class="field-name">showFontSelector</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showFontSelector"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="showUserGuide"><code><span class="field-name">showUserGuide</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#showUserGuide"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getVersion"><code><span class="field-name">getVersion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="styleColorsDark"><code><span class="field-name">styleColorsDark</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStyle/" class="type-link">ImGuiStyle</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#styleColorsDark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dst` | [ImGuiStyle](/api-docs/headless/imguijs/ImGuiStyle/) | `cast 0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="styleColorsLight"><code><span class="field-name">styleColorsLight</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStyle/" class="type-link">ImGuiStyle</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#styleColorsLight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dst` | [ImGuiStyle](/api-docs/headless/imguijs/ImGuiStyle/) | `cast 0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="styleColorsClassic"><code><span class="field-name">styleColorsClassic</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">dst</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStyle/" class="type-link">ImGuiStyle</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#styleColorsClassic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dst` | [ImGuiStyle](/api-docs/headless/imguijs/ImGuiStyle/) | `cast 0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="begin"><code><span class="field-name">begin</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#begin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/headless/String/) | |
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="end"><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginChild"><code><span class="field-name">beginChild</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">childFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">windowFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `childFlags` | [Int](/api-docs/headless/Int/) | `0` |
| `windowFlags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginChildID"><code><span class="field-name">beginChildID</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">childFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">windowFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginChildID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `id` | [Int](/api-docs/headless/Int/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `childFlags` | [Int](/api-docs/headless/Int/) | `0` |
| `windowFlags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endChild"><code><span class="field-name">endChild</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindowAppearing"><code><span class="field-name">isWindowAppearing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowAppearing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindowCollapsed"><code><span class="field-name">isWindowCollapsed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowCollapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindowFocused"><code><span class="field-name">isWindowFocused</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindowHovered"><code><span class="field-name">isWindowHovered</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowHovered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowDrawList"><code><span class="field-name">getWindowDrawList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawList/" class="type-link">ImDrawList</a></code><a class="header-anchor" href="#getWindowDrawList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImDrawList](/api-docs/headless/imguijs/ImDrawList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowDpiScale"><code><span class="field-name">getWindowDpiScale</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWindowDpiScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowPos"><code><span class="field-name">getWindowPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getWindowPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowSize"><code><span class="field-name">getWindowSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowWidth"><code><span class="field-name">getWindowWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWindowWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowHeight"><code><span class="field-name">getWindowHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getWindowHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowViewport"><code><span class="field-name">getWindowViewport</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a></code><a class="header-anchor" href="#getWindowViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowPosEx"><code><span class="field-name">setNextWindowPosEx</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">pivot</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowPosEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pos` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |
| `pivot` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowPos"><code><span class="field-name">setNextWindowPos</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pos` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowSize"><code><span class="field-name">setNextWindowSize</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowSizeConstraints"><code><span class="field-name">setNextWindowSizeConstraints</span><span class="parenthesis">(</span><span class="arg-name">sizeMin</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">sizeMax</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customCallback</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">customCallbackData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowSizeConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `sizeMin` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `sizeMax` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `customCallback` | [Int](/api-docs/headless/Int/) | `0` |
| `customCallbackData` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowContentSize"><code><span class="field-name">setNextWindowContentSize</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowContentSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowCollapsed"><code><span class="field-name">setNextWindowCollapsed</span><span class="parenthesis">(</span><span class="arg-name">collapsed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowCollapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `collapsed` | [Bool](/api-docs/headless/Bool/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowFocus"><code><span class="field-name">setNextWindowFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowScroll"><code><span class="field-name">setNextWindowScroll</span><span class="parenthesis">(</span><span class="arg-name">scroll</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowScroll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scroll` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowBgAlpha"><code><span class="field-name">setNextWindowBgAlpha</span><span class="parenthesis">(</span><span class="arg-name">alpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowBgAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `alpha` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowViewport"><code><span class="field-name">setNextWindowViewport</span><span class="parenthesis">(</span><span class="arg-name">viewportId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `viewportId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowPos"><code><span class="field-name">setWindowPos</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `pos` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowSize"><code><span class="field-name">setWindowSize</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowCollapsed"><code><span class="field-name">setWindowCollapsed</span><span class="parenthesis">(</span><span class="arg-name">collapsed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowCollapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `collapsed` | [Bool](/api-docs/headless/Bool/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowFocus"><code><span class="field-name">setWindowFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowPosStr"><code><span class="field-name">setWindowPosStr</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowPosStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/headless/String/) | |
| `pos` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowSizeStr"><code><span class="field-name">setWindowSizeStr</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowSizeStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/headless/String/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowCollapsedStr"><code><span class="field-name">setWindowCollapsedStr</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">collapsed</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowCollapsedStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/headless/String/) | |
| `collapsed` | [Bool](/api-docs/headless/Bool/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setWindowFocusStr"><code><span class="field-name">setWindowFocusStr</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setWindowFocusStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getScrollX"><code><span class="field-name">getScrollX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScrollX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getScrollY"><code><span class="field-name">getScrollY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScrollY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setScrollX"><code><span class="field-name">setScrollX</span><span class="parenthesis">(</span><span class="arg-name">scrollX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScrollX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scrollX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setScrollY"><code><span class="field-name">setScrollY</span><span class="parenthesis">(</span><span class="arg-name">scrollY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScrollY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scrollY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getScrollMaxX"><code><span class="field-name">getScrollMaxX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScrollMaxX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getScrollMaxY"><code><span class="field-name">getScrollMaxY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getScrollMaxY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setScrollHereX"><code><span class="field-name">setScrollHereX</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">centerXRatio</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScrollHereX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `centerXRatio` | [Float](/api-docs/headless/Float/) | `0.5` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setScrollHereY"><code><span class="field-name">setScrollHereY</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">centerYRatio</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScrollHereY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `centerYRatio` | [Float](/api-docs/headless/Float/) | `0.5` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setScrollFromPosX"><code><span class="field-name">setScrollFromPosX</span><span class="parenthesis">(</span><span class="arg-name">localX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">centerXRatio</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScrollFromPosX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `localX` | [Float](/api-docs/headless/Float/) | |
| `centerXRatio` | [Float](/api-docs/headless/Float/) | `0.5` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setScrollFromPosY"><code><span class="field-name">setScrollFromPosY</span><span class="parenthesis">(</span><span class="arg-name">localY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">centerYRatio</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setScrollFromPosY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `localY` | [Float](/api-docs/headless/Float/) | |
| `centerYRatio` | [Float](/api-docs/headless/Float/) | `0.5` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushFontFloat"><code><span class="field-name">pushFontFloat</span><span class="parenthesis">(</span><span class="arg-name">font</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImFont/" class="type-link">ImFont</a><span class="operator">,</span> <span class="arg-name">fontSizeBaseUnscaled</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushFontFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `font` | [ImFont](/api-docs/headless/imguijs/ImFont/) |
| `fontSizeBaseUnscaled` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popFont"><code><span class="field-name">popFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFont"><code><span class="field-name">getFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImFont/" class="type-link">ImFont</a></code><a class="header-anchor" href="#getFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImFont](/api-docs/headless/imguijs/ImFont/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFontSize"><code><span class="field-name">getFontSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFontSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFontBaked"><code><span class="field-name">getFontBaked</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImFontBaked/" class="type-link">ImFontBaked</a></code><a class="header-anchor" href="#getFontBaked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImFontBaked](/api-docs/headless/imguijs/ImFontBaked/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushStyleColor"><code><span class="field-name">pushStyleColor</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushStyleColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |
| `col` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushStyleColorImVec4"><code><span class="field-name">pushStyleColorImVec4</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushStyleColorImVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |
| `col` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popStyleColorEx"><code><span class="field-name">popStyleColorEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popStyleColorEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `count` | [Int](/api-docs/headless/Int/) | `1` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popStyleColor"><code><span class="field-name">popStyleColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popStyleColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushStyleVar"><code><span class="field-name">pushStyleVar</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushStyleVar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |
| `val` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushStyleVarImVec2"><code><span class="field-name">pushStyleVarImVec2</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">val</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushStyleVarImVec2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |
| `val` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushStyleVarX"><code><span class="field-name">pushStyleVarX</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushStyleVarX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |
| `valX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushStyleVarY"><code><span class="field-name">pushStyleVarY</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushStyleVarY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |
| `valY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popStyleVarEx"><code><span class="field-name">popStyleVarEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popStyleVarEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `count` | [Int](/api-docs/headless/Int/) | `1` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popStyleVar"><code><span class="field-name">popStyleVar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popStyleVar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushItemFlag"><code><span class="field-name">pushItemFlag</span><span class="parenthesis">(</span><span class="arg-name">option</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushItemFlag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `option` | [Int](/api-docs/headless/Int/) |
| `enabled` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popItemFlag"><code><span class="field-name">popItemFlag</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popItemFlag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushItemWidth"><code><span class="field-name">pushItemWidth</span><span class="parenthesis">(</span><span class="arg-name">itemWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushItemWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `itemWidth` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popItemWidth"><code><span class="field-name">popItemWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popItemWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextItemWidth"><code><span class="field-name">setNextItemWidth</span><span class="parenthesis">(</span><span class="arg-name">itemWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextItemWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `itemWidth` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="calcItemWidth"><code><span class="field-name">calcItemWidth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#calcItemWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushTextWrapPos"><code><span class="field-name">pushTextWrapPos</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">wrapLocalPosX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushTextWrapPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `wrapLocalPosX` | [Float](/api-docs/headless/Float/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popTextWrapPos"><code><span class="field-name">popTextWrapPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popTextWrapPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFontTexUvWhitePixel"><code><span class="field-name">getFontTexUvWhitePixel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getFontTexUvWhitePixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColorU32Ex"><code><span class="field-name">getColorU32Ex</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alphaMul</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColorU32Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `idx` | [Int](/api-docs/headless/Int/) | |
| `alphaMul` | [Float](/api-docs/headless/Float/) | `1.0` |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColorU32"><code><span class="field-name">getColorU32</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColorU32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColorU32ImVec4"><code><span class="field-name">getColorU32ImVec4</span><span class="parenthesis">(</span><span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColorU32ImVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `col` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColorU32ImU32Ex"><code><span class="field-name">getColorU32ImU32Ex</span><span class="parenthesis">(</span><span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alphaMul</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColorU32ImU32Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `col` | [Int](/api-docs/headless/Int/) | |
| `alphaMul` | [Float](/api-docs/headless/Float/) | `1.0` |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColorU32ImU32"><code><span class="field-name">getColorU32ImU32</span><span class="parenthesis">(</span><span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColorU32ImU32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `col` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getStyleColorVec4"><code><span class="field-name">getStyleColorVec4</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getStyleColorVec4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCursorScreenPos"><code><span class="field-name">getCursorScreenPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getCursorScreenPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCursorScreenPos"><code><span class="field-name">setCursorScreenPos</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCursorScreenPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pos` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getContentRegionAvail"><code><span class="field-name">getContentRegionAvail</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getContentRegionAvail"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCursorPos"><code><span class="field-name">getCursorPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getCursorPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCursorPosX"><code><span class="field-name">getCursorPosX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getCursorPosX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCursorPosY"><code><span class="field-name">getCursorPosY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getCursorPosY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCursorPos"><code><span class="field-name">setCursorPos</span><span class="parenthesis">(</span><span class="arg-name">localPos</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCursorPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `localPos` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCursorPosX"><code><span class="field-name">setCursorPosX</span><span class="parenthesis">(</span><span class="arg-name">localX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCursorPosX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `localX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setCursorPosY"><code><span class="field-name">setCursorPosY</span><span class="parenthesis">(</span><span class="arg-name">localY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCursorPosY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `localY` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCursorStartPos"><code><span class="field-name">getCursorStartPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getCursorStartPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="separator"><code><span class="field-name">separator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#separator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="sameLineEx"><code><span class="field-name">sameLineEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offsetFromStartX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">spacing</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sameLineEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `offsetFromStartX` | [Float](/api-docs/headless/Float/) | `0.0` |
| `spacing` | [Float](/api-docs/headless/Float/) | `-1.0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sameLine"><code><span class="field-name">sameLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sameLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="newLine"><code><span class="field-name">newLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#newLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="spacing"><code><span class="field-name">spacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#spacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="dummy"><code><span class="field-name">dummy</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dummy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="indentEx"><code><span class="field-name">indentEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">indentW</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#indentEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `indentW` | [Float](/api-docs/headless/Float/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="indent"><code><span class="field-name">indent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#indent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="unindentEx"><code><span class="field-name">unindentEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">indentW</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unindentEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `indentW` | [Float](/api-docs/headless/Float/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unindent"><code><span class="field-name">unindent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unindent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginGroup"><code><span class="field-name">beginGroup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="endGroup"><code><span class="field-name">endGroup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="alignTextToFramePadding"><code><span class="field-name">alignTextToFramePadding</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#alignTextToFramePadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTextLineHeight"><code><span class="field-name">getTextLineHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTextLineHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTextLineHeightWithSpacing"><code><span class="field-name">getTextLineHeightWithSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTextLineHeightWithSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFrameHeight"><code><span class="field-name">getFrameHeight</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFrameHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFrameHeightWithSpacing"><code><span class="field-name">getFrameHeightWithSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getFrameHeightWithSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushID"><code><span class="field-name">pushID</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushIDStr"><code><span class="field-name">pushIDStr</span><span class="parenthesis">(</span><span class="arg-name">strIdBegin</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">strIdEnd</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushIDStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strIdBegin` | [String](/api-docs/headless/String/) |
| `strIdEnd` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushIDPtr"><code><span class="field-name">pushIDPtr</span><span class="parenthesis">(</span><span class="arg-name">ptrId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushIDPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptrId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushIDInt"><code><span class="field-name">pushIDInt</span><span class="parenthesis">(</span><span class="arg-name">intId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushIDInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popID"><code><span class="field-name">popID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getID"><code><span class="field-name">getID</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIDStr"><code><span class="field-name">getIDStr</span><span class="parenthesis">(</span><span class="arg-name">strIdBegin</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">strIdEnd</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIDStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strIdBegin` | [String](/api-docs/headless/String/) |
| `strIdEnd` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIDPtr"><code><span class="field-name">getIDPtr</span><span class="parenthesis">(</span><span class="arg-name">ptrId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIDPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptrId` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getIDInt"><code><span class="field-name">getIDInt</span><span class="parenthesis">(</span><span class="arg-name">intId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getIDInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intId` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="text"><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textEnd</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `text` | [String](/api-docs/headless/String/) | |
| `textEnd` | [String](/api-docs/headless/String/) | `null` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textUnformatted"><code><span class="field-name">textUnformatted</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textUnformatted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textColored"><code><span class="field-name">textColored</span><span class="parenthesis">(</span><span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textColored"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `col` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textDisabled"><code><span class="field-name">textDisabled</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textWrapped"><code><span class="field-name">textWrapped</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textWrapped"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="labelText"><code><span class="field-name">labelText</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#labelText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bulletText"><code><span class="field-name">bulletText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bulletText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="separatorText"><code><span class="field-name">separatorText</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#separatorText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="buttonEx"><code><span class="field-name">buttonEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#buttonEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="button"><code><span class="field-name">button</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#button"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="smallButton"><code><span class="field-name">smallButton</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#smallButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="invisibleButton"><code><span class="field-name">invisibleButton</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#invisibleButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrowButton"><code><span class="field-name">arrowButton</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#arrowButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |
| `dir` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkbox"><code><span class="field-name">checkbox</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkbox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkboxFlagsIntPtr"><code><span class="field-name">checkboxFlagsIntPtr</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flagsValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkboxFlagsIntPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `flags` | [Int](/api-docs/headless/Int/) |
| `flagsValue` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="checkboxFlagsUintPtr"><code><span class="field-name">checkboxFlagsUintPtr</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flagsValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkboxFlagsUintPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `flags` | [Int](/api-docs/headless/Int/) |
| `flagsValue` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="radioButton"><code><span class="field-name">radioButton</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">active</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#radioButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `active` | [Bool](/api-docs/headless/Bool/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="radioButtonIntPtr"><code><span class="field-name">radioButtonIntPtr</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vButton</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#radioButtonIntPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vButton` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="progressBar"><code><span class="field-name">progressBar</span><span class="parenthesis">(</span><span class="arg-name">fraction</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">sizeArg</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlay</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#progressBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `fraction` | [Float](/api-docs/headless/Float/) | |
| `sizeArg` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `overlay` | [String](/api-docs/headless/String/) | `null` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bullet"><code><span class="field-name">bullet</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bullet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="textLink"><code><span class="field-name">textLink</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#textLink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textLinkOpenURLEx"><code><span class="field-name">textLinkOpenURLEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#textLinkOpenURLEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `url` | [String](/api-docs/headless/String/) | `null` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textLinkOpenURL"><code><span class="field-name">textLinkOpenURL</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#textLinkOpenURL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageEx"><code><span class="field-name">imageEx</span><span class="parenthesis">(</span><span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">imageSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv0</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv1</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#imageEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texRef` | [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) |
| `imageSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `uv0` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `uv1` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="image"><code><span class="field-name">image</span><span class="parenthesis">(</span><span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">imageSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#image"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texRef` | [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) |
| `imageSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageWithBgEx"><code><span class="field-name">imageWithBgEx</span><span class="parenthesis">(</span><span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">imageSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv0</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv1</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">bgCol</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="operator">,</span> <span class="arg-name">tintCol</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#imageWithBgEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texRef` | [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) |
| `imageSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `uv0` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `uv1` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `bgCol` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |
| `tintCol` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageWithBg"><code><span class="field-name">imageWithBg</span><span class="parenthesis">(</span><span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">imageSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#imageWithBg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `texRef` | [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) |
| `imageSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageButtonEx"><code><span class="field-name">imageButtonEx</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">imageSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv0</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">uv1</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">bgCol</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="operator">,</span> <span class="arg-name">tintCol</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#imageButtonEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |
| `texRef` | [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) |
| `imageSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `uv0` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `uv1` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `bgCol` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |
| `tintCol` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imageButton"><code><span class="field-name">imageButton</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">texRef</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImTextureRef/" class="type-link">ImTextureRef</a><span class="operator">,</span> <span class="arg-name">imageSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#imageButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |
| `texRef` | [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) |
| `imageSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginCombo"><code><span class="field-name">beginCombo</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">previewValue</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginCombo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `previewValue` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endCombo"><code><span class="field-name">endCombo</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endCombo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="comboCharEx"><code><span class="field-name">comboCharEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupMaxHeightInItems</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#comboCharEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `currentItem` | [Int](/api-docs/headless/Int/) | |
| `items` | [Int](/api-docs/headless/Int/) | |
| `itemsCount` | [Int](/api-docs/headless/Int/) | |
| `popupMaxHeightInItems` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="comboChar"><code><span class="field-name">comboChar</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#comboChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `currentItem` | [Int](/api-docs/headless/Int/) |
| `items` | [Int](/api-docs/headless/Int/) |
| `itemsCount` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="comboEx"><code><span class="field-name">comboEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsSeparatedByZeros</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupMaxHeightInItems</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#comboEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `currentItem` | [Int](/api-docs/headless/Int/) | |
| `itemsSeparatedByZeros` | [String](/api-docs/headless/String/) | |
| `popupMaxHeightInItems` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="combo"><code><span class="field-name">combo</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsSeparatedByZeros</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#combo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `currentItem` | [Int](/api-docs/headless/Int/) |
| `itemsSeparatedByZeros` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="comboCallbackEx"><code><span class="field-name">comboCallbackEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">getter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupMaxHeightInItems</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#comboCallbackEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `currentItem` | [Int](/api-docs/headless/Int/) | |
| `getter` | [Int](/api-docs/headless/Int/) | |
| `userData` | [Int](/api-docs/headless/Int/) | |
| `itemsCount` | [Int](/api-docs/headless/Int/) | |
| `popupMaxHeightInItems` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="comboCallback"><code><span class="field-name">comboCallback</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">getter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#comboCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `currentItem` | [Int](/api-docs/headless/Int/) |
| `getter` | [Int](/api-docs/headless/Int/) |
| `userData` | [Int](/api-docs/headless/Int/) |
| `itemsCount` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloatEx"><code><span class="field-name">dragFloatEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloatEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Float](/api-docs/headless/Float/) | `0.0` |
| `vMax` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat"><code><span class="field-name">dragFloat</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat2Ex"><code><span class="field-name">dragFloat2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Float](/api-docs/headless/Float/) | `0.0` |
| `vMax` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat2"><code><span class="field-name">dragFloat2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat3Ex"><code><span class="field-name">dragFloat3Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat3Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Float](/api-docs/headless/Float/) | `0.0` |
| `vMax` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat3"><code><span class="field-name">dragFloat3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat4Ex"><code><span class="field-name">dragFloat4Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat4Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Float](/api-docs/headless/Float/) | `0.0` |
| `vMax` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloat4"><code><span class="field-name">dragFloat4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloat4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloatRange2Ex"><code><span class="field-name">dragFloatRange2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vCurrentMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vCurrentMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">formatMax</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloatRange2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `vCurrentMin` | [Int](/api-docs/headless/Int/) | |
| `vCurrentMax` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Float](/api-docs/headless/Float/) | `0.0` |
| `vMax` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `formatMax` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragFloatRange2"><code><span class="field-name">dragFloatRange2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vCurrentMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vCurrentMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragFloatRange2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `vCurrentMin` | [Int](/api-docs/headless/Int/) |
| `vCurrentMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragIntEx"><code><span class="field-name">dragIntEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragIntEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Int](/api-docs/headless/Int/) | `0` |
| `vMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt"><code><span class="field-name">dragInt</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt2Ex"><code><span class="field-name">dragInt2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Int](/api-docs/headless/Int/) | `0` |
| `vMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt2"><code><span class="field-name">dragInt2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt3Ex"><code><span class="field-name">dragInt3Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt3Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Int](/api-docs/headless/Int/) | `0` |
| `vMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt3"><code><span class="field-name">dragInt3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt4Ex"><code><span class="field-name">dragInt4Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt4Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Int](/api-docs/headless/Int/) | `0` |
| `vMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragInt4"><code><span class="field-name">dragInt4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragInt4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragIntRange2Ex"><code><span class="field-name">dragIntRange2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vCurrentMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vCurrentMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">formatMax</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragIntRange2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `vCurrentMin` | [Int](/api-docs/headless/Int/) | |
| `vCurrentMax` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `vMin` | [Int](/api-docs/headless/Int/) | `0` |
| `vMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `formatMax` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragIntRange2"><code><span class="field-name">dragIntRange2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vCurrentMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vCurrentMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragIntRange2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `vCurrentMin` | [Int](/api-docs/headless/Int/) |
| `vCurrentMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragScalarEx"><code><span class="field-name">dragScalarEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragScalarEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `pMin` | [Int](/api-docs/headless/Int/) | `0` |
| `pMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragScalar"><code><span class="field-name">dragScalar</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragScalar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragScalarNEx"><code><span class="field-name">dragScalarNEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vSpeed</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragScalarNEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `components` | [Int](/api-docs/headless/Int/) | |
| `vSpeed` | [Float](/api-docs/headless/Float/) | `1.0` |
| `pMin` | [Int](/api-docs/headless/Int/) | `0` |
| `pMax` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dragScalarN"><code><span class="field-name">dragScalarN</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragScalarN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |
| `components` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloatEx"><code><span class="field-name">sliderFloatEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloatEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Float](/api-docs/headless/Float/) | |
| `vMax` | [Float](/api-docs/headless/Float/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat"><code><span class="field-name">sliderFloat</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Float](/api-docs/headless/Float/) |
| `vMax` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat2Ex"><code><span class="field-name">sliderFloat2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Float](/api-docs/headless/Float/) | |
| `vMax` | [Float](/api-docs/headless/Float/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat2"><code><span class="field-name">sliderFloat2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Float](/api-docs/headless/Float/) |
| `vMax` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat3Ex"><code><span class="field-name">sliderFloat3Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat3Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Float](/api-docs/headless/Float/) | |
| `vMax` | [Float](/api-docs/headless/Float/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat3"><code><span class="field-name">sliderFloat3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Float](/api-docs/headless/Float/) |
| `vMax` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat4Ex"><code><span class="field-name">sliderFloat4Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat4Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Float](/api-docs/headless/Float/) | |
| `vMax` | [Float](/api-docs/headless/Float/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderFloat4"><code><span class="field-name">sliderFloat4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderFloat4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Float](/api-docs/headless/Float/) |
| `vMax` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderAngleEx"><code><span class="field-name">sliderAngleEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vRad</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">vDegreesMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-360.0</span><span class="operator">,</span> <span class="arg-name">vDegreesMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.0f deg"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderAngleEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `vRad` | [Int](/api-docs/headless/Int/) | |
| `vDegreesMin` | [Float](/api-docs/headless/Float/) | `-360.0` |
| `vDegreesMax` | [Float](/api-docs/headless/Float/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.0f deg"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderAngle"><code><span class="field-name">sliderAngle</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">vRad</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `vRad` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderIntEx"><code><span class="field-name">sliderIntEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderIntEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Int](/api-docs/headless/Int/) | |
| `vMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt"><code><span class="field-name">sliderInt</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Int](/api-docs/headless/Int/) |
| `vMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt2Ex"><code><span class="field-name">sliderInt2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Int](/api-docs/headless/Int/) | |
| `vMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt2"><code><span class="field-name">sliderInt2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Int](/api-docs/headless/Int/) |
| `vMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt3Ex"><code><span class="field-name">sliderInt3Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt3Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Int](/api-docs/headless/Int/) | |
| `vMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt3"><code><span class="field-name">sliderInt3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Int](/api-docs/headless/Int/) |
| `vMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt4Ex"><code><span class="field-name">sliderInt4Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt4Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Int](/api-docs/headless/Int/) | |
| `vMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderInt4"><code><span class="field-name">sliderInt4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderInt4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Int](/api-docs/headless/Int/) |
| `vMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderScalarEx"><code><span class="field-name">sliderScalarEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderScalarEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `pMin` | [Int](/api-docs/headless/Int/) | |
| `pMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderScalar"><code><span class="field-name">sliderScalar</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderScalar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |
| `pMin` | [Int](/api-docs/headless/Int/) |
| `pMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderScalarNEx"><code><span class="field-name">sliderScalarNEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderScalarNEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `components` | [Int](/api-docs/headless/Int/) | |
| `pMin` | [Int](/api-docs/headless/Int/) | |
| `pMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sliderScalarN"><code><span class="field-name">sliderScalarN</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sliderScalarN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |
| `components` | [Int](/api-docs/headless/Int/) |
| `pMin` | [Int](/api-docs/headless/Int/) |
| `pMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vSliderFloatEx"><code><span class="field-name">vSliderFloatEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vSliderFloatEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Float](/api-docs/headless/Float/) | |
| `vMax` | [Float](/api-docs/headless/Float/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vSliderFloat"><code><span class="field-name">vSliderFloat</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vSliderFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Float](/api-docs/headless/Float/) |
| `vMax` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vSliderIntEx"><code><span class="field-name">vSliderIntEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%d"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vSliderIntEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `vMin` | [Int](/api-docs/headless/Int/) | |
| `vMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%d"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vSliderInt"><code><span class="field-name">vSliderInt</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">vMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vSliderInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `v` | [Int](/api-docs/headless/Int/) |
| `vMin` | [Int](/api-docs/headless/Int/) |
| `vMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vSliderScalarEx"><code><span class="field-name">vSliderScalarEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vSliderScalarEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `pMin` | [Int](/api-docs/headless/Int/) | |
| `pMax` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="vSliderScalar"><code><span class="field-name">vSliderScalar</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMin</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pMax</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vSliderScalar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |
| `pMin` | [Int](/api-docs/headless/Int/) |
| `pMax` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputTextEx"><code><span class="field-name">inputTextEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputTextEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `buf` | [Int](/api-docs/headless/Int/) | |
| `bufSize` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `callback` | [Int](/api-docs/headless/Int/) | `0` |
| `userData` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputText"><code><span class="field-name">inputText</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `buf` | [Int](/api-docs/headless/Int/) | |
| `bufSize` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputTextMultilineEx"><code><span class="field-name">inputTextMultilineEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputTextMultilineEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `buf` | [Int](/api-docs/headless/Int/) | |
| `bufSize` | [Int](/api-docs/headless/Int/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `callback` | [Int](/api-docs/headless/Int/) | `0` |
| `userData` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputTextMultiline"><code><span class="field-name">inputTextMultiline</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputTextMultiline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `buf` | [Int](/api-docs/headless/Int/) |
| `bufSize` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputTextWithHintEx"><code><span class="field-name">inputTextWithHintEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">hint</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputTextWithHintEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `hint` | [String](/api-docs/headless/String/) | |
| `buf` | [Int](/api-docs/headless/Int/) | |
| `bufSize` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `callback` | [Int](/api-docs/headless/Int/) | `0` |
| `userData` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputTextWithHint"><code><span class="field-name">inputTextWithHint</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">hint</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputTextWithHint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `hint` | [String](/api-docs/headless/String/) | |
| `buf` | [Int](/api-docs/headless/Int/) | |
| `bufSize` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloatEx"><code><span class="field-name">inputFloatEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stepFast</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloatEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `step` | [Float](/api-docs/headless/Float/) | `0.0` |
| `stepFast` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat"><code><span class="field-name">inputFloat</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat2Ex"><code><span class="field-name">inputFloat2Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat2Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat2"><code><span class="field-name">inputFloat2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat3Ex"><code><span class="field-name">inputFloat3Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat3Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat3"><code><span class="field-name">inputFloat3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat4Ex"><code><span class="field-name">inputFloat4Ex</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.3f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat4Ex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `format` | [String](/api-docs/headless/String/) | `"%.3f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputFloat4"><code><span class="field-name">inputFloat4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputFloat4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputIntEx"><code><span class="field-name">inputIntEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stepFast</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">100</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputIntEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `step` | [Int](/api-docs/headless/Int/) | `1` |
| `stepFast` | [Int](/api-docs/headless/Int/) | `100` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputInt"><code><span class="field-name">inputInt</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputInt2"><code><span class="field-name">inputInt2</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputInt2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputInt3"><code><span class="field-name">inputInt3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputInt3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputInt4"><code><span class="field-name">inputInt4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputInt4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputDoubleEx"><code><span class="field-name">inputDoubleEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">step</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stepFast</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"%.6f"</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputDoubleEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `v` | [Int](/api-docs/headless/Int/) | |
| `step` | [Float](/api-docs/headless/Float/) | `0.0` |
| `stepFast` | [Float](/api-docs/headless/Float/) | `0.0` |
| `format` | [String](/api-docs/headless/String/) | `"%.6f"` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputDouble"><code><span class="field-name">inputDouble</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputDouble"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `v` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputScalarEx"><code><span class="field-name">inputScalarEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pStep</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pStepFast</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputScalarEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `pStep` | [Int](/api-docs/headless/Int/) | `0` |
| `pStepFast` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputScalar"><code><span class="field-name">inputScalar</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputScalar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputScalarNEx"><code><span class="field-name">inputScalarNEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pStep</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pStepFast</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputScalarNEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `dataType` | [Int](/api-docs/headless/Int/) | |
| `pData` | [Int](/api-docs/headless/Int/) | |
| `components` | [Int](/api-docs/headless/Int/) | |
| `pStep` | [Int](/api-docs/headless/Int/) | `0` |
| `pStepFast` | [Int](/api-docs/headless/Int/) | `0` |
| `format` | [String](/api-docs/headless/String/) | `null` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="inputScalarN"><code><span class="field-name">inputScalarN</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dataType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">components</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputScalarN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `dataType` | [Int](/api-docs/headless/Int/) |
| `pData` | [Int](/api-docs/headless/Int/) |
| `components` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorEdit3"><code><span class="field-name">colorEdit3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorEdit3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `col` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorEdit4"><code><span class="field-name">colorEdit4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorEdit4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `col` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorPicker3"><code><span class="field-name">colorPicker3</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorPicker3"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `col` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorPicker4"><code><span class="field-name">colorPicker4</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">refCol</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorPicker4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `col` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `refCol` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorButtonEx"><code><span class="field-name">colorButtonEx</span><span class="parenthesis">(</span><span class="arg-name">descId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorButtonEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `descId` | [String](/api-docs/headless/String/) | |
| `col` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorButton"><code><span class="field-name">colorButton</span><span class="parenthesis">(</span><span class="arg-name">descId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">col</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#colorButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `descId` | [String](/api-docs/headless/String/) | |
| `col` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setColorEditOptions"><code><span class="field-name">setColorEditOptions</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColorEditOptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `flags` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNode"><code><span class="field-name">treeNode</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNodeStr"><code><span class="field-name">treeNodeStr</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNodeStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |
| `text` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNodePtr"><code><span class="field-name">treeNodePtr</span><span class="parenthesis">(</span><span class="arg-name">ptrId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNodePtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptrId` | [Int](/api-docs/headless/Int/) |
| `text` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNodeEx"><code><span class="field-name">treeNodeEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNodeEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNodeExStr"><code><span class="field-name">treeNodeExStr</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNodeExStr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |
| `flags` | [Int](/api-docs/headless/Int/) |
| `text` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNodeExPtr"><code><span class="field-name">treeNodeExPtr</span><span class="parenthesis">(</span><span class="arg-name">ptrId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNodeExPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptrId` | [Int](/api-docs/headless/Int/) |
| `flags` | [Int](/api-docs/headless/Int/) |
| `text` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treePush"><code><span class="field-name">treePush</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#treePush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `strId` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treePushPtr"><code><span class="field-name">treePushPtr</span><span class="parenthesis">(</span><span class="arg-name">ptrId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#treePushPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptrId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treePop"><code><span class="field-name">treePop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#treePop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTreeNodeToLabelSpacing"><code><span class="field-name">getTreeNodeToLabelSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTreeNodeToLabelSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="collapsingHeader"><code><span class="field-name">collapsingHeader</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collapsingHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="collapsingHeaderBoolPtr"><code><span class="field-name">collapsingHeaderBoolPtr</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pVisible</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#collapsingHeaderBoolPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `pVisible` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextItemOpen"><code><span class="field-name">setNextItemOpen</span><span class="parenthesis">(</span><span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextItemOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `isOpen` | [Bool](/api-docs/headless/Bool/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextItemStorageID"><code><span class="field-name">setNextItemStorageID</span><span class="parenthesis">(</span><span class="arg-name">storageId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextItemStorageID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `storageId` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="treeNodeGetOpen"><code><span class="field-name">treeNodeGetOpen</span><span class="parenthesis">(</span><span class="arg-name">storageId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#treeNodeGetOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `storageId` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="selectableEx"><code><span class="field-name">selectableEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">selected</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#selectableEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `selected` | [Bool](/api-docs/headless/Bool/) | `false` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="selectable"><code><span class="field-name">selectable</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#selectable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="selectableBoolPtrEx"><code><span class="field-name">selectableBoolPtrEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pSelected</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#selectableBoolPtrEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `pSelected` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="selectableBoolPtr"><code><span class="field-name">selectableBoolPtr</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pSelected</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#selectableBoolPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `pSelected` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginMultiSelectEx"><code><span class="field-name">beginMultiSelectEx</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">selectionSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiMultiSelectIO/" class="type-link">ImGuiMultiSelectIO</a></code><a class="header-anchor" href="#beginMultiSelectEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `flags` | [Int](/api-docs/headless/Int/) | |
| `selectionSize` | [Int](/api-docs/headless/Int/) | `-1` |
| `itemsCount` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [ImGuiMultiSelectIO](/api-docs/headless/imguijs/ImGuiMultiSelectIO/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginMultiSelect"><code><span class="field-name">beginMultiSelect</span><span class="parenthesis">(</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiMultiSelectIO/" class="type-link">ImGuiMultiSelectIO</a></code><a class="header-anchor" href="#beginMultiSelect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `flags` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ImGuiMultiSelectIO](/api-docs/headless/imguijs/ImGuiMultiSelectIO/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endMultiSelect"><code><span class="field-name">endMultiSelect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiMultiSelectIO/" class="type-link">ImGuiMultiSelectIO</a></code><a class="header-anchor" href="#endMultiSelect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiMultiSelectIO](/api-docs/headless/imguijs/ImGuiMultiSelectIO/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextItemSelectionUserData"><code><span class="field-name">setNextItemSelectionUserData</span><span class="parenthesis">(</span><span class="arg-name">selectionUserData</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextItemSelectionUserData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `selectionUserData` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemToggledSelection"><code><span class="field-name">isItemToggledSelection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemToggledSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginListBox"><code><span class="field-name">beginListBox</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginListBox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endListBox"><code><span class="field-name">endListBox</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endListBox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="listBox"><code><span class="field-name">listBox</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">heightInItems</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listBox"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `currentItem` | [Int](/api-docs/headless/Int/) | |
| `items` | [Int](/api-docs/headless/Int/) | |
| `itemsCount` | [Int](/api-docs/headless/Int/) | |
| `heightInItems` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="listBoxCallbackEx"><code><span class="field-name">listBoxCallbackEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">getter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">heightInItems</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listBoxCallbackEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `currentItem` | [Int](/api-docs/headless/Int/) | |
| `getter` | [Int](/api-docs/headless/Int/) | |
| `userData` | [Int](/api-docs/headless/Int/) | |
| `itemsCount` | [Int](/api-docs/headless/Int/) | |
| `heightInItems` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="listBoxCallback"><code><span class="field-name">listBoxCallback</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">currentItem</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">getter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">itemsCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#listBoxCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `currentItem` | [Int](/api-docs/headless/Int/) |
| `getter` | [Int](/api-docs/headless/Int/) |
| `userData` | [Int](/api-docs/headless/Int/) |
| `itemsCount` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotLinesEx"><code><span class="field-name">plotLinesEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">valuesOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlayText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="arg-name">graphSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stride</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotLinesEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `values` | [Int](/api-docs/headless/Int/) | |
| `valuesCount` | [Int](/api-docs/headless/Int/) | |
| `valuesOffset` | [Int](/api-docs/headless/Int/) | `0` |
| `overlayText` | [String](/api-docs/headless/String/) | `null` |
| `scaleMin` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `scaleMax` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `graphSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `stride` | [Int](/api-docs/headless/Int/) | `4` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotLines"><code><span class="field-name">plotLines</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `values` | [Int](/api-docs/headless/Int/) |
| `valuesCount` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotLinesCallbackEx"><code><span class="field-name">plotLinesCallbackEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">valuesGetter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">valuesOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlayText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="arg-name">graphSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotLinesCallbackEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `valuesGetter` | [Int](/api-docs/headless/Int/) | |
| `data` | [Int](/api-docs/headless/Int/) | |
| `valuesCount` | [Int](/api-docs/headless/Int/) | |
| `valuesOffset` | [Int](/api-docs/headless/Int/) | `0` |
| `overlayText` | [String](/api-docs/headless/String/) | `null` |
| `scaleMin` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `scaleMax` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `graphSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotLinesCallback"><code><span class="field-name">plotLinesCallback</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">valuesGetter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotLinesCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `valuesGetter` | [Int](/api-docs/headless/Int/) |
| `data` | [Int](/api-docs/headless/Int/) |
| `valuesCount` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotHistogramEx"><code><span class="field-name">plotHistogramEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">valuesOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlayText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="arg-name">graphSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stride</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">4</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotHistogramEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `values` | [Int](/api-docs/headless/Int/) | |
| `valuesCount` | [Int](/api-docs/headless/Int/) | |
| `valuesOffset` | [Int](/api-docs/headless/Int/) | `0` |
| `overlayText` | [String](/api-docs/headless/String/) | `null` |
| `scaleMin` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `scaleMax` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `graphSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `stride` | [Int](/api-docs/headless/Int/) | `4` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotHistogram"><code><span class="field-name">plotHistogram</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">values</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotHistogram"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `values` | [Int](/api-docs/headless/Int/) |
| `valuesCount` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotHistogramCallbackEx"><code><span class="field-name">plotHistogramCallbackEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">valuesGetter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">valuesOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">overlayText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMin</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleMax</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">3.402823466e+38</span><span class="operator">,</span> <span class="arg-name">graphSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotHistogramCallbackEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `valuesGetter` | [Int](/api-docs/headless/Int/) | |
| `data` | [Int](/api-docs/headless/Int/) | |
| `valuesCount` | [Int](/api-docs/headless/Int/) | |
| `valuesOffset` | [Int](/api-docs/headless/Int/) | `0` |
| `overlayText` | [String](/api-docs/headless/String/) | `null` |
| `scaleMin` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `scaleMax` | [Float](/api-docs/headless/Float/) | `3.402823466e+38` |
| `graphSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |

<hr class="field-separator" />

<div class="signature field-method no-description" id="plotHistogramCallback"><code><span class="field-name">plotHistogramCallback</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">valuesGetter</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">valuesCount</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#plotHistogramCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |
| `valuesGetter` | [Int](/api-docs/headless/Int/) |
| `data` | [Int](/api-docs/headless/Int/) |
| `valuesCount` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginMenuBar"><code><span class="field-name">beginMenuBar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginMenuBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endMenuBar"><code><span class="field-name">endMenuBar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endMenuBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginMainMenuBar"><code><span class="field-name">beginMainMenuBar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginMainMenuBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endMainMenuBar"><code><span class="field-name">endMainMenuBar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endMainMenuBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginMenuEx"><code><span class="field-name">beginMenuEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginMenuEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `enabled` | [Bool](/api-docs/headless/Bool/) | `true` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginMenu"><code><span class="field-name">beginMenu</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginMenu"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endMenu"><code><span class="field-name">endMenu</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endMenu"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="menuItemEx"><code><span class="field-name">menuItemEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">shortcut</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">selected</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#menuItemEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `shortcut` | [String](/api-docs/headless/String/) | `null` |
| `selected` | [Bool](/api-docs/headless/Bool/) | `false` |
| `enabled` | [Bool](/api-docs/headless/Bool/) | `true` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="menuItem"><code><span class="field-name">menuItem</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#menuItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="menuItemBoolPtr"><code><span class="field-name">menuItemBoolPtr</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">shortcut</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pSelected</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#menuItemBoolPtr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `shortcut` | [String](/api-docs/headless/String/) | |
| `pSelected` | [Int](/api-docs/headless/Int/) | |
| `enabled` | [Bool](/api-docs/headless/Bool/) | `true` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginTooltip"><code><span class="field-name">beginTooltip</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginTooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endTooltip"><code><span class="field-name">endTooltip</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endTooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTooltip"><code><span class="field-name">setTooltip</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginItemTooltip"><code><span class="field-name">beginItemTooltip</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginItemTooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setItemTooltip"><code><span class="field-name">setItemTooltip</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setItemTooltip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopup"><code><span class="field-name">beginPopup</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupModal"><code><span class="field-name">beginPopupModal</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupModal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/headless/String/) | |
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endPopup"><code><span class="field-name">endPopup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endPopup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="openPopup"><code><span class="field-name">openPopup</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#openPopup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `popupFlags` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="openPopupID"><code><span class="field-name">openPopupID</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#openPopupID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `id` | [Int](/api-docs/headless/Int/) | |
| `popupFlags` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="openPopupOnItemClick"><code><span class="field-name">openPopupOnItemClick</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#openPopupOnItemClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | `null` |
| `popupFlags` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="closeCurrentPopup"><code><span class="field-name">closeCurrentPopup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#closeCurrentPopup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupContextItemEx"><code><span class="field-name">beginPopupContextItemEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupContextItemEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | `null` |
| `popupFlags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupContextItem"><code><span class="field-name">beginPopupContextItem</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupContextItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupContextWindowEx"><code><span class="field-name">beginPopupContextWindowEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupContextWindowEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | `null` |
| `popupFlags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupContextWindow"><code><span class="field-name">beginPopupContextWindow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupContextWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupContextVoidEx"><code><span class="field-name">beginPopupContextVoidEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">popupFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupContextVoidEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | `null` |
| `popupFlags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginPopupContextVoid"><code><span class="field-name">beginPopupContextVoid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginPopupContextVoid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isPopupOpen"><code><span class="field-name">isPopupOpen</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPopupOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginTableEx"><code><span class="field-name">beginTableEx</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="arg-name">outerSize</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">innerWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginTableEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `columns` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `outerSize` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `innerWidth` | [Float](/api-docs/headless/Float/) | `0.0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginTable"><code><span class="field-name">beginTable</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginTable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `columns` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endTable"><code><span class="field-name">endTable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endTable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableNextRowEx"><code><span class="field-name">tableNextRowEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">rowFlags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minRowHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableNextRowEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `rowFlags` | [Int](/api-docs/headless/Int/) | `0` |
| `minRowHeight` | [Float](/api-docs/headless/Float/) | `0.0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableNextRow"><code><span class="field-name">tableNextRow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableNextRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableNextColumn"><code><span class="field-name">tableNextColumn</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tableNextColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableSetColumnIndex"><code><span class="field-name">tableSetColumnIndex</span><span class="parenthesis">(</span><span class="arg-name">columnN</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tableSetColumnIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `columnN` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableSetupColumnEx"><code><span class="field-name">tableSetupColumnEx</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">initWidthOrWeight</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableSetupColumnEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `initWidthOrWeight` | [Float](/api-docs/headless/Float/) | `0.0` |
| `userId` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableSetupColumn"><code><span class="field-name">tableSetupColumn</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableSetupColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableSetupScrollFreeze"><code><span class="field-name">tableSetupScrollFreeze</span><span class="parenthesis">(</span><span class="arg-name">cols</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">rows</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableSetupScrollFreeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cols` | [Int](/api-docs/headless/Int/) |
| `rows` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableHeader"><code><span class="field-name">tableHeader</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableHeader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `label` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableHeadersRow"><code><span class="field-name">tableHeadersRow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableHeadersRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableAngledHeadersRow"><code><span class="field-name">tableAngledHeadersRow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableAngledHeadersRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetSortSpecs"><code><span class="field-name">tableGetSortSpecs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiTableSortSpecs/" class="type-link">ImGuiTableSortSpecs</a></code><a class="header-anchor" href="#tableGetSortSpecs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiTableSortSpecs](/api-docs/headless/imguijs/ImGuiTableSortSpecs/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetColumnCount"><code><span class="field-name">tableGetColumnCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tableGetColumnCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetColumnIndex"><code><span class="field-name">tableGetColumnIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tableGetColumnIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetRowIndex"><code><span class="field-name">tableGetRowIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tableGetRowIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetColumnName"><code><span class="field-name">tableGetColumnName</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">columnN</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#tableGetColumnName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `columnN` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetColumnFlags"><code><span class="field-name">tableGetColumnFlags</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">columnN</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tableGetColumnFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `columnN` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableSetColumnEnabled"><code><span class="field-name">tableSetColumnEnabled</span><span class="parenthesis">(</span><span class="arg-name">columnN</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableSetColumnEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `columnN` | [Int](/api-docs/headless/Int/) |
| `v` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableGetHoveredColumn"><code><span class="field-name">tableGetHoveredColumn</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#tableGetHoveredColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tableSetBgColor"><code><span class="field-name">tableSetBgColor</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">columnN</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tableSetBgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `target` | [Int](/api-docs/headless/Int/) | |
| `color` | [Int](/api-docs/headless/Int/) | |
| `columnN` | [Int](/api-docs/headless/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="columnsEx"><code><span class="field-name">columnsEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">borders</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#columnsEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `count` | [Int](/api-docs/headless/Int/) | `1` |
| `id` | [String](/api-docs/headless/String/) | `null` |
| `borders` | [Bool](/api-docs/headless/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="columns"><code><span class="field-name">columns</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#columns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="nextColumn"><code><span class="field-name">nextColumn</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#nextColumn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColumnIndex"><code><span class="field-name">getColumnIndex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColumnIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColumnWidth"><code><span class="field-name">getColumnWidth</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">columnIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getColumnWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `columnIndex` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setColumnWidth"><code><span class="field-name">setColumnWidth</span><span class="parenthesis">(</span><span class="arg-name">columnIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColumnWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `columnIndex` | [Int](/api-docs/headless/Int/) |
| `width` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColumnOffset"><code><span class="field-name">getColumnOffset</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">columnIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getColumnOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `columnIndex` | [Int](/api-docs/headless/Int/) | `-1` |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setColumnOffset"><code><span class="field-name">setColumnOffset</span><span class="parenthesis">(</span><span class="arg-name">columnIndex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setColumnOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `columnIndex` | [Int](/api-docs/headless/Int/) |
| `offsetX` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getColumnsCount"><code><span class="field-name">getColumnsCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getColumnsCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginTabBar"><code><span class="field-name">beginTabBar</span><span class="parenthesis">(</span><span class="arg-name">strId</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginTabBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `strId` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endTabBar"><code><span class="field-name">endTabBar</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endTabBar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginTabItem"><code><span class="field-name">beginTabItem</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginTabItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `pOpen` | [Int](/api-docs/headless/Int/) | `0` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endTabItem"><code><span class="field-name">endTabItem</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endTabItem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tabItemButton"><code><span class="field-name">tabItemButton</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tabItemButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTabItemClosed"><code><span class="field-name">setTabItemClosed</span><span class="parenthesis">(</span><span class="arg-name">tabOrDockedWindowLabel</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTabItemClosed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tabOrDockedWindowLabel` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dockSpaceEx"><code><span class="field-name">dockSpaceEx</span><span class="parenthesis">(</span><span class="arg-name">dockspaceId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">windowClass</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiWindowClass/" class="type-link">ImGuiWindowClass</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dockSpaceEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dockspaceId` | [Int](/api-docs/headless/Int/) | |
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `windowClass` | [ImGuiWindowClass](/api-docs/headless/imguijs/ImGuiWindowClass/) | `cast 0` |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dockSpace"><code><span class="field-name">dockSpace</span><span class="parenthesis">(</span><span class="arg-name">dockspaceId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dockSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dockspaceId` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dockSpaceOverViewportEx"><code><span class="field-name">dockSpaceOverViewportEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">dockspaceId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">viewport</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">windowClass</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiWindowClass/" class="type-link">ImGuiWindowClass</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dockSpaceOverViewportEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dockspaceId` | [Int](/api-docs/headless/Int/) | `0` |
| `viewport` | [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) | `cast 0` |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |
| `windowClass` | [ImGuiWindowClass](/api-docs/headless/imguijs/ImGuiWindowClass/) | `cast 0` |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dockSpaceOverViewport"><code><span class="field-name">dockSpaceOverViewport</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dockSpaceOverViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowDockID"><code><span class="field-name">setNextWindowDockID</span><span class="parenthesis">(</span><span class="arg-name">dockId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowDockID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `dockId` | [Int](/api-docs/headless/Int/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextWindowClass"><code><span class="field-name">setNextWindowClass</span><span class="parenthesis">(</span><span class="arg-name">windowClass</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiWindowClass/" class="type-link">ImGuiWindowClass</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextWindowClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `windowClass` | [ImGuiWindowClass](/api-docs/headless/imguijs/ImGuiWindowClass/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getWindowDockID"><code><span class="field-name">getWindowDockID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getWindowDockID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isWindowDocked"><code><span class="field-name">isWindowDocked</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isWindowDocked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="logToTTY"><code><span class="field-name">logToTTY</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">autoOpenDepth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#logToTTY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `autoOpenDepth` | [Int](/api-docs/headless/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="logToFile"><code><span class="field-name">logToFile</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">autoOpenDepth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#logToFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `autoOpenDepth` | [Int](/api-docs/headless/Int/) | `-1` |
| `filename` | [String](/api-docs/headless/String/) | `null` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="logToClipboard"><code><span class="field-name">logToClipboard</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">autoOpenDepth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#logToClipboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `autoOpenDepth` | [Int](/api-docs/headless/Int/) | `-1` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="logFinish"><code><span class="field-name">logFinish</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#logFinish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="logButtons"><code><span class="field-name">logButtons</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#logButtons"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="logText"><code><span class="field-name">logText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#logText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginDragDropSource"><code><span class="field-name">beginDragDropSource</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginDragDropSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setDragDropPayload"><code><span class="field-name">setDragDropPayload</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sz</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cond</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setDragDropPayload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/headless/String/) | |
| `data` | [Int](/api-docs/headless/Int/) | |
| `sz` | [Int](/api-docs/headless/Int/) | |
| `cond` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endDragDropSource"><code><span class="field-name">endDragDropSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDragDropSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginDragDropTarget"><code><span class="field-name">beginDragDropTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginDragDropTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="acceptDragDropPayload"><code><span class="field-name">acceptDragDropPayload</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiPayload/" class="type-link">ImGuiPayload</a></code><a class="header-anchor" href="#acceptDragDropPayload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/headless/String/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [ImGuiPayload](/api-docs/headless/imguijs/ImGuiPayload/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endDragDropTarget"><code><span class="field-name">endDragDropTarget</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDragDropTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDragDropPayload"><code><span class="field-name">getDragDropPayload</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiPayload/" class="type-link">ImGuiPayload</a></code><a class="header-anchor" href="#getDragDropPayload"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiPayload](/api-docs/headless/imguijs/ImGuiPayload/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beginDisabled"><code><span class="field-name">beginDisabled</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">disabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `disabled` | [Bool](/api-docs/headless/Bool/) | `true` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="endDisabled"><code><span class="field-name">endDisabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endDisabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="pushClipRect"><code><span class="field-name">pushClipRect</span><span class="parenthesis">(</span><span class="arg-name">clipRectMin</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">clipRectMax</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">intersectWithCurrentClipRect</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushClipRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `clipRectMin` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `clipRectMax` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `intersectWithCurrentClipRect` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="popClipRect"><code><span class="field-name">popClipRect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popClipRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setItemDefaultFocus"><code><span class="field-name">setItemDefaultFocus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setItemDefaultFocus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setKeyboardFocusHereEx"><code><span class="field-name">setKeyboardFocusHereEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">offset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setKeyboardFocusHereEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `offset` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setKeyboardFocusHere"><code><span class="field-name">setKeyboardFocusHere</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setKeyboardFocusHere"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNavCursorVisible"><code><span class="field-name">setNavCursorVisible</span><span class="parenthesis">(</span><span class="arg-name">visible</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNavCursorVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visible` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextItemAllowOverlap"><code><span class="field-name">setNextItemAllowOverlap</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextItemAllowOverlap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemHovered"><code><span class="field-name">isItemHovered</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemHovered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemActive"><code><span class="field-name">isItemActive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemFocused"><code><span class="field-name">isItemFocused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemClickedEx"><code><span class="field-name">isItemClickedEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">mouseButton</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemClickedEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `mouseButton` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemClicked"><code><span class="field-name">isItemClicked</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemClicked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemVisible"><code><span class="field-name">isItemVisible</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemEdited"><code><span class="field-name">isItemEdited</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemEdited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemActivated"><code><span class="field-name">isItemActivated</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemActivated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemDeactivated"><code><span class="field-name">isItemDeactivated</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemDeactivated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemDeactivatedAfterEdit"><code><span class="field-name">isItemDeactivatedAfterEdit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemDeactivatedAfterEdit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isItemToggledOpen"><code><span class="field-name">isItemToggledOpen</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isItemToggledOpen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAnyItemHovered"><code><span class="field-name">isAnyItemHovered</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAnyItemHovered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAnyItemActive"><code><span class="field-name">isAnyItemActive</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAnyItemActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAnyItemFocused"><code><span class="field-name">isAnyItemFocused</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAnyItemFocused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getItemID"><code><span class="field-name">getItemID</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getItemID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getItemRectMin"><code><span class="field-name">getItemRectMin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getItemRectMin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getItemRectMax"><code><span class="field-name">getItemRectMax</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getItemRectMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getItemRectSize"><code><span class="field-name">getItemRectSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getItemRectSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getItemFlags"><code><span class="field-name">getItemFlags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getItemFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMainViewport"><code><span class="field-name">getMainViewport</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a></code><a class="header-anchor" href="#getMainViewport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBackgroundDrawListEx"><code><span class="field-name">getBackgroundDrawListEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">viewport</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawList/" class="type-link">ImDrawList</a></code><a class="header-anchor" href="#getBackgroundDrawListEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `viewport` | [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) | `cast 0` |

| Returns |
|---------|
| [ImDrawList](/api-docs/headless/imguijs/ImDrawList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getBackgroundDrawList"><code><span class="field-name">getBackgroundDrawList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawList/" class="type-link">ImDrawList</a></code><a class="header-anchor" href="#getBackgroundDrawList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImDrawList](/api-docs/headless/imguijs/ImDrawList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getForegroundDrawListEx"><code><span class="field-name">getForegroundDrawListEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">viewport</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a> <span class="operator">=</span> <span class="default-value">cast 0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawList/" class="type-link">ImDrawList</a></code><a class="header-anchor" href="#getForegroundDrawListEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `viewport` | [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) | `cast 0` |

| Returns |
|---------|
| [ImDrawList](/api-docs/headless/imguijs/ImDrawList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getForegroundDrawList"><code><span class="field-name">getForegroundDrawList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawList/" class="type-link">ImDrawList</a></code><a class="header-anchor" href="#getForegroundDrawList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImDrawList](/api-docs/headless/imguijs/ImDrawList/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isRectVisibleBySize"><code><span class="field-name">isRectVisibleBySize</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRectVisibleBySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `size` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isRectVisible"><code><span class="field-name">isRectVisible</span><span class="parenthesis">(</span><span class="arg-name">rectMin</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">rectMax</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRectVisible"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rectMin` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `rectMax` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getTime"><code><span class="field-name">getTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFrameCount"><code><span class="field-name">getFrameCount</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFrameCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getDrawListSharedData"><code><span class="field-name">getDrawListSharedData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImDrawListSharedData/" class="type-link">ImDrawListSharedData</a></code><a class="header-anchor" href="#getDrawListSharedData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImDrawListSharedData](/api-docs/headless/imguijs/ImDrawListSharedData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getStyleColorName"><code><span class="field-name">getStyleColorName</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getStyleColorName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setStateStorage"><code><span class="field-name">setStateStorage</span><span class="parenthesis">(</span><span class="arg-name">storage</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStorage/" class="type-link">ImGuiStorage</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setStateStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `storage` | [ImGuiStorage](/api-docs/headless/imguijs/ImGuiStorage/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getStateStorage"><code><span class="field-name">getStateStorage</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiStorage/" class="type-link">ImGuiStorage</a></code><a class="header-anchor" href="#getStateStorage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImGuiStorage](/api-docs/headless/imguijs/ImGuiStorage/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="calcTextSizeEx"><code><span class="field-name">calcTextSizeEx</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textEnd</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">null</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hideTextAfterDoubleHash</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wrapWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#calcTextSizeEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `text` | [String](/api-docs/headless/String/) | |
| `textEnd` | [String](/api-docs/headless/String/) | `null` |
| `hideTextAfterDoubleHash` | [Bool](/api-docs/headless/Bool/) | `false` |
| `wrapWidth` | [Float](/api-docs/headless/Float/) | `-1.0` |

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="calcTextSize"><code><span class="field-name">calcTextSize</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#calcTextSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorConvertU32ToFloat4"><code><span class="field-name">colorConvertU32ToFloat4</span><span class="parenthesis">(</span><span class="arg-name">in_</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a></code><a class="header-anchor" href="#colorConvertU32ToFloat4"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `in_` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ImVec4](/api-docs/headless/imguijs/ImVec4/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorConvertFloat4ToU32"><code><span class="field-name">colorConvertFloat4ToU32</span><span class="parenthesis">(</span><span class="arg-name">in_</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec4/" class="type-link">ImVec4</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorConvertFloat4ToU32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `in_` | [ImVec4](/api-docs/headless/imguijs/ImVec4/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorConvertRGBtoHSV"><code><span class="field-name">colorConvertRGBtoHSV</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">outH</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">outS</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">outV</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#colorConvertRGBtoHSV"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `r` | [Float](/api-docs/headless/Float/) |
| `g` | [Float](/api-docs/headless/Float/) |
| `b` | [Float](/api-docs/headless/Float/) |
| `outH` | [Int](/api-docs/headless/Int/) |
| `outS` | [Int](/api-docs/headless/Int/) |
| `outV` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="colorConvertHSVtoRGB"><code><span class="field-name">colorConvertHSVtoRGB</span><span class="parenthesis">(</span><span class="arg-name">h</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">outR</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">outG</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">outB</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#colorConvertHSVtoRGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `h` | [Float](/api-docs/headless/Float/) |
| `s` | [Float](/api-docs/headless/Float/) |
| `v` | [Float](/api-docs/headless/Float/) |
| `outR` | [Int](/api-docs/headless/Int/) |
| `outG` | [Int](/api-docs/headless/Int/) |
| `outB` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isKeyDown"><code><span class="field-name">isKeyDown</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isKeyPressedEx"><code><span class="field-name">isKeyPressedEx</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKeyPressedEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `key` | [Int](/api-docs/headless/Int/) | |
| `repeat` | [Bool](/api-docs/headless/Bool/) | `true` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isKeyPressed"><code><span class="field-name">isKeyPressed</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKeyPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isKeyReleased"><code><span class="field-name">isKeyReleased</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKeyReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isKeyChordPressed"><code><span class="field-name">isKeyChordPressed</span><span class="parenthesis">(</span><span class="arg-name">keyChord</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isKeyChordPressed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyChord` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getKeyPressedAmount"><code><span class="field-name">getKeyPressedAmount</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">repeatDelay</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rate</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getKeyPressedAmount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |
| `repeatDelay` | [Float](/api-docs/headless/Float/) |
| `rate` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getKeyName"><code><span class="field-name">getKeyName</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getKeyName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextFrameWantCaptureKeyboard"><code><span class="field-name">setNextFrameWantCaptureKeyboard</span><span class="parenthesis">(</span><span class="arg-name">wantCaptureKeyboard</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextFrameWantCaptureKeyboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `wantCaptureKeyboard` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="shortcut"><code><span class="field-name">shortcut</span><span class="parenthesis">(</span><span class="arg-name">keyChord</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shortcut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `keyChord` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextItemShortcut"><code><span class="field-name">setNextItemShortcut</span><span class="parenthesis">(</span><span class="arg-name">keyChord</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">flags</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextItemShortcut"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `keyChord` | [Int](/api-docs/headless/Int/) | |
| `flags` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setItemKeyOwner"><code><span class="field-name">setItemKeyOwner</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#setItemKeyOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseDown"><code><span class="field-name">isMouseDown</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `button` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseClickedEx"><code><span class="field-name">isMouseClickedEx</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseClickedEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `button` | [Int](/api-docs/headless/Int/) | |
| `repeat` | [Bool](/api-docs/headless/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseClicked"><code><span class="field-name">isMouseClicked</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseClicked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `button` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseReleased"><code><span class="field-name">isMouseReleased</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseReleased"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `button` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseDoubleClicked"><code><span class="field-name">isMouseDoubleClicked</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseDoubleClicked"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `button` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseReleasedWithDelay"><code><span class="field-name">isMouseReleasedWithDelay</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">delay</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseReleasedWithDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `button` | [Int](/api-docs/headless/Int/) |
| `delay` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMouseClickedCount"><code><span class="field-name">getMouseClickedCount</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMouseClickedCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `button` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseHoveringRectEx"><code><span class="field-name">isMouseHoveringRectEx</span><span class="parenthesis">(</span><span class="arg-name">rMin</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">rMax</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">clip</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseHoveringRectEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `rMin` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `rMax` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) | |
| `clip` | [Bool](/api-docs/headless/Bool/) | `true` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseHoveringRect"><code><span class="field-name">isMouseHoveringRect</span><span class="parenthesis">(</span><span class="arg-name">rMin</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="operator">,</span> <span class="arg-name">rMax</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseHoveringRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rMin` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |
| `rMax` | [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMousePosValid"><code><span class="field-name">isMousePosValid</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">mousePos</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMousePosValid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `mousePos` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isAnyMouseDown"><code><span class="field-name">isAnyMouseDown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAnyMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMousePos"><code><span class="field-name">getMousePos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getMousePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMousePosOnOpeningCurrentPopup"><code><span class="field-name">getMousePosOnOpeningCurrentPopup</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getMousePosOnOpeningCurrentPopup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isMouseDragging"><code><span class="field-name">isMouseDragging</span><span class="parenthesis">(</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lockThreshold</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isMouseDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `button` | [Int](/api-docs/headless/Int/) | |
| `lockThreshold` | [Float](/api-docs/headless/Float/) | `-1.0` |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMouseDragDelta"><code><span class="field-name">getMouseDragDelta</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lockThreshold</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#getMouseDragDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `button` | [Int](/api-docs/headless/Int/) | `0` |
| `lockThreshold` | [Float](/api-docs/headless/Float/) | `-1.0` |

| Returns |
|---------|
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resetMouseDragDeltaEx"><code><span class="field-name">resetMouseDragDeltaEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetMouseDragDeltaEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `button` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resetMouseDragDelta"><code><span class="field-name">resetMouseDragDelta</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetMouseDragDelta"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getMouseCursor"><code><span class="field-name">getMouseCursor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMouseCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setMouseCursor"><code><span class="field-name">setMouseCursor</span><span class="parenthesis">(</span><span class="arg-name">cursorType</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMouseCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cursorType` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setNextFrameWantCaptureMouse"><code><span class="field-name">setNextFrameWantCaptureMouse</span><span class="parenthesis">(</span><span class="arg-name">wantCaptureMouse</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setNextFrameWantCaptureMouse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `wantCaptureMouse` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getClipboardText"><code><span class="field-name">getClipboardText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getClipboardText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setClipboardText"><code><span class="field-name">setClipboardText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setClipboardText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadIniSettingsFromDisk"><code><span class="field-name">loadIniSettingsFromDisk</span><span class="parenthesis">(</span><span class="arg-name">iniFilename</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadIniSettingsFromDisk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iniFilename` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadIniSettingsFromMemory"><code><span class="field-name">loadIniSettingsFromMemory</span><span class="parenthesis">(</span><span class="arg-name">iniData</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">iniSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#loadIniSettingsFromMemory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `iniData` | [String](/api-docs/headless/String/) | |
| `iniSize` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="saveIniSettingsToDisk"><code><span class="field-name">saveIniSettingsToDisk</span><span class="parenthesis">(</span><span class="arg-name">iniFilename</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveIniSettingsToDisk"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `iniFilename` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="saveIniSettingsToMemory"><code><span class="field-name">saveIniSettingsToMemory</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">outIniSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#saveIniSettingsToMemory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `outIniSize` | [Int](/api-docs/headless/Int/) | `0` |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="debugTextEncoding"><code><span class="field-name">debugTextEncoding</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debugTextEncoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="debugFlashStyleColor"><code><span class="field-name">debugFlashStyleColor</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debugFlashStyleColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="debugStartItemPicker"><code><span class="field-name">debugStartItemPicker</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debugStartItemPicker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="debugCheckVersionAndDataLayout"><code><span class="field-name">debugCheckVersionAndDataLayout</span><span class="parenthesis">(</span><span class="arg-name">versionStr</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">szIo</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">szStyle</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">szVec2</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">szVec4</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">szDrawvert</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">szDrawidx</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#debugCheckVersionAndDataLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `versionStr` | [String](/api-docs/headless/String/) |
| `szIo` | [Int](/api-docs/headless/Int/) |
| `szStyle` | [Int](/api-docs/headless/Int/) |
| `szVec2` | [Int](/api-docs/headless/Int/) |
| `szVec4` | [Int](/api-docs/headless/Int/) |
| `szDrawvert` | [Int](/api-docs/headless/Int/) |
| `szDrawidx` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="debugLog"><code><span class="field-name">debugLog</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debugLog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setAllocatorFunctions"><code><span class="field-name">setAllocatorFunctions</span><span class="parenthesis">(</span><span class="arg-name">allocFunc</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">freeFunc</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setAllocatorFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `allocFunc` | [Int](/api-docs/headless/Int/) | |
| `freeFunc` | [Int](/api-docs/headless/Int/) | |
| `userData` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getAllocatorFunctions"><code><span class="field-name">getAllocatorFunctions</span><span class="parenthesis">(</span><span class="arg-name">pAllocFunc</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pFreeFunc</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">pUserData</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#getAllocatorFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pAllocFunc` | [Int](/api-docs/headless/Int/) |
| `pFreeFunc` | [Int](/api-docs/headless/Int/) |
| `pUserData` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="memAlloc"><code><span class="field-name">memAlloc</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#memAlloc"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `size` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="memFree"><code><span class="field-name">memFree</span><span class="parenthesis">(</span><span class="arg-name">ptr</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#memFree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ptr` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updatePlatformWindows"><code><span class="field-name">updatePlatformWindows</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePlatformWindows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="renderPlatformWindowsDefaultEx"><code><span class="field-name">renderPlatformWindowsDefaultEx</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">platformRenderArg</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">rendererRenderArg</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#renderPlatformWindowsDefaultEx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `platformRenderArg` | [Int](/api-docs/headless/Int/) | `0` |
| `rendererRenderArg` | [Int](/api-docs/headless/Int/) | `0` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="renderPlatformWindowsDefault"><code><span class="field-name">renderPlatformWindowsDefault</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#renderPlatformWindowsDefault"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroyPlatformWindows"><code><span class="field-name">destroyPlatformWindows</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroyPlatformWindows"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="findViewportByID"><code><span class="field-name">findViewportByID</span><span class="parenthesis">(</span><span class="arg-name">viewportId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a></code><a class="header-anchor" href="#findViewportByID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `viewportId` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findViewportByPlatformHandle"><code><span class="field-name">findViewportByPlatformHandle</span><span class="parenthesis">(</span><span class="arg-name">platformHandle</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/imguijs/ImGuiViewport/" class="type-link">ImGuiViewport</a></code><a class="header-anchor" href="#findViewportByPlatformHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `platformHandle` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imVector_Construct"><code><span class="field-name">imVector_Construct</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#imVector_Construct"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vector` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="imVector_Destruct"><code><span class="field-name">imVector_Destruct</span><span class="parenthesis">(</span><span class="arg-name">vector</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#imVector_Destruct"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `vector` | [Int](/api-docs/headless/Int/) |

