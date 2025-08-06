---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Date
target: Headless
permalink: api-docs/headless/js/lib/Date/
---

# Date

<div class="type-hierarchy"><strong>js.lib.Date</strong> (extern class)</div>

Creates a JavaScript Date instance that represents a single moment in time. Date objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.

## Static Members

<div class="signature field-method has-description" id="fromHaxeDate"><code><span class="field-name">fromHaxeDate</span><span class="parenthesis">(</span><span class="arg-name">date</span><span class="operator">:</span> <a href="/api-docs/headless/_Date/HaxeDate/" class="type-link">_Date.HaxeDate</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Date</a></code><a class="header-anchor" href="#fromHaxeDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cast Haxe's Date to js.lib.Date.

| Name | Type |
|------|------|
| `date` | [_Date.HaxeDate](/api-docs/headless/_Date/HaxeDate/) |

| Returns |
|---------|
| [Date](/api-docs/headless/js/lib/Date/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toHaxeDate"><code><span class="field-name">toHaxeDate</span><span class="parenthesis">(</span><span class="arg-name">date</span><span class="operator">:</span> <a href="#" class="type-link">Date</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/_Date/HaxeDate/" class="type-link">_Date.HaxeDate</a></code><a class="header-anchor" href="#toHaxeDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Cast js.lib.Date to Haxe's Date.

| Name | Type |
|------|------|
| `date` | [Date](/api-docs/headless/js/lib/Date/) |

| Returns |
|---------|
| [_Date.HaxeDate](/api-docs/headless/_Date/HaxeDate/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="now"><code><span class="field-name">now</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#now"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00, UTC, with leap seconds ignored.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="UTC"><code><span class="field-name">UTC</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">day</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">hours</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">minutes</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">milliseconds</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#UTC"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

| Name | Type | Default |
|------|------|---------|
| `year` | [Int](/api-docs/headless/Int/) | |
| `month` | [Int](/api-docs/headless/Int/) | |
| `day` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `hours` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `minutes` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `seconds` | [Int](/api-docs/headless/Int/) | *(optional)* |
| `milliseconds` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

## Instance Members

<div class="signature field-method has-description" id="getDate"><code><span class="field-name">getDate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of the month (1-31) for the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDay"><code><span class="field-name">getDay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of the week (0-6) for the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFullYear"><code><span class="field-name">getFullYear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFullYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the year (4 digits for 4-digit years) of the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getHours"><code><span class="field-name">getHours</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the hour (0-23) in the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMilliseconds"><code><span class="field-name">getMilliseconds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the milliseconds (0-999) in the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMinutes"><code><span class="field-name">getMinutes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the minutes (0-59) in the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getMonth"><code><span class="field-name">getMonth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the month (0-11) in the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSeconds"><code><span class="field-name">getSeconds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the seconds (0-59) in the specified date according to local time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTime"><code><span class="field-name">getTime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC (negative for prior times).
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTimezoneOffset"><code><span class="field-name">getTimezoneOffset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getTimezoneOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the time-zone offset in minutes for the current locale.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCDate"><code><span class="field-name">getUTCDate</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day (date) of the month (1-31) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCDay"><code><span class="field-name">getUTCDay</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the day of the week (0-6) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCFullYear"><code><span class="field-name">getUTCFullYear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCFullYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the year (4 digits for 4-digit years) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCHours"><code><span class="field-name">getUTCHours</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the hours (0-23) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCMilliseconds"><code><span class="field-name">getUTCMilliseconds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the milliseconds (0-999) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCMinutes"><code><span class="field-name">getUTCMinutes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the minutes (0-59) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCMonth"><code><span class="field-name">getUTCMonth</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the month (0-11) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getUTCSeconds"><code><span class="field-name">getUTCSeconds</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getUTCSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the seconds (0-59) in the specified date according to universal time.
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setDate"><code><span class="field-name">setDate</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the day of the month for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setFullYear"><code><span class="field-name">setFullYear</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setFullYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setHours"><code><span class="field-name">setHours</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the hours for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMilliseconds"><code><span class="field-name">setMilliseconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the milliseconds for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMinutes"><code><span class="field-name">setMinutes</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the minutes for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setMonth"><code><span class="field-name">setMonth</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the month for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setSeconds"><code><span class="field-name">setSeconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the seconds for a specified date according to local time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setTime"><code><span class="field-name">setTime</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC, allowing for negative numbers for times prior.

| Name | Type |
|------|------|
| `value` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCDate"><code><span class="field-name">setUTCDate</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the day of the month for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCFullYear"><code><span class="field-name">setUTCFullYear</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCFullYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCHours"><code><span class="field-name">setUTCHours</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the hour for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCMilliseconds"><code><span class="field-name">setUTCMilliseconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the milliseconds for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCMinutes"><code><span class="field-name">setUTCMinutes</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the minutes for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCMonth"><code><span class="field-name">setUTCMonth</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the month for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setUTCSeconds"><code><span class="field-name">setUTCSeconds</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setUTCSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the seconds for a specified date according to universal time.

| Name | Type |
|------|------|
| `value` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toDateString"><code><span class="field-name">toDateString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toDateString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the "date" portion of the Date as a human-readable string.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toISOString"><code><span class="field-name">toISOString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toISOString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a date to a string following the ISO 8601 Extended Format.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toJSON"><code><span class="field-name">toJSON</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toJSON"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toLocaleDateString"><code><span class="field-name">toLocaleDateString</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">locales</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLocaleDateString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

| Name | Type | Default |
|------|------|---------|
| `locales` | [String](/api-docs/headless/String/) | *(optional)* |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toLocaleFormat"><code><span class="field-name">toLocaleFormat</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLocaleFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a date to a string, using a format string.

| Name | Type |
|------|------|
| `format` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toLocaleString"><code><span class="field-name">toLocaleString</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">locales</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLocaleString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string with a locality sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.

| Name | Type | Default |
|------|------|---------|
| `locales` | [String](/api-docs/headless/String/) | *(optional)* |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toLocaleTimeString"><code><span class="field-name">toLocaleTimeString</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">locales</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLocaleTimeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string with a locality sensitive representation of the time portion of this date based on system settings.

| Name | Type | Default |
|------|------|---------|
| `locales` | [String](/api-docs/headless/String/) | *(optional)* |
| `options` | [Dynamic](/api-docs/headless/Dynamic/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toSource"><code><span class="field-name">toSource</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toSource"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representing the source for an equivalent Date object; you can use this value to create a new object. Overrides the Object.prototype.toSource() method.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toTimeString"><code><span class="field-name">toTimeString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toTimeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the "time" portion of the Date as a human-readable string.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toUTCString"><code><span class="field-name">toUTCString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toUTCString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a date to a string using the UTC timezone.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

