---
layout: api-docs
category: api-docs
subCategory: doc
menu: Elements
title: Theme
target: Headless
permalink: api-docs/headless/elements/Theme/
---

# Theme

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/elements/runtime/src/elements/Theme.hx">View source</a></div>

<div class="type-hierarchy"><a href="/api-docs/headless/ceramic/Entity/">ceramic.Entity</a> → <a href="/api-docs/headless/tracker/Model/">tracker.Model</a> → <strong>elements.Theme</strong> (Class)</div>

Comprehensive theme configuration for the elements UI system.

Defines all visual properties including colors, fonts, spacing, and alpha values
for various UI components. Themes can be customized per-context or per-component.

Features:
- Serializable properties for persistence
- Color tinting for theme variations
- Cloning for creating theme variants
- Support for custom fonts

The theme uses a consistent naming scheme:
- `light*`: Brightest variants
- `medium*`: Mid-tone variants
- `dark*`: Darker variants
- `darker*`: Darkest variants

<div class="see"><strong>See:</strong> <a href="/api-docs/headless/elements/Context/">Context</a>, Model</div>


## Instance Members

<div class="signature field-var has-description has-plugin" id="backgroundInFormLayout"><div class="plugin-name">elements</div><code><span class="field-name">backgroundInFormLayout</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#backgroundInFormLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Whether to show background colors in form layouts

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fieldTextColor"><div class="plugin-name">elements</div><code><span class="field-name">fieldTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fieldTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color for text in input fields

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="fieldPlaceholderColor"><div class="plugin-name">elements</div><code><span class="field-name">fieldPlaceholderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#fieldPlaceholderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Color for placeholder text in empty fields

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="lightTextColor"><div class="plugin-name">elements</div><code><span class="field-name">lightTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#lightTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Light text color for primary content

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mediumTextColor"><div class="plugin-name">elements</div><code><span class="field-name">mediumTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#mediumTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Medium text color for secondary content

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="darkTextColor"><div class="plugin-name">elements</div><code><span class="field-name">darkTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#darkTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Dark text color for tertiary content

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="darkerTextColor"><div class="plugin-name">elements</div><code><span class="field-name">darkerTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#darkerTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Darker text color for least prominent content

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="iconColor"><div class="plugin-name">elements</div><code><span class="field-name">iconColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#iconColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Default color for icons and glyphs

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="customMediumFont"><div class="plugin-name">elements</div><code><span class="field-name">customMediumFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a></code><a class="header-anchor" href="#customMediumFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom medium weight font override

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="mediumFont"><div class="plugin-name">elements</div><code><span class="field-name">mediumFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a></code><a class="header-anchor" href="#mediumFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Medium weight font (uses custom or falls back to default)

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="customBoldFont"><div class="plugin-name">elements</div><code><span class="field-name">customBoldFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a></code><a class="header-anchor" href="#customBoldFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Custom bold font override

<hr class="field-separator" />

<div class="signature field-var has-description has-plugin" id="boldFont"><div class="plugin-name">elements</div><code><span class="field-name">boldFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a></code><a class="header-anchor" href="#boldFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Bold font (uses custom or falls back to default)

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lighterBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">lighterBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#lighterBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lightBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">lightBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#lightBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mediumBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">mediumBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#mediumBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="darkBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">darkBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#darkBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="lightBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">lightBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#lightBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="mediumBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">mediumBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#mediumBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="darkBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">darkBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#darkBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="darkerBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">darkerBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#darkerBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="selectionBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">selectionBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#selectionBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="highlightColor"><div class="plugin-name">elements</div><code><span class="field-name">highlightColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#highlightColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="highlightPendingColor"><div class="plugin-name">elements</div><code><span class="field-name">highlightPendingColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#highlightPendingColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="formItemSpacing"><div class="plugin-name">elements</div><code><span class="field-name">formItemSpacing</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#formItemSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="formPadding"><div class="plugin-name">elements</div><code><span class="field-name">formPadding</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#formPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tabsMarginY"><div class="plugin-name">elements</div><code><span class="field-name">tabsMarginY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tabsMarginY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="focusedFieldSelectionColor"><div class="plugin-name">elements</div><code><span class="field-name">focusedFieldSelectionColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#focusedFieldSelectionColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="focusedFieldBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">focusedFieldBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#focusedFieldBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="overlayBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">overlayBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#overlayBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="overlayBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">overlayBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overlayBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="overlayBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">overlayBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#overlayBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="overlayBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">overlayBorderAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#overlayBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="buttonBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">buttonBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#buttonBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="buttonOverBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">buttonOverBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#buttonOverBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="buttonPressedBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">buttonPressedBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#buttonPressedBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="buttonFocusedBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">buttonFocusedBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#buttonFocusedBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tabsBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">tabsBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#tabsBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tabsBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">tabsBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tabsBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tabsHoverBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">tabsHoverBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#tabsHoverBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tabsHoverBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">tabsHoverBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#tabsHoverBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="tabsBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">tabsBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#tabsBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="disabledTabTextAlpha"><div class="plugin-name">elements</div><code><span class="field-name">disabledTabTextAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#disabledTabTextAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="disabledTabBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">disabledTabBorderAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#disabledTabBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="windowBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">windowBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#windowBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="windowBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">windowBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="windowBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">windowBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#windowBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="windowBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">windowBorderAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#windowBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateBackgroundInFormLayout"><div class="plugin-name">elements</div><code><span class="field-name">invalidateBackgroundInFormLayout</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateBackgroundInFormLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFieldTextColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFieldTextColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFieldTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFieldPlaceholderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFieldPlaceholderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFieldPlaceholderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLightTextColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLightTextColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLightTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMediumTextColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMediumTextColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMediumTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDarkTextColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDarkTextColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDarkTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDarkerTextColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDarkerTextColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDarkerTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateIconColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateIconColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateIconColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateCustomMediumFont"><div class="plugin-name">elements</div><code><span class="field-name">invalidateCustomMediumFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateCustomMediumFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateCustomBoldFont"><div class="plugin-name">elements</div><code><span class="field-name">invalidateCustomBoldFont</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateCustomBoldFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLighterBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLighterBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLighterBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLightBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLightBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLightBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMediumBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMediumBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMediumBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDarkBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDarkBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDarkBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateLightBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateLightBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateLightBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateMediumBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateMediumBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateMediumBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDarkBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDarkBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDarkBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDarkerBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDarkerBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDarkerBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateSelectionBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateSelectionBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateSelectionBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHighlightColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHighlightColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHighlightColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateHighlightPendingColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateHighlightPendingColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateHighlightPendingColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFormItemSpacing"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFormItemSpacing</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFormItemSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFormPadding"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFormPadding</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFormPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabsMarginY"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabsMarginY</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabsMarginY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFocusedFieldSelectionColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFocusedFieldSelectionColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocusedFieldSelectionColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateFocusedFieldBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateFocusedFieldBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateFocusedFieldBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOverlayBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateOverlayBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOverlayBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOverlayBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateOverlayBackgroundAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOverlayBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOverlayBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateOverlayBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOverlayBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateOverlayBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateOverlayBorderAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateOverlayBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateButtonBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateButtonBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateButtonBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateButtonOverBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateButtonOverBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateButtonOverBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateButtonPressedBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateButtonPressedBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateButtonPressedBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateButtonFocusedBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateButtonFocusedBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateButtonFocusedBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabsBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabsBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabsBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabsBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabsBackgroundAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabsBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabsHoverBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabsHoverBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabsHoverBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabsHoverBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabsHoverBackgroundAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabsHoverBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateTabsBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateTabsBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateTabsBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabledTabTextAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabledTabTextAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabledTabTextAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateDisabledTabBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateDisabledTabBorderAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateDisabledTabBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWindowBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateWindowBackgroundColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWindowBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateWindowBackgroundAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWindowBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">invalidateWindowBorderColor</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method no-description has-plugin" id="invalidateWindowBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">invalidateWindowBorderAlpha</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#invalidateWindowBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="clone"><div class="plugin-name">elements</div><code><span class="field-name">clone</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">toTheme</span><span class="operator">:</span> <a href="#" class="type-link">Theme</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">Theme</a></code><a class="header-anchor" href="#clone"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a deep copy of this theme.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `toTheme` | [Theme](/api-docs/headless/elements/Theme/) | *(optional)* | Optional theme instance to copy into (creates new if null)  |

| Returns | Description |
|---------|-------------|
| [Theme](/api-docs/headless/elements/Theme/) | The cloned theme |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyTint"><div class="plugin-name">elements</div><code><span class="field-name">applyTint</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">baseTheme</span><span class="operator">:</span> <a href="#" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">tint</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyTint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the given `tint` color using `baseTheme` as lightness references.

Recolors most theme elements while preserving relative brightness relationships.
Selection and highlight colors are not affected (use applyAltTint for those).



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `baseTheme` | [Theme](/api-docs/headless/elements/Theme/) | *(optional)* | Base theme to derive lightness values from (defaults to context theme)  |
| `tint` | [ceramic.Color](/api-docs/headless/ceramic/Color/) | | Color to tint the theme with (uses HSLuv color space) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyAltTint"><div class="plugin-name">elements</div><code><span class="field-name">applyAltTint</span><span class="parenthesis">(</span><span class="operator">?</span><span class="arg-name">baseTheme</span><span class="operator">:</span> <a href="#" class="type-link">Theme</a><span class="operator">,</span> <span class="arg-name">tint</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyAltTint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Apply the given alt `tint` color using `baseTheme` as lightness references.

Specifically tints selection, highlight, and focus colors.
Use this for accent color customization.



| Name | Type | Default | Description |
|------|------|---------|-------------|
| `baseTheme` | [Theme](/api-docs/headless/elements/Theme/) | *(optional)* | Base theme to derive lightness values from (defaults to context theme)  |
| `tint` | [ceramic.Color](/api-docs/headless/ceramic/Color/) | | Accent color to apply (uses HSLuv color space) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">applyBackgroundColor</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets the background color for tabs and windows.



| Name | Type | Description |
|------|------|-------------|
| `color` | [ceramic.Color](/api-docs/headless/ceramic/Color/) | The background color to apply |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="applyTextColor"><div class="plugin-name">elements</div><code><span class="field-name">applyTextColor</span><span class="parenthesis">(</span><span class="arg-name">color</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#applyTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sets all text color variants to the same color.
Useful for high contrast or monochrome themes.



| Name | Type | Description |
|------|------|-------------|
| `color` | [ceramic.Color](/api-docs/headless/ceramic/Color/) | The text color to apply to all variants |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="new"><div class="plugin-name">elements</div><code><span class="field-name">new</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#new"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Creates a new Theme with default dark color scheme.

## Private Members

<div class="signature field-var no-description has-plugin" id="unobservedBackgroundInFormLayout"><div class="plugin-name">elements</div><code><span class="field-name">unobservedBackgroundInFormLayout</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#unobservedBackgroundInFormLayout"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFieldTextColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFieldTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedFieldTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFieldPlaceholderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFieldPlaceholderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedFieldPlaceholderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLightTextColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLightTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedLightTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMediumTextColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMediumTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedMediumTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDarkTextColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDarkTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedDarkTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDarkerTextColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDarkerTextColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedDarkerTextColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedIconColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedIconColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedIconColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedCustomMediumFont"><div class="plugin-name">elements</div><code><span class="field-name">unobservedCustomMediumFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a></code><a class="header-anchor" href="#unobservedCustomMediumFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedCustomBoldFont"><div class="plugin-name">elements</div><code><span class="field-name">unobservedCustomBoldFont</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a></code><a class="header-anchor" href="#unobservedCustomBoldFont"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLighterBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLighterBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedLighterBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLightBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLightBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedLightBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMediumBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMediumBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedMediumBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDarkBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDarkBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedDarkBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedLightBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedLightBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedLightBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedMediumBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedMediumBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedMediumBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDarkBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDarkBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedDarkBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDarkerBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDarkerBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedDarkerBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedSelectionBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedSelectionBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedSelectionBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHighlightColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHighlightColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedHighlightColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedHighlightPendingColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedHighlightPendingColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedHighlightPendingColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFormItemSpacing"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFormItemSpacing</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedFormItemSpacing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFormPadding"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFormPadding</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedFormPadding"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabsMarginY"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabsMarginY</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedTabsMarginY"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFocusedFieldSelectionColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFocusedFieldSelectionColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedFocusedFieldSelectionColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedFocusedFieldBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedFocusedFieldBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedFocusedFieldBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOverlayBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedOverlayBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedOverlayBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOverlayBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedOverlayBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedOverlayBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOverlayBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedOverlayBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedOverlayBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedOverlayBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedOverlayBorderAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedOverlayBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedButtonBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedButtonBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedButtonBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedButtonOverBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedButtonOverBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedButtonOverBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedButtonPressedBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedButtonPressedBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedButtonPressedBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedButtonFocusedBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedButtonFocusedBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedButtonFocusedBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabsBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabsBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedTabsBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabsBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabsBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedTabsBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabsHoverBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabsHoverBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedTabsHoverBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabsHoverBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabsHoverBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedTabsHoverBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedTabsBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedTabsBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedTabsBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabledTabTextAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabledTabTextAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedDisabledTabTextAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedDisabledTabBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedDisabledTabBorderAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedDisabledTabBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedWindowBackgroundColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedWindowBackgroundColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedWindowBackgroundColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedWindowBackgroundAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedWindowBackgroundAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedWindowBackgroundAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedWindowBorderColor"><div class="plugin-name">elements</div><code><span class="field-name">unobservedWindowBorderColor</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a></code><a class="header-anchor" href="#unobservedWindowBorderColor"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-var no-description has-plugin" id="unobservedWindowBorderAlpha"><div class="plugin-name">elements</div><code><span class="field-name">unobservedWindowBorderAlpha</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a></code><a class="header-anchor" href="#unobservedWindowBorderAlpha"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitBackgroundInFormLayoutChange"><div class="plugin-name">elements</div><code><span class="field-name">emitBackgroundInFormLayoutChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Bool/" class="type-link">Bool</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitBackgroundInFormLayoutChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when backgroundInFormLayout field changes.

| Name | Type |
|------|------|
| `current` | [Bool](/api-docs/headless/Bool/) |
| `previous` | [Bool](/api-docs/headless/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFieldTextColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFieldTextColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFieldTextColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when fieldTextColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFieldPlaceholderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFieldPlaceholderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFieldPlaceholderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when fieldPlaceholderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLightTextColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLightTextColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLightTextColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when lightTextColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMediumTextColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMediumTextColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMediumTextColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when mediumTextColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDarkTextColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDarkTextColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDarkTextColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when darkTextColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDarkerTextColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDarkerTextColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDarkerTextColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when darkerTextColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitIconColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitIconColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitIconColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when iconColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitCustomMediumFontChange"><div class="plugin-name">elements</div><code><span class="field-name">emitCustomMediumFontChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCustomMediumFontChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when customMediumFont field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.BitmapFont](/api-docs/headless/ceramic/BitmapFont/) |
| `previous` | [ceramic.BitmapFont](/api-docs/headless/ceramic/BitmapFont/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitCustomBoldFontChange"><div class="plugin-name">elements</div><code><span class="field-name">emitCustomBoldFontChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/BitmapFont/" class="type-link">ceramic.BitmapFont</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitCustomBoldFontChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when customBoldFont field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.BitmapFont](/api-docs/headless/ceramic/BitmapFont/) |
| `previous` | [ceramic.BitmapFont](/api-docs/headless/ceramic/BitmapFont/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLighterBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLighterBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLighterBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when lighterBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLightBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLightBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLightBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when lightBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMediumBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMediumBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMediumBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when mediumBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDarkBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDarkBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDarkBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when darkBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitLightBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitLightBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitLightBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when lightBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitMediumBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitMediumBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitMediumBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when mediumBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDarkBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDarkBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDarkBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when darkBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDarkerBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDarkerBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDarkerBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when darkerBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitSelectionBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitSelectionBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitSelectionBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when selectionBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHighlightColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHighlightColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHighlightColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when highlightColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitHighlightPendingColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitHighlightPendingColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitHighlightPendingColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when highlightPendingColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFormItemSpacingChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFormItemSpacingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFormItemSpacingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when formItemSpacing field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFormPaddingChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFormPaddingChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFormPaddingChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when formPadding field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsMarginYChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsMarginYChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsMarginYChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabsMarginY field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFocusedFieldSelectionColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFocusedFieldSelectionColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedFieldSelectionColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focusedFieldSelectionColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitFocusedFieldBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitFocusedFieldBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitFocusedFieldBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when focusedFieldBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOverlayBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitOverlayBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlayBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when overlayBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOverlayBackgroundAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitOverlayBackgroundAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlayBackgroundAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when overlayBackgroundAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOverlayBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitOverlayBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlayBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when overlayBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitOverlayBorderAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitOverlayBorderAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitOverlayBorderAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when overlayBorderAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitButtonBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitButtonBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitButtonBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when buttonBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitButtonOverBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitButtonOverBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitButtonOverBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when buttonOverBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitButtonPressedBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitButtonPressedBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitButtonPressedBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when buttonPressedBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitButtonFocusedBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitButtonFocusedBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitButtonFocusedBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when buttonFocusedBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabsBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsBackgroundAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsBackgroundAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsBackgroundAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabsBackgroundAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsHoverBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsHoverBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsHoverBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabsHoverBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsHoverBackgroundAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsHoverBackgroundAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsHoverBackgroundAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabsHoverBackgroundAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitTabsBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitTabsBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitTabsBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when tabsBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledTabTextAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledTabTextAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledTabTextAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabledTabTextAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitDisabledTabBorderAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitDisabledTabBorderAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitDisabledTabBorderAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when disabledTabBorderAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWindowBackgroundColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitWindowBackgroundColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowBackgroundColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowBackgroundColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWindowBackgroundAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitWindowBackgroundAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowBackgroundAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowBackgroundAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWindowBorderColorChange"><div class="plugin-name">elements</div><code><span class="field-name">emitWindowBorderColorChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/ceramic/Color/" class="type-link">ceramic.Color</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowBorderColorChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowBorderColor field changes.

| Name | Type |
|------|------|
| `current` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |
| `previous` | [ceramic.Color](/api-docs/headless/ceramic/Color/) |

<hr class="field-separator" />

<div class="signature field-method has-description has-plugin" id="emitWindowBorderAlphaChange"><div class="plugin-name">elements</div><code><span class="field-name">emitWindowBorderAlphaChange</span><span class="parenthesis">(</span><span class="arg-name">current</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="operator">,</span> <span class="arg-name">previous</span><span class="operator">:</span> <a href="/api-docs/headless/Float/" class="type-link">Float</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/headless/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#emitWindowBorderAlphaChange"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Event when windowBorderAlpha field changes.

| Name | Type |
|------|------|
| `current` | [Float](/api-docs/headless/Float/) |
| `previous` | [Float](/api-docs/headless/Float/) |

## Metadata

| Name | Parameters |
|------|------------|
| `:build` | tracker.macros.EventsMacro.build() |
| `:autoBuild` | tracker.macros.EventsMacro.build() |
| `:build` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:autoBuild` | ceramic.macros.EntityMacro.buildForCompletion() |
| `:build` | tracker.macros.ObservableMacro.build() |
| `:autoBuild` | tracker.macros.ObservableMacro.build() |
| `:build` | tracker.macros.SerializableMacro.build() |
| `:autoBuild` | tracker.macros.SerializableMacro.build() |

