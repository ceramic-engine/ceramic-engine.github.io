---
layout: guides
category: guides
menu: Handbook
title: Assets
permalink: guides/assets/
---
# Assets

Assets are another key concept of Ceramic. When you need to load pictures, sounds, fonts, tilemaps or other resources, you do that with the `Assets` API.

## Loading assets

Loading new assets is pretty easy. All you need to do is to create a new `ceramic.Assets` object and give it the name of the assets you want to load:

<div class="codename">Loading some assets</div>

```haxe
// Create new assets object
var assets = new Assets();

// Add assets to load
assets.add(Images.MY_IMAGE);
assets.add(Fonts.SOME_CUSTOM_FONT);

// Plug complete handler
assets.onceComplete(this, success -> {
    if (success) {
        // Load successful, retrieve our loaded texture and fonts
        var texture = assets.texture(Images.MY_IMAGE);
        var font = assets.font(Fonts.SOME_CUSTOM_FONT);
    }
    else {
        // Something went wrong...
        log.error('Failed to load assets!');
    }
});

// Start loading
assets.load();
```

<p class="extra-info">Note that we used <code>Images.MY_IMAGE</code> and <code>Fonts.SOME_CUSTOM_FONT</code>. These are identifiers generated at compile time from your <code>assets/</code> folder. In this example, it could be because we have <code>myImage.png</code> and <code>someCustomFont.fnt</code> files in the folder.</p>

### Loading assets from strings

We can also load assets from their path as string. In that case instead of `assets.add()` we will use `assets.addImage()` for an image or `assets.addFont()` for a font etc... The rest of the code is pretty similar:

<div class="codename">Loading assets from strings</div>

```haxe
// Create new assets object
var assets = new Assets();

// Add assets to load (from strings)
assets.addImage('myImage.png');
assets.addFont('someCustomFont.fnt');

// Plug complete handler
assets.onceComplete(this, success -> {
    if (success) {
        // Load successful, retrieve our loaded texture and fonts
        var texture = assets.texture('myImage.png');
        var font = assets.font('someCustomFont.fnt');
    }
    else {
        // Something went wrong...
        log.error('Failed to load assets!');
    }
});

// Start loading
assets.load();
```

### Assets helpers in Scene

`Scene` objects have their own `Assets` object created on the fly. You simply use `assets.add(...)` in the scene's `preload()` method and they will be ready once `create()` is called.

<div class="codename">Loading assets in scenes</div>

```haxe
class MyScene extends Scene {

    override function preload() {

        // Load an image using built-in scenes's assets object
        assets.add(Images.MY_IMAGE);

    }

    override function create() {

        // Get the final texture when it is ready
        // (when `create()` is called)
        var texture = assets.texture(Images.MY_IMAGE);

    }
}
```

<p class="extra-info">Look at the <a href="/guides/display-an-image/">Display an image</a> guide to see this in action.</p>

### Assets inheritance

You can let an `Assets` object have access to a `parent`.

Let's say you use multiple `Scene` instances with their own `assets` objects (which are `Assets` instances) in your project.

You may want to reuse some assets in all scenes without having them destroyed and loaded again when you move from one scene to another right?

This can be done by managing you own `Assets` object, and using it as `parent`.

<div class="codename">Some shared assets object</div>

```haxe
// Create the shared assets object
someSharedAssetsObject = new Assets();

// Add assets to load
someSharedAssetsObject.add(Images.SOME_SHARED_IMAGE);

// Plug complete handler
someSharedAssetsObject.onceComplete(this, success -> {
    if (success) {
        // Load successful, now display a scene
        // that will use these assets
        app.scenes.main = new MyScene();
    }
    else {
        // Something went wrong...
        log.error('Failed to load assets!');
    }
});

// Start loading
someSharedAssetsObject.load();
```

Now that you have created this shared assets object, you can use it in any scene:

<div class="codename">A scene using the shared assets object</div>

```haxe
class MyScene extends Scene {

    override function preload() {

        // Get access to all the assets loaded
        // with `someSharedAssetsObject`
        assets.parent = someSharedAssetsObject;

        // Load an additional image in this scene
        // Only this asset will be destroyed when
        // the scene is destroyed
        assets.add(Images.MY_IMAGE);

    }

    override function create() {

        // This texture comes from this scene's asset
        var texture1 = assets.texture(Images.MY_IMAGE);

        // This texture comes from the shared assets object
        var texture2 = assets.texture(Images.SOME_SHARED_IMAGE);

    }
}
```

