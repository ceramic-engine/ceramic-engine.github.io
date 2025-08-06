---
layout: api-docs
category: api-docs
subCategory: doc
menu: BinPacking
title: MaxRectsPacker
target: Headless
permalink: api-docs/headless/binpacking/MaxRectsPacker/
---

# MaxRectsPacker

<div class="view-source"><a href="https://github.com/ceramic-engine/bin-packing/blob/master/binpacking/MaxRectsPacker.hx">View source</a></div>

<div class="type-hierarchy"><strong>binpacking.MaxRectsPacker</strong> (Class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/headless/binpacking/IOccupancy/">IOccupancy</a></div>

## Instance Members

<div class="signature field-var no-description" id="binWidth"><code><span class="field-name">binWidth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#binWidth"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="binHeight"><code><span class="field-name">binHeight</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#binHeight"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="binAllowFlip"><code><span class="field-name">binAllowFlip</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#binAllowFlip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="usedRectangles"><code><span class="field-name">usedRectangles</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/binpacking/Rect/" class="type-link">Rect</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#usedRectangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="freeRectangles"><code><span class="field-name">freeRectangles</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/binpacking/Rect/" class="type-link">Rect</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#freeRectangles"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="insert"><code><span class="field-name">insert</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/FreeRectChoiceHeuristic/" class="type-link">FreeRectChoiceHeuristic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/Rect/" class="type-link">Rect</a></code><a class="header-anchor" href="#insert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `method` | [FreeRectChoiceHeuristic](/api-docs/headless/binpacking/FreeRectChoiceHeuristic/) |

| Returns |
|---------|
| [Rect](/api-docs/headless/binpacking/Rect/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="occupancy"><code><span class="field-name">occupancy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#occupancy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">0</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">allowFlip</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default |
|------|------|---------|
| `width` | [Int](/api-docs/headless/Int/) | `0` |
| `height` | [Int](/api-docs/headless/Int/) | `0` |
| `allowFlip` | [Bool](/api-docs/headless/Bool/) | `true` |

## Private Members

<div class="signature field-method no-description" id="scoreRect"><code><span class="field-name">scoreRect</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/FreeRectChoiceHeuristic/" class="type-link">FreeRectChoiceHeuristic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerRectScore/" class="type-link">MaxRectsPackerRectScore</a></code><a class="header-anchor" href="#scoreRect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `method` | [FreeRectChoiceHeuristic](/api-docs/headless/binpacking/FreeRectChoiceHeuristic/) |

| Returns |
|---------|
| [MaxRectsPackerRectScore](/api-docs/headless/binpacking/MaxRectsPackerRectScore/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="contactPointScoreNode"><code><span class="field-name">contactPointScoreNode</span><span class="parenthesis">(</span><span class="arg-name">x</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">y</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#contactPointScoreNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `x` | [Int](/api-docs/headless/Int/) |
| `y` | [Int](/api-docs/headless/Int/) |
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findPositionForNewNodeBottomLeft"><code><span class="field-name">findPositionForNewNodeBottomLeft</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a></code><a class="header-anchor" href="#findPositionForNewNodeBottomLeft"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `result` | [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

| Returns |
|---------|
| [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findPositionForNewNodeBestShortSideFit"><code><span class="field-name">findPositionForNewNodeBestShortSideFit</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a></code><a class="header-anchor" href="#findPositionForNewNodeBestShortSideFit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `result` | [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

| Returns |
|---------|
| [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findPositionForNewNodeBestLongSideFit"><code><span class="field-name">findPositionForNewNodeBestLongSideFit</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a></code><a class="header-anchor" href="#findPositionForNewNodeBestLongSideFit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `result` | [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

| Returns |
|---------|
| [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findPositionForNewNodeBestAreaFit"><code><span class="field-name">findPositionForNewNodeBestAreaFit</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a></code><a class="header-anchor" href="#findPositionForNewNodeBestAreaFit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `result` | [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

| Returns |
|---------|
| [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="findPositionForNewNodeContactPoint"><code><span class="field-name">findPositionForNewNodeContactPoint</span><span class="parenthesis">(</span><span class="arg-name">width</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">height</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">result</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/" class="type-link">MaxRectsPackerBestFitPosition</a></code><a class="header-anchor" href="#findPositionForNewNodeContactPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `width` | [Int](/api-docs/headless/Int/) |
| `height` | [Int](/api-docs/headless/Int/) |
| `result` | [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

| Returns |
|---------|
| [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="splitFreeNode"><code><span class="field-name">splitFreeNode</span><span class="parenthesis">(</span><span class="arg-name">freeNode</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/Rect/" class="type-link">Rect</a><span class="operator">,</span> <span class="arg-name">usedNode</span><span class="operator">:</span> <a href="/api-docs/headless/binpacking/Rect/" class="type-link">Rect</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#splitFreeNode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `freeNode` | [Rect](/api-docs/headless/binpacking/Rect/) |
| `usedNode` | [Rect](/api-docs/headless/binpacking/Rect/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="pruneFreeList"><code><span class="field-name">pruneFreeList</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pruneFreeList"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="commonIntervalLength"><code><span class="field-name">commonIntervalLength</span><span class="parenthesis">(</span><span class="arg-name">i1start</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">i1end</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">i2start</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">i2end</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#commonIntervalLength"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `i1start` | [Float](/api-docs/headless/Float/) |
| `i1end` | [Float](/api-docs/headless/Float/) |
| `i2start` | [Float](/api-docs/headless/Float/) |
| `i2end` | [Float](/api-docs/headless/Float/) |

| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

