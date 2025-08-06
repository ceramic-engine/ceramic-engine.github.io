---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: PermissionSet
target: Unity
permalink: api-docs/unity/cs/system/security/PermissionSet/
---

# PermissionSet

<div class="type-hierarchy"><strong>cs.system.security.PermissionSet</strong> (extern class) → <a href="/api-docs/unity/cs/system/security/NamedPermissionSet/">NamedPermissionSet</a></div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/collections/ICollection/">cs.system.collections.ICollection</a>, <a href="/api-docs/unity/cs/system/collections/IEnumerable/">cs.system.collections.IEnumerable</a>, <a href="/api-docs/unity/cs/system/runtime/serialization/IDeserializationCallback/">cs.system.runtime.serialization.IDeserializationCallback</a>, <a href="/api-docs/unity/cs/system/security/ISecurityEncodable/">ISecurityEncodable</a>, <a href="/api-docs/unity/cs/system/security/IStackWalk/">IStackWalk</a></div>

## Static Members

<div class="signature field-method no-description" id="ConvertPermissionSet"><code><span class="field-name">ConvertPermissionSet</span><span class="parenthesis">(</span><span class="arg-name">inFormat</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">inData</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">outFormat</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ConvertPermissionSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `inFormat` | [String](/api-docs/unity/String/) |
| `inData` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `outFormat` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RevertAssert"><code><span class="field-name">RevertAssert</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#RevertAssert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var no-description" id="SyncRoot"><code><span class="field-name">SyncRoot</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#SyncRoot"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsReadOnly"><code><span class="field-name">IsReadOnly</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsReadOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="IsSynchronized"><code><span class="field-name">IsSynchronized</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSynchronized"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Count"><code><span class="field-name">Count</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="AddPermission"><code><span class="field-name">AddPermission</span><span class="parenthesis">(</span><span class="arg-name">perm</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/IPermission/" class="type-link">IPermission</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/IPermission/" class="type-link">IPermission</a></code><a class="header-anchor" href="#AddPermission"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `perm` | [IPermission](/api-docs/unity/cs/system/security/IPermission/) |

| Returns |
|---------|
| [IPermission](/api-docs/unity/cs/system/security/IPermission/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Assert"><code><span class="field-name">Assert</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Copy"><code><span class="field-name">Copy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PermissionSet</a></code><a class="header-anchor" href="#Copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="CopyTo"><code><span class="field-name">CopyTo</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Array/" class="type-link">cs.system.Array</a><span class="operator">,</span> <span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CopyTo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `array` | [cs.system.Array](/api-docs/unity/cs/system/Array/) |
| `index` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Demand"><code><span class="field-name">Demand</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Demand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Deny"><code><span class="field-name">Deny</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Deny"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="FromXml"><code><span class="field-name">FromXml</span><span class="parenthesis">(</span><span class="arg-name">et</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">SecurityElement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#FromXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `et` | [SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetEnumerator"><code><span class="field-name">GetEnumerator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/collections/IEnumerator/" class="type-link">cs.system.collections.IEnumerator</a></code><a class="header-anchor" href="#GetEnumerator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.system.collections.IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsSubsetOf"><code><span class="field-name">IsSubsetOf</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="#" class="type-link">PermissionSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsSubsetOf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `target` | [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="PermitOnly"><code><span class="field-name">PermitOnly</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#PermitOnly"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ContainsNonCodeAccessPermissions"><code><span class="field-name">ContainsNonCodeAccessPermissions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ContainsNonCodeAccessPermissions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetPermission"><code><span class="field-name">GetPermission</span><span class="parenthesis">(</span><span class="arg-name">permClass</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/IPermission/" class="type-link">IPermission</a></code><a class="header-anchor" href="#GetPermission"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `permClass` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [IPermission](/api-docs/unity/cs/system/security/IPermission/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Intersect"><code><span class="field-name">Intersect</span><span class="parenthesis">(</span><span class="arg-name">other</span><span class="operator">:</span> <a href="#" class="type-link">PermissionSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PermissionSet</a></code><a class="header-anchor" href="#Intersect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `other` | [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

| Returns |
|---------|
| [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsEmpty"><code><span class="field-name">IsEmpty</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsEmpty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="IsUnrestricted"><code><span class="field-name">IsUnrestricted</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#IsUnrestricted"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="RemovePermission"><code><span class="field-name">RemovePermission</span><span class="parenthesis">(</span><span class="arg-name">permClass</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/IPermission/" class="type-link">IPermission</a></code><a class="header-anchor" href="#RemovePermission"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `permClass` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [IPermission](/api-docs/unity/cs/system/security/IPermission/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetPermission"><code><span class="field-name">SetPermission</span><span class="parenthesis">(</span><span class="arg-name">perm</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/IPermission/" class="type-link">IPermission</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/IPermission/" class="type-link">IPermission</a></code><a class="header-anchor" href="#SetPermission"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `perm` | [IPermission](/api-docs/unity/cs/system/security/IPermission/) |

| Returns |
|---------|
| [IPermission](/api-docs/unity/cs/system/security/IPermission/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToXml"><code><span class="field-name">ToXml</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/security/SecurityElement/" class="type-link">SecurityElement</a></code><a class="header-anchor" href="#ToXml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Union"><code><span class="field-name">Union</span><span class="parenthesis">(</span><span class="arg-name">other</span><span class="operator">:</span> <a href="#" class="type-link">PermissionSet</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">PermissionSet</a></code><a class="header-anchor" href="#Union"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `other` | [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

| Returns |
|---------|
| [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `state` | Anonymous |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

