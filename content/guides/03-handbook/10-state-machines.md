---
layout: guides
category: guides
menu: Handbook
title: State Machines
permalink: guides/state-machines/
---
# State Machines

State machines are very helpful to let you structure the state of different objects in your app. **Ceramic** provides a flexible `StateMachine<T>` type that can adapt to different situations.

## The gist of it

<div class="codename">A basic example usage of <code>StateMachine&lt;T&gt;</code></div>

```haxe
// Describe the possible states with an enum
enum SomeEnum
{
    WALKING;
    IDLE;
}

class SomeVisual extends Visual
{
    // Add a state machine as component using the enum above
    @component var machine = new StateMachine<SomeEnum>();

    public function new()
    {
        super();

        // Set initial state
        machine.state = WALKING;
    }

    function WALKING_enter() {}
    function WALKING_update(delta:Float) {}
    function WALKING_exit() {}

    function IDLE_enter() {}
    function IDLE_update(delta:Float) {}
    function IDLE_exit() {}
}
```

This is the most straightforward way of using state machines in a class:

1. Create an `enum` (or an `enum abstract`) describing your different states
2. Add a `StateMachine<YourEnum>` as [component](/guides/components/) in your class
3. Implement the methods that will be automatically called depending on the state
4. Assign your state to `machine.state`

<p class="extra-info">This will work on any object that is an <a href="/guides/entities/">Entity</a> subclass, including visuals etc...</p>

<p class="extra-info">Ceramic took inspiration from an existing library in C#: <a href="https://github.com/prime31/StateKit">StateKit</a>. Although the ideas are very similar, Ceramic is pushing it a bit further by taking advantage of compile time macros in Haxe to provide additional features like plugging a state machine as component to an existing entity class. It also uses macros to optimize state machines as much as possible: there is no dynamic access involved, everything is statically resolved.</p>

### The methods

In the above example, when the `state` is set to `WALKING`, then if provided, the `WALKING_enter()` method will be called once. Following this call, the `WALKING_update()` method will be called at every frame with a `delta` time value, so you can implement state-specific update logic.

Later, when you change the state again, for instance with `machine.state = IDLE`, the `WALKING_exit()` method will be called, then `IDLE_enter()` and again `IDLE_update()` at every frame.

<p class="extra-info">You don't have to implements all the methods if you don't need some, they are all optional.</p>

## More separation

If you prefer to have all your **state machine** code in a different class than where you set the `state`, you can create subclasses of `StateMachine<T>`. Here is the same example as before, but using a separate class for the state machine:

<div class="codename">Creating a state machine in a separate class</div>

```haxe
enum SomeEnum
{
    WALKING;
    IDLE;
}

class SomeStateMachine extends StateMachine<SomeEnum> {

    // This time, the methods are directly
    // located inside the state machine subclass,
    // instead of where it will be instanciated.

    function WALKING_enter() {}
    function WALKING_update(delta:Float) {}
    function WALKING_exit() {}

    function IDLE_enter() {}
    function IDLE_update(delta:Float) {}
    function IDLE_exit() {}
}
```

<div class="codename">Using that state machine in another class</div>

```haxe
class SomeVisual extends Visual
{
    @component var machine = new SomeStateMachine();

    public function new()
    {
        super();

        // Set initial state
        machine.state = WALKING;
    }

    ...
}
```

## One object for each state

If you start to have a lot of code in each of your state handling code (in `_enter()`/`_update()`/`_exit()` methods), you can separate things even more by creating dedicated objects for each state:

<div class="codename">Creating a state machine with state objects</div>

```haxe
// Create a new state machine
var machine = new StateMachine<SomeEnum>();

// Assign dedicated state objects
machine.set(WALKING, new WalkingState());
machine.set(IDLE, new IdleState());

// Set current state
machine.state = WALKING;
```

So what's inside those state objects? Here is an example for the `WalkingState` class:

<div class="codename">WalkingState.hx</div>

```haxe
import ceramic.State;

class WalkingState extends State {

    override function enter():Void {
        // Called when entering this state
    }

    override function update(delta:Float):Void {
        // Called at every frame when
        // the machine has this state
    }

    override function exit():Void {
        // Called when exiting this state
    }
}
```

That's it! You would have a similar class for `IdleState`. This way, you can separate each state code in different classes and organize your code better if needed.

<p class="extra-info">In my opinion, among the different options explained above, there is not one way really better than the other. It mostly depends on your use case and your preferences. I find the <em>- component / everything in the same class -</em> way convenient when I just want to add a state machine to an existing object, and don't want to have to look at too many places to understand what the code is doing, but you might also prefer to separate things more in some other situations. It could also be relevant to use separate state objects if you want to reuse the same <code>State</code> classes with different <code>StateMachine</code> objects.</p>

### That's all about state machines for now

This guide should have gave you a good overview of how you can use state machines in Ceramic. You can see a practical usage of `StateMachine` from the [pixel platformer](/examples/pixel-platformer/) sample, and more specifically the [`Player` class source code](https://github.com/ceramic-engine/ceramic-samples/blob/master/pixel-platformer/src/Player.hx).
