---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Assert
target: Unity
permalink: api-docs/unity/ceramic/Assert/
---

# Assert

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Assert.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Assert</strong> (Class)</div>

Assertion utility for runtime validation in debug builds.

This class provides compile-time macros for asserting conditions during development.
All assertions are automatically removed from release builds for zero runtime overhead.

## Usage Example

```haxe
// Basic assertion
Assert.assert(value > 0);

// Assertion with custom message
Assert.assert(array.length > 0, "Array must not be empty");

// Complex condition
Assert.assert(x >= 0 && x <= 100, "Value out of range");
```

## Build Configuration

- Assertions are active in debug builds by default
- Use `-D ceramic_assert` to enable assertions in release builds
- Use `-D ceramic_assert_print_stack` to print stack traces on assertion failures

<div class="see"><strong>See:</strong> ceramic.Utils.printStackTrace</div>


## Static Members

<div class="signature field-method has-description" id="assert"><code><span class="field-name">assert</span><span class="parenthesis">(</span><span class="arg-name">expr</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Assert the expression evaluates to `true`.
This check is only done in `debug` builds and doesn't affect `release` builds.

When an assertion fails, it logs an error and throws an exception with the
stringified expression and optional reason.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `expr` | [Dynamic](/api-docs/unity/Dynamic/) | | The expression to evaluate. Must resolve to a boolean value.  |
| `reason` | [String](/api-docs/unity/String/) | *(optional)* | Optional custom error message to include when assertion fails. If not provided, defaults to "Assertion failure". * |

| Returns |
|---------|
| [Dynamic](/api-docs/unity/Dynamic/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

