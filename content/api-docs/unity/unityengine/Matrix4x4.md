---
layout: api-docs
category: api-docs
subCategory: doc
menu: Unity
title: Matrix4x4
target: Unity
permalink: api-docs/unity/unityengine/Matrix4x4/
---

# Matrix4x4

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/unity/runtime/src/unityengine/Matrix4x4.hx">View source</a></div>

<div class="type-hierarchy"><strong>unityengine.Matrix4x4</strong> (extern class)</div>

A 4x4 transformation matrix for 3D transformations.
Represents position, rotation, and scale as a single matrix.

In Ceramic's Unity backend, Matrix4x4 may be used internally
for advanced transformations, though Ceramic primarily uses
its own Transform class for 2D operations.

Matrix layout (column-major):
```
[m00 m01 m02 m03]   [scaleX  shearY  0  translateX]
[m10 m11 m12 m13] = [shearX  scaleY  0  translateY]
[m20 m21 m22 m23]   [   0      0     1  translateZ]
[m30 m31 m32 m33]   [   0      0     0      1     ]
```

Common operations:
- TRS: Translation, Rotation, Scale matrix creation
- Inverse: Matrix inversion for reverse transforms
- Multiplication: Combining transformations
- Projection: Camera and perspective transforms

Note: Unity uses column-major order, affecting how
matrices are constructed and multiplied.

<div class="see"><strong>See:</strong> Transform, <a href="/api-docs/unity/unityengine/Vector3/">Vector3</a>, Quaternion</div>


## Metadata

| Name | Parameters |
|------|------------|
| `:nativeGen` | - |

