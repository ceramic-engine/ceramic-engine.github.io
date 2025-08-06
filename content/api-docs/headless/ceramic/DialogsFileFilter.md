---
layout: api-docs
category: api-docs
subCategory: doc
menu: Dialogs
title: DialogsFileFilter
target: Headless
permalink: api-docs/headless/ceramic/DialogsFileFilter/
---

# DialogsFileFilter

<div class="view-source"><a href="https://github.com/ceramic-engine/ceramic/blob/master/plugins/dialogs/runtime/src/ceramic/DialogsFileFilter.hx">View source</a></div>

<div class="type-hierarchy"><strong>ceramic.DialogsFileFilter</strong> (Typedef)</div>

File type filter specification for native file dialogs.

Used to restrict the types of files shown in open/save dialogs,
making it easier for users to find relevant files. Each filter
represents a category of files with a human-readable name and
a list of associated file extensions.

Example usage:
```haxe
var imageFilter = {
    name: "Image Files",
    extensions: ["png", "jpg", "jpeg", "gif"]
};

Dialogs.openFile("Select Image", [imageFilter], function(path) {
    // Handle selected file
});
```

