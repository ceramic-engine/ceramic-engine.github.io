---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: CommonObjectSecurity
target: Unity
permalink: api-docs/unity/cs/system/security/accesscontrol/CommonObjectSecurity/
---

# CommonObjectSecurity

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/security/accesscontrol/ObjectSecurity/">ObjectSecurity</a> → <strong>cs.system.security.accesscontrol.CommonObjectSecurity</strong> (extern class) → <a href="/api-docs/unity/cs/system/security/accesscontrol/NativeObjectSecurity/">NativeObjectSecurity</a></div>

## Instance Members

<div class="signature field-method no-description" id="GetAccessRules"><code><span class="field-name">GetAccessRules</span><span class="parenthesis">(</span><span class="arg-name">includeExplicit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">includeInherited</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">targetType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuthorizationRuleCollection/" class="type-link">AuthorizationRuleCollection</a></code><a class="header-anchor" href="#GetAccessRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `includeExplicit` | [Bool](/api-docs/unity/Bool/) |
| `includeInherited` | [Bool](/api-docs/unity/Bool/) |
| `targetType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [AuthorizationRuleCollection](/api-docs/unity/cs/system/security/accesscontrol/AuthorizationRuleCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetAuditRules"><code><span class="field-name">GetAuditRules</span><span class="parenthesis">(</span><span class="arg-name">includeExplicit</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">includeInherited</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">targetType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuthorizationRuleCollection/" class="type-link">AuthorizationRuleCollection</a></code><a class="header-anchor" href="#GetAuditRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `includeExplicit` | [Bool](/api-docs/unity/Bool/) |
| `includeInherited` | [Bool](/api-docs/unity/Bool/) |
| `targetType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [AuthorizationRuleCollection](/api-docs/unity/cs/system/security/accesscontrol/AuthorizationRuleCollection/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddAccessRule"><code><span class="field-name">AddAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAccessRule"><code><span class="field-name">RemoveAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#RemoveAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAccessRuleAll"><code><span class="field-name">RemoveAccessRuleAll</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAccessRuleAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAccessRuleSpecific"><code><span class="field-name">RemoveAccessRuleSpecific</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAccessRuleSpecific"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResetAccessRule"><code><span class="field-name">ResetAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ResetAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessRule"><code><span class="field-name">SetAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ModifyAccess"><code><span class="field-name">ModifyAccess</span><span class="parenthesis">(</span><span class="arg-name">modification</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="operator">,</span> <span class="arg-name">modified</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ModifyAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `modification` | Anonymous |
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |
| `modified` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddAuditRule"><code><span class="field-name">AddAuditRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAuditRule"><code><span class="field-name">RemoveAuditRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#RemoveAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAuditRuleAll"><code><span class="field-name">RemoveAuditRuleAll</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAuditRuleAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAuditRuleSpecific"><code><span class="field-name">RemoveAuditRuleSpecific</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAuditRuleSpecific"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAuditRule"><code><span class="field-name">SetAuditRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ModifyAudit"><code><span class="field-name">ModifyAudit</span><span class="parenthesis">(</span><span class="arg-name">modification</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="operator">,</span> <span class="arg-name">modified</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ModifyAudit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `modification` | Anonymous |
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |
| `modified` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">isContainer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `isContainer` | [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

