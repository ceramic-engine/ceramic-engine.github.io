---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Files
target: Headless
permalink: api-docs/headless/ceramic/Files/
---

# Files

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Files.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Files</strong> (Class)</div>

Cross-platform filesystem utilities for Ceramic.

This class provides a uniform API for file system operations across different targets
including native (sys), Node.js, and Electron. Methods automatically detect the runtime
environment and use the appropriate implementation.

Most methods will log a warning if called on unsupported platforms rather than throwing
exceptions, allowing code to be written once and deployed across platforms.

Supported platforms vary by method:
- Native (sys): Full support for all operations
- Node.js: Full support when running in Node environment
- Web + Electron: Support through Electron's Node.js integration
- Other web targets: No filesystem access (methods return defaults)

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/ceramic/Path/">Path</a>, <a href="/api-docs/headless/ceramic/Platform/">Platform</a></div>


## Static Members

<div class="signature field-method has-description" id="haveSameContent"><code><span class="field-name">haveSameContent</span><span class="parenthesis">(</span><span class="arg-name">filePath1</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">filePath2</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#haveSameContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Compares the content of two files for equality.



| Name | Type | Description |
|------|------|-------------|
| `filePath1` | [String](/api-docs/headless/String/) | Path to the first file  |
| `filePath2` | [String](/api-docs/headless/String/) | Path to the second file  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if both files exist and have identical content, false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="haveSameLastModified"><code><span class="field-name">haveSameLastModified</span><span class="parenthesis">(</span><span class="arg-name">filePath1</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">filePath2</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#haveSameLastModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if two files have the same last modified timestamp.

Useful for synchronization and caching operations where timestamp
comparison is more efficient than content comparison.



| Name | Type | Description |
|------|------|-------------|
| `filePath1` | [String](/api-docs/headless/String/) | Path to the first file  |
| `filePath2` | [String](/api-docs/headless/String/) | Path to the second file  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if both files exist and have the same modification time |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setToSameLastModified"><code><span class="field-name">setToSameLastModified</span><span class="parenthesis">(</span><span class="arg-name">srcFilePath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dstFilePath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setToSameLastModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies the last modified timestamp from source file to destination file.

This is useful for maintaining timestamp consistency when copying files
or for cache validation purposes.

@note Currently only supported in Node.js environments

| Name | Type | Description |
|------|------|-------------|
| `srcFilePath` | [String](/api-docs/headless/String/) | Source file to read timestamp from  |
| `dstFilePath` | [String](/api-docs/headless/String/) | Destination file to apply timestamp to  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getFlatDirectory"><code><span class="field-name">getFlatDirectory</span><span class="parenthesis">(</span><span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">excludeSystemFiles</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">subCall</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">recursive</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getFlatDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively lists all files in a directory tree.

Returns a flat array of file paths relative to the input directory.
Directories themselves are not included in the result, only files.

Example:
```haxe
var files = Files.getFlatDirectory("assets/images");
// Returns: ["icon.png", "sprites/player.png", "sprites/enemy.png"]
```



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dir` | [String](/api-docs/headless/String/) | | Root directory to scan  |
| `excludeSystemFiles` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to exclude system files like .DS_Store (default: true)  |
| `subCall` | [Bool](/api-docs/headless/Bool/) | `false` | Internal parameter for recursion (do not use)  |
| `recursive` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to scan subdirectories (default: true)  |

| Returns | Description |
|---------|-------------|
| [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | Array of relative file paths |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getLastModified"><code><span class="field-name">getLastModified</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#getLastModified"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the last modified time of a file.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to the file  |

| Returns | Description |
|---------|-------------|
| [Float](/api-docs/headless/Float/) | Last modified time in seconds since Unix epoch, or -1 if unavailable |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeEmptyDirectories"><code><span class="field-name">removeEmptyDirectories</span><span class="parenthesis">(</span><span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">excludeSystemFiles</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#removeEmptyDirectories"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively removes all empty directories within a directory tree.

This method traverses the directory tree depth-first and removes any
directories that contain no files (optionally ignoring system files).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dir` | [String](/api-docs/headless/String/) | | Root directory to clean  |
| `excludeSystemFiles` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to ignore .DS_Store when checking if empty |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isEmptyDirectory"><code><span class="field-name">isEmptyDirectory</span><span class="parenthesis">(</span><span class="arg-name">dir</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">excludeSystemFiles</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isEmptyDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a directory is empty.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `dir` | [String](/api-docs/headless/String/) | | Directory path to check  |
| `excludeSystemFiles` | [Bool](/api-docs/headless/Bool/) | `true` | Whether to ignore .DS_Store files  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the directory contains no files or subdirectories |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteRecursive"><code><span class="field-name">deleteRecursive</span><span class="parenthesis">(</span><span class="arg-name">toDelete</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteRecursive"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively deletes a file or directory and all its contents.

This is equivalent to `rm -rf` on Unix systems. Use with caution as
deleted files cannot be recovered.



| Name | Type | Description |
|------|------|-------------|
| `toDelete` | [String](/api-docs/headless/String/) | Path to file or directory to delete |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getRelativePath"><code><span class="field-name">getRelativePath</span><span class="parenthesis">(</span><span class="arg-name">absolutePath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">relativeTo</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#getRelativePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Calculates the relative path from one location to another.

Example:
```haxe
var rel = Files.getRelativePath("/home/user/project/src/Main.hx", "/home/user/project");
// Returns: "./src/Main.hx"
```



| Name | Type | Description |
|------|------|-------------|
| `absolutePath` | [String](/api-docs/headless/String/) | The target absolute path  |
| `relativeTo` | [String](/api-docs/headless/String/) | The base path to calculate relative from  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/headless/String/) | The relative path from relativeTo to absolutePath |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyFileWithIntermediateDirs"><code><span class="field-name">copyFileWithIntermediateDirs</span><span class="parenthesis">(</span><span class="arg-name">srcPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dstPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyFileWithIntermediateDirs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copies a file, creating any necessary parent directories.

If the destination directory doesn't exist, it will be created
automatically before copying the file.



| Name | Type | Description |
|------|------|-------------|
| `srcPath` | [String](/api-docs/headless/String/) | Source file path  |
| `dstPath` | [String](/api-docs/headless/String/) | Destination file path |

<hr class="field-separator" />

<div class="signature field-method has-description" id="copyDirectory"><code><span class="field-name">copyDirectory</span><span class="parenthesis">(</span><span class="arg-name">srcDir</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">dstDir</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">removeExisting</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#copyDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Recursively copies a directory and all its contents.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `srcDir` | [String](/api-docs/headless/String/) | | Source directory to copy from  |
| `dstDir` | [String](/api-docs/headless/String/) | | Destination directory to copy to  |
| `removeExisting` | [Bool](/api-docs/headless/Bool/) | `false` | If true, removes existing destination before copying |

<hr class="field-separator" />

<div class="signature field-method has-description" id="deleteFile"><code><span class="field-name">deleteFile</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#deleteFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Deletes a single file.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to the file to delete  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getContent"><code><span class="field-name">getContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads the entire content of a text file as a string.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to the file to read  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[String](/api-docs/headless/String/)> | The file content as a string, or null if unavailable |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getBytes"><code><span class="field-name">getBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads the entire content of a file as binary data.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to the file to read  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/headless/Null/)<[haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/)> | The file content as bytes, or null if unavailable |

<hr class="field-separator" />

<div class="signature field-method has-description" id="saveContent"><code><span class="field-name">saveContent</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveContent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes a string to a file, replacing any existing content.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to the file to write  |
| `content` | [String](/api-docs/headless/String/) | Text content to write to the file |

<hr class="field-separator" />

<div class="signature field-method has-description" id="saveBytes"><code><span class="field-name">saveBytes</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">bytes</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Bytes/" class="type-link">haxe.io.Bytes</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#saveBytes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Writes binary data to a file, replacing any existing content.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to the file to write  |
| `bytes` | [haxe.io.Bytes](/api-docs/headless/haxe/io/Bytes/) | Binary data to write to the file |

<hr class="field-separator" />

<div class="signature field-method has-description" id="createDirectory"><code><span class="field-name">createDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#createDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a directory, including any necessary parent directories.

This method creates the full directory path if it doesn't exist,
similar to `mkdir -p` on Unix systems.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Directory path to create |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exists"><code><span class="field-name">exists</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#exists"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a file or directory exists.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the path exists (file or directory), false otherwise |

<hr class="field-separator" />

<div class="signature field-method has-description" id="isDirectory"><code><span class="field-name">isDirectory</span><span class="parenthesis">(</span><span class="arg-name">path</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#isDirectory"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Checks if a path points to a directory.



| Name | Type | Description |
|------|------|-------------|
| `path` | [String](/api-docs/headless/String/) | Path to check  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/headless/Bool/) | True if the path exists and is a directory, false otherwise |

