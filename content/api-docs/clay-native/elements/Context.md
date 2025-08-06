---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Context
target: Clay (Native)
permalink: api-docs/clay-native/elements/Context/
---

# Context

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Context.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <strong>elements.Context</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a></div>

Global context singleton for the elements UI system.

Provides centralized access to:
- Theme configuration
- User preferences and window states
- Root view container
- Focused window tracking
- Shared assets management

The context automatically persists user data (window positions, sizes, etc.)
to local storage and restores it on startup.

Access the singleton instance via `Context.context`.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/elements/Theme/">Theme</a>, <a href="/api-docs/clay-native/elements/UserData/">UserData</a>, <a href="/api-docs/clay-native/elements/Window/">Window</a></div>


## Static Members

<div class="signature field-var has-description has-plugin" id="context"><div class="plugin-name">elements</div><code><span class="field-name">context</span><span class="operator">:</span> <a href="#" class="type-link">Context</a></code><a class="header-anchor" href="#context"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global singleton instance of the UI context

## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="theme"><div class="plugin-name">elements</div><code><span class="field-name">theme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#theme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current UI theme controlling visual appearance

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="user"><div class="plugin-name">elements</div><code><span class="field-name">user</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/UserData/" class="type-link">UserData</a></code><a class="header-anchor" href="#user"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User preferences and persistent data storage

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="windowsData"><div class="plugin-name">elements</div><code><span class="field-name">windowsData</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/ReadOnlyMap/" class="type-link">ceramic.ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-native/elements/WindowData/" class="type-link">WindowData</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#windowsData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Read-only map of window data by window ID

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="view"><div class="plugin-name">elements</div><code><span class="field-name">view</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/View/" class="type-link">ceramic.View</a></code><a class="header-anchor" href="#view"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The root view container for all UI elements

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="focusedWindow"><div class="plugin-name">elements</div><code><span class="field-name">focusedWindow</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#focusedWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently focused window (receives keyboard input)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="assets"><div class="plugin-name">elements</div><code><span class="field-name">assets</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Assets/" class="type-link">ceramic.Assets</a></code><a class="header-anchor" href="#assets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared assets instance for loading UI resources

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTheme"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTheme</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="addWindowData"><div class="plugin-name">elements</div><code><span class="field-name">addWindowData</span><span class="parenthesis">(</span><span class="arg-name">windowData</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/WindowData/" class="type-link">WindowData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addWindowData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds or updates window data in the persistent storage.
Window data includes position, size, and other state information.



| Name | Type | Description |
|------|------|-------------|
| `windowData` | [WindowData](/api-docs/clay-native/elements/WindowData/) | The window data to store (must have non-null id)  |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedTheme"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTheme</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a></code><a class="header-anchor" href="#unobservedTheme"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Context</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Context](/api-docs/clay-native/elements/Context/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitThemeChange"><div class="plugin-name">elements</div><code><span class="field-name">emitThemeChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/elements/Theme/" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitThemeChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when theme field changes.

| Name | Type |
|------|------|
| `current` | [Theme](/api-docs/clay-native/elements/Theme/) |
| `previous` | [Theme](/api-docs/clay-native/elements/Theme/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Private constructor for singleton pattern.
Loads persisted user data and sets up auto-save.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | elements.Im |
| `:allow` | elements.ImSystem |

