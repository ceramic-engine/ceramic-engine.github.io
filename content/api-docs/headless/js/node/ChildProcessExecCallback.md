---
layout: api-docs
category: api-docs
subCategory: doc
menu: Hxnodejs
title: ChildProcessExecCallback
target: Headless
permalink: api-docs/headless/js/node/ChildProcessExecCallback/
---

# ChildProcessExecCallback

<div class="view-source"><a href="https://github.com/ceramic-engine/hxnodejs/blob/master/src/js/node/ChildProcess.hx">View source</a></div>

<div class="type-hierarchy"><strong>js.node.ChildProcessExecCallback</strong> (Typedef)</div>

A callback type for `ChildProcess.exec`.
It receives three arguments: `error`, `stdout`, `stderr`.

On success, error will be `null`. On error, `error` will be an instance of `Error`
and `error.code` will be the exit code of the child process, and `error.signal` will be set
to the signal that terminated the process (see `ChildProcessExecError`).

