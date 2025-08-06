---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: Serialize
target: Clay (Web)
permalink: api-docs/clay-web/tracker/Serialize/
---

# Serialize

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/Serialize.hx">View source</a></div>

<div class="type-hierarchy"><strong>tracker.Serialize</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="customHxSerialize"><code><span class="field-name">customHxSerialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#customHxSerialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="customHxDeserialize"><code><span class="field-name">customHxDeserialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#customHxDeserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serialize"><code><span class="field-name">serialize</span><span class="parenthesis">(</span><span class="arg-name">serializable</span><span class="operator">:</span> <a href="/api-docs/clay-web/tracker/Serializable/" class="type-link">Serializable</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#serialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `serializable` | [Serializable](/api-docs/clay-web/tracker/Serializable/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deserialize"><code><span class="field-name">deserialize</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">serializable</span><span class="operator">:</span> <a href="/api-docs/clay-web/tracker/Serializable/" class="type-link">Serializable</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#deserialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `serializable` | [Serializable](/api-docs/clay-web/tracker/Serializable/) | *(optional)* |
| `data` | [String](/api-docs/clay-web/String/) | |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

## Private Members

<div class="signature field-method no-description" id="serializeValue"><code><span class="field-name">serializeValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#serializeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="deserializeValue"><code><span class="field-name">deserializeValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">serializable</span><span class="operator">:</span> <a href="/api-docs/clay-web/tracker/Serializable/" class="type-link">Serializable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">forceUpdateProps</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#deserializeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `value` | [Dynamic](/api-docs/clay-web/Dynamic/) | |
| `serializable` | [Serializable](/api-docs/clay-web/tracker/Serializable/) | *(optional)* |
| `forceUpdateProps` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | tracker.SerializeModel |
| `:allow` | tracker.SaveModel |
| `:allow` | tracker.ShareModel |

