---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: MonoBehaviour
target: Unity
permalink: api-docs/unity/unityengine/MonoBehaviour/
---

# MonoBehaviour

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/MonoBehaviour.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/unityengine/Object/">Object</a> → <a href="/api-docs/unity/unityengine/Component/">Component</a> → <a href="/api-docs/unity/unityengine/Behaviour/">Behaviour</a> → <strong>unityengine.MonoBehaviour</strong> (extern class) → <a href="/api-docs/unity/backend/MiniLoudUnity/">backend.MiniLoudUnity</a></div>

Unity MonoBehaviour class extern binding for Ceramic.
The base class for Unity scripts that can be attached to GameObjects.

MonoBehaviour is the foundation for most Unity gameplay code.
This binding exposes the essential properties needed by the
Ceramic Unity backend for script management.

## Instance Members

<div class="signature field-var has-description has-plugin" id="enabled"><div class="plugin-name">unity</div><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Controls whether this component is enabled and will receive updates.
When false, Unity lifecycle methods like Update() won't be called.
The component remains attached to the GameObject.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="isActiveAndEnabled"><div class="plugin-name">unity</div><code><span class="field-name">isActiveAndEnabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isActiveAndEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reports if the component is both enabled and its GameObject is active.
This is true only when both enabled=true and the GameObject is
active in the hierarchy. Read-only property.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="gameObject"><div class="plugin-name">unity</div><code><span class="field-name">gameObject</span><span class="operator">:</span> <a href="/api-docs/unity/unityengine/GameObject/" class="type-link">GameObject</a></code><a class="header-anchor" href="#gameObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the GameObject this component is attached to.
Every component must be attached to exactly one GameObject.
Use this to access other components on the same GameObject.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="tag"><div class="plugin-name">unity</div><code><span class="field-name">tag</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#tag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The tag of the GameObject this component is attached to.
Shorthand for gameObject.tag. Tags are used to identify
GameObjects for scripting purposes.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="name"><div class="plugin-name">unity</div><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The name of the GameObject this component is attached to.
Shorthand for gameObject.name. Useful for debugging and
finding specific objects in the scene.

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

