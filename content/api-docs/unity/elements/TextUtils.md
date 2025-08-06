---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: TextUtils
target: Unity
permalink: api-docs/unity/elements/TextUtils/
---

# TextUtils

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/TextUtils.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.TextUtils</strong> (Class)</div>

Utility class providing various text manipulation and transformation functions.

This class contains static methods for common text operations used throughout
the elements framework, including string transformations, comparisons, and
identifier sanitization. It's particularly useful for UI elements that need
to process and format text data.

## Features

- Field label generation from camelCase
- String comparison utilities
- Case conversion (UPPER_CASE ↔ camelCase)
- Text sanitization for identifiers
- Prefix extraction from strings

## Usage Examples

```haxe
// Convert camelCase to readable label
var label = TextUtils.toFieldLabel("firstName"); // "First Name"

// Compare strings case-insensitively
var result = TextUtils.compareStrings("Hello", "hello"); // 0

// Convert UPPER_CASE to camelCase
var camel = TextUtils.upperCaseToCamelCase("SOME_CONSTANT"); // "SomeConstant"

// Sanitize text for use as identifier
var id = TextUtils.sanitizeToIdentifier("My Variable!"); // "My_Variable"
```

<div class="see"><strong>See:</strong> <a href="/api-docs/unity/elements/SanitizeTextField/">SanitizeTextField</a>, Slug</div>


## Static Members

<div class="signature field-method has-description has-plugin" id="toFieldLabel"><div class="plugin-name">elements</div><code><span class="field-name">toFieldLabel</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#toFieldLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a camelCase string to a human-readable field label.

This function transforms camelCase strings into space-separated words
with proper capitalization, making them suitable for use as UI labels.

## Transformation Rules
- First character is capitalized
- Uppercase letters (except the first) are preceded by a space
- Lowercase letters remain unchanged



| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/unity/String/) | The camelCase string to convert  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A human-readable label with spaces and proper capitalization * ## Examples ```haxe TextUtils.toFieldLabel("firstName"); // "First Name" TextUtils.toFieldLabel("lastName"); // "Last Name" TextUtils.toFieldLabel("emailAddress"); // "Email Address" TextUtils.toFieldLabel("userID"); // "User I D" ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="compareStrings"><div class="plugin-name">elements</div><code><span class="field-name">compareStrings</span><span class="parenthesis">(</span><span class="arg-name">a</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">b</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareStrings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Performs a case-insensitive string comparison.

Compares two strings alphabetically, ignoring case differences.
This is useful for sorting strings in a case-insensitive manner.



| Name | Type | Description |
|------|------|-------------|
| `a` | [String](/api-docs/unity/String/) | The first string to compare  |
| `b` | [String](/api-docs/unity/String/) | The second string to compare  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | -1 if a < b, 1 if a > b, 0 if they are equal (ignoring case) * ## Examples ```haxe TextUtils.compareStrings("apple", "BANANA"); // -1 (apple comes before banana) TextUtils.compareStrings("Hello", "hello"); // 0 (equal ignoring case) TextUtils.compareStrings("zebra", "apple"); // 1 (zebra comes after apple) ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="compareStringFirstEntries"><div class="plugin-name">elements</div><code><span class="field-name">compareStringFirstEntries</span><span class="parenthesis">(</span><span class="arg-name">aArray</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">bArray</span><span class="operator">:</span> <a href="/api-docs/unity/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/unity/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#compareStringFirstEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares the first string entries of two arrays in a case-insensitive manner.

This function is useful for sorting arrays where the first element is a string
that should be used as the sort key. Both arrays must have at least one element.



| Name | Type | Description |
|------|------|-------------|
| `aArray` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> | Array containing the first string to compare at index 0  |
| `bArray` | [Array](/api-docs/unity/Array/)<[Dynamic](/api-docs/unity/Dynamic/)> | Array containing the second string to compare at index 0  |

| Returns | Description |
|---------|-------------|
| [Int](/api-docs/unity/Int/) | -1 if aArray[0] < bArray[0], 1 if aArray[0] > bArray[0], 0 if equal (ignoring case) * ## Examples ```haxe var arr1 = ["apple", "red", 5]; var arr2 = ["BANANA", "yellow", 3]; TextUtils.compareStringFirstEntries(arr1, arr2); // -1 (apple < banana) ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="upperCaseToCamelCase"><div class="plugin-name">elements</div><code><span class="field-name">upperCaseToCamelCase</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">firstLetterUppercase</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">between</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#upperCaseToCamelCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Transforms UPPER_CASE_WITH_UNDERSCORES to camelCase or PascalCase.

Converts underscore-separated uppercase strings to camelCase format,
with optional separators between words and configurable first letter casing.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `input` | [String](/api-docs/unity/String/) | | The UPPER_CASE string to convert  |
| `firstLetterUppercase` | [Bool](/api-docs/unity/Bool/) | `true` | Whether the first letter should be uppercase (PascalCase vs camelCase)  |
| `between` | [String](/api-docs/unity/String/) | *(optional)* | Optional string to insert between converted words  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The converted string in camelCase or PascalCase format * ## Examples ```haxe // Convert to PascalCase (default) TextUtils.upperCaseToCamelCase("SOME_IDENTIFIER"); // "SomeIdentifier" * // Convert to camelCase TextUtils.upperCaseToCamelCase("SOME_IDENTIFIER", false); // "someIdentifier" * // Convert with separator TextUtils.upperCaseToCamelCase("SOME_ID", true, " "); // "Some Identifier" ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="getPrefix"><div class="plugin-name">elements</div><code><span class="field-name">getPrefix</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#getPrefix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the non-numeric prefix from a string.

Removes any trailing numeric suffix and trailing underscores from a string,
leaving only the text prefix. This is useful for processing identifiers
that may have numeric suffixes.



| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/unity/String/) | The string to extract the prefix from  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The string with numeric suffixes and trailing underscores removed * ## Examples ```haxe TextUtils.getPrefix("item123"); // "item" TextUtils.getPrefix("value_42"); // "value" TextUtils.getPrefix("test_"); // "test" TextUtils.getPrefix("simple"); // "simple" ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="uppercasePrefixFromClass"><div class="plugin-name">elements</div><code><span class="field-name">uppercasePrefixFromClass</span><span class="parenthesis">(</span><span class="arg-name">className</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#uppercasePrefixFromClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts an uppercase prefix from a fully qualified class name.

Takes a class name (potentially with package path) and converts the class part
to UPPER_CASE format, removing any trailing underscores. This is useful for
generating constants or identifiers from class names.



| Name | Type | Description |
|------|------|-------------|
| `className` | [String](/api-docs/unity/String/) | The fully qualified class name (e.g., "com.example.MyClass")  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | The uppercase prefix derived from the class name * ## Examples ```haxe TextUtils.uppercasePrefixFromClass("com.example.MyClass"); // "MY_CLASS" TextUtils.uppercasePrefixFromClass("SimpleClass"); // "SIMPLE_CLASS" TextUtils.uppercasePrefixFromClass("utils.TextHelper"); // "TEXT_HELPER" ``` |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="slugifyUpperCase"><div class="plugin-name">elements</div><code><span class="field-name">slugifyUpperCase</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#slugifyUpperCase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Converts a string to a slugified uppercase format.

Replaces spaces with underscores and applies slug encoding to create
a clean, uppercase identifier suitable for constants or keys.

<div class="see"><strong>See:</strong> Slug.encode</div>


| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/unity/String/) | The string to slugify  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A slugified uppercase string with underscores replacing spaces * ## Examples ```haxe TextUtils.slugifyUpperCase("My Variable Name"); // "MY_VARIABLE_NAME" TextUtils.slugifyUpperCase("test-value"); // "TEST_VALUE" TextUtils.slugifyUpperCase("Special Chars!"); // "SPECIAL_CHARS" ``` * |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="sanitizeToIdentifier"><div class="plugin-name">elements</div><code><span class="field-name">sanitizeToIdentifier</span><span class="parenthesis">(</span><span class="arg-name">str</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#sanitizeToIdentifier"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sanitizes a string to make it suitable for use as an identifier.

Removes numeric prefixes, replaces spaces with underscores, and applies
slug encoding to ensure the result is a valid identifier. This is useful
for converting user input or arbitrary text into valid variable names.

@chars");  // "special_chars"
TextUtils.sanitizeToIdentifier("42 test name");   // "test_name"
```

<div class="see"><strong>See:</strong> Slug.encode</div>


| Name | Type | Description |
|------|------|-------------|
| `str` | [String](/api-docs/unity/String/) | The string to sanitize  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/unity/String/) | A sanitized string suitable for use as an identifier * ## Examples ```haxe TextUtils.sanitizeToIdentifier("123variable"); // "variable" TextUtils.sanitizeToIdentifier("my variable"); // "my_variable" TextUtils.sanitizeToIdentifier("special |

## Private Members

<div class="signature field-var has-description has-plugin" id="RE_PREFIXED"><div class="plugin-name">elements</div><code><span class="field-name">RE_PREFIXED</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_PREFIXED"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression to match strings ending with numeric suffixes.
Captures the non-numeric prefix and the numeric suffix separately.
@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_NUMERIC_PREFIX"><div class="plugin-name">elements</div><code><span class="field-name">RE_NUMERIC_PREFIX</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_NUMERIC_PREFIX"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression to match numeric prefixes at the start of strings.
@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="RE_SPACES"><div class="plugin-name">elements</div><code><span class="field-name">RE_SPACES</span><span class="operator">:</span> <a href="/api-docs/unity/EReg/" class="type-link">EReg</a></code><a class="header-anchor" href="#RE_SPACES"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Regular expression to match one or more whitespace characters.
@private

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |
| `:allow` | elements.SanitizeTextField |

