---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Errors
target: Unity
permalink: api-docs/unity/ceramic/Errors/
---

# Errors

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Errors.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Errors</strong> (Class)</div>

Global error handling utilities for the Ceramic engine.

This class provides centralized error handling for uncaught exceptions,
ensuring proper error reporting, stack trace capture, and graceful
application shutdown when critical errors occur.

## Features

- **Stack Trace Capture**: Automatically captures and formats stack traces
- **Custom Error Handlers**: Apps can listen for critical errors
- **Cross-platform Output**: Adapts output method to platform capabilities
- **Graceful Shutdown**: Exits cleanly on system targets

## Error Flow

1. Uncaught exception occurs
2. Stack trace is captured and reversed
3. App's criticalError event is emitted
4. Stack trace and error are printed
5. Application exits (if no custom handler)

## Usage Example

```haxe
// Listen for critical errors in your app
app.onCriticalError(this, (error, stack) -> {
    // Log to crash reporting service
    crashReporter.logError(error, stack);
    // Show user-friendly error dialog
    showErrorDialog("An error occurred: " + error);
});
```

<div class="see"><strong>See:</strong> ceramic.App#onCriticalError For handling errors in your app, ceramic.Utils#stackItemToString For stack trace formatting</div>


## Private Members

<div class="signature field-method has-description" id="handleUncaughtError"><code><span class="field-name">handleUncaughtError</span><span class="parenthesis">(</span><span class="arg-name">e</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleUncaughtError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handles uncaught errors by capturing stack traces and notifying the app.

This method is called internally by the engine when an uncaught exception
occurs. It performs the following steps:

1. Checks if app has custom error handlers
2. Captures and reverses the exception stack trace
3. Emits criticalError event on the app
4. Prints formatted stack trace to console/output
5. Exits application if no custom handler exists



| Name | Type | Description |
|------|------|-------------|
| `e` | [Dynamic](/api-docs/unity/Dynamic/) | The uncaught error/exception object |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

