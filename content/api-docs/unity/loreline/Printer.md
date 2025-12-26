---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Printer
target: Unity
permalink: api-docs/unity/loreline/Printer/
---

# Printer

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Printer.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Printer</strong> (Class)</div>

A code printer that converts AST nodes back into formatted Loreline source code.
Handles indentation, newlines, and pretty-printing of all node types.

## Instance Members

<div class="signature field-var has-description" id="enableComments"><code><span class="field-name">enableComments</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#enableComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set to `false` to ignore comments.

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the printer to its initial state.

<hr class="field-separator" />

<div class="signature field-method has-description" id="indent"><code><span class="field-name">indent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#indent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Increases the current indentation level by one.

<hr class="field-separator" />

<div class="signature field-method has-description" id="unindent"><code><span class="field-name">unindent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unindent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decreases the current indentation level by one.

<hr class="field-separator" />

<div class="signature field-method has-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Printer</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes a string to the output buffer, handling indentation if at start of line.


| Name | Type | Description |
|------|------|-------------|
| `s` | [String](/api-docs/unity/String/) | String to write  |

| Returns | Description |
|---------|-------------|
| [Printer](/api-docs/unity/loreline/Printer/) | This printer instance for chaining |

<hr class="field-separator" />

<div class="signature field-method has-description" id="writeln"><code><span class="field-name">writeln</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Printer</a></code><a class="header-anchor" href="#writeln"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes a line break to the output.

| Returns | Description |
|---------|-------------|
| [Printer](/api-docs/unity/loreline/Printer/) | This printer instance for chaining |

<hr class="field-separator" />

<div class="signature field-method has-description" id="newline"><code><span class="field-name">newline</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Printer</a></code><a class="header-anchor" href="#newline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a newline to the output, limiting consecutive blank lines to 1.

| Returns | Description |
|---------|-------------|
| [Printer](/api-docs/unity/loreline/Printer/) | This printer instance for chaining |

<hr class="field-separator" />

<div class="signature field-method has-description" id="tab"><code><span class="field-name">tab</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Printer</a></code><a class="header-anchor" href="#tab"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds indentation at the current level to the output.

| Returns | Description |
|---------|-------------|
| [Printer](/api-docs/unity/loreline/Printer/) | This printer instance for chaining |

<hr class="field-separator" />

<div class="signature field-method has-description" id="line"><code><span class="field-name">line</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Printer</a></code><a class="header-anchor" href="#line"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alias for newline().

| Returns | Description |
|---------|-------------|
| [Printer](/api-docs/unity/loreline/Printer/) | This printer instance for chaining |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current content of the output buffer.

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | Generated source code |

<hr class="field-separator" />

<div class="signature field-method has-description" id="print"><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main entry point for printing an AST node to source code.


| Name | Type | Description |
|------|------|-------------|
| `node` | [Node](/api-docs/unity/loreline/Node/) | Root node to print  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | Generated source code as string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">indent</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"  "</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">newline</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"\n"</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new code printer with customizable formatting options.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `indent` | [String](/api-docs/unity/String/) | `"  "` | String used for each level of indentation (default: 4 spaces)  |
| `newline` | [String](/api-docs/unity/String/) | `"\n"` | String used for line breaks (default: \n) |

## Private Members

<div class="signature field-method has-description" id="printNode"><code><span class="field-name">printNode</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Node/" class="type-link">Node</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">sameLine</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dispatches a node to its appropriate printing function based on type.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `node` | [Node](/api-docs/unity/loreline/Node/) | | Node to print |
| `sameLine` | [Bool](/api-docs/unity/Bool/) | `false` |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printLeadingComments"><code><span class="field-name">printLeadingComments</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printLeadingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints any leading comments attached to a node.


| Name | Type | Description |
|------|------|-------------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) | Node with potential comments |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printTrailingComments"><code><span class="field-name">printTrailingComments</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printTrailingComments"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints any trailing comments attached to a node.


| Name | Type | Description |
|------|------|-------------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) | Node with potential comments |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printImport"><code><span class="field-name">printImport</span><span class="parenthesis">(</span><span class="arg-name">imp</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NImportStatement/" class="type-link">NImportStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printImport"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an import statement.


| Name | Type | Description |
|------|------|-------------|
| `imp` | [NImportStatement](/api-docs/unity/loreline/NImportStatement/) | Import statement node |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printScript"><code><span class="field-name">printScript</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printScript"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a complete Loreline script node.


| Name | Type | Description |
|------|------|-------------|
| `script` | [Script](/api-docs/unity/loreline/Script/) | Script node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printStateDecl"><code><span class="field-name">printStateDecl</span><span class="parenthesis">(</span><span class="arg-name">state</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NStateDecl/" class="type-link">NStateDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printStateDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a state declaration node.


| Name | Type | Description |
|------|------|-------------|
| `state` | [NStateDecl](/api-docs/unity/loreline/NStateDecl/) | State declaration to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printCharacterDecl"><code><span class="field-name">printCharacterDecl</span><span class="parenthesis">(</span><span class="arg-name">char</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NCharacterDecl/" class="type-link">NCharacterDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printCharacterDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a character declaration node.


| Name | Type | Description |
|------|------|-------------|
| `char` | [NCharacterDecl](/api-docs/unity/loreline/NCharacterDecl/) | Character declaration to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printBeatDecl"><code><span class="field-name">printBeatDecl</span><span class="parenthesis">(</span><span class="arg-name">beat</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBeatDecl/" class="type-link">NBeatDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printBeatDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a beat declaration node.


| Name | Type | Description |
|------|------|-------------|
| `beat` | [NBeatDecl](/api-docs/unity/loreline/NBeatDecl/) | Beat declaration to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printFunctionDecl"><code><span class="field-name">printFunctionDecl</span><span class="parenthesis">(</span><span class="arg-name">func</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NFunctionDecl/" class="type-link">NFunctionDecl</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printFunctionDecl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a function declaration node.


| Name | Type | Description |
|------|------|-------------|
| `func` | [NFunctionDecl](/api-docs/unity/loreline/NFunctionDecl/) | Function declaration to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printTextStatement"><code><span class="field-name">printTextStatement</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NTextStatement/" class="type-link">NTextStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printTextStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a text statement node.


| Name | Type | Description |
|------|------|-------------|
| `text` | [NTextStatement](/api-docs/unity/loreline/NTextStatement/) | Text statement to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printDialogueStatement"><code><span class="field-name">printDialogueStatement</span><span class="parenthesis">(</span><span class="arg-name">dialogue</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NDialogueStatement/" class="type-link">NDialogueStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printDialogueStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a dialogue statement node.


| Name | Type | Description |
|------|------|-------------|
| `dialogue` | [NDialogueStatement](/api-docs/unity/loreline/NDialogueStatement/) | Dialogue statement to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printChoiceStatement"><code><span class="field-name">printChoiceStatement</span><span class="parenthesis">(</span><span class="arg-name">choice</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NChoiceStatement/" class="type-link">NChoiceStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printChoiceStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a choice statement node.


| Name | Type | Description |
|------|------|-------------|
| `choice` | [NChoiceStatement](/api-docs/unity/loreline/NChoiceStatement/) | Choice statement to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printImportStatement"><code><span class="field-name">printImportStatement</span><span class="parenthesis">(</span><span class="arg-name">imp</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NImportStatement/" class="type-link">NImportStatement</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printImportStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an import statement node.


| Name | Type | Description |
|------|------|-------------|
| `imp` | [NImportStatement](/api-docs/unity/loreline/NImportStatement/) | Import statement to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printChoiceOption"><code><span class="field-name">printChoiceOption</span><span class="parenthesis">(</span><span class="arg-name">option</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NChoiceOption/" class="type-link">NChoiceOption</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printChoiceOption"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a choice option node.


| Name | Type | Description |
|------|------|-------------|
| `option` | [NChoiceOption](/api-docs/unity/loreline/NChoiceOption/) | Choice option to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printIfStatement"><code><span class="field-name">printIfStatement</span><span class="parenthesis">(</span><span class="arg-name">ifStmt</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NIfStatement/" class="type-link">NIfStatement</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">isElseIf</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printIfStatement"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an if statement node, handling both simple if and if-else structures.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `ifStmt` | [NIfStatement](/api-docs/unity/loreline/NIfStatement/) | | If statement to print  |
| `isElseIf` | [Bool](/api-docs/unity/Bool/) | `false` | Whether this is part of an else-if chain |

<hr class="field-separator" />

<div class="signature field-method no-description" id="needsEmptyLines"><code><span class="field-name">needsEmptyLines</span><span class="parenthesis">(</span><span class="arg-name">node</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/AstNode/" class="type-link">AstNode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#needsEmptyLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `node` | [AstNode](/api-docs/unity/loreline/AstNode/) |

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printTransition"><code><span class="field-name">printTransition</span><span class="parenthesis">(</span><span class="arg-name">trans</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NTransition/" class="type-link">NTransition</a><span class="operator">,</span> <span class="arg-name">sameLine</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printTransition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a transition node.


| Name | Type | Description |
|------|------|-------------|
| `trans` | [NTransition](/api-docs/unity/loreline/NTransition/) | Transition to print |
| `sameLine` | [Bool](/api-docs/unity/Bool/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printInsertion"><code><span class="field-name">printInsertion</span><span class="parenthesis">(</span><span class="arg-name">insert</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NInsertion/" class="type-link">NInsertion</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printInsertion"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an insertion node.


| Name | Type | Description |
|------|------|-------------|
| `insert` | [NInsertion](/api-docs/unity/loreline/NInsertion/) | Insertion to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printStringLiteral"><code><span class="field-name">printStringLiteral</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NStringLiteral/" class="type-link">NStringLiteral</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printStringLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a string literal node, handling both plain strings and strings with quotes.


| Name | Type | Description |
|------|------|-------------|
| `str` | [NStringLiteral](/api-docs/unity/loreline/NStringLiteral/) | String literal to print  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printLiteral"><code><span class="field-name">printLiteral</span><span class="parenthesis">(</span><span class="arg-name">lit</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NLiteral/" class="type-link">NLiteral</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printLiteral"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a literal value node (numbers, booleans, arrays, objects).


| Name | Type | Description |
|------|------|-------------|
| `lit` | [NLiteral](/api-docs/unity/loreline/NLiteral/) | Literal node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printAccess"><code><span class="field-name">printAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NAccess/" class="type-link">NAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a field access expression (object.field).


| Name | Type | Description |
|------|------|-------------|
| `access` | [NAccess](/api-docs/unity/loreline/NAccess/) | Field access node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printArrayAccess"><code><span class="field-name">printArrayAccess</span><span class="parenthesis">(</span><span class="arg-name">access</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NArrayAccess/" class="type-link">NArrayAccess</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printArrayAccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an array access expression (array[index]).


| Name | Type | Description |
|------|------|-------------|
| `access` | [NArrayAccess](/api-docs/unity/loreline/NArrayAccess/) | Array access node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printCall"><code><span class="field-name">printCall</span><span class="parenthesis">(</span><span class="arg-name">call</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NCall/" class="type-link">NCall</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a function call expression.


| Name | Type | Description |
|------|------|-------------|
| `call` | [NCall](/api-docs/unity/loreline/NCall/) | Function call node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printBinary"><code><span class="field-name">printBinary</span><span class="parenthesis">(</span><span class="arg-name">binary</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NBinary/" class="type-link">NBinary</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">skipParen</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printBinary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a binary operation expression (a + b, a && b, etc).
Handles operator precedence with parentheses when needed.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `binary` | [NBinary](/api-docs/unity/loreline/NBinary/) | | Binary operation node to print |
| `skipParen` | [Bool](/api-docs/unity/Bool/) | `false` |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printUnary"><code><span class="field-name">printUnary</span><span class="parenthesis">(</span><span class="arg-name">unary</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NUnary/" class="type-link">NUnary</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printUnary"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a unary operation expression (!x, -x).


| Name | Type | Description |
|------|------|-------------|
| `unary` | [NUnary](/api-docs/unity/loreline/NUnary/) | Unary operation node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printAssignment"><code><span class="field-name">printAssignment</span><span class="parenthesis">(</span><span class="arg-name">assign</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NAssign/" class="type-link">NAssign</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printAssignment"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an assignment expression (a = b, a += b).


| Name | Type | Description |
|------|------|-------------|
| `assign` | [NAssign](/api-docs/unity/loreline/NAssign/) | Assignment node to print |

<hr class="field-separator" />

<div class="signature field-method has-description" id="printInLineExpression"><code><span class="field-name">printInLineExpression</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/unity/loreline/NExpr/" class="type-link">NExpr</a><span class="operator">,</span> <span class="arg-name">parens</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#printInLineExpression"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints an in-line expression optionally wrapped in parentheses.


| Name | Type | Description |
|------|------|-------------|
| `expr` | [NExpr](/api-docs/unity/loreline/NExpr/) | Expression to wrap in parentheses |
| `parens` | [Bool](/api-docs/unity/Bool/) |  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getOperator"><code><span class="field-name">getOperator</span><span class="parenthesis">(</span><span class="arg-name">op</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getOperator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a token type to its corresponding operator string representation.


| Name | Type | Description |
|------|------|-------------|
| `op` | Anonymous | Token type to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | String representation of the operator  |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

