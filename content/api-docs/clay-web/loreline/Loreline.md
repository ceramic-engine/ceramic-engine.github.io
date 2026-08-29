---
layout: api-docs
category: api-docs
subCategory: doc
menu: Loreline
title: Loreline
target: Clay (Web)
permalink: api-docs/clay-web/loreline/Loreline/
---

# Loreline

<div class="view-source"><a href="https://github.com/jeremyfa/loreline/blob/master/src/loreline/Loreline.hx">View source</a></div>

<div class="type-hierarchy"><strong>loreline.Loreline</strong> (Class)</div>

The main public API for Loreline runtime.
Provides easy access to the core functionality for parsing and running Loreline scripts.

## Static Members

<div class="signature field-method has-description" id="lastError"><code><span class="field-name">lastError</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Error/" class="type-link">Error</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#lastError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<div class="see"><strong>See:</strong> _lastError</div>

| Returns |
|---------|
| [Null](/api-docs/clay-web/Null/)<[Error](/api-docs/clay-web/loreline/Error/)> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="parse"><code><span class="field-name">parse</span><span class="parenthesis">(</span><span class="arg-name">input</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filePath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleFile</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/ImportsFileHandler/" class="type-link">ImportsFileHandler</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#parse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Parses the given text input and creates an executable `Script` instance from it.

This is the first step in working with a Loreline script. The returned
`Script` object can then be passed to methods `play()` or `resume()`.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `input` | [String](/api-docs/clay-web/String/) | | The Loreline script content as a string (`.lor` format)  |
| `filePath` | [String](/api-docs/clay-web/String/) | *(optional)* | (optional) The file path of the input being parsed. If provided, requires `handleFile` as well.  |
| `handleFile` | [Null](/api-docs/clay-web/Null/)<[ImportsFileHandler](/api-docs/clay-web/loreline/ImportsFileHandler/)> | *(optional)* | * (optional) A file handler to read imports. If that handler is asynchronous, then `parse()` method will return null and `callback` argument should be used to get the final script  |
| `callback` | Function | *(optional)* | If provided, will be called with the resulting script as argument. Mostly useful when reading file imports asynchronously. When a callback is supplied, parse errors are reported by invoking it with `null` and the error becomes readable via `Loreline.lastError()`. `parse()` itself never throws in that mode. Without a callback, the call throws on error as usual.  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Script](/api-docs/clay-web/loreline/Script/)> | The parsed script as an AST `Script` instance (if loaded synchronously)  |

<hr class="field-separator" />

<div class="signature field-method has-description" id="loadLocale"><code><span class="field-name">loadLocale</span><span class="parenthesis">(</span><span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">filePath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">handleFile</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/loreline/ImportsFileHandler/" class="type-link">ImportsFileHandler</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">callback</span><span class="operator">:</span> <span class="type-name">Function</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Null/" class="type-link">Null</a><span class="operator">&lt;</span><a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#loadLocale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loads translations for a specific locale, walking the script's full import tree.

For each file involved in the script (root + transitively imported), the
corresponding translation file is looked up by inserting `.<locale>` before
the extension (e.g. `characters.lor` -> `characters.fr.lor`). Missing translation
files are silently skipped.

Each translation key is stored under both:
  - a global key `<id>` (first occurrence wins, root file priority)
  - a scoped key `<source-rel-path>#<id>` (always set per file, allows override)

The interpreter prefers the scoped key when looking up a translation.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `locale` | [String](/api-docs/clay-web/String/) | | The locale code (e.g. "fr")  |
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | | The parsed source script (must have been parsed with a file path or `filePath` must be provided)  |
| `filePath` | [String](/api-docs/clay-web/String/) | *(optional)* | (optional) Override where to look for translation files. If null, defaults to `script.filePath`. Can be a `.lor`/`.lor.txt` file path (translations sit alongside source files) or a directory path (translations are all in that directory).  |
| `handleFile` | [Null](/api-docs/clay-web/Null/)<[ImportsFileHandler](/api-docs/clay-web/loreline/ImportsFileHandler/)> | *(optional)* | (optional) File handler for reading translation files  |
| `callback` | Function | *(optional)* | (optional) Called with the merged translations map. Required for async file handlers. When supplied, errors are routed by calling the callback with `null`; the call never throws and `Loreline.lastError()` returns the underlying error (including the file path that failed). Without a callback, the call throws on error as usual.  |

| Returns | Description |
|---------|-------------|
| [Null](/api-docs/clay-web/Null/)<[Map](/api-docs/clay-web/Map/)> | The merged translations map (synchronously, when `handleFile` is sync), or `null` if a translation file exists but is invalid. Missing translation files are still skipped silently. `lastError()` is only set when a file is present but can't be parsed (broken `.lor`, malformed `.po`/`.xliff`/`.csv`, etc.). |

<hr class="field-separator" />

<div class="signature field-method has-description" id="play"><code><span class="field-name">play</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="arg-name">handleDialogue</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/DialogueHandler/" class="type-link">DialogueHandler</a><span class="operator">,</span> <span class="arg-name">handleChoice</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ChoiceHandler/" class="type-link">ChoiceHandler</a><span class="operator">,</span> <span class="arg-name">handleFinish</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/FinishHandler/" class="type-link">FinishHandler</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beatName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/InterpreterOptions/" class="type-link">InterpreterOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a></code><a class="header-anchor" href="#play"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Starts playing a Loreline script from the beginning or a specific beat.

This function takes care of initializing the interpreter and starting execution
immediately. You'll need to provide handlers for dialogues, choices, and
script completion.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | | The parsed script (result from `parse()`)  |
| `handleDialogue` | [DialogueHandler](/api-docs/clay-web/loreline/DialogueHandler/) | | Function called when dialogue text should be displayed  |
| `handleChoice` | [ChoiceHandler](/api-docs/clay-web/loreline/ChoiceHandler/) | | Function called when player needs to make a choice  |
| `handleFinish` | [FinishHandler](/api-docs/clay-web/loreline/FinishHandler/) | | Function called when script execution completes  |
| `beatName` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional name of a specific beat to start from (defaults to first beat)  |
| `options` | [InterpreterOptions](/api-docs/clay-web/loreline/InterpreterOptions/) | *(optional)* | Additional options  |

| Returns | Description |
|---------|-------------|
| [Interpreter](/api-docs/clay-web/loreline/Interpreter/) | The interpreter instance that is running the script |

<hr class="field-separator" />

<div class="signature field-method has-description" id="resume"><code><span class="field-name">resume</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="arg-name">handleDialogue</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/DialogueHandler/" class="type-link">DialogueHandler</a><span class="operator">,</span> <span class="arg-name">handleChoice</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/ChoiceHandler/" class="type-link">ChoiceHandler</a><span class="operator">,</span> <span class="arg-name">handleFinish</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/FinishHandler/" class="type-link">FinishHandler</a><span class="operator">,</span> <span class="arg-name">saveData</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/SaveData/" class="type-link">SaveData</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">beatName</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">options</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/InterpreterOptions/" class="type-link">InterpreterOptions</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Interpreter/" class="type-link">Interpreter</a></code><a class="header-anchor" href="#resume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Resumes a previously saved Loreline script from its saved state.

This allows you to continue a story from the exact point where it was saved,
restoring all state variables, choices, and player progress.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | | The parsed script (result from `parse()`)  |
| `handleDialogue` | [DialogueHandler](/api-docs/clay-web/loreline/DialogueHandler/) | | Function called when dialogue text should be displayed  |
| `handleChoice` | [ChoiceHandler](/api-docs/clay-web/loreline/ChoiceHandler/) | | Function called when player needs to make a choice  |
| `handleFinish` | [FinishHandler](/api-docs/clay-web/loreline/FinishHandler/) | | Function called when script execution completes  |
| `saveData` | [SaveData](/api-docs/clay-web/loreline/SaveData/) | | The saved game data (typically from `interpreter.save()`)  |
| `beatName` | [String](/api-docs/clay-web/String/) | *(optional)* | Optional beat name to override where to resume from  |
| `options` | [InterpreterOptions](/api-docs/clay-web/loreline/InterpreterOptions/) | *(optional)* |  |

| Returns | Description |
|---------|-------------|
| [Interpreter](/api-docs/clay-web/loreline/Interpreter/) | The interpreter instance that is running the script |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extractTranslations"><code><span class="field-name">extractTranslations</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#extractTranslations"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Extracts translations from a parsed translation script.

Given a translation file parsed with `parse()`, this returns a translations map
that can be passed as `options.translations` to `play()` or `resume()`.



| Name | Type | Description |
|------|------|-------------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | The parsed translation script (result from `parse()` on a `.XX.lor` file)  |

| Returns | Description |
|---------|-------------|
| [Map](/api-docs/clay-web/Map/) | A translations map to pass as `InterpreterOptions.translations` |

<hr class="field-separator" />

<div class="signature field-method has-description" id="translationFormat"><code><span class="field-name">translationFormat</span><span class="parenthesis">(</span><span class="arg-name">name</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">enabled</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#translationFormat"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable or disable runtime support for an alternate translation file format.

By default, only `.<locale>.lor` files are tried by `loadLocale`. Call this
to opt in to additional formats. Known names:
  - `"po"`:    GNU gettext PO (`.po`)
  - `"xliff"`: XLIFF 1.2 / 2.x (`.xliff`, `.xlf`)
  - `"csv"`:   CSV / TSV (`.csv`, `.tsv`)

Unknown names are accepted silently (forward-compat for future formats).

Malformed files in an enabled format (e.g. broken XML in a `.xliff`,
a `.po` with an unterminated quoted string) surface as `loreline.Error`
out of `loadLocale`, caught via try/catch in sync mode, or via
`Loreline.lastError()` after a callback fires with `null` in async mode.



| Name | Type | Description |
|------|------|-------------|
| `name` | [String](/api-docs/clay-web/String/) | The format identifier (see above)  |
| `enabled` | [Bool](/api-docs/clay-web/Bool/) | True to enable the format, false to disable |

<hr class="field-separator" />

<div class="signature field-method has-description" id="generateTranslationFile"><code><span class="field-name">generateTranslationFile</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">existing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">format</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">locale</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#generateTranslationFile"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Generates a translation file body for the given source `script`.

Each translatable string in the source that has an `#id` marker
becomes one entry in the output. If `existing` is provided
(typically the result of `extractTranslations` on a previously-saved
translation file), entries already filled in there are preserved
verbatim; otherwise each entry seeds with the source text.

Companion to the `loreline translate ... --lang xx` CLI command.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | | The parsed source script  |
| `existing` | [Map](/api-docs/clay-web/Map/) | *(optional)* | (optional) Existing translations to preserve when merging  |
| `format` | [String](/api-docs/clay-web/String/) | *(optional)* |  |
| `locale` | [String](/api-docs/clay-web/String/) | *(optional)* |  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The translation file body as a string, ready to write to disk |

<hr class="field-separator" />

<div class="signature field-method has-description" id="insertLocalizationKeys"><code><span class="field-name">insertLocalizationKeys</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">includeImports</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a> <span class="operator">=</span> <span class="default-value">true</span><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">reservedIds</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#insertLocalizationKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Inserts `#id` markers after every translatable string in `content`
that doesn't already have one. `script` must be the AST parsed
from the same `content`. Returns the rewritten content.

When `includeImports` is false, imported scripts are skipped, their
byte offsets refer to other files' contents and would corrupt
`content`. Tooling that walks imports externally should pass false.

When `reservedIds` is provided, it's used (and mutated) as the
shared existing-IDs set across calls, useful for coordinating
ID generation across multiple per-file invocations so that file
B's auto-IDs avoid every ID already in file A. Existing IDs from
this file's hash comments are added to the map; newly-generated
IDs are added too.

Equivalent to the `--auto-ids` flag of the `loreline translate` CLI.

| Name | Type | Default |
|------|------|---------|
| `content` | [String](/api-docs/clay-web/String/) | |
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | |
| `includeImports` | [Bool](/api-docs/clay-web/Bool/) | `true` |
| `reservedIds` | [Map](/api-docs/clay-web/Map/) | *(optional)* |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="collectHashIds"><code><span class="field-name">collectHashIds</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">out</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Map/" class="type-link">Map</a></code><a class="header-anchor" href="#collectHashIds"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Lex-only scan of `content` for every hash-comment identifier
(`#xxxx`). Cheap compared to a full parse. Runs the lexer over
the text and pulls out every `CommentHash` payload. Use to build
project-wide reserved-IDs registries.

Fills and returns `out` (or a fresh map when `out` is null).

| Name | Type | Default |
|------|------|---------|
| `content` | [String](/api-docs/clay-web/String/) | |
| `out` | [Map](/api-docs/clay-web/Map/) | *(optional)* |

| Returns |
|---------|
| [Map](/api-docs/clay-web/Map/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="removeLocalizationKeys"><code><span class="field-name">removeLocalizationKeys</span><span class="parenthesis">(</span><span class="arg-name">content</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#removeLocalizationKeys"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Strips every `#id` marker emitted by `insertLocalizationKeys` (or
authored manually). The inverse operation. Returns the rewritten
content. Equivalent to the `--clear` flag of the `loreline translate` CLI.

| Name | Type |
|------|------|
| `content` | [String](/api-docs/clay-web/String/) |
| `script` | [Script](/api-docs/clay-web/loreline/Script/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="extractTranslatableEntries"><code><span class="field-name">extractTranslatableEntries</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Array/" class="type-link">Array</a><span class="operator">&lt;</span><span class="type-name">AnonStruct</span><span class="operator">&gt;</span></code><a class="header-anchor" href="#extractTranslatableEntries"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns every `#id`-tagged translatable string in `script` paired
with its id. Strings WITHOUT an `#id` marker are filtered out. Use
`hasUntaggedTranslatableStrings` to detect those.

| Name | Type |
|------|------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) |

| Returns |
|---------|
| [Array](/api-docs/clay-web/Array/)<AnonStruct> |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasUntaggedTranslatableStrings"><code><span class="field-name">hasUntaggedTranslatableStrings</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasUntaggedTranslatableStrings"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Returns true if `script` contains at least one translatable
string (text statement, dialogue, or choice option) that has no
`#id` hash comment. Non-mutating, purely an AST inspection.
Used by tooling to gate "add tags?" prompts before generating
translation files.

| Name | Type |
|------|------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) |

| Returns |
|---------|
| [Bool](/api-docs/clay-web/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="print"><code><span class="field-name">print</span><span class="parenthesis">(</span><span class="arg-name">script</span><span class="operator">:</span> <a href="/api-docs/clay-web/loreline/Script/" class="type-link">Script</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">indent</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="operator">?</span><span class="arg-name">newline</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#print"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Prints a parsed script back into Loreline source code.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `script` | [Script](/api-docs/clay-web/loreline/Script/) | | The parsed script (result from `parse()`)  |
| `indent` | [String](/api-docs/clay-web/String/) | *(optional)* | The indentation string to use (defaults to two spaces)  |
| `newline` | [String](/api-docs/clay-web/String/) | *(optional)* | The newline string to use (defaults to "\n")  |

| Returns | Description |
|---------|-------------|
| [String](/api-docs/clay-web/String/) | The printed source code as a string |

<hr class="field-separator" />

<div class="signature field-method has-description" id="update"><code><span class="field-name">update</span><span class="parenthesis">(</span><span class="arg-name">delta</span><span class="operator">:</span> <a href="/api-docs/clay-web/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#update"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Ticks pending wait() timers. Call this from your game loop every frame.
The first call enables non-blocking deferred mode for wait() on sys targets;
before this is called, wait() falls back to blocking Sys.sleep() (correct for CLI tools).


| Name | Type | Description |
|------|------|-------------|
| `delta` | [Float](/api-docs/clay-web/Float/) | Time elapsed since last frame in seconds |

## Private Members

<div class="signature field-method has-description" id="relativePath"><code><span class="field-name">relativePath</span><span class="parenthesis">(</span><span class="arg-name">fromDir</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="operator">,</span> <span class="arg-name">toPath</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-web/String/" class="type-link">String</a></code><a class="header-anchor" href="#relativePath"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Computes a relative path from `fromDir` to `toPath`, both expected to be
normalized absolute paths. Returns a forward-slash-separated relative path.

| Name | Type |
|------|------|
| `fromDir` | [String](/api-docs/clay-web/String/) |
| `toPath` | [String](/api-docs/clay-web/String/) |

| Returns |
|---------|
| [String](/api-docs/clay-web/String/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:expose` | - |

