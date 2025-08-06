---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StackItem
target: Clay (Web)
permalink: api-docs/clay-web/haxe/StackItem/
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
| `m` | [String](/api-docs/clay-web/String/) |

### FilePos

```haxe
FilePos(s: Null<Anonymous>, file: String, line: Int, ?column: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `s` | [Null](/api-docs/clay-web/Null/)<Anonymous> |
| `file` | [String](/api-docs/clay-web/String/) |
| `line` | [Int](/api-docs/clay-web/Int/) |
| `?column` | [Int](/api-docs/clay-web/Int/) |

### Method

```haxe
Method(classname: Null<String>, method: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `classname` | [Null](/api-docs/clay-web/Null/)<[String](/api-docs/clay-web/String/)> |
| `method` | [String](/api-docs/clay-web/String/) |

### LocalFunction

```haxe
LocalFunction(?v: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `?v` | [Int](/api-docs/clay-web/Int/) |

