---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: StackItem
target: Clay (Native)
permalink: api-docs/clay-native/haxe/StackItem/
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
| `m` | [String](/api-docs/clay-native/String/) |

### FilePos

```haxe
FilePos(s: Null<Anonymous>, file: String, line: Int, ?column: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `s` | [Null](/api-docs/clay-native/Null/)<Anonymous> |
| `file` | [String](/api-docs/clay-native/String/) |
| `line` | [Int](/api-docs/clay-native/Int/) |
| `?column` | [Int](/api-docs/clay-native/Int/) |

### Method

```haxe
Method(classname: Null<String>, method: String)
```

**Parameters:**

| Name | Type |
|------|------|
| `classname` | [Null](/api-docs/clay-native/Null/)<[String](/api-docs/clay-native/String/)> |
| `method` | [String](/api-docs/clay-native/String/) |

### LocalFunction

```haxe
LocalFunction(?v: Int)
```

**Parameters:**

| Name | Type |
|------|------|
| `?v` | [Int](/api-docs/clay-native/Int/) |

