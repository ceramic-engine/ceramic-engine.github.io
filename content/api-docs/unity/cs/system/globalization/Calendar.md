---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Calendar
target: Unity
permalink: api-docs/unity/cs/system/globalization/Calendar/
---

# Calendar

<div class="type-hierarchy"><strong>cs.system.globalization.Calendar</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">cs.system.ICloneable</a></div>

## Static Members

<div class="signature field-var no-description" id="CurrentEra"><code><span class="field-name">CurrentEra</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#CurrentEra"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadOnly"><code><span class="field-name">ReadOnly</span><span class="parenthesis">(</span><span class="arg-name">calendar</span><span class="operator">:</span> <a href="#" class="type-link">Calendar</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Calendar</a></code><a class="header-anchor" href="#ReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `calendar` | [Calendar](/api-docs/unity/cs/system/globalization/Calendar/) |

| Returns |
|---------|
| [Calendar](/api-docs/unity/cs/system/globalization/Calendar/) |

## Instance Members

<div class="signature field-var no-description" id="TwoDigitYearMax"><code><span class="field-name">TwoDigitYearMax</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#TwoDigitYearMax"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MinSupportedDateTime"><code><span class="field-name">MinSupportedDateTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#MinSupportedDateTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MaxSupportedDateTime"><code><span class="field-name">MaxSupportedDateTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#MaxSupportedDateTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AlgorithmType"><code><span class="field-name">AlgorithmType</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#AlgorithmType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Eras"><code><span class="field-name">Eras</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#Eras"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetLeapMonth"><code><span class="field-name">GetLeapMonth</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetLeapMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddDays"><code><span class="field-name">AddDays</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">days</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddDays"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `days` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddHours"><code><span class="field-name">AddHours</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">hours</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddHours"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `hours` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddMilliseconds"><code><span class="field-name">AddMilliseconds</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">milliseconds</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `milliseconds` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddMinutes"><code><span class="field-name">AddMinutes</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">minutes</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddMinutes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `minutes` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddMonths"><code><span class="field-name">AddMonths</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">months</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddMonths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `months` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddSeconds"><code><span class="field-name">AddSeconds</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddSeconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `seconds` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddWeeks"><code><span class="field-name">AddWeeks</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">weeks</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddWeeks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `weeks` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddYears"><code><span class="field-name">AddYears</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">years</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#AddYears"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `years` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDayOfMonth"><code><span class="field-name">GetDayOfMonth</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetDayOfMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDayOfWeek"><code><span class="field-name">GetDayOfWeek</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#GetDayOfWeek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDayOfYear"><code><span class="field-name">GetDayOfYear</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetDayOfYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDaysInMonth"><code><span class="field-name">GetDaysInMonth</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetDaysInMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |
| `month` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetDaysInYear"><code><span class="field-name">GetDaysInYear</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetDaysInYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEra"><code><span class="field-name">GetEra</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetEra"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetHour"><code><span class="field-name">GetHour</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetHour"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMilliseconds"><code><span class="field-name">GetMilliseconds</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#GetMilliseconds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMinute"><code><span class="field-name">GetMinute</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetMinute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMonth"><code><span class="field-name">GetMonth</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetMonthsInYear"><code><span class="field-name">GetMonthsInYear</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetMonthsInYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSecond"><code><span class="field-name">GetSecond</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetSecond"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetWeekOfYear"><code><span class="field-name">GetWeekOfYear</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="operator">,</span> <span class="arg-name">rule</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">firstDayOfWeek</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetWeekOfYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |
| `rule` | Anonymous |
| `firstDayOfWeek` | Anonymous |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetYear"><code><span class="field-name">GetYear</span><span class="parenthesis">(</span><span class="arg-name">time</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `time` | [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsLeapDay"><code><span class="field-name">IsLeapDay</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">day</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsLeapDay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |
| `month` | [Int](/api-docs/unity/Int/) |
| `day` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsLeapMonth"><code><span class="field-name">IsLeapMonth</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsLeapMonth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |
| `month` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsLeapYear"><code><span class="field-name">IsLeapYear</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsLeapYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToDateTime"><code><span class="field-name">ToDateTime</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">month</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">day</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">hour</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">minute</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">second</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">millisecond</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#ToDateTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |
| `month` | [Int](/api-docs/unity/Int/) |
| `day` | [Int](/api-docs/unity/Int/) |
| `hour` | [Int](/api-docs/unity/Int/) |
| `minute` | [Int](/api-docs/unity/Int/) |
| `second` | [Int](/api-docs/unity/Int/) |
| `millisecond` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [cs.system.DateTime](/api-docs/unity/cs/system/DateTime/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToFourDigitYear"><code><span class="field-name">ToFourDigitYear</span><span class="parenthesis">(</span><span class="arg-name">year</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ToFourDigitYear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `year` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

