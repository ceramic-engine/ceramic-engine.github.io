---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Process
target: Headless
permalink: api-docs/headless/js/node/Process/
---

# Process

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/Process.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/js/node/events/EventEmitter/">js.node.events.EventEmitter</a> → <strong>js.node.Process</strong> (extern class)</div>

## Instance Members

<div class="signature field-var has-description" id="stdout"><code><span class="field-name">stdout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">js.node.stream.IWritable</a></code><a class="header-anchor" href="#stdout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Writable Stream to stdout.

`stderr` and `stdout` are unlike other streams in Node in that writes to them are usually blocking.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stderr"><code><span class="field-name">stderr</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">js.node.stream.IWritable</a></code><a class="header-anchor" href="#stderr"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A writable stream to stderr.

`stderr` and `stdout` are unlike other streams in Node in that writes to them are usually blocking.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stdin"><code><span class="field-name">stdin</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IReadable/" class="type-link">js.node.stream.IReadable</a></code><a class="header-anchor" href="#stdin"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A Readable Stream for stdin.

<hr class="field-separator" />

<div class="signature field-var has-description" id="argv"><code><span class="field-name">argv</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#argv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An array containing the command line arguments.
The first element will be `node`, the second element will be the name of the JavaScript file.
The next elements will be any additional command line arguments.

E.g:
$ node process-2.js one two=three four
0: node
1: /Users/mjr/work/node/process-2.js
2: one
3: two=three
4: four

<hr class="field-separator" />

<div class="signature field-var has-description" id="execPath"><code><span class="field-name">execPath</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#execPath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the absolute pathname of the executable that started the process.

<hr class="field-separator" />

<div class="signature field-var has-description" id="execArgv"><code><span class="field-name">execArgv</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#execArgv"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This is the set of node-specific command line options from the executable that started the process.
These options do not show up in `argv`, and do not include the node executable, the name of the script,
or any options following the script name.

These options are useful in order to spawn child processes with the same execution environment as the parent.

<hr class="field-separator" />

<div class="signature field-var has-description" id="env"><code><span class="field-name">env</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#env"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An object containing the user environment. See environ(7).

<hr class="field-separator" />

<div class="signature field-var has-description" id="exitCode"><code><span class="field-name">exitCode</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#exitCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A number which will be the process exit code, when the process either exits gracefully,
or is exited via `process.exit()` without specifying a code.

Specifying a code to `process.exit(code)` will override any previous setting of `process.exitCode`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="version"><code><span class="field-name">version</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#version"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A compiled-in property that exposes NODE_VERSION.

<hr class="field-separator" />

<div class="signature field-var has-description" id="versions"><code><span class="field-name">versions</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/DynamicAccess/" class="type-link">haxe.DynamicAccess</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#versions"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A property exposing version strings of node and its dependencies.

<hr class="field-separator" />

<div class="signature field-var has-description" id="config"><code><span class="field-name">config</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#config"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An Object containing the JavaScript representation of the configure options that were used to compile the current node executable.
This is the same as the "config.gypi" file that was produced when running the ./configure script.

<hr class="field-separator" />

<div class="signature field-var has-description" id="pid"><code><span class="field-name">pid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#pid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The PID of the process.

<hr class="field-separator" />

<div class="signature field-var has-description" id="title"><code><span class="field-name">title</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#title"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Getter/setter to set what is displayed in 'ps'.

When used as a setter, the maximum length is platform-specific and probably short.
On Linux and OS X, it's limited to the size of the binary name plus the length of the
command line arguments because it overwrites the argv memory.

<hr class="field-separator" />

<div class="signature field-var has-description" id="arch"><code><span class="field-name">arch</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#arch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

What processor architecture you're running on: 'arm', 'ia32', or 'x64'.

<hr class="field-separator" />

<div class="signature field-var has-description" id="platform"><code><span class="field-name">platform</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#platform"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'

<hr class="field-separator" />

<div class="signature field-var has-description" id="ppid"><code><span class="field-name">ppid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ppid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The PID of the parent process

<hr class="field-separator" />

<div class="signature field-var has-description" id="release"><code><span class="field-name">release</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Release/" class="type-link">Release</a></code><a class="header-anchor" href="#release"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The metadata of the current release

<hr class="field-separator" />

<div class="signature field-var has-description" id="report"><code><span class="field-name">report</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Report/" class="type-link">Report</a></code><a class="header-anchor" href="#report"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Used for diagnostic reports

<hr class="field-separator" />

<div class="signature field-var has-description" id="mainModule"><code><span class="field-name">mainModule</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/Module/" class="type-link">Module</a></code><a class="header-anchor" href="#mainModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alternate way to retrieve require.main. The difference is that if the main module changes at runtime,
require.main might still refer to the original main module in modules that were required
before the change occurred. Generally it's safe to assume that the two refer to the same module.

As with require.main, it will be undefined if there was no entry script.

<hr class="field-separator" />

<div class="signature field-var has-description" id="noDeprecation"><code><span class="field-name">noDeprecation</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#noDeprecation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Disable run-time deprecation warnings.
See `Util.deprecate`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="traceDeprecation"><code><span class="field-name">traceDeprecation</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#traceDeprecation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable logging of deprecation warnings.
See `Util.deprecate`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="throwDeprecation"><code><span class="field-name">throwDeprecation</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#throwDeprecation"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Throw on deprecated API usage.
See `Util.deprecate`.

<hr class="field-separator" />

<div class="signature field-method has-description" id="abort"><code><span class="field-name">abort</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#abort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This causes node to emit an abort. This will cause node to exit and generate a core file.

<hr class="field-separator" />

<div class="signature field-method has-description" id="chdir"><code><span class="field-name">chdir</span><span class="parenthesis">(</span><span class="arg-name">directory</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#chdir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Changes the current working directory of the process or throws an exception if that fails.

| Name | Type |
|------|------|
| `directory` | [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="cwd"><code><span class="field-name">cwd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a></code><a class="header-anchor" href="#cwd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current working directory of the process.
| Returns |
|---------|
| [String](/api-docs/headless/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exit"><code><span class="field-name">exit</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ends the process with the specified `code`. If the `code` is omitted, exit uses either the
'success' code `0` or the value of `process.exitCode` if specified.

| Name | Type | Default |
|------|------|---------|
| `code` | [Int](/api-docs/headless/Int/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getgid"><code><span class="field-name">getgid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getgid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the group identity of the process. See getgid(2).
Note: this function is only available on POSIX platforms (i.e. not Windows)
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setgid"><code><span class="field-name">setgid</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setgid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the group identity of the process. See setgid(2).
This accepts either a numerical ID or a groupname string.
If a groupname is specified, this method blocks while resolving it to a numerical ID.

Note: this function is only available on POSIX platforms (i.e. not Windows)

| Name | Type |
|------|------|
| `id` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getuid"><code><span class="field-name">getuid</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#getuid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Gets the user identity of the process. See getuid(2).
Note: this function is only available on POSIX platforms (i.e. not Windows)
| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setuid"><code><span class="field-name">setuid</span><span class="parenthesis">(</span><span class="arg-name">id</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setuid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the user identity of the process. See setuid(2).
This accepts either a numerical ID or a username string.
If a username is specified, this method blocks while resolving it to a numerical ID.

Note: this function is only available on POSIX platforms (i.e. not Windows)

| Name | Type |
|------|------|
| `id` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getgroups"><code><span class="field-name">getgroups</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#getgroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an array with the supplementary group IDs.
POSIX leaves it unspecified if the effective group ID is included but node.js ensures it always is.
Note: this function is only available on POSIX platforms (i.e. not Windows)
| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[Int](/api-docs/headless/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="setgroups"><code><span class="field-name">setgroups</span><span class="parenthesis">(</span><span class="arg-name">groups</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#setgroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the supplementary group IDs.
This is a privileged operation, meaning you need to be root or have the CAP_SETGID capability.

Note: this function is only available on POSIX platforms (i.e. not Windows)
The list can contain group IDs, group names or both.

| Name | Type |
|------|------|
| `groups` | [Array](/api-docs/headless/Array/)<[haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Int](/api-docs/headless/Int/)>> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="initgroups"><code><span class="field-name">initgroups</span><span class="parenthesis">(</span><span class="arg-name">user</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">extra_group</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/EitherType/" class="type-link">haxe.extern.EitherType</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#initgroups"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reads /etc/group and initializes the group access list, using all groups of which the user is a member.
This is a privileged operation, meaning you need to be root or have the CAP_SETGID capability.

Note: this function is only available on POSIX platforms (i.e. not Windows)

| Name | Type |
|------|------|
| `user` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Int](/api-docs/headless/Int/)> |
| `extra_group` | [haxe.extern.EitherType](/api-docs/headless/haxe/extern/EitherType/)<[String](/api-docs/headless/String/), [Int](/api-docs/headless/Int/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="kill"><code><span class="field-name">kill</span><span class="parenthesis">(</span><span class="arg-name">pid</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">signal</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#kill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Send a signal to a process.
`pid` is the process id and `signal` is the string describing the signal to send. Signal names are strings like 'SIGINT' or 'SIGHUP'.

If omitted, the `signal` will be 'SIGTERM'. See Signal Events and kill(2) for more information.

Will throw an error if target does not exist, and as a special case,
a signal of 0 can be used to test for the existence of a process.

Note that just because the name of this function is `kill`, it is really just a signal sender, like the kill system call.
The signal sent may do something other than kill the target process.

| Name | Type | Default |
|------|------|---------|
| `pid` | [Int](/api-docs/headless/Int/) | |
| `signal` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="memoryUsage"><code><span class="field-name">memoryUsage</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/MemoryUsage/" class="type-link">MemoryUsage</a></code><a class="header-anchor" href="#memoryUsage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns an object describing the memory usage of the Node process measured in bytes.
| Returns |
|---------|
| [MemoryUsage](/api-docs/headless/js/node/MemoryUsage/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="nextTick"><code><span class="field-name">nextTick</span><span class="parenthesis">(</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#nextTick"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

On the next loop around the event loop call this callback.
This is not a simple alias to setTimeout(fn, 0), it's much more efficient.
It typically runs before any other I/O events fire, but there are some exceptions.

This is important in developing APIs where you want to give the user the chance to
assign event handlers after an object has been constructed, but before any I/O has occurred.

| Name | Type |
|------|------|
| `callback` | Function |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="umask"><code><span class="field-name">umask</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">mask</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#umask"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets or reads the process's file mode creation mask.
Child processes inherit the mask from the parent process.
Returns the old mask if mask argument is given, otherwise returns the current mask.

| Name | Type | Default |
|------|------|---------|
| `mask` | [Int](/api-docs/headless/Int/) | *(optional)* |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="uptime"><code><span class="field-name">uptime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#uptime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of seconds Node has been running.
| Returns |
|---------|
| [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hrtime"><code><span class="field-name">hrtime</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#hrtime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array.
It is relative to an arbitrary time in the past.
It is not related to the time of day and therefore not subject to clock drift.
The primary use is for measuring performance between intervals.
You may pass in the result of a previous call to `hrtime` to get a diff reading,
useful for benchmarks and measuring intervals
| Returns |
|---------|
| [Array](/api-docs/headless/Array/)<[Float](/api-docs/headless/Float/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="send"><code><span class="field-name">send</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#send"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Send a message to the parent process.

Only available for child processes. See `ChildProcess.send`.

| Name | Type | Default |
|------|------|---------|
| `message` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `callback` | Function | *(optional)* |

| Returns |
|---------|
| [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="disconnect"><code><span class="field-name">disconnect</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#disconnect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Close the IPC channel to parent process.

Only available for child processes. See `ChildProcess.disconnect`.

