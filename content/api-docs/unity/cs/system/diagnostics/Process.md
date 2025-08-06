---
layout: api-docs
category: api-docs
subCategory: doc
menu: Other
title: Process
target: Unity
permalink: api-docs/unity/cs/system/diagnostics/Process/
---

# Process

<div class="type-hierarchy"><a href="/api-docs/unity/cs/system/MarshalByRefObject/">cs.system.MarshalByRefObject</a> → <a href="/api-docs/unity/cs/system/componentmodel/Component/">cs.system.componentmodel.Component</a> → <strong>cs.system.diagnostics.Process</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="EnterDebugMode"><code><span class="field-name">EnterDebugMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#EnterDebugMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetCurrentProcess"><code><span class="field-name">GetCurrentProcess</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Process</a></code><a class="header-anchor" href="#GetCurrentProcess"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Process](/api-docs/unity/cs/system/diagnostics/Process/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetProcessById"><code><span class="field-name">GetProcessById</span><span class="parenthesis">(</span><span class="arg-name">processId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Process</a></code><a class="header-anchor" href="#GetProcessById"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `processId` | [Int](/api-docs/unity/Int/) |

| Returns |
|---------|
| [Process](/api-docs/unity/cs/system/diagnostics/Process/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetProcesses"><code><span class="field-name">GetProcesses</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">Process</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetProcesses"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Process](/api-docs/unity/cs/system/diagnostics/Process/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="GetProcessesByName"><code><span class="field-name">GetProcessesByName</span><span class="parenthesis">(</span><span class="arg-name">processName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/cs/NativeArray/" class="type-link">cs.NativeArray</a><span class="operator">&lt;</span><a href="#" class="type-link">Process</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#GetProcessesByName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `processName` | [String](/api-docs/unity/String/) |

| Returns |
|---------|
| [cs.NativeArray](/api-docs/unity/cs/NativeArray/)<[Process](/api-docs/unity/cs/system/diagnostics/Process/)> |

<hr class="field-separator" />

<div class="signature field-method no-description" id="LeaveDebugMode"><code><span class="field-name">LeaveDebugMode</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#LeaveDebugMode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Start"><code><span class="field-name">Start</span><span class="parenthesis">(</span><span class="arg-name">startInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/ProcessStartInfo/" class="type-link">ProcessStartInfo</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Process</a></code><a class="header-anchor" href="#Start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `startInfo` | [ProcessStartInfo](/api-docs/unity/cs/system/diagnostics/ProcessStartInfo/) |

| Returns |
|---------|
| [Process](/api-docs/unity/cs/system/diagnostics/Process/) |

## Instance Members

<div class="signature field-var no-description" id="Exited"><code><span class="field-name">Exited</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">cs.system.EventHandler</a></code><a class="header-anchor" href="#Exited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ErrorDataReceived"><code><span class="field-name">ErrorDataReceived</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/" class="type-link">DataReceivedEventHandler</a></code><a class="header-anchor" href="#ErrorDataReceived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="OutputDataReceived"><code><span class="field-name">OutputDataReceived</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/" class="type-link">DataReceivedEventHandler</a></code><a class="header-anchor" href="#OutputDataReceived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="WorkingSet64"><code><span class="field-name">WorkingSet64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#WorkingSet64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VirtualMemorySize64"><code><span class="field-name">VirtualMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#VirtualMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PrivateMemorySize64"><code><span class="field-name">PrivateMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#PrivateMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="WorkingSet"><code><span class="field-name">WorkingSet</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#WorkingSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="VirtualMemorySize"><code><span class="field-name">VirtualMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#VirtualMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="UserProcessorTime"><code><span class="field-name">UserProcessorTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">cs.system.TimeSpan</a></code><a class="header-anchor" href="#UserProcessorTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="TotalProcessorTime"><code><span class="field-name">TotalProcessorTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">cs.system.TimeSpan</a></code><a class="header-anchor" href="#TotalProcessorTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Threads"><code><span class="field-name">Threads</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/ProcessThreadCollection/" class="type-link">ProcessThreadCollection</a></code><a class="header-anchor" href="#Threads"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SynchronizingObject"><code><span class="field-name">SynchronizingObject</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/componentmodel/ISynchronizeInvoke/" class="type-link">cs.system.componentmodel.ISynchronizeInvoke</a></code><a class="header-anchor" href="#SynchronizingObject"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="StartTime"><code><span class="field-name">StartTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#StartTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="StartInfo"><code><span class="field-name">StartInfo</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/ProcessStartInfo/" class="type-link">ProcessStartInfo</a></code><a class="header-anchor" href="#StartInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="StandardOutput"><code><span class="field-name">StandardOutput</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/StreamReader/" class="type-link">cs.system.io.StreamReader</a></code><a class="header-anchor" href="#StandardOutput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="StandardInput"><code><span class="field-name">StandardInput</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/StreamWriter/" class="type-link">cs.system.io.StreamWriter</a></code><a class="header-anchor" href="#StandardInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="StandardError"><code><span class="field-name">StandardError</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/io/StreamReader/" class="type-link">cs.system.io.StreamReader</a></code><a class="header-anchor" href="#StandardError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Responding"><code><span class="field-name">Responding</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Responding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ProcessorAffinity"><code><span class="field-name">ProcessorAffinity</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#ProcessorAffinity"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ProcessName"><code><span class="field-name">ProcessName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ProcessName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PrivilegedProcessorTime"><code><span class="field-name">PrivilegedProcessorTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/TimeSpan/" class="type-link">cs.system.TimeSpan</a></code><a class="header-anchor" href="#PrivilegedProcessorTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="SessionId"><code><span class="field-name">SessionId</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#SessionId"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PrivateMemorySize"><code><span class="field-name">PrivateMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PrivateMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PriorityClass"><code><span class="field-name">PriorityClass</span><span class="operator">:</span> <span class="type-name">Anonymous</span></code><a class="header-anchor" href="#PriorityClass"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PriorityBoostEnabled"><code><span class="field-name">PriorityBoostEnabled</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#PriorityBoostEnabled"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PeakWorkingSet64"><code><span class="field-name">PeakWorkingSet64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#PeakWorkingSet64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PeakVirtualMemorySize64"><code><span class="field-name">PeakVirtualMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#PeakVirtualMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PeakPagedMemorySize64"><code><span class="field-name">PeakPagedMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#PeakPagedMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PagedSystemMemorySize64"><code><span class="field-name">PagedSystemMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#PagedSystemMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PagedMemorySize64"><code><span class="field-name">PagedMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#PagedMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NonpagedSystemMemorySize64"><code><span class="field-name">NonpagedSystemMemorySize64</span><span class="operator">:</span> <a href="/api-docs/unity/haxe/Int64/" class="type-link">haxe.Int64</a></code><a class="header-anchor" href="#NonpagedSystemMemorySize64"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PeakWorkingSet"><code><span class="field-name">PeakWorkingSet</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PeakWorkingSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PeakVirtualMemorySize"><code><span class="field-name">PeakVirtualMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PeakVirtualMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PeakPagedMemorySize"><code><span class="field-name">PeakPagedMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PeakPagedMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PagedSystemMemorySize"><code><span class="field-name">PagedSystemMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PagedSystemMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="PagedMemorySize"><code><span class="field-name">PagedMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#PagedMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="NonpagedSystemMemorySize"><code><span class="field-name">NonpagedSystemMemorySize</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#NonpagedSystemMemorySize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Modules"><code><span class="field-name">Modules</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/ProcessModuleCollection/" class="type-link">ProcessModuleCollection</a></code><a class="header-anchor" href="#Modules"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MinWorkingSet"><code><span class="field-name">MinWorkingSet</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#MinWorkingSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MaxWorkingSet"><code><span class="field-name">MaxWorkingSet</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#MaxWorkingSet"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MainWindowTitle"><code><span class="field-name">MainWindowTitle</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#MainWindowTitle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MainWindowHandle"><code><span class="field-name">MainWindowHandle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#MainWindowHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MainModule"><code><span class="field-name">MainModule</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/ProcessModule/" class="type-link">ProcessModule</a></code><a class="header-anchor" href="#MainModule"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="MachineName"><code><span class="field-name">MachineName</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#MachineName"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Id"><code><span class="field-name">Id</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#Id"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HasExited"><code><span class="field-name">HasExited</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#HasExited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="HandleCount"><code><span class="field-name">HandleCount</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#HandleCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="Handle"><code><span class="field-name">Handle</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/IntPtr/" class="type-link">cs.system.IntPtr</a></code><a class="header-anchor" href="#Handle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ExitTime"><code><span class="field-name">ExitTime</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/DateTime/" class="type-link">cs.system.DateTime</a></code><a class="header-anchor" href="#ExitTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="ExitCode"><code><span class="field-name">ExitCode</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#ExitCode"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="EnableRaisingEvents"><code><span class="field-name">EnableRaisingEvents</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#EnableRaisingEvents"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description" id="BasePriority"><code><span class="field-name">BasePriority</span><span class="operator">:</span> <a href="/api-docs/unity/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#BasePriority"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_OutputDataReceived"><code><span class="field-name">add_OutputDataReceived</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/" class="type-link">DataReceivedEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_OutputDataReceived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [DataReceivedEventHandler](/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_OutputDataReceived"><code><span class="field-name">remove_OutputDataReceived</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/" class="type-link">DataReceivedEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_OutputDataReceived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [DataReceivedEventHandler](/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_ErrorDataReceived"><code><span class="field-name">add_ErrorDataReceived</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/" class="type-link">DataReceivedEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_ErrorDataReceived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [DataReceivedEventHandler](/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_ErrorDataReceived"><code><span class="field-name">remove_ErrorDataReceived</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/" class="type-link">DataReceivedEventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_ErrorDataReceived"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [DataReceivedEventHandler](/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="add_Exited"><code><span class="field-name">add_Exited</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">cs.system.EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#add_Exited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.system.EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="remove_Exited"><code><span class="field-name">remove_Exited</span><span class="parenthesis">(</span><span class="arg-name">value</span><span class="operator">:</span> <a href="/api-docs/unity/cs/system/EventHandler/" class="type-link">cs.system.EventHandler</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#remove_Exited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `value` | [cs.system.EventHandler](/api-docs/unity/cs/system/EventHandler/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Close"><code><span class="field-name">Close</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Close"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CloseMainWindow"><code><span class="field-name">CloseMainWindow</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#CloseMainWindow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="Kill"><code><span class="field-name">Kill</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Kill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Refresh"><code><span class="field-name">Refresh</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Refresh"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Start"><code><span class="field-name">Start</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#Start"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="ToString"><code><span class="field-name">ToString</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/String/" class="type-link">String</a></code><a class="header-anchor" href="#ToString"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [String](/api-docs/unity/String/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="WaitForExit"><code><span class="field-name">WaitForExit</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#WaitForExit"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="WaitForInputIdle"><code><span class="field-name">WaitForInputIdle</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#WaitForInputIdle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginOutputReadLine"><code><span class="field-name">BeginOutputReadLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginOutputReadLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CancelOutputRead"><code><span class="field-name">CancelOutputRead</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CancelOutputRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="BeginErrorReadLine"><code><span class="field-name">BeginErrorReadLine</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#BeginErrorReadLine"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="CancelErrorRead"><code><span class="field-name">CancelErrorRead</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#CancelErrorRead"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="Dispose"><code><span class="field-name">Dispose</span><span class="parenthesis">(</span><span class="arg-name">disposing</span><span class="operator">:</span> <a href="/api-docs/unity/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#Dispose"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>


| Name | Type |
|------|------|
| `disposing` | [Bool](/api-docs/unity/Bool/) |

<hr class="field-separator" />

<div class="signature field-method no-description" id="OnExited"><code><span class="field-name">OnExited</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#OnExited"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description" id="new"><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/unity/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |
| `:libType` | - |
| `:csNative` | - |

