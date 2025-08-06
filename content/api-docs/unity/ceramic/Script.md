---
layout: api-docs
category: api-docs
subCategory: doc
menu: Script
title: Script
target: Unity
permalink: api-docs/unity/ceramic/Script/
---

# Script

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/script/runtime/src/ceramic/Script.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/unity/ceramic/Entity/">Entity</a> → <strong>ceramic.Script</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/ceramic/Component/">Component</a></div>

Dynamic scripting component for runtime code execution.

Allows entities to have behavior defined through HScript code that can be
modified at runtime. Scripts have access to the full Ceramic API and can
define lifecycle methods (init, update, destroy).

Features:
- JavaScript/TypeScript-like syntax (arrow functions, for-of loops)
- Automatic entity lifecycle management
- Error handling and sandboxing
- Module system for inter-script communication
- Infinite loop protection

```haxe
// Create a script that moves an entity
var scriptCode = '
var speed = 100;

function update(delta) {
    entity.x += speed * delta;
    if (entity.x > screen.width) {
        entity.x = 0;
    }
}
';

var entity = new Quad();
entity.size(50, 50);
entity.script = new Script(scriptCode);
```

## Static Members

<div class="signature field-var has-description has-plugin" id="errorHandlers"><div class="plugin-name">script</div><code><span class="field-name">errorHandlers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#errorHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global error handlers called when scripts encounter errors.
Add handlers here to be notified of all script errors.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="traceHandlers"><div class="plugin-name">script</div><code><span class="field-name">traceHandlers</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">Function</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#traceHandlers"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global trace handlers called when scripts use trace().
Add handlers here to intercept script trace output.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="log"><div class="plugin-name">script</div><code><span class="field-name">log</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Logger/" class="type-link">Logger</a></code><a class="header-anchor" href="#log"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logger instance for script-related messages

## Instance Members

<div class="signature field-var has-description has-plugin" id="content"><div class="plugin-name">script</div><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The source code content of this script.
Preprocessed to convert JS/TS idioms to HScript.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="program"><div class="plugin-name">script</div><code><span class="field-name">program</span><span class="operator">:</span> <a href="/api-docs/unity/hscript/Expr/" class="type-link">hscript.Expr</a></code><a class="header-anchor" href="#program"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The parsed HScript AST (Abstract Syntax Tree).

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="interp"><div class="plugin-name">script</div><code><span class="field-name">interp</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Interp/" class="type-link">Interp</a></code><a class="header-anchor" href="#interp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The HScript interpreter executing this script.
Provides access to variables and execution context.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="module"><div class="plugin-name">script</div><code><span class="field-name">module</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScriptModule/" class="type-link">ScriptModule</a></code><a class="header-anchor" href="#module"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Module interface for inter-script communication.
Other scripts can access this script's exports through this module.

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="entity"><div class="plugin-name">script</div><code><span class="field-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#entity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initializerName"><div class="plugin-name">script</div><code><span class="field-name">initializerName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#initializerName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="destroy"><div class="plugin-name">script</div><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="run"><div class="plugin-name">script</div><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Executes the script and sets up lifecycle callbacks.

Looks for and binds these optional functions:
- `init()`: Called once after script execution
- `update(delta)`: Called every frame with time delta
- `destroy()`: Called when script is destroyed

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getEntityById"><div class="plugin-name">script</div><code><span class="field-name">getEntityById</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntityById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets an entity by its ID from the script's context.

Searches for entities in:
1. Parent Fragment if the script's entity is a Visual
2. Fragment variable in the script's scope



| Name | Type | Description |
|------|------|-------------|
| `itemId` | [String](/api-docs/unity/String/) | Entity ID to look up  |

| Returns | Description |
|---------|-------------|
| [Entity](/api-docs/unity/ceramic/Entity/) | Found entity or null |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getModule"><div class="plugin-name">script</div><code><span class="field-name">getModule</span><span class="parenthesis">(</span><span class="arg-name">itemId</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/ScriptModule/" class="type-link">ScriptModule</a></code><a class="header-anchor" href="#getModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a script module by entity ID.

Allows scripts to access other scripts' exported functions
and variables through their module interface.



| Name | Type | Description |
|------|------|-------------|
| `itemId` | [String](/api-docs/unity/String/) | ID of the entity whose script module to retrieve  |

| Returns | Description |
|---------|-------------|
| [ScriptModule](/api-docs/unity/ceramic/ScriptModule/) | Script module or null if entity has no script |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="get"><div class="plugin-name">script</div><code><span class="field-name">get</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets a variable value from the script's scope.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/unity/String/) | Variable name  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Variable value or null if not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="call"><div class="plugin-name">script</div><code><span class="field-name">call</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#call"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calls a function defined in the script.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/unity/String/) | | Function name  |
| `args` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> | *(optional)* | Optional arguments to pass  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Function return value |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="callScriptMethod"><div class="plugin-name">script</div><code><span class="field-name">callScriptMethod</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">numArgs</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">arg1</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">arg2</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">arg3</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#callScriptMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Internal method to call script functions with optimized argument passing.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `name` | [String](/api-docs/unity/String/) | | Function name  |
| `numArgs` | [Int](/api-docs/unity/Int/) | | Number of arguments  |
| `arg1` | [Dynamic](/api-docs/unity/Dynamic/) | *(optional)* | First argument (or array of all arguments if numArgs > 3)  |
| `arg2` | [Dynamic](/api-docs/unity/Dynamic/) | *(optional)* | Second argument  |
| `arg3` | [Dynamic](/api-docs/unity/Dynamic/) | *(optional)* | Third argument  |

| Returns | Description |
|---------|-------------|
| [Dynamic](/api-docs/unity/Dynamic/) | Function return value or null if function not found |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">script</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new script with the given source code.

The script is parsed immediately. If parsing fails, the script
is marked as broken and scheduled for destruction.



| Name | Type | Description |
|------|------|-------------|
| `content` | [String](/api-docs/unity/String/) | Source code in JavaScript/TypeScript-like syntax |

## Private Members

<div class="signature field-var has-description has-plugin" id="MAX_LOOP_ITERATIONS"><div class="plugin-name">script</div><code><span class="field-name">MAX_LOOP_ITERATIONS</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#MAX_LOOP_ITERATIONS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum iterations allowed in loops to prevent infinite loops

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="parser"><div class="plugin-name">script</div><code><span class="field-name">parser</span><span class="operator">:</span> <a href="/api-docs/unity/hscript/Parser/" class="type-link">hscript.Parser</a></code><a class="header-anchor" href="#parser"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared HScript parser instance

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="ready"><div class="plugin-name">script</div><code><span class="field-name">ready</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#ready"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the script has been successfully parsed and is ready to run

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="running"><div class="plugin-name">script</div><code><span class="field-name">running</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#running"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the script is currently executing

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="broken"><div class="plugin-name">script</div><code><span class="field-name">broken</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#broken"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether the script has encountered a fatal error

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="loopStates"><div class="plugin-name">script</div><code><span class="field-name">loopStates</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/IntIntMap/" class="type-link">IntIntMap</a></code><a class="header-anchor" href="#loopStates"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tracks loop iterations for infinite loop detection

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="bindAsComponent"><div class="plugin-name">script</div><code><span class="field-name">bindAsComponent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAsComponent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when script is attached to an entity as a component.
Sets up entity-specific variables and schedules execution.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="checkLoop"><div class="plugin-name">script</div><code><span class="field-name">checkLoop</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#checkLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks for infinite loops by tracking iteration counts.
Called automatically in while loops.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/unity/Int/) | Unique index for each loop in the script  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/unity/Bool/) | Always true unless max iterations exceeded  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="resetCheckLoop"><div class="plugin-name">script</div><code><span class="field-name">resetCheckLoop</span><span class="parenthesis">(</span><span class="arg-name">_</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetCheckLoop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets loop iteration counters each frame.
Prevents false positives from accumulated iterations.

| Name | Type |
|------|------|
| `_` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="setEntity"><div class="plugin-name">script</div><code><span class="field-name">setEntity</span><span class="parenthesis">(</span><span class="arg-name">entity</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entity` | [Entity](/api-docs/unity/ceramic/Entity/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="getEntity"><div class="plugin-name">script</div><code><span class="field-name">getEntity</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/ceramic/Entity/" class="type-link">Entity</a></code><a class="header-anchor" href="#getEntity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Entity](/api-docs/unity/ceramic/Entity/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:build` | ceramic.macros.ComponentMacro.build() |
| `:autoBuild` | ceramic.macros.ComponentMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

