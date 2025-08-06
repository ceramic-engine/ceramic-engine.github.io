---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: SpinLock
target: Unity
permalink: api-docs/unity/ceramic/SpinLock/
---

# SpinLock

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/SpinLock.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.SpinLock</strong> (Abstract)</div>

Lightweight spin lock implementation for low-contention thread synchronization.

SpinLock provides a busy-wait synchronization primitive that's more efficient
than traditional mutexes in scenarios with very low lock contention and short
critical sections. Unlike a mutex which puts threads to sleep, a spin lock
keeps the thread active while waiting, continuously checking if the lock
becomes available.

Key characteristics:
- Zero allocation cost (implemented as an abstract over AtomicBool)
- Same API as sys.thread.Mutex for easy drop-in replacement
- Best for protecting very short critical sections
- More CPU-intensive than Mutex when waiting
- No fair scheduling - threads may starve under high contention

When to use SpinLock:
- Lock is held for very short durations (< 1000 CPU cycles)
- Lock contention is expected to be low
- Critical section doesn't perform blocking operations
- You need minimal overhead for lock/unlock operations

When NOT to use SpinLock:
- High lock contention is expected
- Critical sections are long or perform I/O
- Fair thread scheduling is required
- Power consumption is a concern (spinning wastes CPU)

Example usage:
```haxe
class Counter {
    var lock = new SpinLock();
    var value = 0;
    public function increment():Int {
        lock.acquire();
        var result = ++value;
        lock.release();
        return result;
    }
    public function tryIncrement():Bool {
        if (lock.tryAcquire()) {
            value++;
            lock.release();
            return true;
        }
        return false;
    }
}
```

Available only on sys targets with threading support.

<div class="see"><strong>See:</strong> sys.thread.Mutex For traditional mutex with thread sleeping</div>


## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

