---
layout: api-docs
category: api-docs
subCategory: index
menu: Index
title: API Reference
target: Headless
permalink: api-docs/headless/
---

# API Reference

- [Ceramic](#ceramic)
- [Arcade](#arcade)
- [Tilemap](#tilemap)
- [Ldtk](#ldtk)
- [Spine](#spine)
- [Script](#script)
- [Sprite](#sprite)
- [Ui](#ui)
- [Dialogs](#dialogs)
- [Gif](#gif)
- [Tracker](#tracker)
- [Elements](#elements)
- [Ase](#ase)
- [Format](#format)
- [Tiled](#tiled)
- [Nape](#nape)
- [BinPacking](#binpacking)
- [Hsluv](#hsluv)
- [Hscript](#hscript)
- [Fuzzaldrin](#fuzzaldrin)
- [Polyline](#polyline)
- [Spec](#spec)
- [Other](#other)
- [Haxe](#haxe)
- [Headless](#headless)
- [Hxnodejs](#hxnodejs)

## Ceramic

| Type | Kind | Description |
|------|------|-------------|
| [AllApi](/api-docs/headless/ceramic/AllApi/) | class | Utility class to prevent dead code elimination of API classes. |
| [AlphaColor](/api-docs/headless/ceramic/AlphaColor/) | abstract | Color with alpha channel stored as a 32-bit integer. |
| [AntialiasedTriangle](/api-docs/headless/ceramic/AntialiasedTriangle/) | class | A specialized triangle shape that simulates antialiasing using additional vertices. |
| [App](/api-docs/headless/ceramic/App/) | class | `App` class is the root instance of any ceramic app. |
| [AppXUpdatesHandler](/api-docs/headless/ceramic/AppXUpdatesHandler/) | class | Internal handler for delayed update callbacks in the App class. |
| [Arc](/api-docs/headless/ceramic/Arc/) | class | A mesh subclass for drawing arcs, pies, rings, and disc geometry. |
| [ArrayPool](/api-docs/headless/ceramic/ArrayPool/) | class | A pool system for efficiently reusing arrays of fixed sizes. |
| [Assert](/api-docs/headless/ceramic/Assert/) | class | Assertion utility for runtime validation in debug builds. |
| [Asset](/api-docs/headless/ceramic/Asset/) | class | Base class for all asset types in Ceramic. |
| [AssetId](/api-docs/headless/ceramic/AssetId/) | abstract | Type-safe wrapper for asset identifiers. |
| [AssetOptions](/api-docs/headless/ceramic/AssetOptions/) | typedef | Asset loading options. |
| [AssetPathInfo](/api-docs/headless/ceramic/AssetPathInfo/) | class | Information extracted from a raw asset path. |
| [Assets](/api-docs/headless/ceramic/Assets/) | class | The main asset management class for Ceramic framework. |
| [AssetsLoadMethod](/api-docs/headless/ceramic/AssetsLoadMethod/) | abstract | Defines how assets should be loaded by the system. |
| [AssetsScheduleMethod](/api-docs/headless/ceramic/AssetsScheduleMethod/) | abstract | Defines how multiple assets are scheduled for loading. |
| [AssetStatus](/api-docs/headless/ceramic/AssetStatus/) | enum | Represents the current loading state of an asset. |
| [AtlasAsset](/api-docs/headless/ceramic/AtlasAsset/) | class | Asset for loading texture atlases (sprite sheets with metadata). |
| [Audio](/api-docs/headless/ceramic/Audio/) | class | Main audio system manager for Ceramic. |
| [AudioFilter](/api-docs/headless/ceramic/AudioFilter/) | class | Base class for audio filters that can process audio buffers in real-time. |
| [AudioFilterBuffer](/api-docs/headless/ceramic/AudioFilterBuffer/) | typedef | Platform-specific audio filter buffer for real-time audio processing. |
| [AudioFilters](/api-docs/headless/ceramic/AudioFilters/) | class | Internal manager for audio filter worklets across audio buses. |
| [AudioFilterWorklet](/api-docs/headless/ceramic/AudioFilterWorklet/) | class | The actual worklet class that will do the audio processing of a given `AudioFilter`. |
| [AudioMixer](/api-docs/headless/ceramic/AudioMixer/) | class | Controls audio properties for a group of sounds. |
| [AutoCollections](/api-docs/headless/ceramic/AutoCollections/) | interface | Interface that enables automatic collection generation for classes. |
| [BackgroundQueue](/api-docs/headless/ceramic/BackgroundQueue/) | class | A thread-safe queue for executing functions serially in a background thread. |
| [BezierEasing](/api-docs/headless/ceramic/BezierEasing/) | class | High-performance Bezier curve easing for smooth animations. |
| [BinaryAsset](/api-docs/headless/ceramic/BinaryAsset/) | class | Asset for loading binary files as raw bytes. |
| [BitmapFont](/api-docs/headless/ceramic/BitmapFont/) | class | A bitmap font implementation that handles both regular bitmap fonts and MSDF (Multi-channel Signe... |
| [BitmapFontCharacter](/api-docs/headless/ceramic/BitmapFontCharacter/) | class | Represents a single character (glyph) in a bitmap font. |
| [BitmapFontData](/api-docs/headless/ceramic/BitmapFontData/) | class | Complete data structure containing all information about a bitmap font. |
| [BitmapFontDataPage](/api-docs/headless/ceramic/BitmapFontDataPage/) | class | Information about a single texture page in a multi-page bitmap font. |
| [BitmapFontDistanceFieldData](/api-docs/headless/ceramic/BitmapFontDistanceFieldData/) | class | Configuration data for distance field fonts (SDF/MSDF). |
| [BitmapFontParser](/api-docs/headless/ceramic/BitmapFontParser/) | class | Parser for bitmap font definition files in BMFont format. |
| [Blending](/api-docs/headless/ceramic/Blending/) | abstract | Blending modes that control how pixels are combined when drawing. |
| [Border](/api-docs/headless/ceramic/Border/) | class | A rectangle visual that display a border |
| [BorderPosition](/api-docs/headless/ceramic/BorderPosition/) | enum | Defines where a border is positioned relative to a shape's edge. |
| [Camera](/api-docs/headless/ceramic/Camera/) | class | A flexible camera system for 2D games. |
| [ChokidarWatchedFileStatus](/api-docs/headless/ceramic/ChokidarWatchedFileStatus/) | abstract | File change status types used by the chokidar file watcher. |
| [Click](/api-docs/headless/ceramic/Click/) | class | Component that detects click/tap events on visuals. |
| [Closure](/api-docs/headless/ceramic/Closure/) | class | A simple closure implementation for storing a function with pre-bound arguments. |
| [Collection](/api-docs/headless/ceramic/Collection/) | abstract | A type-safe collection for managing CollectionEntry items. |
| [CollectionEntry](/api-docs/headless/ceramic/CollectionEntry/) | class | Base class for entries that can be stored in a Collection. |
| [CollectionImpl](/api-docs/headless/ceramic/CollectionImpl/) | class | Internal implementation of the Collection abstract. |
| [CollectionUtils](/api-docs/headless/ceramic/CollectionUtils/) | class | Utility functions for working with Collections. |
| [Color](/api-docs/headless/ceramic/Color/) | abstract | Class representing a color, based on Int. |
| [Component](/api-docs/headless/ceramic/Component/) | interface | Interface for components that can be attached to entities. |
| [ComputeFps](/api-docs/headless/ceramic/ComputeFps/) | class | A utility class for calculating frames per second (FPS) using a rolling average. |
| [ConvertArray](/api-docs/headless/ceramic/ConvertArray/) | class | Converter for array fields in fragments and data serialization. |
| [ConvertColor](/api-docs/headless/ceramic/ConvertColor/) | class | Converter for Color fields in fragments and data serialization. |
| [ConvertComponentMap](/api-docs/headless/ceramic/ConvertComponentMap/) | class | Converter for component map fields in fragments and data serialization. |
| [ConvertField](/api-docs/headless/ceramic/ConvertField/) | interface | Interface to convert basic type `T` to field type `U` and vice versa. |
| [ConvertFont](/api-docs/headless/ceramic/ConvertFont/) | class | Converter for BitmapFont fields in fragments and data serialization. |
| [ConvertFragmentData](/api-docs/headless/ceramic/ConvertFragmentData/) | class | Converter for FragmentData fields in fragments and data serialization. |
| [ConvertIntBoolMap](/api-docs/headless/ceramic/ConvertIntBoolMap/) | class | Converter for IntBoolMap fields in fragments and data serialization. |
| [ConvertMap](/api-docs/headless/ceramic/ConvertMap/) | class | Converter for Map fields in fragments and data serialization. |
| [ConvertTexture](/api-docs/headless/ceramic/ConvertTexture/) | class | Converter for Texture fields in fragments and data serialization. |
| [Csv](/api-docs/headless/ceramic/Csv/) | class | CSV parsing and generation utilities with proper escaping and quote handling. |
| [CustomAssetKind](/api-docs/headless/ceramic/CustomAssetKind/) | class | Defines a custom asset type that can be registered with the Assets system. |
| [DatabaseAsset](/api-docs/headless/ceramic/DatabaseAsset/) | class | Asset for loading CSV database files. |
| [DecomposedTransform](/api-docs/headless/ceramic/DecomposedTransform/) | class | Decomposed transform holds rotation, translation, scale, skew and pivot informations. |
| [DoubleClick](/api-docs/headless/ceramic/DoubleClick/) | class | Component that detects double-click/double-tap events on visuals. |
| [DynamicData](/api-docs/headless/ceramic/DynamicData/) | class | A flexible component for attaching arbitrary data to entities. |
| [Easing](/api-docs/headless/ceramic/Easing/) | enum | Enumeration of standard easing functions for animations. |
| [EasingUtils](/api-docs/headless/ceramic/EasingUtils/) | class | Utility functions for converting between Easing enum values and strings. |
| [EditText](/api-docs/headless/ceramic/EditText/) | class | Component that enables text editing functionality for Text visuals. |
| [Either](/api-docs/headless/ceramic/Either/) | abstract | A type that can hold a value of either type T1 or type T2. |
| [Entity](/api-docs/headless/ceramic/Entity/) | class | Base class for all entities in the Ceramic framework. |
| [EntityData](/api-docs/headless/ceramic/EntityData/) | class | Static utilities for managing dynamic data on entities. |
| [Enums](/api-docs/headless/ceramic/Enums/) | class | Macro utilities for working with enum values at compile time. |
| [Equal](/api-docs/headless/ceramic/Equal/) | class | Deep equality comparison utilities for various data types. |
| [Errors](/api-docs/headless/ceramic/Errors/) | class | Global error handling utilities for the Ceramic engine. |
| [Extensions](/api-docs/headless/ceramic/Extensions/) | class | A collection of static extension methods for common data types. |
| [FieldInfo](/api-docs/headless/ceramic/FieldInfo/) | class | Runtime reflection utility for extracting field type information from classes. |
| [FieldMeta](/api-docs/headless/ceramic/FieldMeta/) | class | Runtime reflection utility for accessing field metadata. |
| [Files](/api-docs/headless/ceramic/Files/) | class | Cross-platform filesystem utilities for Ceramic. |
| [FileWatcher](/api-docs/headless/ceramic/FileWatcher/) | class | Cross-platform file monitoring system for hot-reloading and file change detection. |
| [Filter](/api-docs/headless/ceramic/Filter/) | class | A visual container that renders its children to a texture for post-processing effects. |
| [Flags](/api-docs/headless/ceramic/Flags/) | abstract | Efficient bit flag storage using a single integer. |
| [Float32Array](/api-docs/headless/ceramic/Float32Array/) | typedef | A typed array of 32-bit floating point values. |
| [FontAsset](/api-docs/headless/ceramic/FontAsset/) | class | Asset type for loading bitmap fonts. |
| [Fragment](/api-docs/headless/ceramic/Fragment/) | class | A fragment is a powerful container that manages groups of entities and visuals |
| [FragmentData](/api-docs/headless/ceramic/FragmentData/) | typedef | Data structure that defines a fragment's content and properties. |
| [FragmentItem](/api-docs/headless/ceramic/FragmentItem/) | typedef | Defines an entity instance within a fragment. |
| [Fragments](/api-docs/headless/ceramic/Fragments/) | class | A compile-time generated class containing constants for all fragment assets. |
| [FragmentsAsset](/api-docs/headless/ceramic/FragmentsAsset/) | class | An asset that loads and manages fragment data from `.fragment` files. |
| [GamepadAxis](/api-docs/headless/ceramic/GamepadAxis/) | abstract | Represents gamepad analog stick and trigger axes. |
| [GamepadButton](/api-docs/headless/ceramic/GamepadButton/) | abstract | Represents gamepad button mappings. |
| [GeometryUtils](/api-docs/headless/ceramic/GeometryUtils/) | class | A collection of static utility functions for 2D geometric calculations. |
| [GlyphQuad](/api-docs/headless/ceramic/GlyphQuad/) | class | A specialized Quad that represents a single rendered glyph (character) in text rendering. |
| [Group](/api-docs/headless/ceramic/Group/) | class | A container for managing collections of entities as a single unit. |
| [HashedString](/api-docs/headless/ceramic/HashedString/) | class | A utility class for encoding and decoding strings with integrity verification using MD5 hashes. |
| [HighPassFilter](/api-docs/headless/ceramic/HighPassFilter/) | class | A high-pass audio filter that attenuates frequencies below a cutoff point. |
| [HighPassFilterWorklet](/api-docs/headless/ceramic/HighPassFilterWorklet/) | class | The audio processing worklet for the high-pass filter. |
| [ImageAsset](/api-docs/headless/ceramic/ImageAsset/) | class | Asset type for loading image files as textures. |
| [ImageType](/api-docs/headless/ceramic/ImageType/) | abstract | Supported image file formats for loading and exporting images. |
| [Immediate](/api-docs/headless/ceramic/Immediate/) | class | A utility class for scheduling callbacks to be executed in a batch. |
| [InitSettings](/api-docs/headless/ceramic/InitSettings/) | class | Same as Settings, but for app startup (inside Project.new(settings)). |
| [Input](/api-docs/headless/ceramic/Input/) | class | Manages all input handling for keyboard and gamepad devices. |
| [IntBoolMap](/api-docs/headless/ceramic/IntBoolMap/) | abstract | A map that uses int as keys and booleans as values. |
| [IntBoolMapIterator](/api-docs/headless/ceramic/IntBoolMapIterator/) | class |  |
| [IntBoolMapKeyIterator](/api-docs/headless/ceramic/IntBoolMapKeyIterator/) | class |  |
| [IntBoolMapKeyValueIterator](/api-docs/headless/ceramic/IntBoolMapKeyValueIterator/) | class |  |
| [IntFloatMap](/api-docs/headless/ceramic/IntFloatMap/) | class | Fallback implementation of IntFloatMap for non-C++/C# targets. |
| [IntFloatMapIterator](/api-docs/headless/ceramic/IntFloatMapIterator/) | class |  |
| [IntFloatMapKeyIterator](/api-docs/headless/ceramic/IntFloatMapKeyIterator/) | class |  |
| [IntFloatMapKeyValueIterator](/api-docs/headless/ceramic/IntFloatMapKeyValueIterator/) | class |  |
| [IntIntMap](/api-docs/headless/ceramic/IntIntMap/) | class |  |
| [IntIntMapIterator](/api-docs/headless/ceramic/IntIntMapIterator/) | class |  |
| [IntIntMapKeyIterator](/api-docs/headless/ceramic/IntIntMapKeyIterator/) | class |  |
| [IntIntMapKeyValueIterator](/api-docs/headless/ceramic/IntIntMapKeyValueIterator/) | class |  |
| [IntMap](/api-docs/headless/ceramic/IntMap/) | class | An object map that uses integers as key. |
| [IntMapIterator](/api-docs/headless/ceramic/IntMapIterator/) | class |  |
| [IntMapKeyIterator](/api-docs/headless/ceramic/IntMapKeyIterator/) | class |  |
| [IntMapKeyValueIterator](/api-docs/headless/ceramic/IntMapKeyValueIterator/) | class |  |
| [Json](/api-docs/headless/ceramic/Json/) | class | JSON utility class that provides a unified interface for JSON operations across all Ceramic targets. |
| [Key](/api-docs/headless/ceramic/Key/) | class | Represents a keyboard key press event with both key code and scan code information. |
| [KeyAcceleratorItem](/api-docs/headless/ceramic/KeyAcceleratorItem/) | enum | Represents a component of a keyboard shortcut combination. |
| [KeyBinding](/api-docs/headless/ceramic/KeyBinding/) | class | Represents a keyboard shortcut binding that triggers when a specific key combination is pressed. |
| [KeyBindings](/api-docs/headless/ceramic/KeyBindings/) | class | Manages a collection of keyboard shortcut bindings. |
| [KeyCode](/api-docs/headless/ceramic/KeyCode/) | abstract | Keyboard key codes representing the character/symbol associated with a key. |
| [Layer](/api-docs/headless/ceramic/Layer/) | class | A specialized container for organizing and grouping visuals. |
| [Lazy](/api-docs/headless/ceramic/Lazy/) | interface | Interface for implementing lazy initialization of properties in Ceramic classes. |
| [Line](/api-docs/headless/ceramic/Line/) | class | Display lines composed of multiple segments, curves and paths. |
| [LineCap](/api-docs/headless/ceramic/LineCap/) | typedef | Defines how line ends are rendered. |
| [LineJoin](/api-docs/headless/ceramic/LineJoin/) | typedef | Defines how line segments are joined at corners. |
| [Logger](/api-docs/headless/ceramic/Logger/) | class | Centralized logging system for Ceramic applications that provides colored, categorized output. |
| [LongPress](/api-docs/headless/ceramic/LongPress/) | class | Component that detects long press/hold gestures on visuals. |
| [LowPassFilter](/api-docs/headless/ceramic/LowPassFilter/) | class | A low-pass audio filter that attenuates frequencies above a cutoff point. |
| [LowPassFilterWorklet](/api-docs/headless/ceramic/LowPassFilterWorklet/) | class | The audio processing worklet for the low-pass filter. |
| [LowRes](/api-docs/headless/ceramic/LowRes/) | class | A container that displays visuals at low resolution with optional antialiasing through supersampl... |
| [DefinesMacro](/api-docs/headless/ceramic/macros/DefinesMacro/) | class | Utilities to access compile-time defines from code. |
| [EnumAbstractMacro](/api-docs/headless/ceramic/macros/EnumAbstractMacro/) | class | Utility macros for working with enum abstracts at compile time. |
| [PluginsMacro](/api-docs/headless/ceramic/macros/PluginsMacro/) | class | Macro for automatic plugin initialization in the Ceramic framework. |
| [Mesh](/api-docs/headless/ceramic/Mesh/) | class | A flexible visual for drawing custom shapes composed of triangles. |
| [MeshColorMapping](/api-docs/headless/ceramic/MeshColorMapping/) | abstract | Defines how colors are mapped to a mesh's geometry. |
| [MeshExtensions](/api-docs/headless/ceramic/MeshExtensions/) | class | Static extension class providing utility methods for Mesh manipulation. |
| [MeshPool](/api-docs/headless/ceramic/MeshPool/) | class | A global object pool for efficiently reusing Mesh instances and their arrays. |
| [MeshUtils](/api-docs/headless/ceramic/MeshUtils/) | class | Low-level utility class for generating mesh data arrays. |
| [MouseButton](/api-docs/headless/ceramic/MouseButton/) | abstract | A typed (mouse) button id |
| [Ngon](/api-docs/headless/ceramic/Ngon/) | class | A mesh that creates regular polygons with a configurable number of sides. |
| [NineSlice](/api-docs/headless/ceramic/NineSlice/) | class | A visual divided into 9 areas to create "nine-slice" textured scalable objects. |
| [NineSliceRendering](/api-docs/headless/ceramic/NineSliceRendering/) | abstract | Defines how a slice (from a `NineSlice` object) should be rendered. |
| [ParticleEmitter](/api-docs/headless/ceramic/ParticleEmitter/) | class | A powerful and flexible particle emitter system for creating visual effects. |
| [ParticleItem](/api-docs/headless/ceramic/ParticleItem/) | class | Represents a single particle in a particle system. |
| [Particles](/api-docs/headless/ceramic/Particles/) | class | A visual container that manages a particle emitter with convenient automatic emission modes. |
| [ParticlesLaunchMode](/api-docs/headless/ceramic/ParticlesLaunchMode/) | enum | Defines how particle velocities are calculated when launched from an emitter. |
| [ParticlesStatus](/api-docs/headless/ceramic/ParticlesStatus/) | enum | Represents the current operational state of a particle emitter. |
| [Path](/api-docs/headless/ceramic/Path/) | class | Cross-platform path manipulation utilities optimized for Ceramic. |
| [PersistentData](/api-docs/headless/ceramic/PersistentData/) | class | Provides a simple key-value storage system for persisting data between application sessions. |
| [PixelArt](/api-docs/headless/ceramic/PixelArt/) | class | A filter configured to display pixel art content with high-quality upscaling. |
| [Pixels](/api-docs/headless/ceramic/Pixels/) | class | Utility class for manipulating raw RGBA pixel data. |
| [Platform](/api-docs/headless/ceramic/Platform/) | class | A class that encapsulate platform-specific code. |
| [Point](/api-docs/headless/ceramic/Point/) | class | A mutable 3D point class with automatic object pooling for memory efficiency. |
| [Pool](/api-docs/headless/ceramic/Pool/) | class | A generic object pool utility. |
| [Preloadable](/api-docs/headless/ceramic/Preloadable/) | interface | Interface for objects that can report their loading progress. |
| [PreloadStatus](/api-docs/headless/ceramic/PreloadStatus/) | abstract | Status values for preloadable resources. |
| [PremultiplyAlpha](/api-docs/headless/ceramic/PremultiplyAlpha/) | class | Utilities for converting between straight and premultiplied alpha in image data. |
| [Quad](/api-docs/headless/ceramic/Quad/) | class | The most basic and commonly used visual for displaying rectangles and images. |
| [ReadOnlyArray](/api-docs/headless/ceramic/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [ReadOnlyMap](/api-docs/headless/ceramic/ReadOnlyMap/) | abstract | A read-only view of a Map that prevents modification. |
| [ReadOnlyPoint](/api-docs/headless/ceramic/ReadOnlyPoint/) | abstract | A read-only view of a Point that prevents modification. |
| [Renderer](/api-docs/headless/ceramic/Renderer/) | class | The core 2D rendering engine for Ceramic, responsible for efficiently drawing all visuals to the ... |
| [RenderPrimitiveType](/api-docs/headless/ceramic/RenderPrimitiveType/) | abstract | Defines the primitive types used for rendering geometry. |
| [RenderTexture](/api-docs/headless/ceramic/RenderTexture/) | class | A texture that can be rendered to, allowing off-screen rendering. |
| [Repeat](/api-docs/headless/ceramic/Repeat/) | class | A visual component that repeats a texture pattern to fill a specified area. |
| [ReusableArray](/api-docs/headless/ceramic/ReusableArray/) | class | A reusable array to use in places that need a temporary array many times. |
| [Runner](/api-docs/headless/ceramic/Runner/) | class | Cross-platform thread management utility for executing code on main and background threads. |
| [RuntimeAssets](/api-docs/headless/ceramic/RuntimeAssets/) | class | Runtime utilities to compute asset lists/names from raw (relative) file list. |
| [ScanCode](/api-docs/headless/ceramic/ScanCode/) | abstract | Keyboard scan codes representing physical key positions. |
| [Scene](/api-docs/headless/ceramic/Scene/) | class | Base class for creating scenes in Ceramic. |
| [SceneStatus](/api-docs/headless/ceramic/SceneStatus/) | abstract | Represents the lifecycle status of a Scene in the Ceramic framework. |
| [SceneSystem](/api-docs/headless/ceramic/SceneSystem/) | class | Core system responsible for managing scene lifecycle, transitions, and display hierarchy. |
| [Screen](/api-docs/headless/ceramic/Screen/) | class | Core screen management class that handles display properties, coordinate transformations, and inp... |
| [ScreenOrientation](/api-docs/headless/ceramic/ScreenOrientation/) | abstract | Defines screen orientation modes for mobile and desktop applications. |
| [ScreenScaling](/api-docs/headless/ceramic/ScreenScaling/) | enum | Defines how the application's logical screen size is mapped to the native screen. |
| [ScriptableAlphaColor](/api-docs/headless/ceramic/scriptable/ScriptableAlphaColor/) | class | Scriptable wrapper for AlphaColor to expose RGBA color functionality to scripts. |
| [ScriptableBlending](/api-docs/headless/ceramic/scriptable/ScriptableBlending/) | class | Scriptable wrapper for Blending enum to expose blending modes to scripts. |
| [ScriptableColor](/api-docs/headless/ceramic/scriptable/ScriptableColor/) | class | Scriptable wrapper for Color to expose RGB color functionality to scripts. |
| [ScriptableFlags](/api-docs/headless/ceramic/scriptable/ScriptableFlags/) | class | Scriptable wrapper for Flags to expose bit flag operations to scripts. |
| [ScriptableMap](/api-docs/headless/ceramic/scriptable/ScriptableMap/) | interface | Scriptable interface for Map to expose key-value mapping functionality to scripts. |
| [ScriptableMeshColorMapping](/api-docs/headless/ceramic/scriptable/ScriptableMeshColorMapping/) | class | Scriptable wrapper for MeshColorMapping to expose mesh coloring modes to scripts. |
| [ScriptableMouseButton](/api-docs/headless/ceramic/scriptable/ScriptableMouseButton/) | class | Scriptable wrapper for MouseButton to expose mouse button constants to scripts. |
| [ScriptableStd](/api-docs/headless/ceramic/scriptable/ScriptableStd/) | class | Scriptable wrapper for Std to expose standard library functions to scripts. |
| [ScrollDirection](/api-docs/headless/ceramic/ScrollDirection/) | enum | Defines the direction of scrolling for scrollable components. |
| [Scroller](/api-docs/headless/ceramic/Scroller/) | class | A scrollable container that allows smooth scrolling and dragging of content. |
| [ScrollerDragThresholdStatus](/api-docs/headless/ceramic/ScrollerDragThresholdStatus/) | abstract |  |
| [ScrollerStatus](/api-docs/headless/ceramic/ScrollerStatus/) | enum | Represents the current state of a Scroller component during user interaction. |
| [SeedRandom](/api-docs/headless/ceramic/SeedRandom/) | class | Seeded random number generator to get reproducible sequences of values. |
| [SelectText](/api-docs/headless/ceramic/SelectText/) | class | Component that handles text selection and cursor display for Text visuals. |
| [Settings](/api-docs/headless/ceramic/Settings/) | class | Central configuration hub for Ceramic applications. |
| [Shader](/api-docs/headless/ceramic/Shader/) | class | Represents a GPU shader program for custom rendering effects. |
| [ShaderAsset](/api-docs/headless/ceramic/ShaderAsset/) | class | Asset type for loading GPU shader programs. |
| [ShaderAttribute](/api-docs/headless/ceramic/ShaderAttribute/) | class | Defines a vertex attribute for shader programs. |
| [Shape](/api-docs/headless/ceramic/Shape/) | class | A visual for drawing arbitrary 2D shapes with automatic triangulation. |
| [Shortcuts](/api-docs/headless/ceramic/Shortcuts/) | class | Convenience static accessors and utility methods for common Ceramic functionality. |
| [Slug](/api-docs/headless/ceramic/Slug/) | class | URL-safe string generator that converts text into slugs suitable for URLs and filenames. |
| [SlugOptions](/api-docs/headless/ceramic/SlugOptions/) | class | Configuration options for slug generation. |
| [SortVisuals](/api-docs/headless/ceramic/SortVisuals/) | class | High-performance stable merge sort implementation specifically optimized for Visual arrays. |
| [SortVisualsByDepth](/api-docs/headless/ceramic/SortVisualsByDepth/) | class | Simplified high-performance stable merge sort for Visual arrays based on depth only. |
| [Sound](/api-docs/headless/ceramic/Sound/) | class | Represents a loaded sound that can be played multiple times. |
| [SoundAsset](/api-docs/headless/ceramic/SoundAsset/) | class | Asset type for loading audio/sound files. |
| [SoundPlayer](/api-docs/headless/ceramic/SoundPlayer/) | abstract | Controls an individual sound playback instance. |
| [State](/api-docs/headless/ceramic/State/) | class | Base class for states in a state machine. |
| [StateMachine](/api-docs/headless/ceramic/StateMachine/) | class | A flexible state machine implementation for managing state transitions. |
| [StateMachineBase](/api-docs/headless/ceramic/StateMachineBase/) | class | Base class for state machine implementations. |
| [StateMachineComponent](/api-docs/headless/ceramic/StateMachineComponent/) | class | A state machine that can be attached to entities as a component. |
| [StateMachineImpl](/api-docs/headless/ceramic/StateMachineImpl/) | class | Implementation class for StateMachine functionality. |
| [StateMachineSystem](/api-docs/headless/ceramic/StateMachineSystem/) | class | System that manages and updates all active state machines. |
| [System](/api-docs/headless/ceramic/System/) | class | A `System` is an object assigned to app lifecycle and used to |
| [Systems](/api-docs/headless/ceramic/Systems/) | class | Manager for all System instances in the application. |
| [Task](/api-docs/headless/ceramic/Task/) | class | Base class for asynchronous tasks that can either succeed or fail. |
| [Tasks](/api-docs/headless/ceramic/Tasks/) | class | Utility class for running Task instances from command-line arguments. |
| [Text](/api-docs/headless/ceramic/Text/) | class | A visual to layout and display text. |
| [TextAlign](/api-docs/headless/ceramic/TextAlign/) | enum | Horizontal text alignment options for text rendering. |
| [TextAsset](/api-docs/headless/ceramic/TextAsset/) | class | Asset type for loading text files. |
| [TextInput](/api-docs/headless/ceramic/TextInput/) | class | Handles keyboard text input and cursor navigation. |
| [TextInputDelegate](/api-docs/headless/ceramic/TextInputDelegate/) | interface | Interface for text layout information providers used by text input systems. |
| [Texture](/api-docs/headless/ceramic/Texture/) | class | A texture represents an image loaded in GPU memory ready for rendering. |
| [TextureAtlas](/api-docs/headless/ceramic/TextureAtlas/) | class | A texture atlas that combines multiple images into larger textures for efficient rendering. |
| [TextureAtlasPacker](/api-docs/headless/ceramic/TextureAtlasPacker/) | class | Dynamic texture atlas builder that packs multiple images into optimized texture pages at runtime. |
| [TextureAtlasPage](/api-docs/headless/ceramic/TextureAtlasPage/) | class | Represents a single texture page within a texture atlas. |
| [TextureAtlasParser](/api-docs/headless/ceramic/TextureAtlasParser/) | class | Parser for texture atlas definition files in multiple formats. |
| [TextureAtlasRegion](/api-docs/headless/ceramic/TextureAtlasRegion/) | class | Represents a single image region within a texture atlas. |
| [TextureFilter](/api-docs/headless/ceramic/TextureFilter/) | enum | Texture filtering modes that control how pixels are sampled when textures are scaled. |
| [TextureTile](/api-docs/headless/ceramic/TextureTile/) | class | Defines a rectangular sub-region within a texture for rendering. |
| [TextureTilePacker](/api-docs/headless/ceramic/TextureTilePacker/) | class | Dynamic texture tile allocator with automatic packing and reuse capabilities. |
| [TextureWrap](/api-docs/headless/ceramic/TextureWrap/) | abstract | Texture wrapping modes for handling UV coordinates outside the 0-1 range. |
| [Timeline](/api-docs/headless/ceramic/Timeline/) | class | An animation timeline system that manages keyframe-based animations. |
| [TimelineBoolKeyframe](/api-docs/headless/ceramic/TimelineBoolKeyframe/) | class | A keyframe that stores a boolean value for timeline animations. |
| [TimelineBoolTrack](/api-docs/headless/ceramic/TimelineBoolTrack/) | class | A timeline track that animates boolean values. |
| [TimelineColorKeyframe](/api-docs/headless/ceramic/TimelineColorKeyframe/) | class | A keyframe that stores a color value for timeline animations. |
| [TimelineColorTrack](/api-docs/headless/ceramic/TimelineColorTrack/) | class | A timeline track that animates color values with smooth interpolation. |
| [TimelineDegreesTrack](/api-docs/headless/ceramic/TimelineDegreesTrack/) | class | A specialized timeline track for animating rotation values in degrees. |
| [TimelineFloatArrayKeyframe](/api-docs/headless/ceramic/TimelineFloatArrayKeyframe/) | class | A keyframe that stores an array of floating-point values for timeline animations. |
| [TimelineFloatArrayTrack](/api-docs/headless/ceramic/TimelineFloatArrayTrack/) | class | A timeline track that animates arrays of floating-point values. |
| [TimelineFloatKeyframe](/api-docs/headless/ceramic/TimelineFloatKeyframe/) | class | A keyframe that stores a floating-point value for timeline animations. |
| [TimelineFloatTrack](/api-docs/headless/ceramic/TimelineFloatTrack/) | class | A timeline track that animates floating-point values with smooth interpolation. |
| [TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/) | class |  |
| [TimelineKeyframeData](/api-docs/headless/ceramic/TimelineKeyframeData/) | typedef | Data structure representing a keyframe in serialized form. |
| [Timelines](/api-docs/headless/ceramic/Timelines/) | class | Central system for creating and binding timeline tracks and keyframes. |
| [TimelineTrack](/api-docs/headless/ceramic/TimelineTrack/) | class | Base class for animation tracks in a timeline system. |
| [TimelineTrackData](/api-docs/headless/ceramic/TimelineTrackData/) | typedef | Data structure representing an animation track in serialized form. |
| [Timer](/api-docs/headless/ceramic/Timer/) | class | Timer system for scheduling delayed and periodic callbacks. |
| [TimerCallback](/api-docs/headless/ceramic/TimerCallback/) | class | Internal data structure representing a scheduled timer callback. |
| [Touch](/api-docs/headless/ceramic/Touch/) | class | Represents a single touch point in a multi-touch interaction. |
| [Touches](/api-docs/headless/ceramic/Touches/) | abstract | A collection of active touch points for multi-touch handling. |
| [TouchesIterator](/api-docs/headless/ceramic/TouchesIterator/) | class | Iterator for the Touches collection. |
| [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) | class |  |
| [TrackerBackend](/api-docs/headless/ceramic/TrackerBackend/) | class | Backend adapter that bridges the Tracker observable framework with Ceramic's backend services. |
| [Transform](/api-docs/headless/ceramic/Transform/) | class | Transform holds matrix data to make 2d rotate, translate, scale and skew transformations. |
| [TransformPool](/api-docs/headless/ceramic/TransformPool/) | class | An utility to reuse transform matrix object at application level. |
| [Triangle](/api-docs/headless/ceramic/Triangle/) | class | A simple colored triangle shape that fits within the specified dimensions. |
| [Triangulate](/api-docs/headless/ceramic/Triangulate/) | class | Utility class for triangulating polygons into triangles. |
| [Tween](/api-docs/headless/ceramic/Tween/) | class | A lightweight tweening engine for animating numeric values over time. |
| [UInt8Array](/api-docs/headless/ceramic/UInt8Array/) | typedef | Platform-specific implementation of an 8-bit unsigned integer array. |
| [Utils](/api-docs/headless/ceramic/Utils/) | class | Various utilities. Some of them are used by ceramic itself or its backends. |
| [Value](/api-docs/headless/ceramic/Value/) | class | An object that can hold any value. |
| [ValueEntry](/api-docs/headless/ceramic/ValueEntry/) | class | A collection entry that can hold any value. |
| [Velocity](/api-docs/headless/ceramic/Velocity/) | class | A velocity tracker that calculates speed based on position changes over time. |
| [VisibleBounds](/api-docs/headless/ceramic/VisibleBounds/) | class | A component that displays the visible bounds of a visual entity. |
| [Visual](/api-docs/headless/ceramic/Visual/) | class | Base class for all visual elements in Ceramic. |
| [VisualTransition](/api-docs/headless/ceramic/VisualTransition/) | class | A component that enables smooth property transitions for Visual objects. |
| [VisualTransitionProperties](/api-docs/headless/ceramic/VisualTransitionProperties/) | abstract | Property setter interface for visual transitions. |
| [WaitCallbacks](/api-docs/headless/ceramic/WaitCallbacks/) | class | Utility to create and wait for multiple callbacks and call |
| [WatchDirectory](/api-docs/headless/ceramic/WatchDirectory/) | class | A directory watcher that monitors file changes in specified directories. |
| [WatchedFile](/api-docs/headless/ceramic/_FileWatcher/WatchedFile/) | class | Internal data structure for tracking watched file state. |
| [TextureAtlasPackerPage](/api-docs/headless/ceramic/_TextureAtlasPacker/TextureAtlasPackerPage/) | class | Internal representation of a texture page during packing. |
| [TextureAtlasPackerRegion](/api-docs/headless/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/) | class | Internal data structure for regions during the packing process. |
| [TextureAtlasReader](/api-docs/headless/ceramic/_TextureAtlasParser/TextureAtlasReader/) | class | Internal line-based reader for parsing LibGDX format atlas files. |
| [PackedTextureTile](/api-docs/headless/ceramic/_TextureTilePacker/PackedTextureTile/) | class | Internal texture tile implementation with grid allocation metadata. |
| [EarClippingTriangulator](/api-docs/headless/ceramic/_Triangulate/EarClippingTriangulator/) | class | Implementation of the ear-clipping algorithm for polygon triangulation. |
| [TweenEasingFunction](/api-docs/headless/ceramic/_Tween/TweenEasingFunction/) | class | Internal utility class containing easing function implementations. |

## Arcade

| Type | Kind | Description |
|------|------|-------------|
| [Axis](/api-docs/headless/arcade/Axis/) | abstract | Represents axis constants for physics calculations and collision detection. |
| [Body](/api-docs/headless/arcade/Body/) | class | The Physics Body is linked to a single game object. |
| [Collidable](/api-docs/headless/arcade/Collidable/) | interface | Any class implementing this interface can be used on World.collide() |
| [Direction](/api-docs/headless/arcade/Direction/) | abstract | Represents directional constants used for physics body movement and collision detection. |
| [Extensions](/api-docs/headless/arcade/Extensions/) | class | A bunch of static extensions to make life easier. |
| [Group](/api-docs/headless/arcade/Group/) | class | A Group is a container for multiple physics bodies. |
| [Line](/api-docs/headless/arcade/Line/) | class | Represents a line segment with a start and end point. |
| [Point](/api-docs/headless/arcade/Point/) | class | A 2D point with x and y coordinates. |
| [QuadTree](/api-docs/headless/arcade/QuadTree/) | class | A QuadTree implementation. |
| [QuadTreePool](/api-docs/headless/arcade/QuadTreePool/) | class | Object pool for QuadTree instances to reduce garbage collection overhead. |
| [SortBodiesBottomTop](/api-docs/headless/arcade/SortBodiesBottomTop/) | class | Provides a stable merge sort implementation for sorting Body arrays from bottom to top (by y coor... |
| [SortBodiesLeftRight](/api-docs/headless/arcade/SortBodiesLeftRight/) | class | Provides a stable merge sort implementation for sorting Body arrays from left to right (by x coor... |
| [SortBodiesRightLeft](/api-docs/headless/arcade/SortBodiesRightLeft/) | class | Provides a stable merge sort implementation for sorting Body arrays from right to left (by x coor... |
| [SortBodiesTopBottom](/api-docs/headless/arcade/SortBodiesTopBottom/) | class | Provides a stable merge sort implementation for sorting Body arrays from top to bottom (by y coor... |
| [SortDirection](/api-docs/headless/arcade/SortDirection/) | abstract | Defines sorting directions for physics bodies during collision detection. |
| [World](/api-docs/headless/arcade/World/) | class | The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods. |
| [ArcadeSortGroupBottomTop](/api-docs/headless/ceramic/ArcadeSortGroupBottomTop/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupLeftRight](/api-docs/headless/ceramic/ArcadeSortGroupLeftRight/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupRightLeft](/api-docs/headless/ceramic/ArcadeSortGroupRightLeft/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupTopBottom](/api-docs/headless/ceramic/ArcadeSortGroupTopBottom/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSystem](/api-docs/headless/ceramic/ArcadeSystem/) | class | Main system managing Arcade physics simulation in Ceramic. |
| [ArcadeWorld](/api-docs/headless/ceramic/ArcadeWorld/) | class | Extended physics world that integrates Arcade physics with Ceramic's visual system. |
| [VisualArcadePhysics](/api-docs/headless/ceramic/VisualArcadePhysics/) | class | Component that adds Arcade physics functionality to a Visual. |

## Tilemap

| Type | Kind | Description |
|------|------|-------------|
| [AutoTile](/api-docs/headless/ceramic/AutoTile/) | class | Configuration for an auto-tiling tile that automatically adjusts its appearance |
| [AutoTileKind](/api-docs/headless/ceramic/AutoTileKind/) | abstract | Defines the type of auto-tiling algorithm used by the `AutoTiler` component. |
| [AutoTiler](/api-docs/headless/ceramic/AutoTiler/) | class | Component that automatically processes tilemap tiles to apply auto-tiling rules. |
| [ConvertTilemapData](/api-docs/headless/ceramic/ConvertTilemapData/) | class | Field converter that handles conversion between tilemap asset names (strings) |
| [Tilemap](/api-docs/headless/ceramic/Tilemap/) | class | A visual component that renders tilemap data composed of multiple layers. |
| [TilemapAsset](/api-docs/headless/ceramic/TilemapAsset/) | class | Asset type for loading tilemap data from various formats (TMX, LDtk). |
| [TilemapData](/api-docs/headless/ceramic/TilemapData/) | class | Unified tilemap data structure that represents a tile-based map. |
| [TilemapEditor](/api-docs/headless/ceramic/TilemapEditor/) | class | Interactive tilemap editor component that enables in-game tile painting and erasing. |
| [TilemapLayer](/api-docs/headless/ceramic/TilemapLayer/) | class | Visual representation of a single layer within a tilemap. |
| [TilemapLayerData](/api-docs/headless/ceramic/TilemapLayerData/) | class | Data model representing a single layer within a tilemap. |
| [TilemapOrientation](/api-docs/headless/ceramic/TilemapOrientation/) | enum | Defines the projection orientation of a tilemap. |
| [TilemapParser](/api-docs/headless/ceramic/TilemapParser/) | class | Universal tilemap parser supporting multiple tilemap formats. |
| [TilemapPlugin](/api-docs/headless/ceramic/TilemapPlugin/) | class | Main plugin class that integrates tilemap support into Ceramic. |
| [TilemapQuad](/api-docs/headless/ceramic/TilemapQuad/) | class | Specialized Quad visual used to render individual tiles in a tilemap layer. |
| [TilemapRenderOrder](/api-docs/headless/ceramic/TilemapRenderOrder/) | enum | Defines the order in which tiles are rendered in a tilemap. |
| [TilemapStaggerAxis](/api-docs/headless/ceramic/TilemapStaggerAxis/) | enum | Defines the stagger axis for hexagonal and staggered tilemaps. |
| [TilemapStaggerIndex](/api-docs/headless/ceramic/TilemapStaggerIndex/) | enum | Defines which rows or columns are staggered in hexagonal and staggered tilemaps. |
| [TilemapTile](/api-docs/headless/ceramic/TilemapTile/) | abstract | Represents a single tile in a tilemap, storing both the tile ID and transformation flags. |
| [TilemapTmxParser](/api-docs/headless/ceramic/TilemapTmxParser/) | class | Internal parser for TMX (Tiled Map Editor) format files. |
| [Tileset](/api-docs/headless/ceramic/Tileset/) | class | Represents a collection of tiles used by a tilemap. |
| [TilesetGridOrientation](/api-docs/headless/ceramic/TilesetGridOrientation/) | enum | Defines the grid orientation for tiles within a tileset. |
| [TilesetImage](/api-docs/headless/ceramic/TilesetImage/) | class | Represents the image resource used by a tileset. |
| [TileSlope](/api-docs/headless/ceramic/TileSlope/) | class | Defines slope collision data for a tile in a tileset. |

## Ldtk

| Type | Kind | Description |
|------|------|-------------|
| [LdtkAutoLayerRuleDefinition](/api-docs/headless/ceramic/LdtkAutoLayerRuleDefinition/) | class | This complex section isn't meant to be used by game devs according to LDtk documentation, |
| [LdtkAutoRuleGroup](/api-docs/headless/ceramic/LdtkAutoRuleGroup/) | class |  |
| [LdtkBackgroundPosition](/api-docs/headless/ceramic/LdtkBackgroundPosition/) | class |  |
| [LdtkCheckerMode](/api-docs/headless/ceramic/LdtkCheckerMode/) | abstract |  |
| [LdtkData](/api-docs/headless/ceramic/LdtkData/) | class | Root class representing an LDtk project data structure. |
| [LdtkDataHelpers](/api-docs/headless/ceramic/LdtkDataHelpers/) | class |  |
| [LdtkDefinitions](/api-docs/headless/ceramic/LdtkDefinitions/) | class | Contains all the definitions used in an LDtk project. |
| [LdtkEmbedAtlas](/api-docs/headless/ceramic/LdtkEmbedAtlas/) | abstract |  |
| [LdtkEntityDefinition](/api-docs/headless/ceramic/LdtkEntityDefinition/) | class | Defines an entity type that can be placed in levels. |
| [LdtkEntityInstance](/api-docs/headless/ceramic/LdtkEntityInstance/) | class | An instance of an entity placed in a level. |
| [LdtkEnumDefinition](/api-docs/headless/ceramic/LdtkEnumDefinition/) | class |  |
| [LdtkEnumTag](/api-docs/headless/ceramic/LdtkEnumTag/) | class |  |
| [LdtkEnumValueDefinition](/api-docs/headless/ceramic/LdtkEnumValueDefinition/) | class |  |
| [LdtkFieldDefinition](/api-docs/headless/ceramic/LdtkFieldDefinition/) | class |  |
| [LdtkFieldInstance](/api-docs/headless/ceramic/LdtkFieldInstance/) | class | An instance of a custom field value. |
| [LdtkIntGridValue](/api-docs/headless/ceramic/LdtkIntGridValue/) | class |  |
| [LdtkLayerDefinition](/api-docs/headless/ceramic/LdtkLayerDefinition/) | class | Defines a layer type that can be used in levels. |
| [LdtkLayerInstance](/api-docs/headless/ceramic/LdtkLayerInstance/) | class | An instance of a layer in a level. |
| [LdtkLayerType](/api-docs/headless/ceramic/LdtkLayerType/) | abstract |  |
| [LdtkLevel](/api-docs/headless/ceramic/LdtkLevel/) | class | Represents a single level in an LDtk world. |
| [LdtkLevelLocation](/api-docs/headless/ceramic/LdtkLevelLocation/) | abstract |  |
| [LdtkLevelNeighbour](/api-docs/headless/ceramic/LdtkLevelNeighbour/) | class |  |
| [LdtkRenderMode](/api-docs/headless/ceramic/LdtkRenderMode/) | abstract |  |
| [LdtkTileCustomData](/api-docs/headless/ceramic/LdtkTileCustomData/) | class |  |
| [LdtkTileMode](/api-docs/headless/ceramic/LdtkTileMode/) | abstract |  |
| [LdtkTileRenderMode](/api-docs/headless/ceramic/LdtkTileRenderMode/) | abstract |  |
| [LdtkTilesetDefinition](/api-docs/headless/ceramic/LdtkTilesetDefinition/) | class |  |
| [LdtkTilesetRectangle](/api-docs/headless/ceramic/LdtkTilesetRectangle/) | class | This object represents a custom sub rectangle in a Tileset image. |
| [LdtkTocEntry](/api-docs/headless/ceramic/LdtkTocEntry/) | class | Represents a Table of Contents entry for entities marked with exportToToc. |
| [LdtkTocInstanceData](/api-docs/headless/ceramic/LdtkTocInstanceData/) | class | Contains instance data for an entity referenced in the table of contents. |
| [LdtkVisual](/api-docs/headless/ceramic/LdtkVisual/) | class | A default visual implementation to render LDtk entities. |
| [LdtkWorld](/api-docs/headless/ceramic/LdtkWorld/) | class | Represents a world in an LDtk project. |
| [LdtkWorldLayout](/api-docs/headless/ceramic/LdtkWorldLayout/) | abstract |  |
| [TilemapLdtkParser](/api-docs/headless/ceramic/TilemapLdtkParser/) | class | Parser that converts LDtk level data into Ceramic tilemap data structures. |
| [TilemapLdtkParser_Fields_](/api-docs/headless/ceramic/_TilemapLdtkParser/TilemapLdtkParser_Fields_/) | class |  |

## Spine

| Type | Kind | Description |
|------|------|-------------|
| [BindSlotOptions](/api-docs/headless/ceramic/BindSlotOptions/) | typedef | Configuration options for binding Spine slots together. |
| [ConvertSpineData](/api-docs/headless/ceramic/ConvertSpineData/) | class | Converter for Spine animation data fields in entity components. |
| [SlotInfo](/api-docs/headless/ceramic/SlotInfo/) | class | Information about a slot being updated during rendering. |
| [Spine](/api-docs/headless/ceramic/Spine/) | class | Spine animation runtime for Ceramic engine. |
| [SpineAsset](/api-docs/headless/ceramic/SpineAsset/) | class | Asset loader for Spine 2D skeletal animation data. |
| [SpineBindVisual](/api-docs/headless/ceramic/SpineBindVisual/) | class | Utility class for binding Ceramic visuals to Spine skeleton slots. |
| [SpineBindVisualOptions](/api-docs/headless/ceramic/SpineBindVisualOptions/) | class | Configuration options for binding a Ceramic visual to a Spine slot. |
| [SpineBounds](/api-docs/headless/ceramic/SpineBounds/) | class | Data structure representing the computed bounding box of a Spine animation. |
| [SpineColors](/api-docs/headless/ceramic/SpineColors/) | class | Utility class for extracting color information from Spine animation slots. |
| [SpineData](/api-docs/headless/ceramic/SpineData/) | class | Container for loaded Spine animation data, including skeleton structure and texture atlas. |
| [SpineFile](/api-docs/headless/ceramic/SpineFile/) | class | Implementation of Spine's FileHandle interface for Ceramic. |
| [SpineListener](/api-docs/headless/ceramic/SpineListener/) | class | Internal listener for Spine animation state events. |
| [SpineMontage](/api-docs/headless/ceramic/SpineMontage/) | class | A powerful utility for managing and orchestrating Spine animations as a cohesive montage. |
| [SpineMontageAnimation](/api-docs/headless/ceramic/SpineMontageAnimation/) | class | Configuration data for a single animation within a SpineMontage. |
| [SpineMontageDefaults](/api-docs/headless/ceramic/SpineMontageDefaults/) | class | Default configuration values for animations in a SpineMontage. |
| [SpineMontageSettings](/api-docs/headless/ceramic/SpineMontageSettings/) | class | Complete configuration for initializing a SpineMontage. |
| [SpineMontageSpineSettings](/api-docs/headless/ceramic/SpineMontageSpineSettings/) | class | Configuration for the Spine instance used by a SpineMontage. |
| [SpinePlugin](/api-docs/headless/ceramic/SpinePlugin/) | class | Plugin that integrates the Spine 2D skeletal animation runtime into Ceramic. |
| [SpineSystem](/api-docs/headless/ceramic/SpineSystem/) | class | System responsible for updating all active Spine instances in the application. |
| [SpineTextureLoader](/api-docs/headless/ceramic/SpineTextureLoader/) | class | Custom texture loader implementation for integrating Spine with Ceramic's asset system. |
| [AlphaTimeline](/api-docs/headless/spine/AlphaTimeline/) | class | Changes the alpha for a slot's {@link Slot#getColor()}. |
| [Animation](/api-docs/headless/spine/Animation/) | class | Stores a list of timelines to animate a skeleton's pose over time. |
| [AnimationState](/api-docs/headless/spine/AnimationState/) | class | Applies animations over time, queues animations for later playback, mixes (crossfading) between a... |
| [AnimationStateAdapter](/api-docs/headless/spine/AnimationStateAdapter/) | class |  |
| [AnimationStateData](/api-docs/headless/spine/AnimationStateData/) | class | Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed. |
| [AnimationStateDataKey](/api-docs/headless/spine/AnimationStateDataKey/) | class |  |
| [AnimationStateListener](/api-docs/headless/spine/AnimationStateListener/) | interface | The interface to implement for receiving TrackEntry events. |
| [AtlasAttachmentLoader](/api-docs/headless/spine/attachments/AtlasAttachmentLoader/) | class | An {@link AttachmentLoader} that configures attachments using texture regions from an {@link Atlas}. |
| [Attachment](/api-docs/headless/spine/attachments/Attachment/) | class | The base class for all attachments. |
| [AttachmentLoader](/api-docs/headless/spine/attachments/AttachmentLoader/) | interface | The interface which can be implemented to customize creating and populating attachments. |
| [AttachmentType](/api-docs/headless/spine/attachments/AttachmentType/) | abstract | Spine Runtimes License Agreement |
| [AttachmentType_enum](/api-docs/headless/spine/attachments/AttachmentType_enum/) | class |  |
| [BoundingBoxAttachment](/api-docs/headless/spine/attachments/BoundingBoxAttachment/) | class | An attachment with vertices that make up a polygon. |
| [ClippingAttachment](/api-docs/headless/spine/attachments/ClippingAttachment/) | class | An attachment with vertices that make up a polygon used for clipping the rendering of other attac... |
| [MeshAttachment](/api-docs/headless/spine/attachments/MeshAttachment/) | class | An attachment that displays a textured mesh. |
| [PathAttachment](/api-docs/headless/spine/attachments/PathAttachment/) | class | An attachment whose vertices make up a composite Bezier curve. |
| [PointAttachment](/api-docs/headless/spine/attachments/PointAttachment/) | class | An attachment which is a single point and a rotation. |
| [RegionAttachment](/api-docs/headless/spine/attachments/RegionAttachment/) | class | An attachment that displays a textured quadrilateral. |
| [VertexAttachment](/api-docs/headless/spine/attachments/VertexAttachment/) | class | Base class for an attachment with vertices that are transformed by one or more bones and can be d... |
| [AttachmentTimeline](/api-docs/headless/spine/AttachmentTimeline/) | class | Changes a slot's {@link Slot#getAttachment()}. |
| [BlendMode](/api-docs/headless/spine/BlendMode/) | abstract | Determines how images are blended with existing pixels when drawn. |
| [BlendMode_enum](/api-docs/headless/spine/BlendMode_enum/) | class |  |
| [Bone](/api-docs/headless/spine/Bone/) | class | Stores a bone's current pose. |
| [BoneData](/api-docs/headless/spine/BoneData/) | class | Stores the setup pose for a {@link Bone}. |
| [BoneTimeline](/api-docs/headless/spine/BoneTimeline/) | interface | An interface for timelines which change the property of a bone. |
| [ConstraintData](/api-docs/headless/spine/ConstraintData/) | class | The base class for all constraint datas. |
| [CurveTimeline](/api-docs/headless/spine/CurveTimeline/) | class | The base class for timelines that interpolate between frame values using stepped, linear, or a Be... |
| [CurveTimeline1](/api-docs/headless/spine/CurveTimeline1/) | class | The base class for a {@link CurveTimeline} that sets one property. |
| [CurveTimeline2](/api-docs/headless/spine/CurveTimeline2/) | class | The base class for a {@link CurveTimeline} which sets two properties. |
| [DeformTimeline](/api-docs/headless/spine/DeformTimeline/) | class | Changes a slot's {@link Slot#getDeform()} to deform a {@link VertexAttachment}. |
| [DrawOrderTimeline](/api-docs/headless/spine/DrawOrderTimeline/) | class | Changes a skeleton's {@link Skeleton#getDrawOrder()}. |
| [Event](/api-docs/headless/spine/Event/) | class | Stores the current pose values for an {@link Event}. |
| [EventData](/api-docs/headless/spine/EventData/) | class | Stores the setup pose values for an {@link Event}. |
| [EventQueue](/api-docs/headless/spine/EventQueue/) | class |  |
| [EventTimeline](/api-docs/headless/spine/EventTimeline/) | class | Fires an {@link Event} when specific animation times are reached. |
| [EventType](/api-docs/headless/spine/EventType/) | abstract |  |
| [EventType_enum](/api-docs/headless/spine/EventType_enum/) | class |  |
| [IkConstraint](/api-docs/headless/spine/IkConstraint/) | class | Stores the current pose for an IK constraint. |
| [IkConstraintData](/api-docs/headless/spine/IkConstraintData/) | class | Stores the setup pose for an {@link IkConstraint}. |
| [IkConstraintTimeline](/api-docs/headless/spine/IkConstraintTimeline/) | class | Changes an IK constraint's {@link IkConstraint#getMix()}, {@link IkConstraint#getSoftness()}, |
| [LinkedMesh](/api-docs/headless/spine/LinkedMesh/) | class |  |
| [MixBlend](/api-docs/headless/spine/MixBlend/) | abstract | Controls how timeline values are mixed with setup pose values or current pose values when a timel... |
| [MixBlend_enum](/api-docs/headless/spine/MixBlend_enum/) | class |  |
| [MixDirection](/api-docs/headless/spine/MixDirection/) | abstract | Indicates whether a timeline's <code>alpha</code> is mixing out over time toward 0 (the setup or ... |
| [MixDirection_enum](/api-docs/headless/spine/MixDirection_enum/) | class |  |
| [PathConstraint](/api-docs/headless/spine/PathConstraint/) | class | Stores the current pose for a path constraint. |
| [PathConstraintData](/api-docs/headless/spine/PathConstraintData/) | class | Stores the setup pose for a {@link PathConstraint}. |
| [PathConstraintMixTimeline](/api-docs/headless/spine/PathConstraintMixTimeline/) | class | Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#get... |
| [PathConstraintPositionTimeline](/api-docs/headless/spine/PathConstraintPositionTimeline/) | class | Changes a path constraint's {@link PathConstraint#getPosition()}. |
| [PathConstraintSpacingTimeline](/api-docs/headless/spine/PathConstraintSpacingTimeline/) | class | Changes a path constraint's {@link PathConstraint#getSpacing()}. |
| [PositionMode](/api-docs/headless/spine/PositionMode/) | abstract | Controls how the first bone is positioned along the path. |
| [PositionMode_enum](/api-docs/headless/spine/PositionMode_enum/) | class |  |
| [Property](/api-docs/headless/spine/Property/) | abstract |  |
| [Property_enum](/api-docs/headless/spine/Property_enum/) | class |  |
| [RGB2Timeline](/api-docs/headless/spine/RGB2Timeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two colo... |
| [RGBA2Timeline](/api-docs/headless/spine/RGBA2Timeline/) | class | Changes a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two color tinting. |
| [RGBATimeline](/api-docs/headless/spine/RGBATimeline/) | class | Changes a slot's {@link Slot#getColor()}. |
| [RGBTimeline](/api-docs/headless/spine/RGBTimeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()}. |
| [RotateMode](/api-docs/headless/spine/RotateMode/) | abstract | Controls how bones are rotated, translated, and scaled to match the path. |
| [RotateMode_enum](/api-docs/headless/spine/RotateMode_enum/) | class |  |
| [RotateTimeline](/api-docs/headless/spine/RotateTimeline/) | class | Changes a bone's local {@link Bone#getRotation()}. |
| [ScaleTimeline](/api-docs/headless/spine/ScaleTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()} and {@link Bone#getScaleY()}. |
| [ScaleXTimeline](/api-docs/headless/spine/ScaleXTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()}. |
| [ScaleYTimeline](/api-docs/headless/spine/ScaleYTimeline/) | class | Changes a bone's local {@link Bone#getScaleY()}. |
| [ShearTimeline](/api-docs/headless/spine/ShearTimeline/) | class | Changes a bone's local {@link Bone#getShearX()} and {@link Bone#getShearY()}. |
| [ShearXTimeline](/api-docs/headless/spine/ShearXTimeline/) | class | Changes a bone's local {@link Bone#getShearX()}. |
| [ShearYTimeline](/api-docs/headless/spine/ShearYTimeline/) | class | Changes a bone's local {@link Bone#getShearY()}. |
| [Skeleton](/api-docs/headless/spine/Skeleton/) | class | Stores the current pose for a skeleton. |
| [SkeletonBounds](/api-docs/headless/spine/SkeletonBounds/) | class | Collects each visible {@link BoundingBoxAttachment} and computes the world vertices for its polygon. |
| [SkeletonData](/api-docs/headless/spine/SkeletonData/) | class | Stores the setup pose and all of the stateless data for a skeleton. |
| [SkeletonJson](/api-docs/headless/spine/SkeletonJson/) | class | Loads skeleton data in the Spine JSON format. |
| [SkeletonLoader](/api-docs/headless/spine/SkeletonLoader/) | class | Base class for loading skeleton data from a file. |
| [Skin](/api-docs/headless/spine/Skin/) | class | Stores attachments by slot index and attachment name. |
| [SkinEntry](/api-docs/headless/spine/SkinEntry/) | class | Stores an entry in the skin consisting of the slot index and the attachment name. |
| [Slot](/api-docs/headless/spine/Slot/) | class | Stores a slot's current pose. |
| [SlotData](/api-docs/headless/spine/SlotData/) | class | Stores the setup pose for a {@link Slot}. |
| [SlotTimeline](/api-docs/headless/spine/SlotTimeline/) | interface | An interface for timelines which change the property of a slot. |
| [SpacingMode](/api-docs/headless/spine/SpacingMode/) | abstract | Controls how bones after the first bone are positioned along the path. |
| [SpacingMode_enum](/api-docs/headless/spine/SpacingMode_enum/) | class |  |
| [Error](/api-docs/headless/spine/support/error/Error/) | class |  |
| [IllegalArgumentException](/api-docs/headless/spine/support/error/IllegalArgumentException/) | class |  |
| [IllegalStateException](/api-docs/headless/spine/support/error/IllegalStateException/) | class |  |
| [RuntimeException](/api-docs/headless/spine/support/error/RuntimeException/) | class |  |
| [ArrayExtensions](/api-docs/headless/spine/support/extensions/ArrayExtensions/) | class |  |
| [FileExtensions](/api-docs/headless/spine/support/extensions/FileExtensions/) | class |  |
| [SpineExtensions](/api-docs/headless/spine/support/extensions/SpineExtensions/) | class |  |
| [StringExtensions](/api-docs/headless/spine/support/extensions/StringExtensions/) | class |  |
| [FileHandle](/api-docs/headless/spine/support/files/FileHandle/) | interface |  |
| [AtlasPage](/api-docs/headless/spine/support/graphics/AtlasPage/) | class |  |
| [AtlasRegion](/api-docs/headless/spine/support/graphics/AtlasRegion/) | class |  |
| [AtlasRegionTexture](/api-docs/headless/spine/support/graphics/AtlasRegionTexture/) | abstract |  |
| [Color](/api-docs/headless/spine/support/graphics/Color/) | class | Color class ported from some of libgdx's Color code. |
| [Format](/api-docs/headless/spine/support/graphics/Format/) | abstract |  |
| [GL20](/api-docs/headless/spine/support/graphics/GL20/) | typedef |  |
| [Reader](/api-docs/headless/spine/support/graphics/Reader/) | class |  |
| [TextureAtlas](/api-docs/headless/spine/support/graphics/TextureAtlas/) | class |  |
| [TextureFilter](/api-docs/headless/spine/support/graphics/TextureFilter/) | abstract |  |
| [TextureLoader](/api-docs/headless/spine/support/graphics/TextureLoader/) | interface |  |
| [TextureRegion](/api-docs/headless/spine/support/graphics/TextureRegion/) | class |  |
| [TextureWrap](/api-docs/headless/spine/support/graphics/TextureWrap/) | class |  |
| [MathUtils](/api-docs/headless/spine/support/math/MathUtils/) | class |  |
| [Matrix3](/api-docs/headless/spine/support/math/Matrix3/) | class |  |
| [Vector2](/api-docs/headless/spine/support/math/Vector2/) | class |  |
| [AnimationStateMap](/api-docs/headless/spine/support/utils/AnimationStateMap/) | abstract |  |
| [Array](/api-docs/headless/spine/support/utils/Array/) | abstract |  |
| [AttachmentSet](/api-docs/headless/spine/support/utils/AttachmentSet/) | abstract |  |
| [AttachmentSetEntry](/api-docs/headless/spine/support/utils/AttachmentSetEntry/) | class |  |
| [BooleanArray](/api-docs/headless/spine/support/utils/BooleanArray/) | abstract |  |
| [Either](/api-docs/headless/spine/support/utils/Either/) | abstract | Useful to limit a Dynamic function argument's type to the specified |
| [FastCast](/api-docs/headless/spine/support/utils/FastCast/) | class |  |
| [FloatArray](/api-docs/headless/spine/support/utils/FloatArray/) | abstract |  |
| [FloatArray2D](/api-docs/headless/spine/support/utils/FloatArray2D/) | typedef |  |
| [IntArray](/api-docs/headless/spine/support/utils/IntArray/) | abstract |  |
| [IntArray2D](/api-docs/headless/spine/support/utils/IntArray2D/) | typedef |  |
| [JsonChild](/api-docs/headless/spine/support/utils/JsonChild/) | class |  |
| [JsonDynamic](/api-docs/headless/spine/support/utils/JsonDynamic/) | class |  |
| [JsonReader](/api-docs/headless/spine/support/utils/JsonReader/) | class |  |
| [JsonValue](/api-docs/headless/spine/support/utils/JsonValue/) | interface |  |
| [ObjectSet](/api-docs/headless/spine/support/utils/ObjectSet/) | abstract |  |
| [Pool](/api-docs/headless/spine/support/utils/Pool/) | class |  |
| [Poolable](/api-docs/headless/spine/support/utils/Poolable/) | interface | Objects implementing this interface will have {@link #reset()} called when passed to {@link Pool#... |
| [SerializationException](/api-docs/headless/spine/support/utils/SerializationException/) | class |  |
| [Short](/api-docs/headless/spine/support/utils/Short/) | typedef |  |
| [ShortArray](/api-docs/headless/spine/support/utils/ShortArray/) | typedef |  |
| [ShortArray2D](/api-docs/headless/spine/support/utils/ShortArray2D/) | typedef |  |
| [SnapshotArray](/api-docs/headless/spine/support/utils/SnapshotArray/) | class |  |
| [StdEx](/api-docs/headless/spine/support/utils/StdEx/) | class |  |
| [StringArray](/api-docs/headless/spine/support/utils/StringArray/) | typedef |  |
| [StringBuilder](/api-docs/headless/spine/support/utils/StringBuilder/) | abstract |  |
| [Timeline](/api-docs/headless/spine/Timeline/) | class | The base class for all timelines. |
| [TrackEntry](/api-docs/headless/spine/TrackEntry/) | class | Stores settings and other state for the playback of an animation on an {@link AnimationState} track. |
| [TransformConstraint](/api-docs/headless/spine/TransformConstraint/) | class | Stores the current pose for a transform constraint. |
| [TransformConstraintData](/api-docs/headless/spine/TransformConstraintData/) | class | Stores the setup pose for a {@link TransformConstraint}. |
| [TransformConstraintTimeline](/api-docs/headless/spine/TransformConstraintTimeline/) | class | Changes a transform constraint's {@link TransformConstraint#getMixRotate()}, {@link TransformCons... |
| [TransformMode](/api-docs/headless/spine/TransformMode/) | abstract | Determines how a bone inherits world transforms from parent bones. |
| [TransformMode_enum](/api-docs/headless/spine/TransformMode_enum/) | class |  |
| [TranslateTimeline](/api-docs/headless/spine/TranslateTimeline/) | class | Changes a bone's local {@link Bone#getX()} and {@link Bone#getY()}. |
| [TranslateXTimeline](/api-docs/headless/spine/TranslateXTimeline/) | class | Changes a bone's local {@link Bone#getX()}. |
| [TranslateYTimeline](/api-docs/headless/spine/TranslateYTimeline/) | class | Changes a bone's local {@link Bone#getY()}. |
| [Updatable](/api-docs/headless/spine/Updatable/) | interface | The interface for items updated by {@link Skeleton#updateWorldTransform()}. |
| [SkeletonClipping](/api-docs/headless/spine/utils/SkeletonClipping/) | class | Spine Runtimes License Agreement |
| [SpineUtils](/api-docs/headless/spine/utils/SpineUtils/) | class | Spine Runtimes License Agreement |
| [Triangulator](/api-docs/headless/spine/utils/Triangulator/) | class | Spine Runtimes License Agreement |
| [BindSlot](/api-docs/headless/ceramic/_Spine/BindSlot/) | class |  |
| [DispatchSlotInfo](/api-docs/headless/ceramic/_Spine/DispatchSlotInfo/) | class |  |
| [TrackEntryPool](/api-docs/headless/spine/_AnimationState/TrackEntryPool/) | class |  |
| [PolygonPool](/api-docs/headless/spine/_SkeletonBounds/PolygonPool/) | class |  |
| [Entry](/api-docs/headless/spine/support/utils/_AnimationStateMap/Entry/) | class |  |
| [IndicesPool](/api-docs/headless/spine/utils/_Triangulator/IndicesPool/) | class |  |
| [PolygonPool](/api-docs/headless/spine/utils/_Triangulator/PolygonPool/) | class |  |

## Script

| Type | Kind | Description |
|------|------|-------------|
| [Interp](/api-docs/headless/ceramic/Interp/) | class | Custom HScript interpreter with Ceramic-specific functionality. |
| [Script](/api-docs/headless/ceramic/Script/) | class | Dynamic scripting component for runtime code execution. |
| [ScriptContent](/api-docs/headless/ceramic/ScriptContent/) | typedef | Type alias for script source code content. |
| [ScriptModule](/api-docs/headless/ceramic/ScriptModule/) | class | Represents a script module for inter-script communication. |
| [ScriptUtils](/api-docs/headless/ceramic/ScriptUtils/) | class | Utilities for converting JavaScript/TypeScript syntax to HScript. |

## Sprite

| Type | Kind | Description |
|------|------|-------------|
| [AsepriteJson](/api-docs/headless/ceramic/AsepriteJson/) | typedef | Data structure representing the JSON format exported by Aseprite. |
| [AsepriteJsonFrame](/api-docs/headless/ceramic/AsepriteJsonFrame/) | typedef | Individual frame definition within the sprite sheet. |
| [AsepriteJsonFrameTag](/api-docs/headless/ceramic/AsepriteJsonFrameTag/) | typedef | Animation definition in Aseprite, called a "frame tag". |
| [AsepriteJsonFrameTagDirection](/api-docs/headless/ceramic/AsepriteJsonFrameTagDirection/) | abstract | Animation playback direction for frame tags. |
| [AsepriteJsonLayer](/api-docs/headless/ceramic/AsepriteJsonLayer/) | typedef | Layer information from the original Aseprite file. |
| [AsepriteJsonMeta](/api-docs/headless/ceramic/AsepriteJsonMeta/) | typedef | Metadata section of the Aseprite JSON export. |
| [AsepriteJsonParser](/api-docs/headless/ceramic/AsepriteJsonParser/) | class | Parser for Aseprite JSON format sprite sheets. |
| [AsepriteJsonRect](/api-docs/headless/ceramic/AsepriteJsonRect/) | typedef | Rectangle structure with position and dimensions. |
| [AsepriteJsonSize](/api-docs/headless/ceramic/AsepriteJsonSize/) | typedef | Size structure for dimensions without position. |
| [AsepriteJsonSlice](/api-docs/headless/ceramic/AsepriteJsonSlice/) | typedef | Slice definition for 9-slice scaling and UI elements. |
| [ConvertSpriteSheet](/api-docs/headless/ceramic/ConvertSpriteSheet/) | class | Field converter for SpriteSheet instances. |
| [Sprite](/api-docs/headless/ceramic/Sprite/) | class | Sprite visual that displays animations from sprite sheets. |
| [SpriteAsset](/api-docs/headless/ceramic/SpriteAsset/) | class | Asset loader for sprite sheets and animations. |
| [SpritePlugin](/api-docs/headless/ceramic/SpritePlugin/) | class | Plugin that adds sprite sheet and animation support to Ceramic. |
| [SpriteSheet](/api-docs/headless/ceramic/SpriteSheet/) | class | Container for sprite animations and texture atlas data. |
| [SpriteSheetAnimation](/api-docs/headless/ceramic/SpriteSheetAnimation/) | class | Represents a named animation sequence within a sprite sheet. |
| [SpriteSheetFrame](/api-docs/headless/ceramic/SpriteSheetFrame/) | class | Represents a single frame within a sprite animation. |
| [SpriteSheetParser](/api-docs/headless/ceramic/SpriteSheetParser/) | class | Generic sprite sheet data parser with auto-detection. |
| [SpriteSystem](/api-docs/headless/ceramic/SpriteSystem/) | class | System that manages automatic updates for all Sprite instances. |

## Ui

| Type | Kind | Description |
|------|------|-------------|
| [ChildrenDepth](/api-docs/headless/ceramic/ChildrenDepth/) | abstract | Determines how child elements are assigned depth values in the UI hierarchy. |
| [CollectionView](/api-docs/headless/ceramic/CollectionView/) | class | A scrollable collection view that efficiently displays large data sets using view recycling. |
| [CollectionViewDataSource](/api-docs/headless/ceramic/CollectionViewDataSource/) | interface | Interface for providing data to a CollectionView. |
| [CollectionViewFlowLayout](/api-docs/headless/ceramic/CollectionViewFlowLayout/) | class | A flow-based layout for CollectionView that arranges items in rows or columns. |
| [CollectionViewItemFrame](/api-docs/headless/ceramic/CollectionViewItemFrame/) | class | Represents the position and dimensions of an item in a CollectionView. |
| [CollectionViewItemPosition](/api-docs/headless/ceramic/CollectionViewItemPosition/) | abstract | Defines where an item should be positioned when scrolling to it in a CollectionView. |
| [CollectionViewItemsBehavior](/api-docs/headless/ceramic/CollectionViewItemsBehavior/) | abstract | Defines how a CollectionView manages item view creation and recycling. |
| [CollectionViewLayout](/api-docs/headless/ceramic/CollectionViewLayout/) | interface | Interface for custom CollectionView layout implementations. |
| [ColumnLayout](/api-docs/headless/ceramic/ColumnLayout/) | class | A specialized LinearLayout that arranges children vertically in a single column. |
| [ComputedViewSize](/api-docs/headless/ceramic/ComputedViewSize/) | class | Represents computed size information for a View during the layout process. |
| [ImageView](/api-docs/headless/ceramic/ImageView/) | class | A view component for displaying and laying out images with flexible scaling options. |
| [ImageViewScaling](/api-docs/headless/ceramic/ImageViewScaling/) | enum | Defines scaling modes for ImageView to control how images are sized within their bounds. |
| [LayersLayout](/api-docs/headless/ceramic/LayersLayout/) | class | A layout container that stacks children on top of each other like layers. |
| [LayoutAlign](/api-docs/headless/ceramic/LayoutAlign/) | enum | General-purpose alignment enumeration for UI layouts. |
| [LayoutDirection](/api-docs/headless/ceramic/LayoutDirection/) | enum | Defines the primary axis direction for layout arrangements. |
| [LayoutHorizontalAlign](/api-docs/headless/ceramic/LayoutHorizontalAlign/) | enum | Horizontal alignment options for UI elements within their containers. |
| [LayoutVerticalAlign](/api-docs/headless/ceramic/LayoutVerticalAlign/) | enum | Vertical alignment options for UI elements within their containers. |
| [LinearLayout](/api-docs/headless/ceramic/LinearLayout/) | class | A flexible layout container that arranges its children in a single line, |
| [RowLayout](/api-docs/headless/ceramic/RowLayout/) | class | A layout that arranges its children horizontally in a single row. |
| [ScrollView](/api-docs/headless/ceramic/ScrollView/) | class | A view that provides scrolling functionality for content that exceeds its bounds. |
| [TextView](/api-docs/headless/ceramic/TextView/) | class | A view that displays text with automatic sizing and alignment options. |
| [View](/api-docs/headless/ceramic/View/) | class | The base view class for building UI layouts in Ceramic. |
| [ViewLayoutMask](/api-docs/headless/ceramic/ViewLayoutMask/) | abstract | Bit mask that defines layout constraints for views. |
| [ViewSize](/api-docs/headless/ceramic/ViewSize/) | abstract | Type-safe representation of view sizing modes. |
| [ViewSystem](/api-docs/headless/ceramic/ViewSystem/) | class | System responsible for managing and updating the UI view layout. |

## Dialogs

| Type | Kind | Description |
|------|------|-------------|
| [Dialogs](/api-docs/headless/ceramic/Dialogs/) | class | Cross-platform native file dialog implementation. |
| [DialogsFileFilter](/api-docs/headless/ceramic/DialogsFileFilter/) | typedef | File type filter specification for native file dialogs. |
| [DialogsPlugin](/api-docs/headless/ceramic/DialogsPlugin/) | class | Plugin initialization for native file dialogs support. |

## Gif

| Type | Kind | Description |
|------|------|-------------|
| [GifCapture](/api-docs/headless/ceramic/GifCapture/) | class | Captures the screen content and creates animated GIF files. |
| [GifEncoder](/api-docs/headless/gif/GifEncoder/) | class |  |
| [GifFrame](/api-docs/headless/gif/GifFrame/) | typedef |  |
| [GifQuality](/api-docs/headless/gif/GifQuality/) | abstract |  |
| [GifRepeat](/api-docs/headless/gif/GifRepeat/) | abstract |  |
| [LzwEncoder](/api-docs/headless/gif/LzwEncoder/) | class |  |
| [NeuQuant](/api-docs/headless/gif/NeuQuant/) | class |  |

## Tracker

| Type | Kind | Description |
|------|------|-------------|
| [Assert](/api-docs/headless/tracker/Assert/) | class |  |
| [Autorun](/api-docs/headless/tracker/Autorun/) | class |  |
| [DynamicEvents](/api-docs/headless/tracker/DynamicEvents/) | class | Fire and listen to dynamic events. Works similarly to static events, but dynamic. |
| [Equal](/api-docs/headless/tracker/Equal/) | class |  |
| [EventDispatcher](/api-docs/headless/tracker/EventDispatcher/) | class | Event dispatcher used by DynamicEvents and Events macro as an alternative implementation |
| [Events](/api-docs/headless/tracker/Events/) | interface | Events allows to add strictly typed events to classes. |
| [Extensions](/api-docs/headless/tracker/Extensions/) | class | A bunch of static extensions to make life easier. |
| [History](/api-docs/headless/tracker/History/) | class |  |
| [Model](/api-docs/headless/tracker/Model/) | class |  |
| [Observable](/api-docs/headless/tracker/Observable/) | interface | Observable allows to observe properties of an object. |
| [SaveModel](/api-docs/headless/tracker/SaveModel/) | class |  |
| [Serializable](/api-docs/headless/tracker/Serializable/) | interface |  |
| [Serialize](/api-docs/headless/tracker/Serialize/) | class |  |
| [SerializeChangeset](/api-docs/headless/tracker/SerializeChangeset/) | class |  |
| [SerializeModel](/api-docs/headless/tracker/SerializeModel/) | class | Utility to serialize a model object (and its children) continuously and efficiently |
| [ShareChangeset](/api-docs/headless/tracker/ShareChangeset/) | class |  |
| [ShareItem](/api-docs/headless/tracker/ShareItem/) | class |  |
| [ShareItemAction](/api-docs/headless/tracker/ShareItemAction/) | abstract |  |
| [ShareModel](/api-docs/headless/tracker/ShareModel/) | class |  |
| [Tracker](/api-docs/headless/tracker/Tracker/) | class |  |
| [Utils](/api-docs/headless/tracker/Utils/) | class |  |
| [EventDispatcherItem](/api-docs/headless/tracker/_EventDispatcher/EventDispatcherItem/) | class |  |

## Elements

| Type | Kind | Description |
|------|------|-------------|
| [ArrayPointer](/api-docs/headless/elements/ArrayPointer/) | typedef | Function type for accessing and manipulating arrays by reference. |
| [BaseTextFieldView](/api-docs/headless/elements/BaseTextFieldView/) | class | Base class for text field UI elements with autocomplete functionality. |
| [BiBorderedTriangle](/api-docs/headless/elements/BiBorderedTriangle/) | class | A triangular shape with customizable border rendering. |
| [BooleanFieldView](/api-docs/headless/elements/BooleanFieldView/) | class | A toggle switch UI element for boolean (true/false) values. |
| [BoolPointer](/api-docs/headless/elements/BoolPointer/) | typedef | Function type for accessing and modifying boolean values by reference. |
| [Button](/api-docs/headless/elements/Button/) | class | A clickable button UI element with text content. |
| [CellCollectionView](/api-docs/headless/elements/CellCollectionView/) | class | A themed collection view for displaying cells with built-in scrolling and filtering. |
| [CellView](/api-docs/headless/elements/CellView/) | class | A themeable cell view for list or collection display with interactive features. |
| [CheckStatus](/api-docs/headless/elements/CheckStatus/) | abstract | Represents the status of a checkbox or toggle control with change tracking. |
| [ChoiceStatus](/api-docs/headless/elements/ChoiceStatus/) | abstract | Represents the status of a choice selection with special states. |
| [ClickableIconView](/api-docs/headless/elements/ClickableIconView/) | class | An interactive icon button that responds to clicks and hover states. |
| [ColorFieldView](/api-docs/headless/elements/ColorFieldView/) | class | A color input field with an integrated color picker popup. |
| [ColorPickerHSBGradientView](/api-docs/headless/elements/ColorPickerHSBGradientView/) | class | A gradient color selector for HSB (Hue, Saturation, Brightness) color space. |
| [ColorPickerHSBSpectrumView](/api-docs/headless/elements/ColorPickerHSBSpectrumView/) | class | A vertical hue spectrum selector for HSB color space. |
| [ColorPickerHSLuvGradientView](/api-docs/headless/elements/ColorPickerHSLuvGradientView/) | class | A color picker gradient view using the HSLuv color space for perceptually uniform color selection. |
| [ColorPickerHSLuvSpectrumView](/api-docs/headless/elements/ColorPickerHSLuvSpectrumView/) | class | A vertical spectrum view for HSLuv color selection showing lightness values. |
| [ColorPickerPaletteColorView](/api-docs/headless/elements/ColorPickerPaletteColorView/) | class | A single color swatch in a color picker palette. |
| [ColorPickerView](/api-docs/headless/elements/ColorPickerView/) | class | A comprehensive color picker interface combining multiple color selection methods. |
| [ConfirmStatus](/api-docs/headless/elements/ConfirmStatus/) | abstract | Represents the status of a confirmation dialog or action. |
| [Context](/api-docs/headless/elements/Context/) | class | Global context singleton for the elements UI system. |
| [CrossX](/api-docs/headless/elements/CrossX/) | class | A visual component that renders an X-shaped cross icon. |
| [DragDrop](/api-docs/headless/elements/DragDrop/) | class | A component that enables drag-and-drop functionality for visuals. |
| [EditTextStatus](/api-docs/headless/elements/EditTextStatus/) | abstract | Represents the status of text editing operations using bit flags. |
| [Entypo](/api-docs/headless/elements/Entypo/) | abstract | Entypo icon font character codes. |
| [EntypoIconView](/api-docs/headless/elements/EntypoIconView/) | class | A view component for displaying Entypo font icons. |
| [EnumAbstractInfo](/api-docs/headless/elements/EnumAbstractInfo/) | class | Runtime information container for enum abstract types. |
| [EnumValuePointer](/api-docs/headless/elements/EnumValuePointer/) | typedef | Type alias for enum value pointers in the elements UI system. |
| [FieldSystem](/api-docs/headless/elements/FieldSystem/) | class | Central system for managing field focus in the Elements UI framework. |
| [FieldView](/api-docs/headless/elements/FieldView/) | class | Base class for interactive field views in the Elements UI framework. |
| [FloatPointer](/api-docs/headless/elements/FloatPointer/) | typedef | Function type for accessing and modifying floating-point values by reference. |
| [FormLayout](/api-docs/headless/elements/FormLayout/) | class | A specialized column layout designed for forms in the Elements UI framework. |
| [Handle](/api-docs/headless/elements/Handle/) | typedef | A type alias for integer handles used throughout the Elements UI framework. |
| [Im](/api-docs/headless/elements/Im/) | class | Immediate mode UI system for Ceramic inspired by Dear ImGui. |
| [ImRowLayout](/api-docs/headless/elements/ImRowLayout/) | class | A specialized row layout for the immediate mode UI system. |
| [ImSystem](/api-docs/headless/elements/ImSystem/) | class | The core system that manages the immediate mode UI rendering pipeline. |
| [InfoStatus](/api-docs/headless/elements/InfoStatus/) | abstract | Represents the status of an informational dialog or notification. |
| [InputStyle](/api-docs/headless/elements/InputStyle/) | enum | Defines the visual style options for input fields in the Elements UI system. |
| [IntPointer](/api-docs/headless/elements/IntPointer/) | typedef |  |
| [ItalicText](/api-docs/headless/elements/ItalicText/) | class | A component that applies italic-style skewing to Text visuals. |
| [LabeledView](/api-docs/headless/elements/LabeledView/) | class | A container that pairs a text label with any view, providing flexible label positioning. |
| [LabelPosition](/api-docs/headless/elements/LabelPosition/) | abstract | Enumeration defining the position of a label relative to its associated view. |
| [LabelView](/api-docs/headless/elements/LabelView/) | class | A themed text label for UI forms and layouts. |
| [ListStatus](/api-docs/headless/elements/ListStatus/) | abstract | Abstract wrapper for tracking list view state changes and item operations. |
| [ListView](/api-docs/headless/elements/ListView/) | class | A comprehensive list view with sorting, item management, and interaction features. |
| [ListViewDataSource](/api-docs/headless/elements/ListViewDataSource/) | class | Data source implementation for ListView's collection view. |
| [PendingDialog](/api-docs/headless/elements/PendingDialog/) | class | Model representing a pending dialog box with user interaction. |
| [PromptStatus](/api-docs/headless/elements/PromptStatus/) | abstract | Abstract type for tracking the completion status of prompt dialogs. |
| [RelatedToFieldView](/api-docs/headless/elements/RelatedToFieldView/) | interface | Interface for views that are related to or associated with a FieldView. |
| [SanitizeTextField](/api-docs/headless/elements/SanitizeTextField/) | class | Advanced text field sanitization utility with mathematical operation support. |
| [Scrollbar](/api-docs/headless/elements/Scrollbar/) | class | A basic scrollbar visual component that provides visual feedback for scrollable content. |
| [ScrollbarVisibility](/api-docs/headless/elements/ScrollbarVisibility/) | abstract | Enumeration defining different scrollbar visibility behaviors for scrollable containers. |
| [ScrollingLayout](/api-docs/headless/elements/ScrollingLayout/) | class | A scrollable container that wraps a layout view with optional filtering and borders. |
| [SelectFieldView](/api-docs/headless/elements/SelectFieldView/) | class | A dropdown selection field that allows users to choose from a predefined list of options. |
| [SelectListView](/api-docs/headless/elements/SelectListView/) | class | A scrollable list view for displaying selectable items in dropdown controls. |
| [Separator](/api-docs/headless/elements/Separator/) | class | A horizontal line separator for visually dividing content sections. |
| [SliderFieldView](/api-docs/headless/elements/SliderFieldView/) | class | A numeric input field with an integrated slider for intuitive value adjustment. |
| [StringPointer](/api-docs/headless/elements/StringPointer/) | typedef | Function type for accessing and modifying string values by reference. |
| [TabFocus](/api-docs/headless/elements/TabFocus/) | class | Component for managing keyboard-based focus navigation using Tab key. |
| [TabFocusable](/api-docs/headless/elements/TabFocusable/) | interface | Interface for elements that can participate in Tab key focus navigation. |
| [TabsLayout](/api-docs/headless/elements/TabsLayout/) | class | A horizontal tab layout component for organizing content into multiple pages. |
| [TabState](/api-docs/headless/elements/TabState/) | abstract | Represents the possible states of a tab in a tab control. |
| [TextFieldKind](/api-docs/headless/elements/TextFieldKind/) | enum | Defines the different types of text field inputs available. |
| [TextFieldView](/api-docs/headless/elements/TextFieldView/) | class | A flexible text input field view with support for various input types and validation. |
| [TextUtils](/api-docs/headless/elements/TextUtils/) | class | Utility class providing various text manipulation and transformation functions. |
| [Theme](/api-docs/headless/elements/Theme/) | class | Comprehensive theme configuration for the elements UI system. |
| [Tooltip](/api-docs/headless/elements/Tooltip/) | class | A tooltip component that displays informational text when hovering over visual elements. |
| [UserData](/api-docs/headless/elements/UserData/) | class | Persistent user data model for storing application-specific user preferences and state. |
| [VisualContainerView](/api-docs/headless/elements/VisualContainerView/) | class | A view container that displays and manages a single visual element with scaling and filtering opt... |
| [VisualContainerViewScaling](/api-docs/headless/elements/VisualContainerViewScaling/) | enum | Defines the scaling behavior options for VisualContainerView. |
| [Window](/api-docs/headless/elements/Window/) | class | A draggable window container for UI elements. |
| [WindowData](/api-docs/headless/elements/WindowData/) | class | Persistent data model for window state and configuration. |
| [WindowItem](/api-docs/headless/elements/WindowItem/) | class | A versatile data container for window UI elements with efficient pooling and recycling. |
| [WindowItemKind](/api-docs/headless/elements/WindowItemKind/) | abstract | Window item types enumeration. |

## Ase

| Type | Kind | Description |
|------|------|-------------|
| [Ase](/api-docs/headless/ase/Ase/) | class | Aseprite file format reader/writer |
| [AseHeader](/api-docs/headless/ase/AseHeader/) | class |  |
| [Cel](/api-docs/headless/ase/Cel/) | class |  |
| [CelChunk](/api-docs/headless/ase/chunks/CelChunk/) | class |  |
| [CelExtraChunk](/api-docs/headless/ase/chunks/CelExtraChunk/) | class |  |
| [Chunk](/api-docs/headless/ase/chunks/Chunk/) | class |  |
| [ChunkHeader](/api-docs/headless/ase/chunks/ChunkHeader/) | class |  |
| [ColorProfileChunk](/api-docs/headless/ase/chunks/ColorProfileChunk/) | class |  |
| [ExternalFilesChunk](/api-docs/headless/ase/chunks/ExternalFilesChunk/) | class |  |
| [LayerBlendMode](/api-docs/headless/ase/chunks/LayerBlendMode/) | abstract |  |
| [LayerChunk](/api-docs/headless/ase/chunks/LayerChunk/) | class |  |
| [LayerFlags](/api-docs/headless/ase/chunks/LayerFlags/) | abstract |  |
| [LayerType](/api-docs/headless/ase/chunks/LayerType/) | abstract |  |
| [MaskChunk](/api-docs/headless/ase/chunks/MaskChunk/) | class |  |
| [OldPaleteChunk](/api-docs/headless/ase/chunks/OldPaleteChunk/) | class |  |
| [Packet](/api-docs/headless/ase/chunks/Packet/) | typedef |  |
| [PaletteChunk](/api-docs/headless/ase/chunks/PaletteChunk/) | class |  |
| [PaletteChunkEntry](/api-docs/headless/ase/chunks/PaletteChunkEntry/) | class |  |
| [SliceChunk](/api-docs/headless/ase/chunks/SliceChunk/) | class |  |
| [SliceKey](/api-docs/headless/ase/chunks/SliceKey/) | class |  |
| [Tag](/api-docs/headless/ase/chunks/Tag/) | typedef |  |
| [TagsChunk](/api-docs/headless/ase/chunks/TagsChunk/) | class |  |
| [TilesetChunk](/api-docs/headless/ase/chunks/TilesetChunk/) | class |  |
| [UserDataChunk](/api-docs/headless/ase/chunks/UserDataChunk/) | class |  |
| [Frame](/api-docs/headless/ase/Frame/) | class |  |
| [FrameHeader](/api-docs/headless/ase/FrameHeader/) | class |  |
| [Layer](/api-docs/headless/ase/Layer/) | class |  |
| [Palette](/api-docs/headless/ase/Palette/) | class |  |
| [PaletteEntry](/api-docs/headless/ase/PaletteEntry/) | typedef |  |
| [CelType](/api-docs/headless/ase/types/CelType/) | abstract |  |
| [ChunkType](/api-docs/headless/ase/types/ChunkType/) | abstract |  |
| [ColorDepth](/api-docs/headless/ase/types/ColorDepth/) | abstract |  |
| [ColorProfileType](/api-docs/headless/ase/types/ColorProfileType/) | abstract |  |
| [Serializable](/api-docs/headless/ase/types/Serializable/) | interface |  |
| [AsepriteBlendFuncs](/api-docs/headless/ceramic/AsepriteBlendFuncs/) | class | Blending functions that operate at pixel/color level, ported from Aseprite source code. |
| [AsepriteData](/api-docs/headless/ceramic/AsepriteData/) | class | Data structure containing parsed Aseprite file information. |
| [AsepriteFrame](/api-docs/headless/ceramic/AsepriteFrame/) | class | Represents a single frame from an Aseprite animation. |
| [AsepriteFrameLayer](/api-docs/headless/ceramic/AsepriteFrameLayer/) | class | Represents a single layer's data within an Aseprite frame. |
| [AsepritePalette](/api-docs/headless/ceramic/AsepritePalette/) | class | Represents a color palette from an Aseprite file. |
| [AsepriteParser](/api-docs/headless/ceramic/AsepriteParser/) | class | Parser for Aseprite (.ase/.aseprite) animation files. |
| [AsepriteTag](/api-docs/headless/ceramic/AsepriteTag/) | class | Represents an animation tag from an Aseprite file. |

## Format

| Type | Kind | Description |
|------|------|-------------|
| [Header](/api-docs/headless/format/gz/Header/) | typedef |  |
| [Reader](/api-docs/headless/format/gz/Reader/) | class |  |
| [InflateImpl](/api-docs/headless/format/tools/InflateImpl/) | typedef |  |

## Tiled

| Type | Kind | Description |
|------|------|-------------|
| [Reader](/api-docs/headless/format/tmx/Reader/) | class | ... |
| [TmxBaseLayer](/api-docs/headless/format/tmx/TmxBaseLayer/) | class |  |
| [TmxChunk](/api-docs/headless/format/tmx/TmxChunk/) | class | This is currently added only for infinite maps. The contents of a chunk element is same as that of |
| [TmxData](/api-docs/headless/format/tmx/TmxData/) | class | When no encoding or compression is given, the tiles are stored as individual XML tile elements. |
| [TmxDataCompression](/api-docs/headless/format/tmx/TmxDataCompression/) | enum | Compression type for data. |
| [TmxDataEncoding](/api-docs/headless/format/tmx/TmxDataEncoding/) | enum | Encoding of the data. |
| [TmxGroup](/api-docs/headless/format/tmx/TmxGroup/) | class | A group layer, used to organize the layers of the map in a hierarchy. |
| [TmxHAlign](/api-docs/headless/format/tmx/TmxHAlign/) | abstract |  |
| [TmxImage](/api-docs/headless/format/tmx/TmxImage/) | class | As of the current version of Tiled Qt, each tileset has a single image associated with it, |
| [TmxImageLayer](/api-docs/headless/format/tmx/TmxImageLayer/) | class | A layer consisting of a single image. |
| [TmxLayer](/api-docs/headless/format/tmx/TmxLayer/) | enum |  |
| [TmxMap](/api-docs/headless/format/tmx/TmxMap/) | class | General .tmx map file |
| [TmxObject](/api-docs/headless/format/tmx/TmxObject/) | class |  |
| [TmxObjectGroup](/api-docs/headless/format/tmx/TmxObjectGroup/) | class | Layer representing a group of objects. |
| [TmxObjectGroupDrawOrder](/api-docs/headless/format/tmx/TmxObjectGroupDrawOrder/) | enum | Whether the objects are drawn according to the order of appearance ("index") or sorted by their y... |
| [TmxObjectTemplate](/api-docs/headless/format/tmx/TmxObjectTemplate/) | class |  |
| [TmxObjectType](/api-docs/headless/format/tmx/TmxObjectType/) | enum | Type of the object. |
| [TmxObjectTypeProperty](/api-docs/headless/format/tmx/TmxObjectTypeProperty/) | class |  |
| [TmxObjectTypeTemplate](/api-docs/headless/format/tmx/TmxObjectTypeTemplate/) | class |  |
| [TmxOrientation](/api-docs/headless/format/tmx/TmxOrientation/) | enum | Map orientation |
| [TmxPoint](/api-docs/headless/format/tmx/TmxPoint/) | class | Utility for x/y object. Used for Polygon and Polyline object types. |
| [TmxProperties](/api-docs/headless/format/tmx/TmxProperties/) | abstract |  |
| [TmxPropertyType](/api-docs/headless/format/tmx/TmxPropertyType/) | enum |  |
| [TmxRenderOrder](/api-docs/headless/format/tmx/TmxRenderOrder/) | enum | Rendering order of tiles |
| [TmxStaggerAxis](/api-docs/headless/format/tmx/TmxStaggerAxis/) | enum |  |
| [TmxStaggerIndex](/api-docs/headless/format/tmx/TmxStaggerIndex/) | enum |  |
| [TmxTerrain](/api-docs/headless/format/tmx/TmxTerrain/) | class |  |
| [TmxText](/api-docs/headless/format/tmx/TmxText/) | class | Used to mark an object as a text object. Contains the actual text as character data. |
| [TmxTile](/api-docs/headless/format/tmx/TmxTile/) | abstract | Single tile in tile layer. |
| [TmxTileLayer](/api-docs/headless/format/tmx/TmxTileLayer/) | class |  |
| [TmxTileOffset](/api-docs/headless/format/tmx/TmxTileOffset/) | class | This element is used to specify an offset in pixels, to be applied when drawing a tile from the r... |
| [TmxTileset](/api-docs/headless/format/tmx/TmxTileset/) | class | Tileset |
| [TmxTilesetGrid](/api-docs/headless/format/tmx/TmxTilesetGrid/) | class | This element is only used in case of isometric orientation, and determines how tile overlays for ... |
| [TmxTilesetTile](/api-docs/headless/format/tmx/TmxTilesetTile/) | class |  |
| [TmxTilesetTileFrame](/api-docs/headless/format/tmx/TmxTilesetTileFrame/) | class | Animation frame of a single tile in tileset. |
| [TmxVAlign](/api-docs/headless/format/tmx/TmxVAlign/) | abstract |  |
| [TmxWangSet](/api-docs/headless/format/tmx/TmxWangSet/) | class | Defines a list of corner colors and a list of edge colors, and any number of Wang tiles using the... |
| [TmxWangSetColor](/api-docs/headless/format/tmx/TmxWangSetColor/) | class | A color that can be used to define the corner or an edge of a Wang tile. |
| [TmxWangSetTile](/api-docs/headless/format/tmx/TmxWangSetTile/) | class | Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang... |
| [Tools](/api-docs/headless/format/tmx/Tools/) | class | ... |
| [ImplTmxProperties](/api-docs/headless/format/tmx/_Data/ImplTmxProperties/) | class |  |

## Nape

| Type | Kind | Description |
|------|------|-------------|
| [NapePhysicsBodyType](/api-docs/headless/ceramic/NapePhysicsBodyType/) | enum | Types of physics bodies in the Nape physics engine. |
| [NapeSystem](/api-docs/headless/ceramic/NapeSystem/) | class | Central system managing Nape physics simulation in Ceramic. |
| [VisualNapePhysics](/api-docs/headless/ceramic/VisualNapePhysics/) | class | Component that links a Ceramic Visual to a Nape physics body. |
| [BodyCallback](/api-docs/headless/nape/callbacks/BodyCallback/) | class | Callback object for Body type events. |
| [BodyListener](/api-docs/headless/nape/callbacks/BodyListener/) | class | Event listener for Body type events. |
| [Callback](/api-docs/headless/nape/callbacks/Callback/) | class | Base type for Callback event objects. |
| [CbEvent](/api-docs/headless/nape/callbacks/CbEvent/) | class | Enumeration of possible callback event types. |
| [CbType](/api-docs/headless/nape/callbacks/CbType/) | class | Callback Type applied to Interactors and Constraints. |
| [CbTypeIterator](/api-docs/headless/nape/callbacks/CbTypeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CbTypeList](/api-docs/headless/nape/callbacks/CbTypeList/) | class | Nape list of CbType type objects |
| [ConstraintCallback](/api-docs/headless/nape/callbacks/ConstraintCallback/) | class | Callback object for Constraint type events. |
| [ConstraintListener](/api-docs/headless/nape/callbacks/ConstraintListener/) | class | Event listener for Constraint type events. |
| [InteractionCallback](/api-docs/headless/nape/callbacks/InteractionCallback/) | class | Callback object for Interaction type events. |
| [InteractionListener](/api-docs/headless/nape/callbacks/InteractionListener/) | class | Event listener for Interaction type events. |
| [InteractionType](/api-docs/headless/nape/callbacks/InteractionType/) | class | Enumeration of Interaction types. |
| [Listener](/api-docs/headless/nape/callbacks/Listener/) | class | Base type for all Nape callback listeners. |
| [ListenerIterator](/api-docs/headless/nape/callbacks/ListenerIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ListenerList](/api-docs/headless/nape/callbacks/ListenerList/) | class | Nape list of Listener type objects |
| [ListenerType](/api-docs/headless/nape/callbacks/ListenerType/) | class | Enumeration of Listener types. |
| [OptionType](/api-docs/headless/nape/callbacks/OptionType/) | class | OptionType representing matching behaviour for Listeners. |
| [PreCallback](/api-docs/headless/nape/callbacks/PreCallback/) | class | Callback object for Pre-Interaction type events. |
| [PreFlag](/api-docs/headless/nape/callbacks/PreFlag/) | class | Enumeration of interaction states for arbiters. These values are returned |
| [PreListener](/api-docs/headless/nape/callbacks/PreListener/) | class | Event listener for Pre-Interaction type events. |
| [Config](/api-docs/headless/nape/Config/) | class | Configuration parameters for Nape |
| [AngleJoint](/api-docs/headless/nape/constraint/AngleJoint/) | class | AngleJoint constraining the relative angles of two Bodies. |
| [Constraint](/api-docs/headless/nape/constraint/Constraint/) | class | Base type for all Nape joints and constraints |
| [ConstraintIterator](/api-docs/headless/nape/constraint/ConstraintIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConstraintList](/api-docs/headless/nape/constraint/ConstraintList/) | class | Nape list of Constraint type objects |
| [DistanceJoint](/api-docs/headless/nape/constraint/DistanceJoint/) | class | DistanceJoint limiting the distance between two local anchor points of Bodies. |
| [LineJoint](/api-docs/headless/nape/constraint/LineJoint/) | class | LineJoint constraining anchor of one body, to a line segment of the other. |
| [MotorJoint](/api-docs/headless/nape/constraint/MotorJoint/) | class | MotorJoint constraining the angular velocities of two bodies |
| [PivotJoint](/api-docs/headless/nape/constraint/PivotJoint/) | class | PivotJoint constraining two anchors points of bodies to be equal. |
| [PulleyJoint](/api-docs/headless/nape/constraint/PulleyJoint/) | class | PulleyJoint limiting the weighted sum of distances between 2 pairs of 4 local anchor points of Bo... |
| [UserConstraint](/api-docs/headless/nape/constraint/UserConstraint/) | class | UserConstraint providing a low-level API for user-defined Constraints. |
| [WeldJoint](/api-docs/headless/nape/constraint/WeldJoint/) | class | WeldJoint constraining two bodies to be exactly locked together. |
| [Arbiter](/api-docs/headless/nape/dynamics/Arbiter/) | class | Arbiter representing the state of an interaction between two Bodys. |
| [ArbiterIterator](/api-docs/headless/nape/dynamics/ArbiterIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ArbiterList](/api-docs/headless/nape/dynamics/ArbiterList/) | class | Nape list of Arbiter type objects |
| [ArbiterType](/api-docs/headless/nape/dynamics/ArbiterType/) | class | Enumeration of Arbiter types. |
| [CollisionArbiter](/api-docs/headless/nape/dynamics/CollisionArbiter/) | class | Arbiter sub type for collision interactions. |
| [Contact](/api-docs/headless/nape/dynamics/Contact/) | class | Contact point for collision interactions |
| [ContactIterator](/api-docs/headless/nape/dynamics/ContactIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ContactList](/api-docs/headless/nape/dynamics/ContactList/) | class | Nape list of Contact type objects |
| [FluidArbiter](/api-docs/headless/nape/dynamics/FluidArbiter/) | class | Fluid interaction subtype for Arbiter. |
| [InteractionFilter](/api-docs/headless/nape/dynamics/InteractionFilter/) | class | InteractionFilter provides bit flags for low-level filtering of interactions. |
| [InteractionGroup](/api-docs/headless/nape/dynamics/InteractionGroup/) | class | InteractionGroups are another way of filtering interactions. |
| [InteractionGroupIterator](/api-docs/headless/nape/dynamics/InteractionGroupIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractionGroupList](/api-docs/headless/nape/dynamics/InteractionGroupList/) | class | Nape list of InteractionGroup type objects |
| [AABB](/api-docs/headless/nape/geom/AABB/) | class | Axis Aligned Bounding Box (AABB) |
| [ConvexResult](/api-docs/headless/nape/geom/ConvexResult/) | class | Class representing the results of a convex cast operation. |
| [ConvexResultIterator](/api-docs/headless/nape/geom/ConvexResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConvexResultList](/api-docs/headless/nape/geom/ConvexResultList/) | class | Nape list of ConvexResult type objects |
| [Geom](/api-docs/headless/nape/geom/Geom/) | class | Geom class provides interface to collision detection routines in nape. |
| [GeomPoly](/api-docs/headless/nape/geom/GeomPoly/) | class | Polygon class with various geometric methods |
| [GeomPolyIterator](/api-docs/headless/nape/geom/GeomPolyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [GeomPolyList](/api-docs/headless/nape/geom/GeomPolyList/) | class | Nape list of GeomPoly type objects |
| [GeomVertexIterator](/api-docs/headless/nape/geom/GeomVertexIterator/) | class | Haxe compatible iterator over vertices of GeomPoly. |
| [IsoFunctionDef](/api-docs/headless/nape/geom/IsoFunctionDef/) | typedef | Typedef defining iso-function type for MarchingSquares. |
| [MarchingSquares](/api-docs/headless/nape/geom/MarchingSquares/) | class | Iso-surface extraction into polygons. |
| [Mat23](/api-docs/headless/nape/geom/Mat23/) | class | 2D Matrix class representing affine transformations: |
| [MatMN](/api-docs/headless/nape/geom/MatMN/) | class | A general MxN dimensional matrix. |
| [Ray](/api-docs/headless/nape/geom/Ray/) | class | Parametrically defined ray used in ray casting functions. |
| [RayResult](/api-docs/headless/nape/geom/RayResult/) | class | Class representing the results of a ray cast operation. |
| [RayResultIterator](/api-docs/headless/nape/geom/RayResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [RayResultList](/api-docs/headless/nape/geom/RayResultList/) | class | Nape list of RayResult type objects |
| [Vec2](/api-docs/headless/nape/geom/Vec2/) | class | 2 Dimensional vector. |
| [Vec2Iterator](/api-docs/headless/nape/geom/Vec2Iterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [Vec2List](/api-docs/headless/nape/geom/Vec2List/) | class | Nape list of Vec2 type objects |
| [Vec3](/api-docs/headless/nape/geom/Vec3/) | class | A 3 dimensional vector object. |
| [Winding](/api-docs/headless/nape/geom/Winding/) | class | Enumeration represents the winding of a Polygon. |
| [Body](/api-docs/headless/nape/phys/Body/) | class | Class representing a physics Rigid Body. |
| [BodyIterator](/api-docs/headless/nape/phys/BodyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [BodyList](/api-docs/headless/nape/phys/BodyList/) | class | Nape list of Body type objects |
| [BodyType](/api-docs/headless/nape/phys/BodyType/) | class | Enumeration of rigid body types. |
| [Compound](/api-docs/headless/nape/phys/Compound/) | class | Compound represents a grouping of physics objects into a single object. |
| [CompoundIterator](/api-docs/headless/nape/phys/CompoundIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CompoundList](/api-docs/headless/nape/phys/CompoundList/) | class | Nape list of Compound type objects |
| [FluidProperties](/api-docs/headless/nape/phys/FluidProperties/) | class | FluidProperties providing shared parameters for fluid interaction. |
| [GravMassMode](/api-docs/headless/nape/phys/GravMassMode/) | class | Enumeration of GravMassMode values for a Body. |
| [InertiaMode](/api-docs/headless/nape/phys/InertiaMode/) | class | Enumeration of InertiaMode values for a Body. |
| [Interactor](/api-docs/headless/nape/phys/Interactor/) | class |  |
| [InteractorIterator](/api-docs/headless/nape/phys/InteractorIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractorList](/api-docs/headless/nape/phys/InteractorList/) | class | Nape list of Interactor type objects |
| [MassMode](/api-docs/headless/nape/phys/MassMode/) | class | Enumeration of MassMode values for a Body. |
| [Material](/api-docs/headless/nape/phys/Material/) | class | Material property providing physical attributes to a Shape. |
| [Circle](/api-docs/headless/nape/shape/Circle/) | class | Shape subtype representing a Circle |
| [Edge](/api-docs/headless/nape/shape/Edge/) | class | Edge class providing internal details of Polygon. |
| [EdgeIterator](/api-docs/headless/nape/shape/EdgeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [EdgeList](/api-docs/headless/nape/shape/EdgeList/) | class | Nape list of Edge type objects |
| [Polygon](/api-docs/headless/nape/shape/Polygon/) | class | Polygon subtype of Shape. |
| [Shape](/api-docs/headless/nape/shape/Shape/) | class | Base type for Nape Shape's |
| [ShapeIterator](/api-docs/headless/nape/shape/ShapeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ShapeList](/api-docs/headless/nape/shape/ShapeList/) | class | Nape list of Shape type objects |
| [ShapeType](/api-docs/headless/nape/shape/ShapeType/) | class | Enumeration of Nape Shape types. |
| [ValidationResult](/api-docs/headless/nape/shape/ValidationResult/) | class | Enumeration of validation results for a Polygon. |
| [Broadphase](/api-docs/headless/nape/space/Broadphase/) | class | Enumeration of available broadphase collision types that Spaces may use. |
| [Space](/api-docs/headless/nape/space/Space/) | class | The heart of all Nape simulations. |
| [TArray](/api-docs/headless/nape/TArray/) | typedef | Platform specific Array type. |
| [Debug](/api-docs/headless/nape/util/Debug/) | class | Debug class providing general utilities |
| [ZPP_BodyListener](/api-docs/headless/zpp_nape/callbacks/ZPP_BodyListener/) | class |  |
| [ZPP_Callback](/api-docs/headless/zpp_nape/callbacks/ZPP_Callback/) | class |  |
| [ZPP_CbSet](/api-docs/headless/zpp_nape/callbacks/ZPP_CbSet/) | class |  |
| [ZPP_CbSetPair](/api-docs/headless/zpp_nape/callbacks/ZPP_CbSetPair/) | class |  |
| [ZPP_CbType](/api-docs/headless/zpp_nape/callbacks/ZPP_CbType/) | class |  |
| [ZPP_ConstraintListener](/api-docs/headless/zpp_nape/callbacks/ZPP_ConstraintListener/) | class |  |
| [ZPP_InteractionListener](/api-docs/headless/zpp_nape/callbacks/ZPP_InteractionListener/) | class |  |
| [ZPP_Listener](/api-docs/headless/zpp_nape/callbacks/ZPP_Listener/) | class |  |
| [ZPP_OptionType](/api-docs/headless/zpp_nape/callbacks/ZPP_OptionType/) | class |  |
| [ZPP_AngleJoint](/api-docs/headless/zpp_nape/constraint/ZPP_AngleJoint/) | class |  |
| [ZPP_Constraint](/api-docs/headless/zpp_nape/constraint/ZPP_Constraint/) | class |  |
| [ZPP_CopyHelper](/api-docs/headless/zpp_nape/constraint/ZPP_CopyHelper/) | class |  |
| [ZPP_DistanceJoint](/api-docs/headless/zpp_nape/constraint/ZPP_DistanceJoint/) | class |  |
| [ZPP_LineJoint](/api-docs/headless/zpp_nape/constraint/ZPP_LineJoint/) | class |  |
| [ZPP_MotorJoint](/api-docs/headless/zpp_nape/constraint/ZPP_MotorJoint/) | class |  |
| [ZPP_PivotJoint](/api-docs/headless/zpp_nape/constraint/ZPP_PivotJoint/) | class |  |
| [ZPP_PulleyJoint](/api-docs/headless/zpp_nape/constraint/ZPP_PulleyJoint/) | class |  |
| [ZPP_UserBody](/api-docs/headless/zpp_nape/constraint/ZPP_UserBody/) | class |  |
| [ZPP_UserConstraint](/api-docs/headless/zpp_nape/constraint/ZPP_UserConstraint/) | class |  |
| [ZPP_WeldJoint](/api-docs/headless/zpp_nape/constraint/ZPP_WeldJoint/) | class |  |
| [ZPP_Arbiter](/api-docs/headless/zpp_nape/dynamics/ZPP_Arbiter/) | class |  |
| [ZPP_ColArbiter](/api-docs/headless/zpp_nape/dynamics/ZPP_ColArbiter/) | class |  |
| [ZPP_Contact](/api-docs/headless/zpp_nape/dynamics/ZPP_Contact/) | class |  |
| [ZPP_FluidArbiter](/api-docs/headless/zpp_nape/dynamics/ZPP_FluidArbiter/) | class |  |
| [ZPP_IContact](/api-docs/headless/zpp_nape/dynamics/ZPP_IContact/) | class |  |
| [ZPP_InteractionFilter](/api-docs/headless/zpp_nape/dynamics/ZPP_InteractionFilter/) | class |  |
| [ZPP_InteractionGroup](/api-docs/headless/zpp_nape/dynamics/ZPP_InteractionGroup/) | class |  |
| [ZPP_SensorArbiter](/api-docs/headless/zpp_nape/dynamics/ZPP_SensorArbiter/) | class |  |
| [ZPP_SpaceArbiterList](/api-docs/headless/zpp_nape/dynamics/ZPP_SpaceArbiterList/) | class |  |
| [ZPP_AABB](/api-docs/headless/zpp_nape/geom/ZPP_AABB/) | class |  |
| [ZPP_Collide](/api-docs/headless/zpp_nape/geom/ZPP_Collide/) | class |  |
| [ZPP_Convex](/api-docs/headless/zpp_nape/geom/ZPP_Convex/) | class |  |
| [ZPP_ConvexRayResult](/api-docs/headless/zpp_nape/geom/ZPP_ConvexRayResult/) | class |  |
| [ZPP_CutInt](/api-docs/headless/zpp_nape/geom/ZPP_CutInt/) | class |  |
| [ZPP_Cutter](/api-docs/headless/zpp_nape/geom/ZPP_Cutter/) | class |  |
| [ZPP_CutVert](/api-docs/headless/zpp_nape/geom/ZPP_CutVert/) | class |  |
| [ZPP_Geom](/api-docs/headless/zpp_nape/geom/ZPP_Geom/) | class |  |
| [ZPP_GeomPoly](/api-docs/headless/zpp_nape/geom/ZPP_GeomPoly/) | class |  |
| [ZPP_GeomVert](/api-docs/headless/zpp_nape/geom/ZPP_GeomVert/) | class |  |
| [ZPP_GeomVertexIterator](/api-docs/headless/zpp_nape/geom/ZPP_GeomVertexIterator/) | class |  |
| [ZPP_MarchingSquares](/api-docs/headless/zpp_nape/geom/ZPP_MarchingSquares/) | class |  |
| [ZPP_MarchPair](/api-docs/headless/zpp_nape/geom/ZPP_MarchPair/) | class |  |
| [ZPP_MarchSpan](/api-docs/headless/zpp_nape/geom/ZPP_MarchSpan/) | class |  |
| [ZPP_Mat23](/api-docs/headless/zpp_nape/geom/ZPP_Mat23/) | class |  |
| [ZPP_MatMN](/api-docs/headless/zpp_nape/geom/ZPP_MatMN/) | class |  |
| [ZPP_Monotone](/api-docs/headless/zpp_nape/geom/ZPP_Monotone/) | class |  |
| [ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/geom/ZPP_PartitionedPoly/) | class |  |
| [ZPP_PartitionPair](/api-docs/headless/zpp_nape/geom/ZPP_PartitionPair/) | class |  |
| [ZPP_PartitionVertex](/api-docs/headless/zpp_nape/geom/ZPP_PartitionVertex/) | class |  |
| [ZPP_Ray](/api-docs/headless/zpp_nape/geom/ZPP_Ray/) | class |  |
| [ZPP_Simple](/api-docs/headless/zpp_nape/geom/ZPP_Simple/) | class |  |
| [ZPP_SimpleEvent](/api-docs/headless/zpp_nape/geom/ZPP_SimpleEvent/) | class |  |
| [ZPP_SimpleSeg](/api-docs/headless/zpp_nape/geom/ZPP_SimpleSeg/) | class |  |
| [ZPP_SimpleSweep](/api-docs/headless/zpp_nape/geom/ZPP_SimpleSweep/) | class |  |
| [ZPP_SimpleVert](/api-docs/headless/zpp_nape/geom/ZPP_SimpleVert/) | class |  |
| [ZPP_Simplify](/api-docs/headless/zpp_nape/geom/ZPP_Simplify/) | class |  |
| [ZPP_SimplifyP](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyP/) | class |  |
| [ZPP_SimplifyV](/api-docs/headless/zpp_nape/geom/ZPP_SimplifyV/) | class |  |
| [ZPP_SweepDistance](/api-docs/headless/zpp_nape/geom/ZPP_SweepDistance/) | class |  |
| [ZPP_ToiEvent](/api-docs/headless/zpp_nape/geom/ZPP_ToiEvent/) | class |  |
| [ZPP_Triangular](/api-docs/headless/zpp_nape/geom/ZPP_Triangular/) | class |  |
| [ZPP_Vec2](/api-docs/headless/zpp_nape/geom/ZPP_Vec2/) | class |  |
| [ZPP_Vec3](/api-docs/headless/zpp_nape/geom/ZPP_Vec3/) | class |  |
| [ZPP_VecMath](/api-docs/headless/zpp_nape/geom/ZPP_VecMath/) | class |  |
| [ZPP_Body](/api-docs/headless/zpp_nape/phys/ZPP_Body/) | class |  |
| [ZPP_Compound](/api-docs/headless/zpp_nape/phys/ZPP_Compound/) | class |  |
| [ZPP_FluidProperties](/api-docs/headless/zpp_nape/phys/ZPP_FluidProperties/) | class |  |
| [ZPP_Interactor](/api-docs/headless/zpp_nape/phys/ZPP_Interactor/) | class |  |
| [ZPP_Material](/api-docs/headless/zpp_nape/phys/ZPP_Material/) | class |  |
| [ZPP_Circle](/api-docs/headless/zpp_nape/shape/ZPP_Circle/) | class |  |
| [ZPP_Edge](/api-docs/headless/zpp_nape/shape/ZPP_Edge/) | class |  |
| [ZPP_Polygon](/api-docs/headless/zpp_nape/shape/ZPP_Polygon/) | class |  |
| [ZPP_Shape](/api-docs/headless/zpp_nape/shape/ZPP_Shape/) | class |  |
| [ZPP_AABBNode](/api-docs/headless/zpp_nape/space/ZPP_AABBNode/) | class |  |
| [ZPP_AABBPair](/api-docs/headless/zpp_nape/space/ZPP_AABBPair/) | class |  |
| [ZPP_AABBTree](/api-docs/headless/zpp_nape/space/ZPP_AABBTree/) | class |  |
| [ZPP_Broadphase](/api-docs/headless/zpp_nape/space/ZPP_Broadphase/) | class |  |
| [ZPP_CallbackSet](/api-docs/headless/zpp_nape/space/ZPP_CallbackSet/) | class |  |
| [ZPP_CbSetManager](/api-docs/headless/zpp_nape/space/ZPP_CbSetManager/) | class |  |
| [ZPP_Component](/api-docs/headless/zpp_nape/space/ZPP_Component/) | class |  |
| [ZPP_DynAABBPhase](/api-docs/headless/zpp_nape/space/ZPP_DynAABBPhase/) | class |  |
| [ZPP_Island](/api-docs/headless/zpp_nape/space/ZPP_Island/) | class |  |
| [ZPP_Space](/api-docs/headless/zpp_nape/space/ZPP_Space/) | class |  |
| [ZPP_SweepData](/api-docs/headless/zpp_nape/space/ZPP_SweepData/) | class |  |
| [ZPP_SweepPhase](/api-docs/headless/zpp_nape/space/ZPP_SweepPhase/) | class |  |
| [FastHash2_Hashable2_Boolfalse](/api-docs/headless/zpp_nape/util/FastHash2_Hashable2_Boolfalse/) | class |  |
| [Hashable2_Boolfalse](/api-docs/headless/zpp_nape/util/Hashable2_Boolfalse/) | class |  |
| [ZNPArray2_Float](/api-docs/headless/zpp_nape/util/ZNPArray2_Float/) | class |  |
| [ZNPArray2_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPArray2_ZPP_GeomVert/) | class |  |
| [ZNPArray2_ZPP_MarchPair](/api-docs/headless/zpp_nape/util/ZNPArray2_ZPP_MarchPair/) | class |  |
| [ZNPList_ConvexResult](/api-docs/headless/zpp_nape/util/ZNPList_ConvexResult/) | class |  |
| [ZNPList_RayResult](/api-docs/headless/zpp_nape/util/ZNPList_RayResult/) | class |  |
| [ZNPList_ZPP_AABBNode](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_AABBNode/) | class |  |
| [ZNPList_ZPP_AABBPair](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_AABBPair/) | class |  |
| [ZNPList_ZPP_Arbiter](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Arbiter/) | class |  |
| [ZNPList_ZPP_Body](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Body/) | class |  |
| [ZNPList_ZPP_BodyListener](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_BodyListener/) | class |  |
| [ZNPList_ZPP_CallbackSet](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_CallbackSet/) | class |  |
| [ZNPList_ZPP_CbSet](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_CbSet/) | class |  |
| [ZNPList_ZPP_CbSetPair](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_CbSetPair/) | class |  |
| [ZNPList_ZPP_CbType](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_CbType/) | class |  |
| [ZNPList_ZPP_ColArbiter](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_ColArbiter/) | class |  |
| [ZNPList_ZPP_Component](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Component/) | class |  |
| [ZNPList_ZPP_Compound](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Compound/) | class |  |
| [ZNPList_ZPP_Constraint](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Constraint/) | class |  |
| [ZNPList_ZPP_ConstraintListener](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_ConstraintListener/) | class |  |
| [ZNPList_ZPP_CutInt](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_CutInt/) | class |  |
| [ZNPList_ZPP_CutVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_CutVert/) | class |  |
| [ZNPList_ZPP_Edge](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Edge/) | class |  |
| [ZNPList_ZPP_FluidArbiter](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_FluidArbiter/) | class |  |
| [ZNPList_ZPP_GeomPoly](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomPoly/) | class |  |
| [ZNPList_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_GeomVert/) | class |  |
| [ZNPList_ZPP_InteractionGroup](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_InteractionGroup/) | class |  |
| [ZNPList_ZPP_InteractionListener](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_InteractionListener/) | class |  |
| [ZNPList_ZPP_Interactor](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Interactor/) | class |  |
| [ZNPList_ZPP_Listener](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Listener/) | class |  |
| [ZNPList_ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) | class |  |
| [ZNPList_ZPP_PartitionVertex](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_PartitionVertex/) | class |  |
| [ZNPList_ZPP_SensorArbiter](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_SensorArbiter/) | class |  |
| [ZNPList_ZPP_Shape](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Shape/) | class |  |
| [ZNPList_ZPP_SimpleEvent](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_SimpleEvent/) | class |  |
| [ZNPList_ZPP_SimpleVert](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_SimpleVert/) | class |  |
| [ZNPList_ZPP_SimplifyP](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_SimplifyP/) | class |  |
| [ZNPList_ZPP_ToiEvent](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_ToiEvent/) | class |  |
| [ZNPList_ZPP_Vec2](/api-docs/headless/zpp_nape/util/ZNPList_ZPP_Vec2/) | class |  |
| [ZNPNode_ConvexResult](/api-docs/headless/zpp_nape/util/ZNPNode_ConvexResult/) | class |  |
| [ZNPNode_RayResult](/api-docs/headless/zpp_nape/util/ZNPNode_RayResult/) | class |  |
| [ZNPNode_ZPP_AABBNode](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_AABBNode/) | class |  |
| [ZNPNode_ZPP_AABBPair](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_AABBPair/) | class |  |
| [ZNPNode_ZPP_Arbiter](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Arbiter/) | class |  |
| [ZNPNode_ZPP_Body](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Body/) | class |  |
| [ZNPNode_ZPP_BodyListener](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_BodyListener/) | class |  |
| [ZNPNode_ZPP_CallbackSet](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_CallbackSet/) | class |  |
| [ZNPNode_ZPP_CbSet](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_CbSet/) | class |  |
| [ZNPNode_ZPP_CbSetPair](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_CbSetPair/) | class |  |
| [ZNPNode_ZPP_CbType](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_CbType/) | class |  |
| [ZNPNode_ZPP_ColArbiter](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_ColArbiter/) | class |  |
| [ZNPNode_ZPP_Component](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Component/) | class |  |
| [ZNPNode_ZPP_Compound](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Compound/) | class |  |
| [ZNPNode_ZPP_Constraint](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Constraint/) | class |  |
| [ZNPNode_ZPP_ConstraintListener](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_ConstraintListener/) | class |  |
| [ZNPNode_ZPP_CutInt](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_CutInt/) | class |  |
| [ZNPNode_ZPP_CutVert](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_CutVert/) | class |  |
| [ZNPNode_ZPP_Edge](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Edge/) | class |  |
| [ZNPNode_ZPP_FluidArbiter](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_FluidArbiter/) | class |  |
| [ZNPNode_ZPP_GeomPoly](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_GeomPoly/) | class |  |
| [ZNPNode_ZPP_GeomVert](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_GeomVert/) | class |  |
| [ZNPNode_ZPP_InteractionGroup](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_InteractionGroup/) | class |  |
| [ZNPNode_ZPP_InteractionListener](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_InteractionListener/) | class |  |
| [ZNPNode_ZPP_Interactor](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Interactor/) | class |  |
| [ZNPNode_ZPP_Listener](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Listener/) | class |  |
| [ZNPNode_ZPP_PartitionedPoly](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_PartitionedPoly/) | class |  |
| [ZNPNode_ZPP_PartitionVertex](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_PartitionVertex/) | class |  |
| [ZNPNode_ZPP_SensorArbiter](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_SensorArbiter/) | class |  |
| [ZNPNode_ZPP_Shape](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Shape/) | class |  |
| [ZNPNode_ZPP_SimpleEvent](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_SimpleEvent/) | class |  |
| [ZNPNode_ZPP_SimpleVert](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_SimpleVert/) | class |  |
| [ZNPNode_ZPP_SimplifyP](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_SimplifyP/) | class |  |
| [ZNPNode_ZPP_ToiEvent](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_ToiEvent/) | class |  |
| [ZNPNode_ZPP_Vec2](/api-docs/headless/zpp_nape/util/ZNPNode_ZPP_Vec2/) | class |  |
| [ZPP_ArbiterList](/api-docs/headless/zpp_nape/util/ZPP_ArbiterList/) | class |  |
| [ZPP_BodyList](/api-docs/headless/zpp_nape/util/ZPP_BodyList/) | class |  |
| [ZPP_CbTypeList](/api-docs/headless/zpp_nape/util/ZPP_CbTypeList/) | class |  |
| [ZPP_CompoundList](/api-docs/headless/zpp_nape/util/ZPP_CompoundList/) | class |  |
| [ZPP_ConstraintList](/api-docs/headless/zpp_nape/util/ZPP_ConstraintList/) | class |  |
| [ZPP_ContactList](/api-docs/headless/zpp_nape/util/ZPP_ContactList/) | class |  |
| [ZPP_ConvexResultList](/api-docs/headless/zpp_nape/util/ZPP_ConvexResultList/) | class |  |
| [ZPP_EdgeList](/api-docs/headless/zpp_nape/util/ZPP_EdgeList/) | class |  |
| [ZPP_Flags](/api-docs/headless/zpp_nape/util/ZPP_Flags/) | class |  |
| [ZPP_GeomPolyList](/api-docs/headless/zpp_nape/util/ZPP_GeomPolyList/) | class |  |
| [ZPP_InteractionGroupList](/api-docs/headless/zpp_nape/util/ZPP_InteractionGroupList/) | class |  |
| [ZPP_InteractorList](/api-docs/headless/zpp_nape/util/ZPP_InteractorList/) | class |  |
| [ZPP_ListenerList](/api-docs/headless/zpp_nape/util/ZPP_ListenerList/) | class |  |
| [ZPP_Math](/api-docs/headless/zpp_nape/util/ZPP_Math/) | class |  |
| [ZPP_MixVec2List](/api-docs/headless/zpp_nape/util/ZPP_MixVec2List/) | class |  |
| [ZPP_PubPool](/api-docs/headless/zpp_nape/util/ZPP_PubPool/) | class |  |
| [ZPP_RayResultList](/api-docs/headless/zpp_nape/util/ZPP_RayResultList/) | class |  |
| [ZPP_Set_ZPP_Body](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_Body/) | class |  |
| [ZPP_Set_ZPP_CbSet](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_CbSet/) | class |  |
| [ZPP_Set_ZPP_CbSetPair](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_CbSetPair/) | class |  |
| [ZPP_Set_ZPP_PartitionPair](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_PartitionPair/) | class |  |
| [ZPP_Set_ZPP_PartitionVertex](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_PartitionVertex/) | class |  |
| [ZPP_Set_ZPP_SimpleEvent](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_SimpleEvent/) | class |  |
| [ZPP_Set_ZPP_SimpleSeg](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_SimpleSeg/) | class |  |
| [ZPP_Set_ZPP_SimpleVert](/api-docs/headless/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/) | class |  |
| [ZPP_ShapeList](/api-docs/headless/zpp_nape/util/ZPP_ShapeList/) | class |  |
| [ZPP_Vec2List](/api-docs/headless/zpp_nape/util/ZPP_Vec2List/) | class |  |
| [ZPP_Const](/api-docs/headless/zpp_nape/ZPP_Const/) | class |  |
| [ZPP_ID](/api-docs/headless/zpp_nape/ZPP_ID/) | class |  |

## BinPacking

| Type | Kind | Description |
|------|------|-------------|
| [DisjointRectCollection](/api-docs/headless/binpacking/DisjointRectCollection/) | class |  |
| [FreeRectChoiceHeuristic](/api-docs/headless/binpacking/FreeRectChoiceHeuristic/) | abstract |  |
| [IOccupancy](/api-docs/headless/binpacking/IOccupancy/) | interface |  |
| [MaxRectsPacker](/api-docs/headless/binpacking/MaxRectsPacker/) | class |  |
| [MaxRectsPackerBestFitPosition](/api-docs/headless/binpacking/MaxRectsPackerBestFitPosition/) | class |  |
| [MaxRectsPackerRectScore](/api-docs/headless/binpacking/MaxRectsPackerRectScore/) | class |  |
| [Rect](/api-docs/headless/binpacking/Rect/) | class |  |
| [RectSize](/api-docs/headless/binpacking/RectSize/) | class |  |

## Hsluv

| Type | Kind | Description |
|------|------|-------------|
| [Angle](/api-docs/headless/hsluv/Angle/) | typedef |  |
| [Geometry](/api-docs/headless/hsluv/Geometry/) | class |  |
| [Hsluv](/api-docs/headless/hsluv/Hsluv/) | class | Human-friendly HSL conversion utility class. |
| [Line](/api-docs/headless/hsluv/Line/) | typedef |  |
| [Point](/api-docs/headless/hsluv/Point/) | typedef |  |

## Hscript

| Type | Kind | Description |
|------|------|-------------|
| [Argument](/api-docs/headless/hscript/Argument/) | typedef |  |
| [ClassDecl](/api-docs/headless/hscript/ClassDecl/) | typedef |  |
| [Const](/api-docs/headless/hscript/Const/) | enum |  |
| [CType](/api-docs/headless/hscript/CType/) | enum |  |
| [Error](/api-docs/headless/hscript/Error/) | class |  |
| [ErrorDef](/api-docs/headless/hscript/ErrorDef/) | enum |  |
| [Expr](/api-docs/headless/hscript/Expr/) | typedef |  |
| [ExprDef](/api-docs/headless/hscript/ExprDef/) | enum |  |
| [FieldAccess](/api-docs/headless/hscript/FieldAccess/) | enum |  |
| [FieldDecl](/api-docs/headless/hscript/FieldDecl/) | typedef |  |
| [FieldKind](/api-docs/headless/hscript/FieldKind/) | enum |  |
| [FunctionDecl](/api-docs/headless/hscript/FunctionDecl/) | typedef |  |
| [Interp](/api-docs/headless/hscript/Interp/) | class |  |
| [Metadata](/api-docs/headless/hscript/Metadata/) | typedef |  |
| [ModuleDecl](/api-docs/headless/hscript/ModuleDecl/) | enum |  |
| [ModuleType](/api-docs/headless/hscript/ModuleType/) | typedef |  |
| [Parser](/api-docs/headless/hscript/Parser/) | class |  |
| [Printer](/api-docs/headless/hscript/Printer/) | class |  |
| [Token](/api-docs/headless/hscript/Token/) | enum |  |
| [Tools](/api-docs/headless/hscript/Tools/) | class |  |
| [TypeDecl](/api-docs/headless/hscript/TypeDecl/) | typedef |  |
| [VarDecl](/api-docs/headless/hscript/VarDecl/) | typedef |  |
| [Stop](/api-docs/headless/hscript/_Interp/Stop/) | enum |  |

## Fuzzaldrin

| Type | Kind | Description |
|------|------|-------------|
| [Filter](/api-docs/headless/fuzzaldrin/Filter/) | class |  |
| [Fuzzaldrin](/api-docs/headless/fuzzaldrin/Fuzzaldrin/) | class |  |
| [Matcher](/api-docs/headless/fuzzaldrin/Matcher/) | class |  |
| [Scorer](/api-docs/headless/fuzzaldrin/Scorer/) | class |  |

## Polyline

| Type | Kind | Description |
|------|------|-------------|
| [Extensions](/api-docs/headless/polyline/Extensions/) | class |  |
| [MiterUtils](/api-docs/headless/polyline/MiterUtils/) | class |  |
| [Stroke](/api-docs/headless/polyline/Stroke/) | class |  |
| [StrokeCap](/api-docs/headless/polyline/StrokeCap/) | enum |  |
| [StrokeJoin](/api-docs/headless/polyline/StrokeJoin/) | enum |  |

## Spec

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/headless/spec/Audio/) | interface | Backend interface for audio operations. |
| [Backend](/api-docs/headless/spec/Backend/) | interface | Main backend interface that provides access to all platform-specific functionality. |
| [Binaries](/api-docs/headless/spec/Binaries/) | interface | Backend interface for binary data loading operations. |
| [Clipboard](/api-docs/headless/spec/Clipboard/) | interface | Backend interface for system clipboard operations. |
| [Input](/api-docs/headless/spec/Input/) | interface | Backend interface for input handling. |
| [IO](/api-docs/headless/spec/IO/) | interface | Backend interface for file input/output operations. |
| [Shaders](/api-docs/headless/spec/Shaders/) | interface | Backend interface for GPU shader program management. |
| [TextInput](/api-docs/headless/spec/TextInput/) | interface | Backend interface for system text input handling. |
| [Texts](/api-docs/headless/spec/Texts/) | interface | Backend interface for text file loading operations. |
| [Textures](/api-docs/headless/spec/Textures/) | interface | Backend interface for texture (image) management and GPU operations. |

## Other

| Type | Kind | Description |
|------|------|-------------|
| [AllAssets](/api-docs/headless/assets/AllAssets/) | class |  |
| [Project](/api-docs/headless/Project/) | class |  |

## Haxe

| Type | Kind | Description |
|------|------|-------------|
| [Any](/api-docs/headless/Any/) | abstract | `Any` is a type that is compatible with any other in both ways. |
| [Array](/api-docs/headless/Array/) | class | An Array is a storage for values. You can access it using indexes or |
| [ArrayAccess](/api-docs/headless/ArrayAccess/) | interface | `ArrayAccess` is used to indicate a class that can be accessed using brackets. |
| [Bool](/api-docs/headless/Bool/) | abstract | The standard Boolean type, which can either be `true` or `false`. |
| [Class](/api-docs/headless/Class/) | abstract | An abstract type that represents a Class. |
| [Date](/api-docs/headless/Date/) | class | The Date class provides a basic structure for date and time related |
| [Dynamic](/api-docs/headless/Dynamic/) | abstract | `Dynamic` is a special type which is compatible with all other types. |
| [Enum](/api-docs/headless/Enum/) | abstract | An abstract type that represents an Enum type. |
| [EnumValue](/api-docs/headless/EnumValue/) | abstract | An abstract type that represents any enum value. |
| [EReg](/api-docs/headless/EReg/) | class | The EReg class represents regular expressions. |
| [Float](/api-docs/headless/Float/) | abstract | The standard `Float` type, this is a double-precision IEEE 64bit float. |
| [CallStack](/api-docs/headless/haxe/CallStack/) | abstract | Get information about the call stack. |
| [Constructible](/api-docs/headless/haxe/Constructible/) | abstract | This type unifies with any instance of classes that have a constructor |
| [Adler32](/api-docs/headless/haxe/crypto/Adler32/) | class | Calculates the Adler32 of the given Bytes. |
| [Base64](/api-docs/headless/haxe/crypto/Base64/) | class | Allows one to encode/decode String and bytes using Base64 encoding. |
| [BaseCode](/api-docs/headless/haxe/crypto/BaseCode/) | class | Allows one to encode/decode String and bytes using a power of two base dictionary. |
| [HashMethod](/api-docs/headless/haxe/crypto/HashMethod/) | enum | Hash methods for Hmac calculation. |
| [Hmac](/api-docs/headless/haxe/crypto/Hmac/) | class | Calculates a Hmac of the given Bytes using a HashMethod. |
| [Md5](/api-docs/headless/haxe/crypto/Md5/) | class | Creates a MD5 of a String. |
| [Sha1](/api-docs/headless/haxe/crypto/Sha1/) | class | Creates a Sha1 of a String. |
| [Sha256](/api-docs/headless/haxe/crypto/Sha256/) | class | Creates a Sha256 of a String. |
| [ArraySort](/api-docs/headless/haxe/ds/ArraySort/) | class | ArraySort provides a stable implementation of merge sort through its `sort` |
| [BalancedTree](/api-docs/headless/haxe/ds/BalancedTree/) | class | BalancedTree allows key-value mapping with arbitrary keys, as long as they |
| [EnumValueMap](/api-docs/headless/haxe/ds/EnumValueMap/) | class | EnumValueMap allows mapping of enum value keys to arbitrary values. |
| [IntMap](/api-docs/headless/haxe/ds/IntMap/) | class | IntMap allows mapping of Int keys to arbitrary values. |
| [List](/api-docs/headless/haxe/ds/List/) | class | A linked-list of elements. The list is composed of element container objects |
| [Map](/api-docs/headless/haxe/ds/Map/) | abstract | Map allows key to value mapping for arbitrary value types, and many key |
| [ObjectMap](/api-docs/headless/haxe/ds/ObjectMap/) | class | ObjectMap allows mapping of object keys to arbitrary values. |
| [ReadOnlyArray](/api-docs/headless/haxe/ds/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [StringMap](/api-docs/headless/haxe/ds/StringMap/) | class | StringMap allows mapping of String keys to arbitrary values. |
| [TreeNode](/api-docs/headless/haxe/ds/TreeNode/) | class | A tree node of `haxe.ds.BalancedTree`. |
| [Vector](/api-docs/headless/haxe/ds/Vector/) | abstract | A Vector is a storage of fixed size. It can be faster than Array on some |
| [DynamicAccess](/api-docs/headless/haxe/DynamicAccess/) | abstract | DynamicAccess is an abstract type for working with anonymous structures |
| [EnumTools](/api-docs/headless/haxe/EnumTools/) | class | This class provides advanced methods on enums. It is ideally used with |
| [EnumValueTools](/api-docs/headless/haxe/EnumValueTools/) | class | This class provides advanced methods on enum values. It is ideally used with |
| [Exception](/api-docs/headless/haxe/Exception/) | class | Base class for exceptions. |
| [NotImplementedException](/api-docs/headless/haxe/exceptions/NotImplementedException/) | class | An exception that is thrown when requested function or operation does not have an implementation. |
| [PosException](/api-docs/headless/haxe/exceptions/PosException/) | class | An exception that carry position information of a place where it was created. |
| [EitherType](/api-docs/headless/haxe/extern/EitherType/) | abstract | An abstract type allowing values to be either of `T1` or `T2` type. |
| [Rest](/api-docs/headless/haxe/extern/Rest/) | typedef | DEPRECATED: use haxe.Rest instead. |
| [FlatEnum](/api-docs/headless/haxe/FlatEnum/) | abstract | This type unifies with an enum instance if all constructors of the enum |
| [Function](/api-docs/headless/haxe/Function/) | abstract | This type unifies with any function type. |
| [IMap](/api-docs/headless/haxe/IMap/) | interface |  |
| [Int32](/api-docs/headless/haxe/Int32/) | abstract | Int32 provides a 32-bit integer with consistent overflow behavior across |
| [Int64](/api-docs/headless/haxe/Int64/) | abstract | A cross-platform signed 64-bit integer. |
| [ArrayBufferView](/api-docs/headless/haxe/io/ArrayBufferView/) | abstract |  |
| [ArrayBufferViewData](/api-docs/headless/haxe/io/ArrayBufferViewData/) | typedef |  |
| [Bytes](/api-docs/headless/haxe/io/Bytes/) | class |  |
| [BytesBuffer](/api-docs/headless/haxe/io/BytesBuffer/) | class |  |
| [BytesData](/api-docs/headless/haxe/io/BytesData/) | typedef |  |
| [BytesInput](/api-docs/headless/haxe/io/BytesInput/) | class |  |
| [BytesOutput](/api-docs/headless/haxe/io/BytesOutput/) | class |  |
| [Encoding](/api-docs/headless/haxe/io/Encoding/) | enum | String binary encoding supported by Haxe I/O |
| [Eof](/api-docs/headless/haxe/io/Eof/) | class | This exception is raised when reading while data is no longer available in the `haxe.io.Input`. |
| [Error](/api-docs/headless/haxe/io/Error/) | enum | The possible IO errors that can occur |
| [FPHelper](/api-docs/headless/haxe/io/FPHelper/) | class | Helper that converts between floating point and binary representation. |
| [Input](/api-docs/headless/haxe/io/Input/) | class | An Input is an abstract reader. See other classes in the `haxe.io` package |
| [Int32Array](/api-docs/headless/haxe/io/Int32Array/) | abstract |  |
| [Int32ArrayData](/api-docs/headless/haxe/io/Int32ArrayData/) | typedef |  |
| [Output](/api-docs/headless/haxe/io/Output/) | class | An Output is an abstract write. A specific output implementation will only |
| [Path](/api-docs/headless/haxe/io/Path/) | class | This class provides a convenient way of working with paths. It supports the |
| [StringInput](/api-docs/headless/haxe/io/StringInput/) | class |  |
| [UInt8Array](/api-docs/headless/haxe/io/UInt8Array/) | abstract |  |
| [UInt8ArrayData](/api-docs/headless/haxe/io/UInt8ArrayData/) | typedef |  |
| [ArrayIterator](/api-docs/headless/haxe/iterators/ArrayIterator/) | class | This iterator is used only when `Array<T>` is passed to `Iterable<T>` |
| [ArrayKeyValueIterator](/api-docs/headless/haxe/iterators/ArrayKeyValueIterator/) | class |  |
| [DynamicAccessKeyValueIterator](/api-docs/headless/haxe/iterators/DynamicAccessKeyValueIterator/) | class | This Key/Value iterator can be used to iterate over `haxe.DynamicAccess`. |
| [MapKeyValueIterator](/api-docs/headless/haxe/iterators/MapKeyValueIterator/) | class | This Key/Value iterator can be used to iterate across maps. |
| [StringIteratorUnicode](/api-docs/headless/haxe/iterators/StringIteratorUnicode/) | class | This iterator can be used to iterate across strings in a cross-platform |
| [Json](/api-docs/headless/haxe/Json/) | class | Cross-platform JSON API: it will automatically use the optimized native API if available. |
| [Log](/api-docs/headless/haxe/Log/) | class | Log primarily provides the `trace()` method, which is invoked upon a call to |
| [AbstractType](/api-docs/headless/haxe/macro/AbstractType/) | typedef | Represents an abstract type. |
| [AnonType](/api-docs/headless/haxe/macro/AnonType/) | typedef | Represents information for anonymous structure types. |
| [BaseType](/api-docs/headless/haxe/macro/BaseType/) | typedef | The information that all types (`ClassType`, `EnumType`, `DefType`, |
| [Case](/api-docs/headless/haxe/macro/Case/) | typedef | Represents a switch case. |
| [Catch](/api-docs/headless/haxe/macro/Catch/) | typedef | Represents a catch in the AST. |
| [ClassField](/api-docs/headless/haxe/macro/ClassField/) | typedef | Represents a class field. |
| [ClassType](/api-docs/headless/haxe/macro/ClassType/) | typedef | Represents a class type. |
| [DefType](/api-docs/headless/haxe/macro/DefType/) | typedef | Represents a typedef. |
| [EnumField](/api-docs/headless/haxe/macro/EnumField/) | typedef | Represents an enum constructor. |
| [EnumType](/api-docs/headless/haxe/macro/EnumType/) | typedef | Represents an enum type. |
| [Expr](/api-docs/headless/haxe/macro/Expr/) | typedef | Represents a node in the AST. |
| [ExprOf](/api-docs/headless/haxe/macro/ExprOf/) | typedef | Represents a AST node identical to `Expr`, but it allows constraining the |
| [Field](/api-docs/headless/haxe/macro/Field/) | typedef | Represents a field in the AST. |
| [Function](/api-docs/headless/haxe/macro/Function/) | typedef | Represents a function in the AST. |
| [FunctionArg](/api-docs/headless/haxe/macro/FunctionArg/) | typedef | Represents a function argument in the AST. |
| [ImportExpr](/api-docs/headless/haxe/macro/ImportExpr/) | typedef | Represents the import expression. |
| [MetaAccess](/api-docs/headless/haxe/macro/MetaAccess/) | typedef | MetaAccess is a wrapper for the `Metadata` array. It can be used to add |
| [Metadata](/api-docs/headless/haxe/macro/Metadata/) | typedef | Represents metadata in the AST. |
| [MetadataEntry](/api-docs/headless/haxe/macro/MetadataEntry/) | typedef | Represents a metadata entry in the AST. |
| [ObjectField](/api-docs/headless/haxe/macro/ObjectField/) | typedef | Represents the field of an object declaration. |
| [Position](/api-docs/headless/haxe/macro/Position/) | typedef | Represents a position in a file. |
| [Ref](/api-docs/headless/haxe/macro/Ref/) | typedef | Represents a reference to internal compiler structure. It exists to avoid |
| [TFunc](/api-docs/headless/haxe/macro/TFunc/) | typedef | Represents a function in the typed AST. |
| [TVar](/api-docs/headless/haxe/macro/TVar/) | typedef | Represents a variable in the typed AST. |
| [TypeDefinition](/api-docs/headless/haxe/macro/TypeDefinition/) | typedef | Represents a type definition. |
| [TypedExpr](/api-docs/headless/haxe/macro/TypedExpr/) | typedef | Represents a typed AST node. |
| [TypeParamDecl](/api-docs/headless/haxe/macro/TypeParamDecl/) | typedef | Represents a type parameter declaration in the AST. |
| [TypeParameter](/api-docs/headless/haxe/macro/TypeParameter/) | typedef | Represents the declaration of type parameters. |
| [TypePath](/api-docs/headless/haxe/macro/TypePath/) | typedef | Represents a type path in the AST. |
| [Var](/api-docs/headless/haxe/macro/Var/) | typedef | Represents a variable in the AST. |
| [NotVoid](/api-docs/headless/haxe/NotVoid/) | abstract | This type unifies with anything but `Void`. |
| [PosInfos](/api-docs/headless/haxe/PosInfos/) | typedef | `PosInfos` is a magic type which can be used to generate position information |
| [Rest](/api-docs/headless/haxe/Rest/) | abstract | A special type that represents a "rest" function argument. |
| [Abstractdef](/api-docs/headless/haxe/rtti/Abstractdef/) | typedef | The abstract type runtime information. |
| [Classdef](/api-docs/headless/haxe/rtti/Classdef/) | typedef | The runtime class definition information. |
| [ClassField](/api-docs/headless/haxe/rtti/ClassField/) | typedef | The runtime class field information. |
| [CType](/api-docs/headless/haxe/rtti/CType/) | enum | The runtime member types. |
| [Enumdef](/api-docs/headless/haxe/rtti/Enumdef/) | typedef | The enum runtime type information. |
| [EnumField](/api-docs/headless/haxe/rtti/EnumField/) | typedef | The runtime enum constructor information. |
| [FunctionArgument](/api-docs/headless/haxe/rtti/FunctionArgument/) | typedef | The function argument runtime type information. |
| [Meta](/api-docs/headless/haxe/rtti/Meta/) | class | An API to access classes and enums metadata at runtime. |
| [MetaData](/api-docs/headless/haxe/rtti/MetaData/) | typedef | The list of runtime metadata. |
| [Path](/api-docs/headless/haxe/rtti/Path/) | typedef | The (dot-)path of the runtime type. |
| [PathParams](/api-docs/headless/haxe/rtti/PathParams/) | typedef | The type parameters in the runtime type information. |
| [Platforms](/api-docs/headless/haxe/rtti/Platforms/) | typedef | A list of strings representing the targets where the type is available. |
| [Rights](/api-docs/headless/haxe/rtti/Rights/) | enum | Represents the runtime rights of a type. |
| [Rtti](/api-docs/headless/haxe/rtti/Rtti/) | class | Rtti is a helper class which supplements the `@:rtti` metadata. |
| [Typedef](/api-docs/headless/haxe/rtti/Typedef/) | typedef | The typedef runtime information. |
| [TypeInfos](/api-docs/headless/haxe/rtti/TypeInfos/) | typedef | The general runtime type information. |
| [TypeParams](/api-docs/headless/haxe/rtti/TypeParams/) | typedef | An array of strings representing the names of the type parameters the type |
| [TypeRoot](/api-docs/headless/haxe/rtti/TypeRoot/) | typedef | Array of `TypeTree`. |
| [TypeTree](/api-docs/headless/haxe/rtti/TypeTree/) | enum | The tree types of the runtime type. |
| [XmlParser](/api-docs/headless/haxe/rtti/XmlParser/) | class | XmlParser processes the runtime type information (RTTI) which |
| [Serializer](/api-docs/headless/haxe/Serializer/) | class | The Serializer class can be used to encode values and objects into a `String`, |
| [StackItem](/api-docs/headless/haxe/StackItem/) | enum | Elements return by `CallStack` methods. |
| [SysTools](/api-docs/headless/haxe/SysTools/) | class |  |
| [Unserializer](/api-docs/headless/haxe/Unserializer/) | class | The `Unserializer` class is the complement to the `Serializer` class. It parses |
| [V8CallSite](/api-docs/headless/haxe/V8CallSite/) | typedef |  |
| [ValueException](/api-docs/headless/haxe/ValueException/) | class | An exception containing arbitrary value. |
| [Access](/api-docs/headless/haxe/xml/Access/) | abstract | The `haxe.xml.Access` API helps providing a fast dot-syntax access to the |
| [Parser](/api-docs/headless/haxe/xml/Parser/) | class |  |
| [Printer](/api-docs/headless/haxe/xml/Printer/) | class | This class provides utility methods to convert Xml instances to |
| [XmlParserException](/api-docs/headless/haxe/xml/XmlParserException/) | class |  |
| [FlushMode](/api-docs/headless/haxe/zip/FlushMode/) | enum |  |
| [Huffman](/api-docs/headless/haxe/zip/Huffman/) | enum |  |
| [HuffTools](/api-docs/headless/haxe/zip/HuffTools/) | class |  |
| [InflateImpl](/api-docs/headless/haxe/zip/InflateImpl/) | class | A pure Haxe implementation of the ZLIB Inflate algorithm which allows reading compressed data wit... |
| [Int](/api-docs/headless/Int/) | abstract | The standard `Int` type. Its precision depends on the platform. |
| [IntIterator](/api-docs/headless/IntIterator/) | class | IntIterator is used for implementing interval iterations. |
| [Iterable](/api-docs/headless/Iterable/) | typedef | An `Iterable` is a data structure which has an `iterator()` method. |
| [Iterator](/api-docs/headless/Iterator/) | typedef | An `Iterator` is a structure that permits iteration over elements of type `T`. |
| [Lib](/api-docs/headless/js/Lib/) | class | Platform-specific JavaScript Library. Provides some platform-specific functions |
| [ArrayBuffer](/api-docs/headless/js/lib/ArrayBuffer/) | class |  |
| [ArrayBufferView](/api-docs/headless/js/lib/ArrayBufferView/) | interface | `ArrayBufferView` is a helper type representing any of the following JavaScript `TypedArray` types: |
| [AsyncIterator](/api-docs/headless/js/lib/AsyncIterator/) | typedef | Native JavaScript async iterator structure. |
| [DataView](/api-docs/headless/js/lib/DataView/) | class |  |
| [Date](/api-docs/headless/js/lib/Date/) | class | Creates a JavaScript Date instance that represents a single moment in time. |
| [Error](/api-docs/headless/js/lib/Error/) | class |  |
| [EvalError](/api-docs/headless/js/lib/EvalError/) | class |  |
| [Float32Array](/api-docs/headless/js/lib/Float32Array/) | class | The `Float32Array` typed array represents an array of 32-bit floating point numbers |
| [Float64Array](/api-docs/headless/js/lib/Float64Array/) | class | The `Float64Array` typed array represents an array of 64-bit floating point numbers |
| [Function](/api-docs/headless/js/lib/Function/) | class |  |
| [Int16Array](/api-docs/headless/js/lib/Int16Array/) | class | The `Int16Array` typed array represents an array of twos-complement 16-bit signed integers in |
| [Int32Array](/api-docs/headless/js/lib/Int32Array/) | class | The `Int32Array` typed array represents an array of twos-complement 32-bit signed integers in |
| [Int8Array](/api-docs/headless/js/lib/Int8Array/) | class | The `Int8Array` typed array represents an array of twos-complement 8-bit signed integers. The |
| [CurrencyDisplay](/api-docs/headless/js/lib/intl/CurrencyDisplay/) | abstract |  |
| [LocaleMatcher](/api-docs/headless/js/lib/intl/LocaleMatcher/) | abstract |  |
| [NumberFormat](/api-docs/headless/js/lib/intl/NumberFormat/) | class | The `NumberFormat` object is a constructor for objects that enable language sensitive number form... |
| [NumberFormatOptions](/api-docs/headless/js/lib/intl/NumberFormatOptions/) | typedef |  |
| [NumberFormatPart](/api-docs/headless/js/lib/intl/NumberFormatPart/) | typedef |  |
| [NumberFormatPartType](/api-docs/headless/js/lib/intl/NumberFormatPartType/) | abstract |  |
| [NumberFormatResolvedOption](/api-docs/headless/js/lib/intl/NumberFormatResolvedOption/) | typedef |  |
| [NumberFormatStyle](/api-docs/headless/js/lib/intl/NumberFormatStyle/) | abstract |  |
| [NumberFormatSupportedLocalesOfOptions](/api-docs/headless/js/lib/intl/NumberFormatSupportedLocalesOfOptions/) | typedef |  |
| [Iterator](/api-docs/headless/js/lib/Iterator/) | typedef | Native JavaScript iterator structure. |
| [IteratorStep](/api-docs/headless/js/lib/IteratorStep/) | typedef |  |
| [KeyValue](/api-docs/headless/js/lib/KeyValue/) | abstract | Key/value access helper. |
| [Object](/api-docs/headless/js/lib/Object/) | class | The `js.lib.Object` constructor creates an object wrapper. |
| [ObjectEntry](/api-docs/headless/js/lib/ObjectEntry/) | abstract | Key/value access helper for `js.lib.Object.entries()`. |
| [ObjectPropertyDescriptor](/api-docs/headless/js/lib/ObjectPropertyDescriptor/) | typedef | @see <https://developer. |
| [ObjectPrototype](/api-docs/headless/js/lib/ObjectPrototype/) | typedef | Type for |
| [Promise](/api-docs/headless/js/lib/Promise/) | class | The Promise object represents the eventual completion (or failure) of an |
| [PromiseHandler](/api-docs/headless/js/lib/PromiseHandler/) | abstract | Handler type for the Promise object. |
| [PromiseSettleOutcome](/api-docs/headless/js/lib/PromiseSettleOutcome/) | typedef |  |
| [PromiseSettleStatus](/api-docs/headless/js/lib/PromiseSettleStatus/) | abstract |  |
| [RangeError](/api-docs/headless/js/lib/RangeError/) | class |  |
| [ReferenceError](/api-docs/headless/js/lib/ReferenceError/) | class |  |
| [RegExp](/api-docs/headless/js/lib/RegExp/) | class | Native JavaScript regular expressions. |
| [RegExpMatch](/api-docs/headless/js/lib/RegExpMatch/) | class | A return value of the `RegExp.exec` method. |
| [Symbol](/api-docs/headless/js/lib/Symbol/) | class |  |
| [SyntaxError](/api-docs/headless/js/lib/SyntaxError/) | class |  |
| [Thenable](/api-docs/headless/js/lib/Thenable/) | abstract | A value with a `then` method. |
| [ThenableStruct](/api-docs/headless/js/lib/ThenableStruct/) | typedef |  |
| [TypeError](/api-docs/headless/js/lib/TypeError/) | class |  |
| [Uint16Array](/api-docs/headless/js/lib/Uint16Array/) | class | The `Uint16Array` typed array represents an array of 16-bit unsigned integers in the platform |
| [Uint32Array](/api-docs/headless/js/lib/Uint32Array/) | class | The `Uint32Array` typed array represents an array of 32-bit unsigned integers in the platform |
| [Uint8Array](/api-docs/headless/js/lib/Uint8Array/) | class | The `Uint8Array` typed array represents an array of 8-bit unsigned integers. The contents |
| [Uint8ClampedArray](/api-docs/headless/js/lib/Uint8ClampedArray/) | class | The `Uint8ClampedArray` typed array represents an array of 8-bit unsigned integers clamped |
| [URIError](/api-docs/headless/js/lib/URIError/) | class |  |
| [Syntax](/api-docs/headless/js/Syntax/) | class | Generate JavaScript syntax not directly supported by Haxe. |
| [KeyValueIterable](/api-docs/headless/KeyValueIterable/) | typedef | A `KeyValueIterable` is a data structure which has a `keyValueIterator()` |
| [KeyValueIterator](/api-docs/headless/KeyValueIterator/) | typedef | A `KeyValueIterator` is an `Iterator` that has a key and a value. |
| [Lambda](/api-docs/headless/Lambda/) | class | The `Lambda` class is a collection of methods to support functional |
| [List](/api-docs/headless/List/) | typedef |  |
| [Map](/api-docs/headless/Map/) | typedef |  |
| [Math](/api-docs/headless/Math/) | class |  |
| [Null](/api-docs/headless/Null/) | abstract | `Null<T>` is a wrapper that can be used to make the basic types `Int`, |
| [Reflect](/api-docs/headless/Reflect/) | class | The Reflect API is a way to manipulate values dynamically through an |
| [Std](/api-docs/headless/Std/) | class | The Std class provides standard methods for manipulating basic types. |
| [String](/api-docs/headless/String/) | class | The basic String class. |
| [StringBuf](/api-docs/headless/StringBuf/) | class | A String buffer is an efficient way to build a big string by appending small |
| [StringTools](/api-docs/headless/StringTools/) | class | This class provides advanced methods on Strings. It is ideally used with |
| [Sys](/api-docs/headless/Sys/) | class | This class provides access to various base functions of system platforms. |
| [FileStat](/api-docs/headless/sys/FileStat/) | typedef | File information, as given by `sys.FileSystem.stat`. |
| [FileSeek](/api-docs/headless/sys/io/FileSeek/) | enum |  |
| [Process](/api-docs/headless/sys/io/Process/) | class |  |
| [Type](/api-docs/headless/Type/) | class | The Haxe Reflection API allows retrieval of type information at runtime. |
| [UInt](/api-docs/headless/UInt/) | abstract | The unsigned `Int` type is only defined for Flash and C#. |
| [ValueType](/api-docs/headless/ValueType/) | enum |  |
| [Void](/api-docs/headless/Void/) | abstract | The standard `Void` type. Only `null` values can be of the type `Void`. |
| [Xml](/api-docs/headless/Xml/) | class | Cross-platform Xml API. |
| [XmlType](/api-docs/headless/XmlType/) | abstract | Xml node types. |
| [HaxeRegExp](/api-docs/headless/_EReg/HaxeRegExp/) | class |  |
| [__Int64](/api-docs/headless/haxe/_Int64/__Int64/) | typedef | This typedef will fool `@:coreApi` into thinking that we are using |
| [V8Error](/api-docs/headless/haxe/_NativeStackTrace/V8Error/) | class |  |
| [NativeRest](/api-docs/headless/haxe/_Rest/NativeRest/) | typedef |  |
| [DefaultResolver](/api-docs/headless/haxe/_Unserializer/DefaultResolver/) | class |  |
| [ListIterator](/api-docs/headless/haxe/ds/_List/ListIterator/) | class |  |
| [ListNode](/api-docs/headless/haxe/ds/_List/ListNode/) | class |  |
| [StringMapKeyIterator](/api-docs/headless/haxe/ds/_StringMap/StringMapKeyIterator/) | class |  |
| [StringMapKeyValueIterator](/api-docs/headless/haxe/ds/_StringMap/StringMapKeyValueIterator/) | class |  |
| [StringMapValueIterator](/api-docs/headless/haxe/ds/_StringMap/StringMapValueIterator/) | class |  |
| [VectorData](/api-docs/headless/haxe/ds/_Vector/VectorData/) | typedef |  |
| [MetaObject](/api-docs/headless/haxe/rtti/_Meta/MetaObject/) | typedef |  |
| [AttribAccess](/api-docs/headless/haxe/xml/_Access/AttribAccess/) | abstract |  |
| [HasAttribAccess](/api-docs/headless/haxe/xml/_Access/HasAttribAccess/) | abstract |  |
| [HasNodeAccess](/api-docs/headless/haxe/xml/_Access/HasNodeAccess/) | abstract |  |
| [NodeAccess](/api-docs/headless/haxe/xml/_Access/NodeAccess/) | abstract |  |
| [NodeListAccess](/api-docs/headless/haxe/xml/_Access/NodeListAccess/) | abstract |  |
| [S](/api-docs/headless/haxe/xml/_Parser/S/) | abstract |  |
| [State](/api-docs/headless/haxe/zip/_InflateImpl/State/) | enum |  |
| [Window](/api-docs/headless/haxe/zip/_InflateImpl/Window/) | class |  |
| [ArrayBufferCompat](/api-docs/headless/js/lib/_ArrayBuffer/ArrayBufferCompat/) | class |  |

## Headless

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/headless/backend/Audio/) | class |  |
| [AudioFilterBuffer](/api-docs/headless/backend/AudioFilterBuffer/) | typedef |  |
| [AudioHandle](/api-docs/headless/backend/AudioHandle/) | typedef |  |
| [AudioHandleImpl](/api-docs/headless/backend/AudioHandleImpl/) | class |  |
| [AudioResource](/api-docs/headless/backend/AudioResource/) | typedef |  |
| [AudioResourceImpl](/api-docs/headless/backend/AudioResourceImpl/) | class |  |
| [Backend](/api-docs/headless/backend/Backend/) | class |  |
| [Binaries](/api-docs/headless/backend/Binaries/) | class |  |
| [BlendMode](/api-docs/headless/backend/BlendMode/) | typedef |  |
| [BlendModeImpl](/api-docs/headless/backend/BlendModeImpl/) | abstract |  |
| [Clipboard](/api-docs/headless/backend/Clipboard/) | class |  |
| [Draw](/api-docs/headless/backend/Draw/) | class |  |
| [Float32Array](/api-docs/headless/backend/Float32Array/) | typedef |  |
| [Float32ArrayImplHeadless](/api-docs/headless/backend/Float32ArrayImplHeadless/) | abstract |  |
| [Info](/api-docs/headless/backend/Info/) | class |  |
| [Input](/api-docs/headless/backend/Input/) | class |  |
| [IO](/api-docs/headless/backend/IO/) | class |  |
| [LoadAudioOptions](/api-docs/headless/backend/LoadAudioOptions/) | typedef |  |
| [LoadBinaryOptions](/api-docs/headless/backend/LoadBinaryOptions/) | typedef |  |
| [LoadTextOptions](/api-docs/headless/backend/LoadTextOptions/) | typedef |  |
| [LoadTextureOptions](/api-docs/headless/backend/LoadTextureOptions/) | typedef |  |
| [Screen](/api-docs/headless/backend/Screen/) | class |  |
| [Shader](/api-docs/headless/backend/Shader/) | abstract |  |
| [ShaderImpl](/api-docs/headless/backend/ShaderImpl/) | class |  |
| [Shaders](/api-docs/headless/backend/Shaders/) | class |  |
| [TextInput](/api-docs/headless/backend/TextInput/) | class |  |
| [Texts](/api-docs/headless/backend/Texts/) | class |  |
| [Texture](/api-docs/headless/backend/Texture/) | typedef |  |
| [TextureId](/api-docs/headless/backend/TextureId/) | typedef |  |
| [TextureIdImpl](/api-docs/headless/backend/TextureIdImpl/) | abstract |  |
| [TextureImpl](/api-docs/headless/backend/TextureImpl/) | class |  |
| [Textures](/api-docs/headless/backend/Textures/) | class |  |
| [UInt8Array](/api-docs/headless/backend/UInt8Array/) | typedef |  |
| [UInt8ArrayImplHeadlessJS](/api-docs/headless/backend/UInt8ArrayImplHeadlessJS/) | abstract |  |
| [VisualItem](/api-docs/headless/backend/VisualItem/) | enum |  |
| [Main](/api-docs/headless/Main/) | class | Main entry point for the Ceramic headless backend. |

## Hxnodejs

| Type | Kind | Description |
|------|------|-------------|
| [Compress](/api-docs/headless/haxe/zip/Compress/) | class |  |
| [Uncompress](/api-docs/headless/haxe/zip/Uncompress/) | class |  |
| [ImmediateObject](/api-docs/headless/js/ImmediateObject/) | typedef |  |
| [IntervalObject](/api-docs/headless/js/IntervalObject/) | typedef |  |
| [Node](/api-docs/headless/js/Node/) | class | Node.js globals |
| [Buffer](/api-docs/headless/js/node/Buffer/) | typedef |  |
| [Buffer](/api-docs/headless/js/node/buffer/Buffer/) | class | The `Buffer` class is a global type for dealing with binary data directly. |
| [BufferConstants](/api-docs/headless/js/node/buffer/BufferConstants/) | typedef |  |
| [ChildProcess](/api-docs/headless/js/node/child_process/ChildProcess/) | class | An object representing a child process. |
| [ChildProcessEvent](/api-docs/headless/js/node/child_process/ChildProcessEvent/) | abstract | Enumeration of events emitted by `ChildProcess` objects. |
| [ChildProcessSendOptions](/api-docs/headless/js/node/child_process/ChildProcessSendOptions/) | typedef |  |
| [ChildProcess](/api-docs/headless/js/node/ChildProcess/) | class |  |
| [ChildProcessExecCallback](/api-docs/headless/js/node/ChildProcessExecCallback/) | typedef | A callback type for `ChildProcess.exec`. |
| [ChildProcessExecError](/api-docs/headless/js/node/ChildProcessExecError/) | class | An error passed to the `ChildProcess.exec` callback. |
| [ChildProcessExecFileOptions](/api-docs/headless/js/node/ChildProcessExecFileOptions/) | typedef | Options for the `execFile` method. |
| [ChildProcessExecOptions](/api-docs/headless/js/node/ChildProcessExecOptions/) | typedef | Options for the `exec` method. |
| [ChildProcessForkOptions](/api-docs/headless/js/node/ChildProcessForkOptions/) | typedef | Options for the `fork` method. |
| [ChildProcessSpawnOptions](/api-docs/headless/js/node/ChildProcessSpawnOptions/) | typedef | Options for the `spawn` method. |
| [ChildProcessSpawnOptionsStdio](/api-docs/headless/js/node/ChildProcessSpawnOptionsStdio/) | typedef | The `stdio` option is an array where each index corresponds to a fd in the child. |
| [ChildProcessSpawnOptionsStdioBehaviour](/api-docs/headless/js/node/ChildProcessSpawnOptionsStdioBehaviour/) | abstract | Enumeration of possible `stdio` behaviours. |
| [ChildProcessSpawnOptionsStdioFull](/api-docs/headless/js/node/ChildProcessSpawnOptionsStdioFull/) | typedef |  |
| [ChildProcessSpawnOptionsStdioSimple](/api-docs/headless/js/node/ChildProcessSpawnOptionsStdioSimple/) | abstract | A shorthand for the `stdio` argument in `ChildProcessSpawnOptions` |
| [ChildProcessSpawnSyncOptions](/api-docs/headless/js/node/ChildProcessSpawnSyncOptions/) | typedef | Options for the `spawnSync` method. |
| [ChildProcessSpawnSyncResult](/api-docs/headless/js/node/ChildProcessSpawnSyncResult/) | typedef | Object returned from the `spawnSync` method. |
| [Console](/api-docs/headless/js/node/console/Console/) | class | The `Console` class can be used to create a simple logger with configurable output streams |
| [ConsoleOptions](/api-docs/headless/js/node/console/ConsoleOptions/) | typedef |  |
| [Event](/api-docs/headless/js/node/events/Event/) | abstract | Abstract type for events. Its type parameter is a signature |
| [EventEmitter](/api-docs/headless/js/node/events/EventEmitter/) | class | The `EventEmitter` class is defined and exposed by the `events` module: |
| [EventEmitterEvent](/api-docs/headless/js/node/events/EventEmitterEvent/) | abstract | Enumeration of events emitted by all `EventEmitter` instances. |
| [IEventEmitter](/api-docs/headless/js/node/events/IEventEmitter/) | interface | `IEventEmitter` interface is used as "any EventEmitter". |
| [Fs](/api-docs/headless/js/node/Fs/) | class | File I/O is provided by simple wrappers around standard POSIX functions. |
| [FSWatcher](/api-docs/headless/js/node/fs/FSWatcher/) | class | Objects returned from `Fs.watch` are of this type. |
| [FSWatcherChangeType](/api-docs/headless/js/node/fs/FSWatcherChangeType/) | abstract | Enumeration of possible types of changes for 'change' event. |
| [FSWatcherEvent](/api-docs/headless/js/node/fs/FSWatcherEvent/) | abstract | Enumeration of the events emitted by `FSWatcher`. |
| [ReadStream](/api-docs/headless/js/node/fs/ReadStream/) | class | Readable file stream. |
| [ReadStreamEvent](/api-docs/headless/js/node/fs/ReadStreamEvent/) | abstract |  |
| [Stats](/api-docs/headless/js/node/fs/Stats/) | class | Objects returned from `Fs. |
| [WriteStream](/api-docs/headless/js/node/fs/WriteStream/) | class | Writable file stream. |
| [WriteStreamEvent](/api-docs/headless/js/node/fs/WriteStreamEvent/) | abstract |  |
| [FsConstants](/api-docs/headless/js/node/FsConstants/) | typedef | Constants for use in `Fs` module. |
| [FsCreateReadStreamOptions](/api-docs/headless/js/node/FsCreateReadStreamOptions/) | typedef | Options for `Fs.createReadStream`. |
| [FsCreateWriteStreamOptions](/api-docs/headless/js/node/FsCreateWriteStreamOptions/) | typedef | Options for `Fs.createWriteStream`. |
| [FsMode](/api-docs/headless/js/node/FsMode/) | typedef | The `mode` argument used by `Fs.open` and related functions |
| [FsOpenFlag](/api-docs/headless/js/node/FsOpenFlag/) | abstract | Enumeration of possible flags for opening file. |
| [FsPath](/api-docs/headless/js/node/FsPath/) | typedef | Most FS functions now support passing `String` and `Buffer`. |
| [FsRmdirOptions](/api-docs/headless/js/node/FsRmdirOptions/) | typedef | Options for `Fs.rmdir` and `Fs.rmdirSync`. |
| [FsWatchFileOptions](/api-docs/headless/js/node/FsWatchFileOptions/) | typedef | Possible options for `Fs.watchFile`. |
| [FsWriteFileOptions](/api-docs/headless/js/node/FsWriteFileOptions/) | typedef | Possible options for `Fs.writeFile` and `Fs.appendFile`. |
| [Immediate](/api-docs/headless/js/node/Immediate/) | class | This object is created internally and is returned from `setImmediate()`. |
| [InspectOptions](/api-docs/headless/js/node/InspectOptions/) | typedef | Options object used by `Util.inspect`. |
| [InspectOptionsBase](/api-docs/headless/js/node/InspectOptionsBase/) | typedef | Options object used by `Console.dir`. |
| [IStream](/api-docs/headless/js/node/IStream/) | interface | `IStream` interface is used as "any Stream". |
| [Iterator](/api-docs/headless/js/node/Iterator/) | typedef |  |
| [IteratorStep](/api-docs/headless/js/node/IteratorStep/) | typedef |  |
| [KeyValue](/api-docs/headless/js/node/KeyValue/) | abstract | Key/value access helper. |
| [MemoryUsage](/api-docs/headless/js/node/MemoryUsage/) | typedef |  |
| [Module](/api-docs/headless/js/node/Module/) | class | In each module, the `module` free variable is a reference to the object representing the current ... |
| [Path](/api-docs/headless/js/node/Path/) | class | The `path` module provides utilities for working with file and directory paths. |
| [PathObject](/api-docs/headless/js/node/PathObject/) | typedef | Path object returned from `Path.parse` and taken by `Path.format`. |
| [Process](/api-docs/headless/js/node/Process/) | class |  |
| [ProcessEvent](/api-docs/headless/js/node/ProcessEvent/) | abstract | Enumeration of events emitted by the Process class. |
| [Release](/api-docs/headless/js/node/Release/) | typedef |  |
| [Report](/api-docs/headless/js/node/Report/) | class |  |
| [Stream](/api-docs/headless/js/node/Stream/) | class | Base class for all streams. |
| [Chunk](/api-docs/headless/js/node/stream/Chunk/) | typedef |  |
| [Duplex](/api-docs/headless/js/node/stream/Duplex/) | class | Duplex streams are streams that implement both the `Readable` and `Writable` interfaces. |
| [DuplexEvent](/api-docs/headless/js/node/stream/DuplexEvent/) | abstract | Writable streams are an abstraction for a destination to which data is written. |
| [DuplexNewOptions](/api-docs/headless/js/node/stream/DuplexNewOptions/) | typedef | Passed to both `Writable` and `Readable` constructors. Also has the following fields: |
| [IDuplex](/api-docs/headless/js/node/stream/IDuplex/) | interface |  |
| [IReadable](/api-docs/headless/js/node/stream/IReadable/) | interface | `IReadable` interface is used as "any Readable". |
| [ITransform](/api-docs/headless/js/node/stream/ITransform/) | interface |  |
| [IWritable](/api-docs/headless/js/node/stream/IWritable/) | interface | Writable interface used for type parameter constraints. |
| [Readable](/api-docs/headless/js/node/stream/Readable/) | class | @see https://nodejs.org/api/stream.html#stream_class_stream_readable |
| [ReadableEvent](/api-docs/headless/js/node/stream/ReadableEvent/) | abstract | Readable streams are an abstraction for a source from which data is consumed. |
| [ReadableNewOptions](/api-docs/headless/js/node/stream/ReadableNewOptions/) | typedef | Options for `Readable` private constructor. |
| [Transform](/api-docs/headless/js/node/stream/Transform/) | class | A `Transform` stream is a `Duplex` stream where the output is computed in some way from the input. |
| [TransformNewOptions](/api-docs/headless/js/node/stream/TransformNewOptions/) | typedef | @see https://nodejs.org/api/stream.html#stream_new_stream_transform_options |
| [Writable](/api-docs/headless/js/node/stream/Writable/) | class | The Writable stream interface is an abstraction for a destination that you are writing data to. |
| [WritableEvent](/api-docs/headless/js/node/stream/WritableEvent/) | abstract | Writable streams are an abstraction for a destination to which data is written. |
| [WritableNewOptions](/api-docs/headless/js/node/stream/WritableNewOptions/) | typedef | @see https://nodejs.org/api/stream.html#stream_constructor_new_stream_writable_options |
| [WritableNewOptionsAdapter](/api-docs/headless/js/node/stream/WritableNewOptionsAdapter/) | abstract |  |
| [SymlinkType](/api-docs/headless/js/node/SymlinkType/) | abstract | Enumeration of possible symlink types |
| [Timeout](/api-docs/headless/js/node/Timeout/) | class | This object is created internally and is returned from `setTimeout()` and `setInterval()`. |
| [Timers](/api-docs/headless/js/node/Timers/) | class | The `timer` module exposes a global API for scheduling functions to be called at some future peri... |
| [URL](/api-docs/headless/js/node/url/URL/) | class | Browser-compatible URL class, implemented by following the WHATWG URL Standard. |
| [URLSearchParams](/api-docs/headless/js/node/url/URLSearchParams/) | class | The `URLSearchParams` API provides read and write access to the query of a `URL`. |
| [URLSearchParamsEntry](/api-docs/headless/js/node/url/URLSearchParamsEntry/) | abstract | The name-value pair access helper for `js.node.url.URLSearchParams.entries()`. |
| [Util](/api-docs/headless/js/node/Util/) | class | The `util` module is primarily designed to support the needs of Node.js' own internal APIs. |
| [Zlib](/api-docs/headless/js/node/Zlib/) | class | This provides bindings to Gzip/Gunzip, Deflate/Inflate, and DeflateRaw/InflateRaw classes. |
| [Deflate](/api-docs/headless/js/node/zlib/Deflate/) | class | Compress data using deflate. |
| [DeflateRaw](/api-docs/headless/js/node/zlib/DeflateRaw/) | class | Compress data using deflate, and do not append a zlib header. |
| [Gunzip](/api-docs/headless/js/node/zlib/Gunzip/) | class | Decompress a gzip stream. |
| [Gzip](/api-docs/headless/js/node/zlib/Gzip/) | class | Compress data using gzip. |
| [Inflate](/api-docs/headless/js/node/zlib/Inflate/) | class | Decompress a deflate stream. |
| [InflateRaw](/api-docs/headless/js/node/zlib/InflateRaw/) | class | Decompress a raw deflate stream. |
| [Unzip](/api-docs/headless/js/node/zlib/Unzip/) | class | Decompress either a Gzip- or Deflate-compressed stream by auto-detecting the header. |
| [Zlib](/api-docs/headless/js/node/zlib/Zlib/) | class | Not exported by the zlib module. |
| [ZlibOptions](/api-docs/headless/js/node/ZlibOptions/) | typedef |  |
| [TimeoutObject](/api-docs/headless/js/TimeoutObject/) | typedef |  |
| [FileSystem](/api-docs/headless/sys/FileSystem/) | class | This class provides information about files and directories. |
| [File](/api-docs/headless/sys/io/File/) | class |  |
| [FileInput](/api-docs/headless/sys/io/FileInput/) | class | Use `sys.io.File.read` to create a `FileInput`. |
| [FileOutput](/api-docs/headless/sys/io/FileOutput/) | class | Use `sys.io.File.write` to create a `FileOutput`. |
| [FileInput](/api-docs/headless/_Sys/FileInput/) | class |  |
| [FileOutput](/api-docs/headless/_Sys/FileOutput/) | class |  |
| [ChildProcessCommonOptions](/api-docs/headless/js/node/_ChildProcess/ChildProcessCommonOptions/) | typedef | Common options for all `ChildProcess` methods. |
| [ChildProcessExecOptionsBase](/api-docs/headless/js/node/_ChildProcess/ChildProcessExecOptionsBase/) | typedef | Common options for `exec` and `execFile` methods. |
| [ChildProcessSpawnOptionsBase](/api-docs/headless/js/node/_ChildProcess/ChildProcessSpawnOptionsBase/) | typedef | Common options for `spawn` and `spawnSync` methods. |
| [PathModule](/api-docs/headless/js/node/_Path/PathModule/) | typedef |  |
| [BufferModule](/api-docs/headless/js/node/buffer/_Buffer/BufferModule/) | class |  |
| [Helper](/api-docs/headless/js/node/buffer/_Buffer/Helper/) | class |  |

