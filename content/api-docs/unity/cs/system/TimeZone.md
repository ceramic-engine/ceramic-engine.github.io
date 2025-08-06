---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: TimeZone
target: Unity
permalink: api-docs/unity/cs/system/TimeZone/
---

# TimeZone

<div class="type-hierarchy"><strong>cs.system.TimeZone</strong> (extern class)</div>

## Static Members

<div class="signature field-var no-description" id="CurrentTimeZone"><code><span class="field-name">CurrentTimeZone</span><span class="operator">:</span> <a href="#" class="type-link">TimeZone</a></code><a class="header-anchor" href="#CurrentTimeZone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDaylightSavingTime"><code><span class="field-name">IsDaylightSavingTime</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a><span class="operator">,</span> <span class="arg-name">daylightTimes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/DaylightTime/" class="type-link">cs.system.globalization.DaylightTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDaylightSavingTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [DateTime](/api-docs/unity/cs/system/DateTime/) |
| `daylightTimes` | [cs.system.globalization.DaylightTime](/api-docs/unity/cs/system/globalization/DaylightTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="StandardName"><code><span class="field-name">StandardName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#StandardName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DaylightName"><code><span class="field-name">DaylightName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#DaylightName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDaylightChanges"><code><span class="field-name">GetDaylightChanges</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/DaylightTime/" class="type-link">cs.system.globalization.DaylightTime</a></code><a class="header-anchor" href="#GetDaylightChanges"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.globalization.DaylightTime](/api-docs/unity/cs/system/globalization/DaylightTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetUtcOffset"><code><span class="field-name">GetUtcOffset</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">TimeSpan</a></code><a class="header-anchor" href="#GetUtcOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsDaylightSavingTime"><code><span class="field-name">IsDaylightSavingTime</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDaylightSavingTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToLocalTime"><code><span class="field-name">ToLocalTime</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a></code><a class="header-anchor" href="#ToLocalTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToUniversalTime"><code><span class="field-name">ToUniversalTime</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">DateTime</a></code><a class="header-anchor" href="#ToUniversalTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

