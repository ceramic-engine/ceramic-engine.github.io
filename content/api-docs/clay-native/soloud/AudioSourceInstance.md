---
layout: api-docs
category: api-docs
subCategory: doc
menu: Soloud
title: AudioSourceInstance
target: Clay (Native)
permalink: api-docs/clay-native/soloud/AudioSourceInstance/
---

# AudioSourceInstance

<div class="view-source"><a href="https://github.com/jeremyfa/linc_soloud/blob/master/soloud/AudioSource.hx">View source</a></div>

<div class="type-hierarchy"><strong>soloud.AudioSourceInstance</strong> (extern class)</div>

## Static Members

<div class="signature field-method no-description" id="create"><code><span class="field-name">create</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="#" class="type-link">AudioSourceInstance</a></code><a class="header-anchor" href="#create"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

| Returns |
|---------|
| [AudioSourceInstance](/api-docs/clay-native/soloud/AudioSourceInstance/) |

## Instance Members

<div class="signature field-var has-description" id="mPlayIndex"><code><span class="field-name">mPlayIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mPlayIndex"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Play index; used to identify instances from handles

<hr class="field-separator" />

<div class="signature field-var has-description" id="mLoopCount"><code><span class="field-name">mLoopCount</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mLoopCount"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Loop count

<hr class="field-separator" />

<div class="signature field-var has-description" id="mFlags"><code><span class="field-name">mFlags</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mFlags"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Flags; see AudioSourceInstance::FLAGS

<hr class="field-separator" />

<div class="signature field-var has-description" id="mPan"><code><span class="field-name">mPan</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mPan"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Pan value, for getPan()

<hr class="field-separator" />

<div class="signature field-var has-description" id="mChannelVolume"><code><span class="field-name">mChannelVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mChannelVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Volume for each channel (panning)

<hr class="field-separator" />

<div class="signature field-var has-description" id="mSetVolume"><code><span class="field-name">mSetVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mSetVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Set volume

<hr class="field-separator" />

<div class="signature field-var has-description" id="mOverallVolume"><code><span class="field-name">mOverallVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mOverallVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Overall volume overall = set * 3d

<hr class="field-separator" />

<div class="signature field-var has-description" id="mBaseSamplerate"><code><span class="field-name">mBaseSamplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mBaseSamplerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Base samplerate; samplerate = base samplerate * relative play speed

<hr class="field-separator" />

<div class="signature field-var has-description" id="mSamplerate"><code><span class="field-name">mSamplerate</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mSamplerate"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Samplerate; samplerate = base samplerate * relative play speed

<hr class="field-separator" />

<div class="signature field-var has-description" id="mChannels"><code><span class="field-name">mChannels</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mChannels"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of channels this audio source produces

<hr class="field-separator" />

<div class="signature field-var has-description" id="mSetRelativePlaySpeed"><code><span class="field-name">mSetRelativePlaySpeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mSetRelativePlaySpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Relative play speed; samplerate = base samplerate * relative play speed

<hr class="field-separator" />

<div class="signature field-var has-description" id="mOverallRelativePlaySpeed"><code><span class="field-name">mOverallRelativePlaySpeed</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#mOverallRelativePlaySpeed"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Overall relative plays peed; overall = set * 3d

<hr class="field-separator" />

<div class="signature field-var has-description" id="mStreamTime"><code><span class="field-name">mStreamTime</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mStreamTime"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

How long this stream has played, in seconds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mStreamPosition"><code><span class="field-name">mStreamPosition</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mStreamPosition"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Position of this stream, in seconds.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mPanFader"><code><span class="field-name">mPanFader</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Fader/" class="type-link">Fader</a></code><a class="header-anchor" href="#mPanFader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fader for the audio panning

<hr class="field-separator" />

<div class="signature field-var has-description" id="mVolumeFader"><code><span class="field-name">mVolumeFader</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Fader/" class="type-link">Fader</a></code><a class="header-anchor" href="#mVolumeFader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fader for the audio volume

<hr class="field-separator" />

<div class="signature field-var has-description" id="mRelativePlaySpeedFader"><code><span class="field-name">mRelativePlaySpeedFader</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Fader/" class="type-link">Fader</a></code><a class="header-anchor" href="#mRelativePlaySpeedFader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fader for the relative play speed

<hr class="field-separator" />

<div class="signature field-var has-description" id="mPauseScheduler"><code><span class="field-name">mPauseScheduler</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Fader/" class="type-link">Fader</a></code><a class="header-anchor" href="#mPauseScheduler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fader used to schedule pausing of the stream

<hr class="field-separator" />

<div class="signature field-var has-description" id="mStopScheduler"><code><span class="field-name">mStopScheduler</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Fader/" class="type-link">Fader</a></code><a class="header-anchor" href="#mStopScheduler"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Fader used to schedule stopping of the stream

<hr class="field-separator" />

<div class="signature field-var has-description" id="mActiveFader"><code><span class="field-name">mActiveFader</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a></code><a class="header-anchor" href="#mActiveFader"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Affected by some fader

<hr class="field-separator" />

<div class="signature field-var has-description" id="mCurrentChannelVolume"><code><span class="field-name">mCurrentChannelVolume</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mCurrentChannelVolume"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Current channel volumes, used to ramp the volume changes to avoid clicks

<hr class="field-separator" />

<div class="signature field-var has-description" id="mAudioSourceID"><code><span class="field-name">mAudioSourceID</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mAudioSourceID"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

ID of the sound source that generated this instance

<hr class="field-separator" />

<div class="signature field-var has-description" id="mBusHandle"><code><span class="field-name">mBusHandle</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mBusHandle"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Handle of the bus this audio instance is playing on. 0 for root.

<hr class="field-separator" />

<div class="signature field-var has-description" id="mFilter"><code><span class="field-name">mFilter</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/soloud/FilterInstance/" class="type-link">FilterInstance</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mFilter"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Filter pointer

<hr class="field-separator" />

<div class="signature field-var has-description" id="mResampleData"><code><span class="field-name">mResampleData</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/soloud/AlignedFloatBuffer/" class="type-link">AlignedFloatBuffer</a><span class="operator">&gt;</span></code><a class="header-anchor" href="#mResampleData"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Buffers for the resampler

<hr class="field-separator" />

<div class="signature field-var has-description" id="mSrcOffset"><code><span class="field-name">mSrcOffset</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mSrcOffset"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Sub-sample playhead; 16.16 fixed point

<hr class="field-separator" />

<div class="signature field-var has-description" id="mLeftoverSamples"><code><span class="field-name">mLeftoverSamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mLeftoverSamples"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Samples left over from earlier pass

<hr class="field-separator" />

<div class="signature field-var has-description" id="mDelaySamples"><code><span class="field-name">mDelaySamples</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#mDelaySamples"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Number of samples to delay streaming

<hr class="field-separator" />

<div class="signature field-var has-description" id="mLoopPoint"><code><span class="field-name">mLoopPoint</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a></code><a class="header-anchor" href="#mLoopPoint"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

When looping, start playing from this time

<hr class="field-separator" />

<div class="signature field-method no-description" id="destroy"><code><span class="field-name">destroy</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#destroy"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

<hr class="field-separator" />

<div class="signature field-method has-description" id="init"><code><span class="field-name">init</span><span class="parenthesis">(</span><span class="arg-name">aSource</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/AudioSource/" class="type-link">AudioSource</a><span class="operator">,</span> <span class="arg-name">aPlayIndex</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Int32/" class="type-link">cpp.Int32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Void/" class="type-link">Void</a></code><a class="header-anchor" href="#init"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Initialize instance. Mostly internal use.

| Name | Type |
|------|------|
| `aSource` | [AudioSource](/api-docs/clay-native/soloud/AudioSource/) |
| `aPlayIndex` | [cpp.Int32](/api-docs/clay-native/cpp/Int32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getAudio"><code><span class="field-name">getAudio</span><span class="parenthesis">(</span><span class="arg-name">aBuffer</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">aSamplesToRead</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="operator">,</span> <span class="arg-name">aBufferSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a></code><a class="header-anchor" href="#getAudio"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get N samples from the stream to the buffer. Report samples written.

| Name | Type |
|------|------|
| `aBuffer` | [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `aSamplesToRead` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |
| `aBufferSize` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="hasEnded"><code><span class="field-name">hasEnded</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/Bool/" class="type-link">Bool</a></code><a class="header-anchor" href="#hasEnded"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Has the stream ended?
| Returns |
|---------|
| [Bool](/api-docs/clay-native/Bool/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="seek"><code><span class="field-name">seek</span><span class="parenthesis">(</span><span class="arg-name">aSeconds</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Time/" class="type-link">Time</a><span class="operator">,</span> <span class="arg-name">mScratch</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Pointer/" class="type-link">cpp.Pointer</a><span class="operator">&lt;</span><a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a><span class="operator">&gt;</span><span class="operator">,</span> <span class="arg-name">mScratchSize</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#seek"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Seek to certain place in the stream. Base implementation is generic "tape" seek (and slow).

| Name | Type |
|------|------|
| `aSeconds` | [Time](/api-docs/clay-native/soloud/Time/) |
| `mScratch` | [cpp.Pointer](/api-docs/clay-native/cpp/Pointer/)<[cpp.Float32](/api-docs/clay-native/cpp/Float32/)> |
| `mScratchSize` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="rewind"><code><span class="field-name">rewind</span><span class="parenthesis">(</span><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/soloud/Result/" class="type-link">Result</a></code><a class="header-anchor" href="#rewind"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Rewind stream. Base implementation returns NOT_IMPLEMENTED, meaning it can't rewind.
| Returns |
|---------|
| [Result](/api-docs/clay-native/soloud/Result/) |

<hr class="field-separator" />

<div class="signature field-method has-description" id="getInfo"><code><span class="field-name">getInfo</span><span class="parenthesis">(</span><span class="arg-name">aInfoKey</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/UInt32/" class="type-link">cpp.UInt32</a><span class="parenthesis">)</span><span class="operator">:</span> <a href="/api-docs/clay-native/cpp/Float32/" class="type-link">cpp.Float32</a></code><a class="header-anchor" href="#getInfo"><span aria-hidden="true" class="header-anchor__symbol">#</span></a></div>

Get information. Returns 0 by default.

| Name | Type |
|------|------|
| `aInfoKey` | [cpp.UInt32](/api-docs/clay-native/cpp/UInt32/) |

| Returns |
|---------|
| [cpp.Float32](/api-docs/clay-native/cpp/Float32/) |

