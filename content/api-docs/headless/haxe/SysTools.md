---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: SysTools
target: Headless
permalink: api-docs/headless/haxe/SysTools/
---

# SysTools

<div class="type-hierarchy"><strong>haxe.SysTools</strong> (Class)</div>

## Static Members

<div class="signature field-var has-description" id="winMetaCharacters"><code><span class="field-name">winMetaCharacters</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/ds/ReadOnlyArray/" class="type-link">haxe.ds.ReadOnlyArray</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#winMetaCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Character codes of the characters that will be escaped by `quoteWinArg(_, true)`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="quoteUnixArg"><code><span class="field-name">quoteUnixArg</span><span class="parenthesis">(</span><span class="arg-name">argument</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#quoteUnixArg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a String that can be used as a single command line argument
on Unix.
The input will be quoted, or escaped if necessary.

| Name | Type |
|------|------|
| `argument` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="quoteWinArg"><code><span class="field-name">quoteWinArg</span><span class="parenthesis">(</span><span class="arg-name">argument</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">escapeMetaCharacters</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#quoteWinArg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a String that can be used as a single command line argument
on Windows.
The input will be quoted, or escaped if necessary, such that the output
will be parsed as a single argument using the rule specified in
http://msdn.microsoft.com/en-us/library/ms880421

Examples:
```haxe
quoteWinArg("abc") == "abc";
quoteWinArg("ab c") == '"ab c"';
```

| Name | Type |
|------|------|
| `argument` | [String](/api-docs/headless/String/) |
| `escapeMetaCharacters` | [Bool](/api-docs/headless/Bool/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

