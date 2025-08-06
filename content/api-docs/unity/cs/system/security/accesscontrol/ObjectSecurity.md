---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ObjectSecurity
target: Unity
permalink: api-docs/unity/cs/system/security/accesscontrol/ObjectSecurity/
---

# ObjectSecurity

<div class="type-hierarchy"><strong>cs.system.security.accesscontrol.ObjectSecurity</strong> (extern class) → <a href="/api-docs/unity/cs/system/security/accesscontrol/CommonObjectSecurity/">CommonObjectSecurity</a></div>

## Static Members

<div class="signature field-method no-description" id="IsSddlConversionSupported"><code><span class="field-name">IsSddlConversionSupported</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSddlConversionSupported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

## Instance Members

<div class="signature field-var no-description" id="OwnerModified"><code><span class="field-name">OwnerModified</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#OwnerModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsDS"><code><span class="field-name">IsDS</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsDS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsContainer"><code><span class="field-name">IsContainer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsContainer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="GroupModified"><code><span class="field-name">GroupModified</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#GroupModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AuditRulesModified"><code><span class="field-name">AuditRulesModified</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#AuditRulesModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AccessRulesModified"><code><span class="field-name">AccessRulesModified</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#AccessRulesModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AreAuditRulesProtected"><code><span class="field-name">AreAuditRulesProtected</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#AreAuditRulesProtected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AreAuditRulesCanonical"><code><span class="field-name">AreAuditRulesCanonical</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#AreAuditRulesCanonical"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AreAccessRulesProtected"><code><span class="field-name">AreAccessRulesProtected</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#AreAccessRulesProtected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="AreAccessRulesCanonical"><code><span class="field-name">AreAccessRulesCanonical</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#AreAccessRulesCanonical"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

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

<div class="signature field-method no-description" id="GetGroup"><code><span class="field-name">GetGroup</span><span class="parenthesis">(</span><span class="arg-name">targetType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a></code><a class="header-anchor" href="#GetGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `targetType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetOwner"><code><span class="field-name">GetOwner</span><span class="parenthesis">(</span><span class="arg-name">targetType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a></code><a class="header-anchor" href="#GetOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `targetType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSecurityDescriptorBinaryForm"><code><span class="field-name">GetSecurityDescriptorBinaryForm</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetSecurityDescriptorBinaryForm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetSecurityDescriptorSddlForm"><code><span class="field-name">GetSecurityDescriptorSddlForm</span><span class="parenthesis">(</span><span class="arg-name">includeSections</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#GetSecurityDescriptorSddlForm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `includeSections` | Anonymous |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ModifyAccessRule"><code><span class="field-name">ModifyAccessRule</span><span class="parenthesis">(</span><span class="arg-name">modification</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AccessRule/" class="type-link">AccessRule</a><span class="operator">,</span> <span class="arg-name">modified</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ModifyAccessRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `modification` | Anonymous |
| `rule` | [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) |
| `modified` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ModifyAuditRule"><code><span class="field-name">ModifyAuditRule</span><span class="parenthesis">(</span><span class="arg-name">modification</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">rule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/accesscontrol/AuditRule/" class="type-link">AuditRule</a><span class="operator">,</span> <span class="arg-name">modified</span><span class="operator">:</span> <a href="/api-docs/unity/cs/Out/" class="type-link">cs.Out</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ModifyAuditRule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `modification` | Anonymous |
| `rule` | [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) |
| `modified` | [cs.Out](/api-docs/unity/cs/Out/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="PurgeAccessRules"><code><span class="field-name">PurgeAccessRules</span><span class="parenthesis">(</span><span class="arg-name">identity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#PurgeAccessRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identity` | [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="PurgeAuditRules"><code><span class="field-name">PurgeAuditRules</span><span class="parenthesis">(</span><span class="arg-name">identity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#PurgeAuditRules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identity` | [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAccessRuleProtection"><code><span class="field-name">SetAccessRuleProtection</span><span class="parenthesis">(</span><span class="arg-name">isProtected</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">preserveInheritance</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAccessRuleProtection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `isProtected` | [Bool](/api-docs/unity/Bool/) |
| `preserveInheritance` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetAuditRuleProtection"><code><span class="field-name">SetAuditRuleProtection</span><span class="parenthesis">(</span><span class="arg-name">isProtected</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">preserveInheritance</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetAuditRuleProtection"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `isProtected` | [Bool](/api-docs/unity/Bool/) |
| `preserveInheritance` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetGroup"><code><span class="field-name">SetGroup</span><span class="parenthesis">(</span><span class="arg-name">identity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetGroup"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identity` | [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetOwner"><code><span class="field-name">SetOwner</span><span class="parenthesis">(</span><span class="arg-name">identity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/principal/IdentityReference/" class="type-link">cs.system.security.principal.IdentityReference</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetOwner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `identity` | [cs.system.security.principal.IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetSecurityDescriptorBinaryForm"><code><span class="field-name">SetSecurityDescriptorBinaryForm</span><span class="parenthesis">(</span><span class="arg-name">binaryForm</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetSecurityDescriptorBinaryForm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `binaryForm` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetSecurityDescriptorSddlForm"><code><span class="field-name">SetSecurityDescriptorSddlForm</span><span class="parenthesis">(</span><span class="arg-name">sddlForm</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetSecurityDescriptorSddlForm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `sddlForm` | [String](/api-docs/unity/String/) |

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

<div class="signature field-method no-description" id="Persist"><code><span class="field-name">Persist</span><span class="parenthesis">(</span><span class="arg-name">handle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/interopservices/SafeHandle/" class="type-link">cs.system.runtime.interopservices.SafeHandle</a><span class="operator">,</span> <span class="arg-name">includeSections</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Persist"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `handle` | [cs.system.runtime.interopservices.SafeHandle](/api-docs/unity/cs/system/runtime/interopservices/SafeHandle/) |
| `includeSections` | Anonymous |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadLock"><code><span class="field-name">ReadLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ReadLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ReadUnlock"><code><span class="field-name">ReadUnlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ReadUnlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteLock"><code><span class="field-name">WriteLock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteLock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="WriteUnlock"><code><span class="field-name">WriteUnlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WriteUnlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">isContainer</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">isDS</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `isContainer` | [Bool](/api-docs/unity/Bool/) |
| `isDS` | [Bool](/api-docs/unity/Bool/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

