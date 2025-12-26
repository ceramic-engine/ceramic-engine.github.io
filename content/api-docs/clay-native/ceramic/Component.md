---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Component
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Component/
---

# Component

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Component.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Component</strong> (Interface) → <a href="/api-docs/clay-native/ceramic/AutoTiler/">AutoTiler</a>, <a href="/api-docs/clay-native/ceramic/Click/">Click</a>, <a href="/api-docs/clay-native/ceramic/DoubleClick/">DoubleClick</a>, <a href="/api-docs/clay-native/ceramic/DynamicData/">DynamicData</a>, <a href="/api-docs/clay-native/ceramic/EditText/">EditText</a>, <a href="/api-docs/clay-native/ceramic/KeyBindings/">KeyBindings</a>, <a href="/api-docs/clay-native/ceramic/LongPress/">LongPress</a>, <a href="/api-docs/clay-native/ceramic/ParticleEmitter/">ParticleEmitter</a>, <a href="/api-docs/clay-native/ceramic/Pinch/">Pinch</a>, <a href="/api-docs/clay-native/ceramic/Script/">Script</a>, <a href="/api-docs/clay-native/ceramic/SelectText/">SelectText</a>, <a href="/api-docs/clay-native/ceramic/SpineMontage/">SpineMontage</a>, <a href="/api-docs/clay-native/ceramic/StateMachineBase/">StateMachineBase</a>, <a href="/api-docs/clay-native/ceramic/TilemapEditor/">TilemapEditor</a>, <a href="/api-docs/clay-native/ceramic/Timeline/">Timeline</a>, <a href="/api-docs/clay-native/ceramic/VisibleBounds/">VisibleBounds</a>, <a href="/api-docs/clay-native/ceramic/VisualTransition/">VisualTransition</a>, <a href="/api-docs/clay-native/elements/DragDrop/">elements.DragDrop</a>, <a href="/api-docs/clay-native/elements/ItalicText/">elements.ItalicText</a>, <a href="/api-docs/clay-native/elements/TabFocus/">elements.TabFocus</a>, <a href="/api-docs/clay-native/elements/Tooltip/">elements.Tooltip</a>, <a href="/api-docs/clay-native/tracker/DynamicEvents/">tracker.DynamicEvents</a>, <a href="/api-docs/clay-native/tracker/History/">tracker.History</a>, <a href="/api-docs/clay-native/tracker/SerializeModel/">tracker.SerializeModel</a>, <a href="/api-docs/clay-native/tracker/ShareModel/">tracker.ShareModel</a></div>

Interface for components that can be attached to entities.

A Component is an Entity that can be bound to another Entity, enabling
composition-based architecture. Components are automatically managed by
their parent entity and destroyed when the parent is destroyed.

Any Entity subclass can be used as a Component by implementing this interface.
The ComponentMacro will automatically add required fields and methods.

Example usage:
```haxe
class MyComponent extends Entity implements Component {
    function bindAsComponent() {
        // Initialize component when attached to entity
    }
}

// Attach to entity
entity.component('myComp', new MyComponent());
```

## Instance Members

<div class="signature field-var has-description" id="initializerName"><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this component was created from an initializer,
its initializer name is provided to retrieve the
initializer from the component.
This field is automatically added to implementing class by ComponentMacro

<hr class="field-separator" />

<div class="signature field-method has-description" id="setEntity"><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by target entity to assign itself to the component

| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/clay-native/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getEntity"><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called to retrieve entity in a generic way that works with all components
| Returns |
|---------|
| [Entity](/api-docs/clay-native/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bindAsComponent"><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when the component is bound to an entity. At this stage, the `entity` property
should be assigned and work properly. Use this method to run initialization code once
the component has been plugged to a target entity.
When the target entity is destroyed, our instance (the component) will be unbound and destroyed as well.

## Metadata

| Name | Parameters |
|------|------------|
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:keepSub` | - |

