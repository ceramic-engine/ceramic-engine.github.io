---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Mutex
target: Unity
permalink: api-docs/unity/cs/system/threading/Mutex/
---

# Mutex

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <a href="/api-docs/unity/cs/system/threading/WaitHandle/">WaitHandle</a> → <strong>cs.system.threading.Mutex</strong> (extern final class)</div>

## Static Members

<div class="signature field-method no-description" id="OpenExisting"><code><span class="field-name">OpenExisting</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Mutex</a></code><a class="header-anchor" href="#OpenExisting"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Mutex](/api-docs/unity/cs/system/threading/Mutex/) |

## Instance Members

<div class="signature field-method no-description" id="GetAccessControl"><code><span class="field-name">GetAccessControl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/MutexSecurity/" class="type-link">cs.system.security.accesscontrol.MutexSecurity</a></code><a class="header-anchor" href="#GetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.accesscontrol.MutexSecurity](/api-docs/unity/cs/system/security/accesscontrol/MutexSecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReleaseMutex"><code><span class="field-name">ReleaseMutex</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ReleaseMutex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessControl"><code><span class="field-name">SetAccessControl</span><span class="parenthesis">(</span><span class="arg-name">mutexSecurity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/MutexSecurity/" class="type-link">cs.system.security.accesscontrol.MutexSecurity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `mutexSecurity` | [cs.system.security.accesscontrol.MutexSecurity](/api-docs/unity/cs/system/security/accesscontrol/MutexSecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

