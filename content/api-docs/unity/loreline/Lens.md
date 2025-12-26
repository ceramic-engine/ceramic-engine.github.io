---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Lens
target: Unity
permalink: api-docs/unity/loreline/Lens/
---

# Lens

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Lens.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Lens</strong> (Class)</div>

Utility class for analyzing Loreline scripts without executing them.
Provides methods for finding nodes, variables, references, etc.

## Instance Members

<div class="signature field-method no-description" id="getNodeById"><code><span class="field-name">getNodeById</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeId/" class="type-link">NodeId</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodeById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `id` | [NodeId](/api-docs/unity/loreline/NodeId/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodeAtPosition"><code><span class="field-name">getNodeAtPosition</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodeAtPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the node at the given position


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Position](/api-docs/unity/loreline/Position/) | Position to check  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> | Most specific node at that position, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getClosestNodeAtOrBeforePosition"><code><span class="field-name">getClosestNodeAtOrBeforePosition</span><span class="parenthesis">(</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getClosestNodeAtOrBeforePosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the closest node before or at the given position


| Name | Type | Description |
|------|------|-------------|
| `pos` | [Position](/api-docs/unity/loreline/Position/) | Position to check  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> | Most specific node at that position or before, or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getNodesOfType"><code><span class="field-name">getNodesOfType</span><span class="parenthesis">(</span><span class="arg-name">nodeType</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getNodesOfType.T</span><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">includeImported</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">getNodesOfType.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getNodesOfType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all nodes of a specific type


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `nodeType` | [Class](/api-docs/unity/Class/)<getNodesOfType.T> | | Class type to find  |
| `includeImported` | [Bool](/api-docs/unity/Bool/) | `false` |  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<getNodesOfType.T> | Array of matching nodes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getParentNode"><code><span class="field-name">getParentNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getParentNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the parent node of a given node


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/unity/loreline/Node/) | Child node  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> | Parent node or null if none found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFirstParentOfType"><code><span class="field-name">getFirstParentOfType</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/unity/Class/" class="type-link">Class</a><span class="operator">&lt;</span><span class="type-name">getFirstParentOfType.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><span class="type-name">getFirstParentOfType.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFirstParentOfType"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the first parent node matching the given type


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/unity/loreline/Node/) | Child node  |
| `type` | [Class](/api-docs/unity/Class/)<getFirstParentOfType.T> |  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<getFirstParentOfType.T> | Parent node or null if none found |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getImportedPaths"><code><span class="field-name">getImportedPaths</span><span class="parenthesis">(</span><span class="arg-name">rootPath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getImportedPaths"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `rootPath` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveArrayAccess"><code><span class="field-name">resolveArrayAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NArrayAccess/" class="type-link">NArrayAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveArrayAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `access` | [NArrayAccess](/api-docs/unity/loreline/NArrayAccess/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveAccess"><code><span class="field-name">resolveAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves an identifier access to its corresponding node in the AST.
Resolution follows the same priority order as the interpreter:
1. State fields in current scope and parent beats
2. Top-level state fields
3. Top-level character declarations
4. Beat declarations



| Name | Type | Description |
|------|------|-------------|
| `access` | [NAccess](/api-docs/unity/loreline/NAccess/) | The access expression to resolve  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> | The referenced node if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatFromAccess"><code><span class="field-name">findBeatFromAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatFromAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the beat declaration referenced by the given call.
This method searches through the beat declarations to find a match based on the call's fields.


| Name | Type |
|------|------|
| `access` | [NAccess](/api-docs/unity/loreline/NAccess/) |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> | The referenced beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatFromTransition"><code><span class="field-name">findBeatFromTransition</span><span class="parenthesis">(</span><span class="arg-name">transition</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NTransition/" class="type-link">NTransition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatFromTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the beat declaration referenced by the given transition.
This method searches through the beat declarations to find a match based on the transition's fields.


| Name | Type | Description |
|------|------|-------------|
| `transition` | [NTransition](/api-docs/unity/loreline/NTransition/) | The transition object containing the reference to search for  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> | The referenced beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatFromInsertion"><code><span class="field-name">findBeatFromInsertion</span><span class="parenthesis">(</span><span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NInsertion/" class="type-link">NInsertion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatFromInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the beat declaration referenced by the given insertion.
This method searches through the beat declarations to find a match based on the insertion's fields.


| Name | Type | Description |
|------|------|-------------|
| `insertion` | [NInsertion](/api-docs/unity/loreline/NInsertion/) | The insertion object containing the reference to search for  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> | The referenced beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findBeatByPathFromNode"><code><span class="field-name">findBeatByPathFromNode</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatByPathFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/unity/String/) |
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isTopLevelNode"><code><span class="field-name">isTopLevelNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isTopLevelNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findTopLevelBeatFromNode"><code><span class="field-name">findTopLevelBeatFromNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findTopLevelBeatFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findBeatByNameFromNode"><code><span class="field-name">findBeatByNameFromNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatByNameFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findCharacterFromDialogue"><code><span class="field-name">findCharacterFromDialogue</span><span class="parenthesis">(</span><span class="arg-name">dialogue</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NDialogueStatement/" class="type-link">NDialogueStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findCharacterFromDialogue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and returns the character declaration referenced by the given dialogue statement.
This method searches through the character declarations to find a match based on the
dialogue's character name.



| Name | Type | Description |
|------|------|-------------|
| `dialogue` | [NDialogueStatement](/api-docs/unity/loreline/NDialogueStatement/) | The dialogue statement containing the character reference  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[NCharacterDecl](/api-docs/unity/loreline/NCharacterDecl/)> | The referenced character declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findCharacterByNameFromNode"><code><span class="field-name">findCharacterByNameFromNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findCharacterByNameFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[NCharacterDecl](/api-docs/unity/loreline/NCharacterDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findFunctionByNameFromNode"><code><span class="field-name">findFunctionByNameFromNode</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findFunctionByNameFromNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `node` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getVisibleCharacters"><code><span class="field-name">getVisibleCharacters</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[NCharacterDecl](/api-docs/unity/loreline/NCharacterDecl/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getVisibleFunctions"><code><span class="field-name">getVisibleFunctions</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVisibleStateFields"><code><span class="field-name">getVisibleStateFields</span><span class="parenthesis">(</span><span class="arg-name">fromNode</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleStateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all state fields visible from a given position.
This includes fields from both temporary and permanent states.

| Name | Type |
|------|------|
| `fromNode` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[NObjectField](/api-docs/unity/loreline/NObjectField/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getVisibleBeats"><code><span class="field-name">getVisibleBeats</span><span class="parenthesis">(</span><span class="arg-name">fromNode</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getVisibleBeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all beat declarations available from a given position.
This includes both top-level beats and nested beats that are in scope.

| Name | Type |
|------|------|
| `fromNode` | [Node](/api-docs/unity/loreline/Node/) |

| Returns |
|---------|
| [Array](/api-docs/unity/Array/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAllTags"><code><span class="field-name">getAllTags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getAllTags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets all unique tags used in the script.

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> | Array of unique tag strings |

<hr class="field-separator" />

<div class="signature field-method has-description" id="countTags"><code><span class="field-name">countTags</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#countTags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Count every occurence of tags

| Returns | Description |
|---------|-------------|
| [Map](/api-docs/unity/Map/) | Map of tag counts |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findOutboundBeats"><code><span class="field-name">findOutboundBeats</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findOutboundBeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find all beats that can be reached from a given beat through transitions or calls.


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)>> | Array of references to reachable beats |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findReferencesToBeat"><code><span class="field-name">findReferencesToBeat</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findReferencesToBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all nodes that reference a specific beat declaration.


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to find references to  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NBeatDecl](/api-docs/unity/loreline/NBeatDecl/)>> | Array of references to this beat |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findModifiedStateFields"><code><span class="field-name">findModifiedStateFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findModifiedStateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all state fields that are modified within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NObjectField](/api-docs/unity/loreline/NObjectField/)>> | Array of references to modified state fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findReadStateFields"><code><span class="field-name">findReadStateFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findReadStateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all state fields that are read/accessed within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NObjectField](/api-docs/unity/loreline/NObjectField/)>> | Array of references to read state fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findBeatCharacters"><code><span class="field-name">findBeatCharacters</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findBeatCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find all characters that have a presence in a given beat through:
- Field access to character state
- Dialogue statements


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NCharacterDecl](/api-docs/unity/loreline/NCharacterDecl/)>> | Array of references to characters involved in the beat |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findModifiedCharacterFields"><code><span class="field-name">findModifiedCharacterFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findModifiedCharacterFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all character fields that are modified within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NObjectField](/api-docs/unity/loreline/NObjectField/)>> | Array of references to modified character fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="findReadCharacterFields"><code><span class="field-name">findReadCharacterFields</span><span class="parenthesis">(</span><span class="arg-name">beatDecl</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Reference/" class="type-link">Reference</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#findReadCharacterFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds all character fields that are read/accessed within a given beat


| Name | Type | Description |
|------|------|-------------|
| `beatDecl` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | The beat declaration to analyze  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/unity/Array/)<[Reference](/api-docs/unity/loreline/Reference/)<[NObjectField](/api-docs/unity/loreline/NObjectField/)>> | Array of references to read character fields |

<hr class="field-separator" />

<div class="signature field-method no-description" id="traverse"><code><span class="field-name">traverse</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#traverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/unity/loreline/Node/) |
| `callback` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getFuncHscript"><code><span class="field-name">getFuncHscript</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/FuncHscript/" class="type-link">FuncHscript</a></code><a class="header-anchor" href="#getFuncHscript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/) |

| Returns |
|---------|
| [FuncHscript](/api-docs/unity/loreline/FuncHscript/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getHscriptExpr"><code><span class="field-name">getHscriptExpr</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/hscript/Expr/" class="type-link">hscript.Expr</a></code><a class="header-anchor" href="#getHscriptExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/) |
| `pos` | [Position](/api-docs/unity/loreline/Position/) |

| Returns |
|---------|
| [hscript.Expr](/api-docs/unity/hscript/Expr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveHscriptAccess"><code><span class="field-name">resolveHscriptAccess</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/unity/hscript/Expr/" class="type-link">hscript.Expr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveHscriptAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/) |
| `expr` | [hscript.Expr](/api-docs/unity/hscript/Expr/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="isHscriptExpr"><code><span class="field-name">isHscriptExpr</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isHscriptExpr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `input` | [Any](/api-docs/unity/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="getHscriptCompletion"><code><span class="field-name">getHscriptCompletion</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/HscriptCompletion/" class="type-link">HscriptCompletion</a></code><a class="header-anchor" href="#getHscriptCompletion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/) |
| `pos` | [Position](/api-docs/unity/loreline/Position/) |

| Returns |
|---------|
| [HscriptCompletion](/api-docs/unity/loreline/HscriptCompletion/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resolveAccessInFunction"><code><span class="field-name">resolveAccessInFunction</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#resolveAccessInFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/) |
| `pos` | [Position](/api-docs/unity/loreline/Position/) |

| Returns |
|---------|
| [Null](/api-docs/unity/Null/)<[Node](/api-docs/unity/loreline/Node/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `script` | [Script](/api-docs/unity/loreline/Script/) |

## Private Members

<div class="signature field-var has-description" id="script"><code><span class="field-name">script</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#script"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The script being analyzed

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodesById"><code><span class="field-name">nodesById</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nodesById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of all nodes by their unique ID

<hr class="field-separator" />

<div class="signature field-var has-description" id="parentNodes"><code><span class="field-name">parentNodes</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parentNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of node IDs to their parent nodes

<hr class="field-separator" />

<div class="signature field-var has-description" id="childNodes"><code><span class="field-name">childNodes</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#childNodes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Map of node IDs to their child nodes

<hr class="field-separator" />

<div class="signature field-var no-description" id="hscriptFunctions"><code><span class="field-name">hscriptFunctions</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/FuncHscript/" class="type-link">FuncHscript</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hscriptFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="initialize"><code><span class="field-name">initialize</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize all the lookups and analysis data

<hr class="field-separator" />

<div class="signature field-method has-description" id="findStateField"><code><span class="field-name">findStateField</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#findStateField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Find the state field being accessed by a field access expression


| Name | Type | Description |
|------|------|-------------|
| `access` | [NAccess](/api-docs/unity/loreline/NAccess/) | The field access to analyze  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[NObjectField](/api-docs/unity/loreline/NObjectField/)> | The matching state field, if any |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

