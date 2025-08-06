---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ui
title: View
target: Unity
permalink: api-docs/unity/ceramic/View/
---

# View

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/ui/runtime/src/ceramic/View.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <a href="/api-docs/unity/ceramic/Visual/">Visual</a> → <a href="/api-docs/unity/ceramic/Quad/">Quad</a> → <a href="/api-docs/unity/ceramic/Layer/">Layer</a> → <strong>ceramic.View</strong> (Class) → <a href="/api-docs/unity/ceramic/ImageView/">ImageView</a>, <a href="/api-docs/unity/ceramic/LayersLayout/">LayersLayout</a>, <a href="/api-docs/unity/ceramic/LinearLayout/">LinearLayout</a>, <a href="/api-docs/unity/ceramic/ScrollView/">ScrollView</a>, <a href="/api-docs/unity/ceramic/TextView/">TextView</a>, <a href="/api-docs/unity/elements/ColorPickerHSBGradientView/">elements.ColorPickerHSBGradientView</a>, <a href="/api-docs/unity/elements/ColorPickerHSBSpectrumView/">elements.ColorPickerHSBSpectrumView</a>, <a href="/api-docs/unity/elements/ColorPickerHSLuvGradientView/">elements.ColorPickerHSLuvGradientView</a>, <a href="/api-docs/unity/elements/ColorPickerHSLuvSpectrumView/">elements.ColorPickerHSLuvSpectrumView</a>, <a href="/api-docs/unity/elements/ColorPickerPaletteColorView/">elements.ColorPickerPaletteColorView</a>, <a href="/api-docs/unity/elements/ListView/">elements.ListView</a>, <a href="/api-docs/unity/elements/SelectListView/">elements.SelectListView</a>, <a href="/api-docs/unity/elements/Separator/">elements.Separator</a>, <a href="/api-docs/unity/elements/VisualContainerView/">elements.VisualContainerView</a></div>

The base view class for building UI layouts in Ceramic.

View extends Layer and adds sophisticated layout capabilities:
- Flexible sizing with fixed, percentage, fill, and auto modes
- Padding and offset support
- Border rendering with customizable colors and sizes
- Automatic layout computation and propagation
- Integration with the view layout system

Views can be composed hierarchically to create complex UI layouts.
The layout system automatically computes sizes based on constraints
and propagates changes through the view tree.

Key concepts:
- viewWidth/viewHeight: Define how the view should be sized
- computedSize: The actual size after layout computation
- padding: Inner spacing that affects content placement
- offset: Position adjustment relative to default layout position
- flex: Relative sizing weight for flexible layouts

```haxe
var container = new View();
container.viewSize(ViewSize.fill(), 200); // Full width, 200px height
container.padding(10); // 10px padding on all sides
container.borderSize = 2;
container.borderColor = Color.WHITE;
```

<div class="see"><strong>See:</strong> LinearLayout For arranging views in rows/columns, LayersLayout For stacking views, ViewSize For sizing options</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="requestLayout"><div class="plugin-name">ui</div><code><span class="field-name">requestLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#requestLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Request a layout update for all views in the next frame.
This is called automatically when view properties change.
Multiple calls are batched into a single layout pass.

```haxe
view.width = 200; // Automatically calls requestLayout()
View.requestLayout(); // Manual call if needed
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="subviews"><div class="plugin-name">ui</div><code><span class="field-name">subviews</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="#" class="type-link">View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#subviews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Same as `children` but typed as a list of `View` instances instead of `Visual`.
Only contains children that are of `View` type, making it convenient for
layout operations that only affect View children.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="computedSize"><div class="plugin-name">ui</div><code><span class="field-name">computedSize</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ComputedViewSize/" class="type-link">ComputedViewSize</a></code><a class="header-anchor" href="#computedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ComputedSize after being computed by View layout engine from constraints and `viewWidth`/`viewHeight`.
This represents the actual dimensions the view will have after layout computation,
which may differ from explicitly set dimensions due to constraints.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="viewWidth"><div class="plugin-name">ui</div><code><span class="field-name">viewWidth</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewSize/" class="type-link">ViewSize</a></code><a class="header-anchor" href="#viewWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width that will be processed by View layout engine.
Options:
- Numeric value: Fixed width in pixels
- ViewSize.percent(n): Percentage of parent width
- ViewSize.fill(): Fill available parent width
- ViewSize.auto(): Size based on content
Default: ViewSize.auto()

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="viewHeight"><div class="plugin-name">ui</div><code><span class="field-name">viewHeight</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewSize/" class="type-link">ViewSize</a></code><a class="header-anchor" href="#viewHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height that will be processed by View layout engine.
Options:
- Numeric value: Fixed height in pixels
- ViewSize.percent(n): Percentage of parent height
- ViewSize.fill(): Fill available parent height
- ViewSize.auto(): Size based on content
Default: ViewSize.auto()

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paddingLeft"><div class="plugin-name">ui</div><code><span class="field-name">paddingLeft</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#paddingLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Left padding in pixels.
Space between the left edge and content.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paddingRight"><div class="plugin-name">ui</div><code><span class="field-name">paddingRight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#paddingRight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right padding in pixels.
Space between the right edge and content.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paddingTop"><div class="plugin-name">ui</div><code><span class="field-name">paddingTop</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#paddingTop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top padding in pixels.
Space between the top edge and content.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="paddingBottom"><div class="plugin-name">ui</div><code><span class="field-name">paddingBottom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#paddingBottom"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bottom padding in pixels.
Space between the bottom edge and content.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetX"><div class="plugin-name">ui</div><code><span class="field-name">offsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset in pixels.
This offset is added to the view's X position after layout computation.
Only affects views in layouts that support offsets (LinearLayout, LayersLayout).
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="offsetY"><div class="plugin-name">ui</div><code><span class="field-name">offsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#offsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset in pixels.
This offset is added to the view's Y position after layout computation.
Only affects views in layouts that support offsets (LinearLayout, LayersLayout).
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="flex"><div class="plugin-name">ui</div><code><span class="field-name">flex</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flex weight for flexible layouts.
Determines how much space this view should take relative to siblings.
Only used in layouts that support flex distribution (e.g., LinearLayout).

```haxe
// Three views in a horizontal layout:
view1.flex = 1; // Takes 1/6 of space
view2.flex = 2; // Takes 2/6 of space
view3.flex = 3; // Takes 3/6 of space
```
Default: 1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="canLayout"><div class="plugin-name">ui</div><code><span class="field-name">canLayout</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#canLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether this view participates in layout updates.
Set to false to temporarily prevent layout computation.
Useful for optimization when making multiple changes.
Default: true (after initialization)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="layoutDirty"><div class="plugin-name">ui</div><code><span class="field-name">layoutDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#layoutDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates whether this view needs layout recomputation.
Automatically set to true when properties affecting layout change.
The layout system will process dirty views in the next update cycle.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderDepth"><div class="plugin-name">ui</div><code><span class="field-name">borderDepth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Z-depth of the border visual.
Controls rendering order relative to view content.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderAlpha"><div class="plugin-name">ui</div><code><span class="field-name">borderAlpha</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alpha transparency of the border (0.0 to 1.0).
Default: 1 (fully opaque)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderPosition"><div class="plugin-name">ui</div><code><span class="field-name">borderPosition</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#borderPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the border relative to view bounds.
- INSIDE: Border is drawn inside the view bounds
- OUTSIDE: Border is drawn outside the view bounds
- CENTER: Border is centered on the view edge
Default: INSIDE

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderSize"><div class="plugin-name">ui</div><code><span class="field-name">borderSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Border thickness in pixels for all sides.
Set to 0 to hide the border.
Individual side sizes can override this value.
Default: 0

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderTopSize"><div class="plugin-name">ui</div><code><span class="field-name">borderTopSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderTopSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top border thickness in pixels.
Set to -1 to use borderSize value.
Default: -1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderBottomSize"><div class="plugin-name">ui</div><code><span class="field-name">borderBottomSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderBottomSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bottom border thickness in pixels.
Set to -1 to use borderSize value.
Default: -1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderLeftSize"><div class="plugin-name">ui</div><code><span class="field-name">borderLeftSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderLeftSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Left border thickness in pixels.
Set to -1 to use borderSize value.
Default: -1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderRightSize"><div class="plugin-name">ui</div><code><span class="field-name">borderRightSize</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#borderRightSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right border thickness in pixels.
Set to -1 to use borderSize value.
Default: -1

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderColor"><div class="plugin-name">ui</div><code><span class="field-name">borderColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Border color for all sides.
Individual side colors can override this value.
Default: Color.GRAY

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderTopColor"><div class="plugin-name">ui</div><code><span class="field-name">borderTopColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderTopColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top border color.
Set to Color.NONE to use borderColor value.
Default: Color.NONE

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderBottomColor"><div class="plugin-name">ui</div><code><span class="field-name">borderBottomColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderBottomColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bottom border color.
Set to Color.NONE to use borderColor value.
Default: Color.NONE

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderLeftColor"><div class="plugin-name">ui</div><code><span class="field-name">borderLeftColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderLeftColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Left border color.
Set to Color.NONE to use borderColor value.
Default: Color.NONE

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="borderRightColor"><div class="plugin-name">ui</div><code><span class="field-name">borderRightColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#borderRightColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Right border color.
Set to Color.NONE to use borderColor value.
Default: Color.NONE

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parentView"><div class="plugin-name">ui</div><code><span class="field-name">parentView</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parent View of this view.
Returns customParentView if set, otherwise checks if the visual parent is a View.
This property is crucial for layout propagation.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="viewSize"><div class="plugin-name">ui</div><code><span class="field-name">viewSize</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewSize/" class="type-link">ViewSize</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewSize/" class="type-link">ViewSize</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#viewSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set `viewWidth` and `viewHeight` in a single call.


| Name | Type | Description |
|------|------|-------------|
| `width` | [ViewSize](/api-docs/unity/ceramic/ViewSize/) | The width sizing mode  |
| `height` | [ViewSize](/api-docs/unity/ceramic/ViewSize/) | The height sizing mode |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="padding"><div class="plugin-name">ui</div><code><span class="field-name">padding</span><span class="parenthesis">(</span><span class="arg-name">top</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">bottom</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#padding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set padding using CSS-style shorthand.
Padding creates space inside the view between its edges and content.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `top` | [Float](/api-docs/unity/Float/) | | Top padding (or all sides if only parameter)  |
| `right` | [Float](/api-docs/unity/Float/) | *(optional)* | Right padding (or horizontal if 2 params)  |
| `bottom` | [Float](/api-docs/unity/Float/) | *(optional)* | Bottom padding (or bottom if 3+ params)  |
| `left` | [Float](/api-docs/unity/Float/) | *(optional)* | Left padding * ```haxe padding(10); // All sides: 10px padding(10, 20); // Vertical: 10px, Horizontal: 20px padding(10, 20, 30); // Top: 10px, Horizontal: 20px, Bottom: 30px padding(10, 20, 30, 40); // Top: 10px, Right: 20px, Bottom: 30px, Left: 40px ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="offset"><div class="plugin-name">ui</div><code><span class="field-name">offset</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#offset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Offset this view position by `x` and `y`.
This offset is added to the view's resulting position
from its default layout. This has only effect when the view is layouted
by a layout class that handle offsets: `LinearLayout`, `LayersLayout`.
Useful for fine-tuning positions without breaking the layout flow.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/unity/Float/) | Horizontal offset in pixels  |
| `y` | [Float](/api-docs/unity/Float/) | Vertical offset in pixels |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="persistComputedSize"><div class="plugin-name">ui</div><code><span class="field-name">persistComputedSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">computedWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">computedHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ComputedViewSize/" class="type-link">ComputedViewSize</a></code><a class="header-anchor" href="#persistComputedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/unity/Float/) |
| `parentHeight` | [Float](/api-docs/unity/Float/) |
| `parentLayoutMask` | [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) |
| `computedWidth` | [Float](/api-docs/unity/Float/) |
| `computedHeight` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [ComputedViewSize](/api-docs/unity/ceramic/ComputedViewSize/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="assignComputedSize"><div class="plugin-name">ui</div><code><span class="field-name">assignComputedSize</span><span class="parenthesis">(</span><span class="arg-name">computedWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">computedHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ComputedViewSize/" class="type-link">ComputedViewSize</a></code><a class="header-anchor" href="#assignComputedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `computedWidth` | [Float](/api-docs/unity/Float/) |
| `computedHeight` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [ComputedViewSize](/api-docs/unity/ceramic/ComputedViewSize/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="hasPersistentComputedSizeWithContext"><div class="plugin-name">ui</div><code><span class="field-name">hasPersistentComputedSizeWithContext</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasPersistentComputedSizeWithContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/unity/Float/) |
| `parentHeight` | [Float](/api-docs/unity/Float/) |
| `parentLayoutMask` | [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resetComputedSize"><div class="plugin-name">ui</div><code><span class="field-name">resetComputedSize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetComputedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `recursive` | [Bool](/api-docs/unity/Bool/) | `false` |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="shouldResetComputedSize"><div class="plugin-name">ui</div><code><span class="field-name">shouldResetComputedSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldResetComputedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="layoutDependsOnParent"><div class="plugin-name">ui</div><code><span class="field-name">layoutDependsOnParent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#layoutDependsOnParent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="add"><div class="plugin-name">ui</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/unity/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="remove"><div class="plugin-name">ui</div><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `visual` | [Visual](/api-docs/unity/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="autorun"><div class="plugin-name">ui</div><code><span class="field-name">autorun</span><span class="parenthesis">(</span><span class="arg-name">run</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">afterRun</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/tracker/Autorun/" class="type-link">tracker.Autorun</a></code><a class="header-anchor" href="#autorun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `Autorun` instance with the given callback associated with the current entity.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `run` | Function | | The run callback  |
| `afterRun` | Function | *(optional)* |  |

| Returns | Description |
|---------|-------------|
| [tracker.Autorun](/api-docs/unity/tracker/Autorun/) | The autorun instance |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">ui</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="removeAllViews"><div class="plugin-name">ui</div><code><span class="field-name">removeAllViews</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeAllViews"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove all child views from this view.
This is more efficient than removing views one by one.
Only affects View children, not other Visual types.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="autoComputeSize"><div class="plugin-name">ui</div><code><span class="field-name">autoComputeSize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">applyComputedSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#autoComputeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the view's size based on its sizing modes and constraints.
This forces a size computation even if the view is not dirty.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `applyComputedSize` | [Bool](/api-docs/unity/Bool/) | `false` | if `true`, immediately apply the computed size using size() * ```haxe view.viewSize(ViewSize.auto(), ViewSize.fill()); view.autoComputeSize(true); // Computes and applies size ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="autoComputeSizeIfNeeded"><div class="plugin-name">ui</div><code><span class="field-name">autoComputeSizeIfNeeded</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">applyComputedSize</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#autoComputeSizeIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute the view's size only if it hasn't been computed for the current context.
More efficient than autoComputeSize() as it avoids redundant calculations.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `applyComputedSize` | [Bool](/api-docs/unity/Bool/) | `false` | if `true`, immediately apply the computed size using size() |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyComputedSize"><div class="plugin-name">ui</div><code><span class="field-name">applyComputedSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyComputedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the computed size to the view's actual width and height.
This is equivalent to `size(computedSize.computedWidth, computedSize.computedHeight)`.
Does nothing if no computed size is available.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSizeWithIntrinsicBounds"><div class="plugin-name">ui</div><code><span class="field-name">computeSizeWithIntrinsicBounds</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">layoutMask</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">intrinsicWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">intrinsicHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#computeSizeWithIntrinsicBounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compute size while maintaining aspect ratio of intrinsic bounds.
Useful for images, videos, or any content with a natural aspect ratio.



| Name | Type | Description |
|------|------|-------------|
| `parentWidth` | [Float](/api-docs/unity/Float/) | Available width from parent  |
| `parentHeight` | [Float](/api-docs/unity/Float/) | Available height from parent  |
| `layoutMask` | [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) | Constraints on how the view can be sized  |
| `persist` | [Bool](/api-docs/unity/Bool/) | Whether to persist the computed size for reuse  |
| `intrinsicWidth` | [Float](/api-docs/unity/Float/) | Natural width of the content  |
| `intrinsicHeight` | [Float](/api-docs/unity/Float/) | Natural height of the content  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Scale factor applied to fit the content |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="computeSizeIfNeeded"><div class="plugin-name">ui</div><code><span class="field-name">computeSizeIfNeeded</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">layoutMask</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSizeIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/unity/Float/) |
| `parentHeight` | [Float](/api-docs/unity/Float/) |
| `layoutMask` | [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) |
| `persist` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="computeSize"><div class="plugin-name">ui</div><code><span class="field-name">computeSize</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">layoutMask</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="operator">,</span> <span class="arg-name">persist</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Core size computation method.
Calculates the view's dimensions based on its sizing mode and parent constraints.



| Name | Type | Description |
|------|------|-------------|
| `parentWidth` | [Float](/api-docs/unity/Float/) | Available width from parent container  |
| `parentHeight` | [Float](/api-docs/unity/Float/) | Available height from parent container  |
| `layoutMask` | [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) | Constraints defining how the view can grow/shrink  |
| `persist` | [Bool](/api-docs/unity/Bool/) | Whether to cache the result for the given context |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindToScreenSize"><div class="plugin-name">ui</div><code><span class="field-name">bindToScreenSize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">factor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindToScreenSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind this view's size to the screen dimensions.
The view will automatically resize when the screen size changes.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `factor` | [Float](/api-docs/unity/Float/) | `1.0` | Scale factor to apply to screen dimensions (default: 1.0) * ```haxe view.bindToScreenSize(); // Full screen size view.bindToScreenSize(0.5); // Half screen size ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindToTargetSize"><div class="plugin-name">ui</div><code><span class="field-name">bindToTargetSize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindToTargetSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bind this view's size to the target resolution defined in settings.
Useful for maintaining consistent UI across different screen sizes.
The view will automatically resize when target settings change.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="percent"><div class="plugin-name">ui</div><code><span class="field-name">percent</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#percent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a percentage-based ViewSize value.


| Name | Type | Description |
|------|------|-------------|
| `value` | [Float](/api-docs/unity/Float/) | Percentage (0-100)  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Encoded percentage value for use with viewWidth/viewHeight |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="percentToFloat"><div class="plugin-name">ui</div><code><span class="field-name">percentToFloat</span><span class="parenthesis">(</span><span class="arg-name">encoded</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#percentToFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `encoded` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="fill"><div class="plugin-name">ui</div><code><span class="field-name">fill</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#fill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a fill ViewSize value.
The view will fill all available space in its parent.

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Fill size constant |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="auto"><div class="plugin-name">ui</div><code><span class="field-name">auto</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#auto"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create an auto ViewSize value.
The view will size itself based on its content.

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/unity/Float/) | Auto size constant |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">ui</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new View.
Initializes the view with sensible defaults and registers it with the ViewSystem.
Layout computation is deferred until after initialization to prevent premature calculations.

## Private Members

<div class="signature field-var has-description has-plugin" id="border"><div class="plugin-name">ui</div><code><span class="field-name">border</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Border/" class="type-link">Border</a></code><a class="header-anchor" href="#border"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal border visual component.
Created on demand when border properties are set.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="persistedComputedSizes"><div class="plugin-name">ui</div><code><span class="field-name">persistedComputedSizes</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ComputedViewSize/" class="type-link">ComputedViewSize</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#persistedComputedSizes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="customParentView"><div class="plugin-name">ui</div><code><span class="field-name">customParentView</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">View</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#customParentView"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom parent view override.
Used by containers like ScrollView to establish parent-child relationships
without actual visual hierarchy changes.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLayout"><div class="plugin-name">ui</div><code><span class="field-name">emitLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the view's layout is computed.
This happens after size computation and before visual positioning.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shouldDisplayBorder"><div class="plugin-name">ui</div><code><span class="field-name">shouldDisplayBorder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#shouldDisplayBorder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if any border should be displayed based on size settings.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | true if any border side has a size > 0 |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initBorder"><div class="plugin-name">ui</div><code><span class="field-name">initBorder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initBorder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create and initialize the border visual component.
Called automatically when border properties are set.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateBorder"><div class="plugin-name">ui</div><code><span class="field-name">updateBorder</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateBorder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update or create the border visual based on current properties.
Handles border creation, updates, and cleanup when no border is needed.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="persistedComputedSizeForContext"><div class="plugin-name">ui</div><code><span class="field-name">persistedComputedSizeForContext</span><span class="parenthesis">(</span><span class="arg-name">parentWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentHeight</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">parentLayoutMask</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ViewLayoutMask/" class="type-link">ViewLayoutMask</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/ComputedViewSize/" class="type-link">ComputedViewSize</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#persistedComputedSizeForContext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parentWidth` | [Float](/api-docs/unity/Float/) |
| `parentHeight` | [Float](/api-docs/unity/Float/) |
| `parentLayoutMask` | [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[ComputedViewSize](/api-docs/unity/ceramic/ComputedViewSize/)> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="willEmitLayout"><div class="plugin-name">ui</div><code><span class="field-name">willEmitLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willEmitLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called just before emitting the layout event.
Updates borders and calls the layout() method.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="layout"><div class="plugin-name">ui</div><code><span class="field-name">layout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#layout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform layout operations for this view.
Override this method in subclasses to implement custom layout logic.
Called after size computation and before the layout event is emitted.

Common operations in layout():
- Position child views
- Update visual components
- Apply computed dimensions

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

