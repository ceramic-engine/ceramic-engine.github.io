---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: CodeGroup
target: Unity
permalink: api-docs/unity/cs/system/security/policy/CodeGroup/
---

# CodeGroup

<div class="type-hierarchy"><strong>cs.system.security.policy.CodeGroup</strong> (extern class)</div>

## Instance Members

<div class="signature field-var no-description" id="PermissionSetName"><code><span class="field-name">PermissionSetName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#PermissionSetName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AttributeString"><code><span class="field-name">AttributeString</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#AttributeString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Children"><code><span class="field-name">Children</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IList/" class="type-link">cs.system.collections.IList</a></code><a class="header-anchor" href="#Children"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Name"><code><span class="field-name">Name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MembershipCondition"><code><span class="field-name">MembershipCondition</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/IMembershipCondition/" class="type-link">IMembershipCondition</a></code><a class="header-anchor" href="#MembershipCondition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Description"><code><span class="field-name">Description</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#Description"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PolicyStatement"><code><span class="field-name">PolicyStatement</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyStatement/" class="type-link">PolicyStatement</a></code><a class="header-anchor" href="#PolicyStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MergeLogic"><code><span class="field-name">MergeLogic</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#MergeLogic"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Copy"><code><span class="field-name">Copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CodeGroup</a></code><a class="header-anchor" href="#Copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [CodeGroup](/api-docs/unity/cs/system/security/policy/CodeGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Resolve"><code><span class="field-name">Resolve</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyStatement/" class="type-link">PolicyStatement</a></code><a class="header-anchor" href="#Resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [PolicyStatement](/api-docs/unity/cs/system/security/policy/PolicyStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResolveMatchingCodeGroups"><code><span class="field-name">ResolveMatchingCodeGroups</span><span class="parenthesis">(</span><span class="arg-name">evidence</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/Evidence/" class="type-link">Evidence</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">CodeGroup</a></code><a class="header-anchor" href="#ResolveMatchingCodeGroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `evidence` | [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) |

| Returns |
|---------|
| [CodeGroup](/api-docs/unity/cs/system/security/policy/CodeGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddChild"><code><span class="field-name">AddChild</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="#" class="type-link">CodeGroup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [CodeGroup](/api-docs/unity/cs/system/security/policy/CodeGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveChild"><code><span class="field-name">RemoveChild</span><span class="parenthesis">(</span><span class="arg-name">group</span><span class="operator">:</span> <a href="#" class="type-link">CodeGroup</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `group` | [CodeGroup](/api-docs/unity/cs/system/security/policy/CodeGroup/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromXml"><code><span class="field-name">FromXml</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#FromXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ParseXml"><code><span class="field-name">ParseXml</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyLevel/" class="type-link">PolicyLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ParseXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `e` | [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |
| `level` | [PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToXml"><code><span class="field-name">ToXml</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a></code><a class="header-anchor" href="#ToXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CreateXml"><code><span class="field-name">CreateXml</span><span class="parenthesis">(</span><span class="arg-name">element</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">cs.system.security.SecurityElement</a><span class="operator">,</span> <span class="arg-name">level</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyLevel/" class="type-link">PolicyLevel</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CreateXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `element` | [cs.system.security.SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |
| `level` | [PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">membershipCondition</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/IMembershipCondition/" class="type-link">IMembershipCondition</a><span class="operator">,</span> <span class="arg-name">policy</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/policy/PolicyStatement/" class="type-link">PolicyStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `membershipCondition` | [IMembershipCondition](/api-docs/unity/cs/system/security/policy/IMembershipCondition/) |
| `policy` | [PolicyStatement](/api-docs/unity/cs/system/security/policy/PolicyStatement/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

