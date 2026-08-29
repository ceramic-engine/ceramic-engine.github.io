---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: JsonToAst
target: Headless
permalink: api-docs/headless/loreline/JsonToAst/
---

# JsonToAst

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/JsonToAst.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.JsonToAst</strong> (Class)</div>

Utility class for reconstructing AST nodes from their JSON representation.
This is the reverse of the toJson() methods on each node class.

## Static Members

<div class="signature field-method has-description" id="scriptFromJson"><code><span class="field-name">scriptFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#scriptFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reconstructs a Script from its JSON representation.


| Name | Type | Description |
|------|------|-------------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) | The JSON object (as returned by Script.toJson())  |

| Returns | Description |
|---------|-------------|
| [Script](/api-docs/headless/loreline/Script/) | The reconstructed Script  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nodeFromJson"><code><span class="field-name">nodeFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Node/" class="type-link">Node</a></code><a class="header-anchor" href="#nodeFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reconstructs any AST Node from its JSON representation.
Dispatches based on the "type" field.


| Name | Type | Description |
|------|------|-------------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) | The JSON object (as returned by node.toJson())  |

| Returns | Description |
|---------|-------------|
| [Node](/api-docs/headless/loreline/Node/) | The reconstructed Node  |

## Private Members

<div class="signature field-method no-description" id="commentFromJson"><code><span class="field-name">commentFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Comment/" class="type-link">Comment</a></code><a class="header-anchor" href="#commentFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Comment](/api-docs/headless/loreline/Comment/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stateFromJson"><code><span class="field-name">stateFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStateDecl/" class="type-link">NStateDecl</a></code><a class="header-anchor" href="#stateFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NStateDecl](/api-docs/headless/loreline/NStateDecl/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="objectFieldFromJson"><code><span class="field-name">objectFieldFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NObjectField/" class="type-link">NObjectField</a></code><a class="header-anchor" href="#objectFieldFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NObjectField](/api-docs/headless/loreline/NObjectField/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="characterFromJson"><code><span class="field-name">characterFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a></code><a class="header-anchor" href="#characterFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NCharacterDecl](/api-docs/headless/loreline/NCharacterDecl/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beatFromJson"><code><span class="field-name">beatFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#beatFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stringPartFromJson"><code><span class="field-name">stringPartFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringPart/" class="type-link">NStringPart</a></code><a class="header-anchor" href="#stringPartFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NStringPart](/api-docs/headless/loreline/NStringPart/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stringLiteralFromJson"><code><span class="field-name">stringLiteralFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringLiteral/" class="type-link">NStringLiteral</a></code><a class="header-anchor" href="#stringLiteralFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NStringLiteral](/api-docs/headless/loreline/NStringLiteral/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="textStatementFromJson"><code><span class="field-name">textStatementFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTextStatement/" class="type-link">NTextStatement</a></code><a class="header-anchor" href="#textStatementFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NTextStatement](/api-docs/headless/loreline/NTextStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="dialogueStatementFromJson"><code><span class="field-name">dialogueStatementFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NDialogueStatement/" class="type-link">NDialogueStatement</a></code><a class="header-anchor" href="#dialogueStatementFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NDialogueStatement](/api-docs/headless/loreline/NDialogueStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="choiceStatementFromJson"><code><span class="field-name">choiceStatementFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceStatement/" class="type-link">NChoiceStatement</a></code><a class="header-anchor" href="#choiceStatementFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NChoiceStatement](/api-docs/headless/loreline/NChoiceStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="choiceOptionFromJson"><code><span class="field-name">choiceOptionFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceOption/" class="type-link">NChoiceOption</a></code><a class="header-anchor" href="#choiceOptionFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NChoiceOption](/api-docs/headless/loreline/NChoiceOption/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="blockFromJson"><code><span class="field-name">blockFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBlock/" class="type-link">NBlock</a></code><a class="header-anchor" href="#blockFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NBlock](/api-docs/headless/loreline/NBlock/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ifStatementFromJson"><code><span class="field-name">ifStatementFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NIfStatement/" class="type-link">NIfStatement</a></code><a class="header-anchor" href="#ifStatementFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NIfStatement](/api-docs/headless/loreline/NIfStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="alternativeFromJson"><code><span class="field-name">alternativeFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NAlternative/" class="type-link">NAlternative</a></code><a class="header-anchor" href="#alternativeFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NAlternative](/api-docs/headless/loreline/NAlternative/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="callFromJson"><code><span class="field-name">callFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCall/" class="type-link">NCall</a></code><a class="header-anchor" href="#callFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NCall](/api-docs/headless/loreline/NCall/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="transitionFromJson"><code><span class="field-name">transitionFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTransition/" class="type-link">NTransition</a></code><a class="header-anchor" href="#transitionFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NTransition](/api-docs/headless/loreline/NTransition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="beatCallFromJson"><code><span class="field-name">beatCallFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatCall/" class="type-link">NBeatCall</a></code><a class="header-anchor" href="#beatCallFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NBeatCall](/api-docs/headless/loreline/NBeatCall/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="insertionFromJson"><code><span class="field-name">insertionFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NInsertion/" class="type-link">NInsertion</a></code><a class="header-anchor" href="#insertionFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NInsertion](/api-docs/headless/loreline/NInsertion/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="functionDeclFromJson"><code><span class="field-name">functionDeclFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a></code><a class="header-anchor" href="#functionDeclFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NFunctionDecl](/api-docs/headless/loreline/NFunctionDecl/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="literalFromJson"><code><span class="field-name">literalFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NLiteral/" class="type-link">NLiteral</a></code><a class="header-anchor" href="#literalFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NLiteral](/api-docs/headless/loreline/NLiteral/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="accessFromJson"><code><span class="field-name">accessFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NAccess/" class="type-link">NAccess</a></code><a class="header-anchor" href="#accessFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NAccess](/api-docs/headless/loreline/NAccess/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="assignFromJson"><code><span class="field-name">assignFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NAssign/" class="type-link">NAssign</a></code><a class="header-anchor" href="#assignFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NAssign](/api-docs/headless/loreline/NAssign/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="arrayAccessFromJson"><code><span class="field-name">arrayAccessFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NArrayAccess/" class="type-link">NArrayAccess</a></code><a class="header-anchor" href="#arrayAccessFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NArrayAccess](/api-docs/headless/loreline/NArrayAccess/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="binaryFromJson"><code><span class="field-name">binaryFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBinary/" class="type-link">NBinary</a></code><a class="header-anchor" href="#binaryFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NBinary](/api-docs/headless/loreline/NBinary/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="unaryFromJson"><code><span class="field-name">unaryFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NUnary/" class="type-link">NUnary</a></code><a class="header-anchor" href="#unaryFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NUnary](/api-docs/headless/loreline/NUnary/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ternaryFromJson"><code><span class="field-name">ternaryFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTernary/" class="type-link">NTernary</a></code><a class="header-anchor" href="#ternaryFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NTernary](/api-docs/headless/loreline/NTernary/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="importStatementFromJson"><code><span class="field-name">importStatementFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NImportStatement/" class="type-link">NImportStatement</a></code><a class="header-anchor" href="#importStatementFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NImportStatement](/api-docs/headless/loreline/NImportStatement/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="idFromJson"><code><span class="field-name">idFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a></code><a class="header-anchor" href="#idFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [NodeId](/api-docs/headless/loreline/NodeId/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="positionFromJson"><code><span class="field-name">positionFromJson</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a></code><a class="header-anchor" href="#positionFromJson"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Position](/api-docs/headless/loreline/Position/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="extractComments"><code><span class="field-name">extractComments</span><span class="parenthesis">(</span><span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#extractComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| AnonStruct |

<hr class="field-separator" />

<div class="signature field-method no-description" id="applyComments"><code><span class="field-name">applyComments</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">json</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) |
| `json` | [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="blockStyleFromString"><code><span class="field-name">blockStyleFromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/BlockStyle/" class="type-link">BlockStyle</a></code><a class="header-anchor" href="#blockStyleFromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [BlockStyle](/api-docs/headless/loreline/BlockStyle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="conditionStyleFromString"><code><span class="field-name">conditionStyleFromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ConditionStyle/" class="type-link">ConditionStyle</a></code><a class="header-anchor" href="#conditionStyleFromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [ConditionStyle](/api-docs/headless/loreline/ConditionStyle/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="alternativeModeFromString"><code><span class="field-name">alternativeModeFromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AlternativeMode/" class="type-link">AlternativeMode</a></code><a class="header-anchor" href="#alternativeModeFromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [AlternativeMode](/api-docs/headless/loreline/AlternativeMode/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="quotesFromString"><code><span class="field-name">quotesFromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Quotes/" class="type-link">Quotes</a></code><a class="header-anchor" href="#quotesFromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Quotes](/api-docs/headless/loreline/Quotes/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="tokenTypeFromString"><code><span class="field-name">tokenTypeFromString</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#tokenTypeFromString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `s` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| Anonymous |

