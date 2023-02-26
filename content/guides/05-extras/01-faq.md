---
layout: guides
category: guides
menu: Extras
title: FAQ
permalink: guides/faq/
---
# Frequently Asked Questions

This is gathering various questions that are often asked (mostly in the [Discord](/discord/) channel) and their answers.

This page will be updated as new questions arise.

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

## How to do text input?

if you want to make some text field editable, you do that using `ceramic.Text` and attaching a `ceramic.EditText` component to it:

<div class="codename">Text input</div>

```haxe
var someText = new Text();
someText.color = Color.WHITE;
someText.content = 'someContent';

var selectionColor = Color.BLUE;
var textCursorColor = Color.WHITE;
var editText = new EditText(selectionColor, textCursorColor);
someText.component('editText', editText);

editText.onStart(this, () -> {
    // Started editing text
});

editText.onUpdate(this, text -> {
    trace('text updated: ' + text);
});

editText.onSubmit(this, () -> {
    // Edited then pressed "enter" or similar
});

editText.onStop(this, () -> {
    // Stopped editing text
});
```

## Ceramic is missing haxe libraries

Some users are getting missing haxe libraries errors similar to this one:

```text
Error: Library earcut is not installed
```

It can happen if you accidentally installed an outdated version of `haxelib` on your computer.

To verify this, run this on a terminal to retrieve current haxelib version:

<div class="codename">Retrieve haxelib version</div>

```bash
haxelib version
```

If the version is `3.3.0` or below, you've got an older version of haxelib installed.

To fix the issue, uninstall this haxelib with the following command:

<div class="codename">Uninstall outdated haxelib</div>

```bash
haxelib remove haxelib --system
```

Your computer should now use a more recent haxelib, the one bundled with your (more recent) haxe installation and Ceramic should find the missing libraries!