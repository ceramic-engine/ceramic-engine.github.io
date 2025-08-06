---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Events
target: Clay (Web)
permalink: api-docs/clay-web/clay/Events/
---

# Events

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Events.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Events</strong> (Class) → <a href="/api-docs/clay-web/backend/ClayEvents/">backend.ClayEvents</a></div>

## Instance Members

<div class="signature field-method no-description" id="ready"><code><span class="field-name">ready</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="render"><code><span class="field-name">render</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#render"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="freeze"><code><span class="field-name">freeze</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#freeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="unfreeze"><code><span class="field-name">unfreeze</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unfreeze"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyDown"><code><span class="field-name">keyDown</span><span class="parenthesis">(</span><span class="arg-name">keycode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">scancode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/ModState/" class="type-link">ModState</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#keyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keycode` | [Int](/api-docs/clay-web/Int/) |
| `scancode` | [Int](/api-docs/clay-web/Int/) |
| `repeat` | [Bool](/api-docs/clay-web/Bool/) |
| `mod` | [ModState](/api-docs/clay-web/clay/ModState/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="keyUp"><code><span class="field-name">keyUp</span><span class="parenthesis">(</span><span class="arg-name">keycode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">scancode</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/ModState/" class="type-link">ModState</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#keyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keycode` | [Int](/api-docs/clay-web/Int/) |
| `scancode` | [Int](/api-docs/clay-web/Int/) |
| `repeat` | [Bool](/api-docs/clay-web/Bool/) |
| `mod` | [ModState](/api-docs/clay-web/clay/ModState/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="text"><code><span class="field-name">text</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/TextEventType/" class="type-link">TextEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `start` | [Int](/api-docs/clay-web/Int/) |
| `length` | [Int](/api-docs/clay-web/Int/) |
| `type` | [TextEventType](/api-docs/clay-web/clay/TextEventType/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseMove"><code><span class="field-name">mouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">xrel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yrel</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `xrel` | [Int](/api-docs/clay-web/Int/) |
| `yrel` | [Int](/api-docs/clay-web/Int/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseDown"><code><span class="field-name">mouseDown</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `button` | [Int](/api-docs/clay-web/Int/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseUp"><code><span class="field-name">mouseUp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |
| `button` | [Int](/api-docs/clay-web/Int/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="mouseWheel"><code><span class="field-name">mouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#mouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="touchDown"><code><span class="field-name">touchDown</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#touchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |
| `touchId` | [Int](/api-docs/clay-web/Int/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="touchUp"><code><span class="field-name">touchUp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#touchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |
| `touchId` | [Int](/api-docs/clay-web/Int/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="touchMove"><code><span class="field-name">touchMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#touchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-web/Float/) |
| `y` | [Float](/api-docs/clay-web/Float/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |
| `touchId` | [Int](/api-docs/clay-web/Int/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadAxis"><code><span class="field-name">gamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-web/Int/) |
| `axis` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Float](/api-docs/clay-web/Float/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadDown"><code><span class="field-name">gamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-web/Int/) |
| `button` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Float](/api-docs/clay-web/Float/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadUp"><code><span class="field-name">gamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-web/Int/) |
| `button` | [Int](/api-docs/clay-web/Int/) |
| `value` | [Float](/api-docs/clay-web/Float/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadGyro"><code><span class="field-name">gamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-web/Int/) |
| `dx` | [Float](/api-docs/clay-web/Float/) |
| `dy` | [Float](/api-docs/clay-web/Float/) |
| `dz` | [Float](/api-docs/clay-web/Float/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="gamepadDevice"><code><span class="field-name">gamepadDevice</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/GamepadDeviceEventType/" class="type-link">GamepadDeviceEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#gamepadDevice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-web/Int/) |
| `name` | [String](/api-docs/clay-web/String/) |
| `type` | [GamepadDeviceEventType](/api-docs/clay-web/clay/GamepadDeviceEventType/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="windowEvent"><code><span class="field-name">windowEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/WindowEventType/" class="type-link">WindowEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#windowEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [WindowEventType](/api-docs/clay-web/clay/WindowEventType/) |
| `timestamp` | [Float](/api-docs/clay-web/Float/) |
| `windowId` | [Int](/api-docs/clay-web/Int/) |
| `x` | [Int](/api-docs/clay-web/Int/) |
| `y` | [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="appEvent"><code><span class="field-name">appEvent</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/AppEventType/" class="type-link">AppEventType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#appEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `type` | [AppEventType](/api-docs/clay-web/clay/AppEventType/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="audioEvent"><code><span class="field-name">audioEvent</span><span class="parenthesis">(</span><span class="arg-name">event</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioEvent/" class="type-link">clay.audio.AudioEvent</a><span class="operator">,</span> <span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/clay-web/clay/audio/AudioHandle/" class="type-link">clay.audio.AudioHandle</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#audioEvent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `event` | [clay.audio.AudioEvent](/api-docs/clay-web/clay/audio/AudioEvent/) |
| `handle` | [clay.audio.AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) |

