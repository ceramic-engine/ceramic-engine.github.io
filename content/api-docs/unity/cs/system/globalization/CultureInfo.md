---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: CultureInfo
target: Unity
permalink: api-docs/unity/cs/system/globalization/CultureInfo/
---

# CultureInfo

<div class="type-hierarchy"><strong>cs.system.globalization.CultureInfo</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/ICloneable/">cs.system.ICloneable</a>, <a href="/api-docs/unity/cs/system/IFormatProvider/">cs.system.IFormatProvider</a></div>

## Static Members

<div class="signature field-var no-description" id="InstalledUICulture"><code><span class="field-name">InstalledUICulture</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#InstalledUICulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentUICulture"><code><span class="field-name">CurrentUICulture</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#CurrentUICulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CurrentCulture"><code><span class="field-name">CurrentCulture</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#CurrentCulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="InvariantCulture"><code><span class="field-name">InvariantCulture</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#InvariantCulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateSpecificCulture"><code><span class="field-name">CreateSpecificCulture</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#CreateSpecificCulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCultures"><code><span class="field-name">GetCultures</span><span class="parenthesis">(</span><span class="arg-name">types</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">CultureInfo</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetCultures"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `types` | Anonymous |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadOnly"><code><span class="field-name">ReadOnly</span><span class="parenthesis">(</span><span class="arg-name">ci</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#ReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ci` | [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

| Returns |
|---------|
| [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCultureInfo"><code><span class="field-name">GetCultureInfo</span><span class="parenthesis">(</span><span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#GetCultureInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `culture` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCultureInfoByIetfLanguageTag"><code><span class="field-name">GetCultureInfoByIetfLanguageTag</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#GetCultureInfoByIetfLanguageTag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

## Instance Members

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EnglishName"><code><span class="field-name">EnglishName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#EnglishName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DisplayName"><code><span class="field-name">DisplayName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#DisplayName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DateTimeFormat"><code><span class="field-name">DateTimeFormat</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/DateTimeFormatInfo/" class="type-link">DateTimeFormatInfo</a></code><a class="header-anchor" href="#DateTimeFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NumberFormat"><code><span class="field-name">NumberFormat</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/NumberFormatInfo/" class="type-link">NumberFormatInfo</a></code><a class="header-anchor" href="#NumberFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsNeutralCulture"><code><span class="field-name">IsNeutralCulture</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsNeutralCulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CompareInfo"><code><span class="field-name">CompareInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/CompareInfo/" class="type-link">CompareInfo</a></code><a class="header-anchor" href="#CompareInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UseUserOverride"><code><span class="field-name">UseUserOverride</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#UseUserOverride"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TwoLetterISOLanguageName"><code><span class="field-name">TwoLetterISOLanguageName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#TwoLetterISOLanguageName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ThreeLetterWindowsLanguageName"><code><span class="field-name">ThreeLetterWindowsLanguageName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ThreeLetterWindowsLanguageName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ThreeLetterISOLanguageName"><code><span class="field-name">ThreeLetterISOLanguageName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ThreeLetterISOLanguageName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TextInfo"><code><span class="field-name">TextInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/TextInfo/" class="type-link">TextInfo</a></code><a class="header-anchor" href="#TextInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Parent"><code><span class="field-name">Parent</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#Parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="OptionalCalendars"><code><span class="field-name">OptionalCalendars</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/globalization/Calendar/" class="type-link">Calendar</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#OptionalCalendars"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Calendar"><code><span class="field-name">Calendar</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/globalization/Calendar/" class="type-link">Calendar</a></code><a class="header-anchor" href="#Calendar"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NativeName"><code><span class="field-name">NativeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#NativeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="LCID"><code><span class="field-name">LCID</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#LCID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="KeyboardLayoutId"><code><span class="field-name">KeyboardLayoutId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#KeyboardLayoutId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IetfLanguageTag"><code><span class="field-name">IetfLanguageTag</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#IetfLanguageTag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CultureTypes"><code><span class="field-name">CultureTypes</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#CultureTypes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetConsoleFallbackUICulture"><code><span class="field-name">GetConsoleFallbackUICulture</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CultureInfo</a></code><a class="header-anchor" href="#GetConsoleFallbackUICulture"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ClearCachedData"><code><span class="field-name">ClearCachedData</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ClearCachedData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Clone"><code><span class="field-name">Clone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#Clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetFormat"><code><span class="field-name">GetFormat</span><span class="parenthesis">(</span><span class="arg-name">formatType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `formatType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">culture</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `culture` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

