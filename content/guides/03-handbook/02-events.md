---
layout: guides
category: guides
menu: Handbook
title: Events
permalink: guides/events/
---
# Events

Every entity in Ceramic implements the `Events` interface, making it compatible with Ceramic **events syntax**.

## How to create events?

Let's imagin a silly example in a restaurant with a `kitchen` and a `waiter`. The waiter is waiting for the kitchen to have a dish ready to serve. When a dish is ready, we want the `kitchen` to fire the `dishReady` event so that the `waiter` can serve that dish.

In Ceramic, that can be done with classes that inherit from `Entity` and custom events. First, let's create a `Kitchen` entity class and add that `dishReady` event declaration inside:

<div class="codename">Kitchen.hx</div>

```haxe
import ceramic.Entity;
import ceramic.Timer;

class Kitchen extends Entity {

    /**
     * A custom `dishReady` event that
     * accepts a dish name (`String`) parameter.
     */
    @event function dishReady(name:String);

}
```

<p class="extra-info">That's it: to add a custom event to an <code>Entity</code> subclass, you simply need to write a <code>function</code> declaration prefixed with the <code>@event</code> metadata like in the example above.</p>

Under the hood, and thanks to the powerful Haxe macro system, Ceramic automatically generates methods at compile-time from this single `dishReady` event declaration. Here is what it will provide:

<table>
    <tr>
        <td><code>onDishReady(owner, callback)</code></td>
    </tr>
    <tr>
        <td>Bind a <code>callback</code> that will be called everytime the <code>dishReady</code> event is fired.</td>
    </tr>
</table>

<table>
    <tr>
        <td><code>onceDishReady(owner, callback)</code></td>
    </tr>
    <tr>
        <td>Bind a <code>callback</code> that will be called one time, next time the <code>dishReady</code> event is fired (same as <code>onDishReady</code> except that the callback is garanteed to be called only once and then unbound).</td>
    </tr>
</table>

<table>
    <tr>
        <td><code>offDishReady(?callback)</code></td>
    </tr>
    <tr>
        <td>Unbind the given <code>callback</code> that was previously bound to the <code>dishReady</code> event, or unbind all callbacks bound to the <code>dishReady</code> event if no specific <code>callback</code> argument is provided.</td>
    </tr>
</table>

<table>
    <tr>
        <td><code>listensDishReady()</code></td>
    </tr>
    <tr>
        <td>Returns <code>true</code> if there is any callback bound and listening to the <code>dishReady</code> event, <code>false</code> otherwise.</td>
    </tr>
</table>

<table>
    <tr>
        <td><code>emitDishReady(name)</code></td>
    </tr>
    <tr>
        <td>Emit the <code>dishReady</code> event. This method is usually called from inside the class that have the event declaration.</td>
    </tr>
</table>

<p class="extra-info">You don't know what the <code>owner</code> argument is about yet? No worries, we'll get back to it just below!</p>

<p class="extra-info"><strong>Good to know:</strong> Because all these event-related methods are generated at compile time, they don't require dynamic access. Everything is statically typed and quite efficient. You can create and use a lot of events in Ceramic without worrying too much about performance penalties. Thanks Haxe and its compile-time macros!</p>

## Listening to an event

Here we are, we have a `Kitchen` class with a `dishReady` event. Now, we still need to create a `Waiter` class that listens to the event from the `Kitchen` class.

Let's add this `Waiter` class with a constructor that takes a `kitchen` as parameter. It will listen to that kitchen and wait for `dishReady` events to be emitted.

<div class="codename">Waiter.hx</div>

```haxe
import ceramic.Entity;

class Waiter extends Entity {

    public function new(kitchen:Kitchen) {
        super();

        // Listen to `dishReady` event and call
        // `serveDish()` everytime the event is fired
        kitchen.onDishReady(this, serveDish);
    }

    function serveDish(name:String) {
        trace('The waiter served the dish: ' + name);
    }

}
```

Let's modify `Kitchen` class so that it will emit the `dishReady` event with a random dish name at a regular interval:

<div class="codename">Kitchen.hx</div>

```haxe
import ceramic.Entity;
import ceramic.Timer;
import ceramic.ReadOnlyArray;

using ceramic.Extensions;

class Kitchen extends Entity {

    /**
     * A list of available dishes
     */
    static final AVAILABLE_DISHES:ReadOnlyArray<String> = [
        'Pizza', 'Tiramisu', 'Pasta', 'Gelato'
    ];

    /**
     * A custom `dishReady` event that
     * accepts a dish name (`String`) parameter.
     */
    @event function dishReady(name:String);

    /**
     * Constructor
     */
    public function new() {
        super();

        // Finish a dish every 1 second
        Timer.interval(this, 1.0, finishDish);
    }

    function finishDish() {

        // Pick a dish name randomly
        var name = AVAILABLE_DISHES.randomElement();

        // Emit the `dishReady` event with that name
        emitDishReady(name);

    }

}
```

### About `this` and the `owner` argument

Why to we pass `this` as first argument of `kitchen.onDishReady(this, ...)`, as well as `Timer.interval(this, ...)`?

It is the `owner` argument: most methods provided by Ceramic API that take a callback as argument, which is expected to be called later, also accept a first argument: the `owner` of the binding. An `owner` is an `Entity` instance that _owns_ the binding (here, a binding is an assignation of a callback to an event, a timer...). What does it mean in practice? It means that if that owner is `destroyed`, the binding is removed safely and automatically.

In our example with `kitchen.onDishReady(this, ...)`, if our `Waiter` instance (which is an `Entity` subclass) is `destroyed` (via the `destroy()` method), the binding to the `dishReady` event will be removed automatically. This mecanism ensures there won't be any memory leak because an entity is accidentally retained by another object. The binding will also be removed if the `kitchen` object is `destroyed`, not because it is the owner (it is not), but because it is the object emitting the event so destroying that object will remove any possibility of the `dishEvent` from being emitted anyway and make the related bindings irrelevant. It also prevents any risk of memory leak as well: the `kitchen` object won't be accidentally retained by the `Waiter` instance, thanks to the binding being safely removed.

Similar rules apply to the `Timer.interval(this, ...)` binding: if the `owner` (`this`) is `destroyed`, it will be unplugged from the `Timer` class safely and the callback won't be accidentally called.

<p class="extra-info">In practice, the <code>owner</code> of a binding to an event, a timer etc... should be the object than contains the method that will be called as callback. It ensures that when the owner is <code>destroyed</code>, its methods won't be accidentally called later by a fired event from another object, everything is unplugged correctly and safely. You'll often simply use <code>this</code> as owner if your callback is a method of the current class anyway, like in our <code>Waiter</code> class example.</p>

These rules might be a bit uneasy to grasp at first, but they are not very complicated. Don't hesitate to read the previous paragraphs again to understand correctly!

### Better together

Alright, we have a `Kitchen` and a `Waiter` class, but at the moment, nothing will happen until we instanciate and plug these objects together. let's do it:

```haxe
// Nothing very difficult here,
// We first create a kitchen
var kitchen = new Kitchen();
// Then we create a waiter for that kitchen
var waiter = new Waiter(kitchen);
```

That is all! You can try to create this kitchen and waiter logic in a test project to see it work for real. If everything goes well, you should see logs similar to this appear at regular intervals:

```bash
The waiter served the dish: Pasta
The waiter served the dish: Tiramisu
The waiter served the dish: Tiramisu
The waiter served the dish: Pizza
```

To test the behaviour we explained in the `owner`/`this` section, you can try to destroy either the `kitchen` or the `waiter` object, after some time.
You should notice that the logs will stop as soon as one of the two objects of the binding is `destroyed`.

<div class="codename">Destroy the kitchen after 10 seconds</div>

```haxe
Timer.delay(kitchen, 10, kitchen.destroy);
```

<div class="codename">Destroy the waiter after 15 seconds</div>

```haxe
Timer.delay(waiter, 15, waiter.destroy);
```

<p class="extra-info">Look how we used the <code>owner</code> argument this time: the owner is the object having the method that will be called as callback by <code>Timer</code>, so the <code>owner</code> is the <code>kitchen</code> object if we bind the <code>destroy()</code> method from that <code>kitchen</code> object. It is the <code>waiter</code> object if we bind the <code>destroy()</code> method of that <code>waiter</code> object. In case the owner was destroyed before the timer delay has passed, the callback wouldn't be called at all. Basically, when you <code>destroy</code> an <code>entity</code>, you are sure that Ceramic events and timer bindings are removed and no method you previously assigned as callback will be called anymore!</p>

You now know how to create `entities`, add custom events to them and make other entities listen to these events. Continue reading to learn more about the `Visual` class, an important type in Ceramic that inherits from `Entity` and provides its own built-in events.
