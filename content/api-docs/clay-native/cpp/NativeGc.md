---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NativeGc
target: Clay (Native)
permalink: api-docs/clay-native/cpp/NativeGc/
---

# NativeGc

<div class="type-hierarchy"><strong>cpp.NativeGc</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="memInfo"><code><span class="field-name">memInfo</span><span class="parenthesis">(</span><span class="arg-name">inWhatInfo</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#memInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inWhatInfo` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="allocateExtended"><code><span class="field-name">allocateExtended</span><span class="parenthesis">(</span><span class="arg-name">cls</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">allocateExtended.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">allocateExtended.T</span></code><a class="header-anchor" href="#allocateExtended"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cls` | [Class](/api-docs/clay-native/Class/)<allocateExtended.T> |
| `size` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| allocateExtended.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addFinalizable"><code><span class="field-name">addFinalizable</span><span class="parenthesis">(</span><span class="arg-name">instance</span><span class="operator">:</span> <span class="type-name">AnonStruct</span><span class="operator">,</span> <span class="arg-name">inPin</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addFinalizable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `instance` | AnonStruct |
| `inPin` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="allocGcBytesRaw"><code><span class="field-name">allocGcBytesRaw</span><span class="parenthesis">(</span><span class="arg-name">inBytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">isContainer</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/RawPointer/" class="type-link">RawPointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allocGcBytesRaw"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inBytes` | [Int](/api-docs/clay-native/Int/) |
| `isContainer` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [RawPointer](/api-docs/clay-native/cpp/RawPointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="allocGcBytes"><code><span class="field-name">allocGcBytes</span><span class="parenthesis">(</span><span class="arg-name">inBytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Void/" class="type-link">Void</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#allocGcBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inBytes` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Pointer](/api-docs/clay-native/cpp/Pointer/)<[Void](/api-docs/clay-native/cpp/Void/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="enable"><code><span class="field-name">enable</span><span class="parenthesis">(</span><span class="arg-name">inEnable</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inEnable` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="arg-name">major</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `major` | [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="compact"><code><span class="field-name">compact</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compact"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="nativeTrace"><code><span class="field-name">nativeTrace</span><span class="parenthesis">(</span><span class="arg-name">sought</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">printInstances</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nativeTrace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sought` | [Class](/api-docs/clay-native/Class/)<[Dynamic](/api-docs/clay-native/Dynamic/)> |
| `printInstances` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="doNotKill"><code><span class="field-name">doNotKill</span><span class="parenthesis">(</span><span class="arg-name">inObject</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#doNotKill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inObject` | [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getNextZombie"><code><span class="field-name">getNextZombie</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getNextZombie"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="safePoint"><code><span class="field-name">safePoint</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#safePoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="enterGCFreeZone"><code><span class="field-name">enterGCFreeZone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#enterGCFreeZone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="exitGCFreeZone"><code><span class="field-name">exitGCFreeZone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exitGCFreeZone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="setMinimumFreeSpace"><code><span class="field-name">setMinimumFreeSpace</span><span class="parenthesis">(</span><span class="arg-name">inBytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMinimumFreeSpace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inBytes` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setTargetFreeSpacePercentage"><code><span class="field-name">setTargetFreeSpacePercentage</span><span class="parenthesis">(</span><span class="arg-name">inPercentage</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTargetFreeSpacePercentage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inPercentage` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="setMinimumWorkingMemory"><code><span class="field-name">setMinimumWorkingMemory</span><span class="parenthesis">(</span><span class="arg-name">inBytes</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMinimumWorkingMemory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inBytes` | [Int](/api-docs/clay-native/Int/) |

