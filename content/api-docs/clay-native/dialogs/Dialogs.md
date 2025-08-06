---
layout: api-docs
category: api-docs
subCategory: doc
menu: Dialogs
title: Dialogs
target: Clay (Native)
permalink: api-docs/clay-native/dialogs/Dialogs/
---

# Dialogs

<div class="view-source"><a href="https://github.com/ceramic-engine/linc_dialogs/blob/master/dialogs/Dialogs.hx">View source</a></div>

<div class="type-hierarchy"><strong>dialogs.Dialogs</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filters</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/dialogs/FileFilter/" class="type-link">FileFilter</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">preserve_cwd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/clay-native/String/) | |
| `filters` | [Array](/api-docs/clay-native/Array/)<[FileFilter](/api-docs/clay-native/dialogs/FileFilter/)> | *(optional)* |
| `preserve_cwd` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="save"><code><span class="field-name">save</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filter</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/dialogs/FileFilter/" class="type-link">FileFilter</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">preserve_cwd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#save"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/clay-native/String/) | |
| `filter` | [Null](/api-docs/clay-native/Null/)<[FileFilter](/api-docs/clay-native/dialogs/FileFilter/)> | *(optional)* |
| `preserve_cwd` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="folder"><code><span class="field-name">folder</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">preserve_cwd</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#folder"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `title` | [String](/api-docs/clay-native/String/) | |
| `preserve_cwd` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_dialogs.h" |
| `:build` | linc.Linc.touch() |
| `:build` | linc.Linc.xml("dialogs") |

