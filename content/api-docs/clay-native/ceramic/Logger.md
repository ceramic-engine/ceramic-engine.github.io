---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Logger
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Logger/
---

# Logger

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Logger.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Logger</strong> (Class)</div>

Centralized logging system for Ceramic applications that provides colored, categorized output.

The Logger class extends Entity to provide event-based logging with different severity levels.
It handles platform-specific output formatting (Unity, Web, Native) and thread-safe logging
from background threads. All log messages can be observed through events for custom handling.

The logger supports five severity levels:
- `debug`: Development and diagnostic information (magenta in Unity, [debug] prefix)
- `info`: General informational messages (cyan in Unity, [info] prefix)
- `success`: Success confirmations (lime in Unity, [success] prefix)
- `warning`: Warning messages (yellow in Unity, uses console.warn on web)
- `error`: Error messages (red in Unity, uses console.error on web)

Example usage:
```haxe
// Basic logging (accessible via `log` in Ceramic project)
log.info("Game started");
log.debug("Player position: " + player.x + ", " + player.y);
log.warning("Low memory detected");
log.error("Failed to load save file");

// Hierarchical logging with indentation
log.info("Loading assets...");
log.pushIndent();
log.info("Loading textures...");
log.info("Loading sounds...");
log.popIndent();
log.success("Assets loaded!");

// Listen to log events
log.onInfo(this, (value, pos) -> {
    // Custom handling of info messages
    saveToLogFile(value, pos);
});
```

Compile-time flags:
- `ceramic_mute_logs`: Disables all console output (events still fire)
- `ceramic_no_log`: Completely removes logging code (no output, no events)
- `ceramic_unity_no_log`: Disables Unity-specific console output

## Instance Members

<div class="signature field-method has-description" id="debug"><code><span class="field-name">debug</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debug"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logs a debug message with magenta/[debug] formatting.

Debug messages are intended for development and diagnostic information
that helps understand program flow and state during development.
These messages are typically filtered out in production builds.

Thread-safe: Can be called from background threads.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The value to log (will be converted to string)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source position information (automatically provided) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="info"><code><span class="field-name">info</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logs an informational message with cyan/[info] formatting.

Info messages communicate general application state and progress.
Use for non-critical information that helps understand what the
application is doing during normal operation.

Thread-safe: Can be called from background threads.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The value to log (will be converted to string)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source position information (automatically provided) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="success"><code><span class="field-name">success</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#success"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logs a success message with lime/[success] formatting.

Success messages indicate successful completion of operations.
Use to confirm that important actions completed without errors,
such as asset loading, save operations, or network requests.

Thread-safe: Can be called from background threads.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The value to log (will be converted to string)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source position information (automatically provided) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="warning"><code><span class="field-name">warning</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#warning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logs a warning message with yellow/[warning] formatting.

Warning messages indicate potential issues that don't prevent
operation but may cause problems. Uses native console.warn()
on web platforms for proper browser dev tools integration.

Thread-safe: Can be called from background threads.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The value to log (will be converted to string)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source position information (automatically provided) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logs an error message with red/[error] formatting.

Error messages indicate failures that may affect application behavior.
Uses native console.error() on web platforms for proper browser
dev tools integration with stack traces.

Thread-safe: Can be called from background threads.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The value to log (will be converted to string)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source position information (automatically provided) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pushIndent"><code><span class="field-name">pushIndent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pushIndent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Increases the indentation level for subsequent log messages.

Each call adds 4 spaces to the beginning of log messages,
creating a visual hierarchy in the output. Useful for logging
nested operations or sub-tasks.

Must be balanced with popIndent() calls.

Example:
```haxe
logger.info("Processing items...");
logger.pushIndent();
for (item in items) {
    logger.info("Processing: " + item.name);
}
logger.popIndent();
logger.success("Done!");
```

<hr class="field-separator" />

<div class="signature field-method has-description" id="popIndent"><code><span class="field-name">popIndent</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#popIndent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decreases the indentation level for subsequent log messages.

Removes 4 spaces from the indentation prefix. Should be called
to balance each pushIndent() call.

<div class="see"><strong>See:</strong> pushIndent</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Logger instance.
Configures platform-specific trace handlers on first initialization.

## Private Members

<div class="signature field-var no-description" id="didInitOnce"><code><span class="field-name">didInitOnce</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#didInitOnce"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentPrefix"><code><span class="field-name">indentPrefix</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#indentPrefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current indentation prefix for hierarchical logging.
Each level adds 4 spaces to create visual hierarchy in log output.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitInfo"><code><span class="field-name">emitInfo</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an info message is logged.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The logged value (converted to string for display)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source code position information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitDebug"><code><span class="field-name">emitDebug</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDebug"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a debug message is logged.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The logged value (converted to string for display)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source code position information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitSuccess"><code><span class="field-name">emitSuccess</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSuccess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a success message is logged.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The logged value (converted to string for display)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source code position information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitWarning"><code><span class="field-name">emitWarning</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWarning"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when a warning message is logged.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The logged value (converted to string for display)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source code position information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitError"><code><span class="field-name">emitError</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">pos</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/haxe/PosInfos/" class="type-link">haxe.PosInfos</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when an error message is logged.


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `value` | [Dynamic](/api-docs/clay-native/Dynamic/) | | The logged value (converted to string for display)  |
| `pos` | [Null](/api-docs/clay-native/Null/)<[haxe.PosInfos](/api-docs/clay-native/haxe/PosInfos/)> | *(optional)* | Source code position information |

<hr class="field-separator" />

<div class="signature field-method has-description" id="prefixLines"><code><span class="field-name">prefixLines</span><span class="parenthesis">(</span><span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#prefixLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds prefix and indentation to each line of the input.
Used internally to format multi-line log messages with proper
category prefixes and indentation.



| Name | Type | Description |
|------|------|-------------|
| `prefix` | [String](/api-docs/clay-native/String/) | The category prefix like "[info] "  |
| `input` | [Dynamic](/api-docs/clay-native/Dynamic/) | The value to format (converted to string)  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-native/String/) | The formatted string with prefix on each line |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:allow` | ceramic.App |

