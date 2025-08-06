---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Path
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Path/
---

# Path

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Path.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Path</strong> (Class)</div>

Cross-platform path manipulation utilities optimized for Ceramic.

This class provides a convenient way of working with file and directory paths
across different platforms. It is a modified version of haxe.io.Path that doesn't
depend on regular expressions (EReg), making it more efficient for frequent path
operations in game development.

Supports common path formats:
- Unix/Mac/Linux: `directory1/directory2/filename.extension`
- Windows: `directory1\directory2\filename.extension`
- Windows absolute: `C:\directory\file.ext`
- Network paths: `\\server\share\file.ext`

Example usage:
```haxe
// Parse a path
var path = new Path("assets/images/player.png");
trace(path.dir);  // "assets/images"
trace(path.file); // "player"
trace(path.ext);  // "png"

// Manipulate paths
var newPath = Path.withExtension("image.jpg", "png"); // "image.png"
var joined = Path.join(["assets", "sounds", "music.ogg"]); // "assets/sounds/music.ogg"
var normalized = Path.normalize("/usr/local/../lib"); // "/usr/lib"

// Check path properties
if (Path.isAbsolute("/home/user")) {
    trace("Absolute path");
}
```

<div class="see"><strong>See:</strong> ceramic.Files For file system operations, ceramic.Assets For asset path management</div>


## Static Members

<div class="signature field-method has-description" id="withoutExtension"><code><span class="field-name">withoutExtension</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#withoutExtension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes the file extension from a path string.

Example:
```haxe
Path.withoutExtension("image.png"); // "image"
Path.withoutExtension("path/to/file.txt"); // "path/to/file"
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The path without its extension |

<hr class="field-separator" />

<div class="signature field-method has-description" id="withoutDirectory"><code><span class="field-name">withoutDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#withoutDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts only the filename and extension from a path.

Example:
```haxe
Path.withoutDirectory("/home/user/file.txt"); // "file.txt"
Path.withoutDirectory("assets/image.png"); // "image.png"
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The filename with extension, without directory |

<hr class="field-separator" />

<div class="signature field-method has-description" id="directory"><code><span class="field-name">directory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#directory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the directory portion of a path.

Example:
```haxe
Path.directory("/home/user/file.txt"); // "/home/user"
Path.directory("file.txt"); // ""
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The directory portion, or empty string if none |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extension"><code><span class="field-name">extension</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#extension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts the file extension from a path.

Example:
```haxe
Path.extension("image.png"); // "png"
Path.extension("archive.tar.gz"); // "gz"
Path.extension("README"); // ""
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The extension without dot, or empty string if none |

<hr class="field-separator" />

<div class="signature field-method has-description" id="withExtension"><code><span class="field-name">withExtension</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#withExtension"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Changes or adds a file extension to a path.

Example:
```haxe
Path.withExtension("image.jpg", "png"); // "image.png"
Path.withExtension("document", "pdf"); // "document.pdf"
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to modify  |
| `ext` | [String](/api-docs/clay-web/String/) | The new extension (without dot)  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The path with the new extension |

<hr class="field-separator" />

<div class="signature field-method has-description" id="join"><code><span class="field-name">join</span><span class="parenthesis">(</span><span class="arg-name">paths</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#join"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Joins multiple path segments into a single path.

Automatically adds separators between segments and normalizes
the result. Empty segments are filtered out.

Example:
```haxe
Path.join(["assets", "images", "player.png"]); // "assets/images/player.png"
Path.join(["/home", "user", "docs"]); // "/home/user/docs"
```



| Name | Type | Description |
|------|------|-------------|
| `paths` | [Array](/api-docs/clay-web/Array/)<[String](/api-docs/clay-web/String/)> | Array of path segments to join  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The joined and normalized path |

<hr class="field-separator" />

<div class="signature field-method has-description" id="normalize"><code><span class="field-name">normalize</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#normalize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Normalizes a path by resolving relative segments and cleaning separators.

Operations performed:
- Converts all backslashes to forward slashes
- Resolves `.` (current directory) and `..` (parent directory) segments
- Removes duplicate slashes (except after colons for Windows drives)
- Preserves absolute path indicators

Example:
```haxe
Path.normalize("/usr/local/../lib"); // "/usr/lib"
Path.normalize("./assets//images/."); // "assets/images"
Path.normalize("C:\\Users\\..\\Windows"); // "C:/Windows"
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to normalize  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The normalized path |

<hr class="field-separator" />

<div class="signature field-method has-description" id="addTrailingSlash"><code><span class="field-name">addTrailingSlash</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#addTrailingSlash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ensures a path ends with a directory separator.

The type of separator added matches the existing separators in the path:
- If the last separator is a backslash, adds a backslash
- Otherwise, adds a forward slash
- Empty string becomes "/"

Example:
```haxe
Path.addTrailingSlash("dir"); // "dir/"
Path.addTrailingSlash("C:\\Windows"); // "C:\\Windows\\"
Path.addTrailingSlash("dir/"); // "dir/" (unchanged)
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The path with a trailing separator |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeTrailingSlashes"><code><span class="field-name">removeTrailingSlashes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#removeTrailingSlashes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Removes all trailing directory separators from a path.

Strips any combination of trailing forward slashes and backslashes.

Example:
```haxe
Path.removeTrailingSlashes("dir/"); // "dir"
Path.removeTrailingSlashes("C:\\Windows\\\\"); // "C:\\Windows"
Path.removeTrailingSlashes("file.txt"); // "file.txt" (unchanged)
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to process  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The path without trailing separators |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isAbsolute"><code><span class="field-name">isAbsolute</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isAbsolute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Determines if a path is absolute or relative.

A path is considered absolute if it:
- Starts with `/` (Unix/Mac/Linux)
- Has a drive letter like `C:` (Windows)
- Starts with `\\\\` (Windows network path)

Example:
```haxe
Path.isAbsolute("/home/user"); // true
Path.isAbsolute("C:\\Windows"); // true
Path.isAbsolute("\\\\server\\share"); // true
Path.isAbsolute("relative/path"); // false
Path.isAbsolute("./file.txt"); // false
```



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if the path is absolute, false if relative |

## Instance Members

<div class="signature field-var has-description" id="dir"><code><span class="field-name">dir</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The directory portion of the path.

This is the leading part of the path that is not part of the file name
and the extension. Does not include a trailing `/` or `\` separator.

Examples:
- Path "dir/file.txt" -> dir = "dir"
- Path "file.txt" -> dir = null
- Path "/home/user/file.txt" -> dir = "/home/user"
- Path "C:\\Windows\\file.txt" -> dir = "C:\\Windows"

<hr class="field-separator" />

<div class="signature field-var has-description" id="file"><code><span class="field-name">file</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#file"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The file name without extension.

This is the part of the path between the directory and the extension.
For files that start with a dot (like .htaccess) or paths ending with
a separator, the value is an empty string "".

Examples:
- Path "dir/file.txt" -> file = "file"
- Path ".htaccess" -> file = ""
- Path "/dir/" -> file = ""
- Path "document.tar.gz" -> file = "document.tar"

<hr class="field-separator" />

<div class="signature field-var has-description" id="ext"><code><span class="field-name">ext</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#ext"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The file extension without the leading dot.

The extension is the part after the last dot in the filename.
The separating dot is not included in the extension value.

Examples:
- Path "file.txt" -> ext = "txt"
- Path "archive.tar.gz" -> ext = "gz"
- Path "file" -> ext = null
- Path ".htaccess" -> ext = "htaccess"

<hr class="field-separator" />

<div class="signature field-var has-description" id="backslash"><code><span class="field-name">backslash</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#backslash"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Indicates the type of directory separator used in the original path.

True if the last directory separator found was a backslash (`\\`),
false if it was a forward slash (`/`) or if no separator was found.
This helps preserve the original path style when converting back to string.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reconstructs the path string from its components.

The directory separator used depends on the `backslash` property:
- If true, uses backslash (`\\`) as separator
- If false, uses forward slash (`/`) as separator

Null components are treated as empty strings.


| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The reconstructed path string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Path instance by parsing the given path string.

The path is split into its components (directory, filename, extension)
which can be accessed through the corresponding properties.
Handles both forward slash and backslash separators.

Special cases:
- "." and ".." are treated as directories with empty filenames
- Paths ending with separators have empty filenames



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/clay-web/String/) | The path string to parse |

