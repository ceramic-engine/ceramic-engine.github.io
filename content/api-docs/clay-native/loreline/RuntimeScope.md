---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeScope
target: Clay (Native)
permalink: api-docs/clay-native/loreline/RuntimeScope/
---

# RuntimeScope

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.RuntimeScope</strong> (Class)</div>

Represents a scope in the execution stack of a Loreline script.
Every time we enter a new block node, we enter a new scope identified with a unique integer value.
When exiting that scope, the related temporary states associated with it are destroyed.

## Instance Members

<div class="signature field-var has-description" id="id"><code><span class="field-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The scope id, a unique integer value in the stack.

<hr class="field-separator" />

<div class="signature field-var has-description" id="beat"><code><span class="field-name">beat</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#beat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parent beat where this scope is located.
Can be either a top level beat or a nested beat.

<hr class="field-separator" />

<div class="signature field-var has-description" id="node"><code><span class="field-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">AstNode</a></code><a class="header-anchor" href="#node"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The node where this scope is attached.

<hr class="field-separator" />

<div class="signature field-var has-description" id="beats"><code><span class="field-name">beats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#beats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The nested beat declarations, if any, found in this scope.

<hr class="field-separator" />

<div class="signature field-var has-description" id="state"><code><span class="field-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/RuntimeState/" class="type-link">RuntimeState</a></code><a class="header-anchor" href="#state"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The temporary state associated with this scope, if any.

<hr class="field-separator" />

<div class="signature field-var has-description" id="head"><code><span class="field-name">head</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">AstNode</a></code><a class="header-anchor" href="#head"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If applicable, the node this scope's "reading head" is at.
This is used to track the current execution position within the scope.

<hr class="field-separator" />

<div class="signature field-var has-description" id="insertion"><code><span class="field-name">insertion</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a></code><a class="header-anchor" href="#insertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If this scope was created from an insertion, this is the insertion runtime data.

<hr class="field-separator" />

<div class="signature field-method has-description" id="beatByName"><code><span class="field-name">beatByName</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#beatByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds a nested beat declaration with the given name in this scope, if any.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-native/String/) | The name of the beat to find  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-native/Null/)<[NBeatDecl](/api-docs/clay-native/loreline/NBeatDecl/)> | The beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beats</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/RuntimeState/" class="type-link">RuntimeState</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">head</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `id` | [Null](/api-docs/clay-native/Null/)<[Int](/api-docs/clay-native/Int/)> | *(optional)* | * The scope id, a unique integer value in the stack. |
| `beat` | [NBeatDecl](/api-docs/clay-native/loreline/NBeatDecl/) | | * The parent beat where this scope is located. Can be either a top level beat or a nested beat. |
| `node` | [AstNode](/api-docs/clay-native/loreline/AstNode/) | | * The node where this scope is attached. |
| `beats` | [Null](/api-docs/clay-native/Null/)<[Array](/api-docs/clay-native/Array/)<[NBeatDecl](/api-docs/clay-native/loreline/NBeatDecl/)>> | *(optional)* | * The nested beat declarations, if any, found in this scope. |
| `state` | [Null](/api-docs/clay-native/Null/)<[RuntimeState](/api-docs/clay-native/loreline/RuntimeState/)> | *(optional)* | * The temporary state associated with this scope, if any. |
| `head` | [Null](/api-docs/clay-native/Null/)<[AstNode](/api-docs/clay-native/loreline/AstNode/)> | *(optional)* | * If applicable, the node this scope's "reading head" is at. This is used to track the current execution position within the scope. |
| `insertion` | [Null](/api-docs/clay-native/Null/)<[RuntimeInsertion](/api-docs/clay-native/loreline/RuntimeInsertion/)> | *(optional)* | * If this scope was created from an insertion, this is the insertion runtime data. |

## Metadata

| Name | Parameters |
|------|------------|
| `:structInit` | - |

