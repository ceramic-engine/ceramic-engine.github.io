---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: AllApi
target: Headless
permalink: api-docs/headless/ceramic/AllApi/
---

# AllApi

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/AllApi.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.AllApi</strong> (Class)</div>

Utility class to prevent dead code elimination of API classes.

## Static Members

<div class="signature field-method has-description" id="apiCallCache"><code><span class="field-name">apiCallCache</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#apiCallCache"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Forces inclusion of commonly used reflection methods.
This ensures Type.allEnums and Bytes.ofHex are available at runtime.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="configureHscript"><div class="plugin-name">script</div><code><span class="field-name">configureHscript</span><span class="parenthesis">(</span><span class="arg-name">interp</span><span class="operator">:</span> <a href="/api-docs/headless/hscript/Interp/" class="type-link">hscript.Interp</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#configureHscript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Configures an HScript interpreter with Ceramic API bindings.

This method sets up all necessary variable bindings to make Ceramic
classes and utilities available within HScript environments. It's used
by the scripting plugin to provide full framework access to scripts.

The configuration includes:
- Global shortcuts (app, screen, audio, etc.)
- Standard Haxe libraries (Std, Math, StringTools)
- Tracker framework classes
- All Ceramic core classes
- Plugin-specific classes when available



| Name | Type | Description |
|------|------|-------------|
| `interp` | [hscript.Interp](/api-docs/headless/hscript/Interp/) | The HScript interpreter to configure |

