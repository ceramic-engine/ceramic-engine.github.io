---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: RuntimeAccess
target: Unity
permalink: api-docs/unity/loreline/RuntimeAccess/
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
| `pos` | [loreline.Position](/api-docs/unity/loreline/Position/) | Position in the source code where this access occurs  |
| `obj` | [Any](/api-docs/unity/Any/) | The object being accessed  |
| `name` | [String](/api-docs/unity/String/) | The name of the field to access |

Represents access to a field of an object.


### ArrayAccess

```haxe
ArrayAccess(pos: loreline.Position, array: Any, index: Int)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/unity/loreline/Position/) | Position in the source code where this access occurs  |
| `array` | [Any](/api-docs/unity/Any/) | The array being accessed  |
| `index` | [Int](/api-docs/unity/Int/) | The index into the array |

Represents access to an array element by index.


### CharacterAccess

```haxe
CharacterAccess(pos: loreline.Position, name: String)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/unity/loreline/Position/) | Position in the source code where this access occurs  |
| `name` | [String](/api-docs/unity/String/) | The name of the character to access |

Represents access to a character by name.


### FunctionAccess

```haxe
FunctionAccess(pos: loreline.Position, name: String)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pos` | [loreline.Position](/api-docs/unity/loreline/Position/) | Position in the source code where this access occurs  |
| `name` | [String](/api-docs/unity/String/) | The name of the function to access |

Represents access to a built-in or user-defined function.


## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

