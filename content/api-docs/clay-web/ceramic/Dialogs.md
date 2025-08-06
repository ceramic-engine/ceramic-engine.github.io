---
layout: api-docs
category: api-docs
subCategory: doc
menu: Dialogs
title: Dialogs
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Dialogs/
---

# Dialogs

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/dialogs/runtime/src/ceramic/Dialogs.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Dialogs</strong> (Class)</div>

Cross-platform native file dialog implementation.

This class provides access to native file dialogs for opening files,
selecting directories, and saving files. It supports:

- **Desktop platforms** (Mac/Windows/Linux): Uses native OS dialogs via linc_dialogs
- **Electron**: Uses Electron's dialog API for web-based desktop apps
- **Other platforms**: Falls back to warning logs (no dialog support)

The dialogs are synchronous on desktop but appear asynchronous due to the
callback-based API. This ensures consistent behavior across platforms.

File filters can be specified to limit selectable file types, improving
user experience by showing only relevant files.

<div class="see"><strong>See:</strong> DialogsFileFilter For specifying file type filters</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="openFile"><div class="plugin-name">dialogs</div><code><span class="field-name">openFile</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filters</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/DialogsFileFilter/" class="type-link">DialogsFileFilter</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#openFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opens a native file selection dialog.

Shows the platform's standard file picker dialog, allowing the user
to browse and select a single file. The dialog can be configured with
file type filters to show only specific file extensions.

On Electron, this also ensures keyboard state is reset after the dialog
closes to prevent stuck keys.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/clay-web/String/) | | The dialog window title  |
| `filters` | [Array](/api-docs/clay-web/Array/)<[DialogsFileFilter](/api-docs/clay-web/ceramic/DialogsFileFilter/)> | *(optional)* | Optional array of file type filters  |
| `done` | Function | | Callback invoked with the selected file path (null if cancelled) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="openDirectory"><div class="plugin-name">dialogs</div><code><span class="field-name">openDirectory</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#openDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opens a native directory selection dialog.

Shows the platform's standard folder picker dialog, allowing the user
to browse and select a directory. On supported platforms, this can
also create new directories during selection.

Platform capabilities:
- Desktop: Full directory browsing and creation
- Electron: Directory selection with create option
- Others: Not supported (logs warning)



| Name | Type | Description |
|------|------|-------------|
| `title` | [String](/api-docs/clay-web/String/) | The dialog window title  |
| `done` | Function | Callback invoked with the selected directory path (null if cancelled) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="saveFile"><div class="plugin-name">dialogs</div><code><span class="field-name">saveFile</span><span class="parenthesis">(</span><span class="arg-name">title</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filters</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/ceramic/DialogsFileFilter/" class="type-link">DialogsFileFilter</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Opens a native save file dialog.

Shows the platform's standard save dialog, allowing the user to
specify a location and filename for saving. Features include:
- Overwrite confirmation for existing files
- File type filters to suggest appropriate extensions
- Directory creation during navigation

The dialog doesn't actually save any data - it only returns the
chosen file path for the application to use.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `title` | [String](/api-docs/clay-web/String/) | | The dialog window title  |
| `filters` | [Array](/api-docs/clay-web/Array/)<[DialogsFileFilter](/api-docs/clay-web/ceramic/DialogsFileFilter/)> | *(optional)* | Optional array of file type filters (first filter used as default on some platforms)  |
| `done` | Function | | Callback invoked with the chosen file path (null if cancelled) |

