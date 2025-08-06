---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: SpineFile
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/SpineFile/
---

# SpineFile

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/spine/runtime/src/ceramic/SpineFile.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpineFile</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-web/spine/support/files/FileHandle/">spine.support.files.FileHandle</a></div>

Implementation of Spine's FileHandle interface for Ceramic.

This class provides a simple in-memory file representation that the Spine runtime
can use to access file content. It's used internally when loading Spine assets
to provide the Spine runtime with access to atlas files and other text-based resources.

The SpineFile acts as an adapter between Ceramic's asset loading system and
Spine's file handling expectations, storing file content in memory as a string.

```haxe
// This is typically used internally by SpineAsset
var atlasContent = assets.text("hero.atlas").content;
var spineFile = new SpineFile("hero.atlas", atlasContent);

// The Spine runtime can then use this file handle
var atlas = new TextureAtlas(spineFile, ...);
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="path"><div class="plugin-name">spine</div><code><span class="field-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#path"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path or identifier of this file.
This is typically the asset path or filename, used for identification
purposes within the Spine runtime.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="content"><div class="plugin-name">spine</div><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text content of the file stored in memory.
This contains the actual file data that will be returned when
the Spine runtime requests the file content.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getContent"><div class="plugin-name">spine</div><code><span class="field-name">getContent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the content of this file.

This method is required by the FileHandle interface and is called
by the Spine runtime when it needs to read the file data.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The complete file content as a string |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new SpineFile instance with the specified path and content.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The file path or identifier  |
| `content` | [String](/api-docs/clay-web/String/) | The text content of the file |

