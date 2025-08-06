---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Systems
target: Unity
permalink: api-docs/unity/ceramic/Systems/
---

# Systems

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Systems.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.Systems</strong> (Class)</div>

Manager for all System instances in the application.

Systems manages the lifecycle and update order of all systems in Ceramic.
It ensures systems are updated in the correct order during both early and
late update phases, handling automatic sorting and safe iteration.

Features:
- Automatic sorting by update order
- Safe iteration (handles systems added/removed during updates)
- Two-phase update system (early and late updates)
- System lookup by name
- Automatic immediate callback flushing between systems

This class is created and managed by the App instance and typically
doesn't need to be interacted with directly. Access it via `app.systems`.

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/System/">System</a>, <a href="/api-docs/unity/ceramic/App/">App</a></div>


## Instance Members

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a system by its name.


| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | The name of the system to retrieve  |

| Returns | Description |
|---------|-------------|
| [System](/api-docs/unity/ceramic/System/) | The system instance, or null if not found |

## Private Members

<div class="signature field-var has-description" id="earlyUpdateOrderDirty"><code><span class="field-name">earlyUpdateOrderDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#earlyUpdateOrderDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, `earlyUpdateOrdered` list needs to be sorted

<hr class="field-separator" />

<div class="signature field-var has-description" id="lateUpdateOrderDirty"><code><span class="field-name">lateUpdateOrderDirty</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#lateUpdateOrderDirty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If `true`, `lateUpdateOrdered` list needs to be sorted

<hr class="field-separator" />

<div class="signature field-var has-description" id="earlyUpdateOrdered"><code><span class="field-name">earlyUpdateOrdered</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#earlyUpdateOrdered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of systems, ordered ascending according to their `earlyUpdateOrder` property

<hr class="field-separator" />

<div class="signature field-var has-description" id="lateUpdateOrdered"><code><span class="field-name">lateUpdateOrdered</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ReadOnlyArray/" class="type-link">ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lateUpdateOrdered"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of systems, ordered ascending according to their `lateUpdateOrder` property

<hr class="field-separator" />

<div class="signature field-method no-description" id="sortSystemsByEarlyUpdateOrder"><code><span class="field-name">sortSystemsByEarlyUpdateOrder</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sortSystemsByEarlyUpdateOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [System](/api-docs/unity/ceramic/System/) |
| `b` | [System](/api-docs/unity/ceramic/System/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="sortSystemsByLateUpdateOrder"><code><span class="field-name">sortSystemsByLateUpdateOrder</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#sortSystemsByLateUpdateOrder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `a` | [System](/api-docs/unity/ceramic/System/) |
| `b` | [System](/api-docs/unity/ceramic/System/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="addSystem"><code><span class="field-name">addSystem</span><span class="parenthesis">(</span><span class="arg-name">system</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addSystem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `system` | [System](/api-docs/unity/ceramic/System/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeSystem"><code><span class="field-name">removeSystem</span><span class="parenthesis">(</span><span class="arg-name">system</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/System/" class="type-link">System</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeSystem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `system` | [System](/api-docs/unity/ceramic/System/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="earlyUpdate"><code><span class="field-name">earlyUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#earlyUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="lateUpdate"><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.App |

