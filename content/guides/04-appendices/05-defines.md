---
layout: guides
category: guides
menu: Appendices
title: Ceramic Defines
permalink: guides/defines/
---
# Ceramic Defines

Ceramic apps can be fine-tuned using [defines](/guides/ceramic-yml-reference/#defines). Here is a list of supported defines and how they affect the build.

<table style="width: 100%">
    <tr>
        <td><code>ceramic_web_minify</code></td>
    </tr>
    <tr>
        <td>When exporting for <code>web</code> (with <code>clay</code> backend), this will enable minification of the js output. Uses uglifyjs internally.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_use_openal</code></td>
    </tr>
    <tr>
        <td>When exporting to native targets (with <code>clay</code> backend), this will make ceramic use OpenAL for audio instead of Soloud. This is mostly a compatibility define as OpenAL used to be the default audio implementation for clay, but is now replaced by Soloud in more recent Ceramic versions.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_disable_background_sleep</code></td>
    </tr>
    <tr>
        <td>Ceramic has a mecanism of sleeping for very short amount of times at each frame if it is running in background. This is to prevent the app from eating all CPU resources and running at thousands of frames per second in that case. You can use this define to disable that behaviour.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_browser_clipboard</code></td>
    </tr>
    <tr>
        <td>Enable clipboard when using a Ceramic app from the browser. This may trigger a permission request, that is why it is disabled by default.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_debug_clipboard</code></td>
    </tr>
    <tr>
        <td>A define that will add more logs to the console to help debug clipboard.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_debug_draw</code></td>
    </tr>
    <tr>
        <td>A defines that will make Ceramic print detailed logs about what is rendered, every 10 seconds. The logs allow to know the number of draw calls and what is triggering additional draw calls, which can help optimize rendering of the app.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_sqlite</code></td>
    </tr>
    <tr>
        <td>When exporting to native targets (with <code>clay</code> backend), Ceramic can use <code>SQLite</code> instead of regular file system access to save data if this is defined. Could be useful to take advantage of additional concistency mecanisms provided by SQLite (ACID compliant etc...)</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_no_multitexture</code></td>
    </tr>
    <tr>
        <td>By default, Ceramic's default shaders are optimized to enable multi-texture batching. This is a very useful optimization that you should keep enabled in most situations, but you can disable with this define, which could still be useful if you want to debug rendering.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_debug_entity_allocs</code></td>
    </tr>
    <tr>
        <td>When defined, additional logs will be printed every 5 second to show how many entities are currently allocated. Can be useful to debug memory leaks related to Ceramic entities.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_debug_autorun</code></td>
    </tr>
    <tr>
        <td>When defined, additional logs will be printed to know when an <code>autorun</code> is invalidated and run again. Can be useful to track autorun invalidations in a Ceramic app that uses them.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_no_unity_catch_exit</code></td>
    </tr>
    <tr>
        <td>When exporting for <code>unity</code>, the default behaviour of the app is to stop executing update code when a critical error happens. This can be disabled with this define: even when failing, the code will be executed again at the next update loop iteration.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_no_clip</code></td>
    </tr>
    <tr>
        <td>Disable clipping entirely.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_no_mesh</code></td>
    </tr>
    <tr>
        <td>Disable mesh rendering.</td>
    </tr>
</table>

<table style="width: 100%">
    <tr>
        <td><code>ceramic_debug_unsafe</code></td>
    </tr>
    <tr>
        <td>Allow to debug unsafe access. Only useful if you want to debug <code>unsafeGet()</code> or <code>unsafeSet()</code> methods provided by <code>ceramic.Extensions</code>.</td>
    </tr>
</table>