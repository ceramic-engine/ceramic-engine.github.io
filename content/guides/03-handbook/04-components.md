---
layout: guides
category: guides
menu: Handbook
title: Components
permalink: guides/components/
---
# Components

The `Component` interface helps you extend your `Entity` objects with additional features using composition.

A few examples of things you can do with components:

- A component that can rotate any visual.
- A component that provides advanced click interaction to any visual.
- A component that allows to attach game-specific data and logic to an entity.

What's interesting about `components` is how flexible they are: instead of using strict inheritance to extend your objects, which can make your app too rigid and difficult to modify when new situations arise, you can attach your components to your entities at runtime. If done properly, a component can be compatible with many different entities, which encourages code reusability while still keeping the project as flexible as possible: you don't need to make all your object inherit from the same subclass to make them share the same feature. Instead, just attach a `component`!

## Your first component

Let's get right to it and create our first component:

<div class="codename">MyComponent.hx</div>

```haxe
import ceramic.Entity;
import ceramic.Component;

class MyComponent extends Entity implements Component {

    function bindAsComponent() {

        trace('Hello from my component!');

    }

}
```

This component is not doing much except logging a message, but here's what to say about it:

- To be a valid component, the class implements the `Component` interface and the `bindAsComponent()` method.

- The `bindAsComponent()` method is called when the `component` is attached to an `entity`.

- The class must be a subclass of `Entity`, that is: every `component` is also an `entity`. That said, it does not need to be a direct subclass of `Entity`. You could turn a `Visual` into a component as well because `Visual` also inherits from `Entity`.

### Attaching the component to an entity

Your `component` won't do anything until it is attached to an `entity`. Here's how you do it:

<div class="codename">Attaching a component to an entity</div>

```haxe
// Create an entity
var someEntity = new Entity();

// Create a component
var myComponent = new MyComponent();

// Attach the component to the entity
// under the key: 'myComponent'
someEntity.component('myComponent', myComponent);
```

Because we attached the component to our entity, it's `bindAsComponent()` method is called, and you should see this log in the console:

```text
Hello from my component!
```

You can also get your component instance back at any time with the key you used to attach it:

```haxe
var myComponent:MyComponent;

// Get the component instance attached to the entity
myComponent = cast someEntity.component('myComponent');
```

<p class="extra-info">Good to know: when an <code>entity</code> is destroyed, any <code>component</code> attached to it will be destroyed as well.</p>

<p class="extra-info">Also: you can attach as many <code>components</code> as you want to an <code>entity</code>, but a <code>component</code> can only be attached to one <code>entity</code>.</p>

## A concrete example

This is nice and all, but that first component is not very useful right? Let's create a more meaningful `component`, one that can rotate any visual!

<iframe src="https://ceramic-engine.com/ceramic-samples/visual-component" width="640" height="480" loading="lazy" frameborder="0"></iframe>

Here is the component that makes this visual rotate:

<div class="codename">RotateVisual.hx</div>

```haxe
import ceramic.Visual;
import ceramic.Entity;
import ceramic.Component;
import ceramic.Timer;

/**
 * An example of component that creates a rotating
 * animation with the visual attached to it
 */
class RotateVisual extends Entity implements Component {

    /**
     * This will be the visual we attached to
     */
    @entity var visual:Visual;

    /**
     * The duration of each rotation
     */
    public var duration:Float;

    /**
     * The pause between each rotation
     */
    public var pause:Float;

    public function new(
        duration:Float = 2.0, pause:Float = 1.0) {

        super();

        this.duration = duration;
        this.pause = pause;

    }

    function bindAsComponent() {

        // Start rotating when the component
        // is attached to a visual
        rotateOnce();

    }

    function rotateOnce() {

        // Animate rotation
        visual.tween(
            ELASTIC_EASE_IN_OUT, duration, 0, 360,
            (value, time) -> {
                visual.rotation = value;
        })
        // And repeat
        .onceComplete(this, () -> {
            Timer.delay(this, pause, rotateOnce);
        });

    }

}
```

### The `@entity` meta

You may have noticed that our `visual` field has an `@entity` meta. This is needed to tell this component's entity is typed as a `Visual` and will be kept under the `visual` field. Once `bindAsComponent()` has been called, that `visual` field will be the visual this component is attached to!

<p class="extra-info">By default, if you don't provide any field with <code>@entity</code> meta in your <code>Component</code> class, the entity the component is attached to will be accessible under the <code>entity</code> field, and it's type will be <code>Entity</code>.</p>

### An excercise for you

Now that you have that `RotateVisual` component around, try to use it on a visual, it could be any visual, like a `Quad`, or a `Text` instance! Give it a try and play with it:

```haxe
var rotateVisual = new RotateVisual();
someVisual.component('rotateVisual', rotateVisual);
```

You can take a look at [a complete example here](/examples/visual-component).

## Statically typed components

Until now, we attached components dynamically with the following syntax:

```haxe
entity.component('myComponent', myComponent);
```

This is convenient because it is all dynamic and allows to assign components at runtime without much restrictions.

That said, there may be some cases where you want to always have the same component attached to a class and would rather just access it with a field (without needing a `cast`). Good news, you can do that with the `@component` meta.

Back with our `RotateVisual` component, we could actually have a custom `Visual` subclass that always has this component attached to it:

```haxe
import ceramic.Visual;

class MyCustomVisual extends Visual {

    @component public var rotateVisual = new RotateVisual();

    public function new() {

        super();

    }

}
```

When using components this way, you can access it in a more natural way:

```haxe
// Create a new instance of our custom visual
var visual = new MyCustomVisual();

// Change the pause time of the `RotateVisual` component
visual.rotateVisual.pause = 5.0;
```

Depending on the use case, you may prefer this syntax or the dynamic one!

<p class="extra-info">In general, the dynamic syntax will be useful if you want to extend Ceramic's built-in entities and visuals with <code>components</code> but don't want to create a custom subclass for that. On the other hand, the static syntax is handy when you are writing you own specialized entities and visuals and know which <code>components</code> you need to attach to them already.</p>

## More examples of components

Ceramic comes with some built-in components. You could take a look at [the Click component](https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Click.hx), which adds advanced click interactions to any `Visual`: it can detect when a `pointerDown` event becomes an actual click or if it should be ignored if it looks more like a drag.

<div class="codename">Using the Click component</div>

```haxe
// Create click component
var click = new Click();

// Attach the click component to a visual
someVisual.component('click', click);

// Listen to the component's `click` event
click.onClick(this, () -> {
    // Clicked on visual!
});
```

The `StateMachine` class provided by Ceramic is also a `component`, but that class alone deserves a dedicated guide! (_soon_ 🤞)!

<p class="extra-info">A note about <code>ECS</code>: Ceramic's <code>entity-component</code> architecture is not an <code>ECS</code> (<code>entity-component-system</code>) implementation. In Ceramic, you can use <code>components</code> to store additional data, but also add game logic to entities if you want. Nothing is strictly enforced.</p>

<p class="extra-info">If you still want to get closer to an <code>ECS</code> implementation, Ceramic provides the <code>System</code> class you can inherit from to create more central pieces of code that manage groups of entities. Take a look at the <a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/arcade/runtime/src/ceramic/ArcadeSystem.hx">ArcadeSystem</a> or <a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/sprite/runtime/src/ceramic/SpriteSystem.hx">SpriteSystem</a> classes to see concrete examples (a proper guide about systems is planned).</p>

### What now?

You did a small tour around `components`, so next time you think of writing a _reusable_ piece of code in your Ceramic project, consider using the `Component` interface! You might be surprised by how flexible it can be 😊. That is all for now!
