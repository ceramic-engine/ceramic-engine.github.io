---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: PolicyLevel
target: Unity
permalink: api-docs/unity/cs/system/security/policy/PolicyLevel/
---

# PolicyLevel

<div class="type-hierarchy"><strong>cs.system.security.policy.PolicyLevel</strong> (extern final class)</div>

## Static Members

<div class="signature field-method no-description" id="CreateAppDomainLevel"><code><span class="field-name">CreateAppDomainLevel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PolicyLevel</a></code><a class="header-anchor" href="#CreateAppDomainLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) |

## Instance Members

<div class="signature field-var no-description" id="Type"><code><span class="field-name">Type</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#Type"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="StoreLocation"><code><span class="field-name">StoreLocation</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#StoreLocation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="RootCodeGroup"><code><span class="field-name">RootCodeGroup</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/CodeGroup/" class="type-link">CodeGroup</a></code><a class="header-anchor" href="#RootCodeGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NamedPermissionSets"><code><span class="field-name">NamedPermissionSets</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IList/" class="type-link">cs.system.collections.IList</a></code><a class="header-anchor" href="#NamedPermissionSets"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Label"><code><span class="field-name">Label</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Label"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="FullTrustAssemblies"><code><span class="field-name">FullTrustAssemblies</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IList/" class="type-link">cs.system.collections.IList</a></code><a class="header-anchor" href="#FullTrustAssemblies"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddFullTrustAssembly"><code><span class="field-name">AddFullTrustAssembly</span><span class="parenthesis">(</span><span class="arg-name">sn</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/StrongName/" class="type-link">StrongName</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddFullTrustAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sn` | [StrongName](/api-docs/unity/cs/system/security/policy/StrongName/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddNamedPermissionSet"><code><span class="field-name">AddNamedPermissionSet</span><span class="parenthesis">(</span><span class="arg-name">permSet</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/NamedPermissionSet/" class="type-link">cs.system.security.NamedPermissionSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddNamedPermissionSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `permSet` | [cs.system.security.NamedPermissionSet](/api-docs/unity/cs/system/security/NamedPermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ChangeNamedPermissionSet"><code><span class="field-name">ChangeNamedPermissionSet</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">pSet</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/PermissionSet/" class="type-link">cs.system.security.PermissionSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/NamedPermissionSet/" class="type-link">cs.system.security.NamedPermissionSet</a></code><a class="header-anchor" href="#ChangeNamedPermissionSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `pSet` | [cs.system.security.PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

| Returns |
|---------|
| [cs.system.security.NamedPermissionSet](/api-docs/unity/cs/system/security/NamedPermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromXml"><code><span class="field-name">FromXml</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#FromXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetNamedPermissionSet"><code><span class="field-name">GetNamedPermissionSet</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/NamedPermissionSet/" class="type-link">cs.system.security.NamedPermissionSet</a></code><a class="header-anchor" href="#GetNamedPermissionSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.system.security.NamedPermissionSet](/api-docs/unity/cs/system/security/NamedPermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Recover"><code><span class="field-name">Recover</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Recover"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveFullTrustAssembly"><code><span class="field-name">RemoveFullTrustAssembly</span><span class="parenthesis">(</span><span class="arg-name">sn</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/StrongName/" class="type-link">StrongName</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveFullTrustAssembly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sn` | [StrongName](/api-docs/unity/cs/system/security/policy/StrongName/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveNamedPermissionSet"><code><span class="field-name">RemoveNamedPermissionSet</span><span class="parenthesis">(</span><span class="arg-name">permSet</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/NamedPermissionSet/" class="type-link">cs.system.security.NamedPermissionSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/NamedPermissionSet/" class="type-link">cs.system.security.NamedPermissionSet</a></code><a class="header-anchor" href="#RemoveNamedPermissionSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `permSet` | [cs.system.security.NamedPermissionSet](/api-docs/unity/cs/system/security/NamedPermissionSet/) |

| Returns |
|---------|
| [cs.system.security.NamedPermissionSet](/api-docs/unity/cs/system/security/NamedPermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Reset"><code><span class="field-name">Reset</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Resolve"><code><span class="field-name">Resolve</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyStatement/" class="type-link">PolicyStatement</a></code><a class="header-anchor" href="#Resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [PolicyStatement](/api-docs/unity/cs/system/security/policy/PolicyStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveMatchingCodeGroups"><code><span class="field-name">ResolveMatchingCodeGroups</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/CodeGroup/" class="type-link">CodeGroup</a></code><a class="header-anchor" href="#ResolveMatchingCodeGroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [CodeGroup](/api-docs/unity/cs/system/security/policy/CodeGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToXml"><code><span class="field-name">ToXml</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a></code><a class="header-anchor" href="#ToXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

