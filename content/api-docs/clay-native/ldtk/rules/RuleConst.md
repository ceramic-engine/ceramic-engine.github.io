---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ldtk-haxe-api
title: RuleConst
target: Clay (Native)
permalink: api-docs/clay-native/ldtk/rules/RuleConst/
---

# RuleConst

<div class="type-hierarchy"><strong>ldtk.rules.RuleConst</strong> (Class)</div>

Constants shared by every consumer of the auto-layer rule engine.
Rule pattern cell encoding: 0 = ignored, +v = IntGrid value v required, -v = value v forbidden,
+/-ANYTHING = any value / no value, (groupUid+1)*GROUP_VALUE_BASE = any value of an IntGrid group.

## Static Members

<div class="signature field-var has-description" id="ANYTHING"><code><span class="field-name">ANYTHING</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ANYTHING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Special pattern value meaning "any IntGrid value" (positive) or "no IntGrid value" (negative)

<hr class="field-separator" />

<div class="signature field-var has-description" id="MAX_PATTERN_SIZE"><code><span class="field-name">MAX_PATTERN_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_PATTERN_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Largest supported pattern size (must be odd)

<hr class="field-separator" />

<div class="signature field-var has-description" id="MAX_RADIUS"><code><span class="field-name">MAX_RADIUS</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_RADIUS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Half of MAX_PATTERN_SIZE, used to expand recompute rectangles

<hr class="field-separator" />

<div class="signature field-var has-description" id="GROUP_VALUE_BASE"><code><span class="field-name">GROUP_VALUE_BASE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#GROUP_VALUE_BASE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pattern values above this encode IntGrid groups

<hr class="field-separator" />

<div class="signature field-var has-description" id="AREA_SIZE"><code><span class="field-name">AREA_SIZE</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#AREA_SIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size (in cells) of the square areas used by the IntGrid value prefilter

<hr class="field-separator" />

<div class="signature field-method no-description" id="groupUidFromRuleValue"><code><span class="field-name">groupUidFromRuleValue</span><span class="parenthesis">(</span><span class="arg-name">ruleValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#groupUidFromRuleValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `ruleValue` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ruleValueFromGroupUid"><code><span class="field-name">ruleValueFromGroupUid</span><span class="parenthesis">(</span><span class="arg-name">groupUid</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ruleValueFromGroupUid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `groupUid` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isGroupValue"><code><span class="field-name">isGroupValue</span><span class="parenthesis">(</span><span class="arg-name">absValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isGroupValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `absValue` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isValidPatternSize"><code><span class="field-name">isValidPatternSize</span><span class="parenthesis">(</span><span class="arg-name">size</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isValidPatternSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `size` | [Int](/api-docs/clay-native/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

