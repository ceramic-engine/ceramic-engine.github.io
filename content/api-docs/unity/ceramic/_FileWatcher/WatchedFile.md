---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: WatchedFile
target: Unity
permalink: api-docs/unity/ceramic/_FileWatcher/WatchedFile/
---

# WatchedFile

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/FileWatcher.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic._FileWatcher.WatchedFile</strong> (private class)</div>

Internal data structure for tracking watched file state.

## Instance Members

<div class="signature field-var has-description" id="updateCallbacks"><code><span class="field-name">updateCallbacks</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#updateCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of callbacks to notify when the file changes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mtime"><code><span class="field-name">mtime</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mtime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Last known modification time of the file.
-1 indicates the file hasn't been checked yet.

<hr class="field-separator" />

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cached content of the file for comparison.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | ceramic.FileWatcher |

