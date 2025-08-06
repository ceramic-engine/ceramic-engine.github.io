---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: TextWriter
target: Unity
permalink: api-docs/unity/cs/system/io/TextWriter/
---

# TextWriter

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <strong>cs.system.io.TextWriter</strong> (extern class) → <a href="/api-docs/unity/cs/system/io/StreamWriter/">StreamWriter</a>, <a href="/api-docs/unity/cs/system/io/TextWriter_NullTextWriter/">TextWriter_NullTextWriter</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IDisposable/">cs.system.IDisposable</a></div>

## Static Members

<div class="signature field-var no-description" id="Null"><code><span class="field-name">Null</span><span class="operator">:</span> <a href="#" class="type-link">TextWriter</a></code><a class="header-anchor" href="#Null"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Synchronized"><code><span class="field-name">Synchronized</span><span class="parenthesis">(</span><span class="arg-name">writer</span><span class="operator">:</span> <a href="#" class="type-link">TextWriter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">TextWriter</a></code><a class="header-anchor" href="#Synchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `writer` | [TextWriter](/api-docs/unity/cs/system/io/TextWriter/) |

| Returns |
|---------|
| [TextWriter](/api-docs/unity/cs/system/io/TextWriter/) |

## Instance Members

<div class="signature field-var no-description" id="NewLine"><code><span class="field-name">NewLine</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#NewLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FormatProvider"><code><span class="field-name">FormatProvider</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IFormatProvider/" class="type-link">cs.system.IFormatProvider</a></code><a class="header-anchor" href="#FormatProvider"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Encoding"><code><span class="field-name">Encoding</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/text/Encoding/" class="type-link">cs.system.text.Encoding</a></code><a class="header-anchor" href="#Encoding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CoreNewLine"><code><span class="field-name">CoreNewLine</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#CoreNewLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Dispose"><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="arg-name">disposing</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `disposing` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Flush"><code><span class="field-name">Flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Write"><code><span class="field-name">Write</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteLine"><code><span class="field-name">WriteLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

