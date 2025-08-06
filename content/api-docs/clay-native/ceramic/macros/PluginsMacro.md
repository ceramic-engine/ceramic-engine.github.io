---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: PluginsMacro
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/macros/PluginsMacro/
---

# PluginsMacro

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/macros/PluginsMacro.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.macros.PluginsMacro</strong> (Class)</div>

Macro for automatic plugin initialization in the Ceramic framework.

This macro discovers enabled plugins at compile-time based on compiler defines
and generates code to initialize them. It provides a centralized way to
initialize all plugins without manually maintaining a list.

## How It Works

1. Scans compiler defines for keys starting with `plugin_`
2. Derives plugin class names from the define keys
3. Checks if each plugin class exists and has a `pluginInit()` method
4. Generates initialization calls for all valid plugins

## Plugin Naming Convention

- Define: `plugin_<name>` (e.g., `plugin_spine`, `plugin_ui`)
- Class: `<Name>Plugin` (e.g., `SpinePlugin`, `UiPlugin`)
- Special cases handled: `imgui` -> `ImGuiPlugin`

## Example

```haxe
// In your main application:
PluginsMacro.initPlugins();

// With -D plugin_spine -D plugin_ui, generates:
// @:privateAccess ceramic.SpinePlugin.pluginInit();
// @:privateAccess ceramic.UiPlugin.pluginInit();
```

## Plugin Requirements

Plugins must:
- Be in the `ceramic` package
- Have a static `pluginInit()` method
- Follow the naming convention

<div class="see"><strong>See:</strong> ceramic.App Where plugins are initialized during app startup</div>


## Static Members

<div class="signature field-method has-description" id="initPlugins"><code><span class="field-name">initPlugins</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#initPlugins"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves plugin classes and generates initialization calls for each enabled plugin.

This macro examines compiler defines at compile-time to determine which
plugins are enabled, then generates the appropriate initialization code.
Plugin initialization calls are made with @:privateAccess to allow
access to private pluginInit methods.


| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/clay-native/Dynamic/) | Expression block containing all plugin initialization calls |

