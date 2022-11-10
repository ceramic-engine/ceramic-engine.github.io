---
layout: guides
category: guides
menu: Handbook
title: Text
permalink: guides/text/
---
# Text

You'll probably need to display text sooner than later. Good news, Ceramic got you covered: it works with bitmap fonts and supports [MSDF](https://github.com/Chlumsky/msdfgen) rendering, making it pretty efficient for common and real-time use cases!

## Display text

As you can see in the [Hello World](/examples/hello-world/) sample, it's not very difficult to display text:

```haxe
var text = new Text();
text.color = Color.WHITE;
text.content = 'Hello World';
text.pointSize = 48;
text.anchor(0.5, 0.5);
text.pos(screen.width * 0.5, screen.height * 0.5);
```

![Ceramic window hello world](/static/img/ceramic-window-hello-world.png)

This is a very simple example where we instanciated a `Text` visual, set it's content and a few other settings, then displayed it at the center of the screen, but of course, you can do more with texts!

## Using custom fonts

By default, Ceramic text is rendered using the `Roboto` font. If you want to use other fonts, you'll need to load them as assets in your scene.

Ceramic is not directly reading TTF/OTF fonts. Instead, it uses `bitmap fonts`.

<p class="extra-info">Bitmap fonts are characters pre-rendered on a texture. They are very common in games and realtime applications because of their efficiency: no need to depend on a complicated font rasterizer, no need to embed full TTF/OTF fonts in your app either, no need to perform expensive computation to transform font data into actual characters that can be displayed on screen. Advanced techniques like <a href="https://github.com/Chlumsky/msdfgen">MSDF</a> rendering (supported by Ceramic) are also available to still allow to display bitmap fonts at different sizes without having to pre-render every possible size on a texture beforehand!</p>

Ceramic is compatible with the `text` and `xml` [BMFont](http://www.angelcode.com/products/bmfont/doc/file_format.html) formats. Your bitmap font will need to be composed of 2 files: `YourFont.fnt` (BMFont data) and `YourFont.png` (the actual texture with pre-rendered characters). Look at an example for the [Pixellari font](https://github.com/ceramic-engine/ceramic-samples/tree/master/text/assets).

### What if I only have a TTF or OTF font file?

No worries! It is indeed possible to create a bitmap font from a TTF/OTF file. Here are some options:

- You can use an online tool like [SnowB](https://snowb.org/) to create your bitmap font out of your original font file. It comes with options like adding stroke or shadow too.

- You can use the `ceramic font` command, which will help you create a bitmap font directly from the Ceramic command line tools!

<p class="extra-info">Get detailed info about the <code>ceramic font</code> command by typing <code>ceramic help font</code>. Basically, if you run <code>ceramic font --font YourFont.ttf</code>, it will create those two file: <code>YourFont.fnt</code> and <code>YourFont.png</code> that are ready to be used with Ceramic. Choose a font size with the <code>--size</code> parameter. You'll see that you can also generate MSDF fonts using the <code>--msdf</code> option.</p>

### Loading and using the custom font

When you got your bitmap font ready in the `assets/` folder of your project, you'll simply have to load it and assign it to your text object:

<div class="codename">Loading and using a font</div>

```haxe
import ceramic.Scene;
import ceramic.Text;

class LoadingAndUsingAFont extends Scene {

    override function preload() {

        // Load `YourFont.fnt` and `YourFont.png`
        assets.add(Fonts.YOUR_FONT);

    }

    override function create() {

        var text = new Text();
        text.content = 'Hello';

        // Assign the loaded font on your text visual
        text.font = assets.font(Fonts.YOUR_FONT);

        add(text);

    }

}
```

## MSDF fonts

`MSDF`, which stands for multi-channel signed distance field, is a technique that allows to display special bitmap fonts at different font sizes with minimal quality loss and in a very efficient way. [Read more about it in the msdfgen repository](https://github.com/Chlumsky/msdfgen).

Ceramic supports that technique and is providing tools to generate such fonts (using the `ceramic font --msdf` command as mentioned just before) and rendering those fonts at runtime using a custom shader automatically. Actually, the default `Roboto` font is an `MSDF` font, that is why you can display text at any size with fairly good quality by default with Ceramic!

This is not a one-size-fit-for-all solution though: depending on the situation you may want to keep using regular bitmap fonts over `MSDF` bitmap fonts, as they both have pros an cons:

**Regular bitmap fonts**

- ✅ Rendered with Ceramic's default shader, without additional draw calls, thanks to the texture being ready to use as is.
- ✅ Pre-rendered glyphs can be stylized beforehand: with strokes, shadows, textured colors...
- 🔴 Each bitmap font is for a specific font size. Upscaled text will look blurry/pixelated.

**MSDF bitmap fonts**

- ✅ Same quality at any font size
- ✅ Still more efficient than displaying TTF/OTF text directly
- 🔴 Needs a custom shader at runtime (automatic in Ceramic, but might break batching, add draw calls and impact performances in some situations)
- 🔴 Glyphs are single color. Not an issue if you don't display fancy text with strokes, shadows etc... though!
- 🔴 Results may vary depending on the source font: some give very good results (like `Roboto`), some others might have artifacts when rendered as `MSDF` (in that case, stick to regular bitmap fonts).

<p class="extra-info">Performance tip: if you use many texts with an <code>MSDF bitmap font</code>, mixed with other visuals, you might want to use the <code>preRenderedSize</code> property of your <code>Text</code> objects to reduce draw calls. The <code>preRenderedSize</code> property makes Ceramic convert an <code>MSDF bitmap font</code> into a <code>regular bitmap font</code> for a specific font size. It is a one-time and cached operation that removes the need to render the characters with a custom shader at every frame, and makes it possible to batch text objects with other visuals in the same draw call: more efficient!</p>

## See it in action

Look at the [Text](/examples/text/) example to see how text options can be edited at runtime to change size, font, color, alignment...


