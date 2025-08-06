---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spec
title: Input
target: Clay (Native)
permalink: api-docs/clay-native/spec/Input/
---

# Input

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/spec/Input.hx">View source</a></div>

<div class="type-hierarchy"><strong>spec.Input</strong> (Interface) → <a href="/api-docs/clay-native/backend/Input/">backend.Input</a></div>

Backend interface for input handling.

This interface is currently empty as input events are handled through
the backend's event system and Screen interface. Input events (mouse,
touch, keyboard, gamepad) are dispatched directly to the App instance.

The interface exists for potential future extensions and to maintain
consistency with the backend architecture where each subsystem has
its own interface.

<div class="see"><strong>See:</strong> ceramic.Input for the main input handling system, spec.Screen for input event dispatching</div>


