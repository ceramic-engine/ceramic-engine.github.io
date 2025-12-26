---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Zoomer
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Zoomer/
---

# Zoomer

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Zoomer.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <a href="/api-docs/clay-native/ceramic/Visual/">Visual</a> → <strong>ceramic.Zoomer</strong> (Class)</div>

A container that enables zooming and panning of its content.

**Warning: this is just a draft, don't use it!**

Zoomer provides touch-friendly zoom and pan controls for its content visual.
It supports:
- Pinch-to-zoom gestures
- Double-tap to zoom
- Drag to pan
- Configurable zoom limits

Note: This class is experimental and may have incomplete functionality.

<div class="see"><strong>See:</strong> <a href="/api-docs/clay-native/ceramic/Pinch/">Pinch</a>, <a href="/api-docs/clay-native/ceramic/Transform/">Transform</a></div>


## Instance Members

<div class="signature field-var has-description" id="content"><code><span class="field-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a></code><a class="header-anchor" href="#content"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The visual content that can be zoomed and panned.

<hr class="field-separator" />

<div class="signature field-var has-description" id="zoomTransform"><code><span class="field-name">zoomTransform</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Transform/" class="type-link">Transform</a></code><a class="header-anchor" href="#zoomTransform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The transform applied to the content for zoom and pan operations.

<hr class="field-separator" />

<div class="signature field-var has-description" id="minScale"><code><span class="field-name">minScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#minScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum allowed scale factor (default: 1.0).

<hr class="field-separator" />

<div class="signature field-var has-description" id="maxScale"><code><span class="field-name">maxScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#maxScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum allowed scale factor (default: 4.0).

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Visual/" class="type-link">Visual</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `content` | [Visual](/api-docs/clay-native/ceramic/Visual/) | *(optional)* |

## Private Members

<div class="signature field-var no-description" id="pinch"><code><span class="field-name">pinch</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/Pinch/" class="type-link">Pinch</a></code><a class="header-anchor" href="#pinch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="doubleClick"><code><span class="field-name">doubleClick</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/DoubleClick/" class="type-link">DoubleClick</a></code><a class="header-anchor" href="#doubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pinchStartTranslateX"><code><span class="field-name">pinchStartTranslateX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pinchStartTranslateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pinchStartTranslateY"><code><span class="field-name">pinchStartTranslateY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pinchStartTranslateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pinchStartScale"><code><span class="field-name">pinchStartScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pinchStartScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="pinching"><code><span class="field-name">pinching</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#pinching"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="dragging"><code><span class="field-name">dragging</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dragging"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="couldDrag"><code><span class="field-name">couldDrag</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#couldDrag"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentTranslateX"><code><span class="field-name">currentTranslateX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTranslateX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentTranslateY"><code><span class="field-name">currentTranslateY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentTranslateY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="currentScale"><code><span class="field-name">currentScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#currentScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerDown"><code><span class="field-name">handlePointerDown</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerDown"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerMove"><code><span class="field-name">handlePointerMove</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerMove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePointerUp"><code><span class="field-name">handlePointerUp</span><span class="parenthesis">(</span><span class="arg-name">info</span><span class="operator">:</span> <a href="/api-docs/clay-native/ceramic/TouchInfo/" class="type-link">TouchInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePointerUp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `info` | [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleBeginPinch"><code><span class="field-name">handleBeginPinch</span><span class="parenthesis">(</span><span class="arg-name">originX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">originY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleBeginPinch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `originX` | [Float](/api-docs/clay-native/Float/) |
| `originY` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handlePinch"><code><span class="field-name">handlePinch</span><span class="parenthesis">(</span><span class="arg-name">originX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">originY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">scale</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">translateX</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">translateY</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">rotation</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handlePinch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `originX` | [Float](/api-docs/clay-native/Float/) |
| `originY` | [Float](/api-docs/clay-native/Float/) |
| `scale` | [Float](/api-docs/clay-native/Float/) |
| `translateX` | [Float](/api-docs/clay-native/Float/) |
| `translateY` | [Float](/api-docs/clay-native/Float/) |
| `rotation` | [Float](/api-docs/clay-native/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleEndPinch"><code><span class="field-name">handleEndPinch</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleEndPinch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="handleDoubleClick"><code><span class="field-name">handleDoubleClick</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handleDoubleClick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |

