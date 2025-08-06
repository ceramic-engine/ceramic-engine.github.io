---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SeedRandom
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/SeedRandom/
---

# SeedRandom

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SeedRandom.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SeedRandom</strong> (Class)</div>

Seeded random number generator to get reproducible sequences of values.

SeedRandom provides a deterministic pseudo-random number generator that produces
the same sequence of random values for a given seed. This is essential for:
- Procedural generation that needs to be reproducible
- Multiplayer games requiring synchronized random events
- Testing scenarios that need predictable randomness
- Save/load systems that need to recreate random sequences

The implementation uses the Park Miller (1988) "minimal standard" linear
congruential generator algorithm: (seed * 16807) % 2147483647

Example usage:
```haxe
// Create a seeded random generator
var rng = new SeedRandom(12345);

// Generate random values
var randomFloat = rng.random();           // [0, 1)
var randomInt = rng.between(1, 100);      // [1, 100)

// Shuffle an array deterministically
var items = [1, 2, 3, 4, 5];
rng.shuffle(items);

// Reset to initial seed to replay sequence
rng.reset();
var sameFloat = rng.random(); // Same as first randomFloat
```

Note: This is not cryptographically secure and should not be used for
security-sensitive applications.

<div class="see"><strong>See:</strong> Math.random() For non-deterministic random numbers</div>


## Instance Members

<div class="signature field-var has-description" id="seed"><code><span class="field-name">seed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#seed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The current seed value.
This value changes with each random number generation.

<hr class="field-separator" />

<div class="signature field-var has-description" id="initialSeed"><code><span class="field-name">initialSeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#initialSeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The initial seed value used when creating this generator.
Used by reset() to restore the original sequence.

<hr class="field-separator" />

<div class="signature field-method has-description" id="shuffle"><code><span class="field-name">shuffle</span><span class="parenthesis">(</span><span class="arg-name">arr</span><span class="operator">:</span> <a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">shuffle.T</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#shuffle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shuffle an Array in place using the Fisher-Yates algorithm.

This operation modifies the original array. The shuffle is deterministic
based on the current seed state, so the same seed will always produce
the same shuffle order.

Example:
```haxe
var deck = ["A", "K", "Q", "J", "10", "9", "8", "7"];
rng.shuffle(deck);
// deck is now shuffled in a reproducible way
```



| Name | Type | Description |
|------|------|-------------|
| `arr` | [Array](/api-docs/clay-native/Array/)<shuffle.T> | The array to shuffle. Modified in place. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a pseudo-random float in the range [0, 1).

The value is uniformly distributed and will be >= 0 and < 1.
Each call advances the internal seed state.


| Returns | Description |
|---------|-------------|
| [Float](/api-docs/clay-native/Float/) | A pseudo-random float between 0 (inclusive) and 1 (exclusive) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="between"><code><span class="field-name">between</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#between"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a pseudo-random integer in the range [min, max).

The value will be >= min and < max. The distribution is uniform
across the range.

Example:
```haxe
var diceRoll = rng.between(1, 7);    // 1-6
var percent = rng.between(0, 101);   // 0-100
```



| Name | Type | Description |
|------|------|-------------|
| `min` | [Int](/api-docs/clay-native/Int/) | The minimum value (inclusive)  |
| `max` | [Int](/api-docs/clay-native/Int/) | The maximum value (exclusive)  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/clay-native/Int/) | A pseudo-random integer in the specified range |

<hr class="field-separator" />

<div class="signature field-method has-description" id="reset"><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">initialSeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the generator to its initial seed value.

This allows replaying the same sequence of random values.
Optionally, a new initial seed can be provided.

Example:
```haxe
var rng = new SeedRandom(100);
var a = rng.random();
var b = rng.random();

rng.reset();           // Back to seed 100
var a2 = rng.random(); // Same as 'a'
var b2 = rng.random(); // Same as 'b'

rng.reset(200);        // Change to new seed
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `initialSeed` | [Float](/api-docs/clay-native/Float/) | *(optional)* | Optional new seed to use. If not provided, resets to the original seed from construction. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">seed</span><span class="operator">:</span> <a href="/api-docs/clay-native/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new seeded random number generator.



| Name | Type | Description |
|------|------|-------------|
| `seed` | [Float](/api-docs/clay-native/Float/) | The seed value. Must be a positive number. Same seed values will produce identical random sequences. |

