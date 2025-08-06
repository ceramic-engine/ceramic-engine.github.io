---
layout: api-docs
category: api-docs
subCategory: doc
menu: Script
title: ScriptModule
target: Headless
permalink: api-docs/headless/ceramic/ScriptModule/
---

# ScriptModule

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/script/runtime/src/ceramic/ScriptModule.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ScriptModule</strong> (Class)</div>

Represents a script module for inter-script communication.

Script modules provide a type-safe way for scripts to access each other's
exported functions and variables. When a script calls methods or accesses
properties on a ScriptModule, the requests are dynamically resolved to the
owning script's scope.

This enables modular script architectures where scripts can interact without
direct references to each other.

```javascript
// In script A:
var health = 100;
function takeDamage(amount) {
    health -= amount;
}

// In script B:
var playerModule = module('player');
playerModule.takeDamage(10);
var currentHealth = playerModule.health;
```

## Instance Members

<div class="signature field-var has-description has-plugin" id="owner"><div class="plugin-name">script</div><code><span class="field-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#owner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The script that owns this module.
All field access and method calls are delegated to this script.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">script</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">owner</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new module for the given script.



| Name | Type | Description |
|------|------|-------------|
| `owner` | [Script](/api-docs/headless/ceramic/Script/) | Script that exports this module |

