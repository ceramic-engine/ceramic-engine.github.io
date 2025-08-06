---
layout: api-docs
category: api-docs
subCategory: doc
menu: Haxe
title: ValidityState
target: Clay (Web)
permalink: api-docs/clay-web/js/html/ValidityState/
---

# ValidityState

<div class="type-hierarchy"><strong>js.html.ValidityState</strong> (extern class)</div>

The `ValidityState` interface represents the validity states that an element can be in, with respect to constraint validation. Together, they help explain why an element's value fails to validate, if it's not valid.

Documentation [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) by [Mozilla Contributors](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState$history), licensed under [CC-BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5/).

<div class="see"><strong>See:</strong> <https://developer.mozilla.org/en-US/docs/Web/API/ValidityState></div>


## Instance Members

<div class="signature field-var has-description" id="valueMissing"><code><span class="field-name">valueMissing</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#valueMissing"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the element has a `required` attribute, but no value.

<hr class="field-separator" />

<div class="signature field-var has-description" id="typeMismatch"><code><span class="field-name">typeMismatch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#typeMismatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value is not in the required syntax (when `type` is `email` or `url`).

<hr class="field-separator" />

<div class="signature field-var has-description" id="patternMismatch"><code><span class="field-name">patternMismatch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#patternMismatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value does not match the specified `pattern`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tooLong"><code><span class="field-name">tooLong</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tooLong"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value exceeds the specified `maxlength` for `HTMLInputElement` or `HTMLTextAreaElement` objects. Note: This will never be `true` in Gecko, because elements' values are prevented from being longer than `maxlength`.

<hr class="field-separator" />

<div class="signature field-var has-description" id="tooShort"><code><span class="field-name">tooShort</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#tooShort"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value fails to meet the specified `minlength` for `HTMLInputElement` or `HTMLTextAreaElement` objects.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeUnderflow"><code><span class="field-name">rangeUnderflow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rangeUnderflow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value is less than the minimum specified by the `min` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="rangeOverflow"><code><span class="field-name">rangeOverflow</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#rangeOverflow"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value is greater than the maximum specified by the `max` attribute.

<hr class="field-separator" />

<div class="signature field-var has-description" id="stepMismatch"><code><span class="field-name">stepMismatch</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#stepMismatch"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the value does not fit the rules determined by the `step` attribute (that is, it's not evenly divisible by the step value).

<hr class="field-separator" />

<div class="signature field-var has-description" id="badInput"><code><span class="field-name">badInput</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#badInput"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the user has provided input that the browser is unable to convert.

<hr class="field-separator" />

<div class="signature field-var has-description" id="customError"><code><span class="field-name">customError</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#customError"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the element's custom validity message has been set to a non-empty string by calling the element's `setCustomValidity()` method.

<hr class="field-separator" />

<div class="signature field-var has-description" id="valid"><code><span class="field-name">valid</span><span class="operator">:</span> <a href="/api-docs/clay-web/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#valid"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Is a `Boolean` indicating the element meets all constraint validations, and is therefore considered to be valid.

