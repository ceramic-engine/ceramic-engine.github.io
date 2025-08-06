---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Input
target: Clay (Native)
permalink: api-docs/clay-native/clay/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/clay/blob/master/src/clay/Input.hx">View source</a></div>

<div class="type-hierarchy"><strong>clay.Input</strong> (Class)</div>

## Instance Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">Clay</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clay app

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="shutdown"><code><span class="field-name">shutdown</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shutdown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitKeyDown"><code><span class="field-name">emitKeyDown</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/KeyCode/" class="type-link">KeyCode</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ScanCode/" class="type-link">ScanCode</a><span class="operator">,</span> <span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ModState/" class="type-link">ModState</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyCode` | [KeyCode](/api-docs/clay-native/clay/KeyCode/) |
| `scanCode` | [ScanCode](/api-docs/clay-native/clay/ScanCode/) |
| `repeat` | [Bool](/api-docs/clay-native/Bool/) |
| `mod` | [ModState](/api-docs/clay-native/clay/ModState/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitKeyUp"><code><span class="field-name">emitKeyUp</span><span class="parenthesis">(</span><span class="arg-name">keyCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/KeyCode/" class="type-link">KeyCode</a><span class="operator">,</span> <span class="arg-name">scanCode</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ScanCode/" class="type-link">ScanCode</a><span class="operator">,</span> <span class="arg-name">repeat</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mod</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ModState/" class="type-link">ModState</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitKeyUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `keyCode` | [KeyCode](/api-docs/clay-native/clay/KeyCode/) |
| `scanCode` | [ScanCode](/api-docs/clay-native/clay/ScanCode/) |
| `repeat` | [Bool](/api-docs/clay-native/Bool/) |
| `mod` | [ModState](/api-docs/clay-native/clay/ModState/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitText"><code><span class="field-name">emitText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/TextEventType/" class="type-link">TextEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-native/String/) |
| `start` | [Int](/api-docs/clay-native/Int/) |
| `length` | [Int](/api-docs/clay-native/Int/) |
| `type` | [TextEventType](/api-docs/clay-native/clay/TextEventType/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitMouseMove"><code><span class="field-name">emitMouseMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">xrel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">yrel</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |
| `xrel` | [Int](/api-docs/clay-native/Int/) |
| `yrel` | [Int](/api-docs/clay-native/Int/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitMouseDown"><code><span class="field-name">emitMouseDown</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |
| `button` | [Int](/api-docs/clay-native/Int/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitMouseUp"><code><span class="field-name">emitMouseUp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/clay-native/Int/) |
| `y` | [Int](/api-docs/clay-native/Int/) |
| `button` | [Int](/api-docs/clay-native/Int/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitMouseWheel"><code><span class="field-name">emitMouseWheel</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">windowId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMouseWheel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |
| `windowId` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitTouchDown"><code><span class="field-name">emitTouchDown</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `dx` | [Float](/api-docs/clay-native/Float/) |
| `dy` | [Float](/api-docs/clay-native/Float/) |
| `touchId` | [Int](/api-docs/clay-native/Int/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitTouchUp"><code><span class="field-name">emitTouchUp</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `dx` | [Float](/api-docs/clay-native/Float/) |
| `dy` | [Float](/api-docs/clay-native/Float/) |
| `touchId` | [Int](/api-docs/clay-native/Int/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitTouchMove"><code><span class="field-name">emitTouchMove</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">touchId</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTouchMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Float](/api-docs/clay-native/Float/) |
| `y` | [Float](/api-docs/clay-native/Float/) |
| `dx` | [Float](/api-docs/clay-native/Float/) |
| `dy` | [Float](/api-docs/clay-native/Float/) |
| `touchId` | [Int](/api-docs/clay-native/Int/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitGamepadAxis"><code><span class="field-name">emitGamepadAxis</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">axis</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadAxis"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-native/Int/) |
| `axis` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Float](/api-docs/clay-native/Float/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitGamepadDown"><code><span class="field-name">emitGamepadDown</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-native/Int/) |
| `button` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Float](/api-docs/clay-native/Float/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitGamepadUp"><code><span class="field-name">emitGamepadUp</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">button</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-native/Int/) |
| `button` | [Int](/api-docs/clay-native/Int/) |
| `value` | [Float](/api-docs/clay-native/Float/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitGamepadGyro"><code><span class="field-name">emitGamepadGyro</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">dx</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">dz</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadGyro"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-native/Int/) |
| `dx` | [Float](/api-docs/clay-native/Float/) |
| `dy` | [Float](/api-docs/clay-native/Float/) |
| `dz` | [Float](/api-docs/clay-native/Float/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="emitGamepadDevice"><code><span class="field-name">emitGamepadDevice</span><span class="parenthesis">(</span><span class="arg-name">gamepad</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/GamepadDeviceEventType/" class="type-link">GamepadDeviceEventType</a><span class="operator">,</span> <span class="arg-name">timestamp</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitGamepadDevice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `gamepad` | [Int](/api-docs/clay-native/Int/) |
| `name` | [String](/api-docs/clay-native/String/) |
| `type` | [GamepadDeviceEventType](/api-docs/clay-native/clay/GamepadDeviceEventType/) |
| `timestamp` | [Float](/api-docs/clay-native/Float/) |

## Private Members

<div class="signature field-var no-description" id="modState"><code><span class="field-name">modState</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/ModState/" class="type-link">ModState</a></code><a class="header-anchor" href="#modState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-native/clay/Clay/" class="type-link">Clay</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `app` | [Clay](/api-docs/clay-native/clay/Clay/) |

