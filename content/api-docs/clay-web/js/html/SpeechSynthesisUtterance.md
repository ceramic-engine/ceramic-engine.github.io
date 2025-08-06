---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SpeechSynthesisUtterance
target: Clay (Web)
permalink: api-docs/clay-web/js/html/SpeechSynthesisUtterance/
---

# SpeechSynthesisUtterance

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <strong>js.html.SpeechSynthesisUtterance</strong> (extern class)</div>

The `SpeechSynthesisUtterance` interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

Documentation [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance></div>


## Instance Members

<div class="signature field-var has-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the text that will be synthesised when the utterance is spoken.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lang"><code><span class="field-name">lang</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#lang"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the language of the utterance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="voice"><code><span class="field-name">voice</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SpeechSynthesisVoice/" class="type-link">SpeechSynthesisVoice</a></code><a class="header-anchor" href="#voice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the voice that will be used to speak the utterance.

<hr class="field-separator" />

<div class="signature field-var has-description" id="volume"><code><span class="field-name">volume</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#volume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the volume that the utterance will be spoken at.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rate"><code><span class="field-name">rate</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the speed at which the utterance will be spoken at.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pitch"><code><span class="field-name">pitch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pitch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets and sets the pitch at which the utterance will be spoken at.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onstart"><code><span class="field-name">onstart</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onstart"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the utterance has begun to be spoken.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onend"><code><span class="field-name">onend</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the utterance has finished being spoken.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onerror"><code><span class="field-name">onerror</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onerror"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when an error occurs that prevents the utterance from being succesfully spoken.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onpause"><code><span class="field-name">onpause</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onpause"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the utterance is paused part way through.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onresume"><code><span class="field-name">onresume</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onresume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when a paused utterance is resumed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onmark"><code><span class="field-name">onmark</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onmark"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the spoken utterance reaches a named SSML "mark" tag.

<hr class="field-separator" />

<div class="signature field-var has-description" id="onboundary"><code><span class="field-name">onboundary</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/Function/" class="type-link">haxe.Function</a></code><a class="header-anchor" href="#onboundary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fired when the spoken utterance reaches a word or sentence boundary.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

