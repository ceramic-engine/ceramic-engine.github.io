---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: VTTCue
target: Headless
permalink: api-docs/headless/js/html/VTTCue/
---

# VTTCue

<div class="type-hierarchy"><a href="/api-docs/headless/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/headless/js/html/TextTrackCue/">TextTrackCue</a> → <strong>js.html.VTTCue</strong> (extern class)</div>

VTTCues represent a cue in a text track.

Documentation [VTTCue](https://developer.mozilla.org/en-US/docs/Web/API/VTTCue) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/VTTCue$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/VTTCue></div>


## Instance Members

<div class="signature field-var no-description" id="region"><code><span class="field-name">region</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/VTTRegion/" class="type-link">VTTRegion</a></code><a class="header-anchor" href="#region"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vertical"><code><span class="field-name">vertical</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/DirectionSetting/" class="type-link">DirectionSetting</a></code><a class="header-anchor" href="#vertical"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="snapToLines"><code><span class="field-name">snapToLines</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#snapToLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="line"><code><span class="field-name">line</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <a href="/api-docs/headless/js/html/AutoKeyword/" class="type-link">AutoKeyword</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#line"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="lineAlign"><code><span class="field-name">lineAlign</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/LineAlignSetting/" class="type-link">LineAlignSetting</a></code><a class="header-anchor" href="#lineAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="position"><code><span class="field-name">position</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <a href="/api-docs/headless/js/html/AutoKeyword/" class="type-link">AutoKeyword</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#position"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="positionAlign"><code><span class="field-name">positionAlign</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/PositionAlignSetting/" class="type-link">PositionAlignSetting</a></code><a class="header-anchor" href="#positionAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="align"><code><span class="field-name">align</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/AlignSetting/" class="type-link">AlignSetting</a></code><a class="header-anchor" href="#align"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="getCueAsHTML"><code><span class="field-name">getCueAsHTML</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/DocumentFragment/" class="type-link">DocumentFragment</a></code><a class="header-anchor" href="#getCueAsHTML"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [DocumentFragment](/api-docs/headless/js/html/DocumentFragment/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">startTime</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">endTime</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `startTime` | [Float](/api-docs/headless/Float/) |
| `endTime` | [Float](/api-docs/headless/Float/) |
| `text` | [String](/api-docs/headless/String/) |

