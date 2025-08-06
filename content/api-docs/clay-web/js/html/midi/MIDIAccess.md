---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MIDIAccess
target: Clay (Web)
permalink: api-docs/clay-web/js/html/midi/MIDIAccess/
---

# MIDIAccess

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">js.html.EventTarget</a> → <strong>js.html.midi.MIDIAccess</strong> (extern class)</div>

The `MIDIAccess` interface of the Web MIDI API provides methods for listing MIDI input and output devices, and obtaining access to those devices.

Documentation [MIDIAccess](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/MIDIAccess></div>


## Instance Members

<div class="signature field-var has-description" id="inputs"><code><span class="field-name">inputs</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/midi/MIDIInputMap/" class="type-link">MIDIInputMap</a></code><a class="header-anchor" href="#inputs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an instance of `MIDIInputMap` which provides access to any available MIDI input ports.

<hr class="field-separator" />

<div class="signature field-var has-description" id="outputs"><code><span class="field-name">outputs</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/midi/MIDIOutputMap/" class="type-link">MIDIOutputMap</a></code><a class="header-anchor" href="#outputs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an instance of `MIDIOutputMap` which provides access to any available MIDI output ports.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onstatechange"><code><span class="field-name">onstatechange</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onstatechange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called whenever a new MIDI port is added or an existing port changes state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="sysexEnabled"><code><span class="field-name">sysexEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sysexEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A boolean attribute indicating whether system exclusive support is enabled on the current MIDIAccess instance.

