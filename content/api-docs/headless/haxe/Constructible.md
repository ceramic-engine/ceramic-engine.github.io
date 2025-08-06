---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Constructible
target: Headless
permalink: api-docs/headless/haxe/Constructible/
---

# Constructible

<div class="type-hierarchy"><strong>haxe.Constructible</strong> (Abstract)</div>

This type unifies with any instance of classes that have a constructor
which

is `public` and
unifies with the type used for type parameter `T`.

If a type parameter `A` is assigned to a type parameter `B` which is constrained
to `Constructible<T>`, A must be explicitly constrained to
`Constructible<T>` as well.

It is intended to be used as a type parameter constraint. If used as a real
type, the underlying type will be `Dynamic`.

