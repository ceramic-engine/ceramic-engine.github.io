---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Date
target: Headless
permalink: api-docs/headless/Date/
---

# Date

<div class="type-hierarchy"><strong>Date</strong> (extern class)</div>

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
| [Date](/api-docs/headless/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromTime"><code><span class="field-name">fromTime</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Date</a></code><a class="header-anchor" href="#fromTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a Date from the timestamp (in milliseconds) `t`.

| Name | Type |
|------|------|
| `t` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Date](/api-docs/headless/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromString"><code><span class="field-name">fromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Date</a></code><a class="header-anchor" href="#fromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a Date from the formatted string `s`. The following formats are
accepted by the function:

- `"YYYY-MM-DD hh:mm:ss"`
- `"YYYY-MM-DD"`
- `"hh:mm:ss"`

The first two formats expressed a date in local time. The third is a time
relative to the UTC epoch.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Date](/api-docs/headless/Date/) |

## Instance Members

<div class="signature field-method has-description" id="getTime"><code><span class="field-name">getTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the timestamp (in milliseconds) of `this` date.
On cpp and neko, this function only has a second resolution, so the
result will always be a multiple of `1000.0`, e.g. `1454698271000.0`.
To obtain the current timestamp with better precision on cpp and neko,
see the `Sys.time` API.

For measuring time differences with millisecond accuracy on
all platforms, see `haxe.Timer.stamp`.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getHours"><code><span class="field-name">getHours</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the hours of `this` Date (0-23 range) in the local timezone.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMinutes"><code><span class="field-name">getMinutes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the minutes of `this` Date (0-59 range) in the local timezone.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSeconds"><code><span class="field-name">getSeconds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the seconds of `this` Date (0-59 range) in the local timezone.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFullYear"><code><span class="field-name">getFullYear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFullYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the full year of `this` Date (4 digits) in the local timezone.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMonth"><code><span class="field-name">getMonth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the month of `this` Date (0-11 range) in the local timezone.
Note that the month number is zero-based.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDate"><code><span class="field-name">getDate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of `this` Date (1-31 range) in the local timezone.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDay"><code><span class="field-name">getDay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of the week of `this` Date (0-6 range, where `0` is Sunday)
in the local timezone.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCHours"><code><span class="field-name">getUTCHours</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the hours of `this` Date (0-23 range) in UTC.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCMinutes"><code><span class="field-name">getUTCMinutes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the minutes of `this` Date (0-59 range) in UTC.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCSeconds"><code><span class="field-name">getUTCSeconds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the seconds of `this` Date (0-59 range) in UTC.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCFullYear"><code><span class="field-name">getUTCFullYear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCFullYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the full year of `this` Date (4 digits) in UTC.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCMonth"><code><span class="field-name">getUTCMonth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the month of `this` Date (0-11 range) in UTC.
Note that the month number is zero-based.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCDate"><code><span class="field-name">getUTCDate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of `this` Date (1-31 range) in UTC.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCDay"><code><span class="field-name">getUTCDay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of the week of `this` Date (0-6 range, where `0` is Sunday)
in UTC.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTimezoneOffset"><code><span class="field-name">getTimezoneOffset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTimezoneOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the time zone difference of `this` Date in the current locale
to UTC, in minutes.

Assuming the function is executed on a machine in a UTC+2 timezone,
`Date.now().getTimezoneOffset()` will return `-120`.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representation of `this` Date in the local timezone
using the standard format `YYYY-MM-DD HH:MM:SS`. See `DateTools.format` for
other formatting rules.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">day</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hour</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">sec</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

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
| `year` | [Int](/api-docs/headless/Int/) |
| `month` | [Int](/api-docs/headless/Int/) |
| `day` | [Int](/api-docs/headless/Int/) |
| `hour` | [Int](/api-docs/headless/Int/) |
| `min` | [Int](/api-docs/headless/Int/) |
| `sec` | [Int](/api-docs/headless/Int/) |

