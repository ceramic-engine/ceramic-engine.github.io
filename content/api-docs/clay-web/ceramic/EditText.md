---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: EditText
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/EditText/
---

# EditText

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/EditText.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.EditText</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/TextInputDelegate/">TextInputDelegate</a>, <a href="/api-docs/clay-web/ceramic/Component/">Component</a></div>

Component that enables text editing functionality for Text visuals.

This component provides text input, selection, and editing capabilities
when attached to a Text entity. It handles user input, cursor positioning,
text selection, and clipboard operations.

## Instance Members

<div class="signature field-var has-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Text/" class="type-link">Text</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The Text entity this component is attached to.

<hr class="field-separator" />

<div class="signature field-var has-description" id="multiline"><code><span class="field-name">multiline</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#multiline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether multiline editing is enabled.
When false, pressing Enter will submit the text.
When true, pressing Enter will create a new line.

<hr class="field-separator" />

<div class="signature field-var has-description" id="editing"><code><span class="field-name">editing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this EditText is currently active and editing.

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectionColor"><code><span class="field-name">selectionColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#selectionColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color used for text selection highlighting.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorColor"><code><span class="field-name">textCursorColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a></code><a class="header-anchor" href="#textCursorColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The color of the text cursor.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorOffsetX"><code><span class="field-name">textCursorOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorOffsetX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset for the text cursor position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorOffsetY"><code><span class="field-name">textCursorOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorOffsetY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Vertical offset for the text cursor position.

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorHeightFactor"><code><span class="field-name">textCursorHeightFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorHeightFactor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Height factor for the text cursor (1.0 = full line height).

<hr class="field-separator" />

<div class="signature field-var has-description" id="textCursorWidth"><code><span class="field-name">textCursorWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the text cursor in pixels.

<hr class="field-separator" />

<div class="signature field-var has-description" id="disabled"><code><span class="field-name">disabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether text editing is disabled.
When disabled, the user cannot edit the text.

<hr class="field-separator" />

<div class="signature field-var has-description" id="container"><code><span class="field-name">container</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#container"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional container on which pointer events are bound

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectText"><code><span class="field-name">selectText</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SelectText/" class="type-link">SelectText</a></code><a class="header-anchor" href="#selectText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

SelectText instance used internally to manage text selection.
Will be defined after component has been assigned to an entity.

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="startInput"><code><span class="field-name">startInput</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">selectionStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">selectionEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#startInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start text input and editing.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selectionStart` | [Int](/api-docs/clay-web/Int/) | `-1` | Initial cursor position or selection start (-1 for end of text)  |
| `selectionEnd` | [Int](/api-docs/clay-web/Int/) | `-1` | Selection end position (-1 for no selection) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="stopInput"><code><span class="field-name">stopInput</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#stopInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stop text input and editing.

<hr class="field-separator" />

<div class="signature field-method has-description" id="updateText"><code><span class="field-name">updateText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update the text content programmatically while editing.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-web/String/) | The new text content |

<hr class="field-separator" />

<div class="signature field-method has-description" id="focus"><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Give focus to this text field and start editing.
Selects all text by default.

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputClosestPositionInLine"><code><span class="field-name">textInputClosestPositionInLine</span><span class="parenthesis">(</span><span class="arg-name">fromPosition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">fromLine</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">toLine</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputClosestPositionInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the closest position in a target line from a position in another line.
Used for vertical cursor navigation.



| Name | Type | Description |
|------|------|-------------|
| `fromPosition` | [Int](/api-docs/clay-web/Int/) | Position in the source line  |
| `fromLine` | [Int](/api-docs/clay-web/Int/) | Source line number  |
| `toLine` | [Int](/api-docs/clay-web/Int/) | Target line number  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Closest position in the target line |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputNumberOfLines"><code><span class="field-name">textInputNumberOfLines</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputNumberOfLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the total number of lines in the text.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Number of lines |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputIndexForPosInLine"><code><span class="field-name">textInputIndexForPosInLine</span><span class="parenthesis">(</span><span class="arg-name">lineNumber</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lineOffset</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputIndexForPosInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the global character index from a line number and position within that line.



| Name | Type | Description |
|------|------|-------------|
| `lineNumber` | [Int](/api-docs/clay-web/Int/) | The line number (0-based)  |
| `lineOffset` | [Int](/api-docs/clay-web/Int/) | Position within the line  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Global character index |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputLineForIndex"><code><span class="field-name">textInputLineForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputLineForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the line number for a given character index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | Global character index  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Line number (0-based) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputPosInLineForIndex"><code><span class="field-name">textInputPosInLineForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputPosInLineForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the position within a line for a given character index.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | Global character index  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-web/Int/) | Position within the line |

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">selectionColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="arg-name">textCursorColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Color/" class="type-link">Color</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorOffsetX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorOffsetY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorHeightFactor</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textCursorWidth</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new EditText component.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `selectionColor` | [Color](/api-docs/clay-web/ceramic/Color/) | | Color for text selection highlighting  |
| `textCursorColor` | [Color](/api-docs/clay-web/ceramic/Color/) | | Color of the text cursor  |
| `textCursorOffsetX` | [Float](/api-docs/clay-web/Float/) | `0` | Horizontal offset for cursor position  |
| `textCursorOffsetY` | [Float](/api-docs/clay-web/Float/) | `0` | Vertical offset for cursor position  |
| `textCursorHeightFactor` | [Float](/api-docs/clay-web/Float/) | `1` | Height factor for cursor (1.0 = full line height)  |
| `textCursorWidth` | [Float](/api-docs/clay-web/Float/) | `1` | Width of the cursor in pixels |

## Private Members

<div class="signature field-var no-description" id="boundContainer"><code><span class="field-name">boundContainer</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#boundContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="selectionBackgrounds"><code><span class="field-name">selectionBackgrounds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#selectionBackgrounds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="inputActive"><code><span class="field-name">inputActive</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#inputActive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="willUpdateSelection"><code><span class="field-name">willUpdateSelection</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#willUpdateSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="textCursor"><code><span class="field-name">textCursor</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Quad/" class="type-link">Quad</a></code><a class="header-anchor" href="#textCursor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="textCursorToggleVisibilityTime"><code><span class="field-name">textCursorToggleVisibilityTime</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#textCursorToggleVisibilityTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="inputRectX"><code><span class="field-name">inputRectX</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inputRectX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="inputRectY"><code><span class="field-name">inputRectY</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inputRectY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="inputRectW"><code><span class="field-name">inputRectW</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inputRectW"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="inputRectH"><code><span class="field-name">inputRectH</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#inputRectH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="domInput"><code><span class="field-name">domInput</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/InputElement/" class="type-link">js.html.InputElement</a></code><a class="header-anchor" href="#domInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="domInputBlockSelection"><code><span class="field-name">domInputBlockSelection</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#domInputBlockSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="domInputBlockHtmlInputEvent"><code><span class="field-name">domInputBlockHtmlInputEvent</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#domInputBlockHtmlInputEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitUpdate"><code><span class="field-name">emitUpdate</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the text content is updated during editing.



| Name | Type | Description |
|------|------|-------------|
| `content` | [String](/api-docs/clay-web/String/) | The updated text content |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStart"><code><span class="field-name">emitStart</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when text editing starts.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSubmit"><code><span class="field-name">emitSubmit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSubmit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when the user submits the text (e.g., pressing Enter in single-line mode).

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitStop"><code><span class="field-name">emitStop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitStop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event fired when text editing stops.

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleStop"><code><span class="field-name">handleStop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleStop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleEnter"><code><span class="field-name">handleEnter</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleEnter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleEscape"><code><span class="field-name">handleEscape</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleEscape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateFromTextInput"><code><span class="field-name">updateFromTextInput</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromTextInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateFromSelection"><code><span class="field-name">updateFromSelection</span><span class="parenthesis">(</span><span class="arg-name">selectionStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">selectionEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">inverted</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `selectionStart` | [Int](/api-docs/clay-web/Int/) |
| `selectionEnd` | [Int](/api-docs/clay-web/Int/) |
| `inverted` | [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateFromInputSelection"><code><span class="field-name">updateFromInputSelection</span><span class="parenthesis">(</span><span class="arg-name">selectionStart</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">selectionEnd</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateFromInputSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `selectionStart` | [Int](/api-docs/clay-web/Int/) |
| `selectionEnd` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindPointerEvents"><code><span class="field-name">bindPointerEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindPointerEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerDown"><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleAppUpdate"><code><span class="field-name">handleAppUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleAppUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="bindKeyBindings"><code><span class="field-name">bindKeyBindings</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindKeyBindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="computeInputRect"><code><span class="field-name">computeInputRect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#computeInputRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="unBlockHtmlInputEvent"><code><span class="field-name">unBlockHtmlInputEvent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unBlockHtmlInputEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleMobileWebIfNeeded"><code><span class="field-name">handleMobileWebIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleMobileWebIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="updateDomInputState"><code><span class="field-name">updateDomInputState</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateDomInputState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/clay-web/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/clay-web/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

