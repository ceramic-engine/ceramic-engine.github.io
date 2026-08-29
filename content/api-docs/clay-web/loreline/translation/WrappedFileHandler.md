---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: WrappedFileHandler
target: Clay (Web)
permalink: api-docs/clay-web/loreline/translation/WrappedFileHandler/
---

# WrappedFileHandler

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/translation/TranslationFormats.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.translation.WrappedFileHandler</strong> (Class)</div>

Result of `TranslationFormats.wrap()`:
- `handler` is the wrapped file handler that adds alternate-format lookups.
- `lastError()` returns the most recent converter error captured during
this wrap's lifetime (or null). Caller reads after dispatch completes.

Defined as a class (not a typedef) because Haxe Lua wraps anonymous-struct
function fields in `function(_, ...) return underlying(...) end` (the `_`
eats an implicit `self` arg), which breaks direct function-style invocation.
Class fields don't get that treatment.

## Instance Members

<div class="signature field-var no-description" id="handler"><code><span class="field-name">handler</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ImportsFileHandler/" class="type-link">loreline.ImportsFileHandler</a></code><a class="header-anchor" href="#handler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="lastError"><code><span class="field-name">lastError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Error/" class="type-link">loreline.Error</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lastError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[loreline.Error](/api-docs/clay-web/loreline/Error/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ImportsFileHandler/" class="type-link">loreline.ImportsFileHandler</a><span class="operator">,</span> <span class="arg-name">lastError</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handler` | [loreline.ImportsFileHandler](/api-docs/clay-web/loreline/ImportsFileHandler/) |
| `lastError` | Function |

