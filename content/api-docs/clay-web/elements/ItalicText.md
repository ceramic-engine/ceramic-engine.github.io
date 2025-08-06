---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ItalicText
target: Clay (Web)
permalink: api-docs/clay-web/elements/ItalicText/
---

# ItalicText

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ItalicText.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">ceramic.Entity</a> → <strong>elements.ItalicText</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/Component/">ceramic.Component</a></div>

A component that applies italic-style skewing to Text visuals.

This component simulates italic text by applying a horizontal skew transform
to each glyph quad in a Text visual. This is useful when true italic fonts
are not available or when a consistent italic angle is desired across
different fonts.

## Features

- Applies uniform skew to all glyphs
- Automatically updates when text content changes
- Configurable skew angle

## Usage Example

```haxe
var text = new Text();
text.content = "Hello World";
text.component(new ItalicText());

// Adjust italic angle (default is 10 degrees)
var italic = text.component<ItalicText>();
italic.skewX = 15; // More pronounced italic
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/Text/">ceramic.Text</a>, <a href="/api-docs/clay-web/ceramic/GlyphQuad/">ceramic.GlyphQuad</a></div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="entity"><div class="plugin-name">elements</div><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Text/" class="type-link">ceramic.Text</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Text entity this component is attached to.
Automatically set when the component is bound.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="skewX"><div class="plugin-name">elements</div><code><span class="field-name">skewX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#skewX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The horizontal skew angle in degrees to apply to each glyph.
Positive values skew to the right (standard italic).
Default is 10 degrees.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">elements</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">elements</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this component is bound to a Text entity.
Sets up listeners to apply italic transform when glyphs change.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyItalicTransform"><div class="plugin-name">elements</div><code><span class="field-name">applyItalicTransform</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyItalicTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Applies the italic skew transform to all glyph quads in the text.
Called automatically when text content or skewX changes.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">elements</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [ceramic.Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">elements</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">ceramic.Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ceramic.Entity](/api-docs/clay-web/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

