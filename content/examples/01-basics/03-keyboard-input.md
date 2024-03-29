---
layout: examples
category: examples
menu: Basics
title: Keyboard input
permalink: examples/keyboard-input/
sample: keyboard-input
description: Using keyDown and keyUp events from input to listen to keyboard input.
---

Using `keyDown` and `keyUp` events from `input` to listen to keyboard input.

<p class="extra-info"><strong>Key codes</strong> are used to know which key is pressed on the keyboard and depend on the user keyboard layout (QWERTY, AZERTY...).</p>

<p class="extra-info"><strong>Scan codes</strong> represent physical keys on the keyboard. They are useful because they always follow a standard QWERTY layout and are independent from the user's keyboard layout. For example, if you want your W,A,S,D controls to work with any keyboard, you should use scan codes!</p>

```haxe
import ceramic.Key;
import ceramic.KeyCode;
import ceramic.ScanCode;
import ceramic.Scene;
import ceramic.Text;

class MainScene extends Scene {

    /**
     * A text object to display info about keyboard input
     */
    var text:Text;

    /**
     * The list of currently pressed key codes
     */
    var pressedKeyCodes:Array<KeyCode> = [];

    /**
     * The list of currently pressed scan codes
     */
    var pressedScanCodes:Array<ScanCode> = [];

    override function create() {

        // Use a text object to display info about keyboard input
        text = new Text();
        text.anchor(0.5, 0.5);
        text.pos(width * 0.5, height * 0.5);
        text.align = CENTER;
        add(text);

        // Bind keyboard input events
        input.onKeyDown(this, keyDown);
        input.onKeyUp(this, keyUp);

        updateText();

    }

    function keyDown(key:Key) {

        if (!pressedKeyCodes.contains(key.keyCode)) {
            pressedKeyCodes.push(key.keyCode);
            pressedScanCodes.push(key.scanCode);
        }

        updateText();

    }

    function keyUp(key:Key) {

        pressedKeyCodes.remove(key.keyCode);
        pressedScanCodes.remove(key.scanCode);

        updateText();

    }

    function updateText() {

        // Update text depending on the currently pressed keys

        if (pressedKeyCodes.length > 0) {
            var content = [];
            for (i in 0...pressedKeyCodes.length) {
                var keyCode = pressedKeyCodes[i];
                var scanCode = pressedScanCodes[i];
                content.push(
                    KeyCode.name(keyCode) +
                    ' (key code)          ' +
                    ScanCode.name(scanCode) +
                    ' (scan code)'
                );
            }
            text.content = content.join('\n');
        }
        else {
            text.content = 'press any key (keyboard)';
        }

    }

}
```