---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: TextView
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/TextView/
---

# TextView

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/TextView.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Visual/">Visual</a> → <a href="/api-docs/clay-web/ceramic/Quad/">Quad</a> → <a href="/api-docs/clay-web/ceramic/Layer/">Layer</a> → <a href="/api-docs/clay-web/ceramic/View/">View</a> → <strong>ceramic.TextView</strong> (Class) → <a href="/api-docs/clay-web/elements/Button/">elements.Button</a>, <a href="/api-docs/clay-web/elements/EntypoIconView/">elements.EntypoIconView</a>, <a href="/api-docs/clay-web/elements/LabelView/">elements.LabelView</a></div>

A view that displays text with automatic sizing and alignment options.

TextView wraps a Text visual and provides additional layout features:
- Automatic size computation based on text content
- Vertical and horizontal alignment within the view bounds
- Text wrapping with fitWidth support
- Padding support for text positioning
- Special centering option for single-line text

This is the preferred way to display text within UI layouts as it
properly integrates with the View sizing system.

```haxe
var label = new TextView();
label.content = "Hello World";
label.font = myFont;
label.textColor = Color.WHITE;
label.align = CENTER;
label.verticalAlign = CENTER;
label.viewSize(200, 50); // Text centered in 200x50 area
```

<div class="see"><strong>See:</strong> Text The underlying text visual, View The base view class</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="text"><div class="plugin-name">ui</div><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Text/" class="type-link">Text</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The underlying Text visual that renders the actual text.
This is automatically created and managed by the TextView.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="verticalAlign"><div class="plugin-name">ui</div><code><span class="field-name">verticalAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#verticalAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical alignment of the text within the view bounds.
- TOP: Align to top edge (plus padding)
- CENTER: Center vertically
- BOTTOM: Align to bottom edge (minus padding)
Default: TOP

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="font"><div class="plugin-name">ui</div><code><span class="field-name">font</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/BitmapFont/" class="type-link">BitmapFont</a></code><a class="header-anchor" href="#font"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The bitmap font used to render the text.
Changing the font will trigger a layout update.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="preRenderedSize"><div class="plugin-name">ui</div><code><span class="field-name">preRenderedSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#preRenderedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pre-rendered font size for performance optimization.
See Text.preRenderedSize for details.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textColor"><div class="plugin-name">ui</div><code><span class="field-name">textColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#textColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the text.
This is a convenience property that maps to text.color.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="textAlpha"><div class="plugin-name">ui</div><code><span class="field-name">textAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The alpha transparency of the text (0.0 to 1.0).
This is a convenience property that maps to text.alpha.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="content"><div class="plugin-name">ui</div><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text content to display.
Supports multiline text with \n line breaks.
Setting this will trigger a layout update.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pointSize"><div class="plugin-name">ui</div><code><span class="field-name">pointSize</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The point size of the text.
This scales the font size relative to the font's native size.
Setting this will trigger a layout update.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="minHeight"><div class="plugin-name">ui</div><code><span class="field-name">minHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum height for the view.
The view will not be smaller than this height even if the text is shorter.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lineHeight"><div class="plugin-name">ui</div><code><span class="field-name">lineHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#lineHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Line height multiplier for text spacing.
Values > 1.0 increase space between lines.
Values < 1.0 decrease space between lines.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="letterSpacing"><div class="plugin-name">ui</div><code><span class="field-name">letterSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#letterSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional spacing between letters in pixels.
Positive values increase spacing, negative values decrease it.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="align"><div class="plugin-name">ui</div><code><span class="field-name">align</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal text alignment within the view.
- LEFT: Align text to the left
- CENTER: Center text horizontally
- RIGHT: Align text to the right

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="centerIfOneLine"><div class="plugin-name">ui</div><code><span class="field-name">centerIfOneLine</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#centerIfOneLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, automatically centers the text horizontally when it's only one line.
This overrides the align property for single-line text.
Useful for buttons or labels that should center short text.
Default: false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="maxLineDiff"><div class="plugin-name">ui</div><code><span class="field-name">maxLineDiff</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxLineDiff"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum line width difference ratio for text wrapping.
Controls how evenly lines are distributed when wrapping.
See Text.maxLineDiff for details.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="noFitWidth"><div class="plugin-name">ui</div><code><span class="field-name">noFitWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noFitWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If true, disables automatic text wrapping based on view width.
The text will render on a single line unless it contains explicit line breaks.
Default: false

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSize"><div class="plugin-name">ui</div><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">layoutMask</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the size of the view based on text content.
This method automatically sizes the view to fit the text,
respecting any explicit width/height constraints.

| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/clay-web/Float/) |
| `parentHeight` | [Float](/api-docs/clay-web/Float/) |
| `layoutMask` | [ViewLayoutMask](/api-docs/clay-web/ceramic/ViewLayoutMask/) |
| `persist` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new TextView.
Automatically creates the underlying Text visual with sensible defaults.

## Private Members

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position the text within the view based on alignment settings.
Handles all combinations of vertical and horizontal alignment,
taking padding into account.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

