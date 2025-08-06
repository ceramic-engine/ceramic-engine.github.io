---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: InteractionGroup
target: Headless
permalink: api-docs/headless/nape/dynamics/InteractionGroup/
---

# InteractionGroup

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/dynamics/InteractionGroup.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.dynamics.InteractionGroup</strong> (final class)</div>

InteractionGroups are another way of filtering interactions.
<br/><br/>
InteractionGroups form tree structures which are checked along side InteractionFilters
when deciding if two Shapes should interact.
<br/><br/>
InteractionGroups are assigned to any Interactor (not just Shapes), and two Shapes will
interact only if the most recent common ancestor in the InteractionGroup tree permits it.
<br/><br/>
For the purposes of the search, if any Interactor has no InteractionGroup assigned, we
search up the Compound tree first.
<pre>
_Group1
/   |
/  Group2      Group3
/    |    \       |                 Group1
Body1   /      Cmp1   |                 /   \           Group3
/    \  /      /    \  |      ==>    Shp1    Group2        |
Shp1   Shp2   Body2     Cmp2                    /    \      Shp4
|         |                  Shp2    Shp3
Shp3     Body3
|
Shp4
</pre>
If we look at which InteractionGroup is used for which Shape following this rule, then
the left graph can be transformed into an InteractionGroup tree on the right and we get
that the MRCA (Most recent common ancestors) are such that:
<pre>
MRCA(Shp1, Shp3) == Group1;
MRCA(Shp2, Shp3) == Group2;
MRCA(Shp4,   # ) == null;
</pre>
If we were to set up the groups such that <code>Group1.ignore = false</code> and
<code>Group2.ignore = true</code>; then shapes 1 and 3 would not be permitted to
interact, whilst shapes 2 and 3 would be permitted.
<br/>
As the MRCA for shape 4 with any other is null, then the value of Group3's ignore field
is irrelevant, but the existance of Group3 is not as it serves to otherwise prevent Shape 4
from being permitted to interact with shapes 2 and 3.
<br/><br/>
InteractionGroup's can be fairly expressive, but they are strictly less powerful than
InteractionFilters. InteractionGroup's have their place however as there is no limit
to the number of Groups you can use.

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/headless/zpp_nape/dynamics/ZPP_InteractionGroup/" class="type-link">zpp_nape.dynamics.ZPP_InteractionGroup</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="group"><div class="plugin-name">nape</div><code><span class="field-name">group</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="#" class="type-link">InteractionGroup</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parent group in InteractionGroup tree.
@default null

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ignore"><div class="plugin-name">nape</div><code><span class="field-name">ignore</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ignore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ignore property, set to true so that objects will not interact.
@default false

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="interactors"><div class="plugin-name">nape</div><code><span class="field-name">interactors</span><span class="operator">:</span> <a href="/api-docs/headless/nape/phys/InteractorList/" class="type-link">nape.phys.InteractorList</a></code><a class="header-anchor" href="#interactors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set of active interactors using this group.
<br/><br/>
Active interactors meaning those that are part of a Space.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="groups"><div class="plugin-name">nape</div><code><span class="field-name">groups</span><span class="operator">:</span> <a href="/api-docs/headless/nape/dynamics/InteractionGroupList/" class="type-link">InteractionGroupList</a></code><a class="header-anchor" href="#groups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Immutable set of children of Interaction groups.
<br/><br/>
You cannot assign or remove children in this manner, you must do it via setting
the childs parent group to this/null.
<br/><br/>
This list is immutable.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">ignore</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new InteractionGroup.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ignore` | [Bool](/api-docs/headless/Bool/) | `false` | Whether interactors should be ignored. (default false) |

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

