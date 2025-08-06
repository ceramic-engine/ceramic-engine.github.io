---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: IMessageSink
target: Unity
permalink: api-docs/unity/cs/system/runtime/remoting/messaging/IMessageSink/
---

# IMessageSink

<div class="type-hierarchy"><strong>cs.system.runtime.remoting.messaging.IMessageSink</strong> (extern interface)</div>

## Instance Members

<div class="signature field-var no-description" id="NextSink"><code><span class="field-name">NextSink</span><span class="operator">:</span> <a href="#" class="type-link">IMessageSink</a></code><a class="header-anchor" href="#NextSink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="SyncProcessMessage"><code><span class="field-name">SyncProcessMessage</span><span class="parenthesis">(</span><span class="arg-name">msg</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/" class="type-link">IMessage</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/" class="type-link">IMessage</a></code><a class="header-anchor" href="#SyncProcessMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `msg` | [IMessage](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/) |

| Returns |
|---------|
| [IMessage](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="AsyncProcessMessage"><code><span class="field-name">AsyncProcessMessage</span><span class="parenthesis">(</span><span class="arg-name">msg</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/" class="type-link">IMessage</a><span class="operator">,</span> <span class="arg-name">replySink</span><span class="operator">:</span> <a href="#" class="type-link">IMessageSink</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/runtime/remoting/messaging/IMessageCtrl/" class="type-link">IMessageCtrl</a></code><a class="header-anchor" href="#AsyncProcessMessage"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `msg` | [IMessage](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/) |
| `replySink` | [IMessageSink](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessageSink/) |

| Returns |
|---------|
| [IMessageCtrl](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessageCtrl/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

