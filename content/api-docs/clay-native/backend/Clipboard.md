---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: Clipboard
target: Clay (Native)
permalink: api-docs/clay-native/backend/Clipboard/
---

# Clipboard

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/Clipboard.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Clipboard</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/clay-native/spec/Clipboard/">spec.Clipboard</a></div>

Clay backend implementation for system clipboard operations.

This class provides cross-platform clipboard text access with support for:
- Native SDL clipboard on desktop platforms
- Electron clipboard API when running in Electron
- Browser clipboard API as a fallback on web
- Internal text storage as a last resort

Platform-specific behavior:
- Desktop (SDL): Direct system clipboard access
- Electron: Uses Electron's clipboard module with retry logic
- Web Browser: Uses navigator.clipboard API with permission handling
- Fallback: Internal string storage when system access unavailable

The browser clipboard implementation requires user permission and
automatically syncs when the window gains focus.

<div class="see"><strong>See:</strong> spec.Clipboard The interface this class implements</div>


## Instance Members

<div class="signature field-method has-description has-plugin" id="getText"><div class="plugin-name">clay</div><code><span class="field-name">getText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#getText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current clipboard text content.

Attempts to read from the system clipboard in this order:
1. Electron clipboard (if available)
2. SDL system clipboard (on desktop)
3. Internal clipboard storage (fallback)


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The clipboard text content, or null if empty |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="setText"><div class="plugin-name">clay</div><code><span class="field-name">setText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the clipboard text content.

Writes to all available clipboard targets:
- Internal storage (always)
- Electron clipboard (if available, with retry)
- Browser clipboard (if permissions granted)
- SDL system clipboard (on desktop)

The Electron implementation includes a 100ms delayed retry
to work around timing issues with clipboard access.



| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/clay-native/String/) | The text to copy to the clipboard |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">clay</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new clipboard handler.
Automatically detects and initializes the appropriate clipboard API
based on the platform and available features.

## Private Members

<div class="signature field-var has-description has-plugin" id="clipboardText"><div class="plugin-name">clay</div><code><span class="field-name">clipboardText</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#clipboardText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal clipboard text storage used as fallback

