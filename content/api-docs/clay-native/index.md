---
layout: api-docs
category: api-docs
subCategory: index
menu: Index
title: API Reference
target: Clay (Native)
permalink: api-docs/clay-native/
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
- [OpenGL](#opengl)
- [Soloud](#soloud)
- [Stb](#stb)
- [Timestamp](#timestamp)
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
| [AllApi](/api-docs/clay-native/ceramic/AllApi/) | class | Utility class to prevent dead code elimination of API classes. |
| [AlphaColor](/api-docs/clay-native/ceramic/AlphaColor/) | abstract | Color with alpha channel stored as a 32-bit integer. |
| [AntialiasedTriangle](/api-docs/clay-native/ceramic/AntialiasedTriangle/) | class | A specialized triangle shape that simulates antialiasing using additional vertices. |
| [App](/api-docs/clay-native/ceramic/App/) | class | `App` class is the root instance of any ceramic app. |
| [AppXUpdatesHandler](/api-docs/clay-native/ceramic/AppXUpdatesHandler/) | class | Internal handler for delayed update callbacks in the App class. |
| [Arc](/api-docs/clay-native/ceramic/Arc/) | class | A mesh subclass for drawing arcs, pies, rings, and disc geometry. |
| [ArrayPool](/api-docs/clay-native/ceramic/ArrayPool/) | class | A pool system for efficiently reusing arrays of fixed sizes. |
| [Assert](/api-docs/clay-native/ceramic/Assert/) | class | Assertion utility for runtime validation in debug builds. |
| [Asset](/api-docs/clay-native/ceramic/Asset/) | class | Base class for all asset types in Ceramic. |
| [AssetId](/api-docs/clay-native/ceramic/AssetId/) | abstract | Type-safe wrapper for asset identifiers. |
| [AssetOptions](/api-docs/clay-native/ceramic/AssetOptions/) | typedef | Asset loading options. |
| [AssetPathInfo](/api-docs/clay-native/ceramic/AssetPathInfo/) | class | Information extracted from a raw asset path. |
| [Assets](/api-docs/clay-native/ceramic/Assets/) | class | The main asset management class for Ceramic framework. |
| [AssetsLoadMethod](/api-docs/clay-native/ceramic/AssetsLoadMethod/) | abstract | Defines how assets should be loaded by the system. |
| [AssetsScheduleMethod](/api-docs/clay-native/ceramic/AssetsScheduleMethod/) | abstract | Defines how multiple assets are scheduled for loading. |
| [AssetStatus](/api-docs/clay-native/ceramic/AssetStatus/) | enum | Represents the current loading state of an asset. |
| [AtlasAsset](/api-docs/clay-native/ceramic/AtlasAsset/) | class | Asset for loading texture atlases (sprite sheets with metadata). |
| [Audio](/api-docs/clay-native/ceramic/Audio/) | class | Main audio system manager for Ceramic. |
| [AudioFilter](/api-docs/clay-native/ceramic/AudioFilter/) | class | Base class for audio filters that can process audio buffers in real-time. |
| [AudioFilterBuffer](/api-docs/clay-native/ceramic/AudioFilterBuffer/) | typedef | Platform-specific audio filter buffer for real-time audio processing. |
| [AudioFilters](/api-docs/clay-native/ceramic/AudioFilters/) | class | Internal manager for audio filter worklets across audio buses. |
| [AudioFilterWorklet](/api-docs/clay-native/ceramic/AudioFilterWorklet/) | class | The actual worklet class that will do the audio processing of a given `AudioFilter`. |
| [AudioMixer](/api-docs/clay-native/ceramic/AudioMixer/) | class | Controls audio properties for a group of sounds. |
| [AutoCollections](/api-docs/clay-native/ceramic/AutoCollections/) | interface | Interface that enables automatic collection generation for classes. |
| [BackgroundQueue](/api-docs/clay-native/ceramic/BackgroundQueue/) | class | A thread-safe queue for executing functions serially in a background thread. |
| [BezierEasing](/api-docs/clay-native/ceramic/BezierEasing/) | class | High-performance Bezier curve easing for smooth animations. |
| [BinaryAsset](/api-docs/clay-native/ceramic/BinaryAsset/) | class | Asset for loading binary files as raw bytes. |
| [BitmapFont](/api-docs/clay-native/ceramic/BitmapFont/) | class | A bitmap font implementation that handles both regular bitmap fonts and MSDF (Multi-channel Signe... |
| [BitmapFontCharacter](/api-docs/clay-native/ceramic/BitmapFontCharacter/) | class | Represents a single character (glyph) in a bitmap font. |
| [BitmapFontData](/api-docs/clay-native/ceramic/BitmapFontData/) | class | Complete data structure containing all information about a bitmap font. |
| [BitmapFontDataPage](/api-docs/clay-native/ceramic/BitmapFontDataPage/) | class | Information about a single texture page in a multi-page bitmap font. |
| [BitmapFontDistanceFieldData](/api-docs/clay-native/ceramic/BitmapFontDistanceFieldData/) | class | Configuration data for distance field fonts (SDF/MSDF). |
| [BitmapFontParser](/api-docs/clay-native/ceramic/BitmapFontParser/) | class | Parser for bitmap font definition files in BMFont format. |
| [Blending](/api-docs/clay-native/ceramic/Blending/) | abstract | Blending modes that control how pixels are combined when drawing. |
| [Border](/api-docs/clay-native/ceramic/Border/) | class | A rectangle visual that display a border |
| [BorderPosition](/api-docs/clay-native/ceramic/BorderPosition/) | enum | Defines where a border is positioned relative to a shape's edge. |
| [Camera](/api-docs/clay-native/ceramic/Camera/) | class | A flexible camera system for 2D games. |
| [Click](/api-docs/clay-native/ceramic/Click/) | class | Component that detects click/tap events on visuals. |
| [Closure](/api-docs/clay-native/ceramic/Closure/) | class | A simple closure implementation for storing a function with pre-bound arguments. |
| [Collection](/api-docs/clay-native/ceramic/Collection/) | abstract | A type-safe collection for managing CollectionEntry items. |
| [CollectionEntry](/api-docs/clay-native/ceramic/CollectionEntry/) | class | Base class for entries that can be stored in a Collection. |
| [CollectionImpl](/api-docs/clay-native/ceramic/CollectionImpl/) | class | Internal implementation of the Collection abstract. |
| [CollectionUtils](/api-docs/clay-native/ceramic/CollectionUtils/) | class | Utility functions for working with Collections. |
| [Color](/api-docs/clay-native/ceramic/Color/) | abstract | Class representing a color, based on Int. |
| [Component](/api-docs/clay-native/ceramic/Component/) | interface | Interface for components that can be attached to entities. |
| [ComputeFps](/api-docs/clay-native/ceramic/ComputeFps/) | class | A utility class for calculating frames per second (FPS) using a rolling average. |
| [ConvertArray](/api-docs/clay-native/ceramic/ConvertArray/) | class | Converter for array fields in fragments and data serialization. |
| [ConvertColor](/api-docs/clay-native/ceramic/ConvertColor/) | class | Converter for Color fields in fragments and data serialization. |
| [ConvertComponentMap](/api-docs/clay-native/ceramic/ConvertComponentMap/) | class | Converter for component map fields in fragments and data serialization. |
| [ConvertField](/api-docs/clay-native/ceramic/ConvertField/) | interface | Interface to convert basic type `T` to field type `U` and vice versa. |
| [ConvertFont](/api-docs/clay-native/ceramic/ConvertFont/) | class | Converter for BitmapFont fields in fragments and data serialization. |
| [ConvertFragmentData](/api-docs/clay-native/ceramic/ConvertFragmentData/) | class | Converter for FragmentData fields in fragments and data serialization. |
| [ConvertIntBoolMap](/api-docs/clay-native/ceramic/ConvertIntBoolMap/) | class | Converter for IntBoolMap fields in fragments and data serialization. |
| [ConvertMap](/api-docs/clay-native/ceramic/ConvertMap/) | class | Converter for Map fields in fragments and data serialization. |
| [ConvertTexture](/api-docs/clay-native/ceramic/ConvertTexture/) | class | Converter for Texture fields in fragments and data serialization. |
| [Csv](/api-docs/clay-native/ceramic/Csv/) | class | CSV parsing and generation utilities with proper escaping and quote handling. |
| [CustomAssetKind](/api-docs/clay-native/ceramic/CustomAssetKind/) | class | Defines a custom asset type that can be registered with the Assets system. |
| [DatabaseAsset](/api-docs/clay-native/ceramic/DatabaseAsset/) | class | Asset for loading CSV database files. |
| [DecomposedTransform](/api-docs/clay-native/ceramic/DecomposedTransform/) | class | Decomposed transform holds rotation, translation, scale, skew and pivot informations. |
| [DoubleClick](/api-docs/clay-native/ceramic/DoubleClick/) | class | Component that detects double-click/double-tap events on visuals. |
| [DynamicData](/api-docs/clay-native/ceramic/DynamicData/) | class | A flexible component for attaching arbitrary data to entities. |
| [Easing](/api-docs/clay-native/ceramic/Easing/) | enum | Enumeration of standard easing functions for animations. |
| [EasingUtils](/api-docs/clay-native/ceramic/EasingUtils/) | class | Utility functions for converting between Easing enum values and strings. |
| [EditText](/api-docs/clay-native/ceramic/EditText/) | class | Component that enables text editing functionality for Text visuals. |
| [Either](/api-docs/clay-native/ceramic/Either/) | abstract | A type that can hold a value of either type T1 or type T2. |
| [Entity](/api-docs/clay-native/ceramic/Entity/) | class | Base class for all entities in the Ceramic framework. |
| [EntityData](/api-docs/clay-native/ceramic/EntityData/) | class | Static utilities for managing dynamic data on entities. |
| [Enums](/api-docs/clay-native/ceramic/Enums/) | class | Macro utilities for working with enum values at compile time. |
| [Equal](/api-docs/clay-native/ceramic/Equal/) | class | Deep equality comparison utilities for various data types. |
| [Errors](/api-docs/clay-native/ceramic/Errors/) | class | Global error handling utilities for the Ceramic engine. |
| [Extensions](/api-docs/clay-native/ceramic/Extensions/) | class | A collection of static extension methods for common data types. |
| [FieldInfo](/api-docs/clay-native/ceramic/FieldInfo/) | class | Runtime reflection utility for extracting field type information from classes. |
| [FieldMeta](/api-docs/clay-native/ceramic/FieldMeta/) | class | Runtime reflection utility for accessing field metadata. |
| [Files](/api-docs/clay-native/ceramic/Files/) | class | Cross-platform filesystem utilities for Ceramic. |
| [FileWatcher](/api-docs/clay-native/ceramic/FileWatcher/) | class | Cross-platform file monitoring system for hot-reloading and file change detection. |
| [Filter](/api-docs/clay-native/ceramic/Filter/) | class | A visual container that renders its children to a texture for post-processing effects. |
| [Flags](/api-docs/clay-native/ceramic/Flags/) | abstract | Efficient bit flag storage using a single integer. |
| [Float32Array](/api-docs/clay-native/ceramic/Float32Array/) | typedef | A typed array of 32-bit floating point values. |
| [FontAsset](/api-docs/clay-native/ceramic/FontAsset/) | class | Asset type for loading bitmap fonts. |
| [Fragment](/api-docs/clay-native/ceramic/Fragment/) | class | A fragment is a powerful container that manages groups of entities and visuals |
| [FragmentData](/api-docs/clay-native/ceramic/FragmentData/) | typedef | Data structure that defines a fragment's content and properties. |
| [FragmentItem](/api-docs/clay-native/ceramic/FragmentItem/) | typedef | Defines an entity instance within a fragment. |
| [Fragments](/api-docs/clay-native/ceramic/Fragments/) | class | A compile-time generated class containing constants for all fragment assets. |
| [FragmentsAsset](/api-docs/clay-native/ceramic/FragmentsAsset/) | class | An asset that loads and manages fragment data from `.fragment` files. |
| [GamepadAxis](/api-docs/clay-native/ceramic/GamepadAxis/) | abstract | Represents gamepad analog stick and trigger axes. |
| [GamepadButton](/api-docs/clay-native/ceramic/GamepadButton/) | abstract | Represents gamepad button mappings. |
| [GeometryUtils](/api-docs/clay-native/ceramic/GeometryUtils/) | class | A collection of static utility functions for 2D geometric calculations. |
| [GlyphQuad](/api-docs/clay-native/ceramic/GlyphQuad/) | class | A specialized Quad that represents a single rendered glyph (character) in text rendering. |
| [Group](/api-docs/clay-native/ceramic/Group/) | class | A container for managing collections of entities as a single unit. |
| [HashedString](/api-docs/clay-native/ceramic/HashedString/) | class | A utility class for encoding and decoding strings with integrity verification using MD5 hashes. |
| [HighPassFilter](/api-docs/clay-native/ceramic/HighPassFilter/) | class | A high-pass audio filter that attenuates frequencies below a cutoff point. |
| [HighPassFilterWorklet](/api-docs/clay-native/ceramic/HighPassFilterWorklet/) | class | The audio processing worklet for the high-pass filter. |
| [ImageAsset](/api-docs/clay-native/ceramic/ImageAsset/) | class | Asset type for loading image files as textures. |
| [ImageType](/api-docs/clay-native/ceramic/ImageType/) | abstract | Supported image file formats for loading and exporting images. |
| [Immediate](/api-docs/clay-native/ceramic/Immediate/) | class | A utility class for scheduling callbacks to be executed in a batch. |
| [InitSettings](/api-docs/clay-native/ceramic/InitSettings/) | class | Same as Settings, but for app startup (inside Project.new(settings)). |
| [Input](/api-docs/clay-native/ceramic/Input/) | class | Manages all input handling for keyboard and gamepad devices. |
| [IntBoolMap](/api-docs/clay-native/ceramic/IntBoolMap/) | abstract | A map that uses int as keys and booleans as values. |
| [IntBoolMapIterator](/api-docs/clay-native/ceramic/IntBoolMapIterator/) | class |  |
| [IntBoolMapKeyIterator](/api-docs/clay-native/ceramic/IntBoolMapKeyIterator/) | class |  |
| [IntBoolMapKeyValueIterator](/api-docs/clay-native/ceramic/IntBoolMapKeyValueIterator/) | class |  |
| [IntFloatMap](/api-docs/clay-native/ceramic/IntFloatMap/) | class | Fallback implementation of IntFloatMap for non-C++/C# targets. |
| [IntFloatMapIterator](/api-docs/clay-native/ceramic/IntFloatMapIterator/) | class |  |
| [IntFloatMapKeyIterator](/api-docs/clay-native/ceramic/IntFloatMapKeyIterator/) | class |  |
| [IntFloatMapKeyValueIterator](/api-docs/clay-native/ceramic/IntFloatMapKeyValueIterator/) | class |  |
| [IntIntMap](/api-docs/clay-native/ceramic/IntIntMap/) | class |  |
| [IntIntMapIterator](/api-docs/clay-native/ceramic/IntIntMapIterator/) | class |  |
| [IntIntMapKeyIterator](/api-docs/clay-native/ceramic/IntIntMapKeyIterator/) | class |  |
| [IntIntMapKeyValueIterator](/api-docs/clay-native/ceramic/IntIntMapKeyValueIterator/) | class |  |
| [IntMap](/api-docs/clay-native/ceramic/IntMap/) | class | An object map that uses integers as key. |
| [IntMapIterator](/api-docs/clay-native/ceramic/IntMapIterator/) | class |  |
| [IntMapKeyIterator](/api-docs/clay-native/ceramic/IntMapKeyIterator/) | class |  |
| [IntMapKeyValueIterator](/api-docs/clay-native/ceramic/IntMapKeyValueIterator/) | class |  |
| [Json](/api-docs/clay-native/ceramic/Json/) | class | JSON utility class that provides a unified interface for JSON operations across all Ceramic targets. |
| [Key](/api-docs/clay-native/ceramic/Key/) | class | Represents a keyboard key press event with both key code and scan code information. |
| [KeyAcceleratorItem](/api-docs/clay-native/ceramic/KeyAcceleratorItem/) | enum | Represents a component of a keyboard shortcut combination. |
| [KeyBinding](/api-docs/clay-native/ceramic/KeyBinding/) | class | Represents a keyboard shortcut binding that triggers when a specific key combination is pressed. |
| [KeyBindings](/api-docs/clay-native/ceramic/KeyBindings/) | class | Manages a collection of keyboard shortcut bindings. |
| [KeyCode](/api-docs/clay-native/ceramic/KeyCode/) | abstract | Keyboard key codes representing the character/symbol associated with a key. |
| [Layer](/api-docs/clay-native/ceramic/Layer/) | class | A specialized container for organizing and grouping visuals. |
| [Lazy](/api-docs/clay-native/ceramic/Lazy/) | interface | Interface for implementing lazy initialization of properties in Ceramic classes. |
| [Line](/api-docs/clay-native/ceramic/Line/) | class | Display lines composed of multiple segments, curves and paths. |
| [LineCap](/api-docs/clay-native/ceramic/LineCap/) | typedef | Defines how line ends are rendered. |
| [LineJoin](/api-docs/clay-native/ceramic/LineJoin/) | typedef | Defines how line segments are joined at corners. |
| [Logger](/api-docs/clay-native/ceramic/Logger/) | class | Centralized logging system for Ceramic applications that provides colored, categorized output. |
| [LongPress](/api-docs/clay-native/ceramic/LongPress/) | class | Component that detects long press/hold gestures on visuals. |
| [LowPassFilter](/api-docs/clay-native/ceramic/LowPassFilter/) | class | A low-pass audio filter that attenuates frequencies above a cutoff point. |
| [LowPassFilterWorklet](/api-docs/clay-native/ceramic/LowPassFilterWorklet/) | class | The audio processing worklet for the low-pass filter. |
| [LowRes](/api-docs/clay-native/ceramic/LowRes/) | class | A container that displays visuals at low resolution with optional antialiasing through supersampl... |
| [DefinesMacro](/api-docs/clay-native/ceramic/macros/DefinesMacro/) | class | Utilities to access compile-time defines from code. |
| [EnumAbstractMacro](/api-docs/clay-native/ceramic/macros/EnumAbstractMacro/) | class | Utility macros for working with enum abstracts at compile time. |
| [PluginsMacro](/api-docs/clay-native/ceramic/macros/PluginsMacro/) | class | Macro for automatic plugin initialization in the Ceramic framework. |
| [Mesh](/api-docs/clay-native/ceramic/Mesh/) | class | A flexible visual for drawing custom shapes composed of triangles. |
| [MeshColorMapping](/api-docs/clay-native/ceramic/MeshColorMapping/) | abstract | Defines how colors are mapped to a mesh's geometry. |
| [MeshExtensions](/api-docs/clay-native/ceramic/MeshExtensions/) | class | Static extension class providing utility methods for Mesh manipulation. |
| [MeshPool](/api-docs/clay-native/ceramic/MeshPool/) | class | A global object pool for efficiently reusing Mesh instances and their arrays. |
| [MeshUtils](/api-docs/clay-native/ceramic/MeshUtils/) | class | Low-level utility class for generating mesh data arrays. |
| [MouseButton](/api-docs/clay-native/ceramic/MouseButton/) | abstract | A typed (mouse) button id |
| [Ngon](/api-docs/clay-native/ceramic/Ngon/) | class | A mesh that creates regular polygons with a configurable number of sides. |
| [NineSlice](/api-docs/clay-native/ceramic/NineSlice/) | class | A visual divided into 9 areas to create "nine-slice" textured scalable objects. |
| [NineSliceRendering](/api-docs/clay-native/ceramic/NineSliceRendering/) | abstract | Defines how a slice (from a `NineSlice` object) should be rendered. |
| [ParticleEmitter](/api-docs/clay-native/ceramic/ParticleEmitter/) | class | A powerful and flexible particle emitter system for creating visual effects. |
| [ParticleItem](/api-docs/clay-native/ceramic/ParticleItem/) | class | Represents a single particle in a particle system. |
| [Particles](/api-docs/clay-native/ceramic/Particles/) | class | A visual container that manages a particle emitter with convenient automatic emission modes. |
| [ParticlesLaunchMode](/api-docs/clay-native/ceramic/ParticlesLaunchMode/) | enum | Defines how particle velocities are calculated when launched from an emitter. |
| [ParticlesStatus](/api-docs/clay-native/ceramic/ParticlesStatus/) | enum | Represents the current operational state of a particle emitter. |
| [Path](/api-docs/clay-native/ceramic/Path/) | class | Cross-platform path manipulation utilities optimized for Ceramic. |
| [PersistentData](/api-docs/clay-native/ceramic/PersistentData/) | class | Provides a simple key-value storage system for persisting data between application sessions. |
| [PixelArt](/api-docs/clay-native/ceramic/PixelArt/) | class | A filter configured to display pixel art content with high-quality upscaling. |
| [Pixels](/api-docs/clay-native/ceramic/Pixels/) | class | Utility class for manipulating raw RGBA pixel data. |
| [Platform](/api-docs/clay-native/ceramic/Platform/) | class | A class that encapsulate platform-specific code. |
| [Point](/api-docs/clay-native/ceramic/Point/) | class | A mutable 3D point class with automatic object pooling for memory efficiency. |
| [Pool](/api-docs/clay-native/ceramic/Pool/) | class | A generic object pool utility. |
| [Preloadable](/api-docs/clay-native/ceramic/Preloadable/) | interface | Interface for objects that can report their loading progress. |
| [PreloadStatus](/api-docs/clay-native/ceramic/PreloadStatus/) | abstract | Status values for preloadable resources. |
| [PremultiplyAlpha](/api-docs/clay-native/ceramic/PremultiplyAlpha/) | class | Utilities for converting between straight and premultiplied alpha in image data. |
| [Quad](/api-docs/clay-native/ceramic/Quad/) | class | The most basic and commonly used visual for displaying rectangles and images. |
| [ReadOnlyArray](/api-docs/clay-native/ceramic/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [ReadOnlyMap](/api-docs/clay-native/ceramic/ReadOnlyMap/) | abstract | A read-only view of a Map that prevents modification. |
| [ReadOnlyPoint](/api-docs/clay-native/ceramic/ReadOnlyPoint/) | abstract | A read-only view of a Point that prevents modification. |
| [Renderer](/api-docs/clay-native/ceramic/Renderer/) | class | The core 2D rendering engine for Ceramic, responsible for efficiently drawing all visuals to the ... |
| [RenderPrimitiveType](/api-docs/clay-native/ceramic/RenderPrimitiveType/) | abstract | Defines the primitive types used for rendering geometry. |
| [RenderTexture](/api-docs/clay-native/ceramic/RenderTexture/) | class | A texture that can be rendered to, allowing off-screen rendering. |
| [Repeat](/api-docs/clay-native/ceramic/Repeat/) | class | A visual component that repeats a texture pattern to fill a specified area. |
| [ReusableArray](/api-docs/clay-native/ceramic/ReusableArray/) | class | A reusable array to use in places that need a temporary array many times. |
| [Runner](/api-docs/clay-native/ceramic/Runner/) | class | Cross-platform thread management utility for executing code on main and background threads. |
| [RuntimeAssets](/api-docs/clay-native/ceramic/RuntimeAssets/) | class | Runtime utilities to compute asset lists/names from raw (relative) file list. |
| [ScanCode](/api-docs/clay-native/ceramic/ScanCode/) | abstract | Keyboard scan codes representing physical key positions. |
| [Scene](/api-docs/clay-native/ceramic/Scene/) | class | Base class for creating scenes in Ceramic. |
| [SceneStatus](/api-docs/clay-native/ceramic/SceneStatus/) | abstract | Represents the lifecycle status of a Scene in the Ceramic framework. |
| [SceneSystem](/api-docs/clay-native/ceramic/SceneSystem/) | class | Core system responsible for managing scene lifecycle, transitions, and display hierarchy. |
| [Screen](/api-docs/clay-native/ceramic/Screen/) | class | Core screen management class that handles display properties, coordinate transformations, and inp... |
| [ScreenOrientation](/api-docs/clay-native/ceramic/ScreenOrientation/) | abstract | Defines screen orientation modes for mobile and desktop applications. |
| [ScreenScaling](/api-docs/clay-native/ceramic/ScreenScaling/) | enum | Defines how the application's logical screen size is mapped to the native screen. |
| [ScriptableAlphaColor](/api-docs/clay-native/ceramic/scriptable/ScriptableAlphaColor/) | class | Scriptable wrapper for AlphaColor to expose RGBA color functionality to scripts. |
| [ScriptableBlending](/api-docs/clay-native/ceramic/scriptable/ScriptableBlending/) | class | Scriptable wrapper for Blending enum to expose blending modes to scripts. |
| [ScriptableColor](/api-docs/clay-native/ceramic/scriptable/ScriptableColor/) | class | Scriptable wrapper for Color to expose RGB color functionality to scripts. |
| [ScriptableFlags](/api-docs/clay-native/ceramic/scriptable/ScriptableFlags/) | class | Scriptable wrapper for Flags to expose bit flag operations to scripts. |
| [ScriptableMap](/api-docs/clay-native/ceramic/scriptable/ScriptableMap/) | interface | Scriptable interface for Map to expose key-value mapping functionality to scripts. |
| [ScriptableMeshColorMapping](/api-docs/clay-native/ceramic/scriptable/ScriptableMeshColorMapping/) | class | Scriptable wrapper for MeshColorMapping to expose mesh coloring modes to scripts. |
| [ScriptableMouseButton](/api-docs/clay-native/ceramic/scriptable/ScriptableMouseButton/) | class | Scriptable wrapper for MouseButton to expose mouse button constants to scripts. |
| [ScriptableStd](/api-docs/clay-native/ceramic/scriptable/ScriptableStd/) | class | Scriptable wrapper for Std to expose standard library functions to scripts. |
| [ScrollDirection](/api-docs/clay-native/ceramic/ScrollDirection/) | enum | Defines the direction of scrolling for scrollable components. |
| [Scroller](/api-docs/clay-native/ceramic/Scroller/) | class | A scrollable container that allows smooth scrolling and dragging of content. |
| [ScrollerDragThresholdStatus](/api-docs/clay-native/ceramic/ScrollerDragThresholdStatus/) | abstract |  |
| [ScrollerStatus](/api-docs/clay-native/ceramic/ScrollerStatus/) | enum | Represents the current state of a Scroller component during user interaction. |
| [SeedRandom](/api-docs/clay-native/ceramic/SeedRandom/) | class | Seeded random number generator to get reproducible sequences of values. |
| [SelectText](/api-docs/clay-native/ceramic/SelectText/) | class | Component that handles text selection and cursor display for Text visuals. |
| [Settings](/api-docs/clay-native/ceramic/Settings/) | class | Central configuration hub for Ceramic applications. |
| [Shader](/api-docs/clay-native/ceramic/Shader/) | class | Represents a GPU shader program for custom rendering effects. |
| [ShaderAsset](/api-docs/clay-native/ceramic/ShaderAsset/) | class | Asset type for loading GPU shader programs. |
| [ShaderAttribute](/api-docs/clay-native/ceramic/ShaderAttribute/) | class | Defines a vertex attribute for shader programs. |
| [Shape](/api-docs/clay-native/ceramic/Shape/) | class | A visual for drawing arbitrary 2D shapes with automatic triangulation. |
| [Shortcuts](/api-docs/clay-native/ceramic/Shortcuts/) | class | Convenience static accessors and utility methods for common Ceramic functionality. |
| [Slug](/api-docs/clay-native/ceramic/Slug/) | class | URL-safe string generator that converts text into slugs suitable for URLs and filenames. |
| [SlugOptions](/api-docs/clay-native/ceramic/SlugOptions/) | class | Configuration options for slug generation. |
| [SortVisuals](/api-docs/clay-native/ceramic/SortVisuals/) | class | High-performance stable merge sort implementation specifically optimized for Visual arrays. |
| [SortVisualsByDepth](/api-docs/clay-native/ceramic/SortVisualsByDepth/) | class | Simplified high-performance stable merge sort for Visual arrays based on depth only. |
| [Sound](/api-docs/clay-native/ceramic/Sound/) | class | Represents a loaded sound that can be played multiple times. |
| [SoundAsset](/api-docs/clay-native/ceramic/SoundAsset/) | class | Asset type for loading audio/sound files. |
| [SoundPlayer](/api-docs/clay-native/ceramic/SoundPlayer/) | abstract | Controls an individual sound playback instance. |
| [SpinLock](/api-docs/clay-native/ceramic/SpinLock/) | abstract | Lightweight spin lock implementation for low-contention thread synchronization. |
| [State](/api-docs/clay-native/ceramic/State/) | class | Base class for states in a state machine. |
| [StateMachine](/api-docs/clay-native/ceramic/StateMachine/) | class | A flexible state machine implementation for managing state transitions. |
| [StateMachineBase](/api-docs/clay-native/ceramic/StateMachineBase/) | class | Base class for state machine implementations. |
| [StateMachineComponent](/api-docs/clay-native/ceramic/StateMachineComponent/) | class | A state machine that can be attached to entities as a component. |
| [StateMachineImpl](/api-docs/clay-native/ceramic/StateMachineImpl/) | class | Implementation class for StateMachine functionality. |
| [StateMachineSystem](/api-docs/clay-native/ceramic/StateMachineSystem/) | class | System that manages and updates all active state machines. |
| [System](/api-docs/clay-native/ceramic/System/) | class | A `System` is an object assigned to app lifecycle and used to |
| [Systems](/api-docs/clay-native/ceramic/Systems/) | class | Manager for all System instances in the application. |
| [Task](/api-docs/clay-native/ceramic/Task/) | class | Base class for asynchronous tasks that can either succeed or fail. |
| [Tasks](/api-docs/clay-native/ceramic/Tasks/) | class | Utility class for running Task instances from command-line arguments. |
| [Text](/api-docs/clay-native/ceramic/Text/) | class | A visual to layout and display text. |
| [TextAlign](/api-docs/clay-native/ceramic/TextAlign/) | enum | Horizontal text alignment options for text rendering. |
| [TextAsset](/api-docs/clay-native/ceramic/TextAsset/) | class | Asset type for loading text files. |
| [TextInput](/api-docs/clay-native/ceramic/TextInput/) | class | Handles keyboard text input and cursor navigation. |
| [TextInputDelegate](/api-docs/clay-native/ceramic/TextInputDelegate/) | interface | Interface for text layout information providers used by text input systems. |
| [Texture](/api-docs/clay-native/ceramic/Texture/) | class | A texture represents an image loaded in GPU memory ready for rendering. |
| [TextureAtlas](/api-docs/clay-native/ceramic/TextureAtlas/) | class | A texture atlas that combines multiple images into larger textures for efficient rendering. |
| [TextureAtlasPacker](/api-docs/clay-native/ceramic/TextureAtlasPacker/) | class | Dynamic texture atlas builder that packs multiple images into optimized texture pages at runtime. |
| [TextureAtlasPage](/api-docs/clay-native/ceramic/TextureAtlasPage/) | class | Represents a single texture page within a texture atlas. |
| [TextureAtlasParser](/api-docs/clay-native/ceramic/TextureAtlasParser/) | class | Parser for texture atlas definition files in multiple formats. |
| [TextureAtlasRegion](/api-docs/clay-native/ceramic/TextureAtlasRegion/) | class | Represents a single image region within a texture atlas. |
| [TextureFilter](/api-docs/clay-native/ceramic/TextureFilter/) | enum | Texture filtering modes that control how pixels are sampled when textures are scaled. |
| [TextureTile](/api-docs/clay-native/ceramic/TextureTile/) | class | Defines a rectangular sub-region within a texture for rendering. |
| [TextureTilePacker](/api-docs/clay-native/ceramic/TextureTilePacker/) | class | Dynamic texture tile allocator with automatic packing and reuse capabilities. |
| [TextureWrap](/api-docs/clay-native/ceramic/TextureWrap/) | abstract | Texture wrapping modes for handling UV coordinates outside the 0-1 range. |
| [Timeline](/api-docs/clay-native/ceramic/Timeline/) | class | An animation timeline system that manages keyframe-based animations. |
| [TimelineBoolKeyframe](/api-docs/clay-native/ceramic/TimelineBoolKeyframe/) | class | A keyframe that stores a boolean value for timeline animations. |
| [TimelineBoolTrack](/api-docs/clay-native/ceramic/TimelineBoolTrack/) | class | A timeline track that animates boolean values. |
| [TimelineColorKeyframe](/api-docs/clay-native/ceramic/TimelineColorKeyframe/) | class | A keyframe that stores a color value for timeline animations. |
| [TimelineColorTrack](/api-docs/clay-native/ceramic/TimelineColorTrack/) | class | A timeline track that animates color values with smooth interpolation. |
| [TimelineDegreesTrack](/api-docs/clay-native/ceramic/TimelineDegreesTrack/) | class | A specialized timeline track for animating rotation values in degrees. |
| [TimelineFloatArrayKeyframe](/api-docs/clay-native/ceramic/TimelineFloatArrayKeyframe/) | class | A keyframe that stores an array of floating-point values for timeline animations. |
| [TimelineFloatArrayTrack](/api-docs/clay-native/ceramic/TimelineFloatArrayTrack/) | class | A timeline track that animates arrays of floating-point values. |
| [TimelineFloatKeyframe](/api-docs/clay-native/ceramic/TimelineFloatKeyframe/) | class | A keyframe that stores a floating-point value for timeline animations. |
| [TimelineFloatTrack](/api-docs/clay-native/ceramic/TimelineFloatTrack/) | class | A timeline track that animates floating-point values with smooth interpolation. |
| [TimelineKeyframe](/api-docs/clay-native/ceramic/TimelineKeyframe/) | class |  |
| [TimelineKeyframeData](/api-docs/clay-native/ceramic/TimelineKeyframeData/) | typedef | Data structure representing a keyframe in serialized form. |
| [Timelines](/api-docs/clay-native/ceramic/Timelines/) | class | Central system for creating and binding timeline tracks and keyframes. |
| [TimelineTrack](/api-docs/clay-native/ceramic/TimelineTrack/) | class | Base class for animation tracks in a timeline system. |
| [TimelineTrackData](/api-docs/clay-native/ceramic/TimelineTrackData/) | typedef | Data structure representing an animation track in serialized form. |
| [Timer](/api-docs/clay-native/ceramic/Timer/) | class | Timer system for scheduling delayed and periodic callbacks. |
| [TimerCallback](/api-docs/clay-native/ceramic/TimerCallback/) | class | Internal data structure representing a scheduled timer callback. |
| [Touch](/api-docs/clay-native/ceramic/Touch/) | class | Represents a single touch point in a multi-touch interaction. |
| [Touches](/api-docs/clay-native/ceramic/Touches/) | abstract | A collection of active touch points for multi-touch handling. |
| [TouchesIterator](/api-docs/clay-native/ceramic/TouchesIterator/) | class | Iterator for the Touches collection. |
| [TouchInfo](/api-docs/clay-native/ceramic/TouchInfo/) | class |  |
| [TrackerBackend](/api-docs/clay-native/ceramic/TrackerBackend/) | class | Backend adapter that bridges the Tracker observable framework with Ceramic's backend services. |
| [Transform](/api-docs/clay-native/ceramic/Transform/) | class | Transform holds matrix data to make 2d rotate, translate, scale and skew transformations. |
| [TransformPool](/api-docs/clay-native/ceramic/TransformPool/) | class | An utility to reuse transform matrix object at application level. |
| [Triangle](/api-docs/clay-native/ceramic/Triangle/) | class | A simple colored triangle shape that fits within the specified dimensions. |
| [Triangulate](/api-docs/clay-native/ceramic/Triangulate/) | class | Utility class for triangulating polygons into triangles. |
| [Tween](/api-docs/clay-native/ceramic/Tween/) | class | A lightweight tweening engine for animating numeric values over time. |
| [UInt8Array](/api-docs/clay-native/ceramic/UInt8Array/) | typedef | Platform-specific implementation of an 8-bit unsigned integer array. |
| [Utils](/api-docs/clay-native/ceramic/Utils/) | class | Various utilities. Some of them are used by ceramic itself or its backends. |
| [Value](/api-docs/clay-native/ceramic/Value/) | class | An object that can hold any value. |
| [ValueEntry](/api-docs/clay-native/ceramic/ValueEntry/) | class | A collection entry that can hold any value. |
| [Velocity](/api-docs/clay-native/ceramic/Velocity/) | class | A velocity tracker that calculates speed based on position changes over time. |
| [VisibleBounds](/api-docs/clay-native/ceramic/VisibleBounds/) | class | A component that displays the visible bounds of a visual entity. |
| [Visual](/api-docs/clay-native/ceramic/Visual/) | class | Base class for all visual elements in Ceramic. |
| [VisualTransition](/api-docs/clay-native/ceramic/VisualTransition/) | class | A component that enables smooth property transitions for Visual objects. |
| [VisualTransitionProperties](/api-docs/clay-native/ceramic/VisualTransitionProperties/) | abstract | Property setter interface for visual transitions. |
| [WaitCallbacks](/api-docs/clay-native/ceramic/WaitCallbacks/) | class | Utility to create and wait for multiple callbacks and call |
| [WatchDirectory](/api-docs/clay-native/ceramic/WatchDirectory/) | class | A directory watcher that monitors file changes in specified directories. |
| [WatchedFile](/api-docs/clay-native/ceramic/_FileWatcher/WatchedFile/) | class | Internal data structure for tracking watched file state. |
| [TextureAtlasPackerPage](/api-docs/clay-native/ceramic/_TextureAtlasPacker/TextureAtlasPackerPage/) | class | Internal representation of a texture page during packing. |
| [TextureAtlasPackerRegion](/api-docs/clay-native/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/) | class | Internal data structure for regions during the packing process. |
| [TextureAtlasReader](/api-docs/clay-native/ceramic/_TextureAtlasParser/TextureAtlasReader/) | class | Internal line-based reader for parsing LibGDX format atlas files. |
| [PackedTextureTile](/api-docs/clay-native/ceramic/_TextureTilePacker/PackedTextureTile/) | class | Internal texture tile implementation with grid allocation metadata. |
| [EarClippingTriangulator](/api-docs/clay-native/ceramic/_Triangulate/EarClippingTriangulator/) | class | Implementation of the ear-clipping algorithm for polygon triangulation. |
| [TweenEasingFunction](/api-docs/clay-native/ceramic/_Tween/TweenEasingFunction/) | class | Internal utility class containing easing function implementations. |

## Arcade

| Type | Kind | Description |
|------|------|-------------|
| [Axis](/api-docs/clay-native/arcade/Axis/) | abstract | Represents axis constants for physics calculations and collision detection. |
| [Body](/api-docs/clay-native/arcade/Body/) | class | The Physics Body is linked to a single game object. |
| [Collidable](/api-docs/clay-native/arcade/Collidable/) | interface | Any class implementing this interface can be used on World.collide() |
| [Direction](/api-docs/clay-native/arcade/Direction/) | abstract | Represents directional constants used for physics body movement and collision detection. |
| [Extensions](/api-docs/clay-native/arcade/Extensions/) | class | A bunch of static extensions to make life easier. |
| [Group](/api-docs/clay-native/arcade/Group/) | class | A Group is a container for multiple physics bodies. |
| [Line](/api-docs/clay-native/arcade/Line/) | class | Represents a line segment with a start and end point. |
| [Point](/api-docs/clay-native/arcade/Point/) | class | A 2D point with x and y coordinates. |
| [QuadTree](/api-docs/clay-native/arcade/QuadTree/) | class | A QuadTree implementation. |
| [QuadTreePool](/api-docs/clay-native/arcade/QuadTreePool/) | class | Object pool for QuadTree instances to reduce garbage collection overhead. |
| [SortBodiesBottomTop](/api-docs/clay-native/arcade/SortBodiesBottomTop/) | class | Provides a stable merge sort implementation for sorting Body arrays from bottom to top (by y coor... |
| [SortBodiesLeftRight](/api-docs/clay-native/arcade/SortBodiesLeftRight/) | class | Provides a stable merge sort implementation for sorting Body arrays from left to right (by x coor... |
| [SortBodiesRightLeft](/api-docs/clay-native/arcade/SortBodiesRightLeft/) | class | Provides a stable merge sort implementation for sorting Body arrays from right to left (by x coor... |
| [SortBodiesTopBottom](/api-docs/clay-native/arcade/SortBodiesTopBottom/) | class | Provides a stable merge sort implementation for sorting Body arrays from top to bottom (by y coor... |
| [SortDirection](/api-docs/clay-native/arcade/SortDirection/) | abstract | Defines sorting directions for physics bodies during collision detection. |
| [World](/api-docs/clay-native/arcade/World/) | class | The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods. |
| [ArcadeSortGroupBottomTop](/api-docs/clay-native/ceramic/ArcadeSortGroupBottomTop/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupLeftRight](/api-docs/clay-native/ceramic/ArcadeSortGroupLeftRight/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupRightLeft](/api-docs/clay-native/ceramic/ArcadeSortGroupRightLeft/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupTopBottom](/api-docs/clay-native/ceramic/ArcadeSortGroupTopBottom/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSystem](/api-docs/clay-native/ceramic/ArcadeSystem/) | class | Main system managing Arcade physics simulation in Ceramic. |
| [ArcadeWorld](/api-docs/clay-native/ceramic/ArcadeWorld/) | class | Extended physics world that integrates Arcade physics with Ceramic's visual system. |
| [VisualArcadePhysics](/api-docs/clay-native/ceramic/VisualArcadePhysics/) | class | Component that adds Arcade physics functionality to a Visual. |

## Tilemap

| Type | Kind | Description |
|------|------|-------------|
| [AutoTile](/api-docs/clay-native/ceramic/AutoTile/) | class | Configuration for an auto-tiling tile that automatically adjusts its appearance |
| [AutoTileKind](/api-docs/clay-native/ceramic/AutoTileKind/) | abstract | Defines the type of auto-tiling algorithm used by the `AutoTiler` component. |
| [AutoTiler](/api-docs/clay-native/ceramic/AutoTiler/) | class | Component that automatically processes tilemap tiles to apply auto-tiling rules. |
| [ConvertTilemapData](/api-docs/clay-native/ceramic/ConvertTilemapData/) | class | Field converter that handles conversion between tilemap asset names (strings) |
| [Tilemap](/api-docs/clay-native/ceramic/Tilemap/) | class | A visual component that renders tilemap data composed of multiple layers. |
| [TilemapAsset](/api-docs/clay-native/ceramic/TilemapAsset/) | class | Asset type for loading tilemap data from various formats (TMX, LDtk). |
| [TilemapData](/api-docs/clay-native/ceramic/TilemapData/) | class | Unified tilemap data structure that represents a tile-based map. |
| [TilemapEditor](/api-docs/clay-native/ceramic/TilemapEditor/) | class | Interactive tilemap editor component that enables in-game tile painting and erasing. |
| [TilemapLayer](/api-docs/clay-native/ceramic/TilemapLayer/) | class | Visual representation of a single layer within a tilemap. |
| [TilemapLayerData](/api-docs/clay-native/ceramic/TilemapLayerData/) | class | Data model representing a single layer within a tilemap. |
| [TilemapOrientation](/api-docs/clay-native/ceramic/TilemapOrientation/) | enum | Defines the projection orientation of a tilemap. |
| [TilemapParser](/api-docs/clay-native/ceramic/TilemapParser/) | class | Universal tilemap parser supporting multiple tilemap formats. |
| [TilemapPlugin](/api-docs/clay-native/ceramic/TilemapPlugin/) | class | Main plugin class that integrates tilemap support into Ceramic. |
| [TilemapQuad](/api-docs/clay-native/ceramic/TilemapQuad/) | class | Specialized Quad visual used to render individual tiles in a tilemap layer. |
| [TilemapRenderOrder](/api-docs/clay-native/ceramic/TilemapRenderOrder/) | enum | Defines the order in which tiles are rendered in a tilemap. |
| [TilemapStaggerAxis](/api-docs/clay-native/ceramic/TilemapStaggerAxis/) | enum | Defines the stagger axis for hexagonal and staggered tilemaps. |
| [TilemapStaggerIndex](/api-docs/clay-native/ceramic/TilemapStaggerIndex/) | enum | Defines which rows or columns are staggered in hexagonal and staggered tilemaps. |
| [TilemapTile](/api-docs/clay-native/ceramic/TilemapTile/) | abstract | Represents a single tile in a tilemap, storing both the tile ID and transformation flags. |
| [TilemapTmxParser](/api-docs/clay-native/ceramic/TilemapTmxParser/) | class | Internal parser for TMX (Tiled Map Editor) format files. |
| [Tileset](/api-docs/clay-native/ceramic/Tileset/) | class | Represents a collection of tiles used by a tilemap. |
| [TilesetGridOrientation](/api-docs/clay-native/ceramic/TilesetGridOrientation/) | enum | Defines the grid orientation for tiles within a tileset. |
| [TilesetImage](/api-docs/clay-native/ceramic/TilesetImage/) | class | Represents the image resource used by a tileset. |
| [TileSlope](/api-docs/clay-native/ceramic/TileSlope/) | class | Defines slope collision data for a tile in a tileset. |

## Ldtk

| Type | Kind | Description |
|------|------|-------------|
| [LdtkAutoLayerRuleDefinition](/api-docs/clay-native/ceramic/LdtkAutoLayerRuleDefinition/) | class | This complex section isn't meant to be used by game devs according to LDtk documentation, |
| [LdtkAutoRuleGroup](/api-docs/clay-native/ceramic/LdtkAutoRuleGroup/) | class |  |
| [LdtkBackgroundPosition](/api-docs/clay-native/ceramic/LdtkBackgroundPosition/) | class |  |
| [LdtkCheckerMode](/api-docs/clay-native/ceramic/LdtkCheckerMode/) | abstract |  |
| [LdtkData](/api-docs/clay-native/ceramic/LdtkData/) | class | Root class representing an LDtk project data structure. |
| [LdtkDataHelpers](/api-docs/clay-native/ceramic/LdtkDataHelpers/) | class |  |
| [LdtkDefinitions](/api-docs/clay-native/ceramic/LdtkDefinitions/) | class | Contains all the definitions used in an LDtk project. |
| [LdtkEmbedAtlas](/api-docs/clay-native/ceramic/LdtkEmbedAtlas/) | abstract |  |
| [LdtkEntityDefinition](/api-docs/clay-native/ceramic/LdtkEntityDefinition/) | class | Defines an entity type that can be placed in levels. |
| [LdtkEntityInstance](/api-docs/clay-native/ceramic/LdtkEntityInstance/) | class | An instance of an entity placed in a level. |
| [LdtkEnumDefinition](/api-docs/clay-native/ceramic/LdtkEnumDefinition/) | class |  |
| [LdtkEnumTag](/api-docs/clay-native/ceramic/LdtkEnumTag/) | class |  |
| [LdtkEnumValueDefinition](/api-docs/clay-native/ceramic/LdtkEnumValueDefinition/) | class |  |
| [LdtkFieldDefinition](/api-docs/clay-native/ceramic/LdtkFieldDefinition/) | class |  |
| [LdtkFieldInstance](/api-docs/clay-native/ceramic/LdtkFieldInstance/) | class | An instance of a custom field value. |
| [LdtkIntGridValue](/api-docs/clay-native/ceramic/LdtkIntGridValue/) | class |  |
| [LdtkLayerDefinition](/api-docs/clay-native/ceramic/LdtkLayerDefinition/) | class | Defines a layer type that can be used in levels. |
| [LdtkLayerInstance](/api-docs/clay-native/ceramic/LdtkLayerInstance/) | class | An instance of a layer in a level. |
| [LdtkLayerType](/api-docs/clay-native/ceramic/LdtkLayerType/) | abstract |  |
| [LdtkLevel](/api-docs/clay-native/ceramic/LdtkLevel/) | class | Represents a single level in an LDtk world. |
| [LdtkLevelLocation](/api-docs/clay-native/ceramic/LdtkLevelLocation/) | abstract |  |
| [LdtkLevelNeighbour](/api-docs/clay-native/ceramic/LdtkLevelNeighbour/) | class |  |
| [LdtkRenderMode](/api-docs/clay-native/ceramic/LdtkRenderMode/) | abstract |  |
| [LdtkTileCustomData](/api-docs/clay-native/ceramic/LdtkTileCustomData/) | class |  |
| [LdtkTileMode](/api-docs/clay-native/ceramic/LdtkTileMode/) | abstract |  |
| [LdtkTileRenderMode](/api-docs/clay-native/ceramic/LdtkTileRenderMode/) | abstract |  |
| [LdtkTilesetDefinition](/api-docs/clay-native/ceramic/LdtkTilesetDefinition/) | class |  |
| [LdtkTilesetRectangle](/api-docs/clay-native/ceramic/LdtkTilesetRectangle/) | class | This object represents a custom sub rectangle in a Tileset image. |
| [LdtkTocEntry](/api-docs/clay-native/ceramic/LdtkTocEntry/) | class | Represents a Table of Contents entry for entities marked with exportToToc. |
| [LdtkTocInstanceData](/api-docs/clay-native/ceramic/LdtkTocInstanceData/) | class | Contains instance data for an entity referenced in the table of contents. |
| [LdtkVisual](/api-docs/clay-native/ceramic/LdtkVisual/) | class | A default visual implementation to render LDtk entities. |
| [LdtkWorld](/api-docs/clay-native/ceramic/LdtkWorld/) | class | Represents a world in an LDtk project. |
| [LdtkWorldLayout](/api-docs/clay-native/ceramic/LdtkWorldLayout/) | abstract |  |
| [TilemapLdtkParser](/api-docs/clay-native/ceramic/TilemapLdtkParser/) | class | Parser that converts LDtk level data into Ceramic tilemap data structures. |
| [TilemapLdtkParser_Fields_](/api-docs/clay-native/ceramic/_TilemapLdtkParser/TilemapLdtkParser_Fields_/) | class |  |

## Spine

| Type | Kind | Description |
|------|------|-------------|
| [BindSlotOptions](/api-docs/clay-native/ceramic/BindSlotOptions/) | typedef | Configuration options for binding Spine slots together. |
| [ConvertSpineData](/api-docs/clay-native/ceramic/ConvertSpineData/) | class | Converter for Spine animation data fields in entity components. |
| [SlotInfo](/api-docs/clay-native/ceramic/SlotInfo/) | class | Information about a slot being updated during rendering. |
| [Spine](/api-docs/clay-native/ceramic/Spine/) | class | Spine animation runtime for Ceramic engine. |
| [SpineAsset](/api-docs/clay-native/ceramic/SpineAsset/) | class | Asset loader for Spine 2D skeletal animation data. |
| [SpineBindVisual](/api-docs/clay-native/ceramic/SpineBindVisual/) | class | Utility class for binding Ceramic visuals to Spine skeleton slots. |
| [SpineBindVisualOptions](/api-docs/clay-native/ceramic/SpineBindVisualOptions/) | class | Configuration options for binding a Ceramic visual to a Spine slot. |
| [SpineBounds](/api-docs/clay-native/ceramic/SpineBounds/) | class | Data structure representing the computed bounding box of a Spine animation. |
| [SpineColors](/api-docs/clay-native/ceramic/SpineColors/) | class | Utility class for extracting color information from Spine animation slots. |
| [SpineData](/api-docs/clay-native/ceramic/SpineData/) | class | Container for loaded Spine animation data, including skeleton structure and texture atlas. |
| [SpineFile](/api-docs/clay-native/ceramic/SpineFile/) | class | Implementation of Spine's FileHandle interface for Ceramic. |
| [SpineListener](/api-docs/clay-native/ceramic/SpineListener/) | class | Internal listener for Spine animation state events. |
| [SpineMontage](/api-docs/clay-native/ceramic/SpineMontage/) | class | A powerful utility for managing and orchestrating Spine animations as a cohesive montage. |
| [SpineMontageAnimation](/api-docs/clay-native/ceramic/SpineMontageAnimation/) | class | Configuration data for a single animation within a SpineMontage. |
| [SpineMontageDefaults](/api-docs/clay-native/ceramic/SpineMontageDefaults/) | class | Default configuration values for animations in a SpineMontage. |
| [SpineMontageSettings](/api-docs/clay-native/ceramic/SpineMontageSettings/) | class | Complete configuration for initializing a SpineMontage. |
| [SpineMontageSpineSettings](/api-docs/clay-native/ceramic/SpineMontageSpineSettings/) | class | Configuration for the Spine instance used by a SpineMontage. |
| [SpinePlugin](/api-docs/clay-native/ceramic/SpinePlugin/) | class | Plugin that integrates the Spine 2D skeletal animation runtime into Ceramic. |
| [SpineSystem](/api-docs/clay-native/ceramic/SpineSystem/) | class | System responsible for updating all active Spine instances in the application. |
| [SpineTextureLoader](/api-docs/clay-native/ceramic/SpineTextureLoader/) | class | Custom texture loader implementation for integrating Spine with Ceramic's asset system. |
| [AlphaTimeline](/api-docs/clay-native/spine/AlphaTimeline/) | class | Changes the alpha for a slot's {@link Slot#getColor()}. |
| [Animation](/api-docs/clay-native/spine/Animation/) | class | Stores a list of timelines to animate a skeleton's pose over time. |
| [AnimationState](/api-docs/clay-native/spine/AnimationState/) | class | Applies animations over time, queues animations for later playback, mixes (crossfading) between a... |
| [AnimationStateAdapter](/api-docs/clay-native/spine/AnimationStateAdapter/) | class |  |
| [AnimationStateData](/api-docs/clay-native/spine/AnimationStateData/) | class | Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed. |
| [AnimationStateDataKey](/api-docs/clay-native/spine/AnimationStateDataKey/) | class |  |
| [AnimationStateListener](/api-docs/clay-native/spine/AnimationStateListener/) | interface | The interface to implement for receiving TrackEntry events. |
| [AtlasAttachmentLoader](/api-docs/clay-native/spine/attachments/AtlasAttachmentLoader/) | class | An {@link AttachmentLoader} that configures attachments using texture regions from an {@link Atlas}. |
| [Attachment](/api-docs/clay-native/spine/attachments/Attachment/) | class | The base class for all attachments. |
| [AttachmentLoader](/api-docs/clay-native/spine/attachments/AttachmentLoader/) | interface | The interface which can be implemented to customize creating and populating attachments. |
| [AttachmentType](/api-docs/clay-native/spine/attachments/AttachmentType/) | abstract | Spine Runtimes License Agreement |
| [AttachmentType_enum](/api-docs/clay-native/spine/attachments/AttachmentType_enum/) | class |  |
| [BoundingBoxAttachment](/api-docs/clay-native/spine/attachments/BoundingBoxAttachment/) | class | An attachment with vertices that make up a polygon. |
| [ClippingAttachment](/api-docs/clay-native/spine/attachments/ClippingAttachment/) | class | An attachment with vertices that make up a polygon used for clipping the rendering of other attac... |
| [MeshAttachment](/api-docs/clay-native/spine/attachments/MeshAttachment/) | class | An attachment that displays a textured mesh. |
| [PathAttachment](/api-docs/clay-native/spine/attachments/PathAttachment/) | class | An attachment whose vertices make up a composite Bezier curve. |
| [PointAttachment](/api-docs/clay-native/spine/attachments/PointAttachment/) | class | An attachment which is a single point and a rotation. |
| [RegionAttachment](/api-docs/clay-native/spine/attachments/RegionAttachment/) | class | An attachment that displays a textured quadrilateral. |
| [VertexAttachment](/api-docs/clay-native/spine/attachments/VertexAttachment/) | class | Base class for an attachment with vertices that are transformed by one or more bones and can be d... |
| [AttachmentTimeline](/api-docs/clay-native/spine/AttachmentTimeline/) | class | Changes a slot's {@link Slot#getAttachment()}. |
| [BlendMode](/api-docs/clay-native/spine/BlendMode/) | abstract | Determines how images are blended with existing pixels when drawn. |
| [BlendMode_enum](/api-docs/clay-native/spine/BlendMode_enum/) | class |  |
| [Bone](/api-docs/clay-native/spine/Bone/) | class | Stores a bone's current pose. |
| [BoneData](/api-docs/clay-native/spine/BoneData/) | class | Stores the setup pose for a {@link Bone}. |
| [BoneTimeline](/api-docs/clay-native/spine/BoneTimeline/) | interface | An interface for timelines which change the property of a bone. |
| [ConstraintData](/api-docs/clay-native/spine/ConstraintData/) | class | The base class for all constraint datas. |
| [CurveTimeline](/api-docs/clay-native/spine/CurveTimeline/) | class | The base class for timelines that interpolate between frame values using stepped, linear, or a Be... |
| [CurveTimeline1](/api-docs/clay-native/spine/CurveTimeline1/) | class | The base class for a {@link CurveTimeline} that sets one property. |
| [CurveTimeline2](/api-docs/clay-native/spine/CurveTimeline2/) | class | The base class for a {@link CurveTimeline} which sets two properties. |
| [DeformTimeline](/api-docs/clay-native/spine/DeformTimeline/) | class | Changes a slot's {@link Slot#getDeform()} to deform a {@link VertexAttachment}. |
| [DrawOrderTimeline](/api-docs/clay-native/spine/DrawOrderTimeline/) | class | Changes a skeleton's {@link Skeleton#getDrawOrder()}. |
| [Event](/api-docs/clay-native/spine/Event/) | class | Stores the current pose values for an {@link Event}. |
| [EventData](/api-docs/clay-native/spine/EventData/) | class | Stores the setup pose values for an {@link Event}. |
| [EventQueue](/api-docs/clay-native/spine/EventQueue/) | class |  |
| [EventTimeline](/api-docs/clay-native/spine/EventTimeline/) | class | Fires an {@link Event} when specific animation times are reached. |
| [EventType](/api-docs/clay-native/spine/EventType/) | abstract |  |
| [EventType_enum](/api-docs/clay-native/spine/EventType_enum/) | class |  |
| [IkConstraint](/api-docs/clay-native/spine/IkConstraint/) | class | Stores the current pose for an IK constraint. |
| [IkConstraintData](/api-docs/clay-native/spine/IkConstraintData/) | class | Stores the setup pose for an {@link IkConstraint}. |
| [IkConstraintTimeline](/api-docs/clay-native/spine/IkConstraintTimeline/) | class | Changes an IK constraint's {@link IkConstraint#getMix()}, {@link IkConstraint#getSoftness()}, |
| [LinkedMesh](/api-docs/clay-native/spine/LinkedMesh/) | class |  |
| [MixBlend](/api-docs/clay-native/spine/MixBlend/) | abstract | Controls how timeline values are mixed with setup pose values or current pose values when a timel... |
| [MixBlend_enum](/api-docs/clay-native/spine/MixBlend_enum/) | class |  |
| [MixDirection](/api-docs/clay-native/spine/MixDirection/) | abstract | Indicates whether a timeline's <code>alpha</code> is mixing out over time toward 0 (the setup or ... |
| [MixDirection_enum](/api-docs/clay-native/spine/MixDirection_enum/) | class |  |
| [PathConstraint](/api-docs/clay-native/spine/PathConstraint/) | class | Stores the current pose for a path constraint. |
| [PathConstraintData](/api-docs/clay-native/spine/PathConstraintData/) | class | Stores the setup pose for a {@link PathConstraint}. |
| [PathConstraintMixTimeline](/api-docs/clay-native/spine/PathConstraintMixTimeline/) | class | Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#get... |
| [PathConstraintPositionTimeline](/api-docs/clay-native/spine/PathConstraintPositionTimeline/) | class | Changes a path constraint's {@link PathConstraint#getPosition()}. |
| [PathConstraintSpacingTimeline](/api-docs/clay-native/spine/PathConstraintSpacingTimeline/) | class | Changes a path constraint's {@link PathConstraint#getSpacing()}. |
| [PositionMode](/api-docs/clay-native/spine/PositionMode/) | abstract | Controls how the first bone is positioned along the path. |
| [PositionMode_enum](/api-docs/clay-native/spine/PositionMode_enum/) | class |  |
| [Property](/api-docs/clay-native/spine/Property/) | abstract |  |
| [Property_enum](/api-docs/clay-native/spine/Property_enum/) | class |  |
| [RGB2Timeline](/api-docs/clay-native/spine/RGB2Timeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two colo... |
| [RGBA2Timeline](/api-docs/clay-native/spine/RGBA2Timeline/) | class | Changes a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two color tinting. |
| [RGBATimeline](/api-docs/clay-native/spine/RGBATimeline/) | class | Changes a slot's {@link Slot#getColor()}. |
| [RGBTimeline](/api-docs/clay-native/spine/RGBTimeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()}. |
| [RotateMode](/api-docs/clay-native/spine/RotateMode/) | abstract | Controls how bones are rotated, translated, and scaled to match the path. |
| [RotateMode_enum](/api-docs/clay-native/spine/RotateMode_enum/) | class |  |
| [RotateTimeline](/api-docs/clay-native/spine/RotateTimeline/) | class | Changes a bone's local {@link Bone#getRotation()}. |
| [ScaleTimeline](/api-docs/clay-native/spine/ScaleTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()} and {@link Bone#getScaleY()}. |
| [ScaleXTimeline](/api-docs/clay-native/spine/ScaleXTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()}. |
| [ScaleYTimeline](/api-docs/clay-native/spine/ScaleYTimeline/) | class | Changes a bone's local {@link Bone#getScaleY()}. |
| [ShearTimeline](/api-docs/clay-native/spine/ShearTimeline/) | class | Changes a bone's local {@link Bone#getShearX()} and {@link Bone#getShearY()}. |
| [ShearXTimeline](/api-docs/clay-native/spine/ShearXTimeline/) | class | Changes a bone's local {@link Bone#getShearX()}. |
| [ShearYTimeline](/api-docs/clay-native/spine/ShearYTimeline/) | class | Changes a bone's local {@link Bone#getShearY()}. |
| [Skeleton](/api-docs/clay-native/spine/Skeleton/) | class | Stores the current pose for a skeleton. |
| [SkeletonBounds](/api-docs/clay-native/spine/SkeletonBounds/) | class | Collects each visible {@link BoundingBoxAttachment} and computes the world vertices for its polygon. |
| [SkeletonData](/api-docs/clay-native/spine/SkeletonData/) | class | Stores the setup pose and all of the stateless data for a skeleton. |
| [SkeletonJson](/api-docs/clay-native/spine/SkeletonJson/) | class | Loads skeleton data in the Spine JSON format. |
| [SkeletonLoader](/api-docs/clay-native/spine/SkeletonLoader/) | class | Base class for loading skeleton data from a file. |
| [Skin](/api-docs/clay-native/spine/Skin/) | class | Stores attachments by slot index and attachment name. |
| [SkinEntry](/api-docs/clay-native/spine/SkinEntry/) | class | Stores an entry in the skin consisting of the slot index and the attachment name. |
| [Slot](/api-docs/clay-native/spine/Slot/) | class | Stores a slot's current pose. |
| [SlotData](/api-docs/clay-native/spine/SlotData/) | class | Stores the setup pose for a {@link Slot}. |
| [SlotTimeline](/api-docs/clay-native/spine/SlotTimeline/) | interface | An interface for timelines which change the property of a slot. |
| [SpacingMode](/api-docs/clay-native/spine/SpacingMode/) | abstract | Controls how bones after the first bone are positioned along the path. |
| [SpacingMode_enum](/api-docs/clay-native/spine/SpacingMode_enum/) | class |  |
| [Error](/api-docs/clay-native/spine/support/error/Error/) | class |  |
| [IllegalArgumentException](/api-docs/clay-native/spine/support/error/IllegalArgumentException/) | class |  |
| [IllegalStateException](/api-docs/clay-native/spine/support/error/IllegalStateException/) | class |  |
| [RuntimeException](/api-docs/clay-native/spine/support/error/RuntimeException/) | class |  |
| [ArrayExtensions](/api-docs/clay-native/spine/support/extensions/ArrayExtensions/) | class |  |
| [FileExtensions](/api-docs/clay-native/spine/support/extensions/FileExtensions/) | class |  |
| [SpineExtensions](/api-docs/clay-native/spine/support/extensions/SpineExtensions/) | class |  |
| [StringExtensions](/api-docs/clay-native/spine/support/extensions/StringExtensions/) | class |  |
| [FileHandle](/api-docs/clay-native/spine/support/files/FileHandle/) | interface |  |
| [AtlasPage](/api-docs/clay-native/spine/support/graphics/AtlasPage/) | class |  |
| [AtlasRegion](/api-docs/clay-native/spine/support/graphics/AtlasRegion/) | class |  |
| [AtlasRegionTexture](/api-docs/clay-native/spine/support/graphics/AtlasRegionTexture/) | abstract |  |
| [Color](/api-docs/clay-native/spine/support/graphics/Color/) | class | Color class ported from some of libgdx's Color code. |
| [Format](/api-docs/clay-native/spine/support/graphics/Format/) | abstract |  |
| [GL20](/api-docs/clay-native/spine/support/graphics/GL20/) | typedef |  |
| [Reader](/api-docs/clay-native/spine/support/graphics/Reader/) | class |  |
| [TextureAtlas](/api-docs/clay-native/spine/support/graphics/TextureAtlas/) | class |  |
| [TextureFilter](/api-docs/clay-native/spine/support/graphics/TextureFilter/) | abstract |  |
| [TextureLoader](/api-docs/clay-native/spine/support/graphics/TextureLoader/) | interface |  |
| [TextureRegion](/api-docs/clay-native/spine/support/graphics/TextureRegion/) | class |  |
| [TextureWrap](/api-docs/clay-native/spine/support/graphics/TextureWrap/) | class |  |
| [MathUtils](/api-docs/clay-native/spine/support/math/MathUtils/) | class |  |
| [Matrix3](/api-docs/clay-native/spine/support/math/Matrix3/) | class |  |
| [Vector2](/api-docs/clay-native/spine/support/math/Vector2/) | class |  |
| [AnimationStateMap](/api-docs/clay-native/spine/support/utils/AnimationStateMap/) | abstract |  |
| [Array](/api-docs/clay-native/spine/support/utils/Array/) | abstract |  |
| [AttachmentSet](/api-docs/clay-native/spine/support/utils/AttachmentSet/) | abstract |  |
| [AttachmentSetEntry](/api-docs/clay-native/spine/support/utils/AttachmentSetEntry/) | class |  |
| [BooleanArray](/api-docs/clay-native/spine/support/utils/BooleanArray/) | abstract |  |
| [Either](/api-docs/clay-native/spine/support/utils/Either/) | abstract | Useful to limit a Dynamic function argument's type to the specified |
| [FastCast](/api-docs/clay-native/spine/support/utils/FastCast/) | class |  |
| [FloatArray](/api-docs/clay-native/spine/support/utils/FloatArray/) | abstract |  |
| [FloatArray2D](/api-docs/clay-native/spine/support/utils/FloatArray2D/) | typedef |  |
| [IntArray](/api-docs/clay-native/spine/support/utils/IntArray/) | abstract |  |
| [IntArray2D](/api-docs/clay-native/spine/support/utils/IntArray2D/) | typedef |  |
| [JsonChild](/api-docs/clay-native/spine/support/utils/JsonChild/) | class |  |
| [JsonDynamic](/api-docs/clay-native/spine/support/utils/JsonDynamic/) | class |  |
| [JsonReader](/api-docs/clay-native/spine/support/utils/JsonReader/) | class |  |
| [JsonValue](/api-docs/clay-native/spine/support/utils/JsonValue/) | interface |  |
| [ObjectSet](/api-docs/clay-native/spine/support/utils/ObjectSet/) | abstract |  |
| [Pool](/api-docs/clay-native/spine/support/utils/Pool/) | class |  |
| [Poolable](/api-docs/clay-native/spine/support/utils/Poolable/) | interface | Objects implementing this interface will have {@link #reset()} called when passed to {@link Pool#... |
| [SerializationException](/api-docs/clay-native/spine/support/utils/SerializationException/) | class |  |
| [Short](/api-docs/clay-native/spine/support/utils/Short/) | typedef |  |
| [ShortArray](/api-docs/clay-native/spine/support/utils/ShortArray/) | typedef |  |
| [ShortArray2D](/api-docs/clay-native/spine/support/utils/ShortArray2D/) | typedef |  |
| [SnapshotArray](/api-docs/clay-native/spine/support/utils/SnapshotArray/) | class |  |
| [StdEx](/api-docs/clay-native/spine/support/utils/StdEx/) | class |  |
| [StringArray](/api-docs/clay-native/spine/support/utils/StringArray/) | typedef |  |
| [StringBuilder](/api-docs/clay-native/spine/support/utils/StringBuilder/) | abstract |  |
| [Timeline](/api-docs/clay-native/spine/Timeline/) | class | The base class for all timelines. |
| [TrackEntry](/api-docs/clay-native/spine/TrackEntry/) | class | Stores settings and other state for the playback of an animation on an {@link AnimationState} track. |
| [TransformConstraint](/api-docs/clay-native/spine/TransformConstraint/) | class | Stores the current pose for a transform constraint. |
| [TransformConstraintData](/api-docs/clay-native/spine/TransformConstraintData/) | class | Stores the setup pose for a {@link TransformConstraint}. |
| [TransformConstraintTimeline](/api-docs/clay-native/spine/TransformConstraintTimeline/) | class | Changes a transform constraint's {@link TransformConstraint#getMixRotate()}, {@link TransformCons... |
| [TransformMode](/api-docs/clay-native/spine/TransformMode/) | abstract | Determines how a bone inherits world transforms from parent bones. |
| [TransformMode_enum](/api-docs/clay-native/spine/TransformMode_enum/) | class |  |
| [TranslateTimeline](/api-docs/clay-native/spine/TranslateTimeline/) | class | Changes a bone's local {@link Bone#getX()} and {@link Bone#getY()}. |
| [TranslateXTimeline](/api-docs/clay-native/spine/TranslateXTimeline/) | class | Changes a bone's local {@link Bone#getX()}. |
| [TranslateYTimeline](/api-docs/clay-native/spine/TranslateYTimeline/) | class | Changes a bone's local {@link Bone#getY()}. |
| [Updatable](/api-docs/clay-native/spine/Updatable/) | interface | The interface for items updated by {@link Skeleton#updateWorldTransform()}. |
| [SkeletonClipping](/api-docs/clay-native/spine/utils/SkeletonClipping/) | class | Spine Runtimes License Agreement |
| [SpineUtils](/api-docs/clay-native/spine/utils/SpineUtils/) | class | Spine Runtimes License Agreement |
| [Triangulator](/api-docs/clay-native/spine/utils/Triangulator/) | class | Spine Runtimes License Agreement |
| [BindSlot](/api-docs/clay-native/ceramic/_Spine/BindSlot/) | class |  |
| [DispatchSlotInfo](/api-docs/clay-native/ceramic/_Spine/DispatchSlotInfo/) | class |  |
| [TrackEntryPool](/api-docs/clay-native/spine/_AnimationState/TrackEntryPool/) | class |  |
| [PolygonPool](/api-docs/clay-native/spine/_SkeletonBounds/PolygonPool/) | class |  |
| [Entry](/api-docs/clay-native/spine/support/utils/_AnimationStateMap/Entry/) | class |  |
| [IndicesPool](/api-docs/clay-native/spine/utils/_Triangulator/IndicesPool/) | class |  |
| [PolygonPool](/api-docs/clay-native/spine/utils/_Triangulator/PolygonPool/) | class |  |

## Script

| Type | Kind | Description |
|------|------|-------------|
| [Interp](/api-docs/clay-native/ceramic/Interp/) | class | Custom HScript interpreter with Ceramic-specific functionality. |
| [Script](/api-docs/clay-native/ceramic/Script/) | class | Dynamic scripting component for runtime code execution. |
| [ScriptContent](/api-docs/clay-native/ceramic/ScriptContent/) | typedef | Type alias for script source code content. |
| [ScriptModule](/api-docs/clay-native/ceramic/ScriptModule/) | class | Represents a script module for inter-script communication. |
| [ScriptUtils](/api-docs/clay-native/ceramic/ScriptUtils/) | class | Utilities for converting JavaScript/TypeScript syntax to HScript. |

## Sprite

| Type | Kind | Description |
|------|------|-------------|
| [AsepriteJson](/api-docs/clay-native/ceramic/AsepriteJson/) | typedef | Data structure representing the JSON format exported by Aseprite. |
| [AsepriteJsonFrame](/api-docs/clay-native/ceramic/AsepriteJsonFrame/) | typedef | Individual frame definition within the sprite sheet. |
| [AsepriteJsonFrameTag](/api-docs/clay-native/ceramic/AsepriteJsonFrameTag/) | typedef | Animation definition in Aseprite, called a "frame tag". |
| [AsepriteJsonFrameTagDirection](/api-docs/clay-native/ceramic/AsepriteJsonFrameTagDirection/) | abstract | Animation playback direction for frame tags. |
| [AsepriteJsonLayer](/api-docs/clay-native/ceramic/AsepriteJsonLayer/) | typedef | Layer information from the original Aseprite file. |
| [AsepriteJsonMeta](/api-docs/clay-native/ceramic/AsepriteJsonMeta/) | typedef | Metadata section of the Aseprite JSON export. |
| [AsepriteJsonParser](/api-docs/clay-native/ceramic/AsepriteJsonParser/) | class | Parser for Aseprite JSON format sprite sheets. |
| [AsepriteJsonRect](/api-docs/clay-native/ceramic/AsepriteJsonRect/) | typedef | Rectangle structure with position and dimensions. |
| [AsepriteJsonSize](/api-docs/clay-native/ceramic/AsepriteJsonSize/) | typedef | Size structure for dimensions without position. |
| [AsepriteJsonSlice](/api-docs/clay-native/ceramic/AsepriteJsonSlice/) | typedef | Slice definition for 9-slice scaling and UI elements. |
| [ConvertSpriteSheet](/api-docs/clay-native/ceramic/ConvertSpriteSheet/) | class | Field converter for SpriteSheet instances. |
| [Sprite](/api-docs/clay-native/ceramic/Sprite/) | class | Sprite visual that displays animations from sprite sheets. |
| [SpriteAsset](/api-docs/clay-native/ceramic/SpriteAsset/) | class | Asset loader for sprite sheets and animations. |
| [SpritePlugin](/api-docs/clay-native/ceramic/SpritePlugin/) | class | Plugin that adds sprite sheet and animation support to Ceramic. |
| [SpriteSheet](/api-docs/clay-native/ceramic/SpriteSheet/) | class | Container for sprite animations and texture atlas data. |
| [SpriteSheetAnimation](/api-docs/clay-native/ceramic/SpriteSheetAnimation/) | class | Represents a named animation sequence within a sprite sheet. |
| [SpriteSheetFrame](/api-docs/clay-native/ceramic/SpriteSheetFrame/) | class | Represents a single frame within a sprite animation. |
| [SpriteSheetParser](/api-docs/clay-native/ceramic/SpriteSheetParser/) | class | Generic sprite sheet data parser with auto-detection. |
| [SpriteSystem](/api-docs/clay-native/ceramic/SpriteSystem/) | class | System that manages automatic updates for all Sprite instances. |

## Ui

| Type | Kind | Description |
|------|------|-------------|
| [ChildrenDepth](/api-docs/clay-native/ceramic/ChildrenDepth/) | abstract | Determines how child elements are assigned depth values in the UI hierarchy. |
| [CollectionView](/api-docs/clay-native/ceramic/CollectionView/) | class | A scrollable collection view that efficiently displays large data sets using view recycling. |
| [CollectionViewDataSource](/api-docs/clay-native/ceramic/CollectionViewDataSource/) | interface | Interface for providing data to a CollectionView. |
| [CollectionViewFlowLayout](/api-docs/clay-native/ceramic/CollectionViewFlowLayout/) | class | A flow-based layout for CollectionView that arranges items in rows or columns. |
| [CollectionViewItemFrame](/api-docs/clay-native/ceramic/CollectionViewItemFrame/) | class | Represents the position and dimensions of an item in a CollectionView. |
| [CollectionViewItemPosition](/api-docs/clay-native/ceramic/CollectionViewItemPosition/) | abstract | Defines where an item should be positioned when scrolling to it in a CollectionView. |
| [CollectionViewItemsBehavior](/api-docs/clay-native/ceramic/CollectionViewItemsBehavior/) | abstract | Defines how a CollectionView manages item view creation and recycling. |
| [CollectionViewLayout](/api-docs/clay-native/ceramic/CollectionViewLayout/) | interface | Interface for custom CollectionView layout implementations. |
| [ColumnLayout](/api-docs/clay-native/ceramic/ColumnLayout/) | class | A specialized LinearLayout that arranges children vertically in a single column. |
| [ComputedViewSize](/api-docs/clay-native/ceramic/ComputedViewSize/) | class | Represents computed size information for a View during the layout process. |
| [ImageView](/api-docs/clay-native/ceramic/ImageView/) | class | A view component for displaying and laying out images with flexible scaling options. |
| [ImageViewScaling](/api-docs/clay-native/ceramic/ImageViewScaling/) | enum | Defines scaling modes for ImageView to control how images are sized within their bounds. |
| [LayersLayout](/api-docs/clay-native/ceramic/LayersLayout/) | class | A layout container that stacks children on top of each other like layers. |
| [LayoutAlign](/api-docs/clay-native/ceramic/LayoutAlign/) | enum | General-purpose alignment enumeration for UI layouts. |
| [LayoutDirection](/api-docs/clay-native/ceramic/LayoutDirection/) | enum | Defines the primary axis direction for layout arrangements. |
| [LayoutHorizontalAlign](/api-docs/clay-native/ceramic/LayoutHorizontalAlign/) | enum | Horizontal alignment options for UI elements within their containers. |
| [LayoutVerticalAlign](/api-docs/clay-native/ceramic/LayoutVerticalAlign/) | enum | Vertical alignment options for UI elements within their containers. |
| [LinearLayout](/api-docs/clay-native/ceramic/LinearLayout/) | class | A flexible layout container that arranges its children in a single line, |
| [RowLayout](/api-docs/clay-native/ceramic/RowLayout/) | class | A layout that arranges its children horizontally in a single row. |
| [ScrollView](/api-docs/clay-native/ceramic/ScrollView/) | class | A view that provides scrolling functionality for content that exceeds its bounds. |
| [TextView](/api-docs/clay-native/ceramic/TextView/) | class | A view that displays text with automatic sizing and alignment options. |
| [View](/api-docs/clay-native/ceramic/View/) | class | The base view class for building UI layouts in Ceramic. |
| [ViewLayoutMask](/api-docs/clay-native/ceramic/ViewLayoutMask/) | abstract | Bit mask that defines layout constraints for views. |
| [ViewSize](/api-docs/clay-native/ceramic/ViewSize/) | abstract | Type-safe representation of view sizing modes. |
| [ViewSystem](/api-docs/clay-native/ceramic/ViewSystem/) | class | System responsible for managing and updating the UI view layout. |

## Dialogs

| Type | Kind | Description |
|------|------|-------------|
| [Dialogs](/api-docs/clay-native/ceramic/Dialogs/) | class | Cross-platform native file dialog implementation. |
| [DialogsFileFilter](/api-docs/clay-native/ceramic/DialogsFileFilter/) | typedef | File type filter specification for native file dialogs. |
| [DialogsPlugin](/api-docs/clay-native/ceramic/DialogsPlugin/) | class | Plugin initialization for native file dialogs support. |
| [Dialogs](/api-docs/clay-native/dialogs/Dialogs/) | class |  |
| [FileFilter](/api-docs/clay-native/dialogs/FileFilter/) | typedef |  |

## Gif

| Type | Kind | Description |
|------|------|-------------|
| [GifCapture](/api-docs/clay-native/ceramic/GifCapture/) | class | Captures the screen content and creates animated GIF files. |
| [GifEncoder](/api-docs/clay-native/gif/GifEncoder/) | class |  |
| [GifFrame](/api-docs/clay-native/gif/GifFrame/) | typedef |  |
| [GifQuality](/api-docs/clay-native/gif/GifQuality/) | abstract |  |
| [GifRepeat](/api-docs/clay-native/gif/GifRepeat/) | abstract |  |
| [LzwEncoder](/api-docs/clay-native/gif/LzwEncoder/) | class |  |
| [NeuQuant](/api-docs/clay-native/gif/NeuQuant/) | class |  |

## Tracker

| Type | Kind | Description |
|------|------|-------------|
| [Assert](/api-docs/clay-native/tracker/Assert/) | class |  |
| [Autorun](/api-docs/clay-native/tracker/Autorun/) | class |  |
| [DynamicEvents](/api-docs/clay-native/tracker/DynamicEvents/) | class | Fire and listen to dynamic events. Works similarly to static events, but dynamic. |
| [Equal](/api-docs/clay-native/tracker/Equal/) | class |  |
| [EventDispatcher](/api-docs/clay-native/tracker/EventDispatcher/) | class | Event dispatcher used by DynamicEvents and Events macro as an alternative implementation |
| [Events](/api-docs/clay-native/tracker/Events/) | interface | Events allows to add strictly typed events to classes. |
| [Extensions](/api-docs/clay-native/tracker/Extensions/) | class | A bunch of static extensions to make life easier. |
| [History](/api-docs/clay-native/tracker/History/) | class |  |
| [Model](/api-docs/clay-native/tracker/Model/) | class |  |
| [Observable](/api-docs/clay-native/tracker/Observable/) | interface | Observable allows to observe properties of an object. |
| [SaveModel](/api-docs/clay-native/tracker/SaveModel/) | class |  |
| [Serializable](/api-docs/clay-native/tracker/Serializable/) | interface |  |
| [Serialize](/api-docs/clay-native/tracker/Serialize/) | class |  |
| [SerializeChangeset](/api-docs/clay-native/tracker/SerializeChangeset/) | class |  |
| [SerializeModel](/api-docs/clay-native/tracker/SerializeModel/) | class | Utility to serialize a model object (and its children) continuously and efficiently |
| [ShareChangeset](/api-docs/clay-native/tracker/ShareChangeset/) | class |  |
| [ShareItem](/api-docs/clay-native/tracker/ShareItem/) | class |  |
| [ShareItemAction](/api-docs/clay-native/tracker/ShareItemAction/) | abstract |  |
| [ShareModel](/api-docs/clay-native/tracker/ShareModel/) | class |  |
| [Tracker](/api-docs/clay-native/tracker/Tracker/) | class |  |
| [Utils](/api-docs/clay-native/tracker/Utils/) | class |  |
| [EventDispatcherItem](/api-docs/clay-native/tracker/_EventDispatcher/EventDispatcherItem/) | class |  |

## Elements

| Type | Kind | Description |
|------|------|-------------|
| [ArrayPointer](/api-docs/clay-native/elements/ArrayPointer/) | typedef | Function type for accessing and manipulating arrays by reference. |
| [BaseTextFieldView](/api-docs/clay-native/elements/BaseTextFieldView/) | class | Base class for text field UI elements with autocomplete functionality. |
| [BiBorderedTriangle](/api-docs/clay-native/elements/BiBorderedTriangle/) | class | A triangular shape with customizable border rendering. |
| [BooleanFieldView](/api-docs/clay-native/elements/BooleanFieldView/) | class | A toggle switch UI element for boolean (true/false) values. |
| [BoolPointer](/api-docs/clay-native/elements/BoolPointer/) | typedef | Function type for accessing and modifying boolean values by reference. |
| [Button](/api-docs/clay-native/elements/Button/) | class | A clickable button UI element with text content. |
| [CellCollectionView](/api-docs/clay-native/elements/CellCollectionView/) | class | A themed collection view for displaying cells with built-in scrolling and filtering. |
| [CellView](/api-docs/clay-native/elements/CellView/) | class | A themeable cell view for list or collection display with interactive features. |
| [CheckStatus](/api-docs/clay-native/elements/CheckStatus/) | abstract | Represents the status of a checkbox or toggle control with change tracking. |
| [ChoiceStatus](/api-docs/clay-native/elements/ChoiceStatus/) | abstract | Represents the status of a choice selection with special states. |
| [ClickableIconView](/api-docs/clay-native/elements/ClickableIconView/) | class | An interactive icon button that responds to clicks and hover states. |
| [ColorFieldView](/api-docs/clay-native/elements/ColorFieldView/) | class | A color input field with an integrated color picker popup. |
| [ColorPickerHSBGradientView](/api-docs/clay-native/elements/ColorPickerHSBGradientView/) | class | A gradient color selector for HSB (Hue, Saturation, Brightness) color space. |
| [ColorPickerHSBSpectrumView](/api-docs/clay-native/elements/ColorPickerHSBSpectrumView/) | class | A vertical hue spectrum selector for HSB color space. |
| [ColorPickerHSLuvGradientView](/api-docs/clay-native/elements/ColorPickerHSLuvGradientView/) | class | A color picker gradient view using the HSLuv color space for perceptually uniform color selection. |
| [ColorPickerHSLuvSpectrumView](/api-docs/clay-native/elements/ColorPickerHSLuvSpectrumView/) | class | A vertical spectrum view for HSLuv color selection showing lightness values. |
| [ColorPickerPaletteColorView](/api-docs/clay-native/elements/ColorPickerPaletteColorView/) | class | A single color swatch in a color picker palette. |
| [ColorPickerView](/api-docs/clay-native/elements/ColorPickerView/) | class | A comprehensive color picker interface combining multiple color selection methods. |
| [ConfirmStatus](/api-docs/clay-native/elements/ConfirmStatus/) | abstract | Represents the status of a confirmation dialog or action. |
| [Context](/api-docs/clay-native/elements/Context/) | class | Global context singleton for the elements UI system. |
| [CrossX](/api-docs/clay-native/elements/CrossX/) | class | A visual component that renders an X-shaped cross icon. |
| [DragDrop](/api-docs/clay-native/elements/DragDrop/) | class | A component that enables drag-and-drop functionality for visuals. |
| [EditTextStatus](/api-docs/clay-native/elements/EditTextStatus/) | abstract | Represents the status of text editing operations using bit flags. |
| [Entypo](/api-docs/clay-native/elements/Entypo/) | abstract | Entypo icon font character codes. |
| [EntypoIconView](/api-docs/clay-native/elements/EntypoIconView/) | class | A view component for displaying Entypo font icons. |
| [EnumAbstractInfo](/api-docs/clay-native/elements/EnumAbstractInfo/) | class | Runtime information container for enum abstract types. |
| [EnumValuePointer](/api-docs/clay-native/elements/EnumValuePointer/) | typedef | Type alias for enum value pointers in the elements UI system. |
| [FieldSystem](/api-docs/clay-native/elements/FieldSystem/) | class | Central system for managing field focus in the Elements UI framework. |
| [FieldView](/api-docs/clay-native/elements/FieldView/) | class | Base class for interactive field views in the Elements UI framework. |
| [FloatPointer](/api-docs/clay-native/elements/FloatPointer/) | typedef | Function type for accessing and modifying floating-point values by reference. |
| [FormLayout](/api-docs/clay-native/elements/FormLayout/) | class | A specialized column layout designed for forms in the Elements UI framework. |
| [Handle](/api-docs/clay-native/elements/Handle/) | typedef | A type alias for integer handles used throughout the Elements UI framework. |
| [Im](/api-docs/clay-native/elements/Im/) | class | Immediate mode UI system for Ceramic inspired by Dear ImGui. |
| [ImRowLayout](/api-docs/clay-native/elements/ImRowLayout/) | class | A specialized row layout for the immediate mode UI system. |
| [ImSystem](/api-docs/clay-native/elements/ImSystem/) | class | The core system that manages the immediate mode UI rendering pipeline. |
| [InfoStatus](/api-docs/clay-native/elements/InfoStatus/) | abstract | Represents the status of an informational dialog or notification. |
| [InputStyle](/api-docs/clay-native/elements/InputStyle/) | enum | Defines the visual style options for input fields in the Elements UI system. |
| [IntPointer](/api-docs/clay-native/elements/IntPointer/) | typedef |  |
| [ItalicText](/api-docs/clay-native/elements/ItalicText/) | class | A component that applies italic-style skewing to Text visuals. |
| [LabeledView](/api-docs/clay-native/elements/LabeledView/) | class | A container that pairs a text label with any view, providing flexible label positioning. |
| [LabelPosition](/api-docs/clay-native/elements/LabelPosition/) | abstract | Enumeration defining the position of a label relative to its associated view. |
| [LabelView](/api-docs/clay-native/elements/LabelView/) | class | A themed text label for UI forms and layouts. |
| [ListStatus](/api-docs/clay-native/elements/ListStatus/) | abstract | Abstract wrapper for tracking list view state changes and item operations. |
| [ListView](/api-docs/clay-native/elements/ListView/) | class | A comprehensive list view with sorting, item management, and interaction features. |
| [ListViewDataSource](/api-docs/clay-native/elements/ListViewDataSource/) | class | Data source implementation for ListView's collection view. |
| [PendingDialog](/api-docs/clay-native/elements/PendingDialog/) | class | Model representing a pending dialog box with user interaction. |
| [PromptStatus](/api-docs/clay-native/elements/PromptStatus/) | abstract | Abstract type for tracking the completion status of prompt dialogs. |
| [RelatedToFieldView](/api-docs/clay-native/elements/RelatedToFieldView/) | interface | Interface for views that are related to or associated with a FieldView. |
| [SanitizeTextField](/api-docs/clay-native/elements/SanitizeTextField/) | class | Advanced text field sanitization utility with mathematical operation support. |
| [Scrollbar](/api-docs/clay-native/elements/Scrollbar/) | class | A basic scrollbar visual component that provides visual feedback for scrollable content. |
| [ScrollbarVisibility](/api-docs/clay-native/elements/ScrollbarVisibility/) | abstract | Enumeration defining different scrollbar visibility behaviors for scrollable containers. |
| [ScrollingLayout](/api-docs/clay-native/elements/ScrollingLayout/) | class | A scrollable container that wraps a layout view with optional filtering and borders. |
| [SelectFieldView](/api-docs/clay-native/elements/SelectFieldView/) | class | A dropdown selection field that allows users to choose from a predefined list of options. |
| [SelectListView](/api-docs/clay-native/elements/SelectListView/) | class | A scrollable list view for displaying selectable items in dropdown controls. |
| [Separator](/api-docs/clay-native/elements/Separator/) | class | A horizontal line separator for visually dividing content sections. |
| [SliderFieldView](/api-docs/clay-native/elements/SliderFieldView/) | class | A numeric input field with an integrated slider for intuitive value adjustment. |
| [StringPointer](/api-docs/clay-native/elements/StringPointer/) | typedef | Function type for accessing and modifying string values by reference. |
| [TabFocus](/api-docs/clay-native/elements/TabFocus/) | class | Component for managing keyboard-based focus navigation using Tab key. |
| [TabFocusable](/api-docs/clay-native/elements/TabFocusable/) | interface | Interface for elements that can participate in Tab key focus navigation. |
| [TabsLayout](/api-docs/clay-native/elements/TabsLayout/) | class | A horizontal tab layout component for organizing content into multiple pages. |
| [TabState](/api-docs/clay-native/elements/TabState/) | abstract | Represents the possible states of a tab in a tab control. |
| [TextFieldKind](/api-docs/clay-native/elements/TextFieldKind/) | enum | Defines the different types of text field inputs available. |
| [TextFieldView](/api-docs/clay-native/elements/TextFieldView/) | class | A flexible text input field view with support for various input types and validation. |
| [TextUtils](/api-docs/clay-native/elements/TextUtils/) | class | Utility class providing various text manipulation and transformation functions. |
| [Theme](/api-docs/clay-native/elements/Theme/) | class | Comprehensive theme configuration for the elements UI system. |
| [Tooltip](/api-docs/clay-native/elements/Tooltip/) | class | A tooltip component that displays informational text when hovering over visual elements. |
| [UserData](/api-docs/clay-native/elements/UserData/) | class | Persistent user data model for storing application-specific user preferences and state. |
| [VisualContainerView](/api-docs/clay-native/elements/VisualContainerView/) | class | A view container that displays and manages a single visual element with scaling and filtering opt... |
| [VisualContainerViewScaling](/api-docs/clay-native/elements/VisualContainerViewScaling/) | enum | Defines the scaling behavior options for VisualContainerView. |
| [Window](/api-docs/clay-native/elements/Window/) | class | A draggable window container for UI elements. |
| [WindowData](/api-docs/clay-native/elements/WindowData/) | class | Persistent data model for window state and configuration. |
| [WindowItem](/api-docs/clay-native/elements/WindowItem/) | class | A versatile data container for window UI elements with efficient pooling and recycling. |
| [WindowItemKind](/api-docs/clay-native/elements/WindowItemKind/) | abstract | Window item types enumeration. |

## Clay

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/clay-native/backend/Audio/) | class | Clay backend audio implementation providing comprehensive sound management. |
| [AudioFilterBuffer](/api-docs/clay-native/backend/AudioFilterBuffer/) | typedef | Platform-specific audio filter buffer implementation for real-time audio processing. |
| [AudioFilterInfo](/api-docs/clay-native/backend/AudioFilterInfo/) | class | Internal metadata for audio filters attached to a bus. |
| [AudioHandle](/api-docs/clay-native/backend/AudioHandle/) | typedef | Handle to an individual audio playback instance in the Clay audio system. |
| [AudioResource](/api-docs/clay-native/backend/AudioResource/) | typedef | Represents loaded audio data in the Clay backend audio system. |
| [Backend](/api-docs/clay-native/backend/Backend/) | class |  |
| [Binaries](/api-docs/clay-native/backend/Binaries/) | class | Clay backend implementation for loading binary data files. |
| [BlendMode](/api-docs/clay-native/backend/BlendMode/) | typedef | Type alias for the Clay engine's blend mode enumeration. |
| [ClayEvents](/api-docs/clay-native/backend/ClayEvents/) | class | Event handler for the Clay backend that bridges low-level Clay engine events |
| [Clipboard](/api-docs/clay-native/backend/Clipboard/) | class | Clay backend implementation for system clipboard operations. |
| [Draw](/api-docs/clay-native/backend/Draw/) | class |  |
| [ElectronRunner](/api-docs/clay-native/backend/ElectronRunner/) | class | Static holder for the Electron runner instance used in web builds. |
| [Float32Array](/api-docs/clay-native/backend/Float32Array/) | typedef | Type alias for Clay's Float32Array implementation. |
| [Info](/api-docs/clay-native/backend/Info/) | class | Clay backend implementation providing platform and asset information. |
| [Input](/api-docs/clay-native/backend/Input/) | class | Clay backend input handling implementation. |
| [IO](/api-docs/clay-native/backend/IO/) | class | Clay backend implementation for persistent key-value storage. |
| [LoadAudioOptions](/api-docs/clay-native/backend/LoadAudioOptions/) | typedef | Configuration options for loading audio resources in the Clay backend. |
| [LoadBinaryOptions](/api-docs/clay-native/backend/LoadBinaryOptions/) | typedef | Configuration options for loading binary data in the Clay backend. |
| [LoadTextOptions](/api-docs/clay-native/backend/LoadTextOptions/) | typedef | Configuration options for loading text files in the Clay backend. |
| [LoadTextureOptions](/api-docs/clay-native/backend/LoadTextureOptions/) | typedef | Configuration options for loading texture/image resources in the Clay backend. |
| [Main](/api-docs/clay-native/backend/Main/) | class | Main entry point for Clay backend applications. |
| [NativeMac](/api-docs/clay-native/backend/NativeMac/) | class | Native macOS-specific functionality for the Clay backend. |
| [Screen](/api-docs/clay-native/backend/Screen/) | class | Clay backend screen and window management implementation. |
| [Shader](/api-docs/clay-native/backend/Shader/) | abstract | Abstract type representing a compiled GPU shader program in the Clay backend. |
| [ShaderImpl](/api-docs/clay-native/backend/ShaderImpl/) | class | Clay backend implementation of GPU shader programs. |
| [Shaders](/api-docs/clay-native/backend/Shaders/) | class | Clay backend implementation of shader program management. |
| [TextInput](/api-docs/clay-native/backend/TextInput/) | class | Clay backend implementation for system text input handling. |
| [Texts](/api-docs/clay-native/backend/Texts/) | class | Clay backend implementation for loading text files. |
| [Texture](/api-docs/clay-native/backend/Texture/) | typedef | Represents a GPU texture resource in the Clay backend. |
| [TextureId](/api-docs/clay-native/backend/TextureId/) | typedef | Represents a GPU texture identifier in the Clay backend. |
| [TextureIdClayImpl](/api-docs/clay-native/backend/TextureIdClayImpl/) | abstract |  |
| [Textures](/api-docs/clay-native/backend/Textures/) | class | Clay backend implementation of texture management. |
| [UInt8Array](/api-docs/clay-native/backend/UInt8Array/) | typedef | Type alias for Clay's UInt8Array implementation. |
| [AppEventType](/api-docs/clay-native/clay/AppEventType/) | abstract |  |
| [ArrayPool](/api-docs/clay-native/clay/ArrayPool/) | typedef |  |
| [Assets](/api-docs/clay-native/clay/Assets/) | typedef |  |
| [Audio](/api-docs/clay-native/clay/Audio/) | typedef |  |
| [AudioData](/api-docs/clay-native/clay/audio/AudioData/) | class | An audio data object contains information about audio samples or streams, ready to be used. |
| [AudioDataOptions](/api-docs/clay-native/clay/audio/AudioDataOptions/) | class |  |
| [AudioEvent](/api-docs/clay-native/clay/audio/AudioEvent/) | abstract |  |
| [AudioFormat](/api-docs/clay-native/clay/audio/AudioFormat/) | abstract | The type of format data for audio |
| [AudioHandle](/api-docs/clay-native/clay/audio/AudioHandle/) | typedef | An audio handle for tracking audio instances |
| [AudioInstance](/api-docs/clay-native/clay/audio/AudioInstance/) | class |  |
| [AudioSource](/api-docs/clay-native/clay/audio/AudioSource/) | class |  |
| [AudioState](/api-docs/clay-native/clay/audio/AudioState/) | abstract |  |
| [BackgroundQueue](/api-docs/clay-native/clay/BackgroundQueue/) | class | An utility to enqueue functions and execute them in background, in a serialized way, |
| [BaseAssets](/api-docs/clay-native/clay/base/BaseAssets/) | class |  |
| [BaseAudio](/api-docs/clay-native/clay/base/BaseAudio/) | class |  |
| [BaseIO](/api-docs/clay-native/clay/base/BaseIO/) | class |  |
| [BaseRuntime](/api-docs/clay-native/clay/base/BaseRuntime/) | class |  |
| [BlendMode](/api-docs/clay-native/clay/BlendMode/) | abstract |  |
| [ArrayBuffer](/api-docs/clay-native/clay/buffers/ArrayBuffer/) | typedef |  |
| [ArrayBufferImpl](/api-docs/clay-native/clay/buffers/ArrayBufferImpl/) | abstract |  |
| [ArrayBufferIO](/api-docs/clay-native/clay/buffers/ArrayBufferIO/) | class |  |
| [ArrayBufferView](/api-docs/clay-native/clay/buffers/ArrayBufferView/) | typedef |  |
| [ArrayBufferViewImpl](/api-docs/clay-native/clay/buffers/ArrayBufferViewImpl/) | class |  |
| [Float32Array](/api-docs/clay-native/clay/buffers/Float32Array/) | typedef |  |
| [Float32ArrayImpl](/api-docs/clay-native/clay/buffers/Float32ArrayImpl/) | abstract |  |
| [Float64Array](/api-docs/clay-native/clay/buffers/Float64Array/) | typedef |  |
| [Float64ArrayImpl](/api-docs/clay-native/clay/buffers/Float64ArrayImpl/) | abstract |  |
| [Int16Array](/api-docs/clay-native/clay/buffers/Int16Array/) | typedef |  |
| [Int16ArrayImpl](/api-docs/clay-native/clay/buffers/Int16ArrayImpl/) | abstract |  |
| [Int32Array](/api-docs/clay-native/clay/buffers/Int32Array/) | typedef |  |
| [Int32ArrayImpl](/api-docs/clay-native/clay/buffers/Int32ArrayImpl/) | abstract |  |
| [Int8Array](/api-docs/clay-native/clay/buffers/Int8Array/) | typedef |  |
| [Int8ArrayImpl](/api-docs/clay-native/clay/buffers/Int8ArrayImpl/) | abstract |  |
| [TAError](/api-docs/clay-native/clay/buffers/TAError/) | enum |  |
| [TypedArrayType](/api-docs/clay-native/clay/buffers/TypedArrayType/) | abstract |  |
| [UINT](/api-docs/clay-native/clay/buffers/UINT/) | typedef |  |
| [Uint16Array](/api-docs/clay-native/clay/buffers/Uint16Array/) | typedef |  |
| [Uint16ArrayImpl](/api-docs/clay-native/clay/buffers/Uint16ArrayImpl/) | abstract |  |
| [Uint32Array](/api-docs/clay-native/clay/buffers/Uint32Array/) | typedef |  |
| [Uint32ArrayImpl](/api-docs/clay-native/clay/buffers/Uint32ArrayImpl/) | abstract |  |
| [Uint8Array](/api-docs/clay-native/clay/buffers/Uint8Array/) | typedef |  |
| [Uint8ArrayImpl](/api-docs/clay-native/clay/buffers/Uint8ArrayImpl/) | abstract |  |
| [Uint8ClampedArray](/api-docs/clay-native/clay/buffers/Uint8ClampedArray/) | typedef |  |
| [Uint8ClampedArrayImpl](/api-docs/clay-native/clay/buffers/Uint8ClampedArrayImpl/) | abstract |  |
| [Clay](/api-docs/clay-native/clay/Clay/) | class | Clay app |
| [Config](/api-docs/clay-native/clay/Config/) | class |  |
| [Events](/api-docs/clay-native/clay/Events/) | class |  |
| [Extensions](/api-docs/clay-native/clay/Extensions/) | class | A bunch of static extensions to make life easier. |
| [FileHandle](/api-docs/clay-native/clay/FileHandle/) | typedef |  |
| [FileSeek](/api-docs/clay-native/clay/FileSeek/) | typedef |  |
| [GamepadDeviceEventType](/api-docs/clay-native/clay/GamepadDeviceEventType/) | abstract | A gamepad device event type |
| [GpuShader](/api-docs/clay-native/clay/GpuShader/) | typedef |  |
| [Color](/api-docs/clay-native/clay/graphics/Color/) | class |  |
| [Graphics](/api-docs/clay-native/clay/graphics/Graphics/) | typedef |  |
| [RenderTexture](/api-docs/clay-native/clay/graphics/RenderTexture/) | class |  |
| [Shader](/api-docs/clay-native/clay/graphics/Shader/) | class |  |
| [Texture](/api-docs/clay-native/clay/graphics/Texture/) | class | A high level texture object to make it easier to manage textures |
| [TextureAndSlot](/api-docs/clay-native/clay/graphics/TextureAndSlot/) | class |  |
| [Uniforms](/api-docs/clay-native/clay/graphics/Uniforms/) | class |  |
| [Vector2](/api-docs/clay-native/clay/graphics/Vector2/) | class |  |
| [Vector3](/api-docs/clay-native/clay/graphics/Vector3/) | class |  |
| [Vector4](/api-docs/clay-native/clay/graphics/Vector4/) | class |  |
| [Image](/api-docs/clay-native/clay/Image/) | class |  |
| [Immediate](/api-docs/clay-native/clay/Immediate/) | class |  |
| [Input](/api-docs/clay-native/clay/Input/) | class |  |
| [IntMap](/api-docs/clay-native/clay/IntMap/) | typedef |  |
| [IO](/api-docs/clay-native/clay/IO/) | typedef |  |
| [KeyCode](/api-docs/clay-native/clay/KeyCode/) | abstract |  |
| [Log](/api-docs/clay-native/clay/Log/) | class |  |
| [Macros](/api-docs/clay-native/clay/Macros/) | class |  |
| [ModState](/api-docs/clay-native/clay/ModState/) | class | Input modifier state |
| [NativeAssets](/api-docs/clay-native/clay/native/NativeAssets/) | class |  |
| [NativeIO](/api-docs/clay-native/clay/native/NativeIO/) | class |  |
| [GL](/api-docs/clay-native/clay/opengl/GL/) | typedef |  |
| [GLActiveInfo](/api-docs/clay-native/clay/opengl/GLActiveInfo/) | typedef |  |
| [GLBuffer](/api-docs/clay-native/clay/opengl/GLBuffer/) | typedef |  |
| [GLContextAttributes](/api-docs/clay-native/clay/opengl/GLContextAttributes/) | typedef |  |
| [GLFramebuffer](/api-docs/clay-native/clay/opengl/GLFramebuffer/) | typedef |  |
| [GLGraphics](/api-docs/clay-native/clay/opengl/GLGraphics/) | class | A set of helpers to interact with GL stuff. |
| [GLGraphics_GpuShader](/api-docs/clay-native/clay/opengl/GLGraphics_GpuShader/) | class |  |
| [GLGraphics_RenderTarget](/api-docs/clay-native/clay/opengl/GLGraphics_RenderTarget/) | class |  |
| [GLProgram](/api-docs/clay-native/clay/opengl/GLProgram/) | typedef |  |
| [GLRenderbuffer](/api-docs/clay-native/clay/opengl/GLRenderbuffer/) | typedef |  |
| [GLShader](/api-docs/clay-native/clay/opengl/GLShader/) | typedef |  |
| [GLTexture](/api-docs/clay-native/clay/opengl/GLTexture/) | typedef |  |
| [GLUniformLocation](/api-docs/clay-native/clay/opengl/GLUniformLocation/) | typedef |  |
| [OpenGLProfile](/api-docs/clay-native/clay/OpenGLProfile/) | abstract | A type of OpenGL context profile to request. see RenderConfigOpenGL for info |
| [PremultiplyAlpha](/api-docs/clay-native/clay/PremultiplyAlpha/) | class |  |
| [RenderConfig](/api-docs/clay-native/clay/RenderConfig/) | class | Config specific to the rendering context that would be used when creating windows |
| [RenderConfigOpenGL](/api-docs/clay-native/clay/RenderConfigOpenGL/) | class | Config specific to an OpenGL rendering context. |
| [RenderTarget](/api-docs/clay-native/clay/RenderTarget/) | typedef |  |
| [Resource](/api-docs/clay-native/clay/Resource/) | class |  |
| [Runner](/api-docs/clay-native/clay/Runner/) | class | A simple Haxe class for easily running threads and calling functions on the primary thread. |
| [Runtime](/api-docs/clay-native/clay/Runtime/) | typedef |  |
| [RuntimeConfig](/api-docs/clay-native/clay/RuntimeConfig/) | typedef |  |
| [ScanCode](/api-docs/clay-native/clay/ScanCode/) | abstract |  |
| [FileHandle](/api-docs/clay-native/clay/sdl/FileHandle/) | typedef |  |
| [FileSeek](/api-docs/clay-native/clay/sdl/FileSeek/) | abstract |  |
| [SDL](/api-docs/clay-native/clay/sdl/SDL/) | class |  |
| [SDL_Extern](/api-docs/clay-native/clay/sdl/SDL_Extern/) | class |  |
| [SDLConfig](/api-docs/clay-native/clay/sdl/SDLConfig/) | class |  |
| [SDLDisplayID](/api-docs/clay-native/clay/sdl/SDLDisplayID/) | typedef |  |
| [SDLDisplayMode](/api-docs/clay-native/clay/sdl/SDLDisplayMode/) | class |  |
| [SDLDisplayModeConstPointer](/api-docs/clay-native/clay/sdl/SDLDisplayModeConstPointer/) | typedef |  |
| [SDLEvent](/api-docs/clay-native/clay/sdl/SDLEvent/) | abstract |  |
| [SDLEventPointer](/api-docs/clay-native/clay/sdl/SDLEventPointer/) | typedef |  |
| [SDLGamepadPointer](/api-docs/clay-native/clay/sdl/SDLGamepadPointer/) | typedef |  |
| [SDLGLContext](/api-docs/clay-native/clay/sdl/SDLGLContext/) | class |  |
| [SDLInitFlags](/api-docs/clay-native/clay/sdl/SDLInitFlags/) | typedef |  |
| [SDLIO](/api-docs/clay-native/clay/sdl/SDLIO/) | class |  |
| [SDLIOStreamPointer](/api-docs/clay-native/clay/sdl/SDLIOStreamPointer/) | typedef |  |
| [SDLJoystickID](/api-docs/clay-native/clay/sdl/SDLJoystickID/) | typedef |  |
| [SDLJoystickPointer](/api-docs/clay-native/clay/sdl/SDLJoystickPointer/) | typedef |  |
| [SDLNativeEvent](/api-docs/clay-native/clay/sdl/SDLNativeEvent/) | class |  |
| [SDLNativeGamepad](/api-docs/clay-native/clay/sdl/SDLNativeGamepad/) | class |  |
| [SDLNativeIOStream](/api-docs/clay-native/clay/sdl/SDLNativeIOStream/) | class |  |
| [SDLNativeJoystick](/api-docs/clay-native/clay/sdl/SDLNativeJoystick/) | class |  |
| [SDLNativePoint](/api-docs/clay-native/clay/sdl/SDLNativePoint/) | class |  |
| [SDLNativeRect](/api-docs/clay-native/clay/sdl/SDLNativeRect/) | class |  |
| [SDLNativeSize](/api-docs/clay-native/clay/sdl/SDLNativeSize/) | class |  |
| [SDLNativeSurface](/api-docs/clay-native/clay/sdl/SDLNativeSurface/) | class |  |
| [SDLNativeWindow](/api-docs/clay-native/clay/sdl/SDLNativeWindow/) | class |  |
| [SDLPoint](/api-docs/clay-native/clay/sdl/SDLPoint/) | abstract |  |
| [SDLPointPointer](/api-docs/clay-native/clay/sdl/SDLPointPointer/) | typedef |  |
| [SDLRect](/api-docs/clay-native/clay/sdl/SDLRect/) | abstract |  |
| [SDLRectConstPointer](/api-docs/clay-native/clay/sdl/SDLRectConstPointer/) | typedef |  |
| [SDLRectPointer](/api-docs/clay-native/clay/sdl/SDLRectPointer/) | typedef |  |
| [SDLRuntime](/api-docs/clay-native/clay/sdl/SDLRuntime/) | class |  |
| [SDLSize](/api-docs/clay-native/clay/sdl/SDLSize/) | abstract |  |
| [SDLSizePointer](/api-docs/clay-native/clay/sdl/SDLSizePointer/) | typedef |  |
| [SDLSurfacePointer](/api-docs/clay-native/clay/sdl/SDLSurfacePointer/) | typedef |  |
| [SDLWindowFlags](/api-docs/clay-native/clay/sdl/SDLWindowFlags/) | typedef |  |
| [SDLWindowFlagsPointer](/api-docs/clay-native/clay/sdl/SDLWindowFlagsPointer/) | typedef |  |
| [SDLWindowID](/api-docs/clay-native/clay/sdl/SDLWindowID/) | typedef |  |
| [SDLWindowPointer](/api-docs/clay-native/clay/sdl/SDLWindowPointer/) | typedef |  |
| [WindowHandle](/api-docs/clay-native/clay/sdl/WindowHandle/) | typedef |  |
| [SoloudAudio](/api-docs/clay-native/clay/soloud/SoloudAudio/) | class |  |
| [SoloudAudioData](/api-docs/clay-native/clay/soloud/SoloudAudioData/) | class |  |
| [SoloudBus](/api-docs/clay-native/clay/soloud/SoloudBus/) | class |  |
| [SoloudSound](/api-docs/clay-native/clay/soloud/SoloudSound/) | class |  |
| [TextEventType](/api-docs/clay-native/clay/TextEventType/) | abstract | A text specific event event type |
| [TextureDataType](/api-docs/clay-native/clay/TextureDataType/) | abstract |  |
| [TextureFilter](/api-docs/clay-native/clay/TextureFilter/) | abstract |  |
| [TextureFormat](/api-docs/clay-native/clay/TextureFormat/) | abstract |  |
| [TextureId](/api-docs/clay-native/clay/TextureId/) | typedef |  |
| [TextureType](/api-docs/clay-native/clay/TextureType/) | abstract |  |
| [TextureWrap](/api-docs/clay-native/clay/TextureWrap/) | abstract |  |
| [Utils](/api-docs/clay-native/clay/Utils/) | class |  |
| [WindowConfig](/api-docs/clay-native/clay/WindowConfig/) | class | Window configuration information for creating windows |
| [WindowEventType](/api-docs/clay-native/clay/WindowEventType/) | abstract |  |

## Ase

| Type | Kind | Description |
|------|------|-------------|
| [Ase](/api-docs/clay-native/ase/Ase/) | class | Aseprite file format reader/writer |
| [AseHeader](/api-docs/clay-native/ase/AseHeader/) | class |  |
| [Cel](/api-docs/clay-native/ase/Cel/) | class |  |
| [CelChunk](/api-docs/clay-native/ase/chunks/CelChunk/) | class |  |
| [CelExtraChunk](/api-docs/clay-native/ase/chunks/CelExtraChunk/) | class |  |
| [Chunk](/api-docs/clay-native/ase/chunks/Chunk/) | class |  |
| [ChunkHeader](/api-docs/clay-native/ase/chunks/ChunkHeader/) | class |  |
| [ColorProfileChunk](/api-docs/clay-native/ase/chunks/ColorProfileChunk/) | class |  |
| [ExternalFilesChunk](/api-docs/clay-native/ase/chunks/ExternalFilesChunk/) | class |  |
| [LayerBlendMode](/api-docs/clay-native/ase/chunks/LayerBlendMode/) | abstract |  |
| [LayerChunk](/api-docs/clay-native/ase/chunks/LayerChunk/) | class |  |
| [LayerFlags](/api-docs/clay-native/ase/chunks/LayerFlags/) | abstract |  |
| [LayerType](/api-docs/clay-native/ase/chunks/LayerType/) | abstract |  |
| [MaskChunk](/api-docs/clay-native/ase/chunks/MaskChunk/) | class |  |
| [OldPaleteChunk](/api-docs/clay-native/ase/chunks/OldPaleteChunk/) | class |  |
| [Packet](/api-docs/clay-native/ase/chunks/Packet/) | typedef |  |
| [PaletteChunk](/api-docs/clay-native/ase/chunks/PaletteChunk/) | class |  |
| [PaletteChunkEntry](/api-docs/clay-native/ase/chunks/PaletteChunkEntry/) | class |  |
| [SliceChunk](/api-docs/clay-native/ase/chunks/SliceChunk/) | class |  |
| [SliceKey](/api-docs/clay-native/ase/chunks/SliceKey/) | class |  |
| [Tag](/api-docs/clay-native/ase/chunks/Tag/) | typedef |  |
| [TagsChunk](/api-docs/clay-native/ase/chunks/TagsChunk/) | class |  |
| [TilesetChunk](/api-docs/clay-native/ase/chunks/TilesetChunk/) | class |  |
| [UserDataChunk](/api-docs/clay-native/ase/chunks/UserDataChunk/) | class |  |
| [Frame](/api-docs/clay-native/ase/Frame/) | class |  |
| [FrameHeader](/api-docs/clay-native/ase/FrameHeader/) | class |  |
| [Layer](/api-docs/clay-native/ase/Layer/) | class |  |
| [Palette](/api-docs/clay-native/ase/Palette/) | class |  |
| [PaletteEntry](/api-docs/clay-native/ase/PaletteEntry/) | typedef |  |
| [CelType](/api-docs/clay-native/ase/types/CelType/) | abstract |  |
| [ChunkType](/api-docs/clay-native/ase/types/ChunkType/) | abstract |  |
| [ColorDepth](/api-docs/clay-native/ase/types/ColorDepth/) | abstract |  |
| [ColorProfileType](/api-docs/clay-native/ase/types/ColorProfileType/) | abstract |  |
| [Serializable](/api-docs/clay-native/ase/types/Serializable/) | interface |  |
| [AsepriteBlendFuncs](/api-docs/clay-native/ceramic/AsepriteBlendFuncs/) | class | Blending functions that operate at pixel/color level, ported from Aseprite source code. |
| [AsepriteData](/api-docs/clay-native/ceramic/AsepriteData/) | class | Data structure containing parsed Aseprite file information. |
| [AsepriteFrame](/api-docs/clay-native/ceramic/AsepriteFrame/) | class | Represents a single frame from an Aseprite animation. |
| [AsepriteFrameLayer](/api-docs/clay-native/ceramic/AsepriteFrameLayer/) | class | Represents a single layer's data within an Aseprite frame. |
| [AsepritePalette](/api-docs/clay-native/ceramic/AsepritePalette/) | class | Represents a color palette from an Aseprite file. |
| [AsepriteParser](/api-docs/clay-native/ceramic/AsepriteParser/) | class | Parser for Aseprite (.ase/.aseprite) animation files. |
| [AsepriteTag](/api-docs/clay-native/ceramic/AsepriteTag/) | class | Represents an animation tag from an Aseprite file. |

## Format

| Type | Kind | Description |
|------|------|-------------|
| [Header](/api-docs/clay-native/format/gz/Header/) | typedef |  |
| [Reader](/api-docs/clay-native/format/gz/Reader/) | class |  |
| [InflateImpl](/api-docs/clay-native/format/tools/InflateImpl/) | typedef |  |

## Tiled

| Type | Kind | Description |
|------|------|-------------|
| [Reader](/api-docs/clay-native/format/tmx/Reader/) | class | ... |
| [TmxBaseLayer](/api-docs/clay-native/format/tmx/TmxBaseLayer/) | class |  |
| [TmxChunk](/api-docs/clay-native/format/tmx/TmxChunk/) | class | This is currently added only for infinite maps. The contents of a chunk element is same as that of |
| [TmxData](/api-docs/clay-native/format/tmx/TmxData/) | class | When no encoding or compression is given, the tiles are stored as individual XML tile elements. |
| [TmxDataCompression](/api-docs/clay-native/format/tmx/TmxDataCompression/) | enum | Compression type for data. |
| [TmxDataEncoding](/api-docs/clay-native/format/tmx/TmxDataEncoding/) | enum | Encoding of the data. |
| [TmxGroup](/api-docs/clay-native/format/tmx/TmxGroup/) | class | A group layer, used to organize the layers of the map in a hierarchy. |
| [TmxHAlign](/api-docs/clay-native/format/tmx/TmxHAlign/) | abstract |  |
| [TmxImage](/api-docs/clay-native/format/tmx/TmxImage/) | class | As of the current version of Tiled Qt, each tileset has a single image associated with it, |
| [TmxImageLayer](/api-docs/clay-native/format/tmx/TmxImageLayer/) | class | A layer consisting of a single image. |
| [TmxLayer](/api-docs/clay-native/format/tmx/TmxLayer/) | enum |  |
| [TmxMap](/api-docs/clay-native/format/tmx/TmxMap/) | class | General .tmx map file |
| [TmxObject](/api-docs/clay-native/format/tmx/TmxObject/) | class |  |
| [TmxObjectGroup](/api-docs/clay-native/format/tmx/TmxObjectGroup/) | class | Layer representing a group of objects. |
| [TmxObjectGroupDrawOrder](/api-docs/clay-native/format/tmx/TmxObjectGroupDrawOrder/) | enum | Whether the objects are drawn according to the order of appearance ("index") or sorted by their y... |
| [TmxObjectTemplate](/api-docs/clay-native/format/tmx/TmxObjectTemplate/) | class |  |
| [TmxObjectType](/api-docs/clay-native/format/tmx/TmxObjectType/) | enum | Type of the object. |
| [TmxObjectTypeProperty](/api-docs/clay-native/format/tmx/TmxObjectTypeProperty/) | class |  |
| [TmxObjectTypeTemplate](/api-docs/clay-native/format/tmx/TmxObjectTypeTemplate/) | class |  |
| [TmxOrientation](/api-docs/clay-native/format/tmx/TmxOrientation/) | enum | Map orientation |
| [TmxPoint](/api-docs/clay-native/format/tmx/TmxPoint/) | class | Utility for x/y object. Used for Polygon and Polyline object types. |
| [TmxProperties](/api-docs/clay-native/format/tmx/TmxProperties/) | abstract |  |
| [TmxPropertyType](/api-docs/clay-native/format/tmx/TmxPropertyType/) | enum |  |
| [TmxRenderOrder](/api-docs/clay-native/format/tmx/TmxRenderOrder/) | enum | Rendering order of tiles |
| [TmxStaggerAxis](/api-docs/clay-native/format/tmx/TmxStaggerAxis/) | enum |  |
| [TmxStaggerIndex](/api-docs/clay-native/format/tmx/TmxStaggerIndex/) | enum |  |
| [TmxTerrain](/api-docs/clay-native/format/tmx/TmxTerrain/) | class |  |
| [TmxText](/api-docs/clay-native/format/tmx/TmxText/) | class | Used to mark an object as a text object. Contains the actual text as character data. |
| [TmxTile](/api-docs/clay-native/format/tmx/TmxTile/) | abstract | Single tile in tile layer. |
| [TmxTileLayer](/api-docs/clay-native/format/tmx/TmxTileLayer/) | class |  |
| [TmxTileOffset](/api-docs/clay-native/format/tmx/TmxTileOffset/) | class | This element is used to specify an offset in pixels, to be applied when drawing a tile from the r... |
| [TmxTileset](/api-docs/clay-native/format/tmx/TmxTileset/) | class | Tileset |
| [TmxTilesetGrid](/api-docs/clay-native/format/tmx/TmxTilesetGrid/) | class | This element is only used in case of isometric orientation, and determines how tile overlays for ... |
| [TmxTilesetTile](/api-docs/clay-native/format/tmx/TmxTilesetTile/) | class |  |
| [TmxTilesetTileFrame](/api-docs/clay-native/format/tmx/TmxTilesetTileFrame/) | class | Animation frame of a single tile in tileset. |
| [TmxVAlign](/api-docs/clay-native/format/tmx/TmxVAlign/) | abstract |  |
| [TmxWangSet](/api-docs/clay-native/format/tmx/TmxWangSet/) | class | Defines a list of corner colors and a list of edge colors, and any number of Wang tiles using the... |
| [TmxWangSetColor](/api-docs/clay-native/format/tmx/TmxWangSetColor/) | class | A color that can be used to define the corner or an edge of a Wang tile. |
| [TmxWangSetTile](/api-docs/clay-native/format/tmx/TmxWangSetTile/) | class | Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang... |
| [Tools](/api-docs/clay-native/format/tmx/Tools/) | class | ... |
| [ImplTmxProperties](/api-docs/clay-native/format/tmx/_Data/ImplTmxProperties/) | class |  |

## Nape

| Type | Kind | Description |
|------|------|-------------|
| [NapePhysicsBodyType](/api-docs/clay-native/ceramic/NapePhysicsBodyType/) | enum | Types of physics bodies in the Nape physics engine. |
| [NapeSystem](/api-docs/clay-native/ceramic/NapeSystem/) | class | Central system managing Nape physics simulation in Ceramic. |
| [VisualNapePhysics](/api-docs/clay-native/ceramic/VisualNapePhysics/) | class | Component that links a Ceramic Visual to a Nape physics body. |
| [BodyCallback](/api-docs/clay-native/nape/callbacks/BodyCallback/) | class | Callback object for Body type events. |
| [BodyListener](/api-docs/clay-native/nape/callbacks/BodyListener/) | class | Event listener for Body type events. |
| [Callback](/api-docs/clay-native/nape/callbacks/Callback/) | class | Base type for Callback event objects. |
| [CbEvent](/api-docs/clay-native/nape/callbacks/CbEvent/) | class | Enumeration of possible callback event types. |
| [CbType](/api-docs/clay-native/nape/callbacks/CbType/) | class | Callback Type applied to Interactors and Constraints. |
| [CbTypeIterator](/api-docs/clay-native/nape/callbacks/CbTypeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CbTypeList](/api-docs/clay-native/nape/callbacks/CbTypeList/) | class | Nape list of CbType type objects |
| [ConstraintCallback](/api-docs/clay-native/nape/callbacks/ConstraintCallback/) | class | Callback object for Constraint type events. |
| [ConstraintListener](/api-docs/clay-native/nape/callbacks/ConstraintListener/) | class | Event listener for Constraint type events. |
| [InteractionCallback](/api-docs/clay-native/nape/callbacks/InteractionCallback/) | class | Callback object for Interaction type events. |
| [InteractionListener](/api-docs/clay-native/nape/callbacks/InteractionListener/) | class | Event listener for Interaction type events. |
| [InteractionType](/api-docs/clay-native/nape/callbacks/InteractionType/) | class | Enumeration of Interaction types. |
| [Listener](/api-docs/clay-native/nape/callbacks/Listener/) | class | Base type for all Nape callback listeners. |
| [ListenerIterator](/api-docs/clay-native/nape/callbacks/ListenerIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ListenerList](/api-docs/clay-native/nape/callbacks/ListenerList/) | class | Nape list of Listener type objects |
| [ListenerType](/api-docs/clay-native/nape/callbacks/ListenerType/) | class | Enumeration of Listener types. |
| [OptionType](/api-docs/clay-native/nape/callbacks/OptionType/) | class | OptionType representing matching behaviour for Listeners. |
| [PreCallback](/api-docs/clay-native/nape/callbacks/PreCallback/) | class | Callback object for Pre-Interaction type events. |
| [PreFlag](/api-docs/clay-native/nape/callbacks/PreFlag/) | class | Enumeration of interaction states for arbiters. These values are returned |
| [PreListener](/api-docs/clay-native/nape/callbacks/PreListener/) | class | Event listener for Pre-Interaction type events. |
| [Config](/api-docs/clay-native/nape/Config/) | class | Configuration parameters for Nape |
| [AngleJoint](/api-docs/clay-native/nape/constraint/AngleJoint/) | class | AngleJoint constraining the relative angles of two Bodies. |
| [Constraint](/api-docs/clay-native/nape/constraint/Constraint/) | class | Base type for all Nape joints and constraints |
| [ConstraintIterator](/api-docs/clay-native/nape/constraint/ConstraintIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConstraintList](/api-docs/clay-native/nape/constraint/ConstraintList/) | class | Nape list of Constraint type objects |
| [DistanceJoint](/api-docs/clay-native/nape/constraint/DistanceJoint/) | class | DistanceJoint limiting the distance between two local anchor points of Bodies. |
| [LineJoint](/api-docs/clay-native/nape/constraint/LineJoint/) | class | LineJoint constraining anchor of one body, to a line segment of the other. |
| [MotorJoint](/api-docs/clay-native/nape/constraint/MotorJoint/) | class | MotorJoint constraining the angular velocities of two bodies |
| [PivotJoint](/api-docs/clay-native/nape/constraint/PivotJoint/) | class | PivotJoint constraining two anchors points of bodies to be equal. |
| [PulleyJoint](/api-docs/clay-native/nape/constraint/PulleyJoint/) | class | PulleyJoint limiting the weighted sum of distances between 2 pairs of 4 local anchor points of Bo... |
| [UserConstraint](/api-docs/clay-native/nape/constraint/UserConstraint/) | class | UserConstraint providing a low-level API for user-defined Constraints. |
| [WeldJoint](/api-docs/clay-native/nape/constraint/WeldJoint/) | class | WeldJoint constraining two bodies to be exactly locked together. |
| [Arbiter](/api-docs/clay-native/nape/dynamics/Arbiter/) | class | Arbiter representing the state of an interaction between two Bodys. |
| [ArbiterIterator](/api-docs/clay-native/nape/dynamics/ArbiterIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ArbiterList](/api-docs/clay-native/nape/dynamics/ArbiterList/) | class | Nape list of Arbiter type objects |
| [ArbiterType](/api-docs/clay-native/nape/dynamics/ArbiterType/) | class | Enumeration of Arbiter types. |
| [CollisionArbiter](/api-docs/clay-native/nape/dynamics/CollisionArbiter/) | class | Arbiter sub type for collision interactions. |
| [Contact](/api-docs/clay-native/nape/dynamics/Contact/) | class | Contact point for collision interactions |
| [ContactIterator](/api-docs/clay-native/nape/dynamics/ContactIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ContactList](/api-docs/clay-native/nape/dynamics/ContactList/) | class | Nape list of Contact type objects |
| [FluidArbiter](/api-docs/clay-native/nape/dynamics/FluidArbiter/) | class | Fluid interaction subtype for Arbiter. |
| [InteractionFilter](/api-docs/clay-native/nape/dynamics/InteractionFilter/) | class | InteractionFilter provides bit flags for low-level filtering of interactions. |
| [InteractionGroup](/api-docs/clay-native/nape/dynamics/InteractionGroup/) | class | InteractionGroups are another way of filtering interactions. |
| [InteractionGroupIterator](/api-docs/clay-native/nape/dynamics/InteractionGroupIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractionGroupList](/api-docs/clay-native/nape/dynamics/InteractionGroupList/) | class | Nape list of InteractionGroup type objects |
| [AABB](/api-docs/clay-native/nape/geom/AABB/) | class | Axis Aligned Bounding Box (AABB) |
| [ConvexResult](/api-docs/clay-native/nape/geom/ConvexResult/) | class | Class representing the results of a convex cast operation. |
| [ConvexResultIterator](/api-docs/clay-native/nape/geom/ConvexResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConvexResultList](/api-docs/clay-native/nape/geom/ConvexResultList/) | class | Nape list of ConvexResult type objects |
| [Geom](/api-docs/clay-native/nape/geom/Geom/) | class | Geom class provides interface to collision detection routines in nape. |
| [GeomPoly](/api-docs/clay-native/nape/geom/GeomPoly/) | class | Polygon class with various geometric methods |
| [GeomPolyIterator](/api-docs/clay-native/nape/geom/GeomPolyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [GeomPolyList](/api-docs/clay-native/nape/geom/GeomPolyList/) | class | Nape list of GeomPoly type objects |
| [GeomVertexIterator](/api-docs/clay-native/nape/geom/GeomVertexIterator/) | class | Haxe compatible iterator over vertices of GeomPoly. |
| [IsoFunctionDef](/api-docs/clay-native/nape/geom/IsoFunctionDef/) | typedef | Typedef defining iso-function type for MarchingSquares. |
| [MarchingSquares](/api-docs/clay-native/nape/geom/MarchingSquares/) | class | Iso-surface extraction into polygons. |
| [Mat23](/api-docs/clay-native/nape/geom/Mat23/) | class | 2D Matrix class representing affine transformations: |
| [MatMN](/api-docs/clay-native/nape/geom/MatMN/) | class | A general MxN dimensional matrix. |
| [Ray](/api-docs/clay-native/nape/geom/Ray/) | class | Parametrically defined ray used in ray casting functions. |
| [RayResult](/api-docs/clay-native/nape/geom/RayResult/) | class | Class representing the results of a ray cast operation. |
| [RayResultIterator](/api-docs/clay-native/nape/geom/RayResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [RayResultList](/api-docs/clay-native/nape/geom/RayResultList/) | class | Nape list of RayResult type objects |
| [Vec2](/api-docs/clay-native/nape/geom/Vec2/) | class | 2 Dimensional vector. |
| [Vec2Iterator](/api-docs/clay-native/nape/geom/Vec2Iterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [Vec2List](/api-docs/clay-native/nape/geom/Vec2List/) | class | Nape list of Vec2 type objects |
| [Vec3](/api-docs/clay-native/nape/geom/Vec3/) | class | A 3 dimensional vector object. |
| [Winding](/api-docs/clay-native/nape/geom/Winding/) | class | Enumeration represents the winding of a Polygon. |
| [Body](/api-docs/clay-native/nape/phys/Body/) | class | Class representing a physics Rigid Body. |
| [BodyIterator](/api-docs/clay-native/nape/phys/BodyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [BodyList](/api-docs/clay-native/nape/phys/BodyList/) | class | Nape list of Body type objects |
| [BodyType](/api-docs/clay-native/nape/phys/BodyType/) | class | Enumeration of rigid body types. |
| [Compound](/api-docs/clay-native/nape/phys/Compound/) | class | Compound represents a grouping of physics objects into a single object. |
| [CompoundIterator](/api-docs/clay-native/nape/phys/CompoundIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CompoundList](/api-docs/clay-native/nape/phys/CompoundList/) | class | Nape list of Compound type objects |
| [FluidProperties](/api-docs/clay-native/nape/phys/FluidProperties/) | class | FluidProperties providing shared parameters for fluid interaction. |
| [GravMassMode](/api-docs/clay-native/nape/phys/GravMassMode/) | class | Enumeration of GravMassMode values for a Body. |
| [InertiaMode](/api-docs/clay-native/nape/phys/InertiaMode/) | class | Enumeration of InertiaMode values for a Body. |
| [Interactor](/api-docs/clay-native/nape/phys/Interactor/) | class |  |
| [InteractorIterator](/api-docs/clay-native/nape/phys/InteractorIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractorList](/api-docs/clay-native/nape/phys/InteractorList/) | class | Nape list of Interactor type objects |
| [MassMode](/api-docs/clay-native/nape/phys/MassMode/) | class | Enumeration of MassMode values for a Body. |
| [Material](/api-docs/clay-native/nape/phys/Material/) | class | Material property providing physical attributes to a Shape. |
| [Circle](/api-docs/clay-native/nape/shape/Circle/) | class | Shape subtype representing a Circle |
| [Edge](/api-docs/clay-native/nape/shape/Edge/) | class | Edge class providing internal details of Polygon. |
| [EdgeIterator](/api-docs/clay-native/nape/shape/EdgeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [EdgeList](/api-docs/clay-native/nape/shape/EdgeList/) | class | Nape list of Edge type objects |
| [Polygon](/api-docs/clay-native/nape/shape/Polygon/) | class | Polygon subtype of Shape. |
| [Shape](/api-docs/clay-native/nape/shape/Shape/) | class | Base type for Nape Shape's |
| [ShapeIterator](/api-docs/clay-native/nape/shape/ShapeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ShapeList](/api-docs/clay-native/nape/shape/ShapeList/) | class | Nape list of Shape type objects |
| [ShapeType](/api-docs/clay-native/nape/shape/ShapeType/) | class | Enumeration of Nape Shape types. |
| [ValidationResult](/api-docs/clay-native/nape/shape/ValidationResult/) | class | Enumeration of validation results for a Polygon. |
| [Broadphase](/api-docs/clay-native/nape/space/Broadphase/) | class | Enumeration of available broadphase collision types that Spaces may use. |
| [Space](/api-docs/clay-native/nape/space/Space/) | class | The heart of all Nape simulations. |
| [TArray](/api-docs/clay-native/nape/TArray/) | typedef | Platform specific Array type. |
| [Debug](/api-docs/clay-native/nape/util/Debug/) | class | Debug class providing general utilities |
| [ZPP_BodyListener](/api-docs/clay-native/zpp_nape/callbacks/ZPP_BodyListener/) | class |  |
| [ZPP_Callback](/api-docs/clay-native/zpp_nape/callbacks/ZPP_Callback/) | class |  |
| [ZPP_CbSet](/api-docs/clay-native/zpp_nape/callbacks/ZPP_CbSet/) | class |  |
| [ZPP_CbSetPair](/api-docs/clay-native/zpp_nape/callbacks/ZPP_CbSetPair/) | class |  |
| [ZPP_CbType](/api-docs/clay-native/zpp_nape/callbacks/ZPP_CbType/) | class |  |
| [ZPP_ConstraintListener](/api-docs/clay-native/zpp_nape/callbacks/ZPP_ConstraintListener/) | class |  |
| [ZPP_InteractionListener](/api-docs/clay-native/zpp_nape/callbacks/ZPP_InteractionListener/) | class |  |
| [ZPP_Listener](/api-docs/clay-native/zpp_nape/callbacks/ZPP_Listener/) | class |  |
| [ZPP_OptionType](/api-docs/clay-native/zpp_nape/callbacks/ZPP_OptionType/) | class |  |
| [ZPP_AngleJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_AngleJoint/) | class |  |
| [ZPP_Constraint](/api-docs/clay-native/zpp_nape/constraint/ZPP_Constraint/) | class |  |
| [ZPP_CopyHelper](/api-docs/clay-native/zpp_nape/constraint/ZPP_CopyHelper/) | class |  |
| [ZPP_DistanceJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_DistanceJoint/) | class |  |
| [ZPP_LineJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_LineJoint/) | class |  |
| [ZPP_MotorJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_MotorJoint/) | class |  |
| [ZPP_PivotJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_PivotJoint/) | class |  |
| [ZPP_PulleyJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_PulleyJoint/) | class |  |
| [ZPP_UserBody](/api-docs/clay-native/zpp_nape/constraint/ZPP_UserBody/) | class |  |
| [ZPP_UserConstraint](/api-docs/clay-native/zpp_nape/constraint/ZPP_UserConstraint/) | class |  |
| [ZPP_WeldJoint](/api-docs/clay-native/zpp_nape/constraint/ZPP_WeldJoint/) | class |  |
| [ZPP_Arbiter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_Arbiter/) | class |  |
| [ZPP_ColArbiter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_ColArbiter/) | class |  |
| [ZPP_Contact](/api-docs/clay-native/zpp_nape/dynamics/ZPP_Contact/) | class |  |
| [ZPP_FluidArbiter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_FluidArbiter/) | class |  |
| [ZPP_IContact](/api-docs/clay-native/zpp_nape/dynamics/ZPP_IContact/) | class |  |
| [ZPP_InteractionFilter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_InteractionFilter/) | class |  |
| [ZPP_InteractionGroup](/api-docs/clay-native/zpp_nape/dynamics/ZPP_InteractionGroup/) | class |  |
| [ZPP_SensorArbiter](/api-docs/clay-native/zpp_nape/dynamics/ZPP_SensorArbiter/) | class |  |
| [ZPP_SpaceArbiterList](/api-docs/clay-native/zpp_nape/dynamics/ZPP_SpaceArbiterList/) | class |  |
| [ZPP_AABB](/api-docs/clay-native/zpp_nape/geom/ZPP_AABB/) | class |  |
| [ZPP_Collide](/api-docs/clay-native/zpp_nape/geom/ZPP_Collide/) | class |  |
| [ZPP_Convex](/api-docs/clay-native/zpp_nape/geom/ZPP_Convex/) | class |  |
| [ZPP_ConvexRayResult](/api-docs/clay-native/zpp_nape/geom/ZPP_ConvexRayResult/) | class |  |
| [ZPP_CutInt](/api-docs/clay-native/zpp_nape/geom/ZPP_CutInt/) | class |  |
| [ZPP_Cutter](/api-docs/clay-native/zpp_nape/geom/ZPP_Cutter/) | class |  |
| [ZPP_CutVert](/api-docs/clay-native/zpp_nape/geom/ZPP_CutVert/) | class |  |
| [ZPP_Geom](/api-docs/clay-native/zpp_nape/geom/ZPP_Geom/) | class |  |
| [ZPP_GeomPoly](/api-docs/clay-native/zpp_nape/geom/ZPP_GeomPoly/) | class |  |
| [ZPP_GeomVert](/api-docs/clay-native/zpp_nape/geom/ZPP_GeomVert/) | class |  |
| [ZPP_GeomVertexIterator](/api-docs/clay-native/zpp_nape/geom/ZPP_GeomVertexIterator/) | class |  |
| [ZPP_MarchingSquares](/api-docs/clay-native/zpp_nape/geom/ZPP_MarchingSquares/) | class |  |
| [ZPP_MarchPair](/api-docs/clay-native/zpp_nape/geom/ZPP_MarchPair/) | class |  |
| [ZPP_MarchSpan](/api-docs/clay-native/zpp_nape/geom/ZPP_MarchSpan/) | class |  |
| [ZPP_Mat23](/api-docs/clay-native/zpp_nape/geom/ZPP_Mat23/) | class |  |
| [ZPP_MatMN](/api-docs/clay-native/zpp_nape/geom/ZPP_MatMN/) | class |  |
| [ZPP_Monotone](/api-docs/clay-native/zpp_nape/geom/ZPP_Monotone/) | class |  |
| [ZPP_PartitionedPoly](/api-docs/clay-native/zpp_nape/geom/ZPP_PartitionedPoly/) | class |  |
| [ZPP_PartitionPair](/api-docs/clay-native/zpp_nape/geom/ZPP_PartitionPair/) | class |  |
| [ZPP_PartitionVertex](/api-docs/clay-native/zpp_nape/geom/ZPP_PartitionVertex/) | class |  |
| [ZPP_Ray](/api-docs/clay-native/zpp_nape/geom/ZPP_Ray/) | class |  |
| [ZPP_Simple](/api-docs/clay-native/zpp_nape/geom/ZPP_Simple/) | class |  |
| [ZPP_SimpleEvent](/api-docs/clay-native/zpp_nape/geom/ZPP_SimpleEvent/) | class |  |
| [ZPP_SimpleSeg](/api-docs/clay-native/zpp_nape/geom/ZPP_SimpleSeg/) | class |  |
| [ZPP_SimpleSweep](/api-docs/clay-native/zpp_nape/geom/ZPP_SimpleSweep/) | class |  |
| [ZPP_SimpleVert](/api-docs/clay-native/zpp_nape/geom/ZPP_SimpleVert/) | class |  |
| [ZPP_Simplify](/api-docs/clay-native/zpp_nape/geom/ZPP_Simplify/) | class |  |
| [ZPP_SimplifyP](/api-docs/clay-native/zpp_nape/geom/ZPP_SimplifyP/) | class |  |
| [ZPP_SimplifyV](/api-docs/clay-native/zpp_nape/geom/ZPP_SimplifyV/) | class |  |
| [ZPP_SweepDistance](/api-docs/clay-native/zpp_nape/geom/ZPP_SweepDistance/) | class |  |
| [ZPP_ToiEvent](/api-docs/clay-native/zpp_nape/geom/ZPP_ToiEvent/) | class |  |
| [ZPP_Triangular](/api-docs/clay-native/zpp_nape/geom/ZPP_Triangular/) | class |  |
| [ZPP_Vec2](/api-docs/clay-native/zpp_nape/geom/ZPP_Vec2/) | class |  |
| [ZPP_Vec3](/api-docs/clay-native/zpp_nape/geom/ZPP_Vec3/) | class |  |
| [ZPP_VecMath](/api-docs/clay-native/zpp_nape/geom/ZPP_VecMath/) | class |  |
| [ZPP_Body](/api-docs/clay-native/zpp_nape/phys/ZPP_Body/) | class |  |
| [ZPP_Compound](/api-docs/clay-native/zpp_nape/phys/ZPP_Compound/) | class |  |
| [ZPP_FluidProperties](/api-docs/clay-native/zpp_nape/phys/ZPP_FluidProperties/) | class |  |
| [ZPP_Interactor](/api-docs/clay-native/zpp_nape/phys/ZPP_Interactor/) | class |  |
| [ZPP_Material](/api-docs/clay-native/zpp_nape/phys/ZPP_Material/) | class |  |
| [ZPP_Circle](/api-docs/clay-native/zpp_nape/shape/ZPP_Circle/) | class |  |
| [ZPP_Edge](/api-docs/clay-native/zpp_nape/shape/ZPP_Edge/) | class |  |
| [ZPP_Polygon](/api-docs/clay-native/zpp_nape/shape/ZPP_Polygon/) | class |  |
| [ZPP_Shape](/api-docs/clay-native/zpp_nape/shape/ZPP_Shape/) | class |  |
| [ZPP_AABBNode](/api-docs/clay-native/zpp_nape/space/ZPP_AABBNode/) | class |  |
| [ZPP_AABBPair](/api-docs/clay-native/zpp_nape/space/ZPP_AABBPair/) | class |  |
| [ZPP_AABBTree](/api-docs/clay-native/zpp_nape/space/ZPP_AABBTree/) | class |  |
| [ZPP_Broadphase](/api-docs/clay-native/zpp_nape/space/ZPP_Broadphase/) | class |  |
| [ZPP_CallbackSet](/api-docs/clay-native/zpp_nape/space/ZPP_CallbackSet/) | class |  |
| [ZPP_CbSetManager](/api-docs/clay-native/zpp_nape/space/ZPP_CbSetManager/) | class |  |
| [ZPP_Component](/api-docs/clay-native/zpp_nape/space/ZPP_Component/) | class |  |
| [ZPP_DynAABBPhase](/api-docs/clay-native/zpp_nape/space/ZPP_DynAABBPhase/) | class |  |
| [ZPP_Island](/api-docs/clay-native/zpp_nape/space/ZPP_Island/) | class |  |
| [ZPP_Space](/api-docs/clay-native/zpp_nape/space/ZPP_Space/) | class |  |
| [ZPP_SweepData](/api-docs/clay-native/zpp_nape/space/ZPP_SweepData/) | class |  |
| [ZPP_SweepPhase](/api-docs/clay-native/zpp_nape/space/ZPP_SweepPhase/) | class |  |
| [FastHash2_Hashable2_Boolfalse](/api-docs/clay-native/zpp_nape/util/FastHash2_Hashable2_Boolfalse/) | class |  |
| [Hashable2_Boolfalse](/api-docs/clay-native/zpp_nape/util/Hashable2_Boolfalse/) | class |  |
| [ZNPArray2_Float](/api-docs/clay-native/zpp_nape/util/ZNPArray2_Float/) | class |  |
| [ZNPArray2_ZPP_GeomVert](/api-docs/clay-native/zpp_nape/util/ZNPArray2_ZPP_GeomVert/) | class |  |
| [ZNPArray2_ZPP_MarchPair](/api-docs/clay-native/zpp_nape/util/ZNPArray2_ZPP_MarchPair/) | class |  |
| [ZNPList_ConvexResult](/api-docs/clay-native/zpp_nape/util/ZNPList_ConvexResult/) | class |  |
| [ZNPList_RayResult](/api-docs/clay-native/zpp_nape/util/ZNPList_RayResult/) | class |  |
| [ZNPList_ZPP_AABBNode](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_AABBNode/) | class |  |
| [ZNPList_ZPP_AABBPair](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_AABBPair/) | class |  |
| [ZNPList_ZPP_Arbiter](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Arbiter/) | class |  |
| [ZNPList_ZPP_Body](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Body/) | class |  |
| [ZNPList_ZPP_BodyListener](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_BodyListener/) | class |  |
| [ZNPList_ZPP_CallbackSet](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_CallbackSet/) | class |  |
| [ZNPList_ZPP_CbSet](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_CbSet/) | class |  |
| [ZNPList_ZPP_CbSetPair](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_CbSetPair/) | class |  |
| [ZNPList_ZPP_CbType](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_CbType/) | class |  |
| [ZNPList_ZPP_ColArbiter](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_ColArbiter/) | class |  |
| [ZNPList_ZPP_Component](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Component/) | class |  |
| [ZNPList_ZPP_Compound](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Compound/) | class |  |
| [ZNPList_ZPP_Constraint](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Constraint/) | class |  |
| [ZNPList_ZPP_ConstraintListener](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_ConstraintListener/) | class |  |
| [ZNPList_ZPP_CutInt](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_CutInt/) | class |  |
| [ZNPList_ZPP_CutVert](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_CutVert/) | class |  |
| [ZNPList_ZPP_Edge](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Edge/) | class |  |
| [ZNPList_ZPP_FluidArbiter](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_FluidArbiter/) | class |  |
| [ZNPList_ZPP_GeomPoly](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_GeomPoly/) | class |  |
| [ZNPList_ZPP_GeomVert](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_GeomVert/) | class |  |
| [ZNPList_ZPP_InteractionGroup](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_InteractionGroup/) | class |  |
| [ZNPList_ZPP_InteractionListener](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_InteractionListener/) | class |  |
| [ZNPList_ZPP_Interactor](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Interactor/) | class |  |
| [ZNPList_ZPP_Listener](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Listener/) | class |  |
| [ZNPList_ZPP_PartitionedPoly](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) | class |  |
| [ZNPList_ZPP_PartitionVertex](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_PartitionVertex/) | class |  |
| [ZNPList_ZPP_SensorArbiter](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_SensorArbiter/) | class |  |
| [ZNPList_ZPP_Shape](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Shape/) | class |  |
| [ZNPList_ZPP_SimpleEvent](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_SimpleEvent/) | class |  |
| [ZNPList_ZPP_SimpleVert](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_SimpleVert/) | class |  |
| [ZNPList_ZPP_SimplifyP](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_SimplifyP/) | class |  |
| [ZNPList_ZPP_ToiEvent](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_ToiEvent/) | class |  |
| [ZNPList_ZPP_Vec2](/api-docs/clay-native/zpp_nape/util/ZNPList_ZPP_Vec2/) | class |  |
| [ZNPNode_ConvexResult](/api-docs/clay-native/zpp_nape/util/ZNPNode_ConvexResult/) | class |  |
| [ZNPNode_RayResult](/api-docs/clay-native/zpp_nape/util/ZNPNode_RayResult/) | class |  |
| [ZNPNode_ZPP_AABBNode](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_AABBNode/) | class |  |
| [ZNPNode_ZPP_AABBPair](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_AABBPair/) | class |  |
| [ZNPNode_ZPP_Arbiter](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Arbiter/) | class |  |
| [ZNPNode_ZPP_Body](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Body/) | class |  |
| [ZNPNode_ZPP_BodyListener](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_BodyListener/) | class |  |
| [ZNPNode_ZPP_CallbackSet](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_CallbackSet/) | class |  |
| [ZNPNode_ZPP_CbSet](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_CbSet/) | class |  |
| [ZNPNode_ZPP_CbSetPair](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_CbSetPair/) | class |  |
| [ZNPNode_ZPP_CbType](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_CbType/) | class |  |
| [ZNPNode_ZPP_ColArbiter](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_ColArbiter/) | class |  |
| [ZNPNode_ZPP_Component](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Component/) | class |  |
| [ZNPNode_ZPP_Compound](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Compound/) | class |  |
| [ZNPNode_ZPP_Constraint](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Constraint/) | class |  |
| [ZNPNode_ZPP_ConstraintListener](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_ConstraintListener/) | class |  |
| [ZNPNode_ZPP_CutInt](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_CutInt/) | class |  |
| [ZNPNode_ZPP_CutVert](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_CutVert/) | class |  |
| [ZNPNode_ZPP_Edge](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Edge/) | class |  |
| [ZNPNode_ZPP_FluidArbiter](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_FluidArbiter/) | class |  |
| [ZNPNode_ZPP_GeomPoly](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_GeomPoly/) | class |  |
| [ZNPNode_ZPP_GeomVert](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_GeomVert/) | class |  |
| [ZNPNode_ZPP_InteractionGroup](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_InteractionGroup/) | class |  |
| [ZNPNode_ZPP_InteractionListener](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_InteractionListener/) | class |  |
| [ZNPNode_ZPP_Interactor](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Interactor/) | class |  |
| [ZNPNode_ZPP_Listener](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Listener/) | class |  |
| [ZNPNode_ZPP_PartitionedPoly](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_PartitionedPoly/) | class |  |
| [ZNPNode_ZPP_PartitionVertex](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_PartitionVertex/) | class |  |
| [ZNPNode_ZPP_SensorArbiter](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_SensorArbiter/) | class |  |
| [ZNPNode_ZPP_Shape](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Shape/) | class |  |
| [ZNPNode_ZPP_SimpleEvent](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_SimpleEvent/) | class |  |
| [ZNPNode_ZPP_SimpleVert](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_SimpleVert/) | class |  |
| [ZNPNode_ZPP_SimplifyP](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_SimplifyP/) | class |  |
| [ZNPNode_ZPP_ToiEvent](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_ToiEvent/) | class |  |
| [ZNPNode_ZPP_Vec2](/api-docs/clay-native/zpp_nape/util/ZNPNode_ZPP_Vec2/) | class |  |
| [ZPP_ArbiterList](/api-docs/clay-native/zpp_nape/util/ZPP_ArbiterList/) | class |  |
| [ZPP_BodyList](/api-docs/clay-native/zpp_nape/util/ZPP_BodyList/) | class |  |
| [ZPP_CbTypeList](/api-docs/clay-native/zpp_nape/util/ZPP_CbTypeList/) | class |  |
| [ZPP_CompoundList](/api-docs/clay-native/zpp_nape/util/ZPP_CompoundList/) | class |  |
| [ZPP_ConstraintList](/api-docs/clay-native/zpp_nape/util/ZPP_ConstraintList/) | class |  |
| [ZPP_ContactList](/api-docs/clay-native/zpp_nape/util/ZPP_ContactList/) | class |  |
| [ZPP_ConvexResultList](/api-docs/clay-native/zpp_nape/util/ZPP_ConvexResultList/) | class |  |
| [ZPP_EdgeList](/api-docs/clay-native/zpp_nape/util/ZPP_EdgeList/) | class |  |
| [ZPP_Flags](/api-docs/clay-native/zpp_nape/util/ZPP_Flags/) | class |  |
| [ZPP_GeomPolyList](/api-docs/clay-native/zpp_nape/util/ZPP_GeomPolyList/) | class |  |
| [ZPP_InteractionGroupList](/api-docs/clay-native/zpp_nape/util/ZPP_InteractionGroupList/) | class |  |
| [ZPP_InteractorList](/api-docs/clay-native/zpp_nape/util/ZPP_InteractorList/) | class |  |
| [ZPP_ListenerList](/api-docs/clay-native/zpp_nape/util/ZPP_ListenerList/) | class |  |
| [ZPP_Math](/api-docs/clay-native/zpp_nape/util/ZPP_Math/) | class |  |
| [ZPP_MixVec2List](/api-docs/clay-native/zpp_nape/util/ZPP_MixVec2List/) | class |  |
| [ZPP_PubPool](/api-docs/clay-native/zpp_nape/util/ZPP_PubPool/) | class |  |
| [ZPP_RayResultList](/api-docs/clay-native/zpp_nape/util/ZPP_RayResultList/) | class |  |
| [ZPP_Set_ZPP_Body](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_Body/) | class |  |
| [ZPP_Set_ZPP_CbSet](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_CbSet/) | class |  |
| [ZPP_Set_ZPP_CbSetPair](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_CbSetPair/) | class |  |
| [ZPP_Set_ZPP_PartitionPair](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_PartitionPair/) | class |  |
| [ZPP_Set_ZPP_PartitionVertex](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_PartitionVertex/) | class |  |
| [ZPP_Set_ZPP_SimpleEvent](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_SimpleEvent/) | class |  |
| [ZPP_Set_ZPP_SimpleSeg](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_SimpleSeg/) | class |  |
| [ZPP_Set_ZPP_SimpleVert](/api-docs/clay-native/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/) | class |  |
| [ZPP_ShapeList](/api-docs/clay-native/zpp_nape/util/ZPP_ShapeList/) | class |  |
| [ZPP_Vec2List](/api-docs/clay-native/zpp_nape/util/ZPP_Vec2List/) | class |  |
| [ZPP_Const](/api-docs/clay-native/zpp_nape/ZPP_Const/) | class |  |
| [ZPP_ID](/api-docs/clay-native/zpp_nape/ZPP_ID/) | class |  |

## OpenGL

| Type | Kind | Description |
|------|------|-------------|
| [Any](/api-docs/clay-native/opengl/Any/) | typedef |  |
| [GL](/api-docs/clay-native/opengl/GL/) | class |  |
| [GLActiveInfo](/api-docs/clay-native/opengl/GLActiveInfo/) | typedef |  |
| [GLbitfield](/api-docs/clay-native/opengl/GLbitfield/) | typedef |  |
| [GLBuffer](/api-docs/clay-native/opengl/GLBuffer/) | abstract |  |
| [GLContextAttributes](/api-docs/clay-native/opengl/GLContextAttributes/) | typedef |  |
| [GLenum](/api-docs/clay-native/opengl/GLenum/) | typedef |  |
| [GLFramebuffer](/api-docs/clay-native/opengl/GLFramebuffer/) | abstract |  |
| [GLObject](/api-docs/clay-native/opengl/GLObject/) | abstract |  |
| [GLProgram](/api-docs/clay-native/opengl/GLProgram/) | abstract |  |
| [GLRenderbuffer](/api-docs/clay-native/opengl/GLRenderbuffer/) | abstract |  |
| [GLShader](/api-docs/clay-native/opengl/GLShader/) | abstract |  |
| [GLShaderPrecisionFormat](/api-docs/clay-native/opengl/GLShaderPrecisionFormat/) | typedef |  |
| [GLSync](/api-docs/clay-native/opengl/GLSync/) | class |  |
| [GLTexture](/api-docs/clay-native/opengl/GLTexture/) | abstract |  |
| [GLuint](/api-docs/clay-native/opengl/GLuint/) | typedef |  |
| [GLUniformLocation](/api-docs/clay-native/opengl/GLUniformLocation/) | abstract |  |
| [IntRef](/api-docs/clay-native/opengl/IntRef/) | abstract |  |
| [WebGL](/api-docs/clay-native/opengl/WebGL/) | class |  |
| [GL_linc](/api-docs/clay-native/opengl/_GL/GL_linc/) | class |  |

## Soloud

| Type | Kind | Description |
|------|------|-------------|
| [AlignedFloatBuffer](/api-docs/clay-native/soloud/AlignedFloatBuffer/) | class | Class that handles aligned allocations to support vectorized operations |
| [AudioAttenuator](/api-docs/clay-native/soloud/AudioAttenuator/) | class |  |
| [AudioCollider](/api-docs/clay-native/soloud/AudioCollider/) | class |  |
| [AudioSource](/api-docs/clay-native/soloud/AudioSource/) | class | Base class for audio sources |
| [AudioSourceAttenuationModels](/api-docs/clay-native/soloud/AudioSourceAttenuationModels/) | abstract |  |
| [AudioSourceFlags](/api-docs/clay-native/soloud/AudioSourceFlags/) | abstract |  |
| [AudioSourceInstance](/api-docs/clay-native/soloud/AudioSourceInstance/) | class |  |
| [AudioSourceInstance3dData](/api-docs/clay-native/soloud/AudioSourceInstance3dData/) | class |  |
| [AudioSourceInstanceFlags](/api-docs/clay-native/soloud/AudioSourceInstanceFlags/) | abstract |  |
| [AudioSourceRef](/api-docs/clay-native/soloud/AudioSourceRef/) | class |  |
| [Bus](/api-docs/clay-native/soloud/Bus/) | class | Base class for busses |
| [Fader](/api-docs/clay-native/soloud/Fader/) | class | Helper class to process faders |
| [Filter](/api-docs/clay-native/soloud/Filter/) | class | Base class for audio sources |
| [FilterInstance](/api-docs/clay-native/soloud/FilterInstance/) | class | Base class for filter instances |
| [FilterParamType](/api-docs/clay-native/soloud/FilterParamType/) | abstract |  |
| [Handle](/api-docs/clay-native/soloud/Handle/) | typedef |  |
| [Result](/api-docs/clay-native/soloud/Result/) | typedef |  |
| [Soloud](/api-docs/clay-native/soloud/Soloud/) | class | Soloud core class. |
| [SoloudBackends](/api-docs/clay-native/soloud/SoloudBackends/) | abstract |  |
| [SoloudErrors](/api-docs/clay-native/soloud/SoloudErrors/) | abstract |  |
| [SoloudFlags](/api-docs/clay-native/soloud/SoloudFlags/) | abstract |  |
| [Time](/api-docs/clay-native/soloud/Time/) | typedef |  |
| [TinyAlignedFloatBuffer](/api-docs/clay-native/soloud/TinyAlignedFloatBuffer/) | class | Lightweight class that handles small aligned buffer to support vectorized operations |
| [Wav](/api-docs/clay-native/soloud/Wav/) | class |  |
| [WavStream](/api-docs/clay-native/soloud/WavStream/) | class |  |
| [Soloud_linc](/api-docs/clay-native/soloud/_Soloud/Soloud_linc/) | class |  |

## Stb

| Type | Kind | Description |
|------|------|-------------|
| [Image](/api-docs/clay-native/stb/Image/) | class |  |
| [ImageWrite](/api-docs/clay-native/stb/ImageWrite/) | class |  |
| [StbImageData](/api-docs/clay-native/stb/StbImageData/) | typedef |  |
| [StbImageInfo](/api-docs/clay-native/stb/StbImageInfo/) | typedef |  |

## Timestamp

| Type | Kind | Description |
|------|------|-------------|
| [Timestamp](/api-docs/clay-native/timestamp/Timestamp/) | class |  |

## BinPacking

| Type | Kind | Description |
|------|------|-------------|
| [DisjointRectCollection](/api-docs/clay-native/binpacking/DisjointRectCollection/) | class |  |
| [FreeRectChoiceHeuristic](/api-docs/clay-native/binpacking/FreeRectChoiceHeuristic/) | abstract |  |
| [IOccupancy](/api-docs/clay-native/binpacking/IOccupancy/) | interface |  |
| [MaxRectsPacker](/api-docs/clay-native/binpacking/MaxRectsPacker/) | class |  |
| [MaxRectsPackerBestFitPosition](/api-docs/clay-native/binpacking/MaxRectsPackerBestFitPosition/) | class |  |
| [MaxRectsPackerRectScore](/api-docs/clay-native/binpacking/MaxRectsPackerRectScore/) | class |  |
| [Rect](/api-docs/clay-native/binpacking/Rect/) | class |  |
| [RectSize](/api-docs/clay-native/binpacking/RectSize/) | class |  |

## Hsluv

| Type | Kind | Description |
|------|------|-------------|
| [Angle](/api-docs/clay-native/hsluv/Angle/) | typedef |  |
| [Geometry](/api-docs/clay-native/hsluv/Geometry/) | class |  |
| [Hsluv](/api-docs/clay-native/hsluv/Hsluv/) | class | Human-friendly HSL conversion utility class. |
| [Line](/api-docs/clay-native/hsluv/Line/) | typedef |  |
| [Point](/api-docs/clay-native/hsluv/Point/) | typedef |  |

## Hscript

| Type | Kind | Description |
|------|------|-------------|
| [Argument](/api-docs/clay-native/hscript/Argument/) | typedef |  |
| [ClassDecl](/api-docs/clay-native/hscript/ClassDecl/) | typedef |  |
| [Const](/api-docs/clay-native/hscript/Const/) | enum |  |
| [CType](/api-docs/clay-native/hscript/CType/) | enum |  |
| [Error](/api-docs/clay-native/hscript/Error/) | class |  |
| [ErrorDef](/api-docs/clay-native/hscript/ErrorDef/) | enum |  |
| [Expr](/api-docs/clay-native/hscript/Expr/) | typedef |  |
| [ExprDef](/api-docs/clay-native/hscript/ExprDef/) | enum |  |
| [FieldAccess](/api-docs/clay-native/hscript/FieldAccess/) | enum |  |
| [FieldDecl](/api-docs/clay-native/hscript/FieldDecl/) | typedef |  |
| [FieldKind](/api-docs/clay-native/hscript/FieldKind/) | enum |  |
| [FunctionDecl](/api-docs/clay-native/hscript/FunctionDecl/) | typedef |  |
| [Interp](/api-docs/clay-native/hscript/Interp/) | class |  |
| [Metadata](/api-docs/clay-native/hscript/Metadata/) | typedef |  |
| [ModuleDecl](/api-docs/clay-native/hscript/ModuleDecl/) | enum |  |
| [ModuleType](/api-docs/clay-native/hscript/ModuleType/) | typedef |  |
| [Parser](/api-docs/clay-native/hscript/Parser/) | class |  |
| [Printer](/api-docs/clay-native/hscript/Printer/) | class |  |
| [Token](/api-docs/clay-native/hscript/Token/) | enum |  |
| [Tools](/api-docs/clay-native/hscript/Tools/) | class |  |
| [TypeDecl](/api-docs/clay-native/hscript/TypeDecl/) | typedef |  |
| [VarDecl](/api-docs/clay-native/hscript/VarDecl/) | typedef |  |
| [Stop](/api-docs/clay-native/hscript/_Interp/Stop/) | enum |  |

## Fuzzaldrin

| Type | Kind | Description |
|------|------|-------------|
| [Filter](/api-docs/clay-native/fuzzaldrin/Filter/) | class |  |
| [Fuzzaldrin](/api-docs/clay-native/fuzzaldrin/Fuzzaldrin/) | class |  |
| [Matcher](/api-docs/clay-native/fuzzaldrin/Matcher/) | class |  |
| [Scorer](/api-docs/clay-native/fuzzaldrin/Scorer/) | class |  |

## Polyline

| Type | Kind | Description |
|------|------|-------------|
| [Extensions](/api-docs/clay-native/polyline/Extensions/) | class |  |
| [MiterUtils](/api-docs/clay-native/polyline/MiterUtils/) | class |  |
| [Stroke](/api-docs/clay-native/polyline/Stroke/) | class |  |
| [StrokeCap](/api-docs/clay-native/polyline/StrokeCap/) | enum |  |
| [StrokeJoin](/api-docs/clay-native/polyline/StrokeJoin/) | enum |  |

## Spec

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/clay-native/spec/Audio/) | interface | Backend interface for audio operations. |
| [Backend](/api-docs/clay-native/spec/Backend/) | interface | Main backend interface that provides access to all platform-specific functionality. |
| [Binaries](/api-docs/clay-native/spec/Binaries/) | interface | Backend interface for binary data loading operations. |
| [Clipboard](/api-docs/clay-native/spec/Clipboard/) | interface | Backend interface for system clipboard operations. |
| [Input](/api-docs/clay-native/spec/Input/) | interface | Backend interface for input handling. |
| [IO](/api-docs/clay-native/spec/IO/) | interface | Backend interface for file input/output operations. |
| [Shaders](/api-docs/clay-native/spec/Shaders/) | interface | Backend interface for GPU shader program management. |
| [TextInput](/api-docs/clay-native/spec/TextInput/) | interface | Backend interface for system text input handling. |
| [Texts](/api-docs/clay-native/spec/Texts/) | interface | Backend interface for text file loading operations. |
| [Textures](/api-docs/clay-native/spec/Textures/) | interface | Backend interface for texture (image) management and GPU operations. |

## Other

| Type | Kind | Description |
|------|------|-------------|
| [AllAssets](/api-docs/clay-native/assets/AllAssets/) | class |  |
| [Project](/api-docs/clay-native/Project/) | class |  |

## Haxe

| Type | Kind | Description |
|------|------|-------------|
| [Any](/api-docs/clay-native/Any/) | abstract | `Any` is a type that is compatible with any other in both ways. |
| [Array](/api-docs/clay-native/Array/) | class | An Array is a storage for values. You can access it using indexes or |
| [ArrayAccess](/api-docs/clay-native/ArrayAccess/) | interface | `ArrayAccess` is used to indicate a class that can be accessed using brackets. |
| [Bool](/api-docs/clay-native/Bool/) | abstract | The standard Boolean type, which can either be `true` or `false`. |
| [Class](/api-docs/clay-native/Class/) | abstract | An abstract type that represents a Class. |
| [Abi](/api-docs/clay-native/cpp/abi/Abi/) | class |  |
| [ArrayBase](/api-docs/clay-native/cpp/ArrayBase/) | class |  |
| [AutoCast](/api-docs/clay-native/cpp/AutoCast/) | class |  |
| [Callable](/api-docs/clay-native/cpp/Callable/) | abstract | The generator intercepts this type and converts it to a cpp.Function<T> on cpp. |
| [CallableData](/api-docs/clay-native/cpp/CallableData/) | typedef |  |
| [Char](/api-docs/clay-native/cpp/Char/) | abstract |  |
| [ConstCharStar](/api-docs/clay-native/cpp/ConstCharStar/) | abstract |  |
| [ConstPointer](/api-docs/clay-native/cpp/ConstPointer/) | class |  |
| [EnumBase](/api-docs/clay-native/cpp/EnumBase/) | class |  |
| [ErrorConstants](/api-docs/clay-native/cpp/ErrorConstants/) | class |  |
| [Float32](/api-docs/clay-native/cpp/Float32/) | abstract |  |
| [Float64](/api-docs/clay-native/cpp/Float64/) | abstract |  |
| [Function](/api-docs/clay-native/cpp/Function/) | abstract |  |
| [FunctionData](/api-docs/clay-native/cpp/FunctionData/) | typedef |  |
| [Int16](/api-docs/clay-native/cpp/Int16/) | abstract |  |
| [Int32](/api-docs/clay-native/cpp/Int32/) | abstract |  |
| [Int64](/api-docs/clay-native/cpp/Int64/) | abstract |  |
| [Int64Map](/api-docs/clay-native/cpp/Int64Map/) | class |  |
| [Int8](/api-docs/clay-native/cpp/Int8/) | abstract |  |
| [NativeArray](/api-docs/clay-native/cpp/NativeArray/) | class |  |
| [NativeFile](/api-docs/clay-native/cpp/NativeFile/) | class |  |
| [NativeProcess](/api-docs/clay-native/cpp/NativeProcess/) | class |  |
| [NativeString](/api-docs/clay-native/cpp/NativeString/) | class |  |
| [NativeSys](/api-docs/clay-native/cpp/NativeSys/) | class |  |
| [ObjectType](/api-docs/clay-native/cpp/ObjectType/) | class |  |
| [Pointer](/api-docs/clay-native/cpp/Pointer/) | class |  |
| [RawConstPointer](/api-docs/clay-native/cpp/RawConstPointer/) | class |  |
| [RawPointer](/api-docs/clay-native/cpp/RawPointer/) | class |  |
| [Reference](/api-docs/clay-native/cpp/Reference/) | typedef | Allows haxe to type result correctly, and hxcpp can recognise this and |
| [Star](/api-docs/clay-native/cpp/Star/) | typedef | Allows haxe to type result correctly, and hxcpp can recognise this use the |
| [UInt16](/api-docs/clay-native/cpp/UInt16/) | abstract |  |
| [UInt32](/api-docs/clay-native/cpp/UInt32/) | abstract |  |
| [UInt64](/api-docs/clay-native/cpp/UInt64/) | abstract |  |
| [UInt8](/api-docs/clay-native/cpp/UInt8/) | abstract |  |
| [Void](/api-docs/clay-native/cpp/Void/) | class |  |
| [Date](/api-docs/clay-native/Date/) | class | The Date class provides a basic structure for date and time related |
| [Dynamic](/api-docs/clay-native/Dynamic/) | abstract | `Dynamic` is a special type which is compatible with all other types. |
| [Enum](/api-docs/clay-native/Enum/) | abstract | An abstract type that represents an Enum type. |
| [EnumValue](/api-docs/clay-native/EnumValue/) | abstract | An abstract type that represents any enum value. |
| [EReg](/api-docs/clay-native/EReg/) | class | The EReg class represents regular expressions. |
| [Float](/api-docs/clay-native/Float/) | abstract | The standard `Float` type, this is a double-precision IEEE 64bit float. |
| [AtomicBool](/api-docs/clay-native/haxe/atomic/AtomicBool/) | abstract | Atomic boolean. |
| [AtomicInt](/api-docs/clay-native/haxe/atomic/AtomicInt/) | abstract |  |
| [CallStack](/api-docs/clay-native/haxe/CallStack/) | abstract | Get information about the call stack. |
| [Constructible](/api-docs/clay-native/haxe/Constructible/) | abstract | This type unifies with any instance of classes that have a constructor |
| [Adler32](/api-docs/clay-native/haxe/crypto/Adler32/) | class | Calculates the Adler32 of the given Bytes. |
| [Base64](/api-docs/clay-native/haxe/crypto/Base64/) | class | Allows one to encode/decode String and bytes using Base64 encoding. |
| [BaseCode](/api-docs/clay-native/haxe/crypto/BaseCode/) | class | Allows one to encode/decode String and bytes using a power of two base dictionary. |
| [HashMethod](/api-docs/clay-native/haxe/crypto/HashMethod/) | enum | Hash methods for Hmac calculation. |
| [Hmac](/api-docs/clay-native/haxe/crypto/Hmac/) | class | Calculates a Hmac of the given Bytes using a HashMethod. |
| [Md5](/api-docs/clay-native/haxe/crypto/Md5/) | class | Creates a MD5 of a String. |
| [Sha1](/api-docs/clay-native/haxe/crypto/Sha1/) | class | Creates a Sha1 of a String. |
| [Sha256](/api-docs/clay-native/haxe/crypto/Sha256/) | class | Creates a Sha256 of a String. |
| [ArraySort](/api-docs/clay-native/haxe/ds/ArraySort/) | class | ArraySort provides a stable implementation of merge sort through its `sort` |
| [BalancedTree](/api-docs/clay-native/haxe/ds/BalancedTree/) | class | BalancedTree allows key-value mapping with arbitrary keys, as long as they |
| [EnumValueMap](/api-docs/clay-native/haxe/ds/EnumValueMap/) | class | EnumValueMap allows mapping of enum value keys to arbitrary values. |
| [HashMap](/api-docs/clay-native/haxe/ds/HashMap/) | abstract | HashMap allows mapping of hashable objects to arbitrary values. |
| [IntMap](/api-docs/clay-native/haxe/ds/IntMap/) | class | IntMap allows mapping of Int keys to arbitrary values. |
| [List](/api-docs/clay-native/haxe/ds/List/) | class | A linked-list of elements. The list is composed of element container objects |
| [Map](/api-docs/clay-native/haxe/ds/Map/) | abstract | Map allows key to value mapping for arbitrary value types, and many key |
| [ObjectMap](/api-docs/clay-native/haxe/ds/ObjectMap/) | class | ObjectMap allows mapping of object keys to arbitrary values. |
| [ReadOnlyArray](/api-docs/clay-native/haxe/ds/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [StringMap](/api-docs/clay-native/haxe/ds/StringMap/) | class | StringMap allows mapping of String keys to arbitrary values. |
| [TreeNode](/api-docs/clay-native/haxe/ds/TreeNode/) | class | A tree node of `haxe.ds.BalancedTree`. |
| [Vector](/api-docs/clay-native/haxe/ds/Vector/) | abstract | A Vector is a storage of fixed size. It can be faster than Array on some |
| [DynamicAccess](/api-docs/clay-native/haxe/DynamicAccess/) | abstract | DynamicAccess is an abstract type for working with anonymous structures |
| [EntryPoint](/api-docs/clay-native/haxe/EntryPoint/) | class | If `haxe. |
| [EnumTools](/api-docs/clay-native/haxe/EnumTools/) | class | This class provides advanced methods on enums. It is ideally used with |
| [EnumValueTools](/api-docs/clay-native/haxe/EnumValueTools/) | class | This class provides advanced methods on enum values. It is ideally used with |
| [Exception](/api-docs/clay-native/haxe/Exception/) | class | Base class for exceptions. |
| [NotImplementedException](/api-docs/clay-native/haxe/exceptions/NotImplementedException/) | class | An exception that is thrown when requested function or operation does not have an implementation. |
| [PosException](/api-docs/clay-native/haxe/exceptions/PosException/) | class | An exception that carry position information of a place where it was created. |
| [AsVar](/api-docs/clay-native/haxe/extern/AsVar/) | abstract | If this type is used as an argument type, the compiler ensures that |
| [FlatEnum](/api-docs/clay-native/haxe/FlatEnum/) | abstract | This type unifies with an enum instance if all constructors of the enum |
| [JsonParser](/api-docs/clay-native/haxe/format/JsonParser/) | class | An implementation of JSON parser in Haxe. |
| [JsonPrinter](/api-docs/clay-native/haxe/format/JsonPrinter/) | class | An implementation of JSON printer in Haxe. |
| [Function](/api-docs/clay-native/haxe/Function/) | abstract | This type unifies with any function type. |
| [IMap](/api-docs/clay-native/haxe/IMap/) | interface |  |
| [Int32](/api-docs/clay-native/haxe/Int32/) | abstract | Int32 provides a 32-bit integer with consistent overflow behavior across |
| [Int64](/api-docs/clay-native/haxe/Int64/) | abstract |  |
| [ArrayBufferView](/api-docs/clay-native/haxe/io/ArrayBufferView/) | abstract |  |
| [ArrayBufferViewData](/api-docs/clay-native/haxe/io/ArrayBufferViewData/) | typedef |  |
| [ArrayBufferViewImpl](/api-docs/clay-native/haxe/io/ArrayBufferViewImpl/) | class |  |
| [Bytes](/api-docs/clay-native/haxe/io/Bytes/) | class |  |
| [BytesBuffer](/api-docs/clay-native/haxe/io/BytesBuffer/) | class |  |
| [BytesData](/api-docs/clay-native/haxe/io/BytesData/) | typedef |  |
| [BytesInput](/api-docs/clay-native/haxe/io/BytesInput/) | class |  |
| [BytesOutput](/api-docs/clay-native/haxe/io/BytesOutput/) | class |  |
| [Encoding](/api-docs/clay-native/haxe/io/Encoding/) | enum | String binary encoding supported by Haxe I/O |
| [Eof](/api-docs/clay-native/haxe/io/Eof/) | class | This exception is raised when reading while data is no longer available in the `haxe.io.Input`. |
| [Error](/api-docs/clay-native/haxe/io/Error/) | enum | The possible IO errors that can occur |
| [FPHelper](/api-docs/clay-native/haxe/io/FPHelper/) | class | Helper that converts between floating point and binary representation. |
| [Input](/api-docs/clay-native/haxe/io/Input/) | class | An Input is an abstract reader. See other classes in the `haxe.io` package |
| [Int32Array](/api-docs/clay-native/haxe/io/Int32Array/) | abstract |  |
| [Int32ArrayData](/api-docs/clay-native/haxe/io/Int32ArrayData/) | typedef |  |
| [Output](/api-docs/clay-native/haxe/io/Output/) | class | An Output is an abstract write. A specific output implementation will only |
| [Path](/api-docs/clay-native/haxe/io/Path/) | class | This class provides a convenient way of working with paths. It supports the |
| [StringInput](/api-docs/clay-native/haxe/io/StringInput/) | class |  |
| [UInt8Array](/api-docs/clay-native/haxe/io/UInt8Array/) | abstract |  |
| [UInt8ArrayData](/api-docs/clay-native/haxe/io/UInt8ArrayData/) | typedef |  |
| [ArrayIterator](/api-docs/clay-native/haxe/iterators/ArrayIterator/) | class | This iterator is used only when `Array<T>` is passed to `Iterable<T>` |
| [ArrayKeyValueIterator](/api-docs/clay-native/haxe/iterators/ArrayKeyValueIterator/) | class |  |
| [DynamicAccessKeyValueIterator](/api-docs/clay-native/haxe/iterators/DynamicAccessKeyValueIterator/) | class | This Key/Value iterator can be used to iterate over `haxe.DynamicAccess`. |
| [MapKeyValueIterator](/api-docs/clay-native/haxe/iterators/MapKeyValueIterator/) | class | This Key/Value iterator can be used to iterate across maps. |
| [StringIteratorUnicode](/api-docs/clay-native/haxe/iterators/StringIteratorUnicode/) | class | This iterator can be used to iterate across strings in a cross-platform |
| [Json](/api-docs/clay-native/haxe/Json/) | class | Cross-platform JSON API: it will automatically use the optimized native API if available. |
| [Log](/api-docs/clay-native/haxe/Log/) | class | Log primarily provides the `trace()` method, which is invoked upon a call to |
| [AbstractType](/api-docs/clay-native/haxe/macro/AbstractType/) | typedef | Represents an abstract type. |
| [AnonType](/api-docs/clay-native/haxe/macro/AnonType/) | typedef | Represents information for anonymous structure types. |
| [BaseType](/api-docs/clay-native/haxe/macro/BaseType/) | typedef | The information that all types (`ClassType`, `EnumType`, `DefType`, |
| [Case](/api-docs/clay-native/haxe/macro/Case/) | typedef | Represents a switch case. |
| [Catch](/api-docs/clay-native/haxe/macro/Catch/) | typedef | Represents a catch in the AST. |
| [ClassField](/api-docs/clay-native/haxe/macro/ClassField/) | typedef | Represents a class field. |
| [ClassType](/api-docs/clay-native/haxe/macro/ClassType/) | typedef | Represents a class type. |
| [DefType](/api-docs/clay-native/haxe/macro/DefType/) | typedef | Represents a typedef. |
| [EnumField](/api-docs/clay-native/haxe/macro/EnumField/) | typedef | Represents an enum constructor. |
| [EnumType](/api-docs/clay-native/haxe/macro/EnumType/) | typedef | Represents an enum type. |
| [Expr](/api-docs/clay-native/haxe/macro/Expr/) | typedef | Represents a node in the AST. |
| [ExprOf](/api-docs/clay-native/haxe/macro/ExprOf/) | typedef | Represents a AST node identical to `Expr`, but it allows constraining the |
| [Field](/api-docs/clay-native/haxe/macro/Field/) | typedef | Represents a field in the AST. |
| [Function](/api-docs/clay-native/haxe/macro/Function/) | typedef | Represents a function in the AST. |
| [FunctionArg](/api-docs/clay-native/haxe/macro/FunctionArg/) | typedef | Represents a function argument in the AST. |
| [ImportExpr](/api-docs/clay-native/haxe/macro/ImportExpr/) | typedef | Represents the import expression. |
| [MetaAccess](/api-docs/clay-native/haxe/macro/MetaAccess/) | typedef | MetaAccess is a wrapper for the `Metadata` array. It can be used to add |
| [Metadata](/api-docs/clay-native/haxe/macro/Metadata/) | typedef | Represents metadata in the AST. |
| [MetadataEntry](/api-docs/clay-native/haxe/macro/MetadataEntry/) | typedef | Represents a metadata entry in the AST. |
| [ObjectField](/api-docs/clay-native/haxe/macro/ObjectField/) | typedef | Represents the field of an object declaration. |
| [Position](/api-docs/clay-native/haxe/macro/Position/) | typedef | Represents a position in a file. |
| [Ref](/api-docs/clay-native/haxe/macro/Ref/) | typedef | Represents a reference to internal compiler structure. It exists to avoid |
| [TFunc](/api-docs/clay-native/haxe/macro/TFunc/) | typedef | Represents a function in the typed AST. |
| [TVar](/api-docs/clay-native/haxe/macro/TVar/) | typedef | Represents a variable in the typed AST. |
| [TypeDefinition](/api-docs/clay-native/haxe/macro/TypeDefinition/) | typedef | Represents a type definition. |
| [TypedExpr](/api-docs/clay-native/haxe/macro/TypedExpr/) | typedef | Represents a typed AST node. |
| [TypeParamDecl](/api-docs/clay-native/haxe/macro/TypeParamDecl/) | typedef | Represents a type parameter declaration in the AST. |
| [TypeParameter](/api-docs/clay-native/haxe/macro/TypeParameter/) | typedef | Represents the declaration of type parameters. |
| [TypePath](/api-docs/clay-native/haxe/macro/TypePath/) | typedef | Represents a type path in the AST. |
| [Var](/api-docs/clay-native/haxe/macro/Var/) | typedef | Represents a variable in the AST. |
| [MainEvent](/api-docs/clay-native/haxe/MainEvent/) | class |  |
| [MainLoop](/api-docs/clay-native/haxe/MainLoop/) | class |  |
| [NotVoid](/api-docs/clay-native/haxe/NotVoid/) | abstract | This type unifies with anything but `Void`. |
| [PosInfos](/api-docs/clay-native/haxe/PosInfos/) | typedef | `PosInfos` is a magic type which can be used to generate position information |
| [Abstractdef](/api-docs/clay-native/haxe/rtti/Abstractdef/) | typedef | The abstract type runtime information. |
| [Classdef](/api-docs/clay-native/haxe/rtti/Classdef/) | typedef | The runtime class definition information. |
| [ClassField](/api-docs/clay-native/haxe/rtti/ClassField/) | typedef | The runtime class field information. |
| [CType](/api-docs/clay-native/haxe/rtti/CType/) | enum | The runtime member types. |
| [Enumdef](/api-docs/clay-native/haxe/rtti/Enumdef/) | typedef | The enum runtime type information. |
| [EnumField](/api-docs/clay-native/haxe/rtti/EnumField/) | typedef | The runtime enum constructor information. |
| [FunctionArgument](/api-docs/clay-native/haxe/rtti/FunctionArgument/) | typedef | The function argument runtime type information. |
| [Meta](/api-docs/clay-native/haxe/rtti/Meta/) | class | An API to access classes and enums metadata at runtime. |
| [MetaData](/api-docs/clay-native/haxe/rtti/MetaData/) | typedef | The list of runtime metadata. |
| [Path](/api-docs/clay-native/haxe/rtti/Path/) | typedef | The (dot-)path of the runtime type. |
| [PathParams](/api-docs/clay-native/haxe/rtti/PathParams/) | typedef | The type parameters in the runtime type information. |
| [Platforms](/api-docs/clay-native/haxe/rtti/Platforms/) | typedef | A list of strings representing the targets where the type is available. |
| [Rights](/api-docs/clay-native/haxe/rtti/Rights/) | enum | Represents the runtime rights of a type. |
| [Rtti](/api-docs/clay-native/haxe/rtti/Rtti/) | class | Rtti is a helper class which supplements the `@:rtti` metadata. |
| [Typedef](/api-docs/clay-native/haxe/rtti/Typedef/) | typedef | The typedef runtime information. |
| [TypeInfos](/api-docs/clay-native/haxe/rtti/TypeInfos/) | typedef | The general runtime type information. |
| [TypeParams](/api-docs/clay-native/haxe/rtti/TypeParams/) | typedef | An array of strings representing the names of the type parameters the type |
| [TypeRoot](/api-docs/clay-native/haxe/rtti/TypeRoot/) | typedef | Array of `TypeTree`. |
| [TypeTree](/api-docs/clay-native/haxe/rtti/TypeTree/) | enum | The tree types of the runtime type. |
| [XmlParser](/api-docs/clay-native/haxe/rtti/XmlParser/) | class | XmlParser processes the runtime type information (RTTI) which |
| [Serializer](/api-docs/clay-native/haxe/Serializer/) | class | The Serializer class can be used to encode values and objects into a `String`, |
| [StackItem](/api-docs/clay-native/haxe/StackItem/) | enum | Elements return by `CallStack` methods. |
| [Timer](/api-docs/clay-native/haxe/Timer/) | class | The `Timer` class allows you to create asynchronous timers on platforms that |
| [Unserializer](/api-docs/clay-native/haxe/Unserializer/) | class | The `Unserializer` class is the complement to the `Serializer` class. It parses |
| [ValueException](/api-docs/clay-native/haxe/ValueException/) | class | An exception containing arbitrary value. |
| [Access](/api-docs/clay-native/haxe/xml/Access/) | abstract | The `haxe.xml.Access` API helps providing a fast dot-syntax access to the |
| [Parser](/api-docs/clay-native/haxe/xml/Parser/) | class |  |
| [Printer](/api-docs/clay-native/haxe/xml/Printer/) | class | This class provides utility methods to convert Xml instances to |
| [XmlParserException](/api-docs/clay-native/haxe/xml/XmlParserException/) | class |  |
| [Compress](/api-docs/clay-native/haxe/zip/Compress/) | class |  |
| [FlushMode](/api-docs/clay-native/haxe/zip/FlushMode/) | enum |  |
| [Huffman](/api-docs/clay-native/haxe/zip/Huffman/) | enum |  |
| [HuffTools](/api-docs/clay-native/haxe/zip/HuffTools/) | class |  |
| [InflateImpl](/api-docs/clay-native/haxe/zip/InflateImpl/) | class | A pure Haxe implementation of the ZLIB Inflate algorithm which allows reading compressed data wit... |
| [Uncompress](/api-docs/clay-native/haxe/zip/Uncompress/) | class |  |
| [Int](/api-docs/clay-native/Int/) | abstract | The standard `Int` type. Its precision depends on the platform. |
| [IntIterator](/api-docs/clay-native/IntIterator/) | class | IntIterator is used for implementing interval iterations. |
| [Iterable](/api-docs/clay-native/Iterable/) | typedef | An `Iterable` is a data structure which has an `iterator()` method. |
| [Iterator](/api-docs/clay-native/Iterator/) | typedef | An `Iterator` is a structure that permits iteration over elements of type `T`. |
| [KeyValueIterable](/api-docs/clay-native/KeyValueIterable/) | typedef | A `KeyValueIterable` is a data structure which has a `keyValueIterator()` |
| [KeyValueIterator](/api-docs/clay-native/KeyValueIterator/) | typedef | A `KeyValueIterator` is an `Iterator` that has a key and a value. |
| [Lambda](/api-docs/clay-native/Lambda/) | class | The `Lambda` class is a collection of methods to support functional |
| [List](/api-docs/clay-native/List/) | typedef |  |
| [Map](/api-docs/clay-native/Map/) | typedef |  |
| [Math](/api-docs/clay-native/Math/) | class | This class defines mathematical functions and constants. |
| [Null](/api-docs/clay-native/Null/) | abstract | `Null<T>` is a wrapper that can be used to make the basic types `Int`, |
| [Reflect](/api-docs/clay-native/Reflect/) | class | The Reflect API is a way to manipulate values dynamically through an |
| [Single](/api-docs/clay-native/Single/) | abstract | Single-precision IEEE 32bit float (4-byte). |
| [Std](/api-docs/clay-native/Std/) | class | The Std class provides standard methods for manipulating basic types. |
| [String](/api-docs/clay-native/String/) | class | The basic String class. |
| [StringBuf](/api-docs/clay-native/StringBuf/) | class | A String buffer is an efficient way to build a big string by appending small |
| [StringTools](/api-docs/clay-native/StringTools/) | class | This class provides advanced methods on Strings. It is ideally used with |
| [Sys](/api-docs/clay-native/Sys/) | class | This class provides access to various base functions of system platforms. |
| [FileStat](/api-docs/clay-native/sys/FileStat/) | typedef | File information, as given by `sys.FileSystem.stat`. |
| [FileSystem](/api-docs/clay-native/sys/FileSystem/) | class | This class provides information about files and directories. |
| [File](/api-docs/clay-native/sys/io/File/) | class | API for reading and writing files. |
| [FileInput](/api-docs/clay-native/sys/io/FileInput/) | class | Use `sys.io.File.read` to create a `FileInput`. |
| [FileOutput](/api-docs/clay-native/sys/io/FileOutput/) | class | Use `sys.io.File.write` to create a `FileOutput`. |
| [Process](/api-docs/clay-native/sys/io/Process/) | class |  |
| [Deque](/api-docs/clay-native/sys/thread/Deque/) | class | A Deque is a double-ended queue with a `pop` method that can block until |
| [EventHandler](/api-docs/clay-native/sys/thread/EventHandler/) | abstract |  |
| [EventLoop](/api-docs/clay-native/sys/thread/EventLoop/) | class | An event loop implementation used for `sys.thread.Thread` |
| [Lock](/api-docs/clay-native/sys/thread/Lock/) | class | A Lock allows blocking execution until it has been unlocked. It keeps track |
| [Mutex](/api-docs/clay-native/sys/thread/Mutex/) | class | Creates a mutex, which can be used to acquire a temporary lock |
| [NextEventTime](/api-docs/clay-native/sys/thread/NextEventTime/) | enum | When an event loop has an available event to execute. |
| [NoEventLoopException](/api-docs/clay-native/sys/thread/NoEventLoopException/) | class |  |
| [Thread](/api-docs/clay-native/sys/thread/Thread/) | abstract |  |
| [Type](/api-docs/clay-native/Type/) | class | The Haxe Reflection API allows retrieval of type information at runtime. |
| [UInt](/api-docs/clay-native/UInt/) | abstract | The unsigned `Int` type is only defined for Flash and C#. |
| [ValueType](/api-docs/clay-native/ValueType/) | enum |  |
| [Void](/api-docs/clay-native/Void/) | abstract | The standard `Void` type. Only `null` values can be of the type `Void`. |
| [Xml](/api-docs/clay-native/Xml/) | class | Cross-platform Xml API. |
| [XmlType](/api-docs/clay-native/XmlType/) | abstract | Xml node types. |
| [__Int64](/api-docs/clay-native/haxe/_Int64/__Int64/) | typedef |  |
| [NativeInt64Helper](/api-docs/clay-native/haxe/_Int64/NativeInt64Helper/) | class |  |
| [DefaultResolver](/api-docs/clay-native/haxe/_Unserializer/DefaultResolver/) | class |  |
| [ListIterator](/api-docs/clay-native/haxe/ds/_List/ListIterator/) | class |  |
| [ListNode](/api-docs/clay-native/haxe/ds/_List/ListNode/) | class |  |
| [VectorData](/api-docs/clay-native/haxe/ds/_Vector/VectorData/) | typedef |  |
| [MetaObject](/api-docs/clay-native/haxe/rtti/_Meta/MetaObject/) | typedef |  |
| [AttribAccess](/api-docs/clay-native/haxe/xml/_Access/AttribAccess/) | abstract |  |
| [HasAttribAccess](/api-docs/clay-native/haxe/xml/_Access/HasAttribAccess/) | abstract |  |
| [HasNodeAccess](/api-docs/clay-native/haxe/xml/_Access/HasNodeAccess/) | abstract |  |
| [NodeAccess](/api-docs/clay-native/haxe/xml/_Access/NodeAccess/) | abstract |  |
| [NodeListAccess](/api-docs/clay-native/haxe/xml/_Access/NodeListAccess/) | abstract |  |
| [S](/api-docs/clay-native/haxe/xml/_Parser/S/) | abstract |  |
| [State](/api-docs/clay-native/haxe/zip/_InflateImpl/State/) | enum |  |
| [Window](/api-docs/clay-native/haxe/zip/_InflateImpl/Window/) | class |  |
| [Stdin](/api-docs/clay-native/sys/io/_Process/Stdin/) | class |  |
| [Stdout](/api-docs/clay-native/sys/io/_Process/Stdout/) | class |  |
| [RegularEvent](/api-docs/clay-native/sys/thread/_EventLoop/RegularEvent/) | class |  |
| [HaxeThread](/api-docs/clay-native/sys/thread/_Thread/HaxeThread/) | class |  |
| [NativeThreadHandle](/api-docs/clay-native/sys/thread/_Thread/NativeThreadHandle/) | abstract |  |
| [ThreadHandle](/api-docs/clay-native/sys/thread/_Thread/ThreadHandle/) | typedef |  |
| [ThreadImpl](/api-docs/clay-native/sys/thread/_Thread/ThreadImpl/) | typedef |  |

