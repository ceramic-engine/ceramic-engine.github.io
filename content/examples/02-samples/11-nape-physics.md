---
layout: examples
category: examples
menu: Samples
title: Nape Physics
permalink: examples/nape-physics/
sample: nape-physics
description: "Rigid body physics with the nape plugin: boxes falling, stacking and tumbling with realistic rotations."
---

Rigid body physics with the `nape` plugin: click anywhere to drop boxes that fall, stack, and tumble over rotated bumpers with realistic rotations.

```haxe
// Give some gravity to the default nape space
app.nape.space.gravity.setxy(0, 600);

// A STATIC body: part of the simulation, but immovable
floor.initNapePhysics(STATIC);

// A DYNAMIC body: fully simulated (gravity, collisions, rotation).
// The visual follows the physics body automatically.
box.initNapePhysics(DYNAMIC);
```
