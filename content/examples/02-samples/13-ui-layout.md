---
layout: examples
category: examples
menu: Samples
title: UI Layout
permalink: examples/ui-layout/
sample: ui-layout
description: "A responsive interface made with the ui plugin: rows, columns, fixed, percent and fill sizing that reflows on resize."
---

A responsive interface made with the `ui` plugin: a header, a sidebar, flexible content areas and a footer, using `ColumnLayout`, `RowLayout` and `ViewSize` rules. Resize the window to see everything reflow.

```haxe
var root = new ColumnLayout();
root.size(width, height);
root.padding(12);
root.itemSpacing = 12;
add(root);

// Full width, fixed height
header.viewSize(ViewSize.fill(), 60);
root.add(header);

var row = new RowLayout();
row.viewSize(ViewSize.fill(), ViewSize.fill());
root.add(row);

// 25% of the row's width
sidebar.viewSize(ViewSize.percent(25), ViewSize.fill());
row.add(sidebar);

// Takes what's left
main.viewSize(ViewSize.fill(), ViewSize.fill());
row.add(main);
```
