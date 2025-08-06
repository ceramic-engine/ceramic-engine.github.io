---
layout: api-docs
category: api-docs
subCategory: index
menu: Index
title: API Reference
target: Unity
permalink: api-docs/unity/
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
- [Unity](#unity)
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
| [AllApi](/api-docs/unity/ceramic/AllApi/) | class | Utility class to prevent dead code elimination of API classes. |
| [AlphaColor](/api-docs/unity/ceramic/AlphaColor/) | abstract | Color with alpha channel stored as a 32-bit integer. |
| [AntialiasedTriangle](/api-docs/unity/ceramic/AntialiasedTriangle/) | class | A specialized triangle shape that simulates antialiasing using additional vertices. |
| [App](/api-docs/unity/ceramic/App/) | class | `App` class is the root instance of any ceramic app. |
| [AppXUpdatesHandler](/api-docs/unity/ceramic/AppXUpdatesHandler/) | class | Internal handler for delayed update callbacks in the App class. |
| [Arc](/api-docs/unity/ceramic/Arc/) | class | A mesh subclass for drawing arcs, pies, rings, and disc geometry. |
| [ArrayPool](/api-docs/unity/ceramic/ArrayPool/) | class | A pool system for efficiently reusing arrays of fixed sizes. |
| [Assert](/api-docs/unity/ceramic/Assert/) | class | Assertion utility for runtime validation in debug builds. |
| [Asset](/api-docs/unity/ceramic/Asset/) | class | Base class for all asset types in Ceramic. |
| [AssetId](/api-docs/unity/ceramic/AssetId/) | abstract | Type-safe wrapper for asset identifiers. |
| [AssetOptions](/api-docs/unity/ceramic/AssetOptions/) | typedef | Asset loading options. |
| [AssetPathInfo](/api-docs/unity/ceramic/AssetPathInfo/) | class | Information extracted from a raw asset path. |
| [Assets](/api-docs/unity/ceramic/Assets/) | class | The main asset management class for Ceramic framework. |
| [AssetsLoadMethod](/api-docs/unity/ceramic/AssetsLoadMethod/) | abstract | Defines how assets should be loaded by the system. |
| [AssetsScheduleMethod](/api-docs/unity/ceramic/AssetsScheduleMethod/) | abstract | Defines how multiple assets are scheduled for loading. |
| [AssetStatus](/api-docs/unity/ceramic/AssetStatus/) | enum | Represents the current loading state of an asset. |
| [AtlasAsset](/api-docs/unity/ceramic/AtlasAsset/) | class | Asset for loading texture atlases (sprite sheets with metadata). |
| [Audio](/api-docs/unity/ceramic/Audio/) | class | Main audio system manager for Ceramic. |
| [AudioFilter](/api-docs/unity/ceramic/AudioFilter/) | class | Base class for audio filters that can process audio buffers in real-time. |
| [AudioFilterBuffer](/api-docs/unity/ceramic/AudioFilterBuffer/) | typedef | Platform-specific audio filter buffer for real-time audio processing. |
| [AudioFilters](/api-docs/unity/ceramic/AudioFilters/) | class | Internal manager for audio filter worklets across audio buses. |
| [AudioFilterWorklet](/api-docs/unity/ceramic/AudioFilterWorklet/) | class | The actual worklet class that will do the audio processing of a given `AudioFilter`. |
| [AudioMixer](/api-docs/unity/ceramic/AudioMixer/) | class | Controls audio properties for a group of sounds. |
| [AutoCollections](/api-docs/unity/ceramic/AutoCollections/) | interface | Interface that enables automatic collection generation for classes. |
| [BackgroundQueue](/api-docs/unity/ceramic/BackgroundQueue/) | class | A thread-safe queue for executing functions serially in a background thread. |
| [BezierEasing](/api-docs/unity/ceramic/BezierEasing/) | class | High-performance Bezier curve easing for smooth animations. |
| [BinaryAsset](/api-docs/unity/ceramic/BinaryAsset/) | class | Asset for loading binary files as raw bytes. |
| [BitmapFont](/api-docs/unity/ceramic/BitmapFont/) | class | A bitmap font implementation that handles both regular bitmap fonts and MSDF (Multi-channel Signe... |
| [BitmapFontCharacter](/api-docs/unity/ceramic/BitmapFontCharacter/) | class | Represents a single character (glyph) in a bitmap font. |
| [BitmapFontData](/api-docs/unity/ceramic/BitmapFontData/) | class | Complete data structure containing all information about a bitmap font. |
| [BitmapFontDataPage](/api-docs/unity/ceramic/BitmapFontDataPage/) | class | Information about a single texture page in a multi-page bitmap font. |
| [BitmapFontDistanceFieldData](/api-docs/unity/ceramic/BitmapFontDistanceFieldData/) | class | Configuration data for distance field fonts (SDF/MSDF). |
| [BitmapFontParser](/api-docs/unity/ceramic/BitmapFontParser/) | class | Parser for bitmap font definition files in BMFont format. |
| [Blending](/api-docs/unity/ceramic/Blending/) | abstract | Blending modes that control how pixels are combined when drawing. |
| [Border](/api-docs/unity/ceramic/Border/) | class | A rectangle visual that display a border |
| [BorderPosition](/api-docs/unity/ceramic/BorderPosition/) | enum | Defines where a border is positioned relative to a shape's edge. |
| [Camera](/api-docs/unity/ceramic/Camera/) | class | A flexible camera system for 2D games. |
| [Click](/api-docs/unity/ceramic/Click/) | class | Component that detects click/tap events on visuals. |
| [Closure](/api-docs/unity/ceramic/Closure/) | class | A simple closure implementation for storing a function with pre-bound arguments. |
| [Collection](/api-docs/unity/ceramic/Collection/) | abstract | A type-safe collection for managing CollectionEntry items. |
| [CollectionEntry](/api-docs/unity/ceramic/CollectionEntry/) | class | Base class for entries that can be stored in a Collection. |
| [CollectionImpl](/api-docs/unity/ceramic/CollectionImpl/) | class | Internal implementation of the Collection abstract. |
| [CollectionUtils](/api-docs/unity/ceramic/CollectionUtils/) | class | Utility functions for working with Collections. |
| [Color](/api-docs/unity/ceramic/Color/) | abstract | Class representing a color, based on Int. |
| [Component](/api-docs/unity/ceramic/Component/) | interface | Interface for components that can be attached to entities. |
| [ComputeFps](/api-docs/unity/ceramic/ComputeFps/) | class | A utility class for calculating frames per second (FPS) using a rolling average. |
| [ConvertArray](/api-docs/unity/ceramic/ConvertArray/) | class | Converter for array fields in fragments and data serialization. |
| [ConvertColor](/api-docs/unity/ceramic/ConvertColor/) | class | Converter for Color fields in fragments and data serialization. |
| [ConvertComponentMap](/api-docs/unity/ceramic/ConvertComponentMap/) | class | Converter for component map fields in fragments and data serialization. |
| [ConvertField](/api-docs/unity/ceramic/ConvertField/) | interface | Interface to convert basic type `T` to field type `U` and vice versa. |
| [ConvertFont](/api-docs/unity/ceramic/ConvertFont/) | class | Converter for BitmapFont fields in fragments and data serialization. |
| [ConvertFragmentData](/api-docs/unity/ceramic/ConvertFragmentData/) | class | Converter for FragmentData fields in fragments and data serialization. |
| [ConvertIntBoolMap](/api-docs/unity/ceramic/ConvertIntBoolMap/) | class | Converter for IntBoolMap fields in fragments and data serialization. |
| [ConvertMap](/api-docs/unity/ceramic/ConvertMap/) | class | Converter for Map fields in fragments and data serialization. |
| [ConvertTexture](/api-docs/unity/ceramic/ConvertTexture/) | class | Converter for Texture fields in fragments and data serialization. |
| [Csv](/api-docs/unity/ceramic/Csv/) | class | CSV parsing and generation utilities with proper escaping and quote handling. |
| [CustomAssetKind](/api-docs/unity/ceramic/CustomAssetKind/) | class | Defines a custom asset type that can be registered with the Assets system. |
| [DatabaseAsset](/api-docs/unity/ceramic/DatabaseAsset/) | class | Asset for loading CSV database files. |
| [DecomposedTransform](/api-docs/unity/ceramic/DecomposedTransform/) | class | Decomposed transform holds rotation, translation, scale, skew and pivot informations. |
| [DoubleClick](/api-docs/unity/ceramic/DoubleClick/) | class | Component that detects double-click/double-tap events on visuals. |
| [DynamicData](/api-docs/unity/ceramic/DynamicData/) | class | A flexible component for attaching arbitrary data to entities. |
| [Easing](/api-docs/unity/ceramic/Easing/) | enum | Enumeration of standard easing functions for animations. |
| [EasingUtils](/api-docs/unity/ceramic/EasingUtils/) | class | Utility functions for converting between Easing enum values and strings. |
| [EditText](/api-docs/unity/ceramic/EditText/) | class | Component that enables text editing functionality for Text visuals. |
| [Either](/api-docs/unity/ceramic/Either/) | abstract | A type that can hold a value of either type T1 or type T2. |
| [Entity](/api-docs/unity/ceramic/Entity/) | class | Base class for all entities in the Ceramic framework. |
| [EntityData](/api-docs/unity/ceramic/EntityData/) | class | Static utilities for managing dynamic data on entities. |
| [Enums](/api-docs/unity/ceramic/Enums/) | class | Macro utilities for working with enum values at compile time. |
| [Equal](/api-docs/unity/ceramic/Equal/) | class | Deep equality comparison utilities for various data types. |
| [Errors](/api-docs/unity/ceramic/Errors/) | class | Global error handling utilities for the Ceramic engine. |
| [Extensions](/api-docs/unity/ceramic/Extensions/) | class | A collection of static extension methods for common data types. |
| [FieldInfo](/api-docs/unity/ceramic/FieldInfo/) | class | Runtime reflection utility for extracting field type information from classes. |
| [FieldMeta](/api-docs/unity/ceramic/FieldMeta/) | class | Runtime reflection utility for accessing field metadata. |
| [Files](/api-docs/unity/ceramic/Files/) | class | Cross-platform filesystem utilities for Ceramic. |
| [FileWatcher](/api-docs/unity/ceramic/FileWatcher/) | class | Cross-platform file monitoring system for hot-reloading and file change detection. |
| [Filter](/api-docs/unity/ceramic/Filter/) | class | A visual container that renders its children to a texture for post-processing effects. |
| [Flags](/api-docs/unity/ceramic/Flags/) | abstract | Efficient bit flag storage using a single integer. |
| [Float32Array](/api-docs/unity/ceramic/Float32Array/) | typedef | A typed array of 32-bit floating point values. |
| [FontAsset](/api-docs/unity/ceramic/FontAsset/) | class | Asset type for loading bitmap fonts. |
| [Fragment](/api-docs/unity/ceramic/Fragment/) | class | A fragment is a powerful container that manages groups of entities and visuals |
| [FragmentData](/api-docs/unity/ceramic/FragmentData/) | typedef | Data structure that defines a fragment's content and properties. |
| [FragmentItem](/api-docs/unity/ceramic/FragmentItem/) | typedef | Defines an entity instance within a fragment. |
| [Fragments](/api-docs/unity/ceramic/Fragments/) | class | A compile-time generated class containing constants for all fragment assets. |
| [FragmentsAsset](/api-docs/unity/ceramic/FragmentsAsset/) | class | An asset that loads and manages fragment data from `.fragment` files. |
| [GamepadAxis](/api-docs/unity/ceramic/GamepadAxis/) | abstract | Represents gamepad analog stick and trigger axes. |
| [GamepadButton](/api-docs/unity/ceramic/GamepadButton/) | abstract | Represents gamepad button mappings. |
| [GeometryUtils](/api-docs/unity/ceramic/GeometryUtils/) | class | A collection of static utility functions for 2D geometric calculations. |
| [GlyphQuad](/api-docs/unity/ceramic/GlyphQuad/) | class | A specialized Quad that represents a single rendered glyph (character) in text rendering. |
| [Group](/api-docs/unity/ceramic/Group/) | class | A container for managing collections of entities as a single unit. |
| [HashedString](/api-docs/unity/ceramic/HashedString/) | class | A utility class for encoding and decoding strings with integrity verification using MD5 hashes. |
| [HighPassFilter](/api-docs/unity/ceramic/HighPassFilter/) | class | A high-pass audio filter that attenuates frequencies below a cutoff point. |
| [HighPassFilterWorklet](/api-docs/unity/ceramic/HighPassFilterWorklet/) | class | The audio processing worklet for the high-pass filter. |
| [ImageAsset](/api-docs/unity/ceramic/ImageAsset/) | class | Asset type for loading image files as textures. |
| [ImageType](/api-docs/unity/ceramic/ImageType/) | abstract | Supported image file formats for loading and exporting images. |
| [Immediate](/api-docs/unity/ceramic/Immediate/) | class | A utility class for scheduling callbacks to be executed in a batch. |
| [InitSettings](/api-docs/unity/ceramic/InitSettings/) | class | Same as Settings, but for app startup (inside Project.new(settings)). |
| [Input](/api-docs/unity/ceramic/Input/) | class | Manages all input handling for keyboard and gamepad devices. |
| [IntBoolMap](/api-docs/unity/ceramic/IntBoolMap/) | abstract | A map that uses int as keys and booleans as values. |
| [IntBoolMapIterator](/api-docs/unity/ceramic/IntBoolMapIterator/) | class |  |
| [IntBoolMapKeyIterator](/api-docs/unity/ceramic/IntBoolMapKeyIterator/) | class |  |
| [IntBoolMapKeyValueIterator](/api-docs/unity/ceramic/IntBoolMapKeyValueIterator/) | class |  |
| [IntFloatMap](/api-docs/unity/ceramic/IntFloatMap/) | class | Fallback implementation of IntFloatMap for non-C++/C# targets. |
| [IntFloatMapIterator](/api-docs/unity/ceramic/IntFloatMapIterator/) | class |  |
| [IntFloatMapKeyIterator](/api-docs/unity/ceramic/IntFloatMapKeyIterator/) | class |  |
| [IntFloatMapKeyValueIterator](/api-docs/unity/ceramic/IntFloatMapKeyValueIterator/) | class |  |
| [IntIntMap](/api-docs/unity/ceramic/IntIntMap/) | class |  |
| [IntIntMapIterator](/api-docs/unity/ceramic/IntIntMapIterator/) | class |  |
| [IntIntMapKeyIterator](/api-docs/unity/ceramic/IntIntMapKeyIterator/) | class |  |
| [IntIntMapKeyValueIterator](/api-docs/unity/ceramic/IntIntMapKeyValueIterator/) | class |  |
| [IntMap](/api-docs/unity/ceramic/IntMap/) | class | An object map that uses integers as key. |
| [IntMapIterator](/api-docs/unity/ceramic/IntMapIterator/) | class |  |
| [IntMapKeyIterator](/api-docs/unity/ceramic/IntMapKeyIterator/) | class |  |
| [IntMapKeyValueIterator](/api-docs/unity/ceramic/IntMapKeyValueIterator/) | class |  |
| [Json](/api-docs/unity/ceramic/Json/) | class | JSON utility class that provides a unified interface for JSON operations across all Ceramic targets. |
| [Key](/api-docs/unity/ceramic/Key/) | class | Represents a keyboard key press event with both key code and scan code information. |
| [KeyAcceleratorItem](/api-docs/unity/ceramic/KeyAcceleratorItem/) | enum | Represents a component of a keyboard shortcut combination. |
| [KeyBinding](/api-docs/unity/ceramic/KeyBinding/) | class | Represents a keyboard shortcut binding that triggers when a specific key combination is pressed. |
| [KeyBindings](/api-docs/unity/ceramic/KeyBindings/) | class | Manages a collection of keyboard shortcut bindings. |
| [KeyCode](/api-docs/unity/ceramic/KeyCode/) | abstract | Keyboard key codes representing the character/symbol associated with a key. |
| [Layer](/api-docs/unity/ceramic/Layer/) | class | A specialized container for organizing and grouping visuals. |
| [Lazy](/api-docs/unity/ceramic/Lazy/) | interface | Interface for implementing lazy initialization of properties in Ceramic classes. |
| [Line](/api-docs/unity/ceramic/Line/) | class | Display lines composed of multiple segments, curves and paths. |
| [LineCap](/api-docs/unity/ceramic/LineCap/) | typedef | Defines how line ends are rendered. |
| [LineJoin](/api-docs/unity/ceramic/LineJoin/) | typedef | Defines how line segments are joined at corners. |
| [Logger](/api-docs/unity/ceramic/Logger/) | class | Centralized logging system for Ceramic applications that provides colored, categorized output. |
| [LongPress](/api-docs/unity/ceramic/LongPress/) | class | Component that detects long press/hold gestures on visuals. |
| [LowPassFilter](/api-docs/unity/ceramic/LowPassFilter/) | class | A low-pass audio filter that attenuates frequencies above a cutoff point. |
| [LowPassFilterWorklet](/api-docs/unity/ceramic/LowPassFilterWorklet/) | class | The audio processing worklet for the low-pass filter. |
| [LowRes](/api-docs/unity/ceramic/LowRes/) | class | A container that displays visuals at low resolution with optional antialiasing through supersampl... |
| [DefinesMacro](/api-docs/unity/ceramic/macros/DefinesMacro/) | class | Utilities to access compile-time defines from code. |
| [EnumAbstractMacro](/api-docs/unity/ceramic/macros/EnumAbstractMacro/) | class | Utility macros for working with enum abstracts at compile time. |
| [PluginsMacro](/api-docs/unity/ceramic/macros/PluginsMacro/) | class | Macro for automatic plugin initialization in the Ceramic framework. |
| [Mesh](/api-docs/unity/ceramic/Mesh/) | class | A flexible visual for drawing custom shapes composed of triangles. |
| [MeshColorMapping](/api-docs/unity/ceramic/MeshColorMapping/) | abstract | Defines how colors are mapped to a mesh's geometry. |
| [MeshExtensions](/api-docs/unity/ceramic/MeshExtensions/) | class | Static extension class providing utility methods for Mesh manipulation. |
| [MeshPool](/api-docs/unity/ceramic/MeshPool/) | class | A global object pool for efficiently reusing Mesh instances and their arrays. |
| [MeshUtils](/api-docs/unity/ceramic/MeshUtils/) | class | Low-level utility class for generating mesh data arrays. |
| [MouseButton](/api-docs/unity/ceramic/MouseButton/) | abstract | A typed (mouse) button id |
| [Ngon](/api-docs/unity/ceramic/Ngon/) | class | A mesh that creates regular polygons with a configurable number of sides. |
| [NineSlice](/api-docs/unity/ceramic/NineSlice/) | class | A visual divided into 9 areas to create "nine-slice" textured scalable objects. |
| [NineSliceRendering](/api-docs/unity/ceramic/NineSliceRendering/) | abstract | Defines how a slice (from a `NineSlice` object) should be rendered. |
| [ParticleEmitter](/api-docs/unity/ceramic/ParticleEmitter/) | class | A powerful and flexible particle emitter system for creating visual effects. |
| [ParticleItem](/api-docs/unity/ceramic/ParticleItem/) | class | Represents a single particle in a particle system. |
| [Particles](/api-docs/unity/ceramic/Particles/) | class | A visual container that manages a particle emitter with convenient automatic emission modes. |
| [ParticlesLaunchMode](/api-docs/unity/ceramic/ParticlesLaunchMode/) | enum | Defines how particle velocities are calculated when launched from an emitter. |
| [ParticlesStatus](/api-docs/unity/ceramic/ParticlesStatus/) | enum | Represents the current operational state of a particle emitter. |
| [Path](/api-docs/unity/ceramic/Path/) | class | Cross-platform path manipulation utilities optimized for Ceramic. |
| [PersistentData](/api-docs/unity/ceramic/PersistentData/) | class | Provides a simple key-value storage system for persisting data between application sessions. |
| [PixelArt](/api-docs/unity/ceramic/PixelArt/) | class | A filter configured to display pixel art content with high-quality upscaling. |
| [Pixels](/api-docs/unity/ceramic/Pixels/) | class | Utility class for manipulating raw RGBA pixel data. |
| [Platform](/api-docs/unity/ceramic/Platform/) | class | A class that encapsulate platform-specific code. |
| [Point](/api-docs/unity/ceramic/Point/) | class | A mutable 3D point class with automatic object pooling for memory efficiency. |
| [Pool](/api-docs/unity/ceramic/Pool/) | class | A generic object pool utility. |
| [Preloadable](/api-docs/unity/ceramic/Preloadable/) | interface | Interface for objects that can report their loading progress. |
| [PreloadStatus](/api-docs/unity/ceramic/PreloadStatus/) | abstract | Status values for preloadable resources. |
| [PremultiplyAlpha](/api-docs/unity/ceramic/PremultiplyAlpha/) | class | Utilities for converting between straight and premultiplied alpha in image data. |
| [Quad](/api-docs/unity/ceramic/Quad/) | class | The most basic and commonly used visual for displaying rectangles and images. |
| [ReadOnlyArray](/api-docs/unity/ceramic/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [ReadOnlyMap](/api-docs/unity/ceramic/ReadOnlyMap/) | abstract | A read-only view of a Map that prevents modification. |
| [ReadOnlyPoint](/api-docs/unity/ceramic/ReadOnlyPoint/) | abstract | A read-only view of a Point that prevents modification. |
| [Renderer](/api-docs/unity/ceramic/Renderer/) | class | The core 2D rendering engine for Ceramic, responsible for efficiently drawing all visuals to the ... |
| [RenderPrimitiveType](/api-docs/unity/ceramic/RenderPrimitiveType/) | abstract | Defines the primitive types used for rendering geometry. |
| [RenderTexture](/api-docs/unity/ceramic/RenderTexture/) | class | A texture that can be rendered to, allowing off-screen rendering. |
| [Repeat](/api-docs/unity/ceramic/Repeat/) | class | A visual component that repeats a texture pattern to fill a specified area. |
| [ReusableArray](/api-docs/unity/ceramic/ReusableArray/) | class | A reusable array to use in places that need a temporary array many times. |
| [Runner](/api-docs/unity/ceramic/Runner/) | class | Cross-platform thread management utility for executing code on main and background threads. |
| [RuntimeAssets](/api-docs/unity/ceramic/RuntimeAssets/) | class | Runtime utilities to compute asset lists/names from raw (relative) file list. |
| [ScanCode](/api-docs/unity/ceramic/ScanCode/) | abstract | Keyboard scan codes representing physical key positions. |
| [Scene](/api-docs/unity/ceramic/Scene/) | class | Base class for creating scenes in Ceramic. |
| [SceneStatus](/api-docs/unity/ceramic/SceneStatus/) | abstract | Represents the lifecycle status of a Scene in the Ceramic framework. |
| [SceneSystem](/api-docs/unity/ceramic/SceneSystem/) | class | Core system responsible for managing scene lifecycle, transitions, and display hierarchy. |
| [Screen](/api-docs/unity/ceramic/Screen/) | class | Core screen management class that handles display properties, coordinate transformations, and inp... |
| [ScreenOrientation](/api-docs/unity/ceramic/ScreenOrientation/) | abstract | Defines screen orientation modes for mobile and desktop applications. |
| [ScreenScaling](/api-docs/unity/ceramic/ScreenScaling/) | enum | Defines how the application's logical screen size is mapped to the native screen. |
| [ScriptableAlphaColor](/api-docs/unity/ceramic/scriptable/ScriptableAlphaColor/) | class | Scriptable wrapper for AlphaColor to expose RGBA color functionality to scripts. |
| [ScriptableBlending](/api-docs/unity/ceramic/scriptable/ScriptableBlending/) | class | Scriptable wrapper for Blending enum to expose blending modes to scripts. |
| [ScriptableColor](/api-docs/unity/ceramic/scriptable/ScriptableColor/) | class | Scriptable wrapper for Color to expose RGB color functionality to scripts. |
| [ScriptableFlags](/api-docs/unity/ceramic/scriptable/ScriptableFlags/) | class | Scriptable wrapper for Flags to expose bit flag operations to scripts. |
| [ScriptableMap](/api-docs/unity/ceramic/scriptable/ScriptableMap/) | interface | Scriptable interface for Map to expose key-value mapping functionality to scripts. |
| [ScriptableMeshColorMapping](/api-docs/unity/ceramic/scriptable/ScriptableMeshColorMapping/) | class | Scriptable wrapper for MeshColorMapping to expose mesh coloring modes to scripts. |
| [ScriptableMouseButton](/api-docs/unity/ceramic/scriptable/ScriptableMouseButton/) | class | Scriptable wrapper for MouseButton to expose mouse button constants to scripts. |
| [ScriptableStd](/api-docs/unity/ceramic/scriptable/ScriptableStd/) | class | Scriptable wrapper for Std to expose standard library functions to scripts. |
| [ScrollDirection](/api-docs/unity/ceramic/ScrollDirection/) | enum | Defines the direction of scrolling for scrollable components. |
| [Scroller](/api-docs/unity/ceramic/Scroller/) | class | A scrollable container that allows smooth scrolling and dragging of content. |
| [ScrollerDragThresholdStatus](/api-docs/unity/ceramic/ScrollerDragThresholdStatus/) | abstract |  |
| [ScrollerStatus](/api-docs/unity/ceramic/ScrollerStatus/) | enum | Represents the current state of a Scroller component during user interaction. |
| [SeedRandom](/api-docs/unity/ceramic/SeedRandom/) | class | Seeded random number generator to get reproducible sequences of values. |
| [SelectText](/api-docs/unity/ceramic/SelectText/) | class | Component that handles text selection and cursor display for Text visuals. |
| [Settings](/api-docs/unity/ceramic/Settings/) | class | Central configuration hub for Ceramic applications. |
| [Shader](/api-docs/unity/ceramic/Shader/) | class | Represents a GPU shader program for custom rendering effects. |
| [ShaderAsset](/api-docs/unity/ceramic/ShaderAsset/) | class | Asset type for loading GPU shader programs. |
| [ShaderAttribute](/api-docs/unity/ceramic/ShaderAttribute/) | class | Defines a vertex attribute for shader programs. |
| [Shape](/api-docs/unity/ceramic/Shape/) | class | A visual for drawing arbitrary 2D shapes with automatic triangulation. |
| [Shortcuts](/api-docs/unity/ceramic/Shortcuts/) | class | Convenience static accessors and utility methods for common Ceramic functionality. |
| [Slug](/api-docs/unity/ceramic/Slug/) | class | URL-safe string generator that converts text into slugs suitable for URLs and filenames. |
| [SlugOptions](/api-docs/unity/ceramic/SlugOptions/) | class | Configuration options for slug generation. |
| [SortVisuals](/api-docs/unity/ceramic/SortVisuals/) | class | High-performance stable merge sort implementation specifically optimized for Visual arrays. |
| [SortVisualsByDepth](/api-docs/unity/ceramic/SortVisualsByDepth/) | class | Simplified high-performance stable merge sort for Visual arrays based on depth only. |
| [Sound](/api-docs/unity/ceramic/Sound/) | class | Represents a loaded sound that can be played multiple times. |
| [SoundAsset](/api-docs/unity/ceramic/SoundAsset/) | class | Asset type for loading audio/sound files. |
| [SoundPlayer](/api-docs/unity/ceramic/SoundPlayer/) | abstract | Controls an individual sound playback instance. |
| [SpinLock](/api-docs/unity/ceramic/SpinLock/) | abstract | Lightweight spin lock implementation for low-contention thread synchronization. |
| [State](/api-docs/unity/ceramic/State/) | class | Base class for states in a state machine. |
| [StateMachine](/api-docs/unity/ceramic/StateMachine/) | class | A flexible state machine implementation for managing state transitions. |
| [StateMachineBase](/api-docs/unity/ceramic/StateMachineBase/) | class | Base class for state machine implementations. |
| [StateMachineComponent](/api-docs/unity/ceramic/StateMachineComponent/) | class | A state machine that can be attached to entities as a component. |
| [StateMachineImpl](/api-docs/unity/ceramic/StateMachineImpl/) | class | Implementation class for StateMachine functionality. |
| [StateMachineSystem](/api-docs/unity/ceramic/StateMachineSystem/) | class | System that manages and updates all active state machines. |
| [System](/api-docs/unity/ceramic/System/) | class | A `System` is an object assigned to app lifecycle and used to |
| [Systems](/api-docs/unity/ceramic/Systems/) | class | Manager for all System instances in the application. |
| [Task](/api-docs/unity/ceramic/Task/) | class | Base class for asynchronous tasks that can either succeed or fail. |
| [Tasks](/api-docs/unity/ceramic/Tasks/) | class | Utility class for running Task instances from command-line arguments. |
| [Text](/api-docs/unity/ceramic/Text/) | class | A visual to layout and display text. |
| [TextAlign](/api-docs/unity/ceramic/TextAlign/) | enum | Horizontal text alignment options for text rendering. |
| [TextAsset](/api-docs/unity/ceramic/TextAsset/) | class | Asset type for loading text files. |
| [TextInput](/api-docs/unity/ceramic/TextInput/) | class | Handles keyboard text input and cursor navigation. |
| [TextInputDelegate](/api-docs/unity/ceramic/TextInputDelegate/) | interface | Interface for text layout information providers used by text input systems. |
| [Texture](/api-docs/unity/ceramic/Texture/) | class | A texture represents an image loaded in GPU memory ready for rendering. |
| [TextureAtlas](/api-docs/unity/ceramic/TextureAtlas/) | class | A texture atlas that combines multiple images into larger textures for efficient rendering. |
| [TextureAtlasPacker](/api-docs/unity/ceramic/TextureAtlasPacker/) | class | Dynamic texture atlas builder that packs multiple images into optimized texture pages at runtime. |
| [TextureAtlasPage](/api-docs/unity/ceramic/TextureAtlasPage/) | class | Represents a single texture page within a texture atlas. |
| [TextureAtlasParser](/api-docs/unity/ceramic/TextureAtlasParser/) | class | Parser for texture atlas definition files in multiple formats. |
| [TextureAtlasRegion](/api-docs/unity/ceramic/TextureAtlasRegion/) | class | Represents a single image region within a texture atlas. |
| [TextureFilter](/api-docs/unity/ceramic/TextureFilter/) | enum | Texture filtering modes that control how pixels are sampled when textures are scaled. |
| [TextureTile](/api-docs/unity/ceramic/TextureTile/) | class | Defines a rectangular sub-region within a texture for rendering. |
| [TextureTilePacker](/api-docs/unity/ceramic/TextureTilePacker/) | class | Dynamic texture tile allocator with automatic packing and reuse capabilities. |
| [TextureWrap](/api-docs/unity/ceramic/TextureWrap/) | abstract | Texture wrapping modes for handling UV coordinates outside the 0-1 range. |
| [Timeline](/api-docs/unity/ceramic/Timeline/) | class | An animation timeline system that manages keyframe-based animations. |
| [TimelineBoolKeyframe](/api-docs/unity/ceramic/TimelineBoolKeyframe/) | class | A keyframe that stores a boolean value for timeline animations. |
| [TimelineBoolTrack](/api-docs/unity/ceramic/TimelineBoolTrack/) | class | A timeline track that animates boolean values. |
| [TimelineColorKeyframe](/api-docs/unity/ceramic/TimelineColorKeyframe/) | class | A keyframe that stores a color value for timeline animations. |
| [TimelineColorTrack](/api-docs/unity/ceramic/TimelineColorTrack/) | class | A timeline track that animates color values with smooth interpolation. |
| [TimelineDegreesTrack](/api-docs/unity/ceramic/TimelineDegreesTrack/) | class | A specialized timeline track for animating rotation values in degrees. |
| [TimelineFloatArrayKeyframe](/api-docs/unity/ceramic/TimelineFloatArrayKeyframe/) | class | A keyframe that stores an array of floating-point values for timeline animations. |
| [TimelineFloatArrayTrack](/api-docs/unity/ceramic/TimelineFloatArrayTrack/) | class | A timeline track that animates arrays of floating-point values. |
| [TimelineFloatKeyframe](/api-docs/unity/ceramic/TimelineFloatKeyframe/) | class | A keyframe that stores a floating-point value for timeline animations. |
| [TimelineFloatTrack](/api-docs/unity/ceramic/TimelineFloatTrack/) | class | A timeline track that animates floating-point values with smooth interpolation. |
| [TimelineKeyframe](/api-docs/unity/ceramic/TimelineKeyframe/) | class |  |
| [TimelineKeyframeData](/api-docs/unity/ceramic/TimelineKeyframeData/) | typedef | Data structure representing a keyframe in serialized form. |
| [Timelines](/api-docs/unity/ceramic/Timelines/) | class | Central system for creating and binding timeline tracks and keyframes. |
| [TimelineTrack](/api-docs/unity/ceramic/TimelineTrack/) | class | Base class for animation tracks in a timeline system. |
| [TimelineTrackData](/api-docs/unity/ceramic/TimelineTrackData/) | typedef | Data structure representing an animation track in serialized form. |
| [Timer](/api-docs/unity/ceramic/Timer/) | class | Timer system for scheduling delayed and periodic callbacks. |
| [TimerCallback](/api-docs/unity/ceramic/TimerCallback/) | class | Internal data structure representing a scheduled timer callback. |
| [Touch](/api-docs/unity/ceramic/Touch/) | class | Represents a single touch point in a multi-touch interaction. |
| [Touches](/api-docs/unity/ceramic/Touches/) | abstract | A collection of active touch points for multi-touch handling. |
| [TouchesIterator](/api-docs/unity/ceramic/TouchesIterator/) | class | Iterator for the Touches collection. |
| [TouchInfo](/api-docs/unity/ceramic/TouchInfo/) | class |  |
| [TrackerBackend](/api-docs/unity/ceramic/TrackerBackend/) | class | Backend adapter that bridges the Tracker observable framework with Ceramic's backend services. |
| [Transform](/api-docs/unity/ceramic/Transform/) | class | Transform holds matrix data to make 2d rotate, translate, scale and skew transformations. |
| [TransformPool](/api-docs/unity/ceramic/TransformPool/) | class | An utility to reuse transform matrix object at application level. |
| [Triangle](/api-docs/unity/ceramic/Triangle/) | class | A simple colored triangle shape that fits within the specified dimensions. |
| [Triangulate](/api-docs/unity/ceramic/Triangulate/) | class | Utility class for triangulating polygons into triangles. |
| [Tween](/api-docs/unity/ceramic/Tween/) | class | A lightweight tweening engine for animating numeric values over time. |
| [UInt8Array](/api-docs/unity/ceramic/UInt8Array/) | typedef | Platform-specific implementation of an 8-bit unsigned integer array. |
| [Utils](/api-docs/unity/ceramic/Utils/) | class | Various utilities. Some of them are used by ceramic itself or its backends. |
| [Value](/api-docs/unity/ceramic/Value/) | class | An object that can hold any value. |
| [ValueEntry](/api-docs/unity/ceramic/ValueEntry/) | class | A collection entry that can hold any value. |
| [Velocity](/api-docs/unity/ceramic/Velocity/) | class | A velocity tracker that calculates speed based on position changes over time. |
| [VisibleBounds](/api-docs/unity/ceramic/VisibleBounds/) | class | A component that displays the visible bounds of a visual entity. |
| [Visual](/api-docs/unity/ceramic/Visual/) | class | Base class for all visual elements in Ceramic. |
| [VisualTransition](/api-docs/unity/ceramic/VisualTransition/) | class | A component that enables smooth property transitions for Visual objects. |
| [VisualTransitionProperties](/api-docs/unity/ceramic/VisualTransitionProperties/) | abstract | Property setter interface for visual transitions. |
| [WaitCallbacks](/api-docs/unity/ceramic/WaitCallbacks/) | class | Utility to create and wait for multiple callbacks and call |
| [WatchDirectory](/api-docs/unity/ceramic/WatchDirectory/) | class | A directory watcher that monitors file changes in specified directories. |
| [WatchedFile](/api-docs/unity/ceramic/_FileWatcher/WatchedFile/) | class | Internal data structure for tracking watched file state. |
| [TextureAtlasPackerPage](/api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerPage/) | class | Internal representation of a texture page during packing. |
| [TextureAtlasPackerRegion](/api-docs/unity/ceramic/_TextureAtlasPacker/TextureAtlasPackerRegion/) | class | Internal data structure for regions during the packing process. |
| [TextureAtlasReader](/api-docs/unity/ceramic/_TextureAtlasParser/TextureAtlasReader/) | class | Internal line-based reader for parsing LibGDX format atlas files. |
| [PackedTextureTile](/api-docs/unity/ceramic/_TextureTilePacker/PackedTextureTile/) | class | Internal texture tile implementation with grid allocation metadata. |
| [EarClippingTriangulator](/api-docs/unity/ceramic/_Triangulate/EarClippingTriangulator/) | class | Implementation of the ear-clipping algorithm for polygon triangulation. |
| [TweenEasingFunction](/api-docs/unity/ceramic/_Tween/TweenEasingFunction/) | class | Internal utility class containing easing function implementations. |

## Arcade

| Type | Kind | Description |
|------|------|-------------|
| [Axis](/api-docs/unity/arcade/Axis/) | abstract | Represents axis constants for physics calculations and collision detection. |
| [Body](/api-docs/unity/arcade/Body/) | class | The Physics Body is linked to a single game object. |
| [Collidable](/api-docs/unity/arcade/Collidable/) | interface | Any class implementing this interface can be used on World.collide() |
| [Direction](/api-docs/unity/arcade/Direction/) | abstract | Represents directional constants used for physics body movement and collision detection. |
| [Extensions](/api-docs/unity/arcade/Extensions/) | class | A bunch of static extensions to make life easier. |
| [Group](/api-docs/unity/arcade/Group/) | class | A Group is a container for multiple physics bodies. |
| [Line](/api-docs/unity/arcade/Line/) | class | Represents a line segment with a start and end point. |
| [Point](/api-docs/unity/arcade/Point/) | class | A 2D point with x and y coordinates. |
| [QuadTree](/api-docs/unity/arcade/QuadTree/) | class | A QuadTree implementation. |
| [QuadTreePool](/api-docs/unity/arcade/QuadTreePool/) | class | Object pool for QuadTree instances to reduce garbage collection overhead. |
| [SortBodiesBottomTop](/api-docs/unity/arcade/SortBodiesBottomTop/) | class | Provides a stable merge sort implementation for sorting Body arrays from bottom to top (by y coor... |
| [SortBodiesLeftRight](/api-docs/unity/arcade/SortBodiesLeftRight/) | class | Provides a stable merge sort implementation for sorting Body arrays from left to right (by x coor... |
| [SortBodiesRightLeft](/api-docs/unity/arcade/SortBodiesRightLeft/) | class | Provides a stable merge sort implementation for sorting Body arrays from right to left (by x coor... |
| [SortBodiesTopBottom](/api-docs/unity/arcade/SortBodiesTopBottom/) | class | Provides a stable merge sort implementation for sorting Body arrays from top to bottom (by y coor... |
| [SortDirection](/api-docs/unity/arcade/SortDirection/) | abstract | Defines sorting directions for physics bodies during collision detection. |
| [World](/api-docs/unity/arcade/World/) | class | The Arcade Physics world. Contains Arcade Physics related collision, overlap and motion methods. |
| [ArcadeSortGroupBottomTop](/api-docs/unity/ceramic/ArcadeSortGroupBottomTop/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupLeftRight](/api-docs/unity/ceramic/ArcadeSortGroupLeftRight/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupRightLeft](/api-docs/unity/ceramic/ArcadeSortGroupRightLeft/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSortGroupTopBottom](/api-docs/unity/ceramic/ArcadeSortGroupTopBottom/) | class | Specialized merge sort implementation for sorting physics bodies. |
| [ArcadeSystem](/api-docs/unity/ceramic/ArcadeSystem/) | class | Main system managing Arcade physics simulation in Ceramic. |
| [ArcadeWorld](/api-docs/unity/ceramic/ArcadeWorld/) | class | Extended physics world that integrates Arcade physics with Ceramic's visual system. |
| [VisualArcadePhysics](/api-docs/unity/ceramic/VisualArcadePhysics/) | class | Component that adds Arcade physics functionality to a Visual. |

## Tilemap

| Type | Kind | Description |
|------|------|-------------|
| [AutoTile](/api-docs/unity/ceramic/AutoTile/) | class | Configuration for an auto-tiling tile that automatically adjusts its appearance |
| [AutoTileKind](/api-docs/unity/ceramic/AutoTileKind/) | abstract | Defines the type of auto-tiling algorithm used by the `AutoTiler` component. |
| [AutoTiler](/api-docs/unity/ceramic/AutoTiler/) | class | Component that automatically processes tilemap tiles to apply auto-tiling rules. |
| [ConvertTilemapData](/api-docs/unity/ceramic/ConvertTilemapData/) | class | Field converter that handles conversion between tilemap asset names (strings) |
| [Tilemap](/api-docs/unity/ceramic/Tilemap/) | class | A visual component that renders tilemap data composed of multiple layers. |
| [TilemapAsset](/api-docs/unity/ceramic/TilemapAsset/) | class | Asset type for loading tilemap data from various formats (TMX, LDtk). |
| [TilemapData](/api-docs/unity/ceramic/TilemapData/) | class | Unified tilemap data structure that represents a tile-based map. |
| [TilemapEditor](/api-docs/unity/ceramic/TilemapEditor/) | class | Interactive tilemap editor component that enables in-game tile painting and erasing. |
| [TilemapLayer](/api-docs/unity/ceramic/TilemapLayer/) | class | Visual representation of a single layer within a tilemap. |
| [TilemapLayerData](/api-docs/unity/ceramic/TilemapLayerData/) | class | Data model representing a single layer within a tilemap. |
| [TilemapOrientation](/api-docs/unity/ceramic/TilemapOrientation/) | enum | Defines the projection orientation of a tilemap. |
| [TilemapParser](/api-docs/unity/ceramic/TilemapParser/) | class | Universal tilemap parser supporting multiple tilemap formats. |
| [TilemapPlugin](/api-docs/unity/ceramic/TilemapPlugin/) | class | Main plugin class that integrates tilemap support into Ceramic. |
| [TilemapQuad](/api-docs/unity/ceramic/TilemapQuad/) | class | Specialized Quad visual used to render individual tiles in a tilemap layer. |
| [TilemapRenderOrder](/api-docs/unity/ceramic/TilemapRenderOrder/) | enum | Defines the order in which tiles are rendered in a tilemap. |
| [TilemapStaggerAxis](/api-docs/unity/ceramic/TilemapStaggerAxis/) | enum | Defines the stagger axis for hexagonal and staggered tilemaps. |
| [TilemapStaggerIndex](/api-docs/unity/ceramic/TilemapStaggerIndex/) | enum | Defines which rows or columns are staggered in hexagonal and staggered tilemaps. |
| [TilemapTile](/api-docs/unity/ceramic/TilemapTile/) | abstract | Represents a single tile in a tilemap, storing both the tile ID and transformation flags. |
| [TilemapTmxParser](/api-docs/unity/ceramic/TilemapTmxParser/) | class | Internal parser for TMX (Tiled Map Editor) format files. |
| [Tileset](/api-docs/unity/ceramic/Tileset/) | class | Represents a collection of tiles used by a tilemap. |
| [TilesetGridOrientation](/api-docs/unity/ceramic/TilesetGridOrientation/) | enum | Defines the grid orientation for tiles within a tileset. |
| [TilesetImage](/api-docs/unity/ceramic/TilesetImage/) | class | Represents the image resource used by a tileset. |
| [TileSlope](/api-docs/unity/ceramic/TileSlope/) | class | Defines slope collision data for a tile in a tileset. |

## Ldtk

| Type | Kind | Description |
|------|------|-------------|
| [LdtkAutoLayerRuleDefinition](/api-docs/unity/ceramic/LdtkAutoLayerRuleDefinition/) | class | This complex section isn't meant to be used by game devs according to LDtk documentation, |
| [LdtkAutoRuleGroup](/api-docs/unity/ceramic/LdtkAutoRuleGroup/) | class |  |
| [LdtkBackgroundPosition](/api-docs/unity/ceramic/LdtkBackgroundPosition/) | class |  |
| [LdtkCheckerMode](/api-docs/unity/ceramic/LdtkCheckerMode/) | abstract |  |
| [LdtkData](/api-docs/unity/ceramic/LdtkData/) | class | Root class representing an LDtk project data structure. |
| [LdtkDataHelpers](/api-docs/unity/ceramic/LdtkDataHelpers/) | class |  |
| [LdtkDefinitions](/api-docs/unity/ceramic/LdtkDefinitions/) | class | Contains all the definitions used in an LDtk project. |
| [LdtkEmbedAtlas](/api-docs/unity/ceramic/LdtkEmbedAtlas/) | abstract |  |
| [LdtkEntityDefinition](/api-docs/unity/ceramic/LdtkEntityDefinition/) | class | Defines an entity type that can be placed in levels. |
| [LdtkEntityInstance](/api-docs/unity/ceramic/LdtkEntityInstance/) | class | An instance of an entity placed in a level. |
| [LdtkEnumDefinition](/api-docs/unity/ceramic/LdtkEnumDefinition/) | class |  |
| [LdtkEnumTag](/api-docs/unity/ceramic/LdtkEnumTag/) | class |  |
| [LdtkEnumValueDefinition](/api-docs/unity/ceramic/LdtkEnumValueDefinition/) | class |  |
| [LdtkFieldDefinition](/api-docs/unity/ceramic/LdtkFieldDefinition/) | class |  |
| [LdtkFieldInstance](/api-docs/unity/ceramic/LdtkFieldInstance/) | class | An instance of a custom field value. |
| [LdtkIntGridValue](/api-docs/unity/ceramic/LdtkIntGridValue/) | class |  |
| [LdtkLayerDefinition](/api-docs/unity/ceramic/LdtkLayerDefinition/) | class | Defines a layer type that can be used in levels. |
| [LdtkLayerInstance](/api-docs/unity/ceramic/LdtkLayerInstance/) | class | An instance of a layer in a level. |
| [LdtkLayerType](/api-docs/unity/ceramic/LdtkLayerType/) | abstract |  |
| [LdtkLevel](/api-docs/unity/ceramic/LdtkLevel/) | class | Represents a single level in an LDtk world. |
| [LdtkLevelLocation](/api-docs/unity/ceramic/LdtkLevelLocation/) | abstract |  |
| [LdtkLevelNeighbour](/api-docs/unity/ceramic/LdtkLevelNeighbour/) | class |  |
| [LdtkRenderMode](/api-docs/unity/ceramic/LdtkRenderMode/) | abstract |  |
| [LdtkTileCustomData](/api-docs/unity/ceramic/LdtkTileCustomData/) | class |  |
| [LdtkTileMode](/api-docs/unity/ceramic/LdtkTileMode/) | abstract |  |
| [LdtkTileRenderMode](/api-docs/unity/ceramic/LdtkTileRenderMode/) | abstract |  |
| [LdtkTilesetDefinition](/api-docs/unity/ceramic/LdtkTilesetDefinition/) | class |  |
| [LdtkTilesetRectangle](/api-docs/unity/ceramic/LdtkTilesetRectangle/) | class | This object represents a custom sub rectangle in a Tileset image. |
| [LdtkTocEntry](/api-docs/unity/ceramic/LdtkTocEntry/) | class | Represents a Table of Contents entry for entities marked with exportToToc. |
| [LdtkTocInstanceData](/api-docs/unity/ceramic/LdtkTocInstanceData/) | class | Contains instance data for an entity referenced in the table of contents. |
| [LdtkVisual](/api-docs/unity/ceramic/LdtkVisual/) | class | A default visual implementation to render LDtk entities. |
| [LdtkWorld](/api-docs/unity/ceramic/LdtkWorld/) | class | Represents a world in an LDtk project. |
| [LdtkWorldLayout](/api-docs/unity/ceramic/LdtkWorldLayout/) | abstract |  |
| [TilemapLdtkParser](/api-docs/unity/ceramic/TilemapLdtkParser/) | class | Parser that converts LDtk level data into Ceramic tilemap data structures. |
| [TilemapLdtkParser_Fields_](/api-docs/unity/ceramic/_TilemapLdtkParser/TilemapLdtkParser_Fields_/) | class |  |

## Spine

| Type | Kind | Description |
|------|------|-------------|
| [BindSlotOptions](/api-docs/unity/ceramic/BindSlotOptions/) | typedef | Configuration options for binding Spine slots together. |
| [ConvertSpineData](/api-docs/unity/ceramic/ConvertSpineData/) | class | Converter for Spine animation data fields in entity components. |
| [SlotInfo](/api-docs/unity/ceramic/SlotInfo/) | class | Information about a slot being updated during rendering. |
| [Spine](/api-docs/unity/ceramic/Spine/) | class | Spine animation runtime for Ceramic engine. |
| [SpineAsset](/api-docs/unity/ceramic/SpineAsset/) | class | Asset loader for Spine 2D skeletal animation data. |
| [SpineBindVisual](/api-docs/unity/ceramic/SpineBindVisual/) | class | Utility class for binding Ceramic visuals to Spine skeleton slots. |
| [SpineBindVisualOptions](/api-docs/unity/ceramic/SpineBindVisualOptions/) | class | Configuration options for binding a Ceramic visual to a Spine slot. |
| [SpineBounds](/api-docs/unity/ceramic/SpineBounds/) | class | Data structure representing the computed bounding box of a Spine animation. |
| [SpineColors](/api-docs/unity/ceramic/SpineColors/) | class | Utility class for extracting color information from Spine animation slots. |
| [SpineData](/api-docs/unity/ceramic/SpineData/) | class | Container for loaded Spine animation data, including skeleton structure and texture atlas. |
| [SpineFile](/api-docs/unity/ceramic/SpineFile/) | class | Implementation of Spine's FileHandle interface for Ceramic. |
| [SpineListener](/api-docs/unity/ceramic/SpineListener/) | class | Internal listener for Spine animation state events. |
| [SpineMontage](/api-docs/unity/ceramic/SpineMontage/) | class | A powerful utility for managing and orchestrating Spine animations as a cohesive montage. |
| [SpineMontageAnimation](/api-docs/unity/ceramic/SpineMontageAnimation/) | class | Configuration data for a single animation within a SpineMontage. |
| [SpineMontageDefaults](/api-docs/unity/ceramic/SpineMontageDefaults/) | class | Default configuration values for animations in a SpineMontage. |
| [SpineMontageSettings](/api-docs/unity/ceramic/SpineMontageSettings/) | class | Complete configuration for initializing a SpineMontage. |
| [SpineMontageSpineSettings](/api-docs/unity/ceramic/SpineMontageSpineSettings/) | class | Configuration for the Spine instance used by a SpineMontage. |
| [SpinePlugin](/api-docs/unity/ceramic/SpinePlugin/) | class | Plugin that integrates the Spine 2D skeletal animation runtime into Ceramic. |
| [SpineSystem](/api-docs/unity/ceramic/SpineSystem/) | class | System responsible for updating all active Spine instances in the application. |
| [SpineTextureLoader](/api-docs/unity/ceramic/SpineTextureLoader/) | class | Custom texture loader implementation for integrating Spine with Ceramic's asset system. |
| [AlphaTimeline](/api-docs/unity/spine/AlphaTimeline/) | class | Changes the alpha for a slot's {@link Slot#getColor()}. |
| [Animation](/api-docs/unity/spine/Animation/) | class | Stores a list of timelines to animate a skeleton's pose over time. |
| [AnimationState](/api-docs/unity/spine/AnimationState/) | class | Applies animations over time, queues animations for later playback, mixes (crossfading) between a... |
| [AnimationStateAdapter](/api-docs/unity/spine/AnimationStateAdapter/) | class |  |
| [AnimationStateData](/api-docs/unity/spine/AnimationStateData/) | class | Stores mix (crossfade) durations to be applied when {@link AnimationState} animations are changed. |
| [AnimationStateDataKey](/api-docs/unity/spine/AnimationStateDataKey/) | class |  |
| [AnimationStateListener](/api-docs/unity/spine/AnimationStateListener/) | interface | The interface to implement for receiving TrackEntry events. |
| [AtlasAttachmentLoader](/api-docs/unity/spine/attachments/AtlasAttachmentLoader/) | class | An {@link AttachmentLoader} that configures attachments using texture regions from an {@link Atlas}. |
| [Attachment](/api-docs/unity/spine/attachments/Attachment/) | class | The base class for all attachments. |
| [AttachmentLoader](/api-docs/unity/spine/attachments/AttachmentLoader/) | interface | The interface which can be implemented to customize creating and populating attachments. |
| [AttachmentType](/api-docs/unity/spine/attachments/AttachmentType/) | abstract | Spine Runtimes License Agreement |
| [AttachmentType_enum](/api-docs/unity/spine/attachments/AttachmentType_enum/) | class |  |
| [BoundingBoxAttachment](/api-docs/unity/spine/attachments/BoundingBoxAttachment/) | class | An attachment with vertices that make up a polygon. |
| [ClippingAttachment](/api-docs/unity/spine/attachments/ClippingAttachment/) | class | An attachment with vertices that make up a polygon used for clipping the rendering of other attac... |
| [MeshAttachment](/api-docs/unity/spine/attachments/MeshAttachment/) | class | An attachment that displays a textured mesh. |
| [PathAttachment](/api-docs/unity/spine/attachments/PathAttachment/) | class | An attachment whose vertices make up a composite Bezier curve. |
| [PointAttachment](/api-docs/unity/spine/attachments/PointAttachment/) | class | An attachment which is a single point and a rotation. |
| [RegionAttachment](/api-docs/unity/spine/attachments/RegionAttachment/) | class | An attachment that displays a textured quadrilateral. |
| [VertexAttachment](/api-docs/unity/spine/attachments/VertexAttachment/) | class | Base class for an attachment with vertices that are transformed by one or more bones and can be d... |
| [AttachmentTimeline](/api-docs/unity/spine/AttachmentTimeline/) | class | Changes a slot's {@link Slot#getAttachment()}. |
| [BlendMode](/api-docs/unity/spine/BlendMode/) | abstract | Determines how images are blended with existing pixels when drawn. |
| [BlendMode_enum](/api-docs/unity/spine/BlendMode_enum/) | class |  |
| [Bone](/api-docs/unity/spine/Bone/) | class | Stores a bone's current pose. |
| [BoneData](/api-docs/unity/spine/BoneData/) | class | Stores the setup pose for a {@link Bone}. |
| [BoneTimeline](/api-docs/unity/spine/BoneTimeline/) | interface | An interface for timelines which change the property of a bone. |
| [ConstraintData](/api-docs/unity/spine/ConstraintData/) | class | The base class for all constraint datas. |
| [CurveTimeline](/api-docs/unity/spine/CurveTimeline/) | class | The base class for timelines that interpolate between frame values using stepped, linear, or a Be... |
| [CurveTimeline1](/api-docs/unity/spine/CurveTimeline1/) | class | The base class for a {@link CurveTimeline} that sets one property. |
| [CurveTimeline2](/api-docs/unity/spine/CurveTimeline2/) | class | The base class for a {@link CurveTimeline} which sets two properties. |
| [DeformTimeline](/api-docs/unity/spine/DeformTimeline/) | class | Changes a slot's {@link Slot#getDeform()} to deform a {@link VertexAttachment}. |
| [DrawOrderTimeline](/api-docs/unity/spine/DrawOrderTimeline/) | class | Changes a skeleton's {@link Skeleton#getDrawOrder()}. |
| [Event](/api-docs/unity/spine/Event/) | class | Stores the current pose values for an {@link Event}. |
| [EventData](/api-docs/unity/spine/EventData/) | class | Stores the setup pose values for an {@link Event}. |
| [EventQueue](/api-docs/unity/spine/EventQueue/) | class |  |
| [EventTimeline](/api-docs/unity/spine/EventTimeline/) | class | Fires an {@link Event} when specific animation times are reached. |
| [EventType](/api-docs/unity/spine/EventType/) | abstract |  |
| [EventType_enum](/api-docs/unity/spine/EventType_enum/) | class |  |
| [IkConstraint](/api-docs/unity/spine/IkConstraint/) | class | Stores the current pose for an IK constraint. |
| [IkConstraintData](/api-docs/unity/spine/IkConstraintData/) | class | Stores the setup pose for an {@link IkConstraint}. |
| [IkConstraintTimeline](/api-docs/unity/spine/IkConstraintTimeline/) | class | Changes an IK constraint's {@link IkConstraint#getMix()}, {@link IkConstraint#getSoftness()}, |
| [LinkedMesh](/api-docs/unity/spine/LinkedMesh/) | class |  |
| [MixBlend](/api-docs/unity/spine/MixBlend/) | abstract | Controls how timeline values are mixed with setup pose values or current pose values when a timel... |
| [MixBlend_enum](/api-docs/unity/spine/MixBlend_enum/) | class |  |
| [MixDirection](/api-docs/unity/spine/MixDirection/) | abstract | Indicates whether a timeline's <code>alpha</code> is mixing out over time toward 0 (the setup or ... |
| [MixDirection_enum](/api-docs/unity/spine/MixDirection_enum/) | class |  |
| [PathConstraint](/api-docs/unity/spine/PathConstraint/) | class | Stores the current pose for a path constraint. |
| [PathConstraintData](/api-docs/unity/spine/PathConstraintData/) | class | Stores the setup pose for a {@link PathConstraint}. |
| [PathConstraintMixTimeline](/api-docs/unity/spine/PathConstraintMixTimeline/) | class | Changes a transform constraint's {@link PathConstraint#getMixRotate()}, {@link PathConstraint#get... |
| [PathConstraintPositionTimeline](/api-docs/unity/spine/PathConstraintPositionTimeline/) | class | Changes a path constraint's {@link PathConstraint#getPosition()}. |
| [PathConstraintSpacingTimeline](/api-docs/unity/spine/PathConstraintSpacingTimeline/) | class | Changes a path constraint's {@link PathConstraint#getSpacing()}. |
| [PositionMode](/api-docs/unity/spine/PositionMode/) | abstract | Controls how the first bone is positioned along the path. |
| [PositionMode_enum](/api-docs/unity/spine/PositionMode_enum/) | class |  |
| [Property](/api-docs/unity/spine/Property/) | abstract |  |
| [Property_enum](/api-docs/unity/spine/Property_enum/) | class |  |
| [RGB2Timeline](/api-docs/unity/spine/RGB2Timeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two colo... |
| [RGBA2Timeline](/api-docs/unity/spine/RGBA2Timeline/) | class | Changes a slot's {@link Slot#getColor()} and {@link Slot#getDarkColor()} for two color tinting. |
| [RGBATimeline](/api-docs/unity/spine/RGBATimeline/) | class | Changes a slot's {@link Slot#getColor()}. |
| [RGBTimeline](/api-docs/unity/spine/RGBTimeline/) | class | Changes the RGB for a slot's {@link Slot#getColor()}. |
| [RotateMode](/api-docs/unity/spine/RotateMode/) | abstract | Controls how bones are rotated, translated, and scaled to match the path. |
| [RotateMode_enum](/api-docs/unity/spine/RotateMode_enum/) | class |  |
| [RotateTimeline](/api-docs/unity/spine/RotateTimeline/) | class | Changes a bone's local {@link Bone#getRotation()}. |
| [ScaleTimeline](/api-docs/unity/spine/ScaleTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()} and {@link Bone#getScaleY()}. |
| [ScaleXTimeline](/api-docs/unity/spine/ScaleXTimeline/) | class | Changes a bone's local {@link Bone#getScaleX()}. |
| [ScaleYTimeline](/api-docs/unity/spine/ScaleYTimeline/) | class | Changes a bone's local {@link Bone#getScaleY()}. |
| [ShearTimeline](/api-docs/unity/spine/ShearTimeline/) | class | Changes a bone's local {@link Bone#getShearX()} and {@link Bone#getShearY()}. |
| [ShearXTimeline](/api-docs/unity/spine/ShearXTimeline/) | class | Changes a bone's local {@link Bone#getShearX()}. |
| [ShearYTimeline](/api-docs/unity/spine/ShearYTimeline/) | class | Changes a bone's local {@link Bone#getShearY()}. |
| [Skeleton](/api-docs/unity/spine/Skeleton/) | class | Stores the current pose for a skeleton. |
| [SkeletonBounds](/api-docs/unity/spine/SkeletonBounds/) | class | Collects each visible {@link BoundingBoxAttachment} and computes the world vertices for its polygon. |
| [SkeletonData](/api-docs/unity/spine/SkeletonData/) | class | Stores the setup pose and all of the stateless data for a skeleton. |
| [SkeletonJson](/api-docs/unity/spine/SkeletonJson/) | class | Loads skeleton data in the Spine JSON format. |
| [SkeletonLoader](/api-docs/unity/spine/SkeletonLoader/) | class | Base class for loading skeleton data from a file. |
| [Skin](/api-docs/unity/spine/Skin/) | class | Stores attachments by slot index and attachment name. |
| [SkinEntry](/api-docs/unity/spine/SkinEntry/) | class | Stores an entry in the skin consisting of the slot index and the attachment name. |
| [Slot](/api-docs/unity/spine/Slot/) | class | Stores a slot's current pose. |
| [SlotData](/api-docs/unity/spine/SlotData/) | class | Stores the setup pose for a {@link Slot}. |
| [SlotTimeline](/api-docs/unity/spine/SlotTimeline/) | interface | An interface for timelines which change the property of a slot. |
| [SpacingMode](/api-docs/unity/spine/SpacingMode/) | abstract | Controls how bones after the first bone are positioned along the path. |
| [SpacingMode_enum](/api-docs/unity/spine/SpacingMode_enum/) | class |  |
| [Error](/api-docs/unity/spine/support/error/Error/) | class |  |
| [IllegalArgumentException](/api-docs/unity/spine/support/error/IllegalArgumentException/) | class |  |
| [IllegalStateException](/api-docs/unity/spine/support/error/IllegalStateException/) | class |  |
| [RuntimeException](/api-docs/unity/spine/support/error/RuntimeException/) | class |  |
| [ArrayExtensions](/api-docs/unity/spine/support/extensions/ArrayExtensions/) | class |  |
| [FileExtensions](/api-docs/unity/spine/support/extensions/FileExtensions/) | class |  |
| [SpineExtensions](/api-docs/unity/spine/support/extensions/SpineExtensions/) | class |  |
| [StringExtensions](/api-docs/unity/spine/support/extensions/StringExtensions/) | class |  |
| [FileHandle](/api-docs/unity/spine/support/files/FileHandle/) | interface |  |
| [AtlasPage](/api-docs/unity/spine/support/graphics/AtlasPage/) | class |  |
| [AtlasRegion](/api-docs/unity/spine/support/graphics/AtlasRegion/) | class |  |
| [AtlasRegionTexture](/api-docs/unity/spine/support/graphics/AtlasRegionTexture/) | abstract |  |
| [Color](/api-docs/unity/spine/support/graphics/Color/) | class | Color class ported from some of libgdx's Color code. |
| [Format](/api-docs/unity/spine/support/graphics/Format/) | abstract |  |
| [GL20](/api-docs/unity/spine/support/graphics/GL20/) | typedef |  |
| [Reader](/api-docs/unity/spine/support/graphics/Reader/) | class |  |
| [TextureAtlas](/api-docs/unity/spine/support/graphics/TextureAtlas/) | class |  |
| [TextureFilter](/api-docs/unity/spine/support/graphics/TextureFilter/) | abstract |  |
| [TextureLoader](/api-docs/unity/spine/support/graphics/TextureLoader/) | interface |  |
| [TextureRegion](/api-docs/unity/spine/support/graphics/TextureRegion/) | class |  |
| [TextureWrap](/api-docs/unity/spine/support/graphics/TextureWrap/) | class |  |
| [MathUtils](/api-docs/unity/spine/support/math/MathUtils/) | class |  |
| [Matrix3](/api-docs/unity/spine/support/math/Matrix3/) | class |  |
| [Vector2](/api-docs/unity/spine/support/math/Vector2/) | class |  |
| [AnimationStateMap](/api-docs/unity/spine/support/utils/AnimationStateMap/) | abstract |  |
| [Array](/api-docs/unity/spine/support/utils/Array/) | abstract |  |
| [AttachmentSet](/api-docs/unity/spine/support/utils/AttachmentSet/) | abstract |  |
| [AttachmentSetEntry](/api-docs/unity/spine/support/utils/AttachmentSetEntry/) | class |  |
| [BooleanArray](/api-docs/unity/spine/support/utils/BooleanArray/) | abstract |  |
| [Either](/api-docs/unity/spine/support/utils/Either/) | abstract | Useful to limit a Dynamic function argument's type to the specified |
| [FastCast](/api-docs/unity/spine/support/utils/FastCast/) | class |  |
| [FloatArray](/api-docs/unity/spine/support/utils/FloatArray/) | abstract |  |
| [FloatArray2D](/api-docs/unity/spine/support/utils/FloatArray2D/) | typedef |  |
| [IntArray](/api-docs/unity/spine/support/utils/IntArray/) | abstract |  |
| [IntArray2D](/api-docs/unity/spine/support/utils/IntArray2D/) | typedef |  |
| [JsonChild](/api-docs/unity/spine/support/utils/JsonChild/) | class |  |
| [JsonDynamic](/api-docs/unity/spine/support/utils/JsonDynamic/) | class |  |
| [JsonReader](/api-docs/unity/spine/support/utils/JsonReader/) | class |  |
| [JsonValue](/api-docs/unity/spine/support/utils/JsonValue/) | interface |  |
| [ObjectSet](/api-docs/unity/spine/support/utils/ObjectSet/) | abstract |  |
| [Pool](/api-docs/unity/spine/support/utils/Pool/) | class |  |
| [Poolable](/api-docs/unity/spine/support/utils/Poolable/) | interface | Objects implementing this interface will have {@link #reset()} called when passed to {@link Pool#... |
| [SerializationException](/api-docs/unity/spine/support/utils/SerializationException/) | class |  |
| [Short](/api-docs/unity/spine/support/utils/Short/) | typedef |  |
| [ShortArray](/api-docs/unity/spine/support/utils/ShortArray/) | typedef |  |
| [ShortArray2D](/api-docs/unity/spine/support/utils/ShortArray2D/) | typedef |  |
| [SnapshotArray](/api-docs/unity/spine/support/utils/SnapshotArray/) | class |  |
| [StdEx](/api-docs/unity/spine/support/utils/StdEx/) | class |  |
| [StringArray](/api-docs/unity/spine/support/utils/StringArray/) | typedef |  |
| [StringBuilder](/api-docs/unity/spine/support/utils/StringBuilder/) | abstract |  |
| [Timeline](/api-docs/unity/spine/Timeline/) | class | The base class for all timelines. |
| [TrackEntry](/api-docs/unity/spine/TrackEntry/) | class | Stores settings and other state for the playback of an animation on an {@link AnimationState} track. |
| [TransformConstraint](/api-docs/unity/spine/TransformConstraint/) | class | Stores the current pose for a transform constraint. |
| [TransformConstraintData](/api-docs/unity/spine/TransformConstraintData/) | class | Stores the setup pose for a {@link TransformConstraint}. |
| [TransformConstraintTimeline](/api-docs/unity/spine/TransformConstraintTimeline/) | class | Changes a transform constraint's {@link TransformConstraint#getMixRotate()}, {@link TransformCons... |
| [TransformMode](/api-docs/unity/spine/TransformMode/) | abstract | Determines how a bone inherits world transforms from parent bones. |
| [TransformMode_enum](/api-docs/unity/spine/TransformMode_enum/) | class |  |
| [TranslateTimeline](/api-docs/unity/spine/TranslateTimeline/) | class | Changes a bone's local {@link Bone#getX()} and {@link Bone#getY()}. |
| [TranslateXTimeline](/api-docs/unity/spine/TranslateXTimeline/) | class | Changes a bone's local {@link Bone#getX()}. |
| [TranslateYTimeline](/api-docs/unity/spine/TranslateYTimeline/) | class | Changes a bone's local {@link Bone#getY()}. |
| [Updatable](/api-docs/unity/spine/Updatable/) | interface | The interface for items updated by {@link Skeleton#updateWorldTransform()}. |
| [SkeletonClipping](/api-docs/unity/spine/utils/SkeletonClipping/) | class | Spine Runtimes License Agreement |
| [SpineUtils](/api-docs/unity/spine/utils/SpineUtils/) | class | Spine Runtimes License Agreement |
| [Triangulator](/api-docs/unity/spine/utils/Triangulator/) | class | Spine Runtimes License Agreement |
| [BindSlot](/api-docs/unity/ceramic/_Spine/BindSlot/) | class |  |
| [DispatchSlotInfo](/api-docs/unity/ceramic/_Spine/DispatchSlotInfo/) | class |  |
| [TrackEntryPool](/api-docs/unity/spine/_AnimationState/TrackEntryPool/) | class |  |
| [PolygonPool](/api-docs/unity/spine/_SkeletonBounds/PolygonPool/) | class |  |
| [Entry](/api-docs/unity/spine/support/utils/_AnimationStateMap/Entry/) | class |  |
| [IndicesPool](/api-docs/unity/spine/utils/_Triangulator/IndicesPool/) | class |  |
| [PolygonPool](/api-docs/unity/spine/utils/_Triangulator/PolygonPool/) | class |  |

## Script

| Type | Kind | Description |
|------|------|-------------|
| [Interp](/api-docs/unity/ceramic/Interp/) | class | Custom HScript interpreter with Ceramic-specific functionality. |
| [Script](/api-docs/unity/ceramic/Script/) | class | Dynamic scripting component for runtime code execution. |
| [ScriptContent](/api-docs/unity/ceramic/ScriptContent/) | typedef | Type alias for script source code content. |
| [ScriptModule](/api-docs/unity/ceramic/ScriptModule/) | class | Represents a script module for inter-script communication. |
| [ScriptUtils](/api-docs/unity/ceramic/ScriptUtils/) | class | Utilities for converting JavaScript/TypeScript syntax to HScript. |

## Sprite

| Type | Kind | Description |
|------|------|-------------|
| [AsepriteJson](/api-docs/unity/ceramic/AsepriteJson/) | typedef | Data structure representing the JSON format exported by Aseprite. |
| [AsepriteJsonFrame](/api-docs/unity/ceramic/AsepriteJsonFrame/) | typedef | Individual frame definition within the sprite sheet. |
| [AsepriteJsonFrameTag](/api-docs/unity/ceramic/AsepriteJsonFrameTag/) | typedef | Animation definition in Aseprite, called a "frame tag". |
| [AsepriteJsonFrameTagDirection](/api-docs/unity/ceramic/AsepriteJsonFrameTagDirection/) | abstract | Animation playback direction for frame tags. |
| [AsepriteJsonLayer](/api-docs/unity/ceramic/AsepriteJsonLayer/) | typedef | Layer information from the original Aseprite file. |
| [AsepriteJsonMeta](/api-docs/unity/ceramic/AsepriteJsonMeta/) | typedef | Metadata section of the Aseprite JSON export. |
| [AsepriteJsonParser](/api-docs/unity/ceramic/AsepriteJsonParser/) | class | Parser for Aseprite JSON format sprite sheets. |
| [AsepriteJsonRect](/api-docs/unity/ceramic/AsepriteJsonRect/) | typedef | Rectangle structure with position and dimensions. |
| [AsepriteJsonSize](/api-docs/unity/ceramic/AsepriteJsonSize/) | typedef | Size structure for dimensions without position. |
| [AsepriteJsonSlice](/api-docs/unity/ceramic/AsepriteJsonSlice/) | typedef | Slice definition for 9-slice scaling and UI elements. |
| [ConvertSpriteSheet](/api-docs/unity/ceramic/ConvertSpriteSheet/) | class | Field converter for SpriteSheet instances. |
| [Sprite](/api-docs/unity/ceramic/Sprite/) | class | Sprite visual that displays animations from sprite sheets. |
| [SpriteAsset](/api-docs/unity/ceramic/SpriteAsset/) | class | Asset loader for sprite sheets and animations. |
| [SpritePlugin](/api-docs/unity/ceramic/SpritePlugin/) | class | Plugin that adds sprite sheet and animation support to Ceramic. |
| [SpriteSheet](/api-docs/unity/ceramic/SpriteSheet/) | class | Container for sprite animations and texture atlas data. |
| [SpriteSheetAnimation](/api-docs/unity/ceramic/SpriteSheetAnimation/) | class | Represents a named animation sequence within a sprite sheet. |
| [SpriteSheetFrame](/api-docs/unity/ceramic/SpriteSheetFrame/) | class | Represents a single frame within a sprite animation. |
| [SpriteSheetParser](/api-docs/unity/ceramic/SpriteSheetParser/) | class | Generic sprite sheet data parser with auto-detection. |
| [SpriteSystem](/api-docs/unity/ceramic/SpriteSystem/) | class | System that manages automatic updates for all Sprite instances. |

## Ui

| Type | Kind | Description |
|------|------|-------------|
| [ChildrenDepth](/api-docs/unity/ceramic/ChildrenDepth/) | abstract | Determines how child elements are assigned depth values in the UI hierarchy. |
| [CollectionView](/api-docs/unity/ceramic/CollectionView/) | class | A scrollable collection view that efficiently displays large data sets using view recycling. |
| [CollectionViewDataSource](/api-docs/unity/ceramic/CollectionViewDataSource/) | interface | Interface for providing data to a CollectionView. |
| [CollectionViewFlowLayout](/api-docs/unity/ceramic/CollectionViewFlowLayout/) | class | A flow-based layout for CollectionView that arranges items in rows or columns. |
| [CollectionViewItemFrame](/api-docs/unity/ceramic/CollectionViewItemFrame/) | class | Represents the position and dimensions of an item in a CollectionView. |
| [CollectionViewItemPosition](/api-docs/unity/ceramic/CollectionViewItemPosition/) | abstract | Defines where an item should be positioned when scrolling to it in a CollectionView. |
| [CollectionViewItemsBehavior](/api-docs/unity/ceramic/CollectionViewItemsBehavior/) | abstract | Defines how a CollectionView manages item view creation and recycling. |
| [CollectionViewLayout](/api-docs/unity/ceramic/CollectionViewLayout/) | interface | Interface for custom CollectionView layout implementations. |
| [ColumnLayout](/api-docs/unity/ceramic/ColumnLayout/) | class | A specialized LinearLayout that arranges children vertically in a single column. |
| [ComputedViewSize](/api-docs/unity/ceramic/ComputedViewSize/) | class | Represents computed size information for a View during the layout process. |
| [ImageView](/api-docs/unity/ceramic/ImageView/) | class | A view component for displaying and laying out images with flexible scaling options. |
| [ImageViewScaling](/api-docs/unity/ceramic/ImageViewScaling/) | enum | Defines scaling modes for ImageView to control how images are sized within their bounds. |
| [LayersLayout](/api-docs/unity/ceramic/LayersLayout/) | class | A layout container that stacks children on top of each other like layers. |
| [LayoutAlign](/api-docs/unity/ceramic/LayoutAlign/) | enum | General-purpose alignment enumeration for UI layouts. |
| [LayoutDirection](/api-docs/unity/ceramic/LayoutDirection/) | enum | Defines the primary axis direction for layout arrangements. |
| [LayoutHorizontalAlign](/api-docs/unity/ceramic/LayoutHorizontalAlign/) | enum | Horizontal alignment options for UI elements within their containers. |
| [LayoutVerticalAlign](/api-docs/unity/ceramic/LayoutVerticalAlign/) | enum | Vertical alignment options for UI elements within their containers. |
| [LinearLayout](/api-docs/unity/ceramic/LinearLayout/) | class | A flexible layout container that arranges its children in a single line, |
| [RowLayout](/api-docs/unity/ceramic/RowLayout/) | class | A layout that arranges its children horizontally in a single row. |
| [ScrollView](/api-docs/unity/ceramic/ScrollView/) | class | A view that provides scrolling functionality for content that exceeds its bounds. |
| [TextView](/api-docs/unity/ceramic/TextView/) | class | A view that displays text with automatic sizing and alignment options. |
| [View](/api-docs/unity/ceramic/View/) | class | The base view class for building UI layouts in Ceramic. |
| [ViewLayoutMask](/api-docs/unity/ceramic/ViewLayoutMask/) | abstract | Bit mask that defines layout constraints for views. |
| [ViewSize](/api-docs/unity/ceramic/ViewSize/) | abstract | Type-safe representation of view sizing modes. |
| [ViewSystem](/api-docs/unity/ceramic/ViewSystem/) | class | System responsible for managing and updating the UI view layout. |

## Dialogs

| Type | Kind | Description |
|------|------|-------------|
| [Dialogs](/api-docs/unity/ceramic/Dialogs/) | class | Cross-platform native file dialog implementation. |
| [DialogsFileFilter](/api-docs/unity/ceramic/DialogsFileFilter/) | typedef | File type filter specification for native file dialogs. |
| [DialogsPlugin](/api-docs/unity/ceramic/DialogsPlugin/) | class | Plugin initialization for native file dialogs support. |

## Gif

| Type | Kind | Description |
|------|------|-------------|
| [GifCapture](/api-docs/unity/ceramic/GifCapture/) | class | Captures the screen content and creates animated GIF files. |
| [GifEncoder](/api-docs/unity/gif/GifEncoder/) | class |  |
| [GifFrame](/api-docs/unity/gif/GifFrame/) | typedef |  |
| [GifQuality](/api-docs/unity/gif/GifQuality/) | abstract |  |
| [GifRepeat](/api-docs/unity/gif/GifRepeat/) | abstract |  |
| [LzwEncoder](/api-docs/unity/gif/LzwEncoder/) | class |  |
| [NeuQuant](/api-docs/unity/gif/NeuQuant/) | class |  |

## Tracker

| Type | Kind | Description |
|------|------|-------------|
| [Assert](/api-docs/unity/tracker/Assert/) | class |  |
| [Autorun](/api-docs/unity/tracker/Autorun/) | class |  |
| [DynamicEvents](/api-docs/unity/tracker/DynamicEvents/) | class | Fire and listen to dynamic events. Works similarly to static events, but dynamic. |
| [Equal](/api-docs/unity/tracker/Equal/) | class |  |
| [EventDispatcher](/api-docs/unity/tracker/EventDispatcher/) | class | Event dispatcher used by DynamicEvents and Events macro as an alternative implementation |
| [Events](/api-docs/unity/tracker/Events/) | interface | Events allows to add strictly typed events to classes. |
| [Extensions](/api-docs/unity/tracker/Extensions/) | class | A bunch of static extensions to make life easier. |
| [History](/api-docs/unity/tracker/History/) | class |  |
| [Model](/api-docs/unity/tracker/Model/) | class |  |
| [Observable](/api-docs/unity/tracker/Observable/) | interface | Observable allows to observe properties of an object. |
| [SaveModel](/api-docs/unity/tracker/SaveModel/) | class |  |
| [Serializable](/api-docs/unity/tracker/Serializable/) | interface |  |
| [Serialize](/api-docs/unity/tracker/Serialize/) | class |  |
| [SerializeChangeset](/api-docs/unity/tracker/SerializeChangeset/) | class |  |
| [SerializeModel](/api-docs/unity/tracker/SerializeModel/) | class | Utility to serialize a model object (and its children) continuously and efficiently |
| [ShareChangeset](/api-docs/unity/tracker/ShareChangeset/) | class |  |
| [ShareItem](/api-docs/unity/tracker/ShareItem/) | class |  |
| [ShareItemAction](/api-docs/unity/tracker/ShareItemAction/) | abstract |  |
| [ShareModel](/api-docs/unity/tracker/ShareModel/) | class |  |
| [Tracker](/api-docs/unity/tracker/Tracker/) | class |  |
| [Utils](/api-docs/unity/tracker/Utils/) | class |  |
| [EventDispatcherItem](/api-docs/unity/tracker/_EventDispatcher/EventDispatcherItem/) | class |  |

## Elements

| Type | Kind | Description |
|------|------|-------------|
| [ArrayPointer](/api-docs/unity/elements/ArrayPointer/) | typedef | Function type for accessing and manipulating arrays by reference. |
| [BaseTextFieldView](/api-docs/unity/elements/BaseTextFieldView/) | class | Base class for text field UI elements with autocomplete functionality. |
| [BiBorderedTriangle](/api-docs/unity/elements/BiBorderedTriangle/) | class | A triangular shape with customizable border rendering. |
| [BooleanFieldView](/api-docs/unity/elements/BooleanFieldView/) | class | A toggle switch UI element for boolean (true/false) values. |
| [BoolPointer](/api-docs/unity/elements/BoolPointer/) | typedef | Function type for accessing and modifying boolean values by reference. |
| [Button](/api-docs/unity/elements/Button/) | class | A clickable button UI element with text content. |
| [CellCollectionView](/api-docs/unity/elements/CellCollectionView/) | class | A themed collection view for displaying cells with built-in scrolling and filtering. |
| [CellView](/api-docs/unity/elements/CellView/) | class | A themeable cell view for list or collection display with interactive features. |
| [CheckStatus](/api-docs/unity/elements/CheckStatus/) | abstract | Represents the status of a checkbox or toggle control with change tracking. |
| [ChoiceStatus](/api-docs/unity/elements/ChoiceStatus/) | abstract | Represents the status of a choice selection with special states. |
| [ClickableIconView](/api-docs/unity/elements/ClickableIconView/) | class | An interactive icon button that responds to clicks and hover states. |
| [ColorFieldView](/api-docs/unity/elements/ColorFieldView/) | class | A color input field with an integrated color picker popup. |
| [ColorPickerHSBGradientView](/api-docs/unity/elements/ColorPickerHSBGradientView/) | class | A gradient color selector for HSB (Hue, Saturation, Brightness) color space. |
| [ColorPickerHSBSpectrumView](/api-docs/unity/elements/ColorPickerHSBSpectrumView/) | class | A vertical hue spectrum selector for HSB color space. |
| [ColorPickerHSLuvGradientView](/api-docs/unity/elements/ColorPickerHSLuvGradientView/) | class | A color picker gradient view using the HSLuv color space for perceptually uniform color selection. |
| [ColorPickerHSLuvSpectrumView](/api-docs/unity/elements/ColorPickerHSLuvSpectrumView/) | class | A vertical spectrum view for HSLuv color selection showing lightness values. |
| [ColorPickerPaletteColorView](/api-docs/unity/elements/ColorPickerPaletteColorView/) | class | A single color swatch in a color picker palette. |
| [ColorPickerView](/api-docs/unity/elements/ColorPickerView/) | class | A comprehensive color picker interface combining multiple color selection methods. |
| [ConfirmStatus](/api-docs/unity/elements/ConfirmStatus/) | abstract | Represents the status of a confirmation dialog or action. |
| [Context](/api-docs/unity/elements/Context/) | class | Global context singleton for the elements UI system. |
| [CrossX](/api-docs/unity/elements/CrossX/) | class | A visual component that renders an X-shaped cross icon. |
| [DragDrop](/api-docs/unity/elements/DragDrop/) | class | A component that enables drag-and-drop functionality for visuals. |
| [EditTextStatus](/api-docs/unity/elements/EditTextStatus/) | abstract | Represents the status of text editing operations using bit flags. |
| [Entypo](/api-docs/unity/elements/Entypo/) | abstract | Entypo icon font character codes. |
| [EntypoIconView](/api-docs/unity/elements/EntypoIconView/) | class | A view component for displaying Entypo font icons. |
| [EnumAbstractInfo](/api-docs/unity/elements/EnumAbstractInfo/) | class | Runtime information container for enum abstract types. |
| [EnumValuePointer](/api-docs/unity/elements/EnumValuePointer/) | typedef | Type alias for enum value pointers in the elements UI system. |
| [FieldSystem](/api-docs/unity/elements/FieldSystem/) | class | Central system for managing field focus in the Elements UI framework. |
| [FieldView](/api-docs/unity/elements/FieldView/) | class | Base class for interactive field views in the Elements UI framework. |
| [FloatPointer](/api-docs/unity/elements/FloatPointer/) | typedef | Function type for accessing and modifying floating-point values by reference. |
| [FormLayout](/api-docs/unity/elements/FormLayout/) | class | A specialized column layout designed for forms in the Elements UI framework. |
| [Handle](/api-docs/unity/elements/Handle/) | typedef | A type alias for integer handles used throughout the Elements UI framework. |
| [Im](/api-docs/unity/elements/Im/) | class | Immediate mode UI system for Ceramic inspired by Dear ImGui. |
| [ImRowLayout](/api-docs/unity/elements/ImRowLayout/) | class | A specialized row layout for the immediate mode UI system. |
| [ImSystem](/api-docs/unity/elements/ImSystem/) | class | The core system that manages the immediate mode UI rendering pipeline. |
| [InfoStatus](/api-docs/unity/elements/InfoStatus/) | abstract | Represents the status of an informational dialog or notification. |
| [InputStyle](/api-docs/unity/elements/InputStyle/) | enum | Defines the visual style options for input fields in the Elements UI system. |
| [IntPointer](/api-docs/unity/elements/IntPointer/) | typedef |  |
| [ItalicText](/api-docs/unity/elements/ItalicText/) | class | A component that applies italic-style skewing to Text visuals. |
| [LabeledView](/api-docs/unity/elements/LabeledView/) | class | A container that pairs a text label with any view, providing flexible label positioning. |
| [LabelPosition](/api-docs/unity/elements/LabelPosition/) | abstract | Enumeration defining the position of a label relative to its associated view. |
| [LabelView](/api-docs/unity/elements/LabelView/) | class | A themed text label for UI forms and layouts. |
| [ListStatus](/api-docs/unity/elements/ListStatus/) | abstract | Abstract wrapper for tracking list view state changes and item operations. |
| [ListView](/api-docs/unity/elements/ListView/) | class | A comprehensive list view with sorting, item management, and interaction features. |
| [ListViewDataSource](/api-docs/unity/elements/ListViewDataSource/) | class | Data source implementation for ListView's collection view. |
| [PendingDialog](/api-docs/unity/elements/PendingDialog/) | class | Model representing a pending dialog box with user interaction. |
| [PromptStatus](/api-docs/unity/elements/PromptStatus/) | abstract | Abstract type for tracking the completion status of prompt dialogs. |
| [RelatedToFieldView](/api-docs/unity/elements/RelatedToFieldView/) | interface | Interface for views that are related to or associated with a FieldView. |
| [SanitizeTextField](/api-docs/unity/elements/SanitizeTextField/) | class | Advanced text field sanitization utility with mathematical operation support. |
| [Scrollbar](/api-docs/unity/elements/Scrollbar/) | class | A basic scrollbar visual component that provides visual feedback for scrollable content. |
| [ScrollbarVisibility](/api-docs/unity/elements/ScrollbarVisibility/) | abstract | Enumeration defining different scrollbar visibility behaviors for scrollable containers. |
| [ScrollingLayout](/api-docs/unity/elements/ScrollingLayout/) | class | A scrollable container that wraps a layout view with optional filtering and borders. |
| [SelectFieldView](/api-docs/unity/elements/SelectFieldView/) | class | A dropdown selection field that allows users to choose from a predefined list of options. |
| [SelectListView](/api-docs/unity/elements/SelectListView/) | class | A scrollable list view for displaying selectable items in dropdown controls. |
| [Separator](/api-docs/unity/elements/Separator/) | class | A horizontal line separator for visually dividing content sections. |
| [SliderFieldView](/api-docs/unity/elements/SliderFieldView/) | class | A numeric input field with an integrated slider for intuitive value adjustment. |
| [StringPointer](/api-docs/unity/elements/StringPointer/) | typedef | Function type for accessing and modifying string values by reference. |
| [TabFocus](/api-docs/unity/elements/TabFocus/) | class | Component for managing keyboard-based focus navigation using Tab key. |
| [TabFocusable](/api-docs/unity/elements/TabFocusable/) | interface | Interface for elements that can participate in Tab key focus navigation. |
| [TabsLayout](/api-docs/unity/elements/TabsLayout/) | class | A horizontal tab layout component for organizing content into multiple pages. |
| [TabState](/api-docs/unity/elements/TabState/) | abstract | Represents the possible states of a tab in a tab control. |
| [TextFieldKind](/api-docs/unity/elements/TextFieldKind/) | enum | Defines the different types of text field inputs available. |
| [TextFieldView](/api-docs/unity/elements/TextFieldView/) | class | A flexible text input field view with support for various input types and validation. |
| [TextUtils](/api-docs/unity/elements/TextUtils/) | class | Utility class providing various text manipulation and transformation functions. |
| [Theme](/api-docs/unity/elements/Theme/) | class | Comprehensive theme configuration for the elements UI system. |
| [Tooltip](/api-docs/unity/elements/Tooltip/) | class | A tooltip component that displays informational text when hovering over visual elements. |
| [UserData](/api-docs/unity/elements/UserData/) | class | Persistent user data model for storing application-specific user preferences and state. |
| [VisualContainerView](/api-docs/unity/elements/VisualContainerView/) | class | A view container that displays and manages a single visual element with scaling and filtering opt... |
| [VisualContainerViewScaling](/api-docs/unity/elements/VisualContainerViewScaling/) | enum | Defines the scaling behavior options for VisualContainerView. |
| [Window](/api-docs/unity/elements/Window/) | class | A draggable window container for UI elements. |
| [WindowData](/api-docs/unity/elements/WindowData/) | class | Persistent data model for window state and configuration. |
| [WindowItem](/api-docs/unity/elements/WindowItem/) | class | A versatile data container for window UI elements with efficient pooling and recycling. |
| [WindowItemKind](/api-docs/unity/elements/WindowItemKind/) | abstract | Window item types enumeration. |

## Unity

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/unity/backend/Audio/) | class |  |
| [AudioBus](/api-docs/unity/backend/AudioBus/) | class |  |
| [AudioFilterBuffer](/api-docs/unity/backend/AudioFilterBuffer/) | typedef |  |
| [AudioFilterInfo](/api-docs/unity/backend/AudioFilterInfo/) | class |  |
| [AudioHandle](/api-docs/unity/backend/AudioHandle/) | typedef |  |
| [AudioHandleImpl](/api-docs/unity/backend/AudioHandleImpl/) | class |  |
| [AudioResource](/api-docs/unity/backend/AudioResource/) | typedef |  |
| [AudioResourceImpl](/api-docs/unity/backend/AudioResourceImpl/) | class |  |
| [AudioSources](/api-docs/unity/backend/AudioSources/) | class |  |
| [Backend](/api-docs/unity/backend/Backend/) | class |  |
| [Binaries](/api-docs/unity/backend/Binaries/) | class |  |
| [BlendMode](/api-docs/unity/backend/BlendMode/) | typedef |  |
| [BlendModeImpl](/api-docs/unity/backend/BlendModeImpl/) | abstract |  |
| [CeramicCommandBuffer](/api-docs/unity/backend/CeramicCommandBuffer/) | class |  |
| [CeramicCommandBufferPool](/api-docs/unity/backend/CeramicCommandBufferPool/) | class |  |
| [CeramicRenderPass](/api-docs/unity/backend/CeramicRenderPass/) | class |  |
| [Clipboard](/api-docs/unity/backend/Clipboard/) | class |  |
| [Draw](/api-docs/unity/backend/Draw/) | class |  |
| [FieldLookup](/api-docs/unity/backend/FieldLookup/) | class |  |
| [Float32Array](/api-docs/unity/backend/Float32Array/) | typedef |  |
| [Info](/api-docs/unity/backend/Info/) | class |  |
| [Input](/api-docs/unity/backend/Input/) | class |  |
| [IO](/api-docs/unity/backend/IO/) | class |  |
| [LoadAudioOptions](/api-docs/unity/backend/LoadAudioOptions/) | typedef |  |
| [LoadBinaryOptions](/api-docs/unity/backend/LoadBinaryOptions/) | typedef |  |
| [LoadShaderOptions](/api-docs/unity/backend/LoadShaderOptions/) | typedef |  |
| [LoadTextOptions](/api-docs/unity/backend/LoadTextOptions/) | typedef |  |
| [LoadTextureOptions](/api-docs/unity/backend/LoadTextureOptions/) | typedef |  |
| [MaterialData](/api-docs/unity/backend/MaterialData/) | class |  |
| [Materials](/api-docs/unity/backend/Materials/) | class |  |
| [MiniLoudAudio](/api-docs/unity/backend/MiniLoudAudio/) | class |  |
| [MiniLoudAudioHandle](/api-docs/unity/backend/MiniLoudAudioHandle/) | class |  |
| [MiniLoudAudioResource](/api-docs/unity/backend/MiniLoudAudioResource/) | class |  |
| [MiniLoudUnity](/api-docs/unity/backend/MiniLoudUnity/) | class |  |
| [Screen](/api-docs/unity/backend/Screen/) | class |  |
| [Shader](/api-docs/unity/backend/Shader/) | abstract |  |
| [ShaderImpl](/api-docs/unity/backend/ShaderImpl/) | class |  |
| [Shaders](/api-docs/unity/backend/Shaders/) | class |  |
| [StencilState](/api-docs/unity/backend/StencilState/) | abstract |  |
| [TextInput](/api-docs/unity/backend/TextInput/) | class |  |
| [Texts](/api-docs/unity/backend/Texts/) | class |  |
| [Texture](/api-docs/unity/backend/Texture/) | typedef |  |
| [TextureId](/api-docs/unity/backend/TextureId/) | typedef |  |
| [TextureIdImpl](/api-docs/unity/backend/TextureIdImpl/) | abstract |  |
| [TextureImpl](/api-docs/unity/backend/TextureImpl/) | class |  |
| [Textures](/api-docs/unity/backend/Textures/) | class |  |
| [UInt16Array](/api-docs/unity/backend/UInt16Array/) | typedef |  |
| [UInt8Array](/api-docs/unity/backend/UInt8Array/) | typedef |  |
| [VisualItem](/api-docs/unity/backend/VisualItem/) | enum |  |
| [Main](/api-docs/unity/Main/) | class | Main entry point for the Unity backend integration. |
| [Application](/api-docs/unity/unityengine/Application/) | class | Unity Application class extern binding for Ceramic. |
| [AudioClip](/api-docs/unity/unityengine/AudioClip/) | class | Represents audio data that can be played by AudioSource components. |
| [AudioClipLoadType](/api-docs/unity/unityengine/AudioClipLoadType/) | class | Determines how audio data is loaded and stored in memory. |
| [AudioDataLoadState](/api-docs/unity/unityengine/AudioDataLoadState/) | class | Represents the loading state of an AudioClip's audio data. |
| [AudioMixer](/api-docs/unity/unityengine/AudioMixer/) | class | Manages audio routing and processing through a graph of mixer groups. |
| [AudioMixerGroup](/api-docs/unity/unityengine/AudioMixerGroup/) | class | Represents a routing target within an AudioMixer. |
| [AudioSource](/api-docs/unity/unityengine/AudioSource/) | class | Component that plays AudioClips in 3D or 2D space. |
| [Behaviour](/api-docs/unity/unityengine/Behaviour/) | class | Unity Behaviour class extern binding for Ceramic. |
| [Color](/api-docs/unity/unityengine/Color/) | class | Unity Color struct extern binding for Ceramic. |
| [Component](/api-docs/unity/unityengine/Component/) | class | Unity Component class extern binding for Ceramic. |
| [FilterMode](/api-docs/unity/unityengine/FilterMode/) | class | Unity FilterMode enum extern binding for Ceramic. |
| [GameObject](/api-docs/unity/unityengine/GameObject/) | class | Unity GameObject class extern binding for Ceramic. |
| [ImageConversion](/api-docs/unity/unityengine/ImageConversion/) | class | Utility class for converting between Texture2D and image file formats. |
| [AnyKeyControl](/api-docs/unity/unityengine/inputsystem/controls/AnyKeyControl/) | class |  |
| [AxisControl](/api-docs/unity/unityengine/inputsystem/controls/AxisControl/) | class |  |
| [ButtonControl](/api-docs/unity/unityengine/inputsystem/controls/ButtonControl/) | class |  |
| [DoubleControl](/api-docs/unity/unityengine/inputsystem/controls/DoubleControl/) | class |  |
| [DpadControl](/api-docs/unity/unityengine/inputsystem/controls/DpadControl/) | class |  |
| [IntegerControl](/api-docs/unity/unityengine/inputsystem/controls/IntegerControl/) | class |  |
| [KeyControl](/api-docs/unity/unityengine/inputsystem/controls/KeyControl/) | class |  |
| [StickControl](/api-docs/unity/unityengine/inputsystem/controls/StickControl/) | class |  |
| [TouchControl](/api-docs/unity/unityengine/inputsystem/controls/TouchControl/) | class |  |
| [TouchPhaseControl](/api-docs/unity/unityengine/inputsystem/controls/TouchPhaseControl/) | class |  |
| [TouchPressControl](/api-docs/unity/unityengine/inputsystem/controls/TouchPressControl/) | class |  |
| [Vector2Control](/api-docs/unity/unityengine/inputsystem/controls/Vector2Control/) | class |  |
| [Gamepad](/api-docs/unity/unityengine/inputsystem/Gamepad/) | class |  |
| [InputControl](/api-docs/unity/unityengine/inputsystem/InputControl/) | class |  |
| [InputDevice](/api-docs/unity/unityengine/inputsystem/InputDevice/) | class |  |
| [Keyboard](/api-docs/unity/unityengine/inputsystem/Keyboard/) | class |  |
| [TouchState](/api-docs/unity/unityengine/inputsystem/lowlevel/TouchState/) | class |  |
| [Mouse](/api-docs/unity/unityengine/inputsystem/Mouse/) | class |  |
| [Pointer](/api-docs/unity/unityengine/inputsystem/Pointer/) | class |  |
| [TouchPhase](/api-docs/unity/unityengine/inputsystem/TouchPhase/) | class |  |
| [Touchscreen](/api-docs/unity/unityengine/inputsystem/Touchscreen/) | class |  |
| [ReadOnlyArray](/api-docs/unity/unityengine/inputsystem/utilities/ReadOnlyArray/) | class |  |
| [Matrix4x4](/api-docs/unity/unityengine/Matrix4x4/) | class | A 4x4 transformation matrix for 3D transformations. |
| [Mesh](/api-docs/unity/unityengine/Mesh/) | class | Represents 3D geometry data for rendering. |
| [MeshTopology](/api-docs/unity/unityengine/MeshTopology/) | class | Defines how vertex indices are interpreted to form primitives. |
| [MonoBehaviour](/api-docs/unity/unityengine/MonoBehaviour/) | class | Unity MonoBehaviour class extern binding for Ceramic. |
| [Object](/api-docs/unity/unityengine/Object/) | class | Unity Object class extern binding for Ceramic. |
| [Rect](/api-docs/unity/unityengine/Rect/) | class | Unity Rect struct extern binding for Ceramic. |
| [BlendMode](/api-docs/unity/unityengine/rendering/BlendMode/) | class |  |
| [CommandBuffer](/api-docs/unity/unityengine/rendering/CommandBuffer/) | class |  |
| [CompareFunction](/api-docs/unity/unityengine/rendering/CompareFunction/) | class |  |
| [IndexFormat](/api-docs/unity/unityengine/rendering/IndexFormat/) | class |  |
| [MeshUpdateFlags](/api-docs/unity/unityengine/rendering/MeshUpdateFlags/) | class |  |
| [StencilOp](/api-docs/unity/unityengine/rendering/StencilOp/) | class |  |
| [SubMeshDescriptor](/api-docs/unity/unityengine/rendering/SubMeshDescriptor/) | class |  |
| [RenderingData](/api-docs/unity/unityengine/rendering/universal/RenderingData/) | class |  |
| [ScriptableRenderer](/api-docs/unity/unityengine/rendering/universal/ScriptableRenderer/) | class |  |
| [ScriptableRenderPass](/api-docs/unity/unityengine/rendering/universal/ScriptableRenderPass/) | class |  |
| [VertexAttribute](/api-docs/unity/unityengine/rendering/VertexAttribute/) | class |  |
| [VertexAttributeDescriptor](/api-docs/unity/unityengine/rendering/VertexAttributeDescriptor/) | class |  |
| [VertexAttributeFormat](/api-docs/unity/unityengine/rendering/VertexAttributeFormat/) | class |  |
| [RenderTexture](/api-docs/unity/unityengine/RenderTexture/) | class | A texture that can be rendered to by cameras or used as a render target. |
| [ResourceRequest](/api-docs/unity/unityengine/ResourceRequest/) | class | Represents an asynchronous resource loading operation. |
| [RTHandle](/api-docs/unity/unityengine/RTHandle/) | class | A handle to a render texture in Unity's Scriptable Render Pipeline. |
| [ScreenCapture](/api-docs/unity/unityengine/ScreenCapture/) | class | Utility class for capturing screenshots of the game view. |
| [TextAsset](/api-docs/unity/unityengine/TextAsset/) | class | Represents a text file asset in Unity. |
| [Texture](/api-docs/unity/unityengine/Texture/) | class | Unity Texture class extern binding for Ceramic. |
| [Texture2D](/api-docs/unity/unityengine/Texture2D/) | class | Unity Texture2D class extern binding for Ceramic. |
| [TextureWrapMode](/api-docs/unity/unityengine/TextureWrapMode/) | class | Unity TextureWrapMode enum extern binding for Ceramic. |
| [Vector2](/api-docs/unity/unityengine/Vector2/) | class | Unity Vector2 struct extern binding for Ceramic. |
| [Vector3](/api-docs/unity/unityengine/Vector3/) | class | Unity Vector3 struct extern binding for Ceramic. |
| [Vector4](/api-docs/unity/unityengine/Vector4/) | class | Unity Vector4 struct extern binding for Ceramic. |

## Ase

| Type | Kind | Description |
|------|------|-------------|
| [Ase](/api-docs/unity/ase/Ase/) | class | Aseprite file format reader/writer |
| [AseHeader](/api-docs/unity/ase/AseHeader/) | class |  |
| [Cel](/api-docs/unity/ase/Cel/) | class |  |
| [CelChunk](/api-docs/unity/ase/chunks/CelChunk/) | class |  |
| [CelExtraChunk](/api-docs/unity/ase/chunks/CelExtraChunk/) | class |  |
| [Chunk](/api-docs/unity/ase/chunks/Chunk/) | class |  |
| [ChunkHeader](/api-docs/unity/ase/chunks/ChunkHeader/) | class |  |
| [ColorProfileChunk](/api-docs/unity/ase/chunks/ColorProfileChunk/) | class |  |
| [ExternalFilesChunk](/api-docs/unity/ase/chunks/ExternalFilesChunk/) | class |  |
| [LayerBlendMode](/api-docs/unity/ase/chunks/LayerBlendMode/) | abstract |  |
| [LayerChunk](/api-docs/unity/ase/chunks/LayerChunk/) | class |  |
| [LayerFlags](/api-docs/unity/ase/chunks/LayerFlags/) | abstract |  |
| [LayerType](/api-docs/unity/ase/chunks/LayerType/) | abstract |  |
| [MaskChunk](/api-docs/unity/ase/chunks/MaskChunk/) | class |  |
| [OldPaleteChunk](/api-docs/unity/ase/chunks/OldPaleteChunk/) | class |  |
| [Packet](/api-docs/unity/ase/chunks/Packet/) | typedef |  |
| [PaletteChunk](/api-docs/unity/ase/chunks/PaletteChunk/) | class |  |
| [PaletteChunkEntry](/api-docs/unity/ase/chunks/PaletteChunkEntry/) | class |  |
| [SliceChunk](/api-docs/unity/ase/chunks/SliceChunk/) | class |  |
| [SliceKey](/api-docs/unity/ase/chunks/SliceKey/) | class |  |
| [Tag](/api-docs/unity/ase/chunks/Tag/) | typedef |  |
| [TagsChunk](/api-docs/unity/ase/chunks/TagsChunk/) | class |  |
| [TilesetChunk](/api-docs/unity/ase/chunks/TilesetChunk/) | class |  |
| [UserDataChunk](/api-docs/unity/ase/chunks/UserDataChunk/) | class |  |
| [Frame](/api-docs/unity/ase/Frame/) | class |  |
| [FrameHeader](/api-docs/unity/ase/FrameHeader/) | class |  |
| [Layer](/api-docs/unity/ase/Layer/) | class |  |
| [Palette](/api-docs/unity/ase/Palette/) | class |  |
| [PaletteEntry](/api-docs/unity/ase/PaletteEntry/) | typedef |  |
| [CelType](/api-docs/unity/ase/types/CelType/) | abstract |  |
| [ChunkType](/api-docs/unity/ase/types/ChunkType/) | abstract |  |
| [ColorDepth](/api-docs/unity/ase/types/ColorDepth/) | abstract |  |
| [ColorProfileType](/api-docs/unity/ase/types/ColorProfileType/) | abstract |  |
| [Serializable](/api-docs/unity/ase/types/Serializable/) | interface |  |
| [AsepriteBlendFuncs](/api-docs/unity/ceramic/AsepriteBlendFuncs/) | class | Blending functions that operate at pixel/color level, ported from Aseprite source code. |
| [AsepriteData](/api-docs/unity/ceramic/AsepriteData/) | class | Data structure containing parsed Aseprite file information. |
| [AsepriteFrame](/api-docs/unity/ceramic/AsepriteFrame/) | class | Represents a single frame from an Aseprite animation. |
| [AsepriteFrameLayer](/api-docs/unity/ceramic/AsepriteFrameLayer/) | class | Represents a single layer's data within an Aseprite frame. |
| [AsepritePalette](/api-docs/unity/ceramic/AsepritePalette/) | class | Represents a color palette from an Aseprite file. |
| [AsepriteParser](/api-docs/unity/ceramic/AsepriteParser/) | class | Parser for Aseprite (.ase/.aseprite) animation files. |
| [AsepriteTag](/api-docs/unity/ceramic/AsepriteTag/) | class | Represents an animation tag from an Aseprite file. |

## Format

| Type | Kind | Description |
|------|------|-------------|
| [Header](/api-docs/unity/format/gz/Header/) | typedef |  |
| [Reader](/api-docs/unity/format/gz/Reader/) | class |  |
| [InflateImpl](/api-docs/unity/format/tools/InflateImpl/) | typedef |  |

## Tiled

| Type | Kind | Description |
|------|------|-------------|
| [Reader](/api-docs/unity/format/tmx/Reader/) | class | ... |
| [TmxBaseLayer](/api-docs/unity/format/tmx/TmxBaseLayer/) | class |  |
| [TmxChunk](/api-docs/unity/format/tmx/TmxChunk/) | class | This is currently added only for infinite maps. The contents of a chunk element is same as that of |
| [TmxData](/api-docs/unity/format/tmx/TmxData/) | class | When no encoding or compression is given, the tiles are stored as individual XML tile elements. |
| [TmxDataCompression](/api-docs/unity/format/tmx/TmxDataCompression/) | enum | Compression type for data. |
| [TmxDataEncoding](/api-docs/unity/format/tmx/TmxDataEncoding/) | enum | Encoding of the data. |
| [TmxGroup](/api-docs/unity/format/tmx/TmxGroup/) | class | A group layer, used to organize the layers of the map in a hierarchy. |
| [TmxHAlign](/api-docs/unity/format/tmx/TmxHAlign/) | abstract |  |
| [TmxImage](/api-docs/unity/format/tmx/TmxImage/) | class | As of the current version of Tiled Qt, each tileset has a single image associated with it, |
| [TmxImageLayer](/api-docs/unity/format/tmx/TmxImageLayer/) | class | A layer consisting of a single image. |
| [TmxLayer](/api-docs/unity/format/tmx/TmxLayer/) | enum |  |
| [TmxMap](/api-docs/unity/format/tmx/TmxMap/) | class | General .tmx map file |
| [TmxObject](/api-docs/unity/format/tmx/TmxObject/) | class |  |
| [TmxObjectGroup](/api-docs/unity/format/tmx/TmxObjectGroup/) | class | Layer representing a group of objects. |
| [TmxObjectGroupDrawOrder](/api-docs/unity/format/tmx/TmxObjectGroupDrawOrder/) | enum | Whether the objects are drawn according to the order of appearance ("index") or sorted by their y... |
| [TmxObjectTemplate](/api-docs/unity/format/tmx/TmxObjectTemplate/) | class |  |
| [TmxObjectType](/api-docs/unity/format/tmx/TmxObjectType/) | enum | Type of the object. |
| [TmxObjectTypeProperty](/api-docs/unity/format/tmx/TmxObjectTypeProperty/) | class |  |
| [TmxObjectTypeTemplate](/api-docs/unity/format/tmx/TmxObjectTypeTemplate/) | class |  |
| [TmxOrientation](/api-docs/unity/format/tmx/TmxOrientation/) | enum | Map orientation |
| [TmxPoint](/api-docs/unity/format/tmx/TmxPoint/) | class | Utility for x/y object. Used for Polygon and Polyline object types. |
| [TmxProperties](/api-docs/unity/format/tmx/TmxProperties/) | abstract |  |
| [TmxPropertyType](/api-docs/unity/format/tmx/TmxPropertyType/) | enum |  |
| [TmxRenderOrder](/api-docs/unity/format/tmx/TmxRenderOrder/) | enum | Rendering order of tiles |
| [TmxStaggerAxis](/api-docs/unity/format/tmx/TmxStaggerAxis/) | enum |  |
| [TmxStaggerIndex](/api-docs/unity/format/tmx/TmxStaggerIndex/) | enum |  |
| [TmxTerrain](/api-docs/unity/format/tmx/TmxTerrain/) | class |  |
| [TmxText](/api-docs/unity/format/tmx/TmxText/) | class | Used to mark an object as a text object. Contains the actual text as character data. |
| [TmxTile](/api-docs/unity/format/tmx/TmxTile/) | abstract | Single tile in tile layer. |
| [TmxTileLayer](/api-docs/unity/format/tmx/TmxTileLayer/) | class |  |
| [TmxTileOffset](/api-docs/unity/format/tmx/TmxTileOffset/) | class | This element is used to specify an offset in pixels, to be applied when drawing a tile from the r... |
| [TmxTileset](/api-docs/unity/format/tmx/TmxTileset/) | class | Tileset |
| [TmxTilesetGrid](/api-docs/unity/format/tmx/TmxTilesetGrid/) | class | This element is only used in case of isometric orientation, and determines how tile overlays for ... |
| [TmxTilesetTile](/api-docs/unity/format/tmx/TmxTilesetTile/) | class |  |
| [TmxTilesetTileFrame](/api-docs/unity/format/tmx/TmxTilesetTileFrame/) | class | Animation frame of a single tile in tileset. |
| [TmxVAlign](/api-docs/unity/format/tmx/TmxVAlign/) | abstract |  |
| [TmxWangSet](/api-docs/unity/format/tmx/TmxWangSet/) | class | Defines a list of corner colors and a list of edge colors, and any number of Wang tiles using the... |
| [TmxWangSetColor](/api-docs/unity/format/tmx/TmxWangSetColor/) | class | A color that can be used to define the corner or an edge of a Wang tile. |
| [TmxWangSetTile](/api-docs/unity/format/tmx/TmxWangSetTile/) | class | Defines a Wang tile, by referring to a tile in the tileset and associating it with a certain Wang... |
| [Tools](/api-docs/unity/format/tmx/Tools/) | class | ... |
| [ImplTmxProperties](/api-docs/unity/format/tmx/_Data/ImplTmxProperties/) | class |  |

## Nape

| Type | Kind | Description |
|------|------|-------------|
| [NapePhysicsBodyType](/api-docs/unity/ceramic/NapePhysicsBodyType/) | enum | Types of physics bodies in the Nape physics engine. |
| [NapeSystem](/api-docs/unity/ceramic/NapeSystem/) | class | Central system managing Nape physics simulation in Ceramic. |
| [VisualNapePhysics](/api-docs/unity/ceramic/VisualNapePhysics/) | class | Component that links a Ceramic Visual to a Nape physics body. |
| [BodyCallback](/api-docs/unity/nape/callbacks/BodyCallback/) | class | Callback object for Body type events. |
| [BodyListener](/api-docs/unity/nape/callbacks/BodyListener/) | class | Event listener for Body type events. |
| [Callback](/api-docs/unity/nape/callbacks/Callback/) | class | Base type for Callback event objects. |
| [CbEvent](/api-docs/unity/nape/callbacks/CbEvent/) | class | Enumeration of possible callback event types. |
| [CbType](/api-docs/unity/nape/callbacks/CbType/) | class | Callback Type applied to Interactors and Constraints. |
| [CbTypeIterator](/api-docs/unity/nape/callbacks/CbTypeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CbTypeList](/api-docs/unity/nape/callbacks/CbTypeList/) | class | Nape list of CbType type objects |
| [ConstraintCallback](/api-docs/unity/nape/callbacks/ConstraintCallback/) | class | Callback object for Constraint type events. |
| [ConstraintListener](/api-docs/unity/nape/callbacks/ConstraintListener/) | class | Event listener for Constraint type events. |
| [InteractionCallback](/api-docs/unity/nape/callbacks/InteractionCallback/) | class | Callback object for Interaction type events. |
| [InteractionListener](/api-docs/unity/nape/callbacks/InteractionListener/) | class | Event listener for Interaction type events. |
| [InteractionType](/api-docs/unity/nape/callbacks/InteractionType/) | class | Enumeration of Interaction types. |
| [Listener](/api-docs/unity/nape/callbacks/Listener/) | class | Base type for all Nape callback listeners. |
| [ListenerIterator](/api-docs/unity/nape/callbacks/ListenerIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ListenerList](/api-docs/unity/nape/callbacks/ListenerList/) | class | Nape list of Listener type objects |
| [ListenerType](/api-docs/unity/nape/callbacks/ListenerType/) | class | Enumeration of Listener types. |
| [OptionType](/api-docs/unity/nape/callbacks/OptionType/) | class | OptionType representing matching behaviour for Listeners. |
| [PreCallback](/api-docs/unity/nape/callbacks/PreCallback/) | class | Callback object for Pre-Interaction type events. |
| [PreFlag](/api-docs/unity/nape/callbacks/PreFlag/) | class | Enumeration of interaction states for arbiters. These values are returned |
| [PreListener](/api-docs/unity/nape/callbacks/PreListener/) | class | Event listener for Pre-Interaction type events. |
| [Config](/api-docs/unity/nape/Config/) | class | Configuration parameters for Nape |
| [AngleJoint](/api-docs/unity/nape/constraint/AngleJoint/) | class | AngleJoint constraining the relative angles of two Bodies. |
| [Constraint](/api-docs/unity/nape/constraint/Constraint/) | class | Base type for all Nape joints and constraints |
| [ConstraintIterator](/api-docs/unity/nape/constraint/ConstraintIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConstraintList](/api-docs/unity/nape/constraint/ConstraintList/) | class | Nape list of Constraint type objects |
| [DistanceJoint](/api-docs/unity/nape/constraint/DistanceJoint/) | class | DistanceJoint limiting the distance between two local anchor points of Bodies. |
| [LineJoint](/api-docs/unity/nape/constraint/LineJoint/) | class | LineJoint constraining anchor of one body, to a line segment of the other. |
| [MotorJoint](/api-docs/unity/nape/constraint/MotorJoint/) | class | MotorJoint constraining the angular velocities of two bodies |
| [PivotJoint](/api-docs/unity/nape/constraint/PivotJoint/) | class | PivotJoint constraining two anchors points of bodies to be equal. |
| [PulleyJoint](/api-docs/unity/nape/constraint/PulleyJoint/) | class | PulleyJoint limiting the weighted sum of distances between 2 pairs of 4 local anchor points of Bo... |
| [UserConstraint](/api-docs/unity/nape/constraint/UserConstraint/) | class | UserConstraint providing a low-level API for user-defined Constraints. |
| [WeldJoint](/api-docs/unity/nape/constraint/WeldJoint/) | class | WeldJoint constraining two bodies to be exactly locked together. |
| [Arbiter](/api-docs/unity/nape/dynamics/Arbiter/) | class | Arbiter representing the state of an interaction between two Bodys. |
| [ArbiterIterator](/api-docs/unity/nape/dynamics/ArbiterIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ArbiterList](/api-docs/unity/nape/dynamics/ArbiterList/) | class | Nape list of Arbiter type objects |
| [ArbiterType](/api-docs/unity/nape/dynamics/ArbiterType/) | class | Enumeration of Arbiter types. |
| [CollisionArbiter](/api-docs/unity/nape/dynamics/CollisionArbiter/) | class | Arbiter sub type for collision interactions. |
| [Contact](/api-docs/unity/nape/dynamics/Contact/) | class | Contact point for collision interactions |
| [ContactIterator](/api-docs/unity/nape/dynamics/ContactIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ContactList](/api-docs/unity/nape/dynamics/ContactList/) | class | Nape list of Contact type objects |
| [FluidArbiter](/api-docs/unity/nape/dynamics/FluidArbiter/) | class | Fluid interaction subtype for Arbiter. |
| [InteractionFilter](/api-docs/unity/nape/dynamics/InteractionFilter/) | class | InteractionFilter provides bit flags for low-level filtering of interactions. |
| [InteractionGroup](/api-docs/unity/nape/dynamics/InteractionGroup/) | class | InteractionGroups are another way of filtering interactions. |
| [InteractionGroupIterator](/api-docs/unity/nape/dynamics/InteractionGroupIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractionGroupList](/api-docs/unity/nape/dynamics/InteractionGroupList/) | class | Nape list of InteractionGroup type objects |
| [AABB](/api-docs/unity/nape/geom/AABB/) | class | Axis Aligned Bounding Box (AABB) |
| [ConvexResult](/api-docs/unity/nape/geom/ConvexResult/) | class | Class representing the results of a convex cast operation. |
| [ConvexResultIterator](/api-docs/unity/nape/geom/ConvexResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ConvexResultList](/api-docs/unity/nape/geom/ConvexResultList/) | class | Nape list of ConvexResult type objects |
| [Geom](/api-docs/unity/nape/geom/Geom/) | class | Geom class provides interface to collision detection routines in nape. |
| [GeomPoly](/api-docs/unity/nape/geom/GeomPoly/) | class | Polygon class with various geometric methods |
| [GeomPolyIterator](/api-docs/unity/nape/geom/GeomPolyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [GeomPolyList](/api-docs/unity/nape/geom/GeomPolyList/) | class | Nape list of GeomPoly type objects |
| [GeomVertexIterator](/api-docs/unity/nape/geom/GeomVertexIterator/) | class | Haxe compatible iterator over vertices of GeomPoly. |
| [IsoFunctionDef](/api-docs/unity/nape/geom/IsoFunctionDef/) | typedef | Typedef defining iso-function type for MarchingSquares. |
| [MarchingSquares](/api-docs/unity/nape/geom/MarchingSquares/) | class | Iso-surface extraction into polygons. |
| [Mat23](/api-docs/unity/nape/geom/Mat23/) | class | 2D Matrix class representing affine transformations: |
| [MatMN](/api-docs/unity/nape/geom/MatMN/) | class | A general MxN dimensional matrix. |
| [Ray](/api-docs/unity/nape/geom/Ray/) | class | Parametrically defined ray used in ray casting functions. |
| [RayResult](/api-docs/unity/nape/geom/RayResult/) | class | Class representing the results of a ray cast operation. |
| [RayResultIterator](/api-docs/unity/nape/geom/RayResultIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [RayResultList](/api-docs/unity/nape/geom/RayResultList/) | class | Nape list of RayResult type objects |
| [Vec2](/api-docs/unity/nape/geom/Vec2/) | class | 2 Dimensional vector. |
| [Vec2Iterator](/api-docs/unity/nape/geom/Vec2Iterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [Vec2List](/api-docs/unity/nape/geom/Vec2List/) | class | Nape list of Vec2 type objects |
| [Vec3](/api-docs/unity/nape/geom/Vec3/) | class | A 3 dimensional vector object. |
| [Winding](/api-docs/unity/nape/geom/Winding/) | class | Enumeration represents the winding of a Polygon. |
| [Body](/api-docs/unity/nape/phys/Body/) | class | Class representing a physics Rigid Body. |
| [BodyIterator](/api-docs/unity/nape/phys/BodyIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [BodyList](/api-docs/unity/nape/phys/BodyList/) | class | Nape list of Body type objects |
| [BodyType](/api-docs/unity/nape/phys/BodyType/) | class | Enumeration of rigid body types. |
| [Compound](/api-docs/unity/nape/phys/Compound/) | class | Compound represents a grouping of physics objects into a single object. |
| [CompoundIterator](/api-docs/unity/nape/phys/CompoundIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [CompoundList](/api-docs/unity/nape/phys/CompoundList/) | class | Nape list of Compound type objects |
| [FluidProperties](/api-docs/unity/nape/phys/FluidProperties/) | class | FluidProperties providing shared parameters for fluid interaction. |
| [GravMassMode](/api-docs/unity/nape/phys/GravMassMode/) | class | Enumeration of GravMassMode values for a Body. |
| [InertiaMode](/api-docs/unity/nape/phys/InertiaMode/) | class | Enumeration of InertiaMode values for a Body. |
| [Interactor](/api-docs/unity/nape/phys/Interactor/) | class |  |
| [InteractorIterator](/api-docs/unity/nape/phys/InteractorIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [InteractorList](/api-docs/unity/nape/phys/InteractorList/) | class | Nape list of Interactor type objects |
| [MassMode](/api-docs/unity/nape/phys/MassMode/) | class | Enumeration of MassMode values for a Body. |
| [Material](/api-docs/unity/nape/phys/Material/) | class | Material property providing physical attributes to a Shape. |
| [Circle](/api-docs/unity/nape/shape/Circle/) | class | Shape subtype representing a Circle |
| [Edge](/api-docs/unity/nape/shape/Edge/) | class | Edge class providing internal details of Polygon. |
| [EdgeIterator](/api-docs/unity/nape/shape/EdgeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [EdgeList](/api-docs/unity/nape/shape/EdgeList/) | class | Nape list of Edge type objects |
| [Polygon](/api-docs/unity/nape/shape/Polygon/) | class | Polygon subtype of Shape. |
| [Shape](/api-docs/unity/nape/shape/Shape/) | class | Base type for Nape Shape's |
| [ShapeIterator](/api-docs/unity/nape/shape/ShapeIterator/) | class | Haxe Iterator<T> compatible iterator over Nape list. |
| [ShapeList](/api-docs/unity/nape/shape/ShapeList/) | class | Nape list of Shape type objects |
| [ShapeType](/api-docs/unity/nape/shape/ShapeType/) | class | Enumeration of Nape Shape types. |
| [ValidationResult](/api-docs/unity/nape/shape/ValidationResult/) | class | Enumeration of validation results for a Polygon. |
| [Broadphase](/api-docs/unity/nape/space/Broadphase/) | class | Enumeration of available broadphase collision types that Spaces may use. |
| [Space](/api-docs/unity/nape/space/Space/) | class | The heart of all Nape simulations. |
| [TArray](/api-docs/unity/nape/TArray/) | typedef | Platform specific Array type. |
| [Debug](/api-docs/unity/nape/util/Debug/) | class | Debug class providing general utilities |
| [ZPP_BodyListener](/api-docs/unity/zpp_nape/callbacks/ZPP_BodyListener/) | class |  |
| [ZPP_Callback](/api-docs/unity/zpp_nape/callbacks/ZPP_Callback/) | class |  |
| [ZPP_CbSet](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSet/) | class |  |
| [ZPP_CbSetPair](/api-docs/unity/zpp_nape/callbacks/ZPP_CbSetPair/) | class |  |
| [ZPP_CbType](/api-docs/unity/zpp_nape/callbacks/ZPP_CbType/) | class |  |
| [ZPP_ConstraintListener](/api-docs/unity/zpp_nape/callbacks/ZPP_ConstraintListener/) | class |  |
| [ZPP_InteractionListener](/api-docs/unity/zpp_nape/callbacks/ZPP_InteractionListener/) | class |  |
| [ZPP_Listener](/api-docs/unity/zpp_nape/callbacks/ZPP_Listener/) | class |  |
| [ZPP_OptionType](/api-docs/unity/zpp_nape/callbacks/ZPP_OptionType/) | class |  |
| [ZPP_AngleJoint](/api-docs/unity/zpp_nape/constraint/ZPP_AngleJoint/) | class |  |
| [ZPP_Constraint](/api-docs/unity/zpp_nape/constraint/ZPP_Constraint/) | class |  |
| [ZPP_CopyHelper](/api-docs/unity/zpp_nape/constraint/ZPP_CopyHelper/) | class |  |
| [ZPP_DistanceJoint](/api-docs/unity/zpp_nape/constraint/ZPP_DistanceJoint/) | class |  |
| [ZPP_LineJoint](/api-docs/unity/zpp_nape/constraint/ZPP_LineJoint/) | class |  |
| [ZPP_MotorJoint](/api-docs/unity/zpp_nape/constraint/ZPP_MotorJoint/) | class |  |
| [ZPP_PivotJoint](/api-docs/unity/zpp_nape/constraint/ZPP_PivotJoint/) | class |  |
| [ZPP_PulleyJoint](/api-docs/unity/zpp_nape/constraint/ZPP_PulleyJoint/) | class |  |
| [ZPP_UserBody](/api-docs/unity/zpp_nape/constraint/ZPP_UserBody/) | class |  |
| [ZPP_UserConstraint](/api-docs/unity/zpp_nape/constraint/ZPP_UserConstraint/) | class |  |
| [ZPP_WeldJoint](/api-docs/unity/zpp_nape/constraint/ZPP_WeldJoint/) | class |  |
| [ZPP_Arbiter](/api-docs/unity/zpp_nape/dynamics/ZPP_Arbiter/) | class |  |
| [ZPP_ColArbiter](/api-docs/unity/zpp_nape/dynamics/ZPP_ColArbiter/) | class |  |
| [ZPP_Contact](/api-docs/unity/zpp_nape/dynamics/ZPP_Contact/) | class |  |
| [ZPP_FluidArbiter](/api-docs/unity/zpp_nape/dynamics/ZPP_FluidArbiter/) | class |  |
| [ZPP_IContact](/api-docs/unity/zpp_nape/dynamics/ZPP_IContact/) | class |  |
| [ZPP_InteractionFilter](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionFilter/) | class |  |
| [ZPP_InteractionGroup](/api-docs/unity/zpp_nape/dynamics/ZPP_InteractionGroup/) | class |  |
| [ZPP_SensorArbiter](/api-docs/unity/zpp_nape/dynamics/ZPP_SensorArbiter/) | class |  |
| [ZPP_SpaceArbiterList](/api-docs/unity/zpp_nape/dynamics/ZPP_SpaceArbiterList/) | class |  |
| [ZPP_AABB](/api-docs/unity/zpp_nape/geom/ZPP_AABB/) | class |  |
| [ZPP_Collide](/api-docs/unity/zpp_nape/geom/ZPP_Collide/) | class |  |
| [ZPP_Convex](/api-docs/unity/zpp_nape/geom/ZPP_Convex/) | class |  |
| [ZPP_ConvexRayResult](/api-docs/unity/zpp_nape/geom/ZPP_ConvexRayResult/) | class |  |
| [ZPP_CutInt](/api-docs/unity/zpp_nape/geom/ZPP_CutInt/) | class |  |
| [ZPP_Cutter](/api-docs/unity/zpp_nape/geom/ZPP_Cutter/) | class |  |
| [ZPP_CutVert](/api-docs/unity/zpp_nape/geom/ZPP_CutVert/) | class |  |
| [ZPP_Geom](/api-docs/unity/zpp_nape/geom/ZPP_Geom/) | class |  |
| [ZPP_GeomPoly](/api-docs/unity/zpp_nape/geom/ZPP_GeomPoly/) | class |  |
| [ZPP_GeomVert](/api-docs/unity/zpp_nape/geom/ZPP_GeomVert/) | class |  |
| [ZPP_GeomVertexIterator](/api-docs/unity/zpp_nape/geom/ZPP_GeomVertexIterator/) | class |  |
| [ZPP_MarchingSquares](/api-docs/unity/zpp_nape/geom/ZPP_MarchingSquares/) | class |  |
| [ZPP_MarchPair](/api-docs/unity/zpp_nape/geom/ZPP_MarchPair/) | class |  |
| [ZPP_MarchSpan](/api-docs/unity/zpp_nape/geom/ZPP_MarchSpan/) | class |  |
| [ZPP_Mat23](/api-docs/unity/zpp_nape/geom/ZPP_Mat23/) | class |  |
| [ZPP_MatMN](/api-docs/unity/zpp_nape/geom/ZPP_MatMN/) | class |  |
| [ZPP_Monotone](/api-docs/unity/zpp_nape/geom/ZPP_Monotone/) | class |  |
| [ZPP_PartitionedPoly](/api-docs/unity/zpp_nape/geom/ZPP_PartitionedPoly/) | class |  |
| [ZPP_PartitionPair](/api-docs/unity/zpp_nape/geom/ZPP_PartitionPair/) | class |  |
| [ZPP_PartitionVertex](/api-docs/unity/zpp_nape/geom/ZPP_PartitionVertex/) | class |  |
| [ZPP_Ray](/api-docs/unity/zpp_nape/geom/ZPP_Ray/) | class |  |
| [ZPP_Simple](/api-docs/unity/zpp_nape/geom/ZPP_Simple/) | class |  |
| [ZPP_SimpleEvent](/api-docs/unity/zpp_nape/geom/ZPP_SimpleEvent/) | class |  |
| [ZPP_SimpleSeg](/api-docs/unity/zpp_nape/geom/ZPP_SimpleSeg/) | class |  |
| [ZPP_SimpleSweep](/api-docs/unity/zpp_nape/geom/ZPP_SimpleSweep/) | class |  |
| [ZPP_SimpleVert](/api-docs/unity/zpp_nape/geom/ZPP_SimpleVert/) | class |  |
| [ZPP_Simplify](/api-docs/unity/zpp_nape/geom/ZPP_Simplify/) | class |  |
| [ZPP_SimplifyP](/api-docs/unity/zpp_nape/geom/ZPP_SimplifyP/) | class |  |
| [ZPP_SimplifyV](/api-docs/unity/zpp_nape/geom/ZPP_SimplifyV/) | class |  |
| [ZPP_SweepDistance](/api-docs/unity/zpp_nape/geom/ZPP_SweepDistance/) | class |  |
| [ZPP_ToiEvent](/api-docs/unity/zpp_nape/geom/ZPP_ToiEvent/) | class |  |
| [ZPP_Triangular](/api-docs/unity/zpp_nape/geom/ZPP_Triangular/) | class |  |
| [ZPP_Vec2](/api-docs/unity/zpp_nape/geom/ZPP_Vec2/) | class |  |
| [ZPP_Vec3](/api-docs/unity/zpp_nape/geom/ZPP_Vec3/) | class |  |
| [ZPP_VecMath](/api-docs/unity/zpp_nape/geom/ZPP_VecMath/) | class |  |
| [ZPP_Body](/api-docs/unity/zpp_nape/phys/ZPP_Body/) | class |  |
| [ZPP_Compound](/api-docs/unity/zpp_nape/phys/ZPP_Compound/) | class |  |
| [ZPP_FluidProperties](/api-docs/unity/zpp_nape/phys/ZPP_FluidProperties/) | class |  |
| [ZPP_Interactor](/api-docs/unity/zpp_nape/phys/ZPP_Interactor/) | class |  |
| [ZPP_Material](/api-docs/unity/zpp_nape/phys/ZPP_Material/) | class |  |
| [ZPP_Circle](/api-docs/unity/zpp_nape/shape/ZPP_Circle/) | class |  |
| [ZPP_Edge](/api-docs/unity/zpp_nape/shape/ZPP_Edge/) | class |  |
| [ZPP_Polygon](/api-docs/unity/zpp_nape/shape/ZPP_Polygon/) | class |  |
| [ZPP_Shape](/api-docs/unity/zpp_nape/shape/ZPP_Shape/) | class |  |
| [ZPP_AABBNode](/api-docs/unity/zpp_nape/space/ZPP_AABBNode/) | class |  |
| [ZPP_AABBPair](/api-docs/unity/zpp_nape/space/ZPP_AABBPair/) | class |  |
| [ZPP_AABBTree](/api-docs/unity/zpp_nape/space/ZPP_AABBTree/) | class |  |
| [ZPP_Broadphase](/api-docs/unity/zpp_nape/space/ZPP_Broadphase/) | class |  |
| [ZPP_CallbackSet](/api-docs/unity/zpp_nape/space/ZPP_CallbackSet/) | class |  |
| [ZPP_CbSetManager](/api-docs/unity/zpp_nape/space/ZPP_CbSetManager/) | class |  |
| [ZPP_Component](/api-docs/unity/zpp_nape/space/ZPP_Component/) | class |  |
| [ZPP_DynAABBPhase](/api-docs/unity/zpp_nape/space/ZPP_DynAABBPhase/) | class |  |
| [ZPP_Island](/api-docs/unity/zpp_nape/space/ZPP_Island/) | class |  |
| [ZPP_Space](/api-docs/unity/zpp_nape/space/ZPP_Space/) | class |  |
| [ZPP_SweepData](/api-docs/unity/zpp_nape/space/ZPP_SweepData/) | class |  |
| [ZPP_SweepPhase](/api-docs/unity/zpp_nape/space/ZPP_SweepPhase/) | class |  |
| [FastHash2_Hashable2_Boolfalse](/api-docs/unity/zpp_nape/util/FastHash2_Hashable2_Boolfalse/) | class |  |
| [Hashable2_Boolfalse](/api-docs/unity/zpp_nape/util/Hashable2_Boolfalse/) | class |  |
| [ZNPArray2_Float](/api-docs/unity/zpp_nape/util/ZNPArray2_Float/) | class |  |
| [ZNPArray2_ZPP_GeomVert](/api-docs/unity/zpp_nape/util/ZNPArray2_ZPP_GeomVert/) | class |  |
| [ZNPArray2_ZPP_MarchPair](/api-docs/unity/zpp_nape/util/ZNPArray2_ZPP_MarchPair/) | class |  |
| [ZNPList_ConvexResult](/api-docs/unity/zpp_nape/util/ZNPList_ConvexResult/) | class |  |
| [ZNPList_RayResult](/api-docs/unity/zpp_nape/util/ZNPList_RayResult/) | class |  |
| [ZNPList_ZPP_AABBNode](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_AABBNode/) | class |  |
| [ZNPList_ZPP_AABBPair](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_AABBPair/) | class |  |
| [ZNPList_ZPP_Arbiter](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Arbiter/) | class |  |
| [ZNPList_ZPP_Body](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Body/) | class |  |
| [ZNPList_ZPP_BodyListener](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_BodyListener/) | class |  |
| [ZNPList_ZPP_CallbackSet](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CallbackSet/) | class |  |
| [ZNPList_ZPP_CbSet](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbSet/) | class |  |
| [ZNPList_ZPP_CbSetPair](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbSetPair/) | class |  |
| [ZNPList_ZPP_CbType](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CbType/) | class |  |
| [ZNPList_ZPP_ColArbiter](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_ColArbiter/) | class |  |
| [ZNPList_ZPP_Component](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Component/) | class |  |
| [ZNPList_ZPP_Compound](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Compound/) | class |  |
| [ZNPList_ZPP_Constraint](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Constraint/) | class |  |
| [ZNPList_ZPP_ConstraintListener](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_ConstraintListener/) | class |  |
| [ZNPList_ZPP_CutInt](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CutInt/) | class |  |
| [ZNPList_ZPP_CutVert](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_CutVert/) | class |  |
| [ZNPList_ZPP_Edge](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Edge/) | class |  |
| [ZNPList_ZPP_FluidArbiter](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_FluidArbiter/) | class |  |
| [ZNPList_ZPP_GeomPoly](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_GeomPoly/) | class |  |
| [ZNPList_ZPP_GeomVert](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_GeomVert/) | class |  |
| [ZNPList_ZPP_InteractionGroup](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_InteractionGroup/) | class |  |
| [ZNPList_ZPP_InteractionListener](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_InteractionListener/) | class |  |
| [ZNPList_ZPP_Interactor](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Interactor/) | class |  |
| [ZNPList_ZPP_Listener](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Listener/) | class |  |
| [ZNPList_ZPP_PartitionedPoly](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_PartitionedPoly/) | class |  |
| [ZNPList_ZPP_PartitionVertex](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_PartitionVertex/) | class |  |
| [ZNPList_ZPP_SensorArbiter](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_SensorArbiter/) | class |  |
| [ZNPList_ZPP_Shape](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Shape/) | class |  |
| [ZNPList_ZPP_SimpleEvent](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_SimpleEvent/) | class |  |
| [ZNPList_ZPP_SimpleVert](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_SimpleVert/) | class |  |
| [ZNPList_ZPP_SimplifyP](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_SimplifyP/) | class |  |
| [ZNPList_ZPP_ToiEvent](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_ToiEvent/) | class |  |
| [ZNPList_ZPP_Vec2](/api-docs/unity/zpp_nape/util/ZNPList_ZPP_Vec2/) | class |  |
| [ZNPNode_ConvexResult](/api-docs/unity/zpp_nape/util/ZNPNode_ConvexResult/) | class |  |
| [ZNPNode_RayResult](/api-docs/unity/zpp_nape/util/ZNPNode_RayResult/) | class |  |
| [ZNPNode_ZPP_AABBNode](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_AABBNode/) | class |  |
| [ZNPNode_ZPP_AABBPair](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_AABBPair/) | class |  |
| [ZNPNode_ZPP_Arbiter](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Arbiter/) | class |  |
| [ZNPNode_ZPP_Body](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Body/) | class |  |
| [ZNPNode_ZPP_BodyListener](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_BodyListener/) | class |  |
| [ZNPNode_ZPP_CallbackSet](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_CallbackSet/) | class |  |
| [ZNPNode_ZPP_CbSet](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_CbSet/) | class |  |
| [ZNPNode_ZPP_CbSetPair](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_CbSetPair/) | class |  |
| [ZNPNode_ZPP_CbType](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_CbType/) | class |  |
| [ZNPNode_ZPP_ColArbiter](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_ColArbiter/) | class |  |
| [ZNPNode_ZPP_Component](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Component/) | class |  |
| [ZNPNode_ZPP_Compound](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Compound/) | class |  |
| [ZNPNode_ZPP_Constraint](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Constraint/) | class |  |
| [ZNPNode_ZPP_ConstraintListener](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_ConstraintListener/) | class |  |
| [ZNPNode_ZPP_CutInt](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_CutInt/) | class |  |
| [ZNPNode_ZPP_CutVert](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_CutVert/) | class |  |
| [ZNPNode_ZPP_Edge](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Edge/) | class |  |
| [ZNPNode_ZPP_FluidArbiter](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_FluidArbiter/) | class |  |
| [ZNPNode_ZPP_GeomPoly](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_GeomPoly/) | class |  |
| [ZNPNode_ZPP_GeomVert](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_GeomVert/) | class |  |
| [ZNPNode_ZPP_InteractionGroup](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_InteractionGroup/) | class |  |
| [ZNPNode_ZPP_InteractionListener](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_InteractionListener/) | class |  |
| [ZNPNode_ZPP_Interactor](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Interactor/) | class |  |
| [ZNPNode_ZPP_Listener](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Listener/) | class |  |
| [ZNPNode_ZPP_PartitionedPoly](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_PartitionedPoly/) | class |  |
| [ZNPNode_ZPP_PartitionVertex](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_PartitionVertex/) | class |  |
| [ZNPNode_ZPP_SensorArbiter](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_SensorArbiter/) | class |  |
| [ZNPNode_ZPP_Shape](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Shape/) | class |  |
| [ZNPNode_ZPP_SimpleEvent](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_SimpleEvent/) | class |  |
| [ZNPNode_ZPP_SimpleVert](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_SimpleVert/) | class |  |
| [ZNPNode_ZPP_SimplifyP](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_SimplifyP/) | class |  |
| [ZNPNode_ZPP_ToiEvent](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_ToiEvent/) | class |  |
| [ZNPNode_ZPP_Vec2](/api-docs/unity/zpp_nape/util/ZNPNode_ZPP_Vec2/) | class |  |
| [ZPP_ArbiterList](/api-docs/unity/zpp_nape/util/ZPP_ArbiterList/) | class |  |
| [ZPP_BodyList](/api-docs/unity/zpp_nape/util/ZPP_BodyList/) | class |  |
| [ZPP_CbTypeList](/api-docs/unity/zpp_nape/util/ZPP_CbTypeList/) | class |  |
| [ZPP_CompoundList](/api-docs/unity/zpp_nape/util/ZPP_CompoundList/) | class |  |
| [ZPP_ConstraintList](/api-docs/unity/zpp_nape/util/ZPP_ConstraintList/) | class |  |
| [ZPP_ContactList](/api-docs/unity/zpp_nape/util/ZPP_ContactList/) | class |  |
| [ZPP_ConvexResultList](/api-docs/unity/zpp_nape/util/ZPP_ConvexResultList/) | class |  |
| [ZPP_EdgeList](/api-docs/unity/zpp_nape/util/ZPP_EdgeList/) | class |  |
| [ZPP_Flags](/api-docs/unity/zpp_nape/util/ZPP_Flags/) | class |  |
| [ZPP_GeomPolyList](/api-docs/unity/zpp_nape/util/ZPP_GeomPolyList/) | class |  |
| [ZPP_InteractionGroupList](/api-docs/unity/zpp_nape/util/ZPP_InteractionGroupList/) | class |  |
| [ZPP_InteractorList](/api-docs/unity/zpp_nape/util/ZPP_InteractorList/) | class |  |
| [ZPP_ListenerList](/api-docs/unity/zpp_nape/util/ZPP_ListenerList/) | class |  |
| [ZPP_Math](/api-docs/unity/zpp_nape/util/ZPP_Math/) | class |  |
| [ZPP_MixVec2List](/api-docs/unity/zpp_nape/util/ZPP_MixVec2List/) | class |  |
| [ZPP_PubPool](/api-docs/unity/zpp_nape/util/ZPP_PubPool/) | class |  |
| [ZPP_RayResultList](/api-docs/unity/zpp_nape/util/ZPP_RayResultList/) | class |  |
| [ZPP_Set_ZPP_Body](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_Body/) | class |  |
| [ZPP_Set_ZPP_CbSet](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_CbSet/) | class |  |
| [ZPP_Set_ZPP_CbSetPair](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_CbSetPair/) | class |  |
| [ZPP_Set_ZPP_PartitionPair](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_PartitionPair/) | class |  |
| [ZPP_Set_ZPP_PartitionVertex](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_PartitionVertex/) | class |  |
| [ZPP_Set_ZPP_SimpleEvent](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_SimpleEvent/) | class |  |
| [ZPP_Set_ZPP_SimpleSeg](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_SimpleSeg/) | class |  |
| [ZPP_Set_ZPP_SimpleVert](/api-docs/unity/zpp_nape/util/ZPP_Set_ZPP_SimpleVert/) | class |  |
| [ZPP_ShapeList](/api-docs/unity/zpp_nape/util/ZPP_ShapeList/) | class |  |
| [ZPP_Vec2List](/api-docs/unity/zpp_nape/util/ZPP_Vec2List/) | class |  |
| [ZPP_Const](/api-docs/unity/zpp_nape/ZPP_Const/) | class |  |
| [ZPP_ID](/api-docs/unity/zpp_nape/ZPP_ID/) | class |  |

## BinPacking

| Type | Kind | Description |
|------|------|-------------|
| [DisjointRectCollection](/api-docs/unity/binpacking/DisjointRectCollection/) | class |  |
| [FreeRectChoiceHeuristic](/api-docs/unity/binpacking/FreeRectChoiceHeuristic/) | abstract |  |
| [IOccupancy](/api-docs/unity/binpacking/IOccupancy/) | interface |  |
| [MaxRectsPacker](/api-docs/unity/binpacking/MaxRectsPacker/) | class |  |
| [MaxRectsPackerBestFitPosition](/api-docs/unity/binpacking/MaxRectsPackerBestFitPosition/) | class |  |
| [MaxRectsPackerRectScore](/api-docs/unity/binpacking/MaxRectsPackerRectScore/) | class |  |
| [Rect](/api-docs/unity/binpacking/Rect/) | class |  |
| [RectSize](/api-docs/unity/binpacking/RectSize/) | class |  |

## Hsluv

| Type | Kind | Description |
|------|------|-------------|
| [Angle](/api-docs/unity/hsluv/Angle/) | typedef |  |
| [Geometry](/api-docs/unity/hsluv/Geometry/) | class |  |
| [Hsluv](/api-docs/unity/hsluv/Hsluv/) | class | Human-friendly HSL conversion utility class. |
| [Line](/api-docs/unity/hsluv/Line/) | typedef |  |
| [Point](/api-docs/unity/hsluv/Point/) | typedef |  |

## Hscript

| Type | Kind | Description |
|------|------|-------------|
| [Argument](/api-docs/unity/hscript/Argument/) | typedef |  |
| [ClassDecl](/api-docs/unity/hscript/ClassDecl/) | typedef |  |
| [Const](/api-docs/unity/hscript/Const/) | enum |  |
| [CType](/api-docs/unity/hscript/CType/) | enum |  |
| [Error](/api-docs/unity/hscript/Error/) | class |  |
| [ErrorDef](/api-docs/unity/hscript/ErrorDef/) | enum |  |
| [Expr](/api-docs/unity/hscript/Expr/) | typedef |  |
| [ExprDef](/api-docs/unity/hscript/ExprDef/) | enum |  |
| [FieldAccess](/api-docs/unity/hscript/FieldAccess/) | enum |  |
| [FieldDecl](/api-docs/unity/hscript/FieldDecl/) | typedef |  |
| [FieldKind](/api-docs/unity/hscript/FieldKind/) | enum |  |
| [FunctionDecl](/api-docs/unity/hscript/FunctionDecl/) | typedef |  |
| [Interp](/api-docs/unity/hscript/Interp/) | class |  |
| [Metadata](/api-docs/unity/hscript/Metadata/) | typedef |  |
| [ModuleDecl](/api-docs/unity/hscript/ModuleDecl/) | enum |  |
| [ModuleType](/api-docs/unity/hscript/ModuleType/) | typedef |  |
| [Parser](/api-docs/unity/hscript/Parser/) | class |  |
| [Printer](/api-docs/unity/hscript/Printer/) | class |  |
| [Token](/api-docs/unity/hscript/Token/) | enum |  |
| [Tools](/api-docs/unity/hscript/Tools/) | class |  |
| [TypeDecl](/api-docs/unity/hscript/TypeDecl/) | typedef |  |
| [VarDecl](/api-docs/unity/hscript/VarDecl/) | typedef |  |
| [Stop](/api-docs/unity/hscript/_Interp/Stop/) | enum |  |

## Fuzzaldrin

| Type | Kind | Description |
|------|------|-------------|
| [Filter](/api-docs/unity/fuzzaldrin/Filter/) | class |  |
| [Fuzzaldrin](/api-docs/unity/fuzzaldrin/Fuzzaldrin/) | class |  |
| [Matcher](/api-docs/unity/fuzzaldrin/Matcher/) | class |  |
| [Scorer](/api-docs/unity/fuzzaldrin/Scorer/) | class |  |

## Polyline

| Type | Kind | Description |
|------|------|-------------|
| [Extensions](/api-docs/unity/polyline/Extensions/) | class |  |
| [MiterUtils](/api-docs/unity/polyline/MiterUtils/) | class |  |
| [Stroke](/api-docs/unity/polyline/Stroke/) | class |  |
| [StrokeCap](/api-docs/unity/polyline/StrokeCap/) | enum |  |
| [StrokeJoin](/api-docs/unity/polyline/StrokeJoin/) | enum |  |

## Spec

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/unity/spec/Audio/) | interface | Backend interface for audio operations. |
| [Backend](/api-docs/unity/spec/Backend/) | interface | Main backend interface that provides access to all platform-specific functionality. |
| [Binaries](/api-docs/unity/spec/Binaries/) | interface | Backend interface for binary data loading operations. |
| [Clipboard](/api-docs/unity/spec/Clipboard/) | interface | Backend interface for system clipboard operations. |
| [Input](/api-docs/unity/spec/Input/) | interface | Backend interface for input handling. |
| [IO](/api-docs/unity/spec/IO/) | interface | Backend interface for file input/output operations. |
| [Shaders](/api-docs/unity/spec/Shaders/) | interface | Backend interface for GPU shader program management. |
| [TextInput](/api-docs/unity/spec/TextInput/) | interface | Backend interface for system text input handling. |
| [Texts](/api-docs/unity/spec/Texts/) | interface | Backend interface for text file loading operations. |
| [Textures](/api-docs/unity/spec/Textures/) | interface | Backend interface for texture (image) management and GPU operations. |

## Other

| Type | Kind | Description |
|------|------|-------------|
| [AllAssets](/api-docs/unity/assets/AllAssets/) | class |  |
| [Action_1](/api-docs/unity/cs/system/Action_1/) | abstract |  |
| [ActivationContext](/api-docs/unity/cs/system/ActivationContext/) | class |  |
| [ActivationContext_ContextForm](/api-docs/unity/cs/system/ActivationContext_ContextForm/) | enum |  |
| [Activator](/api-docs/unity/cs/system/Activator/) | class |  |
| [AppDomain](/api-docs/unity/cs/system/AppDomain/) | class |  |
| [AppDomain_Initializer](/api-docs/unity/cs/system/AppDomain_Initializer/) | class |  |
| [AppDomain_Loader](/api-docs/unity/cs/system/AppDomain_Loader/) | class |  |
| [AppDomainInitializer](/api-docs/unity/cs/system/AppDomainInitializer/) | abstract |  |
| [AppDomainManager](/api-docs/unity/cs/system/AppDomainManager/) | class |  |
| [AppDomainManagerInitializationOptions](/api-docs/unity/cs/system/AppDomainManagerInitializationOptions/) | enum |  |
| [AppDomainSetup](/api-docs/unity/cs/system/AppDomainSetup/) | class |  |
| [ApplicationException](/api-docs/unity/cs/system/ApplicationException/) | class |  |
| [ApplicationIdentity](/api-docs/unity/cs/system/ApplicationIdentity/) | class |  |
| [ArgumentException](/api-docs/unity/cs/system/ArgumentException/) | class |  |
| [Array](/api-docs/unity/cs/system/Array/) | class |  |
| [Array_Delegate_Swapper](/api-docs/unity/cs/system/Array_Delegate_Swapper/) | class |  |
| [Array_InternalEnumerator_1](/api-docs/unity/cs/system/Array_InternalEnumerator_1/) | class |  |
| [Array_SimpleEnumerator](/api-docs/unity/cs/system/Array_SimpleEnumerator/) | class |  |
| [Array_Swapper](/api-docs/unity/cs/system/Array_Swapper/) | abstract |  |
| [AssemblyLoadEventArgs](/api-docs/unity/cs/system/AssemblyLoadEventArgs/) | class |  |
| [AssemblyLoadEventHandler](/api-docs/unity/cs/system/AssemblyLoadEventHandler/) | abstract |  |
| [AsyncCallback](/api-docs/unity/cs/system/AsyncCallback/) | abstract |  |
| [Attribute](/api-docs/unity/cs/system/Attribute/) | class |  |
| [Base64FormattingOptions](/api-docs/unity/cs/system/Base64FormattingOptions/) | enum |  |
| [BitConverter](/api-docs/unity/cs/system/BitConverter/) | class |  |
| [Byte](/api-docs/unity/cs/system/Byte/) | class |  |
| [Char](/api-docs/unity/cs/system/Char/) | class |  |
| [CharEnumerator](/api-docs/unity/cs/system/CharEnumerator/) | class |  |
| [ArrayList](/api-docs/unity/cs/system/collections/ArrayList/) | class |  |
| [ArrayList_ArrayListAdapter](/api-docs/unity/cs/system/collections/ArrayList_ArrayListAdapter/) | class |  |
| [ArrayList_ArrayListAdapter_EnumeratorWithRange](/api-docs/unity/cs/system/collections/ArrayList_ArrayListAdapter_EnumeratorWithRange/) | class |  |
| [ArrayList_ArrayListEnumerator](/api-docs/unity/cs/system/collections/ArrayList_ArrayListEnumerator/) | class |  |
| [ArrayList_ArrayListWrapper](/api-docs/unity/cs/system/collections/ArrayList_ArrayListWrapper/) | class |  |
| [ArrayList_FixedSizeArrayListWrapper](/api-docs/unity/cs/system/collections/ArrayList_FixedSizeArrayListWrapper/) | class |  |
| [ArrayList_FixedSizeListWrapper](/api-docs/unity/cs/system/collections/ArrayList_FixedSizeListWrapper/) | class |  |
| [ArrayList_ListWrapper](/api-docs/unity/cs/system/collections/ArrayList_ListWrapper/) | class |  |
| [ArrayList_RangedArrayList](/api-docs/unity/cs/system/collections/ArrayList_RangedArrayList/) | class |  |
| [ArrayList_ReadOnlyArrayListWrapper](/api-docs/unity/cs/system/collections/ArrayList_ReadOnlyArrayListWrapper/) | class |  |
| [ArrayList_ReadOnlyListWrapper](/api-docs/unity/cs/system/collections/ArrayList_ReadOnlyListWrapper/) | class |  |
| [ArrayList_SimpleEnumerator](/api-docs/unity/cs/system/collections/ArrayList_SimpleEnumerator/) | class |  |
| [ArrayList_SynchronizedArrayListWrapper](/api-docs/unity/cs/system/collections/ArrayList_SynchronizedArrayListWrapper/) | class |  |
| [ArrayList_SynchronizedListWrapper](/api-docs/unity/cs/system/collections/ArrayList_SynchronizedListWrapper/) | class |  |
| [DictionaryEntry](/api-docs/unity/cs/system/collections/DictionaryEntry/) | class |  |
| [ICollection_1](/api-docs/unity/cs/system/collections/generic/ICollection_1/) | interface |  |
| [IComparer_1](/api-docs/unity/cs/system/collections/generic/IComparer_1/) | interface |  |
| [IEnumerable_1](/api-docs/unity/cs/system/collections/generic/IEnumerable_1/) | interface |  |
| [IEnumerator_1](/api-docs/unity/cs/system/collections/generic/IEnumerator_1/) | interface |  |
| [IList_1](/api-docs/unity/cs/system/collections/generic/IList_1/) | interface |  |
| [Hashtable](/api-docs/unity/cs/system/collections/Hashtable/) | class |  |
| [Hashtable_Enumerator](/api-docs/unity/cs/system/collections/Hashtable_Enumerator/) | class |  |
| [Hashtable_EnumeratorMode](/api-docs/unity/cs/system/collections/Hashtable_EnumeratorMode/) | enum |  |
| [Hashtable_HashKeys](/api-docs/unity/cs/system/collections/Hashtable_HashKeys/) | class |  |
| [Hashtable_HashValues](/api-docs/unity/cs/system/collections/Hashtable_HashValues/) | class |  |
| [Hashtable_KeyMarker](/api-docs/unity/cs/system/collections/Hashtable_KeyMarker/) | class |  |
| [Hashtable_Slot](/api-docs/unity/cs/system/collections/Hashtable_Slot/) | class |  |
| [Hashtable_SyncHashtable](/api-docs/unity/cs/system/collections/Hashtable_SyncHashtable/) | class |  |
| [ICollection](/api-docs/unity/cs/system/collections/ICollection/) | interface |  |
| [IComparer](/api-docs/unity/cs/system/collections/IComparer/) | interface |  |
| [IDictionary](/api-docs/unity/cs/system/collections/IDictionary/) | interface |  |
| [IDictionaryEnumerator](/api-docs/unity/cs/system/collections/IDictionaryEnumerator/) | interface |  |
| [IEnumerable](/api-docs/unity/cs/system/collections/IEnumerable/) | interface |  |
| [IEnumerator](/api-docs/unity/cs/system/collections/IEnumerator/) | interface |  |
| [IEqualityComparer](/api-docs/unity/cs/system/collections/IEqualityComparer/) | interface |  |
| [IHashCodeProvider](/api-docs/unity/cs/system/collections/IHashCodeProvider/) | interface |  |
| [IList](/api-docs/unity/cs/system/collections/IList/) | interface |  |
| [ReadOnlyCollection_1](/api-docs/unity/cs/system/collections/objectmodel/ReadOnlyCollection_1/) | class |  |
| [ReadOnlyCollectionBase](/api-docs/unity/cs/system/collections/ReadOnlyCollectionBase/) | class |  |
| [StringDictionary](/api-docs/unity/cs/system/collections/specialized/StringDictionary/) | class |  |
| [Comparison_1](/api-docs/unity/cs/system/Comparison_1/) | abstract |  |
| [Component](/api-docs/unity/cs/system/componentmodel/Component/) | class |  |
| [ComponentCollection](/api-docs/unity/cs/system/componentmodel/ComponentCollection/) | class |  |
| [EventHandlerList](/api-docs/unity/cs/system/componentmodel/EventHandlerList/) | class |  |
| [IComponent](/api-docs/unity/cs/system/componentmodel/IComponent/) | interface |  |
| [IContainer](/api-docs/unity/cs/system/componentmodel/IContainer/) | interface |  |
| [ISite](/api-docs/unity/cs/system/componentmodel/ISite/) | interface |  |
| [ISynchronizeInvoke](/api-docs/unity/cs/system/componentmodel/ISynchronizeInvoke/) | interface |  |
| [AssemblyHashAlgorithm](/api-docs/unity/cs/system/configuration/assemblies/AssemblyHashAlgorithm/) | enum |  |
| [AssemblyVersionCompatibility](/api-docs/unity/cs/system/configuration/assemblies/AssemblyVersionCompatibility/) | enum |  |
| [Console](/api-docs/unity/cs/system/Console/) | class |  |
| [Console_Delegate_InternalCancelHandler](/api-docs/unity/cs/system/Console_Delegate_InternalCancelHandler/) | class |  |
| [Console_InternalCancelHandler](/api-docs/unity/cs/system/Console_InternalCancelHandler/) | abstract |  |
| [Console_WindowsConsole](/api-docs/unity/cs/system/Console_WindowsConsole/) | class |  |
| [Console_WindowsConsole_Delegate_WindowsCancelHandler](/api-docs/unity/cs/system/Console_WindowsConsole_Delegate_WindowsCancelHandler/) | class |  |
| [Console_WindowsConsole_WindowsCancelHandler](/api-docs/unity/cs/system/Console_WindowsConsole_WindowsCancelHandler/) | abstract |  |
| [ConsoleCancelEventArgs](/api-docs/unity/cs/system/ConsoleCancelEventArgs/) | class |  |
| [ConsoleCancelEventHandler](/api-docs/unity/cs/system/ConsoleCancelEventHandler/) | abstract |  |
| [ConsoleColor](/api-docs/unity/cs/system/ConsoleColor/) | enum |  |
| [ConsoleKey](/api-docs/unity/cs/system/ConsoleKey/) | enum |  |
| [ConsoleKeyInfo](/api-docs/unity/cs/system/ConsoleKeyInfo/) | class |  |
| [ConsoleModifiers](/api-docs/unity/cs/system/ConsoleModifiers/) | enum |  |
| [ConsoleSpecialKey](/api-docs/unity/cs/system/ConsoleSpecialKey/) | enum |  |
| [ContextBoundObject](/api-docs/unity/cs/system/ContextBoundObject/) | class |  |
| [Convert](/api-docs/unity/cs/system/Convert/) | class |  |
| [Converter_2](/api-docs/unity/cs/system/Converter_2/) | abstract |  |
| [CrossAppDomainDelegate](/api-docs/unity/cs/system/CrossAppDomainDelegate/) | abstract |  |
| [DateTime](/api-docs/unity/cs/system/DateTime/) | class |  |
| [DateTime_Which](/api-docs/unity/cs/system/DateTime_Which/) | enum |  |
| [DateTimeKind](/api-docs/unity/cs/system/DateTimeKind/) | enum |  |
| [DayOfWeek](/api-docs/unity/cs/system/DayOfWeek/) | enum |  |
| [Decimal](/api-docs/unity/cs/system/Decimal/) | class |  |
| [Delegate](/api-docs/unity/cs/system/Delegate/) | class |  |
| [Delegate_Action_1](/api-docs/unity/cs/system/Delegate_Action_1/) | class |  |
| [Delegate_AppDomainInitializer](/api-docs/unity/cs/system/Delegate_AppDomainInitializer/) | class |  |
| [Delegate_AssemblyLoadEventHandler](/api-docs/unity/cs/system/Delegate_AssemblyLoadEventHandler/) | class |  |
| [Delegate_AsyncCallback](/api-docs/unity/cs/system/Delegate_AsyncCallback/) | class |  |
| [Delegate_Comparison_1](/api-docs/unity/cs/system/Delegate_Comparison_1/) | class |  |
| [Delegate_ConsoleCancelEventHandler](/api-docs/unity/cs/system/Delegate_ConsoleCancelEventHandler/) | class |  |
| [Delegate_Converter_2](/api-docs/unity/cs/system/Delegate_Converter_2/) | class |  |
| [Delegate_CrossAppDomainDelegate](/api-docs/unity/cs/system/Delegate_CrossAppDomainDelegate/) | class |  |
| [Delegate_EventHandler](/api-docs/unity/cs/system/Delegate_EventHandler/) | class |  |
| [Delegate_Predicate_1](/api-docs/unity/cs/system/Delegate_Predicate_1/) | class |  |
| [Delegate_ResolveEventHandler](/api-docs/unity/cs/system/Delegate_ResolveEventHandler/) | class |  |
| [Delegate_UnhandledExceptionEventHandler](/api-docs/unity/cs/system/Delegate_UnhandledExceptionEventHandler/) | class |  |
| [DataReceivedEventArgs](/api-docs/unity/cs/system/diagnostics/DataReceivedEventArgs/) | class |  |
| [DataReceivedEventHandler](/api-docs/unity/cs/system/diagnostics/DataReceivedEventHandler/) | abstract |  |
| [Delegate_DataReceivedEventHandler](/api-docs/unity/cs/system/diagnostics/Delegate_DataReceivedEventHandler/) | class |  |
| [FileVersionInfo](/api-docs/unity/cs/system/diagnostics/FileVersionInfo/) | class |  |
| [Process](/api-docs/unity/cs/system/diagnostics/Process/) | class |  |
| [Process_AsyncModes](/api-docs/unity/cs/system/diagnostics/Process_AsyncModes/) | enum |  |
| [Process_AsyncReadHandler](/api-docs/unity/cs/system/diagnostics/Process_AsyncReadHandler/) | abstract |  |
| [Process_Delegate_AsyncReadHandler](/api-docs/unity/cs/system/diagnostics/Process_Delegate_AsyncReadHandler/) | class |  |
| [Process_ProcessAsyncReader](/api-docs/unity/cs/system/diagnostics/Process_ProcessAsyncReader/) | class |  |
| [Process_ProcessWaitHandle](/api-docs/unity/cs/system/diagnostics/Process_ProcessWaitHandle/) | class |  |
| [Process_ProcInfo](/api-docs/unity/cs/system/diagnostics/Process_ProcInfo/) | class |  |
| [ProcessModule](/api-docs/unity/cs/system/diagnostics/ProcessModule/) | class |  |
| [ProcessModuleCollection](/api-docs/unity/cs/system/diagnostics/ProcessModuleCollection/) | class |  |
| [ProcessPriorityClass](/api-docs/unity/cs/system/diagnostics/ProcessPriorityClass/) | enum |  |
| [ProcessStartInfo](/api-docs/unity/cs/system/diagnostics/ProcessStartInfo/) | class |  |
| [ProcessThread](/api-docs/unity/cs/system/diagnostics/ProcessThread/) | class |  |
| [ProcessThreadCollection](/api-docs/unity/cs/system/diagnostics/ProcessThreadCollection/) | class |  |
| [ProcessWindowStyle](/api-docs/unity/cs/system/diagnostics/ProcessWindowStyle/) | enum |  |
| [StackFrame](/api-docs/unity/cs/system/diagnostics/StackFrame/) | class |  |
| [StackTrace](/api-docs/unity/cs/system/diagnostics/StackTrace/) | class |  |
| [ISymbolDocumentWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolDocumentWriter/) | interface |  |
| [ISymbolWriter](/api-docs/unity/cs/system/diagnostics/symbolstore/ISymbolWriter/) | interface |  |
| [SymAddressKind](/api-docs/unity/cs/system/diagnostics/symbolstore/SymAddressKind/) | enum |  |
| [SymbolToken](/api-docs/unity/cs/system/diagnostics/symbolstore/SymbolToken/) | class |  |
| [ThreadPriorityLevel](/api-docs/unity/cs/system/diagnostics/ThreadPriorityLevel/) | enum |  |
| [ThreadState](/api-docs/unity/cs/system/diagnostics/ThreadState/) | enum |  |
| [ThreadWaitReason](/api-docs/unity/cs/system/diagnostics/ThreadWaitReason/) | enum |  |
| [Double](/api-docs/unity/cs/system/Double/) | class |  |
| [Enum](/api-docs/unity/cs/system/Enum/) | class |  |
| [Environment](/api-docs/unity/cs/system/Environment/) | class |  |
| [Environment_SpecialFolder](/api-docs/unity/cs/system/Environment_SpecialFolder/) | enum |  |
| [Environment_SpecialFolderOption](/api-docs/unity/cs/system/Environment_SpecialFolderOption/) | enum |  |
| [EnvironmentVariableTarget](/api-docs/unity/cs/system/EnvironmentVariableTarget/) | enum |  |
| [EventArgs](/api-docs/unity/cs/system/EventArgs/) | class |  |
| [EventHandler](/api-docs/unity/cs/system/EventHandler/) | abstract |  |
| [Exception](/api-docs/unity/cs/system/Exception/) | class |  |
| [Calendar](/api-docs/unity/cs/system/globalization/Calendar/) | class |  |
| [CalendarAlgorithmType](/api-docs/unity/cs/system/globalization/CalendarAlgorithmType/) | enum |  |
| [CalendarWeekRule](/api-docs/unity/cs/system/globalization/CalendarWeekRule/) | enum |  |
| [CompareInfo](/api-docs/unity/cs/system/globalization/CompareInfo/) | class |  |
| [CompareOptions](/api-docs/unity/cs/system/globalization/CompareOptions/) | enum |  |
| [CultureInfo](/api-docs/unity/cs/system/globalization/CultureInfo/) | class |  |
| [CultureTypes](/api-docs/unity/cs/system/globalization/CultureTypes/) | enum |  |
| [DateTimeFormatInfo](/api-docs/unity/cs/system/globalization/DateTimeFormatInfo/) | class |  |
| [DateTimeStyles](/api-docs/unity/cs/system/globalization/DateTimeStyles/) | enum |  |
| [DaylightTime](/api-docs/unity/cs/system/globalization/DaylightTime/) | class |  |
| [DigitShapes](/api-docs/unity/cs/system/globalization/DigitShapes/) | enum |  |
| [NumberFormatInfo](/api-docs/unity/cs/system/globalization/NumberFormatInfo/) | class |  |
| [NumberStyles](/api-docs/unity/cs/system/globalization/NumberStyles/) | enum |  |
| [SortKey](/api-docs/unity/cs/system/globalization/SortKey/) | class |  |
| [TextInfo](/api-docs/unity/cs/system/globalization/TextInfo/) | class |  |
| [TextInfo_Data](/api-docs/unity/cs/system/globalization/TextInfo_Data/) | class |  |
| [UnicodeCategory](/api-docs/unity/cs/system/globalization/UnicodeCategory/) | enum |  |
| [Guid](/api-docs/unity/cs/system/Guid/) | class |  |
| [Guid_Format](/api-docs/unity/cs/system/Guid_Format/) | enum |  |
| [Guid_GuidParser](/api-docs/unity/cs/system/Guid_GuidParser/) | class |  |
| [IAppDomainSetup](/api-docs/unity/cs/system/IAppDomainSetup/) | interface |  |
| [IAsyncResult](/api-docs/unity/cs/system/IAsyncResult/) | interface |  |
| [ICloneable](/api-docs/unity/cs/system/ICloneable/) | interface |  |
| [IComparable](/api-docs/unity/cs/system/IComparable/) | interface |  |
| [IComparable_1](/api-docs/unity/cs/system/IComparable_1/) | interface |  |
| [IConvertible](/api-docs/unity/cs/system/IConvertible/) | interface |  |
| [IDisposable](/api-docs/unity/cs/system/IDisposable/) | interface |  |
| [IEquatable_1](/api-docs/unity/cs/system/IEquatable_1/) | interface |  |
| [IFormatProvider](/api-docs/unity/cs/system/IFormatProvider/) | interface |  |
| [IFormattable](/api-docs/unity/cs/system/IFormattable/) | interface |  |
| [Int32](/api-docs/unity/cs/system/Int32/) | class |  |
| [Int64](/api-docs/unity/cs/system/Int64/) | class |  |
| [IntPtr](/api-docs/unity/cs/system/IntPtr/) | class |  |
| [Directory](/api-docs/unity/cs/system/io/Directory/) | class |  |
| [DirectoryInfo](/api-docs/unity/cs/system/io/DirectoryInfo/) | class |  |
| [File](/api-docs/unity/cs/system/io/File/) | class |  |
| [FileAccess](/api-docs/unity/cs/system/io/FileAccess/) | enum |  |
| [FileAttributes](/api-docs/unity/cs/system/io/FileAttributes/) | enum |  |
| [FileInfo](/api-docs/unity/cs/system/io/FileInfo/) | class |  |
| [FileMode](/api-docs/unity/cs/system/io/FileMode/) | enum |  |
| [FileOptions](/api-docs/unity/cs/system/io/FileOptions/) | enum |  |
| [FileShare](/api-docs/unity/cs/system/io/FileShare/) | enum |  |
| [FileStream](/api-docs/unity/cs/system/io/FileStream/) | class |  |
| [FileStream_Delegate_ReadDelegate](/api-docs/unity/cs/system/io/FileStream_Delegate_ReadDelegate/) | class |  |
| [FileStream_Delegate_WriteDelegate](/api-docs/unity/cs/system/io/FileStream_Delegate_WriteDelegate/) | class |  |
| [FileStream_ReadDelegate](/api-docs/unity/cs/system/io/FileStream_ReadDelegate/) | abstract |  |
| [FileStream_WriteDelegate](/api-docs/unity/cs/system/io/FileStream_WriteDelegate/) | abstract |  |
| [FileSystemInfo](/api-docs/unity/cs/system/io/FileSystemInfo/) | class |  |
| [MemoryStream](/api-docs/unity/cs/system/io/MemoryStream/) | class |  |
| [SearchOption](/api-docs/unity/cs/system/io/SearchOption/) | enum |  |
| [SeekOrigin](/api-docs/unity/cs/system/io/SeekOrigin/) | enum |  |
| [Stream](/api-docs/unity/cs/system/io/Stream/) | class |  |
| [StreamReader](/api-docs/unity/cs/system/io/StreamReader/) | class |  |
| [StreamReader_NullStreamReader](/api-docs/unity/cs/system/io/StreamReader_NullStreamReader/) | class |  |
| [StreamWriter](/api-docs/unity/cs/system/io/StreamWriter/) | class |  |
| [TextReader](/api-docs/unity/cs/system/io/TextReader/) | class |  |
| [TextReader_NullTextReader](/api-docs/unity/cs/system/io/TextReader_NullTextReader/) | class |  |
| [TextWriter](/api-docs/unity/cs/system/io/TextWriter/) | class |  |
| [TextWriter_NullTextWriter](/api-docs/unity/cs/system/io/TextWriter_NullTextWriter/) | class |  |
| [IServiceProvider](/api-docs/unity/cs/system/IServiceProvider/) | interface |  |
| [LoaderOptimization](/api-docs/unity/cs/system/LoaderOptimization/) | enum |  |
| [LocalDataStoreSlot](/api-docs/unity/cs/system/LocalDataStoreSlot/) | class |  |
| [MarshalByRefObject](/api-docs/unity/cs/system/MarshalByRefObject/) | class |  |
| [Math](/api-docs/unity/cs/system/Math/) | class |  |
| [MemberAccessException](/api-docs/unity/cs/system/MemberAccessException/) | class |  |
| [MidpointRounding](/api-docs/unity/cs/system/MidpointRounding/) | enum |  |
| [MissingMemberException](/api-docs/unity/cs/system/MissingMemberException/) | class |  |
| [ModuleHandle](/api-docs/unity/cs/system/ModuleHandle/) | class |  |
| [MulticastDelegate](/api-docs/unity/cs/system/MulticastDelegate/) | class |  |
| [NullReferenceException](/api-docs/unity/cs/system/NullReferenceException/) | class |  |
| [Object](/api-docs/unity/cs/system/Object/) | class |  |
| [OperatingSystem](/api-docs/unity/cs/system/OperatingSystem/) | class |  |
| [PlatformID](/api-docs/unity/cs/system/PlatformID/) | enum |  |
| [Predicate_1](/api-docs/unity/cs/system/Predicate_1/) | abstract |  |
| [Random](/api-docs/unity/cs/system/Random/) | class |  |
| [Assembly](/api-docs/unity/cs/system/reflection/Assembly/) | class |  |
| [Assembly_ResolveEventHolder](/api-docs/unity/cs/system/reflection/Assembly_ResolveEventHolder/) | class |  |
| [Assembly_ResourceCloseHandler](/api-docs/unity/cs/system/reflection/Assembly_ResourceCloseHandler/) | class |  |
| [AssemblyName](/api-docs/unity/cs/system/reflection/AssemblyName/) | class |  |
| [AssemblyNameFlags](/api-docs/unity/cs/system/reflection/AssemblyNameFlags/) | enum |  |
| [Binder](/api-docs/unity/cs/system/reflection/Binder/) | class |  |
| [Binder_Default](/api-docs/unity/cs/system/reflection/Binder_Default/) | class |  |
| [BindingFlags](/api-docs/unity/cs/system/reflection/BindingFlags/) | enum |  |
| [CallingConventions](/api-docs/unity/cs/system/reflection/CallingConventions/) | enum |  |
| [ConstructorInfo](/api-docs/unity/cs/system/reflection/ConstructorInfo/) | class |  |
| [Delegate_MemberFilter](/api-docs/unity/cs/system/reflection/Delegate_MemberFilter/) | class |  |
| [Delegate_ModuleResolveEventHandler](/api-docs/unity/cs/system/reflection/Delegate_ModuleResolveEventHandler/) | class |  |
| [Delegate_TypeFilter](/api-docs/unity/cs/system/reflection/Delegate_TypeFilter/) | class |  |
| [AssemblyBuilder](/api-docs/unity/cs/system/reflection/emit/AssemblyBuilder/) | class |  |
| [AssemblyBuilderAccess](/api-docs/unity/cs/system/reflection/emit/AssemblyBuilderAccess/) | enum |  |
| [ConstructorBuilder](/api-docs/unity/cs/system/reflection/emit/ConstructorBuilder/) | class |  |
| [CustomAttributeBuilder](/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder/) | class |  |
| [CustomAttributeBuilder_CustomAttributeInfo](/api-docs/unity/cs/system/reflection/emit/CustomAttributeBuilder_CustomAttributeInfo/) | class |  |
| [EnumBuilder](/api-docs/unity/cs/system/reflection/emit/EnumBuilder/) | class |  |
| [EventBuilder](/api-docs/unity/cs/system/reflection/emit/EventBuilder/) | class |  |
| [EventToken](/api-docs/unity/cs/system/reflection/emit/EventToken/) | class |  |
| [FieldBuilder](/api-docs/unity/cs/system/reflection/emit/FieldBuilder/) | class |  |
| [FieldToken](/api-docs/unity/cs/system/reflection/emit/FieldToken/) | class |  |
| [FlowControl](/api-docs/unity/cs/system/reflection/emit/FlowControl/) | enum |  |
| [GenericTypeParameterBuilder](/api-docs/unity/cs/system/reflection/emit/GenericTypeParameterBuilder/) | class |  |
| [ILGenerator](/api-docs/unity/cs/system/reflection/emit/ILGenerator/) | class |  |
| [ILGenerator_LabelData](/api-docs/unity/cs/system/reflection/emit/ILGenerator_LabelData/) | class |  |
| [ILGenerator_LabelFixup](/api-docs/unity/cs/system/reflection/emit/ILGenerator_LabelFixup/) | class |  |
| [Label](/api-docs/unity/cs/system/reflection/emit/Label/) | class |  |
| [LocalBuilder](/api-docs/unity/cs/system/reflection/emit/LocalBuilder/) | class |  |
| [MethodBuilder](/api-docs/unity/cs/system/reflection/emit/MethodBuilder/) | class |  |
| [MethodToken](/api-docs/unity/cs/system/reflection/emit/MethodToken/) | class |  |
| [ModuleBuilder](/api-docs/unity/cs/system/reflection/emit/ModuleBuilder/) | class |  |
| [OpCode](/api-docs/unity/cs/system/reflection/emit/OpCode/) | class |  |
| [OpCodeType](/api-docs/unity/cs/system/reflection/emit/OpCodeType/) | enum |  |
| [OperandType](/api-docs/unity/cs/system/reflection/emit/OperandType/) | enum |  |
| [PackingSize](/api-docs/unity/cs/system/reflection/emit/PackingSize/) | enum |  |
| [ParameterBuilder](/api-docs/unity/cs/system/reflection/emit/ParameterBuilder/) | class |  |
| [ParameterToken](/api-docs/unity/cs/system/reflection/emit/ParameterToken/) | class |  |
| [PEFileKinds](/api-docs/unity/cs/system/reflection/emit/PEFileKinds/) | enum |  |
| [PropertyBuilder](/api-docs/unity/cs/system/reflection/emit/PropertyBuilder/) | class |  |
| [PropertyToken](/api-docs/unity/cs/system/reflection/emit/PropertyToken/) | class |  |
| [SignatureHelper](/api-docs/unity/cs/system/reflection/emit/SignatureHelper/) | class |  |
| [SignatureHelper_SignatureHelperType](/api-docs/unity/cs/system/reflection/emit/SignatureHelper_SignatureHelperType/) | enum |  |
| [SignatureToken](/api-docs/unity/cs/system/reflection/emit/SignatureToken/) | class |  |
| [StackBehaviour](/api-docs/unity/cs/system/reflection/emit/StackBehaviour/) | enum |  |
| [StringToken](/api-docs/unity/cs/system/reflection/emit/StringToken/) | class |  |
| [TypeBuilder](/api-docs/unity/cs/system/reflection/emit/TypeBuilder/) | class |  |
| [TypeToken](/api-docs/unity/cs/system/reflection/emit/TypeToken/) | class |  |
| [UnmanagedMarshal](/api-docs/unity/cs/system/reflection/emit/UnmanagedMarshal/) | class |  |
| [EventAttributes](/api-docs/unity/cs/system/reflection/EventAttributes/) | enum |  |
| [EventInfo](/api-docs/unity/cs/system/reflection/EventInfo/) | class |  |
| [EventInfo_AddEvent_2](/api-docs/unity/cs/system/reflection/EventInfo_AddEvent_2/) | abstract |  |
| [EventInfo_AddEventAdapter](/api-docs/unity/cs/system/reflection/EventInfo_AddEventAdapter/) | abstract |  |
| [EventInfo_Delegate_AddEvent_2](/api-docs/unity/cs/system/reflection/EventInfo_Delegate_AddEvent_2/) | class |  |
| [EventInfo_Delegate_AddEventAdapter](/api-docs/unity/cs/system/reflection/EventInfo_Delegate_AddEventAdapter/) | class |  |
| [EventInfo_Delegate_StaticAddEvent_1](/api-docs/unity/cs/system/reflection/EventInfo_Delegate_StaticAddEvent_1/) | class |  |
| [EventInfo_StaticAddEvent_1](/api-docs/unity/cs/system/reflection/EventInfo_StaticAddEvent_1/) | abstract |  |
| [ExceptionHandlingClause](/api-docs/unity/cs/system/reflection/ExceptionHandlingClause/) | class |  |
| [ExceptionHandlingClauseOptions](/api-docs/unity/cs/system/reflection/ExceptionHandlingClauseOptions/) | enum |  |
| [FieldAttributes](/api-docs/unity/cs/system/reflection/FieldAttributes/) | enum |  |
| [FieldInfo](/api-docs/unity/cs/system/reflection/FieldInfo/) | class |  |
| [GenericParameterAttributes](/api-docs/unity/cs/system/reflection/GenericParameterAttributes/) | enum |  |
| [ICustomAttributeProvider](/api-docs/unity/cs/system/reflection/ICustomAttributeProvider/) | interface |  |
| [ImageFileMachine](/api-docs/unity/cs/system/reflection/ImageFileMachine/) | enum |  |
| [InterfaceMapping](/api-docs/unity/cs/system/reflection/InterfaceMapping/) | class |  |
| [IReflect](/api-docs/unity/cs/system/reflection/IReflect/) | interface |  |
| [LocalVariableInfo](/api-docs/unity/cs/system/reflection/LocalVariableInfo/) | class |  |
| [ManifestResourceInfo](/api-docs/unity/cs/system/reflection/ManifestResourceInfo/) | class |  |
| [MemberFilter](/api-docs/unity/cs/system/reflection/MemberFilter/) | abstract |  |
| [MemberInfo](/api-docs/unity/cs/system/reflection/MemberInfo/) | class |  |
| [MemberTypes](/api-docs/unity/cs/system/reflection/MemberTypes/) | enum |  |
| [MethodAttributes](/api-docs/unity/cs/system/reflection/MethodAttributes/) | enum |  |
| [MethodBase](/api-docs/unity/cs/system/reflection/MethodBase/) | class |  |
| [MethodBody](/api-docs/unity/cs/system/reflection/MethodBody/) | class |  |
| [MethodImplAttributes](/api-docs/unity/cs/system/reflection/MethodImplAttributes/) | enum |  |
| [MethodInfo](/api-docs/unity/cs/system/reflection/MethodInfo/) | class |  |
| [Module](/api-docs/unity/cs/system/reflection/Module/) | class |  |
| [ModuleResolveEventHandler](/api-docs/unity/cs/system/reflection/ModuleResolveEventHandler/) | abstract |  |
| [ParameterAttributes](/api-docs/unity/cs/system/reflection/ParameterAttributes/) | enum |  |
| [ParameterInfo](/api-docs/unity/cs/system/reflection/ParameterInfo/) | class |  |
| [ParameterModifier](/api-docs/unity/cs/system/reflection/ParameterModifier/) | class |  |
| [PortableExecutableKinds](/api-docs/unity/cs/system/reflection/PortableExecutableKinds/) | enum |  |
| [ProcessorArchitecture](/api-docs/unity/cs/system/reflection/ProcessorArchitecture/) | enum |  |
| [PropertyAttributes](/api-docs/unity/cs/system/reflection/PropertyAttributes/) | enum |  |
| [PropertyInfo](/api-docs/unity/cs/system/reflection/PropertyInfo/) | class |  |
| [ResourceAttributes](/api-docs/unity/cs/system/reflection/ResourceAttributes/) | enum |  |
| [ResourceLocation](/api-docs/unity/cs/system/reflection/ResourceLocation/) | enum |  |
| [StrongNameKeyPair](/api-docs/unity/cs/system/reflection/StrongNameKeyPair/) | class |  |
| [TargetInvocationException](/api-docs/unity/cs/system/reflection/TargetInvocationException/) | class |  |
| [TypeAttributes](/api-docs/unity/cs/system/reflection/TypeAttributes/) | enum |  |
| [TypeFilter](/api-docs/unity/cs/system/reflection/TypeFilter/) | abstract |  |
| [ResolveEventArgs](/api-docs/unity/cs/system/ResolveEventArgs/) | class |  |
| [ResolveEventHandler](/api-docs/unity/cs/system/ResolveEventHandler/) | abstract |  |
| [IResourceWriter](/api-docs/unity/cs/system/resources/IResourceWriter/) | interface |  |
| [CriticalFinalizerObject](/api-docs/unity/cs/system/runtime/constrainedexecution/CriticalFinalizerObject/) | class |  |
| [ActivationArguments](/api-docs/unity/cs/system/runtime/hosting/ActivationArguments/) | class |  |
| [ApplicationActivator](/api-docs/unity/cs/system/runtime/hosting/ApplicationActivator/) | class |  |
| [CallingConvention](/api-docs/unity/cs/system/runtime/interopservices/CallingConvention/) | enum |  |
| [CharSet](/api-docs/unity/cs/system/runtime/interopservices/CharSet/) | enum |  |
| [LayoutKind](/api-docs/unity/cs/system/runtime/interopservices/LayoutKind/) | enum |  |
| [SafeHandle](/api-docs/unity/cs/system/runtime/interopservices/SafeHandle/) | class |  |
| [StructLayoutAttribute](/api-docs/unity/cs/system/runtime/interopservices/StructLayoutAttribute/) | class |  |
| [UnmanagedType](/api-docs/unity/cs/system/runtime/interopservices/UnmanagedType/) | enum |  |
| [Context](/api-docs/unity/cs/system/runtime/remoting/contexts/Context/) | class |  |
| [Context_NamedSlots](/api-docs/unity/cs/system/runtime/remoting/contexts/Context_NamedSlots/) | class |  |
| [CrossContextDelegate](/api-docs/unity/cs/system/runtime/remoting/contexts/CrossContextDelegate/) | abstract |  |
| [Delegate_CrossContextDelegate](/api-docs/unity/cs/system/runtime/remoting/contexts/Delegate_CrossContextDelegate/) | class |  |
| [IContextProperty](/api-docs/unity/cs/system/runtime/remoting/contexts/IContextProperty/) | interface |  |
| [IDynamicProperty](/api-docs/unity/cs/system/runtime/remoting/contexts/IDynamicProperty/) | interface |  |
| [IChannelInfo](/api-docs/unity/cs/system/runtime/remoting/IChannelInfo/) | interface |  |
| [IEnvoyInfo](/api-docs/unity/cs/system/runtime/remoting/IEnvoyInfo/) | interface |  |
| [IObjectHandle](/api-docs/unity/cs/system/runtime/remoting/IObjectHandle/) | interface |  |
| [IRemotingTypeInfo](/api-docs/unity/cs/system/runtime/remoting/IRemotingTypeInfo/) | interface |  |
| [IMessage](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessage/) | interface |  |
| [IMessageCtrl](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessageCtrl/) | interface |  |
| [IMessageSink](/api-docs/unity/cs/system/runtime/remoting/messaging/IMessageSink/) | interface |  |
| [ObjectHandle](/api-docs/unity/cs/system/runtime/remoting/ObjectHandle/) | class |  |
| [ObjRef](/api-docs/unity/cs/system/runtime/remoting/ObjRef/) | class |  |
| [IDeserializationCallback](/api-docs/unity/cs/system/runtime/serialization/IDeserializationCallback/) | interface |  |
| [IFormatterConverter](/api-docs/unity/cs/system/runtime/serialization/IFormatterConverter/) | interface |  |
| [IObjectReference](/api-docs/unity/cs/system/runtime/serialization/IObjectReference/) | interface |  |
| [ISerializable](/api-docs/unity/cs/system/runtime/serialization/ISerializable/) | interface |  |
| [SerializationEntry](/api-docs/unity/cs/system/runtime/serialization/SerializationEntry/) | class |  |
| [SerializationInfo](/api-docs/unity/cs/system/runtime/serialization/SerializationInfo/) | class |  |
| [SerializationInfoEnumerator](/api-docs/unity/cs/system/runtime/serialization/SerializationInfoEnumerator/) | class |  |
| [StreamingContext](/api-docs/unity/cs/system/runtime/serialization/StreamingContext/) | class |  |
| [StreamingContextStates](/api-docs/unity/cs/system/runtime/serialization/StreamingContextStates/) | enum |  |
| [RuntimeFieldHandle](/api-docs/unity/cs/system/RuntimeFieldHandle/) | class |  |
| [RuntimeMethodHandle](/api-docs/unity/cs/system/RuntimeMethodHandle/) | class |  |
| [RuntimeTypeHandle](/api-docs/unity/cs/system/RuntimeTypeHandle/) | class |  |
| [AccessControlModification](/api-docs/unity/cs/system/security/accesscontrol/AccessControlModification/) | enum |  |
| [AccessControlSections](/api-docs/unity/cs/system/security/accesscontrol/AccessControlSections/) | enum |  |
| [AccessControlType](/api-docs/unity/cs/system/security/accesscontrol/AccessControlType/) | enum |  |
| [AccessRule](/api-docs/unity/cs/system/security/accesscontrol/AccessRule/) | class |  |
| [AuditFlags](/api-docs/unity/cs/system/security/accesscontrol/AuditFlags/) | enum |  |
| [AuditRule](/api-docs/unity/cs/system/security/accesscontrol/AuditRule/) | class |  |
| [AuthorizationRule](/api-docs/unity/cs/system/security/accesscontrol/AuthorizationRule/) | class |  |
| [AuthorizationRuleCollection](/api-docs/unity/cs/system/security/accesscontrol/AuthorizationRuleCollection/) | class |  |
| [CommonObjectSecurity](/api-docs/unity/cs/system/security/accesscontrol/CommonObjectSecurity/) | class |  |
| [DirectorySecurity](/api-docs/unity/cs/system/security/accesscontrol/DirectorySecurity/) | class |  |
| [EventWaitHandleAccessRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAccessRule/) | class |  |
| [EventWaitHandleAuditRule](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleAuditRule/) | class |  |
| [EventWaitHandleRights](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleRights/) | enum |  |
| [EventWaitHandleSecurity](/api-docs/unity/cs/system/security/accesscontrol/EventWaitHandleSecurity/) | class |  |
| [FileSecurity](/api-docs/unity/cs/system/security/accesscontrol/FileSecurity/) | class |  |
| [FileSystemAccessRule](/api-docs/unity/cs/system/security/accesscontrol/FileSystemAccessRule/) | class |  |
| [FileSystemAuditRule](/api-docs/unity/cs/system/security/accesscontrol/FileSystemAuditRule/) | class |  |
| [FileSystemRights](/api-docs/unity/cs/system/security/accesscontrol/FileSystemRights/) | enum |  |
| [FileSystemSecurity](/api-docs/unity/cs/system/security/accesscontrol/FileSystemSecurity/) | class |  |
| [InheritanceFlags](/api-docs/unity/cs/system/security/accesscontrol/InheritanceFlags/) | enum |  |
| [MutexAccessRule](/api-docs/unity/cs/system/security/accesscontrol/MutexAccessRule/) | class |  |
| [MutexAuditRule](/api-docs/unity/cs/system/security/accesscontrol/MutexAuditRule/) | class |  |
| [MutexRights](/api-docs/unity/cs/system/security/accesscontrol/MutexRights/) | enum |  |
| [MutexSecurity](/api-docs/unity/cs/system/security/accesscontrol/MutexSecurity/) | class |  |
| [NativeObjectSecurity](/api-docs/unity/cs/system/security/accesscontrol/NativeObjectSecurity/) | class |  |
| [NativeObjectSecurity_Delegate_ExceptionFromErrorCode](/api-docs/unity/cs/system/security/accesscontrol/NativeObjectSecurity_Delegate_ExceptionFromErrorCode/) | class |  |
| [NativeObjectSecurity_ExceptionFromErrorCode](/api-docs/unity/cs/system/security/accesscontrol/NativeObjectSecurity_ExceptionFromErrorCode/) | abstract |  |
| [ObjectSecurity](/api-docs/unity/cs/system/security/accesscontrol/ObjectSecurity/) | class |  |
| [PropagationFlags](/api-docs/unity/cs/system/security/accesscontrol/PropagationFlags/) | enum |  |
| [ResourceType](/api-docs/unity/cs/system/security/accesscontrol/ResourceType/) | enum |  |
| [X509Certificate](/api-docs/unity/cs/system/security/cryptography/x509certificates/X509Certificate/) | class |  |
| [X509Certificate_CertificateContext](/api-docs/unity/cs/system/security/cryptography/x509certificates/X509Certificate_CertificateContext/) | class |  |
| [X509ContentType](/api-docs/unity/cs/system/security/cryptography/x509certificates/X509ContentType/) | enum |  |
| [X509KeyStorageFlags](/api-docs/unity/cs/system/security/cryptography/x509certificates/X509KeyStorageFlags/) | enum |  |
| [HostSecurityManager](/api-docs/unity/cs/system/security/HostSecurityManager/) | class |  |
| [HostSecurityManagerOptions](/api-docs/unity/cs/system/security/HostSecurityManagerOptions/) | enum |  |
| [IEvidenceFactory](/api-docs/unity/cs/system/security/IEvidenceFactory/) | interface |  |
| [IPermission](/api-docs/unity/cs/system/security/IPermission/) | interface |  |
| [ISecurityEncodable](/api-docs/unity/cs/system/security/ISecurityEncodable/) | interface |  |
| [ISecurityPolicyEncodable](/api-docs/unity/cs/system/security/ISecurityPolicyEncodable/) | interface |  |
| [IStackWalk](/api-docs/unity/cs/system/security/IStackWalk/) | interface |  |
| [NamedPermissionSet](/api-docs/unity/cs/system/security/NamedPermissionSet/) | class |  |
| [PermissionState](/api-docs/unity/cs/system/security/permissions/PermissionState/) | enum |  |
| [SecurityAction](/api-docs/unity/cs/system/security/permissions/SecurityAction/) | enum |  |
| [StrongNamePublicKeyBlob](/api-docs/unity/cs/system/security/permissions/StrongNamePublicKeyBlob/) | class |  |
| [PermissionSet](/api-docs/unity/cs/system/security/PermissionSet/) | class |  |
| [ApplicationTrust](/api-docs/unity/cs/system/security/policy/ApplicationTrust/) | class |  |
| [CodeGroup](/api-docs/unity/cs/system/security/policy/CodeGroup/) | class |  |
| [Evidence](/api-docs/unity/cs/system/security/policy/Evidence/) | class |  |
| [Evidence_EvidenceEnumerator](/api-docs/unity/cs/system/security/policy/Evidence_EvidenceEnumerator/) | class |  |
| [IBuiltInEvidence](/api-docs/unity/cs/system/security/policy/IBuiltInEvidence/) | interface |  |
| [IConstantMembershipCondition](/api-docs/unity/cs/system/security/policy/IConstantMembershipCondition/) | interface |  |
| [IIdentityPermissionFactory](/api-docs/unity/cs/system/security/policy/IIdentityPermissionFactory/) | interface |  |
| [IMembershipCondition](/api-docs/unity/cs/system/security/policy/IMembershipCondition/) | interface |  |
| [PolicyLevel](/api-docs/unity/cs/system/security/policy/PolicyLevel/) | class |  |
| [PolicyStatement](/api-docs/unity/cs/system/security/policy/PolicyStatement/) | class |  |
| [PolicyStatementAttribute](/api-docs/unity/cs/system/security/policy/PolicyStatementAttribute/) | enum |  |
| [StrongName](/api-docs/unity/cs/system/security/policy/StrongName/) | class |  |
| [StrongNameMembershipCondition](/api-docs/unity/cs/system/security/policy/StrongNameMembershipCondition/) | class |  |
| [TrustManagerContext](/api-docs/unity/cs/system/security/policy/TrustManagerContext/) | class |  |
| [TrustManagerUIContext](/api-docs/unity/cs/system/security/policy/TrustManagerUIContext/) | enum |  |
| [PolicyLevelType](/api-docs/unity/cs/system/security/PolicyLevelType/) | enum |  |
| [IdentityReference](/api-docs/unity/cs/system/security/principal/IdentityReference/) | class |  |
| [IIdentity](/api-docs/unity/cs/system/security/principal/IIdentity/) | interface |  |
| [IPrincipal](/api-docs/unity/cs/system/security/principal/IPrincipal/) | interface |  |
| [PrincipalPolicy](/api-docs/unity/cs/system/security/principal/PrincipalPolicy/) | enum |  |
| [SecureString](/api-docs/unity/cs/system/security/SecureString/) | class |  |
| [SecurityElement](/api-docs/unity/cs/system/security/SecurityElement/) | class |  |
| [SecurityElement_SecurityAttribute](/api-docs/unity/cs/system/security/SecurityElement_SecurityAttribute/) | class |  |
| [SecurityState](/api-docs/unity/cs/system/security/SecurityState/) | class |  |
| [String](/api-docs/unity/cs/system/String/) | class |  |
| [StringComparison](/api-docs/unity/cs/system/StringComparison/) | enum |  |
| [StringSplitOptions](/api-docs/unity/cs/system/StringSplitOptions/) | enum |  |
| [SystemException](/api-docs/unity/cs/system/SystemException/) | class |  |
| [Decoder](/api-docs/unity/cs/system/text/Decoder/) | class |  |
| [DecoderFallback](/api-docs/unity/cs/system/text/DecoderFallback/) | class |  |
| [DecoderFallbackBuffer](/api-docs/unity/cs/system/text/DecoderFallbackBuffer/) | class |  |
| [Encoder](/api-docs/unity/cs/system/text/Encoder/) | class |  |
| [EncoderFallback](/api-docs/unity/cs/system/text/EncoderFallback/) | class |  |
| [EncoderFallbackBuffer](/api-docs/unity/cs/system/text/EncoderFallbackBuffer/) | class |  |
| [Encoding](/api-docs/unity/cs/system/text/Encoding/) | class |  |
| [Encoding_ForwardingDecoder](/api-docs/unity/cs/system/text/Encoding_ForwardingDecoder/) | class |  |
| [Encoding_ForwardingEncoder](/api-docs/unity/cs/system/text/Encoding_ForwardingEncoder/) | class |  |
| [EncodingInfo](/api-docs/unity/cs/system/text/EncodingInfo/) | class |  |
| [NormalizationForm](/api-docs/unity/cs/system/text/NormalizationForm/) | enum |  |
| [Capture](/api-docs/unity/cs/system/text/regularexpressions/Capture/) | class |  |
| [CaptureCollection](/api-docs/unity/cs/system/text/regularexpressions/CaptureCollection/) | class |  |
| [Delegate_MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/Delegate_MatchEvaluator/) | class |  |
| [Group](/api-docs/unity/cs/system/text/regularexpressions/Group/) | class |  |
| [GroupCollection](/api-docs/unity/cs/system/text/regularexpressions/GroupCollection/) | class |  |
| [Match](/api-docs/unity/cs/system/text/regularexpressions/Match/) | class |  |
| [MatchCollection](/api-docs/unity/cs/system/text/regularexpressions/MatchCollection/) | class |  |
| [MatchCollection_Enumerator](/api-docs/unity/cs/system/text/regularexpressions/MatchCollection_Enumerator/) | class |  |
| [MatchEvaluator](/api-docs/unity/cs/system/text/regularexpressions/MatchEvaluator/) | abstract |  |
| [Regex](/api-docs/unity/cs/system/text/regularexpressions/Regex/) | class |  |
| [Regex_Adapter](/api-docs/unity/cs/system/text/regularexpressions/Regex_Adapter/) | class |  |
| [RegexCompilationInfo](/api-docs/unity/cs/system/text/regularexpressions/RegexCompilationInfo/) | class |  |
| [RegexOptions](/api-docs/unity/cs/system/text/regularexpressions/RegexOptions/) | enum |  |
| [RegexRunner](/api-docs/unity/cs/system/text/regularexpressions/RegexRunner/) | class |  |
| [RegexRunnerFactory](/api-docs/unity/cs/system/text/regularexpressions/RegexRunnerFactory/) | class |  |
| [StringBuilder](/api-docs/unity/cs/system/text/StringBuilder/) | class |  |
| [ApartmentState](/api-docs/unity/cs/system/threading/ApartmentState/) | enum |  |
| [AsyncFlowControl](/api-docs/unity/cs/system/threading/AsyncFlowControl/) | class |  |
| [CompressedStack](/api-docs/unity/cs/system/threading/CompressedStack/) | class |  |
| [ContextCallback](/api-docs/unity/cs/system/threading/ContextCallback/) | abstract |  |
| [Delegate_ContextCallback](/api-docs/unity/cs/system/threading/Delegate_ContextCallback/) | class |  |
| [Delegate_ParameterizedThreadStart](/api-docs/unity/cs/system/threading/Delegate_ParameterizedThreadStart/) | class |  |
| [Delegate_ThreadStart](/api-docs/unity/cs/system/threading/Delegate_ThreadStart/) | class |  |
| [EventResetMode](/api-docs/unity/cs/system/threading/EventResetMode/) | enum |  |
| [EventWaitHandle](/api-docs/unity/cs/system/threading/EventWaitHandle/) | class |  |
| [ExecutionContext](/api-docs/unity/cs/system/threading/ExecutionContext/) | class |  |
| [HostExecutionContext](/api-docs/unity/cs/system/threading/HostExecutionContext/) | class |  |
| [HostExecutionContextManager](/api-docs/unity/cs/system/threading/HostExecutionContextManager/) | class |  |
| [ManualResetEvent](/api-docs/unity/cs/system/threading/ManualResetEvent/) | class |  |
| [Mutex](/api-docs/unity/cs/system/threading/Mutex/) | class |  |
| [ParameterizedThreadStart](/api-docs/unity/cs/system/threading/ParameterizedThreadStart/) | abstract |  |
| [Thread](/api-docs/unity/cs/system/threading/Thread/) | class |  |
| [ThreadPriority](/api-docs/unity/cs/system/threading/ThreadPriority/) | enum |  |
| [ThreadStart](/api-docs/unity/cs/system/threading/ThreadStart/) | abstract |  |
| [ThreadState](/api-docs/unity/cs/system/threading/ThreadState/) | enum |  |
| [WaitHandle](/api-docs/unity/cs/system/threading/WaitHandle/) | class |  |
| [TimeSpan](/api-docs/unity/cs/system/TimeSpan/) | class |  |
| [TimeSpan_ParseError](/api-docs/unity/cs/system/TimeSpan_ParseError/) | enum |  |
| [TimeSpan_Parser](/api-docs/unity/cs/system/TimeSpan_Parser/) | class |  |
| [TimeZone](/api-docs/unity/cs/system/TimeZone/) | class |  |
| [Type](/api-docs/unity/cs/system/Type/) | class |  |
| [TypeCode](/api-docs/unity/cs/system/TypeCode/) | enum |  |
| [TypedReference](/api-docs/unity/cs/system/TypedReference/) | class |  |
| [UInt32](/api-docs/unity/cs/system/UInt32/) | class |  |
| [UIntPtr](/api-docs/unity/cs/system/UIntPtr/) | class |  |
| [UnhandledExceptionEventArgs](/api-docs/unity/cs/system/UnhandledExceptionEventArgs/) | class |  |
| [UnhandledExceptionEventHandler](/api-docs/unity/cs/system/UnhandledExceptionEventHandler/) | abstract |  |
| [Uri](/api-docs/unity/cs/system/Uri/) | class |  |
| [Uri_UriScheme](/api-docs/unity/cs/system/Uri_UriScheme/) | class |  |
| [UriComponents](/api-docs/unity/cs/system/UriComponents/) | enum |  |
| [UriFormat](/api-docs/unity/cs/system/UriFormat/) | enum |  |
| [UriHostNameType](/api-docs/unity/cs/system/UriHostNameType/) | enum |  |
| [UriKind](/api-docs/unity/cs/system/UriKind/) | enum |  |
| [UriPartial](/api-docs/unity/cs/system/UriPartial/) | enum |  |
| [ValueType](/api-docs/unity/cs/system/ValueType/) | class |  |
| [Version](/api-docs/unity/cs/system/Version/) | class |  |
| [WeakReference](/api-docs/unity/cs/system/WeakReference/) | class |  |
| [SafeFileHandle](/api-docs/unity/microsoft/win32/safehandles/SafeFileHandle/) | class |  |
| [SafeHandleZeroOrMinusOneIsInvalid](/api-docs/unity/microsoft/win32/safehandles/SafeHandleZeroOrMinusOneIsInvalid/) | class |  |
| [SafeWaitHandle](/api-docs/unity/microsoft/win32/safehandles/SafeWaitHandle/) | class |  |
| [Project](/api-docs/unity/Project/) | class |  |
| [_AppDomain](/api-docs/unity/cs/system/_AppDomain/) | interface |  |
| [_Activator](/api-docs/unity/cs/system/runtime/interopservices/_Activator/) | interface |  |
| [_Assembly](/api-docs/unity/cs/system/runtime/interopservices/_Assembly/) | interface |  |
| [_AssemblyBuilder](/api-docs/unity/cs/system/runtime/interopservices/_AssemblyBuilder/) | interface |  |
| [_AssemblyName](/api-docs/unity/cs/system/runtime/interopservices/_AssemblyName/) | interface |  |
| [_Attribute](/api-docs/unity/cs/system/runtime/interopservices/_Attribute/) | interface |  |
| [_ConstructorBuilder](/api-docs/unity/cs/system/runtime/interopservices/_ConstructorBuilder/) | interface |  |
| [_ConstructorInfo](/api-docs/unity/cs/system/runtime/interopservices/_ConstructorInfo/) | interface |  |
| [_CustomAttributeBuilder](/api-docs/unity/cs/system/runtime/interopservices/_CustomAttributeBuilder/) | interface |  |
| [_EnumBuilder](/api-docs/unity/cs/system/runtime/interopservices/_EnumBuilder/) | interface |  |
| [_EventBuilder](/api-docs/unity/cs/system/runtime/interopservices/_EventBuilder/) | interface |  |
| [_EventInfo](/api-docs/unity/cs/system/runtime/interopservices/_EventInfo/) | interface |  |
| [_Exception](/api-docs/unity/cs/system/runtime/interopservices/_Exception/) | interface |  |
| [_FieldBuilder](/api-docs/unity/cs/system/runtime/interopservices/_FieldBuilder/) | interface |  |
| [_FieldInfo](/api-docs/unity/cs/system/runtime/interopservices/_FieldInfo/) | interface |  |
| [_ILGenerator](/api-docs/unity/cs/system/runtime/interopservices/_ILGenerator/) | interface |  |
| [_LocalBuilder](/api-docs/unity/cs/system/runtime/interopservices/_LocalBuilder/) | interface |  |
| [_MemberInfo](/api-docs/unity/cs/system/runtime/interopservices/_MemberInfo/) | interface |  |
| [_MethodBase](/api-docs/unity/cs/system/runtime/interopservices/_MethodBase/) | interface |  |
| [_MethodBuilder](/api-docs/unity/cs/system/runtime/interopservices/_MethodBuilder/) | interface |  |
| [_MethodInfo](/api-docs/unity/cs/system/runtime/interopservices/_MethodInfo/) | interface |  |
| [_Module](/api-docs/unity/cs/system/runtime/interopservices/_Module/) | interface |  |
| [_ModuleBuilder](/api-docs/unity/cs/system/runtime/interopservices/_ModuleBuilder/) | interface |  |
| [_ParameterBuilder](/api-docs/unity/cs/system/runtime/interopservices/_ParameterBuilder/) | interface |  |
| [_ParameterInfo](/api-docs/unity/cs/system/runtime/interopservices/_ParameterInfo/) | interface |  |
| [_PropertyBuilder](/api-docs/unity/cs/system/runtime/interopservices/_PropertyBuilder/) | interface |  |
| [_PropertyInfo](/api-docs/unity/cs/system/runtime/interopservices/_PropertyInfo/) | interface |  |
| [_SignatureHelper](/api-docs/unity/cs/system/runtime/interopservices/_SignatureHelper/) | interface |  |
| [_Thread](/api-docs/unity/cs/system/runtime/interopservices/_Thread/) | interface |  |
| [_Type](/api-docs/unity/cs/system/runtime/interopservices/_Type/) | interface |  |
| [_TypeBuilder](/api-docs/unity/cs/system/runtime/interopservices/_TypeBuilder/) | interface |  |

## Haxe

| Type | Kind | Description |
|------|------|-------------|
| [Any](/api-docs/unity/Any/) | abstract | `Any` is a type that is compatible with any other in both ways. |
| [Array](/api-docs/unity/Array/) | class |  |
| [ArrayAccess](/api-docs/unity/ArrayAccess/) | interface | `ArrayAccess` is used to indicate a class that can be accessed using brackets. |
| [Bool](/api-docs/unity/Bool/) | abstract | The standard Boolean type, which can either be `true` or `false`. |
| [Class](/api-docs/unity/Class/) | abstract | An abstract type that represents a Class. |
| [Char16](/api-docs/unity/cs/Char16/) | abstract |  |
| [Flags](/api-docs/unity/cs/Flags/) | abstract | Use this type to have access to the bitwise operators of C# enums that have a `cs. |
| [Int16](/api-docs/unity/cs/Int16/) | abstract |  |
| [Int64](/api-docs/unity/cs/Int64/) | abstract |  |
| [Int8](/api-docs/unity/cs/Int8/) | abstract |  |
| [Closure](/api-docs/unity/cs/internal/Closure/) | class |  |
| [DynamicObject](/api-docs/unity/cs/internal/DynamicObject/) | class |  |
| [EmptyObject](/api-docs/unity/cs/internal/EmptyObject/) | enum |  |
| [FieldHashConflict](/api-docs/unity/cs/internal/FieldHashConflict/) | class |  |
| [FieldLookup](/api-docs/unity/cs/internal/FieldLookup/) | class |  |
| [Function](/api-docs/unity/cs/internal/Function/) | class | These classes are automatically generated by the compiler. They are only |
| [GenericInterface](/api-docs/unity/cs/internal/GenericInterface/) | class |  |
| [HxEnum](/api-docs/unity/cs/internal/HxEnum/) | class |  |
| [HxObject](/api-docs/unity/cs/internal/HxObject/) | class |  |
| [IGenericObject](/api-docs/unity/cs/internal/IGenericObject/) | interface |  |
| [IHxObject](/api-docs/unity/cs/internal/IHxObject/) | interface |  |
| [Runtime](/api-docs/unity/cs/internal/Runtime/) | class | This class is meant for internal compiler use only. It provides the Haxe runtime |
| [StringExt](/api-docs/unity/cs/internal/StringExt/) | class |  |
| [StringRefl](/api-docs/unity/cs/internal/StringRefl/) | class |  |
| [VarArgsFunction](/api-docs/unity/cs/internal/VarArgsFunction/) | class |  |
| [NativeInput](/api-docs/unity/cs/io/NativeInput/) | class |  |
| [NativeOutput](/api-docs/unity/cs/io/NativeOutput/) | class |  |
| [Lib](/api-docs/unity/cs/Lib/) | class | Platform-specific C# Library. Provides some platform-specific functions for the C# target, |
| [NativeArray](/api-docs/unity/cs/NativeArray/) | class | Represents a C# fixed-size Array (`T[]`) |
| [Out](/api-docs/unity/cs/Out/) | typedef | This type represents "out" types for C# function parameters. |
| [Ref](/api-docs/unity/cs/Ref/) | typedef | This type represents "ref" types for C# function parameters. |
| [Syntax](/api-docs/unity/cs/Syntax/) | class | Generate C# syntax not directly supported by Haxe. |
| [Char16](/api-docs/unity/cs/types/Char16/) | typedef |  |
| [Int16](/api-docs/unity/cs/types/Int16/) | typedef |  |
| [Int8](/api-docs/unity/cs/types/Int8/) | typedef |  |
| [UInt16](/api-docs/unity/cs/types/UInt16/) | typedef |  |
| [UInt64](/api-docs/unity/cs/types/UInt64/) | typedef |  |
| [UInt8](/api-docs/unity/cs/types/UInt8/) | typedef |  |
| [UInt16](/api-docs/unity/cs/UInt16/) | abstract |  |
| [UInt64](/api-docs/unity/cs/UInt64/) | abstract |  |
| [UInt8](/api-docs/unity/cs/UInt8/) | abstract |  |
| [Date](/api-docs/unity/Date/) | class | The Date class provides a basic structure for date and time related |
| [Dynamic](/api-docs/unity/Dynamic/) | abstract | `Dynamic` is a special type which is compatible with all other types. |
| [Enum](/api-docs/unity/Enum/) | abstract | An abstract type that represents an Enum type. |
| [EnumValue](/api-docs/unity/EnumValue/) | abstract | An abstract type that represents any enum value. |
| [EReg](/api-docs/unity/EReg/) | class | The EReg class represents regular expressions. |
| [Float](/api-docs/unity/Float/) | abstract | The standard `Float` type, this is a double-precision IEEE 64bit float. |
| [AtomicBool](/api-docs/unity/haxe/atomic/AtomicBool/) | abstract | Atomic boolean. |
| [AtomicInt](/api-docs/unity/haxe/atomic/AtomicInt/) | abstract |  |
| [CallStack](/api-docs/unity/haxe/CallStack/) | abstract | Get information about the call stack. |
| [Constructible](/api-docs/unity/haxe/Constructible/) | abstract | This type unifies with any instance of classes that have a constructor |
| [Adler32](/api-docs/unity/haxe/crypto/Adler32/) | class | Calculates the Adler32 of the given Bytes. |
| [Base64](/api-docs/unity/haxe/crypto/Base64/) | class | Allows one to encode/decode String and bytes using Base64 encoding. |
| [BaseCode](/api-docs/unity/haxe/crypto/BaseCode/) | class | Allows one to encode/decode String and bytes using a power of two base dictionary. |
| [HashMethod](/api-docs/unity/haxe/crypto/HashMethod/) | enum | Hash methods for Hmac calculation. |
| [Hmac](/api-docs/unity/haxe/crypto/Hmac/) | class | Calculates a Hmac of the given Bytes using a HashMethod. |
| [Md5](/api-docs/unity/haxe/crypto/Md5/) | class | Creates a MD5 of a String. |
| [Sha1](/api-docs/unity/haxe/crypto/Sha1/) | class | Creates a Sha1 of a String. |
| [Sha256](/api-docs/unity/haxe/crypto/Sha256/) | class | Creates a Sha256 of a String. |
| [ArraySort](/api-docs/unity/haxe/ds/ArraySort/) | class | ArraySort provides a stable implementation of merge sort through its `sort` |
| [BalancedTree](/api-docs/unity/haxe/ds/BalancedTree/) | class | BalancedTree allows key-value mapping with arbitrary keys, as long as they |
| [EnumValueMap](/api-docs/unity/haxe/ds/EnumValueMap/) | class | EnumValueMap allows mapping of enum value keys to arbitrary values. |
| [IntMap](/api-docs/unity/haxe/ds/IntMap/) | class | IntMap allows mapping of Int keys to arbitrary values. |
| [List](/api-docs/unity/haxe/ds/List/) | class | A linked-list of elements. The list is composed of element container objects |
| [Map](/api-docs/unity/haxe/ds/Map/) | abstract | Map allows key to value mapping for arbitrary value types, and many key |
| [ObjectMap](/api-docs/unity/haxe/ds/ObjectMap/) | class | ObjectMap allows mapping of object keys to arbitrary values. |
| [ReadOnlyArray](/api-docs/unity/haxe/ds/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [StringMap](/api-docs/unity/haxe/ds/StringMap/) | class | StringMap allows mapping of String keys to arbitrary values. |
| [TreeNode](/api-docs/unity/haxe/ds/TreeNode/) | class | A tree node of `haxe.ds.BalancedTree`. |
| [Vector](/api-docs/unity/haxe/ds/Vector/) | abstract | A Vector is a storage of fixed size. It can be faster than Array on some |
| [DynamicAccess](/api-docs/unity/haxe/DynamicAccess/) | abstract | DynamicAccess is an abstract type for working with anonymous structures |
| [EntryPoint](/api-docs/unity/haxe/EntryPoint/) | class | If `haxe. |
| [EnumTools](/api-docs/unity/haxe/EnumTools/) | class | This class provides advanced methods on enums. It is ideally used with |
| [EnumValueTools](/api-docs/unity/haxe/EnumValueTools/) | class | This class provides advanced methods on enum values. It is ideally used with |
| [Exception](/api-docs/unity/haxe/Exception/) | class | Base class for exceptions. |
| [NotImplementedException](/api-docs/unity/haxe/exceptions/NotImplementedException/) | class | An exception that is thrown when requested function or operation does not have an implementation. |
| [PosException](/api-docs/unity/haxe/exceptions/PosException/) | class | An exception that carry position information of a place where it was created. |
| [Rest](/api-docs/unity/haxe/extern/Rest/) | typedef | DEPRECATED: use haxe.Rest instead. |
| [FlatEnum](/api-docs/unity/haxe/FlatEnum/) | abstract | This type unifies with an enum instance if all constructors of the enum |
| [JsonParser](/api-docs/unity/haxe/format/JsonParser/) | class | An implementation of JSON parser in Haxe. |
| [JsonPrinter](/api-docs/unity/haxe/format/JsonPrinter/) | class | An implementation of JSON printer in Haxe. |
| [Function](/api-docs/unity/haxe/Function/) | abstract | This type unifies with any function type. |
| [IMap](/api-docs/unity/haxe/IMap/) | interface |  |
| [Int32](/api-docs/unity/haxe/Int32/) | abstract | Int32 provides a 32-bit integer with consistent overflow behavior across |
| [Int64](/api-docs/unity/haxe/Int64/) | abstract |  |
| [ArrayBufferView](/api-docs/unity/haxe/io/ArrayBufferView/) | abstract |  |
| [ArrayBufferViewData](/api-docs/unity/haxe/io/ArrayBufferViewData/) | typedef |  |
| [ArrayBufferViewImpl](/api-docs/unity/haxe/io/ArrayBufferViewImpl/) | class |  |
| [Bytes](/api-docs/unity/haxe/io/Bytes/) | class |  |
| [BytesBuffer](/api-docs/unity/haxe/io/BytesBuffer/) | class |  |
| [BytesData](/api-docs/unity/haxe/io/BytesData/) | typedef |  |
| [BytesInput](/api-docs/unity/haxe/io/BytesInput/) | class |  |
| [BytesOutput](/api-docs/unity/haxe/io/BytesOutput/) | class |  |
| [Encoding](/api-docs/unity/haxe/io/Encoding/) | enum | String binary encoding supported by Haxe I/O |
| [Eof](/api-docs/unity/haxe/io/Eof/) | class | This exception is raised when reading while data is no longer available in the `haxe.io.Input`. |
| [Error](/api-docs/unity/haxe/io/Error/) | enum | The possible IO errors that can occur |
| [FPHelper](/api-docs/unity/haxe/io/FPHelper/) | class | Helper that converts between floating point and binary representation. |
| [Input](/api-docs/unity/haxe/io/Input/) | class | An Input is an abstract reader. See other classes in the `haxe.io` package |
| [Int32Array](/api-docs/unity/haxe/io/Int32Array/) | abstract |  |
| [Int32ArrayData](/api-docs/unity/haxe/io/Int32ArrayData/) | typedef |  |
| [Output](/api-docs/unity/haxe/io/Output/) | class | An Output is an abstract write. A specific output implementation will only |
| [Path](/api-docs/unity/haxe/io/Path/) | class | This class provides a convenient way of working with paths. It supports the |
| [StringInput](/api-docs/unity/haxe/io/StringInput/) | class |  |
| [UInt8Array](/api-docs/unity/haxe/io/UInt8Array/) | abstract |  |
| [UInt8ArrayData](/api-docs/unity/haxe/io/UInt8ArrayData/) | typedef |  |
| [ArrayIterator](/api-docs/unity/haxe/iterators/ArrayIterator/) | class | This iterator is used only when `Array<T>` is passed to `Iterable<T>` |
| [ArrayKeyValueIterator](/api-docs/unity/haxe/iterators/ArrayKeyValueIterator/) | class |  |
| [DynamicAccessKeyValueIterator](/api-docs/unity/haxe/iterators/DynamicAccessKeyValueIterator/) | class | This Key/Value iterator can be used to iterate over `haxe.DynamicAccess`. |
| [MapKeyValueIterator](/api-docs/unity/haxe/iterators/MapKeyValueIterator/) | class | This Key/Value iterator can be used to iterate across maps. |
| [StringIteratorUnicode](/api-docs/unity/haxe/iterators/StringIteratorUnicode/) | class | This iterator can be used to iterate across strings in a cross-platform |
| [Json](/api-docs/unity/haxe/Json/) | class | Cross-platform JSON API: it will automatically use the optimized native API if available. |
| [Log](/api-docs/unity/haxe/Log/) | class | Log primarily provides the `trace()` method, which is invoked upon a call to |
| [AbstractType](/api-docs/unity/haxe/macro/AbstractType/) | typedef | Represents an abstract type. |
| [AnonType](/api-docs/unity/haxe/macro/AnonType/) | typedef | Represents information for anonymous structure types. |
| [BaseType](/api-docs/unity/haxe/macro/BaseType/) | typedef | The information that all types (`ClassType`, `EnumType`, `DefType`, |
| [Case](/api-docs/unity/haxe/macro/Case/) | typedef | Represents a switch case. |
| [Catch](/api-docs/unity/haxe/macro/Catch/) | typedef | Represents a catch in the AST. |
| [ClassField](/api-docs/unity/haxe/macro/ClassField/) | typedef | Represents a class field. |
| [ClassType](/api-docs/unity/haxe/macro/ClassType/) | typedef | Represents a class type. |
| [DefType](/api-docs/unity/haxe/macro/DefType/) | typedef | Represents a typedef. |
| [EnumField](/api-docs/unity/haxe/macro/EnumField/) | typedef | Represents an enum constructor. |
| [EnumType](/api-docs/unity/haxe/macro/EnumType/) | typedef | Represents an enum type. |
| [Expr](/api-docs/unity/haxe/macro/Expr/) | typedef | Represents a node in the AST. |
| [ExprOf](/api-docs/unity/haxe/macro/ExprOf/) | typedef | Represents a AST node identical to `Expr`, but it allows constraining the |
| [Field](/api-docs/unity/haxe/macro/Field/) | typedef | Represents a field in the AST. |
| [Function](/api-docs/unity/haxe/macro/Function/) | typedef | Represents a function in the AST. |
| [FunctionArg](/api-docs/unity/haxe/macro/FunctionArg/) | typedef | Represents a function argument in the AST. |
| [ImportExpr](/api-docs/unity/haxe/macro/ImportExpr/) | typedef | Represents the import expression. |
| [MetaAccess](/api-docs/unity/haxe/macro/MetaAccess/) | typedef | MetaAccess is a wrapper for the `Metadata` array. It can be used to add |
| [Metadata](/api-docs/unity/haxe/macro/Metadata/) | typedef | Represents metadata in the AST. |
| [MetadataEntry](/api-docs/unity/haxe/macro/MetadataEntry/) | typedef | Represents a metadata entry in the AST. |
| [ObjectField](/api-docs/unity/haxe/macro/ObjectField/) | typedef | Represents the field of an object declaration. |
| [Position](/api-docs/unity/haxe/macro/Position/) | typedef | Represents a position in a file. |
| [Ref](/api-docs/unity/haxe/macro/Ref/) | typedef | Represents a reference to internal compiler structure. It exists to avoid |
| [TFunc](/api-docs/unity/haxe/macro/TFunc/) | typedef | Represents a function in the typed AST. |
| [TVar](/api-docs/unity/haxe/macro/TVar/) | typedef | Represents a variable in the typed AST. |
| [TypeDefinition](/api-docs/unity/haxe/macro/TypeDefinition/) | typedef | Represents a type definition. |
| [TypedExpr](/api-docs/unity/haxe/macro/TypedExpr/) | typedef | Represents a typed AST node. |
| [TypeParamDecl](/api-docs/unity/haxe/macro/TypeParamDecl/) | typedef | Represents a type parameter declaration in the AST. |
| [TypeParameter](/api-docs/unity/haxe/macro/TypeParameter/) | typedef | Represents the declaration of type parameters. |
| [TypePath](/api-docs/unity/haxe/macro/TypePath/) | typedef | Represents a type path in the AST. |
| [Var](/api-docs/unity/haxe/macro/Var/) | typedef | Represents a variable in the AST. |
| [MainEvent](/api-docs/unity/haxe/MainEvent/) | class |  |
| [MainLoop](/api-docs/unity/haxe/MainLoop/) | class |  |
| [NotVoid](/api-docs/unity/haxe/NotVoid/) | abstract | This type unifies with anything but `Void`. |
| [PosInfos](/api-docs/unity/haxe/PosInfos/) | typedef | `PosInfos` is a magic type which can be used to generate position information |
| [Rest](/api-docs/unity/haxe/Rest/) | abstract |  |
| [Abstractdef](/api-docs/unity/haxe/rtti/Abstractdef/) | typedef | The abstract type runtime information. |
| [Classdef](/api-docs/unity/haxe/rtti/Classdef/) | typedef | The runtime class definition information. |
| [ClassField](/api-docs/unity/haxe/rtti/ClassField/) | typedef | The runtime class field information. |
| [CType](/api-docs/unity/haxe/rtti/CType/) | enum | The runtime member types. |
| [Enumdef](/api-docs/unity/haxe/rtti/Enumdef/) | typedef | The enum runtime type information. |
| [EnumField](/api-docs/unity/haxe/rtti/EnumField/) | typedef | The runtime enum constructor information. |
| [FunctionArgument](/api-docs/unity/haxe/rtti/FunctionArgument/) | typedef | The function argument runtime type information. |
| [Meta](/api-docs/unity/haxe/rtti/Meta/) | class | An API to access classes and enums metadata at runtime. |
| [MetaData](/api-docs/unity/haxe/rtti/MetaData/) | typedef | The list of runtime metadata. |
| [Path](/api-docs/unity/haxe/rtti/Path/) | typedef | The (dot-)path of the runtime type. |
| [PathParams](/api-docs/unity/haxe/rtti/PathParams/) | typedef | The type parameters in the runtime type information. |
| [Platforms](/api-docs/unity/haxe/rtti/Platforms/) | typedef | A list of strings representing the targets where the type is available. |
| [Rights](/api-docs/unity/haxe/rtti/Rights/) | enum | Represents the runtime rights of a type. |
| [Rtti](/api-docs/unity/haxe/rtti/Rtti/) | class | Rtti is a helper class which supplements the `@:rtti` metadata. |
| [Typedef](/api-docs/unity/haxe/rtti/Typedef/) | typedef | The typedef runtime information. |
| [TypeInfos](/api-docs/unity/haxe/rtti/TypeInfos/) | typedef | The general runtime type information. |
| [TypeParams](/api-docs/unity/haxe/rtti/TypeParams/) | typedef | An array of strings representing the names of the type parameters the type |
| [TypeRoot](/api-docs/unity/haxe/rtti/TypeRoot/) | typedef | Array of `TypeTree`. |
| [TypeTree](/api-docs/unity/haxe/rtti/TypeTree/) | enum | The tree types of the runtime type. |
| [XmlParser](/api-docs/unity/haxe/rtti/XmlParser/) | class | XmlParser processes the runtime type information (RTTI) which |
| [Serializer](/api-docs/unity/haxe/Serializer/) | class | The Serializer class can be used to encode values and objects into a `String`, |
| [StackItem](/api-docs/unity/haxe/StackItem/) | enum | Elements return by `CallStack` methods. |
| [SysTools](/api-docs/unity/haxe/SysTools/) | class |  |
| [Timer](/api-docs/unity/haxe/Timer/) | class | The `Timer` class allows you to create asynchronous timers on platforms that |
| [Unserializer](/api-docs/unity/haxe/Unserializer/) | class | The `Unserializer` class is the complement to the `Serializer` class. It parses |
| [ValueException](/api-docs/unity/haxe/ValueException/) | class | An exception containing arbitrary value. |
| [Access](/api-docs/unity/haxe/xml/Access/) | abstract | The `haxe.xml.Access` API helps providing a fast dot-syntax access to the |
| [Parser](/api-docs/unity/haxe/xml/Parser/) | class |  |
| [Printer](/api-docs/unity/haxe/xml/Printer/) | class | This class provides utility methods to convert Xml instances to |
| [XmlParserException](/api-docs/unity/haxe/xml/XmlParserException/) | class |  |
| [Compress](/api-docs/unity/haxe/zip/Compress/) | class |  |
| [Huffman](/api-docs/unity/haxe/zip/Huffman/) | enum |  |
| [HuffTools](/api-docs/unity/haxe/zip/HuffTools/) | class |  |
| [InflateImpl](/api-docs/unity/haxe/zip/InflateImpl/) | class | A pure Haxe implementation of the ZLIB Inflate algorithm which allows reading compressed data wit... |
| [Int](/api-docs/unity/Int/) | abstract | The standard `Int` type. Its precision depends on the platform. |
| [IntIterator](/api-docs/unity/IntIterator/) | class | IntIterator is used for implementing interval iterations. |
| [Iterable](/api-docs/unity/Iterable/) | typedef | An `Iterable` is a data structure which has an `iterator()` method. |
| [Iterator](/api-docs/unity/Iterator/) | typedef | An `Iterator` is a structure that permits iteration over elements of type `T`. |
| [KeyValueIterable](/api-docs/unity/KeyValueIterable/) | typedef | A `KeyValueIterable` is a data structure which has a `keyValueIterator()` |
| [KeyValueIterator](/api-docs/unity/KeyValueIterator/) | typedef | A `KeyValueIterator` is an `Iterator` that has a key and a value. |
| [Lambda](/api-docs/unity/Lambda/) | class | The `Lambda` class is a collection of methods to support functional |
| [List](/api-docs/unity/List/) | typedef |  |
| [Map](/api-docs/unity/Map/) | typedef |  |
| [Math](/api-docs/unity/Math/) | class | This class defines mathematical functions and constants. |
| [Null](/api-docs/unity/Null/) | abstract | `Null<T>` is a wrapper that can be used to make the basic types `Int`, |
| [Reflect](/api-docs/unity/Reflect/) | class | The Reflect API is a way to manipulate values dynamically through an |
| [Single](/api-docs/unity/Single/) | abstract | Single-precision IEEE 32bit float (4-byte). |
| [Std](/api-docs/unity/Std/) | class | The Std class provides standard methods for manipulating basic types. |
| [String](/api-docs/unity/String/) | class | The basic String class. |
| [StringBuf](/api-docs/unity/StringBuf/) | class | A String buffer is an efficient way to build a big string by appending small |
| [StringTools](/api-docs/unity/StringTools/) | class | This class provides advanced methods on Strings. It is ideally used with |
| [Sys](/api-docs/unity/Sys/) | class | This class provides access to various base functions of system platforms. |
| [FileStat](/api-docs/unity/sys/FileStat/) | typedef | File information, as given by `sys.FileSystem.stat`. |
| [FileSystem](/api-docs/unity/sys/FileSystem/) | class | This class provides information about files and directories. |
| [File](/api-docs/unity/sys/io/File/) | class | API for reading and writing files. |
| [FileInput](/api-docs/unity/sys/io/FileInput/) | class |  |
| [FileOutput](/api-docs/unity/sys/io/FileOutput/) | class |  |
| [Process](/api-docs/unity/sys/io/Process/) | class |  |
| [Deque](/api-docs/unity/sys/thread/Deque/) | class | A Deque is a double-ended queue with a `pop` method that can block until |
| [EventHandler](/api-docs/unity/sys/thread/EventHandler/) | abstract |  |
| [EventLoop](/api-docs/unity/sys/thread/EventLoop/) | class | An event loop implementation used for `sys.thread.Thread` |
| [Lock](/api-docs/unity/sys/thread/Lock/) | class |  |
| [Mutex](/api-docs/unity/sys/thread/Mutex/) | class |  |
| [NextEventTime](/api-docs/unity/sys/thread/NextEventTime/) | enum | When an event loop has an available event to execute. |
| [NoEventLoopException](/api-docs/unity/sys/thread/NoEventLoopException/) | class |  |
| [Thread](/api-docs/unity/sys/thread/Thread/) | abstract |  |
| [Type](/api-docs/unity/Type/) | class | The Haxe Reflection API allows retrieval of type information at runtime. |
| [UInt](/api-docs/unity/UInt/) | abstract | The unsigned `Int` type is only defined for Flash and C#. |
| [ValueType](/api-docs/unity/ValueType/) | enum |  |
| [Void](/api-docs/unity/Void/) | abstract | The standard `Void` type. Only `null` values can be of the type `Void`. |
| [Xml](/api-docs/unity/Xml/) | class | Cross-platform Xml API. |
| [XmlType](/api-docs/unity/XmlType/) | abstract | Xml node types. |
| [EnumUnderlying](/api-docs/unity/cs/_Flags/EnumUnderlying/) | abstract |  |
| [NativeArrayIterator](/api-docs/unity/cs/_NativeArray/NativeArrayIterator/) | class |  |
| [VarArgsBase](/api-docs/unity/cs/internal/_Function/VarArgsBase/) | class |  |
| [StdType](/api-docs/unity/cs/internal/_HxObject/StdType/) | typedef |  |
| [Nullable](/api-docs/unity/cs/internal/_Null/Nullable/) | class |  |
| [NativeString](/api-docs/unity/cs/internal/_StringExt/NativeString/) | typedef |  |
| [__Int64](/api-docs/unity/haxe/_Int64/__Int64/) | typedef |  |
| [NativeRest](/api-docs/unity/haxe/_Rest/NativeRest/) | typedef |  |
| [DefaultResolver](/api-docs/unity/haxe/_Unserializer/DefaultResolver/) | class |  |
| [IntWrapper](/api-docs/unity/haxe/atomic/_AtomicInt/IntWrapper/) | class |  |
| [IntMapKeyIterator](/api-docs/unity/haxe/ds/_IntMap/IntMapKeyIterator/) | class |  |
| [IntMapValueIterator](/api-docs/unity/haxe/ds/_IntMap/IntMapValueIterator/) | class |  |
| [ListIterator](/api-docs/unity/haxe/ds/_List/ListIterator/) | class |  |
| [ListNode](/api-docs/unity/haxe/ds/_List/ListNode/) | class |  |
| [HashType](/api-docs/unity/haxe/ds/_ObjectMap/HashType/) | typedef |  |
| [ObjectMapKeyIterator](/api-docs/unity/haxe/ds/_ObjectMap/ObjectMapKeyIterator/) | class |  |
| [ObjectMapValueIterator](/api-docs/unity/haxe/ds/_ObjectMap/ObjectMapValueIterator/) | class |  |
| [HashType](/api-docs/unity/haxe/ds/_StringMap/HashType/) | typedef |  |
| [StringMapKeyIterator](/api-docs/unity/haxe/ds/_StringMap/StringMapKeyIterator/) | class |  |
| [StringMapValueIterator](/api-docs/unity/haxe/ds/_StringMap/StringMapValueIterator/) | class |  |
| [VectorData](/api-docs/unity/haxe/ds/_Vector/VectorData/) | typedef |  |
| [SingleHelper](/api-docs/unity/haxe/io/_FPHelper/SingleHelper/) | class |  |
| [MetaObject](/api-docs/unity/haxe/rtti/_Meta/MetaObject/) | typedef |  |
| [AttribAccess](/api-docs/unity/haxe/xml/_Access/AttribAccess/) | abstract |  |
| [HasAttribAccess](/api-docs/unity/haxe/xml/_Access/HasAttribAccess/) | abstract |  |
| [HasNodeAccess](/api-docs/unity/haxe/xml/_Access/HasNodeAccess/) | abstract |  |
| [NodeAccess](/api-docs/unity/haxe/xml/_Access/NodeAccess/) | abstract |  |
| [NodeListAccess](/api-docs/unity/haxe/xml/_Access/NodeListAccess/) | abstract |  |
| [S](/api-docs/unity/haxe/xml/_Parser/S/) | abstract |  |
| [State](/api-docs/unity/haxe/zip/_InflateImpl/State/) | enum |  |
| [Window](/api-docs/unity/haxe/zip/_InflateImpl/Window/) | class |  |
| [RegularEvent](/api-docs/unity/sys/thread/_EventLoop/RegularEvent/) | class |  |
| [HaxeThread](/api-docs/unity/sys/thread/_Thread/HaxeThread/) | class |  |
| [ThreadImpl](/api-docs/unity/sys/thread/_Thread/ThreadImpl/) | typedef |  |

