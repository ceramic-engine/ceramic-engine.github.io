---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: Tasks
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/Tasks/
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

