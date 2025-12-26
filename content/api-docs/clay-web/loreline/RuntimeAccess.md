---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeAccess
target: Clay (Web)
permalink: api-docs/clay-web/loreline/RuntimeAccess/
---

# RuntimeAccess

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Interpreter.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.RuntimeAccess</strong> (Enum)</div>

Represents different ways to access runtime values in a Loreline script.
This is used internally by the interpreter to resolve variable accesses,
array accesses, character references, and function calls.

## Constructors

### FieldAccess

```haxe
FieldAccess(pos: loreline.Position, obj: Any, name: String)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/clay-web/loreline/Position/) | Position in the source code where this access occurs  |
| `obj` | [Any](/api-docs/clay-web/Any/) | The object being accessed  |
| `name` | [String](/api-docs/clay-web/String/) | The name of the field to access |

Represents access to a field of an object.


### ArrayAccess

```haxe
ArrayAccess(pos: loreline.Position, array: Any, index: Int)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/clay-web/loreline/Position/) | Position in the source code where this access occurs  |
| `array` | [Any](/api-docs/clay-web/Any/) | The array being accessed  |
| `index` | [Int](/api-docs/clay-web/Int/) | The index into the array |

Represents access to an array element by index.


### CharacterAccess

```haxe
CharacterAccess(pos: loreline.Position, name: String)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/clay-web/loreline/Position/) | Position in the source code where this access occurs  |
| `name` | [String](/api-docs/clay-web/String/) | The name of the character to access |

Represents access to a character by name.


### FunctionAccess

```haxe
FunctionAccess(pos: loreline.Position, name: String)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/clay-web/loreline/Position/) | Position in the source code where this access occurs  |
| `name` | [String](/api-docs/clay-web/String/) | The name of the function to access |

Represents access to a built-in or user-defined function.


