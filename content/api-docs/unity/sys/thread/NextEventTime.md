---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: NextEventTime
target: Unity
permalink: api-docs/unity/sys/thread/NextEventTime/
---

# NextEventTime

<div class="type-hierarchy"><strong>sys.thread.NextEventTime</strong> (Enum)</div>

When an event loop has an available event to execute.

## Constructors

### Now

```haxe
Now
```

There's already an event waiting to be executed

### Never

```haxe
Never
```

No new events are expected.

### AnyTime

```haxe
AnyTime(time: Null<Float>)
```

**Parameters:**

| Name | Type |
|------|------|
| `time` | [Null](/api-docs/unity/Null/)<[Float](/api-docs/unity/Float/)> |

An event is expected to arrive at any time.
If `time` is specified, then the event will be ready at that time for sure.

### At

```haxe
At(time: Float)
```

**Parameters:**

| Name | Type |
|------|------|
| `time` | [Float](/api-docs/unity/Float/) |

An event is expected to be ready for execution at `time`.

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

