---
layout: guides
category: guides
menu: Handbook
title: Entities
permalink: guides/entities/
---
# Entities

In Ceramic, the concept of entity is central, the `ceramic.Entity` type is used by a lot of built-in objects and will help you architecture your app.

## So, what is really an entity?

A summary:

* It is constructed with `new`, like any haxe object, then has to be destroyed with `destroy()` when not needed anymore.

* Events can be bound to it (and automatically unbound when the entity is destroyed).

* Components can be attached to it by implementing the `Component` interface, to favor composition over inheritance and have a more flexible codebase. Any component is also an entity.

* All visuals (`ceramic.Visual` objects and those that inherit from it like `Quad`, `Mesh`, etc...) are also entities.

* It can have an `id` (`String`) or `data` (`Dynamic`) assigned to it, use with caution though, these are not free performance-wise.

* If the `script` plugin is enabled, hscript can be assigned to any entity using the `scriptContent` property.

## Basic example

```haxe
// Creating a 'raw' entity
var someEntity = new Entity();

...

// Later... destroying that entity
someEntity.destroy();
someEntity = null;
```

Nothing fancy yet, huh?

No worries, there's much more you can do with entities, just move on to the next guide to learn about it!
