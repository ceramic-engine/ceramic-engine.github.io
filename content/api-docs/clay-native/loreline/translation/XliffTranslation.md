---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: XliffTranslation
target: Clay (Native)
permalink: api-docs/clay-native/loreline/translation/XliffTranslation/
---

# XliffTranslation

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/translation/XliffTranslation.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.translation.XliffTranslation</strong> (Class)</div>

Converts XLIFF (1.2 or 2.x) file content into a Loreline translation file body.

XLIFF 1.2 layout:
  ```xml
  <xliff version="1.2">
    <file source-language="en" target-language="fr">
      <body>
        <trans-unit id="intro">
          <source>Welcome to the cafe.</source>
          <target>Bienvenue dans le café.</target>
        </trans-unit>
      </body>
    </file>
  </xliff>
  ```

XLIFF 2.x layout:
  ```xml
  <xliff version="2.0" srcLang="en" trgLang="fr">
    <file id="...">
      <unit id="intro">
        <segment>
          <source>Welcome to the cafe.</source>
          <target>Bienvenue dans le café.</target>
        </segment>
      </unit>
    </file>
  </xliff>
  ```

Locale filter:
  - 1.2: only `<file target-language="<locale>">` is converted
  - 2.x: the root `<xliff trgLang="<locale>">` must match
  - If no target-language attribute is present anywhere, we take everything
(the file is assumed to be in the requested locale).

Empty/missing `<target>` -> entry skipped.

**`<target>` must be valid Loreline body content**. Its text is written
verbatim into the synthesised `.lor` and re-parsed by Loreline. See the
full rules in `loreline.translation.TranslationFormats`.

## Static Members

<div class="signature field-method no-description" id="toLoreline"><code><span class="field-name">toLoreline</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-native/String/) |
| `locale` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="fromScript"><code><span class="field-name">fromScript</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">loreline.AstNode</a><span class="operator">,</span> <span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#fromScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates an XLIFF 1.2 file body for the given source `script` and
`locale`. If `existing` is provided, entries already present there are
preserved as the `<target>` value; otherwise the `<target>` defaults to
the source text (placeholder).

| Name | Type |
|------|------|
| `script` | [loreline.AstNode](/api-docs/clay-native/loreline/AstNode/) |
| `existing` | [Null](/api-docs/clay-native/Null/)<[Map](/api-docs/clay-native/Map/)> |
| `locale` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-method has-description" id="localeMatches"><code><span class="field-name">localeMatches</span><span class="parenthesis">(</span><span class="arg-name">fileLocale</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">requested</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#localeMatches"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Matches the file's target-language against the requested locale.
Accepts an exact match OR a primary-language match
(e.g. file "fr-FR" matches request "fr", and vice versa).

| Name | Type |
|------|------|
| `fileLocale` | [String](/api-docs/clay-native/String/) |
| `requested` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="primarySubtag"><code><span class="field-name">primarySubtag</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#primarySubtag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="firstChildElement"><code><span class="field-name">firstChildElement</span><span class="parenthesis">(</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a></code><a class="header-anchor" href="#firstChildElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parent` | [Xml](/api-docs/clay-native/Xml/) |
| `name` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [Xml](/api-docs/clay-native/Xml/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="innerText"><code><span class="field-name">innerText</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-native/Xml/" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#innerText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Xml](/api-docs/clay-native/Xml/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="escapeForXmlText"><code><span class="field-name">escapeForXmlText</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeForXmlText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="escapeForXmlAttr"><code><span class="field-name">escapeForXmlAttr</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeForXmlAttr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="writeEntry"><code><span class="field-name">writeEntry</span><span class="parenthesis">(</span><span class="arg-name">buf</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Utf8Buf/" class="type-link">loreline.Utf8Buf</a><span class="operator">,</span> <span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">src</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tgt</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeEntry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `buf` | [loreline.Utf8Buf](/api-docs/clay-native/loreline/Utf8Buf/) |
| `id` | [String](/api-docs/clay-native/String/) |
| `src` | [String](/api-docs/clay-native/String/) |
| `tgt` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="escapeLineForComment"><code><span class="field-name">escapeLineForComment</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#escapeLineForComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/clay-native/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

