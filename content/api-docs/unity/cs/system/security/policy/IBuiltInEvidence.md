---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: IBuiltInEvidence
target: Unity
permalink: api-docs/unity/cs/system/security/policy/IBuiltInEvidence/
---

# IBuiltInEvidence

<div class="type-hierarchy"><strong>cs.system.security.policy.IBuiltInEvidence</strong> (extern interface) → <a href="/api-docs/unity/cs/system/security/policy/StrongName/">StrongName</a></div>

## Instance Members

<div class="signature field-method no-description" id="GetRequiredSize"><code><span class="field-name">GetRequiredSize</span><span class="parenthesis">(</span><span class="arg-name">verbose</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GetRequiredSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `verbose` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="InitFromBuffer"><code><span class="field-name">InitFromBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#InitFromBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `position` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OutputToBuffer"><code><span class="field-name">OutputToBuffer</span><span class="parenthesis">(</span><span class="arg-name">buffer</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/Char16/" class="type-link">cs.types.Char16</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">position</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">verbose</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#OutputToBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buffer` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.Char16](/api-docs/unity/cs/types/Char16/)> |
| `position` | [Int](/api-docs/unity/Int/) |
| `verbose` | [Bool](/api-docs/unity/Bool/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

