---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: TextInputDelegate
target: Headless
permalink: api-docs/headless/ceramic/TextInputDelegate/
---

# TextInputDelegate

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/TextInputDelegate.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.TextInputDelegate</strong> (Interface) → <a href="/api-docs/headless/ceramic/EditText/">EditText</a></div>

Interface for text layout information providers used by text input systems.

TextInputDelegate defines methods that provide essential text layout information
required for cursor navigation, text selection, and input handling in multi-line
text fields. Implementers of this interface (typically Text-based classes) provide
the layout metrics needed for proper cursor movement and text manipulation.

This interface enables:
- Vertical cursor navigation (up/down arrow keys)
- Mapping between visual positions and text indices
- Line-based text operations
- Proper cursor positioning in wrapped or formatted text

```haxe
class MyTextEditor extends Visual implements TextInputDelegate {
    var text:Text;
    function textInputNumberOfLines():Int {
        return text.numLines;
    }
    function textInputIndexForPosInLine(lineNumber:Int, lineOffset:Int):Int {
        // Convert line position to absolute text index
        return text.getIndexAtLinePosition(lineNumber, lineOffset);
    }
    // ... implement other methods
}
```

<div class="see"><strong>See:</strong> TextInput The text input handler that uses this delegate, EditText An editable text field that implements this interface</div>


## Instance Members

<div class="signature field-method has-description" id="textInputClosestPositionInLine"><code><span class="field-name">textInputClosestPositionInLine</span><span class="parenthesis">(</span><span class="arg-name">fromPosition</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">fromLine</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">toLine</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputClosestPositionInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the closest character position when moving cursor between lines.

When navigating vertically (e.g., arrow up/down), this method determines
which character position in the destination line best corresponds to the
cursor's current visual position. This maintains horizontal cursor position
when possible during vertical navigation.

The method should account for:
- Variable character widths in proportional fonts
- Different line lengths
- Visual alignment preferences



| Name | Type | Description |
|------|------|-------------|
| `fromPosition` | [Int](/api-docs/headless/Int/) | The character position within the source line (0-based)  |
| `fromLine` | [Int](/api-docs/headless/Int/) | The source line number (0-based)  |
| `toLine` | [Int](/api-docs/headless/Int/) | The destination line number (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The best matching character position in the destination line * ```haxe // Moving cursor from line 2, position 10 to line 3 var newPos = delegate.textInputClosestPositionInLine(10, 2, 3); // Returns position in line 3 that's visually closest to position 10 in line 2 ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputNumberOfLines"><code><span class="field-name">textInputNumberOfLines</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputNumberOfLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the total number of lines in the text.

This includes all visible lines, whether they result from explicit
line breaks (\n) or automatic word wrapping. Empty lines are counted.


| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The total number of lines (always ≥ 1) * ```haxe var lineCount = delegate.textInputNumberOfLines(); // Use for boundary checking in cursor navigation if (cursorLine < lineCount - 1) { // Can move down } ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputIndexForPosInLine"><code><span class="field-name">textInputIndexForPosInLine</span><span class="parenthesis">(</span><span class="arg-name">lineNumber</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">lineOffset</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputIndexForPosInLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a line-relative position to an absolute text index.

Given a line number and a position within that line, returns the
corresponding index in the complete text string. This is essential
for mapping visual cursor positions to text buffer positions.



| Name | Type | Description |
|------|------|-------------|
| `lineNumber` | [Int](/api-docs/headless/Int/) | The line number (0-based)  |
| `lineOffset` | [Int](/api-docs/headless/Int/) | The character position within the line (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The absolute character index in the text string * ```haxe // Get text index for character 5 on line 2 var textIndex = delegate.textInputIndexForPosInLine(2, 5); // Can now use textIndex to insert/delete at that position text = text.substring(0, textIndex) + "new" + text.substring(textIndex); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputLineForIndex"><code><span class="field-name">textInputLineForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputLineForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines which line contains the character at the given text index.

Maps an absolute position in the text string to the line number
where that character appears. Useful for determining cursor line
after text modifications.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/headless/Int/) | The absolute character index in the text (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The line number containing this character (0-based) * ```haxe // Find which line the cursor is on after inserting text var cursorLine = delegate.textInputLineForIndex(cursorIndex); ``` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="textInputPosInLineForIndex"><code><span class="field-name">textInputPosInLineForIndex</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#textInputPosInLineForIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the position within a line for a character at the given text index.

Returns how far into its line a character appears. This is the
complement to textInputLineForIndex, providing the column position
within the line.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/headless/Int/) | The absolute character index in the text (0-based)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/headless/Int/) | The character's position within its line (0-based) * ```haxe // Get full cursor position from text index var line = delegate.textInputLineForIndex(cursorIndex); var column = delegate.textInputPosInLineForIndex(cursorIndex); trace('Cursor at line $line, column $column'); ``` |

