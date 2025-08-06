---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: WavStream
target: Clay (Native)
permalink: api-docs/clay-native/soloud/WavStream/
---

# WavStream

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/WavStream.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/soloud/AudioSource/">AudioSource</a> → <strong>soloud.WavStream</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">WavStream</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [WavStream](/api-docs/clay-native/soloud/WavStream/) |

## Instance Members

<div class="signature field-var no-description" id="mFiletype"><code><span class="field-name">mFiletype</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#mFiletype"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mFilename"><code><span class="field-name">mFilename</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a></code><a class="header-anchor" href="#mFilename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="mSampleCount"><code><span class="field-name">mSampleCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mSampleCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="load"><code><span class="field-name">load</span><span class="parenthesis">(</span><span class="arg-name">aFilename</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#load"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aFilename` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadMem"><code><span class="field-name">loadMem</span><span class="parenthesis">(</span><span class="arg-name">aData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/UInt8/" class="type-link">cpp.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">aDataLen</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aCopy</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">aTakeOwnership</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#loadMem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `aData` | [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.UInt8](/api-docs/clay-native/cpp/UInt8/)> | |
| `aDataLen` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) | |
| `aCopy` | [Bool](/api-docs/clay-native/Bool/) | `false` |
| `aTakeOwnership` | [Bool](/api-docs/clay-native/Bool/) | `true` |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="loadToMem"><code><span class="field-name">loadToMem</span><span class="parenthesis">(</span><span class="arg-name">aFilename</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/ConstCharStar/" class="type-link">cpp.ConstCharStar</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#loadToMem"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `aFilename` | [cpp.ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLength"><code><span class="field-name">getLength</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#getLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Time](/api-docs/clay-native/soloud/Time/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:include` | "linc_soloud.h" |

