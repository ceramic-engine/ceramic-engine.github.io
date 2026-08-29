---
layout: examples
category: examples
menu: Samples
title: Pixel Platformer
permalink: examples/pixel-platformer/
sample: pixel-platformer
description: A sample showcasing how to create a simple platformer with a map from Tiled Map Editor.
---

A sample showcasing how to create a simple platformer with a map from [Tiled Map Editor](https://www.mapeditor.org).

In the source code, you can see:

- How `StateMachine` is used in the `Player` class to plug different behaviour when jumping, walking...
- How to create an animated spritesheet from code (still in `Player` class, but also non-animated sprite in `Box` class)
- How to enable `arcade` physics so that the player can move around and collide with tilemap
- How to extract data from Tiled's `TMX` format to add additional boxes on the map and define player position

(Assets from [Kenney Game Assets](https://www.kenney.nl/assets/pixel-platformer))
