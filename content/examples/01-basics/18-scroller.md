---
layout: examples
category: examples
menu: Basics
title: Scroller
permalink: examples/scroller/
sample: scroller
description: A scrollable list with drag, momentum, bounce and mouse wheel support, using the Scroller visual.
---

A scrollable list with drag, momentum, bounce and mouse wheel support, using the `Scroller` visual.

```haxe
// The content visual holds everything that will be scrolled
var content = new Visual();
content.size(listWidth, itemCount * itemHeight);
// ... add items to content ...

// The scroller displays a viewport over its content, handling
// drag, momentum, bounce and mouse wheel for us
var scroller = new Scroller(content);
scroller.size(listWidth, height);
add(scroller);
```

Note that a `Scroller` doesn't clip its content by default: to keep the scrolled items from leaking outside the viewport, clip it with an (invisible) visual covering the scroller area:

```haxe
var clipQuad = new Quad();
clipQuad.visible = false;
clipQuad.pos(scroller.x, scroller.y);
clipQuad.size(scroller.width, scroller.height);
add(clipQuad);
scroller.clip = clipQuad;
```
