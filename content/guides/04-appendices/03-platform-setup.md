---
layout: guides
category: guides
menu: Appendices
title: Platform Setup
permalink: guides/platform-setup/
---
# Platform Setup

Basic setup of Ceramic allows to build apps with the `web` target and run these through `electron`.

In order to build native apps (using `C++` target) and support additional platforms, specific setup is required.

## Mac

<p class="extra-info">Building for Mac can only be done from Mac<p>

* Install [Xcode from the Mac App Store](https://apps.apple.com/fr/app/xcode/id497799835?mt=12)

You should then be able to build a native Mac app when you select `Build/Run Mac` from _Visual Studio Code_.

## Windows

<p class="extra-info">Building for Windows can only be done from Windows<p>

* Install [Visual Studio Community](https://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx) with Visual C++ build tools (2019 version should be fine).

You should then be able to build a native Windows app when you select `Build/Run Windows` from _Visual Studio Code_.

## iOS

<p class="extra-info">Building for iOS can only be done from Mac<p>

* Install [Xcode from the Mac App Store](https://apps.apple.com/fr/app/xcode/id497799835?mt=12)
* Install [Cocoapods](https://cocoapods.org/)

You should then be able to build a native Windows app when you select `Build/Run iOS` from _Visual Studio Code_.

## Android

<p class="extra-info">Building for Android can be done from Mac, Linux and Windows<p>

* Install [Android Studio](https://developer.android.com/studio)
* Install [NDK r21e](https://github.com/android/ndk/wiki/Unsupported-Downloads#r21e) (other versions are not guaranteed to work so you should use this one).

HXCPP needs to know where your Android SDK and Android NDK are installed. To solve that, you need to add some info inside your `.hxcpp-config.xml` (that should be located inside your home directory. If not, you can create it).

<div class="codename">An example of Android config to put inside <code>.hxcpp-config.xml</code></div>

```xml
<xml>
  <section id="vars">
      <set name="SDK_ROOT" value="C:/Path/to/your/SDKs/" />
      <set name="ANDROID_SETUP" value="true" />
      <set name="ANDROID_SDK" value="C:/Path/to/your/Android/sdk" />
      <set name="ANDROID_NDK_ROOT" value="C:/Path/to/your/Android/NDK" />
      <set name="ANDROID_NDK_DIR" value="C:/Path/to/your/Android/NDK"  />
  </section>
</xml>
```

If you are on macOS Catalina or above, you may need to disable Gatekeeper to make the NDK binaries work:

```bash
sudo spctl --master-disable
```

## Linux

<p class="extra-info">Building for Linux can only be done from Linux<p>

Install `g++` if not installed already:

```bash
sudo apt-get install g++
```

Install SDL (on linux, ceramic app is linking to the SDL installed on your machine).

```bash
sudo apt-get install libsdl2-dev
```

<p class="extra-info">
Your SDL version should be equal or above <code>2.0.22</code>. On Ubuntu, you might need to add an additional repository like <code>ppa:savoury1/multimedia</code> as <a href="https://github.com/TerryCavanagh/VVVVVV/issues/618#issuecomment-968338212">explained here</a>, in order to get latest SDL version.
</p>

Install required dependencies:
### Debian

```bash
sudo apt-get install libasound2-dev libx11-dev libxext-dev libxi-dev libxrandr-dev libxinerama-dev libglfw3-dev libgl1-mesa-dev libglu1-mesa-dev libopenal-dev
```

### Fedora
```bash
sudo dnf install g++ glew-devel SDL2-devel
```

You should then be able to build a native Linux app when you select `Build/Run Linux` from _Visual Studio Code_.

## Unity

<p class="extra-info">Building for unity can be done from Mac and Windows. Linux is considered in a future release but not implemented yet.</p>

<p class="extra-info">If you have multiple versions of Unity installed on your machine, Ceramic will give priority to the most recent <code>2021.x</code> version because it is the current LTS. In general, you are encouraged to stick with Unity 2021 branch for now, until Unity 2022 becomes the next LTS and Ceramic export to that version is fully tested and functional.</p>

* [Download Unity Hub](https://unity3d.com/get-unity/download) and install Unity `2021.LTS`

You should then be able to export a Unity project when you select `Build/Run Unity` from _Visual Studio Code_.

You can specify an exact version of Unity to use in your project's `ceramic.yml`:

<div class="codename">ceramic.yml</div>

```yaml
app:

    unity:
        version: 2021.3.14f1
```

If you installed Unity on a non-standard path, you can also specify the path to your Unity installation:

<div class="codename">ceramic.yml</div>

```yaml
app:

    unity:
        path: 'C:/Path/To/Your/Unity/Editor/'
```
