---
layout: guides
category: guides
menu: Handbook
title: Visuals
permalink: guides/visuals/
---
# Visuals

Anything displayed on screen via Ceramic is a `Visual` object.

A summary:

* Every `Visual` is also an `Entity` object and inherits [all its properties](/guides/entities/#so-what-is-really-an-entity).

* The `Visual` base class doesn't display anything in itself. To display some content, you'd use specialized visuals like `Quad`, `Mesh` or `Text` (they all are `Visual` subclasses).

* It has a size (`width`, `height`), a position (`x`, `y`).

* Visuals can be nested to create a display tree. A `Visual` object can also be used as a container of other specialized visuals (see [Visual.add()](/api-docs/ceramic/Visual.html#add)).

* A visual can be interactive using the `pointerDown`, `pointerUp`, `pointerOver` events it provides (see the [interactions](#interacting-with-visuals-using-events) part below).

* Go take a look at the `Visual` [API Docs](/api-docs/ceramic/Visual.html).

## Built-in visuals

Following is a (non exhaustive) list of some built-in specialized visuals available in Ceramic.

### Quad

`Quad` object is so far the most basic and common specialized visual to display:

![Yellow square window](/static/img/yellow-square-window.png)

It allows you to display squares, rectangles and can be textured. Quads are used a lot by Ceramic internally to provide more advanced visuals.

<p class="extra-info">In the getting started section, we already showcased you how to <a href="/guides/display-a-square/">display a square</a> with a <code>Quad</code>, as well as how to <a href="/guides/display-an-image/">display an image</a> with it. Feel free to give it another read if needed!</p>

### Mesh

Sometimes, using quads is not sophisticated enough to display what you need. Indeed, a quad is always shaped as a rectangle. What if you want to display a different shape, or move the points of a rectangle at more arbitrary positions?

Good news, you can use a mesh! `Mesh` object is useful to display anything composed of 2D triangles (textured or not). You can see how it works in the [2D Mesh](/examples/mesh-2d/) example. You give it vertex and indices arrays and you are good to go!

Meshes are also good building blocks for advanced 2D visuals. Look at the [Spine animations](/examples/spine-raptor/) example. The specialized `Spine` object used to display the animation is actually using a lot of `Mesh` objects internally, allowing to display _textured meshes_ and animate them with _mesh deformation_. What will you build yourself with `Mesh` objects 🙂?

### Text

Ceramic got you covered to display text! It works with bitmap fonts and supports [MSDF](https://github.com/Chlumsky/msdfgen) rendering, making it pretty efficient for common and real-time use cases! Read more about it in the [Text](/guides/text/) guide.

### Scene

A `Scene` is a special kind of visual that provides its own lifecycle and automatically calls methods like `preload()`, `create()` or `update()`. It's an important building block to structure your app. Our [Display a square](/guides/display-a-square/) and [Display an image](/guides/display-an-image/) guides were already using a scene and showcasing how to preload assets in the `preload()` method. Many of the [available examples](/examples/) are also using scenes and its `preload` feature. Check them out!

## Interacting with visuals using events

Remember the previous guide about [events](/guides/events/) on entities? The `Visual` class (an `Entity` subclass) comes with built-in events to interact with it (`pointerDown`, `pointerUp`, `pointerOver`). Those built-in events are available on all visuals!

<div class="codename">A simple example of how to interact with a visual</div>

```haxe
// Create some visual
var visual = new Visual();
visual.pos(20, 20);
visual.size(200, 300);
add(visual);

// Log a message when touching the visual
visual.onPointerDown(this, info -> {
    trace('Touched visual, with info: $info');
});
```

Not too difficult, right?

Take a look at another slightly more advanced example: [how to drag a quad](/examples/quad-drag/).

You can see that it is a `Scene` binding one of its methods (`quadDown()`) to the quad's built-in `pointerDown` event. That scene is providing itself (`this`) as owner, like we explained in the events guide. Then when we touch/click the quad, that `pointerDown` event is fired by the quad and the drag logic can be executed (taking advantage of other events, like the `pointerMove` event from the `screen` object).
