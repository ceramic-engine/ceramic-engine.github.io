---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: HashedString
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/HashedString/
---

# HashedString

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/HashedString.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.HashedString</strong> (Class)</div>

A utility class for encoding and decoding strings with integrity verification using MD5 hashes.

HashedString provides a way to encode strings with embedded hash values that allow
verification of data integrity when decoding. This is useful for scenarios where
you need to ensure that string data hasn't been corrupted or tampered with.

The encoding format is: `[32-char MD5 hash][length];[original string]`

Key features:
- Integrity verification: Each encoded section includes an MD5 hash for validation
- Concatenation support: Multiple encoded strings can be safely concatenated
- Partial decode detection: Can detect if decoding was incomplete due to corruption
- Section-based encoding: Each string is encoded as an independent section

Common use cases:
- Storing critical string data with integrity checks
- Transmitting text data where corruption detection is important
- Creating tamper-evident string storage
- Verifying saved game data or configuration strings

Example usage:
```haxe
// Encode a string
var encoded = HashedString.encode("Hello, World!");
trace(encoded); // Outputs: [hash][13];Hello, World!

// Decode and verify
var decoded = HashedString.decode(encoded);
if (decoded != null) {
    trace(decoded); // Outputs: Hello, World!
}

// Append multiple encoded strings
var combined = HashedString.encode("First");
combined = HashedString.append(combined, "Second");

// Decode concatenated strings
var result = HashedString.decode(combined); // Returns: "FirstSecond"
```

<div class="see"><strong>See:</strong> ceramic.PersistentData For storing encoded data persistently, ceramic.Utils For other utility functions</div>


## Static Members

<div class="signature field-method has-description" id="encode"><code><span class="field-name">encode</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#encode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes a string with an MD5 hash for integrity verification.

The encoded format consists of:
1. A 32-character MD5 hash of the string
2. The length of the original string
3. A semicolon separator
4. The original string

This format allows the decoder to verify that the string hasn't been
corrupted or tampered with.



| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/clay-web/String/) | The string to encode  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The encoded string in format: `[hash][length];[string]` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="append"><code><span class="field-name">append</span><span class="parenthesis">(</span><span class="arg-name">encoded</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#append"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Encodes a string and appends it to an existing encoded string.

This is a convenience method that allows building up multiple encoded
sections in a single string. Each section remains independently verifiable.

Example:
```haxe
var result = HashedString.encode("First");
result = HashedString.append(result, "Second");
result = HashedString.append(result, "Third");
// result now contains three independently encoded sections
```



| Name | Type | Description |
|------|------|-------------|
| `encoded` | [String](/api-docs/clay-web/String/) | The existing encoded string to append to  |
| `str` | [String](/api-docs/clay-web/String/) | The new string to encode and append  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The combined encoded string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="decode"><code><span class="field-name">decode</span><span class="parenthesis">(</span><span class="arg-name">encoded</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#decode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decodes an encoded string, verifying integrity using embedded hashes.

This method processes one or more encoded sections, verifying each section's
hash before including it in the result. If any section fails verification,
decoding stops at that point and the incomplete flag is set.

The decoder can handle:
- Single encoded strings
- Multiple concatenated encoded strings
- Partial/corrupted data (stops at first invalid section)



| Name | Type | Description |
|------|------|-------------|
| `encoded` | [String](/api-docs/clay-web/String/) | The encoded string to decode  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The decoded string if successful, or null if the encoded string is invalid. Use `isLastDecodeIncomplete()` to check if decoding was partially successful. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isLastDecodeIncomplete"><code><span class="field-name">isLastDecodeIncomplete</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isLastDecodeIncomplete"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if the last decode operation was incomplete.

This method returns true if the last call to `decode()` encountered
corrupted data or an invalid format and couldn't process the entire
encoded string. This can help distinguish between:
- Complete failure (invalid format from the start)
- Partial success (some sections decoded before encountering corruption)


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | `true` if the last decode was incomplete, `false` if it was successful |

## Private Members

