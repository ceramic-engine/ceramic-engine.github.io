---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Shortcuts
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Shortcuts/
---

# Shortcuts

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Shortcuts.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Shortcuts</strong> (Class)</div>

Convenience static accessors and utility methods for common Ceramic functionality.

Shortcuts provides quick access to frequently used Ceramic singletons and utilities,
eliminating the need for repetitive code. By importing this class with `import ceramic.Shortcuts.*;`,
you gain direct access to app, screen, audio, input, and other core systems.
This import is done by default via `import.hx` in Ceramic projects.

Key features:
- **Static accessors**: Direct access to app, screen, audio, input, settings, log, systems
- **Observation utilities**: Methods for managing autorun scopes (unobserve, reobserve, cease)
- **Conditional execution**: `until()` macro for reactive condition checking
- **Debug assertions**: `assert()` macro for development-time validation

Usage examples:
```haxe
import ceramic.Shortcuts.*;
```

```haxe
// Direct access to singletons
app.onUpdate(this, update);
screen.onResize(this, handleResize);
audio.playSound(mySound);

// Wait for condition on observable player health field
until(player.health <= 0, () -> {
    showGameOver();
});

// Debug assertion
assert(player != null, "Player must exist");
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/ceramic/App/">App</a>, <a href="/api-docs/clay-web/ceramic/Screen/">Screen</a>, <a href="/api-docs/clay-web/ceramic/Audio/">Audio</a>, <a href="/api-docs/clay-web/ceramic/Input/">Input</a></div>


## Static Members

<div class="signature field-var has-description" id="app"><code><span class="field-name">app</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/App/" class="type-link">App</a></code><a class="header-anchor" href="#app"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared app instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="screen"><code><span class="field-name">screen</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Screen/" class="type-link">Screen</a></code><a class="header-anchor" href="#screen"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared screen instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="audio"><code><span class="field-name">audio</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Audio/" class="type-link">Audio</a></code><a class="header-anchor" href="#audio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared audio instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="input"><code><span class="field-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Input/" class="type-link">Input</a></code><a class="header-anchor" href="#input"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared input instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="settings"><code><span class="field-name">settings</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Settings/" class="type-link">Settings</a></code><a class="header-anchor" href="#settings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared settings instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="log"><code><span class="field-name">log</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Logger/" class="type-link">Logger</a></code><a class="header-anchor" href="#log"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shared logger instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="systems"><code><span class="field-name">systems</span><span class="operator">:</span> <a href="/api-docs/clay-web/ceramic/Systems/" class="type-link">Systems</a></code><a class="header-anchor" href="#systems"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Systems manager

<hr class="field-separator" />

<div class="signature field-method has-description" id="unobserve"><code><span class="field-name">unobserve</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#unobserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Temporarily stops observing property changes in the current autorun scope.

Use this when you need to read observable properties without creating
dependencies in the current autorun. Must be paired with `reobserve()`
to restore observation.

Example:
```haxe
autorun(() -> {
    // This creates a dependency
    var x = observable.value;

    unobserve();
    // This read doesn't create a dependency
    var y = observable.otherValue;
    reobserve();
});
```

<div class="see"><strong>See:</strong> reobserve, <a href="/api-docs/clay-web/tracker/Autorun/">tracker.Autorun</a></div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="reobserve"><code><span class="field-name">reobserve</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reobserve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes observing property changes after a call to `unobserve()`.

Restores the autorun's ability to track dependencies on observable
properties. Always pair this with a preceding `unobserve()` call.

<div class="see"><strong>See:</strong> unobserve, <a href="/api-docs/clay-web/tracker/Autorun/">tracker.Autorun</a></div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="cease"><code><span class="field-name">cease</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#cease"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops and destroys the current autorun from within its own callback.

Use this to create one-shot autoruns or to stop an autorun based on
internal conditions. The distinctive name 'cease' avoids conflicts
with common method names.

Example:
```haxe
autorun(() -> {
    if (condition.met) {
        doSomething();
        cease(); // This autorun won't run again
    }
});
```

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-web/tracker/Autorun/">tracker.Autorun</a></div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="until"><code><span class="field-name">until</span><span class="parenthesis">(</span><span class="arg-name">exprs</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/tracker/Autorun/" class="type-link">tracker.Autorun</a></code><a class="header-anchor" href="#until"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates an autorun that waits for a condition to become true, then executes a callback once.

This macro provides a reactive way to wait for conditions without polling.
The condition is checked whenever any observed properties within it change.
Once true, the callback executes and the autorun is automatically destroyed.

Syntax variations:
```haxe
// Auto-attach to 'this' if available (common in Entity subclasses)
until(player.isReady, () -> startGame());

// Explicitly attach to null (no owner)
until(null, player.isReady, () -> startGame());

// Attach to specific entity (cleaned up when entity is destroyed)
until(myEntity, player.isReady, () -> startGame());
```

The autorun is automatically cleaned up:
- When the condition becomes true (after callback execution)
- When the owner entity is destroyed (if attached)



| Name | Type | Description |
|------|------|-------------|
| `exprs` | [Dynamic](/api-docs/clay-web/Dynamic/) | Variable arguments: [owner], condition, callback  |

| Returns | Description |
|---------|-------------|
| [tracker.Autorun](/api-docs/clay-web/tracker/Autorun/) | The created Autorun instance (can be manually destroyed if needed) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="assert"><code><span class="field-name">assert</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Debug-time assertion that validates expressions evaluate to true.

Assertions help catch logic errors during development. They are:
- Active in debug builds (or when -D ceramic_assert is set)
- Completely removed from release builds (zero runtime cost)
- Logged as errors with optional custom messages

Examples:
```haxe
assert(player != null);
assert(health > 0, "Player health must be positive");
assert(items.length < maxItems, 'Too many items: ${items.length}');
```

Failed assertions:
- Log an error with the expression and optional reason
- Throw an exception to halt execution
- Can print stack traces with -D ceramic_assert_print_stack



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `expr` | [Dynamic](/api-docs/clay-web/Dynamic/) | | The expression to validate (must evaluate to true)  |
| `reason` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional explanation shown when assertion fails |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

## Private Members

