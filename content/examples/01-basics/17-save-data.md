---
layout: examples
category: examples
menu: Basics
title: Save Data
permalink: examples/save-data/
sample: save-data
description: Persist data across app launches with PersistentData. Paint some pixels, reload the page, and your drawing is still there.
---

Persist data across app launches with `PersistentData`. Paint some pixels, reload the page: the drawing (and the launch counter) is still there.

```haxe
// Load (or create) the persistent data identified by this key
var saveData = new PersistentData('my-save');

// Read, write, then save
var launches:Int = saveData.exists('launches') ? saveData.get('launches') : 0;
saveData.set('launches', launches + 1);
saveData.save();
```

On desktop, data is stored on disk. On web, it uses the browser's local storage.
