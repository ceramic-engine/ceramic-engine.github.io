---
layout: api-docs
category: api-docs
subCategory: doc
menu: Http
title: MimeType
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/MimeType/
---

# MimeType

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/http/runtime/src/ceramic/MimeType.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.MimeType</strong> (Class)</div>

MIME type utility class for determining content type characteristics.

This class provides helper methods to analyze MIME types and determine whether
content should be treated as text or binary data. It's used internally by the
HTTP plugin to decide how to process response content.

The classification is based on standard MIME type conventions and includes
support for common text-based formats like HTML, CSS, JavaScript, JSON, XML,
and various text subtypes.

Example usage:
```haxe
var contentType = "application/json; charset=utf-8";

if (MimeType.isText(contentType)) {
    // Process as text content
    var textData = response.content;
} else {
    // Process as binary content
    var binaryData = response.binaryContent;
}
```

## Static Members

<div class="signature field-method has-description has-plugin" id="isBinary"><div class="plugin-name">http</div><code><span class="field-name">isBinary</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if a MIME type represents binary content.

This method analyzes the given MIME type string and returns true if the content
should be treated as binary data. The method handles MIME types with parameters
(e.g., "text/html; charset=utf-8") by ignoring everything after the semicolon.

Text-based MIME types include:
- All types starting with "text/" (e.g., text/plain, text/html)
- JavaScript and JSON (application/javascript, application/json)
- XML-based formats (application/xml, image/svg+xml, etc.)
- Rich Text Format (application/rtf)
- Perl scripts (application/x-perl)
- Various specialized text formats



| Name | Type | Description |
|------|------|-------------|
| `type` | [String](/api-docs/clay-web/String/) | The MIME type string to analyze (may include parameters)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if the content is binary, false if it's text-based |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="isText"><div class="plugin-name">http</div><code><span class="field-name">isText</span><span class="parenthesis">(</span><span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if a MIME type represents text content.

This is a convenience method that returns the inverse of isBinary().
Use this when you want to check if content should be processed as text.



| Name | Type | Description |
|------|------|-------------|
| `type` | [String](/api-docs/clay-web/String/) | The MIME type string to analyze (may include parameters)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | true if the content is text-based, false if it's binary |

