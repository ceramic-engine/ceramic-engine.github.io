---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Loreline
target: Unity
permalink: api-docs/unity/loreline/Loreline/
---

# Loreline

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Loreline.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Loreline</strong> (Class)</div>

The main public API for Loreline runtime.
Provides easy access to the core functionality for parsing and running Loreline scripts.

## Static Members

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filePath</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleFile</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/ImportsFileHandler/" class="type-link">ImportsFileHandler</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/unity/loreline/Script/" class="type-link">Script</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses the given text input and creates an executable `Script` instance from it.

This is the first step in working with a Loreline script. The returned
`Script` object can then be passed to methods `play()` or `resume()`.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `input` | [String](/api-docs/unity/String/) | | The Loreline script content as a string (`.lor` format)  |
| `filePath` | [String](/api-docs/unity/String/) | *(optional)* | (optional) The file path of the input being parsed. If provided, requires `handleFile` as well.  |
| `handleFile` | [Null](/api-docs/unity/Null/)<[ImportsFileHandler](/api-docs/unity/loreline/ImportsFileHandler/)> | *(optional)* | * (optional) A file handler to read imports. If that handler is asynchronous, then `parse()` method will return null and `callback` argument should be used to get the final script  |
| `callback` | Function | *(optional)* | If provided, will be called with the resulting script as argument. Mostly useful when reading file imports asynchronously  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/unity/Null/)<[Script](/api-docs/unity/loreline/Script/)> | The parsed script as an AST `Script` instance (if loaded synchronously)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="arg-name">handleDialogue</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/DialogueHandler/" class="type-link">DialogueHandler</a><span class="operator">,</span> <span class="arg-name">handleChoice</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/ChoiceHandler/" class="type-link">ChoiceHandler</a><span class="operator">,</span> <span class="arg-name">handleFinish</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/FinishHandler/" class="type-link">FinishHandler</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beatName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/InterpreterOptions/" class="type-link">InterpreterOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts playing a Loreline script from the beginning or a specific beat.

This function takes care of initializing the interpreter and starting execution
immediately. You'll need to provide handlers for dialogues, choices, and
script completion.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/unity/loreline/Script/) | | The parsed script (result from `parse()`)  |
| `handleDialogue` | [DialogueHandler](/api-docs/unity/loreline/DialogueHandler/) | | Function called when dialogue text should be displayed  |
| `handleChoice` | [ChoiceHandler](/api-docs/unity/loreline/ChoiceHandler/) | | Function called when player needs to make a choice  |
| `handleFinish` | [FinishHandler](/api-docs/unity/loreline/FinishHandler/) | | Function called when script execution completes  |
| `beatName` | [String](/api-docs/unity/String/) | *(optional)* | Optional name of a specific beat to start from (defaults to first beat)  |
| `options` | [InterpreterOptions](/api-docs/unity/loreline/InterpreterOptions/) | *(optional)* | Additional options  |

| Returns | Description |
|---------|-------------|
| [Interpreter](/api-docs/unity/loreline/Interpreter/) | The interpreter instance that is running the script |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="arg-name">handleDialogue</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/DialogueHandler/" class="type-link">DialogueHandler</a><span class="operator">,</span> <span class="arg-name">handleChoice</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/ChoiceHandler/" class="type-link">ChoiceHandler</a><span class="operator">,</span> <span class="arg-name">handleFinish</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/FinishHandler/" class="type-link">FinishHandler</a><span class="operator">,</span> <span class="arg-name">saveData</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/SaveData/" class="type-link">SaveData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beatName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/InterpreterOptions/" class="type-link">InterpreterOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Interpreter/" class="type-link">Interpreter</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes a previously saved Loreline script from its saved state.

This allows you to continue a story from the exact point where it was saved,
restoring all state variables, choices, and player progress.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/unity/loreline/Script/) | | The parsed script (result from `parse()`)  |
| `handleDialogue` | [DialogueHandler](/api-docs/unity/loreline/DialogueHandler/) | | Function called when dialogue text should be displayed  |
| `handleChoice` | [ChoiceHandler](/api-docs/unity/loreline/ChoiceHandler/) | | Function called when player needs to make a choice  |
| `handleFinish` | [FinishHandler](/api-docs/unity/loreline/FinishHandler/) | | Function called when script execution completes  |
| `saveData` | [SaveData](/api-docs/unity/loreline/SaveData/) | | The saved game data (typically from `interpreter.save()`)  |
| `beatName` | [String](/api-docs/unity/String/) | *(optional)* | Optional beat name to override where to resume from  |
| `options` | [InterpreterOptions](/api-docs/unity/loreline/InterpreterOptions/) | *(optional)* |  |

| Returns | Description |
|---------|-------------|
| [Interpreter](/api-docs/unity/loreline/Interpreter/) | The interpreter instance that is running the script |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

