---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EReg
target: Unity
permalink: api-docs/unity/EReg/
---

# EReg

<div class="type-hierarchy"><strong>EReg</strong> (final class)</div>

The EReg class represents regular expressions.

While basic usage and patterns consistently work across platforms, some more
complex operations may yield different results. This is a necessary trade-
off to retain a certain level of performance.

EReg instances can be created by calling the constructor, or with the
special syntax `~/pattern/modifier`

EReg instances maintain an internal state, which is affected by several of
its methods.

A detailed explanation of the supported operations is available at
<https://haxe.org/manual/std-regex.html>

## Static Members

<div class="signature field-method has-description" id="escape"><code><span class="field-name">escape</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#escape"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Escape the string `s` for use as a part of regular expression.

If `s` is null, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Instance Members

<div class="signature field-method has-description" id="match"><code><span class="field-name">match</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#match"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `this` regular expression matches String `s`.

This method modifies the internal state.

If `s` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matched"><code><span class="field-name">matched</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#matched"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the matched sub-group `n` of `this` EReg.

This method should only be called after `this.match` or
`this.matchSub`, and then operates on the String of that operation.

The index `n` corresponds to the n-th set of parentheses in the pattern
of `this` EReg. If no such sub-group exists, the result is unspecified.

If `n` equals 0, the whole matched substring is returned.

| Name | Type |
|------|------|
| `n` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matchedPos"><code><span class="field-name">matchedPos</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#matchedPos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the position and length of the last matched substring, within
the String which was last used as argument to `this.match` or
`this.matchSub`.

If the most recent call to `this.match` or `this.matchSub` did not
match anything, the result is unspecified.

If the global g modifier was in place for the matching, the position and
length of the leftmost substring is returned.
| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method has-description" id="matchSub"><code><span class="field-name">matchSub</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#matchSub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if `this` regular expression matches a substring of String `s`.

This function expects `pos` and `len` to describe a valid substring of
`s`, or else the result is unspecified. To get more robust behavior,
`this.match(s.substr(pos,len))` can be used instead.

This method modifies the internal state.

If `s` is null, the result is unspecified.

| Name | Type | Default |
|------|------|---------|
| `s` | [String](/api-docs/unity/String/) | |
| `pos` | [Int](/api-docs/unity/Int/) | |
| `len` | [Int](/api-docs/unity/Int/) | `-1` |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="replace"><code><span class="field-name">replace</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">by</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces the first substring of `s` which `this` EReg matches with `by`.

If `this` EReg does not match any substring, the result is `s`.

By default, this method replaces only the first matched substring. If
the global g modifier is in place, all matched substrings are replaced.

If `by` contains `$1` to `$9`, the digit corresponds to number of a
matched sub-group and its value is used instead. If no such sub-group
exists, the replacement is unspecified. The string `$$` becomes `$`.

If `s` or `by` are null, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `by` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map"><code><span class="field-name">map</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">f</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#map"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calls the function `f` for the substring of `s` which `this` EReg matches
and replaces that substring with the result of `f` call.

The `f` function takes `this` EReg object as its first argument and should
return a replacement string for the substring matched.

If `this` EReg does not match any substring, the result is `s`.

By default, this method replaces only the first matched substring. If
the global g modifier is in place, all matched substrings are replaced.

If `s` or `f` are null, the result is unspecified.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |
| `f` | Function |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">r</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">opt</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new regular expression with pattern `r` and modifiers `opt`.

This is equivalent to the shorthand syntax `~/r/opt`

If `r` or `opt` are null, the result is unspecified.

| Name | Type |
|------|------|
| `r` | [String](/api-docs/unity/String/) |
| `opt` | [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-var no-description" id="regex"><code><span class="field-name">regex</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/Regex/" class="type-link">cs.system.text.regularexpressions.Regex</a></code><a class="header-anchor" href="#regex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="m"><code><span class="field-name">m</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/regularexpressions/Match/" class="type-link">cs.system.text.regularexpressions.Match</a></code><a class="header-anchor" href="#m"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="isGlobal"><code><span class="field-name">isGlobal</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGlobal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cur"><code><span class="field-name">cur</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#cur"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

