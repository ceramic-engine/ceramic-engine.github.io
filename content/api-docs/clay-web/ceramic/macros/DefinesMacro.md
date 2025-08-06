---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: DefinesMacro
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/macros/DefinesMacro/
---

# DefinesMacro

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/macros/DefinesMacro.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.macros.DefinesMacro</strong> (Class)</div>

Utilities to access compile-time defines from code.
This class provides macro functions to retrieve and parse compiler flags (defines)
at compile time, making them available as constants in the generated code.

Ceramic uses defines extensively for configuration values that need to be
embedded at compile time, such as asset paths, target-specific settings,
and feature flags.

Original source: https://code.haxe.org/category/macros/get-compiler-define-value.html

## Static Members

<div class="signature field-method has-description" id="getDefine"><code><span class="field-name">getDefine</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getDefine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a compiler flag value as a string.
The value is embedded as a constant in the generated code.

Example:
```haxe
var version = DefinesMacro.getDefine("app_version"); // "1.0.0"
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing the flag value as a string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getJsonJsonDefine"><code><span class="field-name">getJsonJsonDefine</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getJsonJsonDefine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a compiler flag value that has been double-encoded as JSON.
Some Ceramic build tools encode values twice to ensure proper escaping
through multiple processing stages.

Example:
```haxe
var paths = DefinesMacro.getJsonJsonDefine("ceramic_extra_assets_paths"); // ["path1", "path2"]
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing the decoded value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getJsonDefine"><code><span class="field-name">getJsonDefine</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getJsonDefine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a compiler flag value that has been encoded as JSON.
Used for complex data structures passed through compiler flags.

Example:
```haxe
var config = DefinesMacro.getJsonDefine("app_config"); // {debug: true, ...}
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing the decoded value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFloatDefine"><code><span class="field-name">getFloatDefine</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getFloatDefine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a compiler flag value and parses it as a Float.

Example:
```haxe
var scale = DefinesMacro.getFloatDefine("ui_scale"); // 1.5
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing the parsed float value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getIntDefine"><code><span class="field-name">getIntDefine</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getIntDefine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a compiler flag value and parses it as an Int.

Example:
```haxe
var maxPlayers = DefinesMacro.getIntDefine("max_players"); // 4
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing the parsed integer value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBoolDefine"><code><span class="field-name">getBoolDefine</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getBoolDefine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a compiler flag value and parses it as a Bool.
Recognizes "true", "1" as true, everything else as false.

Example:
```haxe
var debugMode = DefinesMacro.getBoolDefine("debug_mode"); // true
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing the parsed boolean value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDefined"><code><span class="field-name">isDefined</span><span class="parenthesis">(</span><span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#isDefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a compiler flag is defined (regardless of its value).

Example:
```haxe
if (DefinesMacro.isDefined("ceramic_use_arcade")) {
    // Arcade physics is enabled
}
```



| Name | Type | Description |
|------|------|-------------|
| `key` | [Dynamic](/api-docs/clay-web/Dynamic/) | The name of the compiler flag  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing true if defined, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDefines"><code><span class="field-name">getDefines</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#getDefines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Retrieves a map of all defined compiler flags and their values.
Useful for debugging or conditional compilation based on multiple flags.

Example:
```haxe
var allDefines = DefinesMacro.getDefines();
for (key => value in allDefines) {
    trace('$key = $value');
}
```


| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-web/Dynamic/) | Expression containing a Map<String,String> of all defines |

## Private Members

