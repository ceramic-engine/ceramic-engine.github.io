---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Host
target: Clay (Native)
permalink: api-docs/clay-native/sys/net/Host/
---

# Host

<div class="type-hierarchy"><strong>sys.net.Host</strong> (Class)</div>

A given IP host name.

## Instance Members

<div class="signature field-var has-description" id="host"><code><span class="field-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#host"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The provided host string.

<hr class="field-separator" />

<div class="signature field-var has-description" id="ip"><code><span class="field-name">ip</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ip"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The actual IP corresponding to the host.

<hr class="field-separator" />

<div class="signature field-method has-description" id="toString"><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns the IP representation of the host
| Returns |
|---------|
| [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Host : the name can be an IP in the form "127.0.0.1" or an host name such as "google.com", in which case
the corresponding IP address is resolved using DNS. An exception occur if the host name could not be found.

| Name | Type |
|------|------|
| `name` | [String](/api-docs/clay-native/String/) |

## Private Members

<div class="signature field-var no-description" id="ipv6"><code><span class="field-name">ipv6</span><span class="operator">:</span> <a href="/api-docs/clay-native/haxe/io/BytesData/" class="type-link">haxe.io.BytesData</a></code><a class="header-anchor" href="#ipv6"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

