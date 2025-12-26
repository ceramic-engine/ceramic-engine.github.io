---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeCharacter
target: Clay (Web)
permalink: api-docs/clay-web/loreline/RuntimeCharacter/
---

# RuntimeCharacter

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-web/loreline/RuntimeState/">RuntimeState</a> → <strong>loreline.RuntimeCharacter</strong> (Class)</div>

Runtime state variant specifically used for character states.
Characters are special entities in Loreline scripts that can have their own properties
and can be referenced in dialogue statements.

## Instance Members

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">originalFields</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new character runtime state with optional initial field values.

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-web/loreline/Interpreter/) |
| `node` | [AstNode](/api-docs/clay-web/loreline/AstNode/) |
| `fields` | [Any](/api-docs/clay-web/Any/) |
| `originalFields` | [Any](/api-docs/clay-web/Any/) |

