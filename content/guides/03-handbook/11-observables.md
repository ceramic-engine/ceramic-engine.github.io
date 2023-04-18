---
layout: guides
category: guides
menu: Handbook
title: Observables
permalink: guides/observables/
---
# Observables

Ceramic has a powerful **observable** API thanks to the [tracker](https://github.com/jeremyfa/tracker) library.

It allows you to know when a field has changed so you can update your display (or anything else) as a reaction to that change.

## How to make a field observable

<div class="codename">An example with observable <code>name</code> field</div>

```haxe
import ceramic.Entity;
import tracker.Observable;

/**
 * A `Person` is an `Entity` that is made observable
 * by implementing the `Observable` interface
 */
class Person extends Entity implements Observable {

    /**
     * An observable field
     */
    @observe public var name:String = null;

    public function new() {
        super();

        // Track name change
        onNameChange(this, nameChanged);
    }

    function nameChanged(name:String, previousName:String) {
        trace('Name: $name (previous: $previousName)');
    }
}
```

This is a simple example where:

1. We create a `Person` class that inherits from `Entity`, and more importantly implements the `Observable` interface.

2. Thanks to the `Observable` interface we implement, we can now use the `@observe` meta on any instance field. That's what we do on the `name` field to make it **observable**.

3. Now that the `name` field is **observable**, it provides a new `nameChange` event on the class, so we can use `onNameChange()` to be notified when the `name` field is modified. We do that in the constructor: our `nameChanged()` method will be called every time the `name` field changes.

<p class="extra-info">Want to learn more about <strong>events</strong>? Check the <a href="/guides/events/">events guide</a> out!</p>

4. In the `nameChanged()` method of our class, we print the name so that we will add a line to the console output everytime the name changes.

Let's test this code!

<div class="codename">Testing the <code>Person</code> code</div>

```haxe
// Create a person object
var person = new Person();
// Set its name to John
person.name = 'John';

...

// Later, update the name and set it to Ellen
person.name = 'Ellen';
```

This is what you should see in your console:

<div class="codename">Console output</div>

```text
Name: John (previous: null)
Name: Ellen (previous: John)
```

That's it! You know how to create **observable** fields and get notified when they change.

## Computed fields

What if you want to have a field that is computed from another **observable** field? For instance, we'd like to add a `valid` field to our `Person` object that tells us if the current object is valid or not. That is: does it have a valid `name` field?

Let's assume a `Person` object is valid if:

- The `name` field is not null
- The `name` field has at least 2 characters
- The `name` field has maximum 20 characters

<p class="extra-info">This is of course just an example to illustrate the feature. A proper name validation would likely be a bit more advanced than that, using a regular expression, checking there is no line break etc...</p>

We could create a custom getter that does all these checks to return `true` or `false` everytime we query it, but there is a better solution: **computed** fields.

A **computed** field is also an **observable** field, but is computed from other observable fields. Let's see how it looks like in practice:

<div class="codename">Updated example with computed <code>valid</code> field</div>

```haxe
import ceramic.Entity;
import tracker.Observable;

/**
 * A `Person` is an `Entity` that is made observable
 * by implementing the `Observable` interface
 */
class Person extends Entity implements Observable {

    /**
     * An observable field
     */
    @observe public var name:String = null;

    /**
     * A computed field
     */
    @compute public function valid():Bool {
        // Get our observable `name` value
        var name = this.name;

        // Do a few checks
        if (name == null)
            return false;
        if (name.length < 2)
            return false;
        if (name.length > 20)
            return false;

        // Everything ok, return true
        return true;
    }

    public function new() {
        super();

        // Track name change
        onNameChange(this, nameChanged);
    }

    function nameChanged(name:String, previousName:String) {
        trace('Name: $name (previous: $previousName)');
    }
}
```

What did we do?

1. We added a **computed** field, which is written as a function with the `@compute` meta. In our code, we will read the field as a variable, as the function is only used as the _compute function_ internally.

2. Inside that _compute function_, we generate a boolean `true` or `false` depending on whether the name fits our criterias or not.

3. That means when we will read `person.valid`, the result will be `true` or `false` depending on the `Person`, and `Person.name` data.

Let's test this:

<div class="codename">Testing again with a computed field</div>

```haxe
// Create a person object
var person = new Person();

// Check if it becomes valid/invalid later
person.onValidChange(this, (valid, _) -> {
    trace('Valid: $valid');
});

// Set the name to John
person.name = 'John';

...

// Later, update the name and set it to ?
person.name = '?';
```

This is what you should see in your console this time:

<div class="codename">Console output</div>

```text
Name: John (previous: null)
Valid: true
Name: ? (previous: John)
Valid: false
```

As you can see, the `valid` field acts like an **observable** field too: we can listen to the `validChange` event and get notified when it changes, even when just the `name` it depends on has changed. Pretty cool isn't it?

<p class="extra-info">Computed fields can be useful to optimize your code when the values you need to resolve are expensive to evaluate. Indeed, <strong>Ceramic</strong> will run the computation methods only when needed, that is, when the observable values it depends on have changed. It is also good to note that if you never use some computed field in your code, it will not even be computed!</p>

<p class="extra-info">In the above examples, we implemented the <code>Observable</code> interface so that the <code>@observe</code> and <code>@compute</code> metas are properly handled. If you want to add <strong>observable</strong> or <strong>computed</strong> fields in a <code>Scene</code> subclass, know that you don't need to implement the <code>Observable</code> interface because it is already implemented by the parent <code>Scene</code> class already!</p>

## Autorun

Sometimes, you may want to run some code everytime a groupe of multiple **observable** and/or **computed** fields have changed. In that situation, you could listen to the `{field}Change` event of each of the fields you depend on, but that could become tedious to maintain and require a lot of boilerplate code in the long run.

Instead, you can cover that use case with much less code using: `autorun()`

<div class="codename">Setting up</div>

```haxe
import ceramic.Scene;
import ceramic.Timer;

class MainScene extends Scene {

    var person1:Person;

    var person2:Person;

    override function create() {
        person1 = new Person();
        person2 = new Person();

        // Bind `printNames()` with an `autorun()`
        autorun(printNames);

        // Change names gradually
        Timer.delay(this, 1.0, () -> person1.name = 'John');
        Timer.delay(this, 2.0, () -> person2.name = 'Ellen');
        Timer.delay(this, 3.0, () -> person1.name = '?');
    }

    function printNames() {

        // Our autorun-bound method will be evaluated once,
        // and everytime one of the observable/computed fields
        // it has read is modified. In that case, it will
        // run again if person1.valid, person1.name,
        // person2.valid or person2.name have changed.

        if (person1.valid && person2.valid) {
            trace('Hello, ${person1.name} and ${person2.name}!');
        }
        else if (person1.valid) {
            trace('Hello, ${person1.name}, and you!');
        }
        else if (person2.valid) {
            trace('Hello, you, and ${person2.name}!');
        }
        else {
            trace('Hello you two!');
        }
    }
}
```

What did we do this time?

1. We created two `Person` objects

2. We bound the `printNames()` method with an `autorun()`

3. Then, we gradually changed the name of each person through time

4. In reaction, the bound `printNames()` method should be re-evaluated automatically when the names are changing.

This is what you should see in the console output:

<div class="codename">Console output</div>

```text
Hello you two!
Name: John (previous: null)
Hello, John, and you!
Name: Ellen (previous: null)
Hello, John and Ellen!
Name: ? (previous: John)
Hello, you, and Ellen!
```

### What is happening there?

In the `printNames()` method bound by an `autorun()`, **Ceramic** creates _implicit bindings_. Remember when we used `onNameChange()` or `onValidChange()`? Well, this is basically what an `autorun()` does for you without having to write this code yourself. For instance, if, in the bound `printNames()` method we read `person1.valid`, it will automatically listen to the `validChange` event of the `person1` variable, and **invalidate** the autorun if later `person1.valid` does change.

When an `autorun()` function is **invalidated**, it **runs** again, then all **observable** and **computed** fields are read again and new _implicit bindings_ are created.

So, in other words: an `autorun-bound` function runs once when it is created, then runs again every time anything it observes changes.

<p class="extra-info">The <code>autorun()</code> method is available from any <code>Entity</code> subclass, including <code>Scene</code> and <code>Visual</code> objects. It can be a powerful building block to create <strong>reactive UI</strong> or trigger actions automatically when some conditions are met. Think of this as a new versatile item in your tool belt!</p>

<p class="extra-info">This <strong>autorun</strong> API is quite similar to <a href="https://mobx.js.org/reactions.html#autorun">MobX Autorun</a>.</p>

### `unobserve()` / `reobserve()`

Sometimes, you may want to run side effects from an `autorun()` function that will read **observable** or **computed** values that you don't want to depend on. The `unobserve()` and `reobserve()` methods help you achieve that:

<div class="codename">Disabling auto-observation in <code>autorun()</code></div>

```haxe
autorun(() -> {

    // Read the `valid` computed value.
    // This will let the autorun
    // observe the `valid` field
    var valid = person.valid;

    // Stop observing fields
    unobserve();

    // Reading `person.name` here won't have
    // any effect to the autorun's bindings, even
    // though the `name` field is observable,
    // because the read is surrounded by unobserve/reobserve
    if (valid) {
        trace('Yay!');
        trace('Name "' + person.name + '" is valid!');
    }
    else {
        trace('Unfortunately...');
        trace('Name "' + person.name + '" is invalid.');
    }

    // Resume observing fields
    reobserve();

});
```

<p class="extra-info">The final <code>reobserve()</code> call is actually <strong>optional</strong> here because we didn't need to evaluate any code after and are just reaching the end of the autorun function. In that situation, it can be omitted as <strong>Ceramic</strong> will take care of auto-closing any <code>unobserve</code>/<code>reobserve</code> block at the end of an autorun function evaluation. If, however, you wanted to actually read another <strong>observable</strong> or <strong>computed</strong> field after logging <code>person.name</code> in the above code, you could do so by keeping the <code>reobserve()</code> call and write code just after.</p>

<p class="extra-info">Using <code>unobserve()</code> and <code>reobserve()</code> calls at the right places can be useful in some complex situations where you read a lot of values and want to execute side effects without creating an uncontrollable chain of reaction. This could be necessary if your side effects are modifying the values you are also observing. Surrounding some code with <code>unobserve()</code> and <code>reobserve()</code> will ensure it doesn't trigger unexpected behaviour from your <code>autorun()</code>  function.</p>

### That's all about observables

All in all, using **observable** and **computed** fields, in addition to `autorun()` functions, can be very powerful to create advanced features with very little code.

Feel free to take a look at the [elements plugin source code](https://github.com/ceramic-engine/ceramic/tree/master/plugins/elements/runtime/src/elements) if you want to see a real use case taking advantage of these features!
