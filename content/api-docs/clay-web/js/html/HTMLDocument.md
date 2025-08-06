---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: HTMLDocument
target: Clay (Web)
permalink: api-docs/clay-web/js/html/HTMLDocument/
---

# HTMLDocument

<div class="type-hierarchy"><a href="/api-docs/clay-web/js/html/EventTarget/">EventTarget</a> → <a href="/api-docs/clay-web/js/html/Node/">Node</a> → <a href="/api-docs/clay-web/js/html/Document/">Document</a> → <strong>js.html.HTMLDocument</strong> (extern class)</div>

`HTMLDocument` is an abstract interface which extends the `Document` interface to add HTML-specific features to the document object. It represents the root of the HTML document, within which its entire DOM hierarchy resides.

Documentation [HTMLDocument](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/HTMLDocument></div>


## Instance Members

<div class="signature field-var no-description" id="domain"><code><span class="field-name">domain</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#domain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="cookie"><code><span class="field-name">cookie</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#cookie"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="designMode"><code><span class="field-name">designMode</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#designMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="fgColor"><code><span class="field-name">fgColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#fgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="linkColor"><code><span class="field-name">linkColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#linkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="vlinkColor"><code><span class="field-name">vlinkColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#vlinkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="alinkColor"><code><span class="field-name">alinkColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#alinkColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="bgColor"><code><span class="field-name">bgColor</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#bgColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="all"><code><span class="field-name">all</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HTMLAllCollection/" class="type-link">HTMLAllCollection</a></code><a class="header-anchor" href="#all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="open"><code><span class="field-name">open</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">features</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">replace</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/Window/" class="type-link">Window</a></code><a class="header-anchor" href="#open"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `url` | [String](/api-docs/clay-web/String/) | |
| `name` | [String](/api-docs/clay-web/String/) | |
| `features` | [String](/api-docs/clay-web/String/) | |
| `replace` | [Bool](/api-docs/clay-web/Bool/) | `false` |

| Returns |
|---------|
| [Window](/api-docs/clay-web/js/html/Window/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>



<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeln"><code><span class="field-name">writeln</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeln"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `text` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="execCommand"><code><span class="field-name">execCommand</span><span class="parenthesis">(</span><span class="arg-name">commandId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">showUI</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">""</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#execCommand"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `commandId` | [String](/api-docs/clay-web/String/) | |
| `showUI` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `value` | [String](/api-docs/clay-web/String/) | `""` |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="queryCommandEnabled"><code><span class="field-name">queryCommandEnabled</span><span class="parenthesis">(</span><span class="arg-name">commandId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#queryCommandEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `commandId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="queryCommandIndeterm"><code><span class="field-name">queryCommandIndeterm</span><span class="parenthesis">(</span><span class="arg-name">commandId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#queryCommandIndeterm"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `commandId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="queryCommandState"><code><span class="field-name">queryCommandState</span><span class="parenthesis">(</span><span class="arg-name">commandId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#queryCommandState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `commandId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="queryCommandSupported"><code><span class="field-name">queryCommandSupported</span><span class="parenthesis">(</span><span class="arg-name">commandId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#queryCommandSupported"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `commandId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="queryCommandValue"><code><span class="field-name">queryCommandValue</span><span class="parenthesis">(</span><span class="arg-name">commandId</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#queryCommandValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `commandId` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="captureEvents"><code><span class="field-name">captureEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#captureEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="releaseEvents"><code><span class="field-name">releaseEvents</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#releaseEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTableCellElement"><code><span class="field-name">createTableCellElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableCellElement/" class="type-link">TableCellElement</a></code><a class="header-anchor" href="#createTableCellElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<td>` element.
| Returns |
|---------|
| [TableCellElement](/api-docs/clay-web/js/html/TableCellElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSelectElement"><code><span class="field-name">createSelectElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SelectElement/" class="type-link">SelectElement</a></code><a class="header-anchor" href="#createSelectElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<select>` element.
| Returns |
|---------|
| [SelectElement](/api-docs/clay-web/js/html/SelectElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFontElement"><code><span class="field-name">createFontElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FontElement/" class="type-link">FontElement</a></code><a class="header-anchor" href="#createFontElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<font>` element.
| Returns |
|---------|
| [FontElement](/api-docs/clay-web/js/html/FontElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDListElement"><code><span class="field-name">createDListElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DListElement/" class="type-link">DListElement</a></code><a class="header-anchor" href="#createDListElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<dl>` element.
| Returns |
|---------|
| [DListElement](/api-docs/clay-web/js/html/DListElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFrameElement"><code><span class="field-name">createFrameElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FrameElement/" class="type-link">FrameElement</a></code><a class="header-anchor" href="#createFrameElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<frame>` element.
| Returns |
|---------|
| [FrameElement](/api-docs/clay-web/js/html/FrameElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createOListElement"><code><span class="field-name">createOListElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OListElement/" class="type-link">OListElement</a></code><a class="header-anchor" href="#createOListElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<ol>` element.
| Returns |
|---------|
| [OListElement](/api-docs/clay-web/js/html/OListElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createLIElement"><code><span class="field-name">createLIElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/LIElement/" class="type-link">LIElement</a></code><a class="header-anchor" href="#createLIElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<li>` element.
| Returns |
|---------|
| [LIElement](/api-docs/clay-web/js/html/LIElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createHRElement"><code><span class="field-name">createHRElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HRElement/" class="type-link">HRElement</a></code><a class="header-anchor" href="#createHRElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<hr>` element.
| Returns |
|---------|
| [HRElement](/api-docs/clay-web/js/html/HRElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createParamElement"><code><span class="field-name">createParamElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ParamElement/" class="type-link">ParamElement</a></code><a class="header-anchor" href="#createParamElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<param>` element.
| Returns |
|---------|
| [ParamElement](/api-docs/clay-web/js/html/ParamElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createLabelElement"><code><span class="field-name">createLabelElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/LabelElement/" class="type-link">LabelElement</a></code><a class="header-anchor" href="#createLabelElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<label>` element.
| Returns |
|---------|
| [LabelElement](/api-docs/clay-web/js/html/LabelElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTrackElement"><code><span class="field-name">createTrackElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TrackElement/" class="type-link">TrackElement</a></code><a class="header-anchor" href="#createTrackElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<track>` element.
| Returns |
|---------|
| [TrackElement](/api-docs/clay-web/js/html/TrackElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDivElement"><code><span class="field-name">createDivElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DivElement/" class="type-link">DivElement</a></code><a class="header-anchor" href="#createDivElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<div>` element.
| Returns |
|---------|
| [DivElement](/api-docs/clay-web/js/html/DivElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTitleElement"><code><span class="field-name">createTitleElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TitleElement/" class="type-link">TitleElement</a></code><a class="header-anchor" href="#createTitleElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<title>` element.
| Returns |
|---------|
| [TitleElement](/api-docs/clay-web/js/html/TitleElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAnchorElement"><code><span class="field-name">createAnchorElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AnchorElement/" class="type-link">AnchorElement</a></code><a class="header-anchor" href="#createAnchorElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<a>` element.
| Returns |
|---------|
| [AnchorElement](/api-docs/clay-web/js/html/AnchorElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createStyleElement"><code><span class="field-name">createStyleElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/StyleElement/" class="type-link">StyleElement</a></code><a class="header-anchor" href="#createStyleElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<style>` element.
| Returns |
|---------|
| [StyleElement](/api-docs/clay-web/js/html/StyleElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createEmbedElement"><code><span class="field-name">createEmbedElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/EmbedElement/" class="type-link">EmbedElement</a></code><a class="header-anchor" href="#createEmbedElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<embed>` element.
| Returns |
|---------|
| [EmbedElement](/api-docs/clay-web/js/html/EmbedElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMeterElement"><code><span class="field-name">createMeterElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MeterElement/" class="type-link">MeterElement</a></code><a class="header-anchor" href="#createMeterElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<meter>` element.
| Returns |
|---------|
| [MeterElement](/api-docs/clay-web/js/html/MeterElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createPictureElement"><code><span class="field-name">createPictureElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/PictureElement/" class="type-link">PictureElement</a></code><a class="header-anchor" href="#createPictureElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<picture>` element.
| Returns |
|---------|
| [PictureElement](/api-docs/clay-web/js/html/PictureElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createPreElement"><code><span class="field-name">createPreElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/PreElement/" class="type-link">PreElement</a></code><a class="header-anchor" href="#createPreElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<pre>` element.
| Returns |
|---------|
| [PreElement](/api-docs/clay-web/js/html/PreElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTableSectionElement"><code><span class="field-name">createTableSectionElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableSectionElement/" class="type-link">TableSectionElement</a></code><a class="header-anchor" href="#createTableSectionElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<thead>` element.
| Returns |
|---------|
| [TableSectionElement](/api-docs/clay-web/js/html/TableSectionElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createHeadElement"><code><span class="field-name">createHeadElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HeadElement/" class="type-link">HeadElement</a></code><a class="header-anchor" href="#createHeadElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<head>` element.
| Returns |
|---------|
| [HeadElement](/api-docs/clay-web/js/html/HeadElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createOptGroupElement"><code><span class="field-name">createOptGroupElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OptGroupElement/" class="type-link">OptGroupElement</a></code><a class="header-anchor" href="#createOptGroupElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<optgroup>` element.
| Returns |
|---------|
| [OptGroupElement](/api-docs/clay-web/js/html/OptGroupElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAudioElement"><code><span class="field-name">createAudioElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AudioElement/" class="type-link">AudioElement</a></code><a class="header-anchor" href="#createAudioElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<audio>` element.
| Returns |
|---------|
| [AudioElement](/api-docs/clay-web/js/html/AudioElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createVideoElement"><code><span class="field-name">createVideoElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/VideoElement/" class="type-link">VideoElement</a></code><a class="header-anchor" href="#createVideoElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<video>` element.
| Returns |
|---------|
| [VideoElement](/api-docs/clay-web/js/html/VideoElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createLegendElement"><code><span class="field-name">createLegendElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/LegendElement/" class="type-link">LegendElement</a></code><a class="header-anchor" href="#createLegendElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<legend>` element.
| Returns |
|---------|
| [LegendElement](/api-docs/clay-web/js/html/LegendElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createUListElement"><code><span class="field-name">createUListElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/UListElement/" class="type-link">UListElement</a></code><a class="header-anchor" href="#createUListElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<ul>` element.
| Returns |
|---------|
| [UListElement](/api-docs/clay-web/js/html/UListElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDirectoryElement"><code><span class="field-name">createDirectoryElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DirectoryElement/" class="type-link">DirectoryElement</a></code><a class="header-anchor" href="#createDirectoryElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<dir>` element.
| Returns |
|---------|
| [DirectoryElement](/api-docs/clay-web/js/html/DirectoryElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTableElement"><code><span class="field-name">createTableElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableElement/" class="type-link">TableElement</a></code><a class="header-anchor" href="#createTableElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<table>` element.
| Returns |
|---------|
| [TableElement](/api-docs/clay-web/js/html/TableElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSlotElement"><code><span class="field-name">createSlotElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SlotElement/" class="type-link">SlotElement</a></code><a class="header-anchor" href="#createSlotElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<slot>` element.
| Returns |
|---------|
| [SlotElement](/api-docs/clay-web/js/html/SlotElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSourceElement"><code><span class="field-name">createSourceElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SourceElement/" class="type-link">SourceElement</a></code><a class="header-anchor" href="#createSourceElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<source>` element.
| Returns |
|---------|
| [SourceElement](/api-docs/clay-web/js/html/SourceElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createLinkElement"><code><span class="field-name">createLinkElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/LinkElement/" class="type-link">LinkElement</a></code><a class="header-anchor" href="#createLinkElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<link>` element.
| Returns |
|---------|
| [LinkElement](/api-docs/clay-web/js/html/LinkElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createIFrameElement"><code><span class="field-name">createIFrameElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/IFrameElement/" class="type-link">IFrameElement</a></code><a class="header-anchor" href="#createIFrameElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<iframe>` element.
| Returns |
|---------|
| [IFrameElement](/api-docs/clay-web/js/html/IFrameElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMediaElement"><code><span class="field-name">createMediaElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MediaElement/" class="type-link">MediaElement</a></code><a class="header-anchor" href="#createMediaElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<media>` element.
| Returns |
|---------|
| [MediaElement](/api-docs/clay-web/js/html/MediaElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMapElement"><code><span class="field-name">createMapElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MapElement/" class="type-link">MapElement</a></code><a class="header-anchor" href="#createMapElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<map>` element.
| Returns |
|---------|
| [MapElement](/api-docs/clay-web/js/html/MapElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFormElement"><code><span class="field-name">createFormElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FormElement/" class="type-link">FormElement</a></code><a class="header-anchor" href="#createFormElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<form>` element.
| Returns |
|---------|
| [FormElement](/api-docs/clay-web/js/html/FormElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createOptionElement"><code><span class="field-name">createOptionElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OptionElement/" class="type-link">OptionElement</a></code><a class="header-anchor" href="#createOptionElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<option>` element.
| Returns |
|---------|
| [OptionElement](/api-docs/clay-web/js/html/OptionElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMetaElement"><code><span class="field-name">createMetaElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MetaElement/" class="type-link">MetaElement</a></code><a class="header-anchor" href="#createMetaElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<meta>` element.
| Returns |
|---------|
| [MetaElement](/api-docs/clay-web/js/html/MetaElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createObjectElement"><code><span class="field-name">createObjectElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ObjectElement/" class="type-link">ObjectElement</a></code><a class="header-anchor" href="#createObjectElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<object>` element.
| Returns |
|---------|
| [ObjectElement](/api-docs/clay-web/js/html/ObjectElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTableCaptionElement"><code><span class="field-name">createTableCaptionElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableCaptionElement/" class="type-link">TableCaptionElement</a></code><a class="header-anchor" href="#createTableCaptionElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<caption>` element.
| Returns |
|---------|
| [TableCaptionElement](/api-docs/clay-web/js/html/TableCaptionElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createImageElement"><code><span class="field-name">createImageElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ImageElement/" class="type-link">ImageElement</a></code><a class="header-anchor" href="#createImageElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<img>` element.
| Returns |
|---------|
| [ImageElement](/api-docs/clay-web/js/html/ImageElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTextAreaElement"><code><span class="field-name">createTextAreaElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TextAreaElement/" class="type-link">TextAreaElement</a></code><a class="header-anchor" href="#createTextAreaElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<textarea>` element.
| Returns |
|---------|
| [TextAreaElement](/api-docs/clay-web/js/html/TextAreaElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createScriptElement"><code><span class="field-name">createScriptElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ScriptElement/" class="type-link">ScriptElement</a></code><a class="header-anchor" href="#createScriptElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<script>` element.
| Returns |
|---------|
| [ScriptElement](/api-docs/clay-web/js/html/ScriptElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDataListElement"><code><span class="field-name">createDataListElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DataListElement/" class="type-link">DataListElement</a></code><a class="header-anchor" href="#createDataListElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<datalist>` element.
| Returns |
|---------|
| [DataListElement](/api-docs/clay-web/js/html/DataListElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createModElement"><code><span class="field-name">createModElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ModElement/" class="type-link">ModElement</a></code><a class="header-anchor" href="#createModElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<mod>` element.
| Returns |
|---------|
| [ModElement](/api-docs/clay-web/js/html/ModElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createOutputElement"><code><span class="field-name">createOutputElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/OutputElement/" class="type-link">OutputElement</a></code><a class="header-anchor" href="#createOutputElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<output>` element.
| Returns |
|---------|
| [OutputElement](/api-docs/clay-web/js/html/OutputElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createAreaElement"><code><span class="field-name">createAreaElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/AreaElement/" class="type-link">AreaElement</a></code><a class="header-anchor" href="#createAreaElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<area>` element.
| Returns |
|---------|
| [AreaElement](/api-docs/clay-web/js/html/AreaElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createProgressElement"><code><span class="field-name">createProgressElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ProgressElement/" class="type-link">ProgressElement</a></code><a class="header-anchor" href="#createProgressElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<progress>` element.
| Returns |
|---------|
| [ProgressElement](/api-docs/clay-web/js/html/ProgressElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createButtonElement"><code><span class="field-name">createButtonElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ButtonElement/" class="type-link">ButtonElement</a></code><a class="header-anchor" href="#createButtonElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<button>` element.
| Returns |
|---------|
| [ButtonElement](/api-docs/clay-web/js/html/ButtonElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFieldSetElement"><code><span class="field-name">createFieldSetElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FieldSetElement/" class="type-link">FieldSetElement</a></code><a class="header-anchor" href="#createFieldSetElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<fieldset>` element.
| Returns |
|---------|
| [FieldSetElement](/api-docs/clay-web/js/html/FieldSetElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createMenuElement"><code><span class="field-name">createMenuElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/MenuElement/" class="type-link">MenuElement</a></code><a class="header-anchor" href="#createMenuElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<menu>` element.
| Returns |
|---------|
| [MenuElement](/api-docs/clay-web/js/html/MenuElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBRElement"><code><span class="field-name">createBRElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BRElement/" class="type-link">BRElement</a></code><a class="header-anchor" href="#createBRElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<br>` element.
| Returns |
|---------|
| [BRElement](/api-docs/clay-web/js/html/BRElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createSpanElement"><code><span class="field-name">createSpanElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/SpanElement/" class="type-link">SpanElement</a></code><a class="header-anchor" href="#createSpanElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<span>` element.
| Returns |
|---------|
| [SpanElement](/api-docs/clay-web/js/html/SpanElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDetailsElement"><code><span class="field-name">createDetailsElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DetailsElement/" class="type-link">DetailsElement</a></code><a class="header-anchor" href="#createDetailsElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<details>` element.
| Returns |
|---------|
| [DetailsElement](/api-docs/clay-web/js/html/DetailsElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBodyElement"><code><span class="field-name">createBodyElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BodyElement/" class="type-link">BodyElement</a></code><a class="header-anchor" href="#createBodyElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<body>` element.
| Returns |
|---------|
| [BodyElement](/api-docs/clay-web/js/html/BodyElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createInputElement"><code><span class="field-name">createInputElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/InputElement/" class="type-link">InputElement</a></code><a class="header-anchor" href="#createInputElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<input>` element.
| Returns |
|---------|
| [InputElement](/api-docs/clay-web/js/html/InputElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createBaseElement"><code><span class="field-name">createBaseElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/BaseElement/" class="type-link">BaseElement</a></code><a class="header-anchor" href="#createBaseElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<base>` element.
| Returns |
|---------|
| [BaseElement](/api-docs/clay-web/js/html/BaseElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createQuoteElement"><code><span class="field-name">createQuoteElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/QuoteElement/" class="type-link">QuoteElement</a></code><a class="header-anchor" href="#createQuoteElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<quote>` element.
| Returns |
|---------|
| [QuoteElement](/api-docs/clay-web/js/html/QuoteElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createFrameSetElement"><code><span class="field-name">createFrameSetElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/FrameSetElement/" class="type-link">FrameSetElement</a></code><a class="header-anchor" href="#createFrameSetElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<frameset>` element.
| Returns |
|---------|
| [FrameSetElement](/api-docs/clay-web/js/html/FrameSetElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createCanvasElement"><code><span class="field-name">createCanvasElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/CanvasElement/" class="type-link">CanvasElement</a></code><a class="header-anchor" href="#createCanvasElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<canvas>` element.
| Returns |
|---------|
| [CanvasElement](/api-docs/clay-web/js/html/CanvasElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createParagraphElement"><code><span class="field-name">createParagraphElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/ParagraphElement/" class="type-link">ParagraphElement</a></code><a class="header-anchor" href="#createParagraphElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<p>` element.
| Returns |
|---------|
| [ParagraphElement](/api-docs/clay-web/js/html/ParagraphElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTableColElement"><code><span class="field-name">createTableColElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableColElement/" class="type-link">TableColElement</a></code><a class="header-anchor" href="#createTableColElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<col>` element.
| Returns |
|---------|
| [TableColElement](/api-docs/clay-web/js/html/TableColElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createTableRowElement"><code><span class="field-name">createTableRowElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/TableRowElement/" class="type-link">TableRowElement</a></code><a class="header-anchor" href="#createTableRowElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<tr>` element.
| Returns |
|---------|
| [TableRowElement](/api-docs/clay-web/js/html/TableRowElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createHtmlElement"><code><span class="field-name">createHtmlElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/HtmlElement/" class="type-link">HtmlElement</a></code><a class="header-anchor" href="#createHtmlElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<html>` element.
| Returns |
|---------|
| [HtmlElement](/api-docs/clay-web/js/html/HtmlElement/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDialoglElement"><code><span class="field-name">createDialoglElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/js/html/DialogElement/" class="type-link">DialogElement</a></code><a class="header-anchor" href="#createDialoglElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shorthand for creating an HTML `<dialog>` element.
| Returns |
|---------|
| [DialogElement](/api-docs/clay-web/js/html/DialogElement/) |

