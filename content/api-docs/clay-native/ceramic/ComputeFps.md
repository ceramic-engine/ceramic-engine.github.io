---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ComputeFps
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/ComputeFps/
---

# ComputeFps

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ComputeFps.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ComputeFps</strong> (Class)</div>

A utility class for calculating frames per second (FPS) using a rolling average.

ComputeFps maintains a circular buffer of recent frame times and calculates
the average FPS over a configurable number of frames. This provides a more
stable FPS reading than calculating from individual frame deltas.

## Features

- **Rolling Average**: Smooths out FPS spikes and dips
- **Configurable Window**: Choose how many frames to average
- **Capped Maximum**: FPS capped at 999 to prevent display issues
- **Lightweight**: Minimal memory overhead with fixed buffer

## Usage Example

```haxe
var fpsCounter = new ComputeFps(30); // Average over 30 frames

// In your update loop
function update(delta:Float) {
    fpsCounter.addFrame(delta);
    trace('Current FPS: ' + fpsCounter.fps);
}
```

<div class="see"><strong>See:</strong> ceramic.App#fps For the engine's built-in FPS counter</div>


## Instance Members

<div class="signature field-var has-description" id="fps"><code><span class="field-name">fps</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#fps"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current calculated frames per second.

This value is updated each time addFrame() is called and represents
the average FPS over the last 'size' frames. Read-only from outside
the class.

Range: 0-999

<hr class="field-separator" />

<div class="signature field-method has-description" id="addFrame"><code><span class="field-name">addFrame</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFrame"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Records a frame and updates the FPS calculation.

Call this method once per frame with the time elapsed since the last frame.
The FPS value is automatically updated based on the rolling average of
recent frame times.



| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-native/Float/) | Time elapsed since last frame in seconds (e.g., 0.016 for 60 FPS) * ```haxe // In your game loop var lastTime = Timer.now(); * function update() { var currentTime = Timer.now(); var delta = currentTime - lastTime; lastTime = currentTime; * fpsCounter.addFrame(delta); // fpsCounter.fps now contains updated FPS } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">10</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new FPS calculator.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `size` | [Int](/api-docs/clay-native/Int/) | `10` | Number of frames to use for the rolling average. Larger values provide smoother results but slower response to FPS changes. Default: 10 * ```haxe // Quick response (10 frames) var fpsFast = new ComputeFps(10); * // Smooth reading (60 frames) var fpsSmooth = new ComputeFps(60); ``` |

## Private Members

<div class="signature field-var has-description" id="frames"><code><span class="field-name">frames</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#frames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Circular buffer storing recent frame delta times.
Size is fixed at construction.

<hr class="field-separator" />

<div class="signature field-var has-description" id="index"><code><span class="field-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current position in the circular buffer.
Wraps around when reaching the buffer size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of frames to average over.
Larger values provide more stable readings.

