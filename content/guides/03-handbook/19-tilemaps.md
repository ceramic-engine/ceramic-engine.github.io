---
layout: guides
category: guides
menu: Handbook
title: Tilemaps
permalink: guides/tilemaps/
---
# Tilemaps

Tile-based maps are the backbone of countless 2D games. **Ceramic**'s `tilemap` plugin displays maps efficiently, whether you build them in code, in [Tiled Map Editor](https://www.mapeditor.org), or in [LDtk](https://ldtk.io).

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/pixel-platformer/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/pixel-platformer/">pixel platformer</a> example, built on a Tiled map.</div>

## Enabling the plugin

Add `tilemap` to your `ceramic.yml` plugins (and `ldtk` too if you use LDtk files):

<div class="codename">ceramic.yml</div>

```yaml
app:
    plugins:
        - tilemap
```

## The building blocks

A tilemap is made of a few simple data objects:

* `Tileset`: a texture split into tiles of a fixed size, where each tile has a **gid** (global id)
* `TilemapLayerData`: a grid of gids describing which tile goes where
* `TilemapData`: the whole map: size, tilesets and layers
* `Tilemap`: the **visual** that displays a `TilemapData`

Nothing stops you from building all of this in code:

<div class="codename">A tilemap built from code</div>

```haxe
// A one-tile tileset (gid 0 means "no tile", so first gid is 1)
var tileset = new Tileset();
tileset.firstGid = 1;
tileset.tileSize(8, 8);
tileset.texture = assets.texture(Images.SINGLE_TILE);
tileset.columns = 1;

// A 10x10 tiles layer
var layerData = new TilemapLayerData();
layerData.name = 'main';
layerData.grid(10, 10);
layerData.tileSize(8, 8);
layerData.tiles = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    // ...
];

// The map data, then the visual
var tilemapData = new TilemapData();
tilemapData.size(
    layerData.columns * tileset.tileWidth,
    layerData.rows * tileset.tileHeight
);
tilemapData.tilesets = [tileset];
tilemapData.layers = [layerData];

var tilemap = new Tilemap();
tilemap.tilemapData = tilemapData;
add(tilemap);
```

The [tilemap pixelart](/examples/tilemap-pixelart/) example shows this exact setup.

## Loading a Tiled map (TMX)

Put your `.tmx` file (and its tileset image) in your `assets/` folder, and load it like any other asset:

<div class="codename">Loading and displaying a TMX map</div>

```haxe
override function preload() {
    assets.add(Tilemaps.TILEMAP);
}

override function create() {
    var tilemap = new Tilemap();
    tilemap.tilemapData = assets.tilemap(Tilemaps.TILEMAP);
    add(tilemap);
}
```

You can also access the raw TMX data for object layers (spawn points, triggers zones... anything you placed in Tiled):

<div class="codename">Reading Tiled objects</div>

```haxe
var tmxMap = assets.tilemapAsset(Tilemaps.TILEMAP).tmxMap;
// Then walk tmxMap layers/objects to extract your gameplay data
```

## Loading an LDtk project

With the `ldtk` plugin enabled, `.ldtk` files become assets too:

<div class="codename">Loading an LDtk level</div>

```haxe
var ldtkData = assets.ldtk(Tilemaps.MY_WORLD);
var level = ldtkData.worlds[0].levels[0];

level.ensureLoaded(() -> {

    // Display the level's tile layers
    var tilemap = new Tilemap();
    tilemap.tilemapData = level.ceramicTilemap;
    add(tilemap);

    // Instantiate the level's LDtk entities
    level.createVisualsForEntities(tilemap);

});
```

<p class="extra-info">The <code>ensureLoaded()</code> wrapping is only strictly needed when your LDtk project uses external level files, but it's a good habit that works in both cases.</p>

## Auto-tiling

Drawing every wall corner by hand gets old quickly. The `AutoTiler` component computes the right tile variants from a simple "filled / not filled" grid, using the classic auto-tiling formats:

<div class="codename">Auto-tiling a layer</div>

```haxe
layerData.component(new AutoTiler([{
    kind: EXPANDED_47, // The auto-tile format
    gid: 1             // The base gid of the terrain
}]));
```

Look at the [auto tiling](/examples/auto-tiling/) example to see it in action, including live editing of the terrain.

## Collisions

Tilemaps integrate with [arcade physics](/guides/arcade-physics/): call `tilemap.initArcadePhysics()` and collide against layers configured as collidable. The [pixel platformer](/examples/pixel-platformer/) example puts everything together:

<div class="codename">Colliding with a tilemap layer</div>

```haxe
tilemap.initArcadePhysics();

// Make the 'collidables' layer solid
tilemap.collidableLayers = ['collidables'];

// Then, each frame:
world.collide(player, tilemap);
```

## Related examples

* [Tilemap pixelart](/examples/tilemap-pixelart/): a map built in code
* [Auto tiling](/examples/auto-tiling/): terrain auto-tiling
* [LDtk level](/examples/ldtk-level/): loading an LDtk project
* [Pixel platformer](/examples/pixel-platformer/): Tiled map + physics + camera
