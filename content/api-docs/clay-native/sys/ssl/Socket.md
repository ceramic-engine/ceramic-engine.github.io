---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: Socket
target: Clay (Native)
permalink: api-docs/clay-native/sys/ssl/Socket/
---

# Socket

<div class="type-hierarchy"><a href="/api-docs/clay-native/sys/net/Socket/">sys.net.Socket</a> → <strong>sys.ssl.Socket</strong> (Class)</div>

A TLS socket class : allow you to both connect to a given server and exchange messages or start your own server and wait for connections.

## Static Members

<div class="signature field-var no-description" id="DEFAULT_VERIFY_CERT"><code><span class="field-name">DEFAULT_VERIFY_CERT</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#DEFAULT_VERIFY_CERT"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="DEFAULT_CA"><code><span class="field-name">DEFAULT_CA</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/sys/ssl/Certificate/" class="type-link">Certificate</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#DEFAULT_CA"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Instance Members

<div class="signature field-var has-description" id="verifyCert"><code><span class="field-name">verifyCert</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#verifyCert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Define if peer certificate is verified during SSL handshake.

<hr class="field-separator" />

<div class="signature field-method no-description" id="connect"><code><span class="field-name">connect</span><span class="parenthesis">(</span><span class="arg-name">host</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/net/Host/" class="type-link">sys.net.Host</a><span class="operator">,</span> <span class="arg-name">port</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#connect"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `host` | [sys.net.Host](/api-docs/clay-native/sys/net/Host/) |
| `port` | [Int](/api-docs/clay-native/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="handshake"><code><span class="field-name">handshake</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#handshake"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Perform the SSL handshake.

<hr class="field-separator" />

<div class="signature field-method no-description" id="write"><code><span class="field-name">write</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#write"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-native/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="close"><code><span class="field-name">close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description" id="conf"><code><span class="field-name">conf</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/ssl/_Socket/CONF/" class="type-link">sys.ssl._Socket.CONF</a></code><a class="header-anchor" href="#conf"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ssl"><code><span class="field-name">ssl</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/ssl/_Socket/SSL/" class="type-link">sys.ssl._Socket.SSL</a></code><a class="header-anchor" href="#ssl"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="caCert"><code><span class="field-name">caCert</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/sys/ssl/Certificate/" class="type-link">Certificate</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#caCert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="hostname"><code><span class="field-name">hostname</span><span class="operator">:</span> <a href="/api-docs/clay-native/String/" class="type-link">String</a></code><a class="header-anchor" href="#hostname"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ownCert"><code><span class="field-name">ownCert</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/sys/ssl/Certificate/" class="type-link">Certificate</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ownCert"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ownKey"><code><span class="field-name">ownKey</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/sys/ssl/Key/" class="type-link">Key</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#ownKey"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="altSNIContexts"><code><span class="field-name">altSNIContexts</span><span class="operator">:</span> <a href="/api-docs/clay-native/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#altSNIContexts"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="sniCallback"><code><span class="field-name">sniCallback</span><span class="operator">:</span> <a href="/api-docs/clay-native/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#sniCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="handshakeDone"><code><span class="field-name">handshakeDone</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#handshakeDone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="buildSSLConfig"><code><span class="field-name">buildSSLConfig</span><span class="parenthesis">(</span><span class="arg-name">server</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/sys/ssl/_Socket/CONF/" class="type-link">sys.ssl._Socket.CONF</a></code><a class="header-anchor" href="#buildSSLConfig"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `server` | [Bool](/api-docs/clay-native/Bool/) |

| Returns |
|---------|
| [sys.ssl._Socket.CONF](/api-docs/clay-native/sys/ssl/_Socket/CONF/) |

