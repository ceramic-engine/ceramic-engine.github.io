---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ConsoleInstance
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ConsoleInstance/
---

# ConsoleInstance

<div class="type-hierarchy"><strong>js.html.ConsoleInstance</strong> (extern interface)</div>

The `Console` object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided.

Documentation [Console](https://developer.mozilla.org/en-US/docs/Web/API/Console) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/Console$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/Console></div>


## Instance Members

<div class="signature field-method has-description" id="assert"><code><span class="field-name">assert</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">condition</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Log a message and stack trace to console if the first argument is `false`.

| Name | Type | Default |
|------|------|---------|
| `condition` | [Bool](/api-docs/clay-web/Bool/) | `false` |
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) | |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear the console.

<hr class="field-separator" />

<div class="signature field-method has-description" id="count"><code><span class="field-name">count</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"default"</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Log the number of times this line has been called with the given label.

| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/clay-web/String/) | `"default"` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="countReset"><code><span class="field-name">countReset</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"default"</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#countReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the value of the counter with the given label.

| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/clay-web/String/) | `"default"` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="debug"><code><span class="field-name">debug</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debug"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Outputs a message to the console with the log level `"debug"`.
Note: Starting with Chromium 58 this method only appears in Chromium browser consoles when level "Verbose" is selected.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Outputs an error message. You may use string substitution and additional arguments with this method.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="info"><code><span class="field-name">info</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Informative logging of information. You may use string substitution and additional arguments with this method.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="log"><code><span class="field-name">log</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#log"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For general output of logging information. You may use string substitution and additional arguments with this method.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="table"><code><span class="field-name">table</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#table"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays tabular data as a table.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="trace"><code><span class="field-name">trace</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#trace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Outputs a stack trace.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="warn"><code><span class="field-name">warn</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#warn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Outputs a warning message. You may use string substitution and additional arguments with this method.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dir"><code><span class="field-name">dir</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dirxml"><code><span class="field-name">dirxml</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dirxml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="group"><code><span class="field-name">group</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new inline group, indenting all following output by another level. To move back out a level, call `groupEnd()`.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="groupCollapsed"><code><span class="field-name">groupCollapsed</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#groupCollapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new inline group, indenting all following output by another level. However, unlike `group()` this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call `groupEnd()`.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="groupEnd"><code><span class="field-name">groupEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#groupEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Exits the current inline group.

<hr class="field-separator" />

<div class="signature field-method has-description" id="time"><code><span class="field-name">time</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"default"</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.

| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/clay-web/String/) | `"default"` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeLog"><code><span class="field-name">timeLog</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"default"</span><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeLog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Logs the value of the specified timer to the console.

| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/clay-web/String/) | `"default"` |
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) | |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeEnd"><code><span class="field-name">timeEnd</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a> <span class="operator">=</span> <span class="default-value">"default"</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops the specified timer and logs the elapsed time in seconds since it started.

| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/clay-web/String/) | `"default"` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="exception"><code><span class="field-name">exception</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#exception"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An alias for `error()`.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeStamp"><code><span class="field-name">timeStamp</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeStamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Adds a marker to the browser's Timeline or Waterfall tool.

| Name | Type | Default |
|------|------|---------|
| `data` | [Dynamic](/api-docs/clay-web/Dynamic/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="profile"><code><span class="field-name">profile</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#profile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile.

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="profileEnd"><code><span class="field-name">profileEnd</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/clay-web/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#profileEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).

| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/clay-web/haxe/extern/Rest/) |

