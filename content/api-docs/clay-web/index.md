---
layout: api-docs
category: api-docs
subCategory: index
menu: Index
title: API Reference
target: Clay (Web)
permalink: api-docs/clay-web/
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
- [Clay](#clay)
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

## Ceramic

| Type | Kind | Description |
|------|------|-------------|
| [AllApi](/api-docs/clay-web/ceramic/AllApi/) | class | Utility class to prevent dead code elimination of API classes. |
| [AlphaColor](/api-docs/clay-web/ceramic/AlphaColor/) | abstract | Color with alpha channel stored as a 32-bit integer. |
| [AntialiasedTriangle](/api-docs/clay-web/ceramic/AntialiasedTriangle/) | class | A specialized triangle shape that simulates antialiasing using additional vertices. |
| [App](/api-docs/clay-web/ceramic/App/) | class | `App` class is the root instance of any ceramic app. |
| [AppXUpdatesHandler](/api-docs/clay-web/ceramic/AppXUpdatesHandler/) | class | Internal handler for delayed update callbacks in the App class. |
| [Arc](/api-docs/clay-web/ceramic/Arc/) | class | A mesh subclass for drawing arcs, pies, rings, and disc geometry. |
| [ArrayPool](/api-docs/clay-web/ceramic/ArrayPool/) | class | A pool system for efficiently reusing arrays of fixed sizes. |
| [Assert](/api-docs/clay-web/ceramic/Assert/) | class | Assertion utility for runtime validation in debug builds. |
| [Asset](/api-docs/clay-web/ceramic/Asset/) | class | Base class for all asset types in Ceramic. |
| [AssetId](/api-docs/clay-web/ceramic/AssetId/) | abstract | Type-safe wrapper for asset identifiers. |
| [AssetOptions](/api-docs/clay-web/ceramic/AssetOptions/) | typedef | Asset loading options. |
| [AssetPathInfo](/api-docs/clay-web/ceramic/AssetPathInfo/) | class | Information extracted from a raw asset path. |
| [Assets](/api-docs/clay-web/ceramic/Assets/) | class | The main asset management class for Ceramic framework. |
| [AssetsLoadMethod](/api-docs/clay-web/ceramic/AssetsLoadMethod/) | abstract | Defines how assets should be loaded by the system. |
| [AssetsScheduleMethod](/api-docs/clay-web/ceramic/AssetsScheduleMethod/) | abstract | Defines how multiple assets are scheduled for loading. |
| [AssetStatus](/api-docs/clay-web/ceramic/AssetStatus/) | enum | Represents the current loading state of an asset. |
| [AtlasAsset](/api-docs/clay-web/ceramic/AtlasAsset/) | class | Asset for loading texture atlases (sprite sheets with metadata). |
| [Audio](/api-docs/clay-web/ceramic/Audio/) | class | Main audio system manager for Ceramic. |
| [AudioFilter](/api-docs/clay-web/ceramic/AudioFilter/) | class | Base class for audio filters that can process audio buffers in real-time. |
| [AudioFilterBuffer](/api-docs/clay-web/ceramic/AudioFilterBuffer/) | typedef | Platform-specific audio filter buffer for real-time audio processing. |
| [AudioFilters](/api-docs/clay-web/ceramic/AudioFilters/) | class | Internal manager for audio filter worklets across audio buses. |
| [AudioFilterWorklet](/api-docs/clay-web/ceramic/AudioFilterWorklet/) | class | The actual worklet class that will do the audio processing of a given `AudioFilter`. |
| [AudioMixer](/api-docs/clay-web/ceramic/AudioMixer/) | class | Controls audio properties for a group of sounds. |
| [AutoCollections](/api-docs/clay-web/ceramic/AutoCollections/) | interface | Interface that enables automatic collection generation for classes. |
| [BackgroundQueue](/api-docs/clay-web/ceramic/BackgroundQueue/) | class | A thread-safe queue for executing functions serially in a background thread. |
| [BezierEasing](/api-docs/clay-web/ceramic/BezierEasing/) | class | High-performance Bezier curve easing for smooth animations. |
| [BinaryAsset](/api-docs/clay-web/ceramic/BinaryAsset/) | class | Asset for loading binary files as raw bytes. |
| [BitmapFont](/api-docs/clay-web/ceramic/BitmapFont/) | class | A bitmap font implementation that handles both regular bitmap fonts and MSDF (Multi-channel Signe... |
| [BitmapFontCharacter](/api-docs/clay-web/ceramic/BitmapFontCharacter/) | class | Represents a single character (glyph) in a bitmap font. |
| [BitmapFontData](/api-docs/clay-web/ceramic/BitmapFontData/) | class | Complete data structure containing all information about a bitmap font. |
| [BitmapFontDataPage](/api-docs/clay-web/ceramic/BitmapFontDataPage/) | class | Information about a single texture page in a multi-page bitmap font. |
| [BitmapFontDistanceFieldData](/api-docs/clay-web/ceramic/BitmapFontDistanceFieldData/) | class | Configuration data for distance field fonts (SDF/MSDF). |
| [BitmapFontParser](/api-docs/clay-web/ceramic/BitmapFontParser/) | class | Parser for bitmap font definition files in BMFont format. |
| [Blending](/api-docs/clay-web/ceramic/Blending/) | abstract | Blending modes that control how pixels are combined when drawing. |
| [Border](/api-docs/clay-web/ceramic/Border/) | class | A rectangle visual that display a border |
| [BorderPosition](/api-docs/clay-web/ceramic/BorderPosition/) | enum | Defines where a border is positioned relative to a shape's edge. |
| [Camera](/api-docs/clay-web/ceramic/Camera/) | class | A flexible camera system for 2D games. |
| [ChokidarWatchedFileStatus](/api-docs/clay-web/ceramic/ChokidarWatchedFileStatus/) | abstract | File change status types used by the chokidar file watcher. |
| [Click](/api-docs/clay-web/ceramic/Click/) | class | Component that detects click/tap events on visuals. |
| [Closure](/api-docs/clay-web/ceramic/Closure/) | class | A simple closure implementation for storing a function with pre-bound arguments. |
| [Collection](/api-docs/clay-web/ceramic/Collection/) | abstract | A type-safe collection for managing CollectionEntry items. |
| [CollectionEntry](/api-docs/clay-web/ceramic/CollectionEntry/) | class | Base class for entries that can be stored in a Collection. |
| [CollectionImpl](/api-docs/clay-web/ceramic/CollectionImpl/) | class | Internal implementation of the Collection abstract. |
| [CollectionUtils](/api-docs/clay-web/ceramic/CollectionUtils/) | class | Utility functions for working with Collections. |
| [Color](/api-docs/clay-web/ceramic/Color/) | abstract | Class representing a color, based on Int. |
| [Component](/api-docs/clay-web/ceramic/Component/) | interface | Interface for components that can be attached to entities. |
| [ComputeFps](/api-docs/clay-web/ceramic/ComputeFps/) | class | A utility class for calculating frames per second (FPS) using a rolling average. |
| [ConvertArray](/api-docs/clay-web/ceramic/ConvertArray/) | class | Converter for array fields in fragments and data serialization. |
| [ConvertColor](/api-docs/clay-web/ceramic/ConvertColor/) | class | Converter for Color fields in fragments and data serialization. |
| [ConvertComponentMap](/api-docs/clay-web/ceramic/ConvertComponentMap/) | class | Converter for component map fields in fragments and data serialization. |
| [ConvertField](/api-docs/clay-web/ceramic/ConvertField/) | interface | Interface to convert basic type `T` to field type `U` and vice versa. |
| [ConvertFont](/api-docs/clay-web/ceramic/ConvertFont/) | class | Converter for BitmapFont fields in fragments and data serialization. |
| [ConvertFragmentData](/api-docs/clay-web/ceramic/ConvertFragmentData/) | class | Converter for FragmentData fields in fragments and data serialization. |
| [ConvertIntBoolMap](/api-docs/clay-web/ceramic/ConvertIntBoolMap/) | class | Converter for IntBoolMap fields in fragments and data serialization. |
| [ConvertMap](/api-docs/clay-web/ceramic/ConvertMap/) | class | Converter for Map fields in fragments and data serialization. |
| [ConvertTexture](/api-docs/clay-web/ceramic/ConvertTexture/) | class | Converter for Texture fields in fragments and data serialization. |
| [Csv](/api-docs/clay-web/ceramic/Csv/) | class | CSV parsing and generation utilities with proper escaping and quote handling. |
| [CustomAssetKind](/api-docs/clay-web/ceramic/CustomAssetKind/) | class | Defines a custom asset type that can be registered with the Assets system. |
| [DatabaseAsset](/api-docs/clay-web/ceramic/DatabaseAsset/) | class | Asset for loading CSV database files. |
| [DecomposedTransform](/api-docs/clay-web/ceramic/DecomposedTransform/) | class | Decomposed transform holds rotation, translation, scale, skew and pivot informations. |
| [DoubleClick](/api-docs/clay-web/ceramic/DoubleClick/) | class | Component that detects double-click/double-tap events on visuals. |
| [DynamicData](/api-docs/clay-web/ceramic/DynamicData/) | class | A flexible component for attaching arbitrary data to entities. |
| [Easing](/api-docs/clay-web/ceramic/Easing/) | enum | Enumeration of standard easing functions for animations. |
| [EasingUtils](/api-docs/clay-web/ceramic/EasingUtils/) | class | Utility functions for converting between Easing enum values and strings. |
| [EditText](/api-docs/clay-web/ceramic/EditText/) | class | Component that enables text editing functionality for Text visuals. |
| [Either](/api-docs/clay-web/ceramic/Either/) | abstract | A type that can hold a value of either type T1 or type T2. |
| [Entity](/api-docs/clay-web/ceramic/Entity/) | class | Base class for all entities in the Ceramic framework. |
| [EntityData](/api-docs/clay-web/ceramic/EntityData/) | class | Static utilities for managing dynamic data on entities. |
| [Enums](/api-docs/clay-web/ceramic/Enums/) | class | Macro utilities for working with enum values at compile time. |
| [Equal](/api-docs/clay-web/ceramic/Equal/) | class | Deep equality comparison utilities for various data types. |
| [Errors](/api-docs/clay-web/ceramic/Errors/) | class | Global error handling utilities for the Ceramic engine. |
| [Extensions](/api-docs/clay-web/ceramic/Extensions/) | class | A collection of static extension methods for common data types. |
| [FieldInfo](/api-docs/clay-web/ceramic/FieldInfo/) | class | Runtime reflection utility for extracting field type information from classes. |
| [FieldMeta](/api-docs/clay-web/ceramic/FieldMeta/) | class | Runtime reflection utility for accessing field metadata. |
| [Files](/api-docs/clay-web/ceramic/Files/) | class | Cross-platform filesystem utilities for Ceramic. |
| [FileWatcher](/api-docs/clay-web/ceramic/FileWatcher/) | class | Cross-platform file monitoring system for hot-reloading and file change detection. |
| [Filter](/api-docs/clay-web/ceramic/Filter/) | class | A visual container that renders its children to a texture for post-processing effects. |
| [Flags](/api-docs/clay-web/ceramic/Flags/) | abstract | Efficient bit flag storage using a single integer. |
| [Float32Array](/api-docs/clay-web/ceramic/Float32Array/) | typedef | A typed array of 32-bit floating point values. |
| [FontAsset](/api-docs/clay-web/ceramic/FontAsset/) | class | Asset type for loading bitmap fonts. |
| [Fragment](/api-docs/clay-web/ceramic/Fragment/) | class | A fragment is a powerful container that manages groups of entities and visuals |
| [FragmentData](/api-docs/clay-web/ceramic/FragmentData/) | typedef | Data structure that defines a fragment's content and properties. |
| [FragmentItem](/api-docs/clay-web/ceramic/FragmentItem/) | typedef | Defines an entity instance within a fragment. |
| [Fragments](/api-docs/clay-web/ceramic/Fragments/) | class | A compile-time generated class containing constants for all fragment assets. |
| [FragmentsAsset](/api-docs/clay-web/ceramic/FragmentsAsset/) | class | An asset that loads and manages fragment data from `.fragment` files. |
| [GamepadAxis](/api-docs/clay-web/ceramic/GamepadAxis/) | abstract | Represents gamepad analog stick and trigger axes. |
| [GamepadButton](/api-docs/clay-web/ceramic/GamepadButton/) | abstract | Represents gamepad button mappings. |
| [GeometryUtils](/api-docs/clay-web/ceramic/GeometryUtils/) | class | A collection of static utility functions for 2D geometric calculations. |
| [GlyphQuad](/api-docs/clay-web/ceramic/GlyphQuad/) | class | A specialized Quad that represents a single rendered glyph (character) in text rendering. |
| [Group](/api-docs/clay-web/ceramic/Group/) | class | A container for managing collections of entities as a single unit. |
| [HashedString](/api-docs/clay-web/ceramic/HashedString/) | class | A utility class for encoding and decoding strings with integrity verification using MD5 hashes. |
| [HighPassFilter](/api-docs/clay-web/ceramic/HighPassFilter/) | class | A high-pass audio filter that attenuates frequencies below a cutoff point. |
| [HighPassFilterWorklet](/api-docs/clay-web/ceramic/HighPassFilterWorklet/) | class | The audio processing worklet for the high-pass filter. |
| [ImageAsset](/api-docs/clay-web/ceramic/ImageAsset/) | class | Asset type for loading image files as textures. |
| [ImageType](/api-docs/clay-web/ceramic/ImageType/) | abstract | Supported image file formats for loading and exporting images. |
| [Immediate](/api-docs/clay-web/ceramic/Immediate/) | class | A utility class for scheduling callbacks to be executed in a batch. |
| [InitSettings](/api-docs/clay-web/ceramic/InitSettings/) | class | Same as Settings, but for app startup (inside Project.new(settings)). |
| [Input](/api-docs/clay-web/ceramic/Input/) | class | Manages all input handling for keyboard and gamepad devices. |
| [IntBoolMap](/api-docs/clay-web/ceramic/IntBoolMap/) | abstract | A map that uses int as keys and booleans as values. |
| [IntBoolMapIterator](/api-docs/clay-web/ceramic/IntBoolMapIterator/) | class |  |
| [IntBoolMapKeyIterator](/api-docs/clay-web/ceramic/IntBoolMapKeyIterator/) | class |  |
| [IntBoolMapKeyValueIterator](/api-docs/clay-web/ceramic/IntBoolMapKeyValueIterator/) | class |  |
| [IntFloatMap](/api-docs/clay-web/ceramic/IntFloatMap/) | class | Fallback implementation of IntFloatMap for non-C++/C# targets. |
| [IntFloatMapIterator](/api-docs/clay-web/ceramic/IntFloatMapIterator/) | class |  |
| [IntFloatMapKeyIterator](/api-docs/clay-web/ceramic/IntFloatMapKeyIterator/) | class |  |
| [IntFloatMapKeyValueIterator](/api-docs/clay-web/ceramic/IntFloatMapKeyValueIterator/) | class |  |
| [IntIntMap](/api-docs/clay-web/ceramic/IntIntMap/) | class |  |
| [IntIntMapIterator](/api-docs/clay-web/ceramic/IntIntMapIterator/) | class |  |
| [IntIntMapKeyIterator](/api-docs/clay-web/ceramic/IntIntMapKeyIterator/) | class |  |
| [IntIntMapKeyValueIterator](/api-docs/clay-web/ceramic/IntIntMapKeyValueIterator/) | class |  |
| [IntMap](/api-docs/clay-web/ceramic/IntMap/) | class | An object map that uses integers as key. |
| [IntMapIterator](/api-docs/clay-web/ceramic/IntMapIterator/) | class |  |
| [IntMapKeyIterator](/api-docs/clay-web/ceramic/IntMapKeyIterator/) | class |  |
| [IntMapKeyValueIterator](/api-docs/clay-web/ceramic/IntMapKeyValueIterator/) | class |  |
| [Json](/api-docs/clay-web/ceramic/Json/) | class | JSON utility class that provides a unified interface for JSON operations across all Ceramic targets. |
| [Key](/api-docs/clay-web/ceramic/Key/) | class | Represents a keyboard key press event with both key code and scan code information. |
| [KeyAcceleratorItem](/api-docs/clay-web/ceramic/KeyAcceleratorItem/) | enum | Represents a component of a keyboard shortcut combination. |
| [KeyBinding](/api-docs/clay-web/ceramic/KeyBinding/) | class | Represents a keyboard shortcut binding that triggers when a specific key combination is pressed. |
| [KeyBindings](/api-docs/clay-web/ceramic/KeyBindings/) | class | Manages a collection of keyboard shortcut bindings. |
| [KeyCode](/api-docs/clay-web/ceramic/KeyCode/) | abstract | Keyboard key codes representing the character/symbol associated with a key. |
| [Layer](/api-docs/clay-web/ceramic/Layer/) | class | A specialized container for organizing and grouping visuals. |
| [Lazy](/api-docs/clay-web/ceramic/Lazy/) | interface | Interface for implementing lazy initialization of properties in Ceramic classes. |
| [Line](/api-docs/clay-web/ceramic/Line/) | class | Display lines composed of multiple segments, curves and paths. |
| [LineCap](/api-docs/clay-web/ceramic/LineCap/) | typedef | Defines how line ends are rendered. |
| [LineJoin](/api-docs/clay-web/ceramic/LineJoin/) | typedef | Defines how line segments are joined at corners. |
| [Logger](/api-docs/clay-web/ceramic/Logger/) | class | Centralized logging system for Ceramic applications that provides colored, categorized output. |
| [LongPress](/api-docs/clay-web/ceramic/LongPress/) | class | Component that detects long press/hold gestures on visuals. |
| [LowPassFilter](/api-docs/clay-web/ceramic/LowPassFilter/) | class | A low-pass audio filter that attenuates frequencies above a cutoff point. |
| [LowPassFilterWorklet](/api-docs/clay-web/ceramic/LowPassFilterWorklet/) | class | The audio processing worklet for the low-pass filter. |
| [LowRes](/api-docs/clay-web/ceramic/LowRes/) | class | A container that displays visuals at low resolution with optional antialiasing through supersampl... |
| [DefinesMacro](/api-docs/clay-web/ceramic/macros/DefinesMacro/) | class | Utilities to access compile-time defines from code. |
| [EnumAbstractMacro](/api-docs/clay-web/ceramic/macros/EnumAbstractMacro/) | class | Utility macros for working with enum abstracts at compile time. |
| [PluginsMacro](/api-docs/clay-web/ceramic/macros/PluginsMacro/) | class | Macro for automatic plugin initialization in the Ceramic framework. |
| [Mesh](/api-docs/clay-web/ceramic/Mesh/) | class | A flexible visual for drawing custom shapes composed of triangles. |
| [MeshColorMapping](/api-docs/clay-web/ceramic/MeshColorMapping/) | abstract | Defines how colors are mapped to a mesh's geometry. |
| [MeshExtensions](/api-docs/clay-web/ceramic/MeshExtensions/) | class | Static extension class providing utility methods for Mesh manipulation. |
| [MeshPool](/api-docs/clay-web/ceramic/MeshPool/) | class | A global object pool for efficiently reusing Mesh instances and their arrays. |
| [MeshUtils](/api-docs/clay-web/ceramic/MeshUtils/) | class | Low-level utility class for generating mesh data arrays. |
| [MouseButton](/api-docs/clay-web/ceramic/MouseButton/) | abstract | A typed (mouse) button id |
| [Ngon](/api-docs/clay-web/ceramic/Ngon/) | class | A mesh that creates regular polygons with a configurable number of sides. |
| [NineSlice](/api-docs/clay-web/ceramic/NineSlice/) | class | A visual divided into 9 areas to create "nine-slice" textured scalable objects. |
| [NineSliceRendering](/api-docs/clay-web/ceramic/NineSliceRendering/) | abstract | Defines how a slice (from a `NineSlice` object) should be rendered. |
| [ParticleEmitter](/api-docs/clay-web/ceramic/ParticleEmitter/) | class | A powerful and flexible particle emitter system for creating visual effects. |
| [ParticleItem](/api-docs/clay-web/ceramic/ParticleItem/) | class | Represents a single particle in a particle system. |
| [Particles](/api-docs/clay-web/ceramic/Particles/) | class | A visual container that manages a particle emitter with convenient automatic emission modes. |
| [ParticlesLaunchMode](/api-docs/clay-web/ceramic/ParticlesLaunchMode/) | enum | Defines how particle velocities are calculated when launched from an emitter. |
| [ParticlesStatus](/api-docs/clay-web/ceramic/ParticlesStatus/) | enum | Represents the current operational state of a particle emitter. |
| [Path](/api-docs/clay-web/ceramic/Path/) | class | Cross-platform path manipulation utilities optimized for Ceramic. |
| [PersistentData](/api-docs/clay-web/ceramic/PersistentData/) | class | Provides a simple key-value storage system for persisting data between application sessions. |
| [PixelArt](/api-docs/clay-web/ceramic/PixelArt/) | class | A filter configured to display pixel art content with high-quality upscaling. |
| [Pixels](/api-docs/clay-web/ceramic/Pixels/) | class | Utility class for manipulating raw RGBA pixel data. |
| [Platform](/api-docs/clay-web/ceramic/Platform/) | class | A class that encapsulate platform-specific code. |
| [Point](/api-docs/clay-web/ceramic/Point/) | class | A mutable 3D point class with automatic object pooling for memory efficiency. |
| [Pool](/api-docs/clay-web/ceramic/Pool/) | class | A generic object pool utility. |
| [Preloadable](/api-docs/clay-web/ceramic/Preloadable/) | interface | Interface for objects that can report their loading progress. |
| [PreloadStatus](/api-docs/clay-web/ceramic/PreloadStatus/) | abstract | Status values for preloadable resources. |
| [PremultiplyAlpha](/api-docs/clay-web/ceramic/PremultiplyAlpha/) | class | Utilities for converting between straight and premultiplied alpha in image data. |
| [Quad](/api-docs/clay-web/ceramic/Quad/) | class | The most basic and commonly used visual for displaying rectangles and images. |
| [ReadOnlyArray](/api-docs/clay-web/ceramic/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [ReadOnlyMap](/api-docs/clay-web/ceramic/ReadOnlyMap/) | abstract | A read-only view of a Map that prevents modification. |
| [ReadOnlyPoint](/api-docs/clay-web/ceramic/ReadOnlyPoint/) | abstract | A read-only view of a Point that prevents modification. |
| [Renderer](/api-docs/clay-web/ceramic/Renderer/) | class | The core 2D rendering engine for Ceramic, responsible for efficiently drawing all visuals to the ... |
| [RenderPrimitiveType](/api-docs/clay-web/ceramic/RenderPrimitiveType/) | abstract | Defines the primitive types used for rendering geometry. |
| [RenderTexture](/api-docs/clay-web/ceramic/RenderTexture/) | class | A texture that can be rendered to, allowing off-screen rendering. |
| [Repeat](/api-docs/clay-web/ceramic/Repeat/) | class | A visual component that repeats a texture pattern to fill a specified area. |
| [ReusableArray](/api-docs/clay-web/ceramic/ReusableArray/) | class | A reusable array to use in places that need a temporary array many times. |
| [Runner](/api-docs/clay-web/ceramic/Runner/) | class | Cross-platform thread management utility for executing code on main and background threads. |
| [RuntimeAssets](/api-docs/clay-web/ceramic/RuntimeAssets/) | class | Runtime utilities to compute asset lists/names from raw (relative) file list. |
| [ScanCode](/api-docs/clay-web/ceramic/ScanCode/) | abstract | Keyboard scan codes representing physical key positions. |
| [Scene](/api-docs/clay-web/ceramic/Scene/) | class | Base class for creating scenes in Ceramic. |
| [SceneStatus](/api-docs/clay-web/ceramic/SceneStatus/) | abstract | Represents the lifecycle status of a Scene in the Ceramic framework. |
| [SceneSystem](/api-docs/clay-web/ceramic/SceneSystem/) | class | Core system responsible for managing scene lifecycle, transitions, and display hierarchy. |
| [Screen](/api-docs/clay-web/ceramic/Screen/) | class | Core screen management class that handles display properties, coordinate transformations, and inp... |
| [ScreenOrientation](/api-docs/clay-web/ceramic/ScreenOrientation/) | abstract | Defines screen orientation modes for mobile and desktop applications. |
| [ScreenScaling](/api-docs/clay-web/ceramic/ScreenScaling/) | enum | Defines how the application's logical screen size is mapped to the native screen. |
| [ScriptableAlphaColor](/api-docs/clay-web/ceramic/scriptable/ScriptableAlphaColor/) | class | Scriptable wrapper for AlphaColor to expose RGBA color functionality to scripts. |
| [ScriptableBlending](/api-docs/clay-web/ceramic/scriptable/ScriptableBlending/) | class | Scriptable wrapper for Blending enum to expose blending modes to scripts. |
| [ScriptableColor](/api-docs/clay-web/ceramic/scriptable/ScriptableColor/) | class | Scriptable wrapper for Color to expose RGB color functionality to scripts. |
| [ScriptableFlags](/api-docs/clay-web/ceramic/scriptable/ScriptableFlags/) | class | Scriptable wrapper for Flags to expose bit flag operations to scripts. |
| [ScriptableMap](/api-docs/clay-web/ceramic/scriptable/ScriptableMap/) | interface | Scriptable interface for Map to expose key-value mapping functionality to scripts. |
| [ScriptableMeshColorMapping](/api-docs/clay-web/ceramic/scriptable/ScriptableMeshColorMapping/) | class | Scriptable wrapper for MeshColorMapping to expose mesh coloring modes to scripts. |
| [ScriptableMouseButton](/api-docs/clay-web/ceramic/scriptable/ScriptableMouseButton/) | class | Scriptable wrapper for MouseButton to expose mouse button constants to scripts. |
| [ScriptableStd](/api-docs/clay-web/ceramic/scriptable/ScriptableStd/) | class | Scriptable wrapper for Std to expose standard library functions to scripts. |
| [ScrollDirection](/api-docs/clay-web/ceramic/ScrollDirection/) | enum | Defines the direction of scrolling for scrollable components. |
| [Scroller](/api-docs/clay-web/ceramic/Scroller/) | class | A scrollable container that allows smooth scrolling and dragging of content. |
| [ScrollerDragThresholdStatus](/api-docs/clay-web/ceramic/ScrollerDragThresholdStatus/) | abstract |  |
| [ScrollerStatus](/api-docs/clay-web/ceramic/ScrollerStatus/) | enum | Represents the current state of a Scroller component during user interaction. |
| [SeedRandom](/api-docs/clay-web/ceramic/SeedRandom/) | class | Seeded random number generator to get reproducible sequences of values. |
| [SelectText](/api-docs/clay-web/ceramic/SelectText/) | class | Component that handles text selection and cursor display for Text visuals. |
| [Settings](/api-docs/clay-web/ceramic/Settings/) | class | Central configuration hub for Ceramic applications. |
| [Shader](/api-docs/clay-web/ceramic/Shader/) | class | Represents a GPU shader program for custom rendering effects. |
| [ShaderAsset](/api-docs/clay-web/ceramic/ShaderAsset/) | class | Asset type for loading GPU shader programs. |
| [ShaderAttribute](/api-docs/clay-web/ceramic/ShaderAttribute/) | class | Defines a vertex attribute for shader programs. |
| [Shape](/api-docs/clay-web/ceramic/Shape/) | class | A visual for drawing arbitrary 2D shapes with automatic triangulation. |
| [Shortcuts](/api-docs/clay-web/ceramic/Shortcuts/) | class | Convenience static accessors and utility methods for common Ceramic functionality. |
| [Slug](/api-docs/clay-web/ceramic/Slug/) | class | URL-safe string generator that converts text into slugs suitable for URLs and filenames. |
| [SlugOptions](/api-docs/clay-web/ceramic/SlugOptions/) | class | Configuration options for slug generation. |
| [SortVisuals](/api-docs/clay-web/ceramic/SortVisuals/) | class | High-performance stable merge sort implementation specifically optimized for Visual arrays. |
| [SortVisualsByDepth](/api-docs/clay-web/ceramic/SortVisualsByDepth/) | class | Simplified high-performance stable merge sort for Visual arrays based on depth only. |
| [Sound](/api-docs/clay-web/ceramic/Sound/) | class | Represents a loaded sound that can be played multiple times. |
| [SoundAsset](/api-docs/clay-web/ceramic/SoundAsset/) | class | Asset type for loading audio/sound files. |
| [SoundPlayer](/api-docs/clay-web/ceramic/SoundPlayer/) | abstract | Controls an individual sound playback instance. |
| [State](/api-docs/clay-web/ceramic/State/) | class | Base class for states in a state machine. |
| [StateMachine](/api-docs/clay-web/ceramic/StateMachine/) | class | A flexible state machine implementation for managing state transitions. |
| [StateMachineBase](/api-docs/clay-web/ceramic/StateMachineBase/) | class | Base class for state machine implementations. |
| [StateMachineComponent](/api-docs/clay-web/ceramic/StateMachineComponent/) | class | A state machine that can be attached to entities as a component. |
| [StateMachineImpl](/api-docs/clay-web/ceramic/StateMachineImpl/) | class | Implementation class for StateMachine functionality. |
| [StateMachineSystem](/api-docs/clay-web/ceramic/StateMachineSystem/) | class | System that manages and updates all active state machines. |
| [System](/api-docs/clay-web/ceramic/System/) | class | A `System` is an object assigned to app lifecycle and used to |
| [Systems](/api-docs/clay-web/ceramic/Systems/) | class | Manager for all System instances in the application. |
| [Task](/api-docs/clay-web/ceramic/Task/) | class | Base class for asynchronous tasks that can either succeed or fail. |
| [Tasks](/api-docs/clay-web/ceramic/Tasks/) | class | Utility class for running Task instances from command-line arguments. |
| [Text](/api-docs/clay-web/ceramic/Text/) | class | A visual to layout and display text. |
| [TextAlign](/api-docs/clay-web/ceramic/TextAlign/) | enum | Horizontal text alignment options for text rendering. |
| [TextAsset](/api-docs/clay-web/ceramic/TextAsset/) | class | Asset type for loading text files. |
| [TextInput](/api-docs/clay-web/ceramic/TextInput/) | class | Handles keyboard text input and cursor navigation. |
| [TextInputDelegate](/api-docs/clay-web/ceramic/TextInputDelegate/) | interface | Interface for text layout information providers used by text input systems. |
| [Texture](/api-docs/clay-web/ceramic/Texture/) | class | A texture represents an image loaded in GPU memory ready for rendering. |
| [TextureAtlas](/api-docs/clay-web/ceramic/TextureAtlas/) | class | A texture atlas that combines multiple images into larger textures for efficient rendering. |
| [TextureAtlasPacker](/api-docs/clay-web/ceramic/TextureAtlasPacker/) | class | Dynamic texture atlas builder that packs multiple images into optimized texture pages at runtime. |
| [TextureAtlasPage](/api-docs/clay-web/ceramic/TextureAtlasPage/) | class | Represents a single texture page within a texture atlas. |
| [TextureAtlasParser](/api-docs/clay-web/ceramic/TextureAtlasParser/) | class | Parser for texture atlas definition files in multiple formats. |
| [TextureAtlasRegion](/api-docs/clay-web/ceramic/TextureAtlasRegion/) | class | Represents a single image region within a texture atlas. |
| [TextureFilter](/api-docs/clay-web/ceramic/TextureFilter/) | enum | Texture filtering modes that control how pixels are sampled when textures are scaled. |
| [TextureTile](/api-docs/clay-web/ceramic/TextureTile/) | class | Defines a rectangular sub-region within a texture for rendering. |
| [TextureTilePacker](/api-docs/clay-web/ceramic/TextureTilePacker/) | class | Dynamic texture tile allocator with automatic packing and reuse capabilities. |
| [TextureWrap](/api-docs/clay-web/ceramic/TextureWrap/) | abstract | Texture wrapping modes for handling UV coordinates outside the 0-1 range. |
| [Timeline](/api-docs/clay-web/ceramic/Timeline/) | class | An animation timeline system that manages keyframe-based animations. |
| [TimelineBoolKeyframe](/api-docs/clay-web/ceramic/TimelineBoolKeyframe/) | class | A keyframe that stores a boolean value for timeline animations. |
| [TimelineBoolTrack](/api-docs/clay-web/ceramic/TimelineBoolTrack/) | class | A timeline track that animates boolean values. |
| [TimelineColorKeyframe](/api-docs/clay-web/ceramic/TimelineColorKeyframe/) | class | A keyframe that stores a color value for timeline animations. |
| [TimelineColorTrack](/api-docs/clay-web/ceramic/TimelineColorTrack/) | class | A timeline track that animates color values with smooth interpolation. |
| [TimelineDegreesTrack](/api-docs/clay-web/ceramic/TimelineDegreesTrack/) | class | A specialized timeline track for animating rotation values in degrees. |
| [TimelineFloatArrayKeyframe](/api-docs/clay-web/ceramic/TimelineFloatArrayKeyframe/) | class | A keyframe that stores an array of floating-point values for timeline animations. |
| [TimelineFloatArrayTrack](/api-docs/clay-web/ceramic/TimelineFloatArrayTrack/) | class | A timeline track that animates arrays of floating-point values. |
| [TimelineFloatKeyframe](/api-docs/clay-web/ceramic/TimelineFloatKeyframe/) | class | A keyframe that stores a floating-point value for timeline animations. |
| [TimelineFloatTrack](/api-docs/clay-web/ceramic/TimelineFloatTrack/) | class | A timeline track that animates floating-point values with smooth interpolation. |
| [TimelineKeyframe](/api-docs/clay-web/ceramic/TimelineKeyframe/) | class |  |
| [TimelineKeyframeData](/api-docs/clay-web/ceramic/TimelineKeyframeData/) | typedef | Data structure representing a keyframe in serialized form. |
| [Timelines](/api-docs/clay-web/ceramic/Timelines/) | class | Central system for creating and binding timeline tracks and keyframes. |
| [TimelineTrack](/api-docs/clay-web/ceramic/TimelineTrack/) | class | Base class for animation tracks in a timeline system. |
| [TimelineTrackData](/api-docs/clay-web/ceramic/TimelineTrackData/) | typedef | Data structure representing an animation track in serialized form. |
| [Timer](/api-docs/clay-web/ceramic/Timer/) | class | Timer system for scheduling delayed and periodic callbacks. |
| [TimerCallback](/api-docs/clay-web/ceramic/TimerCallback/) | class | Internal data structure representing a scheduled timer callback. |
| [Touch](/api-docs/clay-web/ceramic/Touch/) | class | Represents a single touch point in a multi-touch interaction. |
| [Touches](/api-docs/clay-web/ceramic/Touches/) | abstract | A collection of active touch points for multi-touch handling. |
| [TouchesIterator](/api-docs/clay-web/ceramic/TouchesIterator/) | class | Iterator for the Touches collection. |
| [TouchInfo](/api-docs/clay-web/ceramic/TouchInfo/) | class |  |
| [TrackerBackend](/api-docs/clay-web/ceramic/TrackerBackend/) | class | Backend adapter that bridges the Tracker observable framework with Ceramic's backend services. |
| [Transform](/api-docs/clay-web/ceramic/Transform/) | class | Transform holds matrix data to make 2d rotate, translate, scale and skew transformations. |
| [TransformPool](/api-docs/clay-web/ceramic/TransformPool/) | class | An utility to reuse transform matrix object at application level. |
| [Triangle](/api-docs/clay-web/ceramic/Triangle/) | class | A simple colored triangle shape that fits within the specified dimensions. |
| [Triangulate](/api-docs/clay-web/ceramic/Triangulate/) | class | Utility class for triangulating polygons into triangles. |
| [Tween](/api-docs/clay-web/ceramic/Tween/) | class | A lightweight tweening engine for animating numeric values over time. |
| [UInt8Array](/api-docs/clay-web/ceramic/UInt8Array/) | typedef | Platform-specific implementation of an 8-bit unsigned integer array. |
| [Utils](/api-docs/clay-web/ceramic/Utils/) | class | Various utilities. Some of them are used by ceramic itself or its backends. |
| [Value](/api-docs/clay-web/ceramic/Value/) | class | An object that can hold any value. |
| [ValueEntry](/api-docs/clay-web/ceramic/ValueEntry/) | class | A collection entry that can hold any value. |
| [Velocity](/api-docs/clay-web/ceramic/Velocity/) | class | A velocity tracker that calculates speed based on position changes over time. |
| [VisibleBounds](/api-docs/clay-web/ceramic/VisibleBounds/) | class | A component that displays the visible bounds of a visual entity. |
| [Visual](/api-docs/clay-web/ceramic/Visual/) | class | Base class for all visual elements in Ceramic. |
| [VisualTransition](/api-docs/clay-web/ceramic/VisualTransition/) | class | A component that enables smooth property transitions for Visual objects. |
| [VisualTransitionProperties](/api-docs/clay-web/ceramic/VisualTransitionProperties/) | abstract | Property setter interface for visual transitions. |
| [WaitCallbacks](/api-docs/clay-web/ceramic/WaitCallbacks/) | class | Utility to create and wait for multiple callbacks and call |
| [WatchDirectory](/api-docs/clay-web/ceramic/WatchDirectory/) | class | A directory watcher that monitors file changes in specified directories. |
| [WatchedFile](/api-docs/clay-web/ceramic/_FileWatcher/WatchedFile/) | class | Internal data structure for tracking watched file state. |
| [TextureAtlasPackerPage](/api-docs/clay-web/ceramic/_TextureAtlasPacker/TextureAtlasPackerPage/) | class | Internal representation of a texture page during packing. |
| [TextureAtlasPackerRegion](/api-docs/clay-web/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/) | class | Internal data structure for regions during the packing process. |
| [TextureAtlasReader](/api-docs/clay-web/ceramic/_TextureAtlasParser/TextureAtlasReader/) | class | Internal line-based reader for parsing LibGDX format atlas files. |
| [PackedTextureTile](/api-docs/clay-web/ceramic/_TextureTilePacker/PackedTextureTile/) | class | Internal texture tile implementation with grid allocation metadata. |
| [EarClippingTriangulator](/api-docs/clay-web/ceramic/_Triangulate/EarClippingTriangulator/) | class | Implementation of the ear-clipping algorithm for polygon triangulation. |
| [TweenEasingFunction](/api-docs/clay-web/ceramic/_Tween/TweenEasingFunction/) | class | Internal utility class containing easing function implementations. |

## Arcade

| Type | Kind | Description |
|------|------|-------------|
| [Axis](/api-docs/clay-web/arcade/Axis/) | abstract | Represents axis constants for physics calculations and collision detection. |
| [Body](/api-docs/clay-web/arcade/Body/) | class | The Physics Body is linked to a single game object. |
| [Collidable](/api-docs/clay-web/arcade/Collidable/) | interface | Any class implementing this interface can be used on World.collide() |
| [Direction](/api-docs/clay-web/arcade/Direction/) | abstract | Represents directional constants used for physics body movement and collision detection. |
| [Extensions](/api-docs/clay-web/arcade/Extensions/) | class | A bunch of static extensions to make life easier. |
| [Group](/api-docs/clay-web/arcade/Group/) | class | A Group is a container for multiple physics bodies. |
| [Line](/api-docs/clay-web/arcade/Line/) | class | Represents a line segment with a start and end point. |
| [Point](/api-docs/clay-web/arcade/Point/) | class | A 2D point with x and y coordinates. |
| [QuadTree](/api-docs/clay-web/arcade/QuadTree/) | class | A QuadTree implementation. |
| [QuadTreePool](/api-docs/clay-web/arcade/QuadTreePool/) | class | Object pool for QuadTree instances to reduce garbage collection overhead. |
| [SortBodiesBottomTop](/api-docs/clay-web/arcade/SortBodiesBottomTop/) | class | Provides a stable merge sort implementation for sorting Body arrays from bottom to top (by y coor... |
| [SortBodiesLeftRight](/api-docs/clay-web/arcade/SortBodiesLeftRight/) | class | Provides a stable merge sort implementation for sorting Body arrays from left to right (by x coor... |
| [SortBodiesRightLeft](/api-docs/clay-web/arcade/SortBodiesRightLeft/) | class | Provides a stable merge sort implementation for sorting Body arrays from right to left (by x coor... |
| [SortBodiesTopBottom](/api-docs/clay-web/arcade/SortBodiesTopBottom/) | class | Provides a stable merge sort implementation for sorting Body arrays from top to bottom (by y coor... |
| [SortDirection](/api-docs/clay-web/arcade/SortDirection/) | abstract | Defines sorting directions for physics bodies during collision detection. |
| [World](/api-docs/clay-web/arcade/World/) | class | The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods. |
| [ArcadeSortGroupBottomTop](/api-docs/clay-web/ceramic/ArcadeSortGroupBottomTop/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupLeftRight](/api-docs/clay-web/ceramic/ArcadeSortGroupLeftRight/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupRightLeft](/api-docs/clay-web/ceramic/ArcadeSortGroupRightLeft/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupTopBottom](/api-docs/clay-web/ceramic/ArcadeSortGroupTopBottom/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSystem](/api-docs/clay-web/ceramic/ArcadeSystem/) | class | Main system managing Arcade physics simulation in Ceramic. |
| [ArcadeWorld](/api-docs/clay-web/ceramic/ArcadeWorld/) | class | Extended physics world that integrates Arcade physics with Ceramic's visual system. |
| [VisualArcadePhysics](/api-docs/clay-web/ceramic/VisualArcadePhysics/) | class | Component that adds Arcade physics functionality to a Visual. |

## Tilemap

| Type | Kind | Description |
|------|------|-------------|
| [AutoTile](/api-docs/clay-web/ceramic/AutoTile/) | class | Configuration for an auto-tiling tile that automatically adjusts its appearance |
| [AutoTileKind](/api-docs/clay-web/ceramic/AutoTileKind/) | abstract | Defines the type of auto-tiling algorithm used by the `AutoTiler` component. |
| [AutoTiler](/api-docs/clay-web/ceramic/AutoTiler/) | class | Component that automatically processes tilemap tiles to apply auto-tiling rules. |
| [ConvertTilemapData](/api-docs/clay-web/ceramic/ConvertTilemapData/) | class | Field converter that handles conversion between tilemap asset names (strings) |
| [Tilemap](/api-docs/clay-web/ceramic/Tilemap/) | class | A visual component that renders tilemap data composed of multiple layers. |
| [TilemapAsset](/api-docs/clay-web/ceramic/TilemapAsset/) | class | Asset type for loading tilemap data from various formats (TMX, LDtk). |
| [TilemapData](/api-docs/clay-web/ceramic/TilemapData/) | class | Unified tilemap data structure that represents a tile-based map. |
| [TilemapEditor](/api-docs/clay-web/ceramic/TilemapEditor/) | class | Interactive tilemap editor component that enables in-game tile painting and erasing. |
| [TilemapLayer](/api-docs/clay-web/ceramic/TilemapLayer/) | class | Visual representation of a single layer within a tilemap. |
| [TilemapLayerData](/api-docs/clay-web/ceramic/TilemapLayerData/) | class | Data model representing a single layer within a tilemap. |
| [TilemapOrientation](/api-docs/clay-web/ceramic/TilemapOrientation/) | enum | Defines the projection orientation of a tilemap. |
| [TilemapParser](/api-docs/clay-web/ceramic/TilemapParser/) | class | Universal tilemap parser supporting multiple tilemap formats. |
| [TilemapPlugin](/api-docs/clay-web/ceramic/TilemapPlugin/) | class | Main plugin class that integrates tilemap support into Ceramic. |
| [TilemapQuad](/api-docs/clay-web/ceramic/TilemapQuad/) | class | Specialized Quad visual used to render individual tiles in a tilemap layer. |
| [TilemapRenderOrder](/api-docs/clay-web/ceramic/TilemapRenderOrder/) | enum | Defines the order in which tiles are rendered in a tilemap. |
| [TilemapStaggerAxis](/api-docs/clay-web/ceramic/TilemapStaggerAxis/) | enum | Defines the stagger axis for hexagonal and staggered tilemaps. |
| [TilemapStaggerIndex](/api-docs/clay-web/ceramic/TilemapStaggerIndex/) | enum | Defines which rows or columns are staggered in hexagonal and staggered tilemaps. |
| [TilemapTile](/api-docs/clay-web/ceramic/TilemapTile/) | abstract | Represents a single tile in a tilemap, storing both the tile ID and transformation flags. |
| [TilemapTmxParser](/api-docs/clay-web/ceramic/TilemapTmxParser/) | class | Internal parser for TMX (Tiled Map Editor) format files. |
| [Tileset](/api-docs/clay-web/ceramic/Tileset/) | class | Represents a collection of tiles used by a tilemap. |
| [TilesetGridOrientation](/api-docs/clay-web/ceramic/TilesetGridOrientation/) | enum | Defines the grid orientation for tiles within a tileset. |
| [TilesetImage](/api-docs/clay-web/ceramic/TilesetImage/) | class | Represents the image resource used by a tileset. |
| [TileSlope](/api-docs/clay-web/ceramic/TileSlope/) | class | Defines slope collision data for a tile in a tileset. |

## Ldtk

| Type | Kind | Description |
|------|------|-------------|
| [LdtkAutoLayerRuleDefinition](/api-docs/clay-web/ceramic/LdtkAutoLayerRuleDefinition/) | class | This complex section isn't meant to be used by game devs according to LDtk documentation, |
| [LdtkAutoRuleGroup](/api-docs/clay-web/ceramic/LdtkAutoRuleGroup/) | class |  |
| [LdtkBackgroundPosition](/api-docs/clay-web/ceramic/LdtkBackgroundPosition/) | class |  |
| [LdtkCheckerMode](/api-docs/clay-web/ceramic/LdtkCheckerMode/) | abstract |  |
| [LdtkData](/api-docs/clay-web/ceramic/LdtkData/) | class | Root class representing an LDtk project data structure. |
| [LdtkDataHelpers](/api-docs/clay-web/ceramic/LdtkDataHelpers/) | class |  |
| [LdtkDefinitions](/api-docs/clay-web/ceramic/LdtkDefinitions/) | class | Contains all the definitions used in an LDtk project. |
| [LdtkEmbedAtlas](/api-docs/clay-web/ceramic/LdtkEmbedAtlas/) | abstract |  |
| [LdtkEntityDefinition](/api-docs/clay-web/ceramic/LdtkEntityDefinition/) | class | Defines an entity type that can be placed in levels. |
| [LdtkEntityInstance](/api-docs/clay-web/ceramic/LdtkEntityInstance/) | class | An instance of an entity placed in a level. |
| [LdtkEnumDefinition](/api-docs/clay-web/ceramic/LdtkEnumDefinition/) | class |  |
| [LdtkEnumTag](/api-docs/clay-web/ceramic/LdtkEnumTag/) | class |  |
| [LdtkEnumValueDefinition](/api-docs/clay-web/ceramic/LdtkEnumValueDefinition/) | class |  |
| [LdtkFieldDefinition](/api-docs/clay-web/ceramic/LdtkFieldDefinition/) | class |  |
| [LdtkFieldInstance](/api-docs/clay-web/ceramic/LdtkFieldInstance/) | class | An instance of a custom field value. |
| [LdtkIntGridValue](/api-docs/clay-web/ceramic/LdtkIntGridValue/) | class |  |
| [LdtkLayerDefinition](/api-docs/clay-web/ceramic/LdtkLayerDefinition/) | class | Defines a layer type that can be used in levels. |
| [LdtkLayerInstance](/api-docs/clay-web/ceramic/LdtkLayerInstance/) | class | An instance of a layer in a level. |
| [LdtkLayerType](/api-docs/clay-web/ceramic/LdtkLayerType/) | abstract |  |
| [LdtkLevel](/api-docs/clay-web/ceramic/LdtkLevel/) | class | Represents a single level in an LDtk world. |
| [LdtkLevelLocation](/api-docs/clay-web/ceramic/LdtkLevelLocation/) | abstract |  |
| [LdtkLevelNeighbour](/api-docs/clay-web/ceramic/LdtkLevelNeighbour/) | class |  |
| [LdtkRenderMode](/api-docs/clay-web/ceramic/LdtkRenderMode/) | abstract |  |
| [LdtkTileCustomData](/api-docs/clay-web/ceramic/LdtkTileCustomData/) | class |  |
| [LdtkTileMode](/api-docs/clay-web/ceramic/LdtkTileMode/) | abstract |  |
| [LdtkTileRenderMode](/api-docs/clay-web/ceramic/LdtkTileRenderMode/) | abstract |  |
| [LdtkTilesetDefinition](/api-docs/clay-web/ceramic/LdtkTilesetDefinition/) | class |  |
| [LdtkTilesetRectangle](/api-docs/clay-web/ceramic/LdtkTilesetRectangle/) | class | This object represents a custom sub rectangle in a Tileset image. |
| [LdtkTocEntry](/api-docs/clay-web/ceramic/LdtkTocEntry/) | class | Represents a Table of Contents entry for entities marked with exportToToc. |
| [LdtkTocInstanceData](/api-docs/clay-web/ceramic/LdtkTocInstanceData/) | class | Contains instance data for an entity referenced in the table of contents. |
| [LdtkVisual](/api-docs/clay-web/ceramic/LdtkVisual/) | class | A default visual implementation to render LDtk entities. |
| [LdtkWorld](/api-docs/clay-web/ceramic/LdtkWorld/) | class | Represents a world in an LDtk project. |
| [LdtkWorldLayout](/api-docs/clay-web/ceramic/LdtkWorldLayout/) | abstract |  |
| [TilemapLdtkParser](/api-docs/clay-web/ceramic/TilemapLdtkParser/) | class | Parser that converts LDtk level data into Ceramic tilemap data structures. |
| [TilemapLdtkParser_Fields_](/api-docs/clay-web/ceramic/_TilemapLdtkParser/TilemapLdtkParser_Fields_/) | class |  |

## Spine

| Type | Kind | Description |
|------|------|-------------|
| [BindSlotOptions](/api-docs/clay-web/ceramic/BindSlotOptions/) | typedef | Configuration options for binding Spine slots together. |
| [ConvertSpineData](/api-docs/clay-web/ceramic/ConvertSpineData/) | class | Converter for Spine animation data fields in entity components. |
| [SlotInfo](/api-docs/clay-web/ceramic/SlotInfo/) | class | Information about a slot being updated during rendering. |
| [Spine](/api-docs/clay-web/ceramic/Spine/) | class | Spine animation runtime for Ceramic engine. |
| [SpineAsset](/api-docs/clay-web/ceramic/SpineAsset/) | class | Asset loader for Spine 2D skeletal animation data. |
| [SpineBindVisual](/api-docs/clay-web/ceramic/SpineBindVisual/) | class | Utility class for binding Ceramic visuals to Spine skeleton slots. |
| [SpineBindVisualOptions](/api-docs/clay-web/ceramic/SpineBindVisualOptions/) | class | Configuration options for binding a Ceramic visual to a Spine slot. |
| [SpineBounds](/api-docs/clay-web/ceramic/SpineBounds/) | class | Data structure representing the computed bounding box of a Spine animation. |
| [SpineColors](/api-docs/clay-web/ceramic/SpineColors/) | class | Utility class for extracting color information from Spine animation slots. |
| [SpineData](/api-docs/clay-web/ceramic/SpineData/) | class | Container for loaded Spine animation data, including skeleton structure and texture atlas. |
| [SpineFile](/api-docs/clay-web/ceramic/SpineFile/) | class | Implementation of Spine's FileHandle interface for Ceramic. |
| [SpineListener](/api-docs/clay-web/ceramic/SpineListener/) | class | Internal listener for Spine animation state events. |
| [SpineMontage](/api-docs/clay-web/ceramic/SpineMontage/) | class | A powerful utility for managing and orchestrating Spine animations as a cohesive montage. |
| [SpineMontageAnimation](/api-docs/clay-web/ceramic/SpineMontageAnimation/) | class | Configuration data for a single animation within a SpineMontage. |
| [SpineMontageDefaults](/api-docs/clay-web/ceramic/SpineMontageDefaults/) | class | Default configuration values for animations in a SpineMontage. |
| [SpineMontageSettings](/api-docs/clay-web/ceramic/SpineMontageSettings/) | class | Complete configuration for initializing a SpineMontage. |
| [SpineMontageSpineSettings](/api-docs/clay-web/ceramic/SpineMontageSpineSettings/) | class | Configuration for the Spine instance used by a SpineMontage. |
| [SpinePlugin](/api-docs/clay-web/ceramic/SpinePlugin/) | class | Plugin that integrates the Spine 2D skeletal animation runtime into Ceramic. |
| [SpineSystem](/api-docs/clay-web/ceramic/SpineSystem/) | class | System responsible for updating all active Spine instances in the application. |
| [SpineTextureLoader](/api-docs/clay-web/ceramic/SpineTextureLoader/) | class | Custom texture loader implementation for integrating Spine with Ceramic's asset system. |
| [AlphaTimeline](/api-docs/clay-web/spine/AlphaTimeline/) | class | Changes the alpha for a slot's {@link Slot#getColor()}. |
| [Animation](/api-docs/clay-web/spine/Animation/) | class | Stores a list of timelines to animate a skeleton's pose over time. |
| [AnimationState](/api-docs/clay-web/spine/AnimationState/) | class | Applies animations over time, queues animations for later playback, mixes (crossfading) between a... |
| [AnimationStateAdapter](/api-docs/clay-web/spine/AnimationStateAdapter/) | class |  |
| [AnimationStateData](/api-docs/clay-web/spine/AnimationStateData/) | class | Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed. |
| [AnimationStateDataKey](/api-docs/clay-web/spine/AnimationStateDataKey/) | class |  |
| [AnimationStateListener](/api-docs/clay-web/spine/AnimationStateListener/) | interface | The interface to implement for receiving TrackEntry events. |
| [AtlasAttachmentLoader](/api-docs/clay-web/spine/attachments/AtlasAttachmentLoader/) | class | An {@link AttachmentLoader} that configures attachments using texture regions from an {@link Atlas}. |
| [Attachment](/api-docs/clay-web/spine/attachments/Attachment/) | class | The base class for all attachments. |
| [AttachmentLoader](/api-docs/clay-web/spine/attachments/AttachmentLoader/) | interface | The interface which can be implemented to customize creating and populating attachments. |
| [AttachmentType](/api-docs/clay-web/spine/attachments/AttachmentType/) | abstract | Spine Runtimes License Agreement |
| [AttachmentType_enum](/api-docs/clay-web/spine/attachments/AttachmentType_enum/) | class |  |
| [BoundingBoxAttachment](/api-docs/clay-web/spine/attachments/BoundingBoxAttachment/) | class | An attachment with vertices that make up a polygon. |
| [ClippingAttachment](/api-docs/clay-web/spine/attachments/ClippingAttachment/) | class | An attachment with vertices that make up a polygon used for clipping the rendering of other attac... |
| [MeshAttachment](/api-docs/clay-web/spine/attachments/MeshAttachment/) | class | An attachment that displays a textured mesh. |
| [PathAttachment](/api-docs/clay-web/spine/attachments/PathAttachment/) | class | An attachment whose vertices make up a composite Bezier curve. |
| [PointAttachment](/api-docs/clay-web/spine/attachments/PointAttachment/) | class | An attachment which is a single point and a rotation. |
| [RegionAttachment](/api-docs/clay-web/spine/attachments/RegionAttachment/) | class | An attachment that displays a textured quadrilateral. |
| [VertexAttachment](/api-docs/clay-web/spine/attachments/VertexAttachment/) | class | Base class for an attachment with vertices that are transformed by one or more bones and can be d... |
| [AttachmentTimeline](/api-docs/clay-web/spine/AttachmentTimeline/) | class | Changes a slot's {@link Slot#getAttachment()}. |
| [BlendMode](/api-docs/clay-web/spine/BlendMode/) | abstract | Determines how images are blended with existing pixels when drawn. |
| [BlendMode_enum](/api-docs/clay-web/spine/BlendMode_enum/) | class |  |
| [Bone](/api-docs/clay-web/spine/Bone/) | class | Stores a bone's current pose. |
| [BoneData](/api-docs/clay-web/spine/BoneData/) | class | Stores the setup pose for a {@link Bone}. |
| [BoneTimeline](/api-docs/clay-web/spine/BoneTimeline/) | interface | An interface for timelines which change the property of a bone. |
| [ConstraintData](/api-docs/clay-web/spine/ConstraintData/) | class | The base class for all constraint datas. |
| [CurveTimeline](/api-docs/clay-web/spine/CurveTimeline/) | class | The base class for timelines that interpolate between frame values using stepped, linear, or a Be... |
| [CurveTimeline1](/api-docs/clay-web/spine/CurveTimeline1/) | class | The base class for a {@link CurveTimeline} that sets one property. |
| [CurveTimeline2](/api-docs/clay-web/spine/CurveTimeline2/) | class | The base class for a {@link CurveTimeline} which sets two properties. |
| [DeformTimeline](/api-docs/clay-web/spine/DeformTimeline/) | class | Changes a slot's {@link Slot#getDeform()} to deform a {@link VertexAttachment}. |
| [DrawOrderTimeline](/api-docs/clay-web/spine/DrawOrderTimeline/) | class | Changes a skeleton's {@link Skeleton#getDrawOrder()}. |
| [Event](/api-docs/clay-web/spine/Event/) | class | Stores the current pose values for an {@link Event}. |
| [EventData](/api-docs/clay-web/spine/EventData/) | class | Stores the setup pose values for an {@link Event}. |
| [EventQueue](/api-docs/clay-web/spine/EventQueue/) | class |  |
| [EventTimeline](/api-docs/clay-web/spine/EventTimeline/) | class | Fires an {@link Event} when specific animation times are reached. |
| [EventType](/api-docs/clay-web/spine/EventType/) | abstract |  |
| [EventType_enum](/api-docs/clay-web/spine/EventType_enum/) | class |  |
| [IkConstraint](/api-docs/clay-web/spine/IkConstraint/) | class | Stores the current pose for an IK constraint. |
| [IkConstraintData](/api-docs/clay-web/spine/IkConstraintData/) | class | Stores the setup pose for an {@link IkConstraint}. |
| [IkConstraintTimeline](/api-docs/clay-web/spine/IkConstraintTimeline/) | class | Changes an IK constraint's {@link IkConstraint#getMix()}, {@link IkConstraint#getSoftness()}, |
| [LinkedMesh](/api-docs/clay-web/spine/LinkedMesh/) | class |  |
| [MixBlend](/api-docs/clay-web/spine/MixBlend/) | abstract | Controls how timeline values are mixed with setup pose values or current pose values when a timel... |
| [MixBlend_enum](/api-docs/clay-web/spine/MixBlend_enum/) | class |  |
| [MixDirection](/api-docs/clay-web/spine/MixDirection/) | abstract | Indicates whether a timeline's <code>alpha</code> is mixing out over time toward 0 (the setup or ... |
| [MixDirection_enum](/api-docs/clay-web/spine/MixDirection_enum/) | class |  |
| [PathConstraint](/api-docs/clay-web/spine/PathConstraint/) | class | Stores the current pose for a path constraint. |
| [PathConstraintData](/api-docs/clay-web/spine/PathConstraintData/) | class | Stores the setup pose for a {@link PathConstraint}. |
| [PathConstraintMixTimeline](/api-docs/clay-web/spine/PathConstraintMixTimeline/) | class | Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#get... |
| [PathConstraintPositionTimeline](/api-docs/clay-web/spine/PathConstraintPositionTimeline/) | class | Changes a path constraint's {@link PathConstraint#getPosition()}. |
| [PathConstraintSpacingTimeline](/api-docs/clay-web/spine/PathConstraintSpacingTimeline/) | class | Changes a path constraint's {@link PathConstraint#getSpacing()}. |
| [PositionMode](/api-docs/clay-web/spine/PositionMode/) | abstract | Controls how the first bone is positioned along the path. |
| [PositionMode_enum](/api-docs/clay-web/spine/PositionMode_enum/) | class |  |
| [Property](/api-docs/clay-web/spine/Property/) | abstract |  |
| [Property_enum](/api-docs/clay-web/spine/Property_enum/) | class |  |
| [RGB2Timeline](/api-docs/clay-web/spine/RGB2Timeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two colo... |
| [RGBA2Timeline](/api-docs/clay-web/spine/RGBA2Timeline/) | class | Changes a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two color tinting. |
| [RGBATimeline](/api-docs/clay-web/spine/RGBATimeline/) | class | Changes a slot's {@link Slot#getColor()}. |
| [RGBTimeline](/api-docs/clay-web/spine/RGBTimeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()}. |
| [RotateMode](/api-docs/clay-web/spine/RotateMode/) | abstract | Controls how bones are rotated, translated, and scaled to match the path. |
| [RotateMode_enum](/api-docs/clay-web/spine/RotateMode_enum/) | class |  |
| [RotateTimeline](/api-docs/clay-web/spine/RotateTimeline/) | class | Changes a bone's local {@link Bone#getRotation()}. |
| [ScaleTimeline](/api-docs/clay-web/spine/ScaleTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()} and {@link Bone#getScaleY()}. |
| [ScaleXTimeline](/api-docs/clay-web/spine/ScaleXTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()}. |
| [ScaleYTimeline](/api-docs/clay-web/spine/ScaleYTimeline/) | class | Changes a bone's local {@link Bone#getScaleY()}. |
| [ShearTimeline](/api-docs/clay-web/spine/ShearTimeline/) | class | Changes a bone's local {@link Bone#getShearX()} and {@link Bone#getShearY()}. |
| [ShearXTimeline](/api-docs/clay-web/spine/ShearXTimeline/) | class | Changes a bone's local {@link Bone#getShearX()}. |
| [ShearYTimeline](/api-docs/clay-web/spine/ShearYTimeline/) | class | Changes a bone's local {@link Bone#getShearY()}. |
| [Skeleton](/api-docs/clay-web/spine/Skeleton/) | class | Stores the current pose for a skeleton. |
| [SkeletonBounds](/api-docs/clay-web/spine/SkeletonBounds/) | class | Collects each visible {@link BoundingBoxAttachment} and computes the world vertices for its polygon. |
| [SkeletonData](/api-docs/clay-web/spine/SkeletonData/) | class | Stores the setup pose and all of the stateless data for a skeleton. |
| [SkeletonJson](/api-docs/clay-web/spine/SkeletonJson/) | class | Loads skeleton data in the Spine JSON format. |
| [SkeletonLoader](/api-docs/clay-web/spine/SkeletonLoader/) | class | Base class for loading skeleton data from a file. |
| [Skin](/api-docs/clay-web/spine/Skin/) | class | Stores attachments by slot index and attachment name. |
| [SkinEntry](/api-docs/clay-web/spine/SkinEntry/) | class | Stores an entry in the skin consisting of the slot index and the attachment name. |
| [Slot](/api-docs/clay-web/spine/Slot/) | class | Stores a slot's current pose. |
| [SlotData](/api-docs/clay-web/spine/SlotData/) | class | Stores the setup pose for a {@link Slot}. |
| [SlotTimeline](/api-docs/clay-web/spine/SlotTimeline/) | interface | An interface for timelines which change the property of a slot. |
| [SpacingMode](/api-docs/clay-web/spine/SpacingMode/) | abstract | Controls how bones after the first bone are positioned along the path. |
| [SpacingMode_enum](/api-docs/clay-web/spine/SpacingMode_enum/) | class |  |
| [Error](/api-docs/clay-web/spine/support/error/Error/) | class |  |
| [IllegalArgumentException](/api-docs/clay-web/spine/support/error/IllegalArgumentException/) | class |  |
| [IllegalStateException](/api-docs/clay-web/spine/support/error/IllegalStateException/) | class |  |
| [RuntimeException](/api-docs/clay-web/spine/support/error/RuntimeException/) | class |  |
| [ArrayExtensions](/api-docs/clay-web/spine/support/extensions/ArrayExtensions/) | class |  |
| [FileExtensions](/api-docs/clay-web/spine/support/extensions/FileExtensions/) | class |  |
| [SpineExtensions](/api-docs/clay-web/spine/support/extensions/SpineExtensions/) | class |  |
| [StringExtensions](/api-docs/clay-web/spine/support/extensions/StringExtensions/) | class |  |
| [FileHandle](/api-docs/clay-web/spine/support/files/FileHandle/) | interface |  |
| [AtlasPage](/api-docs/clay-web/spine/support/graphics/AtlasPage/) | class |  |
| [AtlasRegion](/api-docs/clay-web/spine/support/graphics/AtlasRegion/) | class |  |
| [AtlasRegionTexture](/api-docs/clay-web/spine/support/graphics/AtlasRegionTexture/) | abstract |  |
| [Color](/api-docs/clay-web/spine/support/graphics/Color/) | class | Color class ported from some of libgdx's Color code. |
| [Format](/api-docs/clay-web/spine/support/graphics/Format/) | abstract |  |
| [GL20](/api-docs/clay-web/spine/support/graphics/GL20/) | typedef |  |
| [Reader](/api-docs/clay-web/spine/support/graphics/Reader/) | class |  |
| [TextureAtlas](/api-docs/clay-web/spine/support/graphics/TextureAtlas/) | class |  |
| [TextureFilter](/api-docs/clay-web/spine/support/graphics/TextureFilter/) | abstract |  |
| [TextureLoader](/api-docs/clay-web/spine/support/graphics/TextureLoader/) | interface |  |
| [TextureRegion](/api-docs/clay-web/spine/support/graphics/TextureRegion/) | class |  |
| [TextureWrap](/api-docs/clay-web/spine/support/graphics/TextureWrap/) | class |  |
| [MathUtils](/api-docs/clay-web/spine/support/math/MathUtils/) | class |  |
| [Matrix3](/api-docs/clay-web/spine/support/math/Matrix3/) | class |  |
| [Vector2](/api-docs/clay-web/spine/support/math/Vector2/) | class |  |
| [AnimationStateMap](/api-docs/clay-web/spine/support/utils/AnimationStateMap/) | abstract |  |
| [Array](/api-docs/clay-web/spine/support/utils/Array/) | abstract |  |
| [AttachmentSet](/api-docs/clay-web/spine/support/utils/AttachmentSet/) | abstract |  |
| [AttachmentSetEntry](/api-docs/clay-web/spine/support/utils/AttachmentSetEntry/) | class |  |
| [BooleanArray](/api-docs/clay-web/spine/support/utils/BooleanArray/) | abstract |  |
| [Either](/api-docs/clay-web/spine/support/utils/Either/) | abstract | Useful to limit a Dynamic function argument's type to the specified |
| [FastCast](/api-docs/clay-web/spine/support/utils/FastCast/) | class |  |
| [FloatArray](/api-docs/clay-web/spine/support/utils/FloatArray/) | abstract |  |
| [FloatArray2D](/api-docs/clay-web/spine/support/utils/FloatArray2D/) | typedef |  |
| [IntArray](/api-docs/clay-web/spine/support/utils/IntArray/) | abstract |  |
| [IntArray2D](/api-docs/clay-web/spine/support/utils/IntArray2D/) | typedef |  |
| [JsonChild](/api-docs/clay-web/spine/support/utils/JsonChild/) | class |  |
| [JsonDynamic](/api-docs/clay-web/spine/support/utils/JsonDynamic/) | class |  |
| [JsonReader](/api-docs/clay-web/spine/support/utils/JsonReader/) | class |  |
| [JsonValue](/api-docs/clay-web/spine/support/utils/JsonValue/) | interface |  |
| [ObjectSet](/api-docs/clay-web/spine/support/utils/ObjectSet/) | abstract |  |
| [Pool](/api-docs/clay-web/spine/support/utils/Pool/) | class |  |
| [Poolable](/api-docs/clay-web/spine/support/utils/Poolable/) | interface | Objects implementing this interface will have {@link #reset()} called when passed to {@link Pool#... |
| [SerializationException](/api-docs/clay-web/spine/support/utils/SerializationException/) | class |  |
| [Short](/api-docs/clay-web/spine/support/utils/Short/) | typedef |  |
| [ShortArray](/api-docs/clay-web/spine/support/utils/ShortArray/) | typedef |  |
| [ShortArray2D](/api-docs/clay-web/spine/support/utils/ShortArray2D/) | typedef |  |
| [SnapshotArray](/api-docs/clay-web/spine/support/utils/SnapshotArray/) | class |  |
| [StdEx](/api-docs/clay-web/spine/support/utils/StdEx/) | class |  |
| [StringArray](/api-docs/clay-web/spine/support/utils/StringArray/) | typedef |  |
| [StringBuilder](/api-docs/clay-web/spine/support/utils/StringBuilder/) | abstract |  |
| [Timeline](/api-docs/clay-web/spine/Timeline/) | class | The base class for all timelines. |
| [TrackEntry](/api-docs/clay-web/spine/TrackEntry/) | class | Stores settings and other state for the playback of an animation on an {@link AnimationState} track. |
| [TransformConstraint](/api-docs/clay-web/spine/TransformConstraint/) | class | Stores the current pose for a transform constraint. |
| [TransformConstraintData](/api-docs/clay-web/spine/TransformConstraintData/) | class | Stores the setup pose for a {@link TransformConstraint}. |
| [TransformConstraintTimeline](/api-docs/clay-web/spine/TransformConstraintTimeline/) | class | Changes a transform constraint's {@link TransformConstraint#getMixRotate()}, {@link TransformCons... |
| [TransformMode](/api-docs/clay-web/spine/TransformMode/) | abstract | Determines how a bone inherits world transforms from parent bones. |
| [TransformMode_enum](/api-docs/clay-web/spine/TransformMode_enum/) | class |  |
| [TranslateTimeline](/api-docs/clay-web/spine/TranslateTimeline/) | class | Changes a bone's local {@link Bone#getX()} and {@link Bone#getY()}. |
| [TranslateXTimeline](/api-docs/clay-web/spine/TranslateXTimeline/) | class | Changes a bone's local {@link Bone#getX()}. |
| [TranslateYTimeline](/api-docs/clay-web/spine/TranslateYTimeline/) | class | Changes a bone's local {@link Bone#getY()}. |
| [Updatable](/api-docs/clay-web/spine/Updatable/) | interface | The interface for items updated by {@link Skeleton#updateWorldTransform()}. |
| [SkeletonClipping](/api-docs/clay-web/spine/utils/SkeletonClipping/) | class | Spine Runtimes License Agreement |
| [SpineUtils](/api-docs/clay-web/spine/utils/SpineUtils/) | class | Spine Runtimes License Agreement |
| [Triangulator](/api-docs/clay-web/spine/utils/Triangulator/) | class | Spine Runtimes License Agreement |
| [BindSlot](/api-docs/clay-web/ceramic/_Spine/BindSlot/) | class |  |
| [DispatchSlotInfo](/api-docs/clay-web/ceramic/_Spine/DispatchSlotInfo/) | class |  |
| [TrackEntryPool](/api-docs/clay-web/spine/_AnimationState/TrackEntryPool/) | class |  |
| [PolygonPool](/api-docs/clay-web/spine/_SkeletonBounds/PolygonPool/) | class |  |
| [Entry](/api-docs/clay-web/spine/support/utils/_AnimationStateMap/Entry/) | class |  |
| [IndicesPool](/api-docs/clay-web/spine/utils/_Triangulator/IndicesPool/) | class |  |
| [PolygonPool](/api-docs/clay-web/spine/utils/_Triangulator/PolygonPool/) | class |  |

## Script

| Type | Kind | Description |
|------|------|-------------|
| [Interp](/api-docs/clay-web/ceramic/Interp/) | class | Custom HScript interpreter with Ceramic-specific functionality. |
| [Script](/api-docs/clay-web/ceramic/Script/) | class | Dynamic scripting component for runtime code execution. |
| [ScriptContent](/api-docs/clay-web/ceramic/ScriptContent/) | typedef | Type alias for script source code content. |
| [ScriptModule](/api-docs/clay-web/ceramic/ScriptModule/) | class | Represents a script module for inter-script communication. |
| [ScriptUtils](/api-docs/clay-web/ceramic/ScriptUtils/) | class | Utilities for converting JavaScript/TypeScript syntax to HScript. |

## Sprite

| Type | Kind | Description |
|------|------|-------------|
| [AsepriteJson](/api-docs/clay-web/ceramic/AsepriteJson/) | typedef | Data structure representing the JSON format exported by Aseprite. |
| [AsepriteJsonFrame](/api-docs/clay-web/ceramic/AsepriteJsonFrame/) | typedef | Individual frame definition within the sprite sheet. |
| [AsepriteJsonFrameTag](/api-docs/clay-web/ceramic/AsepriteJsonFrameTag/) | typedef | Animation definition in Aseprite, called a "frame tag". |
| [AsepriteJsonFrameTagDirection](/api-docs/clay-web/ceramic/AsepriteJsonFrameTagDirection/) | abstract | Animation playback direction for frame tags. |
| [AsepriteJsonLayer](/api-docs/clay-web/ceramic/AsepriteJsonLayer/) | typedef | Layer information from the original Aseprite file. |
| [AsepriteJsonMeta](/api-docs/clay-web/ceramic/AsepriteJsonMeta/) | typedef | Metadata section of the Aseprite JSON export. |
| [AsepriteJsonParser](/api-docs/clay-web/ceramic/AsepriteJsonParser/) | class | Parser for Aseprite JSON format sprite sheets. |
| [AsepriteJsonRect](/api-docs/clay-web/ceramic/AsepriteJsonRect/) | typedef | Rectangle structure with position and dimensions. |
| [AsepriteJsonSize](/api-docs/clay-web/ceramic/AsepriteJsonSize/) | typedef | Size structure for dimensions without position. |
| [AsepriteJsonSlice](/api-docs/clay-web/ceramic/AsepriteJsonSlice/) | typedef | Slice definition for 9-slice scaling and UI elements. |
| [ConvertSpriteSheet](/api-docs/clay-web/ceramic/ConvertSpriteSheet/) | class | Field converter for SpriteSheet instances. |
| [Sprite](/api-docs/clay-web/ceramic/Sprite/) | class | Sprite visual that displays animations from sprite sheets. |
| [SpriteAsset](/api-docs/clay-web/ceramic/SpriteAsset/) | class | Asset loader for sprite sheets and animations. |
| [SpritePlugin](/api-docs/clay-web/ceramic/SpritePlugin/) | class | Plugin that adds sprite sheet and animation support to Ceramic. |
| [SpriteSheet](/api-docs/clay-web/ceramic/SpriteSheet/) | class | Container for sprite animations and texture atlas data. |
| [SpriteSheetAnimation](/api-docs/clay-web/ceramic/SpriteSheetAnimation/) | class | Represents a named animation sequence within a sprite sheet. |
| [SpriteSheetFrame](/api-docs/clay-web/ceramic/SpriteSheetFrame/) | class | Represents a single frame within a sprite animation. |
| [SpriteSheetParser](/api-docs/clay-web/ceramic/SpriteSheetParser/) | class | Generic sprite sheet data parser with auto-detection. |
| [SpriteSystem](/api-docs/clay-web/ceramic/SpriteSystem/) | class | System that manages automatic updates for all Sprite instances. |

## Ui

| Type | Kind | Description |
|------|------|-------------|
| [ChildrenDepth](/api-docs/clay-web/ceramic/ChildrenDepth/) | abstract | Determines how child elements are assigned depth values in the UI hierarchy. |
| [CollectionView](/api-docs/clay-web/ceramic/CollectionView/) | class | A scrollable collection view that efficiently displays large data sets using view recycling. |
| [CollectionViewDataSource](/api-docs/clay-web/ceramic/CollectionViewDataSource/) | interface | Interface for providing data to a CollectionView. |
| [CollectionViewFlowLayout](/api-docs/clay-web/ceramic/CollectionViewFlowLayout/) | class | A flow-based layout for CollectionView that arranges items in rows or columns. |
| [CollectionViewItemFrame](/api-docs/clay-web/ceramic/CollectionViewItemFrame/) | class | Represents the position and dimensions of an item in a CollectionView. |
| [CollectionViewItemPosition](/api-docs/clay-web/ceramic/CollectionViewItemPosition/) | abstract | Defines where an item should be positioned when scrolling to it in a CollectionView. |
| [CollectionViewItemsBehavior](/api-docs/clay-web/ceramic/CollectionViewItemsBehavior/) | abstract | Defines how a CollectionView manages item view creation and recycling. |
| [CollectionViewLayout](/api-docs/clay-web/ceramic/CollectionViewLayout/) | interface | Interface for custom CollectionView layout implementations. |
| [ColumnLayout](/api-docs/clay-web/ceramic/ColumnLayout/) | class | A specialized LinearLayout that arranges children vertically in a single column. |
| [ComputedViewSize](/api-docs/clay-web/ceramic/ComputedViewSize/) | class | Represents computed size information for a View during the layout process. |
| [ImageView](/api-docs/clay-web/ceramic/ImageView/) | class | A view component for displaying and laying out images with flexible scaling options. |
| [ImageViewScaling](/api-docs/clay-web/ceramic/ImageViewScaling/) | enum | Defines scaling modes for ImageView to control how images are sized within their bounds. |
| [LayersLayout](/api-docs/clay-web/ceramic/LayersLayout/) | class | A layout container that stacks children on top of each other like layers. |
| [LayoutAlign](/api-docs/clay-web/ceramic/LayoutAlign/) | enum | General-purpose alignment enumeration for UI layouts. |
| [LayoutDirection](/api-docs/clay-web/ceramic/LayoutDirection/) | enum | Defines the primary axis direction for layout arrangements. |
| [LayoutHorizontalAlign](/api-docs/clay-web/ceramic/LayoutHorizontalAlign/) | enum | Horizontal alignment options for UI elements within their containers. |
| [LayoutVerticalAlign](/api-docs/clay-web/ceramic/LayoutVerticalAlign/) | enum | Vertical alignment options for UI elements within their containers. |
| [LinearLayout](/api-docs/clay-web/ceramic/LinearLayout/) | class | A flexible layout container that arranges its children in a single line, |
| [RowLayout](/api-docs/clay-web/ceramic/RowLayout/) | class | A layout that arranges its children horizontally in a single row. |
| [ScrollView](/api-docs/clay-web/ceramic/ScrollView/) | class | A view that provides scrolling functionality for content that exceeds its bounds. |
| [TextView](/api-docs/clay-web/ceramic/TextView/) | class | A view that displays text with automatic sizing and alignment options. |
| [View](/api-docs/clay-web/ceramic/View/) | class | The base view class for building UI layouts in Ceramic. |
| [ViewLayoutMask](/api-docs/clay-web/ceramic/ViewLayoutMask/) | abstract | Bit mask that defines layout constraints for views. |
| [ViewSize](/api-docs/clay-web/ceramic/ViewSize/) | abstract | Type-safe representation of view sizing modes. |
| [ViewSystem](/api-docs/clay-web/ceramic/ViewSystem/) | class | System responsible for managing and updating the UI view layout. |

## Dialogs

| Type | Kind | Description |
|------|------|-------------|
| [Dialogs](/api-docs/clay-web/ceramic/Dialogs/) | class | Cross-platform native file dialog implementation. |
| [DialogsFileFilter](/api-docs/clay-web/ceramic/DialogsFileFilter/) | typedef | File type filter specification for native file dialogs. |
| [DialogsPlugin](/api-docs/clay-web/ceramic/DialogsPlugin/) | class | Plugin initialization for native file dialogs support. |

## Gif

| Type | Kind | Description |
|------|------|-------------|
| [GifCapture](/api-docs/clay-web/ceramic/GifCapture/) | class | Captures the screen content and creates animated GIF files. |
| [GifEncoder](/api-docs/clay-web/gif/GifEncoder/) | class |  |
| [GifFrame](/api-docs/clay-web/gif/GifFrame/) | typedef |  |
| [GifQuality](/api-docs/clay-web/gif/GifQuality/) | abstract |  |
| [GifRepeat](/api-docs/clay-web/gif/GifRepeat/) | abstract |  |
| [LzwEncoder](/api-docs/clay-web/gif/LzwEncoder/) | class |  |
| [NeuQuant](/api-docs/clay-web/gif/NeuQuant/) | class |  |

## Tracker

| Type | Kind | Description |
|------|------|-------------|
| [Assert](/api-docs/clay-web/tracker/Assert/) | class |  |
| [Autorun](/api-docs/clay-web/tracker/Autorun/) | class |  |
| [DynamicEvents](/api-docs/clay-web/tracker/DynamicEvents/) | class | Fire and listen to dynamic events. Works similarly to static events, but dynamic. |
| [Equal](/api-docs/clay-web/tracker/Equal/) | class |  |
| [EventDispatcher](/api-docs/clay-web/tracker/EventDispatcher/) | class | Event dispatcher used by DynamicEvents and Events macro as an alternative implementation |
| [Events](/api-docs/clay-web/tracker/Events/) | interface | Events allows to add strictly typed events to classes. |
| [Extensions](/api-docs/clay-web/tracker/Extensions/) | class | A bunch of static extensions to make life easier. |
| [History](/api-docs/clay-web/tracker/History/) | class |  |
| [Model](/api-docs/clay-web/tracker/Model/) | class |  |
| [Observable](/api-docs/clay-web/tracker/Observable/) | interface | Observable allows to observe properties of an object. |
| [SaveModel](/api-docs/clay-web/tracker/SaveModel/) | class |  |
| [Serializable](/api-docs/clay-web/tracker/Serializable/) | interface |  |
| [Serialize](/api-docs/clay-web/tracker/Serialize/) | class |  |
| [SerializeChangeset](/api-docs/clay-web/tracker/SerializeChangeset/) | class |  |
| [SerializeModel](/api-docs/clay-web/tracker/SerializeModel/) | class | Utility to serialize a model object (and its children) continuously and efficiently |
| [ShareChangeset](/api-docs/clay-web/tracker/ShareChangeset/) | class |  |
| [ShareItem](/api-docs/clay-web/tracker/ShareItem/) | class |  |
| [ShareItemAction](/api-docs/clay-web/tracker/ShareItemAction/) | abstract |  |
| [ShareModel](/api-docs/clay-web/tracker/ShareModel/) | class |  |
| [Tracker](/api-docs/clay-web/tracker/Tracker/) | class |  |
| [Utils](/api-docs/clay-web/tracker/Utils/) | class |  |
| [EventDispatcherItem](/api-docs/clay-web/tracker/_EventDispatcher/EventDispatcherItem/) | class |  |

## Elements

| Type | Kind | Description |
|------|------|-------------|
| [ArrayPointer](/api-docs/clay-web/elements/ArrayPointer/) | typedef | Function type for accessing and manipulating arrays by reference. |
| [BaseTextFieldView](/api-docs/clay-web/elements/BaseTextFieldView/) | class | Base class for text field UI elements with autocomplete functionality. |
| [BiBorderedTriangle](/api-docs/clay-web/elements/BiBorderedTriangle/) | class | A triangular shape with customizable border rendering. |
| [BooleanFieldView](/api-docs/clay-web/elements/BooleanFieldView/) | class | A toggle switch UI element for boolean (true/false) values. |
| [BoolPointer](/api-docs/clay-web/elements/BoolPointer/) | typedef | Function type for accessing and modifying boolean values by reference. |
| [Button](/api-docs/clay-web/elements/Button/) | class | A clickable button UI element with text content. |
| [CellCollectionView](/api-docs/clay-web/elements/CellCollectionView/) | class | A themed collection view for displaying cells with built-in scrolling and filtering. |
| [CellView](/api-docs/clay-web/elements/CellView/) | class | A themeable cell view for list or collection display with interactive features. |
| [CheckStatus](/api-docs/clay-web/elements/CheckStatus/) | abstract | Represents the status of a checkbox or toggle control with change tracking. |
| [ChoiceStatus](/api-docs/clay-web/elements/ChoiceStatus/) | abstract | Represents the status of a choice selection with special states. |
| [ClickableIconView](/api-docs/clay-web/elements/ClickableIconView/) | class | An interactive icon button that responds to clicks and hover states. |
| [ColorFieldView](/api-docs/clay-web/elements/ColorFieldView/) | class | A color input field with an integrated color picker popup. |
| [ColorPickerHSBGradientView](/api-docs/clay-web/elements/ColorPickerHSBGradientView/) | class | A gradient color selector for HSB (Hue, Saturation, Brightness) color space. |
| [ColorPickerHSBSpectrumView](/api-docs/clay-web/elements/ColorPickerHSBSpectrumView/) | class | A vertical hue spectrum selector for HSB color space. |
| [ColorPickerHSLuvGradientView](/api-docs/clay-web/elements/ColorPickerHSLuvGradientView/) | class | A color picker gradient view using the HSLuv color space for perceptually uniform color selection. |
| [ColorPickerHSLuvSpectrumView](/api-docs/clay-web/elements/ColorPickerHSLuvSpectrumView/) | class | A vertical spectrum view for HSLuv color selection showing lightness values. |
| [ColorPickerPaletteColorView](/api-docs/clay-web/elements/ColorPickerPaletteColorView/) | class | A single color swatch in a color picker palette. |
| [ColorPickerView](/api-docs/clay-web/elements/ColorPickerView/) | class | A comprehensive color picker interface combining multiple color selection methods. |
| [ConfirmStatus](/api-docs/clay-web/elements/ConfirmStatus/) | abstract | Represents the status of a confirmation dialog or action. |
| [Context](/api-docs/clay-web/elements/Context/) | class | Global context singleton for the elements UI system. |
| [CrossX](/api-docs/clay-web/elements/CrossX/) | class | A visual component that renders an X-shaped cross icon. |
| [DragDrop](/api-docs/clay-web/elements/DragDrop/) | class | A component that enables drag-and-drop functionality for visuals. |
| [EditTextStatus](/api-docs/clay-web/elements/EditTextStatus/) | abstract | Represents the status of text editing operations using bit flags. |
| [Entypo](/api-docs/clay-web/elements/Entypo/) | abstract | Entypo icon font character codes. |
| [EntypoIconView](/api-docs/clay-web/elements/EntypoIconView/) | class | A view component for displaying Entypo font icons. |
| [EnumAbstractInfo](/api-docs/clay-web/elements/EnumAbstractInfo/) | class | Runtime information container for enum abstract types. |
| [EnumValuePointer](/api-docs/clay-web/elements/EnumValuePointer/) | typedef | Type alias for enum value pointers in the elements UI system. |
| [FieldSystem](/api-docs/clay-web/elements/FieldSystem/) | class | Central system for managing field focus in the Elements UI framework. |
| [FieldView](/api-docs/clay-web/elements/FieldView/) | class | Base class for interactive field views in the Elements UI framework. |
| [FloatPointer](/api-docs/clay-web/elements/FloatPointer/) | typedef | Function type for accessing and modifying floating-point values by reference. |
| [FormLayout](/api-docs/clay-web/elements/FormLayout/) | class | A specialized column layout designed for forms in the Elements UI framework. |
| [Handle](/api-docs/clay-web/elements/Handle/) | typedef | A type alias for integer handles used throughout the Elements UI framework. |
| [Im](/api-docs/clay-web/elements/Im/) | class | Immediate mode UI system for Ceramic inspired by Dear ImGui. |
| [ImRowLayout](/api-docs/clay-web/elements/ImRowLayout/) | class | A specialized row layout for the immediate mode UI system. |
| [ImSystem](/api-docs/clay-web/elements/ImSystem/) | class | The core system that manages the immediate mode UI rendering pipeline. |
| [InfoStatus](/api-docs/clay-web/elements/InfoStatus/) | abstract | Represents the status of an informational dialog or notification. |
| [InputStyle](/api-docs/clay-web/elements/InputStyle/) | enum | Defines the visual style options for input fields in the Elements UI system. |
| [IntPointer](/api-docs/clay-web/elements/IntPointer/) | typedef |  |
| [ItalicText](/api-docs/clay-web/elements/ItalicText/) | class | A component that applies italic-style skewing to Text visuals. |
| [LabeledView](/api-docs/clay-web/elements/LabeledView/) | class | A container that pairs a text label with any view, providing flexible label positioning. |
| [LabelPosition](/api-docs/clay-web/elements/LabelPosition/) | abstract | Enumeration defining the position of a label relative to its associated view. |
| [LabelView](/api-docs/clay-web/elements/LabelView/) | class | A themed text label for UI forms and layouts. |
| [ListStatus](/api-docs/clay-web/elements/ListStatus/) | abstract | Abstract wrapper for tracking list view state changes and item operations. |
| [ListView](/api-docs/clay-web/elements/ListView/) | class | A comprehensive list view with sorting, item management, and interaction features. |
| [ListViewDataSource](/api-docs/clay-web/elements/ListViewDataSource/) | class | Data source implementation for ListView's collection view. |
| [PendingDialog](/api-docs/clay-web/elements/PendingDialog/) | class | Model representing a pending dialog box with user interaction. |
| [PromptStatus](/api-docs/clay-web/elements/PromptStatus/) | abstract | Abstract type for tracking the completion status of prompt dialogs. |
| [RelatedToFieldView](/api-docs/clay-web/elements/RelatedToFieldView/) | interface | Interface for views that are related to or associated with a FieldView. |
| [SanitizeTextField](/api-docs/clay-web/elements/SanitizeTextField/) | class | Advanced text field sanitization utility with mathematical operation support. |
| [Scrollbar](/api-docs/clay-web/elements/Scrollbar/) | class | A basic scrollbar visual component that provides visual feedback for scrollable content. |
| [ScrollbarVisibility](/api-docs/clay-web/elements/ScrollbarVisibility/) | abstract | Enumeration defining different scrollbar visibility behaviors for scrollable containers. |
| [ScrollingLayout](/api-docs/clay-web/elements/ScrollingLayout/) | class | A scrollable container that wraps a layout view with optional filtering and borders. |
| [SelectFieldView](/api-docs/clay-web/elements/SelectFieldView/) | class | A dropdown selection field that allows users to choose from a predefined list of options. |
| [SelectListView](/api-docs/clay-web/elements/SelectListView/) | class | A scrollable list view for displaying selectable items in dropdown controls. |
| [Separator](/api-docs/clay-web/elements/Separator/) | class | A horizontal line separator for visually dividing content sections. |
| [SliderFieldView](/api-docs/clay-web/elements/SliderFieldView/) | class | A numeric input field with an integrated slider for intuitive value adjustment. |
| [StringPointer](/api-docs/clay-web/elements/StringPointer/) | typedef | Function type for accessing and modifying string values by reference. |
| [TabFocus](/api-docs/clay-web/elements/TabFocus/) | class | Component for managing keyboard-based focus navigation using Tab key. |
| [TabFocusable](/api-docs/clay-web/elements/TabFocusable/) | interface | Interface for elements that can participate in Tab key focus navigation. |
| [TabsLayout](/api-docs/clay-web/elements/TabsLayout/) | class | A horizontal tab layout component for organizing content into multiple pages. |
| [TabState](/api-docs/clay-web/elements/TabState/) | abstract | Represents the possible states of a tab in a tab control. |
| [TextFieldKind](/api-docs/clay-web/elements/TextFieldKind/) | enum | Defines the different types of text field inputs available. |
| [TextFieldView](/api-docs/clay-web/elements/TextFieldView/) | class | A flexible text input field view with support for various input types and validation. |
| [TextUtils](/api-docs/clay-web/elements/TextUtils/) | class | Utility class providing various text manipulation and transformation functions. |
| [Theme](/api-docs/clay-web/elements/Theme/) | class | Comprehensive theme configuration for the elements UI system. |
| [Tooltip](/api-docs/clay-web/elements/Tooltip/) | class | A tooltip component that displays informational text when hovering over visual elements. |
| [UserData](/api-docs/clay-web/elements/UserData/) | class | Persistent user data model for storing application-specific user preferences and state. |
| [VisualContainerView](/api-docs/clay-web/elements/VisualContainerView/) | class | A view container that displays and manages a single visual element with scaling and filtering opt... |
| [VisualContainerViewScaling](/api-docs/clay-web/elements/VisualContainerViewScaling/) | enum | Defines the scaling behavior options for VisualContainerView. |
| [Window](/api-docs/clay-web/elements/Window/) | class | A draggable window container for UI elements. |
| [WindowData](/api-docs/clay-web/elements/WindowData/) | class | Persistent data model for window state and configuration. |
| [WindowItem](/api-docs/clay-web/elements/WindowItem/) | class | A versatile data container for window UI elements with efficient pooling and recycling. |
| [WindowItemKind](/api-docs/clay-web/elements/WindowItemKind/) | abstract | Window item types enumeration. |

## Clay

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/clay-web/backend/Audio/) | class | Clay backend audio implementation providing comprehensive sound management. |
| [AudioFilterBuffer](/api-docs/clay-web/backend/AudioFilterBuffer/) | typedef | Platform-specific audio filter buffer implementation for real-time audio processing. |
| [AudioFilterInfo](/api-docs/clay-web/backend/AudioFilterInfo/) | class | Internal metadata for audio filters attached to a bus. |
| [AudioHandle](/api-docs/clay-web/backend/AudioHandle/) | typedef | Handle to an individual audio playback instance in the Clay audio system. |
| [AudioResource](/api-docs/clay-web/backend/AudioResource/) | typedef | Represents loaded audio data in the Clay backend audio system. |
| [Backend](/api-docs/clay-web/backend/Backend/) | class |  |
| [Binaries](/api-docs/clay-web/backend/Binaries/) | class | Clay backend implementation for loading binary data files. |
| [BlendMode](/api-docs/clay-web/backend/BlendMode/) | typedef | Type alias for the Clay engine's blend mode enumeration. |
| [ClayEvents](/api-docs/clay-web/backend/ClayEvents/) | class | Event handler for the Clay backend that bridges low-level Clay engine events |
| [Clipboard](/api-docs/clay-web/backend/Clipboard/) | class | Clay backend implementation for system clipboard operations. |
| [Draw](/api-docs/clay-web/backend/Draw/) | class |  |
| [ElectronRunner](/api-docs/clay-web/backend/ElectronRunner/) | class | Static holder for the Electron runner instance used in web builds. |
| [Float32Array](/api-docs/clay-web/backend/Float32Array/) | typedef | Type alias for Clay's Float32Array implementation. |
| [Info](/api-docs/clay-web/backend/Info/) | class | Clay backend implementation providing platform and asset information. |
| [Input](/api-docs/clay-web/backend/Input/) | class | Clay backend input handling implementation. |
| [IO](/api-docs/clay-web/backend/IO/) | class | Clay backend implementation for persistent key-value storage. |
| [LoadAudioOptions](/api-docs/clay-web/backend/LoadAudioOptions/) | typedef | Configuration options for loading audio resources in the Clay backend. |
| [LoadBinaryOptions](/api-docs/clay-web/backend/LoadBinaryOptions/) | typedef | Configuration options for loading binary data in the Clay backend. |
| [LoadTextOptions](/api-docs/clay-web/backend/LoadTextOptions/) | typedef | Configuration options for loading text files in the Clay backend. |
| [LoadTextureOptions](/api-docs/clay-web/backend/LoadTextureOptions/) | typedef | Configuration options for loading texture/image resources in the Clay backend. |
| [Main](/api-docs/clay-web/backend/Main/) | class | Main entry point for Clay backend applications. |
| [Screen](/api-docs/clay-web/backend/Screen/) | class | Clay backend screen and window management implementation. |
| [Shader](/api-docs/clay-web/backend/Shader/) | abstract | Abstract type representing a compiled GPU shader program in the Clay backend. |
| [ShaderImpl](/api-docs/clay-web/backend/ShaderImpl/) | class | Clay backend implementation of GPU shader programs. |
| [Shaders](/api-docs/clay-web/backend/Shaders/) | class | Clay backend implementation of shader program management. |
| [TextInput](/api-docs/clay-web/backend/TextInput/) | class | Clay backend implementation for system text input handling. |
| [Texts](/api-docs/clay-web/backend/Texts/) | class | Clay backend implementation for loading text files. |
| [Texture](/api-docs/clay-web/backend/Texture/) | typedef | Represents a GPU texture resource in the Clay backend. |
| [TextureId](/api-docs/clay-web/backend/TextureId/) | typedef | Represents a GPU texture identifier in the Clay backend. |
| [TextureIdClayImpl](/api-docs/clay-web/backend/TextureIdClayImpl/) | abstract |  |
| [Textures](/api-docs/clay-web/backend/Textures/) | class | Clay backend implementation of texture management. |
| [UInt8Array](/api-docs/clay-web/backend/UInt8Array/) | typedef | Type alias for Clay's UInt8Array implementation. |
| [AppEventType](/api-docs/clay-web/clay/AppEventType/) | abstract |  |
| [ArrayPool](/api-docs/clay-web/clay/ArrayPool/) | typedef |  |
| [Assets](/api-docs/clay-web/clay/Assets/) | typedef |  |
| [Audio](/api-docs/clay-web/clay/Audio/) | typedef |  |
| [AudioData](/api-docs/clay-web/clay/audio/AudioData/) | class | An audio data object contains information about audio samples or streams, ready to be used. |
| [AudioDataOptions](/api-docs/clay-web/clay/audio/AudioDataOptions/) | class |  |
| [AudioEvent](/api-docs/clay-web/clay/audio/AudioEvent/) | abstract |  |
| [AudioFormat](/api-docs/clay-web/clay/audio/AudioFormat/) | abstract | The type of format data for audio |
| [AudioHandle](/api-docs/clay-web/clay/audio/AudioHandle/) | typedef | An audio handle for tracking audio instances |
| [AudioInstance](/api-docs/clay-web/clay/audio/AudioInstance/) | class |  |
| [AudioSource](/api-docs/clay-web/clay/audio/AudioSource/) | class |  |
| [AudioState](/api-docs/clay-web/clay/audio/AudioState/) | abstract |  |
| [BackgroundQueue](/api-docs/clay-web/clay/BackgroundQueue/) | class | An utility to enqueue functions and execute them in background, in a serialized way, |
| [BaseAssets](/api-docs/clay-web/clay/base/BaseAssets/) | class |  |
| [BaseAudio](/api-docs/clay-web/clay/base/BaseAudio/) | class |  |
| [BaseIO](/api-docs/clay-web/clay/base/BaseIO/) | class |  |
| [BaseRuntime](/api-docs/clay-web/clay/base/BaseRuntime/) | class |  |
| [BlendMode](/api-docs/clay-web/clay/BlendMode/) | abstract |  |
| [ArrayBuffer](/api-docs/clay-web/clay/buffers/ArrayBuffer/) | typedef |  |
| [ArrayBufferView](/api-docs/clay-web/clay/buffers/ArrayBufferView/) | typedef |  |
| [Float32Array](/api-docs/clay-web/clay/buffers/Float32Array/) | typedef |  |
| [Float32ArrayImplJS](/api-docs/clay-web/clay/buffers/Float32ArrayImplJS/) | abstract |  |
| [Int32Array](/api-docs/clay-web/clay/buffers/Int32Array/) | typedef |  |
| [Int32ArrayImplJS](/api-docs/clay-web/clay/buffers/Int32ArrayImplJS/) | abstract |  |
| [Uint16Array](/api-docs/clay-web/clay/buffers/Uint16Array/) | typedef |  |
| [Uint16ArrayImplJS](/api-docs/clay-web/clay/buffers/Uint16ArrayImplJS/) | abstract |  |
| [Uint8Array](/api-docs/clay-web/clay/buffers/Uint8Array/) | typedef |  |
| [Uint8ArrayImplJS](/api-docs/clay-web/clay/buffers/Uint8ArrayImplJS/) | abstract |  |
| [Clay](/api-docs/clay-web/clay/Clay/) | class | Clay app |
| [Config](/api-docs/clay-web/clay/Config/) | class |  |
| [Events](/api-docs/clay-web/clay/Events/) | class |  |
| [Extensions](/api-docs/clay-web/clay/Extensions/) | class | A bunch of static extensions to make life easier. |
| [GamepadDeviceEventType](/api-docs/clay-web/clay/GamepadDeviceEventType/) | abstract | A gamepad device event type |
| [GpuShader](/api-docs/clay-web/clay/GpuShader/) | typedef |  |
| [Color](/api-docs/clay-web/clay/graphics/Color/) | class |  |
| [Graphics](/api-docs/clay-web/clay/graphics/Graphics/) | typedef |  |
| [RenderTexture](/api-docs/clay-web/clay/graphics/RenderTexture/) | class |  |
| [Shader](/api-docs/clay-web/clay/graphics/Shader/) | class |  |
| [Texture](/api-docs/clay-web/clay/graphics/Texture/) | class | A high level texture object to make it easier to manage textures |
| [TextureAndSlot](/api-docs/clay-web/clay/graphics/TextureAndSlot/) | class |  |
| [Uniforms](/api-docs/clay-web/clay/graphics/Uniforms/) | class |  |
| [Vector2](/api-docs/clay-web/clay/graphics/Vector2/) | class |  |
| [Vector3](/api-docs/clay-web/clay/graphics/Vector3/) | class |  |
| [Vector4](/api-docs/clay-web/clay/graphics/Vector4/) | class |  |
| [Image](/api-docs/clay-web/clay/Image/) | class |  |
| [Immediate](/api-docs/clay-web/clay/Immediate/) | class |  |
| [Input](/api-docs/clay-web/clay/Input/) | class |  |
| [IntMap](/api-docs/clay-web/clay/IntMap/) | typedef |  |
| [IO](/api-docs/clay-web/clay/IO/) | typedef |  |
| [KeyCode](/api-docs/clay-web/clay/KeyCode/) | abstract |  |
| [Log](/api-docs/clay-web/clay/Log/) | class |  |
| [Macros](/api-docs/clay-web/clay/Macros/) | class |  |
| [ModState](/api-docs/clay-web/clay/ModState/) | class | Input modifier state |
| [GL](/api-docs/clay-web/clay/opengl/GL/) | typedef |  |
| [GLActiveInfo](/api-docs/clay-web/clay/opengl/GLActiveInfo/) | typedef |  |
| [GLBuffer](/api-docs/clay-web/clay/opengl/GLBuffer/) | typedef |  |
| [GLContextAttributes](/api-docs/clay-web/clay/opengl/GLContextAttributes/) | typedef |  |
| [GLFramebuffer](/api-docs/clay-web/clay/opengl/GLFramebuffer/) | typedef |  |
| [GLGraphics](/api-docs/clay-web/clay/opengl/GLGraphics/) | class | A set of helpers to interact with GL stuff. |
| [GLGraphics_GpuShader](/api-docs/clay-web/clay/opengl/GLGraphics_GpuShader/) | class |  |
| [GLGraphics_RenderTarget](/api-docs/clay-web/clay/opengl/GLGraphics_RenderTarget/) | class |  |
| [GLProgram](/api-docs/clay-web/clay/opengl/GLProgram/) | typedef |  |
| [GLRenderbuffer](/api-docs/clay-web/clay/opengl/GLRenderbuffer/) | typedef |  |
| [GLShader](/api-docs/clay-web/clay/opengl/GLShader/) | typedef |  |
| [GLTexture](/api-docs/clay-web/clay/opengl/GLTexture/) | typedef |  |
| [GLUniformLocation](/api-docs/clay-web/clay/opengl/GLUniformLocation/) | typedef |  |
| [GL](/api-docs/clay-web/clay/opengl/web/GL/) | class |  |
| [GLActiveInfo](/api-docs/clay-web/clay/opengl/web/GLActiveInfo/) | typedef |  |
| [GLBuffer](/api-docs/clay-web/clay/opengl/web/GLBuffer/) | typedef |  |
| [GLContextAttributes](/api-docs/clay-web/clay/opengl/web/GLContextAttributes/) | typedef |  |
| [GLFramebuffer](/api-docs/clay-web/clay/opengl/web/GLFramebuffer/) | typedef |  |
| [GLProgram](/api-docs/clay-web/clay/opengl/web/GLProgram/) | typedef |  |
| [GLRenderbuffer](/api-docs/clay-web/clay/opengl/web/GLRenderbuffer/) | typedef |  |
| [GLShader](/api-docs/clay-web/clay/opengl/web/GLShader/) | typedef |  |
| [GLShaderPrecisionFormat](/api-docs/clay-web/clay/opengl/web/GLShaderPrecisionFormat/) | typedef |  |
| [GLTexture](/api-docs/clay-web/clay/opengl/web/GLTexture/) | typedef |  |
| [GLUniformLocation](/api-docs/clay-web/clay/opengl/web/GLUniformLocation/) | typedef |  |
| [PremultiplyAlpha](/api-docs/clay-web/clay/PremultiplyAlpha/) | class |  |
| [RenderConfig](/api-docs/clay-web/clay/RenderConfig/) | class | Config specific to the rendering context that would be used when creating windows |
| [RenderConfigWebGL](/api-docs/clay-web/clay/RenderConfigWebGL/) | class | Config specific to a WebGL rendering context. |
| [RenderTarget](/api-docs/clay-web/clay/RenderTarget/) | typedef |  |
| [Resource](/api-docs/clay-web/clay/Resource/) | class |  |
| [Runner](/api-docs/clay-web/clay/Runner/) | class | A simple Haxe class for easily running threads and calling functions on the primary thread. |
| [Runtime](/api-docs/clay-web/clay/Runtime/) | typedef |  |
| [RuntimeConfig](/api-docs/clay-web/clay/RuntimeConfig/) | typedef |  |
| [ScanCode](/api-docs/clay-web/clay/ScanCode/) | abstract |  |
| [TextEventType](/api-docs/clay-web/clay/TextEventType/) | abstract | A text specific event event type |
| [TextureDataType](/api-docs/clay-web/clay/TextureDataType/) | abstract |  |
| [TextureFilter](/api-docs/clay-web/clay/TextureFilter/) | abstract |  |
| [TextureFormat](/api-docs/clay-web/clay/TextureFormat/) | abstract |  |
| [TextureId](/api-docs/clay-web/clay/TextureId/) | typedef |  |
| [TextureType](/api-docs/clay-web/clay/TextureType/) | abstract |  |
| [TextureWrap](/api-docs/clay-web/clay/TextureWrap/) | abstract |  |
| [Utils](/api-docs/clay-web/clay/Utils/) | class |  |
| [AudioWorkletNode](/api-docs/clay-web/clay/web/AudioWorkletNode/) | typedef |  |
| [WebAssets](/api-docs/clay-web/clay/web/WebAssets/) | class |  |
| [WebAudio](/api-docs/clay-web/clay/web/WebAudio/) | class |  |
| [WebConfig](/api-docs/clay-web/clay/web/WebConfig/) | class |  |
| [WebIO](/api-docs/clay-web/clay/web/WebIO/) | class |  |
| [WebRuntime](/api-docs/clay-web/clay/web/WebRuntime/) | class |  |
| [WindowHandle](/api-docs/clay-web/clay/web/WindowHandle/) | typedef |  |
| [WindowConfig](/api-docs/clay-web/clay/WindowConfig/) | class | Window configuration information for creating windows |
| [WindowEventType](/api-docs/clay-web/clay/WindowEventType/) | abstract |  |
| [WebAudioBus](/api-docs/clay-web/clay/web/_WebAudio/WebAudioBus/) | typedef |  |
| [WebAudioData](/api-docs/clay-web/clay/web/_WebAudio/WebAudioData/) | class |  |
| [WebSound](/api-docs/clay-web/clay/web/_WebAudio/WebSound/) | typedef |  |
| [DOMKeys](/api-docs/clay-web/clay/web/_WebRuntime/DOMKeys/) | class |  |

## Ase

| Type | Kind | Description |
|------|------|-------------|
| [Ase](/api-docs/clay-web/ase/Ase/) | class | Aseprite file format reader/writer |
| [AseHeader](/api-docs/clay-web/ase/AseHeader/) | class |  |
| [Cel](/api-docs/clay-web/ase/Cel/) | class |  |
| [CelChunk](/api-docs/clay-web/ase/chunks/CelChunk/) | class |  |
| [CelExtraChunk](/api-docs/clay-web/ase/chunks/CelExtraChunk/) | class |  |
| [Chunk](/api-docs/clay-web/ase/chunks/Chunk/) | class |  |
| [ChunkHeader](/api-docs/clay-web/ase/chunks/ChunkHeader/) | class |  |
| [ColorProfileChunk](/api-docs/clay-web/ase/chunks/ColorProfileChunk/) | class |  |
| [ExternalFilesChunk](/api-docs/clay-web/ase/chunks/ExternalFilesChunk/) | class |  |
| [LayerBlendMode](/api-docs/clay-web/ase/chunks/LayerBlendMode/) | abstract |  |
| [LayerChunk](/api-docs/clay-web/ase/chunks/LayerChunk/) | class |  |
| [LayerFlags](/api-docs/clay-web/ase/chunks/LayerFlags/) | abstract |  |
| [LayerType](/api-docs/clay-web/ase/chunks/LayerType/) | abstract |  |
| [MaskChunk](/api-docs/clay-web/ase/chunks/MaskChunk/) | class |  |
| [OldPaleteChunk](/api-docs/clay-web/ase/chunks/OldPaleteChunk/) | class |  |
| [Packet](/api-docs/clay-web/ase/chunks/Packet/) | typedef |  |
| [PaletteChunk](/api-docs/clay-web/ase/chunks/PaletteChunk/) | class |  |
| [PaletteChunkEntry](/api-docs/clay-web/ase/chunks/PaletteChunkEntry/) | class |  |
| [SliceChunk](/api-docs/clay-web/ase/chunks/SliceChunk/) | class |  |
| [SliceKey](/api-docs/clay-web/ase/chunks/SliceKey/) | class |  |
| [Tag](/api-docs/clay-web/ase/chunks/Tag/) | typedef |  |
| [TagsChunk](/api-docs/clay-web/ase/chunks/TagsChunk/) | class |  |
| [TilesetChunk](/api-docs/clay-web/ase/chunks/TilesetChunk/) | class |  |
| [UserDataChunk](/api-docs/clay-web/ase/chunks/UserDataChunk/) | class |  |
| [Frame](/api-docs/clay-web/ase/Frame/) | class |  |
| [FrameHeader](/api-docs/clay-web/ase/FrameHeader/) | class |  |
| [Layer](/api-docs/clay-web/ase/Layer/) | class |  |
| [Palette](/api-docs/clay-web/ase/Palette/) | class |  |
| [PaletteEntry](/api-docs/clay-web/ase/PaletteEntry/) | typedef |  |
| [CelType](/api-docs/clay-web/ase/types/CelType/) | abstract |  |
| [ChunkType](/api-docs/clay-web/ase/types/ChunkType/) | abstract |  |
| [ColorDepth](/api-docs/clay-web/ase/types/ColorDepth/) | abstract |  |
| [ColorProfileType](/api-docs/clay-web/ase/types/ColorProfileType/) | abstract |  |
| [Serializable](/api-docs/clay-web/ase/types/Serializable/) | interface |  |
| [AsepriteBlendFuncs](/api-docs/clay-web/ceramic/AsepriteBlendFuncs/) | class | Blending functions that operate at pixel/color level, ported from Aseprite source code. |
| [AsepriteData](/api-docs/clay-web/ceramic/AsepriteData/) | class | Data structure containing parsed Aseprite file information. |
| [AsepriteFrame](/api-docs/clay-web/ceramic/AsepriteFrame/) | class | Represents a single frame from an Aseprite animation. |
| [AsepriteFrameLayer](/api-docs/clay-web/ceramic/AsepriteFrameLayer/) | class | Represents a single layer's data within an Aseprite frame. |
| [AsepritePalette](/api-docs/clay-web/ceramic/AsepritePalette/) | class | Represents a color palette from an Aseprite file. |
| [AsepriteParser](/api-docs/clay-web/ceramic/AsepriteParser/) | class | Parser for Aseprite (.ase/.aseprite) animation files. |
| [AsepriteTag](/api-docs/clay-web/ceramic/AsepriteTag/) | class | Represents an animation tag from an Aseprite file. |

## Format

| Type | Kind | Description |
|------|------|-------------|
| [Header](/api-docs/clay-web/format/gz/Header/) | typedef |  |
| [Reader](/api-docs/clay-web/format/gz/Reader/) | class |  |
| [InflateImpl](/api-docs/clay-web/format/tools/InflateImpl/) | typedef |  |

## Tiled

| Type | Kind | Description |
|------|------|-------------|
| [Reader](/api-docs/clay-web/format/tmx/Reader/) | class | ... |
| [TmxBaseLayer](/api-docs/clay-web/format/tmx/TmxBaseLayer/) | class |  |
| [TmxChunk](/api-docs/clay-web/format/tmx/TmxChunk/) | class | This is currently added only for infinite maps. The contents of a chunk element is same as that of |
| [TmxData](/api-docs/clay-web/format/tmx/TmxData/) | class | When no encoding or compression is given, the tiles are stored as individual XML tile elements. |
| [TmxDataCompression](/api-docs/clay-web/format/tmx/TmxDataCompression/) | enum | Compression type for data. |
| [TmxDataEncoding](/api-docs/clay-web/format/tmx/TmxDataEncoding/) | enum | Encoding of the data. |
| [TmxGroup](/api-docs/clay-web/format/tmx/TmxGroup/) | class | A group layer, used to organize the layers of the map in a hierarchy. |
| [TmxHAlign](/api-docs/clay-web/format/tmx/TmxHAlign/) | abstract |  |
| [TmxImage](/api-docs/clay-web/format/tmx/TmxImage/) | class | As of the current version of Tiled Qt, each tileset has a single image associated with it, |
| [TmxImageLayer](/api-docs/clay-web/format/tmx/TmxImageLayer/) | class | A layer consisting of a single image. |
| [TmxLayer](/api-docs/clay-web/format/tmx/TmxLayer/) | enum |  |
| [TmxMap](/api-docs/clay-web/format/tmx/TmxMap/) | class | General .tmx map file |
| [TmxObject](/api-docs/clay-web/format/tmx/TmxObject/) | class |  |
| [TmxObjectGroup](/api-docs/clay-web/format/tmx/TmxObjectGroup/) | class | Layer representing a group of objects. |
| [TmxObjectGroupDrawOrder](/api-docs/clay-web/format/tmx/TmxObjectGroupDrawOrder/) | enum | Whether the objects are drawn according to the order of appearance ("index") or sorted by their y... |
| [TmxObjectTemplate](/api-docs/clay-web/format/tmx/TmxObjectTemplate/) | class |  |
| [TmxObjectType](/api-docs/clay-web/format/tmx/TmxObjectType/) | enum | Type of the object. |
| [TmxObjectTypeProperty](/api-docs/clay-web/format/tmx/TmxObjectTypeProperty/) | class |  |
| [TmxObjectTypeTemplate](/api-docs/clay-web/format/tmx/TmxObjectTypeTemplate/) | class |  |
| [TmxOrientation](/api-docs/clay-web/format/tmx/TmxOrientation/) | enum | Map orientation |
| [TmxPoint](/api-docs/clay-web/format/tmx/TmxPoint/) | class | Utility for x/y object. Used for Polygon and Polyline object types. |
| [TmxProperties](/api-docs/clay-web/format/tmx/TmxProperties/) | abstract |  |
| [TmxPropertyType](/api-docs/clay-web/format/tmx/TmxPropertyType/) | enum |  |
| [TmxRenderOrder](/api-docs/clay-web/format/tmx/TmxRenderOrder/) | enum | Rendering order of tiles |
| [TmxStaggerAxis](/api-docs/clay-web/format/tmx/TmxStaggerAxis/) | enum |  |
| [TmxStaggerIndex](/api-docs/clay-web/format/tmx/TmxStaggerIndex/) | enum |  |
| [TmxTerrain](/api-docs/clay-web/format/tmx/TmxTerrain/) | class |  |
| [TmxText](/api-docs/clay-web/format/tmx/TmxText/) | class | Used to mark an object as a text object. Contains the actual text as character data. |
| [TmxTile](/api-docs/clay-web/format/tmx/TmxTile/) | abstract | Single tile in tile layer. |
| [TmxTileLayer](/api-docs/clay-web/format/tmx/TmxTileLayer/) | class |  |
| [TmxTileOffset](/api-docs/clay-web/format/tmx/TmxTileOffset/) | class | This element is used to specify an offset in pixels, to be applied when drawing a tile from the r... |
| [TmxTileset](/api-docs/clay-web/format/tmx/TmxTileset/) | class | Tileset |
| [TmxTilesetGrid](/api-docs/clay-web/format/tmx/TmxTilesetGrid/) | class | This element is only used in case of isometric orientation, and determines how tile overlays for ... |
| [TmxTilesetTile](/api-docs/clay-web/format/tmx/TmxTilesetTile/) | class |  |
| [TmxTilesetTileFrame](/api-docs/clay-web/format/tmx/TmxTilesetTileFrame/) | class | Animation frame of a single tile in tileset. |
| [TmxVAlign](/api-docs/clay-web/format/tmx/TmxVAlign/) | abstract |  |
| [TmxWangSet](/api-docs/clay-web/format/tmx/TmxWangSet/) | class | Defines a list of corner colors and a list of edge colors, and any number of Wang tiles using the... |
| [TmxWangSetColor](/api-docs/clay-web/format/tmx/TmxWangSetColor/) | class | A color that can be used to define the corner or an edge of a Wang tile. |
| [TmxWangSetTile](/api-docs/clay-web/format/tmx/TmxWangSetTile/) | class | Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang... |
| [Tools](/api-docs/clay-web/format/tmx/Tools/) | class | ... |
| [ImplTmxProperties](/api-docs/clay-web/format/tmx/_Data/ImplTmxProperties/) | class |  |

## Nape

| Type | Kind | Description |
|------|------|-------------|
| [NapePhysicsBodyType](/api-docs/clay-web/ceramic/NapePhysicsBodyType/) | enum | Types of physics bodies in the Nape physics engine. |
| [NapeSystem](/api-docs/clay-web/ceramic/NapeSystem/) | class | Central system managing Nape physics simulation in Ceramic. |
| [VisualNapePhysics](/api-docs/clay-web/ceramic/VisualNapePhysics/) | class | Component that links a Ceramic Visual to a Nape physics body. |
| [BodyCallback](/api-docs/clay-web/nape/callbacks/BodyCallback/) | class | Callback object for Body type events. |
| [BodyListener](/api-docs/clay-web/nape/callbacks/BodyListener/) | class | Event listener for Body type events. |
| [Callback](/api-docs/clay-web/nape/callbacks/Callback/) | class | Base type for Callback event objects. |
| [CbEvent](/api-docs/clay-web/nape/callbacks/CbEvent/) | class | Enumeration of possible callback event types. |
| [CbType](/api-docs/clay-web/nape/callbacks/CbType/) | class | Callback Type applied to Interactors and Constraints. |
| [CbTypeIterator](/api-docs/clay-web/nape/callbacks/CbTypeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CbTypeList](/api-docs/clay-web/nape/callbacks/CbTypeList/) | class | Nape list of CbType type objects |
| [ConstraintCallback](/api-docs/clay-web/nape/callbacks/ConstraintCallback/) | class | Callback object for Constraint type events. |
| [ConstraintListener](/api-docs/clay-web/nape/callbacks/ConstraintListener/) | class | Event listener for Constraint type events. |
| [InteractionCallback](/api-docs/clay-web/nape/callbacks/InteractionCallback/) | class | Callback object for Interaction type events. |
| [InteractionListener](/api-docs/clay-web/nape/callbacks/InteractionListener/) | class | Event listener for Interaction type events. |
| [InteractionType](/api-docs/clay-web/nape/callbacks/InteractionType/) | class | Enumeration of Interaction types. |
| [Listener](/api-docs/clay-web/nape/callbacks/Listener/) | class | Base type for all Nape callback listeners. |
| [ListenerIterator](/api-docs/clay-web/nape/callbacks/ListenerIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ListenerList](/api-docs/clay-web/nape/callbacks/ListenerList/) | class | Nape list of Listener type objects |
| [ListenerType](/api-docs/clay-web/nape/callbacks/ListenerType/) | class | Enumeration of Listener types. |
| [OptionType](/api-docs/clay-web/nape/callbacks/OptionType/) | class | OptionType representing matching behaviour for Listeners. |
| [PreCallback](/api-docs/clay-web/nape/callbacks/PreCallback/) | class | Callback object for Pre-Interaction type events. |
| [PreFlag](/api-docs/clay-web/nape/callbacks/PreFlag/) | class | Enumeration of interaction states for arbiters. These values are returned |
| [PreListener](/api-docs/clay-web/nape/callbacks/PreListener/) | class | Event listener for Pre-Interaction type events. |
| [Config](/api-docs/clay-web/nape/Config/) | class | Configuration parameters for Nape |
| [AngleJoint](/api-docs/clay-web/nape/constraint/AngleJoint/) | class | AngleJoint constraining the relative angles of two Bodies. |
| [Constraint](/api-docs/clay-web/nape/constraint/Constraint/) | class | Base type for all Nape joints and constraints |
| [ConstraintIterator](/api-docs/clay-web/nape/constraint/ConstraintIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConstraintList](/api-docs/clay-web/nape/constraint/ConstraintList/) | class | Nape list of Constraint type objects |
| [DistanceJoint](/api-docs/clay-web/nape/constraint/DistanceJoint/) | class | DistanceJoint limiting the distance between two local anchor points of Bodies. |
| [LineJoint](/api-docs/clay-web/nape/constraint/LineJoint/) | class | LineJoint constraining anchor of one body, to a line segment of the other. |
| [MotorJoint](/api-docs/clay-web/nape/constraint/MotorJoint/) | class | MotorJoint constraining the angular velocities of two bodies |
| [PivotJoint](/api-docs/clay-web/nape/constraint/PivotJoint/) | class | PivotJoint constraining two anchors points of bodies to be equal. |
| [PulleyJoint](/api-docs/clay-web/nape/constraint/PulleyJoint/) | class | PulleyJoint limiting the weighted sum of distances between 2 pairs of 4 local anchor points of Bo... |
| [UserConstraint](/api-docs/clay-web/nape/constraint/UserConstraint/) | class | UserConstraint providing a low-level API for user-defined Constraints. |
| [WeldJoint](/api-docs/clay-web/nape/constraint/WeldJoint/) | class | WeldJoint constraining two bodies to be exactly locked together. |
| [Arbiter](/api-docs/clay-web/nape/dynamics/Arbiter/) | class | Arbiter representing the state of an interaction between two Bodys. |
| [ArbiterIterator](/api-docs/clay-web/nape/dynamics/ArbiterIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ArbiterList](/api-docs/clay-web/nape/dynamics/ArbiterList/) | class | Nape list of Arbiter type objects |
| [ArbiterType](/api-docs/clay-web/nape/dynamics/ArbiterType/) | class | Enumeration of Arbiter types. |
| [CollisionArbiter](/api-docs/clay-web/nape/dynamics/CollisionArbiter/) | class | Arbiter sub type for collision interactions. |
| [Contact](/api-docs/clay-web/nape/dynamics/Contact/) | class | Contact point for collision interactions |
| [ContactIterator](/api-docs/clay-web/nape/dynamics/ContactIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ContactList](/api-docs/clay-web/nape/dynamics/ContactList/) | class | Nape list of Contact type objects |
| [FluidArbiter](/api-docs/clay-web/nape/dynamics/FluidArbiter/) | class | Fluid interaction subtype for Arbiter. |
| [InteractionFilter](/api-docs/clay-web/nape/dynamics/InteractionFilter/) | class | InteractionFilter provides bit flags for low-level filtering of interactions. |
| [InteractionGroup](/api-docs/clay-web/nape/dynamics/InteractionGroup/) | class | InteractionGroups are another way of filtering interactions. |
| [InteractionGroupIterator](/api-docs/clay-web/nape/dynamics/InteractionGroupIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractionGroupList](/api-docs/clay-web/nape/dynamics/InteractionGroupList/) | class | Nape list of InteractionGroup type objects |
| [AABB](/api-docs/clay-web/nape/geom/AABB/) | class | Axis Aligned Bounding Box (AABB) |
| [ConvexResult](/api-docs/clay-web/nape/geom/ConvexResult/) | class | Class representing the results of a convex cast operation. |
| [ConvexResultIterator](/api-docs/clay-web/nape/geom/ConvexResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConvexResultList](/api-docs/clay-web/nape/geom/ConvexResultList/) | class | Nape list of ConvexResult type objects |
| [Geom](/api-docs/clay-web/nape/geom/Geom/) | class | Geom class provides interface to collision detection routines in nape. |
| [GeomPoly](/api-docs/clay-web/nape/geom/GeomPoly/) | class | Polygon class with various geometric methods |
| [GeomPolyIterator](/api-docs/clay-web/nape/geom/GeomPolyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [GeomPolyList](/api-docs/clay-web/nape/geom/GeomPolyList/) | class | Nape list of GeomPoly type objects |
| [GeomVertexIterator](/api-docs/clay-web/nape/geom/GeomVertexIterator/) | class | Haxe compatible iterator over vertices of GeomPoly. |
| [IsoFunctionDef](/api-docs/clay-web/nape/geom/IsoFunctionDef/) | typedef | Typedef defining iso-function type for MarchingSquares. |
| [MarchingSquares](/api-docs/clay-web/nape/geom/MarchingSquares/) | class | Iso-surface extraction into polygons. |
| [Mat23](/api-docs/clay-web/nape/geom/Mat23/) | class | 2D Matrix class representing affine transformations: |
| [MatMN](/api-docs/clay-web/nape/geom/MatMN/) | class | A general MxN dimensional matrix. |
| [Ray](/api-docs/clay-web/nape/geom/Ray/) | class | Parametrically defined ray used in ray casting functions. |
| [RayResult](/api-docs/clay-web/nape/geom/RayResult/) | class | Class representing the results of a ray cast operation. |
| [RayResultIterator](/api-docs/clay-web/nape/geom/RayResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [RayResultList](/api-docs/clay-web/nape/geom/RayResultList/) | class | Nape list of RayResult type objects |
| [Vec2](/api-docs/clay-web/nape/geom/Vec2/) | class | 2 Dimensional vector. |
| [Vec2Iterator](/api-docs/clay-web/nape/geom/Vec2Iterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [Vec2List](/api-docs/clay-web/nape/geom/Vec2List/) | class | Nape list of Vec2 type objects |
| [Vec3](/api-docs/clay-web/nape/geom/Vec3/) | class | A 3 dimensional vector object. |
| [Winding](/api-docs/clay-web/nape/geom/Winding/) | class | Enumeration represents the winding of a Polygon. |
| [Body](/api-docs/clay-web/nape/phys/Body/) | class | Class representing a physics Rigid Body. |
| [BodyIterator](/api-docs/clay-web/nape/phys/BodyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [BodyList](/api-docs/clay-web/nape/phys/BodyList/) | class | Nape list of Body type objects |
| [BodyType](/api-docs/clay-web/nape/phys/BodyType/) | class | Enumeration of rigid body types. |
| [Compound](/api-docs/clay-web/nape/phys/Compound/) | class | Compound represents a grouping of physics objects into a single object. |
| [CompoundIterator](/api-docs/clay-web/nape/phys/CompoundIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CompoundList](/api-docs/clay-web/nape/phys/CompoundList/) | class | Nape list of Compound type objects |
| [FluidProperties](/api-docs/clay-web/nape/phys/FluidProperties/) | class | FluidProperties providing shared parameters for fluid interaction. |
| [GravMassMode](/api-docs/clay-web/nape/phys/GravMassMode/) | class | Enumeration of GravMassMode values for a Body. |
| [InertiaMode](/api-docs/clay-web/nape/phys/InertiaMode/) | class | Enumeration of InertiaMode values for a Body. |
| [Interactor](/api-docs/clay-web/nape/phys/Interactor/) | class |  |
| [InteractorIterator](/api-docs/clay-web/nape/phys/InteractorIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractorList](/api-docs/clay-web/nape/phys/InteractorList/) | class | Nape list of Interactor type objects |
| [MassMode](/api-docs/clay-web/nape/phys/MassMode/) | class | Enumeration of MassMode values for a Body. |
| [Material](/api-docs/clay-web/nape/phys/Material/) | class | Material property providing physical attributes to a Shape. |
| [Circle](/api-docs/clay-web/nape/shape/Circle/) | class | Shape subtype representing a Circle |
| [Edge](/api-docs/clay-web/nape/shape/Edge/) | class | Edge class providing internal details of Polygon. |
| [EdgeIterator](/api-docs/clay-web/nape/shape/EdgeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [EdgeList](/api-docs/clay-web/nape/shape/EdgeList/) | class | Nape list of Edge type objects |
| [Polygon](/api-docs/clay-web/nape/shape/Polygon/) | class | Polygon subtype of Shape. |
| [Shape](/api-docs/clay-web/nape/shape/Shape/) | class | Base type for Nape Shape's |
| [ShapeIterator](/api-docs/clay-web/nape/shape/ShapeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ShapeList](/api-docs/clay-web/nape/shape/ShapeList/) | class | Nape list of Shape type objects |
| [ShapeType](/api-docs/clay-web/nape/shape/ShapeType/) | class | Enumeration of Nape Shape types. |
| [ValidationResult](/api-docs/clay-web/nape/shape/ValidationResult/) | class | Enumeration of validation results for a Polygon. |
| [Broadphase](/api-docs/clay-web/nape/space/Broadphase/) | class | Enumeration of available broadphase collision types that Spaces may use. |
| [Space](/api-docs/clay-web/nape/space/Space/) | class | The heart of all Nape simulations. |
| [TArray](/api-docs/clay-web/nape/TArray/) | typedef | Platform specific Array type. |
| [Debug](/api-docs/clay-web/nape/util/Debug/) | class | Debug class providing general utilities |
| [ZPP_BodyListener](/api-docs/clay-web/zpp_nape/callbacks/ZPP_BodyListener/) | class |  |
| [ZPP_Callback](/api-docs/clay-web/zpp_nape/callbacks/ZPP_Callback/) | class |  |
| [ZPP_CbSet](/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbSet/) | class |  |
| [ZPP_CbSetPair](/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbSetPair/) | class |  |
| [ZPP_CbType](/api-docs/clay-web/zpp_nape/callbacks/ZPP_CbType/) | class |  |
| [ZPP_ConstraintListener](/api-docs/clay-web/zpp_nape/callbacks/ZPP_ConstraintListener/) | class |  |
| [ZPP_InteractionListener](/api-docs/clay-web/zpp_nape/callbacks/ZPP_InteractionListener/) | class |  |
| [ZPP_Listener](/api-docs/clay-web/zpp_nape/callbacks/ZPP_Listener/) | class |  |
| [ZPP_OptionType](/api-docs/clay-web/zpp_nape/callbacks/ZPP_OptionType/) | class |  |
| [ZPP_AngleJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_AngleJoint/) | class |  |
| [ZPP_Constraint](/api-docs/clay-web/zpp_nape/constraint/ZPP_Constraint/) | class |  |
| [ZPP_CopyHelper](/api-docs/clay-web/zpp_nape/constraint/ZPP_CopyHelper/) | class |  |
| [ZPP_DistanceJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_DistanceJoint/) | class |  |
| [ZPP_LineJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_LineJoint/) | class |  |
| [ZPP_MotorJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_MotorJoint/) | class |  |
| [ZPP_PivotJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_PivotJoint/) | class |  |
| [ZPP_PulleyJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_PulleyJoint/) | class |  |
| [ZPP_UserBody](/api-docs/clay-web/zpp_nape/constraint/ZPP_UserBody/) | class |  |
| [ZPP_UserConstraint](/api-docs/clay-web/zpp_nape/constraint/ZPP_UserConstraint/) | class |  |
| [ZPP_WeldJoint](/api-docs/clay-web/zpp_nape/constraint/ZPP_WeldJoint/) | class |  |
| [ZPP_Arbiter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_Arbiter/) | class |  |
| [ZPP_ColArbiter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_ColArbiter/) | class |  |
| [ZPP_Contact](/api-docs/clay-web/zpp_nape/dynamics/ZPP_Contact/) | class |  |
| [ZPP_FluidArbiter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_FluidArbiter/) | class |  |
| [ZPP_IContact](/api-docs/clay-web/zpp_nape/dynamics/ZPP_IContact/) | class |  |
| [ZPP_InteractionFilter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionFilter/) | class |  |
| [ZPP_InteractionGroup](/api-docs/clay-web/zpp_nape/dynamics/ZPP_InteractionGroup/) | class |  |
| [ZPP_SensorArbiter](/api-docs/clay-web/zpp_nape/dynamics/ZPP_SensorArbiter/) | class |  |
| [ZPP_SpaceArbiterList](/api-docs/clay-web/zpp_nape/dynamics/ZPP_SpaceArbiterList/) | class |  |
| [ZPP_AABB](/api-docs/clay-web/zpp_nape/geom/ZPP_AABB/) | class |  |
| [ZPP_Collide](/api-docs/clay-web/zpp_nape/geom/ZPP_Collide/) | class |  |
| [ZPP_Convex](/api-docs/clay-web/zpp_nape/geom/ZPP_Convex/) | class |  |
| [ZPP_ConvexRayResult](/api-docs/clay-web/zpp_nape/geom/ZPP_ConvexRayResult/) | class |  |
| [ZPP_CutInt](/api-docs/clay-web/zpp_nape/geom/ZPP_CutInt/) | class |  |
| [ZPP_Cutter](/api-docs/clay-web/zpp_nape/geom/ZPP_Cutter/) | class |  |
| [ZPP_CutVert](/api-docs/clay-web/zpp_nape/geom/ZPP_CutVert/) | class |  |
| [ZPP_Geom](/api-docs/clay-web/zpp_nape/geom/ZPP_Geom/) | class |  |
| [ZPP_GeomPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomPoly/) | class |  |
| [ZPP_GeomVert](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVert/) | class |  |
| [ZPP_GeomVertexIterator](/api-docs/clay-web/zpp_nape/geom/ZPP_GeomVertexIterator/) | class |  |
| [ZPP_MarchingSquares](/api-docs/clay-web/zpp_nape/geom/ZPP_MarchingSquares/) | class |  |
| [ZPP_MarchPair](/api-docs/clay-web/zpp_nape/geom/ZPP_MarchPair/) | class |  |
| [ZPP_MarchSpan](/api-docs/clay-web/zpp_nape/geom/ZPP_MarchSpan/) | class |  |
| [ZPP_Mat23](/api-docs/clay-web/zpp_nape/geom/ZPP_Mat23/) | class |  |
| [ZPP_MatMN](/api-docs/clay-web/zpp_nape/geom/ZPP_MatMN/) | class |  |
| [ZPP_Monotone](/api-docs/clay-web/zpp_nape/geom/ZPP_Monotone/) | class |  |
| [ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionedPoly/) | class |  |
| [ZPP_PartitionPair](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionPair/) | class |  |
| [ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/geom/ZPP_PartitionVertex/) | class |  |
| [ZPP_Ray](/api-docs/clay-web/zpp_nape/geom/ZPP_Ray/) | class |  |
| [ZPP_Simple](/api-docs/clay-web/zpp_nape/geom/ZPP_Simple/) | class |  |
| [ZPP_SimpleEvent](/api-docs/clay-web/zpp_nape/geom/ZPP_SimpleEvent/) | class |  |
| [ZPP_SimpleSeg](/api-docs/clay-web/zpp_nape/geom/ZPP_SimpleSeg/) | class |  |
| [ZPP_SimpleSweep](/api-docs/clay-web/zpp_nape/geom/ZPP_SimpleSweep/) | class |  |
| [ZPP_SimpleVert](/api-docs/clay-web/zpp_nape/geom/ZPP_SimpleVert/) | class |  |
| [ZPP_Simplify](/api-docs/clay-web/zpp_nape/geom/ZPP_Simplify/) | class |  |
| [ZPP_SimplifyP](/api-docs/clay-web/zpp_nape/geom/ZPP_SimplifyP/) | class |  |
| [ZPP_SimplifyV](/api-docs/clay-web/zpp_nape/geom/ZPP_SimplifyV/) | class |  |
| [ZPP_SweepDistance](/api-docs/clay-web/zpp_nape/geom/ZPP_SweepDistance/) | class |  |
| [ZPP_ToiEvent](/api-docs/clay-web/zpp_nape/geom/ZPP_ToiEvent/) | class |  |
| [ZPP_Triangular](/api-docs/clay-web/zpp_nape/geom/ZPP_Triangular/) | class |  |
| [ZPP_Vec2](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec2/) | class |  |
| [ZPP_Vec3](/api-docs/clay-web/zpp_nape/geom/ZPP_Vec3/) | class |  |
| [ZPP_VecMath](/api-docs/clay-web/zpp_nape/geom/ZPP_VecMath/) | class |  |
| [ZPP_Body](/api-docs/clay-web/zpp_nape/phys/ZPP_Body/) | class |  |
| [ZPP_Compound](/api-docs/clay-web/zpp_nape/phys/ZPP_Compound/) | class |  |
| [ZPP_FluidProperties](/api-docs/clay-web/zpp_nape/phys/ZPP_FluidProperties/) | class |  |
| [ZPP_Interactor](/api-docs/clay-web/zpp_nape/phys/ZPP_Interactor/) | class |  |
| [ZPP_Material](/api-docs/clay-web/zpp_nape/phys/ZPP_Material/) | class |  |
| [ZPP_Circle](/api-docs/clay-web/zpp_nape/shape/ZPP_Circle/) | class |  |
| [ZPP_Edge](/api-docs/clay-web/zpp_nape/shape/ZPP_Edge/) | class |  |
| [ZPP_Polygon](/api-docs/clay-web/zpp_nape/shape/ZPP_Polygon/) | class |  |
| [ZPP_Shape](/api-docs/clay-web/zpp_nape/shape/ZPP_Shape/) | class |  |
| [ZPP_AABBNode](/api-docs/clay-web/zpp_nape/space/ZPP_AABBNode/) | class |  |
| [ZPP_AABBPair](/api-docs/clay-web/zpp_nape/space/ZPP_AABBPair/) | class |  |
| [ZPP_AABBTree](/api-docs/clay-web/zpp_nape/space/ZPP_AABBTree/) | class |  |
| [ZPP_Broadphase](/api-docs/clay-web/zpp_nape/space/ZPP_Broadphase/) | class |  |
| [ZPP_CallbackSet](/api-docs/clay-web/zpp_nape/space/ZPP_CallbackSet/) | class |  |
| [ZPP_CbSetManager](/api-docs/clay-web/zpp_nape/space/ZPP_CbSetManager/) | class |  |
| [ZPP_Component](/api-docs/clay-web/zpp_nape/space/ZPP_Component/) | class |  |
| [ZPP_DynAABBPhase](/api-docs/clay-web/zpp_nape/space/ZPP_DynAABBPhase/) | class |  |
| [ZPP_Island](/api-docs/clay-web/zpp_nape/space/ZPP_Island/) | class |  |
| [ZPP_Space](/api-docs/clay-web/zpp_nape/space/ZPP_Space/) | class |  |
| [ZPP_SweepData](/api-docs/clay-web/zpp_nape/space/ZPP_SweepData/) | class |  |
| [ZPP_SweepPhase](/api-docs/clay-web/zpp_nape/space/ZPP_SweepPhase/) | class |  |
| [FastHash2_Hashable2_Boolfalse](/api-docs/clay-web/zpp_nape/util/FastHash2_Hashable2_Boolfalse/) | class |  |
| [Hashable2_Boolfalse](/api-docs/clay-web/zpp_nape/util/Hashable2_Boolfalse/) | class |  |
| [ZNPArray2_Float](/api-docs/clay-web/zpp_nape/util/ZNPArray2_Float/) | class |  |
| [ZNPArray2_ZPP_GeomVert](/api-docs/clay-web/zpp_nape/util/ZNPArray2_ZPP_GeomVert/) | class |  |
| [ZNPArray2_ZPP_MarchPair](/api-docs/clay-web/zpp_nape/util/ZNPArray2_ZPP_MarchPair/) | class |  |
| [ZNPList_ConvexResult](/api-docs/clay-web/zpp_nape/util/ZNPList_ConvexResult/) | class |  |
| [ZNPList_RayResult](/api-docs/clay-web/zpp_nape/util/ZNPList_RayResult/) | class |  |
| [ZNPList_ZPP_AABBNode](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_AABBNode/) | class |  |
| [ZNPList_ZPP_AABBPair](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_AABBPair/) | class |  |
| [ZNPList_ZPP_Arbiter](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Arbiter/) | class |  |
| [ZNPList_ZPP_Body](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Body/) | class |  |
| [ZNPList_ZPP_BodyListener](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_BodyListener/) | class |  |
| [ZNPList_ZPP_CallbackSet](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CallbackSet/) | class |  |
| [ZNPList_ZPP_CbSet](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CbSet/) | class |  |
| [ZNPList_ZPP_CbSetPair](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CbSetPair/) | class |  |
| [ZNPList_ZPP_CbType](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CbType/) | class |  |
| [ZNPList_ZPP_ColArbiter](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_ColArbiter/) | class |  |
| [ZNPList_ZPP_Component](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Component/) | class |  |
| [ZNPList_ZPP_Compound](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Compound/) | class |  |
| [ZNPList_ZPP_Constraint](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Constraint/) | class |  |
| [ZNPList_ZPP_ConstraintListener](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_ConstraintListener/) | class |  |
| [ZNPList_ZPP_CutInt](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CutInt/) | class |  |
| [ZNPList_ZPP_CutVert](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_CutVert/) | class |  |
| [ZNPList_ZPP_Edge](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Edge/) | class |  |
| [ZNPList_ZPP_FluidArbiter](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_FluidArbiter/) | class |  |
| [ZNPList_ZPP_GeomPoly](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomPoly/) | class |  |
| [ZNPList_ZPP_GeomVert](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_GeomVert/) | class |  |
| [ZNPList_ZPP_InteractionGroup](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_InteractionGroup/) | class |  |
| [ZNPList_ZPP_InteractionListener](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_InteractionListener/) | class |  |
| [ZNPList_ZPP_Interactor](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Interactor/) | class |  |
| [ZNPList_ZPP_Listener](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Listener/) | class |  |
| [ZNPList_ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) | class |  |
| [ZNPList_ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_PartitionVertex/) | class |  |
| [ZNPList_ZPP_SensorArbiter](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_SensorArbiter/) | class |  |
| [ZNPList_ZPP_Shape](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Shape/) | class |  |
| [ZNPList_ZPP_SimpleEvent](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_SimpleEvent/) | class |  |
| [ZNPList_ZPP_SimpleVert](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_SimpleVert/) | class |  |
| [ZNPList_ZPP_SimplifyP](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_SimplifyP/) | class |  |
| [ZNPList_ZPP_ToiEvent](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_ToiEvent/) | class |  |
| [ZNPList_ZPP_Vec2](/api-docs/clay-web/zpp_nape/util/ZNPList_ZPP_Vec2/) | class |  |
| [ZNPNode_ConvexResult](/api-docs/clay-web/zpp_nape/util/ZNPNode_ConvexResult/) | class |  |
| [ZNPNode_RayResult](/api-docs/clay-web/zpp_nape/util/ZNPNode_RayResult/) | class |  |
| [ZNPNode_ZPP_AABBNode](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_AABBNode/) | class |  |
| [ZNPNode_ZPP_AABBPair](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_AABBPair/) | class |  |
| [ZNPNode_ZPP_Arbiter](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Arbiter/) | class |  |
| [ZNPNode_ZPP_Body](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Body/) | class |  |
| [ZNPNode_ZPP_BodyListener](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_BodyListener/) | class |  |
| [ZNPNode_ZPP_CallbackSet](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_CallbackSet/) | class |  |
| [ZNPNode_ZPP_CbSet](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_CbSet/) | class |  |
| [ZNPNode_ZPP_CbSetPair](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_CbSetPair/) | class |  |
| [ZNPNode_ZPP_CbType](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_CbType/) | class |  |
| [ZNPNode_ZPP_ColArbiter](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_ColArbiter/) | class |  |
| [ZNPNode_ZPP_Component](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Component/) | class |  |
| [ZNPNode_ZPP_Compound](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Compound/) | class |  |
| [ZNPNode_ZPP_Constraint](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Constraint/) | class |  |
| [ZNPNode_ZPP_ConstraintListener](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_ConstraintListener/) | class |  |
| [ZNPNode_ZPP_CutInt](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_CutInt/) | class |  |
| [ZNPNode_ZPP_CutVert](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_CutVert/) | class |  |
| [ZNPNode_ZPP_Edge](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Edge/) | class |  |
| [ZNPNode_ZPP_FluidArbiter](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_FluidArbiter/) | class |  |
| [ZNPNode_ZPP_GeomPoly](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_GeomPoly/) | class |  |
| [ZNPNode_ZPP_GeomVert](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_GeomVert/) | class |  |
| [ZNPNode_ZPP_InteractionGroup](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_InteractionGroup/) | class |  |
| [ZNPNode_ZPP_InteractionListener](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_InteractionListener/) | class |  |
| [ZNPNode_ZPP_Interactor](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Interactor/) | class |  |
| [ZNPNode_ZPP_Listener](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Listener/) | class |  |
| [ZNPNode_ZPP_PartitionedPoly](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_PartitionedPoly/) | class |  |
| [ZNPNode_ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_PartitionVertex/) | class |  |
| [ZNPNode_ZPP_SensorArbiter](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_SensorArbiter/) | class |  |
| [ZNPNode_ZPP_Shape](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Shape/) | class |  |
| [ZNPNode_ZPP_SimpleEvent](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_SimpleEvent/) | class |  |
| [ZNPNode_ZPP_SimpleVert](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_SimpleVert/) | class |  |
| [ZNPNode_ZPP_SimplifyP](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_SimplifyP/) | class |  |
| [ZNPNode_ZPP_ToiEvent](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_ToiEvent/) | class |  |
| [ZNPNode_ZPP_Vec2](/api-docs/clay-web/zpp_nape/util/ZNPNode_ZPP_Vec2/) | class |  |
| [ZPP_ArbiterList](/api-docs/clay-web/zpp_nape/util/ZPP_ArbiterList/) | class |  |
| [ZPP_BodyList](/api-docs/clay-web/zpp_nape/util/ZPP_BodyList/) | class |  |
| [ZPP_CbTypeList](/api-docs/clay-web/zpp_nape/util/ZPP_CbTypeList/) | class |  |
| [ZPP_CompoundList](/api-docs/clay-web/zpp_nape/util/ZPP_CompoundList/) | class |  |
| [ZPP_ConstraintList](/api-docs/clay-web/zpp_nape/util/ZPP_ConstraintList/) | class |  |
| [ZPP_ContactList](/api-docs/clay-web/zpp_nape/util/ZPP_ContactList/) | class |  |
| [ZPP_ConvexResultList](/api-docs/clay-web/zpp_nape/util/ZPP_ConvexResultList/) | class |  |
| [ZPP_EdgeList](/api-docs/clay-web/zpp_nape/util/ZPP_EdgeList/) | class |  |
| [ZPP_Flags](/api-docs/clay-web/zpp_nape/util/ZPP_Flags/) | class |  |
| [ZPP_GeomPolyList](/api-docs/clay-web/zpp_nape/util/ZPP_GeomPolyList/) | class |  |
| [ZPP_InteractionGroupList](/api-docs/clay-web/zpp_nape/util/ZPP_InteractionGroupList/) | class |  |
| [ZPP_InteractorList](/api-docs/clay-web/zpp_nape/util/ZPP_InteractorList/) | class |  |
| [ZPP_ListenerList](/api-docs/clay-web/zpp_nape/util/ZPP_ListenerList/) | class |  |
| [ZPP_Math](/api-docs/clay-web/zpp_nape/util/ZPP_Math/) | class |  |
| [ZPP_MixVec2List](/api-docs/clay-web/zpp_nape/util/ZPP_MixVec2List/) | class |  |
| [ZPP_PubPool](/api-docs/clay-web/zpp_nape/util/ZPP_PubPool/) | class |  |
| [ZPP_RayResultList](/api-docs/clay-web/zpp_nape/util/ZPP_RayResultList/) | class |  |
| [ZPP_Set_ZPP_Body](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_Body/) | class |  |
| [ZPP_Set_ZPP_CbSet](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_CbSet/) | class |  |
| [ZPP_Set_ZPP_CbSetPair](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_CbSetPair/) | class |  |
| [ZPP_Set_ZPP_PartitionPair](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_PartitionPair/) | class |  |
| [ZPP_Set_ZPP_PartitionVertex](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_PartitionVertex/) | class |  |
| [ZPP_Set_ZPP_SimpleEvent](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleEvent/) | class |  |
| [ZPP_Set_ZPP_SimpleSeg](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleSeg/) | class |  |
| [ZPP_Set_ZPP_SimpleVert](/api-docs/clay-web/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/) | class |  |
| [ZPP_ShapeList](/api-docs/clay-web/zpp_nape/util/ZPP_ShapeList/) | class |  |
| [ZPP_Vec2List](/api-docs/clay-web/zpp_nape/util/ZPP_Vec2List/) | class |  |
| [ZPP_Const](/api-docs/clay-web/zpp_nape/ZPP_Const/) | class |  |
| [ZPP_ID](/api-docs/clay-web/zpp_nape/ZPP_ID/) | class |  |

## BinPacking

| Type | Kind | Description |
|------|------|-------------|
| [DisjointRectCollection](/api-docs/clay-web/binpacking/DisjointRectCollection/) | class |  |
| [FreeRectChoiceHeuristic](/api-docs/clay-web/binpacking/FreeRectChoiceHeuristic/) | abstract |  |
| [IOccupancy](/api-docs/clay-web/binpacking/IOccupancy/) | interface |  |
| [MaxRectsPacker](/api-docs/clay-web/binpacking/MaxRectsPacker/) | class |  |
| [MaxRectsPackerBestFitPosition](/api-docs/clay-web/binpacking/MaxRectsPackerBestFitPosition/) | class |  |
| [MaxRectsPackerRectScore](/api-docs/clay-web/binpacking/MaxRectsPackerRectScore/) | class |  |
| [Rect](/api-docs/clay-web/binpacking/Rect/) | class |  |
| [RectSize](/api-docs/clay-web/binpacking/RectSize/) | class |  |

## Hsluv

| Type | Kind | Description |
|------|------|-------------|
| [Angle](/api-docs/clay-web/hsluv/Angle/) | typedef |  |
| [Geometry](/api-docs/clay-web/hsluv/Geometry/) | class |  |
| [Hsluv](/api-docs/clay-web/hsluv/Hsluv/) | class | Human-friendly HSL conversion utility class. |
| [Line](/api-docs/clay-web/hsluv/Line/) | typedef |  |
| [Point](/api-docs/clay-web/hsluv/Point/) | typedef |  |

## Hscript

| Type | Kind | Description |
|------|------|-------------|
| [Argument](/api-docs/clay-web/hscript/Argument/) | typedef |  |
| [ClassDecl](/api-docs/clay-web/hscript/ClassDecl/) | typedef |  |
| [Const](/api-docs/clay-web/hscript/Const/) | enum |  |
| [CType](/api-docs/clay-web/hscript/CType/) | enum |  |
| [Error](/api-docs/clay-web/hscript/Error/) | class |  |
| [ErrorDef](/api-docs/clay-web/hscript/ErrorDef/) | enum |  |
| [Expr](/api-docs/clay-web/hscript/Expr/) | typedef |  |
| [ExprDef](/api-docs/clay-web/hscript/ExprDef/) | enum |  |
| [FieldAccess](/api-docs/clay-web/hscript/FieldAccess/) | enum |  |
| [FieldDecl](/api-docs/clay-web/hscript/FieldDecl/) | typedef |  |
| [FieldKind](/api-docs/clay-web/hscript/FieldKind/) | enum |  |
| [FunctionDecl](/api-docs/clay-web/hscript/FunctionDecl/) | typedef |  |
| [Interp](/api-docs/clay-web/hscript/Interp/) | class |  |
| [Metadata](/api-docs/clay-web/hscript/Metadata/) | typedef |  |
| [ModuleDecl](/api-docs/clay-web/hscript/ModuleDecl/) | enum |  |
| [ModuleType](/api-docs/clay-web/hscript/ModuleType/) | typedef |  |
| [Parser](/api-docs/clay-web/hscript/Parser/) | class |  |
| [Printer](/api-docs/clay-web/hscript/Printer/) | class |  |
| [Token](/api-docs/clay-web/hscript/Token/) | enum |  |
| [Tools](/api-docs/clay-web/hscript/Tools/) | class |  |
| [TypeDecl](/api-docs/clay-web/hscript/TypeDecl/) | typedef |  |
| [VarDecl](/api-docs/clay-web/hscript/VarDecl/) | typedef |  |
| [Stop](/api-docs/clay-web/hscript/_Interp/Stop/) | enum |  |

## Fuzzaldrin

| Type | Kind | Description |
|------|------|-------------|
| [Filter](/api-docs/clay-web/fuzzaldrin/Filter/) | class |  |
| [Fuzzaldrin](/api-docs/clay-web/fuzzaldrin/Fuzzaldrin/) | class |  |
| [Matcher](/api-docs/clay-web/fuzzaldrin/Matcher/) | class |  |
| [Scorer](/api-docs/clay-web/fuzzaldrin/Scorer/) | class |  |

## Polyline

| Type | Kind | Description |
|------|------|-------------|
| [Extensions](/api-docs/clay-web/polyline/Extensions/) | class |  |
| [MiterUtils](/api-docs/clay-web/polyline/MiterUtils/) | class |  |
| [Stroke](/api-docs/clay-web/polyline/Stroke/) | class |  |
| [StrokeCap](/api-docs/clay-web/polyline/StrokeCap/) | enum |  |
| [StrokeJoin](/api-docs/clay-web/polyline/StrokeJoin/) | enum |  |

## Spec

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/clay-web/spec/Audio/) | interface | Backend interface for audio operations. |
| [Backend](/api-docs/clay-web/spec/Backend/) | interface | Main backend interface that provides access to all platform-specific functionality. |
| [Binaries](/api-docs/clay-web/spec/Binaries/) | interface | Backend interface for binary data loading operations. |
| [Clipboard](/api-docs/clay-web/spec/Clipboard/) | interface | Backend interface for system clipboard operations. |
| [Input](/api-docs/clay-web/spec/Input/) | interface | Backend interface for input handling. |
| [IO](/api-docs/clay-web/spec/IO/) | interface | Backend interface for file input/output operations. |
| [Shaders](/api-docs/clay-web/spec/Shaders/) | interface | Backend interface for GPU shader program management. |
| [TextInput](/api-docs/clay-web/spec/TextInput/) | interface | Backend interface for system text input handling. |
| [Texts](/api-docs/clay-web/spec/Texts/) | interface | Backend interface for text file loading operations. |
| [Textures](/api-docs/clay-web/spec/Textures/) | interface | Backend interface for texture (image) management and GPU operations. |

## Other

| Type | Kind | Description |
|------|------|-------------|
| [AllAssets](/api-docs/clay-web/assets/AllAssets/) | class |  |
| [Project](/api-docs/clay-web/Project/) | class |  |

## Haxe

| Type | Kind | Description |
|------|------|-------------|
| [Any](/api-docs/clay-web/Any/) | abstract | `Any` is a type that is compatible with any other in both ways. |
| [Array](/api-docs/clay-web/Array/) | class | An Array is a storage for values. You can access it using indexes or |
| [ArrayAccess](/api-docs/clay-web/ArrayAccess/) | interface | `ArrayAccess` is used to indicate a class that can be accessed using brackets. |
| [Bool](/api-docs/clay-web/Bool/) | abstract | The standard Boolean type, which can either be `true` or `false`. |
| [Class](/api-docs/clay-web/Class/) | abstract | An abstract type that represents a Class. |
| [Date](/api-docs/clay-web/Date/) | class | The Date class provides a basic structure for date and time related |
| [Dynamic](/api-docs/clay-web/Dynamic/) | abstract | `Dynamic` is a special type which is compatible with all other types. |
| [Enum](/api-docs/clay-web/Enum/) | abstract | An abstract type that represents an Enum type. |
| [EnumValue](/api-docs/clay-web/EnumValue/) | abstract | An abstract type that represents any enum value. |
| [EReg](/api-docs/clay-web/EReg/) | class | The EReg class represents regular expressions. |
| [Float](/api-docs/clay-web/Float/) | abstract | The standard `Float` type, this is a double-precision IEEE 64bit float. |
| [CallStack](/api-docs/clay-web/haxe/CallStack/) | abstract | Get information about the call stack. |
| [Constructible](/api-docs/clay-web/haxe/Constructible/) | abstract | This type unifies with any instance of classes that have a constructor |
| [Adler32](/api-docs/clay-web/haxe/crypto/Adler32/) | class | Calculates the Adler32 of the given Bytes. |
| [Base64](/api-docs/clay-web/haxe/crypto/Base64/) | class | Allows one to encode/decode String and bytes using Base64 encoding. |
| [BaseCode](/api-docs/clay-web/haxe/crypto/BaseCode/) | class | Allows one to encode/decode String and bytes using a power of two base dictionary. |
| [HashMethod](/api-docs/clay-web/haxe/crypto/HashMethod/) | enum | Hash methods for Hmac calculation. |
| [Hmac](/api-docs/clay-web/haxe/crypto/Hmac/) | class | Calculates a Hmac of the given Bytes using a HashMethod. |
| [Md5](/api-docs/clay-web/haxe/crypto/Md5/) | class | Creates a MD5 of a String. |
| [Sha1](/api-docs/clay-web/haxe/crypto/Sha1/) | class | Creates a Sha1 of a String. |
| [Sha256](/api-docs/clay-web/haxe/crypto/Sha256/) | class | Creates a Sha256 of a String. |
| [ArraySort](/api-docs/clay-web/haxe/ds/ArraySort/) | class | ArraySort provides a stable implementation of merge sort through its `sort` |
| [BalancedTree](/api-docs/clay-web/haxe/ds/BalancedTree/) | class | BalancedTree allows key-value mapping with arbitrary keys, as long as they |
| [EnumValueMap](/api-docs/clay-web/haxe/ds/EnumValueMap/) | class | EnumValueMap allows mapping of enum value keys to arbitrary values. |
| [IntMap](/api-docs/clay-web/haxe/ds/IntMap/) | class | IntMap allows mapping of Int keys to arbitrary values. |
| [List](/api-docs/clay-web/haxe/ds/List/) | class | A linked-list of elements. The list is composed of element container objects |
| [Map](/api-docs/clay-web/haxe/ds/Map/) | abstract | Map allows key to value mapping for arbitrary value types, and many key |
| [ObjectMap](/api-docs/clay-web/haxe/ds/ObjectMap/) | class | ObjectMap allows mapping of object keys to arbitrary values. |
| [ReadOnlyArray](/api-docs/clay-web/haxe/ds/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [StringMap](/api-docs/clay-web/haxe/ds/StringMap/) | class | StringMap allows mapping of String keys to arbitrary values. |
| [TreeNode](/api-docs/clay-web/haxe/ds/TreeNode/) | class | A tree node of `haxe.ds.BalancedTree`. |
| [Vector](/api-docs/clay-web/haxe/ds/Vector/) | abstract | A Vector is a storage of fixed size. It can be faster than Array on some |
| [DynamicAccess](/api-docs/clay-web/haxe/DynamicAccess/) | abstract | DynamicAccess is an abstract type for working with anonymous structures |
| [EnumTools](/api-docs/clay-web/haxe/EnumTools/) | class | This class provides advanced methods on enums. It is ideally used with |
| [EnumValueTools](/api-docs/clay-web/haxe/EnumValueTools/) | class | This class provides advanced methods on enum values. It is ideally used with |
| [Exception](/api-docs/clay-web/haxe/Exception/) | class | Base class for exceptions. |
| [NotImplementedException](/api-docs/clay-web/haxe/exceptions/NotImplementedException/) | class | An exception that is thrown when requested function or operation does not have an implementation. |
| [PosException](/api-docs/clay-web/haxe/exceptions/PosException/) | class | An exception that carry position information of a place where it was created. |
| [EitherType](/api-docs/clay-web/haxe/extern/EitherType/) | abstract | An abstract type allowing values to be either of `T1` or `T2` type. |
| [Rest](/api-docs/clay-web/haxe/extern/Rest/) | typedef | DEPRECATED: use haxe.Rest instead. |
| [FlatEnum](/api-docs/clay-web/haxe/FlatEnum/) | abstract | This type unifies with an enum instance if all constructors of the enum |
| [Function](/api-docs/clay-web/haxe/Function/) | abstract | This type unifies with any function type. |
| [IMap](/api-docs/clay-web/haxe/IMap/) | interface |  |
| [Int32](/api-docs/clay-web/haxe/Int32/) | abstract | Int32 provides a 32-bit integer with consistent overflow behavior across |
| [Int64](/api-docs/clay-web/haxe/Int64/) | abstract | A cross-platform signed 64-bit integer. |
| [ArrayBufferView](/api-docs/clay-web/haxe/io/ArrayBufferView/) | abstract |  |
| [ArrayBufferViewData](/api-docs/clay-web/haxe/io/ArrayBufferViewData/) | typedef |  |
| [Bytes](/api-docs/clay-web/haxe/io/Bytes/) | class |  |
| [BytesBuffer](/api-docs/clay-web/haxe/io/BytesBuffer/) | class |  |
| [BytesData](/api-docs/clay-web/haxe/io/BytesData/) | typedef |  |
| [BytesInput](/api-docs/clay-web/haxe/io/BytesInput/) | class |  |
| [BytesOutput](/api-docs/clay-web/haxe/io/BytesOutput/) | class |  |
| [Encoding](/api-docs/clay-web/haxe/io/Encoding/) | enum | String binary encoding supported by Haxe I/O |
| [Eof](/api-docs/clay-web/haxe/io/Eof/) | class | This exception is raised when reading while data is no longer available in the `haxe.io.Input`. |
| [Error](/api-docs/clay-web/haxe/io/Error/) | enum | The possible IO errors that can occur |
| [FPHelper](/api-docs/clay-web/haxe/io/FPHelper/) | class | Helper that converts between floating point and binary representation. |
| [Input](/api-docs/clay-web/haxe/io/Input/) | class | An Input is an abstract reader. See other classes in the `haxe.io` package |
| [Int32Array](/api-docs/clay-web/haxe/io/Int32Array/) | abstract |  |
| [Int32ArrayData](/api-docs/clay-web/haxe/io/Int32ArrayData/) | typedef |  |
| [Output](/api-docs/clay-web/haxe/io/Output/) | class | An Output is an abstract write. A specific output implementation will only |
| [Path](/api-docs/clay-web/haxe/io/Path/) | class | This class provides a convenient way of working with paths. It supports the |
| [StringInput](/api-docs/clay-web/haxe/io/StringInput/) | class |  |
| [UInt8Array](/api-docs/clay-web/haxe/io/UInt8Array/) | abstract |  |
| [UInt8ArrayData](/api-docs/clay-web/haxe/io/UInt8ArrayData/) | typedef |  |
| [ArrayIterator](/api-docs/clay-web/haxe/iterators/ArrayIterator/) | class | This iterator is used only when `Array<T>` is passed to `Iterable<T>` |
| [ArrayKeyValueIterator](/api-docs/clay-web/haxe/iterators/ArrayKeyValueIterator/) | class |  |
| [DynamicAccessKeyValueIterator](/api-docs/clay-web/haxe/iterators/DynamicAccessKeyValueIterator/) | class | This Key/Value iterator can be used to iterate over `haxe.DynamicAccess`. |
| [MapKeyValueIterator](/api-docs/clay-web/haxe/iterators/MapKeyValueIterator/) | class | This Key/Value iterator can be used to iterate across maps. |
| [StringIteratorUnicode](/api-docs/clay-web/haxe/iterators/StringIteratorUnicode/) | class | This iterator can be used to iterate across strings in a cross-platform |
| [Json](/api-docs/clay-web/haxe/Json/) | class | Cross-platform JSON API: it will automatically use the optimized native API if available. |
| [Log](/api-docs/clay-web/haxe/Log/) | class | Log primarily provides the `trace()` method, which is invoked upon a call to |
| [AbstractType](/api-docs/clay-web/haxe/macro/AbstractType/) | typedef | Represents an abstract type. |
| [AnonType](/api-docs/clay-web/haxe/macro/AnonType/) | typedef | Represents information for anonymous structure types. |
| [BaseType](/api-docs/clay-web/haxe/macro/BaseType/) | typedef | The information that all types (`ClassType`, `EnumType`, `DefType`, |
| [Case](/api-docs/clay-web/haxe/macro/Case/) | typedef | Represents a switch case. |
| [Catch](/api-docs/clay-web/haxe/macro/Catch/) | typedef | Represents a catch in the AST. |
| [ClassField](/api-docs/clay-web/haxe/macro/ClassField/) | typedef | Represents a class field. |
| [ClassType](/api-docs/clay-web/haxe/macro/ClassType/) | typedef | Represents a class type. |
| [DefType](/api-docs/clay-web/haxe/macro/DefType/) | typedef | Represents a typedef. |
| [EnumField](/api-docs/clay-web/haxe/macro/EnumField/) | typedef | Represents an enum constructor. |
| [EnumType](/api-docs/clay-web/haxe/macro/EnumType/) | typedef | Represents an enum type. |
| [Expr](/api-docs/clay-web/haxe/macro/Expr/) | typedef | Represents a node in the AST. |
| [ExprOf](/api-docs/clay-web/haxe/macro/ExprOf/) | typedef | Represents a AST node identical to `Expr`, but it allows constraining the |
| [Field](/api-docs/clay-web/haxe/macro/Field/) | typedef | Represents a field in the AST. |
| [Function](/api-docs/clay-web/haxe/macro/Function/) | typedef | Represents a function in the AST. |
| [FunctionArg](/api-docs/clay-web/haxe/macro/FunctionArg/) | typedef | Represents a function argument in the AST. |
| [ImportExpr](/api-docs/clay-web/haxe/macro/ImportExpr/) | typedef | Represents the import expression. |
| [MetaAccess](/api-docs/clay-web/haxe/macro/MetaAccess/) | typedef | MetaAccess is a wrapper for the `Metadata` array. It can be used to add |
| [Metadata](/api-docs/clay-web/haxe/macro/Metadata/) | typedef | Represents metadata in the AST. |
| [MetadataEntry](/api-docs/clay-web/haxe/macro/MetadataEntry/) | typedef | Represents a metadata entry in the AST. |
| [ObjectField](/api-docs/clay-web/haxe/macro/ObjectField/) | typedef | Represents the field of an object declaration. |
| [Position](/api-docs/clay-web/haxe/macro/Position/) | typedef | Represents a position in a file. |
| [Ref](/api-docs/clay-web/haxe/macro/Ref/) | typedef | Represents a reference to internal compiler structure. It exists to avoid |
| [TFunc](/api-docs/clay-web/haxe/macro/TFunc/) | typedef | Represents a function in the typed AST. |
| [TVar](/api-docs/clay-web/haxe/macro/TVar/) | typedef | Represents a variable in the typed AST. |
| [TypeDefinition](/api-docs/clay-web/haxe/macro/TypeDefinition/) | typedef | Represents a type definition. |
| [TypedExpr](/api-docs/clay-web/haxe/macro/TypedExpr/) | typedef | Represents a typed AST node. |
| [TypeParamDecl](/api-docs/clay-web/haxe/macro/TypeParamDecl/) | typedef | Represents a type parameter declaration in the AST. |
| [TypeParameter](/api-docs/clay-web/haxe/macro/TypeParameter/) | typedef | Represents the declaration of type parameters. |
| [TypePath](/api-docs/clay-web/haxe/macro/TypePath/) | typedef | Represents a type path in the AST. |
| [Var](/api-docs/clay-web/haxe/macro/Var/) | typedef | Represents a variable in the AST. |
| [NotVoid](/api-docs/clay-web/haxe/NotVoid/) | abstract | This type unifies with anything but `Void`. |
| [PosInfos](/api-docs/clay-web/haxe/PosInfos/) | typedef | `PosInfos` is a magic type which can be used to generate position information |
| [Rest](/api-docs/clay-web/haxe/Rest/) | abstract | A special type that represents a "rest" function argument. |
| [Abstractdef](/api-docs/clay-web/haxe/rtti/Abstractdef/) | typedef | The abstract type runtime information. |
| [Classdef](/api-docs/clay-web/haxe/rtti/Classdef/) | typedef | The runtime class definition information. |
| [ClassField](/api-docs/clay-web/haxe/rtti/ClassField/) | typedef | The runtime class field information. |
| [CType](/api-docs/clay-web/haxe/rtti/CType/) | enum | The runtime member types. |
| [Enumdef](/api-docs/clay-web/haxe/rtti/Enumdef/) | typedef | The enum runtime type information. |
| [EnumField](/api-docs/clay-web/haxe/rtti/EnumField/) | typedef | The runtime enum constructor information. |
| [FunctionArgument](/api-docs/clay-web/haxe/rtti/FunctionArgument/) | typedef | The function argument runtime type information. |
| [Meta](/api-docs/clay-web/haxe/rtti/Meta/) | class | An API to access classes and enums metadata at runtime. |
| [MetaData](/api-docs/clay-web/haxe/rtti/MetaData/) | typedef | The list of runtime metadata. |
| [Path](/api-docs/clay-web/haxe/rtti/Path/) | typedef | The (dot-)path of the runtime type. |
| [PathParams](/api-docs/clay-web/haxe/rtti/PathParams/) | typedef | The type parameters in the runtime type information. |
| [Platforms](/api-docs/clay-web/haxe/rtti/Platforms/) | typedef | A list of strings representing the targets where the type is available. |
| [Rights](/api-docs/clay-web/haxe/rtti/Rights/) | enum | Represents the runtime rights of a type. |
| [Rtti](/api-docs/clay-web/haxe/rtti/Rtti/) | class | Rtti is a helper class which supplements the `@:rtti` metadata. |
| [Typedef](/api-docs/clay-web/haxe/rtti/Typedef/) | typedef | The typedef runtime information. |
| [TypeInfos](/api-docs/clay-web/haxe/rtti/TypeInfos/) | typedef | The general runtime type information. |
| [TypeParams](/api-docs/clay-web/haxe/rtti/TypeParams/) | typedef | An array of strings representing the names of the type parameters the type |
| [TypeRoot](/api-docs/clay-web/haxe/rtti/TypeRoot/) | typedef | Array of `TypeTree`. |
| [TypeTree](/api-docs/clay-web/haxe/rtti/TypeTree/) | enum | The tree types of the runtime type. |
| [XmlParser](/api-docs/clay-web/haxe/rtti/XmlParser/) | class | XmlParser processes the runtime type information (RTTI) which |
| [Serializer](/api-docs/clay-web/haxe/Serializer/) | class | The Serializer class can be used to encode values and objects into a `String`, |
| [StackItem](/api-docs/clay-web/haxe/StackItem/) | enum | Elements return by `CallStack` methods. |
| [SysTools](/api-docs/clay-web/haxe/SysTools/) | class |  |
| [Unserializer](/api-docs/clay-web/haxe/Unserializer/) | class | The `Unserializer` class is the complement to the `Serializer` class. It parses |
| [V8CallSite](/api-docs/clay-web/haxe/V8CallSite/) | typedef |  |
| [ValueException](/api-docs/clay-web/haxe/ValueException/) | class | An exception containing arbitrary value. |
| [Access](/api-docs/clay-web/haxe/xml/Access/) | abstract | The `haxe.xml.Access` API helps providing a fast dot-syntax access to the |
| [Parser](/api-docs/clay-web/haxe/xml/Parser/) | class |  |
| [Printer](/api-docs/clay-web/haxe/xml/Printer/) | class | This class provides utility methods to convert Xml instances to |
| [XmlParserException](/api-docs/clay-web/haxe/xml/XmlParserException/) | class |  |
| [Compress](/api-docs/clay-web/haxe/zip/Compress/) | class |  |
| [Huffman](/api-docs/clay-web/haxe/zip/Huffman/) | enum |  |
| [HuffTools](/api-docs/clay-web/haxe/zip/HuffTools/) | class |  |
| [InflateImpl](/api-docs/clay-web/haxe/zip/InflateImpl/) | class | A pure Haxe implementation of the ZLIB Inflate algorithm which allows reading compressed data wit... |
| [Int](/api-docs/clay-web/Int/) | abstract | The standard `Int` type. Its precision depends on the platform. |
| [IntIterator](/api-docs/clay-web/IntIterator/) | class | IntIterator is used for implementing interval iterations. |
| [Iterable](/api-docs/clay-web/Iterable/) | typedef | An `Iterable` is a data structure which has an `iterator()` method. |
| [Iterator](/api-docs/clay-web/Iterator/) | typedef | An `Iterator` is a structure that permits iteration over elements of type `T`. |
| [Browser](/api-docs/clay-web/js/Browser/) | class |  |
| [AbortSignal](/api-docs/clay-web/js/html/AbortSignal/) | class | The `AbortSignal` interface represents a signal object that allows you to communicate with a DOM ... |
| [AddEventListenerOptions](/api-docs/clay-web/js/html/AddEventListenerOptions/) | typedef |  |
| [AlignSetting](/api-docs/clay-web/js/html/AlignSetting/) | abstract |  |
| [AnchorElement](/api-docs/clay-web/js/html/AnchorElement/) | class | The `HTMLAnchorElement` interface represents hyperlink elements and provides special properties a... |
| [Animation](/api-docs/clay-web/js/html/Animation/) | class | The `Animation` interface of the Web Animations API represents a single animation player and prov... |
| [AnimationEffect](/api-docs/clay-web/js/html/AnimationEffect/) | class | The `AnimationEffect` interface of the Web Animations API defines current and future animation ef... |
| [AnimationFilter](/api-docs/clay-web/js/html/AnimationFilter/) | typedef |  |
| [AnimationPlayState](/api-docs/clay-web/js/html/AnimationPlayState/) | abstract |  |
| [AnimationTimeline](/api-docs/clay-web/js/html/AnimationTimeline/) | class | The `AnimationTimeline` interface of the Web Animations API represents the timeline of an animation. |
| [AreaElement](/api-docs/clay-web/js/html/AreaElement/) | class | The `HTMLAreaElement` interface provides special properties and methods (beyond those of the regu... |
| [AssignedNodesOptions](/api-docs/clay-web/js/html/AssignedNodesOptions/) | typedef |  |
| [Attr](/api-docs/clay-web/js/html/Attr/) | class | This type represents a DOM element's attribute as an object. |
| [Audio](/api-docs/clay-web/js/html/Audio/) | class |  |
| [AnalyserNode](/api-docs/clay-web/js/html/audio/AnalyserNode/) | class | The `AnalyserNode` interface represents a node able to provide real-time frequency and time-domai... |
| [AnalyserOptions](/api-docs/clay-web/js/html/audio/AnalyserOptions/) | typedef |  |
| [AudioBuffer](/api-docs/clay-web/js/html/audio/AudioBuffer/) | class | Objects of these types are designed to hold small audio snippets, typically less than 45 s. |
| [AudioBufferOptions](/api-docs/clay-web/js/html/audio/AudioBufferOptions/) | typedef |  |
| [AudioBufferSourceNode](/api-docs/clay-web/js/html/audio/AudioBufferSourceNode/) | class | The `AudioBufferSourceNode` interface is an `AudioScheduledSourceNode` which represents an audio ... |
| [AudioBufferSourceOptions](/api-docs/clay-web/js/html/audio/AudioBufferSourceOptions/) | typedef |  |
| [AudioContext](/api-docs/clay-web/js/html/audio/AudioContext/) | class | The `AudioContext` interface represents an audio-processing graph built from audio modules linked... |
| [AudioContextOptions](/api-docs/clay-web/js/html/audio/AudioContextOptions/) | typedef | The `AudioContextOptions` dictionary is used to specify configuration options when constructing a... |
| [AudioContextState](/api-docs/clay-web/js/html/audio/AudioContextState/) | abstract |  |
| [AudioDestinationNode](/api-docs/clay-web/js/html/audio/AudioDestinationNode/) | class | `AudioDestinationNode` has no output (as it is the output, no more `AudioNode` can be linked afte... |
| [AudioListener](/api-docs/clay-web/js/html/audio/AudioListener/) | class | It is important to note that there is only one listener per context and that it isn't an `AudioNo... |
| [AudioNode](/api-docs/clay-web/js/html/audio/AudioNode/) | class | The `AudioNode` interface is a generic interface for representing an audio processing module. |
| [AudioNodeOptions](/api-docs/clay-web/js/html/audio/AudioNodeOptions/) | typedef | The `AudioNodeOptions` dictionary of the Web Audio API specifies options that can be used when cr... |
| [AudioParam](/api-docs/clay-web/js/html/audio/AudioParam/) | class | The Web Audio API's `AudioParam` interface represents an audio-related parameter, usually a param... |
| [AudioScheduledSourceNode](/api-docs/clay-web/js/html/audio/AudioScheduledSourceNode/) | class | The `AudioScheduledSourceNode` interface—part of the Web Audio API—is a parent interface for seve... |
| [BaseAudioContext](/api-docs/clay-web/js/html/audio/BaseAudioContext/) | class | The `BaseAudioContext` interface acts as a base definition for online and offline audio-processin... |
| [BiquadFilterNode](/api-docs/clay-web/js/html/audio/BiquadFilterNode/) | class | The `BiquadFilterNode` interface represents a simple low-order filter, and is created using the `... |
| [BiquadFilterOptions](/api-docs/clay-web/js/html/audio/BiquadFilterOptions/) | typedef |  |
| [BiquadFilterType](/api-docs/clay-web/js/html/audio/BiquadFilterType/) | abstract |  |
| [ChannelCountMode](/api-docs/clay-web/js/html/audio/ChannelCountMode/) | abstract |  |
| [ChannelInterpretation](/api-docs/clay-web/js/html/audio/ChannelInterpretation/) | abstract |  |
| [ChannelMergerNode](/api-docs/clay-web/js/html/audio/ChannelMergerNode/) | class |  |
| [ChannelMergerOptions](/api-docs/clay-web/js/html/audio/ChannelMergerOptions/) | typedef |  |
| [ChannelSplitterNode](/api-docs/clay-web/js/html/audio/ChannelSplitterNode/) | class |  |
| [ChannelSplitterOptions](/api-docs/clay-web/js/html/audio/ChannelSplitterOptions/) | typedef |  |
| [ConstantSourceNode](/api-docs/clay-web/js/html/audio/ConstantSourceNode/) | class | The `ConstantSourceNode` interface—part of the Web Audio API—represents an audio source (based up... |
| [ConstantSourceOptions](/api-docs/clay-web/js/html/audio/ConstantSourceOptions/) | typedef |  |
| [ConvolverNode](/api-docs/clay-web/js/html/audio/ConvolverNode/) | class | The `ConvolverNode` interface is an `AudioNode` that performs a Linear Convolution on a given `Au... |
| [ConvolverOptions](/api-docs/clay-web/js/html/audio/ConvolverOptions/) | typedef |  |
| [DelayNode](/api-docs/clay-web/js/html/audio/DelayNode/) | class | The `DelayNode` interface represents a delay-line; an `AudioNode` audio-processing module that ca... |
| [DelayOptions](/api-docs/clay-web/js/html/audio/DelayOptions/) | typedef |  |
| [DistanceModelType](/api-docs/clay-web/js/html/audio/DistanceModelType/) | abstract |  |
| [DynamicsCompressorNode](/api-docs/clay-web/js/html/audio/DynamicsCompressorNode/) | class | Inherits properties from its parent, `AudioNode`. |
| [DynamicsCompressorOptions](/api-docs/clay-web/js/html/audio/DynamicsCompressorOptions/) | typedef |  |
| [GainNode](/api-docs/clay-web/js/html/audio/GainNode/) | class | The `GainNode` interface represents a change in volume. |
| [GainOptions](/api-docs/clay-web/js/html/audio/GainOptions/) | typedef |  |
| [IIRFilterNode](/api-docs/clay-web/js/html/audio/IIRFilterNode/) | class | The `IIRFilterNode` interface of the Web Audio API is a `AudioNode` processor which implements a ... |
| [IIRFilterOptions](/api-docs/clay-web/js/html/audio/IIRFilterOptions/) | typedef |  |
| [MediaElementAudioSourceNode](/api-docs/clay-web/js/html/audio/MediaElementAudioSourceNode/) | class | A `MediaElementSourceNode` has no inputs and exactly one output, and is created using the `AudioC... |
| [MediaElementAudioSourceOptions](/api-docs/clay-web/js/html/audio/MediaElementAudioSourceOptions/) | typedef |  |
| [MediaStreamAudioDestinationNode](/api-docs/clay-web/js/html/audio/MediaStreamAudioDestinationNode/) | class | Inherits properties from its parent, `AudioNode`. |
| [MediaStreamAudioSourceNode](/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceNode/) | class | A `MediaStreamAudioSourceNode` has no inputs and exactly one output, and is created using the `Au... |
| [MediaStreamAudioSourceOptions](/api-docs/clay-web/js/html/audio/MediaStreamAudioSourceOptions/) | typedef |  |
| [OscillatorNode](/api-docs/clay-web/js/html/audio/OscillatorNode/) | class | The `OscillatorNode` interface represents a periodic waveform, such as a sine wave. |
| [OscillatorOptions](/api-docs/clay-web/js/html/audio/OscillatorOptions/) | typedef |  |
| [OscillatorType](/api-docs/clay-web/js/html/audio/OscillatorType/) | abstract |  |
| [OverSampleType](/api-docs/clay-web/js/html/audio/OverSampleType/) | abstract |  |
| [PannerNode](/api-docs/clay-web/js/html/audio/PannerNode/) | class | A `PannerNode` always has exactly one input and one output: the input can be mono or stereo but t... |
| [PannerOptions](/api-docs/clay-web/js/html/audio/PannerOptions/) | typedef |  |
| [PanningModelType](/api-docs/clay-web/js/html/audio/PanningModelType/) | abstract |  |
| [PeriodicWave](/api-docs/clay-web/js/html/audio/PeriodicWave/) | class | `PeriodicWave` has no inputs or outputs; it is used to define custom oscillators when calling `Os... |
| [PeriodicWaveConstraints](/api-docs/clay-web/js/html/audio/PeriodicWaveConstraints/) | typedef |  |
| [PeriodicWaveOptions](/api-docs/clay-web/js/html/audio/PeriodicWaveOptions/) | typedef |  |
| [ScriptProcessorNode](/api-docs/clay-web/js/html/audio/ScriptProcessorNode/) | class | Documentation [ScriptProcessorNode](https://developer. |
| [StereoPannerNode](/api-docs/clay-web/js/html/audio/StereoPannerNode/) | class | The `pan` property takes a unitless value between `-1` (full left pan) and `1` (full right pan). |
| [StereoPannerOptions](/api-docs/clay-web/js/html/audio/StereoPannerOptions/) | typedef |  |
| [WaveShaperNode](/api-docs/clay-web/js/html/audio/WaveShaperNode/) | class | A `WaveShaperNode` always has exactly one input and one output. |
| [WaveShaperOptions](/api-docs/clay-web/js/html/audio/WaveShaperOptions/) | typedef |  |
| [AudioElement](/api-docs/clay-web/js/html/AudioElement/) | class | The `HTMLAudioElement` interface provides access to the properties of `audio` elements, as well a... |
| [AudioStreamTrack](/api-docs/clay-web/js/html/AudioStreamTrack/) | class |  |
| [AudioTrack](/api-docs/clay-web/js/html/AudioTrack/) | class | The `AudioTrack` interface represents a single audio track from one of the HTML media elements, `... |
| [AudioTrackList](/api-docs/clay-web/js/html/AudioTrackList/) | class | The `AudioTrackList` interface is used to represent a list of the audio tracks contained within a... |
| [AutoKeyword](/api-docs/clay-web/js/html/AutoKeyword/) | abstract |  |
| [BarProp](/api-docs/clay-web/js/html/BarProp/) | class |  |
| [BaseElement](/api-docs/clay-web/js/html/BaseElement/) | class | The `HTMLBaseElement` interface contains the base URI for a document. |
| [Blob](/api-docs/clay-web/js/html/Blob/) | class | A `Blob` object represents a file-like object of immutable, raw data. |
| [BlobPropertyBag](/api-docs/clay-web/js/html/BlobPropertyBag/) | typedef |  |
| [BodyElement](/api-docs/clay-web/js/html/BodyElement/) | class | The `HTMLBodyElement` interface provides special properties (beyond those of the regular `HTMLEle... |
| [BRElement](/api-docs/clay-web/js/html/BRElement/) | class | The `HTMLBRElement` interface represents a HTML line break element (`br`). |
| [ButtonElement](/api-docs/clay-web/js/html/ButtonElement/) | class | The `HTMLButtonElement` interface provides properties and methods (beyond the `button` object int... |
| [Cache](/api-docs/clay-web/js/html/Cache/) | class | The `Cache` interface provides a storage mechanism for `Request` / `Response` object pairs that a... |
| [CacheQueryOptions](/api-docs/clay-web/js/html/CacheQueryOptions/) | typedef |  |
| [CacheStorage](/api-docs/clay-web/js/html/CacheStorage/) | class | The `CacheStorage` interface represents the storage for `Cache` objects. |
| [CacheStorageNamespace](/api-docs/clay-web/js/html/CacheStorageNamespace/) | abstract |  |
| [CanvasCaptureMediaStream](/api-docs/clay-web/js/html/CanvasCaptureMediaStream/) | class |  |
| [CanvasElement](/api-docs/clay-web/js/html/CanvasElement/) | class | The `HTMLCanvasElement` interface provides properties and methods for manipulating the layout and... |
| [CanvasGradient](/api-docs/clay-web/js/html/CanvasGradient/) | class | The `CanvasGradient` interface represents an opaque object describing a gradient. |
| [CanvasPattern](/api-docs/clay-web/js/html/CanvasPattern/) | class | The `CanvasPattern` interface represents an opaque object describing a pattern, based on an image... |
| [CanvasRenderingContext2D](/api-docs/clay-web/js/html/CanvasRenderingContext2D/) | class | To get an object of this interface, call `getContext()` on a `canvas element`, supplying "2d" as ... |
| [CanvasWindingRule](/api-docs/clay-web/js/html/CanvasWindingRule/) | abstract |  |
| [CaretPosition](/api-docs/clay-web/js/html/CaretPosition/) | class | The `CaretPosition` interface represents the caret postion, an indicator for the text insertion p... |
| [CDATASection](/api-docs/clay-web/js/html/CDATASection/) | class | The `CDATASection` interface represents a CDATA section that can be used within XML to include ex... |
| [ChannelPixelLayout](/api-docs/clay-web/js/html/ChannelPixelLayout/) | typedef |  |
| [ChannelPixelLayoutDataType](/api-docs/clay-web/js/html/ChannelPixelLayoutDataType/) | abstract |  |
| [CharacterData](/api-docs/clay-web/js/html/CharacterData/) | class | The `CharacterData` abstract interface represents a `Node` object that contains characters. |
| [Clipboard](/api-docs/clay-web/js/html/Clipboard/) | class | The `Clipboard` interface implements the Clipboard API, providing—if the user grants permission—b... |
| [Comment](/api-docs/clay-web/js/html/Comment/) | class | The `Comment` interface represents textual notations within markup; although it is generally not ... |
| [CompositeOperation](/api-docs/clay-web/js/html/CompositeOperation/) | abstract |  |
| [ComputedEffectTiming](/api-docs/clay-web/js/html/ComputedEffectTiming/) | typedef |  |
| [ConsoleInstance](/api-docs/clay-web/js/html/ConsoleInstance/) | interface | The `Console` object provides access to the browser's debugging console (e. |
| [ConstrainBooleanParameters](/api-docs/clay-web/js/html/ConstrainBooleanParameters/) | typedef |  |
| [ConstrainDOMStringParameters](/api-docs/clay-web/js/html/ConstrainDOMStringParameters/) | typedef |  |
| [ConstrainDoubleRange](/api-docs/clay-web/js/html/ConstrainDoubleRange/) | typedef |  |
| [ConstrainLongRange](/api-docs/clay-web/js/html/ConstrainLongRange/) | typedef |  |
| [ConvertCoordinateOptions](/api-docs/clay-web/js/html/ConvertCoordinateOptions/) | typedef |  |
| [Coordinates](/api-docs/clay-web/js/html/Coordinates/) | typedef | The `Coordinates` interface represents the position and altitude of the device on Earth, as well ... |
| [Crypto](/api-docs/clay-web/js/html/Crypto/) | class | The `Crypto` interface represents basic cryptography features available in the current context. |
| [CryptoKey](/api-docs/clay-web/js/html/CryptoKey/) | class | The `CryptoKey` interface represents a cryptographic key derived from a specific key algorithm. |
| [CSSBoxType](/api-docs/clay-web/js/html/CSSBoxType/) | abstract |  |
| [CSSRule](/api-docs/clay-web/js/html/CSSRule/) | class | The `CSSRule` interface represents a single CSS rule. |
| [CSSRuleList](/api-docs/clay-web/js/html/CSSRuleList/) | class | A `CSSRuleList` is an (indirect-modify only) array-like object containing an ordered collection o... |
| [CSSStyleDeclaration](/api-docs/clay-web/js/html/CSSStyleDeclaration/) | class | `CSSStyleDeclaration` represents a collection of CSS property-value pairs. It is used in a few APIs: |
| [CSSStyleSheet](/api-docs/clay-web/js/html/CSSStyleSheet/) | class | The `CSSStyleSheet` interface represents a single CSS style sheet. |
| [DataListElement](/api-docs/clay-web/js/html/DataListElement/) | class | The `HTMLDataListElement` interface provides special properties (beyond the `HTMLElement` object ... |
| [DataTransfer](/api-docs/clay-web/js/html/DataTransfer/) | class | The `DataTransfer` object is used to hold the data that is being dragged during a drag and drop o... |
| [DataTransferItem](/api-docs/clay-web/js/html/DataTransferItem/) | class | The `DataTransferItem` object represents one drag data item. |
| [DataTransferItemList](/api-docs/clay-web/js/html/DataTransferItemList/) | class | The `DataTransferItemList` object is a list of `DataTransferItem` objects representing items bein... |
| [DetailsElement](/api-docs/clay-web/js/html/DetailsElement/) | class | The `HTMLDetailsElement` interface provides special properties (beyond the regular `HTMLElement` ... |
| [DialogElement](/api-docs/clay-web/js/html/DialogElement/) | class | The `HTMLDialogElement` interface provides methods to manipulate `<dialog>` elements. |
| [DirectionSetting](/api-docs/clay-web/js/html/DirectionSetting/) | abstract |  |
| [Directory](/api-docs/clay-web/js/html/Directory/) | class |  |
| [DirectoryElement](/api-docs/clay-web/js/html/DirectoryElement/) | class |  |
| [DivElement](/api-docs/clay-web/js/html/DivElement/) | class | The `HTMLDivElement` interface provides special properties (beyond the regular `HTMLElement` inte... |
| [DListElement](/api-docs/clay-web/js/html/DListElement/) | class | The `HTMLDListElement` interface provides special properties (beyond those of the regular `HTMLEl... |
| [Document](/api-docs/clay-web/js/html/Document/) | class | The `Document` interface represents any web page loaded in the browser and serves as an entry poi... |
| [DocumentFragment](/api-docs/clay-web/js/html/DocumentFragment/) | class | The `DocumentFragment` interface represents a minimal document object that has no parent. |
| [DocumentTimeline](/api-docs/clay-web/js/html/DocumentTimeline/) | class | The `DocumentTimeline` interface of the the Web Animations API represents animation timelines, in... |
| [DocumentTimelineOptions](/api-docs/clay-web/js/html/DocumentTimelineOptions/) | typedef |  |
| [DocumentType](/api-docs/clay-web/js/html/DocumentType/) | class | The `DocumentType` interface represents a `Node` containing a doctype. |
| [DOMElement](/api-docs/clay-web/js/html/DOMElement/) | class | `Element` is the most general base class from which all objects in a `Document` inherit. |
| [DOMException](/api-docs/clay-web/js/html/DOMException/) | class | The `DOMException` interface represents an abnormal event (called an exception) which occurs as a... |
| [DOMImplementation](/api-docs/clay-web/js/html/DOMImplementation/) | class | The `DOMImplementation` interface represent an object providing methods which are not dependent o... |
| [DOMPoint](/api-docs/clay-web/js/html/DOMPoint/) | class | A `DOMPoint` object represents a 2D or 3D point in a coordinate system; it includes values for th... |
| [DOMPointInit](/api-docs/clay-web/js/html/DOMPointInit/) | typedef | The `DOMPointInit` dictionary is used to provide the values of the coordinates and perspective wh... |
| [DOMPointReadOnly](/api-docs/clay-web/js/html/DOMPointReadOnly/) | class | The `DOMPointReadOnly` interface specifies the coordinate and perspective fields used by `DOMPoin... |
| [DOMQuad](/api-docs/clay-web/js/html/DOMQuad/) | class | A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral. |
| [DOMQuadJSON](/api-docs/clay-web/js/html/DOMQuadJSON/) | typedef |  |
| [DOMRect](/api-docs/clay-web/js/html/DOMRect/) | class | A `DOMRect` represents a rectangle. |
| [DOMRectList](/api-docs/clay-web/js/html/DOMRectList/) | class |  |
| [DOMRectReadOnly](/api-docs/clay-web/js/html/DOMRectReadOnly/) | class | The `DOMRectReadOnly` interface specifies the standard properties used by `DOMRect` to define a r... |
| [DOMStringList](/api-docs/clay-web/js/html/DOMStringList/) | class | A type returned by some APIs which contains a list of DOMString (strings). |
| [DOMStringMap](/api-docs/clay-web/js/html/DOMStringMap/) | class | Used by the `dataset` HTML attribute to represent data for custom attributes added to elements. |
| [DOMTokenList](/api-docs/clay-web/js/html/DOMTokenList/) | class | The `DOMTokenList` interface represents a set of space-separated tokens. |
| [EffectTiming](/api-docs/clay-web/js/html/EffectTiming/) | typedef | The `EffectTiming` dictionary, part of the Web Animations API, is used by `Element. |
| [Element](/api-docs/clay-web/js/html/Element/) | class | The `HTMLElement` interface represents any HTML element. |
| [ElementCreationOptions](/api-docs/clay-web/js/html/ElementCreationOptions/) | typedef |  |
| [EmbedElement](/api-docs/clay-web/js/html/EmbedElement/) | class | The `HTMLEmbedElement` interface, which provides special properties (beyond the regular `HTMLElem... |
| [MediaKeyError](/api-docs/clay-web/js/html/eme/MediaKeyError/) | class |  |
| [MediaKeys](/api-docs/clay-web/js/html/eme/MediaKeys/) | class | The `MediaKeys` interface of EncryptedMediaExtensions API the represents a set of keys that an as... |
| [MediaKeySession](/api-docs/clay-web/js/html/eme/MediaKeySession/) | class | The `MediaKeySession` interface of the EncryptedMediaExtensions API represents a context for mess... |
| [MediaKeySessionType](/api-docs/clay-web/js/html/eme/MediaKeySessionType/) | abstract |  |
| [MediaKeysRequirement](/api-docs/clay-web/js/html/eme/MediaKeysRequirement/) | abstract |  |
| [MediaKeyStatusMap](/api-docs/clay-web/js/html/eme/MediaKeyStatusMap/) | class | The `MediaKeyStatusMap` interface of the EncryptedMediaExtensions API is a read-only map of media... |
| [MediaKeySystemAccess](/api-docs/clay-web/js/html/eme/MediaKeySystemAccess/) | class | The `MediaKeySystemAccess` interface of the EncryptedMediaExtensions API provides access to a Key... |
| [MediaKeySystemConfiguration](/api-docs/clay-web/js/html/eme/MediaKeySystemConfiguration/) | typedef | The `MediaKeySystemConfiguration` interface Encrypted Media Extensions API provides configuration... |
| [MediaKeySystemMediaCapability](/api-docs/clay-web/js/html/eme/MediaKeySystemMediaCapability/) | typedef |  |
| [EndingTypes](/api-docs/clay-web/js/html/EndingTypes/) | abstract |  |
| [ErrorEvent](/api-docs/clay-web/js/html/ErrorEvent/) | class | The `ErrorEvent` interface represents events providing information related to errors in scripts o... |
| [ErrorEventInit](/api-docs/clay-web/js/html/ErrorEventInit/) | typedef |  |
| [Event](/api-docs/clay-web/js/html/Event/) | class | The `Event` interface represents any event which takes place in the DOM; some are user-generated ... |
| [EventInit](/api-docs/clay-web/js/html/EventInit/) | typedef |  |
| [EventListener](/api-docs/clay-web/js/html/EventListener/) | typedef | The `EventListener` interface represents an object that can handle an event dispatched by an `Eve... |
| [EventListenerOptions](/api-docs/clay-web/js/html/EventListenerOptions/) | typedef |  |
| [EventModifierInit](/api-docs/clay-web/js/html/EventModifierInit/) | typedef |  |
| [EventTarget](/api-docs/clay-web/js/html/EventTarget/) | class | `EventTarget` is an interface implemented by objects that can receive events and may have listene... |
| [FetchObserver](/api-docs/clay-web/js/html/FetchObserver/) | class |  |
| [FetchState](/api-docs/clay-web/js/html/FetchState/) | abstract |  |
| [FieldSetElement](/api-docs/clay-web/js/html/FieldSetElement/) | class | The `HTMLFieldSetElement` interface has special properties and methods (beyond the regular `HTMLE... |
| [File](/api-docs/clay-web/js/html/File/) | class | The `File` interface provides information about files and allows JavaScript in a web page to acce... |
| [FileList](/api-docs/clay-web/js/html/FileList/) | class | An object of this type is returned by the `files` property of the HTML `input` element; this lets... |
| [FilePropertyBag](/api-docs/clay-web/js/html/FilePropertyBag/) | typedef |  |
| [FillMode](/api-docs/clay-web/js/html/FillMode/) | abstract |  |
| [FontElement](/api-docs/clay-web/js/html/FontElement/) | class | Implements the document object model (DOM) representation of the font element. |
| [FontFace](/api-docs/clay-web/js/html/FontFace/) | class | The `FontFace` interface represents a single usable font face. |
| [FontFaceDescriptors](/api-docs/clay-web/js/html/FontFaceDescriptors/) | typedef |  |
| [FontFaceLoadStatus](/api-docs/clay-web/js/html/FontFaceLoadStatus/) | abstract |  |
| [FontFaceSet](/api-docs/clay-web/js/html/FontFaceSet/) | class | The `FontFaceSet` interface of the CSS Font Loading API manages the loading of font-faces and que... |
| [FontFaceSetIterator](/api-docs/clay-web/js/html/FontFaceSetIterator/) | typedef |  |
| [FontFaceSetIteratorResult](/api-docs/clay-web/js/html/FontFaceSetIteratorResult/) | typedef |  |
| [FontFaceSetLoadStatus](/api-docs/clay-web/js/html/FontFaceSetLoadStatus/) | abstract |  |
| [FormData](/api-docs/clay-web/js/html/FormData/) | class | The `FormData` interface provides a way to easily construct a set of key/value pairs representing... |
| [FormDataIterator](/api-docs/clay-web/js/html/FormDataIterator/) | typedef |  |
| [FormElement](/api-docs/clay-web/js/html/FormElement/) | class | The `HTMLFormElement` interface represents a `form` element in the DOM; it allows access to and i... |
| [FrameElement](/api-docs/clay-web/js/html/FrameElement/) | class |  |
| [FrameSetElement](/api-docs/clay-web/js/html/FrameSetElement/) | class | The `HTMLFrameSetElement` interface provides special properties (beyond those of the regular `HTM... |
| [FullscreenOptions](/api-docs/clay-web/js/html/FullscreenOptions/) | typedef | An object that controls the behavior of the transition to fullscreen mode. |
| [FullscreenOptionsNavigationUI](/api-docs/clay-web/js/html/FullscreenOptionsNavigationUI/) | abstract |  |
| [Gamepad](/api-docs/clay-web/js/html/Gamepad/) | class | The `Gamepad` interface of the Gamepad API defines an individual gamepad or other controller, all... |
| [GamepadButton](/api-docs/clay-web/js/html/GamepadButton/) | class | The `GamepadButton` interface defines an individual button of a gamepad or other controller, allo... |
| [GamepadEvent](/api-docs/clay-web/js/html/GamepadEvent/) | class | The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the sy... |
| [GamepadEventInit](/api-docs/clay-web/js/html/GamepadEventInit/) | typedef |  |
| [GamepadMappingType](/api-docs/clay-web/js/html/GamepadMappingType/) | abstract |  |
| [Geolocation](/api-docs/clay-web/js/html/Geolocation/) | typedef | The `Geolocation` interface represents an object able to programmatically obtain the position of ... |
| [GetNotificationOptions](/api-docs/clay-web/js/html/GetNotificationOptions/) | typedef |  |
| [GetRootNodeOptions](/api-docs/clay-web/js/html/GetRootNodeOptions/) | typedef |  |
| [HeadElement](/api-docs/clay-web/js/html/HeadElement/) | class | The `HTMLHeadElement` interface contains the descriptive information, or metadata, for a document. |
| [Headers](/api-docs/clay-web/js/html/Headers/) | class | The `Headers` interface of the Fetch API allows you to perform various actions on HTTP request an... |
| [HeadersIterator](/api-docs/clay-web/js/html/HeadersIterator/) | typedef |  |
| [History](/api-docs/clay-web/js/html/History/) | class | The `History` interface allows manipulation of the browser session history, that is the pages vis... |
| [HitRegionOptions](/api-docs/clay-web/js/html/HitRegionOptions/) | typedef |  |
| [HRElement](/api-docs/clay-web/js/html/HRElement/) | class | The `HTMLHRElement` interface provides special properties (beyond those of the `HTMLElement` inte... |
| [HTMLAllCollection](/api-docs/clay-web/js/html/HTMLAllCollection/) | class |  |
| [HTMLCollection](/api-docs/clay-web/js/html/HTMLCollection/) | class | The `HTMLCollection` interface represents a generic collection (array-like object similar to argu... |
| [HTMLDocument](/api-docs/clay-web/js/html/HTMLDocument/) | class | `HTMLDocument` is an abstract interface which extends the `Document` interface to add HTML-specif... |
| [HtmlElement](/api-docs/clay-web/js/html/HtmlElement/) | class | The `HTMLHtmlElement` interface serves as the root node for a given HTML document. |
| [HTMLOptionsCollection](/api-docs/clay-web/js/html/HTMLOptionsCollection/) | class | `HTMLOptionsCollection` is an interface representing a collection of HTML option elements (in doc... |
| [HTMLPropertiesCollection](/api-docs/clay-web/js/html/HTMLPropertiesCollection/) | class |  |
| [Cursor](/api-docs/clay-web/js/html/idb/Cursor/) | class | The `IDBCursor` interface of the IndexedDB API represents a cursor for traversing or iterating ov... |
| [CursorDirection](/api-docs/clay-web/js/html/idb/CursorDirection/) | abstract |  |
| [Database](/api-docs/clay-web/js/html/idb/Database/) | class | The `IDBDatabase` interface of the IndexedDB API provides a connection to a database; you can use... |
| [Factory](/api-docs/clay-web/js/html/idb/Factory/) | class | In the following code snippet, we make a request to open a database, and include handlers for the... |
| [Index](/api-docs/clay-web/js/html/idb/Index/) | class | `IDBIndex` interface of the IndexedDB API provides asynchronous access to an index in a database. |
| [IndexParameters](/api-docs/clay-web/js/html/idb/IndexParameters/) | typedef |  |
| [ObjectStore](/api-docs/clay-web/js/html/idb/ObjectStore/) | class | This example shows a variety of different uses of object stores, from updating the data structure... |
| [ObjectStoreParameters](/api-docs/clay-web/js/html/idb/ObjectStoreParameters/) | typedef |  |
| [OpenDBOptions](/api-docs/clay-web/js/html/idb/OpenDBOptions/) | typedef |  |
| [OpenDBRequest](/api-docs/clay-web/js/html/idb/OpenDBRequest/) | class | Also inherits methods from its parents `IDBRequest` and `EventTarget`. |
| [Request](/api-docs/clay-web/js/html/idb/Request/) | class | The request object does not initially contain any information about the result of the operation, ... |
| [RequestReadyState](/api-docs/clay-web/js/html/idb/RequestReadyState/) | abstract |  |
| [Transaction](/api-docs/clay-web/js/html/idb/Transaction/) | class | Note that as of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase... |
| [TransactionMode](/api-docs/clay-web/js/html/idb/TransactionMode/) | abstract |  |
| [IFrameElement](/api-docs/clay-web/js/html/IFrameElement/) | class | The `HTMLIFrameElement` interface provides special properties and methods (beyond those of the `H... |
| [Image](/api-docs/clay-web/js/html/Image/) | class |  |
| [ImageBitmap](/api-docs/clay-web/js/html/ImageBitmap/) | class | The `ImageBitmap` interface represents a bitmap image which can be drawn to a `canvas` without un... |
| [ImageBitmapFormat](/api-docs/clay-web/js/html/ImageBitmapFormat/) | abstract |  |
| [ImageData](/api-docs/clay-web/js/html/ImageData/) | class | The `ImageData` interface represents the underlying pixel data of an area of a `canvas` element. |
| [ImageElement](/api-docs/clay-web/js/html/ImageElement/) | class | The `HTMLImageElement` interface provides special properties and methods  for manipulating the la... |
| [InputElement](/api-docs/clay-web/js/html/InputElement/) | class | The `HTMLInputElement` interface provides special properties and methods for manipulating the lay... |
| [IterationCompositeOperation](/api-docs/clay-web/js/html/IterationCompositeOperation/) | abstract |  |
| [KeyboardEvent](/api-docs/clay-web/js/html/KeyboardEvent/) | class | `KeyboardEvent` objects describe a user interaction with the keyboard; each event describes a sin... |
| [KeyboardEventInit](/api-docs/clay-web/js/html/KeyboardEventInit/) | typedef |  |
| [KeyframeAnimationOptions](/api-docs/clay-web/js/html/KeyframeAnimationOptions/) | typedef |  |
| [KeyframeEffectOptions](/api-docs/clay-web/js/html/KeyframeEffectOptions/) | typedef |  |
| [LabelElement](/api-docs/clay-web/js/html/LabelElement/) | class | The `HTMLLabelElement` interface gives access to properties specific to `label` elements. |
| [LegendElement](/api-docs/clay-web/js/html/LegendElement/) | class | The `HTMLLegendElement` is an interface allowing to access properties of the `legend` elements. |
| [LIElement](/api-docs/clay-web/js/html/LIElement/) | class | The `HTMLLIElement` interface exposes specific properties and methods (beyond those defined by re... |
| [LineAlignSetting](/api-docs/clay-web/js/html/LineAlignSetting/) | abstract |  |
| [LinkElement](/api-docs/clay-web/js/html/LinkElement/) | class | The `HTMLLinkElement` interface represents reference information for external resources and the r... |
| [Location](/api-docs/clay-web/js/html/Location/) | class | The `Location` interface represents the location (URL) of the object it is linked to. |
| [MapElement](/api-docs/clay-web/js/html/MapElement/) | class | The `HTMLMapElement` interface provides special properties and methods (beyond those of the regul... |
| [MediaDeviceInfo](/api-docs/clay-web/js/html/MediaDeviceInfo/) | class | The `MediaDevicesInfo` interface contains information that describes a single media input or outp... |
| [MediaDeviceKind](/api-docs/clay-web/js/html/MediaDeviceKind/) | abstract |  |
| [MediaDevices](/api-docs/clay-web/js/html/MediaDevices/) | class | The `MediaDevices` interface provides access to connected media input devices like cameras and mi... |
| [MediaElement](/api-docs/clay-web/js/html/MediaElement/) | class | The `HTMLMediaElement` interface adds to `HTMLElement` the properties and methods needed to suppo... |
| [MediaError](/api-docs/clay-web/js/html/MediaError/) | class | The `MediaError` interface represents an error which occurred while handling media in an HTML med... |
| [MediaKeyStatusMapIterator](/api-docs/clay-web/js/html/MediaKeyStatusMapIterator/) | typedef |  |
| [MediaList](/api-docs/clay-web/js/html/MediaList/) | class |  |
| [MediaQueryList](/api-docs/clay-web/js/html/MediaQueryList/) | class | A `MediaQueryList` object stores information on a media query applied to a document, and handles ... |
| [MediaStream](/api-docs/clay-web/js/html/MediaStream/) | class | The `MediaStream` interface represents a stream of media content. |
| [MediaStreamConstraints](/api-docs/clay-web/js/html/MediaStreamConstraints/) | typedef | The `MediaStreamConstraints` dictionary is used when calling `getUserMedia()` to specify what kin... |
| [MediaStreamTrack](/api-docs/clay-web/js/html/MediaStreamTrack/) | class | The `MediaStreamTrack` interface represents a single media track within a stream; typically, thes... |
| [MediaStreamTrackState](/api-docs/clay-web/js/html/MediaStreamTrackState/) | abstract |  |
| [MediaTrackConstraints](/api-docs/clay-web/js/html/MediaTrackConstraints/) | typedef | The `MediaTrackConstraints` dictionary is used to describe a set of capabilities and the value or... |
| [MediaTrackConstraintSet](/api-docs/clay-web/js/html/MediaTrackConstraintSet/) | typedef |  |
| [MediaTrackSettings](/api-docs/clay-web/js/html/MediaTrackSettings/) | typedef | The `MediaTrackSettings` dictionary is used to return the current values configured for each of a... |
| [MediaTrackSupportedConstraints](/api-docs/clay-web/js/html/MediaTrackSupportedConstraints/) | typedef | The `MediaTrackSupportedConstraints` dictionary establishes the list of constrainable properties ... |
| [MenuElement](/api-docs/clay-web/js/html/MenuElement/) | class |  |
| [MetaElement](/api-docs/clay-web/js/html/MetaElement/) | class | The `HTMLMetaElement` interface contains descriptive metadata about a document. |
| [MeterElement](/api-docs/clay-web/js/html/MeterElement/) | class | The HTML `meter` elements expose the `HTMLMeterElement` interface, which provides special propert... |
| [MIDIAccess](/api-docs/clay-web/js/html/midi/MIDIAccess/) | class | The `MIDIAccess` interface of the Web MIDI API provides methods for listing MIDI input and output... |
| [MIDIInputMap](/api-docs/clay-web/js/html/midi/MIDIInputMap/) | class | The `MIDIInputMap` read-only interface of the Web MIDI API provides a `Map`-like interface to the... |
| [MIDIOptions](/api-docs/clay-web/js/html/midi/MIDIOptions/) | typedef |  |
| [MIDIOutputMap](/api-docs/clay-web/js/html/midi/MIDIOutputMap/) | class | The `MIDIOutputMap` read-only interface of the Web MIDI API provides a `Map`-like interface to th... |
| [MimeType](/api-docs/clay-web/js/html/MimeType/) | class | The `MimeType` interface provides contains information about a MIME type associated with a partic... |
| [MimeTypeArray](/api-docs/clay-web/js/html/MimeTypeArray/) | class | The `MimeTypeArray` interface returns an array of `MimeType` instances, each of which contains in... |
| [ModElement](/api-docs/clay-web/js/html/ModElement/) | class | The `HTMLModElement` interface provides special properties (beyond the regular methods and proper... |
| [MouseEvent](/api-docs/clay-web/js/html/MouseEvent/) | class | The `MouseEvent` interface represents events that occur due to the user interacting with a pointi... |
| [MouseEventInit](/api-docs/clay-web/js/html/MouseEventInit/) | typedef |  |
| [NamedNodeMap](/api-docs/clay-web/js/html/NamedNodeMap/) | class | The `NamedNodeMap` interface represents a collection of `Attr` objects. |
| [Navigator](/api-docs/clay-web/js/html/Navigator/) | class | The `Navigator` interface represents the state and the identity of the user agent. |
| [Node](/api-docs/clay-web/js/html/Node/) | class | `Node` is an interface from which a number of DOM API object types inherit. |
| [NodeFilter](/api-docs/clay-web/js/html/NodeFilter/) | class | A `NodeFilter` interface represents an object used to filter the nodes in a `NodeIterator` or `Tr... |
| [NodeIterator](/api-docs/clay-web/js/html/NodeIterator/) | class | The `NodeIterator` interface represents an iterator over the members of a list of the nodes in a ... |
| [NodeList](/api-docs/clay-web/js/html/NodeList/) | class | `NodeList` objects are collections of nodes such as those returned by properties such as `Node. |
| [Notification](/api-docs/clay-web/js/html/Notification/) | class | The `Notification` interface of the Notifications API is used to configure and display desktop no... |
| [NotificationDirection](/api-docs/clay-web/js/html/NotificationDirection/) | abstract |  |
| [NotificationOptions](/api-docs/clay-web/js/html/NotificationOptions/) | typedef |  |
| [NotificationPermission](/api-docs/clay-web/js/html/NotificationPermission/) | abstract |  |
| [ObjectElement](/api-docs/clay-web/js/html/ObjectElement/) | class | The `HTMLObjectElement` interface provides special properties and methods (beyond those on the `H... |
| [ObserverCallback](/api-docs/clay-web/js/html/ObserverCallback/) | typedef |  |
| [OListElement](/api-docs/clay-web/js/html/OListElement/) | class | The `HTMLOListElement` interface provides special properties (beyond those defined on the regular... |
| [OptGroupElement](/api-docs/clay-web/js/html/OptGroupElement/) | class | The `HTMLOptGroupElement` interface provides special properties and methods (beyond the regular `... |
| [OptionalEffectTiming](/api-docs/clay-web/js/html/OptionalEffectTiming/) | typedef |  |
| [OptionElement](/api-docs/clay-web/js/html/OptionElement/) | class | The `HTMLOptionElement` interface represents `option` elements and inherits all classes and metho... |
| [OrientationLockType](/api-docs/clay-web/js/html/OrientationLockType/) | abstract |  |
| [OrientationType](/api-docs/clay-web/js/html/OrientationType/) | abstract |  |
| [OutputElement](/api-docs/clay-web/js/html/OutputElement/) | class | The `HTMLOutputElement` interface provides properties and methods (beyond those inherited from `H... |
| [ParagraphElement](/api-docs/clay-web/js/html/ParagraphElement/) | class | The `HTMLParagraphElement` interface provides special properties (beyond those of the regular `HT... |
| [ParamElement](/api-docs/clay-web/js/html/ParamElement/) | class | The `HTMLParamElement` interface provides special properties (beyond those of the regular `HTMLEl... |
| [Path2D](/api-docs/clay-web/js/html/Path2D/) | class | The `Path2D` interface of the Canvas 2D API is used to declare paths that are then later used on ... |
| [Performance](/api-docs/clay-web/js/html/Performance/) | class | The `Performance` interface provides access to performance-related information for the current page. |
| [PerformanceEntry](/api-docs/clay-web/js/html/PerformanceEntry/) | class | The `PerformanceEntry` object encapsulates a single performance metric that is part of the perfor... |
| [PerformanceNavigation](/api-docs/clay-web/js/html/PerformanceNavigation/) | class | The legacy `PerformanceNavigation` interface represents information about how the navigation to t... |
| [PerformanceTiming](/api-docs/clay-web/js/html/PerformanceTiming/) | class | The `PerformanceTiming` interface is a legacy interface kept for backwards compatibility and cont... |
| [Permissions](/api-docs/clay-web/js/html/Permissions/) | class | Documentation [Permissions](https://developer. |
| [PermissionState](/api-docs/clay-web/js/html/PermissionState/) | abstract |  |
| [PermissionStatus](/api-docs/clay-web/js/html/PermissionStatus/) | class | The `PermissionStatus` interface of the Permissions API provides the state of an object and an ev... |
| [PictureElement](/api-docs/clay-web/js/html/PictureElement/) | class | The `HTMLPictureElement` interface represents a `picture` HTML element. |
| [PlaybackDirection](/api-docs/clay-web/js/html/PlaybackDirection/) | abstract |  |
| [Plugin](/api-docs/clay-web/js/html/Plugin/) | class | The `Plugin` interface provides information about a browser plugin. |
| [PluginArray](/api-docs/clay-web/js/html/PluginArray/) | class | The `PluginArray` interface is used to store a list of `Plugin` objects describing the available ... |
| [Position](/api-docs/clay-web/js/html/Position/) | typedef | The `Position` interface represents the position of the concerned device at a given time. |
| [PositionAlignSetting](/api-docs/clay-web/js/html/PositionAlignSetting/) | abstract |  |
| [PositionError](/api-docs/clay-web/js/html/PositionError/) | class | The `PositionError` interface represents the reason of an error occurring when using the geolocat... |
| [PositionOptions](/api-docs/clay-web/js/html/PositionOptions/) | typedef | The `PositionOptions` interface describes an object containing option properties to pass as a par... |
| [PreElement](/api-docs/clay-web/js/html/PreElement/) | class | The `HTMLPreElement` interface expose specific properties and methods (beyond those defined by re... |
| [ProcessingInstruction](/api-docs/clay-web/js/html/ProcessingInstruction/) | class | A processing instruction embeds application-specific instructions in XML which can be ignored by ... |
| [ProgressElement](/api-docs/clay-web/js/html/ProgressElement/) | class | The `HTMLProgressElement` interface provides special properties and methods (beyond the regular `... |
| [PropertyNodeList](/api-docs/clay-web/js/html/PropertyNodeList/) | class |  |
| [PushEncryptionKeyName](/api-docs/clay-web/js/html/push/PushEncryptionKeyName/) | abstract |  |
| [PushManager](/api-docs/clay-web/js/html/push/PushManager/) | class | The `PushManager` interface of the Push API provides a way to receive notifications from third-pa... |
| [PushPermissionState](/api-docs/clay-web/js/html/push/PushPermissionState/) | abstract |  |
| [PushSubscription](/api-docs/clay-web/js/html/push/PushSubscription/) | class | The `PushSubscription` interface of the Push API provides a subcription's URL endpoint and allows... |
| [PushSubscriptionInit](/api-docs/clay-web/js/html/push/PushSubscriptionInit/) | typedef |  |
| [PushSubscriptionJSON](/api-docs/clay-web/js/html/push/PushSubscriptionJSON/) | typedef |  |
| [PushSubscriptionKeys](/api-docs/clay-web/js/html/push/PushSubscriptionKeys/) | typedef |  |
| [PushSubscriptionOptions](/api-docs/clay-web/js/html/push/PushSubscriptionOptions/) | class |  |
| [PushSubscriptionOptionsInit](/api-docs/clay-web/js/html/push/PushSubscriptionOptionsInit/) | typedef |  |
| [QuoteElement](/api-docs/clay-web/js/html/QuoteElement/) | class | The `HTMLQuoteElement` interface provides special properties and methods (beyond the regular `HTM... |
| [Range](/api-docs/clay-web/js/html/Range/) | class | The `Range` interface represents a fragment of a document that can contain nodes and parts of tex... |
| [ReferrerPolicy](/api-docs/clay-web/js/html/ReferrerPolicy/) | abstract |  |
| [RegistrationOptions](/api-docs/clay-web/js/html/RegistrationOptions/) | typedef |  |
| [Request](/api-docs/clay-web/js/html/Request/) | class | The `Request` interface of the Fetch API represents a resource request. |
| [RequestCache](/api-docs/clay-web/js/html/RequestCache/) | abstract |  |
| [RequestCredentials](/api-docs/clay-web/js/html/RequestCredentials/) | abstract |  |
| [RequestDestination](/api-docs/clay-web/js/html/RequestDestination/) | abstract | The `RequestDestination` enumerated type contains the permitted values for a request's `destinati... |
| [RequestInit](/api-docs/clay-web/js/html/RequestInit/) | typedef |  |
| [RequestMode](/api-docs/clay-web/js/html/RequestMode/) | abstract |  |
| [RequestRedirect](/api-docs/clay-web/js/html/RequestRedirect/) | abstract |  |
| [Response](/api-docs/clay-web/js/html/Response/) | class | The `Response` interface of the Fetch API represents the response to a request. |
| [ResponseInit](/api-docs/clay-web/js/html/ResponseInit/) | typedef |  |
| [ResponseType](/api-docs/clay-web/js/html/ResponseType/) | abstract |  |
| [Screen](/api-docs/clay-web/js/html/Screen/) | class | The `Screen` interface represents a screen, usually the one on which the current window is being ... |
| [ScreenOrientation](/api-docs/clay-web/js/html/ScreenOrientation/) | class | The `ScreenOrientation` interface of the the Screen Orientation API provides information about th... |
| [ScriptElement](/api-docs/clay-web/js/html/ScriptElement/) | class | HTML `script` elements expose the `HTMLScriptElement` interface, which provides special propertie... |
| [ScrollBehavior](/api-docs/clay-web/js/html/ScrollBehavior/) | abstract |  |
| [ScrollIntoViewOptions](/api-docs/clay-web/js/html/ScrollIntoViewOptions/) | typedef |  |
| [ScrollLogicalPosition](/api-docs/clay-web/js/html/ScrollLogicalPosition/) | abstract |  |
| [ScrollOptions](/api-docs/clay-web/js/html/ScrollOptions/) | typedef |  |
| [ScrollRestoration](/api-docs/clay-web/js/html/ScrollRestoration/) | abstract |  |
| [ScrollSetting](/api-docs/clay-web/js/html/ScrollSetting/) | abstract |  |
| [ScrollToOptions](/api-docs/clay-web/js/html/ScrollToOptions/) | typedef |  |
| [SelectElement](/api-docs/clay-web/js/html/SelectElement/) | class | The `HTMLSelectElement` interface represents a `select` HTML Element. |
| [Selection](/api-docs/clay-web/js/html/Selection/) | class | A `Selection` object represents the range of text selected by the user or the current position of... |
| [SelectionMode](/api-docs/clay-web/js/html/SelectionMode/) | abstract |  |
| [ServiceWorker](/api-docs/clay-web/js/html/ServiceWorker/) | class | The `ServiceWorker` interface of the ServiceWorker API provides a reference to a service worker. |
| [ServiceWorkerContainer](/api-docs/clay-web/js/html/ServiceWorkerContainer/) | class | The `ServiceWorkerContainer` interface of the ServiceWorker API provides an object representing t... |
| [ServiceWorkerRegistration](/api-docs/clay-web/js/html/ServiceWorkerRegistration/) | class | The `ServiceWorkerRegistration` interface of the ServiceWorker API represents the service worker ... |
| [ServiceWorkerState](/api-docs/clay-web/js/html/ServiceWorkerState/) | abstract | The `ServiceWorkerState` is associated with its `ServiceWorker`'s state. |
| [ServiceWorkerUpdateViaCache](/api-docs/clay-web/js/html/ServiceWorkerUpdateViaCache/) | abstract |  |
| [ShadowRoot](/api-docs/clay-web/js/html/ShadowRoot/) | class | The `ShadowRoot` interface of the Shadow DOM API is the root node of a DOM subtree that is render... |
| [ShadowRootInit](/api-docs/clay-web/js/html/ShadowRootInit/) | typedef |  |
| [ShadowRootMode](/api-docs/clay-web/js/html/ShadowRootMode/) | abstract |  |
| [SlotElement](/api-docs/clay-web/js/html/SlotElement/) | class | The `HTMLSlotElement` interface of the Shadow DOM API enables access to the name and assigned nod... |
| [SourceElement](/api-docs/clay-web/js/html/SourceElement/) | class | The `HTMLSourceElement` interface provides special properties (beyond the regular `HTMLElement` o... |
| [SpanElement](/api-docs/clay-web/js/html/SpanElement/) | class | The `HTMLSpanElement` interface represents a `span` element and derives from the `HTMLElement` in... |
| [SpeechSynthesis](/api-docs/clay-web/js/html/SpeechSynthesis/) | class | The `SpeechSynthesis` interface of the Web Speech API is the controller interface for the speech ... |
| [SpeechSynthesisUtterance](/api-docs/clay-web/js/html/SpeechSynthesisUtterance/) | class | The `SpeechSynthesisUtterance` interface of the Web Speech API represents a speech request. |
| [SpeechSynthesisVoice](/api-docs/clay-web/js/html/SpeechSynthesisVoice/) | class | The `SpeechSynthesisVoice` interface of the Web Speech API represents a voice that the system sup... |
| [Storage](/api-docs/clay-web/js/html/Storage/) | class | The `Storage` interface of the Web Storage API provides access to a particular domain's session o... |
| [StorageEstimate](/api-docs/clay-web/js/html/StorageEstimate/) | typedef | The `StorageEstimate` dictionary is used by the `StorageManager` to provide estimates of the size... |
| [StorageManager](/api-docs/clay-web/js/html/StorageManager/) | class | The `StorageManager` interface of the the Storage API provides an interface for managing persista... |
| [StorageType](/api-docs/clay-web/js/html/StorageType/) | abstract |  |
| [StyleElement](/api-docs/clay-web/js/html/StyleElement/) | class | The `HTMLStyleElement` interface represents a `style` element. |
| [StyleSheet](/api-docs/clay-web/js/html/StyleSheet/) | class | An object implementing the `StyleSheet` interface represents a single style sheet. |
| [StyleSheetList](/api-docs/clay-web/js/html/StyleSheetList/) | class | The `StyleSheetList` interface represents a list of `StyleSheet`. |
| [SubtleCrypto](/api-docs/clay-web/js/html/SubtleCrypto/) | class | The `SubtleCrypto` interface represents a set of cryptographic primitives. |
| [Angle](/api-docs/clay-web/js/html/svg/Angle/) | class | The `SVGAngle` interface is used to represent a value that can be an `angle` or `number` value. |
| [AnimatedLength](/api-docs/clay-web/js/html/svg/AnimatedLength/) | class | The `SVGAnimatedLength` interface is used for attributes of basic type length which can be animated. |
| [AnimatedPreserveAspectRatio](/api-docs/clay-web/js/html/svg/AnimatedPreserveAspectRatio/) | class | The `SVGAnimatedPreserveAspectRatio` interface is used for attributes of type `SVGPreserveAspectR... |
| [AnimatedRect](/api-docs/clay-web/js/html/svg/AnimatedRect/) | class | The `SVGAnimatedRect` interface is used for attributes of basic `SVGRect` which can be animated. |
| [AnimatedString](/api-docs/clay-web/js/html/svg/AnimatedString/) | class | The `SVGAnimatedString` interface represents string attributes which can be animated from each SV... |
| [AnimatedTransformList](/api-docs/clay-web/js/html/svg/AnimatedTransformList/) | class | The `SVGAnimatedTransformList` interface is used for attributes which take a list of numbers and ... |
| [BoundingBoxOptions](/api-docs/clay-web/js/html/svg/BoundingBoxOptions/) | typedef |  |
| [Element](/api-docs/clay-web/js/html/svg/Element/) | class | All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive fro... |
| [GraphicsElement](/api-docs/clay-web/js/html/svg/GraphicsElement/) | class | The `SVGGraphicsElement` interface represents SVG elements whose primary purpose is to directly r... |
| [ImageElement](/api-docs/clay-web/js/html/svg/ImageElement/) | class | The `SVGImageElement` interface corresponds to the `image` element. |
| [Length](/api-docs/clay-web/js/html/svg/Length/) | class | The `SVGLength` interface correspond to the length basic data type. |
| [Matrix](/api-docs/clay-web/js/html/svg/Matrix/) | class | Many of SVG's graphics operations utilize 2x3 matrices of the form: |
| [Number](/api-docs/clay-web/js/html/svg/Number/) | class | The `SVGNumber` interface corresponds to the `number` basic data type. |
| [Point](/api-docs/clay-web/js/html/svg/Point/) | class | An `SVGPoint` represents a 2D or 3D point in the SVG coordinate system. |
| [PreserveAspectRatio](/api-docs/clay-web/js/html/svg/PreserveAspectRatio/) | class | The `SVGPreserveAspectRatio` interface corresponds to the `preserveAspectRatio` attribute, which ... |
| [Rect](/api-docs/clay-web/js/html/svg/Rect/) | class | The `SVGRect` represents a rectangle. |
| [StringList](/api-docs/clay-web/js/html/svg/StringList/) | class | The `SVGStringList` defines a list of `DOMString` objects. |
| [SVGElement](/api-docs/clay-web/js/html/svg/SVGElement/) | class | The `SVGSVGElement` interface provides access to the properties of `svg` elements, as well as met... |
| [Transform](/api-docs/clay-web/js/html/svg/Transform/) | class | `SVGTransform` is the interface for one of the component transformations within an `SVGTransformL... |
| [TransformList](/api-docs/clay-web/js/html/svg/TransformList/) | class | The `SVGTransformList` defines a list of `SVGTransform` objects. |
| [TableCaptionElement](/api-docs/clay-web/js/html/TableCaptionElement/) | class | The `HTMLTableCaptionElement` interface special properties (beyond the regular `HTMLElement` inte... |
| [TableCellElement](/api-docs/clay-web/js/html/TableCellElement/) | class | The `HTMLTableCellElement` interface provides special properties and methods (beyond the regular ... |
| [TableColElement](/api-docs/clay-web/js/html/TableColElement/) | class | The `HTMLTableColElement` interface provides special properties (beyond the `HTMLElement` interfa... |
| [TableElement](/api-docs/clay-web/js/html/TableElement/) | class | The `HTMLTableElement` interface provides special properties and methods (beyond the regular `HTM... |
| [TableRowElement](/api-docs/clay-web/js/html/TableRowElement/) | class | The `HTMLTableRowElement` interface provides special properties and methods (beyond the `HTMLElem... |
| [TableSectionElement](/api-docs/clay-web/js/html/TableSectionElement/) | class | The `HTMLTableSectionElement` interface provides special properties and methods (beyond the `HTML... |
| [Text](/api-docs/clay-web/js/html/Text/) | class | The `Text` interface represents the textual content of `Element` or `Attr`. |
| [TextAreaElement](/api-docs/clay-web/js/html/TextAreaElement/) | class | The `HTMLTextAreaElement` interface provides special properties and methods for manipulating the ... |
| [TextMetrics](/api-docs/clay-web/js/html/TextMetrics/) | class | The `TextMetrics` interface represents the dimension of a text in the canvas, as created by the `... |
| [TextTrack](/api-docs/clay-web/js/html/TextTrack/) | class | This interface also inherits properties from `EventTarget`. |
| [TextTrackCue](/api-docs/clay-web/js/html/TextTrackCue/) | class |  |
| [TextTrackCueList](/api-docs/clay-web/js/html/TextTrackCueList/) | class |  |
| [TextTrackKind](/api-docs/clay-web/js/html/TextTrackKind/) | abstract |  |
| [TextTrackList](/api-docs/clay-web/js/html/TextTrackList/) | class |  |
| [TextTrackMode](/api-docs/clay-web/js/html/TextTrackMode/) | abstract |  |
| [TimeRanges](/api-docs/clay-web/js/html/TimeRanges/) | class | The `TimeRanges` interface is used to represent a set of time ranges, primarily for the purpose o... |
| [TitleElement](/api-docs/clay-web/js/html/TitleElement/) | class | The `HTMLTitleElement` interface contains the title for a document. |
| [Touch](/api-docs/clay-web/js/html/Touch/) | class | The `Touch` interface represents a single contact point on a touch-sensitive device. |
| [TouchEvent](/api-docs/clay-web/js/html/TouchEvent/) | class | The `TouchEvent` interface represents an event sent when the state of contacts with a touch-sensi... |
| [TouchEventInit](/api-docs/clay-web/js/html/TouchEventInit/) | typedef |  |
| [TouchInit](/api-docs/clay-web/js/html/TouchInit/) | typedef |  |
| [TouchList](/api-docs/clay-web/js/html/TouchList/) | class | The `TouchList` interface represents a list of contact points with a touch surface; for example, ... |
| [TrackElement](/api-docs/clay-web/js/html/TrackElement/) | class | The `HTMLTrackElement` |
| [TreeWalker](/api-docs/clay-web/js/html/TreeWalker/) | class | The `TreeWalker` object represents the nodes of a document subtree and a position within them. |
| [UIEvent](/api-docs/clay-web/js/html/UIEvent/) | class | The `UIEvent` interface represents simple user interface events. |
| [UIEventInit](/api-docs/clay-web/js/html/UIEventInit/) | typedef |  |
| [UListElement](/api-docs/clay-web/js/html/UListElement/) | class | The `HTMLUListElement` interface provides special properties (beyond those defined on the regular... |
| [URLSearchParams](/api-docs/clay-web/js/html/URLSearchParams/) | class | The `URLSearchParams` interface defines utility methods to work with the query string of a URL. |
| [URLSearchParamsIterator](/api-docs/clay-web/js/html/URLSearchParamsIterator/) | typedef |  |
| [ValidityState](/api-docs/clay-web/js/html/ValidityState/) | class | The `ValidityState` interface represents the validity states that an element can be in, with resp... |
| [VideoElement](/api-docs/clay-web/js/html/VideoElement/) | class | The `HTMLVideoElement` interface provides special properties and methods for manipulating video o... |
| [VideoPlaybackQuality](/api-docs/clay-web/js/html/VideoPlaybackQuality/) | class | The `VideoPlaybackQuality` interface represents the set of metrics describing the playback qualit... |
| [VideoStreamTrack](/api-docs/clay-web/js/html/VideoStreamTrack/) | class |  |
| [VideoTrack](/api-docs/clay-web/js/html/VideoTrack/) | class |  |
| [VideoTrackList](/api-docs/clay-web/js/html/VideoTrackList/) | class |  |
| [VisibilityState](/api-docs/clay-web/js/html/VisibilityState/) | abstract |  |
| [VTTCue](/api-docs/clay-web/js/html/VTTCue/) | class | VTTCues represent a cue in a text track. |
| [VTTRegion](/api-docs/clay-web/js/html/VTTRegion/) | class |  |
| [ActiveInfo](/api-docs/clay-web/js/html/webgl/ActiveInfo/) | class | The WebGLActiveInfo interface is part of the WebGL API and represents the information returned by... |
| [Buffer](/api-docs/clay-web/js/html/webgl/Buffer/) | class | The WebGLBuffer interface is part of the WebGL API and represents an opaque buffer object storing... |
| [ContextAttributes](/api-docs/clay-web/js/html/webgl/ContextAttributes/) | typedef |  |
| [Extension](/api-docs/clay-web/js/html/webgl/Extension/) | abstract |  |
| [ANGLEInstancedArrays](/api-docs/clay-web/js/html/webgl/extension/ANGLEInstancedArrays/) | class | The `ANGLE_instanced_arrays` extension is part of the WebGL API and allows to draw the same objec... |
| [EXTBlendMinmax](/api-docs/clay-web/js/html/webgl/extension/EXTBlendMinmax/) | class | The `EXT_blend_minmax` extension is part of the WebGL API and extends blending capabilities by ad... |
| [EXTColorBufferFloat](/api-docs/clay-web/js/html/webgl/extension/EXTColorBufferFloat/) | typedef |  |
| [EXTColorBufferHalfFloat](/api-docs/clay-web/js/html/webgl/extension/EXTColorBufferHalfFloat/) | class | The `EXT_color_buffer_half_float` extension is part of the WebGL API and adds the ability to rend... |
| [EXTDisjointTimerQuery](/api-docs/clay-web/js/html/webgl/extension/EXTDisjointTimerQuery/) | class | The EXT_disjoint_timer_query extension is part of the WebGL API and provides a way to measure the... |
| [EXTFragDepth](/api-docs/clay-web/js/html/webgl/extension/EXTFragDepth/) | typedef |  |
| [EXTShaderTextureLod](/api-docs/clay-web/js/html/webgl/extension/EXTShaderTextureLod/) | typedef |  |
| [EXTSrgb](/api-docs/clay-web/js/html/webgl/extension/EXTSrgb/) | class | The `EXT_sRGB` extension is part of the WebGL API and adds sRGB support to textures and framebuff... |
| [EXTTextureFilterAnisotropic](/api-docs/clay-web/js/html/webgl/extension/EXTTextureFilterAnisotropic/) | class | The `EXT_texture_filter_anisotropic` extension is part of the WebGL API and exposes two constants... |
| [OESElementIndexUint](/api-docs/clay-web/js/html/webgl/extension/OESElementIndexUint/) | typedef |  |
| [OESStandardDerivatives](/api-docs/clay-web/js/html/webgl/extension/OESStandardDerivatives/) | class | The `OES_standard_derivatives` extension is part of the WebGL API and adds the GLSL derivative fu... |
| [OESTextureFloat](/api-docs/clay-web/js/html/webgl/extension/OESTextureFloat/) | typedef |  |
| [OESTextureFloatLinear](/api-docs/clay-web/js/html/webgl/extension/OESTextureFloatLinear/) | typedef |  |
| [OESTextureHalfFloat](/api-docs/clay-web/js/html/webgl/extension/OESTextureHalfFloat/) | class | The `OES_texture_half_float` extension is part of the WebGL API and adds texture formats with 16-... |
| [OESTextureHalfFloatLinear](/api-docs/clay-web/js/html/webgl/extension/OESTextureHalfFloatLinear/) | typedef |  |
| [OESVertexArrayObject](/api-docs/clay-web/js/html/webgl/extension/OESVertexArrayObject/) | class | The OES_vertex_array_object extension is part of the WebGL API and provides vertex array objects ... |
| [WEBGLColorBufferFloat](/api-docs/clay-web/js/html/webgl/extension/WEBGLColorBufferFloat/) | class | The `WEBGL_color_buffer_float` extension is part of the WebGL API and adds the ability to render ... |
| [WEBGLCompressedTextureAstc](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureAstc/) | class | The `WEBGL_compressed_texture_astc` extension is part of the WebGL API and exposes Adaptive Scala... |
| [WEBGLCompressedTextureAtc](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureAtc/) | class | The `WEBGL_compressed_texture_atc` extension is part of the WebGL API and exposes 3 ATC compresse... |
| [WEBGLCompressedTextureEtc](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureEtc/) | class | The `WEBGL_compressed_texture_etc` extension is part of the WebGL API and exposes 10 ETC/EAC comp... |
| [WEBGLCompressedTextureEtc1](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureEtc1/) | class | The `WEBGL_compressed_texture_etc1` extension is part of the WebGL API and exposes the ETC1 compr... |
| [WEBGLCompressedTexturePvrtc](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTexturePvrtc/) | class | The `WEBGL_compressed_texture_pvrtc` extension is part of the WebGL API and exposes four PVRTC co... |
| [WEBGLCompressedTextureS3tc](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureS3tc/) | class | The `WEBGL_compressed_texture_s3tc` extension is part of the WebGL API and exposes four S3TC comp... |
| [WEBGLCompressedTextureS3tcSrgb](/api-docs/clay-web/js/html/webgl/extension/WEBGLCompressedTextureS3tcSrgb/) | class | The `WEBGL_compressed_texture_s3tc_srgb` extension is part of the WebGL API and exposes four S3TC... |
| [WEBGLDebugRendererInfo](/api-docs/clay-web/js/html/webgl/extension/WEBGLDebugRendererInfo/) | class | The `WEBGL_debug_renderer_info` extension is part of the WebGL API and exposes two constants with... |
| [WEBGLDebugShaders](/api-docs/clay-web/js/html/webgl/extension/WEBGLDebugShaders/) | typedef |  |
| [WEBGLDepthTexture](/api-docs/clay-web/js/html/webgl/extension/WEBGLDepthTexture/) | class | The `WEBGL_depth_texture` extension is part of the WebGL API and defines 2D depth and depth-stenc... |
| [WEBGLDrawBuffers](/api-docs/clay-web/js/html/webgl/extension/WEBGLDrawBuffers/) | class | The `WEBGL_draw_buffers` extension is part of the WebGL API and enables a fragment shader to writ... |
| [WEBGLLoseContext](/api-docs/clay-web/js/html/webgl/extension/WEBGLLoseContext/) | typedef |  |
| [Framebuffer](/api-docs/clay-web/js/html/webgl/Framebuffer/) | class | The WebGLFramebuffer interface is part of the WebGL API and represents a collection of buffers th... |
| [PowerPreference](/api-docs/clay-web/js/html/webgl/PowerPreference/) | abstract |  |
| [Program](/api-docs/clay-web/js/html/webgl/Program/) | class | The WebGLProgram is part of the WebGL API and is a combination of two compiled `WebGLShader`s con... |
| [Query](/api-docs/clay-web/js/html/webgl/Query/) | class | The `WebGLQuery` interface is part of the WebGL 2 API and provides ways to asynchronously query f... |
| [Renderbuffer](/api-docs/clay-web/js/html/webgl/Renderbuffer/) | class | The WebGLRenderbuffer interface is part of the WebGL API and represents a buffer that can contain... |
| [RenderingContext](/api-docs/clay-web/js/html/webgl/RenderingContext/) | class | The `WebGLRenderingContext` interface provides the OpenGL ES 2. |
| [Sampler](/api-docs/clay-web/js/html/webgl/Sampler/) | class | The `WebGLSampler` interface is part of the WebGL 2 API and stores sampling parameters for `WebGL... |
| [Shader](/api-docs/clay-web/js/html/webgl/Shader/) | class | The WebGLShader is part of the WebGL API and can either be a vertex or a fragment shader. |
| [ShaderPrecisionFormat](/api-docs/clay-web/js/html/webgl/ShaderPrecisionFormat/) | class | The WebGLShaderPrecisionFormat interface is part of the WebGL API and represents the information ... |
| [Sync](/api-docs/clay-web/js/html/webgl/Sync/) | class | The `WebGLSync` interface is part of the WebGL 2 API and is used to synchronize activities betwee... |
| [Texture](/api-docs/clay-web/js/html/webgl/Texture/) | class | The WebGLTexture interface is part of the WebGL API and represents an opaque texture object provi... |
| [TransformFeedback](/api-docs/clay-web/js/html/webgl/TransformFeedback/) | class | The `WebGLTransformFeedback` interface is part of the WebGL 2 API and enables transform feedback,... |
| [UniformLocation](/api-docs/clay-web/js/html/webgl/UniformLocation/) | class | The WebGLUniformLocation interface is part of the WebGL API and represents the location of a unif... |
| [VertexArrayObject](/api-docs/clay-web/js/html/webgl/VertexArrayObject/) | class | The `WebGLVertexArrayObject` interface is part of the WebGL 2 API, represents vertex array object... |
| [WebGL2RenderingContext](/api-docs/clay-web/js/html/webgl/WebGL2RenderingContext/) | class | The WebGL2RenderingContext interface provides the OpenGL ES 3. |
| [WheelEvent](/api-docs/clay-web/js/html/WheelEvent/) | class | The `WheelEvent` interface represents events that occur due to the user moving a mouse wheel or s... |
| [WheelEventInit](/api-docs/clay-web/js/html/WheelEventInit/) | typedef |  |
| [Window](/api-docs/clay-web/js/html/Window/) | class | The `Window` interface represents a window containing a DOM document; the `document` property poi... |
| [WorkerGlobalScope](/api-docs/clay-web/js/html/WorkerGlobalScope/) | class | The `WorkerGlobalScope` interface of the Web Workers API is an interface representing the scope o... |
| [WorkerLocation](/api-docs/clay-web/js/html/WorkerLocation/) | class | The `WorkerLocation` interface defines the absolute location of the script executed by the `Worker`. |
| [WorkerNavigator](/api-docs/clay-web/js/html/WorkerNavigator/) | class | The `WorkerNavigator` interface represents a subset of the `Navigator` interface allowed to be ac... |
| [XMLHttpRequest](/api-docs/clay-web/js/html/XMLHttpRequest/) | class | Use `XMLHttpRequest` (XHR) objects to interact with servers. |
| [XMLHttpRequestEventTarget](/api-docs/clay-web/js/html/XMLHttpRequestEventTarget/) | class |  |
| [XMLHttpRequestResponseType](/api-docs/clay-web/js/html/XMLHttpRequestResponseType/) | abstract | The `XMLHttpRequestResponseType` type is an enumerated set of strings which are used to specify t... |
| [XMLHttpRequestUpload](/api-docs/clay-web/js/html/XMLHttpRequestUpload/) | class |  |
| [XPathExpression](/api-docs/clay-web/js/html/XPathExpression/) | class | An `XPathExpression` is a compiled XPath query returned from `document. |
| [XPathNSResolver](/api-docs/clay-web/js/html/XPathNSResolver/) | typedef |  |
| [XPathResult](/api-docs/clay-web/js/html/XPathResult/) | class | The `XPathResult` interface represents the results generated by evaluating an XPath 1. |
| [Lib](/api-docs/clay-web/js/Lib/) | class | Platform-specific JavaScript Library. Provides some platform-specific functions |
| [ArrayBuffer](/api-docs/clay-web/js/lib/ArrayBuffer/) | class |  |
| [ArrayBufferView](/api-docs/clay-web/js/lib/ArrayBufferView/) | interface | `ArrayBufferView` is a helper type representing any of the following JavaScript `TypedArray` types: |
| [AsyncIterator](/api-docs/clay-web/js/lib/AsyncIterator/) | typedef | Native JavaScript async iterator structure. |
| [DataView](/api-docs/clay-web/js/lib/DataView/) | class |  |
| [Date](/api-docs/clay-web/js/lib/Date/) | class | Creates a JavaScript Date instance that represents a single moment in time. |
| [Error](/api-docs/clay-web/js/lib/Error/) | class |  |
| [EvalError](/api-docs/clay-web/js/lib/EvalError/) | class |  |
| [Float32Array](/api-docs/clay-web/js/lib/Float32Array/) | class | The `Float32Array` typed array represents an array of 32-bit floating point numbers |
| [Float64Array](/api-docs/clay-web/js/lib/Float64Array/) | class | The `Float64Array` typed array represents an array of 64-bit floating point numbers |
| [Function](/api-docs/clay-web/js/lib/Function/) | class |  |
| [Int16Array](/api-docs/clay-web/js/lib/Int16Array/) | class | The `Int16Array` typed array represents an array of twos-complement 16-bit signed integers in |
| [Int32Array](/api-docs/clay-web/js/lib/Int32Array/) | class | The `Int32Array` typed array represents an array of twos-complement 32-bit signed integers in |
| [Int8Array](/api-docs/clay-web/js/lib/Int8Array/) | class | The `Int8Array` typed array represents an array of twos-complement 8-bit signed integers. The |
| [CurrencyDisplay](/api-docs/clay-web/js/lib/intl/CurrencyDisplay/) | abstract |  |
| [LocaleMatcher](/api-docs/clay-web/js/lib/intl/LocaleMatcher/) | abstract |  |
| [NumberFormat](/api-docs/clay-web/js/lib/intl/NumberFormat/) | class | The `NumberFormat` object is a constructor for objects that enable language sensitive number form... |
| [NumberFormatOptions](/api-docs/clay-web/js/lib/intl/NumberFormatOptions/) | typedef |  |
| [NumberFormatPart](/api-docs/clay-web/js/lib/intl/NumberFormatPart/) | typedef |  |
| [NumberFormatPartType](/api-docs/clay-web/js/lib/intl/NumberFormatPartType/) | abstract |  |
| [NumberFormatResolvedOption](/api-docs/clay-web/js/lib/intl/NumberFormatResolvedOption/) | typedef |  |
| [NumberFormatStyle](/api-docs/clay-web/js/lib/intl/NumberFormatStyle/) | abstract |  |
| [NumberFormatSupportedLocalesOfOptions](/api-docs/clay-web/js/lib/intl/NumberFormatSupportedLocalesOfOptions/) | typedef |  |
| [Iterator](/api-docs/clay-web/js/lib/Iterator/) | typedef | Native JavaScript iterator structure. |
| [IteratorStep](/api-docs/clay-web/js/lib/IteratorStep/) | typedef |  |
| [KeyValue](/api-docs/clay-web/js/lib/KeyValue/) | abstract | Key/value access helper. |
| [Object](/api-docs/clay-web/js/lib/Object/) | class | The `js.lib.Object` constructor creates an object wrapper. |
| [ObjectEntry](/api-docs/clay-web/js/lib/ObjectEntry/) | abstract | Key/value access helper for `js.lib.Object.entries()`. |
| [ObjectPropertyDescriptor](/api-docs/clay-web/js/lib/ObjectPropertyDescriptor/) | typedef | @see <https://developer. |
| [ObjectPrototype](/api-docs/clay-web/js/lib/ObjectPrototype/) | typedef | Type for |
| [Promise](/api-docs/clay-web/js/lib/Promise/) | class | The Promise object represents the eventual completion (or failure) of an |
| [PromiseHandler](/api-docs/clay-web/js/lib/PromiseHandler/) | abstract | Handler type for the Promise object. |
| [PromiseSettleOutcome](/api-docs/clay-web/js/lib/PromiseSettleOutcome/) | typedef |  |
| [PromiseSettleStatus](/api-docs/clay-web/js/lib/PromiseSettleStatus/) | abstract |  |
| [RangeError](/api-docs/clay-web/js/lib/RangeError/) | class |  |
| [ReferenceError](/api-docs/clay-web/js/lib/ReferenceError/) | class |  |
| [RegExp](/api-docs/clay-web/js/lib/RegExp/) | class | Native JavaScript regular expressions. |
| [RegExpMatch](/api-docs/clay-web/js/lib/RegExpMatch/) | class | A return value of the `RegExp.exec` method. |
| [Symbol](/api-docs/clay-web/js/lib/Symbol/) | class |  |
| [SyntaxError](/api-docs/clay-web/js/lib/SyntaxError/) | class |  |
| [Thenable](/api-docs/clay-web/js/lib/Thenable/) | abstract | A value with a `then` method. |
| [ThenableStruct](/api-docs/clay-web/js/lib/ThenableStruct/) | typedef |  |
| [TypeError](/api-docs/clay-web/js/lib/TypeError/) | class |  |
| [Uint16Array](/api-docs/clay-web/js/lib/Uint16Array/) | class | The `Uint16Array` typed array represents an array of 16-bit unsigned integers in the platform |
| [Uint32Array](/api-docs/clay-web/js/lib/Uint32Array/) | class | The `Uint32Array` typed array represents an array of 32-bit unsigned integers in the platform |
| [Uint8Array](/api-docs/clay-web/js/lib/Uint8Array/) | class | The `Uint8Array` typed array represents an array of 8-bit unsigned integers. The contents |
| [Uint8ClampedArray](/api-docs/clay-web/js/lib/Uint8ClampedArray/) | class | The `Uint8ClampedArray` typed array represents an array of 8-bit unsigned integers clamped |
| [URIError](/api-docs/clay-web/js/lib/URIError/) | class |  |
| [Syntax](/api-docs/clay-web/js/Syntax/) | class | Generate JavaScript syntax not directly supported by Haxe. |
| [KeyValueIterable](/api-docs/clay-web/KeyValueIterable/) | typedef | A `KeyValueIterable` is a data structure which has a `keyValueIterator()` |
| [KeyValueIterator](/api-docs/clay-web/KeyValueIterator/) | typedef | A `KeyValueIterator` is an `Iterator` that has a key and a value. |
| [Lambda](/api-docs/clay-web/Lambda/) | class | The `Lambda` class is a collection of methods to support functional |
| [List](/api-docs/clay-web/List/) | typedef |  |
| [Map](/api-docs/clay-web/Map/) | typedef |  |
| [Math](/api-docs/clay-web/Math/) | class |  |
| [Null](/api-docs/clay-web/Null/) | abstract | `Null<T>` is a wrapper that can be used to make the basic types `Int`, |
| [Reflect](/api-docs/clay-web/Reflect/) | class | The Reflect API is a way to manipulate values dynamically through an |
| [Std](/api-docs/clay-web/Std/) | class | The Std class provides standard methods for manipulating basic types. |
| [String](/api-docs/clay-web/String/) | class | The basic String class. |
| [StringBuf](/api-docs/clay-web/StringBuf/) | class | A String buffer is an efficient way to build a big string by appending small |
| [StringTools](/api-docs/clay-web/StringTools/) | class | This class provides advanced methods on Strings. It is ideally used with |
| [Type](/api-docs/clay-web/Type/) | class | The Haxe Reflection API allows retrieval of type information at runtime. |
| [UInt](/api-docs/clay-web/UInt/) | abstract | The unsigned `Int` type is only defined for Flash and C#. |
| [ValueType](/api-docs/clay-web/ValueType/) | enum |  |
| [Void](/api-docs/clay-web/Void/) | abstract | The standard `Void` type. Only `null` values can be of the type `Void`. |
| [Xml](/api-docs/clay-web/Xml/) | class | Cross-platform Xml API. |
| [XmlType](/api-docs/clay-web/XmlType/) | abstract | Xml node types. |
| [HaxeRegExp](/api-docs/clay-web/_EReg/HaxeRegExp/) | class |  |
| [__Int64](/api-docs/clay-web/haxe/_Int64/__Int64/) | typedef | This typedef will fool `@:coreApi` into thinking that we are using |
| [V8Error](/api-docs/clay-web/haxe/_NativeStackTrace/V8Error/) | class |  |
| [NativeRest](/api-docs/clay-web/haxe/_Rest/NativeRest/) | typedef |  |
| [DefaultResolver](/api-docs/clay-web/haxe/_Unserializer/DefaultResolver/) | class |  |
| [ListIterator](/api-docs/clay-web/haxe/ds/_List/ListIterator/) | class |  |
| [ListNode](/api-docs/clay-web/haxe/ds/_List/ListNode/) | class |  |
| [StringMapKeyIterator](/api-docs/clay-web/haxe/ds/_StringMap/StringMapKeyIterator/) | class |  |
| [StringMapKeyValueIterator](/api-docs/clay-web/haxe/ds/_StringMap/StringMapKeyValueIterator/) | class |  |
| [StringMapValueIterator](/api-docs/clay-web/haxe/ds/_StringMap/StringMapValueIterator/) | class |  |
| [VectorData](/api-docs/clay-web/haxe/ds/_Vector/VectorData/) | typedef |  |
| [MetaObject](/api-docs/clay-web/haxe/rtti/_Meta/MetaObject/) | typedef |  |
| [AttribAccess](/api-docs/clay-web/haxe/xml/_Access/AttribAccess/) | abstract |  |
| [HasAttribAccess](/api-docs/clay-web/haxe/xml/_Access/HasAttribAccess/) | abstract |  |
| [HasNodeAccess](/api-docs/clay-web/haxe/xml/_Access/HasNodeAccess/) | abstract |  |
| [NodeAccess](/api-docs/clay-web/haxe/xml/_Access/NodeAccess/) | abstract |  |
| [NodeListAccess](/api-docs/clay-web/haxe/xml/_Access/NodeListAccess/) | abstract |  |
| [S](/api-docs/clay-web/haxe/xml/_Parser/S/) | abstract |  |
| [State](/api-docs/clay-web/haxe/zip/_InflateImpl/State/) | enum |  |
| [Window](/api-docs/clay-web/haxe/zip/_InflateImpl/Window/) | class |  |
| [CanvasUtil](/api-docs/clay-web/js/html/_CanvasElement/CanvasUtil/) | class |  |
| [ArrayBufferCompat](/api-docs/clay-web/js/lib/_ArrayBuffer/ArrayBufferCompat/) | class |  |

