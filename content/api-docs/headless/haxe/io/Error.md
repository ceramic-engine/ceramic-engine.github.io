---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Error
target: Headless
permalink: api-docs/headless/haxe/io/Error/
---

# Error

<div class="type-hierarchy"><strong>haxe.io.Error</strong> (Enum)</div>

The possible IO errors that can occur

## Constructors

### Blocked

```haxe
Blocked
```

The IO is set into nonblocking mode and some data cannot be read or written

### Overflow

```haxe
Overflow
```

An integer value is outside its allowed range

### OutsideBounds

```haxe
OutsideBounds
```

An operation on Bytes is outside of its valid range

### Custom

```haxe
Custom(e: Dynamic)
```

**Parameters:**

| Name | Type |
|------|------|
| `e` | [Dynamic](/api-docs/headless/Dynamic/) |

Other errors

