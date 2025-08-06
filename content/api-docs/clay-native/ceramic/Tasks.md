---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Tasks
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/Tasks/
---

# Tasks

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/Tasks.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.Tasks</strong> (Class)</div>

Utility class for running Task instances from command-line arguments.

This class provides a simple task runner system that can execute Task
subclasses by name, typically used for build scripts (`ceramic task` command), asset processing,
or other command-line utilities and not called directly.

Tasks are expected to be in the `tasks` package and extend the Task class.

Usage from command line:
```bash
haxe build.hxml --task MyTaskName
```

Example task implementation:
```haxe
package tasks;

class ProcessAssets extends ceramic.Task {
    override function run():Void {
        // Process assets...
        if (success) {
            done();
        } else {
            fail("Failed to process assets");
        }
    }
}
```

## Static Members

<div class="signature field-method has-description" id="runFromArgs"><code><span class="field-name">runFromArgs</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#runFromArgs"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parse command-line arguments and run the specified task.

Looks for `--task TaskName` in the command-line arguments and runs
the corresponding task class from the `tasks` package.

If no task argument is found, logs a warning.
If the task fails or throws an exception, the process exits with code -1.
If the task completes successfully, the process exits with code 0.

<hr class="field-separator" />

<div class="signature field-method has-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="arg-name">taskName</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Run a task by name.



| Name | Type | Description |
|------|------|-------------|
| `taskName` | [String](/api-docs/clay-native/String/) | The name of the task class to run (without the `tasks.` package prefix). The class must exist in the `tasks` package and extend ceramic.Task. * The task lifecycle: 1. Resolves the task class by name from the `tasks` package 2. Creates an instance of the task 3. Sets up done/fail handlers that exit the process 4. Calls the task's run() method * Process exit codes: - 0: Task completed successfully - -1: Task failed, was not found, or threw an exception |

