---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: StateMachineSystem
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/StateMachineSystem/
---

# StateMachineSystem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/StateMachineSystem.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-web/ceramic/System/">System</a> → <strong>ceramic.StateMachineSystem</strong> (Class)</div>

System that manages and updates all active state machines.

StateMachineSystem is responsible for automatically updating all state machines
that have autoUpdate enabled. It runs during the late update phase to ensure
state machines are updated after regular entity updates.

Features:
- Automatic registration of state machines
- Safe iteration during updates (handles additions/removals)
- Configurable update order via lateUpdateOrder
- Singleton pattern with shared instance

This system is automatically used by all StateMachine instances and typically
doesn't need to be interacted with directly.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/StateMachine/">StateMachine</a>, <a href="/api-docs/clay-web/ceramic/StateMachineBase/">StateMachineBase</a>, <a href="/api-docs/clay-web/ceramic/System/">System</a></div>


## Static Members

<div class="signature field-var has-description" id="shared"><code><span class="field-name">shared</span><span class="operator">:</span> <a href="#" class="type-link">StateMachineSystem</a></code><a class="header-anchor" href="#shared"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared state machine system

## Private Members

<div class="signature field-var no-description" id="stateMachines"><code><span class="field-name">stateMachines</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/StateMachineBase/" class="type-link">StateMachineBase</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stateMachines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="lateUpdate"><code><span class="field-name">lateUpdate</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#lateUpdate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `delta` | [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:allow` | ceramic.StateMachineBase |

