---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hscript
title: ModuleDecl
target: Unity
permalink: api-docs/unity/hscript/ModuleDecl/
---

# ModuleDecl

<div class="view-source"><a href="https://github.com/ceramic-engine/hscript/blob/master/hscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>hscript.ModuleDecl</strong> (Enum)</div>

## Constructors

### DPackage

```haxe
DPackage(path: Array<String>)
```

**Parameters:**

| Name | Type |
|------|------|
| `path` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |

### DImport

```haxe
DImport(path: Array<String>, ?everything: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `path` | [Array](/api-docs/unity/Array/)<[String](/api-docs/unity/String/)> |
| `?everything` | [Bool](/api-docs/unity/Bool/) |

### DClass

```haxe
DClass(c: hscript.ClassDecl)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [hscript.ClassDecl](/api-docs/unity/hscript/ClassDecl/) |

### DTypedef

```haxe
DTypedef(c: hscript.TypeDecl)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [hscript.TypeDecl](/api-docs/unity/hscript/TypeDecl/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

