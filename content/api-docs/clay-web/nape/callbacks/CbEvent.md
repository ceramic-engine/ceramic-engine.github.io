---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: CbEvent
target: Clay (Web)
permalink: api-docs/clay-web/nape/callbacks/CbEvent/
---

# CbEvent

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/CbEvent.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.CbEvent</strong> (final class)</div>

Enumeration of possible callback event types.

## Static Members

<div class="signature field-var has-description has-plugin" id="BEGIN"><div class="plugin-name">nape</div><code><span class="field-name">BEGIN</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#BEGIN"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

BEGIN event corresponds to the start of an interaction

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ONGOING"><div class="plugin-name">nape</div><code><span class="field-name">ONGOING</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#ONGOING"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ONGOING event corresponds to any step in which an interaction is occuring
overlapping with the BEGIN event.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="END"><div class="plugin-name">nape</div><code><span class="field-name">END</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#END"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

END event corresponds to the end of an interaction.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="WAKE"><div class="plugin-name">nape</div><code><span class="field-name">WAKE</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#WAKE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

WAKE event corresponds to the waking of a Body or Constraint in the space.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="SLEEP"><div class="plugin-name">nape</div><code><span class="field-name">SLEEP</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#SLEEP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

SLEEP event corresponds to the sleeping of a Body or Constraint in the space.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="BREAK"><div class="plugin-name">nape</div><code><span class="field-name">BREAK</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#BREAK"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

BREAK event corresponds to the breaking of a defined limit on a Constraint.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="PRE"><div class="plugin-name">nape</div><code><span class="field-name">PRE</span><span class="operator">:</span> <a href="#" class="type-link">CbEvent</a></code><a class="header-anchor" href="#PRE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

PRE event corresponds to a special mid-step event that occurs after it is determined
that two objects 'will' begin to interact, but before any interaction commences.

## Instance Members

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

