---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Velocity
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Velocity/
---

# Velocity

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Velocity.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Velocity</strong> (Class)</div>

A velocity tracker that calculates speed based on position changes over time.

This class tracks position samples over a time window and calculates velocity
based on the distance traveled divided by the elapsed time. It's commonly used
for touch/drag interactions to determine fling velocity or for any motion
that needs velocity tracking.

The tracker automatically prunes old samples outside a 150ms window to ensure
velocity calculations remain responsive to recent motion.

Example usage:
```haxe
var velocity = new Velocity();

// During drag/motion updates
velocity.add(currentPosition);

// When motion ends
var speed = velocity.get(); // pixels per second

// Apply inertia based on velocity
if (Math.abs(speed) > threshold) {
    startInertiaAnimation(speed);
}
```

## Instance Members

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reset the velocity tracker, clearing all position and time samples.
After calling this, get() will return 0 until new samples are added.

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minusDelta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add a position sample to the velocity tracker.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `position` | [Float](/api-docs/clay-web/Float/) | | The current position value (e.g., x or y coordinate)  |
| `minusDelta` | [Float](/api-docs/clay-web/Float/) | `0` | Optional time offset in seconds to subtract from the current time. Useful when the position data is slightly delayed. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculate the current velocity based on recent position samples.

The velocity is calculated as the distance between the first and last samples
divided by the time elapsed, using samples from the last 150ms.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-web/Float/) | The velocity in units per second (e.g., pixels per second). Returns 0 if there are fewer than 2 samples. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new velocity tracker.

## Private Members

<div class="signature field-var has-description" id="positions"><code><span class="field-name">positions</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#positions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array storing position samples.

<hr class="field-separator" />

<div class="signature field-var has-description" id="times"><code><span class="field-name">times</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#times"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array storing the time (in seconds) when each position was recorded.

<hr class="field-separator" />

<div class="signature field-method has-description" id="prune"><code><span class="field-name">prune</span><span class="parenthesis">(</span><span class="arg-name">expireTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#prune"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove position samples older than the specified time.
This keeps the velocity calculation based on recent motion only.



| Name | Type | Description |
|------|------|-------------|
| `expireTime` | [Float](/api-docs/clay-web/Float/) | The time threshold - samples older than this are removed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a string representation of the current velocity.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The current velocity as a string |

