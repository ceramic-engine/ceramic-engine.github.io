---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: Http
target: Headless
permalink: api-docs/headless/backend/Http/
---

# Http

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/backend/Http.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.Http</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/spec/Http/">spec.Http</a></div>

Platform-specific HTTP implementation providing cross-platform HTTP request functionality.

This class implements the low-level HTTP backend for the Ceramic HTTP plugin, providing
native HTTP request capabilities across all supported platforms including:

Supported Platforms:
- Node.js (nodejs/hxnodejs/node): Uses Node.js http/https modules
- Android: Uses Android native HTTP implementation
- iOS: Uses iOS native HTTP implementation
- Web/JS: Uses XMLHttpRequest with ArrayBuffer responses
- Unity C#: Uses UnityWebRequest with coroutine-based async handling
- Tink HTTP: Uses tink_http library for additional platform support
- AkifoxAsyncHttp: Alternative HTTP library support

Features:
- Automatic redirect handling (up to 8 redirects)
- Timeout support with proper cleanup
- Binary and text response handling based on MIME types
- Header processing and normalization
- File download capabilities with progress tracking
- Cross-platform error handling and reporting

The implementation automatically detects the target platform and uses the most
appropriate HTTP mechanism available. All platform-specific code is contained
within conditional compilation blocks.

Note: This class should not be used directly by application code. Use the
high-level ceramic.Http class instead.

## Instance Members

<div class="signature field-method has-description has-plugin" id="request"><div class="plugin-name">http</div><code><span class="field-name">request</span><span class="parenthesis">(</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/backend/HttpRequestOptions/" class="type-link">HttpRequestOptions</a><span class="operator">,</span> <span class="arg-name">requestDone</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#request"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs an HTTP request using the appropriate platform-specific implementation.

This method dispatches to the correct platform implementation and ensures
that the response callback is executed on the main thread for thread safety.
It handles the complete request lifecycle including timeouts, redirects,
and proper resource cleanup.

The method automatically:
- Detects and handles different content types (text vs binary)
- Follows HTTP redirects (up to 8 levels deep)
- Applies timeouts and handles timeout cleanup
- Processes response headers and status codes
- Ensures thread-safe callback execution



| Name | Type | Description |
|------|------|-------------|
| `options` | [HttpRequestOptions](/api-docs/headless/backend/HttpRequestOptions/) | The HTTP request configuration  |
| `requestDone` | Function | Callback function that receives the HTTP response |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="download"><div class="plugin-name">http</div><code><span class="field-name">download</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">targetPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#download"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Downloads a file from the specified URL to a local file path.

This method provides cross-platform file download functionality with automatic
path resolution and temporary file handling for safe downloads. The implementation
varies by platform to use the most efficient download mechanism available.

Features:
- Automatic path resolution (relative paths are resolved against storage directory)
- Safe download using temporary files (prevents corruption on failure)
- Platform-optimized download methods (curl on Unix, native APIs on mobile)
- Automatic directory creation if needed
- Progress tracking and error handling

Platform implementations:
- iOS/Android: Uses native download APIs with progress callbacks
- Mac/Linux: Uses system curl command for reliable downloads
- Windows: Uses curl via PowerShell
- Unity: Uses UnityWebRequest with file download handler
- Node.js: Uses http/https modules with file streams

The method ensures atomic downloads by first downloading to a temporary file
(.tmpdl extension) and then moving it to the final location upon success.



| Name | Type | Description |
|------|------|-------------|
| `url` | [String](/api-docs/headless/String/) | The URL of the file to download  |
| `targetPath` | [String](/api-docs/headless/String/) | The local file path where the file should be saved (can be relative)  |
| `done` | Function | Callback function that receives the final file path on success, or null on failure |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">http</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new HTTP backend instance

