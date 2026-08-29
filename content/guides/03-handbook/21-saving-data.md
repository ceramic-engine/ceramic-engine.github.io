---
layout: guides
category: guides
menu: Handbook
title: Saving Data
permalink: guides/saving-data/
---
# Saving Data

Games need to remember things: settings, progress, high scores... **Ceramic** provides `PersistentData`, a simple key-value store that survives app restarts, with the same API on every platform.

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="{{ samples.baseUrl }}/save-data/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">The <a href="/examples/save-data/">save data</a> example: paint pixels, reload the page, the drawing is still there.</div>

## Reading and writing

A `PersistentData` instance is identified by an `id`. Creating it loads any previously saved content with that id:

<div class="codename">Basic usage</div>

```haxe
// Load (or create) the persistent data identified by 'my-save'
var saveData = new PersistentData('my-save');

// Read values (with a fallback when the key doesn't exist yet)
var highScore:Int = saveData.exists('highScore') ? saveData.get('highScore') : 0;

// Write values
saveData.set('highScore', 9000);
saveData.set('playerName', 'Ellie');
saveData.set('inventory', ['sword', 'shield', 'potion']);

// Persist to storage. Don't forget this part!
saveData.save();
```

Values can be anything that survives serialization: numbers, strings, booleans, arrays, anonymous structures... They are stored with Haxe serialization internally.

<p class="extra-info"><code>set()</code> only changes the data in memory: nothing is written until you call <code>save()</code>. Group several changes, then save once.</p>

## Where does it go?

The storage location depends on the platform, but you never have to think about it:

| Platform | Storage |
|---|---|
| Desktop (Windows, Mac, Linux) | A file in the app's storage directory |
| iOS / Android | A file in the app's documents directory |
| Web | The browser's local storage |

## Housekeeping

<div class="codename">Other operations</div>

```haxe
// Check, list, remove
if (saveData.exists('inventory')) { /* ... */ }
for (key in saveData.keys()) { /* ... */ }
saveData.remove('playerName');

// Start fresh
saveData.clear();
saveData.save();
```

You can also use multiple `PersistentData` instances with different ids, for example one per save slot:

<div class="codename">Save slots</div>

```haxe
var slot1 = new PersistentData('save-slot-1');
var slot2 = new PersistentData('save-slot-2');
```

## Related examples

* [Save data](/examples/save-data/): a persistent drawing and launch counter
