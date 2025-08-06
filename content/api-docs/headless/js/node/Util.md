---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Util
target: Headless
permalink: api-docs/headless/js/node/Util/
---

# Util

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Util.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Util</strong> (extern class)</div>

The `util` module is primarily designed to support the needs of Node.js' own internal APIs.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util</div>


## Static Members

<div class="signature field-method has-description" id="callbackify"><code><span class="field-name">callbackify</span><span class="parenthesis">(</span><span class="arg-name">original</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#callbackify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Takes an `async` function (or a function that returns a `Promise`) and returns a function following the
error-first callback style, i.e. taking an `(err, value) => ...` callback as the last argument.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_callbackify_original</div>


| Name | Type |
|------|------|
| `original` | [haxe.Function](/api-docs/headless/haxe/Function/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="debuglog"><code><span class="field-name">debuglog</span><span class="parenthesis">(</span><span class="arg-name">section</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#debuglog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `util.debuglog()` method is used to create a function that conditionally writes debug messages to `stderr`
based on the existence of the `NODE_DEBUG` environment variable.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_debuglog_section</div>


| Name | Type |
|------|------|
| `section` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deprecate"><code><span class="field-name">deprecate</span><span class="parenthesis">(</span><span class="arg-name">fun</span><span class="operator">:</span> <span class="type-name">deprecate.T</span><span class="operator">,</span> <span class="arg-name">msg</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">deprecate.T</span></code><a class="header-anchor" href="#deprecate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `util.deprecate()` method wraps `fn` (which may be a function or class) in such a way that it is marked
asdeprecated.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_deprecate_fn_msg_code</div>


| Name | Type | Default |
|------|------|---------|
| `fun` | deprecate.T | |
| `msg` | [String](/api-docs/headless/String/) | |
| `code` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| deprecate.T |

<hr class="field-separator" />

<div class="signature field-method has-description" id="format"><code><span class="field-name">format</span><span class="parenthesis">(</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `util.format()` method returns a formatted string using the first argument as a `printf`-like format string
which can contain zero or more format specifiers.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_format_format_args</div>


| Name | Type |
|------|------|
| `format` | [String](/api-docs/headless/String/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="formatWithOptions"><code><span class="field-name">formatWithOptions</span><span class="parenthesis">(</span><span class="arg-name">inspectOptions</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/InspectOptions/" class="type-link">InspectOptions</a><span class="operator">,</span> <span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#formatWithOptions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This function is identical to `util.format()`, except in that it takes an `inspectOptions` argument which
specifies options that are passed along to `util.inspect()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_formatwithoptions_inspectoptions_format_args</div>


| Name | Type |
|------|------|
| `inspectOptions` | [InspectOptions](/api-docs/headless/js/node/InspectOptions/) |
| `format` | [String](/api-docs/headless/String/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getSystemErrorName"><code><span class="field-name">getSystemErrorName</span><span class="parenthesis">(</span><span class="arg-name">err</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getSystemErrorName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the string name for a numeric error code that comes from a Node.js API.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_getsystemerrorname_err</div>


| Name | Type |
|------|------|
| `err` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inherits"><code><span class="field-name">inherits</span><span class="parenthesis">(</span><span class="arg-name">constructor</span><span class="operator">:</span> <a href="/api-docs/headless/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">superConstructor</span><span class="operator">:</span> <a href="/api-docs/headless/Class/" class="type-link">Class</a><span class="operator">&lt;</span><a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#inherits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inherit the prototype methods from one `constructor` into another.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_inherits_constructor_superconstructor</div>


| Name | Type |
|------|------|
| `constructor` | [Class](/api-docs/headless/Class/)<[Dynamic](/api-docs/headless/Dynamic/)> |
| `superConstructor` | [Class](/api-docs/headless/Class/)<[Dynamic](/api-docs/headless/Dynamic/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inspect"><code><span class="field-name">inspect</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/InspectOptions/" class="type-link">InspectOptions</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#inspect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `util.inspect()` method returns a string representation of `object` that is intended for debugging.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_inspect_object_options</div>


| Name | Type | Default |
|------|------|---------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `options` | [Null](/api-docs/headless/Null/)<[InspectOptions](/api-docs/headless/js/node/InspectOptions/)> | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDeepStrictEqual"><code><span class="field-name">isDeepStrictEqual</span><span class="parenthesis">(</span><span class="arg-name">val1</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">val2</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDeepStrictEqual"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if there is deep strict equality between `val1` and `val2`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_isdeepstrictequal_val1_val2</div>


| Name | Type |
|------|------|
| `val1` | [Dynamic](/api-docs/headless/Dynamic/) |
| `val2` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="promisify"><code><span class="field-name">promisify</span><span class="parenthesis">(</span><span class="arg-name">original</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/Function/" class="type-link">haxe.Function</a><span class="parenthesis">)</span><span class="operator">:</span> <span class="type-name">Function</span></code><a class="header-anchor" href="#promisify"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Takes a function following the common error-first callback style, i.e. taking an `(err, value) => ...` callback
as the last argument, and returns a version that returns promises.

<div class="see"><strong>See:</strong> https://nodejs.org/api/util.html#util_util_promisify_original</div>


| Name | Type |
|------|------|
| `original` | [haxe.Function](/api-docs/headless/haxe/Function/) |

| Returns |
|---------|
| Function |

<hr class="field-separator" />

<div class="signature field-method has-description" id="debug"><code><span class="field-name">debug</span><span class="parenthesis">(</span><span class="arg-name">string</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debug"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deprecated predecessor of `Console.error`.

| Name | Type |
|------|------|
| `string` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deprecated predecessor of console.error.

| Name | Type |
|------|------|
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isArray"><code><span class="field-name">isArray</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is an Array. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isBoolean"><code><span class="field-name">isBoolean</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBoolean"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a Bool. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isBuffer"><code><span class="field-name">isBuffer</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isBuffer"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a Buffer. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDate"><code><span class="field-name">isDate</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a Date. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isError"><code><span class="field-name">isError</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is an Error. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isFunction"><code><span class="field-name">isFunction</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isFunction"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a Function. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isNull"><code><span class="field-name">isNull</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNull"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is strictly null. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isNullOrUndefined"><code><span class="field-name">isNullOrUndefined</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNullOrUndefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is null or undefined. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isNumber"><code><span class="field-name">isNumber</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isNumber"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a Float. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isObject"><code><span class="field-name">isObject</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is strictly an Object and not a Function. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isPrimitive"><code><span class="field-name">isPrimitive</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isPrimitive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a primitive type. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isRegExp"><code><span class="field-name">isRegExp</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isRegExp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a RegExp. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isString"><code><span class="field-name">isString</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a String. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isSymbol"><code><span class="field-name">isSymbol</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isSymbol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is a Symbol. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isUndefined"><code><span class="field-name">isUndefined</span><span class="parenthesis">(</span><span class="arg-name">object</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isUndefined"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if the given "object" is undefined. false otherwise.

| Name | Type |
|------|------|
| `object` | [Dynamic](/api-docs/headless/Dynamic/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="log"><code><span class="field-name">log</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#log"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Output with timestamp on stdout.

| Name | Type |
|------|------|
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="print"><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deprecated predecessor of console.log.

| Name | Type |
|------|------|
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="puts"><code><span class="field-name">puts</span><span class="parenthesis">(</span><span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#puts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deprecated predecessor of console.log.

| Name | Type |
|------|------|
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="pump"><code><span class="field-name">pump</span><span class="parenthesis">(</span><span class="arg-name">readableStream</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IReadable/" class="type-link">js.node.stream.IReadable</a><span class="operator">,</span> <span class="arg-name">writableStream</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">js.node.stream.IWritable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#pump"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deprecated predecessor of stream.pipe().

| Name | Type | Default |
|------|------|---------|
| `readableStream` | [js.node.stream.IReadable](/api-docs/headless/js/node/stream/IReadable/) | |
| `writableStream` | [js.node.stream.IWritable](/api-docs/headless/js/node/stream/IWritable/) | |
| `callback` | Function | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "util" |

