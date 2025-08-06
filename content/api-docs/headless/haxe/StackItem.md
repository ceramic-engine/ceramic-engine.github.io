---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StackItem
target: Headless
permalink: api-docs/headless/haxe/StackItem/
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
| `m` | [String](/api-docs/headless/String/) |

### FilePos

```haxe
FilePos(s: Null<Anonymous>, file: String, line: Int, ?column: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `s` | [Null](/api-docs/headless/Null/)<Anonymous> |
| `file` | [String](/api-docs/headless/String/) |
| `line` | [Int](/api-docs/headless/Int/) |
| `?column` | [Int](/api-docs/headless/Int/) |

### Method

```haxe
Method(classname: Null<String>, method: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `classname` | [Null](/api-docs/headless/Null/)<[String](/api-docs/headless/String/)> |
| `method` | [String](/api-docs/headless/String/) |

### LocalFunction

```haxe
LocalFunction(?v: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `?v` | [Int](/api-docs/headless/Int/) |

