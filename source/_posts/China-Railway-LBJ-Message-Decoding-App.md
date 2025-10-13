---
title: China Railway LBJ Message Decoding App
date: 2025-10-13 17:07:39
tags:
    - EE
    - CS
    - DIY
    - HAM
---

[中文用户请直接看教程 ](#How-to-use)

## Background

I’ve been a railway fan for a long time, and I know there’s one signal transmitted by the LBJ device on the train at the frequency of 821.2375MHz. I’ve been trying to make some handy tools to decode the message for a long time, because I know there are some products that are really expensive for this purpose, which is obviously not worth purchasing.

## Technical Details

The signal is basically a BFSK modulated signal encoded with the POCSAG standard, which has a baud rate of 1200kHz and a bandwidth of 4.5kHz. Based on this, I tried to write some code to demodulate the signal. Here are the principles:

What we get from the SDR devices are two signals of I (in-phase) and Q (quadrature) channels, and they are downconverted. To get the BFSK modulated signal, we can use the first difference of the phase, as the frequency is the first derivative of the phase.

$$
\phi = 2\pi \int_{-\infty}^{+\infty} f(t) dt
$$

$$
\frac{d \phi}{dt} = 2\pi f(t)
$$

Thus, if we know the phase is decreasing, then we can figure out that the frequency is lower, vice versa (Note that we assume the frequency of 821.2375MHz is at 0Hz after down converting. That’s why there’s a negative frequency).

As we only know the I and Q, we can use a pretty neat method to calculate the first difference of the phase:

$$
\Delta \phi[n] = \phi[n] - \phi[n-1]
$$

Let’s combine I and Q into a complex number

$$
r[n] = I[n] + jQ[n]
$$

Then we do the following calculation

$$
r[n] \cdot r^*[n-1]
$$

The result of this calculation is actually a complex number representing the phase difference. Here’s why:

$$
r[n] \cdot r^*[n-1] = A e^{j\phi[n]} \cdot A e^{-j\phi[n-1]} = A^2 e^{j(\phi[n] - \phi[n-1])} = A^2 e^{j\Delta \phi[n]}
$$

After knowing the complex phase difference, it’s easy to use $\tan^{-1}$ to get the to get the $\Delta \phi$.

## What I did
Basically I copied all the code pieces related to pager demod in SDRangel, and I ported the code as a native C++ part to the Android application.

## How to use

Apps used:
https://github.com/signalwareltd/rtl_tcp_andro-
https://github.com/Arch-Jason/RailwayPagerDemod (written by me)

Here's the video:

<video controls>
    <source src="/2025/10/13/China-Railway-LBJ-Message-Decoding-App/tutorial.mp4" type="video/mp4">
</video>

<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
</script>
<script id="MathJax-script" async width="100"
  src="/2022/12/15/Copper-Artwork-Made-by-Electrolysis/tex-chtml.js">
</script>