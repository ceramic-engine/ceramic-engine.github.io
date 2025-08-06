---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SpeechSynthesis
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SpeechSynthesis/
---

# SpeechSynthesis

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.SpeechSynthesis</strong> (extern class)</div>

The `SpeechSynthesis` interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.

Documentation [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis></div>


## Instance Members

<div class="signature field-var has-description" id="pending"><code><span class="field-name">pending</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that returns `true` if the utterance queue contains as-yet-unspoken utterances.

<hr class="field-separator" />

<div class="signature field-var has-description" id="speaking"><code><span class="field-name">speaking</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#speaking"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that returns `true` if an utterance is currently in the process of being spoken — even if `SpeechSynthesis` is in a paused state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="paused"><code><span class="field-name">paused</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#paused"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A `Boolean` that returns `true` if the `SpeechSynthesis` object is in a paused state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onvoiceschanged"><code><span class="field-name">onvoiceschanged</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onvoiceschanged"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the list of `SpeechSynthesisVoice` objects that would be returned by the `SpeechSynthesis.getVoices()` method has changed.

<hr class="field-separator" />

<div class="signature field-method has-description" id="speak"><code><span class="field-name">speak</span><span class="parenthesis">(</span><span class="arg-name">utterance</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SpeechSynthesisUtterance/" class="type-link">SpeechSynthesisUtterance</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#speak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an `SpeechSynthesisUtterance` to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.

| Name | Type |
|------|------|
| `utterance` | [SpeechSynthesisUtterance](/api-docs/clay-web/js/html/SpeechSynthesisUtterance/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cancel"><code><span class="field-name">cancel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cancel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all utterances from the utterance queue.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pause"><code><span class="field-name">pause</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Puts the `SpeechSynthesis` object into a paused state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Puts the `SpeechSynthesis` object into a non-paused state: resumes it if it was already paused.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVoices"><code><span class="field-name">getVoices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/SpeechSynthesisVoice/" class="type-link">SpeechSynthesisVoice</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVoices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a list of `SpeechSynthesisVoice` objects representing all the available voices on the current device.
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[SpeechSynthesisVoice](/api-docs/clay-web/js/html/SpeechSynthesisVoice/)> |

