---
layout: guides
category: guides
menu: Handbook
title: Arcade Physics
permalink: guides/arcade-physics/
---
# Arcade Physics

For most 2D games, you don't need a full rigid body engine: you need fast, predictable AABB physics with velocities, gravity, collisions and overlaps. That's exactly what the `arcade` plugin provides (a port of the battle-tested Arcade Physics from Phaser).

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/arcade-bounce/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/arcade-bounce/">arcade bounce</a> example. Click to add balls!</div>

## Enabling the plugin

Add `arcade` to the plugins of your `ceramic.yml`:

<div class="codename">ceramic.yml</div>

```yaml
app:
    package: mycompany.myapp
    name: myapp

    plugins:
        - arcade
```

## Bodies on visuals

Any visual can get a physics body with `initArcadePhysics()`. Once enabled, the visual exposes physics properties directly:

<div class="codename">Giving physics to a visual</div>

```haxe
var ball = new Quad();
ball.size(32, 32);
ball.anchor(0.5, 0.5);
ball.pos(320, 100);
add(ball);

// Enable physics on this visual
ball.initArcadePhysics();

// Velocity, bounce, gravity... The visual follows its body automatically
ball.velocityX = 150;
ball.velocityY = -120;
ball.bounceX = 1;
ball.bounceY = 1;
ball.gravityY = 400;

// Keep it inside the world bounds
ball.arcade.body.collideWorldBounds = true;
```

<p class="extra-info">By default, the arcade world bounds follow the screen size. You can change that with <code>app.arcade.world.setBounds(x, y, width, height)</code> (and disable the automatic update with <code>app.arcade.autoUpdateWorldBounds = false</code>), like the <a href="/examples/pixel-platformer/">pixel platformer</a> does with its tilemap size.</p>

An `immovable` body collides without ever being pushed (platforms, walls, sensors):

<div class="codename">Static bodies</div>

```haxe
platform.initArcadePhysics();
platform.immovable = true;
platform.arcade.body.allowGravity = false;
```

## Collisions and overlaps

Collisions and overlaps are tested explicitly, usually in the arcade update callback. The difference between the two:

* `collide()` **separates** the bodies (they push each other, bounce...)
* `overlap()` only **detects** that bodies intersect, without touching them

<div class="codename">Testing collisions each frame</div>

```haxe
var world = app.arcade.world;

app.arcade.onUpdate(this, delta -> {

    // Make every member of the group collide with the others
    world.collide(balls);

    // Make the player collide with the tilemap or a platform
    world.collide(player, platform);

    // Only detect (without moving anything) which balls overlap the zone
    for (ball in balls.items) {
        if (world.overlap(ball, zone)) {
            trace('Ball inside zone: ' + ball);
        }
    }

});
```

<p class="extra-info">A <code>Group&lt;Visual&gt;</code> (from <code>ceramic.Group</code>) can be passed directly to <code>collide()</code>/<code>overlap()</code>: all its members are tested together. This is the idiomatic way to handle many objects of the same kind.</p>

You can also listen to collision events on the visual itself:

<div class="codename">Collision events</div>

```haxe
player.onCollide(this, (visual1, visual2) -> {
    trace(visual1 + ' collided with ' + visual2);
});
```

## Where to look next

* [Arcade bounce](/examples/arcade-bounce/): bodies, groups, collide vs overlap, in isolation
* [Pixel platformer](/examples/pixel-platformer/): a real platformer combining arcade physics with a tilemap, a state machine and a camera
* The [nape plugin](/examples/nape-physics/) offers full rigid body physics (rotations, joints, materials) when arcade's AABB model is not enough
