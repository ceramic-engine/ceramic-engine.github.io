---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: KeyAcceleratorItem
target: Unity
permalink: api-docs/unity/ceramic/KeyAcceleratorItem/
---

# KeyAcceleratorItem

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/KeyAcceleratorItem.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.KeyAcceleratorItem</strong> (Enum)</div>

Represents a component of a keyboard shortcut combination.

KeyAcceleratorItem is used to build keyboard shortcuts by combining
modifier keys (Shift, Cmd/Ctrl) with regular keys. This allows for
cross-platform keyboard shortcuts that adapt to the operating system
(Cmd on macOS, Ctrl on Windows/Linux).

Example combinations:
- Ctrl+S: [CMD_OR_CTRL, KEY(KeyCode.KEY_S)]
- Shift+Tab: [SHIFT, KEY(KeyCode.TAB)]
- Ctrl+Shift+Z: [CMD_OR_CTRL, SHIFT, KEY(KeyCode.KEY_Z)]

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/ceramic/KeyBinding/">KeyBinding</a>, <a href="/api-docs/unity/ceramic/KeyBindings/">KeyBindings</a></div>


## Constructors

### SHIFT

```haxe
SHIFT
```

Represents the Shift modifier key.
Used for uppercase letters and secondary key functions.

### CMD_OR_CTRL

```haxe
CMD_OR_CTRL
```

Represents Command key on macOS or Control key on other platforms.
Automatically adapts to the current operating system for consistent shortcuts.

### SCAN

```haxe
SCAN(scanCode: ceramic.ScanCode)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `scanCode` | [ceramic.ScanCode](/api-docs/unity/ceramic/ScanCode/) | The scan code of the key |

Represents a regular key identified by its scan code.
Scan codes are layout-independent (physical key position).

### KEY

```haxe
KEY(keyCode: ceramic.KeyCode)
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `keyCode` | [ceramic.KeyCode](/api-docs/unity/ceramic/KeyCode/) | The key code of the key |

Represents a regular key identified by its key code.
Key codes are layout-dependent (varies with keyboard layout).

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

