---
layout: api-docs
category: api-docs
subCategory: doc
menu: Nape
title: NapePhysicsBodyType
target: Clay (Native)
permalink: api-docs/clay-native/ceramic/NapePhysicsBodyType/
---

# NapePhysicsBodyType

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/nape/runtime/src/ceramic/NapePhysicsBodyType.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.NapePhysicsBodyType</strong> (Enum)</div>

Types of physics bodies in the Nape physics engine.

Determines how a physics body behaves in the simulation:
- Movement capabilities
- Response to forces and collisions
- Performance characteristics

## Constructors

### STATIC

```haxe
STATIC
```

Static bodies are immovable and unaffected by forces.

Use for:
- Level geometry (walls, floors, platforms)
- Immovable obstacles
- Trigger zones that don't need to move

Properties:
- Zero mass (infinite effective mass)
- Cannot be moved by physics forces
- Can be repositioned manually
- Most performance efficient
- Collides with DYNAMIC bodies only

### KINEMATIC

```haxe
KINEMATIC
```

Kinematic bodies can be moved programmatically but are unaffected by forces.

Use for:
- Moving platforms
- Elevators
- Enemies with scripted movement
- Player characters (when not using physics-based movement)

Properties:
- Zero mass (infinite effective mass)
- Moved by setting velocity or position directly
- Not affected by gravity or collisions
- Pushes DYNAMIC bodies
- Medium performance cost

### DYNAMIC

```haxe
DYNAMIC
```

Dynamic bodies are fully simulated and respond to all forces.

Use for:
- Player characters (physics-based)
- Projectiles
- Debris and particles
- Any object that should react realistically

Properties:
- Has mass and inertia
- Affected by gravity and forces
- Responds to collisions
- Can be controlled via impulses/forces
- Highest performance cost
- Most realistic behavior

## Metadata

| Name | Parameters |
|------|------------|
| `:flatEnum` | - |

