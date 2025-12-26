---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: ChoiceOption
target: Headless
permalink: api-docs/headless/loreline/ChoiceOption/
---

# ChoiceOption

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.ChoiceOption</strong> (Class)</div>

Represents a choice option presented to the user.

## Instance Members

<div class="signature field-var has-description" id="text"><code><span class="field-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#text"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The text of the choice option.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tags"><code><span class="field-name">tags</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/TextTag/" class="type-link">TextTag</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#tags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Any tags associated with the choice text.

<hr class="field-separator" />

<div class="signature field-var has-description" id="enabled"><code><span class="field-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether this choice option is currently enabled.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tags</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/TextTag/" class="type-link">TextTag</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceOption/" class="type-link">NChoiceOption</a><span class="operator">,</span> <span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/headless/String/) | * The text of the choice option. |
| `tags` | [Array](/api-docs/headless/Array/)<[TextTag](/api-docs/headless/loreline/TextTag/)> | * Any tags associated with the choice text. |
| `enabled` | [Bool](/api-docs/headless/Bool/) | * Whether this choice option is currently enabled. |
| `node` | [NChoiceOption](/api-docs/headless/loreline/NChoiceOption/) | * The related choice option node, only used internally |
| `insertion` | [RuntimeInsertion](/api-docs/headless/loreline/RuntimeInsertion/) | * The related insertion of this option. Needed to be able to resume execution if that choice option is chosen. |

## Private Members

<div class="signature field-var has-description" id="node"><code><span class="field-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceOption/" class="type-link">NChoiceOption</a></code><a class="header-anchor" href="#node"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related choice option node, only used internally

<hr class="field-separator" />

<div class="signature field-var has-description" id="insertion"><code><span class="field-name">insertion</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a></code><a class="header-anchor" href="#insertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The related insertion of this option.
Needed to be able to resume execution if that choice option is chosen.

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

