---
layout: guides
category: guides
menu: Extras
title: FAQ
permalink: guides/faq/
---
# Frequently Asked Questions

This is gathering questions that are often asked (mostly in the [Discord](/discord/) channel) and their answers. This page will be updated as new questions are being asked.

## How to change the default font?

You do that by assigning a font asset id in the `settings` at project initialization:

<div class="codename">Changing default font</div>

```haxe
class Project extends Entity {

    function new(settings:InitSettings) {

        super();

        settings.defaultFont = Fonts.YOUR_FONT;

    }

    ...
```

The font `YOUR_FONT` is an example of font asset. Read the [text guide](/guides/text//#using-custom-fonts) for more info.

## How to change the current main scene?

You change the main scene by assigning a new one to `app.scenes.main`.

<div class="codename">Changing the current scene</div>

```haxe
var yourScene = new Scene();
app.scenes.main = yourScene;
```

