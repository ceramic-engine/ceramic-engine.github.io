---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: ModuleDecl
target: Clay (Native)
permalink: api-docs/clay-native/loreline/lorscript/ModuleDecl/
---

# ModuleDecl

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/lorscript/Expr.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.lorscript.ModuleDecl</strong> (Enum)</div>

## Constructors

### DPackage

```haxe
DPackage(path: Array<String>)
```

**Parameters:**

| Name | Type |
|------|------|
| `path` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |

### DImport

```haxe
DImport(path: Array<String>, ?everything: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `path` | [Array](/api-docs/clay-native/Array/)<[String](/api-docs/clay-native/String/)> |
| `?everything` | [Bool](/api-docs/clay-native/Bool/) |

### DClass

```haxe
DClass(c: loreline.lorscript.ClassDecl)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [loreline.lorscript.ClassDecl](/api-docs/clay-native/loreline/lorscript/ClassDecl/) |

### DTypedef

```haxe
DTypedef(c: loreline.lorscript.TypeDecl)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [loreline.lorscript.TypeDecl](/api-docs/clay-native/loreline/lorscript/TypeDecl/) |

