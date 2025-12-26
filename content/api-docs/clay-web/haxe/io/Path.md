---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Path
target: Clay (Web)
permalink: api-docs/clay-web/haxe/io/Path/
---

# Path

<div class="type-hierarchy"><strong>haxe.io.Path</strong> (Class)</div>

This class provides a convenient way of working with paths. It supports the
common path formats:

- `directory1/directory2/filename.extension`
- `directory1\directory2\filename.extension`

## Static Members

<div class="signature field-method has-description" id="directory"><code><span class="field-name">directory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#directory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the directory of `path`.

If the directory is `null`, the empty String `""` is returned.

If `path` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="join"><code><span class="field-name">join</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Joins all paths in `paths` together.

If `paths` is empty, the empty String `""` is returned. Otherwise the
paths are joined with a slash between them.

If `paths` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `paths` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="normalize"><code><span class="field-name">normalize</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#normalize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normalize a given `path` (e.g. turn `'/usr/local/../lib'` into `'/usr/lib'`).

Also replaces backslashes `\` with slashes `/` and afterwards turns
multiple slashes into a single one.

If `path` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addTrailingSlash"><code><span class="field-name">addTrailingSlash</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#addTrailingSlash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a trailing slash to `path`, if it does not have one already.

If the last slash in `path` is a backslash, a backslash is appended to
`path`.

If the last slash in `path` is a slash, or if no slash is found, a slash
is appended to `path`. In particular, this applies to the empty String
`""`.

If `path` is `null`, the result is unspecified.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAbsolute"><code><span class="field-name">isAbsolute</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAbsolute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns `true` if the path is an absolute path, and `false` otherwise.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

## Instance Members

<div class="signature field-var has-description" id="dir"><code><span class="field-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The directory.

This is the leading part of the path that is not part of the file name
and the extension.

Does not end with a `/` or `\` separator.

If the path has no directory, the value is `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="file"><code><span class="field-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#file"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The file name.

This is the part of the part between the directory and the extension.

If there is no file name, e.g. for `".htaccess"` or `"/dir/"`, the value
is the empty String `""`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ext"><code><span class="field-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The file extension.

It is separated from the file name by a dot. This dot is not part of
the extension.

If the path has no extension, the value is `null`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="backslash"><code><span class="field-name">backslash</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#backslash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

`true` if the last directory separator is a backslash, `false` otherwise.

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `Path` instance by parsing `path`.

Path information can be retrieved by accessing the `dir`, `file` and `ext`
properties.

| Name | Type |
|------|------|
| `path` | [String](/api-docs/clay-web/String/) |

