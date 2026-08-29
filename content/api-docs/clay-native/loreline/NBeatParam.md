---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: NBeatParam
target: Clay (Native)
permalink: api-docs/clay-native/loreline/NBeatParam/
---

# NBeatParam

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Node.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.NBeatParam</strong> (Class)</div>

A single parameter in a beat declaration, e.g. `name` or `mood = "happy"`
in `beat Greet(name, mood = "happy")`.

## Instance Members

<div class="signature field-var has-description" id="name"><code><span class="field-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#name"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Name of the parameter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="namePos"><code><span class="field-name">namePos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#namePos"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of the parameter name in source.

<hr class="field-separator" />

<div class="signature field-var has-description" id="defaultValue"><code><span class="field-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#defaultValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Optional default value expression, evaluated when no argument is provided.

<hr class="field-separator" />

<div class="signature field-method no-description" id="toJson"><code><span class="field-name">toJson</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#toJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Dynamic](/api-docs/clay-native/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">namePos</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Position/" class="type-link">Position</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">defaultValue</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NExpr/" class="type-link">NExpr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `name` | [String](/api-docs/clay-native/String/) | |
| `namePos` | [Position](/api-docs/clay-native/loreline/Position/) | |
| `defaultValue` | [NExpr](/api-docs/clay-native/loreline/NExpr/) | *(optional)* |

