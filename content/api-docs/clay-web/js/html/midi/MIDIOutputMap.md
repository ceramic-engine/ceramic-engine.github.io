---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MIDIOutputMap
target: Clay (Web)
permalink: api-docs/clay-web/js/html/midi/MIDIOutputMap/
---

# MIDIOutputMap

<div class="type-hierarchy"><strong>js.html.midi.MIDIOutputMap</strong> (extern class)</div>

The `MIDIOutputMap` read-only interface of the Web MIDI API provides a `Map`-like interface to the currently available MIDI output ports. Although it works like a map, because it is read-only, it does not contain `clear()`, `delete()`, or `set()` functions.

Documentation [MIDIOutputMap](https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutputMap) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutputMap$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MIDIOutputMap></div>


## Instance Members

<div class="signature field-var no-description" id="size"><code><span class="field-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#size"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="entries"><code><span class="field-name">entries</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#entries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="keys"><code><span class="field-name">keys</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="values"><code><span class="field-name">values</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#values"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="forEach"><code><span class="field-name">forEach</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">thisArg</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#forEach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `callback` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `thisArg` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="has"><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

