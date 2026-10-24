---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: RuleGroups
target: Unity
permalink: api-docs/unity/ldtk/rules/RuleGroups/
---

# RuleGroups

<div class="type-hierarchy"><strong>ldtk.rules.RuleGroups</strong> (Class)</div>

## Static Members

<div class="signature field-method has-description" id="isGroupApplied"><code><span class="field-name">isGroupApplied</span><span class="parenthesis">(</span><span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/ldtk/rules/RuleGroupInfo/" class="type-link">RuleGroupInfo</a><span class="operator">,</span> <span class="arg-name">biomeValues</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">optionalRules</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGroupApplied"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

TRUE if the rules of this group apply to a layer instance.
`biomeValues` are the enum value ids of the level biome field (null if the layer has no biome field or the level has no value).
`optionalRules` are the uids of the optional groups enabled in this layer instance.

| Name | Type |
|------|------|
| `g` | [RuleGroupInfo](/api-docs/unity/ldtk/rules/RuleGroupInfo/) |
| `biomeValues` | [Null](/api-docs/unity/Null/)<[Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)>> |
| `optionalRules` | [Map](/api-docs/unity/Map/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isGroupEnabled"><code><span class="field-name">isGroupEnabled</span><span class="parenthesis">(</span><span class="arg-name">g</span><span class="operator">:</span> <a href="/api-docs/unity/ldtk/rules/RuleGroupInfo/" class="type-link">RuleGroupInfo</a><span class="operator">,</span> <span class="arg-name">optionalRules</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGroupEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An optional group enabled in the layer instance applies even if the group itself is inactive

| Name | Type |
|------|------|
| `g` | [RuleGroupInfo](/api-docs/unity/ldtk/rules/RuleGroupInfo/) |
| `optionalRules` | [Map](/api-docs/unity/Map/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

