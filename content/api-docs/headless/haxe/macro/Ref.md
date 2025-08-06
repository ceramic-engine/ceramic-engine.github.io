---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Ref
target: Headless
permalink: api-docs/headless/haxe/macro/Ref/
---

# Ref

<div class="type-hierarchy"><strong>haxe.macro.Ref</strong> (Typedef)</div>

Represents a reference to internal compiler structure. It exists to avoid
expensive encoding if it is not required and to ensure that physical
equality remains intact.

A structure is only encoded when user requests it through `ref.get()`.

