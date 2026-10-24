---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiIniSettings
target: Clay (Web)
permalink: api-docs/clay-web/imgui/ImGuiIniSettings/
---

# ImGuiIniSettings

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/ImGuiIniSettings.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.ImGuiIniSettings</strong> (Class)</div>

Where (and whether) Dear ImGui persists window layout.

By default ImGui reads and writes `imgui.ini` in the **process working
directory** — which on a packaged app means inside the bundle, and on web
means nowhere useful. `io.IniFilename` cannot be set from the portable API
(it is a `const char*` whose storage ImGui keeps a pointer to), hence this
helper: it owns the string on the native side.

An app that persists the layout itself (through its own storage, a database,
a game engine's save system...) calls `disable()` once at startup and then
uses `ImGui.saveIniSettingsToMemory()` / `ImGui.loadIniSettingsFromMemory()`.
With ini file IO off, ImGui raises `io.wantSaveIniSettings` when the layout
changed and there is something worth saving.

## Static Members

<div class="signature field-method has-description" id="disable"><code><span class="field-name">disable</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Turn off ImGui's own ini file reading and writing. Layout then only
persists if the app saves it (see `ImGui.saveIniSettingsToMemory`).

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFilename"><code><span class="field-name">setFilename</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFilename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Point ImGui's ini file at an explicit path (it then loads it on the next
frame and saves it on its own, every `io.iniSavingRate` seconds).

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

