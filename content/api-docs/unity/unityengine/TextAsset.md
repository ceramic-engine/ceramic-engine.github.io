---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: TextAsset
target: Unity
permalink: api-docs/unity/unityengine/TextAsset/
---

# TextAsset

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/TextAsset.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <strong>unityengine.TextAsset</strong> (extern class)</div>

Represents a text file asset in Unity.
Can store any text-based data including JSON, XML, CSV, or plain text.

In Ceramic's Unity backend, TextAssets are used to load:
- Configuration files
- Shader source code
- JSON data files
- Any text-based resources

TextAssets are loaded from the Resources folder or AssetBundles
and provide both string and binary access to the data.

Supported extensions:
- .txt, .json, .xml, .csv
- .shader, .cginc (shader files)
- .html, .htm
- Any file Unity imports as text

<div class="see"><strong>See:</strong> Resources</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="text"><div class="plugin-name">unity</div><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text contents of the file as a string.

Automatically handles text encoding (usually UTF-8).
Line endings are preserved as in the original file.

Loading JSON data:
```haxe
var jsonAsset = Resources.Load<TextAsset>("config/settings");
var data = Json.parse(jsonAsset.text);
```

Note: For large files, accessing text may allocate
significant memory for the string conversion.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="bytes"><div class="plugin-name">unity</div><code><span class="field-name">bytes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#bytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Raw bytes of the file content.

Provides direct access to file data without string conversion.
Useful for:
- Binary data stored as TextAsset
- Custom parsing or encoding
- Avoiding string allocation for large files

Reading binary data:
```haxe
var asset = Resources.Load<TextAsset>("data/binary");
var bytes = asset.bytes;
// Process bytes directly
```

The byte array is read-only and references Unity's internal data.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

