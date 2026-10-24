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
- [Spec](#spec)
- [Other](#other)
- [Haxe](#haxe)
- [Headless](#headless)
- [Hxnodejs](#hxnodejs)
- [Http](#http)
- [Imgui](#imgui)
- [Ldtk-haxe-api](#ldtk-haxe-api)
- [Loreline](#loreline)
- [Shade](#shade)
- [Clipper](#clipper)
- [Imgui-hx](#imgui-hx)

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
| [CardinalSpline](/api-docs/headless/ceramic/CardinalSpline/) | class | Cardinal spline interpolation for smooth curves through control points. |
| [CeramicLogo](/api-docs/headless/ceramic/CeramicLogo/) | class | A visual component that renders the Ceramic engine logo as a mesh. |
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
| [Float32](/api-docs/headless/ceramic/Float32/) | typedef |  |
| [Float32Array](/api-docs/headless/ceramic/Float32Array/) | typedef | A typed array of 32-bit floating point values. |
| [Float32Utils](/api-docs/headless/ceramic/Float32Utils/) | class |  |
| [FontAsset](/api-docs/headless/ceramic/FontAsset/) | class | Asset type for loading bitmap fonts. |
| [Fragment](/api-docs/headless/ceramic/Fragment/) | class | A fragment is a powerful container that manages groups of entities and visuals |
| [FragmentData](/api-docs/headless/ceramic/FragmentData/) | typedef | Data structure that defines a fragment's content and properties. |
| [FragmentItem](/api-docs/headless/ceramic/FragmentItem/) | typedef | Defines an entity instance within a fragment. |
| [Fragments](/api-docs/headless/ceramic/Fragments/) | class | A compile-time generated class containing constants for all fragment assets. |
| [FragmentsAsset](/api-docs/headless/ceramic/FragmentsAsset/) | class | An asset that loads and manages fragment data from `.fragment` files. |
| [GamepadAxis](/api-docs/headless/ceramic/GamepadAxis/) | abstract | Represents gamepad analog stick and trigger axes. |
| [GamepadButton](/api-docs/headless/ceramic/GamepadButton/) | abstract | Represents gamepad button mappings. |
| [GamepadLabels](/api-docs/headless/ceramic/GamepadLabels/) | abstract | The labels printed on the buttons of a gamepad, to show the right ones to the player. |
| [GeometryUtils](/api-docs/headless/ceramic/GeometryUtils/) | class | A collection of static utility functions for 2D geometric calculations. |
| [GlyphQuad](/api-docs/headless/ceramic/GlyphQuad/) | class | A specialized Quad that represents a single rendered glyph (character) in text rendering. |
| [Graphics](/api-docs/headless/ceramic/Graphics/) | class | Immediate-mode graphics API for Ceramic, similar to Canvas 2D or Flash Graphics. |
| [Group](/api-docs/headless/ceramic/Group/) | class | A container for managing collections of entities as a single unit. |
| [HashedString](/api-docs/headless/ceramic/HashedString/) | class | A utility class for encoding and decoding strings with integrity verification using MD5 hashes. |
| [HighPassFilter](/api-docs/headless/ceramic/HighPassFilter/) | class | A high-pass audio filter that attenuates frequencies below a cutoff point. |
| [HighPassFilterWorklet](/api-docs/headless/ceramic/HighPassFilterWorklet/) | class | The audio processing worklet for the high-pass filter. |
| [ImageAsset](/api-docs/headless/ceramic/ImageAsset/) | class | Asset type for loading image files as textures. |
| [ImageType](/api-docs/headless/ceramic/ImageType/) | abstract | Supported image file formats for loading and exporting images. |
| [Immediate](/api-docs/headless/ceramic/Immediate/) | class | A utility class for scheduling callbacks to be executed in a batch. |
| [InitSettings](/api-docs/headless/ceramic/InitSettings/) | class | Same as Settings, but for app startup (inside Project.new(settings)). |
| [Input](/api-docs/headless/ceramic/Input/) | class | Manages all input handling for keyboard and gamepad devices. |
| [InputMap](/api-docs/headless/ceramic/InputMap/) | class | A flexible input mapping system that allows binding physical inputs to logical actions. |
| [InputMapBase](/api-docs/headless/ceramic/InputMapBase/) | class | Base class for the InputMap system. |
| [InputMapConvertToAxis](/api-docs/headless/ceramic/InputMapConvertToAxis/) | class | Helper class for converting digital button inputs to analog axis values. |
| [InputMapImpl](/api-docs/headless/ceramic/InputMapImpl/) | class | Implementation class for the InputMap system. |
| [InputMapKeyKind](/api-docs/headless/ceramic/InputMapKeyKind/) | abstract | Represents the type of physical input that triggered an action. |
| [InputMapRebinder](/api-docs/headless/ceramic/InputMapRebinder/) | class | A utility class for rebinding input mappings at runtime. |
| [IntBoolMap](/api-docs/headless/ceramic/IntBoolMap/) | abstract | A map that uses int as keys and booleans as values. |
| [IntBoolMapIterator](/api-docs/headless/ceramic/IntBoolMapIterator/) | class | Iterator implementation for IntBoolMap values. |
| [IntBoolMapKeyIterator](/api-docs/headless/ceramic/IntBoolMapKeyIterator/) | class | Iterator implementation for IntBoolMap keys. |
| [IntBoolMapKeyValueIterator](/api-docs/headless/ceramic/IntBoolMapKeyValueIterator/) | class | Iterator implementation for IntBoolMap key-value pairs. |
| [IntFloatMap](/api-docs/headless/ceramic/IntFloatMap/) | class | Fallback implementation of IntFloatMap for non-C++/C# targets. |
| [IntFloatMapIterator](/api-docs/headless/ceramic/IntFloatMapIterator/) | class | Iterator implementation for IntFloatMap values. |
| [IntFloatMapKeyIterator](/api-docs/headless/ceramic/IntFloatMapKeyIterator/) | class | Iterator implementation for IntFloatMap keys. |
| [IntFloatMapKeyValueIterator](/api-docs/headless/ceramic/IntFloatMapKeyValueIterator/) | class | Iterator implementation for IntFloatMap key-value pairs. |
| [IntIntMap](/api-docs/headless/ceramic/IntIntMap/) | class | Fallback implementation of IntIntMap for non-C++/C# targets. |
| [IntIntMapIterator](/api-docs/headless/ceramic/IntIntMapIterator/) | class | Iterator implementation for IntIntMap values. |
| [IntIntMapKeyIterator](/api-docs/headless/ceramic/IntIntMapKeyIterator/) | class | Iterator implementation for IntIntMap keys. |
| [IntIntMapKeyValueIterator](/api-docs/headless/ceramic/IntIntMapKeyValueIterator/) | class | Iterator implementation for IntIntMap key-value pairs. |
| [IntMap](/api-docs/headless/ceramic/IntMap/) | class | An object map that uses integers as key. |
| [IntMapIterator](/api-docs/headless/ceramic/IntMapIterator/) | class | Iterator implementation for IntMap values. |
| [IntMapKeyIterator](/api-docs/headless/ceramic/IntMapKeyIterator/) | class | Iterator implementation for IntMap keys. |
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
| [LineCap](/api-docs/headless/ceramic/LineCap/) | abstract | Defines how line ends are rendered. |
| [LineJoin](/api-docs/headless/ceramic/LineJoin/) | abstract | Defines how line segments are joined at corners. |
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
| [Pinch](/api-docs/headless/ceramic/Pinch/) | class | A pinch gesture detector that recognizes two-finger pinch gestures. |
| [PinchStatus](/api-docs/headless/ceramic/PinchStatus/) | abstract | Represents the current state of a pinch gesture. |
| [PixelArt](/api-docs/headless/ceramic/PixelArt/) | class | A filter configured to display pixel art content with high-quality upscaling. |
| [PixelArtMask](/api-docs/headless/ceramic/PixelArtMask/) | abstract | Phosphor or LCD mask of a `PixelArt` filter in `CRT` mode. |
| [PixelArtMode](/api-docs/headless/ceramic/PixelArtMode/) | abstract | Which shader a `PixelArt` filter upscales its content with. |
| [PixelArtPreset](/api-docs/headless/ceramic/PixelArtPreset/) | class | A complete set of `PixelArt` settings, as data: every property of the filter, with the |
| [PixelArtQuality](/api-docs/headless/ceramic/PixelArtQuality/) | abstract | Cost of the beam reconstruction (`beamAmount`) of a `PixelArt` filter in `CRT` mode |
| [Pixels](/api-docs/headless/ceramic/Pixels/) | class | Utility class for manipulating raw RGBA pixel data. |
| [Platform](/api-docs/headless/ceramic/Platform/) | class | A class that encapsulate platform-specific code. |
| [Point](/api-docs/headless/ceramic/Point/) | class | A mutable 3D point class with automatic object pooling for memory efficiency. |
| [Pool](/api-docs/headless/ceramic/Pool/) | class | A generic object pool utility. |
| [Preloadable](/api-docs/headless/ceramic/Preloadable/) | interface | Interface for objects that can report their loading progress. |
| [Preloader](/api-docs/headless/ceramic/Preloader/) | class | A scene that displays loading progress for preloadable resources. |
| [PreloadStatus](/api-docs/headless/ceramic/PreloadStatus/) | abstract | Status values for preloadable resources. |
| [PremultiplyAlpha](/api-docs/headless/ceramic/PremultiplyAlpha/) | class | Utilities for converting between straight and premultiplied alpha in image data. |
| [Quad](/api-docs/headless/ceramic/Quad/) | class | The most basic and commonly used visual for displaying rectangles and images. |
| [ReadOnlyArray](/api-docs/headless/ceramic/ReadOnlyArray/) | abstract | `ReadOnlyArray` is an abstract over an ordinary `Array` which only exposes |
| [ReadOnlyMap](/api-docs/headless/ceramic/ReadOnlyMap/) | abstract | A read-only view of a Map that prevents modification. |
| [ReadOnlyPoint](/api-docs/headless/ceramic/ReadOnlyPoint/) | abstract | A read-only view of a Point that prevents modification. |
| [Rect](/api-docs/headless/ceramic/Rect/) | class | Represents a rectangular area defined by position and dimensions. |
| [Renderable](/api-docs/headless/ceramic/Renderable/) | class | A Visual whose rendering is delegated to a custom `render()` callback. |
| [Renderer](/api-docs/headless/ceramic/Renderer/) | class | The core 2D rendering engine for Ceramic, responsible for efficiently drawing all visuals to the ... |
| [RenderPrimitiveType](/api-docs/headless/ceramic/RenderPrimitiveType/) | abstract | Defines the primitive types used for rendering geometry. |
| [RenderTarget](/api-docs/headless/ceramic/RenderTarget/) | interface | A destination a `Visual` can be rendered into: the `screen`, or a `RenderTexture`. |
| [RenderTexture](/api-docs/headless/ceramic/RenderTexture/) | class | A texture that can be rendered to, allowing off-screen rendering. |
| [Repeat](/api-docs/headless/ceramic/Repeat/) | class | A visual component that repeats a texture pattern to fill a specified area. |
| [ReusableArray](/api-docs/headless/ceramic/ReusableArray/) | class | A reusable array to use in places that need a temporary array many times. |
| [RoundedRect](/api-docs/headless/ceramic/RoundedRect/) | class | A specialized shape that creates a rectangle with rounded corners. |
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
| [ScriptableLineCap](/api-docs/headless/ceramic/scriptable/ScriptableLineCap/) | class | Scriptable wrapper for LineCap to expose line cap modes to scripts. |
| [ScriptableLineJoin](/api-docs/headless/ceramic/scriptable/ScriptableLineJoin/) | class | Scriptable wrapper for LineJoin to expose line join modes to scripts. |
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
| [ThreadAffinity](/api-docs/headless/ceramic/ThreadAffinity/) | abstract | The kind of CPU cores a thread should run on (see `Runner.setThreadAffinity`), on |
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
| [TimelineKeyframe](/api-docs/headless/ceramic/TimelineKeyframe/) | class | Represents a keyframe in a timeline animation. |
| [TimelineKeyframeData](/api-docs/headless/ceramic/TimelineKeyframeData/) | typedef | Data structure representing a keyframe in serialized form. |
| [Timelines](/api-docs/headless/ceramic/Timelines/) | class | Central system for creating and binding timeline tracks and keyframes. |
| [TimelineTrack](/api-docs/headless/ceramic/TimelineTrack/) | class | Base class for animation tracks in a timeline system. |
| [TimelineTrackData](/api-docs/headless/ceramic/TimelineTrackData/) | typedef | Data structure representing an animation track in serialized form. |
| [Timer](/api-docs/headless/ceramic/Timer/) | class | Timer system for scheduling delayed and periodic callbacks. |
| [TimerCallback](/api-docs/headless/ceramic/TimerCallback/) | class | Internal data structure representing a scheduled timer callback. |
| [Touch](/api-docs/headless/ceramic/Touch/) | class | Represents a single touch point in a multi-touch interaction. |
| [Touches](/api-docs/headless/ceramic/Touches/) | abstract | A collection of active touch points for multi-touch handling. |
| [TouchesIterator](/api-docs/headless/ceramic/TouchesIterator/) | class | Iterator for the Touches collection. |
| [TouchInfo](/api-docs/headless/ceramic/TouchInfo/) | class | Information about a touch or mouse input event. |
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
| [VisualRendering](/api-docs/headless/ceramic/VisualRendering/) | abstract | How a `Visual` renders itself, used by the renderer to dispatch each visual |
| [VisualTransition](/api-docs/headless/ceramic/VisualTransition/) | class | A component that enables smooth property transitions for Visual objects. |
| [VisualTransitionProperties](/api-docs/headless/ceramic/VisualTransitionProperties/) | abstract | Property setter interface for visual transitions. |
| [WaitCallbacks](/api-docs/headless/ceramic/WaitCallbacks/) | class | Utility to create and wait for multiple callbacks and call |
| [WatchDirectory](/api-docs/headless/ceramic/WatchDirectory/) | class | A directory watcher that monitors file changes in specified directories. |
| [Zoomer](/api-docs/headless/ceramic/Zoomer/) | class | A container that enables zooming and panning of its content. |
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
| [TilemapMesh](/api-docs/headless/ceramic/TilemapMesh/) | class | Specialized Mesh visual used to render multiple tiles in a tilemap layer. |
| [TilemapOrientation](/api-docs/headless/ceramic/TilemapOrientation/) | enum | Defines the projection orientation of a tilemap. |
| [TilemapParser](/api-docs/headless/ceramic/TilemapParser/) | class | Universal tilemap parser supporting multiple tilemap formats. |
| [TilemapPlugin](/api-docs/headless/ceramic/TilemapPlugin/) | class | Main plugin class that integrates tilemap support into Ceramic. |
| [TilemapQuad](/api-docs/headless/ceramic/TilemapQuad/) | class | Specialized Quad visual used to render individual tiles in a tilemap layer. |
| [TilemapRenderOrder](/api-docs/headless/ceramic/TilemapRenderOrder/) | enum | Defines the order in which tiles are rendered in a tilemap. |
| [TilemapRenderType](/api-docs/headless/ceramic/TilemapRenderType/) | abstract |  |
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
| [LdtkRuleRunner](/api-docs/headless/ceramic/LdtkRuleRunner/) | class | Recomputes the auto tiles of an LDtk layer instance at runtime, with the same rule engine as the ... |
| [LdtkRuleTileset](/api-docs/headless/ceramic/LdtkRuleTileset/) | class | `ldtk.rules.RuleTileset` over an LDtk tileset definition. |
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
| [PagerView](/api-docs/headless/ceramic/PagerView/) | class | A scroll view that layouts its items as pages, where |
| [PagerViewDataSource](/api-docs/headless/ceramic/PagerViewDataSource/) | interface | Data source interface for PagerView that provides page content |
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
| [FieldUtils](/api-docs/headless/elements/FieldUtils/) | class | Utility class for field-related operations in the Elements UI framework. |
| [FieldView](/api-docs/headless/elements/FieldView/) | class | Base class for interactive field views in the Elements UI framework. |
| [FilePickerView](/api-docs/headless/elements/FilePickerView/) | class | A file picker dialog component built entirely with Elements UI. |
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
| [LabeledFieldGroupView](/api-docs/headless/elements/LabeledFieldGroupView/) | class | A container that groups multiple labeled field views in a horizontal layout. |
| [LabeledFieldView](/api-docs/headless/elements/LabeledFieldView/) | class |  |
| [LabeledView](/api-docs/headless/elements/LabeledView/) | class | A container that pairs a text label with any view, providing flexible label positioning. |
| [LabelPosition](/api-docs/headless/elements/LabelPosition/) | abstract | Enumeration defining the position of a label relative to its associated view. |
| [LabelView](/api-docs/headless/elements/LabelView/) | class | A themed text label for UI forms and layouts. |
| [ListStatus](/api-docs/headless/elements/ListStatus/) | abstract | Abstract wrapper for tracking list view state changes and item operations. |
| [ListView](/api-docs/headless/elements/ListView/) | class | A comprehensive list view with sorting, item management, and interaction features. |
| [ListViewDataSource](/api-docs/headless/elements/ListViewDataSource/) | class | Data source implementation for ListView's collection view. |
| [PendingDialog](/api-docs/headless/elements/PendingDialog/) | class | Model representing a pending dialog box with user interaction. |
| [PromptStatus](/api-docs/headless/elements/PromptStatus/) | abstract | Abstract type for tracking the completion status of prompt dialogs. |
| [RelatedToFieldView](/api-docs/headless/elements/RelatedToFieldView/) | interface | Interface for views that are related to or associated with a FieldView. |
| [Sanitize](/api-docs/headless/elements/Sanitize/) | class | Utility class for sanitizing and converting text input to numeric values. |
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

## Spec

| Type | Kind | Description |
|------|------|-------------|
| [Audio](/api-docs/headless/spec/Audio/) | interface | Backend interface for audio operations. |
| [Backend](/api-docs/headless/spec/Backend/) | interface | Main backend interface that provides access to all platform-specific functionality. |
| [Binaries](/api-docs/headless/spec/Binaries/) | interface | Backend interface for binary data loading operations. |
| [Clipboard](/api-docs/headless/spec/Clipboard/) | interface | Backend interface for system clipboard operations. |
| [Http](/api-docs/headless/spec/Http/) | interface | Backend interface for HTTP networking operations. |
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
| [Int64Helper](/api-docs/headless/haxe/Int64Helper/) | class | Helper for parsing to `Int64` instances. |
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
| [TypeApi](/api-docs/headless/haxe/rtti/TypeApi/) | class | Contains type and equality checks functionalities for RTTI. |
| [Typedef](/api-docs/headless/haxe/rtti/Typedef/) | typedef | The typedef runtime information. |
| [TypeInfos](/api-docs/headless/haxe/rtti/TypeInfos/) | typedef | The general runtime type information. |
| [TypeParams](/api-docs/headless/haxe/rtti/TypeParams/) | typedef | An array of strings representing the names of the type parameters the type |
| [TypeRoot](/api-docs/headless/haxe/rtti/TypeRoot/) | typedef | Array of `TypeTree`. |
| [TypeTree](/api-docs/headless/haxe/rtti/TypeTree/) | enum | The tree types of the runtime type. |
| [XmlParser](/api-docs/headless/haxe/rtti/XmlParser/) | class | XmlParser processes the runtime type information (RTTI) which |
| [Serializer](/api-docs/headless/haxe/Serializer/) | class | The Serializer class can be used to encode values and objects into a `String`, |
| [StackItem](/api-docs/headless/haxe/StackItem/) | enum | Elements return by `CallStack` methods. |
| [SysTools](/api-docs/headless/haxe/SysTools/) | class |  |
| [Timer](/api-docs/headless/haxe/Timer/) | class | The `Timer` class allows you to create asynchronous timers on platforms that |
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
| [Browser](/api-docs/headless/js/Browser/) | class |  |
| [AbortSignal](/api-docs/headless/js/html/AbortSignal/) | class | The `AbortSignal` interface represents a signal object that allows you to communicate with a DOM ... |
| [AddEventListenerOptions](/api-docs/headless/js/html/AddEventListenerOptions/) | typedef |  |
| [AlignSetting](/api-docs/headless/js/html/AlignSetting/) | abstract |  |
| [AnchorElement](/api-docs/headless/js/html/AnchorElement/) | class | The `HTMLAnchorElement` interface represents hyperlink elements and provides special properties a... |
| [Animation](/api-docs/headless/js/html/Animation/) | class | The `Animation` interface of the Web Animations API represents a single animation player and prov... |
| [AnimationEffect](/api-docs/headless/js/html/AnimationEffect/) | class | The `AnimationEffect` interface of the Web Animations API defines current and future animation ef... |
| [AnimationFilter](/api-docs/headless/js/html/AnimationFilter/) | typedef |  |
| [AnimationPlayState](/api-docs/headless/js/html/AnimationPlayState/) | abstract |  |
| [AnimationTimeline](/api-docs/headless/js/html/AnimationTimeline/) | class | The `AnimationTimeline` interface of the Web Animations API represents the timeline of an animation. |
| [AreaElement](/api-docs/headless/js/html/AreaElement/) | class | The `HTMLAreaElement` interface provides special properties and methods (beyond those of the regu... |
| [AssignedNodesOptions](/api-docs/headless/js/html/AssignedNodesOptions/) | typedef |  |
| [Attr](/api-docs/headless/js/html/Attr/) | class | This type represents a DOM element's attribute as an object. |
| [AudioElement](/api-docs/headless/js/html/AudioElement/) | class | The `HTMLAudioElement` interface provides access to the properties of `audio` elements, as well a... |
| [AudioStreamTrack](/api-docs/headless/js/html/AudioStreamTrack/) | class |  |
| [AudioTrack](/api-docs/headless/js/html/AudioTrack/) | class | The `AudioTrack` interface represents a single audio track from one of the HTML media elements, `... |
| [AudioTrackList](/api-docs/headless/js/html/AudioTrackList/) | class | The `AudioTrackList` interface is used to represent a list of the audio tracks contained within a... |
| [AutoKeyword](/api-docs/headless/js/html/AutoKeyword/) | abstract |  |
| [BarProp](/api-docs/headless/js/html/BarProp/) | class |  |
| [BaseElement](/api-docs/headless/js/html/BaseElement/) | class | The `HTMLBaseElement` interface contains the base URI for a document. |
| [Blob](/api-docs/headless/js/html/Blob/) | class | A `Blob` object represents a file-like object of immutable, raw data. |
| [BlobPropertyBag](/api-docs/headless/js/html/BlobPropertyBag/) | typedef |  |
| [BodyElement](/api-docs/headless/js/html/BodyElement/) | class | The `HTMLBodyElement` interface provides special properties (beyond those of the regular `HTMLEle... |
| [BRElement](/api-docs/headless/js/html/BRElement/) | class | The `HTMLBRElement` interface represents a HTML line break element (`br`). |
| [ButtonElement](/api-docs/headless/js/html/ButtonElement/) | class | The `HTMLButtonElement` interface provides properties and methods (beyond the `button` object int... |
| [Cache](/api-docs/headless/js/html/Cache/) | class | The `Cache` interface provides a storage mechanism for `Request` / `Response` object pairs that a... |
| [CacheQueryOptions](/api-docs/headless/js/html/CacheQueryOptions/) | typedef |  |
| [CacheStorage](/api-docs/headless/js/html/CacheStorage/) | class | The `CacheStorage` interface represents the storage for `Cache` objects. |
| [CacheStorageNamespace](/api-docs/headless/js/html/CacheStorageNamespace/) | abstract |  |
| [CanvasCaptureMediaStream](/api-docs/headless/js/html/CanvasCaptureMediaStream/) | class |  |
| [CanvasElement](/api-docs/headless/js/html/CanvasElement/) | class | The `HTMLCanvasElement` interface provides properties and methods for manipulating the layout and... |
| [CanvasGradient](/api-docs/headless/js/html/CanvasGradient/) | class | The `CanvasGradient` interface represents an opaque object describing a gradient. |
| [CanvasPattern](/api-docs/headless/js/html/CanvasPattern/) | class | The `CanvasPattern` interface represents an opaque object describing a pattern, based on an image... |
| [CanvasRenderingContext2D](/api-docs/headless/js/html/CanvasRenderingContext2D/) | class | To get an object of this interface, call `getContext()` on a `canvas element`, supplying "2d" as ... |
| [CanvasWindingRule](/api-docs/headless/js/html/CanvasWindingRule/) | abstract |  |
| [CaretPosition](/api-docs/headless/js/html/CaretPosition/) | class | The `CaretPosition` interface represents the caret postion, an indicator for the text insertion p... |
| [CDATASection](/api-docs/headless/js/html/CDATASection/) | class | The `CDATASection` interface represents a CDATA section that can be used within XML to include ex... |
| [ChannelPixelLayout](/api-docs/headless/js/html/ChannelPixelLayout/) | typedef |  |
| [ChannelPixelLayoutDataType](/api-docs/headless/js/html/ChannelPixelLayoutDataType/) | abstract |  |
| [CharacterData](/api-docs/headless/js/html/CharacterData/) | class | The `CharacterData` abstract interface represents a `Node` object that contains characters. |
| [Clipboard](/api-docs/headless/js/html/Clipboard/) | class | The `Clipboard` interface implements the Clipboard API, providing—if the user grants permission—b... |
| [Comment](/api-docs/headless/js/html/Comment/) | class | The `Comment` interface represents textual notations within markup; although it is generally not ... |
| [CompositeOperation](/api-docs/headless/js/html/CompositeOperation/) | abstract |  |
| [ComputedEffectTiming](/api-docs/headless/js/html/ComputedEffectTiming/) | typedef |  |
| [ConsoleInstance](/api-docs/headless/js/html/ConsoleInstance/) | interface | The `Console` object provides access to the browser's debugging console (e. |
| [ConstrainBooleanParameters](/api-docs/headless/js/html/ConstrainBooleanParameters/) | typedef |  |
| [ConstrainDOMStringParameters](/api-docs/headless/js/html/ConstrainDOMStringParameters/) | typedef |  |
| [ConstrainDoubleRange](/api-docs/headless/js/html/ConstrainDoubleRange/) | typedef |  |
| [ConstrainLongRange](/api-docs/headless/js/html/ConstrainLongRange/) | typedef |  |
| [ConvertCoordinateOptions](/api-docs/headless/js/html/ConvertCoordinateOptions/) | typedef |  |
| [Coordinates](/api-docs/headless/js/html/Coordinates/) | typedef | The `Coordinates` interface represents the position and altitude of the device on Earth, as well ... |
| [Crypto](/api-docs/headless/js/html/Crypto/) | class | The `Crypto` interface represents basic cryptography features available in the current context. |
| [CryptoKey](/api-docs/headless/js/html/CryptoKey/) | class | The `CryptoKey` interface represents a cryptographic key derived from a specific key algorithm. |
| [CSSBoxType](/api-docs/headless/js/html/CSSBoxType/) | abstract |  |
| [CSSRule](/api-docs/headless/js/html/CSSRule/) | class | The `CSSRule` interface represents a single CSS rule. |
| [CSSRuleList](/api-docs/headless/js/html/CSSRuleList/) | class | A `CSSRuleList` is an (indirect-modify only) array-like object containing an ordered collection o... |
| [CSSStyleDeclaration](/api-docs/headless/js/html/CSSStyleDeclaration/) | class | `CSSStyleDeclaration` represents a collection of CSS property-value pairs. It is used in a few APIs: |
| [CSSStyleSheet](/api-docs/headless/js/html/CSSStyleSheet/) | class | The `CSSStyleSheet` interface represents a single CSS style sheet. |
| [DataListElement](/api-docs/headless/js/html/DataListElement/) | class | The `HTMLDataListElement` interface provides special properties (beyond the `HTMLElement` object ... |
| [DataTransfer](/api-docs/headless/js/html/DataTransfer/) | class | The `DataTransfer` object is used to hold the data that is being dragged during a drag and drop o... |
| [DataTransferItem](/api-docs/headless/js/html/DataTransferItem/) | class | The `DataTransferItem` object represents one drag data item. |
| [DataTransferItemList](/api-docs/headless/js/html/DataTransferItemList/) | class | The `DataTransferItemList` object is a list of `DataTransferItem` objects representing items bein... |
| [DetailsElement](/api-docs/headless/js/html/DetailsElement/) | class | The `HTMLDetailsElement` interface provides special properties (beyond the regular `HTMLElement` ... |
| [DialogElement](/api-docs/headless/js/html/DialogElement/) | class | The `HTMLDialogElement` interface provides methods to manipulate `<dialog>` elements. |
| [DirectionSetting](/api-docs/headless/js/html/DirectionSetting/) | abstract |  |
| [Directory](/api-docs/headless/js/html/Directory/) | class |  |
| [DirectoryElement](/api-docs/headless/js/html/DirectoryElement/) | class |  |
| [DivElement](/api-docs/headless/js/html/DivElement/) | class | The `HTMLDivElement` interface provides special properties (beyond the regular `HTMLElement` inte... |
| [DListElement](/api-docs/headless/js/html/DListElement/) | class | The `HTMLDListElement` interface provides special properties (beyond those of the regular `HTMLEl... |
| [Document](/api-docs/headless/js/html/Document/) | class | The `Document` interface represents any web page loaded in the browser and serves as an entry poi... |
| [DocumentFragment](/api-docs/headless/js/html/DocumentFragment/) | class | The `DocumentFragment` interface represents a minimal document object that has no parent. |
| [DocumentTimeline](/api-docs/headless/js/html/DocumentTimeline/) | class | The `DocumentTimeline` interface of the the Web Animations API represents animation timelines, in... |
| [DocumentTimelineOptions](/api-docs/headless/js/html/DocumentTimelineOptions/) | typedef |  |
| [DocumentType](/api-docs/headless/js/html/DocumentType/) | class | The `DocumentType` interface represents a `Node` containing a doctype. |
| [DOMElement](/api-docs/headless/js/html/DOMElement/) | class | `Element` is the most general base class from which all objects in a `Document` inherit. |
| [DOMException](/api-docs/headless/js/html/DOMException/) | class | The `DOMException` interface represents an abnormal event (called an exception) which occurs as a... |
| [DOMImplementation](/api-docs/headless/js/html/DOMImplementation/) | class | The `DOMImplementation` interface represent an object providing methods which are not dependent o... |
| [DOMPoint](/api-docs/headless/js/html/DOMPoint/) | class | A `DOMPoint` object represents a 2D or 3D point in a coordinate system; it includes values for th... |
| [DOMPointInit](/api-docs/headless/js/html/DOMPointInit/) | typedef | The `DOMPointInit` dictionary is used to provide the values of the coordinates and perspective wh... |
| [DOMPointReadOnly](/api-docs/headless/js/html/DOMPointReadOnly/) | class | The `DOMPointReadOnly` interface specifies the coordinate and perspective fields used by `DOMPoin... |
| [DOMQuad](/api-docs/headless/js/html/DOMQuad/) | class | A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral. |
| [DOMQuadJSON](/api-docs/headless/js/html/DOMQuadJSON/) | typedef |  |
| [DOMRect](/api-docs/headless/js/html/DOMRect/) | class | A `DOMRect` represents a rectangle. |
| [DOMRectList](/api-docs/headless/js/html/DOMRectList/) | class |  |
| [DOMRectReadOnly](/api-docs/headless/js/html/DOMRectReadOnly/) | class | The `DOMRectReadOnly` interface specifies the standard properties used by `DOMRect` to define a r... |
| [DOMStringList](/api-docs/headless/js/html/DOMStringList/) | class | A type returned by some APIs which contains a list of DOMString (strings). |
| [DOMStringMap](/api-docs/headless/js/html/DOMStringMap/) | class | Used by the `dataset` HTML attribute to represent data for custom attributes added to elements. |
| [DOMTokenList](/api-docs/headless/js/html/DOMTokenList/) | class | The `DOMTokenList` interface represents a set of space-separated tokens. |
| [EffectTiming](/api-docs/headless/js/html/EffectTiming/) | typedef | The `EffectTiming` dictionary, part of the Web Animations API, is used by `Element. |
| [Element](/api-docs/headless/js/html/Element/) | class | The `HTMLElement` interface represents any HTML element. |
| [ElementCreationOptions](/api-docs/headless/js/html/ElementCreationOptions/) | typedef |  |
| [EmbedElement](/api-docs/headless/js/html/EmbedElement/) | class | The `HTMLEmbedElement` interface, which provides special properties (beyond the regular `HTMLElem... |
| [MediaKeyError](/api-docs/headless/js/html/eme/MediaKeyError/) | class |  |
| [MediaKeys](/api-docs/headless/js/html/eme/MediaKeys/) | class | The `MediaKeys` interface of EncryptedMediaExtensions API the represents a set of keys that an as... |
| [MediaKeySession](/api-docs/headless/js/html/eme/MediaKeySession/) | class | The `MediaKeySession` interface of the EncryptedMediaExtensions API represents a context for mess... |
| [MediaKeySessionType](/api-docs/headless/js/html/eme/MediaKeySessionType/) | abstract |  |
| [MediaKeysRequirement](/api-docs/headless/js/html/eme/MediaKeysRequirement/) | abstract |  |
| [MediaKeyStatusMap](/api-docs/headless/js/html/eme/MediaKeyStatusMap/) | class | The `MediaKeyStatusMap` interface of the EncryptedMediaExtensions API is a read-only map of media... |
| [MediaKeySystemAccess](/api-docs/headless/js/html/eme/MediaKeySystemAccess/) | class | The `MediaKeySystemAccess` interface of the EncryptedMediaExtensions API provides access to a Key... |
| [MediaKeySystemConfiguration](/api-docs/headless/js/html/eme/MediaKeySystemConfiguration/) | typedef | The `MediaKeySystemConfiguration` interface Encrypted Media Extensions API provides configuration... |
| [MediaKeySystemMediaCapability](/api-docs/headless/js/html/eme/MediaKeySystemMediaCapability/) | typedef |  |
| [EndingTypes](/api-docs/headless/js/html/EndingTypes/) | abstract |  |
| [Event](/api-docs/headless/js/html/Event/) | class | The `Event` interface represents any event which takes place in the DOM; some are user-generated ... |
| [EventInit](/api-docs/headless/js/html/EventInit/) | typedef |  |
| [EventListener](/api-docs/headless/js/html/EventListener/) | typedef | The `EventListener` interface represents an object that can handle an event dispatched by an `Eve... |
| [EventListenerOptions](/api-docs/headless/js/html/EventListenerOptions/) | typedef |  |
| [EventTarget](/api-docs/headless/js/html/EventTarget/) | class | `EventTarget` is an interface implemented by objects that can receive events and may have listene... |
| [FetchObserver](/api-docs/headless/js/html/FetchObserver/) | class |  |
| [FetchState](/api-docs/headless/js/html/FetchState/) | abstract |  |
| [FieldSetElement](/api-docs/headless/js/html/FieldSetElement/) | class | The `HTMLFieldSetElement` interface has special properties and methods (beyond the regular `HTMLE... |
| [File](/api-docs/headless/js/html/File/) | class | The `File` interface provides information about files and allows JavaScript in a web page to acce... |
| [FileList](/api-docs/headless/js/html/FileList/) | class | An object of this type is returned by the `files` property of the HTML `input` element; this lets... |
| [FilePropertyBag](/api-docs/headless/js/html/FilePropertyBag/) | typedef |  |
| [FillMode](/api-docs/headless/js/html/FillMode/) | abstract |  |
| [FontElement](/api-docs/headless/js/html/FontElement/) | class | Implements the document object model (DOM) representation of the font element. |
| [FontFace](/api-docs/headless/js/html/FontFace/) | class | The `FontFace` interface represents a single usable font face. |
| [FontFaceDescriptors](/api-docs/headless/js/html/FontFaceDescriptors/) | typedef |  |
| [FontFaceLoadStatus](/api-docs/headless/js/html/FontFaceLoadStatus/) | abstract |  |
| [FontFaceSet](/api-docs/headless/js/html/FontFaceSet/) | class | The `FontFaceSet` interface of the CSS Font Loading API manages the loading of font-faces and que... |
| [FontFaceSetIterator](/api-docs/headless/js/html/FontFaceSetIterator/) | typedef |  |
| [FontFaceSetIteratorResult](/api-docs/headless/js/html/FontFaceSetIteratorResult/) | typedef |  |
| [FontFaceSetLoadStatus](/api-docs/headless/js/html/FontFaceSetLoadStatus/) | abstract |  |
| [FormData](/api-docs/headless/js/html/FormData/) | class | The `FormData` interface provides a way to easily construct a set of key/value pairs representing... |
| [FormDataIterator](/api-docs/headless/js/html/FormDataIterator/) | typedef |  |
| [FormElement](/api-docs/headless/js/html/FormElement/) | class | The `HTMLFormElement` interface represents a `form` element in the DOM; it allows access to and i... |
| [FrameElement](/api-docs/headless/js/html/FrameElement/) | class |  |
| [FrameSetElement](/api-docs/headless/js/html/FrameSetElement/) | class | The `HTMLFrameSetElement` interface provides special properties (beyond those of the regular `HTM... |
| [FullscreenOptions](/api-docs/headless/js/html/FullscreenOptions/) | typedef | An object that controls the behavior of the transition to fullscreen mode. |
| [FullscreenOptionsNavigationUI](/api-docs/headless/js/html/FullscreenOptionsNavigationUI/) | abstract |  |
| [Gamepad](/api-docs/headless/js/html/Gamepad/) | class | The `Gamepad` interface of the Gamepad API defines an individual gamepad or other controller, all... |
| [GamepadButton](/api-docs/headless/js/html/GamepadButton/) | class | The `GamepadButton` interface defines an individual button of a gamepad or other controller, allo... |
| [GamepadMappingType](/api-docs/headless/js/html/GamepadMappingType/) | abstract |  |
| [Geolocation](/api-docs/headless/js/html/Geolocation/) | typedef | The `Geolocation` interface represents an object able to programmatically obtain the position of ... |
| [GetNotificationOptions](/api-docs/headless/js/html/GetNotificationOptions/) | typedef |  |
| [GetRootNodeOptions](/api-docs/headless/js/html/GetRootNodeOptions/) | typedef |  |
| [HeadElement](/api-docs/headless/js/html/HeadElement/) | class | The `HTMLHeadElement` interface contains the descriptive information, or metadata, for a document. |
| [Headers](/api-docs/headless/js/html/Headers/) | class | The `Headers` interface of the Fetch API allows you to perform various actions on HTTP request an... |
| [HeadersIterator](/api-docs/headless/js/html/HeadersIterator/) | typedef |  |
| [History](/api-docs/headless/js/html/History/) | class | The `History` interface allows manipulation of the browser session history, that is the pages vis... |
| [HitRegionOptions](/api-docs/headless/js/html/HitRegionOptions/) | typedef |  |
| [HRElement](/api-docs/headless/js/html/HRElement/) | class | The `HTMLHRElement` interface provides special properties (beyond those of the `HTMLElement` inte... |
| [HTMLAllCollection](/api-docs/headless/js/html/HTMLAllCollection/) | class |  |
| [HTMLCollection](/api-docs/headless/js/html/HTMLCollection/) | class | The `HTMLCollection` interface represents a generic collection (array-like object similar to argu... |
| [HTMLDocument](/api-docs/headless/js/html/HTMLDocument/) | class | `HTMLDocument` is an abstract interface which extends the `Document` interface to add HTML-specif... |
| [HtmlElement](/api-docs/headless/js/html/HtmlElement/) | class | The `HTMLHtmlElement` interface serves as the root node for a given HTML document. |
| [HTMLOptionsCollection](/api-docs/headless/js/html/HTMLOptionsCollection/) | class | `HTMLOptionsCollection` is an interface representing a collection of HTML option elements (in doc... |
| [HTMLPropertiesCollection](/api-docs/headless/js/html/HTMLPropertiesCollection/) | class |  |
| [Cursor](/api-docs/headless/js/html/idb/Cursor/) | class | The `IDBCursor` interface of the IndexedDB API represents a cursor for traversing or iterating ov... |
| [CursorDirection](/api-docs/headless/js/html/idb/CursorDirection/) | abstract |  |
| [Database](/api-docs/headless/js/html/idb/Database/) | class | The `IDBDatabase` interface of the IndexedDB API provides a connection to a database; you can use... |
| [Factory](/api-docs/headless/js/html/idb/Factory/) | class | In the following code snippet, we make a request to open a database, and include handlers for the... |
| [Index](/api-docs/headless/js/html/idb/Index/) | class | `IDBIndex` interface of the IndexedDB API provides asynchronous access to an index in a database. |
| [IndexParameters](/api-docs/headless/js/html/idb/IndexParameters/) | typedef |  |
| [ObjectStore](/api-docs/headless/js/html/idb/ObjectStore/) | class | This example shows a variety of different uses of object stores, from updating the data structure... |
| [ObjectStoreParameters](/api-docs/headless/js/html/idb/ObjectStoreParameters/) | typedef |  |
| [OpenDBOptions](/api-docs/headless/js/html/idb/OpenDBOptions/) | typedef |  |
| [OpenDBRequest](/api-docs/headless/js/html/idb/OpenDBRequest/) | class | Also inherits methods from its parents `IDBRequest` and `EventTarget`. |
| [Request](/api-docs/headless/js/html/idb/Request/) | class | The request object does not initially contain any information about the result of the operation, ... |
| [RequestReadyState](/api-docs/headless/js/html/idb/RequestReadyState/) | abstract |  |
| [Transaction](/api-docs/headless/js/html/idb/Transaction/) | class | Note that as of Firefox 40, IndexedDB transactions have relaxed durability guarantees to increase... |
| [TransactionMode](/api-docs/headless/js/html/idb/TransactionMode/) | abstract |  |
| [IFrameElement](/api-docs/headless/js/html/IFrameElement/) | class | The `HTMLIFrameElement` interface provides special properties and methods (beyond those of the `H... |
| [ImageBitmap](/api-docs/headless/js/html/ImageBitmap/) | class | The `ImageBitmap` interface represents a bitmap image which can be drawn to a `canvas` without un... |
| [ImageBitmapFormat](/api-docs/headless/js/html/ImageBitmapFormat/) | abstract |  |
| [ImageData](/api-docs/headless/js/html/ImageData/) | class | The `ImageData` interface represents the underlying pixel data of an area of a `canvas` element. |
| [ImageElement](/api-docs/headless/js/html/ImageElement/) | class | The `HTMLImageElement` interface provides special properties and methods  for manipulating the la... |
| [InputElement](/api-docs/headless/js/html/InputElement/) | class | The `HTMLInputElement` interface provides special properties and methods for manipulating the lay... |
| [IterationCompositeOperation](/api-docs/headless/js/html/IterationCompositeOperation/) | abstract |  |
| [KeyframeAnimationOptions](/api-docs/headless/js/html/KeyframeAnimationOptions/) | typedef |  |
| [KeyframeEffectOptions](/api-docs/headless/js/html/KeyframeEffectOptions/) | typedef |  |
| [LabelElement](/api-docs/headless/js/html/LabelElement/) | class | The `HTMLLabelElement` interface gives access to properties specific to `label` elements. |
| [LegendElement](/api-docs/headless/js/html/LegendElement/) | class | The `HTMLLegendElement` is an interface allowing to access properties of the `legend` elements. |
| [LIElement](/api-docs/headless/js/html/LIElement/) | class | The `HTMLLIElement` interface exposes specific properties and methods (beyond those defined by re... |
| [LineAlignSetting](/api-docs/headless/js/html/LineAlignSetting/) | abstract |  |
| [LinkElement](/api-docs/headless/js/html/LinkElement/) | class | The `HTMLLinkElement` interface represents reference information for external resources and the r... |
| [Location](/api-docs/headless/js/html/Location/) | class | The `Location` interface represents the location (URL) of the object it is linked to. |
| [MapElement](/api-docs/headless/js/html/MapElement/) | class | The `HTMLMapElement` interface provides special properties and methods (beyond those of the regul... |
| [MediaDeviceInfo](/api-docs/headless/js/html/MediaDeviceInfo/) | class | The `MediaDevicesInfo` interface contains information that describes a single media input or outp... |
| [MediaDeviceKind](/api-docs/headless/js/html/MediaDeviceKind/) | abstract |  |
| [MediaDevices](/api-docs/headless/js/html/MediaDevices/) | class | The `MediaDevices` interface provides access to connected media input devices like cameras and mi... |
| [MediaElement](/api-docs/headless/js/html/MediaElement/) | class | The `HTMLMediaElement` interface adds to `HTMLElement` the properties and methods needed to suppo... |
| [MediaError](/api-docs/headless/js/html/MediaError/) | class | The `MediaError` interface represents an error which occurred while handling media in an HTML med... |
| [MediaKeyStatusMapIterator](/api-docs/headless/js/html/MediaKeyStatusMapIterator/) | typedef |  |
| [MediaList](/api-docs/headless/js/html/MediaList/) | class |  |
| [MediaQueryList](/api-docs/headless/js/html/MediaQueryList/) | class | A `MediaQueryList` object stores information on a media query applied to a document, and handles ... |
| [MediaStream](/api-docs/headless/js/html/MediaStream/) | class | The `MediaStream` interface represents a stream of media content. |
| [MediaStreamConstraints](/api-docs/headless/js/html/MediaStreamConstraints/) | typedef | The `MediaStreamConstraints` dictionary is used when calling `getUserMedia()` to specify what kin... |
| [MediaStreamTrack](/api-docs/headless/js/html/MediaStreamTrack/) | class | The `MediaStreamTrack` interface represents a single media track within a stream; typically, thes... |
| [MediaStreamTrackState](/api-docs/headless/js/html/MediaStreamTrackState/) | abstract |  |
| [MediaTrackConstraints](/api-docs/headless/js/html/MediaTrackConstraints/) | typedef | The `MediaTrackConstraints` dictionary is used to describe a set of capabilities and the value or... |
| [MediaTrackConstraintSet](/api-docs/headless/js/html/MediaTrackConstraintSet/) | typedef |  |
| [MediaTrackSettings](/api-docs/headless/js/html/MediaTrackSettings/) | typedef | The `MediaTrackSettings` dictionary is used to return the current values configured for each of a... |
| [MediaTrackSupportedConstraints](/api-docs/headless/js/html/MediaTrackSupportedConstraints/) | typedef | The `MediaTrackSupportedConstraints` dictionary establishes the list of constrainable properties ... |
| [MenuElement](/api-docs/headless/js/html/MenuElement/) | class |  |
| [MetaElement](/api-docs/headless/js/html/MetaElement/) | class | The `HTMLMetaElement` interface contains descriptive metadata about a document. |
| [MeterElement](/api-docs/headless/js/html/MeterElement/) | class | The HTML `meter` elements expose the `HTMLMeterElement` interface, which provides special propert... |
| [MIDIAccess](/api-docs/headless/js/html/midi/MIDIAccess/) | class | The `MIDIAccess` interface of the Web MIDI API provides methods for listing MIDI input and output... |
| [MIDIInputMap](/api-docs/headless/js/html/midi/MIDIInputMap/) | class | The `MIDIInputMap` read-only interface of the Web MIDI API provides a `Map`-like interface to the... |
| [MIDIOptions](/api-docs/headless/js/html/midi/MIDIOptions/) | typedef |  |
| [MIDIOutputMap](/api-docs/headless/js/html/midi/MIDIOutputMap/) | class | The `MIDIOutputMap` read-only interface of the Web MIDI API provides a `Map`-like interface to th... |
| [MimeType](/api-docs/headless/js/html/MimeType/) | class | The `MimeType` interface provides contains information about a MIME type associated with a partic... |
| [MimeTypeArray](/api-docs/headless/js/html/MimeTypeArray/) | class | The `MimeTypeArray` interface returns an array of `MimeType` instances, each of which contains in... |
| [ModElement](/api-docs/headless/js/html/ModElement/) | class | The `HTMLModElement` interface provides special properties (beyond the regular methods and proper... |
| [NamedNodeMap](/api-docs/headless/js/html/NamedNodeMap/) | class | The `NamedNodeMap` interface represents a collection of `Attr` objects. |
| [Navigator](/api-docs/headless/js/html/Navigator/) | class | The `Navigator` interface represents the state and the identity of the user agent. |
| [Node](/api-docs/headless/js/html/Node/) | class | `Node` is an interface from which a number of DOM API object types inherit. |
| [NodeFilter](/api-docs/headless/js/html/NodeFilter/) | class | A `NodeFilter` interface represents an object used to filter the nodes in a `NodeIterator` or `Tr... |
| [NodeIterator](/api-docs/headless/js/html/NodeIterator/) | class | The `NodeIterator` interface represents an iterator over the members of a list of the nodes in a ... |
| [NodeList](/api-docs/headless/js/html/NodeList/) | class | `NodeList` objects are collections of nodes such as those returned by properties such as `Node. |
| [Notification](/api-docs/headless/js/html/Notification/) | class | The `Notification` interface of the Notifications API is used to configure and display desktop no... |
| [NotificationDirection](/api-docs/headless/js/html/NotificationDirection/) | abstract |  |
| [NotificationOptions](/api-docs/headless/js/html/NotificationOptions/) | typedef |  |
| [NotificationPermission](/api-docs/headless/js/html/NotificationPermission/) | abstract |  |
| [ObjectElement](/api-docs/headless/js/html/ObjectElement/) | class | The `HTMLObjectElement` interface provides special properties and methods (beyond those on the `H... |
| [ObserverCallback](/api-docs/headless/js/html/ObserverCallback/) | typedef |  |
| [OListElement](/api-docs/headless/js/html/OListElement/) | class | The `HTMLOListElement` interface provides special properties (beyond those defined on the regular... |
| [OptGroupElement](/api-docs/headless/js/html/OptGroupElement/) | class | The `HTMLOptGroupElement` interface provides special properties and methods (beyond the regular `... |
| [OptionalEffectTiming](/api-docs/headless/js/html/OptionalEffectTiming/) | typedef |  |
| [OptionElement](/api-docs/headless/js/html/OptionElement/) | class | The `HTMLOptionElement` interface represents `option` elements and inherits all classes and metho... |
| [OrientationLockType](/api-docs/headless/js/html/OrientationLockType/) | abstract |  |
| [OrientationType](/api-docs/headless/js/html/OrientationType/) | abstract |  |
| [OutputElement](/api-docs/headless/js/html/OutputElement/) | class | The `HTMLOutputElement` interface provides properties and methods (beyond those inherited from `H... |
| [ParagraphElement](/api-docs/headless/js/html/ParagraphElement/) | class | The `HTMLParagraphElement` interface provides special properties (beyond those of the regular `HT... |
| [ParamElement](/api-docs/headless/js/html/ParamElement/) | class | The `HTMLParamElement` interface provides special properties (beyond those of the regular `HTMLEl... |
| [Path2D](/api-docs/headless/js/html/Path2D/) | class | The `Path2D` interface of the Canvas 2D API is used to declare paths that are then later used on ... |
| [Performance](/api-docs/headless/js/html/Performance/) | class | The `Performance` interface provides access to performance-related information for the current page. |
| [PerformanceEntry](/api-docs/headless/js/html/PerformanceEntry/) | class | The `PerformanceEntry` object encapsulates a single performance metric that is part of the perfor... |
| [PerformanceNavigation](/api-docs/headless/js/html/PerformanceNavigation/) | class | The legacy `PerformanceNavigation` interface represents information about how the navigation to t... |
| [PerformanceTiming](/api-docs/headless/js/html/PerformanceTiming/) | class | The `PerformanceTiming` interface is a legacy interface kept for backwards compatibility and cont... |
| [Permissions](/api-docs/headless/js/html/Permissions/) | class | Documentation [Permissions](https://developer. |
| [PermissionState](/api-docs/headless/js/html/PermissionState/) | abstract |  |
| [PermissionStatus](/api-docs/headless/js/html/PermissionStatus/) | class | The `PermissionStatus` interface of the Permissions API provides the state of an object and an ev... |
| [PictureElement](/api-docs/headless/js/html/PictureElement/) | class | The `HTMLPictureElement` interface represents a `picture` HTML element. |
| [PlaybackDirection](/api-docs/headless/js/html/PlaybackDirection/) | abstract |  |
| [Plugin](/api-docs/headless/js/html/Plugin/) | class | The `Plugin` interface provides information about a browser plugin. |
| [PluginArray](/api-docs/headless/js/html/PluginArray/) | class | The `PluginArray` interface is used to store a list of `Plugin` objects describing the available ... |
| [Position](/api-docs/headless/js/html/Position/) | typedef | The `Position` interface represents the position of the concerned device at a given time. |
| [PositionAlignSetting](/api-docs/headless/js/html/PositionAlignSetting/) | abstract |  |
| [PositionError](/api-docs/headless/js/html/PositionError/) | class | The `PositionError` interface represents the reason of an error occurring when using the geolocat... |
| [PositionOptions](/api-docs/headless/js/html/PositionOptions/) | typedef | The `PositionOptions` interface describes an object containing option properties to pass as a par... |
| [PreElement](/api-docs/headless/js/html/PreElement/) | class | The `HTMLPreElement` interface expose specific properties and methods (beyond those defined by re... |
| [ProcessingInstruction](/api-docs/headless/js/html/ProcessingInstruction/) | class | A processing instruction embeds application-specific instructions in XML which can be ignored by ... |
| [ProgressElement](/api-docs/headless/js/html/ProgressElement/) | class | The `HTMLProgressElement` interface provides special properties and methods (beyond the regular `... |
| [PropertyNodeList](/api-docs/headless/js/html/PropertyNodeList/) | class |  |
| [PushEncryptionKeyName](/api-docs/headless/js/html/push/PushEncryptionKeyName/) | abstract |  |
| [PushManager](/api-docs/headless/js/html/push/PushManager/) | class | The `PushManager` interface of the Push API provides a way to receive notifications from third-pa... |
| [PushPermissionState](/api-docs/headless/js/html/push/PushPermissionState/) | abstract |  |
| [PushSubscription](/api-docs/headless/js/html/push/PushSubscription/) | class | The `PushSubscription` interface of the Push API provides a subcription's URL endpoint and allows... |
| [PushSubscriptionInit](/api-docs/headless/js/html/push/PushSubscriptionInit/) | typedef |  |
| [PushSubscriptionJSON](/api-docs/headless/js/html/push/PushSubscriptionJSON/) | typedef |  |
| [PushSubscriptionKeys](/api-docs/headless/js/html/push/PushSubscriptionKeys/) | typedef |  |
| [PushSubscriptionOptions](/api-docs/headless/js/html/push/PushSubscriptionOptions/) | class |  |
| [PushSubscriptionOptionsInit](/api-docs/headless/js/html/push/PushSubscriptionOptionsInit/) | typedef |  |
| [QuoteElement](/api-docs/headless/js/html/QuoteElement/) | class | The `HTMLQuoteElement` interface provides special properties and methods (beyond the regular `HTM... |
| [Range](/api-docs/headless/js/html/Range/) | class | The `Range` interface represents a fragment of a document that can contain nodes and parts of tex... |
| [ReferrerPolicy](/api-docs/headless/js/html/ReferrerPolicy/) | abstract |  |
| [RegistrationOptions](/api-docs/headless/js/html/RegistrationOptions/) | typedef |  |
| [Request](/api-docs/headless/js/html/Request/) | class | The `Request` interface of the Fetch API represents a resource request. |
| [RequestCache](/api-docs/headless/js/html/RequestCache/) | abstract |  |
| [RequestCredentials](/api-docs/headless/js/html/RequestCredentials/) | abstract |  |
| [RequestDestination](/api-docs/headless/js/html/RequestDestination/) | abstract | The `RequestDestination` enumerated type contains the permitted values for a request's `destinati... |
| [RequestInit](/api-docs/headless/js/html/RequestInit/) | typedef |  |
| [RequestMode](/api-docs/headless/js/html/RequestMode/) | abstract |  |
| [RequestRedirect](/api-docs/headless/js/html/RequestRedirect/) | abstract |  |
| [Response](/api-docs/headless/js/html/Response/) | class | The `Response` interface of the Fetch API represents the response to a request. |
| [ResponseInit](/api-docs/headless/js/html/ResponseInit/) | typedef |  |
| [ResponseType](/api-docs/headless/js/html/ResponseType/) | abstract |  |
| [Screen](/api-docs/headless/js/html/Screen/) | class | The `Screen` interface represents a screen, usually the one on which the current window is being ... |
| [ScreenOrientation](/api-docs/headless/js/html/ScreenOrientation/) | class | The `ScreenOrientation` interface of the the Screen Orientation API provides information about th... |
| [ScriptElement](/api-docs/headless/js/html/ScriptElement/) | class | HTML `script` elements expose the `HTMLScriptElement` interface, which provides special propertie... |
| [ScrollBehavior](/api-docs/headless/js/html/ScrollBehavior/) | abstract |  |
| [ScrollIntoViewOptions](/api-docs/headless/js/html/ScrollIntoViewOptions/) | typedef |  |
| [ScrollLogicalPosition](/api-docs/headless/js/html/ScrollLogicalPosition/) | abstract |  |
| [ScrollOptions](/api-docs/headless/js/html/ScrollOptions/) | typedef |  |
| [ScrollRestoration](/api-docs/headless/js/html/ScrollRestoration/) | abstract |  |
| [ScrollSetting](/api-docs/headless/js/html/ScrollSetting/) | abstract |  |
| [ScrollToOptions](/api-docs/headless/js/html/ScrollToOptions/) | typedef |  |
| [SelectElement](/api-docs/headless/js/html/SelectElement/) | class | The `HTMLSelectElement` interface represents a `select` HTML Element. |
| [Selection](/api-docs/headless/js/html/Selection/) | class | A `Selection` object represents the range of text selected by the user or the current position of... |
| [SelectionMode](/api-docs/headless/js/html/SelectionMode/) | abstract |  |
| [ServiceWorker](/api-docs/headless/js/html/ServiceWorker/) | class | The `ServiceWorker` interface of the ServiceWorker API provides a reference to a service worker. |
| [ServiceWorkerContainer](/api-docs/headless/js/html/ServiceWorkerContainer/) | class | The `ServiceWorkerContainer` interface of the ServiceWorker API provides an object representing t... |
| [ServiceWorkerRegistration](/api-docs/headless/js/html/ServiceWorkerRegistration/) | class | The `ServiceWorkerRegistration` interface of the ServiceWorker API represents the service worker ... |
| [ServiceWorkerState](/api-docs/headless/js/html/ServiceWorkerState/) | abstract | The `ServiceWorkerState` is associated with its `ServiceWorker`'s state. |
| [ServiceWorkerUpdateViaCache](/api-docs/headless/js/html/ServiceWorkerUpdateViaCache/) | abstract |  |
| [ShadowRoot](/api-docs/headless/js/html/ShadowRoot/) | class | The `ShadowRoot` interface of the Shadow DOM API is the root node of a DOM subtree that is render... |
| [ShadowRootInit](/api-docs/headless/js/html/ShadowRootInit/) | typedef |  |
| [ShadowRootMode](/api-docs/headless/js/html/ShadowRootMode/) | abstract |  |
| [SlotElement](/api-docs/headless/js/html/SlotElement/) | class | The `HTMLSlotElement` interface of the Shadow DOM API enables access to the name and assigned nod... |
| [SourceElement](/api-docs/headless/js/html/SourceElement/) | class | The `HTMLSourceElement` interface provides special properties (beyond the regular `HTMLElement` o... |
| [SpanElement](/api-docs/headless/js/html/SpanElement/) | class | The `HTMLSpanElement` interface represents a `span` element and derives from the `HTMLElement` in... |
| [SpeechSynthesis](/api-docs/headless/js/html/SpeechSynthesis/) | class | The `SpeechSynthesis` interface of the Web Speech API is the controller interface for the speech ... |
| [SpeechSynthesisUtterance](/api-docs/headless/js/html/SpeechSynthesisUtterance/) | class | The `SpeechSynthesisUtterance` interface of the Web Speech API represents a speech request. |
| [SpeechSynthesisVoice](/api-docs/headless/js/html/SpeechSynthesisVoice/) | class | The `SpeechSynthesisVoice` interface of the Web Speech API represents a voice that the system sup... |
| [Storage](/api-docs/headless/js/html/Storage/) | class | The `Storage` interface of the Web Storage API provides access to a particular domain's session o... |
| [StorageEstimate](/api-docs/headless/js/html/StorageEstimate/) | typedef | The `StorageEstimate` dictionary is used by the `StorageManager` to provide estimates of the size... |
| [StorageManager](/api-docs/headless/js/html/StorageManager/) | class | The `StorageManager` interface of the the Storage API provides an interface for managing persista... |
| [StorageType](/api-docs/headless/js/html/StorageType/) | abstract |  |
| [StyleElement](/api-docs/headless/js/html/StyleElement/) | class | The `HTMLStyleElement` interface represents a `style` element. |
| [StyleSheet](/api-docs/headless/js/html/StyleSheet/) | class | An object implementing the `StyleSheet` interface represents a single style sheet. |
| [StyleSheetList](/api-docs/headless/js/html/StyleSheetList/) | class | The `StyleSheetList` interface represents a list of `StyleSheet`. |
| [SubtleCrypto](/api-docs/headless/js/html/SubtleCrypto/) | class | The `SubtleCrypto` interface represents a set of cryptographic primitives. |
| [Angle](/api-docs/headless/js/html/svg/Angle/) | class | The `SVGAngle` interface is used to represent a value that can be an `angle` or `number` value. |
| [AnimatedLength](/api-docs/headless/js/html/svg/AnimatedLength/) | class | The `SVGAnimatedLength` interface is used for attributes of basic type length which can be animated. |
| [AnimatedPreserveAspectRatio](/api-docs/headless/js/html/svg/AnimatedPreserveAspectRatio/) | class | The `SVGAnimatedPreserveAspectRatio` interface is used for attributes of type `SVGPreserveAspectR... |
| [AnimatedRect](/api-docs/headless/js/html/svg/AnimatedRect/) | class | The `SVGAnimatedRect` interface is used for attributes of basic `SVGRect` which can be animated. |
| [AnimatedString](/api-docs/headless/js/html/svg/AnimatedString/) | class | The `SVGAnimatedString` interface represents string attributes which can be animated from each SV... |
| [AnimatedTransformList](/api-docs/headless/js/html/svg/AnimatedTransformList/) | class | The `SVGAnimatedTransformList` interface is used for attributes which take a list of numbers and ... |
| [BoundingBoxOptions](/api-docs/headless/js/html/svg/BoundingBoxOptions/) | typedef |  |
| [Element](/api-docs/headless/js/html/svg/Element/) | class | All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive fro... |
| [GraphicsElement](/api-docs/headless/js/html/svg/GraphicsElement/) | class | The `SVGGraphicsElement` interface represents SVG elements whose primary purpose is to directly r... |
| [ImageElement](/api-docs/headless/js/html/svg/ImageElement/) | class | The `SVGImageElement` interface corresponds to the `image` element. |
| [Length](/api-docs/headless/js/html/svg/Length/) | class | The `SVGLength` interface correspond to the length basic data type. |
| [Matrix](/api-docs/headless/js/html/svg/Matrix/) | class | Many of SVG's graphics operations utilize 2x3 matrices of the form: |
| [Number](/api-docs/headless/js/html/svg/Number/) | class | The `SVGNumber` interface corresponds to the `number` basic data type. |
| [Point](/api-docs/headless/js/html/svg/Point/) | class | An `SVGPoint` represents a 2D or 3D point in the SVG coordinate system. |
| [PreserveAspectRatio](/api-docs/headless/js/html/svg/PreserveAspectRatio/) | class | The `SVGPreserveAspectRatio` interface corresponds to the `preserveAspectRatio` attribute, which ... |
| [Rect](/api-docs/headless/js/html/svg/Rect/) | class | The `SVGRect` represents a rectangle. |
| [StringList](/api-docs/headless/js/html/svg/StringList/) | class | The `SVGStringList` defines a list of `DOMString` objects. |
| [SVGElement](/api-docs/headless/js/html/svg/SVGElement/) | class | The `SVGSVGElement` interface provides access to the properties of `svg` elements, as well as met... |
| [Transform](/api-docs/headless/js/html/svg/Transform/) | class | `SVGTransform` is the interface for one of the component transformations within an `SVGTransformL... |
| [TransformList](/api-docs/headless/js/html/svg/TransformList/) | class | The `SVGTransformList` defines a list of `SVGTransform` objects. |
| [TableCaptionElement](/api-docs/headless/js/html/TableCaptionElement/) | class | The `HTMLTableCaptionElement` interface special properties (beyond the regular `HTMLElement` inte... |
| [TableCellElement](/api-docs/headless/js/html/TableCellElement/) | class | The `HTMLTableCellElement` interface provides special properties and methods (beyond the regular ... |
| [TableColElement](/api-docs/headless/js/html/TableColElement/) | class | The `HTMLTableColElement` interface provides special properties (beyond the `HTMLElement` interfa... |
| [TableElement](/api-docs/headless/js/html/TableElement/) | class | The `HTMLTableElement` interface provides special properties and methods (beyond the regular `HTM... |
| [TableRowElement](/api-docs/headless/js/html/TableRowElement/) | class | The `HTMLTableRowElement` interface provides special properties and methods (beyond the `HTMLElem... |
| [TableSectionElement](/api-docs/headless/js/html/TableSectionElement/) | class | The `HTMLTableSectionElement` interface provides special properties and methods (beyond the `HTML... |
| [Text](/api-docs/headless/js/html/Text/) | class | The `Text` interface represents the textual content of `Element` or `Attr`. |
| [TextAreaElement](/api-docs/headless/js/html/TextAreaElement/) | class | The `HTMLTextAreaElement` interface provides special properties and methods for manipulating the ... |
| [TextMetrics](/api-docs/headless/js/html/TextMetrics/) | class | The `TextMetrics` interface represents the dimension of a text in the canvas, as created by the `... |
| [TextTrack](/api-docs/headless/js/html/TextTrack/) | class | This interface also inherits properties from `EventTarget`. |
| [TextTrackCue](/api-docs/headless/js/html/TextTrackCue/) | class |  |
| [TextTrackCueList](/api-docs/headless/js/html/TextTrackCueList/) | class |  |
| [TextTrackKind](/api-docs/headless/js/html/TextTrackKind/) | abstract |  |
| [TextTrackList](/api-docs/headless/js/html/TextTrackList/) | class |  |
| [TextTrackMode](/api-docs/headless/js/html/TextTrackMode/) | abstract |  |
| [TimeRanges](/api-docs/headless/js/html/TimeRanges/) | class | The `TimeRanges` interface is used to represent a set of time ranges, primarily for the purpose o... |
| [TitleElement](/api-docs/headless/js/html/TitleElement/) | class | The `HTMLTitleElement` interface contains the title for a document. |
| [Touch](/api-docs/headless/js/html/Touch/) | class | The `Touch` interface represents a single contact point on a touch-sensitive device. |
| [TouchInit](/api-docs/headless/js/html/TouchInit/) | typedef |  |
| [TouchList](/api-docs/headless/js/html/TouchList/) | class | The `TouchList` interface represents a list of contact points with a touch surface; for example, ... |
| [TrackElement](/api-docs/headless/js/html/TrackElement/) | class | The `HTMLTrackElement` |
| [TreeWalker](/api-docs/headless/js/html/TreeWalker/) | class | The `TreeWalker` object represents the nodes of a document subtree and a position within them. |
| [UListElement](/api-docs/headless/js/html/UListElement/) | class | The `HTMLUListElement` interface provides special properties (beyond those defined on the regular... |
| [URLSearchParams](/api-docs/headless/js/html/URLSearchParams/) | class | The `URLSearchParams` interface defines utility methods to work with the query string of a URL. |
| [URLSearchParamsIterator](/api-docs/headless/js/html/URLSearchParamsIterator/) | typedef |  |
| [ValidityState](/api-docs/headless/js/html/ValidityState/) | class | The `ValidityState` interface represents the validity states that an element can be in, with resp... |
| [VideoElement](/api-docs/headless/js/html/VideoElement/) | class | The `HTMLVideoElement` interface provides special properties and methods for manipulating video o... |
| [VideoPlaybackQuality](/api-docs/headless/js/html/VideoPlaybackQuality/) | class | The `VideoPlaybackQuality` interface represents the set of metrics describing the playback qualit... |
| [VideoStreamTrack](/api-docs/headless/js/html/VideoStreamTrack/) | class |  |
| [VideoTrack](/api-docs/headless/js/html/VideoTrack/) | class |  |
| [VideoTrackList](/api-docs/headless/js/html/VideoTrackList/) | class |  |
| [VisibilityState](/api-docs/headless/js/html/VisibilityState/) | abstract |  |
| [VTTCue](/api-docs/headless/js/html/VTTCue/) | class | VTTCues represent a cue in a text track. |
| [VTTRegion](/api-docs/headless/js/html/VTTRegion/) | class |  |
| [ActiveInfo](/api-docs/headless/js/html/webgl/ActiveInfo/) | class | The WebGLActiveInfo interface is part of the WebGL API and represents the information returned by... |
| [Buffer](/api-docs/headless/js/html/webgl/Buffer/) | class | The WebGLBuffer interface is part of the WebGL API and represents an opaque buffer object storing... |
| [ContextAttributes](/api-docs/headless/js/html/webgl/ContextAttributes/) | typedef |  |
| [Extension](/api-docs/headless/js/html/webgl/Extension/) | abstract |  |
| [ANGLEInstancedArrays](/api-docs/headless/js/html/webgl/extension/ANGLEInstancedArrays/) | class | The `ANGLE_instanced_arrays` extension is part of the WebGL API and allows to draw the same objec... |
| [EXTBlendMinmax](/api-docs/headless/js/html/webgl/extension/EXTBlendMinmax/) | class | The `EXT_blend_minmax` extension is part of the WebGL API and extends blending capabilities by ad... |
| [EXTColorBufferFloat](/api-docs/headless/js/html/webgl/extension/EXTColorBufferFloat/) | typedef |  |
| [EXTColorBufferHalfFloat](/api-docs/headless/js/html/webgl/extension/EXTColorBufferHalfFloat/) | class | The `EXT_color_buffer_half_float` extension is part of the WebGL API and adds the ability to rend... |
| [EXTDisjointTimerQuery](/api-docs/headless/js/html/webgl/extension/EXTDisjointTimerQuery/) | class | The EXT_disjoint_timer_query extension is part of the WebGL API and provides a way to measure the... |
| [EXTFragDepth](/api-docs/headless/js/html/webgl/extension/EXTFragDepth/) | typedef |  |
| [EXTShaderTextureLod](/api-docs/headless/js/html/webgl/extension/EXTShaderTextureLod/) | typedef |  |
| [EXTSrgb](/api-docs/headless/js/html/webgl/extension/EXTSrgb/) | class | The `EXT_sRGB` extension is part of the WebGL API and adds sRGB support to textures and framebuff... |
| [EXTTextureFilterAnisotropic](/api-docs/headless/js/html/webgl/extension/EXTTextureFilterAnisotropic/) | class | The `EXT_texture_filter_anisotropic` extension is part of the WebGL API and exposes two constants... |
| [OESElementIndexUint](/api-docs/headless/js/html/webgl/extension/OESElementIndexUint/) | typedef |  |
| [OESStandardDerivatives](/api-docs/headless/js/html/webgl/extension/OESStandardDerivatives/) | class | The `OES_standard_derivatives` extension is part of the WebGL API and adds the GLSL derivative fu... |
| [OESTextureFloat](/api-docs/headless/js/html/webgl/extension/OESTextureFloat/) | typedef |  |
| [OESTextureFloatLinear](/api-docs/headless/js/html/webgl/extension/OESTextureFloatLinear/) | typedef |  |
| [OESTextureHalfFloat](/api-docs/headless/js/html/webgl/extension/OESTextureHalfFloat/) | class | The `OES_texture_half_float` extension is part of the WebGL API and adds texture formats with 16-... |
| [OESTextureHalfFloatLinear](/api-docs/headless/js/html/webgl/extension/OESTextureHalfFloatLinear/) | typedef |  |
| [OESVertexArrayObject](/api-docs/headless/js/html/webgl/extension/OESVertexArrayObject/) | class | The OES_vertex_array_object extension is part of the WebGL API and provides vertex array objects ... |
| [WEBGLColorBufferFloat](/api-docs/headless/js/html/webgl/extension/WEBGLColorBufferFloat/) | class | The `WEBGL_color_buffer_float` extension is part of the WebGL API and adds the ability to render ... |
| [WEBGLCompressedTextureAstc](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTextureAstc/) | class | The `WEBGL_compressed_texture_astc` extension is part of the WebGL API and exposes Adaptive Scala... |
| [WEBGLCompressedTextureAtc](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTextureAtc/) | class | The `WEBGL_compressed_texture_atc` extension is part of the WebGL API and exposes 3 ATC compresse... |
| [WEBGLCompressedTextureEtc](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTextureEtc/) | class | The `WEBGL_compressed_texture_etc` extension is part of the WebGL API and exposes 10 ETC/EAC comp... |
| [WEBGLCompressedTextureEtc1](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTextureEtc1/) | class | The `WEBGL_compressed_texture_etc1` extension is part of the WebGL API and exposes the ETC1 compr... |
| [WEBGLCompressedTexturePvrtc](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTexturePvrtc/) | class | The `WEBGL_compressed_texture_pvrtc` extension is part of the WebGL API and exposes four PVRTC co... |
| [WEBGLCompressedTextureS3tc](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTextureS3tc/) | class | The `WEBGL_compressed_texture_s3tc` extension is part of the WebGL API and exposes four S3TC comp... |
| [WEBGLCompressedTextureS3tcSrgb](/api-docs/headless/js/html/webgl/extension/WEBGLCompressedTextureS3tcSrgb/) | class | The `WEBGL_compressed_texture_s3tc_srgb` extension is part of the WebGL API and exposes four S3TC... |
| [WEBGLDebugRendererInfo](/api-docs/headless/js/html/webgl/extension/WEBGLDebugRendererInfo/) | class | The `WEBGL_debug_renderer_info` extension is part of the WebGL API and exposes two constants with... |
| [WEBGLDebugShaders](/api-docs/headless/js/html/webgl/extension/WEBGLDebugShaders/) | typedef |  |
| [WEBGLDepthTexture](/api-docs/headless/js/html/webgl/extension/WEBGLDepthTexture/) | class | The `WEBGL_depth_texture` extension is part of the WebGL API and defines 2D depth and depth-stenc... |
| [WEBGLDrawBuffers](/api-docs/headless/js/html/webgl/extension/WEBGLDrawBuffers/) | class | The `WEBGL_draw_buffers` extension is part of the WebGL API and enables a fragment shader to writ... |
| [WEBGLLoseContext](/api-docs/headless/js/html/webgl/extension/WEBGLLoseContext/) | typedef |  |
| [Framebuffer](/api-docs/headless/js/html/webgl/Framebuffer/) | class | The WebGLFramebuffer interface is part of the WebGL API and represents a collection of buffers th... |
| [PowerPreference](/api-docs/headless/js/html/webgl/PowerPreference/) | abstract |  |
| [Program](/api-docs/headless/js/html/webgl/Program/) | class | The WebGLProgram is part of the WebGL API and is a combination of two compiled `WebGLShader`s con... |
| [Query](/api-docs/headless/js/html/webgl/Query/) | class | The `WebGLQuery` interface is part of the WebGL 2 API and provides ways to asynchronously query f... |
| [Renderbuffer](/api-docs/headless/js/html/webgl/Renderbuffer/) | class | The WebGLRenderbuffer interface is part of the WebGL API and represents a buffer that can contain... |
| [RenderingContext](/api-docs/headless/js/html/webgl/RenderingContext/) | class | The `WebGLRenderingContext` interface provides the OpenGL ES 2. |
| [Sampler](/api-docs/headless/js/html/webgl/Sampler/) | class | The `WebGLSampler` interface is part of the WebGL 2 API and stores sampling parameters for `WebGL... |
| [Shader](/api-docs/headless/js/html/webgl/Shader/) | class | The WebGLShader is part of the WebGL API and can either be a vertex or a fragment shader. |
| [ShaderPrecisionFormat](/api-docs/headless/js/html/webgl/ShaderPrecisionFormat/) | class | The WebGLShaderPrecisionFormat interface is part of the WebGL API and represents the information ... |
| [Sync](/api-docs/headless/js/html/webgl/Sync/) | class | The `WebGLSync` interface is part of the WebGL 2 API and is used to synchronize activities betwee... |
| [Texture](/api-docs/headless/js/html/webgl/Texture/) | class | The WebGLTexture interface is part of the WebGL API and represents an opaque texture object provi... |
| [TransformFeedback](/api-docs/headless/js/html/webgl/TransformFeedback/) | class | The `WebGLTransformFeedback` interface is part of the WebGL 2 API and enables transform feedback,... |
| [UniformLocation](/api-docs/headless/js/html/webgl/UniformLocation/) | class | The WebGLUniformLocation interface is part of the WebGL API and represents the location of a unif... |
| [VertexArrayObject](/api-docs/headless/js/html/webgl/VertexArrayObject/) | class | The `WebGLVertexArrayObject` interface is part of the WebGL 2 API, represents vertex array object... |
| [WebGL2RenderingContext](/api-docs/headless/js/html/webgl/WebGL2RenderingContext/) | class | The WebGL2RenderingContext interface provides the OpenGL ES 3. |
| [Window](/api-docs/headless/js/html/Window/) | class | The `Window` interface represents a window containing a DOM document; the `document` property poi... |
| [WorkerGlobalScope](/api-docs/headless/js/html/WorkerGlobalScope/) | class | The `WorkerGlobalScope` interface of the Web Workers API is an interface representing the scope o... |
| [WorkerLocation](/api-docs/headless/js/html/WorkerLocation/) | class | The `WorkerLocation` interface defines the absolute location of the script executed by the `Worker`. |
| [WorkerNavigator](/api-docs/headless/js/html/WorkerNavigator/) | class | The `WorkerNavigator` interface represents a subset of the `Navigator` interface allowed to be ac... |
| [XMLHttpRequest](/api-docs/headless/js/html/XMLHttpRequest/) | class | Use `XMLHttpRequest` (XHR) objects to interact with servers. |
| [XMLHttpRequestEventTarget](/api-docs/headless/js/html/XMLHttpRequestEventTarget/) | class |  |
| [XMLHttpRequestResponseType](/api-docs/headless/js/html/XMLHttpRequestResponseType/) | abstract | The `XMLHttpRequestResponseType` type is an enumerated set of strings which are used to specify t... |
| [XMLHttpRequestUpload](/api-docs/headless/js/html/XMLHttpRequestUpload/) | class |  |
| [XPathExpression](/api-docs/headless/js/html/XPathExpression/) | class | An `XPathExpression` is a compiled XPath query returned from `document. |
| [XPathNSResolver](/api-docs/headless/js/html/XPathNSResolver/) | typedef |  |
| [XPathResult](/api-docs/headless/js/html/XPathResult/) | class | The `XPathResult` interface represents the results generated by evaluating an XPath 1. |
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
| [___Int64](/api-docs/headless/haxe/_Int64/___Int64/) | class |  |
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

## Http

| Type | Kind | Description |
|------|------|-------------|
| [Http](/api-docs/headless/backend/Http/) | class | Platform-specific HTTP implementation providing cross-platform HTTP request functionality. |
| [HttpNodejs](/api-docs/headless/backend/http/HttpNodejs/) | class |  |
| [HttpRequestOptions](/api-docs/headless/backend/HttpRequestOptions/) | typedef | Low-level HTTP request options used by the backend HTTP implementation. |
| [HttpResponse](/api-docs/headless/backend/HttpResponse/) | class | Low-level HTTP response data structure used by backend implementations. |
| [Http](/api-docs/headless/ceramic/Http/) | class | A cross-platform and high level HTTP request utility that provides a unified interface |
| [HttpHeaders](/api-docs/headless/ceramic/HttpHeaders/) | abstract | A collection of HTTP headers that supports multiple values for the same header key. |
| [HttpMethod](/api-docs/headless/ceramic/HttpMethod/) | abstract | HTTP request method enumeration supporting the most common HTTP verbs. |
| [HttpRequestOptions](/api-docs/headless/ceramic/HttpRequestOptions/) | typedef | High-level HTTP request options for making HTTP requests. |
| [HttpResponse](/api-docs/headless/ceramic/HttpResponse/) | class | HTTP response data structure containing the complete response from an HTTP request. |
| [MimeType](/api-docs/headless/ceramic/MimeType/) | class | MIME type utility class for determining content type characteristics. |
| [HttpHeadersKeyValueIterator](/api-docs/headless/ceramic/_HttpHeaders/HttpHeadersKeyValueIterator/) | class | Iterator for HttpHeaders that yields {key, value} pairs. |

## Imgui

| Type | Kind | Description |
|------|------|-------------|
| [ImGuiKeyMap](/api-docs/headless/ceramic/ImGuiKeyMap/) | class | Maps ceramic scan codes (physical keys, SDL scancode values) to `ImGuiKey` |
| [ImGuiPlugin](/api-docs/headless/ceramic/ImGuiPlugin/) | class | Plugin that integrates Dear ImGui (immediate mode GUI) into Ceramic. |
| [ImGuiRenderable](/api-docs/headless/ceramic/ImGuiRenderable/) | class | Renders Dear ImGui's draw data THROUGH ceramic's own 2D pipeline - no |
| [ImGuiSystem](/api-docs/headless/ceramic/ImGuiSystem/) | class | Dear ImGui integration for ceramic - fully backend-agnostic. |
| [ImGuiTextures](/api-docs/headless/ceramic/ImGuiTextures/) | class | Cross-backend texture bridge between Dear ImGui and ceramic. |
| [ImGuiVisuals](/api-docs/headless/ceramic/ImGuiVisuals/) | class | Display ceramic visuals inside Dear ImGui layouts. |
| [DDPtr](/api-docs/headless/ceramic/_ImGuiTextures/DDPtr/) | typedef |  |
| [TDPtr](/api-docs/headless/ceramic/_ImGuiTextures/TDPtr/) | typedef |  |
| [ImGuiVisualEntry](/api-docs/headless/ceramic/_ImGuiVisuals/ImGuiVisualEntry/) | class | One displayed visual: its filter (atlas tile or dedicated RT) + lifecycle state. |

## Ldtk-haxe-api

| Type | Kind | Description |
|------|------|-------------|
| [AutoLayerRuleCheckerMode](/api-docs/headless/ldtk/AutoLayerRuleCheckerMode/) | enum |  |
| [AutoLayerRuleGroupJson](/api-docs/headless/ldtk/AutoLayerRuleGroupJson/) | typedef |  |
| [AutoLayerRuleTileMode](/api-docs/headless/ldtk/AutoLayerRuleTileMode/) | enum |  |
| [AutoRuleDef](/api-docs/headless/ldtk/AutoRuleDef/) | typedef | This complex section isn't meant to be used by game devs at all, as these rules are completely re... |
| [BgImagePos](/api-docs/headless/ldtk/BgImagePos/) | enum |  |
| [CustomCommand](/api-docs/headless/ldtk/CustomCommand/) | typedef |  |
| [CustomCommandTrigger](/api-docs/headless/ldtk/CustomCommandTrigger/) | enum |  |
| [DefinitionsJson](/api-docs/headless/ldtk/DefinitionsJson/) | typedef | If you're writing your own LDtk importer, you should probably just ignore *most* stuff in the `de... |
| [EmbedAtlas](/api-docs/headless/ldtk/EmbedAtlas/) | enum |  |
| [EntityDefJson](/api-docs/headless/ldtk/EntityDefJson/) | typedef |  |
| [EntityInstanceJson](/api-docs/headless/ldtk/EntityInstanceJson/) | typedef |  |
| [EntityLimitBehavior](/api-docs/headless/ldtk/EntityLimitBehavior/) | enum |  |
| [EntityLimitScope](/api-docs/headless/ldtk/EntityLimitScope/) | enum |  |
| [EntityReferenceInfos](/api-docs/headless/ldtk/EntityReferenceInfos/) | typedef | This object describes the "location" of an Entity instance in the project worlds. |
| [EntityReferenceTarget](/api-docs/headless/ldtk/EntityReferenceTarget/) | enum |  |
| [EntityRenderMode](/api-docs/headless/ldtk/EntityRenderMode/) | enum |  |
| [EntityTileRenderMode](/api-docs/headless/ldtk/EntityTileRenderMode/) | enum |  |
| [EnumDefJson](/api-docs/headless/ldtk/EnumDefJson/) | typedef |  |
| [EnumDefValues](/api-docs/headless/ldtk/EnumDefValues/) | typedef |  |
| [EnumTagValue](/api-docs/headless/ldtk/EnumTagValue/) | typedef | In a tileset definition, enum based tag infos |
| [FieldDefJson](/api-docs/headless/ldtk/FieldDefJson/) | typedef | This section is mostly only intended for the LDtk editor app itself. You can safely ignore it. |
| [FieldDisplayMode](/api-docs/headless/ldtk/FieldDisplayMode/) | enum |  |
| [FieldDisplayPosition](/api-docs/headless/ldtk/FieldDisplayPosition/) | enum |  |
| [FieldInstanceJson](/api-docs/headless/ldtk/FieldInstanceJson/) | typedef |  |
| [FieldLinkStyle](/api-docs/headless/ldtk/FieldLinkStyle/) | enum |  |
| [FieldType](/api-docs/headless/ldtk/FieldType/) | enum |  |
| [GridPoint](/api-docs/headless/ldtk/GridPoint/) | typedef | This object is just a grid-based coordinate used in Field values. |
| [IdentifierStyle](/api-docs/headless/ldtk/IdentifierStyle/) | enum |  |
| [ImageExportMode](/api-docs/headless/ldtk/ImageExportMode/) | enum |  |
| [IntGridValueDef](/api-docs/headless/ldtk/IntGridValueDef/) | typedef | IntGrid value definition |
| [IntGridValueGroupDef](/api-docs/headless/ldtk/IntGridValueGroupDef/) | typedef | IntGrid value group definition |
| [IntGridValueInstance](/api-docs/headless/ldtk/IntGridValueInstance/) | typedef | IntGrid value instance |
| [JsonStyle](/api-docs/headless/ldtk/JsonStyle/) | enum |  |
| [LayerDefJson](/api-docs/headless/ldtk/LayerDefJson/) | typedef |  |
| [LayerInstanceJson](/api-docs/headless/ldtk/LayerInstanceJson/) | typedef |  |
| [LayerType](/api-docs/headless/ldtk/LayerType/) | enum |  |
| [LevelBgPosInfos](/api-docs/headless/ldtk/LevelBgPosInfos/) | typedef | Level background image position info |
| [LevelJson](/api-docs/headless/ldtk/LevelJson/) | typedef | This section contains all the level data. |
| [NeighbourLevel](/api-docs/headless/ldtk/NeighbourLevel/) | typedef | Nearby level info |
| [ProjectFlag](/api-docs/headless/ldtk/ProjectFlag/) | enum |  |
| [ProjectJson](/api-docs/headless/ldtk/ProjectJson/) | typedef | This is the root of any Project JSON file. It contains: |
| [ArrayRuleSource](/api-docs/headless/ldtk/rules/ArrayRuleSource/) | class | `RuleSource` over a flat IntGrid array (same layout as the `intGridCsv` JSON field: row major, 0 ... |
| [AutoTile](/api-docs/headless/ldtk/rules/AutoTile/) | typedef | One tile produced by an auto-layer rule. |
| [AutoTileCache](/api-docs/headless/ldtk/rules/AutoTileCache/) | typedef | Editor style cache: < ruleUid, < coordId, tiles > > |
| [AutoTileSink](/api-docs/headless/ldtk/rules/AutoTileSink/) | interface | Receives the tiles produced by the engine. |
| [CellTileBuffer](/api-docs/headless/ldtk/rules/CellTileBuffer/) | class | Cell indexed tile store for runtime use, supporting partial recomputes: the tiles of any cell can... |
| [FlatAutoTile](/api-docs/headless/ldtk/rules/FlatAutoTile/) | typedef | A tile with its origin, as produced by `RuleEngine.flatten` |
| [FlatTileBuffer](/api-docs/headless/ldtk/rules/FlatTileBuffer/) | class | Flat, reusable tile buffer for runtime use: `STRIDE` ints per tile, no object per tile. |
| [MapAutoTileCache](/api-docs/headless/ldtk/rules/MapAutoTileCache/) | class | Sink writing into an editor style `AutoTileCache` (one object per tile, editable per rule and per... |
| [RuleConst](/api-docs/headless/ldtk/rules/RuleConst/) | class | Constants shared by every consumer of the auto-layer rule engine. |
| [RuleDef](/api-docs/headless/ldtk/rules/RuleDef/) | class | All the data of an auto-layer rule needed to compute tiles, plus the pure pattern helpers. |
| [RuleEngine](/api-docs/headless/ldtk/rules/RuleEngine/) | class | The auto-layer rule engine: matches rule patterns against a `RuleSource` IntGrid and produces til... |
| [RuleGroupDef](/api-docs/headless/ldtk/rules/RuleGroupDef/) | class | A group of rules, as needed at compute time. Satisfies `RuleGroups.RuleGroupInfo`. |
| [RuleGroupInfo](/api-docs/headless/ldtk/rules/RuleGroupInfo/) | typedef | The rule group fields needed at compute time (structural, so the editor group class fits as is) |
| [RuleGroups](/api-docs/headless/ldtk/rules/RuleGroups/) | class |  |
| [RuleLayerDef](/api-docs/headless/ldtk/rules/RuleLayerDef/) | class | The layer definition data needed to run rules, built from `ldtk.Json.LayerDefJson`. |
| [RulePerlin](/api-docs/headless/ldtk/rules/RulePerlin/) | class | 2D Perlin noise, ported from `hxd. |
| [RuleRandom](/api-docs/headless/ldtk/rules/RuleRandom/) | class | Deterministic, target independent random helpers for the rule engine. |
| [RuleSource](/api-docs/headless/ldtk/rules/RuleSource/) | interface | Read access to the IntGrid layer a rule pattern is matched against. |
| [RuleTarget](/api-docs/headless/ldtk/rules/RuleTarget/) | interface | The auto-layer receiving the tiles: geometry, random seed, and cells killed by another layer. |
| [RuleTileset](/api-docs/headless/ldtk/rules/RuleTileset/) | interface | Tileset geometry and opacity needed by the rule engine |
| [SimpleRuleTileset](/api-docs/headless/ldtk/rules/SimpleRuleTileset/) | class | Tileset geometry computed from plain numbers, as found in the project JSON. |
| [TableOfContentEntry](/api-docs/headless/ldtk/TableOfContentEntry/) | typedef |  |
| [TextLanguageMode](/api-docs/headless/ldtk/TextLanguageMode/) | enum |  |
| [Tile](/api-docs/headless/ldtk/Tile/) | typedef | This structure represents a single tile from a given Tileset. |
| [TileCustomMetadata](/api-docs/headless/ldtk/TileCustomMetadata/) | typedef | In a tileset definition, user defined meta-data of a tile. |
| [TilesetDefJson](/api-docs/headless/ldtk/TilesetDefJson/) | typedef | The `Tileset` definition is the most important part among project definitions. |
| [TilesetRect](/api-docs/headless/ldtk/TilesetRect/) | typedef | This object represents a custom sub rectangle in a Tileset image. |
| [TocInstanceData](/api-docs/headless/ldtk/TocInstanceData/) | typedef |  |
| [WorldJson](/api-docs/headless/ldtk/WorldJson/) | typedef | *IMPORTANT**: this type is available as a preview. |
| [WorldLayout](/api-docs/headless/ldtk/WorldLayout/) | enum |  |

## Loreline

| Type | Kind | Description |
|------|------|-------------|
| [LorelineAsset](/api-docs/headless/ceramic/LorelineAsset/) | class | Asset class for loading and managing Loreline script files. |
| [LorelinePlugin](/api-docs/headless/ceramic/LorelinePlugin/) | class | Plugin that integrates Loreline scripting language into Ceramic. |
| [AlternativeMode](/api-docs/headless/loreline/AlternativeMode/) | abstract | Represents the mode of an alternative block. |
| [Arrays](/api-docs/headless/loreline/Arrays/) | class | Array access helpers working on `Any`-held values. |
| [AstNode](/api-docs/headless/loreline/AstNode/) | class | Base class for AST nodes that can have associated comments. |
| [AstUtils](/api-docs/headless/loreline/AstUtils/) | class | Static utility functions for programmatic AST formatting transformations. |
| [Async](/api-docs/headless/loreline/Async/) | class |  |
| [BlockStyle](/api-docs/headless/loreline/BlockStyle/) | abstract |  |
| [ChoiceHandler](/api-docs/headless/loreline/ChoiceHandler/) | typedef | Handler type for choice presentation with callback. |
| [ChoiceOption](/api-docs/headless/loreline/ChoiceOption/) | class | Represents a choice option presented to the user. |
| [CodeToLorscript](/api-docs/headless/loreline/CodeToLorscript/) | class | Preprocesses Loreline script code to make it compatible with lorscript. |
| [CodeToLorscriptStackType](/api-docs/headless/loreline/CodeToLorscriptStackType/) | abstract |  |
| [Comment](/api-docs/headless/loreline/Comment/) | class | Represents a comment node in the AST. Contains both the comment content |
| [ConditionStyle](/api-docs/headless/loreline/ConditionStyle/) | abstract |  |
| [DialogueHandler](/api-docs/headless/loreline/DialogueHandler/) | typedef | Handler type for text output with callback. |
| [Equal](/api-docs/headless/loreline/Equal/) | class |  |
| [Error](/api-docs/headless/loreline/Error/) | class | Represents an error. |
| [EvalNext](/api-docs/headless/loreline/EvalNext/) | class | Helper class for managing the next evaluation step. |
| [Fields](/api-docs/headless/loreline/Fields/) | interface | Base interface to hold loreline values |
| [FinishHandler](/api-docs/headless/loreline/FinishHandler/) | typedef | Handler type to be called when the execution finishes. |
| [FuncLorscript](/api-docs/headless/loreline/FuncLorscript/) | class |  |
| [Functions](/api-docs/headless/loreline/Functions/) | class | All built-in functions available to Loreline scripts. |
| [FunctionsMap](/api-docs/headless/loreline/FunctionsMap/) | typedef |  |
| [Imports](/api-docs/headless/loreline/Imports/) | class |  |
| [ImportsCallback](/api-docs/headless/loreline/ImportsCallback/) | typedef |  |
| [ImportsErrorHandler](/api-docs/headless/loreline/ImportsErrorHandler/) | typedef |  |
| [ImportsFileHandler](/api-docs/headless/loreline/ImportsFileHandler/) | typedef |  |
| [Int64Map](/api-docs/headless/loreline/Int64Map/) | class |  |
| [Int64MapKey](/api-docs/headless/loreline/Int64MapKey/) | typedef |  |
| [Int64MapKeyVal](/api-docs/headless/loreline/Int64MapKeyVal/) | typedef |  |
| [Interpreter](/api-docs/headless/loreline/Interpreter/) | class | Main interpreter class for Loreline scripts. |
| [InterpreterOptions](/api-docs/headless/loreline/InterpreterOptions/) | class |  |
| [JsonToAst](/api-docs/headless/loreline/JsonToAst/) | class | Utility class for reconstructing AST nodes from their JSON representation. |
| [Lens](/api-docs/headless/loreline/Lens/) | class | Utility class for analyzing Loreline scripts without executing them. |
| [Lexer](/api-docs/headless/loreline/Lexer/) | class | The lexical analyzer for the Loreline language. |
| [LexerError](/api-docs/headless/loreline/LexerError/) | class | Represents an error that occurred during lexical analysis. |
| [LiteralType](/api-docs/headless/loreline/LiteralType/) | enum | Possible types for literal values. |
| [Loreline](/api-docs/headless/loreline/Loreline/) | class | The main public API for Loreline runtime. |
| [Argument](/api-docs/headless/loreline/lorscript/Argument/) | typedef |  |
| [CAbstract](/api-docs/headless/loreline/lorscript/CAbstract/) | typedef |  |
| [CClass](/api-docs/headless/loreline/lorscript/CClass/) | typedef |  |
| [CEnum](/api-docs/headless/loreline/lorscript/CEnum/) | typedef |  |
| [CField](/api-docs/headless/loreline/lorscript/CField/) | typedef |  |
| [Checker](/api-docs/headless/loreline/lorscript/Checker/) | class |  |
| [CheckerTypes](/api-docs/headless/loreline/lorscript/CheckerTypes/) | class |  |
| [ClassDecl](/api-docs/headless/loreline/lorscript/ClassDecl/) | typedef |  |
| [CMetadata](/api-docs/headless/loreline/lorscript/CMetadata/) | typedef |  |
| [CNamedType](/api-docs/headless/loreline/lorscript/CNamedType/) | typedef |  |
| [Completion](/api-docs/headless/loreline/lorscript/Completion/) | class |  |
| [Const](/api-docs/headless/loreline/lorscript/Const/) | enum |  |
| [CType](/api-docs/headless/loreline/lorscript/CType/) | enum |  |
| [CTypedecl](/api-docs/headless/loreline/lorscript/CTypedecl/) | enum |  |
| [CTypedef](/api-docs/headless/loreline/lorscript/CTypedef/) | typedef |  |
| [Error](/api-docs/headless/loreline/lorscript/Error/) | class |  |
| [ErrorDef](/api-docs/headless/loreline/lorscript/ErrorDef/) | enum |  |
| [Expr](/api-docs/headless/loreline/lorscript/Expr/) | typedef |  |
| [ExprDef](/api-docs/headless/loreline/lorscript/ExprDef/) | enum |  |
| [FieldAccess](/api-docs/headless/loreline/lorscript/FieldAccess/) | enum |  |
| [FieldDecl](/api-docs/headless/loreline/lorscript/FieldDecl/) | typedef |  |
| [FieldKind](/api-docs/headless/loreline/lorscript/FieldKind/) | enum |  |
| [FunctionDecl](/api-docs/headless/loreline/lorscript/FunctionDecl/) | typedef |  |
| [Interp](/api-docs/headless/loreline/lorscript/Interp/) | class |  |
| [Metadata](/api-docs/headless/loreline/lorscript/Metadata/) | typedef |  |
| [ModuleDecl](/api-docs/headless/loreline/lorscript/ModuleDecl/) | enum |  |
| [ModuleType](/api-docs/headless/loreline/lorscript/ModuleType/) | typedef |  |
| [Parser](/api-docs/headless/loreline/lorscript/Parser/) | class |  |
| [Printer](/api-docs/headless/loreline/lorscript/Printer/) | class |  |
| [Token](/api-docs/headless/loreline/lorscript/Token/) | enum |  |
| [Tools](/api-docs/headless/loreline/lorscript/Tools/) | class |  |
| [TType](/api-docs/headless/loreline/lorscript/TType/) | enum |  |
| [TypeCheck](/api-docs/headless/loreline/lorscript/TypeCheck/) | typedef | This is a special type that can be used in API. |
| [TypeDecl](/api-docs/headless/loreline/lorscript/TypeDecl/) | typedef |  |
| [VarDecl](/api-docs/headless/loreline/lorscript/VarDecl/) | typedef |  |
| [LorscriptCompletion](/api-docs/headless/loreline/LorscriptCompletion/) | class |  |
| [LStringAttachment](/api-docs/headless/loreline/LStringAttachment/) | enum | Represents additional information attached to a string token, such as interpolations or tags. |
| [NAccess](/api-docs/headless/loreline/NAccess/) | class | Represents a field access expression (obj.field). |
| [NAlternative](/api-docs/headless/loreline/NAlternative/) | class | Represents an alternative block (sequence, cycle, once, pick, shuffle). |
| [NArrayAccess](/api-docs/headless/loreline/NArrayAccess/) | class | Represents an array access expression (array[index]). |
| [NAssign](/api-docs/headless/loreline/NAssign/) | class | Represents an assignment expression (a = b, a += b, etc). |
| [NBeatCall](/api-docs/headless/loreline/NBeatCall/) | class | Represents a dynamic beat call statement: `beat(expr, args...)`. |
| [NBeatDecl](/api-docs/headless/loreline/NBeatDecl/) | class | Represents a beat (scene) declaration in the AST. |
| [NBeatParam](/api-docs/headless/loreline/NBeatParam/) | class | A single parameter in a beat declaration, e.g. `name` or `mood = "happy"` |
| [NBinary](/api-docs/headless/loreline/NBinary/) | class | Represents a binary operation expression (a + b, a && b, etc). |
| [NBlock](/api-docs/headless/loreline/NBlock/) | class | Represents a block with a sequence multiple nodes |
| [NCall](/api-docs/headless/loreline/NCall/) | class | Represents a function call expression in the AST. |
| [NCharacterDecl](/api-docs/headless/loreline/NCharacterDecl/) | class | Represents a character declaration in the AST. |
| [NChoiceOption](/api-docs/headless/loreline/NChoiceOption/) | class | Represents a single option within a choice statement. |
| [NChoiceStatement](/api-docs/headless/loreline/NChoiceStatement/) | class | Represents a choice statement in the AST. |
| [NDialogueStatement](/api-docs/headless/loreline/NDialogueStatement/) | class | Represents a dialogue statement in the AST (character: "text"). |
| [NExpr](/api-docs/headless/loreline/NExpr/) | class | Base class for all expression nodes in the AST. |
| [NFunctionDecl](/api-docs/headless/loreline/NFunctionDecl/) | class | Represents a callable function in the AST |
| [NIfStatement](/api-docs/headless/loreline/NIfStatement/) | class | Represents an if statement in the AST, with optional else branch. |
| [NImportStatement](/api-docs/headless/loreline/NImportStatement/) | class | Represents an import statement |
| [NInsertion](/api-docs/headless/loreline/NInsertion/) | class | Represents an insertion of another beat (+). |
| [NLiteral](/api-docs/headless/loreline/NLiteral/) | class | Represents literal values in the AST (numbers, booleans, arrays, objects). |
| [NObjectField](/api-docs/headless/loreline/NObjectField/) | class | Represents an object field in the AST (name-value pair). |
| [Node](/api-docs/headless/loreline/Node/) | class | Base class for all AST nodes. Contains position information and basic JSON conversion. |
| [NodeId](/api-docs/headless/loreline/NodeId/) | abstract |  |
| [NodeIdMap](/api-docs/headless/loreline/NodeIdMap/) | class |  |
| [NodeIdMapKeyVal](/api-docs/headless/loreline/NodeIdMapKeyVal/) | typedef |  |
| [NodeIdStep](/api-docs/headless/loreline/NodeIdStep/) | abstract |  |
| [NStateDecl](/api-docs/headless/loreline/NStateDecl/) | class | Represents a state declaration node in the AST. |
| [NStringLiteral](/api-docs/headless/loreline/NStringLiteral/) | class | Represents a string literal in the AST, supporting interpolation and tags. |
| [NStringPart](/api-docs/headless/loreline/NStringPart/) | class | Represents a string part that can appear in string literals. |
| [NTernary](/api-docs/headless/loreline/NTernary/) | class | Represents a ternary conditional expression (condition ? trueExpr : falseExpr). |
| [NTextStatement](/api-docs/headless/loreline/NTextStatement/) | class | Represents a text statement in the AST. |
| [NTransition](/api-docs/headless/loreline/NTransition/) | class | Represents a transition to another beat (->). |
| [NUnary](/api-docs/headless/loreline/NUnary/) | class | Represents a unary operation expression (!x, -x, etc). |
| [Objects](/api-docs/headless/loreline/Objects/) | class |  |
| [ParseError](/api-docs/headless/loreline/ParseError/) | class | Represents a parsing error with position information. |
| [Parser](/api-docs/headless/loreline/Parser/) | class | Parser for the Loreline scripting language. |
| [ParserContext](/api-docs/headless/loreline/ParserContext/) | class |  |
| [Position](/api-docs/headless/loreline/Position/) | class | Represents a position within source code, tracking line number, column, and offset information. |
| [Printer](/api-docs/headless/loreline/Printer/) | class | A code printer that converts AST nodes back into formatted Loreline source code. |
| [Quotes](/api-docs/headless/loreline/Quotes/) | abstract |  |
| [Random](/api-docs/headless/loreline/Random/) | class | Seeded random number generator to get reproducible sequences of values. |
| [Reference](/api-docs/headless/loreline/Reference/) | class |  |
| [RuntimeAccess](/api-docs/headless/loreline/RuntimeAccess/) | enum | Represents different ways to access runtime values in a Loreline script. |
| [RuntimeBeatRef](/api-docs/headless/loreline/RuntimeBeatRef/) | class | A first-class beat reference: the beat plus the scope chain captured |
| [RuntimeCharacter](/api-docs/headless/loreline/RuntimeCharacter/) | class | Runtime state variant specifically used for character states. |
| [RuntimeError](/api-docs/headless/loreline/RuntimeError/) | class | Runtime error that can occur during script execution. |
| [RuntimeInsertion](/api-docs/headless/loreline/RuntimeInsertion/) | class | Fata that needs to be hold with a scope when |
| [RuntimeScope](/api-docs/headless/loreline/RuntimeScope/) | class | Represents a scope in the execution stack of a Loreline script. |
| [RuntimeState](/api-docs/headless/loreline/RuntimeState/) | class | A state during the runtime execution of a loreline script. |
| [SaveData](/api-docs/headless/loreline/SaveData/) | typedef | Top-level save data structure |
| [SaveDataBeat](/api-docs/headless/loreline/SaveDataBeat/) | typedef | Represents a reference to a beat node |
| [SaveDataBeatRef](/api-docs/headless/loreline/SaveDataBeatRef/) | typedef | Represents a beat reference stored as a state field value. |
| [SaveDataCharacter](/api-docs/headless/loreline/SaveDataCharacter/) | typedef | Values that can be serialized in character fields |
| [SaveDataChoiceOption](/api-docs/headless/loreline/SaveDataChoiceOption/) | typedef | Represents a choice option in the save data |
| [SaveDataFields](/api-docs/headless/loreline/SaveDataFields/) | typedef | Values that can be serialized in fields |
| [SaveDataInsertion](/api-docs/headless/loreline/SaveDataInsertion/) | typedef | Represents an insertion |
| [SaveDataNode](/api-docs/headless/loreline/SaveDataNode/) | typedef | Represents a reference to a node |
| [SaveDataScope](/api-docs/headless/loreline/SaveDataScope/) | typedef | Represents a scope's state in the save data |
| [SaveDataState](/api-docs/headless/loreline/SaveDataState/) | typedef | Values that can be serialized in state fields |
| [SaveDataTextTag](/api-docs/headless/loreline/SaveDataTextTag/) | typedef | Represents a text tag |
| [Script](/api-docs/headless/loreline/Script/) | class | Represents the root node of a Loreline script AST. |
| [StrictExprType](/api-docs/headless/loreline/StrictExprType/) | abstract |  |
| [StringPartType](/api-docs/headless/loreline/StringPartType/) | enum | Represents the different types of string parts that can appear in string literals. |
| [TextTag](/api-docs/headless/loreline/TextTag/) | class | Represents a tag in text content, which can be used for styling or other purposes. |
| [Timer](/api-docs/headless/loreline/Timer/) | class | Deferred timer system for non-blocking wait() on game-loop targets. |
| [Token](/api-docs/headless/loreline/Token/) | class | Represents a token in the source code. |
| [Tokens](/api-docs/headless/loreline/Tokens/) | typedef | Represents an array of tokens (a tokenized source code). |
| [TokenStackType](/api-docs/headless/loreline/TokenStackType/) | abstract |  |
| [TokenType](/api-docs/headless/loreline/TokenType/) | enum | Represents the different types of tokens that can be produced by the lexer. |
| [TokenTypeHelpers](/api-docs/headless/loreline/TokenTypeHelpers/) | class | Helper functions for TokenType enum. |
| [CsvTranslation](/api-docs/headless/loreline/translation/CsvTranslation/) | class | Converts CSV/TSV file content into a Loreline translation file body. |
| [PoTranslation](/api-docs/headless/loreline/translation/PoTranslation/) | class | Converts GNU gettext PO file content into a Loreline translation file body. |
| [TranslationFormats](/api-docs/headless/loreline/translation/TranslationFormats/) | class | Registry + wrapper for pluggable translation file formats. |
| [WrappedFileHandler](/api-docs/headless/loreline/translation/WrappedFileHandler/) | class | Result of `TranslationFormats.wrap()`: |
| [XliffTranslation](/api-docs/headless/loreline/translation/XliffTranslation/) | class | Converts XLIFF (1.2 or 2.x) file content into a Loreline translation file body. |
| [Utf8](/api-docs/headless/loreline/Utf8/) | class | UTF-8 aware string operations that can be used as extension methods. |
| [Utf8Buf](/api-docs/headless/loreline/Utf8Buf/) | typedef |  |
| [Utf8Vector](/api-docs/headless/loreline/Utf8Vector/) | class | Mirrors the loreline.Utf8 extension API but over a Vector<Int> of code |
| [WrappedError](/api-docs/headless/loreline/WrappedError/) | class |  |
| [ImportsLoopInfo](/api-docs/headless/loreline/_Imports/ImportsLoopInfo/) | class |  |
| [Int64MapIterator](/api-docs/headless/loreline/_Int64Map/Int64MapIterator/) | class |  |
| [Int64MapKeyIterator](/api-docs/headless/loreline/_Int64Map/Int64MapKeyIterator/) | class |  |
| [Int64MapKeyValueIterator](/api-docs/headless/loreline/_Int64Map/Int64MapKeyValueIterator/) | class |  |
| [NodeIdMapIterator](/api-docs/headless/loreline/_Node/NodeIdMapIterator/) | class |  |
| [NodeIdMapKeyIterator](/api-docs/headless/loreline/_Node/NodeIdMapKeyIterator/) | class |  |
| [NodeIdMapKeyValueIterator](/api-docs/headless/loreline/_Node/NodeIdMapKeyValueIterator/) | class |  |
| [ScriptBodyIterator](/api-docs/headless/loreline/_Script/ScriptBodyIterator/) | class |  |
| [PendingTimer](/api-docs/headless/loreline/_Timer/PendingTimer/) | class |  |
| [WithType](/api-docs/headless/loreline/lorscript/_Checker/WithType/) | enum |  |
| [Stop](/api-docs/headless/loreline/lorscript/_Interp/Stop/) | enum |  |
| [PoEntry](/api-docs/headless/loreline/translation/_PoTranslation/PoEntry/) | class |  |

## Shade

| Type | Kind | Description |
|------|------|-------------|
| [ShadePlugin](/api-docs/headless/ceramic/ShadePlugin/) | class | Runtime integration of `shade` shaders with the asset system. |
| [BaseSampler2D](/api-docs/headless/shade/BaseSampler2D/) | typedef |  |
| [BaseShader](/api-docs/headless/shade/BaseShader/) | typedef |  |
| [Frag](/api-docs/headless/shade/Frag/) | class | Base class for fragment (pixel) shaders. |
| [Functions](/api-docs/headless/shade/Functions/) | class |  |
| [IMat2](/api-docs/headless/shade/IMat2/) | abstract |  |
| [IMat3](/api-docs/headless/shade/IMat3/) | abstract |  |
| [IMat4](/api-docs/headless/shade/IMat4/) | abstract |  |
| [IVec2](/api-docs/headless/shade/IVec2/) | abstract |  |
| [IVec3](/api-docs/headless/shade/IVec3/) | abstract |  |
| [IVec4](/api-docs/headless/shade/IVec4/) | abstract |  |
| [Mat2](/api-docs/headless/shade/Mat2/) | abstract |  |
| [Mat3](/api-docs/headless/shade/Mat3/) | abstract |  |
| [Mat4](/api-docs/headless/shade/Mat4/) | abstract |  |
| [ParamType](/api-docs/headless/shade/ParamType/) | abstract |  |
| [Sampler2D](/api-docs/headless/shade/Sampler2D/) | typedef |  |
| [SamplerCube](/api-docs/headless/shade/SamplerCube/) | abstract |  |
| [Shade](/api-docs/headless/shade/Shade/) | class | Base class for GPU shaders providing standard shader language functions. |
| [Shader](/api-docs/headless/shade/Shader/) | class |  |
| [Shader__shaders_Bloom_Vert__shaders_Bloom_Frag](/api-docs/headless/shade/Shader__shaders_Bloom_Vert__shaders_Bloom_Frag/) | class |  |
| [Shader__shaders_Blur_Vert__shaders_Blur_Frag](/api-docs/headless/shade/Shader__shaders_Blur_Vert__shaders_Blur_Frag/) | class |  |
| [Shader__shaders_Fxaa_Vert__shaders_Fxaa_Frag](/api-docs/headless/shade/Shader__shaders_Fxaa_Vert__shaders_Fxaa_Frag/) | class |  |
| [Shader__shaders_GaussianBlur_Vert__shaders_GaussianBlur_Frag](/api-docs/headless/shade/Shader__shaders_GaussianBlur_Vert__shaders_GaussianBlur_Frag/) | class |  |
| [Shader__shaders_Glow_Vert__shaders_Glow_Frag](/api-docs/headless/shade/Shader__shaders_Glow_Vert__shaders_Glow_Frag/) | class |  |
| [Shader__shaders_InnerLight_Vert__shaders_InnerLight_Frag](/api-docs/headless/shade/Shader__shaders_InnerLight_Vert__shaders_InnerLight_Frag/) | class |  |
| [Shader__shaders_Msdf_Vert__shaders_Msdf_Frag](/api-docs/headless/shade/Shader__shaders_Msdf_Vert__shaders_Msdf_Frag/) | class |  |
| [Shader__shaders_Outline_Vert__shaders_Outline_Frag](/api-docs/headless/shade/Shader__shaders_Outline_Vert__shaders_Outline_Frag/) | class |  |
| [Shader__shaders_PixelArt_Vert__shaders_PixelArt_Frag](/api-docs/headless/shade/Shader__shaders_PixelArt_Vert__shaders_PixelArt_Frag/) | class |  |
| [Shader__shaders_PixelArtCrt_Vert__shaders_PixelArtCrt_Frag](/api-docs/headless/shade/Shader__shaders_PixelArtCrt_Vert__shaders_PixelArtCrt_Frag/) | class |  |
| [Shader__shaders_Textured_Vert__shaders_Textured_Frag](/api-docs/headless/shade/Shader__shaders_Textured_Vert__shaders_Textured_Frag/) | class |  |
| [Shader__shaders_TintBlack_Vert__shaders_TintBlack_Frag](/api-docs/headless/shade/Shader__shaders_TintBlack_Vert__shaders_TintBlack_Frag/) | class |  |
| [Vec2](/api-docs/headless/shade/Vec2/) | abstract |  |
| [Vec3](/api-docs/headless/shade/Vec3/) | abstract |  |
| [Vec4](/api-docs/headless/shade/Vec4/) | abstract |  |
| [Vert](/api-docs/headless/shade/Vert/) | class | Base class for vertex shaders. |
| [Bloom](/api-docs/headless/shaders/Bloom/) | class |  |
| [Bloom_Frag](/api-docs/headless/shaders/Bloom_Frag/) | class |  |
| [Bloom_Vert](/api-docs/headless/shaders/Bloom_Vert/) | class |  |
| [Blur](/api-docs/headless/shaders/Blur/) | class |  |
| [Blur_Frag](/api-docs/headless/shaders/Blur_Frag/) | class |  |
| [Blur_Vert](/api-docs/headless/shaders/Blur_Vert/) | class |  |
| [Fxaa](/api-docs/headless/shaders/Fxaa/) | class |  |
| [Fxaa_Frag](/api-docs/headless/shaders/Fxaa_Frag/) | class |  |
| [Fxaa_Vert](/api-docs/headless/shaders/Fxaa_Vert/) | class |  |
| [GaussianBlur](/api-docs/headless/shaders/GaussianBlur/) | class |  |
| [GaussianBlur_Frag](/api-docs/headless/shaders/GaussianBlur_Frag/) | class |  |
| [GaussianBlur_Vert](/api-docs/headless/shaders/GaussianBlur_Vert/) | class |  |
| [Glow](/api-docs/headless/shaders/Glow/) | class |  |
| [Glow_Frag](/api-docs/headless/shaders/Glow_Frag/) | class |  |
| [Glow_Vert](/api-docs/headless/shaders/Glow_Vert/) | class |  |
| [InnerLight](/api-docs/headless/shaders/InnerLight/) | class |  |
| [InnerLight_Frag](/api-docs/headless/shaders/InnerLight_Frag/) | class |  |
| [InnerLight_Vert](/api-docs/headless/shaders/InnerLight_Vert/) | class |  |
| [Msdf](/api-docs/headless/shaders/Msdf/) | class |  |
| [Msdf_Frag](/api-docs/headless/shaders/Msdf_Frag/) | class |  |
| [Msdf_Vert](/api-docs/headless/shaders/Msdf_Vert/) | class |  |
| [Outline](/api-docs/headless/shaders/Outline/) | class |  |
| [Outline_Frag](/api-docs/headless/shaders/Outline_Frag/) | class |  |
| [Outline_Vert](/api-docs/headless/shaders/Outline_Vert/) | class |  |
| [PixelArt](/api-docs/headless/shaders/PixelArt/) | class |  |
| [PixelArt_Frag](/api-docs/headless/shaders/PixelArt_Frag/) | class |  |
| [PixelArt_Vert](/api-docs/headless/shaders/PixelArt_Vert/) | class |  |
| [PixelArtCrt](/api-docs/headless/shaders/PixelArtCrt/) | class | CRT and LCD display simulation for pixel art. Runs once per screen pixel over a low |
| [PixelArtCrt_Frag](/api-docs/headless/shaders/PixelArtCrt_Frag/) | class | `precision: 'highp'`: screen positions reach the thousands, which a mediump float |
| [PixelArtCrt_Vert](/api-docs/headless/shaders/PixelArtCrt_Vert/) | class |  |
| [Textured](/api-docs/headless/shaders/Textured/) | class |  |
| [Textured_Frag](/api-docs/headless/shaders/Textured_Frag/) | class |  |
| [Textured_Vert](/api-docs/headless/shaders/Textured_Vert/) | class |  |
| [TintBlack](/api-docs/headless/shaders/TintBlack/) | class |  |
| [TintBlack_Frag](/api-docs/headless/shaders/TintBlack_Frag/) | class |  |
| [TintBlack_Vert](/api-docs/headless/shaders/TintBlack_Vert/) | class |  |

## Clipper

| Type | Kind | Description |
|------|------|-------------|
| [Active](/api-docs/headless/clipper/Active/) | class |  |
| [Clipper](/api-docs/headless/clipper/Clipper/) | class | High-level static API for common polygon clipping and offsetting operations. |
| [Clipper64](/api-docs/headless/clipper/Clipper64/) | class |  |
| [ClipperBase](/api-docs/headless/clipper/ClipperBase/) | class |  |
| [ClipperD](/api-docs/headless/clipper/ClipperD/) | class |  |
| [ClipperInt64](/api-docs/headless/clipper/ClipperInt64/) | abstract | Default haxe.Int64-backed implementation for full precision. |
| [ClipperLib](/api-docs/headless/clipper/ClipperLib/) | class |  |
| [ClipperLibException](/api-docs/headless/clipper/ClipperLibException/) | class |  |
| [ClipperMinkowski](/api-docs/headless/clipper/ClipperMinkowski/) | class | Minkowski Sum and Difference operations. |
| [ClipperOffset](/api-docs/headless/clipper/ClipperOffset/) | class | Performs polygon offsetting (inflating/shrinking). |
| [ClipperPool](/api-docs/headless/clipper/ClipperPool/) | class | Object pooling manager for Clipper2. |
| [ClipperTriangulation](/api-docs/headless/clipper/ClipperTriangulation/) | class | High-level triangulation function. |
| [ClipType](/api-docs/headless/clipper/ClipType/) | abstract | Boolean clipping operation type. |
| [Delaunay](/api-docs/headless/clipper/Delaunay/) | class | Constrained Delaunay Triangulation engine. |
| [EndType](/api-docs/headless/clipper/EndType/) | abstract | End type for offset operations. |
| [FillRule](/api-docs/headless/clipper/FillRule/) | abstract | Polygon fill rule. |
| [HashCode](/api-docs/headless/clipper/HashCode/) | class | Hash code combining utility (xxHash32-inspired). |
| [HorzJoin](/api-docs/headless/clipper/HorzJoin/) | class |  |
| [HorzPosition](/api-docs/headless/clipper/HorzPosition/) | abstract |  |
| [HorzSegment](/api-docs/headless/clipper/HorzSegment/) | class |  |
| [InternalClipper](/api-docs/headless/clipper/InternalClipper/) | class | Internal utility functions for Clipper operations. |
| [IntersectNode](/api-docs/headless/clipper/IntersectNode/) | class |  |
| [JoinType](/api-docs/headless/clipper/JoinType/) | abstract | Join type for offset operations. |
| [JoinWith](/api-docs/headless/clipper/JoinWith/) | abstract |  |
| [LocalMinima](/api-docs/headless/clipper/LocalMinima/) | class |  |
| [OutPt](/api-docs/headless/clipper/OutPt/) | class |  |
| [OutPt2](/api-docs/headless/clipper/OutPt2/) | class |  |
| [OutRec](/api-docs/headless/clipper/OutRec/) | class |  |
| [Path64](/api-docs/headless/clipper/Path64/) | typedef | A single polygon path with 64-bit integer coordinates. |
| [PathD](/api-docs/headless/clipper/PathD/) | typedef | A single polygon path with double-precision floating point coordinates. |
| [Paths64](/api-docs/headless/clipper/Paths64/) | typedef | Multiple polygon paths with 64-bit integer coordinates. |
| [PathsD](/api-docs/headless/clipper/PathsD/) | typedef | Multiple polygon paths with double-precision floating point coordinates. |
| [PathType](/api-docs/headless/clipper/PathType/) | abstract | Path type for clipping operations. |
| [Point64](/api-docs/headless/clipper/Point64/) | abstract | Point with 64-bit integer coordinates. |
| [Point64Impl](/api-docs/headless/clipper/Point64Impl/) | class | Internal implementation class for Point64. |
| [PointD](/api-docs/headless/clipper/PointD/) | abstract | Point with double-precision floating point coordinates. |
| [PointDImpl](/api-docs/headless/clipper/PointDImpl/) | class | Internal implementation class for PointD. |
| [PointInPolygonResult](/api-docs/headless/clipper/PointInPolygonResult/) | abstract | Result of point-in-polygon test. |
| [PolyPath64](/api-docs/headless/clipper/PolyPath64/) | class |  |
| [PolyPathBase](/api-docs/headless/clipper/PolyPathBase/) | class |  |
| [PolyPathD](/api-docs/headless/clipper/PolyPathD/) | class |  |
| [PolyTree64](/api-docs/headless/clipper/PolyTree64/) | class |  |
| [PolyTreeD](/api-docs/headless/clipper/PolyTreeD/) | class |  |
| [Rect64](/api-docs/headless/clipper/Rect64/) | class | Rectangle with 64-bit integer coordinates. |
| [RectClip64](/api-docs/headless/clipper/RectClip64/) | class |  |
| [RectClipLines64](/api-docs/headless/clipper/RectClipLines64/) | class |  |
| [RectD](/api-docs/headless/clipper/RectD/) | class | Rectangle with double-precision floating point coordinates. |
| [TriangulateResult](/api-docs/headless/clipper/TriangulateResult/) | abstract | Result of triangulation operation. |
| [UInt128](/api-docs/headless/clipper/UInt128/) | class | 128-bit unsigned integer for high precision multiplication. |
| [Vertex](/api-docs/headless/clipper/Vertex/) | class |  |
| [VertexFlags](/api-docs/headless/clipper/VertexFlags/) | abstract |  |
| [Group](/api-docs/headless/clipper/_ClipperOffset/Group/) | class |  |
| [Location](/api-docs/headless/clipper/_ClipperRectClip/Location/) | abstract |  |
| [Edge](/api-docs/headless/clipper/_ClipperTriangulation/Edge/) | class | Internal edge class for triangulation. |
| [EdgeContainsResult](/api-docs/headless/clipper/_ClipperTriangulation/EdgeContainsResult/) | abstract |  |
| [EdgeKind](/api-docs/headless/clipper/_ClipperTriangulation/EdgeKind/) | abstract |  |
| [IntersectKind](/api-docs/headless/clipper/_ClipperTriangulation/IntersectKind/) | abstract |  |
| [Triangle](/api-docs/headless/clipper/_ClipperTriangulation/Triangle/) | class | Internal triangle class for triangulation. |
| [Vertex2](/api-docs/headless/clipper/_ClipperTriangulation/Vertex2/) | class | Internal vertex class for triangulation. |

## Imgui-hx

| Type | Kind | Description |
|------|------|-------------|
| [ImColor](/api-docs/headless/imgui/ImColor/) | typedef |  |
| [ImDrawCmd](/api-docs/headless/imgui/ImDrawCmd/) | typedef |  |
| [ImDrawData](/api-docs/headless/imgui/ImDrawData/) | typedef |  |
| [ImDrawFlags](/api-docs/headless/imgui/ImDrawFlags/) | typedef |  |
| [ImDrawIdx](/api-docs/headless/imgui/ImDrawIdx/) | typedef |  |
| [ImDrawList](/api-docs/headless/imgui/ImDrawList/) | typedef |  |
| [ImDrawListFlags](/api-docs/headless/imgui/ImDrawListFlags/) | typedef |  |
| [ImDrawListSharedData](/api-docs/headless/imgui/ImDrawListSharedData/) | typedef |  |
| [ImDrawListSplitter](/api-docs/headless/imgui/ImDrawListSplitter/) | typedef |  |
| [ImDrawTextFlags](/api-docs/headless/imgui/ImDrawTextFlags/) | typedef |  |
| [ImDrawVert](/api-docs/headless/imgui/ImDrawVert/) | typedef |  |
| [ImFont](/api-docs/headless/imgui/ImFont/) | typedef |  |
| [ImFontAtlas](/api-docs/headless/imgui/ImFontAtlas/) | typedef |  |
| [ImFontAtlasBuilder](/api-docs/headless/imgui/ImFontAtlasBuilder/) | typedef |  |
| [ImFontAtlasFlags](/api-docs/headless/imgui/ImFontAtlasFlags/) | typedef |  |
| [ImFontAtlasRect](/api-docs/headless/imgui/ImFontAtlasRect/) | typedef |  |
| [ImFontAtlasRectId](/api-docs/headless/imgui/ImFontAtlasRectId/) | typedef |  |
| [ImFontBaked](/api-docs/headless/imgui/ImFontBaked/) | typedef |  |
| [ImFontConfig](/api-docs/headless/imgui/ImFontConfig/) | typedef |  |
| [ImFontFlags](/api-docs/headless/imgui/ImFontFlags/) | typedef |  |
| [ImFontGlyph](/api-docs/headless/imgui/ImFontGlyph/) | typedef |  |
| [ImFontGlyphRangesBuilder](/api-docs/headless/imgui/ImFontGlyphRangesBuilder/) | typedef |  |
| [ImFontLoader](/api-docs/headless/imgui/ImFontLoader/) | typedef |  |
| [ImGui](/api-docs/headless/imgui/ImGui/) | class |  |
| [ImGuiBackendFlags](/api-docs/headless/imgui/ImGuiBackendFlags/) | typedef |  |
| [ImGuiButtonFlags](/api-docs/headless/imgui/ImGuiButtonFlags/) | typedef |  |
| [ImGuiChildFlags](/api-docs/headless/imgui/ImGuiChildFlags/) | typedef |  |
| [ImGuiClipboard](/api-docs/headless/imgui/ImGuiClipboard/) | class | Route ImGui's clipboard (SetClipboardText/GetClipboardText, and copy/paste |
| [ImGuiCol](/api-docs/headless/imgui/ImGuiCol/) | typedef |  |
| [ImGuiColorEditFlags](/api-docs/headless/imgui/ImGuiColorEditFlags/) | typedef |  |
| [ImGuiComboFlags](/api-docs/headless/imgui/ImGuiComboFlags/) | typedef |  |
| [ImGuiCond](/api-docs/headless/imgui/ImGuiCond/) | typedef |  |
| [ImGuiConfigFlags](/api-docs/headless/imgui/ImGuiConfigFlags/) | typedef |  |
| [ImGuiContext](/api-docs/headless/imgui/ImGuiContext/) | typedef |  |
| [ImGuiDataType](/api-docs/headless/imgui/ImGuiDataType/) | typedef |  |
| [ImGuiDir](/api-docs/headless/imgui/ImGuiDir/) | typedef |  |
| [ImGuiDockNodeFlags](/api-docs/headless/imgui/ImGuiDockNodeFlags/) | typedef |  |
| [ImGuiDragDropFlags](/api-docs/headless/imgui/ImGuiDragDropFlags/) | typedef |  |
| [ImGuiFocusedFlags](/api-docs/headless/imgui/ImGuiFocusedFlags/) | typedef |  |
| [ImGuiFontPtr](/api-docs/headless/imgui/ImGuiFontPtr/) | typedef |  |
| [ImGuiFonts](/api-docs/headless/imgui/ImGuiFonts/) | class | Cross-target font loading helpers (hand-written, never regenerated). |
| [ImGuiHoveredFlags](/api-docs/headless/imgui/ImGuiHoveredFlags/) | typedef |  |
| [ImGuiID](/api-docs/headless/imgui/ImGuiID/) | typedef |  |
| [ImGuiIniSettings](/api-docs/headless/imgui/ImGuiIniSettings/) | class | Where (and whether) Dear ImGui persists window layout. |
| [ImGuiInputFlags](/api-docs/headless/imgui/ImGuiInputFlags/) | typedef |  |
| [ImGuiInputTextCallbackData](/api-docs/headless/imgui/ImGuiInputTextCallbackData/) | typedef |  |
| [ImGuiInputTextFlags](/api-docs/headless/imgui/ImGuiInputTextFlags/) | typedef |  |
| [ImGuiIO](/api-docs/headless/imgui/ImGuiIO/) | typedef |  |
| [ImGuiItemFlags](/api-docs/headless/imgui/ImGuiItemFlags/) | typedef |  |
| [ImGuiKey](/api-docs/headless/imgui/ImGuiKey/) | typedef |  |
| [ImGuiKeyChord](/api-docs/headless/imgui/ImGuiKeyChord/) | typedef |  |
| [ImGuiListClipper](/api-docs/headless/imgui/ImGuiListClipper/) | typedef |  |
| [ImGuiListClipperFlags](/api-docs/headless/imgui/ImGuiListClipperFlags/) | typedef |  |
| [ImGuiMouseButton](/api-docs/headless/imgui/ImGuiMouseButton/) | typedef |  |
| [ImGuiMouseCursor](/api-docs/headless/imgui/ImGuiMouseCursor/) | typedef |  |
| [ImGuiMouseSource](/api-docs/headless/imgui/ImGuiMouseSource/) | typedef |  |
| [ImGuiMultiSelectFlags](/api-docs/headless/imgui/ImGuiMultiSelectFlags/) | typedef |  |
| [ImGuiMultiSelectIO](/api-docs/headless/imgui/ImGuiMultiSelectIO/) | typedef |  |
| [ImGuiOpaqueCallback](/api-docs/headless/imgui/ImGuiOpaqueCallback/) | typedef |  |
| [ImGuiPayload](/api-docs/headless/imgui/ImGuiPayload/) | typedef |  |
| [ImGuiPlatformImeData](/api-docs/headless/imgui/ImGuiPlatformImeData/) | typedef |  |
| [ImGuiPlatformIO](/api-docs/headless/imgui/ImGuiPlatformIO/) | typedef |  |
| [ImGuiPlatformMonitor](/api-docs/headless/imgui/ImGuiPlatformMonitor/) | typedef |  |
| [ImGuiPopupFlags](/api-docs/headless/imgui/ImGuiPopupFlags/) | typedef |  |
| [ImGuiSelectableFlags](/api-docs/headless/imgui/ImGuiSelectableFlags/) | typedef |  |
| [ImGuiSelectionBasicStorage](/api-docs/headless/imgui/ImGuiSelectionBasicStorage/) | typedef |  |
| [ImGuiSelectionExternalStorage](/api-docs/headless/imgui/ImGuiSelectionExternalStorage/) | typedef |  |
| [ImGuiSelectionRequest](/api-docs/headless/imgui/ImGuiSelectionRequest/) | typedef |  |
| [ImGuiSelectionRequestType](/api-docs/headless/imgui/ImGuiSelectionRequestType/) | typedef |  |
| [ImGuiSelectionUserData](/api-docs/headless/imgui/ImGuiSelectionUserData/) | typedef |  |
| [ImGuiSizeCallbackData](/api-docs/headless/imgui/ImGuiSizeCallbackData/) | typedef |  |
| [ImGuiSliderFlags](/api-docs/headless/imgui/ImGuiSliderFlags/) | typedef |  |
| [ImGuiSortDirection](/api-docs/headless/imgui/ImGuiSortDirection/) | typedef |  |
| [ImGuiStorage](/api-docs/headless/imgui/ImGuiStorage/) | typedef |  |
| [ImGuiStyle](/api-docs/headless/imgui/ImGuiStyle/) | typedef |  |
| [ImGuiStyleExtra](/api-docs/headless/imgui/ImGuiStyleExtra/) | class | Portable access to the parts of `ImGuiStyle` the generator cannot bind: the |
| [ImGuiStyleVar](/api-docs/headless/imgui/ImGuiStyleVar/) | typedef |  |
| [ImGuiTabBarFlags](/api-docs/headless/imgui/ImGuiTabBarFlags/) | typedef |  |
| [ImGuiTabItemFlags](/api-docs/headless/imgui/ImGuiTabItemFlags/) | typedef |  |
| [ImGuiTableBgTarget](/api-docs/headless/imgui/ImGuiTableBgTarget/) | typedef |  |
| [ImGuiTableColumnFlags](/api-docs/headless/imgui/ImGuiTableColumnFlags/) | typedef |  |
| [ImGuiTableColumnSortSpecs](/api-docs/headless/imgui/ImGuiTableColumnSortSpecs/) | typedef |  |
| [ImGuiTableFlags](/api-docs/headless/imgui/ImGuiTableFlags/) | typedef |  |
| [ImGuiTableRowFlags](/api-docs/headless/imgui/ImGuiTableRowFlags/) | typedef |  |
| [ImGuiTableSortSpecs](/api-docs/headless/imgui/ImGuiTableSortSpecs/) | typedef |  |
| [ImGuiTextBuffer](/api-docs/headless/imgui/ImGuiTextBuffer/) | typedef |  |
| [ImGuiThemes](/api-docs/headless/imgui/ImGuiThemes/) | class | Ready-to-use ImGui themes (hand-written, never regenerated). |
| [ImGuiTreeNodeFlags](/api-docs/headless/imgui/ImGuiTreeNodeFlags/) | typedef |  |
| [ImGuiViewport](/api-docs/headless/imgui/ImGuiViewport/) | typedef |  |
| [ImGuiViewportFlags](/api-docs/headless/imgui/ImGuiViewportFlags/) | typedef |  |
| [ImGuiWindowClass](/api-docs/headless/imgui/ImGuiWindowClass/) | typedef |  |
| [ImGuiWindowFlags](/api-docs/headless/imgui/ImGuiWindowFlags/) | typedef |  |
| [ImS32](/api-docs/headless/imgui/ImS32/) | typedef |  |
| [ImS64](/api-docs/headless/imgui/ImS64/) | typedef |  |
| [ImS8](/api-docs/headless/imgui/ImS8/) | typedef |  |
| [ImTextureData](/api-docs/headless/imgui/ImTextureData/) | typedef |  |
| [ImTextureFormat](/api-docs/headless/imgui/ImTextureFormat/) | typedef |  |
| [ImTextureID](/api-docs/headless/imgui/ImTextureID/) | typedef |  |
| [ImTextureRect](/api-docs/headless/imgui/ImTextureRect/) | typedef |  |
| [ImTextureRef](/api-docs/headless/imgui/ImTextureRef/) | typedef |  |
| [ImTextureStatus](/api-docs/headless/imgui/ImTextureStatus/) | typedef |  |
| [ImU16](/api-docs/headless/imgui/ImU16/) | typedef |  |
| [ImU32](/api-docs/headless/imgui/ImU32/) | typedef |  |
| [ImU64](/api-docs/headless/imgui/ImU64/) | typedef |  |
| [ImU8](/api-docs/headless/imgui/ImU8/) | typedef |  |
| [ImVec2](/api-docs/headless/imgui/ImVec2/) | typedef |  |
| [ImVec4](/api-docs/headless/imgui/ImVec4/) | typedef |  |
| [ImVector_char](/api-docs/headless/imgui/ImVector_char/) | typedef |  |
| [ImVector_float](/api-docs/headless/imgui/ImVector_float/) | typedef |  |
| [ImVector_ImDrawChannel](/api-docs/headless/imgui/ImVector_ImDrawChannel/) | typedef |  |
| [ImVector_ImDrawCmd](/api-docs/headless/imgui/ImVector_ImDrawCmd/) | typedef |  |
| [ImVector_ImDrawIdx](/api-docs/headless/imgui/ImVector_ImDrawIdx/) | typedef |  |
| [ImVector_ImDrawListPtr](/api-docs/headless/imgui/ImVector_ImDrawListPtr/) | typedef |  |
| [ImVector_ImDrawListSharedDataPtr](/api-docs/headless/imgui/ImVector_ImDrawListSharedDataPtr/) | typedef |  |
| [ImVector_ImDrawVert](/api-docs/headless/imgui/ImVector_ImDrawVert/) | typedef |  |
| [ImVector_ImFontConfig](/api-docs/headless/imgui/ImVector_ImFontConfig/) | typedef |  |
| [ImVector_ImFontConfigPtr](/api-docs/headless/imgui/ImVector_ImFontConfigPtr/) | typedef |  |
| [ImVector_ImFontGlyph](/api-docs/headless/imgui/ImVector_ImFontGlyph/) | typedef |  |
| [ImVector_ImFontPtr](/api-docs/headless/imgui/ImVector_ImFontPtr/) | typedef |  |
| [ImVector_ImGuiPlatformMonitor](/api-docs/headless/imgui/ImVector_ImGuiPlatformMonitor/) | typedef |  |
| [ImVector_ImGuiSelectionRequest](/api-docs/headless/imgui/ImVector_ImGuiSelectionRequest/) | typedef |  |
| [ImVector_ImGuiStoragePair](/api-docs/headless/imgui/ImVector_ImGuiStoragePair/) | typedef |  |
| [ImVector_ImGuiTextRange](/api-docs/headless/imgui/ImVector_ImGuiTextRange/) | typedef |  |
| [ImVector_ImGuiViewportPtr](/api-docs/headless/imgui/ImVector_ImGuiViewportPtr/) | typedef |  |
| [ImVector_ImTextureDataPtr](/api-docs/headless/imgui/ImVector_ImTextureDataPtr/) | typedef |  |
| [ImVector_ImTextureRect](/api-docs/headless/imgui/ImVector_ImTextureRect/) | typedef |  |
| [ImVector_ImTextureRef](/api-docs/headless/imgui/ImVector_ImTextureRef/) | typedef |  |
| [ImVector_ImU16](/api-docs/headless/imgui/ImVector_ImU16/) | typedef |  |
| [ImVector_ImU32](/api-docs/headless/imgui/ImVector_ImU32/) | typedef |  |
| [ImVector_ImU8](/api-docs/headless/imgui/ImVector_ImU8/) | typedef |  |
| [ImVector_ImVec2](/api-docs/headless/imgui/ImVector_ImVec2/) | typedef |  |
| [ImVector_ImVec4](/api-docs/headless/imgui/ImVector_ImVec4/) | typedef |  |
| [ImVector_ImWchar](/api-docs/headless/imgui/ImVector_ImWchar/) | typedef |  |
| [ImWchar](/api-docs/headless/imgui/ImWchar/) | typedef |  |
| [ImWchar16](/api-docs/headless/imgui/ImWchar16/) | typedef |  |
| [ImWchar32](/api-docs/headless/imgui/ImWchar32/) | typedef |  |
| [NativeStructs](/api-docs/headless/imgui/NativeStructs/) | class | Portable creation of the few ImGui helper structs that user code owns |
| [ImColor](/api-docs/headless/imguijs/ImColor/) | abstract |  |
| [ImDrawCmd](/api-docs/headless/imguijs/ImDrawCmd/) | abstract |  |
| [ImDrawData](/api-docs/headless/imguijs/ImDrawData/) | abstract |  |
| [ImDrawFlags](/api-docs/headless/imguijs/ImDrawFlags/) | abstract |  |
| [ImDrawIdx](/api-docs/headless/imguijs/ImDrawIdx/) | typedef |  |
| [ImDrawList](/api-docs/headless/imguijs/ImDrawList/) | abstract |  |
| [ImDrawListFlags](/api-docs/headless/imguijs/ImDrawListFlags/) | abstract |  |
| [ImDrawListSharedData](/api-docs/headless/imguijs/ImDrawListSharedData/) | abstract |  |
| [ImDrawListSplitter](/api-docs/headless/imguijs/ImDrawListSplitter/) | abstract |  |
| [ImDrawTextFlags](/api-docs/headless/imguijs/ImDrawTextFlags/) | typedef |  |
| [ImDrawVert](/api-docs/headless/imguijs/ImDrawVert/) | abstract |  |
| [ImFont](/api-docs/headless/imguijs/ImFont/) | abstract |  |
| [ImFontAtlas](/api-docs/headless/imguijs/ImFontAtlas/) | abstract |  |
| [ImFontAtlasBuilder](/api-docs/headless/imguijs/ImFontAtlasBuilder/) | abstract |  |
| [ImFontAtlasFlags](/api-docs/headless/imguijs/ImFontAtlasFlags/) | abstract |  |
| [ImFontAtlasRect](/api-docs/headless/imguijs/ImFontAtlasRect/) | abstract |  |
| [ImFontAtlasRectId](/api-docs/headless/imguijs/ImFontAtlasRectId/) | typedef |  |
| [ImFontBaked](/api-docs/headless/imguijs/ImFontBaked/) | abstract |  |
| [ImFontConfig](/api-docs/headless/imguijs/ImFontConfig/) | abstract |  |
| [ImFontFlags](/api-docs/headless/imguijs/ImFontFlags/) | abstract |  |
| [ImFontGlyph](/api-docs/headless/imguijs/ImFontGlyph/) | abstract |  |
| [ImFontGlyphRangesBuilder](/api-docs/headless/imguijs/ImFontGlyphRangesBuilder/) | abstract |  |
| [ImFontLoader](/api-docs/headless/imguijs/ImFontLoader/) | abstract |  |
| [ImGui](/api-docs/headless/imguijs/ImGui/) | class |  |
| [ImGuiBackendFlags](/api-docs/headless/imguijs/ImGuiBackendFlags/) | abstract |  |
| [ImGuiButtonFlags](/api-docs/headless/imguijs/ImGuiButtonFlags/) | abstract |  |
| [ImGuiChildFlags](/api-docs/headless/imguijs/ImGuiChildFlags/) | abstract |  |
| [ImGuiCol](/api-docs/headless/imguijs/ImGuiCol/) | abstract |  |
| [ImGuiColorEditFlags](/api-docs/headless/imguijs/ImGuiColorEditFlags/) | abstract |  |
| [ImGuiComboFlags](/api-docs/headless/imguijs/ImGuiComboFlags/) | abstract |  |
| [ImGuiCond](/api-docs/headless/imguijs/ImGuiCond/) | abstract |  |
| [ImGuiConfigFlags](/api-docs/headless/imguijs/ImGuiConfigFlags/) | abstract |  |
| [ImGuiContext](/api-docs/headless/imguijs/ImGuiContext/) | abstract |  |
| [ImGuiDataType](/api-docs/headless/imguijs/ImGuiDataType/) | abstract |  |
| [ImGuiDir](/api-docs/headless/imguijs/ImGuiDir/) | abstract | Forward declared enum type ImGuiDir |
| [ImGuiDockNodeFlags](/api-docs/headless/imguijs/ImGuiDockNodeFlags/) | abstract |  |
| [ImGuiDragDropFlags](/api-docs/headless/imguijs/ImGuiDragDropFlags/) | abstract |  |
| [ImGuiFocusedFlags](/api-docs/headless/imguijs/ImGuiFocusedFlags/) | abstract |  |
| [ImGuiHoveredFlags](/api-docs/headless/imguijs/ImGuiHoveredFlags/) | abstract |  |
| [ImGuiID](/api-docs/headless/imguijs/ImGuiID/) | typedef |  |
| [ImGuiInputFlags](/api-docs/headless/imguijs/ImGuiInputFlags/) | abstract |  |
| [ImGuiInputTextCallbackData](/api-docs/headless/imguijs/ImGuiInputTextCallbackData/) | abstract |  |
| [ImGuiInputTextFlags](/api-docs/headless/imguijs/ImGuiInputTextFlags/) | abstract |  |
| [ImGuiIO](/api-docs/headless/imguijs/ImGuiIO/) | abstract |  |
| [ImGuiItemFlags](/api-docs/headless/imguijs/ImGuiItemFlags/) | abstract |  |
| [ImGuiJs](/api-docs/headless/imguijs/ImGuiJs/) | class | js-target runtime support for the generated bindings (`imguijs.ImGui`): |
| [ImGuiKey](/api-docs/headless/imguijs/ImGuiKey/) | abstract | Forward declared enum type ImGuiKey |
| [ImGuiKeyChord](/api-docs/headless/imguijs/ImGuiKeyChord/) | typedef |  |
| [ImGuiListClipper](/api-docs/headless/imguijs/ImGuiListClipper/) | abstract |  |
| [ImGuiListClipperFlags](/api-docs/headless/imguijs/ImGuiListClipperFlags/) | abstract |  |
| [ImGuiMouseButton](/api-docs/headless/imguijs/ImGuiMouseButton/) | abstract |  |
| [ImGuiMouseCursor](/api-docs/headless/imguijs/ImGuiMouseCursor/) | abstract |  |
| [ImGuiMouseSource](/api-docs/headless/imguijs/ImGuiMouseSource/) | abstract | Forward declared enum type ImGuiMouseSource |
| [ImGuiMultiSelectFlags](/api-docs/headless/imguijs/ImGuiMultiSelectFlags/) | abstract |  |
| [ImGuiMultiSelectIO](/api-docs/headless/imguijs/ImGuiMultiSelectIO/) | abstract |  |
| [ImGuiOpaqueCallback](/api-docs/headless/imguijs/ImGuiOpaqueCallback/) | typedef |  |
| [ImGuiPayload](/api-docs/headless/imguijs/ImGuiPayload/) | abstract |  |
| [ImGuiPlatformImeData](/api-docs/headless/imguijs/ImGuiPlatformImeData/) | abstract |  |
| [ImGuiPlatformIO](/api-docs/headless/imguijs/ImGuiPlatformIO/) | abstract |  |
| [ImGuiPlatformMonitor](/api-docs/headless/imguijs/ImGuiPlatformMonitor/) | abstract |  |
| [ImGuiPopupFlags](/api-docs/headless/imguijs/ImGuiPopupFlags/) | abstract |  |
| [ImGuiSelectableFlags](/api-docs/headless/imguijs/ImGuiSelectableFlags/) | abstract |  |
| [ImGuiSelectionBasicStorage](/api-docs/headless/imguijs/ImGuiSelectionBasicStorage/) | abstract |  |
| [ImGuiSelectionExternalStorage](/api-docs/headless/imguijs/ImGuiSelectionExternalStorage/) | abstract |  |
| [ImGuiSelectionRequest](/api-docs/headless/imguijs/ImGuiSelectionRequest/) | abstract |  |
| [ImGuiSelectionRequestType](/api-docs/headless/imguijs/ImGuiSelectionRequestType/) | abstract |  |
| [ImGuiSelectionUserData](/api-docs/headless/imguijs/ImGuiSelectionUserData/) | typedef |  |
| [ImGuiSizeCallbackData](/api-docs/headless/imguijs/ImGuiSizeCallbackData/) | abstract |  |
| [ImGuiSliderFlags](/api-docs/headless/imguijs/ImGuiSliderFlags/) | abstract |  |
| [ImGuiSortDirection](/api-docs/headless/imguijs/ImGuiSortDirection/) | abstract | Forward declared enum type ImGuiSortDirection |
| [ImGuiStorage](/api-docs/headless/imguijs/ImGuiStorage/) | abstract |  |
| [ImGuiStyle](/api-docs/headless/imguijs/ImGuiStyle/) | abstract |  |
| [ImGuiStyleVar](/api-docs/headless/imguijs/ImGuiStyleVar/) | abstract |  |
| [ImGuiTabBarFlags](/api-docs/headless/imguijs/ImGuiTabBarFlags/) | abstract |  |
| [ImGuiTabItemFlags](/api-docs/headless/imguijs/ImGuiTabItemFlags/) | abstract |  |
| [ImGuiTableBgTarget](/api-docs/headless/imguijs/ImGuiTableBgTarget/) | abstract |  |
| [ImGuiTableColumnFlags](/api-docs/headless/imguijs/ImGuiTableColumnFlags/) | abstract |  |
| [ImGuiTableColumnSortSpecs](/api-docs/headless/imguijs/ImGuiTableColumnSortSpecs/) | abstract |  |
| [ImGuiTableFlags](/api-docs/headless/imguijs/ImGuiTableFlags/) | abstract |  |
| [ImGuiTableRowFlags](/api-docs/headless/imguijs/ImGuiTableRowFlags/) | abstract |  |
| [ImGuiTableSortSpecs](/api-docs/headless/imguijs/ImGuiTableSortSpecs/) | abstract |  |
| [ImGuiTextBuffer](/api-docs/headless/imguijs/ImGuiTextBuffer/) | abstract |  |
| [ImGuiTreeNodeFlags](/api-docs/headless/imguijs/ImGuiTreeNodeFlags/) | abstract |  |
| [ImGuiViewport](/api-docs/headless/imguijs/ImGuiViewport/) | abstract |  |
| [ImGuiViewportFlags](/api-docs/headless/imguijs/ImGuiViewportFlags/) | abstract |  |
| [ImGuiWindowClass](/api-docs/headless/imguijs/ImGuiWindowClass/) | abstract |  |
| [ImGuiWindowFlags](/api-docs/headless/imguijs/ImGuiWindowFlags/) | abstract |  |
| [ImS32](/api-docs/headless/imguijs/ImS32/) | typedef |  |
| [ImS64](/api-docs/headless/imguijs/ImS64/) | typedef |  |
| [ImS8](/api-docs/headless/imguijs/ImS8/) | typedef |  |
| [ImTextureData](/api-docs/headless/imguijs/ImTextureData/) | abstract |  |
| [ImTextureFormat](/api-docs/headless/imguijs/ImTextureFormat/) | abstract |  |
| [ImTextureID](/api-docs/headless/imguijs/ImTextureID/) | typedef |  |
| [ImTextureRect](/api-docs/headless/imguijs/ImTextureRect/) | abstract |  |
| [ImTextureRef](/api-docs/headless/imguijs/ImTextureRef/) | class |  |
| [ImTextureStatus](/api-docs/headless/imguijs/ImTextureStatus/) | abstract |  |
| [ImU16](/api-docs/headless/imguijs/ImU16/) | typedef |  |
| [ImU32](/api-docs/headless/imguijs/ImU32/) | typedef |  |
| [ImU64](/api-docs/headless/imguijs/ImU64/) | typedef |  |
| [ImU8](/api-docs/headless/imguijs/ImU8/) | typedef |  |
| [ImVec2](/api-docs/headless/imguijs/ImVec2/) | class |  |
| [ImVec4](/api-docs/headless/imguijs/ImVec4/) | class |  |
| [ImVector_char](/api-docs/headless/imguijs/ImVector_char/) | abstract |  |
| [ImVector_float](/api-docs/headless/imguijs/ImVector_float/) | abstract |  |
| [ImVector_ImDrawChannel](/api-docs/headless/imguijs/ImVector_ImDrawChannel/) | abstract |  |
| [ImVector_ImDrawCmd](/api-docs/headless/imguijs/ImVector_ImDrawCmd/) | abstract |  |
| [ImVector_ImDrawIdx](/api-docs/headless/imguijs/ImVector_ImDrawIdx/) | abstract |  |
| [ImVector_ImDrawListPtr](/api-docs/headless/imguijs/ImVector_ImDrawListPtr/) | abstract |  |
| [ImVector_ImDrawListSharedDataPtr](/api-docs/headless/imguijs/ImVector_ImDrawListSharedDataPtr/) | abstract |  |
| [ImVector_ImDrawVert](/api-docs/headless/imguijs/ImVector_ImDrawVert/) | abstract |  |
| [ImVector_ImFontConfig](/api-docs/headless/imguijs/ImVector_ImFontConfig/) | abstract |  |
| [ImVector_ImFontConfigPtr](/api-docs/headless/imguijs/ImVector_ImFontConfigPtr/) | abstract |  |
| [ImVector_ImFontGlyph](/api-docs/headless/imguijs/ImVector_ImFontGlyph/) | abstract |  |
| [ImVector_ImFontPtr](/api-docs/headless/imguijs/ImVector_ImFontPtr/) | abstract |  |
| [ImVector_ImGuiPlatformMonitor](/api-docs/headless/imguijs/ImVector_ImGuiPlatformMonitor/) | abstract |  |
| [ImVector_ImGuiSelectionRequest](/api-docs/headless/imguijs/ImVector_ImGuiSelectionRequest/) | abstract |  |
| [ImVector_ImGuiStoragePair](/api-docs/headless/imguijs/ImVector_ImGuiStoragePair/) | abstract |  |
| [ImVector_ImGuiTextRange](/api-docs/headless/imguijs/ImVector_ImGuiTextRange/) | abstract |  |
| [ImVector_ImGuiViewportPtr](/api-docs/headless/imguijs/ImVector_ImGuiViewportPtr/) | abstract |  |
| [ImVector_ImTextureDataPtr](/api-docs/headless/imguijs/ImVector_ImTextureDataPtr/) | abstract |  |
| [ImVector_ImTextureRect](/api-docs/headless/imguijs/ImVector_ImTextureRect/) | abstract |  |
| [ImVector_ImTextureRef](/api-docs/headless/imguijs/ImVector_ImTextureRef/) | abstract |  |
| [ImVector_ImU16](/api-docs/headless/imguijs/ImVector_ImU16/) | abstract |  |
| [ImVector_ImU32](/api-docs/headless/imguijs/ImVector_ImU32/) | abstract |  |
| [ImVector_ImU8](/api-docs/headless/imguijs/ImVector_ImU8/) | abstract |  |
| [ImVector_ImVec2](/api-docs/headless/imguijs/ImVector_ImVec2/) | abstract |  |
| [ImVector_ImVec4](/api-docs/headless/imguijs/ImVector_ImVec4/) | abstract |  |
| [ImVector_ImWchar](/api-docs/headless/imguijs/ImVector_ImWchar/) | abstract |  |
| [ImWchar](/api-docs/headless/imguijs/ImWchar/) | typedef |  |
| [ImWchar16](/api-docs/headless/imguijs/ImWchar16/) | typedef |  |
| [ImWchar32](/api-docs/headless/imguijs/ImWchar32/) | typedef |  |

