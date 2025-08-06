---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: TArray
target: Unity
permalink: api-docs/unity/nape/TArray/
---

# TArray

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/TArray.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.TArray</strong> (Typedef)</div>

Platform specific Array type.
<br/><br/>
For flash10+ This is <code>flash.Vector&lt;T&gt;</code>, and otherwise
<code>Array&lt;T&gt;</code>.
<pre>
#if flash10
typedef TArray&lt;T&gt; = flash.Vector&lt;T&gt;;
#else
typedef TArray&lt;T&gt; = Array&lt;T&gt;;
#end
</pre>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

