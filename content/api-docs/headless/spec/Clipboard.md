---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Clipboard
target: Headless
permalink: api-docs/headless/spec/Clipboard/
---

# Clipboard

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Clipboard.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Clipboard</strong> (Interface) → <a href="/api-docs/headless/backend/Clipboard/">backend.Clipboard</a></div>

Backend interface for system clipboard operations.

This interface provides access to the platform's clipboard for copy/paste functionality.
Currently supports text-only operations, though backends may extend this for other data types.

Clipboard access may require permissions on some platforms (e.g., web browsers) and
operations may fail silently if permissions are not granted.

## Instance Members

<div class="signature field-method has-description" id="getText"><code><span class="field-name">getText</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the current text content from the system clipboard.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The clipboard text content, or an empty string if the clipboard is empty or doesn't contain text data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setText"><code><span class="field-name">setText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets text content to the system clipboard.
This replaces any existing clipboard content.


| Name | Type | Description |
|------|------|-------------|
| `text` | [String](/api-docs/headless/String/) | The text to copy to the clipboard |

