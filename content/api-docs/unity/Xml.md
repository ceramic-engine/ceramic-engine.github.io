---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Xml
target: Unity
permalink: api-docs/unity/Xml/
---

# Xml

<div class="type-hierarchy"><strong>Xml</strong> (Class)</div>

Cross-platform Xml API.

<div class="see"><strong>See:</strong> https://haxe.org/manual/std-Xml.html</div>


## Static Members

<div class="signature field-var has-description" id="Element"><code><span class="field-name">Element</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#Element"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML element type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="PCData"><code><span class="field-name">PCData</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#PCData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML parsed character data type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="CData"><code><span class="field-name">CData</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#CData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML character data type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="Comment"><code><span class="field-name">Comment</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#Comment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML comment type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="DocType"><code><span class="field-name">DocType</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#DocType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML doctype element type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ProcessingInstruction"><code><span class="field-name">ProcessingInstruction</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#ProcessingInstruction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML processing instruction type.

<hr class="field-separator" />

<div class="signature field-var has-description" id="Document"><code><span class="field-name">Document</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#Document"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

XML document type.

<hr class="field-separator" />

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses the String into an Xml document.

| Name | Type |
|------|------|
| `str` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createElement"><code><span class="field-name">createElement</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createPCData"><code><span class="field-name">createPCData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createPCData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createCData"><code><span class="field-name">createCData</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createCData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createComment"><code><span class="field-name">createComment</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createComment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDocType"><code><span class="field-name">createDocType</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createDocType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createProcessingInstruction"><code><span class="field-name">createProcessingInstruction</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createProcessingInstruction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.

| Name | Type |
|------|------|
| `data` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDocument"><code><span class="field-name">createDocument</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#createDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a node of the given type.
| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

## Instance Members

<div class="signature field-var has-description" id="nodeType"><code><span class="field-name">nodeType</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a></code><a class="header-anchor" href="#nodeType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the type of the Xml Node. This should be used before
accessing other functions since some might raise an exception
if the node type is not correct.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodeName"><code><span class="field-name">nodeName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#nodeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the node name of an Element.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodeValue"><code><span class="field-name">nodeValue</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#nodeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the node value. Only works if the Xml node is not an Element or a Document.

<hr class="field-separator" />

<div class="signature field-var has-description" id="parent"><code><span class="field-name">parent</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#parent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the parent object in the Xml hierarchy.
The parent can be `null`, an Element or a Document.

<hr class="field-separator" />

<div class="signature field-method has-description" id="get"><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">att</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get the given attribute of an Element node. Returns `null` if not found.
Attributes are case-sensitive.

| Name | Type |
|------|------|
| `att` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="set"><code><span class="field-name">set</span><span class="parenthesis">(</span><span class="arg-name">att</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set the given attribute value for an Element node.
Attributes are case-sensitive.

| Name | Type |
|------|------|
| `att` | [String](/api-docs/unity/String/) |
| `value` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">att</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells if the Element node has a given attribute.
Attributes are case-sensitive.

| Name | Type |
|------|------|
| `att` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="attributes"><code><span class="field-name">attributes</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#attributes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an `Iterator` on all the attribute names.
| Returns |
|---------|
| [Iterator](/api-docs/unity/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="iterator"><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator of all child nodes.
Only works if the current node is an Element or a Document.
| Returns |
|---------|
| [Iterator](/api-docs/unity/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="elements"><code><span class="field-name">elements</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#elements"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator of all child nodes which are Elements.
Only works if the current node is an Element or a Document.
| Returns |
|---------|
| [Iterator](/api-docs/unity/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="elementsNamed"><code><span class="field-name">elementsNamed</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Iterator/" class="type-link">Iterator</a></code><a class="header-anchor" href="#elementsNamed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an iterator of all child nodes which are Elements with the given nodeName.
Only works if the current node is an Element or a Document.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Iterator](/api-docs/unity/Iterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="firstElement"><code><span class="field-name">firstElement</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a></code><a class="header-anchor" href="#firstElement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the first child node which is an Element.
| Returns |
|---------|
| [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addChild"><code><span class="field-name">addChild</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#addChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a child node to the Document or Element.
A child node can only be inside one given parent node, which is indicated by the `parent` property.
If the child is already inside this Document or Element, it will be moved to the last position among the Document or Element's children.
If the child node was previously inside a different node, it will be moved to this Document or Element.

| Name | Type |
|------|------|
| `x` | [Xml](/api-docs/unity/Xml/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeChild"><code><span class="field-name">removeChild</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="#" class="type-link">Xml</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#removeChild"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a child from the Document or Element.
Returns true if the child was successfuly removed.

| Name | Type |
|------|------|
| `x` | [Xml](/api-docs/unity/Xml/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a String representation of the Xml node.
| Returns |
|---------|
| [String](/api-docs/unity/String/) |

## Private Members

<div class="signature field-var no-description" id="children"><code><span class="field-name">children</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="#" class="type-link">Xml</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#children"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="attributeMap"><code><span class="field-name">attributeMap</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#attributeMap"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="ensureElementType"><code><span class="field-name">ensureElementType</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ensureElementType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">nodeType</span><span class="operator">:</span> <a href="/api-docs/unity/XmlType/" class="type-link">XmlType</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `nodeType` | [XmlType](/api-docs/unity/XmlType/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

