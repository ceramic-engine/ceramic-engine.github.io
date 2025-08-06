---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: EventWaitHandle
target: Unity
permalink: api-docs/unity/cs/system/threading/EventWaitHandle/
---

# EventWaitHandle

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <a href="/api-docs/unity/cs/system/threading/WaitHandle/">WaitHandle</a> → <strong>cs.system.threading.EventWaitHandle</strong> (extern class) → <a href="/api-docs/unity/cs/system/threading/ManualResetEvent/">ManualResetEvent</a></div>

## Static Members

<div class="signature field-method no-description" id="OpenExisting"><code><span class="field-name">OpenExisting</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">EventWaitHandle</a></code><a class="header-anchor" href="#OpenExisting"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [EventWaitHandle](/api-docs/unity/cs/system/threading/EventWaitHandle/) |

## Instance Members

<div class="signature field-method no-description" id="GetAccessControl"><code><span class="field-name">GetAccessControl</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleSecurity/" class="type-link">cs.system.security.accesscontrol.EventWaitHandleSecurity</a></code><a class="header-anchor" href="#GetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.accesscontrol.EventWaitHandleSecurity](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleSecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reset"><code><span class="field-name">Reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Set"><code><span class="field-name">Set</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessControl"><code><span class="field-name">SetAccessControl</span><span class="parenthesis">(</span><span class="arg-name">eventSecurity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleSecurity/" class="type-link">cs.system.security.accesscontrol.EventWaitHandleSecurity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessControl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `eventSecurity` | [cs.system.security.accesscontrol.EventWaitHandleSecurity](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleSecurity/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">initialState</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">mode</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `initialState` | [Bool](/api-docs/unity/Bool/) |
| `mode` | Anonymous |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

