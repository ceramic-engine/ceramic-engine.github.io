---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Interpreter
target: Headless
permalink: api-docs/headless/loreline/Interpreter/
---

# Interpreter

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Interpreter</strong> (Class)</div>

Main interpreter class for Loreline scripts.
This class is responsible for executing a parsed Loreline script,
managing the runtime state, and interacting with the host application
through handler functions.

## Instance Members

<div class="signature field-method has-description" id="start"><code><span class="field-name">start</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">beatName</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts script execution from the beginning or a specific beat.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `beatName` | [String](/api-docs/headless/String/) | *(optional)* | Optional name of the beat to start from. If null, execution starts from the first beat or a beat named "_" if it exists.  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="save"><code><span class="field-name">save</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveData/" class="type-link">SaveData</a></code><a class="header-anchor" href="#save"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Saves the current state of the interpreter.
This includes all state variables, character states, and execution stack,
allowing execution to be resumed later from the exact same point.


| Returns | Description |
|---------|-------------|
| [SaveData](/api-docs/headless/loreline/SaveData/) | A SaveData object containing the serialized state |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restore"><code><span class="field-name">restore</span><span class="parenthesis">(</span><span class="arg-name">saveData</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveData/" class="type-link">SaveData</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#restore"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores the interpreter state from a SaveData object.
This allows resuming execution from a previously saved state.



| Name | Type | Description |
|------|------|-------------|
| `saveData` | [SaveData](/api-docs/headless/loreline/SaveData/) | The SaveData object containing the serialized state  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution after restoring state.
This should be called after restore() to continue execution.

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCharacter"><code><span class="field-name">getCharacter</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#getCharacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a character by name.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/headless/String/) | The name of the character to get  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The character's fields or null if the character doesn't exist |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getCharacterField"><code><span class="field-name">getCharacterField</span><span class="parenthesis">(</span><span class="arg-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#getCharacterField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a specific field of a character.



| Name | Type | Description |
|------|------|-------------|
| `character` | [String](/api-docs/headless/String/) | The name of the character  |
| `name` | [String](/api-docs/headless/String/) | The name of the field to get  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The field value or null if the character or field doesn't exist |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setCharacterField"><code><span class="field-name">setCharacterField</span><span class="parenthesis">(</span><span class="arg-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setCharacterField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets a specific field on a character.



| Name | Type | Description |
|------|------|-------------|
| `character` | [String](/api-docs/headless/String/) | The name of the character  |
| `name` | [String](/api-docs/headless/String/) | The name of the field to set  |
| `value` | [Any](/api-docs/headless/Any/) | The value of the field to set |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="arg-name">handleDialogue</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/DialogueHandler/" class="type-link">DialogueHandler</a><span class="operator">,</span> <span class="arg-name">handleChoice</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ChoiceHandler/" class="type-link">ChoiceHandler</a><span class="operator">,</span> <span class="arg-name">handleFinish</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/FinishHandler/" class="type-link">FinishHandler</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/InterpreterOptions/" class="type-link">InterpreterOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Loreline script interpreter.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/headless/loreline/Script/) | | The parsed script to execute  |
| `handleDialogue` | [DialogueHandler](/api-docs/headless/loreline/DialogueHandler/) | | Function to call when displaying dialogue text  |
| `handleChoice` | [ChoiceHandler](/api-docs/headless/loreline/ChoiceHandler/) | | Function to call when presenting choices  |
| `handleFinish` | [FinishHandler](/api-docs/headless/loreline/FinishHandler/) | | Function to call when execution finishes  |
| `options` | [InterpreterOptions](/api-docs/headless/loreline/InterpreterOptions/) | *(optional)* | Additional options |

## Private Members

<div class="signature field-var has-description" id="script"><code><span class="field-name">script</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Script/" class="type-link">Script</a></code><a class="header-anchor" href="#script"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The script being executed.

<hr class="field-separator" />

<div class="signature field-var has-description" id="handleDialogue"><code><span class="field-name">handleDialogue</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/DialogueHandler/" class="type-link">DialogueHandler</a></code><a class="header-anchor" href="#handleDialogue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User-defined dialogue handler,
which takes care of displaying the dialogues.

<hr class="field-separator" />

<div class="signature field-var has-description" id="handleChoice"><code><span class="field-name">handleChoice</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ChoiceHandler/" class="type-link">ChoiceHandler</a></code><a class="header-anchor" href="#handleChoice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User-defined choice handler,
which takes care of displaying the choices and
providing a response to the interpreter.

<hr class="field-separator" />

<div class="signature field-var has-description" id="handleFinish"><code><span class="field-name">handleFinish</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/FinishHandler/" class="type-link">FinishHandler</a></code><a class="header-anchor" href="#handleFinish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

User-defined finish handler,
which is called when the current execution has finished.

<hr class="field-separator" />

<div class="signature field-var has-description" id="topLevelState"><code><span class="field-name">topLevelState</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeState/" class="type-link">RuntimeState</a></code><a class="header-anchor" href="#topLevelState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The top level state, which is shared across the whole script execution.

<hr class="field-separator" />

<div class="signature field-var has-description" id="topLevelCharacters"><code><span class="field-name">topLevelCharacters</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#topLevelCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top level characters can be referenced and their state
can also be modified from anywhere in the script.

<hr class="field-separator" />

<div class="signature field-var has-description" id="topLevelBeats"><code><span class="field-name">topLevelBeats</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#topLevelBeats"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

All the top level beats available, by beat name (their identifier in the script).

<hr class="field-separator" />

<div class="signature field-var has-description" id="nodeStates"><code><span class="field-name">nodeStates</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeIdMap/" class="type-link">NodeIdMap</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/RuntimeState/" class="type-link">RuntimeState</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#nodeStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

States associated to a specific node id. These are persistent, like the top level state,
but are only available from where they have been declared and the sub-scopes.
If some state fields already existed in a parent scope, the parent ones will be shadowed by the child ones.

<hr class="field-separator" />

<div class="signature field-var has-description" id="topLevelFunctions"><code><span class="field-name">topLevelFunctions</span><span class="operator">:</span> <a href="/api-docs/headless/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#topLevelFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Top level functions available by default in this script.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stack"><code><span class="field-name">stack</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#stack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current execution stack, which consists of scopes added on top of one another.
Each scope can have its own local beats and temporary states.

<hr class="field-separator" />

<div class="signature field-var has-description" id="lens"><code><span class="field-name">lens</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Lens/" class="type-link">Lens</a></code><a class="header-anchor" href="#lens"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The lens instance allowing to get more information about the AST.

<hr class="field-separator" />

<div class="signature field-var has-description" id="strictAccess"><code><span class="field-name">strictAccess</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#strictAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tells whether access is strict or not. If set to true,
trying to read or write an undefined variable will throw an error.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentScope"><code><span class="field-name">currentScope</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeScope/" class="type-link">RuntimeScope</a></code><a class="header-anchor" href="#currentScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current scope associated with current execution state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="currentInsertion"><code><span class="field-name">currentInsertion</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a></code><a class="header-anchor" href="#currentInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current insertion associated with current scope or a parent scope, with current execution state.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextScopeId"><code><span class="field-name">nextScopeId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextScopeId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The next scope id to assign when pushing a new scope.
Every time we reset the stack, this counter is also reset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="nextInsertionId"><code><span class="field-name">nextInsertionId</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextInsertionId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The next insertion id to assign when creating a new insertion.
Every time we reset the stack, this counter is also reset.

<hr class="field-separator" />

<div class="signature field-var has-description" id="syncCallbacks"><code><span class="field-name">syncCallbacks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#syncCallbacks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

List of pending callbacks that should be run synchronously.

<hr class="field-separator" />

<div class="signature field-var has-description" id="flushing"><code><span class="field-name">flushing</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#flushing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal flag to know if we are currently flushing sync callbacks
(to prevent unexpected recursive flushes).

<hr class="field-separator" />

<div class="signature field-var has-description" id="finishTrigger"><code><span class="field-name">finishTrigger</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/EvalNext/" class="type-link">EvalNext</a></code><a class="header-anchor" href="#finishTrigger"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keep track of which callback is the one that would trigger finish.

<hr class="field-separator" />

<div class="signature field-var has-description" id="beatToResume"><code><span class="field-name">beatToResume</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#beatToResume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When loading saved data and failing to restore a full stack of scope,
this contains the beat to resume as fallback.
That beat will always be a top level beat.

<hr class="field-separator" />

<div class="signature field-method no-description" id="debug"><code><span class="field-name">debug</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#debug"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `expr` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Dynamic](/api-docs/headless/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="removeCurrentInsertion"><code><span class="field-name">removeCurrentInsertion</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeCurrentInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="customCreateFields"><code><span class="field-name">customCreateFields</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="#" class="type-link">Interpreter</a><span class="operator">,</span> <span class="arg-name">type</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#customCreateFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A custom instanciator to create fields objects.

| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/headless/loreline/Interpreter/) |
| `type` | [String](/api-docs/headless/String/) |
| `node` | [Node](/api-docs/headless/loreline/Node/) |

| Returns |
|---------|
| [Any](/api-docs/headless/Any/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="resumeFromLevel"><code><span class="field-name">resumeFromLevel</span><span class="parenthesis">(</span><span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeFromLevel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scopeLevel` | [Int](/api-docs/headless/Int/) |
| `next` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeScope"><code><span class="field-name">serializeScope</span><span class="parenthesis">(</span><span class="arg-name">scope</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="operator">,</span> <span class="arg-name">insertions</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataScope/" class="type-link">SaveDataScope</a></code><a class="header-anchor" href="#serializeScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes a scope to save data.



| Name | Type | Description |
|------|------|-------------|
| `scope` | [RuntimeScope](/api-docs/headless/loreline/RuntimeScope/) | The scope to serialize  |
| `insertions` | [Dynamic](/api-docs/headless/Dynamic/) |  |

| Returns | Description |
|---------|-------------|
| [SaveDataScope](/api-docs/headless/loreline/SaveDataScope/) | The serialized scope data |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeInsertion"><code><span class="field-name">serializeInsertion</span><span class="parenthesis">(</span><span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a><span class="operator">,</span> <span class="arg-name">insertions</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#serializeInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `insertion` | [RuntimeInsertion](/api-docs/headless/loreline/RuntimeInsertion/) |
| `insertions` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Null](/api-docs/headless/Null/)<[Int](/api-docs/headless/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeChoiceOption"><code><span class="field-name">serializeChoiceOption</span><span class="parenthesis">(</span><span class="arg-name">option</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/ChoiceOption/" class="type-link">ChoiceOption</a><span class="operator">,</span> <span class="arg-name">insertions</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataChoiceOption/" class="type-link">SaveDataChoiceOption</a></code><a class="header-anchor" href="#serializeChoiceOption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `option` | [ChoiceOption](/api-docs/headless/loreline/ChoiceOption/) |
| `insertions` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [SaveDataChoiceOption](/api-docs/headless/loreline/SaveDataChoiceOption/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="serializeTextTag"><code><span class="field-name">serializeTextTag</span><span class="parenthesis">(</span><span class="arg-name">tag</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/TextTag/" class="type-link">TextTag</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataTextTag/" class="type-link">SaveDataTextTag</a></code><a class="header-anchor" href="#serializeTextTag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `tag` | [TextTag](/api-docs/headless/loreline/TextTag/) |

| Returns |
|---------|
| [SaveDataTextTag](/api-docs/headless/loreline/SaveDataTextTag/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeState"><code><span class="field-name">serializeState</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeState/" class="type-link">RuntimeState</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataState/" class="type-link">SaveDataState</a></code><a class="header-anchor" href="#serializeState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes a state to save data.



| Name | Type | Description |
|------|------|-------------|
| `state` | [RuntimeState](/api-docs/headless/loreline/RuntimeState/) | The state to serialize  |

| Returns | Description |
|---------|-------------|
| [SaveDataState](/api-docs/headless/loreline/SaveDataState/) | The serialized state data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeCharacters"><code><span class="field-name">serializeCharacters</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#serializeCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes all top-level characters to save data.


| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | Object mapping character names to their serialized states |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeNodeStates"><code><span class="field-name">serializeNodeStates</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#serializeNodeStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes all node states to save data.


| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/headless/Dynamic/) | Object mapping node IDs to their serialized states |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeBeatReference"><code><span class="field-name">serializeBeatReference</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataBeat/" class="type-link">SaveDataBeat</a></code><a class="header-anchor" href="#serializeBeatReference"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes a beat reference for save data.



| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat to reference  |

| Returns | Description |
|---------|-------------|
| [SaveDataBeat](/api-docs/headless/loreline/SaveDataBeat/) | The serialized beat reference |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeNodeReference"><code><span class="field-name">serializeNodeReference</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataNode/" class="type-link">SaveDataNode</a></code><a class="header-anchor" href="#serializeNodeReference"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes a node reference for save data.



| Name | Type | Description |
|------|------|-------------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) | The node to reference  |

| Returns | Description |
|---------|-------------|
| [SaveDataNode](/api-docs/headless/loreline/SaveDataNode/) | The serialized node reference |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeCharacter"><code><span class="field-name">serializeCharacter</span><span class="parenthesis">(</span><span class="arg-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeCharacter/" class="type-link">RuntimeCharacter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataCharacter/" class="type-link">SaveDataCharacter</a></code><a class="header-anchor" href="#serializeCharacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes a character for save data.



| Name | Type | Description |
|------|------|-------------|
| `character` | [RuntimeCharacter](/api-docs/headless/loreline/RuntimeCharacter/) | The character to serialize  |

| Returns | Description |
|---------|-------------|
| [SaveDataCharacter](/api-docs/headless/loreline/SaveDataCharacter/) | The serialized character data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeFields"><code><span class="field-name">serializeFields</span><span class="parenthesis">(</span><span class="arg-name">fields</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">originalFields</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataFields/" class="type-link">SaveDataFields</a></code><a class="header-anchor" href="#serializeFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes fields for save data.
Only fields that have changed from their original values are included.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `fields` | [Any](/api-docs/headless/Any/) | | The fields to serialize  |
| `originalFields` | [Any](/api-docs/headless/Any/) | *(optional)* | The original field values for comparison  |

| Returns | Description |
|---------|-------------|
| [SaveDataFields](/api-docs/headless/loreline/SaveDataFields/) | The serialized fields data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="serializeValue"><code><span class="field-name">serializeValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#serializeValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Serializes a value for save data.
Handles recursive serialization of objects and arrays.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Any](/api-docs/headless/Any/) | The value to serialize  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[Any](/api-docs/headless/Any/)> | The serialized value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeNode"><code><span class="field-name">resumeNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Core function that resumes execution from a given scope.
Works by recreating the execution flow as if we had been running from the beginning.



| Name | Type | Description |
|------|------|-------------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) | The node to resume from  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | The scope level to resume at  |
| `next` | Function | Callback to call when the node execution completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeNodeBody"><code><span class="field-name">resumeNodeBody</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeNodeBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution of a node body.



| Name | Type | Description |
|------|------|-------------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) | The node containing the body  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | The scope level to resume at  |
| `body` | [Array](/api-docs/headless/Array/)<[AstNode](/api-docs/headless/loreline/AstNode/)> | The body to execute  |
| `next` | Function | Callback to call when the body execution completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeBeatRun"><code><span class="field-name">resumeBeatRun</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeBeatRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution of a beat.



| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat to resume  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | The scope level to resume at  |
| `next` | Function | Callback to call when the beat execution completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeChoiceOption"><code><span class="field-name">resumeChoiceOption</span><span class="parenthesis">(</span><span class="arg-name">option</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceOption/" class="type-link">NChoiceOption</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeChoiceOption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution of a choice option.



| Name | Type | Description |
|------|------|-------------|
| `option` | [NChoiceOption](/api-docs/headless/loreline/NChoiceOption/) | The choice option to resume  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | The scope level to resume at  |
| `next` | Function | Callback to call when the option execution completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeChoice"><code><span class="field-name">resumeChoice</span><span class="parenthesis">(</span><span class="arg-name">choice</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceStatement/" class="type-link">NChoiceStatement</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeChoice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution of a choice

| Name | Type |
|------|------|
| `choice` | [NChoiceStatement](/api-docs/headless/loreline/NChoiceStatement/) |
| `scopeLevel` | [Int](/api-docs/headless/Int/) |
| `next` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeIf"><code><span class="field-name">resumeIf</span><span class="parenthesis">(</span><span class="arg-name">ifStmt</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NIfStatement/" class="type-link">NIfStatement</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeIf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution of an if statement.



| Name | Type | Description |
|------|------|-------------|
| `ifStmt` | [NIfStatement](/api-docs/headless/loreline/NIfStatement/) | The if statement to resume  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | The scope level to resume at  |
| `next` | Function | Callback to call when the if statement execution completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resumeCall"><code><span class="field-name">resumeCall</span><span class="parenthesis">(</span><span class="arg-name">call</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCall/" class="type-link">NCall</a><span class="operator">,</span> <span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resumeCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes execution of a beat call.



| Name | Type | Description |
|------|------|-------------|
| `call` | [NCall](/api-docs/headless/loreline/NCall/) | The call node to resume  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | The scope level to resume at  |
| `next` | Function | Callback to call when the call execution completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreStack"><code><span class="field-name">restoreStack</span><span class="parenthesis">(</span><span class="arg-name">savedStack</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/SaveDataScope/" class="type-link">SaveDataScope</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#restoreStack"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores the execution stack from saved data.



| Name | Type | Description |
|------|------|-------------|
| `savedStack` | [Array](/api-docs/headless/Array/)<[SaveDataScope](/api-docs/headless/loreline/SaveDataScope/)> | The saved stack data  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the stack was restored successfully, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreBeatToResume"><code><span class="field-name">restoreBeatToResume</span><span class="parenthesis">(</span><span class="arg-name">savedStack</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/SaveDataScope/" class="type-link">SaveDataScope</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#restoreBeatToResume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the top-level beat to resume from if stack restoration fails.



| Name | Type | Description |
|------|------|-------------|
| `savedStack` | [Array](/api-docs/headless/Array/)<[SaveDataScope](/api-docs/headless/loreline/SaveDataScope/)> | The saved stack data  |

| Returns | Description |
|---------|-------------|
| [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat to resume from, or null if none can be found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreNode"><code><span class="field-name">restoreNode</span><span class="parenthesis">(</span><span class="arg-name">savedNode</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataNode/" class="type-link">SaveDataNode</a><span class="operator">,</span> <span class="arg-name">savedBeatId</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NodeId/" class="type-link">NodeId</a><span class="operator">,</span> <span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a></code><a class="header-anchor" href="#restoreNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores a node from a saved reference.



| Name | Type | Description |
|------|------|-------------|
| `savedNode` | [SaveDataNode](/api-docs/headless/loreline/SaveDataNode/) | The saved node reference  |
| `savedBeatId` | [NodeId](/api-docs/headless/loreline/NodeId/) | The ID of the beat in the saved data  |
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The restored beat  |

| Returns | Description |
|---------|-------------|
| [AstNode](/api-docs/headless/loreline/AstNode/) | The restored node, or null if it couldn't be found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreBeat"><code><span class="field-name">restoreBeat</span><span class="parenthesis">(</span><span class="arg-name">beatRef</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataBeat/" class="type-link">SaveDataBeat</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#restoreBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores a beat from a saved reference.



| Name | Type | Description |
|------|------|-------------|
| `beatRef` | [SaveDataBeat](/api-docs/headless/loreline/SaveDataBeat/) | The saved beat reference  |

| Returns | Description |
|---------|-------------|
| [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The restored beat, or null if it couldn't be found |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreState"><code><span class="field-name">restoreState</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeState/" class="type-link">RuntimeState</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataState/" class="type-link">SaveDataState</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeState/" class="type-link">RuntimeState</a></code><a class="header-anchor" href="#restoreState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores a state from saved data.



| Name | Type | Description |
|------|------|-------------|
| `state` | [RuntimeState](/api-docs/headless/loreline/RuntimeState/) | The state to restore into, or null to create a new one  |
| `data` | [SaveDataState](/api-docs/headless/loreline/SaveDataState/) | The saved state data  |

| Returns | Description |
|---------|-------------|
| [RuntimeState](/api-docs/headless/loreline/RuntimeState/) | The restored state |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreCharacters"><code><span class="field-name">restoreCharacters</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#restoreCharacters"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores characters from saved data.



| Name | Type | Description |
|------|------|-------------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) | The saved character data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreNodeStates"><code><span class="field-name">restoreNodeStates</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#restoreNodeStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores node states from saved data.



| Name | Type | Description |
|------|------|-------------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) | The saved node state data |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreCharacter"><code><span class="field-name">restoreCharacter</span><span class="parenthesis">(</span><span class="arg-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeCharacter/" class="type-link">RuntimeCharacter</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataCharacter/" class="type-link">SaveDataCharacter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeCharacter/" class="type-link">RuntimeCharacter</a></code><a class="header-anchor" href="#restoreCharacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores a character from saved data.



| Name | Type | Description |
|------|------|-------------|
| `character` | [RuntimeCharacter](/api-docs/headless/loreline/RuntimeCharacter/) | The character to restore into, or null to create a new one  |
| `data` | [SaveDataCharacter](/api-docs/headless/loreline/SaveDataCharacter/) | The saved character data  |

| Returns | Description |
|---------|-------------|
| [RuntimeCharacter](/api-docs/headless/loreline/RuntimeCharacter/) | The restored character |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreFields"><code><span class="field-name">restoreFields</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">savedFields</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/SaveDataFields/" class="type-link">SaveDataFields</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#restoreFields"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores fields from saved data.



| Name | Type | Description |
|------|------|-------------|
| `target` | [Any](/api-docs/headless/Any/) | The target object to restore into, or null to create a new one  |
| `savedFields` | [SaveDataFields](/api-docs/headless/loreline/SaveDataFields/) | The saved field data  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The object with restored fields |

<hr class="field-separator" />

<div class="signature field-method has-description" id="restoreValue"><code><span class="field-name">restoreValue</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#restoreValue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Restores a value from its saved form.
Handles recursive restoration of objects and arrays.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Any](/api-docs/headless/Any/) | The saved value  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The restored value |

<hr class="field-separator" />

<div class="signature field-method no-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initializeTopLevelFunctions"><code><span class="field-name">initializeTopLevelFunctions</span><span class="parenthesis">(</span><span class="arg-name">functions</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/FunctionsMap/" class="type-link">FunctionsMap</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initializeTopLevelFunctions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes top-level functions available to the script.
This includes built-in functions and any user-provided functions.



| Name | Type | Description |
|------|------|-------------|
| `functions` | [FunctionsMap](/api-docs/headless/loreline/FunctionsMap/) | Optional map of additional functions to make available |

<hr class="field-separator" />

<div class="signature field-method no-description" id="initializeTopLevelFunction"><code><span class="field-name">initializeTopLevelFunction</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initializeTopLevelFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `func` | [NFunctionDecl](/api-docs/headless/loreline/NFunctionDecl/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="wrapNext"><code><span class="field-name">wrapNext</span><span class="parenthesis">(</span><span class="arg-name">cb</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/EvalNext/" class="type-link">EvalNext</a></code><a class="header-anchor" href="#wrapNext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Wraps a callback function to control whether it executes synchronously or asynchronously.
This is crucial for managing the execution flow of the script.



| Name | Type | Description |
|------|------|-------------|
| `cb` | Function | The callback to wrap  |

| Returns | Description |
|---------|-------------|
| [EvalNext](/api-docs/headless/loreline/EvalNext/) | An EvalNext object controlling the callback's execution |

<hr class="field-separator" />

<div class="signature field-method has-description" id="flush"><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flushes all pending synchronous callbacks.
This ensures that all pending operations are completed before continuing.

<hr class="field-separator" />

<div class="signature field-method has-description" id="pop"><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pops the top scope from the execution stack.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if a scope was popped, false if the stack was already empty |

<hr class="field-separator" />

<div class="signature field-method has-description" id="push"><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">scope</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pushes a new scope onto the execution stack.



| Name | Type | Description |
|------|------|-------------|
| `scope` | [RuntimeScope](/api-docs/headless/loreline/RuntimeScope/) | The scope to push |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initializeTopLevelState"><code><span class="field-name">initializeTopLevelState</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStateDecl/" class="type-link">NStateDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initializeTopLevelState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes a top-level state declaration.
Evaluates all fields and stores their values.



| Name | Type | Description |
|------|------|-------------|
| `state` | [NStateDecl](/api-docs/headless/loreline/NStateDecl/) | The state declaration to initialize  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initializeTopLevelBeat"><code><span class="field-name">initializeTopLevelBeat</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initializeTopLevelBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes a top-level beat declaration.
Registers the beat in the top-level beats map.



| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat declaration to initialize  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initializeTopLevelCharacter"><code><span class="field-name">initializeTopLevelCharacter</span><span class="parenthesis">(</span><span class="arg-name">character</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initializeTopLevelCharacter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes a top-level character declaration.
Creates a new character state and evaluates all fields.



| Name | Type | Description |
|------|------|-------------|
| `character` | [NCharacterDecl](/api-docs/headless/loreline/NCharacterDecl/) | The character declaration to initialize  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initializeState"><code><span class="field-name">initializeState</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStateDecl/" class="type-link">NStateDecl</a><span class="operator">,</span> <span class="arg-name">scope</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeScope/" class="type-link">RuntimeScope</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initializeState"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initializes a state declaration within a scope.
Evaluates all fields and stores their values.



| Name | Type | Description |
|------|------|-------------|
| `state` | [NStateDecl](/api-docs/headless/loreline/NStateDecl/) | The state declaration to initialize  |
| `scope` | [RuntimeScope](/api-docs/headless/loreline/RuntimeScope/) | The scope in which to initialize the state |

<hr class="field-separator" />

<div class="signature field-method has-description" id="finish"><code><span class="field-name">finish</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#finish"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finishes script execution and calls the finish handler.

<hr class="field-separator" />

<div class="signature field-method has-description" id="transitionToBeat"><code><span class="field-name">transitionToBeat</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#transitionToBeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transitions to a new beat, clearing the current execution stack.



| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat to transition to |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalNode"><code><span class="field-name">evalNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a node, dispatching to the appropriate handler based on node type.



| Name | Type | Description |
|------|------|-------------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) | The node to evaluate  |
| `next` | Function | Callback to call when evaluation completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalBeatDecl"><code><span class="field-name">evalBeatDecl</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalBeatDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a beat declaration.
Adds the beat to the current scope so it can be referenced by other nodes.



| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat declaration to evaluate  |
| `next` | Function | Callback to call when evaluation completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalNodeBody"><code><span class="field-name">evalNodeBody</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="arg-name">body</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalNodeBody"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a node body by creating a new scope and executing each node in sequence.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | | The parent beat  |
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) | | The node containing the body  |
| `body` | [Array](/api-docs/headless/Array/)<[AstNode](/api-docs/headless/loreline/AstNode/)> | | The body to execute  |
| `insertion` | [RuntimeInsertion](/api-docs/headless/loreline/RuntimeInsertion/) | *(optional)* | If any, the insertion related to this evaluation  |
| `next` | Function | | Callback to call when execution completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalBeatRun"><code><span class="field-name">evalBeatRun</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalBeatRun"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a beat by executing its body.



| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalStateDecl"><code><span class="field-name">evalStateDecl</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStateDecl/" class="type-link">NStateDecl</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalStateDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a state declaration.
Initializes the state fields with their evaluated values.



| Name | Type | Description |
|------|------|-------------|
| `state` | [NStateDecl](/api-docs/headless/loreline/NStateDecl/) | The state declaration to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalText"><code><span class="field-name">evalText</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTextStatement/" class="type-link">NTextStatement</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a text statement by evaluating the content and calling the dialogue handler.



| Name | Type | Description |
|------|------|-------------|
| `text` | [NTextStatement](/api-docs/headless/loreline/NTextStatement/) | The text statement to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalDialogue"><code><span class="field-name">evalDialogue</span><span class="parenthesis">(</span><span class="arg-name">dialogue</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NDialogueStatement/" class="type-link">NDialogueStatement</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalDialogue"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a dialogue statement by evaluating the content and calling the dialogue handler.



| Name | Type | Description |
|------|------|-------------|
| `dialogue` | [NDialogueStatement](/api-docs/headless/loreline/NDialogueStatement/) | The dialogue statement to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalChoice"><code><span class="field-name">evalChoice</span><span class="parenthesis">(</span><span class="arg-name">choice</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceStatement/" class="type-link">NChoiceStatement</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalChoice"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a choice statement by evaluating the options and calling the choice handler.



| Name | Type | Description |
|------|------|-------------|
| `choice` | [NChoiceStatement](/api-docs/headless/loreline/NChoiceStatement/) | The choice statement to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method no-description" id="evalChoiceOptionsAndInsertions"><code><span class="field-name">evalChoiceOptionsAndInsertions</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="operator">,</span> <span class="arg-name">choice</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceStatement/" class="type-link">NChoiceStatement</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/ChoiceOption/" class="type-link">ChoiceOption</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalChoiceOptionsAndInsertions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `beat` | [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) |
| `choice` | [NChoiceStatement](/api-docs/headless/loreline/NChoiceStatement/) |
| `result` | [Array](/api-docs/headless/Array/)<[ChoiceOption](/api-docs/headless/loreline/ChoiceOption/)> |
| `next` | Function |

<hr class="field-separator" />

<div class="signature field-method no-description" id="evalInsertion"><code><span class="field-name">evalInsertion</span><span class="parenthesis">(</span><span class="arg-name">insertion</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/RuntimeInsertion/" class="type-link">RuntimeInsertion</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `insertion` | [RuntimeInsertion](/api-docs/headless/loreline/RuntimeInsertion/) |
| `next` | Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalChoiceOption"><code><span class="field-name">evalChoiceOption</span><span class="parenthesis">(</span><span class="arg-name">option</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NChoiceOption/" class="type-link">NChoiceOption</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalChoiceOption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a choice option by executing its body.



| Name | Type | Description |
|------|------|-------------|
| `option` | [NChoiceOption](/api-docs/headless/loreline/NChoiceOption/) | The choice option to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalIf"><code><span class="field-name">evalIf</span><span class="parenthesis">(</span><span class="arg-name">ifStmt</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NIfStatement/" class="type-link">NIfStatement</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalIf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates an if statement by evaluating the condition and executing the appropriate branch.



| Name | Type | Description |
|------|------|-------------|
| `ifStmt` | [NIfStatement](/api-docs/headless/loreline/NIfStatement/) | The if statement to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalAssignment"><code><span class="field-name">evalAssignment</span><span class="parenthesis">(</span><span class="arg-name">assign</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NAssign/" class="type-link">NAssign</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalAssignment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates an assignment by resolving the target, evaluating the value, and applying the assignment.



| Name | Type | Description |
|------|------|-------------|
| `assign` | [NAssign](/api-docs/headless/loreline/NAssign/) | The assignment to evaluate  |
| `next` | Function | Callback to call when evaluation completes  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isOriginalScriptExpression"><code><span class="field-name">isOriginalScriptExpression</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isOriginalScriptExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines whether an expression is an "original script expression" - meaning it only
depends on values directly present in the script and not on runtime state.

Original script expressions can be evaluated at parse time and safely stored as
default values, as they don't depend on dynamic context like variables or
function calls that might change during runtime.



| Name | Type | Description |
|------|------|-------------|
| `expr` | [NExpr](/api-docs/headless/loreline/NExpr/) | The expression to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the expression only depends on literal values in the script |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isBeatCall"><code><span class="field-name">isBeatCall</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/AstNode/" class="type-link">AstNode</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBeatCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if a node is a beat call.
A beat call is a special function call that executes a beat instead of a normal function.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `node` | [AstNode](/api-docs/headless/loreline/AstNode/) | | The node to check  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | `-1` | Optional scope level to search in (defaults to current scope)  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the node is a beat call |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveBeatFromCall"><code><span class="field-name">resolveBeatFromCall</span><span class="parenthesis">(</span><span class="arg-name">call</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCall/" class="type-link">NCall</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">scopeLevel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">-1</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NBeatDecl/" class="type-link">NBeatDecl</a></code><a class="header-anchor" href="#resolveBeatFromCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves a call node to a beat declaration if the call references a beat.
This allows handling beat calls differently from regular function calls.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `call` | [NCall](/api-docs/headless/loreline/NCall/) | | The call node to resolve  |
| `scopeLevel` | [Int](/api-docs/headless/Int/) | `-1` | Optional scope level to search in (defaults to current scope)  |

| Returns | Description |
|---------|-------------|
| [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | The beat declaration if found, null otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalCall"><code><span class="field-name">evalCall</span><span class="parenthesis">(</span><span class="arg-name">call</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCall/" class="type-link">NCall</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a call node.
If the call references a beat, it executes the beat.
Otherwise, it evaluates it as a regular function call.



| Name | Type | Description |
|------|------|-------------|
| `call` | [NCall](/api-docs/headless/loreline/NCall/) | The call node to evaluate  |
| `next` | Function | Callback to call when evaluation completes |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evalTransition"><code><span class="field-name">evalTransition</span><span class="parenthesis">(</span><span class="arg-name">transition</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NTransition/" class="type-link">NTransition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#evalTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a transition node.
Transitions cause execution to jump to a different beat,
clearing the current execution stack.



| Name | Type | Description |
|------|------|-------------|
| `transition` | [NTransition](/api-docs/headless/loreline/NTransition/) | The transition node to evaluate |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluateString"><code><span class="field-name">evaluateString</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NStringLiteral/" class="type-link">NStringLiteral</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">AnonStruct</span></code><a class="header-anchor" href="#evaluateString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a string literal into text with tags.
This handles interpolation and tag processing.



| Name | Type | Description |
|------|------|-------------|
| `str` | [NStringLiteral](/api-docs/headless/loreline/NStringLiteral/) | The string literal to evaluate  |

| Returns | Description |
|---------|-------------|
| AnonStruct | Object containing the evaluated text and any tags |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stripStringIndent"><code><span class="field-name">stripStringIndent</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#stripStringIndent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="stripStringComments"><code><span class="field-name">stripStringComments</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#stripStringComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluateCondition"><code><span class="field-name">evaluateCondition</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#evaluateCondition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a condition expression for an if statement or choice option.
Converts the result to a boolean according to Loreline's rules.



| Name | Type | Description |
|------|------|-------------|
| `expr` | [NExpr](/api-docs/headless/loreline/NExpr/) | The condition expression to evaluate  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the condition evaluates to a truthy value |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluateFunctionCall"><code><span class="field-name">evaluateFunctionCall</span><span class="parenthesis">(</span><span class="arg-name">call</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NCall/" class="type-link">NCall</a><span class="operator">,</span> <span class="arg-name">next</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#evaluateFunctionCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates a function call in an expression context.
If next is provided, the function may execute asynchronously.
If next is null, the function must execute synchronously.



| Name | Type | Description |
|------|------|-------------|
| `call` | [NCall](/api-docs/headless/loreline/NCall/) | The function call node to evaluate  |
| `next` | Function | Optional callback for asynchronous execution  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The result of the function call  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluateArrayLiteral"><code><span class="field-name">evaluateArrayLiteral</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#evaluateArrayLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates an array literal to a runtime array.
Each element is evaluated recursively.



| Name | Type | Description |
|------|------|-------------|
| `expr` | [Array](/api-docs/headless/Array/)<[Dynamic](/api-docs/headless/Dynamic/)> | The array literal expression to evaluate  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The resulting array |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluateObjectLiteral"><code><span class="field-name">evaluateObjectLiteral</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/loreline/NObjectField/" class="type-link">NObjectField</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#evaluateObjectLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates an object literal to a runtime object.
Each field value is evaluated recursively.



| Name | Type | Description |
|------|------|-------------|
| `expr` | [Array](/api-docs/headless/Array/)<[NObjectField](/api-docs/headless/loreline/NObjectField/)> | The object literal expression to evaluate  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The resulting object |

<hr class="field-separator" />

<div class="signature field-method has-description" id="evaluateExpression"><code><span class="field-name">evaluateExpression</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#evaluateExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Evaluates an expression to its runtime value.
This is the core expression evaluation function that handles all expression types.



| Name | Type | Description |
|------|------|-------------|
| `expr` | [NExpr](/api-docs/headless/loreline/NExpr/) | The expression to evaluate  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The runtime value of the expression  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="readAccess"><code><span class="field-name">readAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#readAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads the value from a runtime access.
This handles field access, array access, character access, and function access.



| Name | Type | Description |
|------|------|-------------|
| `access` | Anonymous | The runtime access to read  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The value at the access location  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeAccess"><code><span class="field-name">writeAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#writeAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes a value to a runtime access location.
This handles field access and array access.
Character and function access cannot be written to.



| Name | Type | Description |
|------|------|-------------|
| `access` | Anonymous | The runtime access to write to  |
| `value` | [Any](/api-docs/headless/Any/) | The value to write  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveAssignmentTarget"><code><span class="field-name">resolveAssignmentTarget</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveAssignmentTarget"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves an assignment target to a runtime access.
This is used to determine where to write a value in an assignment.



| Name | Type | Description |
|------|------|-------------|
| `target` | [NExpr](/api-docs/headless/loreline/NExpr/) | The target expression to resolve  |

| Returns | Description |
|---------|-------------|
| Anonymous | The runtime access to write to  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolveAccess"><code><span class="field-name">resolveAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NAccess/" class="type-link">NAccess</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#resolveAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resolves an access expression to a runtime access.
This handles finding variables, character fields, and functions in the appropriate scopes.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `access` | [NAccess](/api-docs/headless/loreline/NAccess/) | | The access expression to resolve  |
| `target` | [NExpr](/api-docs/headless/loreline/NExpr/) | *(optional)* | Optional target object for field access  |
| `name` | [String](/api-docs/headless/String/) | | The name to access  |

| Returns | Description |
|---------|-------------|
| Anonymous | The resolved runtime access  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getTypeName"><code><span class="field-name">getTypeName</span><span class="parenthesis">(</span><span class="arg-name">t</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getTypeName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Helper for getting human-readable type names in errors



| Name | Type | Description |
|------|------|-------------|
| `t` | Anonymous | The type to get a name for  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | A human-readable name for the type |

<hr class="field-separator" />

<div class="signature field-method has-description" id="performOperation"><code><span class="field-name">performOperation</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">left</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">right</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Position/" class="type-link">Position</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a></code><a class="header-anchor" href="#performOperation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs a binary operation on two values.
Handles arithmetic, comparison, and logical operations.



| Name | Type | Description |
|------|------|-------------|
| `op` | Anonymous | The operator to apply  |
| `left` | [Dynamic](/api-docs/headless/Dynamic/) | The left operand  |
| `right` | [Dynamic](/api-docs/headless/Dynamic/) | The right operand  |
| `pos` | [Position](/api-docs/headless/loreline/Position/) | The source position for error reporting  |

| Returns | Description |
|---------|-------------|
| [Any](/api-docs/headless/Any/) | The result of the operation  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="valueToString"><code><span class="field-name">valueToString</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#valueToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a value to its string representation.
Used for string interpolation and output.



| Name | Type | Description |
|------|------|-------------|
| `value` | [Any](/api-docs/headless/Any/) | The value to convert to a string  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The string representation of the value |

<hr class="field-separator" />

<div class="signature field-method no-description" id="printLoreline"><code><span class="field-name">printLoreline</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/headless/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#printLoreline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [Node](/api-docs/headless/loreline/Node/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:allow` | loreline.HscriptInterp |
| `:expose` | - |

