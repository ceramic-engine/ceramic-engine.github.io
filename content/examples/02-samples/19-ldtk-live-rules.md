---
layout: examples
category: examples
menu: Samples
title: LDtk Live Rules
permalink: examples/ldtk-live-rules/
sample: ldtk-live-rules
description: Paint the IntGrid of an LDtk level and watch its auto-layers being recomputed at runtime, with the same rule engine as the LDtk editor.
---

<p class="extra-info">Click and drag on the level to paint the selected value, right click to erase a cell. To erase by dragging, select the <code>Empty</code> value (key <code>0</code>) and paint with the left button.</p>

<p class="extra-info">Check the <a href="/examples/ldtk-level">LDtk Level sample</a> first if you don't know how to display an LDtk level.</p>

This sample loads an [LDtk](https://ldtk.io) level and lets you edit its **IntGrid** layer. Every change recomputes the **auto-layers** at runtime with `ceramic.LdtkRuleRunner`, which uses the same rule engine as the LDtk editor (`ldtk.rules`): the tiles you get are exactly the ones the editor would produce.

The panel lets you pick the value to paint, switch between brush and fill, toggle rule groups, roll a new random seed, undo or redo, and shows how long each recompute took. The **Editor parity** line checks that the runtime result matches the tiles saved by the editor.

```haxe
// Change an IntGrid value
intGridLayer.setIntGrid(cx, cy, 1);

// Recompute every auto-layer reading this IntGrid,
// and update the tilemap displaying the level
LdtkRuleRunner.refreshAutoLayersUsingSource(level, intGridLayer, tilemap);
```

By default, only the cells around the changes are recomputed (`incremental`), which gives the same tiles as a full recompute while staying fast enough to repaint the level at every frame.
