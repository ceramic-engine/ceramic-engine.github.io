---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: Console
target: Headless
permalink: api-docs/headless/js/node/console/Console/
---

# Console

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/console/Console.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.console.Console</strong> (extern class)</div>

The `Console` class can be used to create a simple logger with configurable output streams
and can be accessed using either `require('console').Console` or `console.Console` (or their destructured counterparts):

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_class_console</div>


## Instance Members

<div class="signature field-method has-description" id="assert"><code><span class="field-name">assert</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#assert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

A simple assertion test that verifies whether `value` is truthy. If it is not, `Assertion` failed is logged.
If provided, the error `message` is formatted using `util.format()` by passing along all message arguments. The output is used as the error message.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_assert_value_message</div>


| Name | Type |
|------|------|
| `value` | [Dynamic](/api-docs/headless/Dynamic/) |
| `message` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="clear"><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When `stdout` is a TTY, calling `console.clear()` will attempt to clear the TTY. When `stdout` is not a TTY, this method does nothing.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_clear</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="count"><code><span class="field-name">count</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maintains an internal counter specific to `label` and outputs to `stdout` the number of times `console.count()` has been called with the given `label`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_count_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="countReset"><code><span class="field-name">countReset</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#countReset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resets the internal counter specific to `label`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_countreset_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="debug"><code><span class="field-name">debug</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#debug"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `console.debug()` function is an alias for `console.log()`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_debug_data_args</div>


| Name | Type |
|------|------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dir"><code><span class="field-name">dir</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/headless/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/headless/js/node/InspectOptionsBase/" class="type-link">js.node.InspectOptionsBase</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dir"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Uses util.inspect() on `obj` and prints the resulting string to `stdout`. This function bypasses any custom `inspect()` function defined on `obj`.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_dir_obj_options</div>


| Name | Type | Default |
|------|------|---------|
| `obj` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `options` | [Null](/api-docs/headless/Null/)<[js.node.InspectOptionsBase](/api-docs/headless/js/node/InspectOptionsBase/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dirxml"><code><span class="field-name">dirxml</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dirxml"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method calls `console.log()` passing it the arguments received. This method does not produce any XML formatting.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_dirxml_data</div>


| Name | Type |
|------|------|
| `data` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="error"><code><span class="field-name">error</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#error"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints to `stderr` with newline. Multiple arguments can be passed,
with the first used as the primary message and all additional used as substitution values similar to printf(3)
(the arguments are all passed to util.format()).

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_error_data_args</div>


| Name | Type |
|------|------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="group"><code><span class="field-name">group</span><span class="parenthesis">(</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#group"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

If one or more `label`s are provided, those are printed first without the additional indentation.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_group_label</div>


| Name | Type |
|------|------|
| `label` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="groupCollapsed"><code><span class="field-name">groupCollapsed</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#groupCollapsed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

An alias for console.group().

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_groupcollapsed</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="groupEnd"><code><span class="field-name">groupEnd</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#groupEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Decreases indentation of subsequent lines by two spaces.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_groupend</div>


<hr class="field-separator" />

<div class="signature field-method has-description" id="info"><code><span class="field-name">info</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#info"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `console.info()` function is an alias for console.log().

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_info_data_args</div>


| Name | Type |
|------|------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="log"><code><span class="field-name">log</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#log"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints to `stdout` with newline. Multiple arguments can be passed,
with the first used as the primary message and all additional used as substitution values similar to printf(3)
(the arguments are all passed to util.format()).

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_log_data_args</div>


| Name | Type |
|------|------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="table"><code><span class="field-name">table</span><span class="parenthesis">(</span><span class="arg-name">tabularData</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">properties</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#table"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Try to construct a table with the columns of the properties of `tabularData` (or use `properties`)
and rows of `tabularData` and log it. Falls back to just logging the argument if it can’t be parsed as tabular.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_table_tabulardata_properties</div>


| Name | Type | Default |
|------|------|---------|
| `tabularData` | [Dynamic](/api-docs/headless/Dynamic/) | |
| `properties` | [Array](/api-docs/headless/Array/)<[String](/api-docs/headless/String/)> | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="time"><code><span class="field-name">time</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#time"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts a timer that can be used to compute the duration of an operation. Timers are identified by a unique `label`.
Use the same `label` when calling console.timeEnd() to stop the timer and output the elapsed time in milliseconds to `stdout`.
Timer durations are accurate to the sub-millisecond.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_time_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeEnd"><code><span class="field-name">timeEnd</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Stops a timer that was previously started by calling console.time() and prints the result to `stdout`:

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_timeend_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeLog"><code><span class="field-name">timeLog</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeLog"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

For a timer that was previously started by calling console.time(), prints the elapsed time and other `data` arguments to `stdout`:

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_timelog_label_data</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |
| `data` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) | |

<hr class="field-separator" />

<div class="signature field-method has-description" id="trace"><code><span class="field-name">trace</span><span class="parenthesis">(</span><span class="arg-name">message</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#trace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints to `stderr` the string `'Trace: '`, followed by the util.format() formatted message and stack trace to the current position in the code.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_trace_message_args</div>


| Name | Type |
|------|------|
| `message` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="warn"><code><span class="field-name">warn</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/headless/Dynamic/" class="type-link">Dynamic</a><span class="operator">,</span> <span class="arg-name">args</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/extern/Rest/" class="type-link">haxe.extern.Rest</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#warn"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The `console.warn()` function is an alias for console.error().

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_warn_data_args</div>


| Name | Type |
|------|------|
| `data` | [Dynamic](/api-docs/headless/Dynamic/) |
| `args` | [haxe.extern.Rest](/api-docs/headless/haxe/extern/Rest/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="markTimeline"><code><span class="field-name">markTimeline</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#markTimeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method does not display anything unless used in the inspector. The `console.markTimeline()` method is the deprecated form of console.timeStamp().

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_marktimeline_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="profile"><code><span class="field-name">profile</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#profile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method does not display anything unless used in the inspector.
The `console.profile()` method starts a JavaScript CPU profile with an optional label until console.profileEnd() is called.
The profile is then added to the Profile panel of the inspector.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_profile_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="profileEnd"><code><span class="field-name">profileEnd</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#profileEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method does not display anything unless used in the inspector.
Stops the current JavaScript CPU profiling session if one has been started and prints the report to the Profiles panel of the inspector.
See console.profile() for an example.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_profileend_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeStamp"><code><span class="field-name">timeStamp</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeStamp"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method does not display anything unless used in the inspector.
The `console.timeStamp()` method adds an event with the label `'label'` to the Timeline panel of the inspector.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_timestamp_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timeline"><code><span class="field-name">timeline</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timeline"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method does not display anything unless used in the inspector. The `console.timeline()` method is the deprecated form of console.time().

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_timeline_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="timelineEnd"><code><span class="field-name">timelineEnd</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">label</span><span class="operator">:</span> <a href="/api-docs/headless/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#timelineEnd"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

This method does not display anything unless used in the inspector. The `console.timelineEnd()` method is the deprecated form of console.timeEnd().

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_console_timelineend_label</div>


| Name | Type | Default |
|------|------|---------|
| `label` | [String](/api-docs/headless/String/) | *(optional)* |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">stdout</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">js.node.stream.IWritable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">stderr</span><span class="operator">:</span> <a href="/api-docs/headless/js/node/stream/IWritable/" class="type-link">js.node.stream.IWritable</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">ignoreerrors</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new `Console` with one or two writable stream instances. `stdout` is a writable stream to print log or info output.
`stderr` is used for warning or error output. If `stderr` is not provided, `stdout` is used for stderr.

<div class="see"><strong>See:</strong> https://nodejs.org/api/console.html#console_new_console_stdout_stderr_ignoreerrors</div>


| Name | Type | Default |
|------|------|---------|
| `stdout` | [js.node.stream.IWritable](/api-docs/headless/js/node/stream/IWritable/) | |
| `stderr` | [js.node.stream.IWritable](/api-docs/headless/js/node/stream/IWritable/) | *(optional)* |
| `ignoreerrors` | [Bool](/api-docs/headless/Bool/) | *(optional)* |

## Metadata

| Name | Parameters |
|------|------------|
| `:jsRequire` | "console", "Console" |

