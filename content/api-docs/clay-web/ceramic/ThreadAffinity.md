---
layout: api-docs
category: api-docs
subCategory: doc
menu: Ceramic
title: ThreadAffinity
target: Clay (Web)
permalink: api-docs/clay-web/ceramic/ThreadAffinity/
---

# ThreadAffinity

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/runtime/src/ceramic/ThreadAffinity.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.ThreadAffinity</strong> (Abstract)</div>

The kind of CPU cores a thread should run on (see `Runner.setThreadAffinity`), on
devices whose cores are not all the same (big.LITTLE, performance and efficiency
cores).

On Android and Linux, the thread is restricted to these cores. On iOS and macOS, it is
given a quality of service class that leads the system to these cores, without
restricting it. Elsewhere, it has no effect.

## Type Conversions

**From:**
- `[Int](/api-docs/clay-web/Int/)`

**To:**
- `[Int](/api-docs/clay-web/Int/)`

## Metadata

| Name | Parameters |
|------|------------|
| `:enum` | - |

