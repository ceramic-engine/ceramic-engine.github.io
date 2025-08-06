---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: EntryPoint
target: Clay (Native)
permalink: api-docs/clay-native/haxe/EntryPoint/
---

# EntryPoint

<div class="type-hierarchy"><strong>haxe.EntryPoint</strong> (Class)</div>

If `haxe.MainLoop` is kept from DCE, then we will insert an `haxe.EntryPoint.run()` call just at then end of `main()`.
This class can be redefined by custom frameworks so they can handle their own main loop logic.

## Static Members

<div class="signature field-method has-description" id="run"><code><span class="field-name">run</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#run"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Start the main loop. Depending on the platform, this can return immediately or will only return when the application exits.

