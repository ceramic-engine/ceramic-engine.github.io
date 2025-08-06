---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: DragDrop
target: Clay (Native)
permalink: api-docs/clay-native/elements/DragDrop/
---

# DragDrop

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/DragDrop.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <strong>elements.DragDrop</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Observable/">tracker.Observable</a>, <a href="/api-docs/clay-native/ceramic/Component/">ceramic.Component</a></div>

A component that enables drag-and-drop functionality for visuals.

This component handles the complete drag-and-drop lifecycle:
- Detecting drag initiation based on pointer movement threshold
- Creating and managing a dragging visual representation
- Tracking drag position updates
- Handling drag completion and visual cleanup

The component can work with custom visual factories to create drag representations
and provides observable properties for tracking drag state and position.

Example usage:
```haxe
var dragDrop = new DragDrop(
    5.0, // threshold
    clickComponent,
    () -> createDragVisual(),
    (visual) -> recycleDragVisual(visual)
);
myVisual.component('dragDrop', dragDrop);

// Listen to drag events
dragDrop.onDraggingChange(this, dragging -> {
    if (dragging) trace('Started dragging');
    else trace('Stopped dragging');
});
```

<div class="see"><strong>See:</strong> CellView For usage in draggable cells, Window For draggable window implementation</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="observedDirty"><div class="plugin-name">elements</div><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragging"><div class="plugin-name">elements</div><code><span class="field-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether a drag operation is currently active.
Observable property that changes when dragging starts/stops.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragX"><div class="plugin-name">elements</div><code><span class="field-name">dragX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current horizontal drag offset from the drag start position.
Updated continuously during drag operations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="dragY"><div class="plugin-name">elements</div><code><span class="field-name">dragY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dragY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current vertical drag offset from the drag start position.
Updated continuously during drag operations.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="click"><div class="plugin-name">elements</div><code><span class="field-name">click</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Click/" class="type-link">ceramic.Click</a></code><a class="header-anchor" href="#click"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional click component to cancel when drag starts.
Prevents click events from firing when the user drags.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="threshold"><div class="plugin-name">elements</div><code><span class="field-name">threshold</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#threshold"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum pointer movement distance to initiate drag.
Prevents accidental drags from small movements.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="draggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">draggingVisual</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#draggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual being displayed during drag operation.
Created by getDraggingVisual and cleaned up by releaseDraggingVisual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="entity"><div class="plugin-name">elements</div><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual entity this component is attached to.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">elements</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDragging"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDragging</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDragX"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDragX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDragX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDragY"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDragY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDragY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getDraggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">getDraggingVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">ceramic.Visual</a></code><a class="header-anchor" href="#getDraggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Factory function to create the visual shown during dragging.
Called when drag operation starts.
Should return a Visual that represents the dragged content.
| Returns |
|---------|
| [ceramic.Visual](/api-docs/clay-native/ceramic/Visual/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="releaseDraggingVisual"><div class="plugin-name">elements</div><code><span class="field-name">releaseDraggingVisual</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseDraggingVisual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Function to handle cleanup when dragging ends.
Called with the dragging visual to allow recycling or disposal.
If null, the dragging visual reference is simply cleared.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="drag"><div class="plugin-name">elements</div><code><span class="field-name">drag</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">pointerX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pointerY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#drag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Programmatically starts a drag operation.
Can be called to initiate dragging without waiting for threshold.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `pointerX` | [Float](/api-docs/clay-native/Float/) | *(optional)* | X position to start drag from (defaults to current pointer position)  |
| `pointerY` | [Float](/api-docs/clay-native/Float/) | *(optional)* | Y position to start drag from (defaults to current pointer position) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">threshold</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">4.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">click</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Click/" class="type-link">ceramic.Click</a><span class="operator">,</span> <span class="arg-name">getDraggingVisual</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">releaseDraggingVisual</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new DragDrop component.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `threshold` | [Float](/api-docs/clay-native/Float/) | `4.0` | Minimum pointer movement to start drag (default: 4.0 pixels)  |
| `click` | [ceramic.Click](/api-docs/clay-native/ceramic/Click/) | *(optional)* | Optional click component to cancel when dragging starts  |
| `getDraggingVisual` | Function | | Factory function to create the drag visual  |
| `releaseDraggingVisual` | Function | | Cleanup function for the drag visual |

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedDragging"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDragging</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedDragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDragX"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDragX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedDragX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDragY"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDragY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedDragY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visualDragStartX"><div class="plugin-name">elements</div><code><span class="field-name">visualDragStartX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#visualDragStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial X position of the dragging visual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="visualDragStartY"><div class="plugin-name">elements</div><code><span class="field-name">visualDragStartY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#visualDragStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initial Y position of the dragging visual.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pointerDownX"><div class="plugin-name">elements</div><code><span class="field-name">pointerDownX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerDownX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X position where pointer was initially pressed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pointerDownY"><div class="plugin-name">elements</div><code><span class="field-name">pointerDownY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerDownY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y position where pointer was initially pressed.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pointerDragStartX"><div class="plugin-name">elements</div><code><span class="field-name">pointerDragStartX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerDragStartX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

X position where drag operation started.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="pointerDragStartY"><div class="plugin-name">elements</div><code><span class="field-name">pointerDragStartY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pointerDragStartY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Y position where drag operation started.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isPointerDown"><div class="plugin-name">elements</div><code><span class="field-name">isPointerDown</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether pointer is currently pressed down.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitObservedDirty"><div class="plugin-name">elements</div><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">DragDrop</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [DragDrop](/api-docs/clay-native/elements/DragDrop/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDraggingChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDraggingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDraggingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when dragging field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/clay-native/Bool/) |
| `previous` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDragXChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDragXChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDragXChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when dragX field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDragYChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDragYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDragYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when dragY field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/clay-native/Float/) |
| `previous` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">elements</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when this component is bound to an entity.
Sets up pointer down event listener on the target visual.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerDown"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer down events on the target visual.
Initializes tracking for potential drag operation.

| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerMove"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer move events during potential or active drag.
Checks threshold and updates drag position.

| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="handlePointerUp"><div class="plugin-name">elements</div><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">ceramic.TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles pointer up events to end drag operation.
Cleans up event listeners and releases dragging visual.

| Name | Type |
|------|------|
| `info` | [ceramic.TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="updateDrag"><div class="plugin-name">elements</div><code><span class="field-name">updateDrag</span><span class="parenthesis">(</span><span class="arg-name">pointerX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">pointerY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#updateDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Updates the drag position based on current pointer coordinates.
Converts screen coordinates to visual space if dragging visual has a parent.


| Name | Type | Description |
|------|------|-------------|
| `pointerX` | [Float](/api-docs/clay-native/Float/) | Current pointer X position in screen space  |
| `pointerY` | [Float](/api-docs/clay-native/Float/) | Current pointer Y position in screen space |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">elements</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [ceramic.Entity](/api-docs/clay-native/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">elements</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Entity/" class="type-link">ceramic.Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [ceramic.Entity](/api-docs/clay-native/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

