---
layout: api-docs
category: api-docs
subCategory: doc
menu: Clay
title: ElectronRunner
target: Clay (Web)
permalink: api-docs/clay-web/backend/ElectronRunner/
---

# ElectronRunner

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/clay/runtime/src/backend/ElectronRunner.hx">View source</a></div>

<div class="type-hierarchy"><strong>backend.ElectronRunner</strong> (Class)</div>

Static holder for the Electron runner instance used in web builds.

When running Ceramic applications in Electron (desktop web runtime),
this class provides access to the Electron runner object which handles:
- Window management
- Native menu integration
- File system access
- System dialog boxes
- Inter-process communication

The electronRunner object is typically injected by the Electron main
process when initializing the Ceramic application. It remains null
when running in a regular web browser.

<div class="see"><strong>See:</strong> ceramic.Platform.resolveElectron() For safe Electron detection</div>


## Static Members

<div class="signature field-var has-description has-plugin" id="electronRunner"><div class="plugin-name">clay</div><code><span class="field-name">electronRunner</span><span class="operator">:</span> <a href="/api-docs/clay-web/Dynamic/" class="type-link">Dynamic</a></code><a class="header-anchor" href="#electronRunner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the Electron runner object.
This is set by the Electron environment at startup and provides
access to Electron-specific APIs that aren't available in browsers.

Value is null when:
- Running in a web browser
- Running on non-web platforms (native desktop/mobile)
- Electron is not available or not initialized

