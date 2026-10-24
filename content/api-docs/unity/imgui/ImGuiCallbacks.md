---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiCallbacks
target: Unity
permalink: api-docs/unity/imgui/ImGuiCallbacks/
---

# ImGuiCallbacks

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imgui/ImGuiCallbacks.hx">View source</a></div>

<div class="type-hierarchy"><strong>imgui.ImGuiCallbacks</strong> (Class)</div>

Cross-target C callback trampolines (hand-written, never regenerated).

DESIGN CONTRACT: there is ONE static handler slot per callback kind, and
one shared C trampoline dispatching to it. This is deliberate (no Map, no
garbage, no hidden state): correctness comes from installing the handler
SYNCHRONOUSLY, right before the call that fires it. Concretely:

- `inputText` / `comboGetter`: the callback fires DURING the widget call
itself. Install just before each widget call (cheap, one static
assignment); any number of widgets with different handlers is safe.
- `sizeConstraints`: the callback fires during the NEXT `begin()`. Keep
`setNextWindowSizeConstraints(...)` and its `begin()` back to back,
without installing another size handler in between.
- `selectionAdapter`: the trampoline pointer is STORED in the
`ImGuiSelectionBasicStorage` struct and fires during
`beginMultiSelect` / `applyRequests` / `endMultiSelect`. Reinstall YOUR
handler right before each such block (every frame): with several
storages using different index-to-id mappings, the last installed
handler is the one that runs.

Typical usage:

```haxe
var cb = ImGuiCallbacks.inputText(myHandler);
ImGui.inputTextEx('Input', buf, 256, flags, cb);
```

Per target:
- hxcpp: cpp.Callable.fromStaticFunction (a real C function pointer);
- js/wasm: Module.addFunction (requires the wasm built with
-sALLOW_TABLE_GROWTH, done by build/build-web.sh);
- C#/Unity: static delegate + Marshal.GetFunctionPointerForDelegate in the
DCImGuiCallbacks.cs companion (MonoPInvokeCallback for IL2CPP).

## Static Members

<div class="signature field-method has-description" id="inputTextHandler"><code><span class="field-name">inputTextHandler</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiInputTextCallbackDataPtr/" class="type-link">ImGuiInputTextCallbackDataPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#inputTextHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently installed InputText handler.

| Name | Type |
|------|------|
| `data` | [ImGuiInputTextCallbackDataPtr](/api-docs/unity/imgui/ImGuiInputTextCallbackDataPtr/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="inputText"><code><span class="field-name">inputText</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiCallbackPtr/" class="type-link">ImGuiCallbackPtr</a></code><a class="header-anchor" href="#inputText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Install `handler` and return the trampoline pointer to pass as `callback`.

| Name | Type |
|------|------|
| `handler` | Function |

| Returns |
|---------|
| [ImGuiCallbackPtr](/api-docs/unity/imgui/ImGuiCallbackPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dispatchInputText"><code><span class="field-name">dispatchInputText</span><span class="parenthesis">(</span><span class="arg-name">dataAddr</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dispatchInputText"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by the DCImGuiCallbacks.cs bridge.

| Name | Type |
|------|------|
| `dataAddr` | [Float](/api-docs/unity/Float/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sizeConstraintsHandler"><code><span class="field-name">sizeConstraintsHandler</span><span class="parenthesis">(</span><span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiSizeCallbackDataPtr/" class="type-link">ImGuiSizeCallbackDataPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#sizeConstraintsHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently installed size-constraints handler.

| Name | Type |
|------|------|
| `data` | [ImGuiSizeCallbackDataPtr](/api-docs/unity/imgui/ImGuiSizeCallbackDataPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="sizeConstraints"><code><span class="field-name">sizeConstraints</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiCallbackPtr/" class="type-link">ImGuiCallbackPtr</a></code><a class="header-anchor" href="#sizeConstraints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Install `handler` and return the trampoline pointer to pass as `customCallback`.

| Name | Type |
|------|------|
| `handler` | Function |

| Returns |
|---------|
| [ImGuiCallbackPtr](/api-docs/unity/imgui/ImGuiCallbackPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dispatchSizeCallback"><code><span class="field-name">dispatchSizeCallback</span><span class="parenthesis">(</span><span class="arg-name">dataAddr</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#dispatchSizeCallback"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by the DCImGuiCallbacks.cs bridge.

| Name | Type |
|------|------|
| `dataAddr` | [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="comboGetterHandler"><code><span class="field-name">comboGetterHandler</span><span class="parenthesis">(</span><span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#comboGetterHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently installed combo items getter.

| Name | Type |
|------|------|
| `idx` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="comboGetter"><code><span class="field-name">comboGetter</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiCallbackPtr/" class="type-link">ImGuiCallbackPtr</a></code><a class="header-anchor" href="#comboGetter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Install `handler` and return the trampoline pointer to pass as `getter`.

| Name | Type |
|------|------|
| `handler` | Function |

| Returns |
|---------|
| [ImGuiCallbackPtr](/api-docs/unity/imgui/ImGuiCallbackPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dispatchComboGetter"><code><span class="field-name">dispatchComboGetter</span><span class="parenthesis">(</span><span class="arg-name">userData</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#dispatchComboGetter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by the DCImGuiCallbacks.cs bridge.

| Name | Type |
|------|------|
| `userData` | [Float](/api-docs/unity/Float/) |
| `idx` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="selectionAdapterHandler"><code><span class="field-name">selectionAdapterHandler</span><span class="parenthesis">(</span><span class="arg-name">storage</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiSelectionBasicStoragePtr/" class="type-link">ImGuiSelectionBasicStoragePtr</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#selectionAdapterHandler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The currently installed index-to-storage-id adapter.

| Name | Type |
|------|------|
| `storage` | [ImGuiSelectionBasicStoragePtr](/api-docs/unity/imgui/ImGuiSelectionBasicStoragePtr/) |
| `idx` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="selectionAdapter"><code><span class="field-name">selectionAdapter</span><span class="parenthesis">(</span><span class="arg-name">handler</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/imgui/ImGuiCallbackPtr/" class="type-link">ImGuiCallbackPtr</a></code><a class="header-anchor" href="#selectionAdapter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Install `handler` and return the trampoline pointer to store in
`storage.adapterIndexToStorageId`. Unlike widget callbacks, the adapter
fires during beginMultiSelect/applyRequests/endMultiSelect: REINSTALL
your handler right before each such block (see the class doc contract).
With a single storage or identity mappings, installing once is enough.

| Name | Type |
|------|------|
| `handler` | Function |

| Returns |
|---------|
| [ImGuiCallbackPtr](/api-docs/unity/imgui/ImGuiCallbackPtr/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="dispatchSelectionAdapter"><code><span class="field-name">dispatchSelectionAdapter</span><span class="parenthesis">(</span><span class="arg-name">storageAddr</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">idx</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#dispatchSelectionAdapter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Called by the DCImGuiCallbacks.cs bridge.

| Name | Type |
|------|------|
| `storageAddr` | [Float](/api-docs/unity/Float/) |
| `idx` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

## Private Members

<div class="signature field-var no-description" id="comboScratch"><code><span class="field-name">comboScratch</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#comboScratch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="COMBO_SCRATCH_CAP"><code><span class="field-name">COMBO_SCRATCH_CAP</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#COMBO_SCRATCH_CAP"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="comboScratchWrite"><code><span class="field-name">comboScratchWrite</span><span class="parenthesis">(</span><span class="arg-name">s</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#comboScratchWrite"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Copy `s` (clamped UTF-8) into the persistent scratch and return its address.

| Name | Type |
|------|------|
| `s` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [Float](/api-docs/unity/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:hxGen` | - |

