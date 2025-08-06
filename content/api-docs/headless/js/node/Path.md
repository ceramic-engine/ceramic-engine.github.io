---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Path
target: Headless
permalink: api-docs/headless/js/node/Path/
---

# Path

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Path.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.Path</strong> (extern class)</div>

The `path` module provides utilities for working with file and directory paths.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path</div>


## Static Members

<div class="signature field-var has-description" id="delimiter"><code><span class="field-name">delimiter</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#delimiter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Platform-specific path delimiter:

`;` for Windows
`:` for POSIX

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_delimiter</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="posix"><code><span class="field-name">posix</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/_Path/PathModule/" class="type-link">js.node._Path.PathModule</a></code><a class="header-anchor" href="#posix"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.posix` property provides access to POSIX specific implementations of the `path` methods.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_posix</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="sep"><code><span class="field-name">sep</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#sep"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Provides the platform-specific path segment separator:

`\` on Windows
`/` on POSIX

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_sep</div>


<hr class="field-separator" />

<div class="signature field-var has-description" id="win32"><code><span class="field-name">win32</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/_Path/PathModule/" class="type-link">js.node._Path.PathModule</a></code><a class="header-anchor" href="#win32"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path.win32 property provides access to Windows-specific implementations of the path methods.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_win32</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="basename"><code><span class="field-name">basename</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ext</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#basename"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.basename()` methods returns the last portion of a `path`, similar to the Unix `basename` command. Trailing directory separators are ignored, see path.sep.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_basename_path_ext</div>


| Name | Type | Default |
|------|------|---------|
| `path` | [String](/api-docs/headless/String/) | |
| `ext` | [String](/api-docs/headless/String/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dirname"><code><span class="field-name">dirname</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#dirname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.dirname()` method returns the directory name of a `path`, similar to the Unix `dirname` command. Trailing directory separators are ignored, see path.sep.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_dirname_path</div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extname"><code><span class="field-name">extname</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#extname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.extname()` method returns the extension of the `path`, from the last occurrence of the `.` (period) character to end of string in the last portion of the `path`.
If there is no `.` in the last portion of the `path`, or if there are no `.` characters other than the first character of the basename of `path` (see `path.basename()`) ,
an empty string is returned.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_extname_path</div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="format"><code><span class="field-name">format</span><span class="parenthesis">(</span><span class="arg-name">pathObject</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/PathObject/" class="type-link">PathObject</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#format"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The path.format() method returns a path string from an object. This is the opposite of path.parse().

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_format_pathobject</div>


| Name | Type |
|------|------|
| `pathObject` | [PathObject](/api-docs/headless/js/node/PathObject/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAbsolute"><code><span class="field-name">isAbsolute</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAbsolute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.isAbsolute()` method determines if `path` is an absolute path.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_isabsolute_path</div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="join"><code><span class="field-name">join</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.join()` method joins all given `path` segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_join_paths</div>


| Name | Type |
|------|------|
| `paths` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="normalize"><code><span class="field-name">normalize</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#normalize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.normalize()` method normalizes the given `path`, resolving `'..'` and `'.'` segments.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_normalize_path</div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/PathObject/" class="type-link">PathObject</a></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.parse()` method returns an object whose properties represent significant elements of the `path`. Trailing directory separators are ignored, see path.sep.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_parse_path</div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [PathObject](/api-docs/headless/js/node/PathObject/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="relative"><code><span class="field-name">relative</span><span class="parenthesis">(</span><span class="arg-name">from</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">to</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#relative"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.relative()` method returns the relative path from `from` to `to` based on the current working directory.
If `from` and `to` each resolve to the same path (after calling path.resolve() on each), a zero-length string is returned.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_relative_from_to</div>


| Name | Type |
|------|------|
| `from` | [String](/api-docs/headless/String/) |
| `to` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resolve"><code><span class="field-name">resolve</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#resolve"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `path.resolve()` method resolves a sequence of paths or path segments into an absolute path.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_resolve_paths</div>


| Name | Type |
|------|------|
| `paths` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="toNamespacedPath"><code><span class="field-name">toNamespacedPath</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#toNamespacedPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

On Windows systems only, returns an equivalent namespace-prefixed path for the given `path`. If `path` is not a string, `path` will be returned without modifications.

<div class="see"><strong>See:</strong> https://nodejs.org/api/path.html#path_path_tonamespacedpath_path</div>


| Name | Type |
|------|------|
| `path` | [String](/api-docs/headless/String/) |

| Returns |
|---------|
| [String](/api-docs/headless/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "path" |

