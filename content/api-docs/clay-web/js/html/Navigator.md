---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Navigator
target: Clay (Web)
permalink: api-docs/clay-web/js/html/Navigator/
---

# Navigator

<div class="type-hierarchy"><strong>js.html.Navigator</strong> (extern class)</div>

The `Navigator` interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

Documentation [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Navigator$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Navigator></div>


## Instance Members

<div class="signature field-var has-description" id="permissions"><code><span class="field-name">permissions</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Permissions/" class="type-link">Permissions</a></code><a class="header-anchor" href="#permissions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Permissions` object that can be used to query and update permission status of APIs covered by the Permissions API.

<hr class="field-separator" />

<div class="signature field-var no-description" id="mimeTypes"><code><span class="field-name">mimeTypes</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MimeTypeArray/" class="type-link">MimeTypeArray</a></code><a class="header-anchor" href="#mimeTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="plugins"><code><span class="field-name">plugins</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/PluginArray/" class="type-link">PluginArray</a></code><a class="header-anchor" href="#plugins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="doNotTrack"><code><span class="field-name">doNotTrack</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#doNotTrack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reports the value of the user's do-not-track preference. When this value is "yes", your web site or application should not track the user.

<hr class="field-separator" />

<div class="signature field-var no-description" id="maxTouchPoints"><code><span class="field-name">maxTouchPoints</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxTouchPoints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="oscpu"><code><span class="field-name">oscpu</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#oscpu"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string that represents the current operating system.

<hr class="field-separator" />

<div class="signature field-var has-description" id="vendor"><code><span class="field-name">vendor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#vendor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the vendor name of the current browser (e.g., "Netscape6").

<hr class="field-separator" />

<div class="signature field-var has-description" id="vendorSub"><code><span class="field-name">vendorSub</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#vendorSub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the vendor version number (e.g. "6.1").

<hr class="field-separator" />

<div class="signature field-var has-description" id="productSub"><code><span class="field-name">productSub</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#productSub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the build number of the current browser (e.g., "20060909").

<hr class="field-separator" />

<div class="signature field-var has-description" id="cookieEnabled"><code><span class="field-name">cookieEnabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#cookieEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns false if setting a cookie will be ignored and true otherwise.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buildID"><code><span class="field-name">buildID</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#buildID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the build identifier of the browser (e.g., "2006090803").

<hr class="field-separator" />

<div class="signature field-var has-description" id="mediaDevices"><code><span class="field-name">mediaDevices</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaDevices/" class="type-link">MediaDevices</a></code><a class="header-anchor" href="#mediaDevices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a reference to a `MediaDevices` object which can then be used to get information about available media devices (`MediaDevices.enumerateDevices()`), find out what constrainable properties are supported for media on the user's computer and user agent (`MediaDevices.getSupportedConstraints()`), and to request access to media using `MediaDevices.getUserMedia()`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="serviceWorker"><code><span class="field-name">serviceWorker</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ServiceWorkerContainer/" class="type-link">ServiceWorkerContainer</a></code><a class="header-anchor" href="#serviceWorker"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `ServiceWorkerContainer` object, which provides access to registration, removal, upgrade, and communication with the `ServiceWorker` objects for the associated document.

<hr class="field-separator" />

<div class="signature field-var no-description" id="clipboard"><code><span class="field-name">clipboard</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Clipboard/" class="type-link">Clipboard</a></code><a class="header-anchor" href="#clipboard"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hardwareConcurrency"><code><span class="field-name">hardwareConcurrency</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hardwareConcurrency"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="geolocation"><code><span class="field-name">geolocation</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Geolocation/" class="type-link">Geolocation</a></code><a class="header-anchor" href="#geolocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a `Geolocation` object allowing accessing the location of the device.

<hr class="field-separator" />

<div class="signature field-var no-description" id="appCodeName"><code><span class="field-name">appCodeName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#appCodeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="appName"><code><span class="field-name">appName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#appName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="appVersion"><code><span class="field-name">appVersion</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#appVersion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="platform"><code><span class="field-name">platform</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#platform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="userAgent"><code><span class="field-name">userAgent</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#userAgent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="product"><code><span class="field-name">product</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#product"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="language"><code><span class="field-name">language</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#language"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="languages"><code><span class="field-name">languages</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#languages"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="onLine"><code><span class="field-name">onLine</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#onLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="storage"><code><span class="field-name">storage</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/StorageManager/" class="type-link">StorageManager</a></code><a class="header-anchor" href="#storage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="vibrate"><code><span class="field-name">vibrate</span><span class="parenthesis">(</span><span class="arg-name">pattern</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#vibrate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pattern` | [Array](/api-docs/clay-web/Array/)<[Int](/api-docs/clay-web/Int/)> |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="javaEnabled"><code><span class="field-name">javaEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#javaEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getGamepads"><code><span class="field-name">getGamepads</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/Gamepad/" class="type-link">Gamepad</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getGamepads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Gamepad](/api-docs/clay-web/js/html/Gamepad/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="requestMIDIAccess"><code><span class="field-name">requestMIDIAccess</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/midi/MIDIOptions/" class="type-link">js.html.midi.MIDIOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/midi/MIDIAccess/" class="type-link">js.html.midi.MIDIAccess</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#requestMIDIAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `options` | [Null](/api-docs/clay-web/Null/)<[js.html.midi.MIDIOptions](/api-docs/clay-web/js/html/midi/MIDIOptions/)> | *(optional)* |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[js.html.midi.MIDIAccess](/api-docs/clay-web/js/html/midi/MIDIAccess/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sendBeacon"><code><span class="field-name">sendBeacon</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Blob/" class="type-link">Blob</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#sendBeacon"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `url` | [String](/api-docs/clay-web/String/) | |
| `data` | [Blob](/api-docs/clay-web/js/html/Blob/) | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="requestMediaKeySystemAccess"><code><span class="field-name">requestMediaKeySystemAccess</span><span class="parenthesis">(</span><span class="arg-name">keySystem</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">supportedConfigurations</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/eme/MediaKeySystemConfiguration/" class="type-link">js.html.eme.MediaKeySystemConfiguration</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/lib/Promise/" class="type-link">js.lib.Promise</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/js/html/eme/MediaKeySystemAccess/" class="type-link">js.html.eme.MediaKeySystemAccess</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#requestMediaKeySystemAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keySystem` | [String](/api-docs/clay-web/String/) |
| `supportedConfigurations` | [Array](/api-docs/clay-web/Array/)<[js.html.eme.MediaKeySystemConfiguration](/api-docs/clay-web/js/html/eme/MediaKeySystemConfiguration/)> |

| Returns |
|---------|
| [js.lib.Promise](/api-docs/clay-web/js/lib/Promise/)<[js.html.eme.MediaKeySystemAccess](/api-docs/clay-web/js/html/eme/MediaKeySystemAccess/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="taintEnabled"><code><span class="field-name">taintEnabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#taintEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

