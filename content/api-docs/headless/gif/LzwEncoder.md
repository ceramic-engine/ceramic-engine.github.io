---
layout: api-docs
category: api-docs
subCategory: doc
menu: Gif
title: LzwEncoder
target: Headless
permalink: api-docs/headless/gif/LzwEncoder/
---

# LzwEncoder

<div class="view-source"><a href="https://github.com/ceramic-engine/gif/blob/master/gif/LzwEncoder.hx">View source</a></div>

<div class="type-hierarchy"><strong>gif.LzwEncoder</strong> (Class)</div>

## Instance Members

<div class="signature field-method no-description has-plugin" id="reset"><div class="plugin-name">gif</div><code><span class="field-name">reset</span><span class="parenthesis">(</span><span class="arg-name">pixels</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a><span class="operator">,</span> <span class="arg-name">color_depth</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#reset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `pixels` | [haxe.io.UInt8Array](/api-docs/headless/haxe/io/UInt8Array/) |
| `color_depth` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="encode"><div class="plugin-name">gif</div><code><span class="field-name">encode</span><span class="parenthesis">(</span><span class="arg-name">os</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#encode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `os` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="new"><div class="plugin-name">gif</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Private Members

<div class="signature field-var no-description has-plugin" id="EOF"><div class="plugin-name">gif</div><code><span class="field-name">EOF</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EOF"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="BITS"><div class="plugin-name">gif</div><code><span class="field-name">BITS</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BITS"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="HSIZE"><div class="plugin-name">gif</div><code><span class="field-name">HSIZE</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HSIZE"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="pixAry"><div class="plugin-name">gif</div><code><span class="field-name">pixAry</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a></code><a class="header-anchor" href="#pixAry"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="initCodeSize"><div class="plugin-name">gif</div><code><span class="field-name">initCodeSize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#initCodeSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="curPixel"><div class="plugin-name">gif</div><code><span class="field-name">curPixel</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#curPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="n_bits"><div class="plugin-name">gif</div><code><span class="field-name">n_bits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#n_bits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maxbits"><div class="plugin-name">gif</div><code><span class="field-name">maxbits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxbits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maxcode"><div class="plugin-name">gif</div><code><span class="field-name">maxcode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxcode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="maxmaxcode"><div class="plugin-name">gif</div><code><span class="field-name">maxmaxcode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxmaxcode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="htab"><div class="plugin-name">gif</div><code><span class="field-name">htab</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Int32Array/" class="type-link">haxe.io.Int32Array</a></code><a class="header-anchor" href="#htab"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="codetab"><div class="plugin-name">gif</div><code><span class="field-name">codetab</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Int32Array/" class="type-link">haxe.io.Int32Array</a></code><a class="header-anchor" href="#codetab"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="hsize"><div class="plugin-name">gif</div><code><span class="field-name">hsize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hsize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="free_ent"><div class="plugin-name">gif</div><code><span class="field-name">free_ent</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#free_ent"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="clear_flg"><div class="plugin-name">gif</div><code><span class="field-name">clear_flg</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#clear_flg"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="g_init_bits"><div class="plugin-name">gif</div><code><span class="field-name">g_init_bits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#g_init_bits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="ClearCode"><div class="plugin-name">gif</div><code><span class="field-name">ClearCode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ClearCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="EOFCode"><div class="plugin-name">gif</div><code><span class="field-name">EOFCode</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#EOFCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cur_accum"><div class="plugin-name">gif</div><code><span class="field-name">cur_accum</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cur_accum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="cur_bits"><div class="plugin-name">gif</div><code><span class="field-name">cur_bits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#cur_bits"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="masks"><div class="plugin-name">gif</div><code><span class="field-name">masks</span><span class="operator">:</span> <a href="/api-docs/headless/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#masks"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="a_count"><div class="plugin-name">gif</div><code><span class="field-name">a_count</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#a_count"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="accum"><div class="plugin-name">gif</div><code><span class="field-name">accum</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/UInt8Array/" class="type-link">haxe.io.UInt8Array</a></code><a class="header-anchor" href="#accum"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="add"><div class="plugin-name">gif</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">c</span><span class="operator">:</span> <a href="/api-docs/headless/UInt/" class="type-link">UInt</a><span class="operator">,</span> <span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `c` | [UInt](/api-docs/headless/UInt/) |
| `out` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="clearTable"><div class="plugin-name">gif</div><code><span class="field-name">clearTable</span><span class="parenthesis">(</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clearTable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `out` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="resetCodeTable"><div class="plugin-name">gif</div><code><span class="field-name">resetCodeTable</span><span class="parenthesis">(</span><span class="arg-name">hsize</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#resetCodeTable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `hsize` | [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="compress"><div class="plugin-name">gif</div><code><span class="field-name">compress</span><span class="parenthesis">(</span><span class="arg-name">init_bits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#compress"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `init_bits` | [Int](/api-docs/headless/Int/) |
| `out` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="flush"><div class="plugin-name">gif</div><code><span class="field-name">flush</span><span class="parenthesis">(</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#flush"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `out` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="maxCode"><div class="plugin-name">gif</div><code><span class="field-name">maxCode</span><span class="parenthesis">(</span><span class="arg-name">n_bits</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#maxCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `n_bits` | [Int](/api-docs/headless/Int/) |

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="nextPixel"><div class="plugin-name">gif</div><code><span class="field-name">nextPixel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#nextPixel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Int](/api-docs/headless/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="output"><div class="plugin-name">gif</div><code><span class="field-name">output</span><span class="parenthesis">(</span><span class="arg-name">code</span><span class="operator">:</span> <a href="/api-docs/headless/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/headless/haxe/io/Output/" class="type-link">haxe.io.Output</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#output"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `code` | [Int](/api-docs/headless/Int/) |
| `out` | [haxe.io.Output](/api-docs/headless/haxe/io/Output/) |

