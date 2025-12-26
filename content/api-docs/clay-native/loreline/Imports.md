---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Imports
target: Clay (Native)
permalink: api-docs/clay-native/loreline/Imports/
---

# Imports

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Imports.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Imports</strong> (Class)</div>

## Instance Members

<div class="signature field-var no-description" id="autoAddExtension"><code><span class="field-name">autoAddExtension</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#autoAddExtension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolve"><code><span class="field-name">resolve</span><span class="parenthesis">(</span><span class="arg-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tokens</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a><span class="operator">,</span> <span class="arg-name">handleFile</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ImportsFileHandler/" class="type-link">ImportsFileHandler</a><span class="operator">,</span> <span class="arg-name">handleError</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ImportsErrorHandler/" class="type-link">ImportsErrorHandler</a><span class="operator">,</span> <span class="arg-name">done</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ImportsCallback/" class="type-link">ImportsCallback</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rootPath` | [String](/api-docs/clay-native/String/) |
| `tokens` | [Tokens](/api-docs/clay-native/loreline/Tokens/) |
| `handleFile` | [ImportsFileHandler](/api-docs/clay-native/loreline/ImportsFileHandler/) |
| `handleError` | [ImportsErrorHandler](/api-docs/clay-native/loreline/ImportsErrorHandler/) |
| `done` | [ImportsCallback](/api-docs/clay-native/loreline/ImportsCallback/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="handleFile"><code><span class="field-name">handleFile</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ImportsFileHandler/" class="type-link">ImportsFileHandler</a></code><a class="header-anchor" href="#handleFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handleError"><code><span class="field-name">handleError</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ImportsErrorHandler/" class="type-link">ImportsErrorHandler</a></code><a class="header-anchor" href="#handleError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="tokens"><code><span class="field-name">tokens</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a></code><a class="header-anchor" href="#tokens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="rootPath"><code><span class="field-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#rootPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="resolvedImports"><code><span class="field-name">resolvedImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#resolvedImports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="done"><code><span class="field-name">done</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/ImportsCallback/" class="type-link">ImportsCallback</a></code><a class="header-anchor" href="#done"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hasErrors"><code><span class="field-name">hasErrors</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasErrors"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pendingImports"><code><span class="field-name">pendingImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pendingImports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ext"><code><span class="field-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#ext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="processImports"><code><span class="field-name">processImports</span><span class="parenthesis">(</span><span class="arg-name">toImport</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">visitedImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="arg-name">resolvedImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#processImports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `toImport` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `visitedImports` | [Map](/api-docs/clay-native/Map/) |
| `resolvedImports` | [Map](/api-docs/clay-native/Map/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleItemInLoop"><code><span class="field-name">handleItemInLoop</span><span class="parenthesis">(</span><span class="arg-name">item</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">loopInfo</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/_Imports/ImportsLoopInfo/" class="type-link">loreline._Imports.ImportsLoopInfo</a><span class="operator">,</span> <span class="arg-name">toImport</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">visitedImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="arg-name">resolvedImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleItemInLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `item` | [String](/api-docs/clay-native/String/) |
| `loopInfo` | [loreline._Imports.ImportsLoopInfo](/api-docs/clay-native/loreline/_Imports/ImportsLoopInfo/) |
| `toImport` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `visitedImports` | [Map](/api-docs/clay-native/Map/) |
| `resolvedImports` | [Map](/api-docs/clay-native/Map/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="extractImports"><code><span class="field-name">extractImports</span><span class="parenthesis">(</span><span class="arg-name">cwd</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">tokens</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/Tokens/" class="type-link">Tokens</a><span class="operator">,</span> <span class="arg-name">toImport</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">visitedImports</span><span class="operator">:</span> <a href="/api-docs/clay-native/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#extractImports"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `cwd` | [String](/api-docs/clay-native/String/) |
| `tokens` | [Tokens](/api-docs/clay-native/loreline/Tokens/) |
| `toImport` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `visitedImports` | [Map](/api-docs/clay-native/Map/) |

