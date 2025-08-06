---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SoundAsset
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SoundAsset/
---

# SoundAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SoundAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/Asset/">Asset</a> → <strong>ceramic.SoundAsset</strong> (Class)</div>

Asset type for loading audio/sound files.

Supports various audio formats depending on the backend:
- Web: MP3, OGG, WAV, M4A
- Native: MP3, OGG, WAV, FLAC

Features:
- Streaming support for large audio files
- Hot reload during development
- Automatic format fallback (tries alternative formats if one fails)

```haxe
var assets = new Assets();
assets.addSound('music/background');
assets.addSound('sfx/jump', null, {stream: true});
assets.load();

// Play loaded sound
var sound = assets.sound('sfx/jump');
sound.play();
```

## Instance Members

<div class="signature field-var has-description" id="stream"><code><span class="field-name">stream</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stream"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this sound should be streamed from disk rather than loaded into memory.
Useful for large audio files like background music.
Note: Streaming support depends on the backend.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sound"><code><span class="field-name">sound</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a></code><a class="header-anchor" href="#sound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The loaded Sound instance.
Observable property that updates when the sound is loaded or replaced.
Null until the asset is successfully loaded.

<hr class="field-separator" />

<div class="signature field-method no-description" id="invalidateSound"><code><span class="field-name">invalidateSound</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load the sound file.
Tries multiple file formats if available, falling back to alternatives on failure.
Emits complete event when finished.

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">variant</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/AssetOptions/" class="type-link">AssetOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Create a new sound asset.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | | Sound file name (with or without extension)  |
| `variant` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional variant suffix  |
| `options` | [Null](/api-docs/clay-web/Null/)<[AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/)> | *(optional)* | Loading options including: - stream: Whether to stream the audio - volume: Initial volume (0.0 to 1.0) |

## Private Members

<div class="signature field-var no-description" id="unobservedSound"><code><span class="field-name">unobservedSound</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a></code><a class="header-anchor" href="#unobservedSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitReplaceSound"><code><span class="field-name">emitReplaceSound</span><span class="parenthesis">(</span><span class="arg-name">newSound</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a><span class="operator">,</span> <span class="arg-name">prevSound</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitReplaceSound"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the sound is replaced (e.g., during hot reload).


| Name | Type | Description |
|------|------|-------------|
| `newSound` | [Sound](/api-docs/clay-web/ceramic/Sound/) | The newly loaded sound  |
| `prevSound` | [Sound](/api-docs/clay-web/ceramic/Sound/) | The previous sound being replaced |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSoundChange"><code><span class="field-name">emitSoundChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Sound/" class="type-link">Sound</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSoundChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when sound field changes.

| Name | Type |
|------|------|
| `current` | [Sound](/api-docs/clay-web/ceramic/Sound/) |
| `previous` | [Sound](/api-docs/clay-web/ceramic/Sound/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assetFilesDidChange"><code><span class="field-name">assetFilesDidChange</span><span class="parenthesis">(</span><span class="arg-name">newFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">previousFiles</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/ReadOnlyMap/" class="type-link">ReadOnlyMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assetFilesDidChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle file system changes for hot reload.
Automatically reloads the sound when the source file is modified.

| Name | Type |
|------|------|
| `newFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> |
| `previousFiles` | [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/)<[String](/api-docs/clay-web/String/), [Float](/api-docs/clay-web/Float/)> |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |

