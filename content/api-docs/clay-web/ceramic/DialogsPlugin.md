---
layout: api-docs
category: api-docs
subCategory: doc
menu: Dialogs
title: DialogsPlugin
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/DialogsPlugin/
---

# DialogsPlugin

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/dialogs/runtime/src/ceramic/DialogsPlugin.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.DialogsPlugin</strong> (Class)</div>

Plugin initialization for native file dialogs support.

This plugin enables native file dialog functionality in Ceramic applications.
It automatically initializes when included in a project, providing access to
the Dialogs API for file operations.

The plugin supports:
- Native file open dialogs
- Native directory selection dialogs
- Native file save dialogs
- Platform-specific implementations (desktop via linc_dialogs, Electron via IPC)

To use this plugin, add it to your project's ceramic.yml:
```yaml
plugins:
  - dialogs
```

<div class="see"><strong>See:</strong> Dialogs For the main dialog API, DialogsFileFilter For file type filtering</div>


## Private Members

<div class="signature field-method has-description has-plugin" id="pluginInit"><div class="plugin-name">dialogs</div><code><span class="field-name">pluginInit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pluginInit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Plugin initialization logic.
Currently empty as the dialogs functionality is self-contained
and doesn't require special initialization.

## Metadata

| Name | Parameters |
|------|------------|
| `:access` | ceramic.App |

