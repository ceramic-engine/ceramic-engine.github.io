---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiInputTextCallbackData
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiInputTextCallbackData/
---

# ImGuiInputTextCallbackData

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiInputTextCallbackData</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="deleteChars"><code><span class="field-name">deleteChars</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">bytesCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `pos` | [Int](/api-docs/clay-native/Int/) |
| `bytesCount` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertChars"><code><span class="field-name">insertChars</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#insertChars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) | |
| `pos` | [Int](/api-docs/clay-native/Int/) | |
| `text` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | |
| `textEnd` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | `null` |

<hr class="field-separator" />

<div class="signature field-method no-description" id="selectAll"><code><span class="field-name">selectAll</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#selectAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setSelection"><code><span class="field-name">setSelection</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `s` | [Int](/api-docs/clay-native/Int/) |
| `e` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clearSelection"><code><span class="field-name">clearSelection</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hasSelection"><code><span class="field-name">hasSelection</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasSelection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Instance Members

<div class="signature field-var has-description" id="ctx"><code><span class="field-name">ctx</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#ctx"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parent UI context

<hr class="field-separator" />

<div class="signature field-var has-description" id="eventFlag"><code><span class="field-name">eventFlag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#eventFlag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

One ImGuiInputTextFlags_Callback*    // Read-only

<hr class="field-separator" />

<div class="signature field-var has-description" id="flags"><code><span class="field-name">flags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

What user passed to InputText()      // Read-only

<hr class="field-separator" />

<div class="signature field-var has-description" id="userData"><code><span class="field-name">userData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">cpp.RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">cpp.Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#userData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

What user passed to InputText()      // Read-only

<hr class="field-separator" />

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/UInt/" class="type-link">UInt</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Widget ID                            // Read-only

<hr class="field-separator" />

<div class="signature field-var has-description" id="eventKey"><code><span class="field-name">eventKey</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#eventKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Key pressed (Up/Down/TAB)            // Read-only    // [Completion,History]

<hr class="field-separator" />

<div class="signature field-var has-description" id="eventChar"><code><span class="field-name">eventChar</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt16/" class="type-link">cpp.UInt16</a></code><a class="header-anchor" href="#eventChar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Character input                      // Read-write   // [CharFilter] Replace character with another one, or set to zero to drop. return 1 is equivalent to setting EventChar=0;

<hr class="field-separator" />

<div class="signature field-var has-description" id="eventActivated"><code><span class="field-name">eventActivated</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#eventActivated"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Input field just got activated       // Read-only    // [Always]

<hr class="field-separator" />

<div class="signature field-var has-description" id="bufDirty"><code><span class="field-name">bufDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bufDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set if you modify Buf/BufTextLen!    // Write        // [Completion,History,Always]

<hr class="field-separator" />

<div class="signature field-var has-description" id="buf"><code><span class="field-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a></code><a class="header-anchor" href="#buf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text buffer                          // Read-write   // [Resize] Can replace pointer / [Completion,History,Always] Only write to pointed data, don't replace the actual pointer!

<hr class="field-separator" />

<div class="signature field-var has-description" id="bufTextLen"><code><span class="field-name">bufTextLen</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bufTextLen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Text length (in bytes)               // Read-write   // [Resize,Completion,History,Always] Exclude zero-terminator storage. In C land: == strlen(some_text), in C++ land: string.length()

<hr class="field-separator" />

<div class="signature field-var has-description" id="bufSize"><code><span class="field-name">bufSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#bufSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Buffer size (in bytes) = capacity+1  // Read-only    // [Resize,Completion,History,Always] Include zero-terminator storage. In C land: == ARRAYSIZE(my_char_array), in C++ land: string.capacity()+1

<hr class="field-separator" />

<div class="signature field-var has-description" id="cursorPos"><code><span class="field-name">cursorPos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cursorPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// Read-write   // [Completion,History,Always,CharFilter]

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectionStart"><code><span class="field-name">selectionStart</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectionStart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// Read-write   // [Completion,History,Always,CharFilter] == to SelectionEnd when no selection

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectionEnd"><code><span class="field-name">selectionEnd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectionEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

// Read-write   // [Completion,History,Always,CharFilter]

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

