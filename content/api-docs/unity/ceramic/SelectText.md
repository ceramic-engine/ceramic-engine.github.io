---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SelectText
target: Unity
permalink: api-docs/unity/ceramic/SelectText/
---

# SelectText

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SelectText.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.SelectText</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/tracker/Observable/">tracker.Observable</a>, <a href="/api-docs/unity/ceramic/Component/">Component</a></div>

Component that handles text selection and cursor display for Text visuals.

This component provides visual feedback for text selection including
selection highlighting and text cursor display. It also handles
pointer-based text selection and double-click word selection.

## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Text/" class="type-link">Text</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Text entity this component is attached to.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectionColor"><code><span class="field-name">selectionColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#selectionColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color used for text selection highlighting.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorColor"><code><span class="field-name">textCursorColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#textCursorColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color of the text cursor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorOffsetX"><code><span class="field-name">textCursorOffsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset for the text cursor position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorOffsetY"><code><span class="field-name">textCursorOffsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset for the text cursor position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorHeightFactor"><code><span class="field-name">textCursorHeightFactor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorHeightFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height factor for the text cursor (1.0 = full line height).

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorWidth"><code><span class="field-name">textCursorWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the text cursor in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="container"><code><span class="field-name">container</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#container"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional container on which pointer events are bound

<hr class="field-separator" />

<div class="signature field-var has-description" id="allowSelectingFromPointer"><code><span class="field-name">allowSelectingFromPointer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#allowSelectingFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to allow text selection using pointer/mouse.

<hr class="field-separator" />

<div class="signature field-var has-description" id="showCursor"><code><span class="field-name">showCursor</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#showCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to show the text cursor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectionStart"><code><span class="field-name">selectionStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start position of the current text selection.
-1 means no selection.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectionEnd"><code><span class="field-name">selectionEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectionEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

End position of the current text selection.
-1 means no selection.

<hr class="field-separator" />

<div class="signature field-var has-description" id="invertedSelection"><code><span class="field-name">invertedSelection</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#invertedSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the selection is inverted (cursor at start instead of end).

<hr class="field-separator" />

<div class="signature field-var has-description" id="pointerIsDown"><code><span class="field-name">pointerIsDown</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pointerIsDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the pointer is currently pressed down.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateContainer"><code><span class="field-name">invalidateContainer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateAllowSelectingFromPointer"><code><span class="field-name">invalidateAllowSelectingFromPointer</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateAllowSelectingFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateShowCursor"><code><span class="field-name">invalidateShowCursor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateShowCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateSelectionStart"><code><span class="field-name">invalidateSelectionStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSelectionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateSelectionEnd"><code><span class="field-name">invalidateSelectionEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSelectionEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateInvertedSelection"><code><span class="field-name">invalidateInvertedSelection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateInvertedSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidatePointerIsDown"><code><span class="field-name">invalidatePointerIsDown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidatePointerIsDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">selectionColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">textCursorColor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorOffsetX</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorOffsetY</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorHeightFactor</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorWidth</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new SelectText component.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selectionColor` | [Color](/api-docs/unity/ceramic/Color/) | | Color for selection highlighting  |
| `textCursorColor` | [Color](/api-docs/unity/ceramic/Color/) | | Color of the text cursor  |
| `textCursorOffsetX` | [Float](/api-docs/unity/Float/) | `0` | Horizontal offset for cursor position  |
| `textCursorOffsetY` | [Float](/api-docs/unity/Float/) | `0` | Vertical offset for cursor position  |
| `textCursorHeightFactor` | [Float](/api-docs/unity/Float/) | `1` | Height factor for cursor (1.0 = full line height)  |
| `textCursorWidth` | [Float](/api-docs/unity/Float/) | `1` | Width of the cursor in pixels |

## Private Members

<div class="signature field-var no-description" id="unobservedContainer"><code><span class="field-name">unobservedContainer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#unobservedContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedAllowSelectingFromPointer"><code><span class="field-name">unobservedAllowSelectingFromPointer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedAllowSelectingFromPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedShowCursor"><code><span class="field-name">unobservedShowCursor</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedShowCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedSelectionStart"><code><span class="field-name">unobservedSelectionStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedSelectionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedSelectionEnd"><code><span class="field-name">unobservedSelectionEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#unobservedSelectionEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedInvertedSelection"><code><span class="field-name">unobservedInvertedSelection</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedInvertedSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="unobservedPointerIsDown"><code><span class="field-name">unobservedPointerIsDown</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedPointerIsDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="boundContainer"><code><span class="field-name">boundContainer</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#boundContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="doubleClick"><code><span class="field-name">doubleClick</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/DoubleClick/" class="type-link">DoubleClick</a></code><a class="header-anchor" href="#doubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="didDoubleClick"><code><span class="field-name">didDoubleClick</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didDoubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="selectionBackgrounds"><code><span class="field-name">selectionBackgrounds</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/Quad/" class="type-link">Quad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#selectionBackgrounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="willUpdateSelection"><code><span class="field-name">willUpdateSelection</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willUpdateSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="textCursor"><code><span class="field-name">textCursor</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#textCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="textCursorToggleVisibilityTime"><code><span class="field-name">textCursorToggleVisibilityTime</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorToggleVisibilityTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">SelectText</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [SelectText](/api-docs/unity/ceramic/SelectText/) |
| `fromSerializedField` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSelection"><code><span class="field-name">emitSelection</span><span class="parenthesis">(</span><span class="arg-name">selectionStart</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">selectionEnd</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inverted</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the text selection changes.



| Name | Type | Description |
|------|------|-------------|
| `selectionStart` | [Int](/api-docs/unity/Int/) | Start position of the selection  |
| `selectionEnd` | [Int](/api-docs/unity/Int/) | End position of the selection  |
| `inverted` | [Bool](/api-docs/unity/Bool/) | Whether the selection is inverted (cursor at start) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitContainerChange"><code><span class="field-name">emitContainerChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitContainerChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when container field changes.

| Name | Type |
|------|------|
| `current` | [Visual](/api-docs/unity/ceramic/Visual/) |
| `previous` | [Visual](/api-docs/unity/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitAllowSelectingFromPointerChange"><code><span class="field-name">emitAllowSelectingFromPointerChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitAllowSelectingFromPointerChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when allowSelectingFromPointer field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitShowCursorChange"><code><span class="field-name">emitShowCursorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitShowCursorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when showCursor field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSelectionStartChange"><code><span class="field-name">emitSelectionStartChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelectionStartChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when selectionStart field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSelectionEndChange"><code><span class="field-name">emitSelectionEndChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelectionEndChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when selectionEnd field changes.

| Name | Type |
|------|------|
| `current` | [Int](/api-docs/unity/Int/) |
| `previous` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitInvertedSelectionChange"><code><span class="field-name">emitInvertedSelectionChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInvertedSelectionChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when invertedSelection field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitPointerIsDownChange"><code><span class="field-name">emitPointerIsDownChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitPointerIsDownChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when pointerIsDown field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/unity/Bool/) |
| `previous` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateFromSelection"><code><span class="field-name">updateFromSelection</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateSelectionGraphics"><code><span class="field-name">updateSelectionGraphics</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSelectionGraphics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="doUpdateSelectionGraphics"><code><span class="field-name">doUpdateSelectionGraphics</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doUpdateSelectionGraphics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearSelectionGraphics"><code><span class="field-name">clearSelectionGraphics</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearSelectionGraphics"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleShowCursorChange"><code><span class="field-name">handleShowCursorChange</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleShowCursorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `_` | [Bool](/api-docs/unity/Bool/) |
| `_` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateCursorVisibility"><code><span class="field-name">updateCursorVisibility</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateCursorVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resetCursorVisibility"><code><span class="field-name">resetCursorVisibility</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetCursorVisibility"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updatePointerEventBindings"><code><span class="field-name">updatePointerEventBindings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updatePointerEventBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="indexFromScreenPosition"><code><span class="field-name">indexFromScreenPosition</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#indexFromScreenPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerDown"><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/unity/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerMove"><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/unity/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerUp"><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/unity/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateSelectionFromMovingPointer"><code><span class="field-name">updateSelectionFromMovingPointer</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateSelectionFromMovingPointer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/unity/Float/) |
| `y` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isSelectionBoundChararacter"><code><span class="field-name">isSelectionBoundChararacter</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSelectionBoundChararacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleDoubleClick"><code><span class="field-name">handleDoubleClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleDoubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindKeyBindings"><code><span class="field-name">bindKeyBindings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

