---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tiled
title: Reader
target: Clay (Native)
permalink: api-docs/clay-native/format/tmx/Reader/
---

# Reader

<div class="view-source"><a href="https://github.com/ceramic-engine/format-tiled/blob/master/format/tmx/Reader.hx">View source</a></div>

<div class="type-hierarchy"><strong>format.tmx.Reader</strong> (Class)</div>

...
@author Yanrishatum

## Instance Members

<div class="signature field-method has-description" id="resolveTSX"><code><span class="field-name">resolveTSX</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileset/" class="type-link">TmxTileset</a></code><a class="header-anchor" href="#resolveTSX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For seamless TSX resolving during initial parsing. Should return corresponding TSX. Caching should be done from outside.
| Returns |
|---------|
| [TmxTileset](/api-docs/clay-native/format/tmx/TmxTileset/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveTemplate"><code><span class="field-name">resolveTemplate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxObjectTemplate/" class="type-link">TmxObjectTemplate</a></code><a class="header-anchor" href="#resolveTemplate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For seamless Template resolving during initial parsing.
| Returns |
|---------|
| [TmxObjectTemplate](/api-docs/clay-native/format/tmx/TmxObjectTemplate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveTypeTemplate"><code><span class="field-name">resolveTypeTemplate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxObjectTypeTemplate/" class="type-link">TmxObjectTypeTemplate</a></code><a class="header-anchor" href="#resolveTypeTemplate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For seamless Type Template resolving during initial parsing.
| Returns |
|---------|
| [TmxObjectTypeTemplate](/api-docs/clay-native/format/tmx/TmxObjectTypeTemplate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="read"><code><span class="field-name">read</span><span class="parenthesis">(</span><span class="arg-name">xml</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">localPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">TmxMap</a></code><a class="header-anchor" href="#read"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads TMX file.
@return

| Name | Type | Default |
|------|------|---------|
| `xml` | [Xml](/api-docs/clay-native/Xml/) | |
| `localPath` | [String](/api-docs/clay-native/String/) | *(optional)* |

| Returns |
|---------|
| [TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readTSX"><code><span class="field-name">readTSX</span><span class="parenthesis">(</span><span class="arg-name">xml</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileset/" class="type-link">TmxTileset</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileset/" class="type-link">TmxTileset</a></code><a class="header-anchor" href="#readTSX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads TSX file.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xml` | [Xml](/api-docs/clay-native/Xml/) | |  |
| `root` | [TmxTileset](/api-docs/clay-native/format/tmx/TmxTileset/) | `null` | Root Tileset into which read TSX data.  |

| Returns | Description |
|---------|-------------|
| [TmxTileset](/api-docs/clay-native/format/tmx/TmxTileset/) | Resulting TmxTileset. If `root` is null - returns new TmxTileset object, otherwise `root` is returned. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readObjectTypes"><code><span class="field-name">readObjectTypes</span><span class="parenthesis">(</span><span class="arg-name">xml</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxMap/" class="type-link">TmxMap</a> <span class="operator">=</span> <span class="default-value">null</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#readObjectTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads objecttypes.xml file.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `xml` | [Xml](/api-docs/clay-native/Xml/) | |  |
| `root` | [TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) | `null` | Optional root TMX file to propagate those types into. It uses `Tools.propagateObjectTypes` function with default propagation rules.  |

| Returns | Description |
|---------|-------------|
| [Map](/api-docs/clay-native/Map/) | Map with object type templates. Always pass null, if using during resolveTypeTemplate |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readTemplate"><code><span class="field-name">readTemplate</span><span class="parenthesis">(</span><span class="arg-name">xml</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxObjectTemplate/" class="type-link">TmxObjectTemplate</a></code><a class="header-anchor" href="#readTemplate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads TX file.

| Name | Type |
|------|------|
| `xml` | [Xml](/api-docs/clay-native/Xml/) |

| Returns |
|---------|
| [TmxObjectTemplate](/api-docs/clay-native/format/tmx/TmxObjectTemplate/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="customUncompressors"><code><span class="field-name">customUncompressors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#customUncompressors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="customEncoders"><code><span class="field-name">customEncoders</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#customEncoders"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="width"><code><span class="field-name">width</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#width"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="height"><code><span class="field-name">height</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#height"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveGroup"><code><span class="field-name">resolveGroup</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxGroup/" class="type-link">TmxGroup</a></code><a class="header-anchor" href="#resolveGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxGroup](/api-docs/clay-native/format/tmx/TmxGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveStaggerIndex"><code><span class="field-name">resolveStaggerIndex</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveStaggerIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveStaggerAxis"><code><span class="field-name">resolveStaggerAxis</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveStaggerAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveOrientation"><code><span class="field-name">resolveOrientation</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveOrientation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveColor"><code><span class="field-name">resolveColor</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#resolveColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveRenderOrder"><code><span class="field-name">resolveRenderOrder</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveRenderOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveTileset"><code><span class="field-name">resolveTileset</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="operator">,</span> <span class="arg-name">root</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileset/" class="type-link">TmxTileset</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileset/" class="type-link">TmxTileset</a></code><a class="header-anchor" href="#resolveTileset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |
| `root` | [TmxTileset](/api-docs/clay-native/format/tmx/TmxTileset/) |

| Returns |
|---------|
| [TmxTileset](/api-docs/clay-native/format/tmx/TmxTileset/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveWangSet"><code><span class="field-name">resolveWangSet</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxWangSet/" class="type-link">TmxWangSet</a></code><a class="header-anchor" href="#resolveWangSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxWangSet](/api-docs/clay-native/format/tmx/TmxWangSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveWangSetColor"><code><span class="field-name">resolveWangSetColor</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxWangSetColor/" class="type-link">TmxWangSetColor</a></code><a class="header-anchor" href="#resolveWangSetColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxWangSetColor](/api-docs/clay-native/format/tmx/TmxWangSetColor/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveImage"><code><span class="field-name">resolveImage</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxImage/" class="type-link">TmxImage</a></code><a class="header-anchor" href="#resolveImage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxImage](/api-docs/clay-native/format/tmx/TmxImage/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveData"><code><span class="field-name">resolveData</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">isTileData</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxData/" class="type-link">TmxData</a></code><a class="header-anchor" href="#resolveData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) | |
| `isTileData` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [TmxData](/api-docs/clay-native/format/tmx/TmxData/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="uncompressData"><code><span class="field-name">uncompressData</span><span class="parenthesis">(</span><span class="arg-name">i</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Input/" class="type-link">haxe.io.Input</a><span class="operator">,</span> <span class="arg-name">compression</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a></code><a class="header-anchor" href="#uncompressData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i` | [haxe.io.Input](/api-docs/clay-native/haxe/io/Input/) |
| `compression` | Anonymous |

| Returns |
|---------|
| [haxe.io.Bytes](/api-docs/clay-native/haxe/io/Bytes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveTileLayer"><code><span class="field-name">resolveTileLayer</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxTileLayer/" class="type-link">TmxTileLayer</a></code><a class="header-anchor" href="#resolveTileLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxTileLayer](/api-docs/clay-native/format/tmx/TmxTileLayer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveDraworder"><code><span class="field-name">resolveDraworder</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveDraworder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveObjectGroup"><code><span class="field-name">resolveObjectGroup</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxObjectGroup/" class="type-link">TmxObjectGroup</a></code><a class="header-anchor" href="#resolveObjectGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxObjectGroup](/api-docs/clay-native/format/tmx/TmxObjectGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveObject"><code><span class="field-name">resolveObject</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">applyObjectTypeTemplate</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxObject/" class="type-link">TmxObject</a></code><a class="header-anchor" href="#resolveObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `obj` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) | |
| `applyObjectTypeTemplate` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [TmxObject](/api-docs/clay-native/format/tmx/TmxObject/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="readPoints"><code><span class="field-name">readPoints</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/format/tmx/TmxPoint/" class="type-link">TmxPoint</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#readPoints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [Array](/api-docs/clay-native/Array/)<[TmxPoint](/api-docs/clay-native/format/tmx/TmxPoint/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveText"><code><span class="field-name">resolveText</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxText/" class="type-link">TmxText</a></code><a class="header-anchor" href="#resolveText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxText](/api-docs/clay-native/format/tmx/TmxText/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveImageLayer"><code><span class="field-name">resolveImageLayer</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxImageLayer/" class="type-link">TmxImageLayer</a></code><a class="header-anchor" href="#resolveImageLayer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxImageLayer](/api-docs/clay-native/format/tmx/TmxImageLayer/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveProperties"><code><span class="field-name">resolveProperties</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/xml/_Access/Fast/" class="type-link">haxe.xml._Access.Fast</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/format/tmx/TmxProperties/" class="type-link">TmxProperties</a></code><a class="header-anchor" href="#resolveProperties"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [haxe.xml._Access.Fast](/api-docs/clay-native/haxe/xml/_Access/Fast/) |

| Returns |
|---------|
| [TmxProperties](/api-docs/clay-native/format/tmx/TmxProperties/) |

