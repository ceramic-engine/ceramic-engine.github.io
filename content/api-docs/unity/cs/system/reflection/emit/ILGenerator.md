---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ILGenerator
target: Unity
permalink: api-docs/unity/cs/system/reflection/emit/ILGenerator/
---

# ILGenerator

<div class="type-hierarchy"><strong>cs.system.reflection.emit.ILGenerator</strong> (extern class)</div>

<div class="type-implements"><strong>Implements:</strong> <a href="/api-docs/unity/cs/system/runtime/interopservices/_ILGenerator/">cs.system.runtime.interopservices._ILGenerator</a></div>

## Instance Members

<div class="signature field-method no-description" id="BeginCatchBlock"><code><span class="field-name">BeginCatchBlock</span><span class="parenthesis">(</span><span class="arg-name">exceptionType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginCatchBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `exceptionType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginExceptFilterBlock"><code><span class="field-name">BeginExceptFilterBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginExceptFilterBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginExceptionBlock"><code><span class="field-name">BeginExceptionBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/Label/" class="type-link">Label</a></code><a class="header-anchor" href="#BeginExceptionBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Label](/api-docs/unity/cs/system/reflection/emit/Label/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginFaultBlock"><code><span class="field-name">BeginFaultBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginFaultBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginFinallyBlock"><code><span class="field-name">BeginFinallyBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginFinallyBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginScope"><code><span class="field-name">BeginScope</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="DeclareLocal"><code><span class="field-name">DeclareLocal</span><span class="parenthesis">(</span><span class="arg-name">localType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/LocalBuilder/" class="type-link">LocalBuilder</a></code><a class="header-anchor" href="#DeclareLocal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `localType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

| Returns |
|---------|
| [LocalBuilder](/api-docs/unity/cs/system/reflection/emit/LocalBuilder/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineLabel"><code><span class="field-name">DefineLabel</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/Label/" class="type-link">Label</a></code><a class="header-anchor" href="#DefineLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Label](/api-docs/unity/cs/system/reflection/emit/Label/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Emit"><code><span class="field-name">Emit</span><span class="parenthesis">(</span><span class="arg-name">opcode</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/OpCode/" class="type-link">OpCode</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Emit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `opcode` | [OpCode](/api-docs/unity/cs/system/reflection/emit/OpCode/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EmitCall"><code><span class="field-name">EmitCall</span><span class="parenthesis">(</span><span class="arg-name">opcode</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/OpCode/" class="type-link">OpCode</a><span class="operator">,</span> <span class="arg-name">methodInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/MethodInfo/" class="type-link">cs.system.reflection.MethodInfo</a><span class="operator">,</span> <span class="arg-name">optionalParameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EmitCall"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `opcode` | [OpCode](/api-docs/unity/cs/system/reflection/emit/OpCode/) |
| `methodInfo` | [cs.system.reflection.MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) |
| `optionalParameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EmitCalli"><code><span class="field-name">EmitCalli</span><span class="parenthesis">(</span><span class="arg-name">opcode</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/OpCode/" class="type-link">OpCode</a><span class="operator">,</span> <span class="arg-name">unmanagedCallConv</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">returnType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">,</span> <span class="arg-name">parameterTypes</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EmitCalli"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `opcode` | [OpCode](/api-docs/unity/cs/system/reflection/emit/OpCode/) |
| `unmanagedCallConv` | Anonymous |
| `returnType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |
| `parameterTypes` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.system.Type](/api-docs/unity/cs/system/Type/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EmitWriteLine"><code><span class="field-name">EmitWriteLine</span><span class="parenthesis">(</span><span class="arg-name">fld</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/FieldInfo/" class="type-link">cs.system.reflection.FieldInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EmitWriteLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fld` | [cs.system.reflection.FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndExceptionBlock"><code><span class="field-name">EndExceptionBlock</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EndExceptionBlock"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="EndScope"><code><span class="field-name">EndScope</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EndScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="MarkLabel"><code><span class="field-name">MarkLabel</span><span class="parenthesis">(</span><span class="arg-name">loc</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/reflection/emit/Label/" class="type-link">Label</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#MarkLabel"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `loc` | [Label](/api-docs/unity/cs/system/reflection/emit/Label/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="MarkSequencePoint"><code><span class="field-name">MarkSequencePoint</span><span class="parenthesis">(</span><span class="arg-name">document</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/" class="type-link">cs.system.diagnostics.symbolstore.ISymbolDocumentWriter</a><span class="operator">,</span> <span class="arg-name">startLine</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">startColumn</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">endLine</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">endColumn</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#MarkSequencePoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `document` | [cs.system.diagnostics.symbolstore.ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) |
| `startLine` | [Int](/api-docs/unity/Int/) |
| `startColumn` | [Int](/api-docs/unity/Int/) |
| `endLine` | [Int](/api-docs/unity/Int/) |
| `endColumn` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ThrowException"><code><span class="field-name">ThrowException</span><span class="parenthesis">(</span><span class="arg-name">excType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Type/" class="type-link">cs.system.Type</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#ThrowException"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `excType` | [cs.system.Type](/api-docs/unity/cs/system/Type/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="UsingNamespace"><code><span class="field-name">UsingNamespace</span><span class="parenthesis">(</span><span class="arg-name">usingNamespace</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#UsingNamespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `usingNamespace` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

