---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: ISymbolWriter
target: Unity
permalink: api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolWriter/
---

# ISymbolWriter

<div class="type-hierarchy"><strong>cs.system.diagnostics.symbolstore.ISymbolWriter</strong> (extern interface)</div>

## Instance Members

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CloseMethod"><code><span class="field-name">CloseMethod</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CloseMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CloseNamespace"><code><span class="field-name">CloseNamespace</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CloseNamespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CloseScope"><code><span class="field-name">CloseScope</span><span class="parenthesis">(</span><span class="arg-name">endOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CloseScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `endOffset` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineDocument"><code><span class="field-name">DefineDocument</span><span class="parenthesis">(</span><span class="arg-name">url</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">language</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a><span class="operator">,</span> <span class="arg-name">languageVendor</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a><span class="operator">,</span> <span class="arg-name">documentType</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/Guid/" class="type-link">cs.system.Guid</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/" class="type-link">ISymbolDocumentWriter</a></code><a class="header-anchor" href="#DefineDocument"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `url` | [String](/api-docs/unity/String/) |
| `language` | [cs.system.Guid](/api-docs/unity/cs/system/Guid/) |
| `languageVendor` | [cs.system.Guid](/api-docs/unity/cs/system/Guid/) |
| `documentType` | [cs.system.Guid](/api-docs/unity/cs/system/Guid/) |

| Returns |
|---------|
| [ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineField"><code><span class="field-name">DefineField</span><span class="parenthesis">(</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/" class="type-link">SymbolToken</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">signature</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">addrKind</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">addr1</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr2</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr3</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineField"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parent` | [SymbolToken](/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/) |
| `name` | [String](/api-docs/unity/String/) |
| `attributes` | Anonymous |
| `signature` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `addrKind` | Anonymous |
| `addr1` | [Int](/api-docs/unity/Int/) |
| `addr2` | [Int](/api-docs/unity/Int/) |
| `addr3` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineGlobalVariable"><code><span class="field-name">DefineGlobalVariable</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">signature</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">addrKind</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">addr1</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr2</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr3</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineGlobalVariable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `attributes` | Anonymous |
| `signature` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `addrKind` | Anonymous |
| `addr1` | [Int](/api-docs/unity/Int/) |
| `addr2` | [Int](/api-docs/unity/Int/) |
| `addr3` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineLocalVariable"><code><span class="field-name">DefineLocalVariable</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">signature</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">addrKind</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">addr1</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr2</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr3</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">startOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">endOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineLocalVariable"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `attributes` | Anonymous |
| `signature` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |
| `addrKind` | Anonymous |
| `addr1` | [Int](/api-docs/unity/Int/) |
| `addr2` | [Int](/api-docs/unity/Int/) |
| `addr3` | [Int](/api-docs/unity/Int/) |
| `startOffset` | [Int](/api-docs/unity/Int/) |
| `endOffset` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineParameter"><code><span class="field-name">DefineParameter</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">attributes</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">sequence</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addrKind</span><span class="operator">:</span> <span class="type-name">Anonymous</span><span class="operator">,</span> <span class="arg-name">addr1</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr2</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">addr3</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineParameter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |
| `attributes` | Anonymous |
| `sequence` | [Int](/api-docs/unity/Int/) |
| `addrKind` | Anonymous |
| `addr1` | [Int](/api-docs/unity/Int/) |
| `addr2` | [Int](/api-docs/unity/Int/) |
| `addr3` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="DefineSequencePoints"><code><span class="field-name">DefineSequencePoints</span><span class="parenthesis">(</span><span class="arg-name">document</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/" class="type-link">ISymbolDocumentWriter</a><span class="operator">,</span> <span class="arg-name">offsets</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">lines</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">columns</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">endLines</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">endColumns</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#DefineSequencePoints"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `document` | [ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) |
| `offsets` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `lines` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `columns` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `endLines` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |
| `endColumns` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Int](/api-docs/unity/Int/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Initialize"><code><span class="field-name">Initialize</span><span class="parenthesis">(</span><span class="arg-name">emitter</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="operator">,</span> <span class="arg-name">filename</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">fFullBuild</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Initialize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `emitter` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |
| `filename` | [String](/api-docs/unity/String/) |
| `fFullBuild` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OpenMethod"><code><span class="field-name">OpenMethod</span><span class="parenthesis">(</span><span class="arg-name">method</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/" class="type-link">SymbolToken</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#OpenMethod"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `method` | [SymbolToken](/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OpenNamespace"><code><span class="field-name">OpenNamespace</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#OpenNamespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `name` | [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OpenScope"><code><span class="field-name">OpenScope</span><span class="parenthesis">(</span><span class="arg-name">startOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#OpenScope"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `startOffset` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetMethodSourceRange"><code><span class="field-name">SetMethodSourceRange</span><span class="parenthesis">(</span><span class="arg-name">startDoc</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/" class="type-link">ISymbolDocumentWriter</a><span class="operator">,</span> <span class="arg-name">startLine</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">startColumn</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">endDoc</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/" class="type-link">ISymbolDocumentWriter</a><span class="operator">,</span> <span class="arg-name">endLine</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">endColumn</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetMethodSourceRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `startDoc` | [ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) |
| `startLine` | [Int](/api-docs/unity/Int/) |
| `startColumn` | [Int](/api-docs/unity/Int/) |
| `endDoc` | [ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) |
| `endLine` | [Int](/api-docs/unity/Int/) |
| `endColumn` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetScopeRange"><code><span class="field-name">SetScopeRange</span><span class="parenthesis">(</span><span class="arg-name">scopeID</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">startOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="operator">,</span> <span class="arg-name">endOffset</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetScopeRange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `scopeID` | [Int](/api-docs/unity/Int/) |
| `startOffset` | [Int](/api-docs/unity/Int/) |
| `endOffset` | [Int](/api-docs/unity/Int/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetSymAttribute"><code><span class="field-name">SetSymAttribute</span><span class="parenthesis">(</span><span class="arg-name">parent</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/" class="type-link">SymbolToken</a><span class="operator">,</span> <span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">data</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="/api-docs/unity/cs/types/UInt8/" class="type-link">cs.types.UInt8</a><span class="operator">&gt;</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetSymAttribute"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `parent` | [SymbolToken](/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/) |
| `name` | [String](/api-docs/unity/String/) |
| `data` | [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[cs.types.UInt8](/api-docs/unity/cs/types/UInt8/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetUnderlyingWriter"><code><span class="field-name">SetUnderlyingWriter</span><span class="parenthesis">(</span><span class="arg-name">underlyingWriter</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetUnderlyingWriter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `underlyingWriter` | [cs.system.IntPtr](/api-docs/unity/cs/system/IntPtr/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="SetUserEntryPoint"><code><span class="field-name">SetUserEntryPoint</span><span class="parenthesis">(</span><span class="arg-name">entryMethod</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/" class="type-link">SymbolToken</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#SetUserEntryPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `entryMethod` | [SymbolToken](/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="UsingNamespace"><code><span class="field-name">UsingNamespace</span><span class="parenthesis">(</span><span class="arg-name">fullName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#UsingNamespace"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `fullName` | [String](/api-docs/unity/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:abstract` | - |
| `:libType` | - |
| `:csNative` | - |

