---
layout: api-docs
category: api-docs
subCategory: doc
menu: Spine
title: Pool
target: Clay (Native)
permalink: api-docs/clay-native/spine/support/utils/Pool/
---

# Pool

<div class="view-source"><a href="https://github.com/jeremyfa/spine-hx/blob/master/spine/support/utils/Pool.hx">View source</a></div>

<div class="type-hierarchy"><strong>spine.support.utils.Pool</strong> (Class) → <a href="/api-docs/clay-native/spine/_AnimationState/TrackEntryPool/">spine._AnimationState.TrackEntryPool</a>, <a href="/api-docs/clay-native/spine/_SkeletonBounds/PolygonPool/">spine._SkeletonBounds.PolygonPool</a>, <a href="/api-docs/clay-native/spine/utils/_Triangulator/IndicesPool/">spine.utils._Triangulator.IndicesPool</a>, <a href="/api-docs/clay-native/spine/utils/_Triangulator/PolygonPool/">spine.utils._Triangulator.PolygonPool</a></div>

## Instance Members

<div class="signature field-var has-description has-plugin" id="max"><div class="plugin-name">spine</div><code><span class="field-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The maximum number of objects that will be pooled.

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="peak"><div class="plugin-name">spine</div><code><span class="field-name">peak</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#peak"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The highest number of free objects. Can be reset any time.

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="free"><div class="plugin-name">spine</div><code><span class="field-name">free</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <span class="type-name">spine.support.utils.Pool.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#free"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `object` | spine.support.utils.Pool.T |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="reset"><div class="plugin-name">spine</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <span class="type-name">spine.support.utils.Pool.T</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called when an object is freed to clear the state of the object for possible later reuse. The default implementation calls
{@link Poolable#reset()} if the object is {@link Poolable}.

| Name | Type |
|------|------|
| `object` | spine.support.utils.Pool.T |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="freeAll"><div class="plugin-name">spine</div><code><span class="field-name">freeAll</span><span class="parenthesis">(</span><span class="arg-name">objects</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">spine.support.utils.Pool.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#freeAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Puts the specified objects in the pool. Null objects within the array are silently ignored.

<div class="see"><strong>See:</strong> #free(Object)</div>


| Name | Type |
|------|------|
| `objects` | [Array](/api-docs/clay-native/spine/support/utils/Array/)<spine.support.utils.Pool.T> |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">spine</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all free objects from this pool.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getFree"><div class="plugin-name">spine</div><code><span class="field-name">getFree</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getFree"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The number of objects available to be obtained.
| Returns |
|---------|
| [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="newObject"><div class="plugin-name">spine</div><code><span class="field-name">newObject</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">spine.support.utils.Pool.T</span></code><a class="header-anchor" href="#newObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Puts the specified object in the pool, making it eligible to be returned by {@link #obtain()}. If the pool already contains
{@link #max} free objects, the specified object is reset but not added to the pool.
| Returns |
|---------|
| spine.support.utils.Pool.T |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="obtain"><div class="plugin-name">spine</div><code><span class="field-name">obtain</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">spine.support.utils.Pool.T</span></code><a class="header-anchor" href="#obtain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an object from this pool. The object may be new (from {@link #newObject()}) or reused (previously
{@link #free(Object) freed}).
| Returns |
|---------|
| spine.support.utils.Pool.T |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">spine</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">initialCapacity</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">64</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a> <span class="operator">=</span> <span class="default-value">999999999</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type | Default | Description |
|------|------|---------|-------------|
| `initialCapacity` | [Int](/api-docs/clay-native/Int/) | `64` |  |
| `max` | [Int](/api-docs/clay-native/Int/) | `999999999` | The maximum number of free objects to store in this pool. |

## Private Members

<div class="signature field-var no-description has-plugin" id="freeObjects"><div class="plugin-name">spine</div><code><span class="field-name">freeObjects</span><span class="operator">:</span> <a href="/api-docs/clay-native/spine/support/utils/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">spine.support.utils.Pool.T</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#freeObjects"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

