---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: ListenerList
target: Clay (Web)
permalink: api-docs/clay-web/nape/callbacks/ListenerList/
---

# ListenerList

<div class="view-source"><a href="https://github.com/ceramic-engine/nape/blob/master/nape/callbacks/ListenerList.hx">View source</a></div>

<div class="type-hierarchy"><strong>nape.callbacks.ListenerList</strong> (final class)</div>

Nape list of Listener type objects
<br/><br/>
Internally this list is at present implemented as a linked list with
object pooled nodes and iterators with various fast paths made for
standard access patterns (For instance accessing successive elements
runs in constant time when using random access functions)
<br/><br/>
Iteration of this list can be done in various ways, but the preferred
way on all targets, is through use of the foreach function:
<pre>
list.foreach(function (obj) {
});
</pre>
This method is inlined so that in haxe no closure will need to be created.
<br/><br/>
In AS3, a closure would need to be created in general, so for performance
reasons you 'may' choose to use iteration as follows:
<pre>
for (var i:int = 0; i < list.length; i++) {
var obj:Listener = list.at(i);
}
</pre>
<br/>
NOTE: It is 'not' safe to modify a list whilst iterating over it.
If you wish to remove elements during an iteration you should use the
filter method, for example:
<pre>
list.filter(function (obj) {
// operate on object.
// ...
return (false if you want object to be removed);
});
</pre>
<br/><br/>
In AS3, if you wish to avoid a closure generation, you can perform such
an iteration in a safe manner as follows:
<pre>
var i:int = 0;
while (i < list.length) {
var obj:Listener = list.at(i);
// operate on object.
// ...
if (should remove obj) {
list.remove(obj);
continue;
}
else i++;
}
</pre>
Or if you are always clearing the list entirely you could write:
<pre>
while (!list.empty()) {
var obj:Listener = list.pop();
// operate on object.
// ...
}
</pre>

## Static Members

<div class="signature field-method has-description has-plugin" id="fromArray"><div class="plugin-name">nape</div><code><span class="field-name">fromArray</span><span class="parenthesis">(</span><span class="arg-name">array</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ListenerList</a></code><a class="header-anchor" href="#fromArray"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Convert standard Array to Nape list.



| Name | Type | Description |
|------|------|-------------|
| `array` | [Array](/api-docs/clay-web/Array/)<[Listener](/api-docs/clay-web/nape/callbacks/Listener/)> | The array to be converted  |

| Returns | Description |
|---------|-------------|
| [ListenerList](/api-docs/clay-web/nape/callbacks/ListenerList/) | An equivalent Nape list.  |

## Instance Members

<div class="signature field-var has-description has-plugin" id="zpp_inner"><div class="plugin-name">nape</div><code><span class="field-name">zpp_inner</span><span class="operator">:</span> <a href="/api-docs/clay-web/zpp_nape/util/ZPP_ListenerList/" class="type-link">zpp_nape.util.ZPP_ListenerList</a></code><a class="header-anchor" href="#zpp_inner"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="length"><div class="plugin-name">nape</div><code><span class="field-name">length</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#length"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Length of list.

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="has"><div class="plugin-name">nape</div><code><span class="field-name">has</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#has"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Check if element is already in the list



| Name | Type | Description |
|------|------|-------------|
| `obj` | [Listener](/api-docs/clay-web/nape/callbacks/Listener/) | The object to test.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if object is in the list. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="at"><div class="plugin-name">nape</div><code><span class="field-name">at</span><span class="parenthesis">(</span><span class="arg-name">index</span><span class="operator">:</span> <a href="/api-docs/clay-web/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a></code><a class="header-anchor" href="#at"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Random access to elements of list by index.
<br/><br/>
Under normal circumstances, accessing succesive elements via this
method will occur in constant time.



| Name | Type | Description |
|------|------|-------------|
| `index` | [Int](/api-docs/clay-web/Int/) | The index of the element in list to access.  |

| Returns |
|---------|
| [Listener](/api-docs/clay-web/nape/callbacks/Listener/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="push"><div class="plugin-name">nape</div><code><span class="field-name">push</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#push"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Push element to back of list.
<br/><br/>
When the order of objects is not important, it is best to use the
add() method instead.



| Name | Type | Description |
|------|------|-------------|
| `obj` | [Listener](/api-docs/clay-web/nape/callbacks/Listener/) | The object to insert.  |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="unshift"><div class="plugin-name">nape</div><code><span class="field-name">unshift</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unshift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Push element to front of list.
<br/><br/>
When the order of objects is not important, it is best to use the
add() method instead.



| Name | Type | Description |
|------|------|-------------|
| `obj` | [Listener](/api-docs/clay-web/nape/callbacks/Listener/) | The object to insert.  |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="pop"><div class="plugin-name">nape</div><code><span class="field-name">pop</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a></code><a class="header-anchor" href="#pop"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pop element from back of list.
<br/><br/>
If you are wanting to clear a list, whilst operating on its elements,
consider use of the filter method instead.


| Returns |
|---------|
| [Listener](/api-docs/clay-web/nape/callbacks/Listener/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="shift"><div class="plugin-name">nape</div><code><span class="field-name">shift</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a></code><a class="header-anchor" href="#shift"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pop element from front of list.
<br/><br/>
If you are wanting to clear a list, whilst operating on its elements,
consider use of the filter method instead.


| Returns |
|---------|
| [Listener](/api-docs/clay-web/nape/callbacks/Listener/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="add"><div class="plugin-name">nape</div><code><span class="field-name">add</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#add"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Insert element into list in most effecient way.
<br/><br/>
This method will defer to either the push or unshift function
depending on which is most effecient in the context.
<br/><br/>
If order of elements is not important then you should always use
this function to insert elements.



| Name | Type | Description |
|------|------|-------------|
| `obj` | [Listener](/api-docs/clay-web/nape/callbacks/Listener/) | The object to insert.  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if object was successfuly inserted.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="remove"><div class="plugin-name">nape</div><code><span class="field-name">remove</span><span class="parenthesis">(</span><span class="arg-name">obj</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/Listener/" class="type-link">Listener</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#remove"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Remove element from list.
<br/><br/>
This is a linear time operation.



| Name | Type | Description |
|------|------|-------------|
| `obj` | [Listener](/api-docs/clay-web/nape/callbacks/Listener/) | The object to remove  |

| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if object was removed from list.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clear"><div class="plugin-name">nape</div><code><span class="field-name">clear</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#clear"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Clear the list, removing all elements.


<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="empty"><div class="plugin-name">nape</div><code><span class="field-name">empty</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#empty"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Test if list is empty or not.


| Returns | Description |
|---------|-------------|
| [Bool](/api-docs/clay-web/Bool/) | True if list is empty. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="iterator"><div class="plugin-name">nape</div><code><span class="field-name">iterator</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/nape/callbacks/ListenerIterator/" class="type-link">ListenerIterator</a></code><a class="header-anchor" href="#iterator"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Return Haxe iterator for list.
<br/><br/>
Use of this iterator, whilst stylistically better in Haxe should not
be used, in preference for use of the foreach function which will
not require allocation of an iterator object.
<br/><br/>
Equally in AS3, the foreach method should be the preferred way to iterate.
| Returns |
|---------|
| [ListenerIterator](/api-docs/clay-web/nape/callbacks/ListenerIterator/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="copy"><div class="plugin-name">nape</div><code><span class="field-name">copy</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">deep</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">false</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ListenerList</a></code><a class="header-anchor" href="#copy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Produce a possibly deep copy of list.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `deep` | [Bool](/api-docs/clay-web/Bool/) | `false` | If true, then each element will have its own copy function called instead of simply having its reference copied over.  |

| Returns | Description |
|---------|-------------|
| [ListenerList](/api-docs/clay-web/nape/callbacks/ListenerList/) | The copied list. |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="merge"><div class="plugin-name">nape</div><code><span class="field-name">merge</span><span class="parenthesis">(</span><span class="arg-name">xs</span><span class="operator">:</span> <a href="#" class="type-link">ListenerList</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#merge"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Merge given list into this one.
<br/><br/>
The result is that this list will have all objects from the argument
that were not already in the list inserted. You should make no
assumption about the order of these insertions.



| Name | Type | Description |
|------|------|-------------|
| `xs` | [ListenerList](/api-docs/clay-web/nape/callbacks/ListenerList/) | The list to merge.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="toString"><div class="plugin-name">nape</div><code><span class="field-name">toString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#toString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

@private
| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="foreach"><div class="plugin-name">nape</div><code><span class="field-name">foreach</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ListenerList</a></code><a class="header-anchor" href="#foreach"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterate over list applying function.
<br/><br/>
Any exception thrown by the supplied function will be treat as a
signal to halt iteration acting as a 'break' statement.
<br/><br/>
This method should be preferred to using standard haxe iteration
as there will be no allocation of an iterator object.
<pre>
list.foreach(function (obj) {
if (ignore_object(obj)) return; //acts as a 'continue' statement
if (halt_iteration(obj)) throw "": //acts as a 'break' statement
});
</pre>



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The function to apply to each argument.  |

| Returns | Description |
|---------|-------------|
| [ListenerList](/api-docs/clay-web/nape/callbacks/ListenerList/) | A reference to 'this' list.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="filter"><div class="plugin-name">nape</div><code><span class="field-name">filter</span><span class="parenthesis">(</span><span class="arg-name">lambda</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">ListenerList</a></code><a class="header-anchor" href="#filter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Iterate over list filtering elements.
<br/><br/>
The given function will be applied to each element, whenever the
function returns false, the element will be removed from the list.
<br/><br/>
Any exception thrown by the supplied function will be treat as a
signal to halt iteration acting as a 'break' statement.
<br/><br/>
This method is to be greatly preferred for filtering logic as
it is otherwise unsafe to modify the list during an iteration.
<br/><br/>
An example of using this method to clean up a list whilst performing
actions on the elements.
<pre>
list.filter(function (obj) {
// perform clean up with obj
return false; // remove from list.
});
</pre>



| Name | Type | Description |
|------|------|-------------|
| `lambda` | Function | The function to apply to each argument, deciding if element should be removed.  |

| Returns | Description |
|---------|-------------|
| [ListenerList](/api-docs/clay-web/nape/callbacks/ListenerList/) | A reference to 'this' list.  |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">nape</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Construct a new list.

## Private Members

## Metadata

| Name | Parameters |
|------|------------|
| `:final` | - |

