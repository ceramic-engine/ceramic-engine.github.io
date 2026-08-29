---
layout: examples
category: examples
menu: Samples
title: Arcade Bounce
permalink: examples/arcade-bounce/
sample: arcade-bounce
description: "Arcade physics fundamentals: bodies bouncing against world bounds, group collisions and overlap detection."
---

The fundamentals of `arcade` physics, without a full game around them: bodies bouncing against world bounds, collisions inside a group, and overlap detection with a zone. Click to add more balls.

```haxe
// Enable physics on a visual, give it a velocity and full bounce
ball.initArcadePhysics();
ball.velocityX = 150;
ball.velocityY = -120;
ball.bounceX = 1;
ball.bounceY = 1;
ball.arcade.body.collideWorldBounds = true;

// Each frame: make group members collide together,
// and detect which ones overlap a zone
app.arcade.onUpdate(this, delta -> {
    world.collide(balls);
    for (ball in balls.items) {
        // overlap() returns true when the two bodies intersect
        // (it only detects, it doesn't move anything)
        ball.asQuad.color = world.overlap(ball, zone) ? Color.RED : Color.WHITE;
    }
});
```
