---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: Model
target: Clay (Native)
permalink: api-docs/clay-native/tracker/Model/
---

# Model

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/Model.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">ceramic.Entity</a> → <strong>tracker.Model</strong> (Class) → <a href="/api-docs/clay-native/ceramic/SpriteSheet/">ceramic.SpriteSheet</a>, <a href="/api-docs/clay-native/ceramic/SpriteSheetAnimation/">ceramic.SpriteSheetAnimation</a>, <a href="/api-docs/clay-native/ceramic/SpriteSheetFrame/">ceramic.SpriteSheetFrame</a>, <a href="/api-docs/clay-native/ceramic/TilemapData/">ceramic.TilemapData</a>, <a href="/api-docs/clay-native/ceramic/TilemapLayerData/">ceramic.TilemapLayerData</a>, <a href="/api-docs/clay-native/ceramic/Tileset/">ceramic.Tileset</a>, <a href="/api-docs/clay-native/ceramic/TilesetImage/">ceramic.TilesetImage</a>, <a href="/api-docs/clay-native/elements/PendingDialog/">elements.PendingDialog</a>, <a href="/api-docs/clay-native/elements/Theme/">elements.Theme</a>, <a href="/api-docs/clay-native/elements/UserData/">elements.UserData</a>, <a href="/api-docs/clay-native/elements/WindowData/">elements.WindowData</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/tracker/Serializable/">Serializable</a>, <a href="/api-docs/clay-native/tracker/Observable/">Observable</a></div>

## Instance Members

<div class="signature field-var has-description" id="observedDirty"><code><span class="field-name">observedDirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#observedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default is `false`, automatically set to `true` when any of this instance's observable variables has changed.

<hr class="field-separator" />

<div class="signature field-var no-description" id="serializer"><code><span class="field-name">serializer</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/SerializeModel/" class="type-link">SerializeModel</a></code><a class="header-anchor" href="#serializer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="sharer"><code><span class="field-name">sharer</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/ShareModel/" class="type-link">ShareModel</a></code><a class="header-anchor" href="#sharer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dirty"><code><span class="field-name">dirty</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitObservedDirty"><code><span class="field-name">emitObservedDirty</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <a href="#" class="type-link">Model</a><span class="operator">,</span> <span class="arg-name">fromSerializedField</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitObservedDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when any observable value as changed on this instance.

| Name | Type |
|------|------|
| `instance` | [Model](/api-docs/clay-native/tracker/Model/) |
| `fromSerializedField` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitModelDirty"><code><span class="field-name">emitModelDirty</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="#" class="type-link">Model</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitModelDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

modelDirty event

| Name | Type |
|------|------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="willSerialize"><code><span class="field-name">willSerialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#willSerialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called right before the object will be serialized.

<hr class="field-separator" />

<div class="signature field-method has-description" id="didDeserialize"><code><span class="field-name">didDeserialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#didDeserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called right after the object has been deserialized. Could be useful to override it to check data integrity
when running a newer model version etc...

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeShouldDestroy"><code><span class="field-name">serializeShouldDestroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#serializeShouldDestroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called right before the object is destroyed because it is not used anymore.

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-native/Bool/) | `true` (default) if the destroy should happen or not |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hxSerialize"><code><span class="field-name">hxSerialize</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Serializer/" class="type-link">haxe.Serializer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#hxSerialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [haxe.Serializer](/api-docs/clay-native/haxe/Serializer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="hxUnserialize"><code><span class="field-name">hxUnserialize</span><span class="parenthesis">(</span><span class="arg-name">u</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/Unserializer/" class="type-link">haxe.Unserializer</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#hxUnserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `u` | [haxe.Unserializer](/api-docs/clay-native/haxe/Unserializer/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSerialize"><code><span class="field-name">emitSerialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSerialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when this object gets serialized.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDeserialize"><code><span class="field-name">emitDeserialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDeserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when this object gets deserialized.

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:keepSub` | - |

