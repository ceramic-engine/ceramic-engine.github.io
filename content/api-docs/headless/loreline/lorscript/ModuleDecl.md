---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: ModuleDecl
target: Headless
permalink: api-docs/headless/loreline/lorscript/ModuleDecl/
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
| `path` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |

### DImport

```haxe
DImport(path: Array<String>, ?everything: Bool)
```

**Parameters:**

| Name | Type |
|------|------|
| `path` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> |
| `?everything` | [Bool](/api-docs/headless/Bool/) |

### DClass

```haxe
DClass(c: loreline.lorscript.ClassDecl)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [loreline.lorscript.ClassDecl](/api-docs/headless/loreline/lorscript/ClassDecl/) |

### DTypedef

```haxe
DTypedef(c: loreline.lorscript.TypeDecl)
```

**Parameters:**

| Name | Type |
|------|------|
| `c` | [loreline.lorscript.TypeDecl](/api-docs/headless/loreline/lorscript/TypeDecl/) |

