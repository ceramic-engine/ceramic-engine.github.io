---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SpeechSynthesisVoice
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SpeechSynthesisVoice/
---

# SpeechSynthesisVoice

<div class="type-hierarchy"><strong>js.html.SpeechSynthesisVoice</strong> (extern class)</div>

The `SpeechSynthesisVoice` interface of the Web Speech API represents a voice that the system supports. Every `SpeechSynthesisVoice` has its own relative speech service including information about language, name and URI.

Documentation [SpeechSynthesisVoice](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice></div>


## Instance Members

<div class="signature field-var has-description" id="voiceURI"><code><span class="field-name">voiceURI</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#voiceURI"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the type of URI and location of the speech synthesis service for this voice.

<hr class="field-separator" />

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a human-readable name that represents the voice.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lang"><code><span class="field-name">lang</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lang"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a BCP 47 language tag indicating the language of the voice.

<hr class="field-separator" />

<div class="signature field-var has-description" id="localService"><code><span class="field-name">localService</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#localService"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` indicating whether the voice is supplied by a local speech synthesizer service (`true`), or a remote speech synthesizer service (`false`.)

<hr class="field-separator" />

<div class="signature field-var has-description" id="default_"><code><span class="field-name">default_</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#default_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` indicating whether the voice is the default voice for the current app language (`true`), or not (`false`.)

