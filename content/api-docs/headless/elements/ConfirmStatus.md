---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: ConfirmStatus
target: Headless
permalink: api-docs/headless/elements/ConfirmStatus/
---

# ConfirmStatus

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/ConfirmStatus.hx">View source</a></div>

<div class="type-hierarchy"><strong>elements.ConfirmStatus</strong> (Abstract)</div>

Represents the status of a confirmation dialog or action.

This abstract type encodes different states using integer values:
- Positive values (>= 0): Custom confirmation with index
- 0: Standard confirmation
- -1: Pending/incomplete state
- -2: Canceled state

Can be implicitly converted to Bool (true when confirmed).

<div class="see"><strong>See:</strong> PromptStatus For text input dialogs, ListStatus For list selection dialogs</div>


## Type Conversions

**From:**
- `[Int](/api-docs/headless/Int/)`

**To:**
- `[Int](/api-docs/headless/Int/)`

