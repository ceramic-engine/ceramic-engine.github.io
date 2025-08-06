---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: KeyBindings
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/KeyBindings/
---

# KeyBindings

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/KeyBindings.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <strong>ceramic.KeyBindings</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/ceramic/Component/">Component</a></div>

Manages a collection of keyboard shortcut bindings.

KeyBindings provides a convenient way to define and manage multiple
keyboard shortcuts in your application. It can be used standalone
or as a component attached to other entities.

Features:
- Create keyboard shortcuts with modifier keys
- Automatically handle platform differences (Cmd vs Ctrl)
- Component interface for easy attachment to entities
- Global key state reset functionality

Example usage:
```haxe
var bindings = new KeyBindings();

// Bind Ctrl+S (or Cmd+S on macOS)
bindings.bind([CMD_OR_CTRL, KEY(KeyCode.KEY_S)], () -> {
    saveDocument();
});

// Bind Shift+Delete
bindings.bind([SHIFT, KEY(KeyCode.DELETE)], () -> {
    permanentDelete();
});

// Attach as component
myEntity.component(new KeyBindings());
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/KeyBinding/">KeyBinding</a>, <a href="/api-docs/clay-web/ceramic/KeyAcceleratorItem/">KeyAcceleratorItem</a></div>


## Static Members

## Instance Members

<div class="signature field-var no-description" id="entity"><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="bind"><code><span class="field-name">bind</span><span class="parenthesis">(</span><span class="arg-name">accelerator</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Anonymous</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/KeyBinding/" class="type-link">KeyBinding</a></code><a class="header-anchor" href="#bind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new keyboard shortcut binding.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `accelerator` | [Array](/api-docs/clay-web/Array/)<Anonymous> | | Array of keys that must be pressed together. Order doesn't matter for modifier keys.  |
| `callback` | Function | *(optional)* | Optional callback function to execute when triggered. Can also be attached later using binding.onTrigger().  |

| Returns | Description |
|---------|-------------|
| [KeyBinding](/api-docs/clay-web/ceramic/KeyBinding/) | The created KeyBinding instance |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var has-description" id="instances"><code><span class="field-name">instances</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">KeyBindings</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#instances"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks all active KeyBindings instances.
Used for global operations like forceKeysUp().

<hr class="field-separator" />

<div class="signature field-var has-description" id="bindings"><code><span class="field-name">bindings</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/KeyBinding/" class="type-link">KeyBinding</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bindings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Array of KeyBinding instances managed by this KeyBindings.

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Component interface implementation.
Called when this KeyBindings is attached to an entity as a component.

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

