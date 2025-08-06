---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Slug
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Slug/
---

# Slug

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Slug.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Slug</strong> (Class)</div>

URL-safe string generator that converts text into slugs suitable for URLs and filenames.

The Slug class transforms strings by replacing special characters, accented letters,
and spaces with URL-safe equivalents. It handles a comprehensive set of Unicode
characters, converting them to their ASCII equivalents where possible.

Features:
- Converts accented characters to ASCII equivalents (é→e, ñ→n, etc.)
- Replaces spaces with hyphens or custom separators
- Removes or replaces special characters
- Handles currency symbols, mathematical symbols, and various scripts
- Optionally converts to lowercase
- Customizable character removal and replacement rules

Example usage:
```haxe
// Basic usage
var slug = Slug.encode("Hello World!"); // "hello-world"
var slug2 = Slug.encode("Café Résumé"); // "cafe-resume"

// Custom options
var options:SlugOptions = {
    lower: false,        // Keep original case
    replacement: "_",    // Use underscore instead of hyphen
    remove: ~/[.]/g     // Remove only dots
};
var slug3 = Slug.encode("Hello.World", options); // "Hello_World"

// Handling special characters
Slug.encode("Price: $100"); // "price-dollar100"
Slug.encode("Love ♥ Haxe"); // "love-love-haxe"
```

This is particularly useful for:
- Creating SEO-friendly URLs from page titles
- Generating safe filenames from user input
- Creating identifiers from human-readable text

Based on the popular JavaScript slugify library by simov.

## Static Members

<div class="signature field-var has-description" id="RE_SLUG_REMOVE_CHARS"><code><span class="field-name">RE_SLUG_REMOVE_CHARS</span><span class="operator">:</span> <a href="/api-docs/clay-web/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_SLUG_REMOVE_CHARS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default regex pattern for characters to remove from slugs.
Removes: $ * + ~ . ( ) ' " ! \ : @ ? §

<hr class="field-separator" />

<div class="signature field-var has-description" id="DEFAULT_OPTIONS"><code><span class="field-name">DEFAULT_OPTIONS</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SlugOptions/" class="type-link">SlugOptions</a></code><a class="header-anchor" href="#DEFAULT_OPTIONS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default options for slug generation.
Uses lowercase conversion, standard character removal, and hyphen replacement.

<hr class="field-separator" />

<div class="signature field-var has-description" id="charMap"><code><span class="field-name">charMap</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#charMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Comprehensive character mapping table for converting Unicode characters to ASCII equivalents.
Maps Unicode code points to their slug-safe string representations.
Includes accented letters, currency symbols, Greek letters, Cyrillic, and more.

<hr class="field-separator" />

<div class="signature field-var has-description" id="safe"><code><span class="field-name">safe</span><span class="operator">:</span> <a href="/api-docs/clay-web/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#safe"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regex pattern for characters considered safe in slugs.
Matches anything that is NOT a word character, space, or special safe character.

<hr class="field-separator" />

<div class="signature field-method has-description" id="encode"><code><span class="field-name">encode</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/SlugOptions/" class="type-link">SlugOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#encode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a string into a URL-safe slug.

The encoding process:
1. Replaces Unicode characters with ASCII equivalents using charMap
2. Trims whitespace from beginning and end
3. Removes unwanted characters based on options.remove pattern
4. Replaces spaces with the specified replacement character
5. Optionally converts to lowercase



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `str` | [String](/api-docs/clay-web/String/) | | The string to convert into a slug  |
| `options` | [SlugOptions](/api-docs/clay-web/ceramic/SlugOptions/) | *(optional)* | Optional configuration for slug generation. If null, uses DEFAULT_OPTIONS.  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The URL-safe slug version of the input string |

