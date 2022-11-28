---
layout: blog
category: blog
menu: Dev Logs
menuTitle: Ceramic in Unity
title: Running a whole 2D Game Engine in Unity
description: I created an open source and code oriented 2D Framework written in Haxe and made it run inside Unity.
permalink: blog/ceramic-in-unity/
author: Jérémy Faivre
authorLink: https://twitter.com/jeremyfaivre
image: /static/img/ceramic-pixel-platformer-in-unity-window.png
---
# Running a whole<br/>2D Game Engine<br/>in Unity

I created an open source and code oriented 2D Framework written in [Haxe](https://haxe.org) and made it run inside **Unity** in order to extend its capabilities and support additional platforms like **consoles**. This post is a detailed technical overview of how it was achieved.

![Ceramic Pixel Platformer in Unity](/static/img/ceramic-pixel-platformer-in-unity-window.png)

## About Unity

<p><img src="/static/img/unity-logo.png" alt="Unity logo" class="float-left" style="width:85px" />No need to tell much about <a href="https://unity3d.com/">Unity</a>: it is a well established game engine and editor and you probably know what it's about already! A lot of great games have been created with it, and you might have heard good (or bad) stories about it already!<div style="clear:both"></div></p>

## About the 2D Game Engine: Ceramic

I created an open source and code oriented 2D Framework / Game Engine called [Ceramic](https://ceramic-engine.com). It is written in [Haxe language](https://haxe.org) and can export natively to `Windows`, `Mac`, `Linux`, `iOS`, `Android` and `HTML5/WebGL`.

You can read an [introduction article about it here](/guides/discover-ceramic) if you want to know more about the tech and the motivations behind it. Feel free to also check the [online examples](/examples) out, or try a mobile game, created with it, [Make More Views](https://apps.apple.com/fr/app/make-more-views/id1438348967) (in french) to see what **Ceramic** is capable of!

### It doesn't need Unity

**Ceramic** is standalone. It can export and run apps by itself, without Unity. You simply run a command from CLI or [Visual Studio Code](https://code.visualstudio.com/), and _voilà_, you got a working app!

![Ceramic window](/static/img/ceramic-window-1.png)

<p class="extra-info">It was a strong motivation to make <strong>Ceramic</strong> standalone. I created this tool to have a quick way of creating small games and apps without having to use a closed source (and sometimes bloated) software like Unity. <strong>Ceramic</strong> is open source and most of its dependencies are open source as well.</p>

### But how about using Unity without depending on it?

**Ceramic** not depending on **Unity** doesn't mean it couldn't optionally take advantage of it to extend its capabilities right?

<p><img src="/static/img/why-not-both.gif" alt="Why not both (MEME)" class="float-left" /><em style="position:relative; left:30px; top:50px">Why not getting the best of both worlds?</em><div style="clear:both"></div></p>

Well, **Ceramic** is written in [Haxe](https://haxe.org), so its whole code base can be transpiled to `C#`, and it happens that **Unity** scripting is done via `C#` too. Could the Ceramic `Haxe` code transpiled to `C#` run in **Unity**?

In other words: how about running a whole engine inside another one? The idea was silly enough that I had to try to see for myself if it was possible!

<p class="extra-info">Could I make a <strong>Ceramic</strong> app run inside <strong>Unity</strong>?</p>

No need to hide you the truth: the answer is **YES**, I managed to make this work, it is what this article is about, and it opens the door to nice things like:

 - Exporting a **Ceramic** project to all the platforms **Unity** supports. That means technically being able to export a 2D **Ceramic** game to **consoles** as **Unity** supports those targets.

 - Giving access to **Unity** packages within a **Ceramic** project, thanks to Haxe's `C#` externs. You can call anything provided by **Unity** or its packages as long as it has a `C#` API. Gives quite a lot of possibilities in hybrid projects that use both **Ceramic** and **Unity**.

 - Still enjoying quick iterations thanks to **Ceramic**'s native **web** target (which is quite fast to compile and run, compared to Unity).

 - Keeping writing [Haxe](https://haxe.org) code. You may not know this programming language, but it's actually a very good one. **Lucas Pope** came to the same conclusion when he ported his award winning [Papers Please](https://dukope.com/devlogs/papers-please/mobile/) game to phones using Unity: he tried `C#`, but finally decided to stick with `Haxe` because it was a better option for him.

## Ceramic in Unity: a step by step technical overview

All of this sounds great, but obviously, making **Ceramic** run inside **Unity** was not just about transpiling `Haxe` code to `C#`! For this to work, **Ceramic** needed to communicate with **Unity** to draw graphics on screen, play audio, get input from mouse, keyboard, touchscreen and gamepad etc...

### A summary of what was on the table

First, I made categorized lists of what had to be done to make **Ceramic** work in **Unity**:

<table style="width:100%x">
    <tr>
        <td style="text-align:center" colspan="2"><strong>Graphics</strong></td>
    </tr>
    <tr>
        <td colspan="2"><ul>
            <li>Draw quads</li>
            <li>Draw meshes</li>
            <li>Display textured quads and meshes</li>
            <li>Display shapes</li>
            <li>Use and draw into render textures (with antialiasing support)</li>
            <li>Apply clipping/masking to visuals (with stencil buffer)</li>
            <li>Apply custom shader parameters (uniforms)</li>
            <li>Apply custom vertex attributes (to do advanced things like tint black shaders in 2D...)</li>
            <li>Built-in ceramic shaders ported to unity shaderlab format</li>
            <li>Text rendering (including <code>MSDF</code> text rendering)</li>
            <li>Multi-texture batching (to reduce draw calls in many common situations)</li>
            <li>Make it compatible with <code>Built-in Render Pipeline</code></li>
            <li>Make it compatible with <code>Universal Render Pipeline</code></li>
        </ul></td>
    </tr>
    <tr>
        <td style="text-align:center"><strong>Audio</strong></td>
        <td style="text-align:center"><strong>Input</strong></td>
    </tr>
    <tr>
        <td style="width:50%; vertical-align:top"><ul>
            <li>Load audio assets</li>
            <li>Play audio</li>
        </ul></td>
        <td style="width:50%; vertical-align:top"><ul>
            <li>Keyboard input</li>
            <li>Text input</li>
            <li>Touch input</li>
            <li>Mouse input</li>
            <li>Gamepad input</li>
        </ul></td>
    </tr>
    <tr>
        <td style="text-align:center"><strong>IO</strong></td>
        <td style="text-align:center"><strong>Networking</strong></td>
    </tr>
    <tr>
        <td style="width:50%; vertical-align:top"><ul>
            <li>Save and load textual data</li>
        </ul></td>
        <td style="width:50%; vertical-align:top"><ul>
            <li>HTTP request</li>
        </ul></td>
    </tr>
    <tr>
        <td style="text-align:center" colspan="2"><strong>Tooling</strong></td>
    </tr>
        <td colspan="2"><ul>
            <li>Generate or update a Unity project when running <code>ceramic unity build</code></li>
        </ul></td>
</table>

**Many things to do!**

Yes, seeing all the features involved, there was quite a lot of work ahead to make **Ceramic** work in **Unity**.

But good news, **Ceramic** has been designed in a way that it's **main API** is cross-platform and platform-specific code is isolated into **backends**. That means I don't have to reimplement the whole Ceramic API to port it to a new platform. Creating a new **backend** should be enough for that. Still a lot of work, but doable!

<p>
<img src="/static/img/diagram-ceramic-discover.png" alt="Ceramic architecture" />
<div class="caption">A chart showing how Ceramic is architected and what platforms it can export to.</div>
</p>

**Ceramic**'s default backend is called **Clay**. It's what make it standalone and allows to export apps to desktop, mobile and web natively, without Unity. Making **Ceramic** work in **Unity** means: creating a new **Unity backend**.

### The Unity backend

So I started writing that new **Unity backend** for **Ceramic**.

### 1. Graphics

The most complicated part of the backend was definitely the graphics part. How do I render **Ceramic**'s visual objects within **Unity**? To explain how to do this, I first need to tell you how **Ceramic rendering** works.

#### How Ceramic renders graphics on screen

<table style="width:100%; border:none; margin-bottom: 24px">
    <tr>
        <td style="text-align:center"><code>High Level<br />Visual API</code></td>
        <td style="border:none"></td>
        <td style="text-align:center"><code>Cross-platform<br />Renderer</code></td>
        <td style="border:none"></td>
        <td style="text-align:center"><code>Backend</code></td>
    </tr>
    <tr>
        <td style="border:none; padding:0; height:6px" colspan="5"></td>
    </tr>
    <tr>
        <td style="text-align:center; width:25%">Images</td>
        <td style="border:none; text-align:center; width:8%" rowspan="5">&#10132;</td>
        <td style="text-align:center" rowspan="5">Transform Visuals<br />into Textured&nbsp;Triangles</td>
        <td style="border:none; text-align:center; width:8%" rowspan="5">&#10132;</td>
        <td style="text-align:center; width:25%" rowspan="5">Send to the GPU as Vertex&nbsp;Buffers</td>
    </tr>
    <tr>
        <td style="text-align:center">Texts</td>
    </tr>
    <tr>
        <td style="text-align:center">Shapes</td>
    </tr>
    <tr>
        <td style="text-align:center">Tilemaps</td>
    </tr>
    <tr>
        <td style="text-align:center">...</td>
    </tr>
</table>

**Ceramic** can display various types of objects: images, shapes, text, 2D meshes, tilemaps... All these objects are transformed by **Ceramic** into **textured triangles** that are then sent to the **GPU** via a **backend** to finally be visible on screen.

The transformation into **textured triangles** is cross-platform, it's done in the `Renderer` class of **Ceramic**. No need to reimplement that! We however need to provide the part that will make **Unity** send those triangles to the **GPU**, ideally using an API that is low level enough so that it wouldn't add too much overhead to the app!

#### Meet Unity's `CommandBuffer` and `Mesh` API

After doing some research, I excluded options like creating many `GameObject` instances in **Unity** with attached `SpriteRenderer` or `MeshRenderer` components to them. It would be way too heavy and too high level to allow me to implement all the details of Ceramic graphics API. I would have very quickly hit a wall and not been able to make an implementation that works exactly the same as the default **Clay** backend.

What seemed to be a good fit however was using **Unity**'s `CommandBuffer` API because it allows to send commands to the GPU directly, gives the possibility to draw a `Mesh` object with a given `Material` without needing any `GameObject` or `Component` mess. Sounds like something I wanted!

#### Drawing a quad

Anyone that has played with graphics APIs like `OpenGL`, `DirectX`, `Vulkan` or `Metal` knows the joy of finally seeing his first triangle or quad on screen after writing a lot of boilerplate code.

Although not as difficult, I started in the same fashion: drawing my first quad using `CommandBuffer`, `Mesh` and `Material` objects!

<p>
<img src="/static/img/quad-vertex-unity.png" alt="Quad Vertex Unity" />
<div class="caption">A first test to draw a quad with colored vertices using <code>CommandBuffer</code>, <code>Mesh</code> and <code>Material</code></div>
</p>

Seeing that quad on screen was great! That meant the proof of concept of using `CommandBuffer` + `Mesh` + `Material` to display arbitrary triangles worked as expected! It was the starting point to write the actual graphics backend code!

#### Rendering a frame

**Ceramic** has a cross platform `Renderer` class whose job is to iterate through every [Visual](/guides/visuals) instance at each frame and convert them into commands that are sent to the **backend** so that they become visible on screen.

<p class="extra-info">If a game runs at 60 FPS (60 frames per second), this <code>Renderer</code> job will happen 60 times per second as well.</p>

#### Detailed steps of how Ceramic renders a frame and what it meant for Unity backend

To know how to write the **Unity graphics backend** code, I had to review what the **Ceramic** `Renderer` needs to do at each **frame**, then decide how that should be handled by the **Unity backend**.

Below is the detailed process of what the `Renderer` does in a frame, and my implementation plans for the **Unity backend** that would work with it.

<table style="width:100%; margin-top:60px">
    <tr>
        <td style="text-align:center" colspan="2"><strong>BEGIN FRAME</strong></td>
    </tr>
</table>

<div class="table-arrow-down">↓</div>

<div class="table-number"><span class="number">1</span></div>

<table style="width:100%">
    <tr>
        <td style="text-align:center; width:45%; border-right:none"><code>RENDERER</code></td>
        <td style="text-align:center; width:45%; border-left:none"><code>UNITY BACKEND</code></td>
    </tr>
    <tr>
        <td style="width:50%; vertical-align:top">Configure settings for the next <a href="/guides/visuals">Visual</a> object in the list: which texture to use, what shader to use, do we clip screen or mask with another visual, do we need to render onto a specific render target etc... Each of these setting changes are sent to the <strong>backend</strong>.</td>
        <td style="width:50%; vertical-align:top">Receive settings from <code>Renderer</code>, and depending on that setting:
        <ul>
            <li>Use <code>CommandBuffer</code> to change some graphic config on Unity side</li>
            <li>Keep the info around to configure a <code>Material</code> that will be used for the next <em>draw call</em>.</li>
        </ul>
        </td>
    </tr>
</table>

<div class="table-arrow-down">↓</div>

<div class="table-number"><span class="number">2</span></div>

<table style="width:100%">
    <tr>
        <td style="text-align:center; width:45%; border-right:none"><code>RENDERER</code></td>
        <td style="text-align:center; width:45%; border-left:none"><code>UNITY BACKEND</code></td>
    </tr>
    <tr>
        <td style="width:50%; vertical-align:top">Iterate over the visuals and convert each of them to data that can be sent to the backend: <strong>textured triangles / vertices...</strong></td>
        <td style="width:50%; vertical-align:top">Receive <strong>vertices</strong> data (textured triangles) and store them into <code>C#</code> native arrays.</td>
    </tr>
</table>

<div class="table-arrow-down">↓</div>

<div class="table-number"><span class="number">3</span></div>

<table style="width:100%">
    <tr>
        <td style="text-align:center; width:45%; border-right:none"><code>RENDERER</code></td>
        <td style="text-align:center; width:45%; border-left:none"><code>UNITY BACKEND</code></td>
    </tr>
    <tr>
        <td style="width:50%; vertical-align:top">If encountering a visual that needs different settings than the previous visual to be rendered, call <code>flush()</code> on the backend to send the pending buffers.</td>
        <td style="width:50%; vertical-align:top"><code>flush()</code> is called by the <code>Renderer</code>: configure a <code>Material</code> object on the fly from the current settings, get a <code>Mesh</code> object and assign it the <strong>vertices</strong> data we kept around at <strong>3</strong> in <code>C#</code> native arrays. Send all of this to the <strong>GPU</strong> using <code>CommandBuffer.DrawMesh()</code>. A <em>draw call</em> happens!</td>
    </tr>
    <tr>
        <td colspan="2" style="text-align:center">Go back to <strong>1</strong> until there is no visual to render anymore.</td>
    </tr>
</table>

<div class="table-arrow-down">↓</div>

<table style="width:100%; margin-bottom:50px">
    <tr>
        <td style="text-align:center" colspan="2"><strong>END FRAME</strong></td>
    </tr>
</table>

This gives you an overview of how the `Renderer` works and what should be done in the **Unity backend** so that graphics can actually be displayed and visible on screen!

These details showing a clear roadmap, I started implementing everything needed, until it worked as expected.

There are a lot of implementation details I can't talk about here because this article would be way too long otherwise, but you can take a look at [the resulting source code here](https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/backend/Draw.hx), if you are curious to see how it is actually written. It's mostly `Haxe` code with calls to `C#` externs and inline `C#` that interact with **Unity API**.

### 2. Audio

**Audio** was much easier than graphics. I mostly had to map **Ceramic**'s audio backend API to **Unity**'s `AudioSource` and `AudioPlayer` objects. Didn't have much issues here, it quickly worked well!

### 3. Input

**Input** was a bit tricky but still easier than graphics. I decided to use the more recent `InputSystem` module provided by **Unity**.

It took some time to get right because the way **Ceramic** is providing input events is quite different from how **Unity** does that, but I finally got it to provide input data consistent with other backends, with support of gamepads, screens with multiple finger touch, mouse and keyboard input...

#### 4. IO

The **backend** needs to give **Ceramic** a way to save and load textual data (useful for saving game progress or preferences).

Thanks to `Haxe` and it's **standard library** compatible with all its targets, including the `C#` target, I had file system access out of the box and could quickly implement what was required!

#### 5. Networking

Networking can be a requirement for an app / game that needs to interact with the outside world. **Ceramic** comes with a cross-platform `http` plugin that is available as long as the backend provides what is needed for it on the current target.

The **HTTP** part of the backend for **Unity** was implemented using the `UnityWebRequest` class. So far no issue, it worked as expected!

#### 6. Tooling

Like other **Ceramic** targets, when building or running an app, **Ceramic** needs to be capable of exporting a _ready to use_ project or app. Here, we wanted to export an **Unity** project.

I created a project template, first with `Built-in Render Pipeline`, then with `Universal Render Pipeline` enabled by default, so that **Ceramic** can use that when exporting for **Unity**.

With that ready, I could implement the initial project generation and we became able to run this command:

```text
ceramic unity run unity --setup --assets
```

That is enough to export the **Unity** project. You then simply have to open that project, click **Play** and see your app running!

### Promising results

With a **Unity backend** implemented properly, exporting an existing **Ceramic** project to **Unity** became as easy as running the single command showcased above.

Trying that on the [Ceramic Demo example](/examples/ceramic-demo) gives you this result:

<video autoplay loop muted playsinline src="/static/img/ceramic-demo-in-unity-video.mp4"></video>
<div class="caption">The Ceramic Demo project running in Unity Editor.</div>

Yes, it is a fully working **Unity** project that runs your **Ceramic** app **INSIDE the Unity editor**! How cool is that? 🤯🤪🎉

It is the same app as the original one, it works exactly the same, see the original web version for reference:

<iframe src="https://ceramic-engine.com/ceramic-samples/ceramic-demo" width="640" height="480" loading="lazy" frameborder="0"></iframe>
<div class="caption">The original Ceramic Demo project running in the browser.</div>

Let's also try exporting the [Pixel Platformer example](/examples/pixel-platformer) to **Unity**:

<video autoplay loop muted playsinline src="/static/img/ceramic-pixel-platformer-in-unity.mp4"></video>
<div class="caption">The Pixel Platformer example project running in Unity Editor.</div>

Again, the project seems to work just fine! Too good to be true?

### Encountered issues

Reading this article, you might think it was straightforward to go from the roadmap to an actual working implementation that can run **Ceramic** projects inside **Unity**.

Well, it wasn't that simple!

I encountered several issues and challenges that had to be sorted out.

#### Haxe's `C#` target and its quirks

[Haxe](https://haxe.org) is a great tool. Not many programming languages can be transpiled to other target languages like it does. Unfortunately, the `C#` target of `Haxe` is one of the least maintained. Overall, it is working fine, but in some specific situations, you can hit edge cases. I did hit some of them and had to so something about it!

#### Boxing was destroying performances

In `C#`, when you assign a **primitive type** like `int`, `float` or `bool` to an `object` type, it gets **boxed**. That means a new object is allocated in memory implicitly to hold the primitive value and then later becomes garbage.

<p class="extra-info">&#10132; Read more about <a href="https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/types/boxing-and-unboxing">boxing and unboxing in C# here</a>.</p>

In the **Ceramic** `Renderer`, written in `Haxe`, a lot of `Float` and `Int` types are used. They translate into `C#` `double` and `int` **primitive types**. The generated `C#` renderer code contains several casts to `double` or `int`.

Casting a **primitive type** to another **primitive type** shouldn't be a problem for a modern **CPU**. These are well optimized, should be fast and not generate any allocation.

But for some reasons, those casts did generate allocations!

To test that, I created a [bunnymark project](https://apps.jeremyfa.com/bunnymark/) and used the **Unity profiler** to track allocations.

<p class="extra-info">A <strong>bunnymark</strong> is a <em>benchmark with bunnies</em> used to measure raw performances of the engine. Although it is not meant to reflect real world use cases, it can help track down performance improvements or regressions when changing the engine code base.</p>

I noticed that thousands of allocations per second were happening in the `Renderer` class. This `Renderer` class is really a **hot spot** of **Ceramic**. Every visual object is processed by it, many times per second, so anything going wrong there will add up very quickly, and it did!

_Why those allocations?_

Well, in various situations, like when reading a value from an array, the `C#` code `Haxe` generates contains casts that are written this way:

<div class="codename">A cast in the C# code generated by Haxe</div>

```cs
double someDoubleValue =
    ((double) (global::haxe.lang.Runtime.toDouble(
        someDoubleArray.__a[index]
    )) );
```

And checking the source code of this `toDouble()` method used for the cast, in the `haxe.lang.Runtime` class generated by `Haxe` compiler, I found this:

<div class="codename">The C# implementation provided by Haxe to cast to double</div>

```cs
public static double toDouble(object obj) {
    if (( obj == null )) {
        return .0;
    }
    else if (( obj is double )) {
        return ((double) (obj) );
    }
    else {
        return ( obj as global::System.IConvertible )
            .ToDouble(default(global::System.IFormatProvider));
    }
}
```

Do you see the problem? It takes an `object` as argument: that means everytime `toDouble()` was called, the **primitive type** given as argument was **boxed** and generated a new allocation!

_A solution?_

At first, I was thinking I'm stuck. How can I solve this problem without tweaking into the haxe compiler itself that I don't know much about?

But I finally found a pretty straightforward solution to remove all these unneeded allocations: add overloads that accept primitive types for `toDouble()` and `toInt()` methods in the generated `C#` code!

To do so, I automated the process at **build stage**: right after the `C#` code is generated by the `Haxe` compiler for the **Unity** build, **Ceramic** is patching the `Runtime.cs` file that contains the cast methods. It adds the required overloads:

<div class="codename">Additional overloads that use primitive types only</div>

```cs
public static int toInt(int val) { return val; }
public static int toInt(float val) { return (int)val; }
public static int toInt(double val) { return (int)val; }
public static double toDouble(int val) { return (double)val; }
public static double toDouble(float val) { return (double)val; }
public static double toDouble(double val) { return val; }
```

After this change, testing the [bunnymark project](https://apps.jeremyfa.com/bunnymark/) again gave very good results: all those cast allocations had disappeared, and I noticed a strong increase in performances: `60FPS` all the way with thousands of objects moving around!

The patch was definitely worth it! Ultimately, this should probably be fixed directly on the `Haxe` compiler, but in the meantime, being able to patch the generated `C#` code was quite handy.

#### Large projects were failing to build<br />when exporting with IL2CPP enabled

When the **Unity export** was working mostly as expected, I was eager to try it on a larger project like [Make More Views](https://apps.apple.com/fr/app/make-more-views/id1438348967). That game is a project with hundreds of classes made with **Ceramic** and taking advantage of most of its features. It was a great way to test if the **Unity backend** is behaving exactly how it should when everything is put together in a _"real world"_ use case.

<p>
<img src="/static/img/mmv-banner.png" alt="Make More Views key art" />
<div class="caption"><a href="https://apps.apple.com/fr/app/make-more-views/id1438348967">Make More Views</a>, a real use case, with a large code base: ideal to test the new backend!</div>
</p>

Various bugs in the backend were fixed thanks to testing on this larger scale project, but then, when I tried to export (via Unity) to `iOS` with `IL2CPP` enabled, it failed with a C++ compile error!

_What happened?_

It was odd: a smaller project would build just fine using `IL2CPP`, why a bigger one would fail?

<p class="extra-info"><code>IL2CPP</code> is a tool used by <strong>Unity</strong> to transpile the <code>C#</code> code into <code>C++</code> code. It helps to meet the requirements of some targets like <code>iOS</code>. The resulting <code>C++</code> can also provide a good performances boost to a game, compared to the default code export.</p>

After investigating a bit more, I found the culprit in, again, the `C#` code generated by [Haxe](https://haxe.org). The `Haxe` programming language supports **reflection**, and more specifically, you can retrieve a field from its name as `string` at runtime. For this to work in `C#` target, `Haxe` is generating a `FieldLookup.cs` file that embeds a string array (`string[]`) with all the possible field names possible in the code base. Bigger the project becomes, longer is this array!

<div class="codename">An example of generated C# string array</div>

```cs
protected static string[] fields = new string[]{"A", "B", "C",
"a", "b", "c", "d", "h", "i", "m", "q", "r", "t", "x", "y",
"z", "a1", "a2", "dx", "dy", "ff", "gg", "hh", "hx", "id",
"ii", "im", "io", "sm", "to", "tx", "ty", "x1", "x2", "y0",
"y1", "y2", "stencil", "averageFrameTime",
"__cbOnceOwnerUnbindTileQuadsChange", "runNextLoader",
"isGlobal", "moveDistance",
"__cbOnceOwnerUnbindTexturesDensityChange", "tsxRawData",
"__a", "_dx", "_dy", "_id", "_sx", "_sy", "add", "all", "buf",
"cmn", "col", "crc", "cur", "cwd", "dev", "dir", "doc",
"onGridHeightChange", "internalId", "ext", "fps", "get", "gid",
"hex", "ino", "srcAlpha", "key", "len", "mX1", "mX2", ...
```

Apparently, there was a hard limit where the `C++` generated by `IL2CPP` from the `C#` code would fail to compile if that `string` array became too long. It seemed that the compiler didn't like the fact that, in the generated `C++`, there were too many string literals.

Again, tweaking into the haxe compiler was not an option, but I could add another automatic patch at build time, similar to the allocation / boxing fix I did before.

In order to remove all these string literals from the generated code, I wrote a patch that extracts this string list from `FieldLookup.cs`, removes it from the code and instead stores it into a text asset that can be loaded by **Unity** at startup! The resulting data at runtime would be identical, the same as before, so the **reflection** would still work as expected.

<video autoplay loop muted playsinline src="/static/img/mmv-in-unity.mp4"></video>
<div class="caption"><a href="https://apps.apple.com/fr/app/make-more-views/id1438348967">Make More Views</a> running from inside the Unity Editor although it was initially a <strong>Ceramic</strong> project.</div>

This solution worked very well: the large project [Make More Views](https://apps.apple.com/fr/app/make-more-views/id1438348967) was now building and compiling fine and I could successfuly run it on a device 🎉.

#### A few things had to be adapted in Ceramic code base

In general, the `C#` export of `Haxe` is doing what you would expect: it generates code that behave the same as in other targets. But there are a few edge cases where `C#` target is going haywire. I had to change a few fings in **Ceramic** code base to ensure it would compile fine when targetting `C#`.

That said, all these changes where minor and very quick to do. It's just that sometimes, the `Haxe` code you write does not always export usable `C#` on the first try. You might need to fix a few things here and there, but nothing serious!

<p class="extra-info">It might look like I had a lot of issues with <a href="https://haxe.org">Haxe</a>, but don't get me wrong: it's an amazing programming language with awesome features, and it works very well in general. It is made by passionate people, and as a long time <a href="https://haxe.org">Haxe</a> user, I'm very grateful that it exists and is made open source. You should definitely try Haxe!</p>

#### Recycling `Material` and `Mesh` objects

In **Ceramic**, there is no such thing as a `Material` to configure a visual texture or color. Instead, you directly set properties on the visual:

<div class="codename">Changing a visual texture or color in Ceramic</div>

```haxe
var visual = new Quad();
visual.texture = someTexture;
visual.color = Color.BLUE;
...
```

On the backend side, we send **textured triangles** to **Unity** using `Mesh` instances and render that with a `Material`. In order to avoid allocating `Material` and `Mesh` objects at each frame, I had to recycle them, which is what I did. `Material` instances are now created on the fly depending on the required rendering configuration and kept in memory to be reused everytime the same settings need to be used again. Same goes for each `Mesh` instances, that are reused at each frame with updated vertices data.

#### Using Unity's advanced `Mesh` API

Because I needed to send a lot of data to the GPU, I used **Unity**'s Advanced Mesh API to skip the checks Unity normally does on the supplied data. In a way, it's an API closer to what you would do directly with an OpenGL and is a better option performance-wise.

<p class="extra-info">&#10132; More info about Unity's <a href="https://docs.unity3d.com/ScriptReference/Mesh.html">Mesh API</a></p>

## Overall experience

Despite some issues related to the `C#` export of [Haxe](https://haxe.org), I could manage to find solutions to every problem encountered.

It is incredible that running a **2D game engine** like **Ceramic** inside **Unity** is even possible! It works consistently the same as other targets, and performances are fairly good, especially if you enable `IL2CPP` when exporting from **Unity**.

Although this **Unity backend** is quite recent, and new issues could arise in the future when trying new things with it or when newer Unity versions get released, I can really see this solution as a serious option to export a **Ceramic** project to additional platforms like **consoles**.

Even after months of playing with it, I am still amazed when I hit _build for unity_ on a **Ceramic** project and see it work inside the **Unity editor** right after!

I enjoyed experimenting with this idea and finally make it a reality!

## What now?

I hope you liked this article! It has been a long while since I wanted to share those technical details. Feel free to give some feedback in the comments if you want. You can also join the [#ceramic](/discord) channel on Haxe Discord, get some help there, or just share what you want to try with **Ceramic**!

<p class="extra-info">Want to try <strong>Ceramic</strong>?<br />&#10132; <a href="/guides/install-ceramic">Install it and get started</a> now!<br />&#10132; <a href="/guides/platform-setup/#unity">Check platform setup for Unity</a></p>
