---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: HostSecurityManager
target: Unity
permalink: api-docs/unity/cs/system/security/HostSecurityManager/
---

# HostSecurityManager

<div class="type-hierarchy"><strong>cs.system.security.HostSecurityManager</strong> (extern class)</div>

## Instance Members

<div class="signature field-var no-description" id="Flags"><code><span class="field-name">Flags</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Flags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DomainPolicy"><code><span class="field-name">DomainPolicy</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyLevel/" class="type-link">cs.system.security.policy.PolicyLevel</a></code><a class="header-anchor" href="#DomainPolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="DetermineApplicationTrust"><code><span class="field-name">DetermineApplicationTrust</span><span class="parenthesis">(</span><span class="arg-name">applicationEvidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="operator">,</span> <span class="arg-name">activatorEvidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="operator">,</span> <span class="arg-name">context</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/TrustManagerContext/" class="type-link">cs.system.security.policy.TrustManagerContext</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/ApplicationTrust/" class="type-link">cs.system.security.policy.ApplicationTrust</a></code><a class="header-anchor" href="#DetermineApplicationTrust"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `applicationEvidence` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |
| `activatorEvidence` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |
| `context` | [cs.system.security.policy.TrustManagerContext](/api-docs/unity/cs/system/security/policy/TrustManagerContext/) |

| Returns |
|---------|
| [cs.system.security.policy.ApplicationTrust](/api-docs/unity/cs/system/security/policy/ApplicationTrust/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ProvideAppDomainEvidence"><code><span class="field-name">ProvideAppDomainEvidence</span><span class="parenthesis">(</span><span class="arg-name">inputEvidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a></code><a class="header-anchor" href="#ProvideAppDomainEvidence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inputEvidence` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ProvideAssemblyEvidence"><code><span class="field-name">ProvideAssemblyEvidence</span><span class="parenthesis">(</span><span class="arg-name">loadedAssembly</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/Assembly/" class="type-link">cs.system.reflection.Assembly</a><span class="operator">,</span> <span class="arg-name">inputEvidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a></code><a class="header-anchor" href="#ProvideAssemblyEvidence"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `loadedAssembly` | [cs.system.reflection.Assembly](/api-docs/unity/cs/system/reflection/Assembly/) |
| `inputEvidence` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolvePolicy"><code><span class="field-name">ResolvePolicy</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">cs.system.security.policy.Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/PermissionSet/" class="type-link">PermissionSet</a></code><a class="header-anchor" href="#ResolvePolicy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [cs.system.security.policy.Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

