---
layout: guides
category: guides
menu: Handbook
title: Input
permalink: guides/input/
---
# Input

Ceramic provides a comprehensive input system to handle keyboard, mouse, touch, and gamepad interactions in your applications. The input system is unified and easy to use, with consistent patterns across different input types.

<iframe class="ceramic-sample-iframe" onload="setTimeout(focusSampleIframe, 100);" src="https://ceramic-engine.com/ceramic-samples/keyboard-input/" width="640" height="480" loading="lazy" frameborder="0" style="height: 457.5px;"></iframe>
<div class="caption">An example of keyboard input handling</div>

A summary:

* The `Input` class manages all keyboard and gamepad input through a singleton accessible via `input`.

* Pointer input (mouse and touch) is handled through events on `Visual` objects and the `Screen`.

* Input states are tracked automatically: just pressed, pressed (held), and just released.

* Multi-touch and multiple gamepad support is built-in.

* Input events integrate seamlessly with the entity/visual event system.

## Keyboard input

Keyboard input in Ceramic is handled through the `Input` class. You can check key states or listen to key events.

### Checking key states

The input system tracks three states for each key:

<div class="codename">Checking keyboard states</div>

```haxe
// Check if a key is currently held down
if (input.keyPressed(SPACE)) {
    player.jump();
}

// Check if a key was just pressed this frame
if (input.keyJustPressed(ENTER)) {
    startGame();
}

// Check if a key was just released this frame
if (input.keyJustReleased(ESCAPE)) {
    closeMenu();
}
```

### Listening to keyboard events

You can also listen to keyboard events for more reactive input handling:

<div class="codename">Keyboard event handling</div>

```haxe
import ceramic.Key;
import ceramic.KeyCode;
import ceramic.Scene;

class KeyboardScene extends Scene {

    override function create() {

        // Listen for key press events
        input.onKeyDown(this, keyDown);
        input.onKeyUp(this, keyUp);

    }

    function keyDown(key:Key) {
        trace('Key pressed: ' + KeyCode.name(key.keyCode));

        // React to specific keys
        switch (key.keyCode) {
            case LEFT:
                moveLeft();
            case RIGHT:
                moveRight();
        }
    }

    function keyUp(key:Key) {
        trace('Key released: ' + KeyCode.name(key.keyCode));
    }

}
```

### Key codes vs Scan codes

Ceramic supports both key codes and scan codes:

- **Key codes** represent the logical key (affected by keyboard layout)
- **Scan codes** represent the physical key position (layout-independent)

```haxe
// Using scan codes for WASD movement (works on any keyboard layout)
if (input.scanPressed(KEY_W)) moveUp();
if (input.scanPressed(KEY_A)) moveLeft();
if (input.scanPressed(KEY_S)) moveDown();
if (input.scanPressed(KEY_D)) moveRight();
```

## Pointer input (mouse & touch)

Pointer input in Ceramic is unified for both mouse and touch, making it easy to support both input methods with the same code.

### Visual pointer events

Every `Visual` object can receive pointer events:

<div class="codename">Handling pointer events on visuals</div>

```haxe
import ceramic.TouchInfo;
import ceramic.Quad;
import ceramic.Scene;

class PointerScene extends Scene {

    override function create() {

        // Create an interactive quad
        var button = new Quad();
        button.size(100, 50);
        button.pos(50, 50);
        button.color = Color.BLUE;
        add(button);

        // React to pointer events
        button.onPointerDown(this, info -> {
            button.color = Color.RED;
            trace('Pointer down at: ${info.x}, ${info.y}');
        });

        button.onPointerUp(this, info -> {
            button.color = Color.BLUE;
            trace('Pointer up');
        });

        button.onPointerOver(this, info -> {
            button.alpha = 0.8;
        });

        button.onPointerOut(this, info -> {
            button.alpha = 1.0;
        });

    }

}
```

### Screen-level pointer tracking

For global pointer tracking, use the `screen` object:

<div class="codename">Tracking pointer position</div>

```haxe
// Get current pointer position
var x = screen.pointerX;
var y = screen.pointerY;

// Listen to pointer movement anywhere on screen
screen.onPointerMove(this, info -> {
    trace('Pointer moved to: ${info.x}, ${info.y}');
});
```

### Dragging example

Here's how to implement dragging behavior:

<div class="codename">Implementing drag behavior</div>

```haxe
import ceramic.TouchInfo;
import ceramic.Quad;
import ceramic.Scene;

class DragScene extends Scene {

    var draggedQuad:Quad;
    var dragOffsetX:Float;
    var dragOffsetY:Float;

    override function create() {

        var quad = new Quad();
        quad.size(64, 64);
        quad.pos(100, 100);
        quad.anchor(0.5, 0.5);
        add(quad);

        // Start dragging
        quad.onPointerDown(this, startDrag);

    }

    function startDrag(info:TouchInfo) {

        draggedQuad = cast info.visual;
        dragOffsetX = draggedQuad.x - info.x;
        dragOffsetY = draggedQuad.y - info.y;

        // Follow pointer movement
        screen.onPointerMove(this, updateDrag);

        // Stop dragging on release
        screen.oncePointerUp(this, stopDrag);

    }

    function updateDrag(info:TouchInfo) {
        draggedQuad.x = info.x + dragOffsetX;
        draggedQuad.y = info.y + dragOffsetY;
    }

    function stopDrag(info:TouchInfo) {
        screen.offPointerMove(updateDrag);
        draggedQuad = null;
    }

}
```

### Multi-touch support

Ceramic supports multi-touch input through dedicated events:

```haxe
// Listen to multi-touch events
screen.onMultiTouchPointerDown(this, info -> {
    trace('Touch ${info.index} started at: ${info.x}, ${info.y}');
});

screen.onMultiTouchPointerMove(this, info -> {
    trace('Touch ${info.index} moved to: ${info.x}, ${info.y}');
});

screen.onMultiTouchPointerUp(this, info -> {
    trace('Touch ${info.index} ended');
});
```

#### Visual multiTouch property

By default, a visual can only handle one pointer interaction at a time. You can enable multi-touch on individual visuals:

```haxe
// Enable multi-touch on a visual
var interactive = new Visual();
interactive.multiTouch = true;
interactive.size(200, 200);
add(interactive);

// Now this visual can receive multiple simultaneous pointer events
interactive.onPointerDown(this, info -> {
    trace('Pointer ${info.index} down at: ${info.x}, ${info.y}');
});
```

When `multiTouch` is `false` (default):
- The visual triggers `pointerDown` when the first finger touches it
- It triggers `pointerUp` only when the last finger is released
- This ensures clean single-pointer interaction behavior

When `multiTouch` is `true`:
- The visual receives separate events for each finger/pointer
- Multiple `pointerDown`/`pointerUp` events can overlap
- Useful for gestures like pinch-to-zoom or multi-finger controls

## Gamepad input

Ceramic supports multiple gamepads with button and analog input.

### Checking gamepad buttons

Similar to keyboard input, gamepads have three button states:

<div class="codename">Gamepad button handling</div>

```haxe
// Check if a button is pressed on gamepad 0
if (input.gamepadPressed(0, A)) {
    player.jump();
}

// Check if a button was just pressed
if (input.gamepadJustPressed(0, START)) {
    pauseGame();
}

// Listen to gamepad button events
input.onGamepadDown(this, (gamepadId, button) -> {
    trace('Gamepad $gamepadId pressed $button');
});
```

### Reading analog sticks and triggers

Gamepads have analog inputs for sticks and triggers:

<div class="codename">Reading gamepad analog values</div>

```haxe
// Read left stick (returns -1 to 1)
var leftX = input.gamepadAxisValue(0, LEFT_X);
var leftY = input.gamepadAxisValue(0, LEFT_Y);

// Read right stick
var rightX = input.gamepadAxisValue(0, RIGHT_X);
var rightY = input.gamepadAxisValue(0, RIGHT_Y);

// Read triggers (returns 0 to 1)
var leftTrigger = input.gamepadAxisValue(0, LEFT_TRIGGER);
var rightTrigger = input.gamepadAxisValue(0, RIGHT_TRIGGER);

// Apply dead zone
if (Math.abs(leftX) > 0.2) {
    player.moveX(leftX);
}
```

### Managing multiple gamepads

Ceramic automatically detects connected gamepads:

<div class="codename">Working with multiple gamepads</div>

```haxe
// Get list of active gamepad IDs
var gamepads = input.activeGamepads;

// Listen for gamepad connections
input.onGamepadEnable(this, (gamepadId, name) -> {
    trace('Gamepad $gamepadId connected: $name');
});

input.onGamepadDisable(this, gamepadId -> {
    trace('Gamepad $gamepadId disconnected');
});

// Handle input from all gamepads
for (gamepadId in gamepads) {
    if (input.gamepadPressed(gamepadId, A)) {
        playerJump(gamepadId);
    }
}
```

### Gamepad rumble

You can trigger controller vibration:

```haxe
// Start rumble (duration in seconds, low and high frequency 0-1)
input.startGamepadRumble(0, 0.5, 0.3, 0.7);

// Stop rumble
input.stopGamepadRumble(0);
```

## Input in update loops

When handling input in your update loop, use the **just pressed** and **just released** states to avoid repeated actions:

<div class="codename">Input in update loops</div>

```haxe
class GameScene extends Scene {

    var player:Player;

    override function update(delta:Float) {

        // Continuous movement while held
        if (input.keyPressed(LEFT)) {
            player.x -= 200 * delta;
        }
        if (input.keyPressed(RIGHT)) {
            player.x += 200 * delta;
        }

        // Single action on press
        if (input.keyJustPressed(SPACE)) {
            player.jump();
        }

        // Gamepad analog movement
        var moveX = input.gamepadAxisValue(0, LEFT_X);
        if (Math.abs(moveX) > 0.2) {
            player.x += moveX * 200 * delta;
        }

    }

}
```

## InputMap: Unified input handling

The `InputMap` utility allows you to create custom input actions that work across keyboard, gamepad, and other input methods. This is especially useful for games where you want to support multiple control schemes.

<div class="codename">Creating an InputMap for player controls</div>

```haxe
import ceramic.InputMap;

// Define your input actions as an enum
enum abstract PlayerInput(Int) {
    var LEFT;
    var RIGHT;
    var JUMP;
    var SHOOT;
}

class Player extends Visual {

    var inputMap = new InputMap<PlayerInput>();

    override function create() {

        // Bind keyboard keys
        inputMap.bindKeyCode(LEFT, LEFT);
        inputMap.bindKeyCode(RIGHT, RIGHT);
        inputMap.bindKeyCode(JUMP, SPACE);
        inputMap.bindKeyCode(SHOOT, X);

        // Also bind WASD for movement
        inputMap.bindScanCode(LEFT, KEY_A);
        inputMap.bindScanCode(RIGHT, KEY_D);
        inputMap.bindScanCode(JUMP, KEY_W);
        inputMap.bindScanCode(SHOOT, KEY_J);

        // Bind gamepad buttons
        inputMap.bindGamepadButton(JUMP, A);
        inputMap.bindGamepadButton(SHOOT, X);
        inputMap.bindGamepadButton(LEFT, DPAD_LEFT);
        inputMap.bindGamepadButton(RIGHT, DPAD_RIGHT);

        // Bind analog stick to digital actions
        inputMap.bindGamepadAxisToButton(LEFT, LEFT_X, -0.25);
        inputMap.bindGamepadAxisToButton(RIGHT, LEFT_X, 0.25);

        // Listen for input events
        inputMap.onKeyDown(this, key -> {
            trace('Action pressed: $key');
        });

    }

    override function update(delta:Float) {

        // Check input states
        if (inputMap.pressed(LEFT)) {
            x -= 200 * delta;
        }
        if (inputMap.pressed(RIGHT)) {
            x += 200 * delta;
        }
        if (inputMap.justPressed(JUMP)) {
            jump();
        }

    }

}
```

### InputMap features

The `InputMap` provides several useful features:

- **Unified API**: Use the same methods (`pressed()`, `justPressed()`, `justReleased()`) regardless of input source
- **Multiple bindings**: Bind multiple keys/buttons to the same action
- **Analog-to-digital**: Convert analog stick movements to button presses with thresholds
- **Enable/disable**: Temporarily disable input handling with `inputMap.enabled = false`


## Wrapping up

Ceramic's input system gives you flexibility to handle input in the way that best fits your project:

- **For UI and menus**: Use pointer events on visuals (`onPointerDown`, `onPointerUp`) to create buttons and interactive elements that work with both mouse and touch.

- **For real-time gameplay**: Check input states in your update loop with methods like `input.keyPressed()` and `input.gamepadAxisValue()` for smooth, responsive controls.

- **For complex control schemes**: Create an `InputMap` to unify keyboard, gamepad, and other inputs into logical game actions, making it easy to support multiple control methods.

- **For gesture-based interactions**: Enable `multiTouch` on visuals when you need to track multiple fingers, like for pinch-to-zoom or multi-touch controls.

<p class="extra-info">The input system integrates with Ceramic's event system, so all the patterns you learned about <a href="/guides/events/">events</a> apply here. Remember to provide an owner when binding events to ensure proper cleanup!</p>

Check out the [keyboard input](/examples/keyboard-input/) and [gamepad input](/examples/gamepad-input/) examples for more hands-on demonstrations!