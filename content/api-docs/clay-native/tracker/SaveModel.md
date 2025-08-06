---
layout: api-docs
category: api-docs
subCategory: doc
menu: Tracker
title: SaveModel
target: Clay (Native)
permalink: api-docs/clay-native/tracker/SaveModel/
---

# SaveModel

<div class="view-source"><a href="https://github.com/jeremyfa/tracker/blob/master/src/tracker/SaveModel.hx">View source</a></div>

<div class="type-hierarchy"><strong>tracker.SaveModel</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="getSavedOrCreate"><code><span class="field-name">getSavedOrCreate</span><span class="parenthesis">(</span><span class="arg-name">modelClass</span><span class="operator">:</span> <a href="/api-docs/clay-native/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getSavedOrCreate.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">getSavedOrCreate.T</span></code><a class="header-anchor" href="#getSavedOrCreate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `modelClass` | [Class](/api-docs/clay-native/Class/)<getSavedOrCreate.T> | |
| `key` | [String](/api-docs/clay-native/String/) | |
| `args` | [Array](/api-docs/clay-native/Array/)<[Dynamic](/api-docs/clay-native/Dynamic/)> | *(optional)* |

| Returns |
|---------|
| getSavedOrCreate.T |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isBusyKey"><code><span class="field-name">isBusyKey</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBusyKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `key` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="loadFromKey"><code><span class="field-name">loadFromKey</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">muteWarnings</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#loadFromKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Load data from the given key.

| Name | Type | Default |
|------|------|---------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) | |
| `key` | [String](/api-docs/clay-native/String/) | |
| `muteWarnings` | [Bool](/api-docs/clay-native/Bool/) | `false` |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="autoSaveAsKey"><code><span class="field-name">autoSaveAsKey</span><span class="parenthesis">(</span><span class="arg-name">model</span><span class="operator">:</span> <a href="/api-docs/clay-native/tracker/Model/" class="type-link">Model</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">appendInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">1.0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">compactInterval</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a> <span class="operator">=</span> <span class="default-value">60.0</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#autoSaveAsKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `model` | [Model](/api-docs/clay-native/tracker/Model/) | |
| `key` | [String](/api-docs/clay-native/String/) | |
| `appendInterval` | [Float](/api-docs/clay-native/Float/) | `1.0` |
| `compactInterval` | [Float](/api-docs/clay-native/Float/) | `60.0` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="encodeHashedString"><code><span class="field-name">encodeHashedString</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#encodeHashedString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encode the given string `str` and return the result.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decodeHashedString"><code><span class="field-name">decodeHashedString</span><span class="parenthesis">(</span><span class="arg-name">encoded</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#decodeHashedString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decode the given `encoded` string and return the result or null if it failed.

| Name | Type |
|------|------|
| `encoded` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-var no-description" id="BACKUP_NUM_STEPS"><code><span class="field-name">BACKUP_NUM_STEPS</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BACKUP_NUM_STEPS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NUM_BACKUPS"><code><span class="field-name">NUM_BACKUPS</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NUM_BACKUPS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BACKUP_STEPS"><code><span class="field-name">BACKUP_STEPS</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#BACKUP_STEPS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="busyKeys"><code><span class="field-name">busyKeys</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#busyKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

