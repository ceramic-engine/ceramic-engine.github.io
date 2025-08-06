---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: DateTimeFormatInfo
target: Unity
permalink: api-docs/unity/cs/system/globalization/DateTimeFormatInfo/
---

# DateTimeFormatInfo

<div class="type-hierarchy"><strong>cs.system.globalization.DateTimeFormatInfo</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">cs.system.ICloneable</a>, <a href="/api-docs/unity/cs/system/IFormatProvider/">cs.system.IFormatProvider</a></div>

## Static Members

<div class="signature field-var no-description" id="InvariantInfo"><code><span class="field-name">InvariantInfo</span><span class="operator">:</span> <a href="#" class="type-link">DateTimeFormatInfo</a></code><a class="header-anchor" href="#InvariantInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentInfo"><code><span class="field-name">CurrentInfo</span><span class="operator">:</span> <a href="#" class="type-link">DateTimeFormatInfo</a></code><a class="header-anchor" href="#CurrentInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetInstance"><code><span class="field-name">GetInstance</span><span class="parenthesis">(</span><span class="arg-name">provider</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IFormatProvider/" class="type-link">cs.system.IFormatProvider</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTimeFormatInfo</a></code><a class="header-anchor" href="#GetInstance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `provider` | [cs.system.IFormatProvider](/api-docs/unity/cs/system/IFormatProvider/) |

| Returns |
|---------|
| [DateTimeFormatInfo](/api-docs/unity/cs/system/globalization/DateTimeFormatInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadOnly"><code><span class="field-name">ReadOnly</span><span class="parenthesis">(</span><span class="arg-name">dtfi</span><span class="operator">:</span> <a href="#" class="type-link">DateTimeFormatInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">DateTimeFormatInfo</a></code><a class="header-anchor" href="#ReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dtfi` | [DateTimeFormatInfo](/api-docs/unity/cs/system/globalization/DateTimeFormatInfo/) |

| Returns |
|---------|
| [DateTimeFormatInfo](/api-docs/unity/cs/system/globalization/DateTimeFormatInfo/) |

## Instance Members

<div class="signature field-var no-description" id="ShortestDayNames"><code><span class="field-name">ShortestDayNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ShortestDayNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NativeCalendarName"><code><span class="field-name">NativeCalendarName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#NativeCalendarName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MonthGenitiveNames"><code><span class="field-name">MonthGenitiveNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#MonthGenitiveNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AbbreviatedMonthGenitiveNames"><code><span class="field-name">AbbreviatedMonthGenitiveNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#AbbreviatedMonthGenitiveNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UniversalSortableDateTimePattern"><code><span class="field-name">UniversalSortableDateTimePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#UniversalSortableDateTimePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SortableDateTimePattern"><code><span class="field-name">SortableDateTimePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#SortableDateTimePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RFC1123Pattern"><code><span class="field-name">RFC1123Pattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#RFC1123Pattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CalendarWeekRule"><code><span class="field-name">CalendarWeekRule</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#CalendarWeekRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Calendar"><code><span class="field-name">Calendar</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/Calendar/" class="type-link">Calendar</a></code><a class="header-anchor" href="#Calendar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FirstDayOfWeek"><code><span class="field-name">FirstDayOfWeek</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#FirstDayOfWeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FullDateTimePattern"><code><span class="field-name">FullDateTimePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#FullDateTimePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="YearMonthPattern"><code><span class="field-name">YearMonthPattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#YearMonthPattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MonthDayPattern"><code><span class="field-name">MonthDayPattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#MonthDayPattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LongTimePattern"><code><span class="field-name">LongTimePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#LongTimePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ShortTimePattern"><code><span class="field-name">ShortTimePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ShortTimePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ShortDatePattern"><code><span class="field-name">ShortDatePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ShortDatePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LongDatePattern"><code><span class="field-name">LongDatePattern</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#LongDatePattern"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TimeSeparator"><code><span class="field-name">TimeSeparator</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#TimeSeparator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DateSeparator"><code><span class="field-name">DateSeparator</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#DateSeparator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PMDesignator"><code><span class="field-name">PMDesignator</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#PMDesignator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AMDesignator"><code><span class="field-name">AMDesignator</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#AMDesignator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MonthNames"><code><span class="field-name">MonthNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#MonthNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DayNames"><code><span class="field-name">DayNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#DayNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AbbreviatedMonthNames"><code><span class="field-name">AbbreviatedMonthNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#AbbreviatedMonthNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AbbreviatedDayNames"><code><span class="field-name">AbbreviatedDayNames</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#AbbreviatedDayNames"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFormat"><code><span class="field-name">GetFormat</span><span class="parenthesis">(</span><span class="arg-name">formatType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `formatType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAbbreviatedEraName"><code><span class="field-name">GetAbbreviatedEraName</span><span class="parenthesis">(</span><span class="arg-name">era</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetAbbreviatedEraName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `era` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAbbreviatedMonthName"><code><span class="field-name">GetAbbreviatedMonthName</span><span class="parenthesis">(</span><span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetAbbreviatedMonthName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `month` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEra"><code><span class="field-name">GetEra</span><span class="parenthesis">(</span><span class="arg-name">eraName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetEra"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eraName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEraName"><code><span class="field-name">GetEraName</span><span class="parenthesis">(</span><span class="arg-name">era</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetEraName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `era` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMonthName"><code><span class="field-name">GetMonthName</span><span class="parenthesis">(</span><span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetMonthName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `month` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAllDateTimePatterns"><code><span class="field-name">GetAllDateTimePatterns</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetAllDateTimePatterns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDayName"><code><span class="field-name">GetDayName</span><span class="parenthesis">(</span><span class="arg-name">dayofweek</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetDayName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dayofweek` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAbbreviatedDayName"><code><span class="field-name">GetAbbreviatedDayName</span><span class="parenthesis">(</span><span class="arg-name">dayofweek</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetAbbreviatedDayName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dayofweek` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetShortestDayName"><code><span class="field-name">GetShortestDayName</span><span class="parenthesis">(</span><span class="arg-name">dayOfWeek</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetShortestDayName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `dayOfWeek` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAllDateTimePatterns"><code><span class="field-name">SetAllDateTimePatterns</span><span class="parenthesis">(</span><span class="arg-name">patterns</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAllDateTimePatterns"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `patterns` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[String](/api-docs/unity/String/)> |
| `format` | [cs.types.Char16](/api-docs/unity/cs/types/Char16/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

