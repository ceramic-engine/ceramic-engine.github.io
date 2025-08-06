---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: CType
target: Clay (Native)
permalink: api-docs/clay-native/haxe/rtti/CType/
---

# CType

<div class="type-hierarchy"><strong>haxe.rtti.CType</strong> (Enum)</div>

The runtime member types.

## Constructors

### CUnknown

```haxe
CUnknown
```

### CEnum

```haxe
CEnum(name: haxe.rtti.Path, params: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [haxe.rtti.Path](/api-docs/clay-native/haxe/rtti/Path/) |
| `params` | [Array](/api-docs/clay-native/Array/)<Anonymous> |

### CClass

```haxe
CClass(name: haxe.rtti.Path, params: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [haxe.rtti.Path](/api-docs/clay-native/haxe/rtti/Path/) |
| `params` | [Array](/api-docs/clay-native/Array/)<Anonymous> |

### CTypedef

```haxe
CTypedef(name: haxe.rtti.Path, params: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [haxe.rtti.Path](/api-docs/clay-native/haxe/rtti/Path/) |
| `params` | [Array](/api-docs/clay-native/Array/)<Anonymous> |

### CFunction

```haxe
CFunction(args: Array<haxe.rtti.FunctionArgument>, ret: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `args` | [Array](/api-docs/clay-native/Array/)<[haxe.rtti.FunctionArgument](/api-docs/clay-native/haxe/rtti/FunctionArgument/)> |
| `ret` | Anonymous |

### CAnonymous

```haxe
CAnonymous(fields: Array<haxe.rtti.ClassField>)
```

**Parameters:**

| Name | Type |
|------|------|
| `fields` | [Array](/api-docs/clay-native/Array/)<[haxe.rtti.ClassField](/api-docs/clay-native/haxe/rtti/ClassField/)> |

### CDynamic

```haxe
CDynamic(?t: Anonymous)
```

**Parameters:**

| Name | Type |
|------|------|
| `?t` | Anonymous |

### CAbstract

```haxe
CAbstract(name: haxe.rtti.Path, params: Array<Anonymous>)
```

**Parameters:**

| Name | Type |
|------|------|
| `name` | [haxe.rtti.Path](/api-docs/clay-native/haxe/rtti/Path/) |
| `params` | [Array](/api-docs/clay-native/Array/)<Anonymous> |

