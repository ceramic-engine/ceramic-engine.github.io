---
layout: api-docs
category: api-docs
subCategory: doc
menu: Imgui-hx
title: ImGuiStyle
target: Clay (Native)
permalink: api-docs/clay-native/imguicpp/ImGuiStyle/
---

# ImGuiStyle

<div class="view-source"><a href="https://github.com/jeremyfa/imgui-hx/blob/master/src/imguicpp/ImGui.hx">View source</a></div>

<div class="type-hierarchy"><strong>imguicpp.ImGuiStyle</strong> (extern class)</div>

## Static Members

<div class="signature field-method has-description" id="scaleAllSizes"><code><span class="field-name">scaleAllSizes</span><span class="parenthesis">(</span><span class="arg-name">self</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Star/" class="type-link">cpp.Star</a><span class="operator">,</span> <span class="arg-name">scaleFactor</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#scaleAllSizes"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale all spacing/padding/thickness values. Do not scale fonts. See comments in definition. Consider not calling this if your initial scale factor if <1.0.

| Name | Type |
|------|------|
| `self` | [cpp.Star](/api-docs/clay-native/cpp/Star/) |
| `scaleFactor` | [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

## Instance Members

<div class="signature field-var has-description" id="fontSizeBase"><code><span class="field-name">fontSizeBase</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#fontSizeBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current base font size before external global factors are applied. Use PushFont(NULL, size) to modify. Use ImGui::GetFontSize() to obtain scaled value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontScaleMain"><code><span class="field-name">fontScaleMain</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#fontScaleMain"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Main global scale factor. May be set by application once, or exposed to end-user.

<hr class="field-separator" />

<div class="signature field-var has-description" id="fontScaleDpi"><code><span class="field-name">fontScaleDpi</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#fontScaleDpi"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional global scale factor from viewport/monitor contents scale. In docking branch: when io.ConfigDpiScaleFonts is enabled, this is automatically overwritten when changing monitor DPI.

<hr class="field-separator" />

<div class="signature field-var has-description" id="alpha"><code><span class="field-name">alpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#alpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Global alpha applies to everything in Dear ImGui.

<hr class="field-separator" />

<div class="signature field-var has-description" id="disabledAlpha"><code><span class="field-name">disabledAlpha</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#disabledAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Additional alpha multiplier applied by BeginDisabled(). Multiply over current value of Alpha.

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowPadding"><code><span class="field-name">windowPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#windowPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Padding within a window.

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowRounding"><code><span class="field-name">windowRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#windowRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of window corners rounding. Set to 0.0f to have rectangular windows. Large values tend to lead to variety of artifacts and are not recommended.

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowBorderSize"><code><span class="field-name">windowBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#windowBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border around windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowBorderHoverPadding"><code><span class="field-name">windowBorderHoverPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#windowBorderHoverPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Hit-testing extent outside/inside resizing border. Also extend determination of hovered window. Generally meaningfully larger than WindowBorderSize to make it easy to reach borders.

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowMinSize"><code><span class="field-name">windowMinSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#windowMinSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum window size. This is a global setting. If you want to constrain individual windows, use SetNextWindowSizeConstraints().

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowTitleAlign"><code><span class="field-name">windowTitleAlign</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#windowTitleAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alignment for title bar text. Defaults to (0.0f,0.5f) for left-aligned,vertically centered.

<hr class="field-separator" />

<div class="signature field-var has-description" id="windowMenuButtonPosition"><code><span class="field-name">windowMenuButtonPosition</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#windowMenuButtonPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Side of the collapsing/docking button in the title bar (None/Left/Right). Defaults to ImGuiDir_Left.

<hr class="field-separator" />

<div class="signature field-var has-description" id="childRounding"><code><span class="field-name">childRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#childRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of child window corners rounding. Set to 0.0f to have rectangular windows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="childBorderSize"><code><span class="field-name">childBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#childBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border around child windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).

<hr class="field-separator" />

<div class="signature field-var has-description" id="popupRounding"><code><span class="field-name">popupRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#popupRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of popup window corners rounding. (Note that tooltip windows use WindowRounding)

<hr class="field-separator" />

<div class="signature field-var has-description" id="popupBorderSize"><code><span class="field-name">popupBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#popupBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border around popup/tooltip windows. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).

<hr class="field-separator" />

<div class="signature field-var has-description" id="framePadding"><code><span class="field-name">framePadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#framePadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Padding within a framed rectangle (used by most widgets).

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameRounding"><code><span class="field-name">frameRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#frameRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of frame corners rounding. Set to 0.0f to have rectangular frame (used by most widgets).

<hr class="field-separator" />

<div class="signature field-var has-description" id="frameBorderSize"><code><span class="field-name">frameBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#frameBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border around frames. Generally set to 0.0f or 1.0f. (Other values are not well tested and more CPU/GPU costly).

<hr class="field-separator" />

<div class="signature field-var has-description" id="itemSpacing"><code><span class="field-name">itemSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#itemSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal and vertical spacing between widgets/lines.

<hr class="field-separator" />

<div class="signature field-var has-description" id="itemInnerSpacing"><code><span class="field-name">itemInnerSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#itemInnerSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal and vertical spacing between within elements of a composed widget (e.g. a slider and its label).

<hr class="field-separator" />

<div class="signature field-var has-description" id="cellPadding"><code><span class="field-name">cellPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#cellPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Padding within a table cell. Cellpadding.x is locked for entire table. CellPadding.y may be altered between different rows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="touchExtraPadding"><code><span class="field-name">touchExtraPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#touchExtraPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Expand reactive bounding box for touch-based system where touch position is not accurate enough. Unfortunately we don't sort widgets so priority on overlap will always be given to the first widget. So don't grow this too much!

<hr class="field-separator" />

<div class="signature field-var has-description" id="indentSpacing"><code><span class="field-name">indentSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#indentSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal indentation when e.g. entering a tree node. Generally == (FontSize + FramePadding.x*2).

<hr class="field-separator" />

<div class="signature field-var has-description" id="columnsMinSpacing"><code><span class="field-name">columnsMinSpacing</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#columnsMinSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum horizontal spacing between two columns. Preferably > (FramePadding.x + 1).

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollbarSize"><code><span class="field-name">scrollbarSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#scrollbarSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Width of the vertical scrollbar, Height of the horizontal scrollbar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollbarRounding"><code><span class="field-name">scrollbarRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#scrollbarRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of grab corners for scrollbar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="scrollbarPadding"><code><span class="field-name">scrollbarPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#scrollbarPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Padding of scrollbar grab within its frame (same for both axes).

<hr class="field-separator" />

<div class="signature field-var has-description" id="grabMinSize"><code><span class="field-name">grabMinSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#grabMinSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum width/height of a grab box for slider/scrollbar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="grabRounding"><code><span class="field-name">grabRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#grabRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of grabs corners rounding. Set to 0.0f to have rectangular slider grabs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="logSliderDeadzone"><code><span class="field-name">logSliderDeadzone</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#logSliderDeadzone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

The size in pixels of the dead-zone around zero on logarithmic sliders that cross zero.

<hr class="field-separator" />

<div class="signature field-var has-description" id="imageRounding"><code><span class="field-name">imageRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#imageRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rounding of Image() calls.

<hr class="field-separator" />

<div class="signature field-var has-description" id="imageBorderSize"><code><span class="field-name">imageBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#imageBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border around Image() calls.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabRounding"><code><span class="field-name">tabRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of upper corners of a tab. Set to 0.0f to have rectangular tabs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabBorderSize"><code><span class="field-name">tabBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border around tabs.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabMinWidthBase"><code><span class="field-name">tabMinWidthBase</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabMinWidthBase"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum tab width, to make tabs larger than their contents. TabBar buttons are not affected.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabMinWidthShrink"><code><span class="field-name">tabMinWidthShrink</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabMinWidthShrink"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Minimum tab width after shrinking, when using ImGuiTabBarFlags_FittingPolicyMixed policy.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabCloseButtonMinWidthSelected"><code><span class="field-name">tabCloseButtonMinWidthSelected</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabCloseButtonMinWidthSelected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

-1: always visible. 0.0f: visible when hovered. >0.0f: visible when hovered if minimum width. FLT_MAX: never shrink, will behave like ImGuiTabBarFlags_FittingPolicyScroll.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabCloseButtonMinWidthUnselected"><code><span class="field-name">tabCloseButtonMinWidthUnselected</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabCloseButtonMinWidthUnselected"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

-1: always visible. 0.0f: visible when hovered. >0.0f: visible when hovered if minimum width. FLT_MAX: never show close button when unselected.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabBarBorderSize"><code><span class="field-name">tabBarBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabBarBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of tab-bar separator, which takes on the tab active color to denote focus.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tabBarOverlineSize"><code><span class="field-name">tabBarOverlineSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tabBarOverlineSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of tab-bar overline, which highlights the selected tab-bar.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tableAngledHeadersAngle"><code><span class="field-name">tableAngledHeadersAngle</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#tableAngledHeadersAngle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Angle of angled headers (supported values range from -50.0f degrees to +50.0f degrees).

<hr class="field-separator" />

<div class="signature field-var has-description" id="tableAngledHeadersTextAlign"><code><span class="field-name">tableAngledHeadersTextAlign</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#tableAngledHeadersTextAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alignment of angled headers within the cell

<hr class="field-separator" />

<div class="signature field-var has-description" id="treeLinesFlags"><code><span class="field-name">treeLinesFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#treeLinesFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default way to draw lines connecting TreeNode hierarchy. ImGuiTreeNodeFlags_DrawLinesNone or ImGuiTreeNodeFlags_DrawLinesFull or ImGuiTreeNodeFlags_DrawLinesToNodes.

<hr class="field-separator" />

<div class="signature field-var has-description" id="treeLinesSize"><code><span class="field-name">treeLinesSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#treeLinesSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of outlines when using ImGuiTreeNodeFlags_DrawLines.

<hr class="field-separator" />

<div class="signature field-var has-description" id="treeLinesRounding"><code><span class="field-name">treeLinesRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#treeLinesRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of lines connecting child nodes to the vertical line.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragDropTargetRounding"><code><span class="field-name">dragDropTargetRounding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#dragDropTargetRounding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Radius of the drag and drop target frame. When <0.0f: use FrameRounding.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragDropTargetBorderSize"><code><span class="field-name">dragDropTargetBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#dragDropTargetBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of the drag and drop target border.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dragDropTargetPadding"><code><span class="field-name">dragDropTargetPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#dragDropTargetPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size to expand the drag and drop target from actual target item size.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorMarkerSize"><code><span class="field-name">colorMarkerSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#colorMarkerSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Size of R/G/B/A color markers for ColorEdit4() and for Drags/Sliders when using ImGuiSliderFlags_ColorMarkers.

<hr class="field-separator" />

<div class="signature field-var has-description" id="colorButtonPosition"><code><span class="field-name">colorButtonPosition</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#colorButtonPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Side of the color button in the ColorEdit4 widget (left/right). Defaults to ImGuiDir_Right.

<hr class="field-separator" />

<div class="signature field-var has-description" id="buttonTextAlign"><code><span class="field-name">buttonTextAlign</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#buttonTextAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alignment of button text when button is larger than text. Defaults to (0.5f, 0.5f) (centered).

<hr class="field-separator" />

<div class="signature field-var has-description" id="selectableTextAlign"><code><span class="field-name">selectableTextAlign</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#selectableTextAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alignment of selectable text. Defaults to (0.0f, 0.0f) (top-left aligned). It's generally important to keep this left-aligned if you want to lay multiple items on a same line.

<hr class="field-separator" />

<div class="signature field-var has-description" id="separatorSize"><code><span class="field-name">separatorSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#separatorSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border in Separator(). Must be >= 1.0f.

<hr class="field-separator" />

<div class="signature field-var has-description" id="separatorTextBorderSize"><code><span class="field-name">separatorTextBorderSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#separatorTextBorderSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of border in SeparatorText()

<hr class="field-separator" />

<div class="signature field-var has-description" id="separatorTextAlign"><code><span class="field-name">separatorTextAlign</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#separatorTextAlign"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Alignment of text within the separator. Defaults to (0.0f, 0.5f) (left aligned, center).

<hr class="field-separator" />

<div class="signature field-var has-description" id="separatorTextPadding"><code><span class="field-name">separatorTextPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#separatorTextPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Horizontal offset of text from each edge of the separator + spacing on other axis. Generally small values. .y is recommended to be == FramePadding.y.

<hr class="field-separator" />

<div class="signature field-var has-description" id="displayWindowPadding"><code><span class="field-name">displayWindowPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#displayWindowPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply to regular windows: amount which we enforce to keep visible when moving near edges of your screen.

<hr class="field-separator" />

<div class="signature field-var has-description" id="displaySafeAreaPadding"><code><span class="field-name">displaySafeAreaPadding</span><span class="operator">:</span> <a href="/api-docs/clay-native/imguicpp/ImVec2/" class="type-link">ImVec2</a></code><a class="header-anchor" href="#displaySafeAreaPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply to every windows, menus, popups, tooltips: amount where we avoid displaying contents. Adjust if you cannot see the edges of your screen (e.g. on a TV where scaling has not been configured).

<hr class="field-separator" />

<div class="signature field-var has-description" id="dockingNodeHasCloseButton"><code><span class="field-name">dockingNodeHasCloseButton</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#dockingNodeHasCloseButton"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Docking node has their own CloseButton() to close all docked windows.

<hr class="field-separator" />

<div class="signature field-var has-description" id="dockingSeparatorSize"><code><span class="field-name">dockingSeparatorSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#dockingSeparatorSize"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Thickness of resizing border between docked windows

<hr class="field-separator" />

<div class="signature field-var has-description" id="mouseCursorScale"><code><span class="field-name">mouseCursorScale</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mouseCursorScale"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Scale software rendered mouse cursor (when io.MouseDrawCursor is enabled). We apply per-monitor DPI scaling over this scale. May be removed later.

<hr class="field-separator" />

<div class="signature field-var has-description" id="antiAliasedLines"><code><span class="field-name">antiAliasedLines</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#antiAliasedLines"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable anti-aliased lines/borders. Disable if you are really tight on CPU/GPU. Latched at the beginning of the frame (copied to ImDrawList).

<hr class="field-separator" />

<div class="signature field-var has-description" id="antiAliasedLinesUseTex"><code><span class="field-name">antiAliasedLinesUseTex</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#antiAliasedLinesUseTex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable anti-aliased lines/borders using textures where possible. Require backend to render with bilinear filtering (NOT point/nearest filtering). Latched at the beginning of the frame (copied to ImDrawList).

<hr class="field-separator" />

<div class="signature field-var has-description" id="antiAliasedFill"><code><span class="field-name">antiAliasedFill</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#antiAliasedFill"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Enable anti-aliased edges around filled shapes (rounded rectangles, circles, etc.). Disable if you are really tight on CPU/GPU. Latched at the beginning of the frame (copied to ImDrawList).

<hr class="field-separator" />

<div class="signature field-var has-description" id="curveTessellationTol"><code><span class="field-name">curveTessellationTol</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#curveTessellationTol"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Tessellation tolerance when using PathBezierCurveTo() without a specific number of segments. Decrease for highly tessellated curves (higher quality, more polygons), increase to reduce quality.

<hr class="field-separator" />

<div class="signature field-var has-description" id="circleTessellationMaxError"><code><span class="field-name">circleTessellationMaxError</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#circleTessellationMaxError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Maximum error (in pixels) allowed when using AddCircle()/AddCircleFilled() or drawing rounded corner rectangles with no explicit segment count specified. Decrease for higher quality but more geometry.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hoverStationaryDelay"><code><span class="field-name">hoverStationaryDelay</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#hoverStationaryDelay"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delay for IsItemHovered(ImGuiHoveredFlags_Stationary). Time required to consider mouse stationary.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hoverDelayShort"><code><span class="field-name">hoverDelayShort</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#hoverDelayShort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delay for IsItemHovered(ImGuiHoveredFlags_DelayShort). Usually used along with HoverStationaryDelay.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hoverDelayNormal"><code><span class="field-name">hoverDelayNormal</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#hoverDelayNormal"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Delay for IsItemHovered(ImGuiHoveredFlags_DelayNormal). "

<hr class="field-separator" />

<div class="signature field-var has-description" id="hoverFlagsForTooltipMouse"><code><span class="field-name">hoverFlagsForTooltipMouse</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hoverFlagsForTooltipMouse"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default flags when using IsItemHovered(ImGuiHoveredFlags_ForTooltip) or BeginItemTooltip()/SetItemTooltip() while using mouse.

<hr class="field-separator" />

<div class="signature field-var has-description" id="hoverFlagsForTooltipNav"><code><span class="field-name">hoverFlagsForTooltipNav</span><span class="operator">:</span> <a href="/api-docs/clay-native/Int/" class="type-link">Int</a></code><a class="header-anchor" href="#hoverFlagsForTooltipNav"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default flags when using IsItemHovered(ImGuiHoveredFlags_ForTooltip) or BeginItemTooltip()/SetItemTooltip() while using keyboard/gamepad.

## Metadata

| Name | Parameters |
|------|------------|
| `:structAccess` | - |
| `:include` | "linc_imgui.h" |

