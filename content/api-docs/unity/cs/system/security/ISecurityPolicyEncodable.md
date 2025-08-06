---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ISecurityPolicyEncodable
target: Unity
permalink: api-docs/unity/cs/system/security/ISecurityPolicyEncodable/
---

# ISecurityPolicyEncodable

<div class="type-hierarchy"><strong>cs.system.security.ISecurityPolicyEncodable</strong> (extern interface) → <a href="/api-docs/unity/cs/system/security/policy/IMembershipCondition/">cs.system.security.policy.IMembershipCondition</a>, <a href="/api-docs/unity/cs/system/security/policy/PolicyStatement/">cs.system.security.policy.PolicyStatement</a>, <a href="/api-docs/unity/cs/system/security/policy/StrongNameMembershipCondition/">cs.system.security.policy.StrongNameMembershipCondition</a></div>

## Instance Members

<div class="signature field-method no-description" id="FromXml"><code><span class="field-name">FromXml</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">SecurityElement</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyLevel/" class="type-link">cs.system.security.policy.PolicyLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#FromXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |
| `level` | [cs.system.security.policy.PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToXml"><code><span class="field-name">ToXml</span><span class="parenthesis">(</span><span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyLevel/" class="type-link">cs.system.security.policy.PolicyLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">SecurityElement</a></code><a class="header-anchor" href="#ToXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `level` | [cs.system.security.policy.PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) |

| Returns |
|---------|
| [SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

