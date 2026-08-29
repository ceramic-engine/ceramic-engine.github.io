---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Lens
target: Clay (Web)
permalink: api-docs/clay-web/loreline/Lens/
---

# Lens

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lens.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Lens</strong> (Class)</div>

Utility class for analyzing Loreline scripts without executing them.
Provides methods for finding nodes, variables, references, etc.

## Instance Members

<div class="signature field-method no-description" id="getNodeById"><code><span class="field-name">getNodeById</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeId/" class="type-link">NodeId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodeById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [NodeId](/api-docs/clay-web/loreline/NodeId/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodeAtPosition"><code><span class="field-name">getNodeAtPosition</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodeAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the node at the given position


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) | Position to check  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> | Most specific node at that position, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getClosestNodeAtOrBeforePosition"><code><span class="field-name">getClosestNodeAtOrBeforePosition</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getClosestNodeAtOrBeforePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the closest node before or at the given position


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) | Position to check  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> | Most specific node at that position or before, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodesOfType"><code><span class="field-name">getNodesOfType</span><span class="parenthesis">(</span><span class="arg-name">nodeType</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getNodesOfType.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">includeImported</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">getNodesOfType.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodesOfType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all nodes of a specific type


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `nodeType` | [Class](/api-docs/clay-web/Class/)<getNodesOfType.T> | | Class type to find  |
| `includeImported` | [Bool](/api-docs/clay-web/Bool/) | `false` |  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<getNodesOfType.T> | Array of matching nodes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getDialogueSpeakers"><code><span class="field-name">getDialogueSpeakers</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getDialogueSpeakers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Collects the unique names of all characters that speak in a dialogue
anywhere within the given node's subtree (including dialogues nested in
choices, if branches, alternatives, etc.).


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) | Root of the subtree to scan  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | Unique speaker names, in first-seen order |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getParentNode"><code><span class="field-name">getParentNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getParentNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the parent node of a given node


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) | Child node  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> | Parent node or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFirstParentOfType"><code><span class="field-name">getFirstParentOfType</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/clay-web/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getFirstParentOfType.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">getFirstParentOfType.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFirstParentOfType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the first parent node matching the given type


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) | Child node  |
| `type` | [Class](/api-docs/clay-web/Class/)<getFirstParentOfType.T> |  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<getFirstParentOfType.T> | Parent node or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodeFilePath"><code><span class="field-name">getNodeFilePath</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getNodeFilePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the file path of the file containing the given node.
Walks up the parent chain through NImportStatement nodes to
resolve the full path. Returns rootPath if the node is in the root file.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |
| `rootPath` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodeAncestorFilePaths"><code><span class="field-name">getNodeAncestorFilePaths</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodeAncestorFilePaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the chain of file paths from the node's own source file up to
the root script, with each Loreline extension stripped. Used by the
interpreter for hierarchical translation fallback through the import
ancestor chain.

The order is most-specific first, root last:
  - node in root.lor                                -> ["."]
  - node in imports/foo.lor (imported by root)      -> ["imports/foo", "."]
  - node in imports/bar.lor (imported by foo.lor)   -> ["imports/bar", "imports/foo", "."]

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodeRelativeFilePath"><code><span class="field-name">getNodeRelativeFilePath</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#getNodeRelativeFilePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the path of the node's source file relative to the root script,
with any Loreline extension (`.lor`/`.lor.txt`) stripped.
- Returns "." for nodes in the root script.
- Returns the import chain path joined and normalized for nodes in imported files
(e.g. "imports/foo", "../bar").
Used by the interpreter to look up scoped translation keys.

| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getImportedPaths"><code><span class="field-name">getImportedPaths</span><span class="parenthesis">(</span><span class="arg-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getImportedPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rootPath` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveArrayAccess"><code><span class="field-name">resolveArrayAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NArrayAccess/" class="type-link">NArrayAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveArrayAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `access` | [NArrayAccess](/api-docs/clay-web/loreline/NArrayAccess/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveAccess"><code><span class="field-name">resolveAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves an identifier access to its corresponding node in the AST.
Resolution follows the same priority order as the interpreter:
1. State fields in current scope and parent beats
2. Top-level state fields
3. Top-level character declarations
4. Beat declarations



| Name | Type | Description |
|------|------|-------------|
| `access` | [NAccess](/api-docs/clay-web/loreline/NAccess/) | The access expression to resolve  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> | The referenced node if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatFromAccess"><code><span class="field-name">findBeatFromAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatFromAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the beat declaration referenced by the given call.
This method searches through the beat declarations to find a match based on the call's fields.


| Name | Type |
|------|------|
| `access` | [NAccess](/api-docs/clay-web/loreline/NAccess/) |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> | The referenced beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatParamFromAccess"><code><span class="field-name">findBeatParamFromAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatParamFromAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the beat parameter referenced by the given bare access, if any.
Walks the enclosing beats from innermost to outermost (matching the
runtime scope precedence) and returns the first parameter whose name
matches the access.


| Name | Type | Description |
|------|------|-------------|
| `access` | [NAccess](/api-docs/clay-web/loreline/NAccess/) | The access to resolve  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<AnonStruct> | The matching parameter and its owning beat, or null |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findCallArgument"><code><span class="field-name">findCallArgument</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findCallArgument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When the given node is (part of) an argument of a call, beat call,
transition or insertion, returns the owner node and the argument index.
Only expression chains that terminate directly in an args array count;
the call target itself is not an argument.


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) | The node to check (typically the hovered node)  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<AnonStruct> | The owner node and argument index, or null |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatFromTransition"><code><span class="field-name">findBeatFromTransition</span><span class="parenthesis">(</span><span class="arg-name">transition</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NTransition/" class="type-link">NTransition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatFromTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the beat declaration referenced by the given transition.
This method searches through the beat declarations to find a match based on the transition's fields.


| Name | Type | Description |
|------|------|-------------|
| `transition` | [NTransition](/api-docs/clay-web/loreline/NTransition/) | The transition object containing the reference to search for  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> | The referenced beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatFromInsertion"><code><span class="field-name">findBeatFromInsertion</span><span class="parenthesis">(</span><span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NInsertion/" class="type-link">NInsertion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatFromInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the beat declaration referenced by the given insertion.
This method searches through the beat declarations to find a match based on the insertion's fields.


| Name | Type | Description |
|------|------|-------------|
| `insertion` | [NInsertion](/api-docs/clay-web/loreline/NInsertion/) | The insertion object containing the reference to search for  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> | The referenced beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findBeatByPathFromNode"><code><span class="field-name">findBeatByPathFromNode</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatByPathFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isTopLevelNode"><code><span class="field-name">isTopLevelNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTopLevelNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findTopLevelBeatFromNode"><code><span class="field-name">findTopLevelBeatFromNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findTopLevelBeatFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findBeatByNameFromNode"><code><span class="field-name">findBeatByNameFromNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatByNameFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findCharacterFromDialogue"><code><span class="field-name">findCharacterFromDialogue</span><span class="parenthesis">(</span><span class="arg-name">dialogue</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NDialogueStatement/" class="type-link">NDialogueStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findCharacterFromDialogue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the character declaration referenced by the given dialogue statement.
This method searches through the character declarations to find a match based on the
dialogue's character name.



| Name | Type | Description |
|------|------|-------------|
| `dialogue` | [NDialogueStatement](/api-docs/clay-web/loreline/NDialogueStatement/) | The dialogue statement containing the character reference  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[NCharacterDecl](/api-docs/clay-web/loreline/NCharacterDecl/)> | The referenced character declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findCharacterByNameFromNode"><code><span class="field-name">findCharacterByNameFromNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findCharacterByNameFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[NCharacterDecl](/api-docs/clay-web/loreline/NCharacterDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findFunctionByNameFromNode"><code><span class="field-name">findFunctionByNameFromNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findFunctionByNameFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-web/String/) |
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getVisibleCharacters"><code><span class="field-name">getVisibleCharacters</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[NCharacterDecl](/api-docs/clay-web/loreline/NCharacterDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getVisibleFunctions"><code><span class="field-name">getVisibleFunctions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVisibleStateFields"><code><span class="field-name">getVisibleStateFields</span><span class="parenthesis">(</span><span class="arg-name">fromNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleStateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all state fields visible from a given position.
This includes fields from both temporary and permanent states.

| Name | Type |
|------|------|
| `fromNode` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[NObjectField](/api-docs/clay-web/loreline/NObjectField/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVisibleBeats"><code><span class="field-name">getVisibleBeats</span><span class="parenthesis">(</span><span class="arg-name">fromNode</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleBeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all beat declarations available from a given position.
This includes both top-level beats and nested beats that are in scope.

| Name | Type |
|------|------|
| `fromNode` | [Node](/api-docs/clay-web/loreline/Node/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAllTags"><code><span class="field-name">getAllTags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAllTags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all unique tags used in the script.

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | Array of unique tag strings |

<hr class="field-separator" />

<div class="signature field-method has-description" id="countTags"><code><span class="field-name">countTags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#countTags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Count every occurence of tags (hash comments)

| Returns | Description |
|---------|-------------|
| [Map](/api-docs/clay-web/Map/) | Map of tag counts |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findOutboundBeats"><code><span class="field-name">findOutboundBeats</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findOutboundBeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find all beats that can be reached from a given beat through transitions or calls.


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)>> | Array of references to reachable beats |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findReferencesToBeat"><code><span class="field-name">findReferencesToBeat</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findReferencesToBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all nodes that reference a specific beat declaration.


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to find references to  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/)>> | Array of references to this beat |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findModifiedStateFields"><code><span class="field-name">findModifiedStateFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findModifiedStateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all state fields that are modified within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NObjectField](/api-docs/clay-web/loreline/NObjectField/)>> | Array of references to modified state fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findReadStateFields"><code><span class="field-name">findReadStateFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findReadStateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all state fields that are read/accessed within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NObjectField](/api-docs/clay-web/loreline/NObjectField/)>> | Array of references to read state fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatCharacters"><code><span class="field-name">findBeatCharacters</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find all characters that have a presence in a given beat through:
- Field access to character state
- Dialogue statements


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NCharacterDecl](/api-docs/clay-web/loreline/NCharacterDecl/)>> | Array of references to characters involved in the beat |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findModifiedCharacterFields"><code><span class="field-name">findModifiedCharacterFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findModifiedCharacterFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all character fields that are modified within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NObjectField](/api-docs/clay-web/loreline/NObjectField/)>> | Array of references to modified character fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findReadCharacterFields"><code><span class="field-name">findReadCharacterFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findReadCharacterFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all character fields that are read/accessed within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/clay-web/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/clay-web/Array/)<[Reference](/api-docs/clay-web/loreline/Reference/)<[NObjectField](/api-docs/clay-web/loreline/NObjectField/)>> | Array of references to read character fields |

<hr class="field-separator" />

<div class="signature field-method no-description" id="traverse"><code><span class="field-name">traverse</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#traverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/clay-web/loreline/Node/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFuncLorscript"><code><span class="field-name">getFuncLorscript</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/FuncLorscript/" class="type-link">FuncLorscript</a></code><a class="header-anchor" href="#getFuncLorscript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/) |

| Returns |
|---------|
| [FuncLorscript](/api-docs/clay-web/loreline/FuncLorscript/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLorscriptExpr"><code><span class="field-name">getLorscriptExpr</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/lorscript/Expr/" class="type-link">loreline.lorscript.Expr</a></code><a class="header-anchor" href="#getLorscriptExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/) |
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) |

| Returns |
|---------|
| [loreline.lorscript.Expr](/api-docs/clay-web/loreline/lorscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveLorscriptAccess"><code><span class="field-name">resolveLorscriptAccess</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/lorscript/Expr/" class="type-link">loreline.lorscript.Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveLorscriptAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/) |
| `expr` | [loreline.lorscript.Expr](/api-docs/clay-web/loreline/lorscript/Expr/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isLorscriptExpr"><code><span class="field-name">isLorscriptExpr</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLorscriptExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getLorscriptCompletion"><code><span class="field-name">getLorscriptCompletion</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/LorscriptCompletion/" class="type-link">LorscriptCompletion</a></code><a class="header-anchor" href="#getLorscriptCompletion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/) |
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) |

| Returns |
|---------|
| [LorscriptCompletion](/api-docs/clay-web/loreline/LorscriptCompletion/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveAccessInFunction"><code><span class="field-name">resolveAccessInFunction</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveAccessInFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/clay-web/loreline/NFunctionDecl/) |
| `pos` | [Position](/api-docs/clay-web/loreline/Position/) |

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Node](/api-docs/clay-web/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) |

## Private Members

<div class="signature field-var has-description" id="script"><code><span class="field-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#script"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The script being analyzed

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodesById"><code><span class="field-name">nodesById</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nodesById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of all nodes by their unique ID

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentNodes"><code><span class="field-name">parentNodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parentNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of node IDs to their parent nodes

<hr class="field-separator" />

<div class="signature field-var has-description" id="childNodes"><code><span class="field-name">childNodes</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#childNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of node IDs to their child nodes

<hr class="field-separator" />

<div class="signature field-var no-description" id="lorscriptFunctions"><code><span class="field-name">lorscriptFunctions</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/FuncLorscript/" class="type-link">FuncLorscript</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lorscriptFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="initialize"><code><span class="field-name">initialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize all the lookups and analysis data

<hr class="field-separator" />

<div class="signature field-method has-description" id="findStateField"><code><span class="field-name">findStateField</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findStateField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the state field being accessed by a field access expression


| Name | Type | Description |
|------|------|-------------|
| `access` | [NAccess](/api-docs/clay-web/loreline/NAccess/) | The field access to analyze  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[NObjectField](/api-docs/clay-web/loreline/NObjectField/)> | The matching state field, if any |

