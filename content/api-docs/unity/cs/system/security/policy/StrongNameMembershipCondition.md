---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: StrongNameMembershipCondition
target: Unity
permalink: api-docs/unity/cs/system/security/policy/StrongNameMembershipCondition/
---

# StrongNameMembershipCondition

<div class="type-hierarchy"><strong>cs.system.security.policy.StrongNameMembershipCondition</strong> (extern final class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/security/ISecurityEncodable/">cs.system.security.ISecurityEncodable</a>, <a href="/api-docs/unity/cs/system/security/ISecurityPolicyEncodable/">cs.system.security.ISecurityPolicyEncodable</a>, <a href="/api-docs/unity/cs/system/security/policy/IConstantMembershipCondition/">IConstantMembershipCondition</a>, <a href="/api-docs/unity/cs/system/security/policy/IMembershipCondition/">IMembershipCondition</a></div>

## Instance Members

<div class="signature field-var no-description" id="PublicKey"><code><span class="field-name">PublicKey</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/permissions/StrongNamePublicKeyBlob/" class="type-link">cs.system.security.permissions.StrongNamePublicKeyBlob</a></code><a class="header-anchor" href="#PublicKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Version"><code><span class="field-name">Version</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Version/" class="type-link">cs.system.Version</a></code><a class="header-anchor" href="#Version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Check"><code><span class="field-name">Check</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Check"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Copy"><code><span class="field-name">Copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/IMembershipCondition/" class="type-link">IMembershipCondition</a></code><a class="header-anchor" href="#Copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [IMembershipCondition](/api-docs/unity/cs/system/security/policy/IMembershipCondition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromXml"><code><span class="field-name">FromXml</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#FromXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToXml"><code><span class="field-name">ToXml</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a></code><a class="header-anchor" href="#ToXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">blob</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/permissions/StrongNamePublicKeyBlob/" class="type-link">cs.system.security.permissions.StrongNamePublicKeyBlob</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">version</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Version/" class="type-link">cs.system.Version</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `blob` | [cs.system.security.permissions.StrongNamePublicKeyBlob](/api-docs/unity/cs/system/security/permissions/StrongNamePublicKeyBlob/) |
| `name` | [String](/api-docs/unity/String/) |
| `version` | [cs.system.Version](/api-docs/unity/cs/system/Version/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

