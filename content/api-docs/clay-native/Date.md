---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Date
target: Clay (Native)
permalink: api-docs/clay-native/Date/
---

# Date

<div class="type-hierarchy"><strong>Date</strong> (Class)</div>

The Date class provides a basic structure for date and time related
information. Date instances can be created by

- `new Date()` for a specific date,
- `Date.now()` to obtain information about the current time,
- `Date.fromTime()` with a given timestamp or
- `Date.fromString()` by parsing from a String.

There are some extra functions available in the `DateTools` class.

In the context of Haxe dates, a timestamp is defined as the number of
milliseconds elapsed since 1st January 1970 UTC.

## Supported range

Due to platform limitations, only dates in the range 1970 through 2038 are
supported consistently. Some targets may support dates outside this range,
depending on the OS at runtime. The `Date.fromTime` method will not work with
timestamps outside the range on any target.

## Static Members

<div class="signature field-method has-description" id="now"><code><span class="field-name">now</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Date</a></code><a class="header-anchor" href="#now"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a Date representing the current local time.
| Returns |
|---------|
| [Date](/api-docs/clay-native/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromTime"><code><span class="field-name">fromTime</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Date</a></code><a class="header-anchor" href="#fromTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a Date from the timestamp (in milliseconds) `t`.

| Name | Type |
|------|------|
| `t` | [Float](/api-docs/clay-native/Float/) |

| Returns |
|---------|
| [Date](/api-docs/clay-native/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromString"><code><span class="field-name">fromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Date</a></code><a class="header-anchor" href="#fromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a Date from the formatted string `s`. The following formats are
accepted by the function:

- `"YYYY-MM-DD hh:mm:ss"`
- `"YYYY-MM-DD"`
- `"hh:mm:ss"`

The first two formats expressed a date in local time. The third is a time
relative to the UTC epoch.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Date](/api-docs/clay-native/Date/) |

## Instance Members

<div class="signature field-method has-description" id="getTime"><code><span class="field-name">getTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the timestamp (in milliseconds) of `this` date.
On cpp and neko, this function only has a second resolution, so the
result will always be a multiple of `1000.0`, e.g. `1454698271000.0`.
To obtain the current timestamp with better precision on cpp and neko,
see the `Sys.time` API.

For measuring time differences with millisecond accuracy on
all platforms, see `haxe.Timer.stamp`.
| Returns |
|---------|
| [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of `this` Date in the local timezone
using the standard format `YYYY-MM-DD HH:MM:SS`. See `DateTools.format` for
other formatting rules.
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">day</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hour</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sec</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new date object from the given arguments.

The behaviour of a Date instance is only consistent across platforms if
the the arguments describe a valid date.

- month: 0 to 11 (note that this is zero-based)
- day: 1 to 31
- hour: 0 to 23
- min: 0 to 59
- sec: 0 to 59

| Name | Type |
|------|------|
| `year` | [Int](/api-docs/clay-native/Int/) |
| `month` | [Int](/api-docs/clay-native/Int/) |
| `day` | [Int](/api-docs/clay-native/Int/) |
| `hour` | [Int](/api-docs/clay-native/Int/) |
| `min` | [Int](/api-docs/clay-native/Int/) |
| `sec` | [Int](/api-docs/clay-native/Int/) |

## Private Members

<div class="signature field-var no-description" id="mSeconds"><code><span class="field-name">mSeconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#mSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

