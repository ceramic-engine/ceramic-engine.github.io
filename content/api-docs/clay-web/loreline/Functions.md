---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Functions
target: Clay (Web)
permalink: api-docs/clay-web/loreline/Functions/
---

# Functions

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Functions.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Functions</strong> (Class)</div>

All built-in functions available to Loreline scripts.

Each public method corresponds to a function that script authors
can call directly. Use `bindAll()` to register every function
into a name-to-function map so the interpreter can look them up.

## Instance Members

<div class="signature field-method has-description" id="bindAll"><code><span class="field-name">bindAll</span><span class="parenthesis">(</span><span class="arg-name">target</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#bindAll"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Registers all built-in functions into the given map, making them
callable by name from Loreline scripts.

| Name | Type |
|------|------|
| `target` | [Map](/api-docs/clay-web/Map/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="floor"><code><span class="field-name">floor</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#floor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rounds a number down to the nearest whole number.

`floor(3.7)` returns `3`, `floor(-1.2)` returns `-2`.

```lor
val = floor(3.7)
You need $val gold coins to enter. // "You need 3 gold coins to enter."
```

| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="ceil"><code><span class="field-name">ceil</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ceil"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rounds a number up to the nearest whole number.

`ceil(3.2)` returns `4`, `ceil(-1.8)` returns `-1`.

```lor
days = ceil(hours / 24)
The journey takes at least $days days.
```

| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="round"><code><span class="field-name">round</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#round"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rounds a number to the nearest whole number.

`round(3.5)` returns `4`, `round(3.4)` returns `3`.

```lor
score = round(raw_score)
Your final score is $score.
```

| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="abs"><code><span class="field-name">abs</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#abs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the positive version of a number, removing any negative sign.

`abs(-5)` returns `5`, `abs(3)` returns `3`.

```lor
diff = abs(your_score - target_score)
You were off by $diff points.
```

| Name | Type |
|------|------|
| `n` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="min"><code><span class="field-name">min</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#min"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the smaller of two values.

`min(3, 7)` returns `3`.

```lor
damage = min(attack_power, enemy_health)
```

| Name | Type |
|------|------|
| `a` | [Float](/api-docs/clay-web/Float/) |
| `b` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="max"><code><span class="field-name">max</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#max"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the larger of two values.

`max(3, 7)` returns `7`.

```lor
health = max(health - damage, 0)
```

| Name | Type |
|------|------|
| `a` | [Float](/api-docs/clay-web/Float/) |
| `b` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clamp"><code><span class="field-name">clamp</span><span class="parenthesis">(</span><span class="arg-name">v</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">lo</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">hi</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#clamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Keeps a value within a given range. If the value is too low, returns the
minimum; if too high, returns the maximum; otherwise returns it unchanged.

`clamp(10, 0, 5)` returns `5`, `clamp(3, 0, 5)` returns `3`.

```lor
health = clamp(health + healing, 0, max_health)
```

| Name | Type |
|------|------|
| `v` | [Float](/api-docs/clay-web/Float/) |
| `lo` | [Float](/api-docs/clay-web/Float/) |
| `hi` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pow"><code><span class="field-name">pow</span><span class="parenthesis">(</span><span class="arg-name">base</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">exp</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#pow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Raises a number to the given power.

`pow(2, 3)` returns `8` (2 x 2 x 2). `pow(9, 0.5)` returns `3` (square root).

```lor
area = pow(side_length, 2)
The room is $area square meters.
```

| Name | Type |
|------|------|
| `base` | [Float](/api-docs/clay-web/Float/) |
| `exp` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="random"><code><span class="field-name">random</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a random whole number between min and max, including both ends.

```lor
roll = random(1, 6)
You rolled a $roll!
```

| Name | Type |
|------|------|
| `min` | [Int](/api-docs/clay-web/Int/) |
| `max` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="chance"><code><span class="field-name">chance</span><span class="parenthesis">(</span><span class="arg-name">n</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#chance"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` with a 1-in-n probability. Useful for occasional random events.

`chance(3)` has roughly a 33% chance of being true.

```lor
if chance(4)
  You find a rare gem on the ground!
```

| Name | Type |
|------|------|
| `n` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="seed_random"><code><span class="field-name">seed_random</span><span class="parenthesis">(</span><span class="arg-name">seed</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#seed_random"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the random seed so that all future random results follow a predictable
sequence. Calling `seed_random` with the same value always produces the same
results for `random`, `chance`, `random_float`, `array_pick`, and `array_shuffle`.

```lor
seed_random(42)
// From here, the sequence of random values is always the same.
```

| Name | Type |
|------|------|
| `seed` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="random_float"><code><span class="field-name">random_float</span><span class="parenthesis">(</span><span class="arg-name">min</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">max</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#random_float"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a random decimal number from `min` up to (but not including) `max`.

`random_float(0, 1)` might return `0.7341...`.

```lor
temperature = round(random_float(15, 30))
It's $temperature degrees outside today.
```

| Name | Type |
|------|------|
| `min` | [Float](/api-docs/clay-web/Float/) |
| `max` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="wait"><code><span class="field-name">wait</span><span class="parenthesis">(</span><span class="arg-name">seconds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Async/" class="type-link">Async</a></code><a class="header-anchor" href="#wait"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pauses the script for the given number of seconds before continuing.

```lor
The ground begins to shake...
wait(2)
A massive boulder crashes through the wall!
```

| Name | Type |
|------|------|
| `seconds` | [Float](/api-docs/clay-web/Float/) |

| Returns |
|---------|
| [Async](/api-docs/clay-web/loreline/Async/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="float_"><code><span class="field-name">float_</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#float_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a value to a number. Strings like `"3.14"` are parsed;
`true` becomes `1`, `false` becomes `0`. Returns `0` if conversion fails.

```lor
price = float("9.99")
```

| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_"><code><span class="field-name">string_</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#string_"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts any value to text.

```lor
label = string(42)   // "42"
```

| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="bool"><code><span class="field-name">bool</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#bool"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a value to `true` or `false`:
- Numbers: `0` is false, everything else is true
- Strings: empty `""` is false, non-empty is true
- Arrays: empty is false, non-empty is true
- `null`: false

```lor
if bool(item_count)
  You are carrying items.
```

| Name | Type |
|------|------|
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_length"><code><span class="field-name">string_length</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#string_length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of characters in a string.

```lor
name = "Alice"
Your name has $string_length(name) letters.
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_upper"><code><span class="field-name">string_upper</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string_upper"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts all letters to uppercase.

`string_upper("hello")` returns `"HELLO"`.

```lor
title = string_upper(player_name)
The crowd chants: $title! $title!
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_lower"><code><span class="field-name">string_lower</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string_lower"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts all letters to lowercase.

`string_lower("HELLO")` returns `"hello"`.

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_contains"><code><span class="field-name">string_contains</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">needle</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#string_contains"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a string contains a given piece of text.

`string_contains("hello world", "world")` returns `true`.

```lor
if string_contains(message, "help")
  Someone needs assistance!
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `needle` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_replace"><code><span class="field-name">string_replace</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string_replace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Replaces every occurrence of a piece of text with something else.

`string_replace("hello world", "world", "there")` returns `"hello there"`.

```lor
censored = string_replace(message, "darn", "****")
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `from` | [String](/api-docs/clay-web/String/) |
| `to` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_split"><code><span class="field-name">string_split</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#string_split"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Splits a string into an array of pieces at each occurrence of a separator.

`string_split("a,b,c", ",")` returns `["a", "b", "c"]`.

```lor
words = string_split(sentence, " ")
The sentence has $length(words) words.
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `sep` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_trim"><code><span class="field-name">string_trim</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string_trim"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes any spaces or whitespace from the beginning and end of a string.

`string_trim("  hello  ")` returns `"hello"`.

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_index"><code><span class="field-name">string_index</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">needle</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#string_index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds where a piece of text first appears inside a string.
Returns the position (starting from `0`), or `-1` if not found.

`string_index("hello", "ll")` returns `2`.

```lor
pos = string_index(clue, "treasure")
if pos >= 0
  The clue mentions a treasure!
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `needle` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_sub"><code><span class="field-name">string_sub</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">start</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">len</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string_sub"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts a portion of a string starting at position `start` (0-based)
for `length` characters.

`string_sub("ABCDEF", 0, 3)` returns `"ABC"`.
`string_sub("ABCDEF", 2, 3)` returns `"CDE"`.

```lor
code = "ABCDEF"
prefix = string_sub(code, 0, 3)
// prefix is "ABC"
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `start` | [Any](/api-docs/clay-web/Any/) |
| `len` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_starts"><code><span class="field-name">string_starts</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">prefix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#string_starts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a string begins with the given prefix.

`string_starts("hello world", "hello")` returns `true`.

```lor
if string_starts(name, "Sir")
  You bow before the knight.
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `prefix` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_ends"><code><span class="field-name">string_ends</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">suffix</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#string_ends"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a string ends with the given suffix.

`string_ends("hello world", "world")` returns `true`.

```lor
if string_ends(reply, "?")
  It sounds like a question.
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `suffix` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="string_repeat"><code><span class="field-name">string_repeat</span><span class="parenthesis">(</span><span class="arg-name">text</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#string_repeat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Repeats the text the given number of times.

`string_repeat("ab", 3)` returns `"ababab"`.

```lor
divider = string_repeat("-", 20)
// divider is "--------------------"
```

| Name | Type |
|------|------|
| `text` | [String](/api-docs/clay-web/String/) |
| `count` | [Int](/api-docs/clay-web/Int/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="plural"><code><span class="field-name">plural</span><span class="parenthesis">(</span><span class="arg-name">count</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">singular</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">plural_form</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#plural"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `singular` when count is 1, `plural_form` otherwise.
Useful for both noun plurals and verb conjugation. The writer provides
both forms, so this works in any language.

```lor
items = 3
You found $items $plural(items, "coin", "coins").
// "You found 3 coins."

boxes = 1
There $plural(boxes, "is", "are") $boxes $plural(boxes, "box", "boxes") here.
// "There is 1 box here."
```

| Name | Type |
|------|------|
| `count` | [Dynamic](/api-docs/clay-web/Dynamic/) |
| `singular` | [String](/api-docs/clay-web/String/) |
| `plural_form` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_length"><code><span class="field-name">array_length</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#array_length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of elements in an array.

```lor
items = [1, 2, 3]
You carry $array_length(items) items.
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_add"><code><span class="field-name">array_add</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an element to the end of an array.

```lor
items = ["sword", "shield"]
array_add(items, "potion")
// items is now ["sword", "shield", "potion"]
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_pop"><code><span class="field-name">array_pop</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the last element from an array and returns it.
Returns `null` if the array is empty.

```lor
last = array_pop(items)
You drop the $last.
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_prepend"><code><span class="field-name">array_prepend</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_prepend"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds an element to the beginning of an array.

```lor
queue = ["Bob", "Carol"]
array_prepend(queue, "Alice")
// queue is now ["Alice", "Bob", "Carol"]
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_shift"><code><span class="field-name">array_shift</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_shift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the first element from an array and returns it.
Returns `null` if the array is empty.

```lor
next_in_line = array_shift(queue)
$next_in_line steps forward.
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_remove"><code><span class="field-name">array_remove</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#array_remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds and removes the first occurrence of a value from an array.
Returns `true` if the value was found and removed, `false` if not found.

```lor
array_remove(inventory, "old key")
The old key crumbles to dust.
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_index"><code><span class="field-name">array_index</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#array_index"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Finds the position of a value in an array (starting from `0`).
Returns `-1` if the value is not in the array.

```lor
pos = array_index(suspects, "Butler")
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_has"><code><span class="field-name">array_has</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#array_has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if an array contains a given value.

```lor
if array_has(inventory, "golden key")
  You unlock the ancient door.
else
  The door won't budge without the right key.
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_sort"><code><span class="field-name">array_sort</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_sort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sorts the array in place and returns it.
Numbers are sorted from smallest to largest; other values are sorted
alphabetically.

```lor
scores = [30, 10, 20]
array_sort(scores)
// scores is now [10, 20, 30]
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_reverse"><code><span class="field-name">array_reverse</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_reverse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reverses the array in place and returns it.

```lor
steps = ["first", "second", "third"]
array_reverse(steps)
// steps is now ["third", "second", "first"]
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_join"><code><span class="field-name">array_join</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">sep</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#array_join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Combines all elements of an array into a single string, placing a separator
between each element.

`array_join(["a", "b", "c"], ", ")` returns `"a, b, c"`.

```lor
guests = ["Alice", "Bob", "Carol"]
The guests are: $array_join(guests, ", ").
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |
| `sep` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_pick"><code><span class="field-name">array_pick</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_pick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a random element from an array. Returns `null` if the array is empty.
Affected by `seed_random`.

```lor
greetings = ["Hello!", "Hey there!", "Welcome!"]
barista: $array_pick(greetings)
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_shuffle"><code><span class="field-name">array_shuffle</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_shuffle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Shuffles the array in place and returns it.
Affected by `seed_random`.

```lor
deck = ["Ace", "King", "Queen", "Jack"]
array_shuffle(deck)
You draw the $deck[0].
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="array_copy"><code><span class="field-name">array_copy</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#array_copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a shallow copy of the array.

```lor
original = [1, 2, 3]
backup = array_copy(original)
array_sort(original)
// original is now [1, 2, 3] sorted, backup is unchanged
```

| Name | Type |
|------|------|
| `array` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_length"><code><span class="field-name">map_length</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#map_length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the number of keys in a map.

```lor
state
  stats: { strength: 10, agility: 8 }
The map has $map_length(stats) entries.
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_keys"><code><span class="field-name">map_keys</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#map_keys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array containing all the keys of a map.

```lor
state
  stats: { strength: 10, agility: 8 }
all_stats = map_keys(stats)
// all_stats is ["strength", "agility"]
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_has"><code><span class="field-name">map_has</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#map_has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a map contains a given key.

```lor
if map_has(inventory_counts, "potion")
  You have potions available.
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_get"><code><span class="field-name">map_get</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#map_get"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the value stored under a key in a map.
Returns `null` if the key doesn't exist.

```lor
count = map_get(inventory_counts, "arrows")
You have $count arrows left.
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_set"><code><span class="field-name">map_set</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#map_set"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stores a value under a key in a map. Overwrites any previous value for that key.

```lor
map_set(inventory_counts, "arrows", 20)
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |
| `key` | [String](/api-docs/clay-web/String/) |
| `value` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_remove"><code><span class="field-name">map_remove</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">,</span> <span class="arg-name">key</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#map_remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes a key and its value from a map.
Returns `true` if the key was found and removed, `false` otherwise.

```lor
map_remove(inventory_counts, "broken_sword")
You discard the broken sword.
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |
| `key` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="map_copy"><code><span class="field-name">map_copy</span><span class="parenthesis">(</span><span class="arg-name">map</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#map_copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns a shallow copy of a map.

```lor
state
  stats: { strength: 10, agility: 8 }
backup = map_copy(stats)
map_set(stats, "strength", 20)
// stats.strength is 20, backup.strength is still 10
```

| Name | Type |
|------|------|
| `map` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="current_beat"><code><span class="field-name">current_beat</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#current_beat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the name of the beat that is currently running.

```lor
beat TavernScene
  where = current_beat()
  // where is "TavernScene"
```
| Returns |
|---------|
| [Dynamic](/api-docs/clay-web/Dynamic/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="has_beat"><code><span class="field-name">has_beat</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has_beat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks whether a beat with the given name exists and can be reached from
where you are. This includes nested beats defined inside the current beat
or any of its parent beats, as well as all top-level beats.

```lor
if has_beat("SecretEnding")
  choice
    Try the secret path -> SecretEnding
```

| Name | Type |
|------|------|
| `name` | [Any](/api-docs/clay-web/Any/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="beat_visits"><code><span class="field-name">beat_visits</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#beat_visits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns how many times a beat has been entered.

`beat_visits()` returns the visit count of the current beat.
`beat_visits("BeatName")` or `beat_visits(BeatName)` returns the visit count of the named beat.
`BeatName.visits()` is also supported via dot notation.

```lor
if beat_visits() == 1
  First time here
else
  You've been here before

if beat_visits(Dungeon) >= 3
  You know this place well now
```

| Name | Type | Default |
|------|------|---------|
| `name` | [Any](/api-docs/clay-web/Any/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/clay-web/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="choices"><code><span class="field-name">choices</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#choices"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of text strings for all **enabled** choice options
evaluated so far (during option condition evaluation) or all enabled
options (inside the chosen option's body).

Returns a new array each time (safe to modify in scripts).
Returns an empty array outside of a choice context.

```lor
choice
  - Ask about menu
  - Ask about specials
  Say something if !choices()
```
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Any](/api-docs/clay-web/Any/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="choices_disabled"><code><span class="field-name">choices_disabled</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#choices_disabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of text strings for all **disabled** choice options
evaluated so far (during option condition evaluation) or all disabled
options (inside the chosen option's body).

Returns a new array each time (safe to modify in scripts).
Returns an empty array outside of a choice context.

```lor
choice
  Option A if someCondition
  Option B if array_length(choices_disabled()) > 0
```
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Any](/api-docs/clay-web/Any/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="choices_all"><code><span class="field-name">choices_all</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Any/" class="type-link">Any</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#choices_all"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array of text strings for **all** choice options evaluated
so far, in original order, regardless of enabled/disabled state.

Returns a new array each time (safe to modify in scripts).
Returns an empty array outside of a choice context.

```lor
choice
  Option A
  Option B if array_length(choices_all()) > 0
```
| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<[Any](/api-docs/clay-web/Any/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `interpreter` | [Interpreter](/api-docs/clay-web/loreline/Interpreter/) |

## Private Members

<div class="signature field-var no-description" id="interpreter"><code><span class="field-name">interpreter</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a></code><a class="header-anchor" href="#interpreter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="rng"><code><span class="field-name">rng</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#rng"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Float](/api-docs/clay-web/Float/) |

