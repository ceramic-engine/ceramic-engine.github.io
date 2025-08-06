---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: AppDomainManager
target: Unity
permalink: api-docs/unity/cs/system/AppDomainManager/
---

# AppDomainManager

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">MarshalByRefObject</a> → <strong>cs.system.AppDomainManager</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="CreateDomainHelper"><code><span class="field-name">CreateDomainHelper</span><span class="parenthesis">(</span><span class="arg-name">friendlyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">securityInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="operator">,</span> <span class="arg-name">appDomainInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomainSetup/" class="type-link">AppDomainSetup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomain/" class="type-link">AppDomain</a></code><a class="header-anchor" href="#CreateDomainHelper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `friendlyName` | [String](/api-docs/unity/String/) |
| `securityInfo` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |
| `appDomainInfo` | [AppDomainSetup](/api-docs/unity/cs/system/AppDomainSetup/) |

| Returns |
|---------|
| [AppDomain](/api-docs/unity/cs/system/AppDomain/) |

## Instance Members

<div class="signature field-var no-description" id="InitializationFlags"><code><span class="field-name">InitializationFlags</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#InitializationFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HostSecurityManager"><code><span class="field-name">HostSecurityManager</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/HostSecurityManager/" class="type-link">cs.system.security.HostSecurityManager</a></code><a class="header-anchor" href="#HostSecurityManager"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HostExecutionContextManager"><code><span class="field-name">HostExecutionContextManager</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/threading/HostExecutionContextManager/" class="type-link">cs.system.threading.HostExecutionContextManager</a></code><a class="header-anchor" href="#HostExecutionContextManager"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EntryAssembly"><code><span class="field-name">EntryAssembly</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">cs.system.reflection.Assembly</a></code><a class="header-anchor" href="#EntryAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ApplicationActivator"><code><span class="field-name">ApplicationActivator</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/hosting/ApplicationActivator/" class="type-link">cs.system.runtime.hosting.ApplicationActivator</a></code><a class="header-anchor" href="#ApplicationActivator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateDomain"><code><span class="field-name">CreateDomain</span><span class="parenthesis">(</span><span class="arg-name">friendlyName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">securityInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="operator">,</span> <span class="arg-name">appDomainInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomainSetup/" class="type-link">AppDomainSetup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomain/" class="type-link">AppDomain</a></code><a class="header-anchor" href="#CreateDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `friendlyName` | [String](/api-docs/unity/String/) |
| `securityInfo` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |
| `appDomainInfo` | [AppDomainSetup](/api-docs/unity/cs/system/AppDomainSetup/) |

| Returns |
|---------|
| [AppDomain](/api-docs/unity/cs/system/AppDomain/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="InitializeNewDomain"><code><span class="field-name">InitializeNewDomain</span><span class="parenthesis">(</span><span class="arg-name">appDomainInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/AppDomainSetup/" class="type-link">AppDomainSetup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#InitializeNewDomain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `appDomainInfo` | [AppDomainSetup](/api-docs/unity/cs/system/AppDomainSetup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CheckSecuritySettings"><code><span class="field-name">CheckSecuritySettings</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityState/" class="type-link">cs.system.security.SecurityState</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CheckSecuritySettings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `state` | [cs.system.security.SecurityState](/api-docs/unity/cs/system/security/SecurityState/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

