---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableMouseButton
target: Unity
permalink: api-docs/unity/ceramic/scriptable/ScriptableMouseButton/
---

# ScriptableMouseButton

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableMouseButton.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableMouseButton</strong> (Class)</div>

Scriptable wrapper for MouseButton to expose mouse button constants to scripts.

This class provides constants representing different mouse buttons that can be
detected in user input handling. In scripts, this type is exposed as
`MouseButton` (without the Scriptable prefix).

These constants are used with mouse input events to determine which button
was pressed, released, or is being held down.

## Usage in Scripts

```haxe
// Handle mouse events
screen.onPointerDown(this, function(info) {
    if (info.button == MouseButton.LEFT) {
        trace("Left mouse button pressed");
    } else if (info.button == MouseButton.RIGHT) {
        trace("Right mouse button pressed");
    }
});

// Check multiple buttons
screen.onPointerMove(this, function(info) {
    if (info.buttonId == MouseButton.LEFT) {
        trace("Dragging with left button");
    }
});

// Handle middle button for panning
if (info.button == MouseButton.MIDDLE) {
    startPanning();
}
```

## Button Types

- **NONE**: No button pressed (value: 0)
- **LEFT**: Primary button, typically left click (value: 1)
- **MIDDLE**: Middle button/scroll wheel click (value: 2)
- **RIGHT**: Secondary button, typically right click (value: 3)
- **EXTRA1**: Additional button 4 (gaming mice)
- **EXTRA2**: Additional button 5 (gaming mice)

<div class="see"><strong>See:</strong> ceramic.MouseButton The actual implementation, ceramic.TouchInfo For mouse/touch event data</div>


## Static Members

<div class="signature field-var has-description" id="NONE"><code><span class="field-name">NONE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

No mouse buttons

<hr class="field-separator" />

<div class="signature field-var has-description" id="LEFT"><code><span class="field-name">LEFT</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LEFT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Left mouse button

<hr class="field-separator" />

<div class="signature field-var has-description" id="MIDDLE"><code><span class="field-name">MIDDLE</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MIDDLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Middle mouse button

<hr class="field-separator" />

<div class="signature field-var has-description" id="RIGHT"><code><span class="field-name">RIGHT</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#RIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right mouse button

<hr class="field-separator" />

<div class="signature field-var has-description" id="EXTRA1"><code><span class="field-name">EXTRA1</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EXTRA1"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra button pressed (4)

<hr class="field-separator" />

<div class="signature field-var has-description" id="EXTRA2"><code><span class="field-name">EXTRA2</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EXTRA2"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extra button pressed (5)

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

