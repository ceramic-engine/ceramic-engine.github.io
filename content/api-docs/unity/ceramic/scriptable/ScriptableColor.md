---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ScriptableColor
target: Unity
permalink: api-docs/unity/ceramic/scriptable/ScriptableColor/
---

# ScriptableColor

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/scriptable/ScriptableColor.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.scriptable.ScriptableColor</strong> (Class)</div>

Scriptable wrapper for Color to expose RGB color functionality to scripts.

This class provides comprehensive color manipulation features for scripts.
In scripts, this type is exposed as `Color` (without the Scriptable prefix)
and provides the same functionality as ceramic.Color.

Colors are represented as integers in RGB format (0xRRGGBB). You can use
hex values directly or create colors using various color space methods.

## Usage in Scripts

```haxe
// Use predefined colors
var red = Color.RED;
var blue = Color.BLUE;

// Create from hex value
var purple = 0x9400D3;

// Create from RGB values
var orange = Color.fromRGB(255, 165, 0);

// Create from HSB (hue, saturation, brightness)
var cyan = Color.fromHSB(180, 1.0, 1.0);

// Interpolate between colors
var blend = Color.interpolate(red, blue, 0.5);

// Modify colors
var darkRed = Color.getDarkened(red, 0.3);
var lightBlue = Color.getLightened(blue, 0.3);
```

## Color Spaces

- **RGB**: Red, Green, Blue (0-255 per channel)
- **HSB/HSV**: Hue (0-360°), Saturation (0-1), Brightness/Value (0-1)
- **HSL**: Hue (0-360°), Saturation (0-1), Lightness (0-1)
- **CMYK**: Cyan, Magenta, Yellow, Key/Black (0-1 per channel)
- **HSLuv**: Perceptually uniform color space (if enabled)

Note that colors are stored internally as RGB, so repeated conversions
between color spaces may result in precision loss.

<div class="see"><strong>See:</strong> ceramic.Color The actual implementation, ceramic.scriptable.ScriptableAlphaColor For colors with alpha channel</div>


## Static Members

<div class="signature field-var no-description" id="NONE"><code><span class="field-name">NONE</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#NONE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="WHITE"><code><span class="field-name">WHITE</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#WHITE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GRAY"><code><span class="field-name">GRAY</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#GRAY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLACK"><code><span class="field-name">BLACK</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#BLACK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GREEN"><code><span class="field-name">GREEN</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#GREEN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LIME"><code><span class="field-name">LIME</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#LIME"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="YELLOW"><code><span class="field-name">YELLOW</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#YELLOW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ORANGE"><code><span class="field-name">ORANGE</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#ORANGE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RED"><code><span class="field-name">RED</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#RED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PURPLE"><code><span class="field-name">PURPLE</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#PURPLE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BLUE"><code><span class="field-name">BLUE</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#BLUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BROWN"><code><span class="field-name">BROWN</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#BROWN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PINK"><code><span class="field-name">PINK</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#PINK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MAGENTA"><code><span class="field-name">MAGENTA</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#MAGENTA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CYAN"><code><span class="field-name">CYAN</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#CYAN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">minSatutation</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minBrightness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a random color (away from white or black)


| Name | Type | Default |
|------|------|---------|
| `minSatutation` | [Float](/api-docs/unity/Float/) | `0.5` |
| `minBrightness` | [Float](/api-docs/unity/Float/) | `0.5` |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromInt"><code><span class="field-name">fromInt</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a color from the least significant four bytes of an Int



| Name | Type | Description |
|------|------|-------------|
| `value` | [Int](/api-docs/unity/Int/) | And Int with bytes in the format 0xRRGGBB  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromRGB"><code><span class="field-name">fromRGB</span><span class="parenthesis">(</span><span class="arg-name">red</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">green</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">blue</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromRGB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a color from integer RGB values (0 to 255)



| Name | Type | Description |
|------|------|-------------|
| `red` | [Int](/api-docs/unity/Int/) | The red value of the color from 0 to 255  |
| `green` | [Int](/api-docs/unity/Int/) | The green value of the color from 0 to 255  |
| `blue` | [Int](/api-docs/unity/Int/) | The green value of the color from 0 to 255  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromRGBFloat"><code><span class="field-name">fromRGBFloat</span><span class="parenthesis">(</span><span class="arg-name">red</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">green</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">blue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromRGBFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a color from float RGB values (0 to 1)



| Name | Type | Description |
|------|------|-------------|
| `red` | [Float](/api-docs/unity/Float/) | The red value of the color from 0 to 1  |
| `green` | [Float](/api-docs/unity/Float/) | The green value of the color from 0 to 1  |
| `blue` | [Float](/api-docs/unity/Float/) | The green value of the color from 0 to 1  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromCMYK"><code><span class="field-name">fromCMYK</span><span class="parenthesis">(</span><span class="arg-name">cyan</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">magenta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">yellow</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">black</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromCMYK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a color from CMYK values (0 to 1)



| Name | Type | Description |
|------|------|-------------|
| `cyan` | [Float](/api-docs/unity/Float/) | The cyan value of the color from 0 to 1  |
| `magenta` | [Float](/api-docs/unity/Float/) | The magenta value of the color from 0 to 1  |
| `yellow` | [Float](/api-docs/unity/Float/) | The yellow value of the color from 0 to 1  |
| `black` | [Float](/api-docs/unity/Float/) | The black value of the color from 0 to 1  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromHSB"><code><span class="field-name">fromHSB</span><span class="parenthesis">(</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">brightness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromHSB"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a color from HSB (aka HSV) components.



| Name | Type | Description |
|------|------|-------------|
| `hue` | [Float](/api-docs/unity/Float/) | A number between 0 and 360, indicating position on a color strip or wheel.  |
| `saturation` | [Float](/api-docs/unity/Float/) | A number between 0 and 1, indicating how colorful or gray the color should be. 0 is gray, 1 is vibrant.  |
| `brightness` | [Float](/api-docs/unity/Float/) | (aka value) A number between 0 and 1, indicating how bright the color should be. 0 is black, 1 is full bright.  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromHSL"><code><span class="field-name">fromHSL</span><span class="parenthesis">(</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">lightness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromHSL"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a color from HSL components.



| Name | Type | Description |
|------|------|-------------|
| `hue` | [Float](/api-docs/unity/Float/) | A number between 0 and 360, indicating position on a color strip or wheel.  |
| `saturation` | [Float](/api-docs/unity/Float/) | A number between 0 and 1, indicating how colorful or gray the color should be. 0 is gray, 1 is vibrant.  |
| `lightness` | [Float](/api-docs/unity/Float/) | A number between 0 and 1, indicating the lightness of the color  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromString"><code><span class="field-name">fromString</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#fromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a `String` and returns a `Color` or `null` if the `String` couldn't be parsed.

Examples (input -> output in hex):

- `0x00FF00`    -> `0x00FF00`
- `#0000FF`     -> `0x0000FF`
- `GRAY`        -> `0x808080`
- `blue`        -> `0x0000FF`



| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/unity/String/) | The string to be parsed  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[ceramic.Color](/api-docs/unity/ceramic/Color/)> | A `Color` or `null` if the `String` couldn't be parsed |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getHSBColorWheel"><code><span class="field-name">getHSBColorWheel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getHSBColorWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get HSB color wheel values in an array which will be 360 elements in size


| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[ceramic.Color](/api-docs/unity/ceramic/Color/)> | HSB color wheel as Array of Colors |

<hr class="field-separator" />

<div class="signature field-method has-description" id="interpolate"><code><span class="field-name">interpolate</span><span class="parenthesis">(</span><span class="arg-name">color1</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">color2</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">factor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.5</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#interpolate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get an interpolated color based on two different colors.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color1` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | | The first color  |
| `color2` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | | The second color  |
| `factor` | [Float](/api-docs/unity/Float/) | `0.5` | value from 0 to 1 representing how much to shift color1 toward color2  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The interpolated color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="gradient"><code><span class="field-name">gradient</span><span class="parenthesis">(</span><span class="arg-name">color1</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">color2</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">steps</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ease</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#gradient"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a gradient from one color to another



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color1` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | | The color to shift from  |
| `color2` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | | The color to shift to  |
| `steps` | [Int](/api-docs/unity/Int/) | | How many colors the gradient should have  |
| `ease` | Function | *(optional)* | An optional easing function, such as those provided in FlxEase  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[ceramic.Color](/api-docs/unity/ceramic/Color/)> | An array of colors of length steps, shifting from color1 to color2 |

<hr class="field-separator" />

<div class="signature field-method has-description" id="multiply"><code><span class="field-name">multiply</span><span class="parenthesis">(</span><span class="arg-name">lhs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">rhs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#multiply"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Multiply the RGB channels of two Colors

| Name | Type |
|------|------|
| `lhs` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |
| `rhs` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="add"><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">lhs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">rhs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Add the RGB channels of two Colors

| Name | Type |
|------|------|
| `lhs` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |
| `rhs` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="subtract"><code><span class="field-name">subtract</span><span class="parenthesis">(</span><span class="arg-name">lhs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">rhs</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#subtract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Subtract the RGB channels of one Color from another

| Name | Type |
|------|------|
| `lhs` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |
| `rhs` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toHexString"><code><span class="field-name">toHexString</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toHexString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a String representation of the color in the format



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | |  |
| `prefix` | [Bool](/api-docs/unity/Bool/) | `true` | Whether to include "0x" prefix at start of string  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A string of length 10 in the format 0xAARRGGBB |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toWebString"><code><span class="field-name">toWebString</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toWebString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return a String representation of the color in the format #RRGGBB



| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A string of length 7 in the format #RRGGBB |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getColorInfo"><code><span class="field-name">getColorInfo</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getColorInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a string of color information about this color



| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A string containing information about this color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDarkened"><code><span class="field-name">getDarkened</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">factor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#getDarkened"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a darkened version of this color



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | |  |
| `factor` | [Float](/api-docs/unity/Float/) | `0.2` | value from 0 to 1 of how much to progress toward black.  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | A darkened version of this color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLightened"><code><span class="field-name">getLightened</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">factor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0.2</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#getLightened"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get a lightened version of this color



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | |  |
| `factor` | [Float](/api-docs/unity/Float/) | `0.2` | value from 0 to 1 of how much to progress toward white.  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | A lightened version of this color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInverted"><code><span class="field-name">getInverted</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#getInverted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the inversion of this color



| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The inversion of this color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hue"><code><span class="field-name">hue</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#hue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the hue of the color in degrees (from 0 to 359)

| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="saturation"><code><span class="field-name">saturation</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#saturation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the saturation of the color (from 0 to 1)

| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="brightness"><code><span class="field-name">brightness</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#brightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the brightness (aka value) of the color (from 0 to 1)

| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="lightness"><code><span class="field-name">lightness</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lightness"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the lightness of the color (from 0 to 1)

| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="red"><code><span class="field-name">red</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#red"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="green"><code><span class="field-name">green</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#green"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="blue"><code><span class="field-name">blue</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#blue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="redFloat"><code><span class="field-name">redFloat</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#redFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="greenFloat"><code><span class="field-name">greenFloat</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#greenFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="blueFloat"><code><span class="field-name">blueFloat</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#blueFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromHSLuv"><code><span class="field-name">fromHSLuv</span><span class="parenthesis">(</span><span class="arg-name">hue</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">saturation</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">lightness</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fromHSLuv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generate a color from HSLuv components.



| Name | Type | Description |
|------|------|-------------|
| `hue` | [Float](/api-docs/unity/Float/) | A number between 0 and 360, indicating position on a color strip or wheel.  |
| `saturation` | [Float](/api-docs/unity/Float/) | A number between 0 and 1, indicating how colorful or gray the color should be. 0 is gray, 1 is vibrant.  |
| `lightness` | [Float](/api-docs/unity/Float/) | A number between 0 and 1, indicating the lightness of the color  |

| Returns | Description |
|---------|-------------|
| [ceramic.Color](/api-docs/unity/ceramic/Color/) | The color as a Color |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getHSLuv"><code><span class="field-name">getHSLuv</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getHSLuv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get HSLuv components from the color instance.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `color` | [ceramic.Color](/api-docs/unity/ceramic/Color/) | |  |
| `result` | [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | *(optional)* | A pre-allocated array to store the result into.  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Float](/api-docs/unity/Float/)> | The HSLuv components as a float array |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

