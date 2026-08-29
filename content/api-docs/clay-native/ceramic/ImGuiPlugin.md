---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui
title: ImGuiPlugin
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ImGuiPlugin/
---

# ImGuiPlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/imgui/runtime/src/ceramic/ImGuiPlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ImGuiPlugin</strong> (Class)</div>

Plugin that integrates Dear ImGui (immediate mode GUI) into Ceramic.

Dear ImGui is a bloat-free graphical user interface library for C++.
It outputs optimized vertex buffers that you can render anytime in your
3D-pipeline enabled application. It is fast, portable, renderer agnostic
and self-contained (no external dependencies).

This plugin provides:
- Automatic initialization of ImGui context
- Platform-specific backends (C++/OpenGL for native, JavaScript/WebGL for web)
- Optional custom font loading via `imgui_font` define
- Frame lifecycle management through ImGuiSystem

Usage:
```haxe
// In ceramic.yml:
plugins:
  - imgui

// Optionally specify a custom font (raw TTF bytes; use a `.bin` suffix
// so the font plugin does not transform the file into a bitmap font):
defines:
  imgui_font: "MyFont.ttf.bin"
  imgui_font_fallback: "MyFallbackFont.ttf.bin" # optional, merged glyphs (e.g. CJK)

// In your code:
import imguicpp.ImGui; // or imguijs.ImGui for web

// ImGui calls are made between newFrame() and endFrame()
// which are handled automatically by ImGuiSystem
override function update(delta:Float):Void {
    ImGui.begin("My Window");
    ImGui.text("Hello from ImGui!");
    ImGui.end();
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/ImGuiSystem/">ImGuiSystem</a>, https://github.com/ocornut/imgui</div>


## Private Members

<div class="signature field-method has-description has-plugin" id="pluginInit"><div class="plugin-name">imgui</div><code><span class="field-name">pluginInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pluginInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Plugin initialization entry point.
Called automatically when the plugin is loaded.
Sets up font loading (if specified) and registers the ImGui loader.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initImGui"><div class="plugin-name">imgui</div><code><span class="field-name">initImGui</span><span class="parenthesis">(</span><span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initImGui"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the ImGui system.
This is registered as a loader to ensure ImGui is ready before the app starts.


| Name | Type | Description |
|------|------|-------------|
| `done` | Function | Callback to invoke when ImGui is fully initialized |

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | ceramic.App |

