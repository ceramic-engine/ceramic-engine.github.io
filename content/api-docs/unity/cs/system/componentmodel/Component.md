---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Component
target: Unity
permalink: api-docs/unity/cs/system/componentmodel/Component/
---

# Component

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <strong>cs.system.componentmodel.Component</strong> (extern class) → <a href="/api-docs/unity/cs/system/diagnostics/Process/">cs.system.diagnostics.Process</a>, <a href="/api-docs/unity/cs/system/diagnostics/ProcessModule/">cs.system.diagnostics.ProcessModule</a>, <a href="/api-docs/unity/cs/system/diagnostics/ProcessThread/">cs.system.diagnostics.ProcessThread</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/IDisposable/">cs.system.IDisposable</a>, <a href="/api-docs/unity/cs/system/componentmodel/IComponent/">IComponent</a></div>

## Instance Members

<div class="signature field-var no-description" id="Disposed"><code><span class="field-name">Disposed</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">cs.system.EventHandler</a></code><a class="header-anchor" href="#Disposed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Events"><code><span class="field-name">Events</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/componentmodel/EventHandlerList/" class="type-link">EventHandlerList</a></code><a class="header-anchor" href="#Events"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DesignMode"><code><span class="field-name">DesignMode</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#DesignMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Container"><code><span class="field-name">Container</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/componentmodel/IContainer/" class="type-link">IContainer</a></code><a class="header-anchor" href="#Container"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Site"><code><span class="field-name">Site</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/componentmodel/ISite/" class="type-link">ISite</a></code><a class="header-anchor" href="#Site"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="CanRaiseEvents"><code><span class="field-name">CanRaiseEvents</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CanRaiseEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_Disposed"><code><span class="field-name">add_Disposed</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">cs.system.EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_Disposed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.system.EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_Disposed"><code><span class="field-name">remove_Disposed</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">cs.system.EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_Disposed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.system.EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Dispose"><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetService"><code><span class="field-name">GetService</span><span class="parenthesis">(</span><span class="arg-name">service</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#GetService"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `service` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

