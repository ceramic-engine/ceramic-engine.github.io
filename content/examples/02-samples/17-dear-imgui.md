---
layout: examples
category: examples
menu: Samples
title: Dear ImGui
permalink: examples/dear-imgui/
sample: dear-imgui
description: The Dear ImGui demo window, ported to Haxe, running on top of a ceramic scene with the imgui plugin.
---

[Dear ImGui](https://github.com/ocornut/imgui) running on top of a ceramic scene with the `imgui` plugin. The demo window displayed here is the **Haxe port** of the famous `imgui_demo.cpp` (`imgui.demo.ImGuiDemo`): the exact same code runs natively (C++), on web (wasm) and on Unity (C#).

Just enabling the `imgui` plugin already gives a clean look: the Roboto-Medium font (with a CJK fallback) and a dark blue theme are the plugin defaults, so this sample needs no font file, no theme call and no extra configuration.

```haxe
override function update(delta:Float) {

    // Any ImGui call can be done in update()
    imgui.demo.ImGuiDemo.showDemoWindow();

    // Or build your own UI
    if (ImGui.begin('My window')) {
        ImGui.text('Hello from ceramic!');
        if (ImGui.button('Click me')) {
            trace('Clicked!');
        }
    }
    ImGui.end();

}
```

The **Ceramic visuals** window shows the other direction: ceramic visuals rendered offscreen and displayed **inside the ImGui layout** with `ceramic.ImGuiVisuals` — still animated, and still receiving ceramic pointer events:

```haxe
ImGui.text('Spinning quad:');
ceramic.ImGuiVisuals.visual(spinningQuad);

if (ceramic.ImGuiVisuals.visualButton('##btn', buttonQuad)) {
    trace('Button clicked!');
}
```
