---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: EventWaitHandleSecurity
target: Unity
permalink: api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleSecurity/
---

# EventWaitHandleSecurity

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/security/accesscontrol/ObjectSecurity/">ObjectSecurity</a> → <a href="/api-docs/unity/cs/system/security/accesscontrol/CommonObjectSecurity/">CommonObjectSecurity</a> → <a href="/api-docs/unity/cs/system/security/accesscontrol/NativeObjectSecurity/">NativeObjectSecurity</a> → <strong>cs.system.security.accesscontrol.EventWaitHandleSecurity</strong> (extern final class)</div>

## Instance Members

<div class="signature field-var no-description" id="AuditRuleType"><code><span class="field-name">AuditRuleType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#AuditRuleType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AccessRuleType"><code><span class="field-name">AccessRuleType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#AccessRuleType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AccessRightType"><code><span class="field-name">AccessRightType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a></code><a class="header-anchor" href="#AccessRightType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AccessRuleFactory"><code><span class="field-name">AccessRuleFactory</span><span class="parenthesis">(</span><span class="arg-name">identityReference</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a><span class="operator">,</span> <span class="arg-name">accessMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">isInherited</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">inheritanceFlags</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">propagationFlags</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a></code><a class="header-anchor" href="#AccessRuleFactory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identityReference` | [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |
| `accessMask` | [Int](/api-docs/unity/Int/) |
| `isInherited` | [Bool](/api-docs/unity/Bool/) |
| `inheritanceFlags` | Anonymous |
| `propagationFlags` | Anonymous |
| `type` | Anonymous |

| Returns |
|---------|
| [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddAccessRule"><code><span class="field-name">AddAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/" class="type-link">EventWaitHandleAccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAccessRule"><code><span class="field-name">RemoveAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/" class="type-link">EventWaitHandleAccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#RemoveAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAccessRuleAll"><code><span class="field-name">RemoveAccessRuleAll</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/" class="type-link">EventWaitHandleAccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAccessRuleAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAccessRuleSpecific"><code><span class="field-name">RemoveAccessRuleSpecific</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/" class="type-link">EventWaitHandleAccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAccessRuleSpecific"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ResetAccessRule"><code><span class="field-name">ResetAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/" class="type-link">EventWaitHandleAccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ResetAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessRule"><code><span class="field-name">SetAccessRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/" class="type-link">EventWaitHandleAccessRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AuditRuleFactory"><code><span class="field-name">AuditRuleFactory</span><span class="parenthesis">(</span><span class="arg-name">identityReference</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a><span class="operator">,</span> <span class="arg-name">accessMask</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">isInherited</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">inheritanceFlags</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">propagationFlags</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">flags</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a></code><a class="header-anchor" href="#AuditRuleFactory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identityReference` | [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |
| `accessMask` | [Int](/api-docs/unity/Int/) |
| `isInherited` | [Bool](/api-docs/unity/Bool/) |
| `inheritanceFlags` | Anonymous |
| `propagationFlags` | Anonymous |
| `flags` | Anonymous |

| Returns |
|---------|
| [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddAuditRule"><code><span class="field-name">AddAuditRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/" class="type-link">EventWaitHandleAuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#AddAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAuditRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAuditRule"><code><span class="field-name">RemoveAuditRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/" class="type-link">EventWaitHandleAuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#RemoveAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAuditRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAuditRuleAll"><code><span class="field-name">RemoveAuditRuleAll</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/" class="type-link">EventWaitHandleAuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAuditRuleAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAuditRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemoveAuditRuleSpecific"><code><span class="field-name">RemoveAuditRuleSpecific</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/" class="type-link">EventWaitHandleAuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RemoveAuditRuleSpecific"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAuditRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAuditRule"><code><span class="field-name">SetAuditRule</span><span class="parenthesis">(</span><span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/" class="type-link">EventWaitHandleAuditRule</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rule` | [EventWaitHandleAuditRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

