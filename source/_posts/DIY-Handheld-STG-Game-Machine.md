---
title: DIY Handheld STG Game Machine
date: 2024-12-14 21:13:25
tags:
    - EE
    - DIY
photos:
    - /2024/12/14/DIY-Handheld-STG-Game-Machine/1.png
---

I'm obsessed with the Touhou STG Games made by ZUN. Basically, it is a kind of game that you need to maneuver the player's position to dodge the overwhelming bullets coming in front of you.

One day I popped up an idea that if I can made a somehow similar game machine myself. To make this thought come into reality, I started to learn STM32 programming. Basically, I found someo greate video tutorials on YouTube and Bilibili, and I wrote the code as I was watching the videos.

For the peripherals. I used one joystick whose x-y can be detected using ADC on the STM32 chip, one 320x240 LCD screen (for the SPI communication, I used DMA to accelerate the refreshing of the screen).

The program uses FreeRTOS to run several threads at the same time. I designed a few separate functions like `updatePlayerPosition`, `generateBullets`, `collisionDetect`, `render`, and `Tone`. These functions run simultaneously.

To be honest, I felt language C was really hard. It took me about two weeks to get all functions set.

Recently (March 9, 2025), I updated the the `display.c`, in which I changed the rendering function for the bullutes to avoid splashing. That is to change the rendering process from *updating the dots one by one* to *setting one region and transfering pixel data buffer at one time*.

{% asset_img 1.png %}

<video controls>
    <source src="/2024/12/14/DIY-Handheld-STG-Game-Machine/demo.mp4" type="video/mp4">
</video>