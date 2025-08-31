---
title: FPGA AM broadcast transmitter
date: 2025-08-29 11:01:18
tags:
    - EE
    - DIY
    - FPGA
photos:
    - /2025/08/29/FPGA-AM-broadcast-transmitter/fpgaradio.jpg
---

I made an AM broadcast transmitter with an Intel Cyclone IV FPGA. This is my first project in FPGA.

The principles are simple: Using PWM to generate the modulated signal and adding an RC (or LC, in my case RC works) low-pass filter to the output signal.

I used two IP cores: cordic and pll, one for cosine wave generation and one for a high-frequency clock signal.

I used STM32 as a parallel ADC to do the audio input.

Code: https://github.com/Arch-Jason/fpgaradio

<video controls>
    <source src="/2025/08/29/FPGA-AM-broadcast-transmitter/fpgaradio.mp4" type="video/mp4">
</video>