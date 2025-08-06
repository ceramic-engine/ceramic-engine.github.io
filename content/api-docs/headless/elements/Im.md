---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Im
target: Headless
permalink: api-docs/headless/elements/Im/
---

# Im

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Im.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.Im</strong> (Class)</div>

Immediate mode UI system for Ceramic inspired by Dear ImGui.

Im provides a stateless, code-driven UI API that creates and manages UI elements
on-the-fly. Unlike traditional retained-mode UI systems where you create and
maintain UI objects, Im allows you to declare UI in a procedural way:

```haxe
Im.begin();

if (Im.button("Click me!")) {
    trace("Button clicked!");
}

Im.textField("Name", namePointer);
Im.slider("Volume", volumePointer, 0, 100);

Im.end();
```

Key features:
- Immediate mode paradigm - UI is rebuilt every frame
- Automatic layout with rows and columns
- Built-in controls: buttons, text fields, sliders, checkboxes, etc.
- Window management with docking and tabs
- Theme support with runtime customization
- Cross-platform compatibility through Ceramic

The system uses pointers (functions that get/set values) to bind controls
to data, allowing the UI to automatically reflect and modify application state.

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/ImSystem/">ImSystem</a>, <a href="/api-docs/headless/elements/Window/">Window</a>, <a href="/api-docs/headless/elements/Theme/">Theme</a></div>


## Static Members

<div class="signature field-method has-description has-plugin" id="editDir"><div class="plugin-name">dialogs</div><code><span class="field-name">editDir</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editDir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a directory picker field.

Shows a text field with a browse button that opens a directory
selection dialog. Only available when dialogs plugin is enabled.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the field  |
| `value` | [StringPointer](/api-docs/headless/elements/StringPointer/) | | Pointer to the directory path string  |
| `placeholder` | [String](/api-docs/headless/String/) | *(optional)* | Text shown when field is empty  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the directory changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="editFile"><div class="plugin-name">dialogs</div><code><span class="field-name">editFile</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filters</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/ceramic/DialogsFileFilter/" class="type-link">ceramic.DialogsFileFilter</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a file picker field.

Shows a text field with a browse button that opens a file
selection dialog. Only available when dialogs plugin is enabled.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the field  |
| `value` | [StringPointer](/api-docs/headless/elements/StringPointer/) | | Pointer to the file path string  |
| `placeholder` | [String](/api-docs/headless/String/) | *(optional)* | Text shown when field is empty  |
| `filters` | [Null](/api-docs/headless/Null/)<[ceramic.DialogsFileFilter](/api-docs/headless/ceramic/DialogsFileFilter/)> | *(optional)* | File type filters for the dialog  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the file path changed this frame |

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="YES"><div class="plugin-name">elements</div><code><span class="field-name">YES</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#YES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="NO"><div class="plugin-name">elements</div><code><span class="field-name">NO</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#NO"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="OK"><div class="plugin-name">elements</div><code><span class="field-name">OK</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#OK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="defaultTheme"><div class="plugin-name">elements</div><code><span class="field-name">defaultTheme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#defaultTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="currentTheme"><div class="plugin-name">elements</div><code><span class="field-name">currentTheme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#currentTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="current"><div class="plugin-name">elements</div><code><span class="field-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/elements/WindowData/" class="type-link">WindowData</a></code><a class="header-anchor" href="#current"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="initIfNeeded"><div class="plugin-name">elements</div><code><span class="field-name">initIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes the Im system if not already initialized.

This method ensures that:
- The global context view exists
- A default theme is created
- The Im system is ready for use

This is automatically called by most Im methods, but can be
called manually if early initialization is needed.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="extractId"><div class="plugin-name">elements</div><code><span class="field-name">extractId</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#extractId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the ID portion from a window key.

Window keys can contain both an ID and a title. This method
extracts just the ID portion, which is used for window lookup
and persistence.

Currently returns the key as-is, but may parse complex keys
in the future (e.g., "id###title" format).



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/headless/String/) | The window key to extract ID from  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The extracted ID |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="extractTitle"><div class="plugin-name">elements</div><code><span class="field-name">extractTitle</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#extractTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the title portion from a window key.

Window keys can contain both an ID and a title. This method
extracts just the title portion, which is displayed in the
window header.

Currently returns the key as-is, but may parse complex keys
in the future (e.g., "id###title" format).



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/headless/String/) | The window key to extract title from  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The extracted title |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="depth"><div class="plugin-name">elements</div><code><span class="field-name">depth</span><span class="parenthesis">(</span><span class="arg-name">depth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#depth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the rendering depth for the entire Im UI layer.

This affects the z-order of all Im windows and controls relative
to other visuals in the scene. Higher values render on top.

Must be called before any windows are created to take effect.



| Name | Type | Description |
|------|------|-------------|
| `depth` | [Float](/api-docs/headless/Float/) | The depth value to set |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">elements</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a window by its key.

Returns the Window instance if it exists, or null if no window
with the given key has been created yet.

This is useful for checking if a window is open or accessing
its properties from outside the begin/end block.



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/headless/String/) | The window key  |

| Returns | Description |
|---------|-------------|
| [Window](/api-docs/headless/elements/Window/) | The Window instance or null |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="hits"><div class="plugin-name">elements</div><code><span class="field-name">hits</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return `true` if any window is hitten given point.


| Name | Type | Description |
|------|------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | X position (logical screen metric)  |
| `y` | [Float](/api-docs/headless/Float/) | Y position (logical screen metric)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | Bool |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="usesScanCode"><div class="plugin-name">elements</div><code><span class="field-name">usesScanCode</span><span class="parenthesis">(</span><span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/ScanCode/" class="type-link">ceramic.ScanCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesScanCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if there is a currently focused field that uses the given scan code


| Name | Type | Description |
|------|------|-------------|
| `scanCode` | [ceramic.ScanCode](/api-docs/headless/ceramic/ScanCode/) | The scan code to test  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if this scan code is used |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="usesKeyCode"><div class="plugin-name">elements</div><code><span class="field-name">usesKeyCode</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/KeyCode/" class="type-link">ceramic.KeyCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesKeyCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if there is a currently focused field that uses the given key code


| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [ceramic.KeyCode](/api-docs/headless/ceramic/KeyCode/) | The key code to test  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | `true` if this key code is used |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="usesCmdOrCtrl"><div class="plugin-name">elements</div><code><span class="field-name">usesCmdOrCtrl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesCmdOrCtrl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if any Command (Mac) or Control (Windows/Linux) key is being used.

This is useful for detecting platform-specific modifier keys for
keyboard shortcuts. Returns true if any focused field is using
these keys.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if Cmd/Ctrl keys are in use |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="usesShift"><div class="plugin-name">elements</div><code><span class="field-name">usesShift</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#usesShift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if any Shift key is being used.

Returns true if any focused field is using either the left or
right Shift key. Useful for detecting shift-modified shortcuts.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if Shift keys are in use |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="begin"><div class="plugin-name">elements</div><code><span class="field-name">begin</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">WindowData.DEFAULT_WIDTH</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">WindowData.DEFAULT_HEIGHT</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#begin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins an Im window with separate key and title.

This starts the declaration of a new window or continues an existing one.
All Im controls called after begin() will be added to this window until
end() is called.

The key is used to identify the window across frames, while the title
is displayed in the window header.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `key` | [String](/api-docs/headless/String/) | | Unique identifier for the window  |
| `title` | [String](/api-docs/headless/String/) | | Display title for the window header  |
| `width` | [Float](/api-docs/headless/Float/) | `WindowData.DEFAULT_WIDTH` | Initial window width (default: 200)  |
| `height` | [Float](/api-docs/headless/Float/) | `WindowData.DEFAULT_HEIGHT` | Initial window height (default: 400)  |
| `pos` | [Null](/api-docs/headless/Null/)<[haxe.PosInfos](/api-docs/headless/haxe/PosInfos/)> | *(optional)* | Source position (auto-provided)  |

| Returns | Description |
|---------|-------------|
| [Window](/api-docs/headless/elements/Window/) | The Window instance |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginTabs"><div class="plugin-name">elements</div><code><span class="field-name">beginTabs</span><span class="parenthesis">(</span><span class="arg-name">selected</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#beginTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a tab bar container.

Creates a horizontal tab bar where each tab() call adds a new tab.
The selected tab is controlled by the StringPointer parameter.

Must be followed by one or more tab() calls and ended with endTabs().



| Name | Type | Description |
|------|------|-------------|
| `selected` | [StringPointer](/api-docs/headless/elements/StringPointer/) | Pointer to the currently selected tab ID  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the selected tab changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="endTabs"><div class="plugin-name">elements</div><code><span class="field-name">endTabs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endTabs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends a tab bar container.

Must be called after beginTabs() and all tab() declarations.
Will assert if called without a matching beginTabs() or if
no tabs were declared.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tab"><div class="plugin-name">elements</div><code><span class="field-name">tab</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tab"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Declares a tab in the current tab bar.

Uses the key as both the tab ID and display title.
Must be called between beginTabs() and endTabs().



| Name | Type | Description |
|------|------|-------------|
| `key` | [String](/api-docs/headless/String/) | Tab identifier and display title  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if this tab is currently selected |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginRow"><div class="plugin-name">elements</div><code><span class="field-name">beginRow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins a row layout for subsequent controls.

Controls added after beginRow() will be arranged horizontally
in a single row until endRow() is called. The width of each
control is determined by its flex value.

Nested rows are not supported - calling beginRow() while already
in a row will trigger an assertion.

```haxe
Im.beginRow();
Im.button("Left");    // Default flex=1
Im.flex(2);
Im.button("Middle");  // Takes up twice the space
Im.button("Right");   // Default flex=1
Im.endRow();
```

<div class="see"><strong>See:</strong> endRow, flex</div>


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="endRow"><div class="plugin-name">elements</div><code><span class="field-name">endRow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#endRow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends the current row layout.

Must be called after beginRow() to complete the row.
Resets the flex value to default (1) for subsequent controls.

<div class="see"><strong>See:</strong> beginRow</div>


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="beginChangeCheck"><div class="plugin-name">elements</div><code><span class="field-name">beginChangeCheck</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#beginChangeCheck"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Begins tracking changes to control values.

After calling this method, any changes to control values
(text fields, sliders, checkboxes, etc.) will be tracked.
Call endChangeCheck() to check if any values changed.

Change checks can be nested - each begin/end pair tracks
changes independently.

```haxe
Im.beginChangeCheck();
Im.textField("Name", namePointer);
Im.slider("Volume", volumePointer, 0, 100);
if (Im.endChangeCheck()) {
    trace("Settings changed!");
    saveSettings();
}
```

<div class="see"><strong>See:</strong> endChangeCheck</div>


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="endChangeCheck"><div class="plugin-name">elements</div><code><span class="field-name">endChangeCheck</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#endChangeCheck"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends change tracking and returns if any changes occurred.

Must be called after beginChangeCheck(). Returns true if any
control values changed between the begin/end calls.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if any tracked values changed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="labelPosition"><div class="plugin-name">elements</div><code><span class="field-name">labelPosition</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">labelPosition</span><span class="operator">:</span> <a href="/api-docs/headless/elements/LabelPosition/" class="type-link">LabelPosition</a> <span class="operator">=</span> <span class="default-value">DEFAULT_LABEL_POSITION</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#labelPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the label position for subsequent controls.

Controls where labels appear relative to their input fields:
- LEFT: Label to the left of the field
- RIGHT: Label to the right of the field
- TOP: Label above the field
- BOTTOM: Label below the field



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `labelPosition` | [LabelPosition](/api-docs/headless/elements/LabelPosition/) | `DEFAULT_LABEL_POSITION` | The position to use (default: RIGHT) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="labelWidth"><div class="plugin-name">elements</div><code><span class="field-name">labelWidth</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">labelWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DEFAULT_LABEL_WIDTH</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#labelWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the width of labels for subsequent controls.

Can be specified as:
- Absolute pixels: positive values
- Percentage: use ViewSize.percent()
- Auto-size: use ViewSize.auto()



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `labelWidth` | [Float](/api-docs/headless/Float/) | `DEFAULT_LABEL_WIDTH` | The width to use (default: 35%) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="textAlign"><div class="plugin-name">elements</div><code><span class="field-name">textAlign</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">textAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span> <span class="operator">=</span> <span class="default-value">DEFAULT_TEXT_ALIGN</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the text alignment for subsequent text controls.

Affects text(), labels, and other text-based controls.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `textAlign` | Anonymous | `DEFAULT_TEXT_ALIGN` | The alignment to use (LEFT, CENTER, RIGHT) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="disabled"><div class="plugin-name">elements</div><code><span class="field-name">disabled</span><span class="parenthesis">(</span><span class="arg-name">disabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets whether subsequent controls should be disabled.

Disabled controls are rendered with reduced opacity and
don't respond to user interaction.



| Name | Type | Description |
|------|------|-------------|
| `disabled` | [Bool](/api-docs/headless/Bool/) | True to disable controls, false to enable |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="flex"><div class="plugin-name">elements</div><code><span class="field-name">flex</span><span class="parenthesis">(</span><span class="arg-name">flex</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the flex value for the next control in a row.

When in a row layout (between beginRow/endRow), flex determines
the relative width of controls. A control with flex=2 will be
twice as wide as a control with flex=1.

Only applies to the next control added.



| Name | Type | Description |
|------|------|-------------|
| `flex` | [Int](/api-docs/headless/Int/) | The flex value (default: 1) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="textColor"><div class="plugin-name">elements</div><code><span class="field-name">textColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#textColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the text color to the default theme color.

Removes any custom text color override, allowing subsequent
text to use the theme's default text color.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="background"><div class="plugin-name">elements</div><code><span class="field-name">background</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#background"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the background color to the default theme color.

Removes any custom background color override, allowing subsequent
controls to use the theme's default background color.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="tint"><div class="plugin-name">elements</div><code><span class="field-name">tint</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the tint color to default (no tint).

Removes any color tinting applied to subsequent controls,
returning them to their original theme colors.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bold"><div class="plugin-name">elements</div><code><span class="field-name">bold</span><span class="parenthesis">(</span><span class="arg-name">bold</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets whether subsequent text should be rendered in bold.

Affects text(), labels, and other text-based controls.
The actual bold rendering depends on the font's bold variant
being available.



| Name | Type | Description |
|------|------|-------------|
| `bold` | [Bool](/api-docs/headless/Bool/) | True for bold text, false for normal |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="assets"><div class="plugin-name">elements</div><code><span class="field-name">assets</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">assets</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Assets/" class="type-link">ceramic.Assets</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the asset manager to use for loading images and other resources.

When set, Im will use this asset manager for loading images referenced
by asset ID. If not set, Im will use the default asset manager.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `assets` | [ceramic.Assets](/api-docs/headless/ceramic/Assets/) | *(optional)* | The asset manager to use, or null to use default |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="parenthesis">(</span><span class="arg-name">theme</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the theme to use for subsequent controls.

The theme controls colors, fonts, and other visual properties
of Im controls. Pass null to revert to the default theme.

Changes to the theme affect all controls created after this
call within the current frame.



| Name | Type | Description |
|------|------|-------------|
| `theme` | [Theme](/api-docs/headless/elements/Theme/) | The theme to use, or null for default |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="position"><div class="plugin-name">elements</div><code><span class="field-name">position</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">anchorX</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">anchorY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">roundXY</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the position of the current window.

Positions the window at the specified coordinates with optional
anchor points. The window becomes non-movable when positioned
manually.

Must be called between begin() and end().



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `x` | [Float](/api-docs/headless/Float/) | | X position in screen coordinates  |
| `y` | [Float](/api-docs/headless/Float/) | | Y position in screen coordinates  |
| `anchorX` | [Float](/api-docs/headless/Float/) | `0` | Horizontal anchor (0=left, 0.5=center, 1=right)  |
| `anchorY` | [Float](/api-docs/headless/Float/) | `0` | Vertical anchor (0=top, 0.5=center, 1=bottom)  |
| `roundXY` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to round coordinates to whole pixels |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="scrollbar"><div class="plugin-name">elements</div><code><span class="field-name">scrollbar</span><span class="parenthesis">(</span><span class="arg-name">visibility</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ScrollbarVisibility/" class="type-link">ScrollbarVisibility</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scrollbar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the scrollbar visibility for the current window.

Controls when scrollbars appear in the window:
- AUTO: Show when content overflows
- ALWAYS: Always visible
- NEVER: Never show scrollbars

Must be called between begin() and end().



| Name | Type | Description |
|------|------|-------------|
| `visibility` | [ScrollbarVisibility](/api-docs/headless/elements/ScrollbarVisibility/) | The scrollbar visibility mode |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focus"><div class="plugin-name">elements</div><code><span class="field-name">focus</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#focus"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Requests focus for the current window.

The window will be brought to front and receive input focus.
Must be called between begin() and end().

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="expanded"><div class="plugin-name">elements</div><code><span class="field-name">expanded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#expanded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Marks the current window as expanded.

Expanded windows start maximized and cannot be collapsed.
Must be called between begin() and end().

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="header"><div class="plugin-name">elements</div><code><span class="field-name">header</span><span class="parenthesis">(</span><span class="arg-name">header</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#header"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets whether the current window should display a header.

The header contains the window title and optional close button.
Windows without headers cannot be dragged by the title bar.



| Name | Type | Description |
|------|------|-------------|
| `header` | [Bool](/api-docs/headless/Bool/) | True to show header, false to hide |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="overlay"><div class="plugin-name">elements</div><code><span class="field-name">overlay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#overlay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Makes the window display with a modal overlay.

An overlay darkens the background and blocks interaction with
other windows. Returns true if the overlay (outside the window)
was clicked this frame.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the overlay background was clicked |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="titleAlign"><div class="plugin-name">elements</div><code><span class="field-name">titleAlign</span><span class="parenthesis">(</span><span class="arg-name">titleAlign</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#titleAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the alignment of the window title in the header.

Only applies to windows with headers enabled.



| Name | Type | Description |
|------|------|-------------|
| `titleAlign` | Anonymous | The text alignment (LEFT, CENTER, RIGHT) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="closable"><div class="plugin-name">elements</div><code><span class="field-name">closable</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">isOpen</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/elements/BoolPointer/" class="type-link">BoolPointer</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#closable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Makes the window closable with a close button.

Adds a close button to the window header. If an isOpen pointer
is provided, it will be set to false when the window is closed.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | [Null](/api-docs/headless/Null/)<[BoolPointer](/api-docs/headless/elements/BoolPointer/)> | *(optional)* | Optional pointer to control window open state  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the window was closed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="list"><div class="plugin-name">elements</div><code><span class="field-name">list</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="arg-name">items</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ArrayPointer/" class="type-link">ArrayPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">selected</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sortable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">lockable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">trashable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">duplicable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ListStatus/" class="type-link">ListStatus</a></code><a class="header-anchor" href="#list"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a list view with standard-sized items.

Displays a scrollable list of items with optional features:
- Selection tracking through the selected pointer
- Drag-and-drop sorting
- Item locking/unlocking
- Item deletion
- Item duplication



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `height` | [Float](/api-docs/headless/Float/) | `-1` | List height in pixels (-1 for auto)  |
| `items` | [ArrayPointer](/api-docs/headless/elements/ArrayPointer/) | | Pointer to the array of items to display  |
| `selected` | [Null](/api-docs/headless/Null/)<[IntPointer](/api-docs/headless/elements/IntPointer/)> | *(optional)* | Pointer to the selected item index  |
| `sortable` | [Bool](/api-docs/headless/Bool/) | `false` | Enable drag-and-drop reordering  |
| `lockable` | [Bool](/api-docs/headless/Bool/) | `false` | Enable lock/unlock toggle per item  |
| `trashable` | [Bool](/api-docs/headless/Bool/) | `false` | Enable delete button per item  |
| `duplicable` | [Bool](/api-docs/headless/Bool/) | `false` | Enable duplicate button per item  |

| Returns | Description |
|---------|-------------|
| [ListStatus](/api-docs/headless/elements/ListStatus/) | Status flags indicating what changed |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="select"><div class="plugin-name">elements</div><code><span class="field-name">select</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="arg-name">list</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">nullValueText</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#select"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* |
| `value` | [StringPointer](/api-docs/headless/elements/StringPointer/) | |
| `list` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | |
| `nullValueText` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="check"><div class="plugin-name">elements</div><code><span class="field-name">check</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/BoolPointer/" class="type-link">BoolPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alignLabel</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/CheckStatus/" class="type-link">CheckStatus</a></code><a class="header-anchor" href="#check"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a checkbox control.

Displays a checkbox that toggles a boolean value. The checkbox
shows a checkmark when true and is empty when false.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the checkbox  |
| `value` | [BoolPointer](/api-docs/headless/elements/BoolPointer/) | | Pointer to the boolean value  |
| `alignLabel` | [Bool](/api-docs/headless/Bool/) | `false` | Align label using standard label width  |

| Returns | Description |
|---------|-------------|
| [CheckStatus](/api-docs/headless/elements/CheckStatus/) | Status flags indicating checked state and if changed |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="editColor"><div class="plugin-name">elements</div><code><span class="field-name">editColor</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a color picker field.

Shows a color preview that opens a color picker dialog when clicked.
The color value is stored as an integer in ARGB format.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the field  |
| `value` | [IntPointer](/api-docs/headless/elements/IntPointer/) | | Pointer to the color value  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the color changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="editText"><div class="plugin-name">elements</div><code><span class="field-name">editText</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">multiline</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">autocompleteCandidates</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">focused</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">autocompleteOnFocus</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/EditTextStatus/" class="type-link">EditTextStatus</a></code><a class="header-anchor" href="#editText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a text input field.

Supports single-line or multi-line text editing with optional
placeholder text and autocomplete suggestions.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the field  |
| `value` | [StringPointer](/api-docs/headless/elements/StringPointer/) | | Pointer to the string value  |
| `multiline` | [Bool](/api-docs/headless/Bool/) | `false` | Enable multi-line editing  |
| `placeholder` | [String](/api-docs/headless/String/) | *(optional)* | Text shown when field is empty  |
| `autocompleteCandidates` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | *(optional)* | List of autocomplete suggestions  |
| `focused` | [Bool](/api-docs/headless/Bool/) | `false` | Request focus on this field  |
| `autocompleteOnFocus` | [Bool](/api-docs/headless/Bool/) | `true` | Show autocomplete when focused  |

| Returns | Description |
|---------|-------------|
| [EditTextStatus](/api-docs/headless/elements/EditTextStatus/) | Status flags indicating edit state |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="editInt"><div class="plugin-name">elements</div><code><span class="field-name">editInt</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an integer input field.

Allows numeric input with optional min/max constraints.
Non-numeric input is automatically filtered out.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the field  |
| `value` | [IntPointer](/api-docs/headless/elements/IntPointer/) | | Pointer to the integer value  |
| `placeholder` | [String](/api-docs/headless/String/) | *(optional)* | Text shown when field is empty  |
| `minValue` | [Int](/api-docs/headless/Int/) | *(optional)* | Minimum allowed value  |
| `maxValue` | [Int](/api-docs/headless/Int/) | *(optional)* | Maximum allowed value  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the value changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="editFloat"><div class="plugin-name">elements</div><code><span class="field-name">editFloat</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/FloatPointer/" class="type-link">FloatPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">round</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#editFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a float input field.

Allows decimal numeric input with optional min/max constraints
and rounding precision.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the field  |
| `value` | [FloatPointer](/api-docs/headless/elements/FloatPointer/) | | Pointer to the float value  |
| `placeholder` | [String](/api-docs/headless/String/) | *(optional)* | Text shown when field is empty  |
| `minValue` | [Float](/api-docs/headless/Float/) | *(optional)* | Minimum allowed value  |
| `maxValue` | [Float](/api-docs/headless/Float/) | *(optional)* | Maximum allowed value  |
| `round` | [Int](/api-docs/headless/Int/) | *(optional)* | Rounding precision (e.g., 100 = 2 decimals)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the value changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="slideInt"><div class="plugin-name">elements</div><code><span class="field-name">slideInt</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#slideInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an integer slider control.

Provides a draggable slider for selecting integer values within
a specified range. More intuitive than text input for ranges.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the slider  |
| `value` | [IntPointer](/api-docs/headless/elements/IntPointer/) | | Pointer to the integer value  |
| `minValue` | [Int](/api-docs/headless/Int/) | | Minimum slider value  |
| `maxValue` | [Int](/api-docs/headless/Int/) | | Maximum slider value  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the value changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="slideFloat"><div class="plugin-name">elements</div><code><span class="field-name">slideFloat</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/FloatPointer/" class="type-link">FloatPointer</a><span class="operator">,</span> <span class="arg-name">minValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">maxValue</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">round</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">1000</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#slideFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a float slider control.

Provides a draggable slider for selecting float values within
a specified range with configurable precision.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the slider  |
| `value` | [FloatPointer](/api-docs/headless/elements/FloatPointer/) | | Pointer to the float value  |
| `minValue` | [Float](/api-docs/headless/Float/) | | Minimum slider value  |
| `maxValue` | [Float](/api-docs/headless/Float/) | | Maximum slider value  |
| `round` | [Int](/api-docs/headless/Int/) | `1000` | Rounding precision (e.g., 100 = 2 decimals)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the value changed this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="visual"><div class="plugin-name">elements</div><code><span class="field-name">visual</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">visual</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Visual/" class="type-link">ceramic.Visual</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleToFit</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alignLabel</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">useFilter</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#visual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays a custom visual element.

Embeds any Ceramic Visual object within the Im layout. The visual
can be scaled to fit within constraints or displayed at its natural size.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the visual  |
| `visual` | [ceramic.Visual](/api-docs/headless/ceramic/Visual/) | | The Visual object to display  |
| `scaleToFit` | [Bool](/api-docs/headless/Bool/) | `false` | Scale the visual to fit available space  |
| `alignLabel` | [Bool](/api-docs/headless/Bool/) | `false` | Align label using standard label width  |
| `useFilter` | [Bool](/api-docs/headless/Bool/) | `true` | Apply texture filtering when scaling |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="image"><div class="plugin-name">elements</div><code><span class="field-name">image</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tile</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/TextureTile/" class="type-link">ceramic.TextureTile</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleToFit</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alignLabel</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">textureFilter</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Quad/" class="type-link">ceramic.Quad</a></code><a class="header-anchor" href="#image"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays an image from a texture tile.

Shows a TextureTile (sub-region of a texture) within the Im layout.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* | Optional label for the image  |
| `tile` | [ceramic.TextureTile](/api-docs/headless/ceramic/TextureTile/) | | The texture tile to display  |
| `scaleToFit` | [Bool](/api-docs/headless/Bool/) | `false` | Scale image to fit available space  |
| `alignLabel` | [Bool](/api-docs/headless/Bool/) | `false` | Align label using standard label width  |
| `textureFilter` | Anonymous | *(optional)* | Texture filtering mode (LINEAR/NEAREST)  |

| Returns | Description |
|---------|-------------|
| [ceramic.Quad](/api-docs/headless/ceramic/Quad/) | The Quad visual displaying the image |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="margin"><div class="plugin-name">elements</div><code><span class="field-name">margin</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#margin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a standard margin space.

Inserts negative spacing to reduce the gap between form items.
Useful for tightening layouts.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="space"><div class="plugin-name">elements</div><code><span class="field-name">space</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DEFAULT_SPACE_HEIGHT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#space"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds vertical spacing.

Inserts empty vertical space between controls. Use negative values
to reduce spacing. Default uses theme spacing.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `height` | [Float](/api-docs/headless/Float/) | `DEFAULT_SPACE_HEIGHT` | Space height in pixels (default: theme spacing) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="separator"><div class="plugin-name">elements</div><code><span class="field-name">separator</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DEFAULT_SEPARATOR_HEIGHT</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#separator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a horizontal line separator.

Draws a horizontal line to visually separate sections.
The line color is determined by the current theme.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `height` | [Float](/api-docs/headless/Float/) | `DEFAULT_SEPARATOR_HEIGHT` | Total height including padding (default: 7) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="button"><div class="plugin-name">elements</div><code><span class="field-name">button</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#button"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a button with explicit enabled state.



| Name | Type | Description |
|------|------|-------------|
| `title` | [String](/api-docs/headless/String/) | The button label  |
| `enabled` | [Bool](/api-docs/headless/Bool/) | Whether the button is clickable  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the button was clicked this frame |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pointSize"><div class="plugin-name">elements</div><code><span class="field-name">pointSize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pointSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">12</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pointSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the font point size for subsequent text.

Affects text(), labels, and all text-based controls until
changed again or the frame ends.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pointSize` | [Int](/api-docs/headless/Int/) | `12` | Font size in points (default: 12) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="preRenderedSize"><div class="plugin-name">elements</div><code><span class="field-name">preRenderedSize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">preRenderedSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#preRenderedSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the pre-rendered font size for bitmap fonts.

When using bitmap fonts, this specifies which pre-rendered
size to use. Set to -1 to use automatic size selection.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `preRenderedSize` | [Int](/api-docs/headless/Int/) | `-1` | The bitmap font size to use, or -1 for auto |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="text"><div class="plugin-name">elements</div><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">align</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays static text.

Renders a text label using the current theme settings.
The text is not selectable or editable.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [String](/api-docs/headless/String/) | | The text to display  |
| `align` | Anonymous | *(optional)* | Optional text alignment override |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="end"><div class="plugin-name">elements</div><code><span class="field-name">end</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#end"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends the current window declaration.

Must be called after begin() and all window content has been added.
This finalizes the window layout and renders all controls.

Will assert if called without a matching begin().

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="focusedWindow"><div class="plugin-name">elements</div><code><span class="field-name">focusedWindow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#focusedWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the currently focused Im window.

Returns the Window that currently has input focus, or null
if no Im window is focused. Useful for checking if the Im
UI is capturing input.


| Returns | Description |
|---------|-------------|
| [Window](/api-docs/headless/elements/Window/) | The focused Window or null |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="allow"><div class="plugin-name">elements</div><code><span class="field-name">allow</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#allow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Allows events from a specific entity owner.

When Im windows are focused, they block events from other entities
by default. Use this to whitelist specific entities whose events
should still be processed. The entity is automatically removed
from the allowed list when destroyed.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [ceramic.Entity](/api-docs/headless/ceramic/Entity/) | The entity to allow events from |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="filter"><div class="plugin-name">elements</div><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an entity from the allowed owners list.

Events from this entity will be blocked again when Im windows
are focused. Also removes the destroy listener if the entity
still exists.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [ceramic.Entity](/api-docs/headless/ceramic/Entity/) | The entity to remove from allowed list |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="confirm"><div class="plugin-name">elements</div><code><span class="field-name">confirm</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">yes</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">no</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DIALOG_WIDTH</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">WindowData.DEFAULT_HEIGHT</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ConfirmStatus/" class="type-link">ConfirmStatus</a></code><a class="header-anchor" href="#confirm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shows a confirmation dialog (synchronous version).

Displays a modal dialog with Yes/No buttons. The dialog can be
canceled by clicking outside if cancelable is true.

This version returns immediately with the current status. Use
the returned ConfirmStatus to check if the user made a choice.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | | Dialog window title  |
| `message` | [String](/api-docs/headless/String/) | | Message to display  |
| `cancelable` | [Bool](/api-docs/headless/Bool/) | `true` | Allow closing by clicking outside  |
| `yes` | [String](/api-docs/headless/String/) | *(optional)* | Custom "Yes" button text  |
| `no` | [String](/api-docs/headless/String/) | *(optional)* | Custom "No" button text  |
| `width` | [Float](/api-docs/headless/Float/) | `DIALOG_WIDTH` | Dialog width in pixels  |
| `height` | [Float](/api-docs/headless/Float/) | `WindowData.DEFAULT_HEIGHT` | Dialog height in pixels  |
| `key` | [String](/api-docs/headless/String/) | *(optional)* | Optional unique key for persistent dialogs  |

| Returns | Description |
|---------|-------------|
| [ConfirmStatus](/api-docs/headless/elements/ConfirmStatus/) | Current dialog status |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="info"><div class="plugin-name">elements</div><code><span class="field-name">info</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ok</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DIALOG_WIDTH</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">WindowData.DEFAULT_HEIGHT</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/InfoStatus/" class="type-link">InfoStatus</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shows an information dialog (synchronous version).

Displays a modal dialog with an OK button. The dialog can be
canceled by clicking outside if cancelable is true.

This version returns immediately with the current status. Use
the returned InfoStatus to check if the user clicked OK.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | | Dialog window title  |
| `message` | [String](/api-docs/headless/String/) | | Message to display  |
| `cancelable` | [Bool](/api-docs/headless/Bool/) | `false` | Allow closing by clicking outside  |
| `ok` | [String](/api-docs/headless/String/) | *(optional)* | Custom "OK" button text  |
| `width` | [Float](/api-docs/headless/Float/) | `DIALOG_WIDTH` | Dialog width in pixels  |
| `height` | [Float](/api-docs/headless/Float/) | `WindowData.DEFAULT_HEIGHT` | Dialog height in pixels  |
| `key` | [String](/api-docs/headless/String/) | *(optional)* | Optional unique key for persistent dialogs  |

| Returns | Description |
|---------|-------------|
| [InfoStatus](/api-docs/headless/elements/InfoStatus/) | Current dialog status |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="prompt"><div class="plugin-name">elements</div><code><span class="field-name">prompt</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">placeholder</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ok</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancel</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DIALOG_WIDTH</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">WindowData.DEFAULT_HEIGHT</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/PromptStatus/" class="type-link">PromptStatus</a></code><a class="header-anchor" href="#prompt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shows a text input dialog (synchronous version).

Displays a modal dialog with a text field and OK/Cancel buttons.
The dialog can be canceled by clicking outside if cancelable is true.

This version returns immediately with the current status. The text
value is read from and written to the provided StringPointer.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | | Dialog window title  |
| `message` | [String](/api-docs/headless/String/) | | Message to display  |
| `value` | [StringPointer](/api-docs/headless/elements/StringPointer/) | | Pointer to the text value  |
| `placeholder` | [String](/api-docs/headless/String/) | *(optional)* | Placeholder text for empty field  |
| `cancelable` | [Bool](/api-docs/headless/Bool/) | `false` | Allow closing by clicking outside  |
| `ok` | [String](/api-docs/headless/String/) | *(optional)* | Custom "OK" button text  |
| `cancel` | [String](/api-docs/headless/String/) | *(optional)* | Custom "Cancel" button text  |
| `width` | [Float](/api-docs/headless/Float/) | `DIALOG_WIDTH` | Dialog width in pixels  |
| `height` | [Float](/api-docs/headless/Float/) | `WindowData.DEFAULT_HEIGHT` | Dialog height in pixels  |
| `key` | [String](/api-docs/headless/String/) | *(optional)* | Optional unique key for persistent dialogs  |

| Returns | Description |
|---------|-------------|
| [PromptStatus](/api-docs/headless/elements/PromptStatus/) | Current dialog status |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="choice"><div class="plugin-name">elements</div><code><span class="field-name">choice</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">cancelable</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="arg-name">choices</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">DIALOG_WIDTH</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">WindowData.DEFAULT_HEIGHT</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ChoiceStatus/" class="type-link">ChoiceStatus</a></code><a class="header-anchor" href="#choice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shows a multiple choice dialog (synchronous version).

Displays a modal dialog with multiple buttons for each choice.
The dialog can be canceled by clicking outside if cancelable is true.

This version returns immediately with the current status. Use
the returned ChoiceStatus to check which choice was selected.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/headless/String/) | | Dialog window title  |
| `message` | [String](/api-docs/headless/String/) | | Message to display  |
| `cancelable` | [Bool](/api-docs/headless/Bool/) | `false` | Allow closing by clicking outside  |
| `choices` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | | Array of choice button labels  |
| `width` | [Float](/api-docs/headless/Float/) | `DIALOG_WIDTH` | Dialog width in pixels  |
| `height` | [Float](/api-docs/headless/Float/) | `WindowData.DEFAULT_HEIGHT` | Dialog height in pixels  |
| `key` | [String](/api-docs/headless/String/) | *(optional)* | Optional unique key for persistent dialogs  |

| Returns | Description |
|---------|-------------|
| [ChoiceStatus](/api-docs/headless/elements/ChoiceStatus/) | Current dialog status with selected index |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handle"><div class="plugin-name">elements</div><code><span class="field-name">handle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/Handle/" class="type-link">Handle</a></code><a class="header-anchor" href="#handle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a unique handle for storing values.

Handles provide a way to store values that persist across frames
without explicitly creating pointers. The handle is unique per
source location and occurrence within a frame.

Used internally by the pointer macros (Im.bool(), Im.int(), etc.)
to create implicit storage locations.


| Returns | Description |
|---------|-------------|
| [Handle](/api-docs/headless/elements/Handle/) | A unique handle identifier |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readInt"><div class="plugin-name">elements</div><code><span class="field-name">readInt</span><span class="parenthesis">(</span><span class="arg-name">intPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#readInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intPointer` | [IntPointer](/api-docs/headless/elements/IntPointer/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="writeInt"><div class="plugin-name">elements</div><code><span class="field-name">writeInt</span><span class="parenthesis">(</span><span class="arg-name">intPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeInt"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `intPointer` | [IntPointer](/api-docs/headless/elements/IntPointer/) |
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readFloat"><div class="plugin-name">elements</div><code><span class="field-name">readFloat</span><span class="parenthesis">(</span><span class="arg-name">floatPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/FloatPointer/" class="type-link">FloatPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#readFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `floatPointer` | [FloatPointer](/api-docs/headless/elements/FloatPointer/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="writeFloat"><div class="plugin-name">elements</div><code><span class="field-name">writeFloat</span><span class="parenthesis">(</span><span class="arg-name">floatPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/FloatPointer/" class="type-link">FloatPointer</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeFloat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `floatPointer` | [FloatPointer](/api-docs/headless/elements/FloatPointer/) |
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readString"><div class="plugin-name">elements</div><code><span class="field-name">readString</span><span class="parenthesis">(</span><span class="arg-name">stringPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#readString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stringPointer` | [StringPointer](/api-docs/headless/elements/StringPointer/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="writeString"><div class="plugin-name">elements</div><code><span class="field-name">writeString</span><span class="parenthesis">(</span><span class="arg-name">stringPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/StringPointer/" class="type-link">StringPointer</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `stringPointer` | [StringPointer](/api-docs/headless/elements/StringPointer/) |
| `value` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readArray"><div class="plugin-name">elements</div><code><span class="field-name">readArray</span><span class="parenthesis">(</span><span class="arg-name">arrayPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ArrayPointer/" class="type-link">ArrayPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arrayPointer` | [ArrayPointer](/api-docs/headless/elements/ArrayPointer/) |

| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="writeArray"><div class="plugin-name">elements</div><code><span class="field-name">writeArray</span><span class="parenthesis">(</span><span class="arg-name">arrayPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/ArrayPointer/" class="type-link">ArrayPointer</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `arrayPointer` | [ArrayPointer](/api-docs/headless/elements/ArrayPointer/) |
| `value` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readEnumValue"><div class="plugin-name">elements</div><code><span class="field-name">readEnumValue</span><span class="parenthesis">(</span><span class="arg-name">enumValuePointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/EnumValuePointer/" class="type-link">EnumValuePointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#readEnumValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumValuePointer` | [EnumValuePointer](/api-docs/headless/elements/EnumValuePointer/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="writeEnumValue"><div class="plugin-name">elements</div><code><span class="field-name">writeEnumValue</span><span class="parenthesis">(</span><span class="arg-name">enumValuePointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/EnumValuePointer/" class="type-link">EnumValuePointer</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeEnumValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `enumValuePointer` | [EnumValuePointer](/api-docs/headless/elements/EnumValuePointer/) |
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="readBool"><div class="plugin-name">elements</div><code><span class="field-name">readBool</span><span class="parenthesis">(</span><span class="arg-name">boolPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/BoolPointer/" class="type-link">BoolPointer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#readBool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `boolPointer` | [BoolPointer](/api-docs/headless/elements/BoolPointer/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="writeBool"><div class="plugin-name">elements</div><code><span class="field-name">writeBool</span><span class="parenthesis">(</span><span class="arg-name">boolPointer</span><span class="operator">:</span> <a href="/api-docs/headless/elements/BoolPointer/" class="type-link">BoolPointer</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeBool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `boolPointer` | [BoolPointer](/api-docs/headless/elements/BoolPointer/) |
| `value` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="bool"><div class="plugin-name">elements</div><code><span class="field-name">bool</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#bool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="int"><div class="plugin-name">elements</div><code><span class="field-name">int</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/IntPointer/" class="type-link">IntPointer</a></code><a class="header-anchor" href="#int"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [IntPointer](/api-docs/headless/elements/IntPointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="color"><div class="plugin-name">elements</div><code><span class="field-name">color</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#color"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [ceramic.Color](/api-docs/headless/ceramic/Color/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="string"><div class="plugin-name">elements</div><code><span class="field-name">string</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#string"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="float"><div class="plugin-name">elements</div><code><span class="field-name">float</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#float"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Float](/api-docs/headless/Float/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="array"><div class="plugin-name">elements</div><code><span class="field-name">array</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="enumValue"><div class="plugin-name">elements</div><code><span class="field-name">enumValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/elements/EnumValuePointer/" class="type-link">EnumValuePointer</a></code><a class="header-anchor" href="#enumValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [EnumValuePointer](/api-docs/headless/elements/EnumValuePointer/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="enumAbstract"><div class="plugin-name">elements</div><code><span class="field-name">enumAbstract</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#enumAbstract"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="spine"><div class="plugin-name">spine</div><code><span class="field-name">spine</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">spineData</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/SpineData/" class="type-link">ceramic.SpineData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">animation</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skin</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scaleToFit</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">alignLabel</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Spine/" class="type-link">ceramic.Spine</a></code><a class="header-anchor" href="#spine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/headless/String/) | *(optional)* |
| `spineData` | [ceramic.SpineData](/api-docs/headless/ceramic/SpineData/) | |
| `animation` | [String](/api-docs/headless/String/) | *(optional)* |
| `skin` | [String](/api-docs/headless/String/) | *(optional)* |
| `time` | [Float](/api-docs/headless/Float/) | `-1` |
| `scaleToFit` | [Bool](/api-docs/headless/Bool/) | `false` |
| `alignLabel` | [Bool](/api-docs/headless/Bool/) | `false` |

| Returns |
|---------|
| [ceramic.Spine](/api-docs/headless/ceramic/Spine/) |

## Private Members

<div class="signature field-var no-description has-plugin" id="DESTROY_ASSET_AFTER_X_FRAMES"><div class="plugin-name">elements</div><code><span class="field-name">DESTROY_ASSET_AFTER_X_FRAMES</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#DESTROY_ASSET_AFTER_X_FRAMES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DEFAULT_SPACE_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_SPACE_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DEFAULT_SPACE_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DEFAULT_LABEL_WIDTH"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_LABEL_WIDTH</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DEFAULT_LABEL_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DEFAULT_SEPARATOR_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_SEPARATOR_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DEFAULT_SEPARATOR_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DEFAULT_LABEL_POSITION"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_LABEL_POSITION</span><span class="operator">:</span> <a href="/api-docs/headless/elements/LabelPosition/" class="type-link">LabelPosition</a></code><a class="header-anchor" href="#DEFAULT_LABEL_POSITION"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DEFAULT_TEXT_ALIGN"><div class="plugin-name">elements</div><code><span class="field-name">DEFAULT_TEXT_ALIGN</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#DEFAULT_TEXT_ALIGN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="INT_MIN_VALUE"><div class="plugin-name">elements</div><code><span class="field-name">INT_MIN_VALUE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INT_MIN_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="INT_MAX_VALUE"><div class="plugin-name">elements</div><code><span class="field-name">INT_MAX_VALUE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#INT_MAX_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="FLOAT_MIN_VALUE"><div class="plugin-name">elements</div><code><span class="field-name">FLOAT_MIN_VALUE</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FLOAT_MIN_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="FLOAT_MAX_VALUE"><div class="plugin-name">elements</div><code><span class="field-name">FLOAT_MAX_VALUE</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#FLOAT_MAX_VALUE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DIALOG_WIDTH"><div class="plugin-name">elements</div><code><span class="field-name">DIALOG_WIDTH</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DIALOG_WIDTH"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="DIALOG_OVERFLOW_HEIGHT"><div class="plugin-name">elements</div><code><span class="field-name">DIALOG_OVERFLOW_HEIGHT</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#DIALOG_OVERFLOW_HEIGHT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="updateWindowsDepth"><div class="plugin-name">elements</div><code><span class="field-name">updateWindowsDepth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateWindowsDepth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="displayPendingDialogIfNeeded"><div class="plugin-name">elements</div><code><span class="field-name">displayPendingDialogIfNeeded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#displayPendingDialogIfNeeded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

