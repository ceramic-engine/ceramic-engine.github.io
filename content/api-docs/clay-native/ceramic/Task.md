---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Task
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Task/
---

# Task

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Task.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/clay-native/ceramic/Entity/">Entity</a> → <strong>ceramic.Task</strong> (Class)</div>

Base class for asynchronous tasks that can either succeed or fail.
Tasks are single-use operations that call done() or fail() when completed.

Custom tasks should extend this class and override the run() method:
```haxe
class MyAsyncTask extends Task {
    override function run():Void {
        someAsyncOperation((success, result) -> {
            if (success) {
                this.result = result;
                done();
            } else {
                fail("Operation failed");
            }
        });
    }
}
```

They are typically not called directly and triggered using `ceramic task` command instead.

## Instance Members

<div class="signature field-method has-description" id="done"><code><span class="field-name">done</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#done"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mark the task as successfully completed.
This will emit the done event. Should only be called once per task.

Typically called from within the run() implementation when the
asynchronous operation completes successfully.

<hr class="field-separator" />

<div class="signature field-method has-description" id="fail"><code><span class="field-name">fail</span><span class="parenthesis">(</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#fail"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Mark the task as failed.
This will emit the fail event with the given reason. Should only be called once per task.



| Name | Type | Description |
|------|------|-------------|
| `reason` | [String](/api-docs/clay-native/String/) | A human-readable description of why the task failed. This should help developers understand what went wrong. |

<hr class="field-separator" />

<div class="signature field-method has-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Execute the task.
This method must be overridden in subclasses to implement the actual task logic.

The implementation should:
- Start the asynchronous operation
- Call done() when the operation succeeds
- Call fail(reason) when the operation fails

The default implementation fails with an error message.

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-method has-description" id="emitDone"><code><span class="field-name">emitDone</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the task completes successfully.
After this event is emitted, the task should not be reused.

<hr class="field-separator" />

<div class="signature field-method has-description" id="emitFail"><code><span class="field-name">emitFail</span><span class="parenthesis">(</span><span class="arg-name">reason</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFail"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Emitted when the task fails to complete.


| Name | Type | Description |
|------|------|-------------|
| `reason` | [String](/api-docs/clay-native/String/) | A human-readable description of why the task failed |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |

