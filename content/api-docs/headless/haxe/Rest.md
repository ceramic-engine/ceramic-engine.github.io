---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Rest
target: Headless
permalink: api-docs/headless/haxe/Rest/
---

# Rest

<div class="type-hierarchy"><strong>haxe.Rest</strong> (Abstract)</div>

A special type that represents a "rest" function argument.

The special `...` syntax can be used for convenience and improved readability:

```haxe
function f(...rest:Int) {
$type(rest); // haxe.Rest<Int>
}

f(1, 2, 3);

final array = [1, 2, 3];
f(...array);
```

Should be used as a type for the last argument of a method, indicating that
an arbitrary number of arguments of the given type can be passed to that method.

Allows to use array access by index to get values of rest arguments.
If the index exceeds the amount of rest arguments passed, the result is unspecified.

## Type Conversions

**From:**
- `[Array](/api-docs/headless/Array/)<of.T>`

**To:**
- `[Array](/api-docs/headless/Array/)<haxe.Rest.T>`

