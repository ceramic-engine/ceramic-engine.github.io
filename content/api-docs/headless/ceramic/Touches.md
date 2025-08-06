---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Touches
target: Headless
permalink: api-docs/headless/ceramic/Touches/
---

# Touches

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Touches.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Touches</strong> (Abstract)</div>

A collection of active touch points for multi-touch handling.

Touches provides an efficient way to access and iterate over all
current touch points on the screen. It's implemented as an abstract
over IntMap for performance, mapping touch indices to Touch objects.

This collection is typically accessed through screen.touches and is
automatically updated by the input system.

Example usage:
```haxe
// Access a specific touch by index
var touch = screen.touches.get(0);

// Iterate over all active touches
for (touch in screen.touches) {
    trace('Touch ${touch.index} at ${touch.x}, ${touch.y}');
}
```

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Touch/">Touch</a>, <a href="/api-docs/headless/ceramic/Screen/">Screen</a>, <a href="/api-docs/headless/ceramic/TouchesIterator/">TouchesIterator</a></div>


