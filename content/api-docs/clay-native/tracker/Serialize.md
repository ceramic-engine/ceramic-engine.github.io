---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: Serialize
target: Clay (Native)
permalink: api-docs/clay-native/tracker/Serialize/
---

# Serialize

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/Serialize.hx">View source</a></div>

<div class="type-hierarchy"><strong>tracker.Serialize</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="customHxSerialize"><code><span class="field-name">customHxSerialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#customHxSerialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="customHxDeserialize"><code><span class="field-name">customHxDeserialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#customHxDeserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serialize"><code><span class="field-name">serialize</span><span class="parenthesis">(</span><span class="arg-name">serializable</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Serializable/" class="type-link">Serializable</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#serialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `serializable` | [Serializable](/api-docs/clay-native/tracker/Serializable/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deserialize"><code><span class="field-name">deserialize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">serializable</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Serializable/" class="type-link">Serializable</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#deserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `serializable` | [Serializable](/api-docs/clay-native/tracker/Serializable/) | *(optional)* |
| `data` | [String](/api-docs/clay-native/String/) | |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

## Private Members

<div class="signature field-method no-description" id="serializeValue"><code><span class="field-name">serializeValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#serializeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deserializeValue"><code><span class="field-name">deserializeValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">serializable</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Serializable/" class="type-link">Serializable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forceUpdateProps</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#deserializeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | |
| `serializable` | [Serializable](/api-docs/clay-native/tracker/Serializable/) | *(optional)* |
| `forceUpdateProps` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | tracker.SerializeModel |
| `:allow` | tracker.SaveModel |
| `:allow` | tracker.ShareModel |

