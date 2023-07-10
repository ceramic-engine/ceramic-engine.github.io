---
layout: guides
category: guides
menu: Handbook
title: Systems
permalink: guides/systems/
---
# Systems

The `System` class is another way to structure your app. It can help you manage key mechanics and concepts of your app.

## Basic example

Here's an example of system not doing much, but giving you the basic structure:

<div class="codename">An example of <code>System</code> subclass</div>

```haxe
import ceramic.System;

/**
 * Just an example of `System` subclass
 */
class MySystem extends System {

    /**
     * A shared instance of `MySystem` so you can
     * get the system with `MySystem.shared` from anywhere.
     */
    @lazy public static var shared = new MySystem();

    public function new() {
        super();

        // Values to tell when this system's
        // `earlyUpdate()` and `lateUpdate()`
        // methods will be called compared to
        // other systems. Lower values make the
        // methods run earlier than higher values.
        earlyUpdateOrder = 10000;
        lateUpdateOrder = 10000;
    }

    override function earlyUpdate(delta:Float):Void {
        // Do something at early update stage
        // (called at each frame)
    }

    override function lateUpdate(delta:Float):Void {
        // Do something at late update stage
        // (called at each frame)
    }
}
```

`System` classes are pretty simple: they are entity objects that have their `earlyUpdate()` and `lateUpdate()` methods called automatically by Ceramic, depending on the `earlyUpdateOrder` and `lateUpdateOrder` values.

<p class="extra-info">The <code>@lazy</code> meta makes the field <em>lazy loaded</em>. The assigned value <code>new MySystem()</code> won't be evaluated until the first access of the field. That means the shared system instance will be created the first time we use something like: <code>var mySystem = MySystem.shared</code>.</p>

## Built-in system events

`System` classes have built-in events that allow to bind external code _right before_ or _right after_ `earlyUpdate()` and `lateUpdate()` calls:

<div class="codename">Binding to system update events</div>

```haxe
var system = new System();

// Here we created a raw system instance,
// but we could also do the following with
// any other existing `System` subclass instance.
// example: var system = MySystem.shared;

system.earlyUpdateOrder = 12345;
system.lateUpdateOrder = 12345;

system.onBeginEarlyUpdate(this, delta -> {
    trace('begin early update');
});

system.onEndEarlyUpdate(this, delta -> {
    trace('end early update');
});

system.onBeginLateUpdate(this, delta -> {
    trace('begin late update');
});

system.onEndLateUpdate(this, delta -> {
    trace('end late update');
});
```

## When and how to use systems?

It is up to you how you'd want to use **systems** in your code. Here are some ideas:

- Centralize into `System` subclasses the main mechanics of your game, like `LevelSystem`, `ScoreSystem`, `LeaderboardSystem` etc...

- When you need to update a large group of objects at each frame, using `System`'s `earlyUpdate()` or `lateUpdate()` methods is a good alternative to binding to `app.update` event on each of your objects. Plus it gives you more control to when your update logic is executed relative to other systems, thanks to `earlyUpdateOrder` and `lateUpdateOrder` values.

- If you like **ECS**, you can architecture your code in the **Entity-Component-System** fashion, where most code logic is located in `System` classes, and most data in `Component` classes.

<p class="extra-info">
Ceramic is using <code>System</code> in various situations for its internals, you can take a look at some of these:
<br /><br />
• <a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineSystem.hx">SpineSystem</a> used to manage <code>Spine</code> animation objects
<br />
• <a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/StateMachineSystem.hx">StateMachineSystem</a> used to automatically run <code>StateMachine</code> objects
<br />
• <a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/arcade/runtime/src/ceramic/ArcadeSystem.hx">ArcadeSystem</a> used to update the arcade physics over time
</p>