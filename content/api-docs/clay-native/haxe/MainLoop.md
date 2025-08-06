---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: MainLoop
target: Clay (Native)
permalink: api-docs/clay-native/haxe/MainLoop/
---

# MainLoop

<div class="type-hierarchy"><strong>haxe.MainLoop</strong> (Class)</div>

## Static Members

<div class="signature field-method no-description" id="hasEvents"><code><span class="field-name">hasEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

## Private Members

<div class="signature field-var no-description" id="pending"><code><span class="field-name">pending</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/MainEvent/" class="type-link">MainEvent</a></code><a class="header-anchor" href="#pending"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="sortEvents"><code><span class="field-name">sortEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sortEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="tick"><code><span class="field-name">tick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run the pending events. Return the time for next event.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | haxe.MainEvent |

