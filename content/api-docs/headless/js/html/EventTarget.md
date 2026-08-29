---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EventTarget
target: Headless
permalink: api-docs/headless/js/html/EventTarget/
---

# EventTarget

<div class="type-hierarchy"><strong>js.html.EventTarget</strong> (extern class) → <a href="/api-docs/headless/js/html/AbortSignal/">AbortSignal</a>, <a href="/api-docs/headless/js/html/Animation/">Animation</a>, <a href="/api-docs/headless/js/html/AudioTrackList/">AudioTrackList</a>, <a href="/api-docs/headless/js/html/Clipboard/">Clipboard</a>, <a href="/api-docs/headless/js/html/FetchObserver/">FetchObserver</a>, <a href="/api-docs/headless/js/html/FontFaceSet/">FontFaceSet</a>, <a href="/api-docs/headless/js/html/MediaDevices/">MediaDevices</a>, <a href="/api-docs/headless/js/html/MediaQueryList/">MediaQueryList</a>, <a href="/api-docs/headless/js/html/MediaStream/">MediaStream</a>, <a href="/api-docs/headless/js/html/MediaStreamTrack/">MediaStreamTrack</a>, <a href="/api-docs/headless/js/html/Node/">Node</a>, <a href="/api-docs/headless/js/html/Notification/">Notification</a>, <a href="/api-docs/headless/js/html/Performance/">Performance</a>, <a href="/api-docs/headless/js/html/PermissionStatus/">PermissionStatus</a>, <a href="/api-docs/headless/js/html/Screen/">Screen</a>, <a href="/api-docs/headless/js/html/ScreenOrientation/">ScreenOrientation</a>, <a href="/api-docs/headless/js/html/ServiceWorker/">ServiceWorker</a>, <a href="/api-docs/headless/js/html/ServiceWorkerContainer/">ServiceWorkerContainer</a>, <a href="/api-docs/headless/js/html/ServiceWorkerRegistration/">ServiceWorkerRegistration</a>, <a href="/api-docs/headless/js/html/SpeechSynthesis/">SpeechSynthesis</a>, <a href="/api-docs/headless/js/html/SpeechSynthesisUtterance/">SpeechSynthesisUtterance</a>, <a href="/api-docs/headless/js/html/TextTrack/">TextTrack</a>, <a href="/api-docs/headless/js/html/TextTrackCue/">TextTrackCue</a>, <a href="/api-docs/headless/js/html/TextTrackList/">TextTrackList</a>, <a href="/api-docs/headless/js/html/VideoTrackList/">VideoTrackList</a>, <a href="/api-docs/headless/js/html/Window/">Window</a>, <a href="/api-docs/headless/js/html/WorkerGlobalScope/">WorkerGlobalScope</a>, <a href="/api-docs/headless/js/html/XMLHttpRequestEventTarget/">XMLHttpRequestEventTarget</a>, <a href="/api-docs/headless/js/html/eme/MediaKeySession/">js.html.eme.MediaKeySession</a>, <a href="/api-docs/headless/js/html/idb/Database/">js.html.idb.Database</a>, <a href="/api-docs/headless/js/html/idb/Request/">js.html.idb.Request</a>, <a href="/api-docs/headless/js/html/idb/Transaction/">js.html.idb.Transaction</a>, <a href="/api-docs/headless/js/html/midi/MIDIAccess/">js.html.midi.MIDIAccess</a></div>

`EventTarget` is an interface implemented by objects that can receive events and may have listeners for them.

Documentation [EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget></div>


## Instance Members

<div class="signature field-method has-description" id="addEventListener"><code><span class="field-name">addEventListener</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/AddEventListenerOptions/" class="type-link">AddEventListenerOptions</a><span class="operator">,</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">wantsUntrusted</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addEventListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Register an event handler of a specific event type on the `EventTarget`.

| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/headless/String/) | |
| `listener` | [haxe.Function](/api-docs/headless/haxe/Function/) | |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[AddEventListenerOptions](/api-docs/headless/js/html/AddEventListenerOptions/), [Bool](/api-docs/headless/Bool/)> | *(optional)* |
| `wantsUntrusted` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeEventListener"><code><span class="field-name">removeEventListener</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">listener</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/html/EventListenerOptions/" class="type-link">EventListenerOptions</a><span class="operator">,</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeEventListener"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes an event listener from the `EventTarget`.

| Name | Type | Default |
|------|------|---------|
| `type` | [String](/api-docs/headless/String/) | |
| `listener` | [haxe.Function](/api-docs/headless/haxe/Function/) | |
| `options` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[EventListenerOptions](/api-docs/headless/js/html/EventListenerOptions/), [Bool](/api-docs/headless/Bool/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dispatchEvent"><code><span class="field-name">dispatchEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/headless/js/html/Event/" class="type-link">Event</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dispatchEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatch an event to this `EventTarget`.

| Name | Type |
|------|------|
| `event` | [Event](/api-docs/headless/js/html/Event/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



