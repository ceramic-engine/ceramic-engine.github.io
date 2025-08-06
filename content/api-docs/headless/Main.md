---
layout: api-docs
category: api-docs
subCategory: doc
menu: Headless
title: Main
target: Headless
permalink: api-docs/headless/Main/
---

# Main

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/headless/runtime/src/Main.hx">View source</a></div>

<div class="type-hierarchy"><strong>Main</strong> (Class)</div>

Main entry point for the Ceramic headless backend.

The headless backend allows Ceramic applications to run without a display,
making it suitable for server-side rendering, automated testing, and other
scenarios where visual output is not required.

This class initializes the headless backend, sets up the project environment,
and handles the main application loop for JavaScript targets.

## Static Members

<div class="signature field-var has-description has-plugin" id="project"><div class="plugin-name">headless</div><code><span class="field-name">project</span><span class="operator">:</span> <a href="/api-docs/headless/Project/" class="type-link">Project</a></code><a class="header-anchor" href="#project"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Reference to the current project instance.
This is set during initialization and provides access to the running project.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="main"><div class="plugin-name">headless</div><code><span class="field-name">main</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#main"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main entry point for the headless backend.

Initializes the Ceramic application with the headless backend,
sets up the project directory path, and starts the update loop
for JavaScript targets.

## Private Members

<div class="signature field-method has-description has-plugin" id="update"><div class="plugin-name">headless</div><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Update loop for JavaScript targets.

Calculates delta time since the last update and triggers
the application's update and render cycles. This runs
every 100 milliseconds when on JavaScript platforms.

