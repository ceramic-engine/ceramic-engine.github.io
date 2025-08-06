---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StackItem
target: Unity
permalink: api-docs/unity/haxe/StackItem/
---

# StackItem

<div class="type-hierarchy"><strong>haxe.StackItem</strong> (Enum)</div>

Elements return by `CallStack` methods.

## Constructors

### CFunction

```haxe
CFunction
```

### Module

```haxe
Module(m: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `m` | [String](/api-docs/unity/String/) |

### FilePos

```haxe
FilePos(s: Null<Anonymous>, file: String, line: Int, ?column: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `s` | [Null](/api-docs/unity/Null/)<Anonymous> |
| `file` | [String](/api-docs/unity/String/) |
| `line` | [Int](/api-docs/unity/Int/) |
| `?column` | [Int](/api-docs/unity/Int/) |

### Method

```haxe
Method(classname: Null<String>, method: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `classname` | [Null](/api-docs/unity/Null/)<[String](/api-docs/unity/String/)> |
| `method` | [String](/api-docs/unity/String/) |

### LocalFunction

```haxe
LocalFunction(?v: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `?v` | [Int](/api-docs/unity/Int/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

